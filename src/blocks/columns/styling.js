/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

import inlineStyles from "./inline-styles"

function styling( props ) {

	const {
		backgroundType,
		backgroundVideoColor,
		backgroundImageColor,
		backgroundOpacity,
		backgroundColor,
		backgroundVideoOpacity,
		backgroundVideo,
		borderRadius,
		contentWidth,
		width
	} = props.attributes

	let max_width = "100%"

	if ( 'custom' == contentWidth ) {
		if ( '' != width ) {
			max_width = width + "px"
		}
	}

	var selectors = {
		".uagb-columns__wrap" : inlineStyles( props ),
		" .uagb-columns__video-wrap": {
			"opacity" : ( typeof backgroundVideoOpacity != "undefined" ) ? ( 100 - backgroundVideoOpacity )/100 : 0.5
		},
		" > .uagb-columns__inner-wrap": {
			"max-width" : max_width
		}
	}

	selectors[" > .uagb-columns__overlay"] = {}

	if ( "video" == backgroundType ) {
		selectors[" > .uagb-columns__overlay"] = {
			"opacity" : 1,
			"background-color": backgroundVideoColor
		}
	} else if( "image" == backgroundType ) {
		selectors[" > .uagb-columns__overlay"] = {
			"opacity" : ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : "",
			"background-color": backgroundImageColor
		}
	} else if( "color" == backgroundType ) {
		selectors[" > .uagb-columns__overlay"] = {
			"opacity" : ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : "",
			"background-color" : backgroundColor
		}
	}

	selectors[" > .uagb-columns__overlay"]["border-radius"] = borderRadius + "px"

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += `#uagb-columns-${ props.clientId }`

		styling_css += i + " { "

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	return styling_css
}

export default styling
