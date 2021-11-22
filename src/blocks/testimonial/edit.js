/**
 * BLOCK: Testimonial
 */
import TestimonialStyle from './inline-styles';
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/testimonial/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/testimonial/render" */ './render' )
);
import { withSelect } from '@wordpress/data';

import hexToRGBA from '@Controls/hexToRgba';

import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

const UAGBtestimonial = ( props ) => {
	useEffect( () => {

		const { setAttributes, attributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		setAttributes( { classMigrate: true } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-testinomial-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
		const {
			imgVrPadding,
			imgHrPadding,
			imgpaddingTop,
			imgpaddingBottom,
			imgpaddingRight,
			imgpaddingLeft,
			contentPadding,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			backgroundOpacity,
			backgroundImageColor
		} = attributes;

		if ( imgVrPadding ) {
			if ( undefined === imgpaddingTop ) {
				setAttributes( { imgpaddingTop: imgVrPadding } );
			}
			if ( undefined === imgpaddingBottom ) {
				setAttributes( { imgpaddingBottom: imgVrPadding } );
			}
		}
		if ( imgHrPadding ) {
			if ( undefined === imgpaddingRight ) {
				setAttributes( { imgpaddingRight: imgHrPadding } );
			}
			if ( undefined === imgpaddingLeft ) {
				setAttributes( { imgpaddingLeft: imgHrPadding } );
			}
		}
		if ( contentPadding ) {
			if ( undefined === paddingTop ) {
				setAttributes( { paddingTop: contentPadding } );
			}
			if ( undefined === paddingBottom ) {
				setAttributes( { paddingBottom: contentPadding } );
			}
			if ( undefined === paddingLeft ) {
				setAttributes( { paddingLeft: contentPadding } );
			}
			if ( undefined === paddingRight ) {
				setAttributes( { paddingRight: contentPadding } );
			}
		}

		if ( 101 !== backgroundOpacity ) {
			const color = hexToRGBA( maybeGetColorForVariable( backgroundImageColor ), backgroundOpacity );
			setAttributes( { backgroundImageColor: color } );
			setAttributes( { backgroundOpacity: 101 } );
		}

	}, [] );

	useEffect( () => {
		const element = document.getElementById(
			'uagb-testinomial-style-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = TestimonialStyle( props );
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
} )( UAGBtestimonial );
