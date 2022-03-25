import React, {useState} from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import apiFetch from '@wordpress/api-fetch';
import PropTypes from 'prop-types';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const propTypes = {};

const defaultProps = {};

export default function DynamicContent(props) {
	const dispatch = useDispatch();
	const dynamicContentMode = useSelector( ( state ) => state.dynamicContentMode );

	const dynamicContentHandler = (e) => {
		dispatch({type: 'UPDATE_DYNAMIC_CONTENT_MODE', payload: e.target.value })
		const formData = new window.FormData();
		formData.append( 'action', 'uag_dynamic_content_mode' );
		formData.append( 'security', uag_react.dynamic_content_mode_nonce );
		formData.append( 'value', e.target.value );
		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
	}
	return (
		<React.Fragment>
			<section>
				<section className='flex mt-8'>
					<div className='pr-16 pb-8 w-[78%]'>
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							{__( 'Dynamic Content', 'ultimate-addons-for-gutenberg' )}
						</h3>
						<p className="mt-[0.6rem] text-sm ">
							{ __( 'Set Dynamic Content Showing Position', 'ultimate-addons-for-gutenberg' ) }
						</p>
					</div>
					<div>
					<div className="flex flex-row gap-x-4 justify-center">
							<div className="form-check flex justify-center content-center">
								<input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="dynamic_content_mode" value="popup" onChange={dynamicContentHandler} id="dynamic-content-popup" checked={dynamicContentMode === 'popup'} />
								<label className="form-check-label inline-block text-gray-800" htmlFor="dynamic-content-popup">
									{__('Popup', 'ultimate-addons-for-gutenberg')}
								</label>
							</div>
							<div className="form-check flex justify-center content-center">
								<input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="dynamic_content_mode" value="sidebar" onChange={dynamicContentHandler} id="dynamic-content-sidebar" checked={dynamicContentMode === 'sidebar'} />
								<label className="form-check-label inline-block text-gray-800" htmlFor="dynamic-content-sidebar">
									{__('Sidebar', 'ultimate-addons-for-gutenberg')}
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
