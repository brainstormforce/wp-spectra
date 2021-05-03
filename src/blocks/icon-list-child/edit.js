/**
 * BLOCK: Icon List Child
 */

// Import classes
import iconListChildRender from './render';
import iconListChildSettings from './settings';
import styling from './styling';
import React, { useEffect } from 'react';

const UAGBIconListChild = ( props ) => {
	useEffect( () => {
		// Replacement for componentDidMount.
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

	return (
		<>
			{ iconListChildSettings( props ) }
			{ iconListChildRender( props ) }
		</>
	);
};

export default UAGBIconListChild;
