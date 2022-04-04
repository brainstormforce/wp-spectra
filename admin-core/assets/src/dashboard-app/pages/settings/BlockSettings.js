import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import apiFetch from '@wordpress/api-fetch';

const BlockSettings = () => {

	const dispatch = useDispatch();
	const siteKeyV2 = useSelector( ( state ) => state.siteKeyV2 );
	const secretKeyV2 = useSelector( ( state ) => state.secretKeyV2 );
	const siteKeyV3 = useSelector( ( state ) => state.siteKeyV3 );
	const secretKeyV3 = useSelector( ( state ) => state.secretKeyV3 );

	const updateRecaptchaSiteKeyV2 = ( e ) => {
		const value = e.target.value;

		dispatch( {type: 'UPDATE_RECAPTCHA_SITE_KEY_V2', payload: value } );
		const formData = new window.FormData();

		formData.append( 'action', `uag_recaptcha_site_key_v2` );
		formData.append( 'security', uag_react.recaptcha_site_key_v2_nonce );
		formData.append( 'value', value );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
	};

	const updateRecaptchaSiteKeyV3 = ( e ) => {
		const value = e.target.value;

		dispatch( {type: 'UPDATE_RECAPTCHA_SITE_KEY_V3', payload: value } );
		const formData = new window.FormData();

		formData.append( 'action', `uag_recaptcha_site_key_v3` );
		formData.append( 'security', uag_react.recaptcha_site_key_v3_nonce );
		formData.append( 'value', value );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
	};

	const updateRecaptchaSecretKeyV2 = ( e ) => {
		const value = e.target.value;

		dispatch( {type: 'UPDATE_RECAPTCHA_SECRET_KEY_V2', payload: value } );
		const formData = new window.FormData();

		formData.append( 'action', `uag_recaptcha_secret_key_v2` );
		formData.append( 'security', uag_react.recaptcha_secret_key_v2_nonce );
		formData.append( 'value', value );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
	};

	const updateRecaptchaSecretKeyV3 = ( e ) => {
		const value = e.target.value;

		dispatch( {type: 'UPDATE_RECAPTCHA_SECRET_KEY_V3', payload: value } );
		const formData = new window.FormData();

		formData.append( 'action', `uag_recaptcha_secret_key_v3` );
		formData.append( 'security', uag_react.recaptcha_secret_key_v3_nonce );
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
		<section className='flex'>
			<div className='pr-16 w-[100%]'>
				<h3 className="text-lg leading-6 font-medium text-gray-900">
					{__( 'Google Recaptcha', 'ultimate-addons-for-gutenberg' )}
				</h3>
				<p className="mt-[0.6rem] text-sm">
					{ __( 'To enable recaptcha feature on your forms blocks Please enable recaptcha option on your blocks setting and select version. Add google recaptcha secret and site key here. Recaptcha will be added to your page on front-end.', 'ultimate-addons-for-gutenberg' ) }
				</p>
			</div>
		</section>
		<section className='flex border-b border-solid border-slate-200'>
				<div className='pr-16 pb-8 w-[50%] spectra-recaptcha-input-field'>
					<h3 className="mb-5 font-medium text-md text-gray-900">
						{__( 'V2', 'ultimate-addons-for-gutenberg' )}
					</h3>
					<input placeholder="Site Key V2" className="mb-5 appearance-none block w-300 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={siteKeyV2} name='site_key_v2' onChange={updateRecaptchaSiteKeyV2} id="grid-zip"  type="text"  />
					<input placeholder="Secret Key V2" className="mb-5 appearance-none block w-300 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip"  value={secretKeyV2} name='secret_key_v2' onChange={updateRecaptchaSecretKeyV2}  type="text"  />
				</div>
				<div className='pr-16 pb-8 w-[50%] spectra-recaptcha-input-field'>
					<h3 className="mb-5 font-medium text-md text-gray-900">
						{__( 'V3', 'ultimate-addons-for-gutenberg' )}
					</h3>
					<input placeholder="Site Key V3" className="mb-5 appearance-none block w-300 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip"  type="text"  value={siteKeyV3} name='site_key_v3' onChange={updateRecaptchaSiteKeyV3}/>
					<input placeholder="Secret Key V3" className="mb-5 appearance-none block w-300 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip"  type="text"  value={secretKeyV3} name='secret_key_v3' onChange={updateRecaptchaSecretKeyV3}/>
				</div>
			</section>
		</>
	);
};

export default BlockSettings;
