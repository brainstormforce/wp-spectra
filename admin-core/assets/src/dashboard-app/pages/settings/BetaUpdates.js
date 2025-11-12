import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useState, useEffect, useCallback, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';

import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Switch, Button } from '@bsf/force-ui';

const BetaUpdates = () => {
	const dispatch = useDispatch();
	const isMountedRef = useRef( true );

	const enableBeta = useSelector( ( state ) => state.enableBeta );
	const enableBetaStatus = 'no' === enableBeta ? false : true;

	const [ betaUpdateInfo, setBetaUpdateInfo ] = useState( null );
	const [ isCheckingUpdate, setIsCheckingUpdate ] = useState( false );
	const [ isUpdating, setIsUpdating ] = useState( false );
	const [ hasError, setHasError ] = useState( false );
	const [ showConfirmModal, setShowConfirmModal ] = useState( false );

	// Cleanup on unmount to prevent memory leaks
	useEffect( () => {
		return () => {
			isMountedRef.current = false;
		};
	}, [] );

	const checkForBetaUpdate = useCallback( () => {
		// Prevent duplicate requests
		if ( isCheckingUpdate ) {
			return;
		}

		// Validate required data exists
		if ( ! uag_react?.check_beta_update_available_nonce || ! uag_react?.ajax_url ) {
			setHasError( true );
			setIsCheckingUpdate( false );
			return;
		}

		setIsCheckingUpdate( true );
		setHasError( false );
		setBetaUpdateInfo( null );

		// Track when the check started (for minimum display time)
		const startTime = Date.now();
		const minDisplayTime = 800; // Minimum 800ms to show checking state

		// Set a timeout to prevent infinite loading
		const timeoutId = setTimeout( () => {
			if ( isMountedRef.current && isCheckingUpdate ) {
				setIsCheckingUpdate( false );
				setHasError( true );
			}
		}, 30000 ); // 30 second timeout

		const data = {
			security: uag_react.check_beta_update_available_nonce,
			value: 'yes',
		};

		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_check_beta_update_available',
			data,
		} );

		getApiFetchData
			.then( ( response ) => {
				clearTimeout( timeoutId );
				if ( ! isMountedRef.current ) {
					return;
				}

				// Calculate remaining time to meet minimum display duration
				const elapsed = Date.now() - startTime;
				const remainingTime = Math.max( 0, minDisplayTime - elapsed );

				// Delay state update to ensure minimum display time
				setTimeout( () => {
					if ( ! isMountedRef.current ) {
						return;
					}
					if ( response?.success && response?.data ) {
						setBetaUpdateInfo( response.data );
						setHasError( false );
					} else {
						setHasError( true );
					}
					setIsCheckingUpdate( false );
				}, remainingTime );
			} )
			.catch( () => {
				clearTimeout( timeoutId );
				if ( ! isMountedRef.current ) {
					return;
				}

				// Calculate remaining time to meet minimum display duration
				const elapsed = Date.now() - startTime;
				const remainingTime = Math.max( 0, minDisplayTime - elapsed );

				setTimeout( () => {
					if ( ! isMountedRef.current ) {
						return;
					}
					setIsCheckingUpdate( false );
					setHasError( true );
				}, remainingTime );
			} );
	}, [ isCheckingUpdate ] );

	// Check for beta updates when beta is enabled
	useEffect( () => {
		if ( enableBetaStatus ) {
			checkForBetaUpdate();
		} else {
			setBetaUpdateInfo( null );
			setHasError( false );
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ enableBetaStatus ] );

	const handleUpdateNowClick = () => {
		setShowConfirmModal( true );
	};

	const handleCancelUpdate = () => {
		setShowConfirmModal( false );
	};

	const handleConfirmUpdate = () => {
		// Prevent duplicate requests
		if ( isUpdating ) {
			return;
		}

		// Validate required data exists
		if ( ! uag_react?.update_beta_plugin_nonce || ! uag_react?.ajax_url ) {
			return;
		}

		setIsUpdating( true );

		const data = {
			security: uag_react.update_beta_plugin_nonce,
			value: 'yes',
		};

		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_update_beta_plugin',
			data,
		} );

		getApiFetchData
			.then( ( response ) => {
				if ( ! isMountedRef.current ) {
					return;
				}

				if ( response?.success && response?.data ) {
					// Show success message
					dispatch( {
						type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
						payload: response.data.messsage || __( 'Plugin updated successfully!', 'ultimate-addons-for-gutenberg' ),
					} );
					// Close modal and reset state
					setShowConfirmModal( false );
					setIsUpdating( false );
					// Hide the update notice
					setBetaUpdateInfo( null );

					// Reload the page after a delay to show the success message
					setTimeout( () => {
						window.location.reload();
					}, 1000 );
				} else {
					const errorMessage = response?.data?.messsage || __( 'Unable to update. Please try again.', 'ultimate-addons-for-gutenberg' );
					dispatch( {
						type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
						payload: errorMessage,
					} );
					setIsUpdating( false );
					setShowConfirmModal( false );
				}
			} )
			.catch( () => {
				if ( isMountedRef.current ) {
					dispatch( {
						type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
						payload: __( 'Unable to update. Please try again.', 'ultimate-addons-for-gutenberg' ),
					} );
					setIsUpdating( false );
					setShowConfirmModal( false );
				}
			} );
	};

	const updateEnableBetaStatus = () => {
		// Validate required data exists
		if ( ! uag_react?.enable_beta_updates_nonce || ! uag_react?.ajax_url ) {
			return;
		}

		let assetStatus;
		if ( enableBeta === 'no' ) {
			assetStatus = 'yes';
		} else {
			assetStatus = 'no';
		}

		dispatch( { type: 'UPDATE_BETA', payload: assetStatus } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.enable_beta_updates_nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_enable_beta_updates',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData
			.then( () => {
				if ( ! isMountedRef.current ) {
					return;
				}
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
				// If beta was just enabled, immediately check for updates
				if ( assetStatus === 'yes' ) {
					// Small delay to ensure state is updated
					setTimeout( () => {
						if ( isMountedRef.current ) {
							checkForBetaUpdate();
						}
					}, 100 );
				} else {
					// If beta was disabled, clear the update info
					setBetaUpdateInfo( null );
					setHasError( false );
				}
			} )
			.catch( () => {
				if ( ! isMountedRef.current ) {
					return;
				}
				dispatch( {
					type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
					payload: __( 'Unable to save settings. Please try again.', 'ultimate-addons-for-gutenberg' ),
				} );
			} );
	};

	return (
		<>
			<SettingsItem
				title={ __( 'Enable Beta', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Enable this option to turn on beta updates and be notified when a new beta version of Spectra is available. The beta version will not install automatically, you will have to install it when you get a notification. It is recommended to try beta on a test environment only.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					value={ enableBetaStatus }
					onChange={ updateEnableBetaStatus }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>

			{ /* Beta Update Notice */ }
			{ enableBetaStatus && ( betaUpdateInfo || isCheckingUpdate || hasError ) && (
				<div className="mt-4 p-4 rounded-md border border-border-subtle bg-background-secondary">
					{ isCheckingUpdate && (
						<p className="text-sm text-text-secondary m-0">
							{ __( 'Checking for beta updates…', 'ultimate-addons-for-gutenberg' ) }
						</p>
					) }

					{ ! isCheckingUpdate && hasError && (
						<div className="flex items-center justify-between gap-4">
							<p className="text-sm text-text-secondary m-0">
								{ __( 'Unable to check for updates. Please try again.', 'ultimate-addons-for-gutenberg' ) }
							</p>
							<Button
								variant="secondary"
								size="sm"
								onClick={ checkForBetaUpdate }
								disabled={ isCheckingUpdate }
							>
								{ __( 'Retry', 'ultimate-addons-for-gutenberg' ) }
							</Button>
						</div>
					) }

					{ ! isCheckingUpdate && ! hasError && betaUpdateInfo && betaUpdateInfo.has_update && (
						<div className="flex items-center justify-between gap-4">
							<div className="flex-1">
								<p className="text-sm font-medium text-text-primary m-0 mb-1">
									{ __( 'Beta Update Available!', 'ultimate-addons-for-gutenberg' ) }
								</p>
								<p className="text-sm text-text-secondary m-0">
									{ betaUpdateInfo.messsage || __( 'A new beta version is available.', 'ultimate-addons-for-gutenberg' ) }
								</p>
							</div>
							<Button
								variant="primary"
								size="sm"
								onClick={ handleUpdateNowClick }
								disabled={ isUpdating }
							>
								{ isUpdating
									&& (
									<svg
										className="animate-spin mr-1 h-4 w-4 text-white"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								)
								}
								{ isUpdating ? __( 'Updating…', 'ultimate-addons-for-gutenberg' ) : __( 'Update Now', 'ultimate-addons-for-gutenberg' ) }
							</Button>
						</div>
					) }

					{ ! isCheckingUpdate && ! hasError && betaUpdateInfo && ! betaUpdateInfo.has_update && (
						<div className="flex items-center justify-between gap-4">
							<p className="text-sm text-text-secondary m-0">
								{ __( 'You are running the latest version.', 'ultimate-addons-for-gutenberg' ) }
							</p>
							<Button
								variant="secondary"
								size="sm"
								onClick={ checkForBetaUpdate }
								disabled={ isCheckingUpdate }
							>
								{ __( 'Check Again', 'ultimate-addons-for-gutenberg' ) }
							</Button>
						</div>
					) }
				</div>
			) }

			{/* Confirmation Modal */}
			<Transition.Root show={ showConfirmModal } as={ Fragment }>
				<Dialog
					as="div"
					className="fixed backdrop-blur-sm inset-0 overflow-y-auto"
					style={ { zIndex: 99999 } }
					onClose={ handleCancelUpdate }
				>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={ Fragment }
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
							&#8203;
						</span>

						<Transition.Child
							as={ Fragment }
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="inline-block p-3 rounded-lg bg-background-primary w-120 font-[Figtree] relative z-999999">
								<div className="mb-2 p-2">
									<div className="flex w-full justify-between items-center mb-2">
										<div className="text-base font-semibold text-text-primary">
											{ __( 'Update to Beta Version', 'ultimate-addons-for-gutenberg' ) }
										</div>
										<X size={ 16 } onClick={ handleCancelUpdate } className="cursor-pointer" />
									</div>

									<div className="text-sm text-text-secondary font-normal w-full text-left">
										{ __( 'This is a beta version and not recommended for live sites. It is recommended to test on a staging or test environment only.', 'ultimate-addons-for-gutenberg' ) }
									</div>
								</div>

								<div className="p-2">
									<div className="flex justify-end items-center w-full gap-3">
										<Button
											className="uagb-outline-button"
											size="md"
											tag="button"
											type="button"
											variant="outline"
											onClick={ handleCancelUpdate }
										>
											{ __( 'Cancel', 'ultimate-addons-for-gutenberg' ) }
										</Button>

										<Button
											className="bg-button-primary text-text-on-color uagb-remove-ring hover:bg-button-primary-hover"
											size="md"
											tag="button"
											type="button"
											variant="primary"
											onClick={ handleConfirmUpdate }
											disabled={ isUpdating }
										>
											{ isUpdating && (
												<svg
													className="animate-spin mr-1 h-5 w-5 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													></path>
												</svg>
											) }
												{ isUpdating ? __( 'Updating…', 'ultimate-addons-for-gutenberg' ) : __( 'Update', 'ultimate-addons-for-gutenberg' ) }
										</Button>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>

			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default BetaUpdates;
