/**
 * BLOCK: Icon List Child
 */

// Import classes
import styling from './styling';
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { select } from '@wordpress/data';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/icon-list-child/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/icon-list-child/render" */ './render' )
);

let hideLabel;

const UAGBIconListChild = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-icon-list-child' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-icon-list-child' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ deviceType ] );

	const parentBlock = select( 'core/block-editor' ).getBlockParents(
		props.clientId
	);
	const parentBlockAttributes = select(
		'core/block-editor'
	).getBlockAttributes( parentBlock );
	hideLabel = ( parentBlockAttributes || null !== parentBlockAttributes ) ? parentBlockAttributes.hideLabel : '';

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } hideLabel={ hideLabel } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBIconListChild;
