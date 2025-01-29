import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import getApiData from '@Controls/getApiData';

import SettingsItem from './SettingsItem';
import { Input } from '@bsf/force-ui';

const BlocksEditorSpacing = () => {

	const dispatch = useDispatch();

    const blocksEditorSpacing = useSelector( ( state ) => state.blocksEditorSpacing );

	const updateBlocksEditorSpacing = ( value ) => {
		dispatch( { type: 'UPDATE_BLOCKS_EDITOR_SPACING', payload: value } );

		// Create an object with the security and value properties
        const data = {
            security: uag_react.blocks_editor_spacing_nonce,
            value,
        };
        // Call the getApiData function with the specified parameters
        const getApiFetchData = getApiData( {
            url: uag_react.ajax_url,
            action: 'uag_blocks_editor_spacing',
            data,
        } );
        // Wait for the API call to complete, then update the state to show a notification that the settings have been saved
        getApiFetchData.then( () => {
            dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: __( 'Successfully saved!', 'ultimate-addons-for-gutenberg' ) } );
        } );
	};

    return (
        <>
			<SettingsItem
				title={ __( 'Blocks Editor Spacing', 'ultimate-addons-for-gutenberg' ) }
				settingText={ __( 'This setting will apply spacing in between all blocks inside block editor.', 'ultimate-addons-for-gutenberg' ) }
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
					value={ blocksEditorSpacing }
					onChange={ updateBlocksEditorSpacing }
					min={ 0 }
					max={ 100 }
				/>
			</SettingsItem>
			<hr className="w-full border-b-0 border-x-0 border-t border-solid border-t-border-subtle" />
		</>
    );
};

export default BlocksEditorSpacing;
