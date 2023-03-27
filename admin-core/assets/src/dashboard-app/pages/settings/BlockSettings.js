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
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
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
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
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
			dispatch( {type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	const updateRecaptchaSecretKeyV3 = ( e ) => {
		const value = e.target.value;

		dispatch( { type: 'UPDATE_RECAPTCHA_SECRET_KEY_V3', payload: value } );
		const formData = new window.FormData();

		formData.append( 'action', `uag_recaptcha_secret_key_v3` );
		formData.append( 'security', uag_react.recaptcha_secret_key_v3_nonce );
		formData.append( 'value', value );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	return (
		<section className='block border-b border-solid border-slate-200 px-12 py-8 justify-between'>
			<div className='mr-16 w-full flex items-center'>
				<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
						{ __( 'Google reCAPTCHA', 'ultimate-addons-for-gutenberg' ) }
				</h3>
			</div>
			<p className="mt-2 w-9/12 text-sm text-slate-500">{ __( 'To enable reCAPTCHA for your form, please follow the steps mentioned ', 'ultimate-addons-for-gutenberg' ) }
				<a className="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" href="https://www.google.com/recaptcha/admin/create" target="_blank" rel="noreferrer">
					{ __( 'here. ', 'ultimate-addons-for-gutenberg' ) }
				</a>
			</p>
			{/* Recaptcha V2 */}
			<h4 className="mt-8 font-medium text-sm text-slate-800">
				{ __( 'reCAPTCHA v2', 'ultimate-addons-for-gutenberg' ) }
			</h4>
			<div className='w-9/12 mt-3 grid grid-cols-2 gap-5'>
				<input
					className="h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field"
					placeholder={ __( 'Site Key v2', 'ultimate-addons-for-gutenberg' ) }
					value={ siteKeyV2 }
					name='site_key_v2'
					onChange={ updateRecaptchaSiteKeyV2 }
					id="grid-zip"
					type="text"
				/>
				<input
					className="h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field"
					placeholder={ __( 'Secret Key v2', 'ultimate-addons-for-gutenberg' ) }
					id="grid-zip"
					value={ secretKeyV2 }
					name='secret_key_v2'
					onChange={ updateRecaptchaSecretKeyV2 }
					type="text"
				/>
			</div>
			{/* Recaptcha V3 */}
			<h4 className="mt-8 font-medium text-sm text-slate-800">
				{ __( 'reCAPTCHA v3', 'ultimate-addons-for-gutenberg' ) }
			</h4>
			<div className='w-9/12 mt-3 grid grid-cols-2 gap-5'>
				<input
					className="h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field"
					placeholder={ __( 'Site Key v3', 'ultimate-addons-for-gutenberg' ) }
					id="grid-zip"
					type="text"
					value={ siteKeyV3 }
					name='site_key_v3'
					onChange={ updateRecaptchaSiteKeyV3 }
				/>
				<input
					className="h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field"
					placeholder={ __( 'Secret Key v3', 'ultimate-addons-for-gutenberg' ) }
					id="grid-zip"
					type="text"
					value={ secretKeyV3 }
					name='secret_key_v3'
					onChange={ updateRecaptchaSecretKeyV3 }
				/>
			</div>
		</section>
	);
};

export default BlockSettings;
