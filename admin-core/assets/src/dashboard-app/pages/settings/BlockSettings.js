import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';

import getApiData from '@Controls/getApiData';
import { Container, Label } from '@bsf/force-ui';

const BlockSettings = () => {
	const dispatch = useDispatch();
	const siteKeyV2 = useSelector( ( state ) => state.siteKeyV2 );
	const secretKeyV2 = useSelector( ( state ) => state.secretKeyV2 );
	const siteKeyV3 = useSelector( ( state ) => state.siteKeyV3 );
	const secretKeyV3 = useSelector( ( state ) => state.secretKeyV3 );

	const updateRecaptchaSiteKeyV2 = ( e ) => {
		const value = e.target.value;

		dispatch( { type: 'UPDATE_RECAPTCHA_SITE_KEY_V2', payload: value } );
		// Create an object with the security and value properties
		const data = {
			security: uag_react.recaptcha_site_key_v2_nonce,
			value,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_recaptcha_site_key_v2',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	const updateRecaptchaSiteKeyV3 = ( e ) => {
		const value = e.target.value;

		dispatch( { type: 'UPDATE_RECAPTCHA_SITE_KEY_V3', payload: value } );
		// Create an object with the security and value properties
		const data = {
			security: uag_react.recaptcha_site_key_v3_nonce,
			value,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_recaptcha_site_key_v3',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	const updateRecaptchaSecretKeyV2 = ( e ) => {
		const value = e.target.value;

		dispatch( { type: 'UPDATE_RECAPTCHA_SECRET_KEY_V2', payload: value } );
		// Create an object with the security and value properties
		const data = {
			security: uag_react.recaptcha_secret_key_v2_nonce,
			value,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_recaptcha_secret_key_v2',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	const updateRecaptchaSecretKeyV3 = ( e ) => {
		const value = e.target.value;

		dispatch( { type: 'UPDATE_RECAPTCHA_SECRET_KEY_V3', payload: value } );
		// Create an object with the security and value properties
		const data = {
			security: uag_react.recaptcha_secret_key_v3_nonce,
			value,
		};
		// Call the getApiData function with the specified parameters
		const getApiFetchData = getApiData( {
			url: uag_react.ajax_url,
			action: 'uag_recaptcha_secret_key_v3',
			data,
		} );
		// Wait for the API call to complete, then update the state to show a notification that the settings have been saved
		getApiFetchData.then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
	};

	return (
		<Container align="center" className="mb-0.5 w-full flex justify-between">
			<Container.Item className="w-full">
				<Label className="font-semibold" htmlFor="default-width" size="md">
					{ __( 'Google reCAPTCHA', 'ultimate-addons-for-gutenberg' ) }
				</Label>
				<Label className="m-0" size="sm" tag="p" variant="help">
					<div className='mb-1'>
						{ __(
							'To enable reCAPTCHA for your form, please follow the steps mentioned ',
							'ultimate-addons-for-gutenberg'
						) }
						<a
							className="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover"
							href="https://www.google.com/recaptcha/admin/create"
							target="_blank"
							rel="noreferrer"
						>
							{ __( 'here. ', 'ultimate-addons-for-gutenberg' ) }
						</a>
					</div>
				</Label>

				{ /* Recaptcha V2 */ }
				<div className="font-medium text-sm text-slate-800 m-0 mt-4">
					{ __( 'reCAPTCHA v2', 'ultimate-addons-for-gutenberg' ) }
				</div>
				<div className="w-full mt-1 grid grid-cols-2 gap-10 mb-1">
					<input
						className="h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field"
						placeholder={ __( 'Site Key v2', 'ultimate-addons-for-gutenberg' ) }
						value={ siteKeyV2 }
						name="site_key_v2"
						onChange={ updateRecaptchaSiteKeyV2 }
						id="grid-zip"
						type="text"
					/>
					<input
						className="h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field"
						placeholder={ __( 'Secret Key v2', 'ultimate-addons-for-gutenberg' ) }
						id="grid-zip"
						value={ secretKeyV2 }
						name="secret_key_v2"
						onChange={ updateRecaptchaSecretKeyV2 }
						type="text"
					/>
				</div>
				{ /* Recaptcha V3 */ }
				<div className="mt-4 font-medium text-sm text-slate-800 mb-1">
					{ __( 'reCAPTCHA v3', 'ultimate-addons-for-gutenberg' ) }
				</div>
				<div className="w-full mt-3 grid grid-cols-2 gap-10">
					<input
						className="h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field"
						placeholder={ __( 'Site Key v3', 'ultimate-addons-for-gutenberg' ) }
						id="grid-zip"
						type="text"
						value={ siteKeyV3 }
						name="site_key_v3"
						onChange={ updateRecaptchaSiteKeyV3 }
					/>
					<input
						className="h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field"
						placeholder={ __( 'Secret Key v3', 'ultimate-addons-for-gutenberg' ) }
						id="grid-zip"
						type="text"
						value={ secretKeyV3 }
						name="secret_key_v3"
						onChange={ updateRecaptchaSecretKeyV3 }
					/>
				</div>
			</Container.Item>
		</Container>
	);
};

export default BlockSettings;
