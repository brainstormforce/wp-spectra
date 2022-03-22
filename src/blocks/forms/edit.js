/**
 * BLOCK: Forms - Edit
 */

import React, { useEffect, useCallback, Suspense, lazy } from 'react';
import styling from './styling';
import UAGB_Block_Icons from '@Controls/block-icons';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/form/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/form/render" */ './render' )
);

import { withSelect, useDispatch } from '@wordpress/data';

import { compose, createHigherOrderComponent } from '@wordpress/compose';

import { createBlock } from '@wordpress/blocks';

import { __experimentalBlockVariationPicker } from '@wordpress/block-editor';

import { withNotices } from '@wordpress/components';

import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';

const UAGBFormsEdit = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		const {
			vPaddingSubmit,
			hPaddingSubmit,
			vPaddingField,
			hPaddingField,
			paddingFieldTop,
			paddingFieldRight,
			paddingFieldBottom,
			paddingFieldLeft,
			paddingBtnTop,
			paddingBtnRight,
			paddingBtnBottom,
			paddingBtnLeft,
		} = props.attributes;

		if ( vPaddingSubmit ) {
			if ( undefined === paddingBtnTop ) {
				setAttributes( { paddingBtnTop: vPaddingSubmit } );
			}
			if ( undefined === paddingBtnBottom ) {
				setAttributes( { paddingBtnBottom: vPaddingSubmit } );
			}
		}
		if ( hPaddingSubmit ) {
			if ( undefined === paddingBtnRight ) {
				setAttributes( { paddingBtnRight: hPaddingSubmit } );
			}
			if ( undefined === paddingBtnLeft ) {
				setAttributes( { paddingBtnLeft: hPaddingSubmit } );
			}
		}
		if ( vPaddingField ) {
			if ( undefined === paddingFieldTop ) {
				setAttributes( { paddingFieldTop: vPaddingField } );
			}
			if ( undefined === paddingFieldBottom ) {
				setAttributes( { paddingFieldBottom: vPaddingField } );
			}
		}
		if ( hPaddingField ) {
			if ( undefined === paddingFieldRight ) {
				setAttributes( { paddingFieldRight: hPaddingField } );
			}
			if ( undefined === paddingFieldLeft ) {
				setAttributes( { paddingFieldLeft: hPaddingField } );
			}
		}

		const id = props.clientId;

		window.addEventListener( 'load', renderReadyClasses( id ) );
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-forms-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-forms-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	const blockVariationPickerOnSelect = useCallback(
		( nextVariation = props.defaultVariation ) => {
			if ( nextVariation.attributes ) {
				props.setAttributes( nextVariation.attributes );
			}

			if ( nextVariation.innerBlocks ) {
				props.replaceInnerBlocks(
					props.clientId,
					createBlocksFromInnerBlocksTemplate(
						nextVariation.innerBlocks
					)
				);
			}
		}
	);
	const createBlocksFromInnerBlocksTemplate = useCallback(
		( innerBlocksTemplate ) => {
			return innerBlocksTemplate.map(
				( [ name, attributes, innerBlocks = [] ] ) =>
					createBlock(
						name,
						attributes,
						createBlocksFromInnerBlocksTemplate( innerBlocks )
					)
			);
		}
	);
	const { variations, hasInnerBlocks } = props;

	const renderReadyClasses = useCallback( ( id ) => {
		const iframeEl = document.querySelector( `iframe[name='editor-canvas']` );
		let mainDiv;
		let formscope;
		if( iframeEl ){
			mainDiv = iframeEl.contentDocument.getElementById( 'block-' + id )
			formscope = mainDiv.getElementsByClassName( 'uagb-forms__outer-wrap' )
		} else {
			mainDiv = document.getElementById( 'block-' + id )
			formscope = mainDiv?.getElementsByClassName( 'uagb-forms__outer-wrap' )
		}

		if ( formscope && formscope[ 0 ] ) {
			const editorwrap = formscope[ 0 ].children;
			const formInnerWrap = editorwrap[ 0 ].children;
			const editorBlockWrap = formInnerWrap[ 0 ].getElementsByClassName(
				'block-editor-block-list__layout'
			);
			const sibling = editorBlockWrap[ 0 ].children;

			for ( let index = 0; index < sibling.length; index++ ) {
				if (
					sibling[ index ].classList.contains( 'uag-col-2' ) &&
					sibling[ index + 1 ].classList.contains( 'uag-col-2' )
				) {
					const div = document.createElement( 'div' );
					div.className = 'uag-col-2-wrap uag-col-wrap-' + index;
					sibling[ index + 1 ].after( div );
					const wrapper_div = formscope[ 0 ].getElementsByClassName(
						'uag-col-wrap-' + index
					);
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
				} else if (
					sibling[ index ].classList.contains( 'uag-col-3' ) &&
					sibling[ index + 1 ].classList.contains( 'uag-col-3' ) &&
					sibling[ index + 2 ].classList.contains( 'uag-col-3' )
				) {
					const div = document.createElement( 'div' );
					div.className = 'uag-col-3-wrap uag-col-wrap-' + index;
					sibling[ index + 2 ].after( div );
					const wrapper_div = formscope[ 0 ].getElementsByClassName(
						'uag-col-wrap-' + index
					);
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
				} else if (
					sibling[ index ].classList.contains( 'uag-col-4' ) &&
					sibling[ index + 1 ].classList.contains( 'uag-col-4' ) &&
					sibling[ index + 2 ].classList.contains( 'uag-col-4' ) &&
					sibling[ index + 3 ].classList.contains( 'uag-col-4' )
				) {
					const div = document.createElement( 'div' );
					div.className = 'uag-col-4-wrap uag-col-wrap-' + index;
					sibling[ index + 3 ].after( div );
					const wrapper_div = formscope[ 0 ].getElementsByClassName(
						'uag-col-wrap-' + index
					);
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
					wrapper_div[ 0 ].appendChild( sibling[ index ] );
				}
			}
		}
	} );
