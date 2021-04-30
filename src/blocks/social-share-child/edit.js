/**
 * BLOCK: Social Share Child - Edit Class
 */

// Import classes
import styling from "./styling";
import socialShareChildSettings from "./settings";
import rendersocialShareChild from "./render";
import React, { useEffect } from 'react';

const socialShareChildComponent = props => {

	useEffect(() => { // Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		props.setAttributes( { current_url: wp.data.select( "core/editor" ).getPermalink() } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" );
		$style.setAttribute( "id", "uagb-style-social-share-child-" + props.clientId.substr( 0, 8 ) );
		document.head.appendChild( $style );
	}, [])

	useEffect(() => { // Replacement for componentDidUpdate.
		const element = document.getElementById( "uagb-style-social-share-child-" + props.clientId.substr( 0, 8 ) );

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [props] )

	return (
		<>
			{ socialShareChildSettings( props ) }
			{ rendersocialShareChild( props ) }
		</>
	);
}

export default socialShareChildComponent;
