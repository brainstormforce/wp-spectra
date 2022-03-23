/**
 * BLOCK: Container
 */
import styling from './styling';
import React, { lazy, Suspense, useEffect, useLayoutEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/container/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import(
		/* webpackChunkName: "chunks/container/render" */ './render'
	)
);

//  Import CSS.
import './style.scss';
import { __ } from '@wordpress/i18n';

import { withSelect, useDispatch, select, dispatch } from '@wordpress/data';

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
		const isBlockRootParent = 0 === select( 'core/block-editor' ).getBlockParents( props.clientId ).length;
		const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( props.clientId ).length;

		if ( isBlockRootParent ) {
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
		const variationPicker = element.querySelector( '.uagb-container-variation-picker .block-editor-block-variation-picker' );
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

		if ( element ) {
			element.classList.remove( `uagb-editor-preview-mode-desktop` );
			element.classList.remove( `uagb-editor-preview-mode-tablet` );
			element.classList.remove( `uagb-editor-preview-mode-mobile` );
			element.classList.add( `uagb-editor-preview-mode-${ deviceType.toLowerCase() }` );
			if ( ! hasChildren ) {
				element.classList.remove( 'uagb-container-has-children' );
			}
			if ( hasChildren ) {
				element.classList.add( 'uagb-container-has-children' );
			}
			if ( props.attributes.isBlockRootParent || isBlockRootParent ) {
				element.dataset.align = props.attributes.contentWidth.split( 'align' )[1];
			}
		}

		const descendants = select( 'core/block-editor' ).getBlocks( props.clientId );

		if ( descendants.length !== props.attributes.blockDescendants.length ) {
			props.setAttributes( { blockDescendants: descendants } );
		}
	}, [] );

	useEffect( () => {

		const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
		const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( props.clientId ).length;

		let element;
		if( iframeEl ){
			element = iframeEl.contentDocument.getElementById( 'block-' + props.clientId )
		} else {
			element = document.getElementById( 'block-' + props.clientId )
		}

		if ( element ) {
			element.classList.remove( `uagb-editor-preview-mode-desktop` );
			element.classList.remove( `uagb-editor-preview-mode-tablet` );
			element.classList.remove( `uagb-editor-preview-mode-mobile` );
			element.classList.add( `uagb-editor-preview-mode-${deviceType.toLowerCase() }` );
			if ( ! hasChildren ) {
				element.classList.remove( 'uagb-container-has-children' );
			}
			if ( hasChildren ) {
				element.classList.add( 'uagb-container-has-children' );
			}
			if ( props.attributes.isBlockRootParent ) {
				element.dataset.align = props.attributes.contentWidth.split( 'align' )[1];
			}
		}

		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-container-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		const descendants = select( 'core/block-editor' ).getBlocks( props.clientId );

		if ( descendants.length !== props.attributes.blockDescendants.length ) {
			props.setAttributes( { blockDescendants: descendants } );
		}

	}, [ props ] );

	useEffect( () => {
		const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
		let element;
		if( iframeEl ){
			element = iframeEl.contentDocument.getElementById( 'block-' + props.clientId )
		} else {
			element = document.getElementById( 'block-' + props.clientId )
		}

		if ( element ) {
			element.classList.remove( `uagb-editor-preview-mode-desktop` );
			element.classList.remove( `uagb-editor-preview-mode-tablet` );
			element.classList.remove( `uagb-editor-preview-mode-mobile` );
			element.classList.add( `uagb-editor-preview-mode-${deviceType.toLowerCase() }` );
		}

		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-container-style-' + props.clientId.substr( 0, 8 ), blockStyling );

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

	useEffect( ()=>{

		const {
			blockDescendants
		} = props.attributes;

		let currentDirection = 'row';

		if ( props.attributes[ 'direction' + deviceType ].split( '-' )[0] ) {

			currentDirection = props.attributes[ 'direction' + deviceType ].split( '-' )[0];
		}
		const childColumnsWidth = ( 100 / blockDescendants.length );

		if ( 'row' === currentDirection ) {
			blockDescendants.map( ( child ) => {
				if ( ! child.attributes.widthSetByUser ) {
					dispatch( 'core/block-editor' ).updateBlockAttributes( child.clientId, {
						[`width${deviceType}`] : childColumnsWidth,
					} );
				}
				return child;
			} );
		}

	}, [props.attributes.blockDescendants] );

	const { variations } = props;

	const { variationSelected } = props.attributes;

	if ( ! variationSelected && 0 === select( 'core/block-editor' ).getBlockParents( props.clientId ).length ) {

		return (
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
		);
	}

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
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
