import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';

import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Switch } from '@bsf/force-ui';

const LoadFontsLocally = () => {
	const dispatch = useDispatch();

	const enableLoadFontsLocally = useSelector( ( state ) => state.enableLoadFontsLocally );
	const enableLoadFontsLocallyStatus = 'disabled' === enableLoadFontsLocally ? false : true;

	const updateLoadFontsLocallyStatus = () => {
		let assetStatus;
		if ( enableLoadFontsLocally === 'disabled' ) {
			assetStatus = 'enabled';
		} else {
			assetStatus = 'disabled';
		}

		dispatch( { type: 'UPDATE_ENABLE_LOAD_FONTS_LOCALLY', payload: assetStatus } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.load_gfonts_locally_nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_load_gfonts_locally',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	return (
		<>
			<SettingsItem
				title={ __( 'Load Google Fonts Locally', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Enable this option to download Google fonts and save them on your server. This can be great for improving speed of your website and to comply with GDPR laws.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					aria-label="Switch Element"
					id="switch-element"
					value={ enableLoadFontsLocallyStatus }
					onChange={ updateLoadFontsLocallyStatus }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default LoadFontsLocally;
