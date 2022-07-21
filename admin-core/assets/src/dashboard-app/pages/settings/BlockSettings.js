import React , { useState }from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import apiFetch from '@wordpress/api-fetch';
import { Button } from '@wordpress/components';

const BlockSettings = () => {

	const dispatch = useDispatch();
	const siteKeyV2 = useSelector( ( state ) => state.siteKeyV2 );
	const secretKeyV2 = useSelector( ( state ) => state.secretKeyV2 );
	const siteKeyV3 = useSelector( ( state ) => state.siteKeyV3 );
	const secretKeyV3 = useSelector( ( state ) => state.secretKeyV3 );

	const [show, setshow] = useState( false );

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
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
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
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
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
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
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
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: true } );
		} );
	};

	return (
		<div className='block p-8 justify-between'>
			<div className='pr-16 w-[78%]'>
				<Button className='pr-16 inline-flex w-10/12 uag-accordion'
						onClick={ () => setshow( ! show )}
					>
                    { ! show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"></path></svg> )}
                    { show && ( <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"></path></svg> )}
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
						{__( 'Form - Google reCAPTCHA', 'ultimate-addons-for-gutenberg' )}
					</h3>
                </Button>
				{ show && (
					<>
						<p className='mt-[0.6rem] mb-[0.6rem] text-sm '>{ __( 'To enable reCAPTCHA feature on your forms blocks Please enable reCAPTCHA option on your blocks setting and select version. Add google reCAPTCHA secret and site key here. reCAPTCHA will be added to your page on front-end.', 'ultimate-addons-for-gutenberg' ) }</p>
						<a className='text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover' href="https://www.google.com/recaptcha/admin/create" target="_blank" rel="noreferrer">
							{ __( 'Get Keys', 'ultimate-addons-for-gutenberg' ) }
						</a>
						{ __( ' | ', 'ultimate-addons-for-gutenberg' ) }
						<a className='text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover' href="https://developers.google.com/recaptcha/intro" target="_blank" rel="noreferrer">
							{ __(
								' Documentation',
								'ultimate-addons-for-gutenberg'
							) }
						</a>
						<section className='flex justify-between mt-8'>
							<div className='spectra-recaptcha-input-field'>
								<h3 className="mb-5 font-medium text-md text-gray-900">
									{__( 'V2', 'ultimate-addons-for-gutenberg' )}
								</h3>
								<input placeholder="Site Key V2" className="mb-5 appearance-none block w-300 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 spectra-admin__input-field" value={siteKeyV2} name='site_key_v2' onChange={updateRecaptchaSiteKeyV2} id="grid-zip"  type="text"  />
								<input placeholder="Secret Key V2" className="mb-5 appearance-none block w-300 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 spectra-admin__input-field" id="grid-zip"  value={secretKeyV2} name='secret_key_v2' onChange={updateRecaptchaSecretKeyV2}  type="text"  />
							</div>
							<div className='spectra-recaptcha-input-field'>
								<h3 className="mb-5 font-medium text-md text-gray-900">
									{__( 'V3', 'ultimate-addons-for-gutenberg' )}
								</h3>
								<input placeholder="Site Key V3" className="mb-5 appearance-none block w-300 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 spectra-admin__input-field" id="grid-zip"  type="text"  value={siteKeyV3} name='site_key_v3' onChange={updateRecaptchaSiteKeyV3}/>
								<input placeholder="Secret Key V3" className="mb-5 appearance-none block w-300 h-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-0 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 spectra-admin__input-field" id="grid-zip"  type="text"  value={secretKeyV3} name='secret_key_v3' onChange={updateRecaptchaSecretKeyV3}/>
							</div>
						</section>
					</>
				)}
			</div>
		</div>
	);
};

export default BlockSettings;
