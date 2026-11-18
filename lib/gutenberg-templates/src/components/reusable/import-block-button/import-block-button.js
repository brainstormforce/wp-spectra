import { compose } from '@wordpress/compose';
import {
	useSelect,
	withSelect,
	withDispatch,
	useDispatch,
} from '@wordpress/data';
import {
	useState,
	memo,
	isValidElement,
	cloneElement,
} from '@wordpress/element';
import Button from '../button/button';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import { PHP } from '../../../utils/serialize';
import { block_api_request } from '../../../utils/rest-api';
import { savePostIfSpectraInactive } from '../../../utils/functions';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
	callAll,
	classNames,
	getSpectraStatus,
	manipulateAttributeBlockId,
	findInsertTarget,
} from '../../../utils/helpers';
import { toast } from 'react-toastify';
import toaster from '../toaster';
import pluginInstallPopup from '../plugin-install-popup/plugin-install-popup';
import { collectRequiredPlugins } from '../../../utils/plugin-requirements';
import { STORE_KEY } from '../../../store/index';
import { __, sprintf } from '@wordpress/i18n';

const { post } = wp.ajax;
const { parse } = wp.blocks;

const ImportBlockButton = ( {
	onImportFail,
	setImportItemInfo,
	importItemInfo,
	title,
	btnClass,
	insertBlocks,
	getSelectedBlockClientId,
	canInsertBlockType,
	getBlockRootClientId,
	onSetTogglePopup,
	item,
	onClick,
	onBlockImport,
	activeBlockPaletteSlug,
	activePagePaletteSlug,
	currentScreen,
	disableAI,
	importing = false,
	adaptiveMode,
	showIcon = true,
	children,
} ) => {
	let [ blockInfo ] = useState( importItemInfo );
	const buttonClass = btnClass ? btnClass : '';
	const buttonTitle = title ? title : __( 'Import', 'ast-block-templates' );

	const { index } = wp.data
		.select( 'core/block-editor' )
		.getBlockInsertionPoint();
	const {
		importInProgress,
		syncLibNotice,
	} = useSelect( ( select ) => {
		const { getImportInProgress, getNotice } = select( STORE_KEY );
		return {
			importInProgress: getImportInProgress(),
			syncLibNotice: getNotice(),
		};
	}, [] );

	const { setImportInProgress } = useDispatch( STORE_KEY );
	const disableImport = syncLibNotice?.type === 'info',
		spectraPluginStatus = getSpectraStatus();

	const importNotice = ( noticeTitle, noticeMessage, noticeType ) => {
		toast(
			toaster( {
				title: noticeTitle,
				message: noticeMessage,
			} ),
			toaster.getOptions( { type: noticeType } )
		);
	};

	const import_forms = ( formType, args = {} ) => {
		post( {
			action: `ast_block_templates_import_${ formType }`,
			id: blockInfo?.id,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} )
			.done( () => {
				// Import block.
				import_block( args );
			} )
			.fail( ( error ) => {
				setImportInProgress( false );
				importNotice(
					__( 'Import failed!', 'ast-block-templates' ),
					sprintf(
						// translators: 1. Form Name, 2. Error message.
						__( '%1$s Error: %2$s!', 'ast-block-templates' ),
						formType === 'wpforms' ? 'WPForms' : 'SureForms',
						error?.message?.error || error?.message || error
					),
					'error'
				);
			} );
	};

	const import_block = ( { pageRefresh = false } ) => {
		const content = blockInfo.original_content;
		const blockType =
			'all-blocks-grid' === currentScreen ? 'block' : 'page';
		const category =
			'block' === blockType
				? blockInfo[ 'blocks-category' ][ 0 ]
				: blockInfo[ 'pages-category' ][ 0 ];
		const id = blockInfo?.id;

		post( {
			action: 'ast_block_templates_import_block',
			content,
			category,
			id,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
			style:
				'all-blocks-grid' === currentScreen
					? activeBlockPaletteSlug
					: activePagePaletteSlug,
			disableAI,
			block_type: blockType,
			adaptive_mode: adaptiveMode,
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

				scrollBlockToView( manipulatedBlocks[ 0 ].clientId );

				onSetTogglePopup();
				document
					.getElementById( 'ast-block-templates-modal-wrap' )
					.classList.remove( 'open' );
				document.body.classList.remove(
					'ast-block-templates-modal-open'
				);

				// Reload only when a plugin was just installed/activated
				// (pageRefresh) or when neither the UAGB nor the standalone
				// Spectra Blocks plugin is active.
				const isSpectraActive =
					spectraPluginStatus.active ||
					'active' ===
						ast_block_template_vars.spectra_blocks_status;
				if ( pageRefresh || ! isSpectraActive ) {
					savePostIfSpectraInactive();
				}

				// On block import callback.
				if ( 'function' === typeof onBlockImport ) {
					onBlockImport( contentResponse, index );
				}
			} )
			.fail( () => {
				setImportInProgress( false );
				onImportFail();
				importNotice(
					'Import failed!',
					'Failed to import the block. Please try again later or contact support for assistance.',
					'error-import'
				);
			} );
	};

	const scrollBlockToView = ( clientId ) => {
		if ( ! clientId ) {
			return;
		}

		setTimeout( () => {
			const currentDocument = getCurrentDocument();
			const getFirstImpotedBlock = 'block-' + clientId;
			const selectedBlockElementToScroll =
				currentDocument.getElementById( getFirstImpotedBlock );

			if ( selectedBlockElementToScroll ) {
				selectedBlockElementToScroll.scrollIntoView( {
					behavior: 'smooth',
					block: 'center',
					inline: 'center',
				} );
			}
		}, 2500 );
	};

	const getCurrentDocument = () => {
		const tabletPreview =
			document.getElementsByClassName( 'is-tablet-preview' );
		const mobilePreview =
			document.getElementsByClassName( 'is-mobile-preview' );
		if ( 0 !== tabletPreview.length || 0 !== mobilePreview.length ) {
			const preview = tabletPreview[ 0 ] || mobilePreview[ 0 ];

			let iframe = false;

			if ( preview ) {
				iframe = preview.getElementsByTagName( 'iframe' )[ 0 ];
			}

			const iframeDocument =
				iframe?.contentWindow.document || iframe?.contentDocument;
			if ( iframeDocument ) {
				return iframeDocument;
			}
		}

		return document;
	};

	const start_import_process = ( args = {} ) => {
		// Import WP Forms.
		// 1. import wp forms or sure forms if exist
		// 2. import block

		const wpformsUrl =
			blockInfo?.[ 'post-meta' ]?.[ 'astra-site-wpforms-path' ] || '';
		const sureformsUrl =
			blockInfo?.[ 'post-meta' ]?.[ 'astra-site-sureforms-path' ] || '';

		const unserializedBlockPlugins = blockInfo?.[ 'post-meta' ]?.[
			'astra-blocks-required-plugins'
		];
		const blockPlugins = unserializedBlockPlugins ? PHP.parse( unserializedBlockPlugins ) : [];

		if ( wpformsUrl && blockPlugins?.find( ( plugin ) => plugin?.slug === 'wpforms-lite' ) ) {
			import_forms( 'wpforms', args );
		} else if ( sureformsUrl && blockPlugins?.find( ( plugin ) => plugin?.slug === 'sureforms' ) ) {
			import_forms( 'sureforms', args );
		} else {
			import_block( args );
		}
	};

	const handleBlockImport = async ( event ) => {
		if ( importInProgress || disableImport ) {
			return;
		}

		if ( 'function' === typeof onClick ) {
			const result = onClick( event );
			// If onClick returns false, stop the import process
			if ( result === false ) {
				return;
			}
		}

		setImportInProgress( true );

		block_api_request( item.ID, 'astra-blocks' )
			.then( async ( data ) => {
				setImportItemInfo( data );

				/**
				 * @todo Set state and use callback function.
				 * Avoid `blockInfo = data` and try to use `setBlockInfo(data)`
				 */
				// setBlockInfo(data);
				blockInfo = data;

				// Gather every plugin (Spectra + pattern-specific forms) the
				// pattern needs but the site does not have active yet.
				const requiredPluginsList = collectRequiredPlugins( item, data );

				if ( requiredPluginsList.length ) {
					// Show the consent / installation popup. Importing only
					// continues after the user-approved install completes.
					const result = await pluginInstallPopup.show( {
						plugins: requiredPluginsList,
					} );

					if ( ! result?.success ) {
						setImportInProgress( false );
						onImportFail();
						return;
					}

					// Save + reload after import so the newly registered blocks
					// render in the editor.
					start_import_process( { pageRefresh: true } );
				} else {
					start_import_process();
				}
			} )
			.catch( ( err ) => {
				importNotice(
					__( 'Import failed!', 'ast-block-templates' ),
					err?.message ||
						__(
							'Failed to import the block. Please try again later or contact support for assistance.',
							'ast-block-templates'
						),
					'error-import'
				);
				setImportInProgress( false );
				onImportFail();
			} );
	};

	const renderButton = () => {
		if ( children && typeof children === 'function' ) {
			return children( {
				onClick:
					handleBlockImport,
				importInProgress,
				disableImport,
			} );
		}

		if (
			children &&
			typeof children === 'object' &&
			isValidElement( children )
		) {
			return cloneElement( children, {
				...( children?.props ?? {} ),
				importInProgress,
				disableImport,
				onClick: callAll(
					children?.props?.onClick,
					handleBlockImport
				),
			} );
		}

		return (
			<Button
				className={ classNames(
					'min-w-fit h-7 hover:shadow-small sp-text-sm px-3',
					buttonClass,
					( ( importInProgress && ! importing ) || disableImport ) &&
						'opacity-50 cursor-not-allowed'
				) }
				type="button"
				variant="primary"
				onClick={
					handleBlockImport
				}
				isSmall
				hasPrefixIcon={ ! importing && showIcon }
			>
				{ importing ? (
					<LoadingSpinner className="size-4 !shrink-0" />
				) : (
					<>
						<PlusIcon className="size-4 !shrink-0 inline sm:hidden" />
						<span className="truncate hidden sm:inline">
							{ buttonTitle }
						</span>
					</>
				) }
			</Button>
		);
	};

	return renderButton();
};

