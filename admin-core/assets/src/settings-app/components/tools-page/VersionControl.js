import React, { useState } from 'react';
import { useStateValue } from '@Utils/StateProvider';
import { useSettingsValue } from '@Utils/SettingsProvider';
import { NormalButton } from '@Fields';
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

	const handleRollbackVersion = function ( event ) {

		event.preventDefault();

        let data = {
            action : 'uag_rollback_version',
            security : uag_react.rollback_version_nonce
        }

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: data,
		} ).then( ( data ) => {

			if ( data.success ) {
				
			} else {
				console.log( 'Error' );
			}
		} );
	};

	return (
		<form className="uag-version-control" onSubmit={ handleRollbackVersion }>
			<h3 className="uag-version-settings__title">
				{ __( 'Version Control', 'ultimate-addons-for-gutenberg' ) }
			</h3>
			<SettingTable
				settings={ version_control }
				meta_key="_uag_common"
			/>
			<div className="uag-version-control-button">
				<NormalButton
                    label = { __( 'Rollback', 'ultimate-addons-for-gutenberg' ) }
                    onClick = { handleRollbackVersion }
                />
			</div>
		</form>
	);
}

export default VersionControl;
