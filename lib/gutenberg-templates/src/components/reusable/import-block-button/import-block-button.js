import { compose } from '@wordpress/compose';
import {
	useSelect,
	withSelect,
	withDispatch,
	useDispatch,
} from '@wordpress/data';
import { useState, memo } from '@wordpress/element';
import Button from '../button/button';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import { install_plugin, activate_plugin } from '../../../utils/plugins';
import { PHP } from '../../../utils/serialize';
import { block_api_request } from '../../../utils/rest-api';
import { savePostIfSpectraInactive } from '../../../utils/functions';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
	classNames,
	getSpectraStatus,
	manipulateAttributeBlockId,
	setToSessionStorage,
} from '../../../utils/helpers';
import { toast } from 'react-toastify';
import toaster from '../toaster';
import { STORE_KEY } from '../../../store/index';

const { post } = wp.ajax;
const { parse } = wp.blocks;
const { bypassAuth } = ast_block_template_vars;

const ImportBlockButton = ( {
	setImportItemInfo,
	requiredPlugins,
	importItemInfo,
	title,
	btnClass,
	insertBlocks,
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
} ) => {
	let [ blockInfo ] = useState( importItemInfo );
	let AllRequiredPlugins = requiredPlugins ? requiredPlugins : [];
	const buttonClass = btnClass ? btnClass : '';
	const [ buttonTitle ] = useState( title ? title : 'Import' );

	const { index } = wp.data
		.select( 'core/block-editor' )
		.getBlockInsertionPoint();
	const { importInProgress, syncLibNotice, stepData: { token } } = useSelect( ( select ) => {
		const { getImportInProgress, getNotice, getAIStepData } = select( STORE_KEY );
		return {
			importInProgress: getImportInProgress(),
			syncLibNotice: getNotice(),
			stepData: getAIStepData(),
		};
	}, [] );
	const { setImportInProgress, toggleConnectZipAI } = useDispatch( STORE_KEY );
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
			importNotice(
				'Import failed!',
				'Spectra installation failed!',
				'error'
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
			importNotice( 'Import failed!', 'Spectra activation failed!', 'error' );
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
				importNotice(
					'Import failed!',
					'WPForms installation failed!',
					'error'
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
				importNotice(
					'Import failed!',
					'WPForms activation failed!',
					'error'
				);
			} );
	};

	const import_wpforms = () => {
		post( {
			action: 'ast_block_templates_import_wpforms',
			id: blockInfo.id,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} )
			.done( () => {
				// Import block.
				import_block();
			} )
			.fail( () => {
				setImportInProgress( false );
				importNotice(
					'Import failed!',
					'WPForms import failed!',
					'error'
				);
			} );
	};

	const import_block = () => {
		const content = blockInfo.original_content;
		const blockType =
			'all-blocks-grid' === currentScreen ? 'block' : 'page';
		const category =
			'block' === blockType
				? blockInfo[ 'blocks-category' ][ 0 ]
				: blockInfo[ 'pages-category' ][ 0 ];
		post( {
			action: 'ast_block_templates_import_block',
			content,
			category,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
			style:
				'all-blocks-grid' === currentScreen
					? activeBlockPaletteSlug
					: activePagePaletteSlug,
			disableAI,
			block_type: blockType,
			adaptiveMode,
		} )
			.done( ( contentResponse ) => {
				setImportInProgress( false );

				// Manipulate attribute block id.
				const manipulatedBlocks = manipulateAttributeBlockId(
					parse( contentResponse )
				);

				insertBlocks( manipulatedBlocks, index, '', false );

				scrollBlockToView( manipulatedBlocks[ 0 ].clientId );

				onSetTogglePopup();
				document
					.getElementById( 'ast-block-templates-modal-wrap' )
					.classList.remove( 'open' );
				document.body.classList.remove(
					'ast-block-templates-modal-open'
				);

				if (
					spectraPluginStatus.inactive ||
					spectraPluginStatus.notInstalled
				) {
					savePostIfSpectraInactive();
				}

				// On block import callback.
				if ( 'function' === typeof onBlockImport ) {
					onBlockImport( contentResponse, index );
				}
			} )
			.fail( () => {
				setImportInProgress( false );
				importNotice(
					'Import failed!',
					'Failed to import the block. Please try again later or contact support for assistance.',
					'error'
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

	const start_import_process = () => {
		// Import WP Forms.
		// 1. import wp forms
		// 2. import block

		const wpforms_url =
			blockInfo?.[ 'post-meta' ]?.[ 'astra-site-wpforms-path' ] || '';
		if ( wpforms_url ) {
			import_wpforms( wpforms_url );
		} else {
			import_block();
		}
	};

	const addBlockToQueueForImport = () => {
		// Set the pattern/page id to session storage for import process.
		setToSessionStorage( 'ast-import', {
			blockId: item.ID,
			blockType: item.type,
			blockPaletteSlug: activeBlockPaletteSlug,
			pagePaletteSlug: activePagePaletteSlug,
		} );
	};

	const handleBlockImport = async ( event ) => {
		if ( importInProgress || disableImport ) {
			return;
		}
		setImportInProgress( true );

		if ( 'function' === typeof onClick ) {
			onClick( event );
		}

		if (
			spectraPluginStatus.notInstalled
		) {
			await install_spectra();
		} else if (
			spectraPluginStatus.inactive
		) {
			await activate_spectra();
		}

		block_api_request( item.ID, 'astra-blocks' )
			.then( ( data ) => {
				setImportItemInfo( data );

				/**
				 * @todo Set state and use callback function.
				 * Avoid `blockInfo = data` and try to use `setBlockInfo(data)`
				 */
				// setBlockInfo(data);
				blockInfo = data;

				AllRequiredPlugins = data?.[ 'post-meta' ]?.[
					'astra-blocks-required-plugins'
				]
					? PHP.parse(
						data[ 'post-meta' ][
							'astra-blocks-required-plugins'
						]
					  )
					: [];

				if ( AllRequiredPlugins.length ) {
					if (
						'not-installed' ===
						ast_block_template_vars.wpforms_status
					) {
						install_wpforms();
					} else if (
						'inactive' ===
						ast_block_template_vars.wpforms_status
					) {
						activate_wpforms();
					} else {
						start_import_process();
					}
				} else {
					start_import_process();
				}
			} )
			.catch( ( err ) => {
				importNotice( 'Import failed!', err, 'error' );
				setImportInProgress( true );
			} );
	};

	const handleOpenAIAuth = async () => {
		toggleConnectZipAI();
		addBlockToQueueForImport();
	};

	const renderButton = () => {
		return (
			<Button
				className={ classNames(
					'min-w-[4.875rem] h-7 hover:shadow-small sp-text-sm',
					buttonClass,
					( ( importInProgress && ! importing ) || disableImport ) &&
						'opacity-50 cursor-not-allowed'
				) }
				type="button"
				variant="primary"
				onClick={ token || bypassAuth ? handleBlockImport : handleOpenAIAuth }
				isSmall
				hasPrefixIcon={ ! importing && showIcon }
			>
				{ importing ? (
					<LoadingSpinner className="h-4 w-4 !shrink-0" />
				) : (
					<>
						{ showIcon && ( <PlusIcon className="h-4 w-4 !shrink-0" /> ) }
						<span className="truncate">{ buttonTitle }</span>
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
		return {
			setImportItemInfo,
			onSetTogglePopup: setTogglePopup,
			insertBlocks,
			setOnboardingAiPopup,
		};
	} )
)( memo( ImportBlockButton ) );
