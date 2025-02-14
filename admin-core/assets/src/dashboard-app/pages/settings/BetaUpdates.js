import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';

import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Switch } from '@bsf/force-ui';

const BetaUpdates = () => {
	const dispatch = useDispatch();

	const enableBeta = useSelector( ( state ) => state.enableBeta );
	const enableBetaStatus = 'no' === enableBeta ? false : true;

	const updateEnableBetaStatus = () => {
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
		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
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
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default BetaUpdates;
