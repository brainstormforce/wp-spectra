import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

import getApiData from '@Controls/getApiData';

const ContainerGlobalElementsGap = () => {

	const containerGlobalElementsGap = useSelector( ( state ) => state.containerGlobalElementsGap );

	const dispatch = useDispatch();

	const saveValue = ( value ) => {
		dispatch( { type: 'UPDATE_CONTAINER_GLOBAL_ELEMENTS_GAP', payload: value } );

		// Create an object with the security and value properties
        const data = {
            security: uag_react.container_global_elements_gap_nonce,
            value,
        };
		// Call the getApiData function with the specified parameters
        const getApiFetchData = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_container_global_elements_gap',
            data,
        } );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
        getApiFetchData.then( () => {
            dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
        } );
	};

	const updateContainerGlobalElementsGap = ( e ) => {
		const value = e.target.value;
		saveValue( value );
	};

    return (
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    {__( 'Container Elements Gap', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <div className='flex spectra-content-width-input-wrap'>
                    <input className="appearance-none block w-20 h-8 leading-tight transition spectra-admin__input-field" id="grid-zip" value={containerGlobalElementsGap} onChange={updateContainerGlobalElementsGap} type="number" placeholder="" min={0} max={100} />
                    <span className="inline-flex h-8 items-center sm:text-sm transition spectra-admin__input-field--end-display">
                        { __( 'px', 'ultimate-addons-for-gutenberg' ) }
                    </span>
                </div>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'This setting will apply default Row & Column Gaps in the Container Block.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default ContainerGlobalElementsGap;
