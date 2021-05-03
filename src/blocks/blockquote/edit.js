import styling from './styling';
import Settings from './settings';
import Render from './render';
import React, { useEffect } from 'react';

const UAGBBlockQuote = ( props ) => {

	useEffect( () => {
		const element = document.getElementById(
			'uagb-blockquote-style-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Assigning block_id in the attribute.
		props.setAttributes( { classMigrate: true } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-blockquote-style-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	return (
		<>
			<Settings parentProps={props} />
			<Render parentProps={props} />
		</>
	);
};

export default UAGBBlockQuote;
