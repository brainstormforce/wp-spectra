/**
 * BLOCK: UAGB - Columns Edit
 */

import styling from './styling';
import { __ } from '@wordpress/i18n';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
import React, { useEffect, lazy, Suspense, useLayoutEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/columns/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/columns/render" */ './render' )
);

import { withSelect, useDispatch } from '@wordpress/data';

import { compose } from '@wordpress/compose';

import {
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from '@wordpress/block-editor';

import { withNotices } from '@wordpress/components';

import { createBlock } from '@wordpress/blocks';

import hexToRGBA from '@Controls/hexToRgba';

import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

import styles from './editor.lazy.scss';

const ColumnsComponent = ( props ) => {
	const deviceType = useDeviceType();
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	useEffect( () => {

		const { attributes, setAttributes } = props;

		const {
			topMargin,
			bottomMargin,
			topMarginDesktop,
			bottomMarginDesktop,
			backgroundOpacity,
			align,
			vAlign,
			backgroundImageColor
		} = attributes

		if ( 'middle' === vAlign ) {
			setAttributes( { vAlign: 'center' } );
		}

		if ( undefined === align ){
			setAttributes( { align: 'wide' } );
		}

		if ( undefined === vAlign ){
			setAttributes( { vAlign: 'top' } );
		}

		// Replacement for componentDidMount.
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );


		//Margin
		if ( topMargin ) {
			if ( ! topMarginDesktop ) {
				setAttributes( { topMarginDesktop: topMargin } );
			}
		}

		if ( bottomMargin ) {
			if ( ! bottomMarginDesktop ) {
				setAttributes( { bottomMarginDesktop: bottomMargin } );
			}
		}

		if ( 101 !== backgroundOpacity ) {
			const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
			setAttributes( { backgroundImageColor: color } );
			setAttributes( { backgroundOpacity: 101 } );
		}

	}, [] );

	useEffect( () => {

		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-columns-style-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-columns-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	const blockVariationPickerOnSelect = (
		nextVariation = props.defaultVariation
	) => {
		if ( nextVariation.attributes ) {
			props.setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks ) {
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

	const { variations, hasInnerBlocks } = props;
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iNDM0LjVweCIgdmlld0JveD0iMCAwIDM1MCA0MzQuNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzUwIDQzNC41IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjQ2LjEyNSIgeT0iMjkuMzc5IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMTI0LjUiIGhlaWdodD0iNTQuOTkyIi8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cmVjdCB4PSIxNzkuMzc1IiB5PSIyOS4zNzkiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iNTQuOTkyIi8+DQoJCQk8cmVjdCB4PSIyNDIuNzA4IiB5PSIyOS4zNzkiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iNTQuOTkyIi8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHJlY3QgeD0iNDUuODA3IiB5PSIxMDkuNTY3IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNDAuMjg5IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iODcuODUxIiB5PSIxMDkuNTY3IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iODIuNzczIiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHJlY3QgeD0iMjYzLjkwMyIgeT0iMTA5LjU2NyIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjQwLjI4OSIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJCTxyZWN0IHg9IjE3OS4zNzUiIHk9IjEwOS41NjciIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI4Mi43NzMiIGhlaWdodD0iNTQuOTkyIi8+DQoJCTwvZz4NCgk8L2c+DQoJPGc+DQoJCTxnPg0KCQkJPHJlY3QgeD0iNDUuOTk5IiB5PSIxODkuNzU0IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNDAuMzMyIiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iODguMTQ2IiB5PSIxODkuNzU0IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNDAuMzMxIiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMTMwLjI5MyIgeT0iMTg5Ljc1NCIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjQwLjMzMiIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjI0Mi43MDgiIHk9IjE4OS43NTQiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSI2MS40ODQiIGhlaWdodD0iNTQuOTkyIi8+DQoJCQk8cmVjdCB4PSIxNzkuMzc1IiB5PSIxODkuNzU0IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMjkuMTUiIGhlaWdodD0iNTQuOTkyIi8+DQoJCQk8cmVjdCB4PSIyMTAuNzA4IiB5PSIxODkuNzU0IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMzAuMTUxIiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjQ1LjgwNyIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjI5LjE1IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iNzcuNjk3IiB5PSIzNTAuMTI5IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMjkuMTQ5IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMTA5LjU4NSIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjI5LjE1IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMTQxLjQ3NCIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjI5LjE1IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHJlY3QgeD0iMjgxLjA0OCIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjIzLjE0NiIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJCTxyZWN0IHg9IjI1NS42MyIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjIzLjE0NiIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJCTxyZWN0IHg9IjIzMC4yMTIiIHk9IjM1MC4xMjkiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSIyMy4xNDUiIGhlaWdodD0iNTQuOTkyIi8+DQoJCQk8cmVjdCB4PSIyMDQuNzkzIiB5PSIzNTAuMTI5IiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iMjMuMTQ2IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMTc5LjM3NSIgeT0iMzUwLjEyOSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjIzLjE0NiIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgkJPGc+DQoJCQk8cmVjdCB4PSIyMTAuODc1IiB5PSIyNjkuOTQxIiBmaWxsPSIjREJEQ0RFIiB3aWR0aD0iNjEuNDg0IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMTc5LjM3NSIgeT0iMjY5Ljk0MSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjI5LjE1IiBoZWlnaHQ9IjU0Ljk5MiIvPg0KCQkJPHJlY3QgeD0iMjc0LjM3NSIgeT0iMjY5Ljk0MSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjI5LjgxNyIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxyZWN0IHg9IjQ1LjgwNyIgeT0iMjY5Ljk0MSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjYxLjQ4NCIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJCTxyZWN0IHg9IjE0MS40NzQiIHk9IjI2OS45NDEiIGZpbGw9IiNEQkRDREUiIHdpZHRoPSIyOS4xNSIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJCTxyZWN0IHg9IjEwOS4xNCIgeT0iMjY5Ljk0MSIgZmlsbD0iI0RCRENERSIgd2lkdGg9IjMwLjE1MSIgaGVpZ2h0PSI1NC45OTIiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';
	if ( ! hasInnerBlocks ) {

		return (
			props.attributes.isPreview ? <img width='100%' src={previewImageData}/> :
			<div className='uagb-columns-variation-picker'>
				<BlockVariationPicker
					icon={ '' }
					label={ uagb_blocks_info.blocks[ 'uagb/columns' ].title }
					instructions={ __(
						'Select a variation to start with.',
						'ultimate-addons-for-gutenberg'
					) }
					variations={ variations }
					onSelect={ ( nextVariation ) =>
						blockVariationPickerOnSelect( nextVariation )
					}
				/>
			</div>
		);
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
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

export default compose( withNotices, applyWithSelect )( ColumnsComponent );
