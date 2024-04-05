import { compose } from '@wordpress/compose';
import { withSelect, withDispatch, useSelect, useDispatch } from '@wordpress/data';
import { useState, memo } from '@wordpress/element';
import { STORE_KEY } from '../../../store';
import { error } from '../../../utils/logger';
import Tooltip from '../tooltip/tooltip';
import './sync.scss';

const { post } = wp.ajax;

const Sync = ( { setNotice } ) => {
	const { toggleOnboardingAIStep, resetOnboardingAISteps } =
		useDispatch( STORE_KEY );
	const { showOnboarding, stepData } = useSelect( ( select ) => {
		const { getOnboardingAI } = select( STORE_KEY );
		return getOnboardingAI();
	} );

	const defaultText = 'Sync Library';

	const [ selfState, selfSetState ] = useState( {
		isProcessing: '',
		buttonText: defaultText,
	} );

	const { isProcessing, buttonText } = selfState;

	/**
	 * Sync Complete
	 */
	const syncComplete = async () => {
		await post( {
			action: 'ast-block-templates-update-sync-library-status',
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} ).done( () => {
			setNotice( {
				type: 'success',
			} );

			// Updated UI.
			selfSetState( {
				isProcessing: 'complete',
				buttonText: 'Sync Complete',
			} );
		} );
	};

	/**
	 * Import Site
	 * @param {number} i
	 * @param {number} total
	 */
	const importSite = async ( i, total ) => {
		await post( {
			action: 'ast-block-templates-import-sites',
			page_no: i,
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} ).done( ( response ) => {
			if ( response.status ) {
				// Updated UI.
				selfSetState( {
					isProcessing: 'process',
					buttonText: `Imported ${ i } of ${ total } site..`,
				} );

				if ( i === total ) {
					syncComplete();
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

	/**
	 * Get Block Count
	 */
	const blocksCount = async () => {
		await post( {
			action: 'ast-block-templates-get-blocks-request-count',
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} )
			.done( ( response ) => {
				if ( response.status ) {
					const total = response.data;

					for ( let i = 1; i <= total; i++ ) {
						importBlock( i, total );
					}
				} else {
					// Updated UI.
					selfSetState( {
						isProcessing: 'complete',
						buttonText: 'Importing Pages Failed',
					} );
				}
			} )
			.fail( ( response ) => {
				error( 'fail', response );
			} );
	};

	/**
	 * Get Block Categories
	 */
	const syncCategories = async () => {
		await post( {
			action: 'ast-block-templates-import-categories',
			_ajax_nonce: ast_block_template_vars._ajax_nonce,
		} )
			.done( () => {
				blocksCount();
			} )
			.fail( ( response ) => {
				error( 'fail', response );
			} );
	};

	const syncStart = async () => {
		try {
			await post( {
				action: 'ast-block-templates-check-sync-library-status',
				_ajax_nonce: ast_block_template_vars._ajax_nonce,
			} )
				.done( ( response ) => {
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
							syncCategories();
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

	const resetDetails = () => {
		if ( ! confirm( 'Are you sure you want to reset the business details?' ) ) {
			return;
		}
		const formData = new window.FormData();

		formData.append( 'action', 'ast-block-templates-reset-business-details' );
		formData.append(
			'security',
			ast_block_template_vars.reset_details_ajax_nonce
		);

		wp.apiFetch( {
			url: ast_block_template_vars.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( response ) => {
			if ( response.success ) {
				console.log( 'Reset Successfully!' );
				// updateCurrentScreen('content');
				resetOnboardingAISteps();
				window.location.reload();
			} else {
				console.log( 'Reset Failed!' );
			}
		} );
	};

	const getShowOnboardingAIButtons = () => {
		const hasStepData = Object.values( stepData ).some( ( item ) => {
			if ( typeof item === 'string' ) {
				return !! item.trim();
			}

			return null;
		} );

		return (
			!! ast_block_template_vars?.show_onboarding ||
			hasStepData ||
			! showOnboarding
		);
	};

	const processSync = ( event ) => {
		event.preventDefault();

		setNotice( {
			type: 'info',
		} );

		// Updated UI.
		selfSetState( {
			isProcessing: 'process',
			buttonText: 'Syncing libray..',
		} );

		// Process sync.
		syncStart();
	};

	return (
		<span className="ast-blocks-templates-menu">
			{ getShowOnboardingAIButtons() && (
				<span className="ast-block-edit-business-menu">
					<span
						className="dashicons dashicons-edit-large ast-block-edit-business-details"
						onClick={ ( event ) => {
							event.preventDefault();
							toggleOnboardingAIStep( true );
						} }
						role="button"
						tabIndex={ 0 }
						onKeyDown={ ( event ) => {
							if ( event.key === 'Enter' || event.key === ' ' ) {
								event.preventDefault();
								toggleOnboardingAIStep( true );
							}
						} }
					>
						<Tooltip message="Edit Business Details" />
					</span>
					<span
						className="dashicons dashicons-update ast-block-edit-business-details"
						onClick={ resetDetails }
						role="button"
						tabIndex={ 0 }
						onKeyDown={ ( event ) => {
							if ( event.key === 'Enter' || event.key === ' ' ) {
								resetDetails();
							}
						} }
					>
						<Tooltip message="Edit Business Details" />
					</span>
				</span>
			) }
			<span
				className={ `ast-block-templates-sync ${
					'process' === isProcessing
						? 'ast-block-templates-sync--processing'
						: ''
				}` }
				onClick={ ( event ) => {
					processSync( event );
				} }
				role="button"
				tabIndex={ 0 }
				onKeyDown={ ( event ) => {
					if ( event.key === 'Enter' || event.key === ' ' ) {
						processSync( event );
					}
				} }
			>
				<span className="ast-block-templates-icon ast-block-templates-icon-refresh"></span>
				<span className="ast-block-templates-sync__title">
					{ buttonText }
				</span>
				<Tooltip message="Sync Library" />
			</span>
		</span>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setNotice } = dispatch( 'ast-block-templates' );

		const {
			setAllPages,
			setSitePreview,
			setCurrentScreen,
			setFilterPagesBySearchTerm,
			setFilterBlocksBySearchTerm,
			setFilterBlocksPagesBySearchTerm,
		} = dispatch( 'ast-block-templates' );
		return {
			setNotice,
			updateCurrentScreen( currentScreen ) {
				setAllPages( [] );
				setSitePreview( {} );
				setFilterPagesBySearchTerm( '' );
				setFilterBlocksBySearchTerm( '' );
				setFilterBlocksPagesBySearchTerm( '' );
				setCurrentScreen( currentScreen );
			},
		};
	} ),
	withSelect( ( select ) => {
		const { getNotice } = select( 'ast-block-templates' );
		return {
			notice: getNotice(),
		};
	} )
)( memo( Sync ) );