export default compose(
	withSelect( ( select ) => {
		const {
			getImportItemInfo,
			getCurrentScreen,
			getSitePreview,
			getActiveBlockPaletteSlug,
			getActivePagePaletteSlug,
			getDisableAi,
			getAdaptiveMode,
		} = select( 'ast-block-templates' );
		return {
			importItemInfo: getImportItemInfo(),
			sitePreview: getSitePreview(),
			currentScreen: getCurrentScreen(),
			activeBlockPaletteSlug: getActiveBlockPaletteSlug(),
			activePagePaletteSlug: getActivePagePaletteSlug(),
			disableAI: getDisableAi(),
			adaptiveMode: getAdaptiveMode(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setImportItemInfo, setTogglePopup, setOnboardingAiPopup } =
			dispatch( 'ast-block-templates' );
		const { insertBlocks } = wp.data.dispatch( 'core/block-editor' );
		const { getSelectedBlockClientId, canInsertBlockType, getBlockRootClientId } = wp.data.select( 'core/block-editor' );
		return {
			setImportItemInfo,
			onSetTogglePopup: setTogglePopup,
			insertBlocks,
			getSelectedBlockClientId,
			canInsertBlockType,
			getBlockRootClientId,
			setOnboardingAiPopup,
		};
	} )
)( memo( ImportBlockButton ) );
