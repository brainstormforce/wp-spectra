import React, { lazy, Suspense, useEffect } from 'react';
import styling from './styling';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/google-map/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/google-map/render" */ './render' )
);

const UAGBGoogleMap = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( {
			block_id: props.clientId.substr( 0, 8 ),
		} );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-google-map-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props, deviceType ] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBGoogleMap;
