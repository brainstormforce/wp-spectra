import SettingTable from '../common/SettingTable';
import React, { useEffect, useState } from 'react';
import { NormalButton } from '@Fields';
import ReactHtmlParser from 'react-html-parser';
import { useStateValue } from '@Utils/StateProvider';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
let enableTemplatesButton;

function TemplatesButton( props ) {

    const [
		{ globaldata, options },
	] = useStateValue();

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
	var enableTemplatesButtonlabel = globaldata.settings[ 'enable_templates_button' ]['fields']['enable_templates_button'].label;
	var enableTemplatesButtondesc = globaldata.settings[ 'enable_templates_button' ]['fields']['enable_templates_button'].desc;

    return (
		<>
		<h2 className="uag-version-settings__title">
		{ __( 'Starter Template', 'ultimate-addons-for-gutenberg' ) }
		</h2>
		<div className="uag-version-control__elements">
			<div className="uag-version-control__element">
				<h3>{ReactHtmlParser(enableTemplatesButtonlabel)}</h3>
					<p>{__('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'ultimate-addons-for-gutenberg')}</p>
					<div className="uag-version-control-button">
						<NormalButton
							buttonText = { __( 'Enable', 'ultimate-addons-for-gutenberg' ) }
						/>
					</div>
			</div>
		</div>
		</>
    );
}

export default TemplatesButton;