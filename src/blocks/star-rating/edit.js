/**
 * BLOCK: Star Rating
 */

// Import block dependencies and components.
import styling from './styling';
import { withSelect } from '@wordpress/data';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/star-rating/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/star-rating/render" */ './render' )
);
const UAGStarRating = ( props ) => {
	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const style = document.createElement( 'style' );
		style.setAttribute(
			'id',
			'uagb-star-rating-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( style );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const element = document.getElementById(
			'uagb-star-rating-style-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
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
} )( UAGStarRating );
