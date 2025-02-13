import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Switch } from '@bsf/force-ui';

const AutoBlockRecovery = () => {
	const dispatch = useDispatch();

	const enableAutoBlockRecovery = useSelector( ( state ) => state.enableAutoBlockRecovery );
	const enableAutoBlockRecoveryStatus = 'disabled' === enableAutoBlockRecovery ? false : true;

	const updateEnableAutoBlockRecoveryStatus = () => {
		let assetStatus;
		if ( enableAutoBlockRecovery === 'disabled' ) {
			assetStatus = 'enabled';
		} else {
			assetStatus = 'disabled';
		}

		dispatch( { type: 'UPDATE_ENABLE_AUTO_BLOCK_RECOVERY', payload: assetStatus } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.auto_block_recovery_nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_auto_block_recovery',
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
				title={ __( 'Automatic Block Recovery', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Enable this to automatically recover any erroneous blocks that may occur on your web pages. This will save you time spent on clicking all those "Attempt Block Recovery" Buttons.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					value={ enableAutoBlockRecoveryStatus }
					onChange={ updateEnableAutoBlockRecoveryStatus }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default AutoBlockRecovery;
