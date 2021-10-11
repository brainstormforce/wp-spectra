import './BlocksSettings.scss';
import IndividualBlockSetting from './IndividualBlockSetting';
import { NormalButton } from '@Fields';
import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { useStateValue } from '@Utils/StateProvider';
import apiFetch from '@wordpress/api-fetch';
import DisplayCondition from './DisplayCondition';
import MasonryExtension from './MasonryExtension';

const blocksInfo = uag_react.blocks_info;

function BlocksSettings() {
	
	const [ checkCategory , setcheckCategory ] = useState( 'all' );
	const [ status , setstatus ] = useState( true );
	const [ { options }, dispatch ] = useStateValue();

	const blocksValue = options.blocks_activation_and_deactivation;

	const renderBlocksMetaBoxes = blocksInfo.map( ( block, index ) => {
		return <IndividualBlockSetting key={ index } blockInfo={ block } cat = {checkCategory} status={status}/>}
	);

	const categories = [
							{
								slug: 'all',
								label: __( 'All Blocks', 'ultimate-addons-for-gutenberg' )
							},
							{ 
								slug:'creative',
								label:__( 'Creative Blocks', 'ultimate-addons-for-gutenberg' )
							},
							{ 
								slug:'content',
								label:__( 'Content Blocks', 'ultimate-addons-for-gutenberg' )
							},
							{ 
								slug:'post',
								label:__( 'Post', 'ultimate-addons-for-gutenberg' )
							},
							{ 
								slug:'social',
								label:__( 'Social Blocks', 'ultimate-addons-for-gutenberg' )
							},
							{ 
								slug:'forms',
								label:__( 'Form Styler', 'ultimate-addons-for-gutenberg' )
							},
							{ 
								slug:'seo',
								label:__( 'SEO', 'ultimate-addons-for-gutenberg' )
							},
							{ 
								slug:'extensions',
								label:__( 'Extensions', 'ultimate-addons-for-gutenberg' )
							},
						];
	
	const setCategory = ( data ) => {
		setcheckCategory( data );
	};
	const activateAllBlocks = ( e ) => {
		e.preventDefault()
        dispatch( {
			type: 'SET_OPTION',
			name: 'enable_block_condition',
			value: 'enabled',
		} );
		dispatch( {
			type: 'SET_OPTION',
			name: 'enable_masonry_gallery',
			value: 'enabled',
		} );
        setstatus( false );
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
		} ).then( () => {  setstatus( true );
		} );
	};
	const deactivateAllBlocks = ( e ) => {
		e.preventDefault();
        setstatus( false );
		dispatch( {
			type: 'SET_OPTION',
			name: 'enable_block_condition',
			value: 'disabled',
		} );
		dispatch( {
			type: 'SET_OPTION',
			name: 'enable_masonry_gallery',
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
		} ).then( () => { setstatus( true );
		} );
	};
	const disabledClass = checkCategory !== 'all' ? 'disabled' : '';
	
	return (
		<>
			<div className="uag-bulk-blocks-settings-wrap">
				<span className="uag-block-cat-list">
				<span className='uag-block-cat-label'>Filters:</span>
				{categories.map( ( block , index ) => {
						return <a key = {index} className={`uag-block-cat ${ block.slug  === checkCategory ? 'uag-cat-active' : ''}`} onClick={() => setCategory(  block.slug  ) } role = "button" onKeyDown={() => setCategory(  block.slug  )} tabIndex={0} // eslint-disable-line jsx-a11y/anchor-is-valid
									>{  block.label  }
								</a>
						}
				)}
				</span>
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
			<div className="uag-blocks-settings">
				{ renderBlocksMetaBoxes }
				<DisplayCondition cat = {checkCategory}/>
				<MasonryExtension cat = {checkCategory}/>
			</div>
		</>
	);
}

export default BlocksSettings;
