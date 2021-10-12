/**
 * BLOCK: Column - Edit
 */

import styling from './styling';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/column/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/column/render" */ './render' )
);

import { withSelect } from '@wordpress/data';

import hexToRGBA from '@Controls/hexToRgba';

import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

const ColumnComponent = ( props ) => {
	useEffect( () => {

		const { setAttributes, attributes } = props;

		const { backgroundOpacity, backgroundImageColor } = attributes;

		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-column-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

		if ( 101 !== backgroundOpacity ) {
			const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
			setAttributes( { backgroundImageColor: color } );
			setAttributes( { backgroundOpacity: 101 } );
		}

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const element = document.getElementById(
			'uagb-column-style-' + props.clientId.substr( 0, 8 )
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
} )( ColumnComponent );
