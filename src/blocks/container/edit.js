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

	const { variationSelected, isPreview } = props.attributes;

	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cmVjdCB4PSI0NS42NDQiIHk9IjQ3LjY0OSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjEyNC41IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iMTc4Ljg5NCIgeT0iNDcuNjQ5IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNjEuNDg0IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQk8cmVjdCB4PSIyNDIuMjI3IiB5PSI0Ny42NDkiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iNTQuOTkyIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxyZWN0IHg9IjQ1LjQ4NSIgeT0iMTEzLjE0OCIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjYxLjQ4NCIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPGc+DQoJCQk8cmVjdCB4PSIxMDguODE4IiB5PSIxMTMuMTQ4IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNjEuNDg0IiBoZWlnaHQ9IjI2LjU0NCIvPg0KCQkJPHJlY3QgeD0iMTA4LjgxOCIgeT0iMTQxLjU2NyIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjYxLjQ4NCIgaGVpZ2h0PSIyNi41NzMiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iMjQyLjIyNyIgeT0iMTEzLjE0OCIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjYxLjQ4NCIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPGc+DQoJCQk8cmVjdCB4PSIxNzguODkzIiB5PSIxMTMuMTQ4IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNjEuNDg0IiBoZWlnaHQ9IjI2LjU0NCIvPg0KCQkJPHJlY3QgeD0iMTc4Ljg5MyIgeT0iMTQxLjU2NyIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjYxLjQ4NCIgaGVpZ2h0PSIyNi41NzMiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cmVjdCB4PSIxNzguOTc3IiB5PSIyMDcuMzk4IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMTI0LjgxOCIgaGVpZ2h0PSIyNi42MjciLz4NCgkJPHJlY3QgeD0iMTc4LjgxIiB5PSIxNzguOTgyIiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNjEuNDg0IiBoZWlnaHQ9IjI2LjU0MyIvPg0KCQk8cmVjdCB4PSIyNDIuMzEiIHk9IjE3OS4wMzMiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iMjYuNTc0Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cmVjdCB4PSI0NS41NjgiIHk9IjE3OC42NDgiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSIxMjQuODE4IiBoZWlnaHQ9IjI2LjYyNyIvPg0KCQk8cmVjdCB4PSI0NS40MDEiIHk9IjIwNy4xNDgiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iMjYuNTQ0Ii8+DQoJCTxyZWN0IHg9IjEwOC45MDEiIHk9IjIwNy4wNjciIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iMjYuNTczIi8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=';

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
