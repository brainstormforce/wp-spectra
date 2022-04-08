/**
 * BLOCK: Image Gallery
 */

import styling from './styling';
import React, { useEffect, Suspense, lazy } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/image-gallery/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/image-gallery/render" */ './render' )
);

const UAGBImageGallery = ( props ) => {

	const deviceType = useDeviceType();
	useEffect( () => {
		const { setAttributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );
        addBlockEditorDynamicStyles( 'uagb-image-gallery-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props, deviceType ] );

	//'uagb-style-image-gallery-'

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBImageGallery;
