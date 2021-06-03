import React, { useState } from 'react';
import './SubmitButton.scss';
import { __ } from '@wordpress/i18n';
import { useSettingsValue } from '@Utils/SettingsProvider';

function SubmitButton( props ) {
	const [ { settingsProcess }, setSettingsStatus ] = useSettingsValue();

	if ( 'saved' === settingsProcess ) {
		setTimeout( () => {
			setSettingsStatus( { status: 'RESET' } );
		}, 2000 );
	}

	const showMessage = function () {
		setSettingsStatus( { status: 'PROCESSING' } );
	};

	let classes = props.class ? props.class : '';

	let savingState = 'processing' === settingsProcess ? 'wcf-saving' : '';

	const getSuccessNotice = function () {
		return (
			<span className="wcf-success-notice">
				<span className="dashicons dashicons-yes"></span>
				<span className="wcf-success-message">
					{ __( 'Settings Saved', 'ultimate-addons-for-gutenberg' ) }
				</span>
			</span>
		);
	};
	return (
		<div className="wcf-field wcf-submit wcf-submit-field">
			<button
				type="submit"
				className={ `wcf-button wcf-button--primary ${ savingState } ${ classes }` }
				onClick={ showMessage }
			>
				{ 'saved' === settingsProcess && getSuccessNotice() }
				{ 'processing' === settingsProcess &&
					__( 'Saving...', 'ultimate-addons-for-gutenberg' ) }
				{ ! settingsProcess && __( 'Save Settings', 'ultimate-addons-for-gutenberg' ) }
			</button>
		</div>
	);
}

export default SubmitButton;
