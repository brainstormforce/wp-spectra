import React, { useState } from 'react';
import { NormalButton } from '@Fields';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useStateValue } from '@Utils/StateProvider';

const CollapsePanels = () => {

	const [ { options }, dispatch ] = useStateValue();
    const [ savingState, setssavingState ] = useState( false );
    const [ collapsePanels, setcollapsePanels ] = useState( options.collapse_panels );

    const collapsePanelsClick = () => {
        setssavingState( true );
		let value;
		if ( collapsePanels === 'disabled' ) {
			value = 'enabled';
		} else {
			value = 'disabled';
		}
		const formData = new window.FormData();

		formData.append( 'action', 'uag_collapse_panels' );
		formData.append(
			'security',
			uag_react.collapse_panels_nonce
		);
		formData.append( 'value', value );
		dispatch( {
			type: 'SET_OPTION',
			name: 'collapse_panels',
			value,
		} );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			if ( data.success ) {
				setssavingState( false );
				setcollapsePanels( value );
			}
		} );
    };

    return (
		<div className="uag-global__element">
			<div className="uag-collapse-panel-settings">
				<h3>{ __( 'Collapse Panels', 'ultimate-addons-for-gutenberg' ) }</h3>
				<NormalButton
					buttonText={
						collapsePanels === 'enabled'
							? __(
									'Disable',
									'ultimate-addons-for-gutenberg'
								)
							: __(
									'Enable',
									'ultimate-addons-for-gutenberg'
								)
					}
					onClick={ collapsePanelsClick }
					saving={ savingState }
				/>
			</div>
			<p>{ __( 'Enable the "Collapse Panels" option if you want to Collapse all other Panels in your Blocks Settings except for the one which is clicked This way you have only one Panel of Settings in front of you to Focus on.', 'ultimate-addons-for-gutenberg' ) }</p>
			<span
					className={ `uag-control__status-${ collapsePanels } uag-collapse-status` }
			>
				{ collapsePanels === 'enabled'
					? __(
							'Enabled ',
							'ultimate-addons-for-gutenberg'
						)
					: __(
							'Disabled',
							'ultimate-addons-for-gutenberg'
						) }
				<img
					src={
						uag_react.plugin_dir +
						'admin-core/assets/images/check.svg'
					} alt = ''
				/>
			</span>
		</div>
	);
}

export default CollapsePanels;