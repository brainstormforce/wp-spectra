import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import apiFetch from '@wordpress/api-fetch';

const BlocksEditorSpacing = () => {

	const dispatch = useDispatch();

    const blocksEditorSpacing = useSelector( ( state ) => state.blocksEditorSpacing );

	const updateBlocksEditorSpacing = ( e ) => {
		const value = e.target.value;

		dispatch( {type: 'UPDATE_BLOCKS_EDITOR_SPACING', payload: value } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_blocks_editor_spacing' );
		formData.append( 'security', uag_react.blocks_editor_spacing_nonce );
		formData.append( 'value', value );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
		} );
	};

    return (
        <>
            <section className='flex border-b border-solid border-slate-200'>
                <div className='pr-16 pb-8 w-[78%]'>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {__( 'Blocks Editor Spacing', 'ultimate-addons-for-gutenberg' )}
                    </h3>
                    <p className="mt-[0.6rem] text-sm ">
                        {
                            // eslint-disable-next-line @wordpress/i18n-no-variables
                            __( `This will apply spacing in between all blocks inside block editor. `, 'ultimate-addons-for-gutenberg' )
                        }
                    </p>
                </div>
                <div className='flex spectra-content-width-input-wrap'>
					<input className="appearance-none block w-20 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" value={blocksEditorSpacing} onChange={updateBlocksEditorSpacing} type="number" placeholder="1200" min={0} max={1600} />
					<span className="inline-flex h-8 items-center px-3 rounded-r-md border border-l-0 border-gray-200 bg-white text-gray-500 sm:text-sm">
						{ __( 'px', 'ultimate-addons-for-gutenberg' ) }
					</span>
                </div>
            </section>
        </>
    );
};

export default BlocksEditorSpacing;
