import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useDispatch } from 'react-redux';

import getApiData from '@Controls/getApiData';

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

    const closeModal = () => {
        setIsModalOpen( false );
    };

    return (
		<section className="block border-b border-solid border-slate-200 px-12 py-8 justify-between">
			<div className="mr-16 w-full flex items-center">
				<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
					{ __( 'Asset Regeneration', 'ultimate-addons-for-gutenberg' ) }
				</h3>
				<div className="flex justify-right items-center">
					<button
						type="button"
						className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-spectra transition focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none"
						onClick={ openModal }
					>
						{ __( 'Regenerate Assets', 'ultimate-addons-for-gutenberg' ) }
					</button>
				</div>
			</div>
			<p className="mt-2 w-9/12 text-sm text-slate-500">
				{ __(
					'Facing issues with style, layout, color or another page element? Use this option to regenerate CSS and Javascript assets. It can help with all kinds of asset issues.',
					'ultimate-addons-for-gutenberg'
				) }
			</p>
			{ isModalOpen && (
				<div className="relative z-[9999]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
					<div className="fixed inset-0 bg-gray-500 backdrop-blur bg-opacity-75 transition-opacity"></div>

					<div className="fixed inset-0 z-[10000] w-screen overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<div className="bg-white px-4 pb-2 pt-4 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-50 sm:mx-0 sm:h-16 sm:w-16">
											<svg
												className="h-6 w-6 text-red-600"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
												/>
											</svg>
										</div>
										<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
											<h3
												className="text-base font-semibold leading-6 text-gray-900"
												id="modal-title"
											>
												{ __( 'Regenerate Assets', 'ultimate-addons-for-gutenberg' ) }
											</h3>
											<div className="mt-2">
												<p className="text-sm text-gray-500">
													{ __(
														'Please note that after regeneration, it is recommended to purge all your cache to ensure that old assets are not served, preventing potential frontend breaking issues.',
														'ultimate-addons-for-gutenberg'
													) }
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="py-2 pb-4 px-6 sm:flex sm:flex-row  sm:ml-20">
									<button
										type="button"
										onClick={ regenerateAssets }
										className="w-full inline-flex justify-center rounded border border-slate-200 shadow-sm px-4 py-2 bg-spectra font-medium text-white focus:bg-spectra-hover hover:bg-spectra-hover focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
									>
									{ __( 'Regenerate', 'ultimate-addons-for-gutenberg' ) }
                                    { 'loading' === regenerateAssetsState && (
                                        <svg
                                            className="animate-spin -mr-1 ml-3 h-5 w-5 text-white"
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
									</button>
									<button
										type="button"
										onClick={ closeModal }
										className="mt-3 sm:mt-0 nline-flex w-full justify-center rounded-md bg-white text-gray-600 border border-gray-300 px-3 py-2 text-sm font-semibold text-grey hover:bg-gray-100 shadow-sm sm:ml-2 sm:w-auto"
									>
										{ __( 'Close', 'ultimate-addons-for-gutenberg' ) }
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			) }
		</section>
	);
};

export default RegenerateAssets;
