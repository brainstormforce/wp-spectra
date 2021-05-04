/**
 * BLOCK: Price List - Edit Class
 */

import RestMenuStyle from './inline-styles';
const { select, withSelect } = wp.data;
import priceListRender from './render';
import priceListSetting from './settings';
import React, { useEffect } from 'react';

const UAGBRestaurantMenu = ( props ) => {
	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		props.setAttributes( { classMigrate: true } );
		props.setAttributes( { childMigrate: true } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-restaurant-menu-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( pricelistChild, key ) => {
			pricelistChild.attributes.imageAlignment =
				props.attributes.imageAlignment;
		} );
	}, [] );

	useEffect( () => {
		const element = document.getElementById(
			'uagb-restaurant-menu-style-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = RestMenuStyle( props );
		}

		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			props.clientId
		);

		getChildBlocks.forEach( ( pricelistChild, key ) => {
			pricelistChild.attributes.imagePosition =
				props.attributes.imagePosition;
			pricelistChild.attributes.columns = props.attributes.columns;
			pricelistChild.attributes.tcolumns = props.attributes.tcolumns;
			pricelistChild.attributes.mcolumns = props.attributes.mcolumns;
		} );
	}, [ props ] );

	return (
		<>
			{ priceListSetting( props ) }
			{ priceListRender( props ) }
		</>
	);
};

export default withSelect( ( select ) => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);

	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType,
	};
} )( UAGBRestaurantMenu );
