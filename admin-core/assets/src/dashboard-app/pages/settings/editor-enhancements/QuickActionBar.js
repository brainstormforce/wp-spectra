import { __ } from '@wordpress/i18n';
import { useCallback } from '@wordpress/element';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from '@Helpers/Helpers';
import getApiData from '@Controls/getApiData';

import SettingsItem from '../SettingsItem';
import { Switch } from '@bsf/force-ui';

const QuickActionBar = () => {
	const enableQuickActionSidebarExtension = useSelector( ( state ) => state.enableQuickActionSidebarExtension );
	const dispatch = useDispatch();

	const QuickActionSidebarStatus = 'enabled' === enableQuickActionSidebarExtension;

	// Debounce function to limit the rate of execution of a function.
	const debouncedApiCall = useCallback(
		debounce( ( status ) => {
			const data = {
				security: uag_react.enable_quick_action_sidebar_nonce,
				value: status,
			};

			const getApiFetchData = getApiData( {
				url: uag_react.ajax_url,
				action: 'uag_enable_quick_action_sidebar',
				data,
			} );

			getApiFetchData.then( () => {} );
		}, 300 ), // Adjust the delay as needed.
		[ enableQuickActionSidebarExtension ]
	);

	const updateQuickActionSidebarStatus = () => {
		let assetStatus;
		if ( enableQuickActionSidebarExtension === 'enabled' ) {
			assetStatus = 'disabled';
		} else {
			assetStatus = 'enabled';
		}

		dispatch( { type: 'UPDATE_ENABLE_QUICK_ACTION_SIDEBAR_EXTENSION', payload: assetStatus } );
		dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		debouncedApiCall( assetStatus ); // Call the debounced function.
	};

	return (
		<>
			<SettingsItem
				title={ __( 'Enable Quick Action Bar', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'The Spectra Quick Action Bar lets you have all your frequently used Spectra blocks right at your fingertips!',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					value={ QuickActionSidebarStatus }
					onChange={ updateQuickActionSidebarStatus }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default QuickActionBar;
