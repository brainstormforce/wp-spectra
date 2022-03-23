import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import apiFetch from '@wordpress/api-fetch';

const ContentWidth = () => {

	const dispatch = useDispatch();

    const contentWidth = useSelector( ( state ) => state.contentWidth );

	const updateContentWidth = ( e ) => {
		const value = e.target.value;

		dispatch( {type: 'UPDATE_CONTENT_WIDTH', payload: value } );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_content_width' );
		formData.append( 'security', uag_react.content_width_nonce );
		formData.append( 'value', value );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
	};

    return (
        <>
            <section className='flex border-b border-solid border-slate-200'>
                <div className='pr-16 pb-8 w-[78%]'>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {__( 'Content Width', 'ultimate-addons-for-gutenberg' )}
                    </h3>
                    <p className="mt-[0.6rem] text-sm ">
                        {
                            // eslint-disable-next-line @wordpress/i18n-no-variables
                            __( `This setting will apply to Container Block's default Content width.`, 'ultimate-addons-for-gutenberg' )
                        }
                    </p>
                </div>
                <div className='flex'>
				<input className="appearance-none block w-20 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" value={contentWidth} onChange={updateContentWidth} type="number" placeholder="1200" min={0} max={1600} />
                </div>
            </section>
        </>
    );
};

export default ContentWidth;
