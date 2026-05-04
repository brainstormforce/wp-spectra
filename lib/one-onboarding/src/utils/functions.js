/**
 * Utility functions for the One Onboarding plugin.
 *
 * @package
 * @since 1.0.0
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Utility function to join class names.
 *
 * @since 1.0.0
 * @param {...string} classes The class names to join.
 * @return {string} The joined class names.
 */
export const classnames = ( ...classes ) => {
	return classes
		.filter( Boolean ) // Filter out falsy values.
		.join( ' ' ); // Join with a space.
};

/**
 * Submit user information to the server.
 *
 * @since 1.0.0
 * @param {Object} userInfo           The user information object.
 * @param {string} userInfo.firstName The user's first name.
 * @param {string} userInfo.lastName  The user's last name.
 * @param {string} userInfo.email     The user's email address.
 * @param {Object} userInfo.source    The source where the user found the product.
 * @param {Object} userInfo.benefit   The selected benefit option.
 * @param {Object} userInfo.newUser   The new user experience level.
 * @return {Promise} Promise that resolves with the API response.
 */
export const submitUserInfo = async ( userInfo ) => {
	return apiFetch( {
		path: '/one-onboarding/v1/user-info',
		method: 'POST',
		data: {
			firstName: userInfo.firstName,
			lastName: userInfo.lastName,
			email: userInfo.email,
			source: userInfo.source,
			benefit: userInfo.benefit,
			newUser: userInfo.newUser,
		},
	} )
		.then( ( response ) => {
			return { success: true, data: response };
		} )
		.catch( ( error ) => {
			console.error( 'Error submitting user info:', error );
			return { success: false, error: error.message };
		} );
};

/**
 * Check if a plugin is installed and/or active.
 *
 * @since 1.0.0
 * @param {string} plugin The plugin slug to check.
 * @return {Promise} Promise that resolves with plugin status.
 */
export const checkPluginStatus = ( plugin ) => {
	return apiFetch( {
		path: `/one-onboarding/v1/plugin-status/${ plugin }`,
		method: 'GET',
	} )
		.then( ( response ) => {
			return { success: true, data: response };
		} )
		.catch( ( error ) => {
			console.error(
				`Error checking plugin status for ${ plugin }:`,
				error
			);
			return { success: false, error: error.message };
		} );
};

/**
 * Install a plugin.
 *
 * @since 1.0.0
 * @param {string} plugin The plugin slug to install.
 * @return {Promise} Promise that resolves with installation result.
 */
export const installPlugin = ( plugin ) => {
	return apiFetch( {
		path: '/one-onboarding/v1/install-plugin',
		method: 'POST',
		data: { plugin },
	} )
		.then( ( response ) => {
			return { success: true, data: response };
		} )
		.catch( ( error ) => {
			console.error( `Error installing plugin ${ plugin }:`, error );
			return { success: false, error: error.message };
		} );
};

/**
 * Activate a plugin.
 *
 * @since 1.0.0
 * @param {string} plugin The plugin file path to activate.
 * @return {Promise} Promise that resolves with activation result.
 */
export const activatePlugin = ( plugin ) => {
	return apiFetch( {
		path: '/one-onboarding/v1/activate-plugin',
		method: 'POST',
		data: { plugin },
	} )
		.then( ( response ) => {
			return { success: true, data: response };
		} )
		.catch( ( error ) => {
			console.error( `Error activating plugin ${ plugin }:`, error );
			return { success: false, error: error.message };
		} );
};

/**
 * Save onboarding state to the server.
 *
 * @since 1.0.0
 * @param {Object} onboardingState The complete onboarding state.
 * @return {Promise} Promise that resolves with the API response.
 */
export const saveOnboardingState = async ( onboardingState ) => {
	return apiFetch( {
		path: '/one-onboarding/v1/save-onboarding-state',
		method: 'POST',
		data: {
			onboardingState,
		},
	} )
		.then( ( response ) => {
			return { success: true, data: response };
		} )
		.catch( ( error ) => {
			console.error( 'Error saving onboarding state:', error );
			return { success: false, error: error.message };
		} );
};

/**
 * Submit onboarding completion data to the server.
 *
 * @since 1.0.0
 * @param {Object} onboardingState The complete onboarding state.
 * @return {Promise} Promise that resolves with the API response.
 */
export const submitOnboardingCompletion = async ( onboardingState ) => {
	return apiFetch( {
		path: '/one-onboarding/v1/onboarding-completion',
		method: 'POST',
		data: {
			onboardingState,
		},
	} )
		.then( ( response ) => {
			return { success: true, data: response };
		} )
		.catch( ( error ) => {
			console.error( 'Error submitting onboarding completion:', error );
			return { success: false, error: error.message };
		} );
};
