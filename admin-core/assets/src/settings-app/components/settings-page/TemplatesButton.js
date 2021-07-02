import SettingTable from '../common/SettingTable';
import React, { useEffect, useState } from 'react';
import { useStateValue } from '@Utils/StateProvider';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
let enableTemplatesButton;

function TemplatesButton( props ) {

    const [
		{ globaldata, options },
	] = useStateValue();

	var enableTemplatesButtonSettings = globaldata.settings[ 'enable_templates_button' ];

    useEffect( () => {
		window.onbeforeunload = null;
		enableTemplatesButton = options['_uag_common[enable_templates_button]']
	}, [] );

    useEffect( () => {

		if ( enableTemplatesButton !== options['_uag_common[enable_templates_button]'] ) {
		
			let formData = new window.FormData();
	
			formData.append( 'action', 'uag_enable_templates_button' );
			formData.append(
				'security',
				uag_react.enable_templates_button_nonce
			);
			formData.append( 'value', options['_uag_common[enable_templates_button]'] );
	
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

			enableTemplatesButton = options['_uag_common[enable_templates_button]'];
		}
	}, [ options['_uag_common[enable_templates_button]'] ] );

    return (
		<>
		<h2 className="uag-version-settings__title">
		{ __( 'Starter Template', 'ultimate-addons-for-gutenberg' ) }
		</h2>
		<div className="uag-row">
			<div className="uag-col">
				<SettingTable
					settings={ enableTemplatesButtonSettings }
					meta_key="_uag_common"
				/>
			</div>
		</div>
		</>
    );
}

export default TemplatesButton;