/**
 * BLOCK: Price List
 */

import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/price-list-child/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import(
		/* webpackChunkName: "chunks/price-list-child/render" */ './render'
	)
);
const UAGBRestaurantMenuChild = ( props ) => {
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
	}, [] );

	// to change the imageWidth according to parent
	const parentBlock = select( 'core/block-editor' ).getBlockParents(
		props.clientId
	);
	const parentBlockAttributes = select(
		'core/block-editor'
	).getBlockAttributes( parentBlock );

	const imageWidth = ( parentBlockAttributes || null !== parentBlockAttributes ) ? parentBlockAttributes.imageWidth : '';

	useEffect( () => {
		props.setAttributes( { imageWidth } );
	}, [ imageWidth ] )

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};

export default UAGBRestaurantMenuChild;
