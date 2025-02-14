import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

import SettingsItem from '../SettingsItem';
import { Switch } from '@bsf/force-ui';

const CollapsePanels = () => {
	const dispatch = useDispatch();

	const enableCollapsePanels = useSelector( ( state ) => state.enableCollapsePanels );
	const enableCollapsePanelsStatus = 'disabled' === enableCollapsePanels ? false : true;

	const updateEnableCollapsePanelsStatus = () => {
		let assetStatus;
		if ( enableCollapsePanels === 'disabled' ) {
			assetStatus = 'enabled';
		} else {
			assetStatus = 'disabled';
		}

		dispatch( { type: 'UPDATE_ENABLE_COLLAPSE_PANELS', payload: assetStatus } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.collapse_panels_nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_collapse_panels',
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
				title={ __( 'Collapse Panels', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Enable the "Collapse Panels" option if you want to Collapse all other Panels in your Blocks Settings except for the one which is clicked. This way you have only one Panel of Settings in front of you to Focus on.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					value={ enableCollapsePanelsStatus }
					onChange={ updateEnableCollapsePanelsStatus }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default CollapsePanels;
