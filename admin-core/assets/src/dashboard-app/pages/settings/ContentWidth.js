import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';

import getApiData from '@Controls/getApiData';

const ContentWidth = () => {

	const dispatch = useDispatch();

    const contentWidth = useSelector( ( state ) => state.contentWidth );

	const updateContentWidth = ( e ) => {
		const value = e.target.value;

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
        <section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
            <div className='mr-16 w-full flex items-center'>
                <h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
					{ __( 'Default Content Width', 'ultimate-addons-for-gutenberg' ) }
				</h3>
				<div className='flex spectra-content-width-input-wrap'>
					<input className="appearance-none block w-20 h-8 leading-tight transition spectra-admin__input-field" id="grid-zip" value={contentWidth} onChange={updateContentWidth} type="number" placeholder="1140" min={0} max={1600} />
					<span className="inline-flex h-8 items-center sm:text-sm transition spectra-admin__input-field--end-display">
						{ __( 'px', 'ultimate-addons-for-gutenberg' ) }
					</span>
				</div>
			</div>
			<p className="mt-2 w-9/12 text-sm text-slate-500">
				{
					__( 'This setting will apply to Container Block\'s default Content Width.', 'ultimate-addons-for-gutenberg' )
				}
			</p>
			{ 'Spectra' !== uag_react.uag_content_width_set_by &&
				<p className="mt-2 w-9/12 text-sm text-slate-500 italic">
					{
						// eslint-disable-next-line @wordpress/i18n-no-variables
						__( `The current Content width is applied from ${ uag_react.uag_content_width_set_by }.`, 'ultimate-addons-for-gutenberg' )
					}
				</p>
			}
		</section>
    );
};

export default ContentWidth;
