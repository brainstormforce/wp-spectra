import { __ } from '@wordpress/i18n';
import { Fragment, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { Container, Title, Button, Skeleton } from '@bsf/force-ui';
import { TestTubeDiagonal, X } from 'lucide-react';
import getApiData from '@Controls/getApiData';

const BetaUpdateNotice = () => {
	const dispatch = useDispatch();
	const isMountedRef = useRef( true );
	const [ betaUpdateInfo, setBetaUpdateInfo ] = useState( null );
	const [ isLoading, setIsLoading ] = useState( true );
	const [ isUpdating, setIsUpdating ] = useState( false );
	const [ showConfirmModal, setShowConfirmModal ] = useState( false );

	// Cleanup on unmount
	useEffect( () => {
		return () => {
			isMountedRef.current = false;
		};
	}, [] );

	// Check for beta update on component mount
	useEffect( () => {
		checkForBetaUpdate();
	}, [] );

	const checkForBetaUpdate = () => {
		if ( ! uag_react?.check_beta_update_available_nonce || ! uag_react?.ajax_url ) {
			setIsLoading( false );
			return;
		}

		const data = {
			security: uag_react.check_beta_update_available_nonce,
			value: 'yes',
		};

		getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_check_beta_update_available',
			data,
		} )
			.then( ( response ) => {
				if ( ! isMountedRef.current ) {
					return;
				}
				if ( response?.success && response?.data && response.data.has_update ) {
					setBetaUpdateInfo( response.data );
				}
				setIsLoading( false );
			} )
			.catch( () => {
				if ( isMountedRef.current ) {
					setIsLoading( false );
				}
			} );
	};

	const handleTryNowClick = () => {
		setShowConfirmModal( true );
	};

	const handleCancelUpdate = () => {
		setShowConfirmModal( false );
	};

	const handleConfirmUpdate = () => {
		if ( isUpdating ) {
			return;
		}

		if ( ! uag_react?.enable_beta_updates_nonce || ! uag_react?.update_beta_plugin_nonce || ! uag_react?.ajax_url ) {
			return;
		}

		setIsUpdating( true );

		// Step 1: Enable beta updates
		const enableBetaData = {
			security: uag_react.enable_beta_updates_nonce,
			value: 'yes',
		};

		getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_enable_beta_updates',
			data: enableBetaData,
		} )
			.then( ( enableResponse ) => {
				if ( ! isMountedRef.current ) {
					return;
				}

				if ( enableResponse?.success ) {
					// Update Redux state
					dispatch( { type: 'UPDATE_BETA', payload: 'yes' } );

					// Step 2: Update the plugin
					const updateData = {
						security: uag_react.update_beta_plugin_nonce,
						value: 'yes',
					};

					getApiData( {
						url: uag_react.ajax_url,
						action: 'uag_update_beta_plugin',
						data: updateData,
					} )
						.then( ( updateResponse ) => {
							if ( ! isMountedRef.current ) {
								return;
							}

							if ( updateResponse?.success && updateResponse?.data ) {
								// Show success message
								dispatch( {
									type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
									payload: updateResponse.data.messsage || __( 'Plugin updated successfully!', 'ultimate-addons-for-gutenberg' ),
								} );

							// Close modal and reset state
							setShowConfirmModal( false );
							setIsUpdating( false );
								// Reload the page after delay
								setTimeout( () => {
									window.location.reload();
								}, 1000 );
							} else {
								const errorMessage = updateResponse?.data?.messsage || __( 'Unable to update. Please try again.', 'ultimate-addons-for-gutenberg' );
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
				} else {
					dispatch( {
						type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
						payload: __( 'Unable to enable beta updates. Please try again.', 'ultimate-addons-for-gutenberg' ),
					} );
							setShowConfirmModal( false );
					setIsUpdating( false );
				}
			} )
			.catch( () => {
				if ( isMountedRef.current ) {
					dispatch( {
						type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION',
						payload: __( 'Unable to enable beta updates. Please try again.', 'ultimate-addons-for-gutenberg' ),
					} );
					setIsUpdating( false );
					setShowConfirmModal( false );
				}
			} );
	};

	// Don't render if still loading or no update available
	if ( isLoading || ! betaUpdateInfo || ! betaUpdateInfo.has_update ) {
		return (
			<div className="lg:w-full rounded-xl space-y-6 mt-6">
				<Skeleton variant="rectangular" className="w-full h-[120px] rounded-xl shadow" />
			</div>
		);
	}

	// Extract major version from beta version (e.g., "3.0.0-beta.1" -> "3")
	const getMajorVersion = () => {
		if ( betaUpdateInfo.beta_version ) {
			const match = betaUpdateInfo.beta_version.match( /^(\d+)\./ );
			return match ? match[1] : '';
		}
		return '';
	};

	const majorVersion = getMajorVersion();
	const versionTitle = majorVersion
		? `Spectra v${ majorVersion } Beta is Here!`
		: __( 'Spectra Beta is Here!', 'ultimate-addons-for-gutenberg' );

	const currentVersion = betaUpdateInfo.current_version || uag_react?.plugin_ver || '';

	return (
		<Container className="bg-white p-6 shadow-sm rounded-lg border border-solid border-border-subtle relative">
			<Container.Item className="flex flex-1 flex-col gap-2">
				<div className="flex items-start justify-between gap-4 mb-2">
					<div className="text-brand-primary-600 flex space-x-1">
						<TestTubeDiagonal size={ 14 } />
						<div className="font-semibold text-xs">
							{ __( 'New Beta Version', 'ultimate-addons-for-gutenberg' ) }
						</div>
					</div>
					<div className="text-sm text-text-tertiary whitespace-nowrap">
						{ __( 'Current Version: ', 'ultimate-addons-for-gutenberg' ) }
						<span className="font-semibold text-text-primary">{ currentVersion }</span>
					</div>
				</div>

				<div>
					<Title className="text-text-primary mb-1" tag="h3" title={ versionTitle } />
					<p className="text-sm text-text-secondary m-0">
						{ __( 'Be among the first to explore what\'s next and share your thoughts to help us make it even better!', 'ultimate-addons-for-gutenberg' ) }
					</p>
				</div>

				{/* Warning */}
				<div className="flex items-start gap-2 bg-alert-background-warning border border-alert-border-warning rounded-md px-3 py-2 mt-2">
					<svg className="w-4 h-4 text-support-warning flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
					</svg>
					<p className="text-sm text-text-primary m-0">
						<span className="font-semibold">{ __( 'Important:', 'ultimate-addons-for-gutenberg' ) }</span>{ ' ' }
						{ __( 'Spectra v3 is still in Beta and should not be used on live sites yet.', 'ultimate-addons-for-gutenberg' ) }
					</p>
				</div>

				<div className="flex gap-3 mt-2">
					<Button
						variant="primary"
						className="uagb-remove-ring"
						onClick={ handleTryNowClick }
						disabled={ isUpdating }
					>
						{ isUpdating
							? __( 'Updating…', 'ultimate-addons-for-gutenberg' )
							: __( 'Try It Now', 'ultimate-addons-for-gutenberg' ) }
					</Button>
				</div>
			</Container.Item>

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
		</Container>
	);
};

export default BetaUpdateNotice;
