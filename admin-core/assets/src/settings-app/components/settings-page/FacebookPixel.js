import React, { useState } from 'react';
import { useStateValue } from '@Utils/StateProvider';
import { useSettingsValue } from '@Utils/SettingsProvider';
import apiFetch from '@wordpress/api-fetch';
import { SubmitButton } from '@Fields';

import { __ } from '@wordpress/i18n';

import './FacebookPixel.scss';

import SettingTable from '../common/SettingTable';

function FacebookPixel( props ) {
	const [ { globaldata }, dispatch ] = useStateValue();
	const [ { settingsProcess }, setSettingsStatus ] = useSettingsValue();

	var fb_pixel_settings = globaldata.settings[ 'facebook-pixel' ];

	const handleFormSubmit = function ( event ) {
		event.preventDefault();
		let formData = new window.FormData( event.target );

		formData.append( 'action', 'uag_save_global_settings' );
		formData.append(
			'security',
			uag_react.save_global_settings_nonce
		);
		formData.append( 'setting_tab', 'facebook_pixel' );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			/* Update settings state */
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
		<form className="uag-fb-pixel-settings" onSubmit={ handleFormSubmit }>
			<h3 className="uag-fb-pixel-settings__title">
				{ __('Facebook Pixel Settings', 'ultimate-addons-for-gutenberg') }
			</h3>
			<SettingTable
				settings={ fb_pixel_settings }
				meta_key="_uag_facebook"
			/>
			<div className="uag-fb-pixel-settings__save-button">
				<SubmitButton />
			</div>
		</form>
	);
}

export default FacebookPixel;
