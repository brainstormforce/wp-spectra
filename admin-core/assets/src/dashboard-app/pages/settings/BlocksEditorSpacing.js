import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';

import getApiData from '@Controls/getApiData';

const BlocksEditorSpacing = () => {

	const dispatch = useDispatch();

    const blocksEditorSpacing = useSelector( ( state ) => state.blocksEditorSpacing );

	const updateBlocksEditorSpacing = ( e ) => {
		const value = e.target.value;

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
            dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
        } );
	};

    return (
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
                    {__( 'Blocks Editor Spacing', 'ultimate-addons-for-gutenberg' ) }
                </h3>
                <div className='flex spectra-content-width-input-wrap'>
                    <input className="appearance-none block w-20 h-8 leading-tight transition spectra-admin__input-field" id="grid-zip" value={blocksEditorSpacing} onChange={updateBlocksEditorSpacing} type="number" placeholder="0" min={0} max={100} />
                    <span className="inline-flex h-8 items-center sm:text-sm transition spectra-admin__input-field--end-display">
                        { __( 'px', 'ultimate-addons-for-gutenberg' ) }
                    </span>
                </div>
            </div>
            <p className="mt-2 w-9/12 text-sm text-slate-500">
                { __( 'This setting will apply spacing in between all blocks inside block editor.', 'ultimate-addons-for-gutenberg' ) }
            </p>
        </section>
    );
};

export default BlocksEditorSpacing;
