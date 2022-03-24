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
	const socialLogin = useSelector( ( state ) => state.socialLogin );
	const socialRegister = socialLogin ? socialLogin.socialRegister : false;
	const googleClientId = socialLogin ? socialLogin.googleClientId : '';
	const facebookAppId = socialLogin ? socialLogin.facebookAppId : '';
	const facebookAppSecret = socialLogin ? socialLogin.facebookAppSecret : '';

	const savedFormData = (type, payload) => {
		dispatch({type, payload })
		const formData = new window.FormData();
		formData.append( 'action', 'uag_social_login' );
		formData.append( 'security', uag_react.social_login_nonce );
		if('UPDATE_SOCIAL_REGISTER' === type){
			formData.append( 'socialRegister', payload );
			formData.append( 'googleClientId', googleClientId || '' );
			formData.append( 'facebookAppId', facebookAppId || '' );
			formData.append( 'facebookAppSecret', facebookAppSecret || '' );
		}
		if('UPDATE_GOOGLE_CLIENT_ID' === type){
			formData.append( 'googleClientId', payload );
			formData.append( 'socialRegister', socialRegister || false );
			formData.append( 'facebookAppId', facebookAppId || '' );
			formData.append( 'facebookAppSecret', facebookAppSecret || '' );
		}
		if('UPDATE_FACEBOOK_APP_ID' === type){
			formData.append( 'facebookAppId', payload );
			formData.append( 'socialRegister', socialRegister || false );
			formData.append( 'googleClientId', googleClientId || '' );
			formData.append( 'facebookAppSecret', facebookAppSecret || '' );
		}
		if('UPDATE_FACEBOOK_APP_SECRET' === type){
			formData.append( 'facebookAppSecret', payload );
			formData.append( 'socialRegister', socialRegister || false );
			formData.append( 'googleClientId', googleClientId || '' );
			formData.append( 'facebookAppId', facebookAppId || '' );
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
