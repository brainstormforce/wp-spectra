import { useStateValue } from '@Utils/StateProvider';
import React, { useEffect } from 'react';
import { ToggleField } from '@Fields';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';

let blocksCachedValue;

function IndividualBlockSetting( props ) {
	const [ { options }, dispatch ] = useStateValue();

	const blocksValue = options.blocks_activation_and_deactivation;

	useEffect( () => {
		window.onbeforeunload = null;
		blocksCachedValue = options.blocks_activation_and_deactivation;
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

			const formData = new window.FormData();

			formData.append(
				'action',
				'uag_blocks_activation_and_deactivation'
			);
			formData.append(
				'security',
				uag_react.blocks_activation_and_deactivation_nonce
			);
			formData.append( 'value', JSON.stringify( blocksValue ) );

			apiFetch( {
				url: uag_react.ajax_url,
				method: 'POST',
				body: formData,
			} ).then( () => {} );
			blocksCachedValue = options.blocks_activation_and_deactivation;
		}
	}, [ options.blocks_activation_and_deactivation ] );

	let categories = props.blockInfo.admin_categories;
	
	let isCategory = categories.find(element =>	element == props.cat);
	
	if(isCategory || props.cat === 'all'){
		return (
			<div className="uag-individual-block-settings-metabox">
				<ToggleField
					id={ props.blockInfo.slug }
					name="blocks_activation_and_deactivation"
					value={ blocksValue[ props.blockInfo.slug ] }
					label={ props.blockInfo.title }
				/>
				<a
					href={ `https://ultimategutenberg.com/blocks/${ props.blockInfo.link }` }
					target="_blank"
					rel="noreferrer"
				>
					{ __( 'Live Demo', 'ultimate-addons-for-gutenberg' ) }
				</a>
				<a
					href={ `https://ultimategutenberg.com/docs/${ props.blockInfo.doc }` }
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

export default IndividualBlockSetting;
