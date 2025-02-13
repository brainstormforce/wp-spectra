import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

import SettingsItem from './SettingsItem';
import { Input } from '@bsf/force-ui';

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
            dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ) } );
        } );
	};

	const updateContainerGlobalElementsGap = ( value ) => {
		saveValue( value );
	};

    return (
        <>
			<SettingsItem
				title={ __( 'Container Elements Gap', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __( 'This setting will apply default Row & Column Gaps in the Container Block.', 'ultimate-addons-for-gutenberg' ) }
			>
				<Input
					defaultValue={ 1140 }
					id="default-width"
					className="settings-input"
					suffix={
						<span className="text-badge-color-gray p-0.5 text-center text-xs font-medium">
							PX
						</span>
					}
					type="number"
					value={ containerGlobalElementsGap }
					onChange={ updateContainerGlobalElementsGap }
					min={ 0 }
					max={ 100 }
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
    );
};

export default ContainerGlobalElementsGap;