const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNEQkRDREUiIGQ9Ik0xMzUuNDYyLDI2Mi44MjZjMCw1LjU3Ni00LjUyMSwxMC4wOTYtMTAuMDk3LDEwLjA5NkgzOC40MTljLTUuNTc2LDAtMTAuMDk4LTQuNTItMTAuMDk4LTEwLjA5NmwwLDANCgkJYzAtNS41NzgsNC41MjItMTAuMDk5LDEwLjA5OC0xMC4wOTloODYuOTQ1QzEzMC45NDEsMjUyLjcyOCwxMzUuNDYyLDI1Ny4yNDgsMTM1LjQ2MiwyNjIuODI2TDEzNS40NjIsMjYyLjgyNnoiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMyMS42NzksODEuNjA4YzAsMi4yMjMtMS44MDQsNC4wMjYtNC4wMjYsNC4wMjZIMzIuMzQ4Yy0yLjIyNCwwLTQuMDI3LTEuODAzLTQuMDI3LTQuMDI2di0wLjUwNA0KCQkJYzAtMi4yMjMsMS44MDMtNC4wMjYsNC4wMjctNC4wMjZoMjg1LjMwNGMyLjIyMywwLDQuMDI2LDEuODAzLDQuMDI2LDQuMDI2VjgxLjYwOHoiLz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTMyMS42NzksMTEwLjUxNmMwLDIuMjIzLTEuODA0LDQuMDI2LTQuMDI2LDQuMDI2SDMyLjM0OGMtMi4yMjQsMC00LjAyNy0xLjgwMy00LjAyNy00LjAyNnYtMC41MDQNCgkJCWMwLTIuMjIzLDEuODAzLTQuMDI2LDQuMDI3LTQuMDI2aDI4NS4zMDRjMi4yMjMsMCw0LjAyNiwxLjgwMyw0LjAyNiw0LjAyNlYxMTAuNTE2eiIvPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzIxLjY3OSwxMzkuNDI0YzAsMi4yMjItMS44MDQsNC4wMjYtNC4wMjYsNC4wMjZIMzIuMzQ4Yy0yLjIyNCwwLTQuMDI3LTEuODA0LTQuMDI3LTQuMDI2di0wLjUwNA0KCQkJYzAtMi4yMjMsMS44MDMtNC4wMjYsNC4wMjctNC4wMjZoMjg1LjMwNGMyLjIyMywwLDQuMDI2LDEuODAzLDQuMDI2LDQuMDI2VjEzOS40MjR6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMzEzLjM5OSwxNjkuODMyYzEuNDg3LDAsMi42OTcsMS4yMiwyLjY5NywyLjcydjUxLjA3NWMwLDEuNS0xLjIxLDIuNzItMi42OTcsMi43MkgzNS4wMTcNCgkJCWMtMS40ODYsMC0yLjY5Ni0xLjIyLTIuNjk2LTIuNzJ2LTUxLjA3NWMwLTEuNSwxLjIwOS0yLjcyLDIuNjk2LTIuNzJIMzEzLjM5OSBNMzEzLjM5OSwxNjUuODMySDM1LjAxNw0KCQkJYy0zLjY5OCwwLTYuNjk2LDMuMDA5LTYuNjk2LDYuNzJ2NTEuMDc1YzAsMy43MSwyLjk5OCw2LjcyLDYuNjk2LDYuNzJoMjc4LjM4MmMzLjcsMCw2LjY5Ny0zLjAxLDYuNjk3LTYuNzJ2LTUxLjA3NQ0KCQkJQzMyMC4wOTcsMTY4Ljg0LDMxNy4xLDE2NS44MzIsMzEzLjM5OSwxNjUuODMyTDMxMy4zOTksMTY1LjgzMnoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==';
	if ( ! hasInnerBlocks ) {
		return (
			<>
			{ props.attributes.isPreview ? <img width='100%' src={previewImageData} alt=''/> :
				<__experimentalBlockVariationPicker
					icon={ UAGB_Block_Icons.columns }
					label={ uagb_blocks_info.blocks[ 'uagb/forms' ].title }
					instructions={ __(
						'Select a variation to start with.',
						'ultimate-addons-for-gutenberg'
					) }
					variations={ variations }
					allowSkip
					onSelect={ ( nextVariation ) =>
						blockVariationPickerOnSelect( nextVariation )
					}
					className="uagb-forms-variations"
				/>
	}
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

const applyWithSelect = withSelect( ( select, props ) => {
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
		hasInnerBlocks:
			select( 'core/block-editor' ).getBlocks( props.clientId ).length >
			0,

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
	};
} );

const addAdvancedClasses = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		return (
			<BlockListBlock
				{ ...props }
				className={ props.attributes.className }
			/>
		);
	};
}, 'addAdvancedClasses' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'uagb/forms', addAdvancedClasses );

export default compose(
	withNotices,
	applyWithSelect,
	addAdvancedClasses
)( UAGBFormsEdit );
