/**
 * BLOCK: Price List
 */

import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { select } from '@wordpress/data';

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

	useEffect( () => {
		const parentClientId = select(
			'core/block-editor'
		).getBlockHierarchyRootClientId( props.clientId );
		const parentAttributes = select( 'core/block-editor' ).getBlockAttributes(
			parentClientId
		);

		const showImg = ( parentAttributes ) ? parentAttributes.showImage : props.attributes.showImage;
		props.setAttributes ( { showImage: showImg } );
	}, [props] );

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
