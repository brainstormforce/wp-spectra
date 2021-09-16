/**
 * BLOCK: Icon List Child
 */

// Import classes
import styling from './styling';
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { select } from '@wordpress/data';

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
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-icon-list-child-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	useEffect( () => {
		const element = document.getElementById(
			'uagb-style-icon-list-child-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	const parentBlock = select( 'core/block-editor' ).getBlockParents(
		props.clientId
	);
	const parentBlockAttributes = select(
		'core/block-editor'
	).getBlockAttributes( parentBlock );
	hideLabel = parentBlockAttributes.hideLabel;

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } hideLabel={ hideLabel } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBIconListChild;
