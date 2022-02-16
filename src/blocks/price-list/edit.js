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

		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		if( 'side' === props.attributes.imgAlign && 'right' !== props.attributes.imagePosition ){
			props.setAttributes( { imagePosition : 'left' } );
			props.setAttributes( { headingAlign : 'left' } );
		}
		if( 'top' === props.attributes.imgAlign ){
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
			let attrs = getBlockAttributes(clientId);
			if (
				attrs.imagePosition !== props.attributes.imagePosition ||
				attrs.columns !== props.attributes.columns ||
				attrs.tcolumns !== props.attributes.tcolumns ||
				attrs.mcolumns !== props.attributes.mcolumns ||
				attrs.headingTag !== props.attributes.headingTag ||
				attrs.imageSize !== props.attributes.imageSize ||
				attrs.headingAlign !== props.attributes.headingAlign ||
				attrs.stack !== props.attributes.stack ||
				attrs.imageAlignment !== props.attributes.imageAlignment
			) {
				let childAttrs = {
					imagePosition : props.attributes.imagePosition,
					columns : props.attributes.columns,
					tcolumns : props.attributes.tcolumns,
					mcolumns : props.attributes.mcolumns,
					headingTag : props.attributes.headingTag,
					imageSize : props.attributes.imageSize,
					headingAlign : props.attributes.headingAlign,
					stack : props.attributes.stack,
					imageAlignment : props.attributes.imageAlignment,
				}
				dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, childAttrs );
				return clientId;
			}
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
