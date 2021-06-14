import React, { useState } from 'react';
import { useStateValue } from '@Utils/StateProvider';
import { NormalButton } from '@Fields';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
import './VersionControl.scss';
import SettingTable from '../common/SettingTable';

function VersionControl( props ) {

	const [
		{ globaldata, options },
	] = useStateValue();
	
	var versionControl = globaldata.settings[ 'version_control' ];

	const handleRollbackVersion = function ( event ) {

		event.preventDefault();

		let rollbackUrl = uag_react.rollback_url.replace( 'VERSION', options['_uag_common[rollback_to_previous_version]']);

		location.href = rollbackUrl;
	};

	return (
		<form className="uag-version-control" onSubmit={ handleRollbackVersion }>
			<h3 className="uag-version-settings__title">
				{ __( 'Version Control', 'ultimate-addons-for-gutenberg' ) }
			</h3>
			<SettingTable
				settings={ versionControl }
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
