import './BlocksSettings.scss';
import IndividualBlockSetting from './IndividualBlockSetting';
import { NormalButton } from '@Fields';
import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useStateValue } from '@Utils/StateProvider';

const blocksInfo = uag_react.blocks_info;

function BlocksSettings( prop ) {

	const [ savingStateActivate, setssavingStateActivate ] = useState( false );
	const [ savingStateDeactivate, setssavingStateDeactivate ] = useState( false );

	const [ { options }, dispatch ] = useStateValue();

    let blocksValue = options['_uag_common[blocks_activation_and_deactivation]'];

	const renderBlocksMetaBoxes = blocksInfo.map( ( block, index ) => {
		
		return (
			<IndividualBlockSetting
				key = { index }
				blockInfo = { block }
			/>
		);
	} );
	
	const activateAllBlocks = ( e ) => {

		setssavingStateActivate( true );

		window.uagUnsavedChanges = true;

		let value = { ...blocksValue };
		
		window.uagUnsavedChanges = true;

		for ( var block in blocksValue ) {
			value[block] = block;
		}
		
		dispatch( {
			type: 'SET_OPTION',
			name: '_uag_common[blocks_activation_and_deactivation]',
			value: value,
		} );

		let data = {
			'action' : 'uag_activate_deactivate_all_blocks',
			'security' : uag_react.activate_all_blocks_nonce,
			'value' : value
		}
		
		jQuery.ajax( {
			type: 'POST',
			data: data,
			url: uag_react.ajax_url,
			success( response ) {
				setssavingStateActivate( false );
			},
		} ).done( function () {
		} );
	}
	const deactivateAllBlocks = ( e ) => {

		setssavingStateDeactivate( true );

		window.uagUnsavedChanges = true;

		let value = { ...blocksValue };
		
		window.uagUnsavedChanges = true;

		for ( var block in blocksValue ) {
			value[block] = 'disabled';
		}
		
		dispatch( {
			type: 'SET_OPTION',
			name: '_uag_common[blocks_activation_and_deactivation]',
			value: value,
		} );

		let data = {
			'action' : 'uag_activate_deactivate_all_blocks',
			'security' : uag_react.activate_deactivate_all_blocks_nonce,
			'value' : value
		}
		
		jQuery.ajax( {
			type: 'POST',
			data: data,
			url: uag_react.ajax_url,
			success( response ) {
				setssavingStateDeactivate( false );
			},
		} ).done( function () {
		} );
	}
	return (
		<>
			<div className="uag-bulk-blocks-settings-wrap">
				<a>{__('All Blocks  | ', 'ultimate-addons-for-gutenberg' )} </a>
				<a>{__('Extension Links  | ', 'ultimate-addons-for-gutenberg' )} </a>
				<a href={uag_react.reusable_url}>{__( ' Reusable Blocks', 'ultimate-addons-for-gutenberg' )}</a>
				<div className="uag-bulk-blocks-action-btn">
					<NormalButton
						buttonText = { __( 'Activate All', 'ultimate-addons-for-gutenberg' ) }
						onClick = { activateAllBlocks }
						saving = { savingStateActivate }
						classes = "uag-button--secondary"
					/>
					<NormalButton
						buttonText = { __( 'Deactivate All', 'ultimate-addons-for-gutenberg' ) }
						onClick = { deactivateAllBlocks }
						saving = { savingStateDeactivate }
						classes = "uag-button--secondary"
					/>
				</div>
			</div>
			<div className="uag-blocks-settings">
				{ renderBlocksMetaBoxes }
			</div>
		</>
	);
}

export default BlocksSettings;
