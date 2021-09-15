import { useStateValue } from '@Utils/StateProvider';
import React, { useEffect } from 'react';
import SettingTable from '../common/SettingTable';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';
let enableBlockConditionCachedValue;
function DisplayCondition(props) {
	const [ { globaldata, options }, dispatch ] = useStateValue();

	useEffect( () => {
		window.onbeforeunload = null;
		enableBlockConditionCachedValue = options.enable_block_condition;
	}, [] );

	useEffect( () => {
		if (
			enableBlockConditionCachedValue !== options.enable_block_condition
		) {
			const formData = new window.FormData();

			formData.append( 'action', 'uag_enable_block_condition' );
			formData.append(
				'security',
				uag_react.enable_block_condition_nonce
			);
			formData.append( 'value', options.enable_block_condition );
			dispatch( {
				type: 'SET_OPTION',
				name: 'enable_block_condition',
				value: options.enable_block_condition,
			} );
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

			enableBlockConditionCachedValue = options.enable_block_condition;
		}
	}, [ options.enable_block_condition ] );

	const enableDisplayConditionSettings =
		globaldata.settings.enable_block_condition; 

	if(props.cat === 'extensions' || props.cat === 'all'){
		return (
				<div className="uag-individual-block-settings-metabox uag-extension__metabox">
					<SettingTable settings={ enableDisplayConditionSettings } />
					<a
						href="https://ultimategutenberg.com/docs/display-conditions-blocks/"
						target="_blank"
						rel="noreferrer"
					>
						{ __( 'Documentation', 'ultimate-addons-for-gutenberg' ) }
					</a>
			</div>
		);
	}else{
		return null;
	}
}

export default DisplayCondition;
