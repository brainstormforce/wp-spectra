/**
 * BLOCK: Content Timeline child.
 */

import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/content-timeline-child/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import(
		/* webpackChunkName: "chunks/content-timeline-child/render" */ './render'
	)
);

const ContentTimelineChildComponent = ( props ) => {
	const deviceType = useDeviceType();

	useEffect( () => {
		// Replacement for componentDidMount.
		//Store client id.
		props.setAttributes( { block_id: props.clientId } );
	}, [] );

	useEffect( () => {
		const loadContentTimelineEditor = new CustomEvent( 'UAGTimelineEditor', { // eslint-disable-line no-undef
			detail: {},
		} );
		document.dispatchEvent( loadContentTimelineEditor );
	}, [ props, deviceType ] );
	
	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default ContentTimelineChildComponent;
