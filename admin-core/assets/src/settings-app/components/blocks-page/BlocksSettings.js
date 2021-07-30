import './BlocksSettings.scss';
import IndividualBlockSetting from './IndividualBlockSetting';
import { NormalButton } from '@Fields';
import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useStateValue } from '@Utils/StateProvider';
import apiFetch from '@wordpress/api-fetch';

const blocksInfo = uag_react.blocks_info;

function BlocksSettings( ) {
	const [ savingStateActivate, setssavingStateActivate ] = useState( false );
	const [ savingStateDeactivate, setssavingStateDeactivate ] = useState(
		false
	);

	const [ { options }, dispatch ] = useStateValue();

	const blocksValue =
		options[ 'blocks_activation_and_deactivation' ];

	const renderBlocksMetaBoxes = blocksInfo.map( ( block, index ) => {
		
		return <IndividualBlockSetting key={ index } blockInfo={ block } />;
	} );
	
	const activateAllBlocks = ( e ) => {
		e.preventDefault();
		setssavingStateActivate( true );

		window.uagUnsavedChanges = true;
		const value = { ...blocksValue };
		
		for ( const block in blocksValue ) {
			value[ block ] = block;
		}
		dispatch( {
			type: 'SET_OPTION',
			name: 'blocks_activation_and_deactivation',
			value: value,
		} );

		let formData = new window.FormData(  );

		formData.append( 'action', 'uag_blocks_activation_and_deactivation' );
		formData.append(
			'security',
			uag_react.blocks_activation_and_deactivation_nonce
		);
		formData.append( 'value', JSON.stringify(value) );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			setssavingStateActivate( false );	
		} );	

	};
	const deactivateAllBlocks = ( e ) => {
		e.preventDefault();
		setssavingStateDeactivate( true );

		window.uagUnsavedChanges = true;

		const value = { ...blocksValue };

		for ( const block in blocksValue ) {
			value[ block ] = 'disabled';
		}
		dispatch( {
			type: 'SET_OPTION',
			name: 'blocks_activation_and_deactivation',
			value: value,
		} );
		let formData = new window.FormData(  );

		formData.append( 'action', 'uag_blocks_activation_and_deactivation' );
		formData.append(
			'security',
			uag_react.blocks_activation_and_deactivation_nonce
		);
		formData.append( 'value', JSON.stringify(value) );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			setssavingStateDeactivate( false );
		} );	
	};
	return (
		<>
			<div className="uag-bulk-blocks-settings-wrap">
				<a>{ __( 'All Blocks', 'ultimate-addons-for-gutenberg' ) } </a>
				<a href={ uag_react.reusable_url }>
					{ __(
						' Reusable Blocks',
						'ultimate-addons-for-gutenberg'
					) }
				</a>
				<div className="uag-bulk-blocks-action-btn">
					<NormalButton
						buttonText={ __(
							'Activate All',
							'ultimate-addons-for-gutenberg'
						) }
						onClick={ activateAllBlocks }
						saving={ savingStateActivate }
						classes="uag-button--secondary"
					/>
					<NormalButton
						buttonText={ __(
							'Deactivate All',
							'ultimate-addons-for-gutenberg'
						) }
						onClick={ deactivateAllBlocks }
						saving={ savingStateDeactivate }
						classes="uag-button--secondary"
					/>
				</div>
			</div>
			<div className="uag-blocks-settings">{ renderBlocksMetaBoxes }</div>
		</>
	);
}

export default BlocksSettings;
