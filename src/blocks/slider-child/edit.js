/**
 * BLOCK: Slider Child
 */

import Settings from './settings';
import Render from './render';
import styling from './styling';
import React, { useEffect } from 'react';

import { withSelect, useDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

const UAGBSlide = ( props ) => {

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-slider-child-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/children/slider-child.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>
		)
	);
};

const applyWithSelect = withSelect( ( select, props ) => { // eslint-disable-line no-shadow
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;
		const { getBlocks, getBlockIndex } = select( 'core/block-editor' );
	const {
		getBlockType,
	} = select( 'core/blocks' );
	const { insertBlock } = useDispatch( 'core/block-editor' );
	const innerBlocks = getBlocks( props.clientId );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const slideIndex = getBlockIndex( props.clientId ); 

	return {
		// Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
		innerBlocks,
		insertBlock,
		blockType: getBlockType( props.name ),
		replaceInnerBlocks,
		deviceType,
		isParentOfSelectedBlock: select( 'core/block-editor' ).hasSelectedInnerBlock( props.clientId, true ),
		slideIndex
	};
} );
export default compose( applyWithSelect )( UAGBSlide );
