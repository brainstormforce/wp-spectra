/**
 * BLOCK: UAGB - Section Edit Class
 */

import styling from './styling';
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/section/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/section/render" */ './render' )
);

import hexToRGBA from '@Controls/hexToRgba';

import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

const UAGBSectionEdit = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-section-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-section-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	useEffect( () => {

		const { setAttributes, attributes } = props;

		const { backgroundOpacity, backgroundImageColor } = attributes;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		
		if ( 101 !== backgroundOpacity ) {
			const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
			setAttributes( { backgroundImageColor: color } );
			setAttributes( { backgroundOpacity: 101 } );
		}
		
	}, [] );

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};

export default UAGBSectionEdit;
