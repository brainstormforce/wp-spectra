import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Switch } from '@bsf/force-ui';

const OnPageCSS = () => {
	const dispatch = useDispatch();

	const enableOnPageCSS = useSelector( ( state ) => state.enableOnPageCSS );
	const enableOnPageCSSStatus = 'no' === enableOnPageCSS ? false : true;

	const updateEnableOnPageCSSStatus = () => {
		let assetStatus;
		if ( enableOnPageCSS === 'no' ) {
			assetStatus = 'yes';
		} else {
			assetStatus = 'no';
		}

		dispatch( { type: 'UPDATE_ON_PAGE_CSS_BUTTON', payload: assetStatus } );

		const action = 'uag_enable_on_page_css_button',
			nonce = uag_react.enable_on_page_css_button_nonce;

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
				title={ __( 'Custom CSS', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Enable the "Custom CSS" option if you want to add your own CSS code on post/page to customize the page as per your expectations.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					value={ enableOnPageCSSStatus }
					onChange={ updateEnableOnPageCSSStatus }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default OnPageCSS;
