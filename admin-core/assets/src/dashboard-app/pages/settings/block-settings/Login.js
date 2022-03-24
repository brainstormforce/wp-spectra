import React from 'react';
import { __ } from '@wordpress/i18n';
import { useSelector, useDispatch } from 'react-redux';
import apiFetch from '@wordpress/api-fetch';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function Login(props) {
	const dispatch = useDispatch();
	const socialLogin = useSelector( ( state ) => state.socialLogin );
	const googleClientId = socialLogin ? socialLogin.googleClientId : '';
	const facebookAppId = socialLogin ? socialLogin.facebookAppId : '';
	const facebookAppSecret = socialLogin ? socialLogin.facebookAppSecret : '';

	const savedFormData = (type, payload) => {
		dispatch({type, payload })
		const formData = new window.FormData();
		formData.append( 'action', 'uag_social_login' );
		formData.append( 'security', uag_react.social_login_nonce );
		if('UPDATE_GOOGLE_CLIENT_ID' === type){
			formData.append( 'googleClientId', payload );
		}
		if('UPDATE_FACEBOOK_APP_ID' === type){
			formData.append( 'facebookAppId', payload );
		}
		if('UPDATE_FACEBOOK_APP_SECRET' === type){
			formData.append( 'facebookAppSecret', payload );
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
				<div  className='border-b border-solid border-slate-200'>
					<div className='pr-16 pb-8 w-[78%]'>
						<h3 className='text-lg leading-6 font-medium text-gray-900'>
							{ __( 'Login Block', 'ultimate-addons-for-gutenberg' ) }
						</h3>
						<p className='mt-[0.6rem] text-sm'>
							{ __( 'Login Block Social Config', 'ultimate-addons-for-gutenberg' ) }
						</p>
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
