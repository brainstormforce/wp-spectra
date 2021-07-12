import React, { useState } from 'react';
import { NormalButton } from '@Fields';
import ReactHtmlParser from 'react-html-parser';
import { useStateValue } from '@Utils/StateProvider';
import { __ } from '@wordpress/i18n';

function TemplatesButton( props ) {

    const [
		{ globaldata, options }, dispatch
	] = useStateValue();
	const [ savingState, setssavingState ] = useState( false );

	const [ enableTemplate, setenableStarterTemplate ] = useState( options['_uag_common[enable_templates_button]'] );

	var enableTemplatesButtonlabel = globaldata.settings[ 'enable_templates_button' ]['fields']['enable_templates_button'].label;
	var enableTemplatesButtondesc = globaldata.settings[ 'enable_templates_button' ]['fields']['enable_templates_button'].desc;
	
	const enableStarterTemplate = () => {
		setssavingState( true );
		let status;
		if(enableTemplate == 'no' || enableTemplate == 'disable' ){
			status = 'yes';
		}else{
			status = 'no';
		}
		setenableStarterTemplate( status );
		dispatch( {
			type: 'SET_OPTION',
			name: '_uag_common[enable_templates_button]',
			value: status,
		} );
		let data = {
			'action' : 'uag_enable_templates_button',
			'security' : uag_react.enable_templates_button_nonce,
			'value' : status,
		}
		
		jQuery.ajax( {
			type: 'POST',
			data: data,
			url: uag_react.ajax_url,
			success(  ) {
                setssavingState( false );
			},
		} ).done( function () {
		} );
	}
    return (
		<>
		<h2>
		{ __( 'Starter Template', 'ultimate-addons-for-gutenberg' ) }
		</h2>
		<div className="uag-starter-template__button uag-version-control__elements">
			<div className="uag-version-control__element">
				<h3>{ReactHtmlParser(enableTemplatesButtonlabel)}</h3>
					<p>{__('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'ultimate-addons-for-gutenberg')}</p>
					<div className="uag-version-control-button">
						<NormalButton
							buttonText = { enableTemplate == 'yes' ? __( 'Disable', 'ultimate-addons-for-gutenberg' ) : __( 'Enable', 'ultimate-addons-for-gutenberg' )}
							onClick = { enableStarterTemplate }
							saving = { savingState }
						/>
						<span className={`uag-control__status-${enableTemplate}`}>{ enableTemplate == 'yes' ? __( 'Enabled', 'ultimate-addons-for-gutenberg' ) : __( 'Disabled', 'ultimate-addons-for-gutenberg' ) }</span>	
					</div>
				</div>
		</div>
		</>
    );
}

export default TemplatesButton;