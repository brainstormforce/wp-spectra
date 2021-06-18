import { useStateValue } from '@Utils/StateProvider';
import React, { useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
import './IndividualBlockSetting.scss';
import { ToggleField } from '@Fields';

let blocksCachedValue;

function IndividualBlockSetting( props ) {
	
    const [
		{ globaldata, options },
	] = useStateValue();

    let blocksValue = options['_uag_common[blocks_activation_and_deactivation]'];
console.log(options);
    useEffect( () => {
		window.onbeforeunload = null;
		blocksCachedValue = options['_uag_common[blocks_activation_and_deactivation]']
	}, [] );

    useEffect( () => {

		if ( JSON.stringify(blocksCachedValue) !== JSON.stringify(blocksValue) ) {

			let formData = new window.FormData();
            let data = JSON.stringify(blocksValue)
			formData.append( 'action', 'uag_blocks_activation_and_deactivation' );
			formData.append(
				'security',
				uag_react.blocks_activation_and_deactivation_nonce
			);
			formData.append( 'value', data );
	console.log(options['_uag_common[blocks_activation_and_deactivation]']);
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

			blocksCachedValue = options['_uag_common[blocks_activation_and_deactivation]'];
		}
	}, [ options['_uag_common[blocks_activation_and_deactivation]'] ] );

	return (
		<div className="uag-individual-block-settings-metabox">
            <ToggleField
                id={ props.blockInfo.slug }
                name='_uag_common[blocks_activation_and_deactivation]'
                value={ blocksValue[ props.blockInfo.slug ] }
                label={ props.blockInfo.title }
            />
        </div>
	);
}

export default IndividualBlockSetting;
