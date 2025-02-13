import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

import SettingsItem from '../SettingsItem';
import { Switch } from '@bsf/force-ui';

const TemplatesButton = () => {
	const dispatch = useDispatch();

	const enableTemplates = useSelector( ( state ) => state.enableTemplates );
	const enableTemplatesStatus = 'no' === enableTemplates ? false : true;

	const updateEnableTemplatesStatus = () => {
		let assetStatus;
		if ( enableTemplates === 'no' ) {
			assetStatus = 'yes';
		} else {
			assetStatus = 'no';
		}

		dispatch( { type: 'UPDATE_TEMPLATES_BUTTON', payload: assetStatus } );

		const action = 'uag_enable_templates_button',
			nonce = uag_react.enable_templates_button_nonce;

		// Create an object with the security and value properties
		const data = {
			security: nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action,
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
				title={ __( 'Enable Templates Button', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Spectra comes with a stunning library of page templates and block patterns. This library is accessible with the Templates button while editing the page or post. Manage the visibility of that button with this option.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					value={ enableTemplatesStatus }
					onChange={ updateEnableTemplatesStatus }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
		</>
	);
};

export default TemplatesButton;
