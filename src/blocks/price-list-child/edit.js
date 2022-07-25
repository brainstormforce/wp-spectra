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

	const parentBlock = select( 'core/block-editor' ).getBlockParents(
		props.clientId
	);
	const parentBlockAttributes = select(
		'core/block-editor'
	).getBlockAttributes( parentBlock );

	const columns = ( parentBlockAttributes || null !== parentBlockAttributes ) ? parentBlockAttributes.columns : '';
	const tcolumns = ( parentBlockAttributes || null !== parentBlockAttributes ) ? parentBlockAttributes.tcolumns : '';
	const mcolumns = ( parentBlockAttributes || null !== parentBlockAttributes ) ? parentBlockAttributes.mcolumns : '';

	useEffect( () => {
		props.setAttributes( { columns , tcolumns , mcolumns } );
	}, [ columns, tcolumns, mcolumns ] )

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
