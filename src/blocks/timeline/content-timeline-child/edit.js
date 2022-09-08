/**
 * BLOCK: Content Timeline child.
 */

import React, { useEffect,    } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';

import Settings from './settings';
import Render from './render';

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

					<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
			</>

	);
};

export default ContentTimelineChildComponent;
