import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';

import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Switch } from '@bsf/force-ui';

const LegacyBlocks = () => {
	const dispatch = useDispatch();

	const enableLegacyBlocks = useSelector( ( state ) => state.enableLegacyBlocks );
	const enableLegacyBlocksStatus = 'no' === enableLegacyBlocks ? false : true;

	const updateEnableLegacyBlocks = () => {
		let assetStatus;
		if ( enableLegacyBlocks === 'no' ) {
			assetStatus = 'yes';
		} else {
			assetStatus = 'no';
		}

		dispatch( { type: 'UPDATE_LEGACY_BLOCKS', payload: assetStatus } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.enable_legacy_blocks_nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_enable_legacy_blocks',
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
				title={ __( 'Enable Legacy Blocks', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Enable this option to enable the support of our Legacy Blocks on the site.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					value={ enableLegacyBlocksStatus }
					onChange={ updateEnableLegacyBlocks }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
		</>
	);
};

export default LegacyBlocks;
