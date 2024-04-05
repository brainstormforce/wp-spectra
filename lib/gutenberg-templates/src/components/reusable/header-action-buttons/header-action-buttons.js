import { compose } from '@wordpress/compose';
import {
	withSelect,
	withDispatch,
	useSelect,
	useDispatch,
} from '@wordpress/data';
import { useState, memo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	ArrowPathIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import { STORE_KEY } from '../../../store';
import { error } from '../../../utils/logger';
import ActionButton from './header-action-button';
import HeaderAIDropdown from './header-ai-dropdown';
import {
	classNames,
	clearSessionStorage,
	// getAstraSitesProStatus,
	// getSpectraProStatus,
} from '../../../utils/helpers';
import HeaderCreditStatus from '../credits/header-credit-status';

const { post } = wp.ajax;
const syncProgressStatus = ast_block_template_vars.sync_progress_status;

const HeaderActionButtons = ( {
	setNotice,
	dynamicContentSyncStatus,
	setAllBlocksData,
	setAllCategories,
	// currentScreen,
	// showPagesOnboarding,
	// skipZipAiOnboarding,
	adaptiveMode,
	disableAi,
} ) => {
	// const astraSitesProStatus = getAstraSitesProStatus();
	// const spectraProStatus = getSpectraProStatus();

	const handleBeforeUnload = ( event ) => {
		event.returnValue = __(
			'Are you sure you want to cancel the content generation process?',
			'ast-block-templates'
		);
		return event;
	};
	useEffect( () => {
		if ( Object.values( dynamicContentSyncStatus ).some( ( item ) => !! item ) ) {
			window.addEventListener( 'beforeunload', handleBeforeUnload );

			return () =>
				window.removeEventListener( 'beforeunload', handleBeforeUnload );
		}
	}, [ dynamicContentSyncStatus ] );
	const { setTogglePopup, setAllSites } = useDispatch( STORE_KEY );
	const { stepData } = useSelect( ( select ) => {
		const { getOnboardingAI } = select( STORE_KEY );
		return {
			...getOnboardingAI(),
		};
	} );

	const defaultText =
		syncProgressStatus === 'yes'
			? 'Library syncing is in progress. Refresh the page for updates.'
			: 'Sync Library';

	const [ selfState, selfSetState ] = useState( {
		isProcessing: '',
		buttonText: defaultText,
	} );

	const { isProcessing, buttonText } = selfState;

	/**
	 * Import Site
	 * @param {number} i
	 * @param {number} total
	 */
	const importSite = async ( i, total ) => {
		await post( {
			action: 'ast-block-templates-import-sites',
			page_no: i,
			total,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} ).done( ( response ) => {
			if ( response.status ) {
				// Updated UI.
				selfSetState( {
					isProcessing: 'process',
					buttonText: `Imported ${ i } of ${ total } site..`,
				} );
				if ( i === total ) {
					setAllCategories( response.data?.categories );
					setAllBlocksData( response.data?.allBlocks );
					setAllSites( response.data?.allSites );
					setNotice( {
						type: 'success',
					} );
					// Updated UI.
					selfSetState( {
						isProcessing: 'complete',
						buttonText: 'Sync Complete',
					} );
				}
			} else {
				// Updated UI.
				selfSetState( {
					isProcessing: 'error',
					buttonText: `Error ${ response.data }`,
				} );
			}
		} );
	};

	/**
	 * Get Block Count
	 */
	const sitesCount = async () => {
		await post( {
			action: 'ast-block-templates-get-sites-request-count',
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} )
			.done( ( response ) => {
				if ( response.status ) {
					// Updated UI.
					selfSetState( {
						isProcessing: 'process',
						buttonText: 'Importing Sites..',
					} );

					const total = response.data;

					for ( let i = 1; i <= total; i++ ) {
						importSite( i, total );
					}
				} else {
					// Updated UI.
					selfSetState( {
						isProcessing: 'complete',
						buttonText: 'Importing Sites Failed',
					} );
				}
			} )
			.fail( ( response ) => {
				error( 'fail', response );
			} );
	};

	/**
	 * Import Blocks
	 *
	 * @param {number} i
	 * @param {number} total
	 */
	const importBlock = async ( i, total ) => {
		await post( {
			action: 'ast-block-templates-import-blocks',
			page_no: i,
			total,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} ).done( ( response ) => {
			if ( response.status ) {
				// Updated UI.
				selfSetState( {
					isProcessing: 'process',
					buttonText: `Imported ${ i } of ${ total } block..`,
				} );

				if ( i === total ) {
					sitesCount();
				}
			} else {
				// Updated UI.
				selfSetState( {
					isProcessing: 'error',
					buttonText: `Error ${ response.data }`,
				} );
			}
		} );
	};

	const syncStart = async () => {
		try {
			await post( {
				action: 'ast-block-templates-check-sync-library-status',
				_ajax_nonce: ast_block_template_vars._ajax_nonce,
			} )
				.done( async ( response ) => {
					if ( response.status ) {
						if ( 'updated' === response.data ) {
							selfSetState( {
								isProcessing: 'complete',
								buttonText: 'Library is up-to date!',
							} );
							setNotice( {
								type: 'success',
							} );
						} else {
							const total = response.data.pages;
							for ( let i = 1; i <= total; i++ ) {
								await importBlock( i, total );
							}
						}
					} else {
						setNotice( {
							type: 'error',
							message: `Error! ${ response.message }`,
						} );
						// Complete.
						selfSetState( {
							isProcessing: 'complete',
							buttonText: `Error! ${ response.message }`,
						} );
					}
				} )
				.fail( ( response ) => {
					error( 'fail', response );
				} );
		} catch ( err ) {
			error( 'Complete: Failed', err );
		}
	};

	const handleClosePopup = () => {
		setTogglePopup();
		document
			.getElementById( 'ast-block-templates-modal-wrap' )
			.classList.remove( 'open' );
		document.body.classList.remove( 'ast-block-templates-modal-open' );

		// Remove the pattern/page id from session storage.
		clearSessionStorage( 'ast-import-id' );
		clearSessionStorage( 'ast-free-ai-content' );
		clearSessionStorage( 'ast-sites-visible-items' );
		clearSessionStorage( 'ast-sites-scroll-position' );
	};

	const handleSyncLibrary = ( event ) => {
		event.preventDefault();

		if ( Object.values( dynamicContentSyncStatus ).some( ( item ) => !! item ) ) {
			return;
		}

		setNotice( {
			type: 'info',
		} );

		// Updated UI.
		selfSetState( {
			isProcessing: 'process',
			buttonText: 'Syncing library..',
		} );

		// Process sync.
		syncStart();
	};

	const showSyncLibraryButton = () => {
		let isShowBtn = true;

		if ( stepData.token ) {
			isShowBtn = true;
		}

		return isShowBtn;
	};

	return (
		<div className="justify-self-end flex items-center gap-3 w-max">
			{ adaptiveMode && ! disableAi && <HeaderCreditStatus /> }
			{ showSyncLibraryButton() && (
				<ActionButton
					className={ classNames(
						'relative',
						'process' === isProcessing && 'cursor-not-allowed'
					) }
					disabled={ Object.values( dynamicContentSyncStatus ).some(
						( item ) => !! item
					) }
					tooltip={ defaultText }
					{ ...( isProcessing !== 'process' && {
						onClick: handleSyncLibrary,
					} ) }
				>
					<span
						className={ classNames(
							'inline-flex',
							isProcessing === 'process' && 'animate-spin'
						) }
					>
						<ArrowPathIcon className="h-6 w-6" />
					</span>
					<span className="sr-only">{ buttonText }</span>
					{ syncProgressStatus === 'yes' && (
						<div className="absolute bottom-0.5 flex justify-center items-center gap-2 px-1 pb-px rounded border border-solid border-credit-warning bg-credit-warning shadow-sync-badge">
							<span className="text-white text-[10px] font-medium leading-[15px]">
								{ __( 'Syncing', 'ast-block-templates' ) }
							</span>
						</div>
					) }
				</ActionButton>
			) }
			<HeaderAIDropdown />
			{ /* Vertical divider */ }
			<div className="w-px h-5 bg-border-primary" />

			<ActionButton onClick={ handleClosePopup } tooltip="Close">
				<XMarkIcon className="h-6 w-6" />
			</ActionButton>
		</div>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setNotice } = dispatch( STORE_KEY );

		const {
			setAllPages,
			setSitePreview,
			setCurrentScreen,
			setFilterPagesBySearchTerm,
			setFilterBlocksBySearchTerm,
			setAllBlocksData,
			setAllCategories,
			setOnboardingAiPopup,
		} = dispatch( STORE_KEY );
		return {
			setNotice,
			updateCurrentScreen( currentScreen ) {
				setAllPages( [] );
				setSitePreview( {} );
				setFilterPagesBySearchTerm( '' );
				setFilterBlocksBySearchTerm( '' );
				setCurrentScreen( currentScreen );
			},
			setAllBlocksData,
			setAllCategories,
			setOnboardingAiPopup,
		};
	} ),
	withSelect( ( select ) => {
		const {
			getNotice,
			getDynamicContentSyncStatus,
			getCurrentScreen,
			getShowPagesOnboarding,
			getAdaptiveMode,
			getDisableAi,
		} = select( STORE_KEY );
		return {
			notice: getNotice(),
			dynamicContentSyncStatus: getDynamicContentSyncStatus(),
			currentScreen: getCurrentScreen(),
			showPagesOnboarding: getShowPagesOnboarding(),
			adaptiveMode: getAdaptiveMode(),
			disableAi: getDisableAi(),
		};
	} )
)( memo( HeaderActionButtons ) );
