import React from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Input } from '@bsf/force-ui';

const ContentWidth = () => {
	const dispatch = useDispatch();

	const contentWidth = useSelector( ( state ) => state.contentWidth );

	const updateContentWidth = ( value ) => {
		dispatch( { type: 'UPDATE_CONTENT_WIDTH', payload: value } );

		// Create an object with the security and value properties
		const data = {
			security: uag_react.content_width_nonce,
			value,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_content_width',
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
				title={ __( 'Default Content Width', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __(
					"This setting will apply to Container Block's default Content Width.",
					'ultimate-addons-for-gutenberg'
				) }
				currentSetting={ sprintf(
					/* translators: abbreviation for units */
					__( 'The current Content width is applied from %s.', 'ultimate-addons-for-gutenberg' ),
					uag_react.uag_content_width_set_by
				) }
			>
				<Input
					defaultValue={ 1140 }
					id="default-width"
					className="settings-input"
					suffix={
						<span className="text-badge-color-gray p-0.5 text-center text-xs font-medium">
							PX
						</span>
					}
					type="number"
					value={ contentWidth }
					onChange={ updateContentWidth }
					min={ 0 }
					max={ 1600 }
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
	);
};

export default ContentWidth;
