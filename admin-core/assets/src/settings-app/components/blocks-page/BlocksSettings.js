import './BlocksSettings.scss';
import IndividualBlockSetting from './IndividualBlockSetting';
import { NormalButton } from '@Fields';
import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useStateValue } from '@Utils/StateProvider';
import apiFetch from '@wordpress/api-fetch';
import DisplayCondition from './DisplayCondition';

const blocksInfo = uag_react.blocks_info;

function BlocksSettings() {
	
	const [ checkCategory , setcheckCategory ] = useState('all');
	const [ { options }, dispatch ] = useStateValue();

	const blocksValue = options.blocks_activation_and_deactivation;

	const renderBlocksMetaBoxes = blocksInfo.map( ( block, index ) => {
		return <IndividualBlockSetting key={ index } blockInfo={ block } cat = {checkCategory} />}
	);

	const categories = ['all','creative','content','post','social','forms','seo','extensions'];

	const setCategory = ( data ) => {
		setcheckCategory(data);
	};
	const activateAllBlocks = ( e ) => {
		e.preventDefault()
        dispatch( {
			type: 'SET_OPTION',
			name: 'enable_block_condition',
			value: 'enabled',
		} );
		window.uagUnsavedChanges = true;
		const value = { ...blocksValue };

		for ( const block in blocksValue ) {
			value[ block ] = block;
		}
		dispatch( {
			type: 'SET_OPTION',
			name: 'blocks_activation_and_deactivation',
			value,
		} );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_blocks_activation_and_deactivation' );
		formData.append(
			'security',
			uag_react.blocks_activation_and_deactivation_nonce
		);
		formData.append( 'value', JSON.stringify( value ) );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
		} );
	};
	const deactivateAllBlocks = ( e ) => {
		e.preventDefault();

		window.uagUnsavedChanges = true;
		dispatch( {
			type: 'SET_OPTION',
			name: 'enable_block_condition',
			value: 'disabled',
		} );
		const value = { ...blocksValue };

		for ( const block in blocksValue ) {
			value[ block ] = 'disabled';
		}
		dispatch( {
			type: 'SET_OPTION',
			name: 'blocks_activation_and_deactivation',
			value,
		} );
		const formData = new window.FormData();

		formData.append( 'action', 'uag_blocks_activation_and_deactivation' );
		formData.append(
			'security',
			uag_react.blocks_activation_and_deactivation_nonce
		);
		formData.append( 'value', JSON.stringify( value ) );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
		} );
	};
	let disabledClass = checkCategory !== 'all' ? 'disabled' : '';

	return (
		<>
			<div className="uag-bulk-blocks-settings-wrap">
				<ul className="uag-block-cat-list">
				<span className='uag-block-cat-label'>Filter By:</span>
					{ categories.map( ( cat ) => (
						<li className={`uag-block-cat ${cat === 'seo' ? 'uag-uppercase-cat' : ''} ${cat === checkCategory ? 'uag-cat-active' : ''}`}>
							<a onClick={() => setCategory(cat) } 
							>{cat}</a>
						</li>
					))}
				</ul>
				<div className="uag-bulk-blocks-action-btn">
					<NormalButton
						buttonText={ __(
							'Activate All',
							'ultimate-addons-for-gutenberg'
						) }
						onClick={ activateAllBlocks }
						classes={`uag-button--secondary ${disabledClass}`} disabled = {disabledClass}
					/>
					<NormalButton
						buttonText={ __(
							'Deactivate All',
							'ultimate-addons-for-gutenberg'
						) }
						onClick={ deactivateAllBlocks }
						classes={`uag-button--secondary ${disabledClass}`} disabled = {disabledClass}
					/>
				</div>
			</div>
			<div className="uag-blocks-settings">{ renderBlocksMetaBoxes }<DisplayCondition cat = {checkCategory}/></div>
		</>
	);
}

export default BlocksSettings;
