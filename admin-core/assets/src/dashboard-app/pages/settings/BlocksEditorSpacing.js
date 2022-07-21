import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '@wordpress/components';

const BlocksEditorSpacing = () => {

	const dispatch = useDispatch();

    const blocksEditorSpacing = useSelector( ( state ) => state.blocksEditorSpacing );

	const [show, setshow] = useState( false );

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
            <section className='flex border-b border-solid border-slate-200 p-8 justify-between'>     
                <div className='pr-16 w-full'>
                    <Button className='pr-16 w-[78%] inline-flex w-10/12 uag-accordion'
                            onClick={ () => setshow( ! show )}
                        >
                        { ! show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg> )}
                        { show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg> )}
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {__( 'Blocks Editor Spacing', 'ultimate-addons-for-gutenberg' )}
                        </h3>
                    </Button>
                    <div className='flex spectra-content-width-input-wrap'>
                        <input className="appearance-none block w-20 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 spectra-admin__input-field" id="grid-zip" value={blocksEditorSpacing} onChange={updateBlocksEditorSpacing} type="number" placeholder="1200" min={0} max={1600} />
                        <span className="inline-flex h-8 items-center px-3 rounded-r-md border border-l-0 border-gray-200 bg-white text-gray-500 sm:text-sm spectra-admin__input-field--end-display">
                            { __( 'px', 'ultimate-addons-for-gutenberg' ) }
                        </span>
                    </div>
                    { show && ( 
                        <p className="mt-[0.6rem] text-sm ">
                            {
                                // eslint-disable-next-line @wordpress/i18n-no-variables
                                __( `This setting will apply spacing in between all blocks inside block editor. `, 'ultimate-addons-for-gutenberg' )
                            }
                        </p>
                    )}
                </div>
            </section>
        </>
    );
};

export default BlocksEditorSpacing;
