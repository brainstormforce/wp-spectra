import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Switch } from '@bsf/force-ui';

const CopyPasteStyles = () => {
	const dispatch = useDispatch();

	const enableCopyPasteStyles = useSelector( ( state ) => state.enableCopyPasteStyles );
	const enableCopyPasteStylesStatus = 'disabled' === enableCopyPasteStyles ? false : true;

	const updateEnableCopyPasteStylesStatus = () => {
		let assetStatus;
		if ( enableCopyPasteStyles === 'disabled' ) {
			assetStatus = 'enabled';
		} else {
			assetStatus = 'disabled';
		}

		dispatch( { type: 'UPDATE_ENABLE_COPY_PASTE_STYLES', payload: assetStatus } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.copy_paste_nonce,
			value: assetStatus,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_copy_paste',
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
				title={ __( 'Copy Paste Styles', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					'Enable the "Copy Paste Styles" option to have the ability to copy & paste Spectra & Core Gutenberg Blocks Styles.',
					'ultimate-addons-for-gutenberg'
				) }
			>
				<Switch
					aria-label="Switch Element"
					id="switch-element"
					value={ enableCopyPasteStylesStatus }
					onChange={ updateEnableCopyPasteStylesStatus }
					size="md"
					className="uagb-remove-ring border-none"
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default CopyPasteStyles;
