

import styling from "./styling"
import gfStylerRender from "./render"
import gfStylerSetting from "./settings"

const {
	withSelect
} = wp.data

const UAGBGF = props => {

	useEffect( () => {
		// Replacement for componentDidMount.
		// Assigning block_id in the attribute.
		this.props.setAttributes( { isHtml: false } )
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-gf-styler-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
	}, [] );

	useEffect( () => {
		$(".wpgf-submit").click( function(event) {
			event.preventDefault()
		})

		var element = document.getElementById( "uagb-gf-styler-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
	}, [ props ] );

	return (
		<>
			{ gfStylerSetting(props) }
			{ gfStylerRender(props) }
		</>
	)
}

export default withSelect( ( props ) => {
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
