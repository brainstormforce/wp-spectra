import React from 'react';
import { __ } from '@wordpress/i18n';
import { Switch } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux';
import apiFetch from '@wordpress/api-fetch';
import PropTypes from 'prop-types';

function classNames( ...classes ) {
    return classes.filter( Boolean ).join( ' ' )
}

const propTypes = {};

const defaultProps = {};

export default function Login(props) {
	const dispatch = useDispatch();
	const social = useSelector( ( state ) => state.social );
	const socialRegister = social ? social.socialRegister : false;
	const googleClientId = social ? social.googleClientId : '';
	const facebookAppId = social ? social.facebookAppId : '';
	const facebookAppSecret = social ? social.facebookAppSecret : '';

	const savedFormData = (type, payload) => {
		dispatch({type, payload })
		const formData = new window.FormData();
		formData.append( 'action', 'uag_social' );
		formData.append( 'security', uag_react.social_nonce );
		switch(type) {
			case 'UPDATE_SOCIAL_REGISTER':
				formData.append( 'socialRegister', payload );
				break;
			case 'UPDATE_GOOGLE_CLIENT_ID':
				formData.append( 'googleClientId', payload );
				break;
			case 'UPDATE_FACEBOOK_APP_ID':
				formData.append( 'facebookAppId', payload );
				break;
			case 'UPDATE_FACEBOOK_APP_SECRET':
				formData.append( 'facebookAppSecret', payload );
				break;
		}
		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
			dispatch( { type: 'UPDATE_SETTINGS_SAVED_NOTIFICATION', payload: 'Successfully saved!' } );
		} );
    };
	return (
		<React.Fragment>
			<section className='flex border-b border-solid border-slate-200 px-12 py-8 justify-between'>
				<div className='pr-16 w-[78%]'>
					<h3 className="p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900">
						{__( 'Social Login Auto Register', 'ultimate-addons-for-gutenberg' )}
					</h3>
					<p className="mt-2 text-sm text-slate-500">
						{ __( 'Enabling this setting will automatically register the users via Google/Facebook.', 'ultimate-addons-for-gutenberg' ) }
					</p>
				</div>
				<div>
					<Switch
						checked={socialRegister}
						onChange={(e) => savedFormData('UPDATE_SOCIAL_REGISTER', !socialRegister)}
						className={classNames(
							socialRegister ? 'bg-spectra' : 'bg-gray-200',
							'relative inline-flex flex-shrink-0 h-5 w-[2.4rem] items-center border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none'
						)}
						>
						<span
							aria-hidden="true"
							className={classNames(
								socialRegister ? 'translate-x-5' : 'translate-x-0',
							'pointer-events-none inline-block h-3.5 w-3.5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
							)}
						/>
					</Switch>
				</div>
			</section>
			<section className='block border-b border-solid border-slate-200 px-12 py-8'>
				<div className='pb-4'>
					<h3 className='p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900'>
						{ __( 'Social Login/Register - Google Client ID', 'ultimate-addons-for-gutenberg' ) }
					</h3>
					<p className='mt-2 text-sm text-slate-500'>
						{ __( 'Note: This setting is required if you wish to use Login with Google on your website. Read', 'ultimate-addons-for-gutenberg' ) }
						{' '}
						<a href=''>{__('this article', 'ultimate-addons-for-gutenberg')}</a>.
					</p>
					<p className="mt-2 w-9/12 text-sm">
						<a className="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" href="https://ultimateelementor.com/docs/create-google-client-id-for-login-form-widget/?utm_source=uael-pro-dashboard&utm_medium=uael-menu-page&utm_campaign=uael-pro-plugin" target="_blank" rel="noreferrer">
							{ __( 'Get Keys', 'ultimate-addons-for-gutenberg' ) }
						</a>
						{ __( ' | ', 'ultimate-addons-for-gutenberg' ) }
						<a className="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" href="https://ultimateelementor.com/docs/create-google-client-id-for-login-form-widget/?utm_source=uael-pro-dashboard&utm_medium=uael-menu-page&utm_campaign=uael-pro-plugin" target="_blank" rel="noreferrer">
							{ __(
								' Documentation',
								'ultimate-addons-for-gutenberg'
							) }
						</a>
					</p>
				</div>
				<div>
					<label className='block text-gray-900 text-sm font-medium'>{__('Google Client ID', 'ultimate-addons-for-gutenberg')}</label>
					<input className='mt-3 w-9/12 h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field' type="text" name="google-client-id" value={googleClientId || ''} onChange={(e) => savedFormData('UPDATE_GOOGLE_CLIENT_ID', e.target.value)} />
				</div>
			</section>
			<section className='block border-b border-solid border-slate-200 px-12 py-8'>
				<div className='pb-4'>
					<h3 className='p-0 flex-1 justify-right inline-flex text-lg leading-8 font-medium text-gray-900'>
						{ __( 'Social Login/Register - Facebook App Details', 'ultimate-addons-for-gutenberg' ) }
					</h3>
					<p className='mt-2 text-sm text-slate-500'>
						{ __( 'Note: This setting is required if you wish to use Login with Facebook on your website. Need help to get Facebook App Details? Read', 'ultimate-addons-for-gutenberg' ) }
						{' '}
						<a href='https://ultimateelementor.com/docs/create-facebook-app-id-for-login-form-widget/?utm_source=uael-pro-dashboard&utm_medium=uael-menu-page&utm_campaign=uael-pro-plugin'>{__('this article', 'ultimate-addons-for-gutenberg')}</a>.
					</p>
					<p className="mt-2 w-9/12 text-sm">
						<a className="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" href="https://ultimateelementor.com/docs/create-facebook-app-id-for-login-form-widget/?utm_source=uael-pro-dashboard&utm_medium=uael-menu-page&utm_campaign=uael-pro-plugin" target="_blank" rel="noreferrer">
							{ __( 'Get Keys', 'ultimate-addons-for-gutenberg' ) }
						</a>
						{ __( ' | ', 'ultimate-addons-for-gutenberg' ) }
						<a className="text-spectra focus:text-spectra-hover active:text-spectra-hover hover:text-spectra-hover" href="https://ultimateelementor.com/docs/create-facebook-app-id-for-login-form-widget/?utm_source=uael-pro-dashboard&utm_medium=uael-menu-page&utm_campaign=uael-pro-plugin" target="_blank" rel="noreferrer">
							{ __(
								' Documentation',
								'ultimate-addons-for-gutenberg'
							) }
						</a>
					</p>
				</div>
				<div className='pb-4'>
					<label className='block text-gray-900 text-sm font-medium'>{__('Facebook App Details', 'ultimate-addons-for-gutenberg')}</label>
					<input className='mt-3 w-9/12 h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field' type="text" name="facebook-app-id" value={facebookAppId || ''} onChange={(e) => savedFormData('UPDATE_FACEBOOK_APP_ID', e.target.value)} />
				</div>
				<div className='pb-4'>
					<label className='block text-gray-900 text-sm font-medium'>{__('Facebook App Secret Key', 'ultimate-addons-for-gutenberg')}</label>
					<input className='mt-3 w-9/12 h-10 text-sm placeholder-slate-400 transition spectra-admin__input-field' type="text" name="facebook-app-secret" value={facebookAppSecret || ''} onChange={(e) => savedFormData('UPDATE_FACEBOOK_APP_SECRET', e.target.value)} />
				</div>
			</section>
		</React.Fragment>
	);
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
