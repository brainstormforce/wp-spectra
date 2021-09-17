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

const UAGBtestimonial = ( props ) => {
	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( { classMigrate: true } );

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
		} = props.attributes;

		if ( imgVrPadding ) {
			if ( ! imgpaddingTop ) {
				props.setAttributes( { imgpaddingTop: imgVrPadding } );
			}
			if ( ! imgpaddingBottom ) {
				props.setAttributes( { imgpaddingBottom: imgVrPadding } );
			}
		}
		if ( imgHrPadding ) {
			if ( ! imgpaddingRight ) {
				props.setAttributes( { imgpaddingRight: imgHrPadding } );
			}
			if ( ! imgpaddingLeft ) {
				props.setAttributes( { imgpaddingLeft: imgHrPadding } );
			}
		}
		if ( contentPadding ) {
			if ( ! paddingTop ) {
				props.setAttributes( { paddingTop: contentPadding } );
			}
			if ( ! paddingBottom ) {
				props.setAttributes( { paddingBottom: contentPadding } );
			}
			if ( ! paddingLeft ) {
				props.setAttributes( { paddingLeft: contentPadding } );
			}
			if ( ! paddingRight ) {
				props.setAttributes( { paddingRight: contentPadding } );
			}
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
