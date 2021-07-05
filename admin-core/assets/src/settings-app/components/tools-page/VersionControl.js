import { useStateValue } from '@Utils/StateProvider';
import { NormalButton } from '@Fields';
import { __ } from '@wordpress/i18n';
import './VersionControl.scss';
import ReactHtmlParser from 'react-html-parser';
import SettingTable from '../common/SettingTable';
import React, { useEffect, useState } from 'react';
import apiFetch from '@wordpress/api-fetch';
import ConfirmPopup from './ConfirmPopup';

let enableBetaCachedValue;

function VersionControl( props ) {
	const [
		{ globaldata, options },
	] = useStateValue();
	
	useEffect( () => {
		window.onbeforeunload = null;
		enableBetaCachedValue = options['_uag_common[enable_beta_updates]']
	}, [] );

	useEffect( () => {

		if ( enableBetaCachedValue !== options['_uag_common[enable_beta_updates]'] ) {
		
			let formData = new window.FormData();
	
			formData.append( 'action', 'uag_enable_beta_updates' );
			formData.append(
				'security',
				uag_react.enable_beta_updates_nonce
			);
			formData.append( 'value', options['_uag_common[enable_beta_updates]'] );
	
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( data ) => {
				
				if ( data.success ) {
					
				} else {
					console.log( 'Error' );
				}
			} );

			enableBetaCachedValue = options['_uag_common[enable_beta_updates]'];
		}
	}, [ options['_uag_common[enable_beta_updates]'] ] );

	const [ showPopup, setshowPopup ] = useState( false );

	var rollbackSettings = globaldata.settings[ 'rollback_to_previous_version' ];
	var enableBetaUpdatesSettings = globaldata.settings[ 'enable_beta_updates' ];

	var rollbacklabel = globaldata.settings[ 'rollback_to_previous_version' ]['fields']['rollback_to_previous_version'].label;
	var rollbackdesc = globaldata.settings[ 'rollback_to_previous_version' ]['fields']['rollback_to_previous_version'].desc;
	var enableBetaUpdateslabel = globaldata.settings[ 'enable_beta_updates' ]['fields']['enable_beta_updates'].label;
	var enableBetaUpdatesdesc = globaldata.settings[ 'enable_beta_updates' ]['fields']['enable_beta_updates'].desc;
	const handleRollbackVersion = function ( event ) {

		event.preventDefault();
		setshowPopup( true );
		
	};

	const confirmPopup = () => {

		let rollbackUrl = uag_react.rollback_url.replace( 'VERSION', options['_uag_common[rollback_to_previous_version]']);

		setshowPopup( false );

		location.href = rollbackUrl;
	}

	const cancelPopup = () => {

		setshowPopup( false );
	}

	const enableVersionControl = () => {
		
	}
	return (
		<>
			<h2 className="uag-version-settings__title">
				{ __( 'Version Control', 'ultimate-addons-for-gutenberg' ) }
			</h2>
			<div className="uag-version-control__elements">
				<div className="uag-version-control__element">		
					<h3>{ReactHtmlParser(rollbacklabel)}</h3>
					<p>{ReactHtmlParser(rollbackdesc)}</p>
					<div className="uag-version-control-button">
						<SettingTable
							settings={ rollbackSettings }
							meta_key="_uag_common"
						/>
						<NormalButton
							buttonText = { __( 'Rollback', 'ultimate-addons-for-gutenberg' ) }
							onClick = { handleRollbackVersion }
						/>
					</div>
				</div>
				<div className="uag-version-control__element">
					<h3>{ReactHtmlParser(enableBetaUpdateslabel)}</h3>
					<p>{ReactHtmlParser(enableBetaUpdatesdesc)}</p>
					<div className="uag-version-control-button">
						<NormalButton
							buttonText = { __( 'Enable', 'ultimate-addons-for-gutenberg' ) }
							onClick = { enableVersionControl }
						/>
					</div>
				</div>
			</div>
			<ConfirmPopup
				showPopup={ showPopup }
				setshowPopup={ setshowPopup }
				confirmPopup={ confirmPopup }
				cancelPopup={ cancelPopup }
			/>
		</>
	);
}

export default VersionControl;
