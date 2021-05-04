/**
 * BLOCK: Price List - Edit Class
 */

import priceListChildRender from './render';
import priceListChildSettings from './settings';
import React, { useEffect } from 'react';

const UAGBRestaurantMenuChild = ( props ) => {
	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
	}, [] );

	return (
		<>
			{ priceListChildSettings( props ) }
			{ priceListChildRender( props ) }
		</>
	);
};

export default UAGBRestaurantMenuChild;
