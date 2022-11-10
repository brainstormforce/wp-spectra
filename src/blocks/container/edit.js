/**
 * BLOCK: Container
 */
import styling from './styling';
import React, {    useEffect, useLayoutEffect } from 'react';

import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { migrateBorderAttributes } from '@Controls/generateAttributes';

import Settings from './settings';
import Render from './render';

//  Import CSS.
import './style.scss';
import { __ } from '@wordpress/i18n';

import { withSelect, useDispatch, select } from '@wordpress/data';

import { compose } from '@wordpress/compose';

import {
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';

import { createBlock } from '@wordpress/blocks';

import styles from './editor.lazy.scss';

const UAGBContainer = ( props ) => {

	const deviceType = useDeviceType();

	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	if ( props.isParentOfSelectedBlock ) {
		const emptyBlockInserter = document.querySelector( '.block-editor-block-list__empty-block-inserter' );
		if ( emptyBlockInserter ) {
			emptyBlockInserter.style.display = 'none';
		}
	}

	useEffect( () => {
		const isBlockRootParentID = select( 'core/block-editor' ).getBlockParents( props.clientId );

		const parentBlockName = select( 'core/block-editor' ).getBlocksByClientId( isBlockRootParentID );

		if ( parentBlockName[0] && 'uagb/container' !== parentBlockName[0].name || undefined === parentBlockName[0] ) {
			props.setAttributes( { isBlockRootParent: true } );
		}

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
		let element;
		if( iframeEl ){
			element = iframeEl.contentDocument.getElementById( 'block-' + props.clientId )
		} else {
			element = document.getElementById( 'block-' + props.clientId )
		}
		// Add Close Button for Variation Selector.
		const variationPicker = element?.querySelector( '.uagb-container-variation-picker .block-editor-block-variation-picker' );
		const closeButton = document.createElement( 'button' );
		closeButton.onclick = function() {
			if ( props.defaultVariation.attributes ) {
				props.setAttributes( props.defaultVariation.attributes );
			}
		};
		closeButton.setAttribute( 'class', 'uagb-variation-close' );
		closeButton.innerHTML = '×';
		if ( variationPicker ) {
			const variationPickerLabel = variationPicker.querySelector( '.components-placeholder__label' );
			variationPicker.insertBefore( closeButton,variationPickerLabel );
		}

		const {
			borderStyle,
			borderWidth,
			borderColor,
			borderHoverColor,
			borderRadius
		} = props.attributes;

		// border
		if( borderWidth || borderRadius || borderColor || borderHoverColor || borderStyle ){
			migrateBorderAttributes( 'container', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHoverColor',
				value: borderHoverColor
			},{
				label: 'borderStyle',
				value: borderStyle
			},
			props.setAttributes,
			props.attributes
			);
		}

		if( 0 !== select( 'core/block-editor' ).getBlockParents(  props.clientId ).length ){ // if there is no parent for container when child container moved outside root then do not show variations.
			props.setAttributes( { variationSelected: true } );
		}

	}, [] );

	useEffect( () => {

		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-container-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );

	useEffect( () => {

		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-container-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();

	}, [ deviceType ] );

	const blockVariationPickerOnSelect = (
		nextVariation = props.defaultVariation
	) => {
		if ( nextVariation.attributes ) {
			props.setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks && 'one-column' !== nextVariation.name ) {
			props.replaceInnerBlocks(
				props.clientId,
				createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks )
			);
		}
	};

	const createBlocksFromInnerBlocksTemplate = ( innerBlocksTemplate ) => {
		return innerBlocksTemplate.map(
			( [ name, attributes, innerBlocks = [] ] ) =>
				createBlock(
					name,
					attributes,
					createBlocksFromInnerBlocksTemplate( innerBlocks )
				)
		);
	};

	const { variations } = props;

	const { variationSelected, isPreview } = props.attributes;

	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/container.png`;

	if ( ! variationSelected && 0 === select( 'core/block-editor' ).getBlockParents( props.clientId ).length ) {

		return (
			isPreview ? <img width='100%' src={previewImageData} alt=''/> :
			<>
			<div className='uagb-container-variation-picker'>
				<BlockVariationPicker
					icon={ '' }
					label={ __(
						'Select a Layout',
						'ultimate-addons-for-gutenberg'
					) }
					instructions={ false }
					variations={ variations }
					onSelect={ ( nextVariation ) =>
						blockVariationPickerOnSelect( nextVariation )
					}
				/>
			</div>
			</>
		);
	}

	return (
		<>

						<>
			<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>

		</>
	);
};

const applyWithSelect = withSelect( ( select, props ) => { // eslint-disable-line no-shadow
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;
		const { getBlocks } = select( 'core/block-editor' );
	const {
		getBlockType,
		getBlockVariations,
		getDefaultBlockVariation,
	} = select( 'core/blocks' );
	const innerBlocks = getBlocks( props.clientId );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	return {
		// Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
		innerBlocks,
		blockType: getBlockType( props.name ),
		defaultVariation:
			typeof getDefaultBlockVariation === 'undefined'
				? null
				: getDefaultBlockVariation( props.name ),
		variations:
			typeof getBlockVariations === 'undefined'
				? null
				: getBlockVariations( props.name ),
		replaceInnerBlocks,
		deviceType,
		isParentOfSelectedBlock: select( 'core/block-editor' ).hasSelectedInnerBlock( props.clientId, true )
	};
} );
export default compose( applyWithSelect )( UAGBContainer );
