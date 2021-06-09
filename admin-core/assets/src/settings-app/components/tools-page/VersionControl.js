import React, { useState } from 'react';
import { useStateValue } from '@Utils/StateProvider';
import { useSettingsValue } from '@Utils/SettingsProvider';
import { SubmitButton } from '@Fields';

import apiFetch from '@wordpress/api-fetch';

import { __ } from '@wordpress/i18n';

import './VersionControl.scss';
import SettingTable from '../common/SettingTable';

function VersionControl( props ) {

	const [
		{ globaldata },
		dispatch,
	] = useStateValue();
	const [ { settingsProcess }, setSettingsStatus ] = useSettingsValue();
	var version_control = globaldata.settings[ 'version_control' ];

	const handleFormSubmit = function ( event ) {
		event.preventDefault();

		let formData = new window.FormData( event.target );

		formData.append( 'action', 'uag_save_global_settings' );
		formData.append(
			'security',
			uag_react.save_global_settings_nonce
		);
		formData.append( 'setting_tab', 'version_control' );

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
					console.log( data );
					dispatch( {
						type: 'SET_SETTINGS',
						commondata: data,
					} );
					dispatch( {
						type: 'SET_PAGE_BUILDER',
						pagebuilder:
							data.options[
								'_uag_common[default_page_builder]'
							],
					} );
				} );
			} else {
				console.log( 'Error' );
			}
		} );
	};

	return (
		<form className="uag-general-settings" onSubmit={ handleFormSubmit }>
			<h3 className="uag-general-settings__title">
				{ __( 'Version Control', 'ultimate-addons-for-gutenberg' ) }
			</h3>
			<SettingTable
				settings={ version_control }
				meta_key="_uag_common"
			/>
			<div className="uag-general-settings__save-button">
				<SubmitButton />
			</div>
		</form>
	);
}

export default VersionControl;
