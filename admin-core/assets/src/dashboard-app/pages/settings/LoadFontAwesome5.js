import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Switch } from '@bsf/force-ui';

const LoadFontAwesome5 = () => {

    const dispatch = useDispatch();

    const enableFontAwesome5 = useSelector( ( state ) => state.enableFontAwesome5 );
    const enableFontAwesome5Status = 'disabled' === enableFontAwesome5 ? false : true;

    const updateEnableFontAwesome5Status = () => {

        let assetStatus;
		if ( enableFontAwesome5 === 'disabled' ) {
            assetStatus = 'enabled';
		} else {
            assetStatus = 'disabled';
		}

        dispatch( { type: 'UPDATE_ENABLE_FONT_AWESOME_5', payload: assetStatus } );

		// Create an object with the security and value properties
        const data = {
            security: uag_react.load_font_awesome_5_nonce,
            value: assetStatus,
        };
        // Call the getApiData function with the specified parameters
        const getApiFetchData = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_load_font_awesome_5',
            data,
        } );
        // Wait for the API call to complete, then update the state to show a notification that the settings have been saved
        getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ) } );
        } );
    };

    return (
        // <>
			<SettingsItem
				title={ __( 'Load Font Awesome 5 Support', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __( 'Enable this to make sure all previously used Font Awesome 5 icons are displayed correctly while using the Font Awesome 6 library.', 'ultimate-addons-for-gutenberg' ) }
			>
				<Switch
					aria-label="Switch Element"
					id="switch-element"
					value={ enableFontAwesome5Status }
					onChange={ updateEnableFontAwesome5Status }
					size="md"
                    className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
    );
};

export default LoadFontAwesome5;
