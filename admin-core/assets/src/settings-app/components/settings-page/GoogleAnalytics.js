import React, { useState } from 'react';
import { useStateValue } from '@Utils/StateProvider';
import { useSettingsValue } from '@Utils/SettingsProvider';
import apiFetch from '@wordpress/api-fetch';
import { SubmitButton } from '@Fields';

import { __ } from '@wordpress/i18n';

import './GoogleAnalytics.scss';

import SettingTable from '../common/SettingTable';

function GoogleAnalytics( props ) {
	const [ { globaldata }, dispatch ] = useStateValue();
	const [ { settingsProcess }, setSettingsStatus ] = useSettingsValue();

	var ga_analytics_settings = globaldata.settings[ 'ga-analytics' ];

	const handleFormSubmit = function ( event ) {
		event.preventDefault();
		let formData = new window.FormData( event.target );

		formData.append( 'action', 'uag_save_global_settings' );
		formData.append(
			'security',
			uag_react.save_global_settings_nonce
		);
		formData.append( 'setting_tab', 'google_analytics' );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			setSettingsStatus( { status: 'SAVED' } );
			if ( data.success ) {
				apiFetch( {
					path: '/uag/v1/admin/commonsettings/',
				} ).then( ( data ) => {
					dispatch( {
						type: 'SET_SETTINGS',
						commondata: data,
					} );
				} );
			} else {
				console.log( 'Error' );
			}
		} );
	};

	return (
		<form
			className="wcf-ga-analytics-settings"
			onSubmit={ handleFormSubmit }
		>
			<h3 className="wcf-ga-analytics-settings__title">
				{ __( 'Google Analytics Settings', 'ultimate-addons-for-gutenberg' ) }
			</h3>
			<SettingTable
				settings={ ga_analytics_settings }
				meta_key="_uag_google_analytics"
			/>
			<SubmitButton />
		</form>
	);
}

export default GoogleAnalytics;
