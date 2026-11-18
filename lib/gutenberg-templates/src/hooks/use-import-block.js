import { renderToString, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';
import { STORE_KEY } from '../store';
import { block_api_request } from '../utils/rest-api';
import { PHP } from '../utils/serialize';
import { savePostIfSpectraInactive } from '../utils/functions';
import { manipulateAttributeBlockId, findInsertTarget } from '../utils/helpers';
import pluginInstallPopup from '../components/reusable/plugin-install-popup/plugin-install-popup';
import { collectRequiredPlugins } from '../utils/plugin-requirements';

const { post } = wp.ajax;
const { parse } = wp.blocks;

const useImportBlock = ( closePopupAfterImport = false ) => {
	const { index } = wp.data
		.select( 'core/block-editor' )
		.getBlockInsertionPoint();
	const { insertBlocks } = wp.data.dispatch( 'core/block-editor' );
	const { getSelectedBlockClientId, canInsertBlockType, getBlockRootClientId } = wp.data.select( 'core/block-editor' );
	const {
		importInProgress,
		importItemInfo,
		activePagePaletteSlug,
		activeBlockPaletteSlug,
		currentScreen,
		disableAI,
		togglePopup,
	} = useSelect( ( select ) => {
		const {
			getImportInProgress,
			getAIStepData,
			getImportItemInfo,
			getCurrentScreen,
			getActiveBlockPaletteSlug,
			getActivePagePaletteSlug,
			getDisableAi,
			getTogglePopup,
		} = select( STORE_KEY );
		return {
			importInProgress: getImportInProgress(),
			stepData: getAIStepData(),
			importItemInfo: getImportItemInfo(),
			activePagePaletteSlug: getActivePagePaletteSlug(),
			currentScreen: getCurrentScreen(),
			activeBlockPaletteSlug: getActiveBlockPaletteSlug(),
			disableAI: getDisableAi(),
			togglePopup: getTogglePopup(),
		};
	}, [] );
	const {
			setImportInProgress,
			setTogglePopup,
			setImportItemInfo,
			setNotice,
		} = useDispatch( STORE_KEY );

	let [ blockInfo ] = useState( importItemInfo );

	const errorNotice = ( message ) => {
		const supportLink = (
			<a href="https://wpastra.com/contact" target="_blank" rel="noreferrer">{ __( 'support team', 'ast-block-templates' ) }</a>
		);
		const supportMessage = ( `
			<span className='block'>
				${
			sprintf(
				// translators: %1$s: support link.
				__(
					'If this error continues please contact our %1$s.',
					'ast-block-templates'
				),
				renderToString( supportLink )
			)
			}
			</span>
		` );
		const errorMessage = (
			<span className="block">
				{ message }
			</span>
		);

		setNotice( {
			type: 'import-error',
			title: 'Oops, something went wrong!',
			message: renderToString( errorMessage ) + supportMessage,
		} );
	};

	const triggerEditorNotice = ( type = 'info', message = '', variant = 'default' ) => {
		wp?.data.dispatch( 'core/notices' ).createNotice(
			type, // Can be one of: success, info, warning, error.
			message, // Text string to display.
			{
				isDismissible: true, // Whether the user can dismiss the notice.
				// Any actions the user can perform.
				type: variant,
			}
		);
	};

	const import_form = ( formType, runOnBlockImport, opts = {} ) => {
		post( {
			action: `ast_block_templates_import_${ formType }`,
			id: blockInfo?.id,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} )
			.done( () => {
				// Import block once the form has been imported.
				import_block( runOnBlockImport, opts );
			} )
			.fail( () => {
				throw new Error(
					__(
						'Failed to import the form. Please try again later.',
						'ast-block-templates'
					),
					{
						cause: 'customError',
					}
				);
			} );
	};

	const import_block = ( runOnBlockImport, { type, colorPalette } = {} ) => {
		const content = blockInfo.original_content;
		const blockType = ( !! type && type ) || ( 'all-blocks-grid' === currentScreen ? 'block' : 'page' );
		const category =
			'block' === blockType
				? blockInfo[ 'blocks-category' ][ 0 ]
				: blockInfo[ 'pages-category' ][ 0 ];
		const selectedColorPalette = ( !! colorPalette && colorPalette ) || ( 'block' === blockType ? activeBlockPaletteSlug : activePagePaletteSlug );

		const id = blockInfo?.id;

		post( {
			action: 'ast_block_templates_import_block',
			content,
			category,
			id,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
			style: selectedColorPalette,
			disableAI,
			block_type: blockType,
		} )
			.done( ( contentResponse ) => {
				setImportInProgress( false );

				// Manipulate attribute block id.
				const manipulatedBlocks = manipulateAttributeBlockId(
					parse( contentResponse )
				);

				// Importing into the selected block.
				const selectedBlockClientId = getSelectedBlockClientId() ?? '';
				const insertTarget = findInsertTarget( manipulatedBlocks, selectedBlockClientId, canInsertBlockType, getBlockRootClientId );

				if ( insertTarget === false ) {
					return;
				}

				insertBlocks( manipulatedBlocks, index, insertTarget, false );

				if ( closePopupAfterImport ) {
					setTogglePopup();
				}

				document
					.getElementById( 'ast-block-templates-modal-wrap' )
					.classList.remove( 'open' );
				document.body.classList.remove(
					'ast-block-templates-modal-open'
				);

				/* On Block import callback */
				if ( typeof runOnBlockImport === 'function' ) {
					runOnBlockImport( contentResponse, index );
				}

				triggerEditorNotice(
					'success',
					'The block has been imported successfully.'
				);

				if ( ast_block_template_vars.spectra_status !== 'active' ) {
					savePostIfSpectraInactive();
				}
			} )
			.fail( () => {
				throw new Error(
					__(
						'Failed to import the block. Please try again later.',
						'ast-block-templates'
					),
					{
						cause: 'customError',
					}
				);
			} );
	};

	const start_import_process = ( runOnBlockImport, opts = {} ) => {
		// Import the pattern-specific form (if any) before the block itself.
		const wpformsUrl =
			blockInfo?.[ 'post-meta' ]?.[ 'astra-site-wpforms-path' ] || '';
		const sureformsUrl =
			blockInfo?.[ 'post-meta' ]?.[ 'astra-site-sureforms-path' ] || '';
		const raw =
			blockInfo?.[ 'post-meta' ]?.[ 'astra-blocks-required-plugins' ];
		const blockPlugins = raw ? PHP.parse( raw ) : [];

		if (
			wpformsUrl &&
			blockPlugins?.find( ( p ) => p?.slug === 'wpforms-lite' )
		) {
			import_form( 'wpforms', runOnBlockImport, opts );
		} else if (
			sureformsUrl &&
			blockPlugins?.find( ( p ) => p?.slug === 'sureforms' )
		) {
			import_form( 'sureforms', runOnBlockImport, opts );
		} else {
			import_block( runOnBlockImport, opts );
		}
	};

	const initiateImportProcess = async ( { blockId, type, colorPalette, spectraVer }, runOnBlockImport ) => {
		if ( importInProgress ) {
			return;
		}
		setImportInProgress( true );

		if ( ! togglePopup ) {
			setTogglePopup();
		}

		try {
			const data = await block_api_request( blockId, 'astra-blocks' );
			setImportItemInfo( data );
			blockInfo = data;

			// Gather Spectra + pattern-specific form plugins not active yet.
			const requiredPluginsList = collectRequiredPlugins(
				{ 'spectra-ver': spectraVer },
				data
			);

			if ( requiredPluginsList.length ) {
				// Consent / installation popup — import only continues on success.
				const result = await pluginInstallPopup.show( {
					plugins: requiredPluginsList,
				} );
				if ( ! result?.success ) {
					setImportInProgress( false );
					return;
				}
			}

			await start_import_process( runOnBlockImport, { type, colorPalette } );
		} catch ( error ) {
			if ( error?.cause === 'customError' ) {
				errorNotice( error.message );
				return;
			}
			triggerEditorNotice(
				'error',
				'Failed to import the block. Please try again later or contact support for assistance.'
			);
			errorNotice( __( 'Failed to fetch block data. Please try again later.', 'ast-block-templates' ) );
		}
	};

	return {
		initiateImportProcess,
	};
};

export default useImportBlock;
