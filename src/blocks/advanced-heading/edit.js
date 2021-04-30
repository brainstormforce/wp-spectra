/**
 * BLOCK: Advanced Heading
 */

// Import block dependencies and components.
import styling from './styling';
import RenderHeading from './render';
import HeadingSettings from './settings';
import React, { useEffect } from 'react';
//  Import CSS.
import './style.scss';

const { withSelect } = wp.data;

const { compose } = wp.compose;

const HeadingComponent = ( props ) => {
	useEffect( () => {
		// Replacement for componentDidMount.
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( { classMigrate: true } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-adv-heading-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const element = document.getElementById(
			'uagb-adv-heading-style-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	return (
		<>
			{ HeadingSettings( props ) }
			{ RenderHeading( props ) }
		</>
	);
};
const applyWithSelect = withSelect( ( select ) => {
	const { __experimentalGetPreviewDeviceType = null } = select(
		'core/edit-post'
	);
	const deviceType = __experimentalGetPreviewDeviceType
		? __experimentalGetPreviewDeviceType()
		: null;

	return {
		deviceType,
	};
} );
export default compose( applyWithSelect )( HeadingComponent );
