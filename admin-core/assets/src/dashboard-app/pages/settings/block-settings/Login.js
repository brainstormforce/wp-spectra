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
	const loginBlock = useSelector( ( state ) => state.loginBlock );
	const recaptchaSiteKey = loginBlock ? loginBlock.recaptchaSiteKey : '';
	const recaptchaSecretKey = loginBlock ? loginBlock.recaptchaSecretKey : '';
	const socialRegister = loginBlock ? loginBlock.socialRegister : false;
	const googleClientId = loginBlock ? loginBlock.googleClientId : '';
	const facebookAppId = loginBlock ? loginBlock.facebookAppId : '';
	const facebookAppSecret = loginBlock ? loginBlock.facebookAppSecret : '';

	const savedFormData = (type, payload) => {
		dispatch({type, payload })
		const formData = new window.FormData();
		formData.append( 'action', 'uag_social_login' );
		formData.append( 'security', uag_react.social_login_nonce );
		switch(type) {
			case 'UPDATE_RECAPTCHA_SITE_KEY':
				formData.append( 'recaptchaSiteKey', payload );
				break;
			case 'UPDATE_RECAPTCHA_SECRET_KEY':
				formData.append( 'recaptchaSecretKey', payload );
				break;
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
		} );
    };
	return (
		<React.Fragment>
			<section>
				<section className='flex mt-8'>
					<div className='pr-16 pb-8 w-[78%]'>
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							{__( 'Login Block', 'ultimate-addons-for-gutenberg' )}
						</h3>
						<p className="mt-[0.6rem] text-sm ">
							{ __( 'Enable Social Login Auto Register if user not registered.', 'ultimate-addons-for-gutenberg' ) }
						</p>
					</div>
					<div>
						<Switch
							checked={socialRegister}
							onChange={(e) => savedFormData('UPDATE_SOCIAL_REGISTER', !socialRegister)}
							className={classNames(
								socialRegister ? 'bg-wpcolor' : 'bg-gray-200',
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
				<div className='border-b pt-4'>
					<div className='pb-4'>
						<h3 className='text-lg leading-6 font-medium text-gray-900'>
							{ __( 'Login Form - reCaptcha', 'ultimate-addons-for-gutenberg' ) }
						</h3>
						<p className='mt-[0.6rem] text-sm'>
							{ __( 'Note: This setting is required if you wish to use Login reCaptcha in your website. Read', 'ultimate-addons-for-gutenberg' ) }
							{' '}
							<a href='https://developers.google.com/recaptcha/intro'>{__('this article', 'ultimate-addons-for-gutenberg')}</a>.
						</p>
					</div>
					<div className='pb-8 flex'>
						<div>
							<label className='block'>{__('Site Key', 'ultimate-addons-for-gutenberg')}</label>
							<input className='block' type="text" name="recaptcha-site-key" value={recaptchaSiteKey || ''} onChange={(e) => savedFormData('UPDATE_RECAPTCHA_SITE_KEY', e.target.value)} />
						</div>
						<div>
							<label className='block'>{__('Secret Key', 'ultimate-addons-for-gutenberg')}</label>
							<input className='block' type="text" name="recaptcha-secret-key" value={recaptchaSecretKey || ''} onChange={(e) => savedFormData('UPDATE_RECAPTCHA_SECRET_KEY', e.target.value)} />
						</div>
					</div>
				</div>
				<div className='border-b pt-4'>
					<div className='pb-4'>
						<h3 className='text-lg leading-6 font-medium text-gray-900'>
							{ __( 'Login Form - Google Client ID', 'ultimate-addons-for-gutenberg' ) }
						</h3>
						<p className='mt-[0.6rem] text-sm'>
							{ __( 'Note: This setting is required if you wish to use Login with Google in your website. Read', 'ultimate-addons-for-gutenberg' ) }
							{' '}
							<a href='https://ultimateelementor.com/docs/create-google-client-id-for-login-form-widget/?utm_source=uael-pro-dashboard&utm_medium=uael-menu-page&utm_campaign=uael-pro-plugin'>{__('this article', 'ultimate-addons-for-gutenberg')}</a>.
						</p>
					</div>
					<div className='pb-8'>
						<label className='block'>{__('Google Client ID', 'ultimate-addons-for-gutenberg')}</label>
						<input className='block' type="text" name="google-client-id" value={googleClientId || ''} onChange={(e) => savedFormData('UPDATE_GOOGLE_CLIENT_ID', e.target.value)} />
					</div>
				</div>
				<div className='border-b pt-4'>
					<div className='pb-4'>
						<h3 className='text-lg leading-6 font-medium text-gray-900'>
							{ __( 'Login Form - Facebook App Details', 'ultimate-addons-for-gutenberg' ) }
						</h3>
						<p className='mt-[0.6rem] text-sm'>
							{ __( 'Note: This setting is required if you wish to use Login with Facebook in your website. Need help to get Facebook App Details? Read', 'ultimate-addons-for-gutenberg' ) }
							{' '}
							<a href='https://ultimateelementor.com/docs/create-facebook-app-id-for-login-form-widget/?utm_source=uael-pro-dashboard&utm_medium=uael-menu-page&utm_campaign=uael-pro-plugin'>{__('this article', 'ultimate-addons-for-gutenberg')}</a>.
						</p>
					</div>
					<div className='flex'>
						<div className='pb-4'>
							<label className='block'>{__('Facebook App ID', 'ultimate-addons-for-gutenberg')}</label>
							<input className='block' type="text" name="facebook-app-id" value={facebookAppId || ''} onChange={(e) => savedFormData('UPDATE_FACEBOOK_APP_ID', e.target.value)} />
						</div>
						<div className='pb-4 ml-4'>
							<label className='block'>{__('Facebook App Secret', 'ultimate-addons-for-gutenberg')}</label>
							<input className='block' type="text" name="facebook-app-secret" value={facebookAppSecret || ''} onChange={(e) => savedFormData('UPDATE_FACEBOOK_APP_SECRET', e.target.value)} />
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
