/**
 * BLOCK: Price List - Edit Class
 */

import RestMenuStyle from './inline-styles';
import { select, dispatch } from '@wordpress/data';
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/price-list/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/price-list/render" */ './render' )
);

const UAGBRestaurantMenu = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		props.setAttributes( { classMigrate: true } );
		props.setAttributes( { childMigrate: true } );
		const {
			imgVrPadding,
			imgHrPadding,
			contentVrPadding,
			contentHrPadding,
			contentPaddingTop,
			contentPaddingRight,
			contentPaddingBottom,
			contentPaddingLeft,
			imgPaddingTop,
			imgPaddingRight,
			imgPaddingBottom,
			imgPaddingLeft,
			imagePosition
		} = props.attributes;

		if ( imgVrPadding ) {
			if ( ! imgPaddingTop ) {
				props.setAttributes( { imgPaddingTop: imgVrPadding } );
			}
			if ( ! imgPaddingBottom ) {
				props.setAttributes( { imgPaddingBottom: imgVrPadding } );
			}
		}
		if ( imgHrPadding ) {
			if ( ! imgPaddingRight ) {
				props.setAttributes( { imgPaddingRight: imgHrPadding } );
			}
			if ( ! imgPaddingLeft ) {
				props.setAttributes( { imgPaddingLeft: imgHrPadding } );
			}
		}
		if ( contentVrPadding ) {
			if ( ! contentPaddingTop ) {
				props.setAttributes( { contentPaddingTop: contentVrPadding } );
			}
			if ( ! contentPaddingBottom ) {
				props.setAttributes( {
					contentPaddingBottom: contentVrPadding,
				} );
			}
		}
		if ( contentHrPadding ) {
			if ( ! contentPaddingRight ) {
				props.setAttributes( {
					contentPaddingRight: contentHrPadding,
				} );
			}
			if ( ! contentPaddingLeft ) {
				props.setAttributes( { contentPaddingLeft: contentHrPadding } );
			}
		}
		if( imagePosition ){
			if( 'left' === imagePosition ){
				props.setAttributes( { imgAlign: 'side' } );
				props.setAttributes( { imagePosition: 'left' } );
			}
			if( 'right' === imagePosition ){
				props.setAttributes( { imgAlign: 'side' } );
				props.setAttributes( { imagePosition: 'right' } );
			}
			if( 'top' === imagePosition ){
				props.setAttributes( { imgAlign: 'top' } );
				props.setAttributes( { imagePosition: 'top' } );
			}
		}

		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( pricelistChild ) => {
			pricelistChild.attributes.imageAlignment =
				props.attributes.imageAlignment;
		} );


	}, [] );

	useEffect( () => {

		const blockStyling = RestMenuStyle( props );

		addBlockEditorDynamicStyles( 'uagb-restaurant-menu-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		const {
			imgAlign,
			imagePosition,
			columns,
			tcolumns,
			mcolumns,
			headingTag,
			imageSize,
			headingAlign,
			stack,
			imageAlignment
		} = props.attributes;

		if( 'side' === imgAlign && 'right' !== imagePosition ){
			props.setAttributes( { imagePosition : 'left' } );
			props.setAttributes( { headingAlign : 'left' } );
		}
		if( 'top' === imgAlign ){
			props.setAttributes( { imagePosition : 'top' } );
		}

		const { getSelectedBlock, getBlockAttributes } = select( 'core/block-editor' );

        let childBlocks = [];

        if ( getSelectedBlock()?.innerBlocks ) {
            childBlocks = getSelectedBlock().innerBlocks;
        }

        const childBlocksClientIds = [];

        childBlocks.map( ( childBlock ) => {
            if ( childBlock.clientId ) {
                childBlocksClientIds.push( childBlock.clientId );
            }
            return childBlock;
        } );

        childBlocksClientIds.map( ( clientId ) => {
			const attrs = getBlockAttributes( clientId );
			if (
				attrs.imagePosition !== imagePosition ||
				attrs.columns !== columns ||
				attrs.tcolumns !== tcolumns ||
				attrs.mcolumns !== mcolumns ||
				attrs.headingTag !== headingTag ||
				attrs.imageSize !== imageSize ||
				attrs.headingAlign !== headingAlign ||
				attrs.stack !== stack ||
				attrs.imageAlignment !== imageAlignment
			) {
				const childAttrs = {
					imagePosition,
					columns,
					tcolumns,
					mcolumns,
					headingTag,
					imageSize,
					headingAlign,
					stack,
					imageAlignment,
				}
				dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, childAttrs );
			}
			return clientId;
        } );

	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = RestMenuStyle( props );

		addBlockEditorDynamicStyles( 'uagb-restaurant-menu-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};

export default UAGBRestaurantMenu;
