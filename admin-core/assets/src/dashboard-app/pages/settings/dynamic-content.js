import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import apiFetch from '@wordpress/api-fetch';

const propTypes = {};

const defaultProps = {};

export default function DynamicContent() {
	const dispatch = useDispatch();
	const dynamicContentMode = useSelector( ( state ) => state.dynamicContentMode );

	const dynamicContentHandler = ( e ) => {
		dispatch( {type: 'UPDATE_DYNAMIC_CONTENT_MODE', payload: e.target.value } )
		const formData = new window.FormData();
		formData.append( 'action', 'uag_dynamic_content_mode' );
		formData.append( 'security', uag_react.dynamic_content_mode_nonce );
		formData.append( 'value', e.target.value );
		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	}
	return (
		<React.Fragment>
			<section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
				<section className='flex items-start'>
					<div className='pr-16 w-[78%]'>
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							{__( 'Dynamic Content', 'ultimate-addons-for-gutenberg' )}
						</h3>
						<p className="mt-[0.6rem] text-sm ">
							{ __( 'Choose how you want to display dynamic content settings', 'ultimate-addons-for-gutenberg' ) }
						</p>
					</div>
					<div className='mt-1.5'>
						<div className="flex flex-row gap-[2.50rem] justify-center">
							<div className="form-check flex justify-center items-center">
								<input className="uag-radio-input form-check-input appearance-none rounded-full h-1.25rem w-1.25rem border border-bg-spectra bg-white checked:bg-spectra checked:bg-spectra focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="radio" name="dynamic_content_mode" value="popup" onChange={dynamicContentHandler} id="dynamic-content-popup" checked={dynamicContentMode === 'popup'} />
								<label className="form-check-label inline-block text-gray-800 ml-1 -mt-0.5" htmlFor="dynamic-content-popup">
									{__( 'Popup', 'ultimate-addons-for-gutenberg' )}
								</label>
							</div>
							<div className="form-check flex justify-center items-center">
								<input className="uag-radio-input form-check-input appearance-none rounded-full h-1.25rem w-1.25rem border border-bg-spectra bg-white checked:bg-spectra checked:bg-spectra focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="radio" name="dynamic_content_mode" value="sidebar" onChange={dynamicContentHandler} id="dynamic-content-sidebar" checked={dynamicContentMode === 'sidebar'} />
								<label className="form-check-label inline-block text-gray-800 ml-1 -mt-0.5" htmlFor="dynamic-content-sidebar">
									{__( 'Sidebar', 'ultimate-addons-for-gutenberg' )}
								</label>
							</div>
						</div>
					</div>
				</section>
			</section>
		</React.Fragment>
	);
}

DynamicContent.propTypes = propTypes;
DynamicContent.defaultProps = defaultProps;
