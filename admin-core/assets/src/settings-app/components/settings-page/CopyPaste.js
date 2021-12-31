import React, { useState } from 'react';
import { NormalButton } from '@Fields';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useStateValue } from '@Utils/StateProvider';

const CopyPaste = () => {

	const [ { options }, dispatch ] = useStateValue();
    const [ savingState, setssavingState ] = useState( false );
    const [ copyPaste, setCopyPaste ] = useState( options.copy_paste );

    const copyPasteClick = () => {
        setssavingState( true );
		let value;
		if ( copyPaste === 'disabled' ) {
			value = 'enabled';
		} else {
			value = 'disabled';
		}
		const formData = new window.FormData();

		formData.append( 'action', 'uag_copy_paste' );
		formData.append(
			'security',
			uag_react.copy_paste_nonce
		);
		formData.append( 'value', value );
		dispatch( {
			type: 'SET_OPTION',
			name: 'copy_paste',
			value,
		} );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			if ( data.success ) {
				setssavingState( false );
				setCopyPaste( value );
			}
		} );
    };
    return (
		<div className="uag-global__element">
			<div className="uag-collapse-panel-settings">
				<h3>{ __( 'Copy Paste Styles', 'ultimate-addons-for-gutenberg' ) }</h3>
				<NormalButton
					buttonText={
						copyPaste === 'enabled'
							? __(
									'Disable',
									'ultimate-addons-for-gutenberg'
								)
							: __(
									'Enable',
									'ultimate-addons-for-gutenberg'
								)
					}
					onClick={ copyPasteClick }
					saving={ savingState }
				/>
			</div>
			<p>{ __( 'Enable the "Copy Paste Styles" option to have the ability to Copy & Paste UAG & Core Gutenberg Blocks Styles.', 'ultimate-addons-for-gutenberg' ) }</p>
			<span
					className={ `uag-control__status-${ copyPaste } uag-copy-paste-status` }
			>
				{ copyPaste === 'enabled'
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

export default CopyPaste;