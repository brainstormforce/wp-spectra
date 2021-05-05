import styling from './styling';
import gfStylerRender from './render';
import gfStylerSetting from './settings';
import React, { useEffect } from 'react';

const { withSelect } = wp.data;

const UAGBGF = ( props ) => {
	useEffect( () => {
		// Replacement for componentDidMount.
		// Assigning block_id in the attribute.
		props.setAttributes( { isHtml: false } );
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-gf-styler-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	useEffect( () => {
		$( '.wpgf-submit' ).click( function ( event ) {
			event.preventDefault();
		} );

		const element = document.getElementById(
			'uagb-gf-styler-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );
	const { isHtml } = props.attributes
	return (
		<>
			{ isHtml && (gfStylerSetting( props ) )}
			{ gfStylerRender( props ) }
		</>
	);
};

export default withSelect( ( select, props ) => {
	const { setAttributes } = props
	const { formId, isHtml } = props.attributes
	let json_data = ""

	if ( formId && -1 != formId && 0 != formId && ! isHtml ) {

		$.ajax({
			url: uagb_blocks_info.ajax_url,
			data: {
				action: "uagb_gf_shortcode",
				formId : formId,
				nonce: uagb_blocks_info.uagb_ajax_nonce
			},
			dataType: "json",
			type: "POST",
			success: function( data ) {
				setAttributes( { isHtml: true } )
				setAttributes( { formJson: data } )
				json_data = data
			}
		})
	}

	return {
		formHTML: json_data
	}
} )( UAGBGF )

