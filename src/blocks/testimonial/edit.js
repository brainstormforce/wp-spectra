/**
 * BLOCK: Testimonial
 */
import TestimonialStyle from './inline-styles';
import testimonialSettings from './settings';
import testimonialRender from './render';
import React, { useEffect } from 'react';
const { withSelect } = wp.data;

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
		<>
			{ testimonialSettings( props ) }
			{ testimonialRender( props ) }
		</>
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
