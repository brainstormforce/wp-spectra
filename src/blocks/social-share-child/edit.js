/**
 * BLOCK: Social Share Child - Edit Class
 */

// Import classes
import styling from './styling';
import lazyLoader from '@Controls/lazy-loader';
import React, { useEffect, lazy, Suspense } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
import { select } from '@wordpress/data';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/social-share-child/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import(
		/* webpackChunkName: "chunks/social-share-child/render" */ './render'
	)
);

const SocialShareChildComponent = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		if ( select( 'core/editor' ) ) {
			props.setAttributes( {
				current_url: select( 'core/editor' ).getPermalink(),
			} );
		}

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-social-share-child-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-social-share-child-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default SocialShareChildComponent;
