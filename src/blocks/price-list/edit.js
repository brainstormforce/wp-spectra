/**
 * BLOCK: Price List - Edit Class
 */

import RestMenuStyle from './inline-styles';
import { select, dispatch } from '@wordpress/data';
import React, {    useEffect } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

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
			}
			if( 'right' === imagePosition ){
				props.setAttributes( { imgAlign: 'side' } );
			}
			if( 'top' === imagePosition ){
				props.setAttributes( { imgAlign: 'top' } );
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
		} = props.attributes;


		if( 'side' === imgAlign && 'right' !== imagePosition ){
			props.setAttributes( { imagePosition : 'left' } );
			props.setAttributes( { headingAlign : 'left' } );
		}
		if( 'top' === imgAlign ){
			props.setAttributes( { imagePosition : 'top' } );
		}
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = RestMenuStyle( props );

		addBlockEditorDynamicStyles( 'uagb-restaurant-menu-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Set showImage attribute in child blocks based on current parent block's value.
		select( 'core/block-editor' )
            .getBlocksByClientId( props.clientId )[0]
            ?.innerBlocks.forEach( function( block ) {
                dispatch( 'core/block-editor' ).updateBlockAttributes(
                    block.clientId, {
                        showImage: props.attributes.showImage,
                    }
                );

            } );
	}, [ props.attributes.showImage ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/price-list.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>
		)
	);
};
export default UAGBRestaurantMenu;
