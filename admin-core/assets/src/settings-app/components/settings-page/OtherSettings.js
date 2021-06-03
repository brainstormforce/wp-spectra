import React, { useState } from 'react';
import { useStateValue } from '@Utils/StateProvider';
import { useSettingsValue } from '@Utils/SettingsProvider';
import ReactHtmlParser from 'react-html-parser';
import { SubmitButton } from '@Fields';

import apiFetch from '@wordpress/api-fetch';

import { __ } from '@wordpress/i18n';

import './OtherSettings.scss';
import SettingTable from '../common/SettingTable';

function OtherSettings( props ) {
	const [ { globaldata }, dispatch ] = useStateValue();
	const [ { settingsProcess }, setSettingsStatus ] = useSettingsValue();

	var other_settings = globaldata.settings[ 'other-settings' ];

	const [ renerate_css_text, setRenerate_css_text ] = useState(
		__( 'Regenerate Assets', 'ultimate-addons-for-gutenberg' )
	);

	const [ isProcessing, setisProcessing ] = useState( false );

	const handleFormSubmit = function ( event ) {
		event.preventDefault();

		let formData = new window.FormData( event.target );

		formData.append( 'action', 'uag_save_global_settings' );
		formData.append(
			'security',
			uag_react.save_global_settings_nonce
		);
		formData.append( 'setting_tab', 'other_settings' );

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

	const regenerateCSS = function ( event ) {
		event.preventDefault();

		setRenerate_css_text( __( ' Regenerating....', 'ultimate-addons-for-gutenberg' ) );
		setisProcessing( true );

		let formData = new window.FormData();

		formData.append( 'action', 'uag_regenerate_css_for_steps' );
		formData.append(
			'security',
			uag_react.regenerate_css_for_steps_nonce
		);

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			if ( data.success ) {
				setRenerate_css_text( __( 'Regenerated', 'ultimate-addons-for-gutenberg' ) );
				setTimeout( () => {
					setRenerate_css_text( __( 'Regenerate Now', 'ultimate-addons-for-gutenberg' ) );
				}, 3000 );

				setisProcessing( false );
			}
		} );
	};

	return (
		<form className="wcf-other-settings" onSubmit={ handleFormSubmit }>
			<h3 className="wcf-other-settings__title">
				{ __( 'Other Settings', 'ultimate-addons-for-gutenberg' ) }
			</h3>
			<div className="wcf-regenerate-css">
				<div className="wcf-regenerate-css__option">
					<label className="wcf-regenerate-css-label">
						{ __( 'Regenerate Assets', 'ultimate-addons-for-gutenberg' ) }
					</label>

					<a
						className="wcf-button wcf-button--secondary wcf-regenerate-css-button"
						onClick={ regenerateCSS }
					>
						{ ! isProcessing ? (
							<span className="wcf-icon dashicons dashicons-update"></span>
						) : (
							<span className="wcf-icon wcf-spinner dashicons dashicons-update is-active"></span>
						) }
						{ renerate_css_text }
					</a>
				</div>
				<div className="wcf-regenerate-css__desc wcf-field__desc">
					{ ReactHtmlParser(
						__(
							'You can regenerate your CSS & Javascript assets here.',
							'ultimate-addons-for-gutenberg'
						),
					) }
				</div>
			</div>
			<SettingTable settings={ other_settings } />

			<div className="wcf-other-settings__save-button">
				<SubmitButton />
			</div>
		</form>
	);
}

export default OtherSettings;
