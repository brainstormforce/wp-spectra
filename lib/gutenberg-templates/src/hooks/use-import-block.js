import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_KEY } from '../store';
import { block_api_request } from '../utils/rest-api';
import { PHP } from '../utils/serialize';
import { savePostIfSpectraInactive } from '../utils/functions';
import { getSpectraStatus, manipulateAttributeBlockId } from '../utils/helpers';
import { activate_plugin, install_plugin } from '../utils/plugins';

const { post } = wp.ajax;
const { parse } = wp.blocks;

const useImportBlock = ( closePopupAfterImport = false ) => {
	const { index } = wp.data
		.select( 'core/block-editor' )
		.getBlockInsertionPoint();
	const { insertBlocks } = wp.data.dispatch( 'core/block-editor' );
	const {
		importInProgress,
		importItemInfo,
		activePagePaletteSlug,
		activeBlockPaletteSlug,
		currentScreen,
		disableAI,
	} = useSelect( ( select ) => {
		const {
			getImportInProgress,
			getAIStepData,
			getImportItemInfo,
			getCurrentScreen,
			getActiveBlockPaletteSlug,
			getActivePagePaletteSlug,
			getDisableAi,
		} = select( STORE_KEY );
		return {
			importInProgress: getImportInProgress(),
			stepData: getAIStepData(),
			importItemInfo: getImportItemInfo(),
			activePagePaletteSlug: getActivePagePaletteSlug(),
			currentScreen: getCurrentScreen(),
			activeBlockPaletteSlug: getActiveBlockPaletteSlug(),
			disableAI: getDisableAi(),
		};
	}, [] );
	const {
			setImportInProgress,
			setTogglePopup: onSetTogglePopup,
			setImportItemInfo,
		} = useDispatch( STORE_KEY ),
		spectraPluginStatus = getSpectraStatus();

	let [ blockInfo ] = useState( importItemInfo );
	let AllRequiredPlugins = [];

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

	const install_spectra = async () => {
		try {
			await install_plugin( {
				slug: 'ultimate-addons-for-gutenberg',
				init: 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php',
				name: 'Spectra',
			} );
			await activate_spectra();
		} catch ( error ) {
			setImportInProgress( false );
			triggerEditorNotice(
				'error',
				'Spectra installation failed!',
			);
		}
	};

	const activate_spectra = async () => {
		try {
			await activate_plugin( {
				slug: 'ultimate-addons-for-gutenberg',
				init: 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php',
				name: 'Spectra',
			} );
		} catch ( error ) {
			setImportInProgress( false );
			triggerEditorNotice(
				'error',
				'Spectra activation failed!',
			);
		}
	};

	const install_wpforms = () => {
		install_plugin( {
			slug: 'wpforms-lite',
			init: 'wpforms-lite/wpforms.php',
			name: 'WPForms Lite',
		} )
			.then( () => {
				activate_wpforms();
			} )
			.catch( () => {
				setImportInProgress( false );
				triggerEditorNotice(
					'error',
					'WPForms installation failed!',
				);
			} );
	};

	const activate_wpforms = () => {
		activate_plugin( {
			slug: 'wpforms-lite',
			init: 'wpforms-lite/wpforms.php',
			name: 'WPForms Lite',
		} )
			.then( () => {
				start_import_process();
			} )
			.catch( () => {
				setImportInProgress( false );
				triggerEditorNotice(
					'error',
					'WPForms activation failed!',
				);
			} );
	};

	const import_wpforms = ( runOnBlockImport ) => {
		post( {
			action: 'ast_block_templates_import_wpforms',
			id: blockInfo.id,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} )
			.done( () => {
				// Import block.
				import_block( runOnBlockImport );
			} )
			.fail( () => {
				setImportInProgress( false );
				triggerEditorNotice(
					'error',
					'WPForms import failed!',
				);
			} );
	};

	const import_block = ( runOnBlockImport, { type, colorPalette } ) => {
		const content = blockInfo.original_content;
		const blockType = ( !! type && type ) || ( 'all-blocks-grid' === currentScreen ? 'block' : 'page' );
		const category =
			'block' === blockType
				? blockInfo[ 'blocks-category' ][ 0 ]
				: blockInfo[ 'pages-category' ][ 0 ];
		const selectedColorPalette = ( !! colorPalette && colorPalette ) || ( 'block' === blockType ? activeBlockPaletteSlug : activePagePaletteSlug );
		post( {
			action: 'ast_block_templates_import_block',
			content,
			category,
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

				insertBlocks( manipulatedBlocks, index, '', false );

				if ( closePopupAfterImport ) {
					onSetTogglePopup();
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
				triggerEditorNotice(
					'error',
					'Failed to import the block. Please try again later or contact support for assistance.'
				);
				setImportInProgress( false );
			} );
	};

	const start_import_process = ( runOnBlockImport, { type, colorPalette } ) => {
		// Import WP Forms.
		// 1. import wp forms
		// 2. import block

		const wpforms_url =
			blockInfo?.[ 'post-meta' ]?.[ 'astra-site-wpforms-path' ] || '';
		if ( wpforms_url ) {
			import_wpforms( runOnBlockImport );
		} else {
			import_block( runOnBlockImport, { type, colorPalette } );
		}
	};

	const initiateImportProcess = async ( { blockId, type, colorPalette }, runOnBlockImport ) => {
		if ( importInProgress ) {
			return;
		}
		setImportInProgress( true );

		if (
			spectraPluginStatus.notInstalled
		) {
			await install_spectra();
		} else if (
			spectraPluginStatus.inactive
		) {
			await activate_spectra();
		}

		block_api_request( blockId, 'astra-blocks' )
			.then( ( data ) => {
				setImportItemInfo( data );

				/**
				 * @todo Set state and use callback function.
				 * Avoid `blockInfo = data` and try to use `setBlockInfo(data)`
				 */
				blockInfo = data;

				AllRequiredPlugins = data?.[ 'post-meta' ]?.[
					'astra-blocks-required-plugins'
				]
					? PHP.parse(
						data[ 'post-meta' ][ 'astra-blocks-required-plugins' ]
					  )
					: [];

				if ( AllRequiredPlugins.length ) {
					if (
						'not-installed' ===
						ast_block_template_vars.wpforms_status
					) {
						install_wpforms();
					} else if (
						'inactive' === ast_block_template_vars.wpforms_status
					) {
						activate_wpforms();
					} else {
						start_import_process( runOnBlockImport, { type, colorPalette } );
					}
				} else {
					start_import_process( runOnBlockImport, { type, colorPalette } );
				}
			} )
			.catch( () => {
				triggerEditorNotice(
					'error',
					'Failed to import the block. Please try again later or contact support for assistance.'
				);
			} );
	};

	return {
		initiateImportProcess,
	};
};

export default useImportBlock;
