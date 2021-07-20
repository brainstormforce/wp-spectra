import { useStateValue } from '@Utils/StateProvider';
import React, { useEffect } from 'react';
import { ToggleField } from '@Fields';
import apiFetch from '@wordpress/api-fetch';
let blocksCachedValue;

function IndividualBlockSetting( props ) {
	const [ { options }, dispatch ] = useStateValue();

	const blocksValue =
		options[ 'blocks_activation_and_deactivation' ];
	
	useEffect( () => {
		window.onbeforeunload = null;
		blocksCachedValue =
			options[ 'blocks_activation_and_deactivation' ];
	}, [] );
	
	useEffect( () => {
		if (
			JSON.stringify( blocksCachedValue ) !==
			JSON.stringify( blocksValue )
		) {
			dispatch( {
				type: 'SET_OPTION',
				name: 'blocks_activation_and_deactivation',
				value: blocksValue,
			} );

			let formData = new window.FormData(  );

			formData.append( 'action', 'uag_blocks_activation_and_deactivation' );
			formData.append(
				'security',
				uag_react.blocks_activation_and_deactivation_nonce
			);
			formData.append( 'value', JSON.stringify(blocksValue) );
	
			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( ( data ) => {
		
			} );
			blocksCachedValue =
				options[ 'blocks_activation_and_deactivation' ];
		}
	}, [ options[ 'blocks_activation_and_deactivation' ] ] );

	return (
		<div className="uag-individual-block-settings-metabox">
			<ToggleField
				id={ props.blockInfo.slug }
				name="blocks_activation_and_deactivation"
				value={ blocksValue[ props.blockInfo.slug ] }
				label={ props.blockInfo.title }
			/>
		</div>
	);
}

export default IndividualBlockSetting;
