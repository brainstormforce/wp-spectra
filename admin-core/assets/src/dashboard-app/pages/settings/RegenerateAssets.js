import React, { Fragment, useRef, useState, useEffect } from 'react';
import { __ } from '@wordpress/i18n';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

import { X } from 'lucide-react';
import { Button, Container, Label } from '@bsf/force-ui';

const RegenerateAssets = () => {
	const dispatch = useDispatch();
	const [ regenerateAssetsState, setRegenerateAssetsState ] = useState( false );
	const [ isModalOpen, setIsModalOpen ] = useState( false );

	const regenerateAssets = () => {
		setRegenerateAssetsState( 'loading' );
		// Create an object with the security and value properties
		const data = {
			security: uag_react.regenerate_assets_nonce,
			value: true,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_regenerate_assets',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( ( _data ) => {
			if ( _data.success ) {
				dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Assets Regenerated!' } );
				setRegenerateAssetsState( false );
			}
		} );
	};

	const openModal = () => {
		setIsModalOpen( true );
	};

	const ConfirmationPopup = ( props ) => {
		const {
			openPopup,
			setopenPopup,
			popupContent,
			popupAccept,
			popupCancel,
		} = props;

		const [ open, setOpen ] = useState( openPopup );

		const cancelButtonRef = useRef( null );

		useEffect( () => {
			setOpen( openPopup );
		}, [ openPopup ] );

		const onCancelClick = () => {
			setopenPopup( ! openPopup );
		};

		return (
			<Transition.Root show={ open } as={ Fragment }>
				<Dialog
					as="div"
					className="fixed backdrop-blur-sm inset-0 overflow-y-auto"
					style={ { zIndex: 99999 } }
					initialFocus={ cancelButtonRef }
					onClose={ setOpen }
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

						{ /* This element is to trick the browser into centering the modal contents. */ }
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
											{ popupContent.title }
										</div>

										<X size={ 16 } onClick={ onCancelClick } className="cursor-pointer" />
									</div>

									<div className="text-sm text-text-secondary font-normal w-full text-left">
										{ popupContent.description }
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
											onClick={ onCancelClick }
											ref={ cancelButtonRef }
										>
											{ popupCancel.label }
										</Button>

										<Button
											className="bg-button-primary text-text-on-color uagb-remove-ring hover:bg-button-primary-hover regenerate-btn "
											size="md"
											tag="button"
											type="button"
											variant="primary"
											onClick={ regenerateAssets }
										>
											{ 'loading' === regenerateAssetsState && (
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
											{ popupAccept.label }
										</Button>
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>
		);
	};

	return (
		<>
			<SettingsItem
				title={ __( 'Enable Quick Action Bar', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'The Spectra Quick Action Bar lets you have all your frequently used Spectra blocks right at your fingertips!',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Button
					onClick={ openModal }
					className="uagb-remove-ring"
				>
					{ __( 'Regenerate Assets', 'ultimate-addons-for-gutenberg' ) }
				</Button>
			</SettingsItem>

			<ConfirmationPopup
					{ ...{
						openPopup: isModalOpen,
						setopenPopup: setIsModalOpen,
						popupContent: {
							title: __( 'Regenerate Assets', 'ultimate-addons-for-gutenberg' ),
							description: __(
								'Please note that after regeneration, it is recommended to purge all your cache to ensure that old assets are not served, preventing potential frontend breaking issues.',
								'ultimate-addons-for-gutenberg'
							),
						},
						popupAccept: {
							label: __( 'Regenerate', 'ultimate-addons-for-gutenberg' ),
						},
						popupCancel: {
							label: __( 'Cancel', 'ultimate-addons-for-gutenberg' ),
						},
					} }
				/>
		</>
	);
};

const SettingsItem = ( { title, settingText, currentSetting, children } ) => {
	return (
		<Container
			align="center"
			className="mb-0.5 w-full flex lg:items-center items-start justify-between lg:flex-row flex-col"
		>
			<Container.Item className="space-y-1 lg:max-w-[360px]">
				<Label className="font-semibold" htmlFor="default-width" size="md">
					{ title }
				</Label>
				<Label className="m-0" size="sm" tag="p" variant="help">
					{ settingText }
				</Label>
				{ currentSetting && (
					<Label className="m-0 italic" size="sm" tag="p" variant="help">
						{ currentSetting }
					</Label>
				) }
			</Container.Item>

			{ children }
		</Container>
	);
};

export default RegenerateAssets;
