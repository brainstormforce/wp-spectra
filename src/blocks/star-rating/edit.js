/**
 * BLOCK: Star Rating
 */

// Import block dependencies and components.
import styling from './styling';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/star-rating/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/star-rating/render" */ './render' )
);
const UAGStarRating = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-star-rating-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-star-rating-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGStarRating;
