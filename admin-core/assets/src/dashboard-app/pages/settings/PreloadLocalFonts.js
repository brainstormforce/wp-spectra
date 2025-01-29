import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';

import getApiData from '@Controls/getApiData';
import { Switch } from '@bsf/force-ui';
import SettingsItem, { SettingsItemDisabled } from './SettingsItem';

const PreloadLocalFonts = () => {
	const dispatch = useDispatch();

	const enableLoadFontsLocally = useSelector( ( state ) => state.enableLoadFontsLocally );
	const enablePreloadLocalFonts = useSelector( ( state ) => state.enablePreloadLocalFonts );

	const enablePreloadLocalFontsStatus = 'disabled' === enablePreloadLocalFonts ? false : true;

	const updatePreloadLocalFontsStatus = () => {
		let assetStatus;
		if ( enablePreloadLocalFonts === 'disabled' ) {
			assetStatus = 'enabled';
		} else {
			assetStatus = 'disabled';
		}

		dispatch( { type: 'UPDATE_ENABLE_PRELOAD_LOCAL_FONTS', payload: assetStatus } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.preload_local_fonts_nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_preload_local_fonts',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	return (
		<>
			{ enableLoadFontsLocally !== 'disabled' ? (
				<SettingsItem
					title={ __( 'Preload Local Fonts', 'ultimate-addons-for-gutenberg' ) }
					settingText={ __(
						'This option will load the font files right away on page load. Preloading Local Fonts can speeds up your website even further.',
						'ultimate-addons-for-gutenberg'
					) }
				>
					<Switch
						aria-label="Switch Element"
						id="switch-element"
						value={ enablePreloadLocalFontsStatus }
						onChange={ updatePreloadLocalFontsStatus }
						size="md"
						className="uagb-remove-ring border-none"
					/>
				</SettingsItem>
			) : (
				<SettingsItemDisabled
					title={ __( 'Preload Local Fonts', 'ultimate-addons-for-gutenberg' ) }
					settingText={ __(
						'This option will load the font files right away on page load. Preloading Local Fonts can speeds up your website even further.',
						'ultimate-addons-for-gutenberg'
					) }
				>
					<Switch
						aria-label="Switch Element"
						id="switch-element"
						value={ enablePreloadLocalFontsStatus }
						onChange={ updatePreloadLocalFontsStatus }
						size="md"
						disabled
						className="uagb-remove-ring border-none"
					/>
				</SettingsItemDisabled>
			) }
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default PreloadLocalFonts;
