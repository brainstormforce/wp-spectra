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
		className,
		innerWidth,
		contentWidth,
		borderRadius
	} = props.attributes

	var inner_width = "100%"

	if( typeof contentWidth != "undefined" ) {
		if ( "boxed" != contentWidth ) {
			if ( typeof innerWidth != "undefined" ) {
				inner_width = innerWidth + "px"
			}
		}
	}

	var selectors = {
		".uagb-section__wrap" : inlineStyles( props ),
		" .uagb-section__video-wrap": {
			"opacity" : ( typeof backgroundVideoOpacity != "undefined" ) ? ( 100 - backgroundVideoOpacity )/100 : 0.5
		},
		" .uagb-section__inner-wrap": {
			"max-width" : inner_width
		}
	}

	selectors[" > .uagb-section__overlay"] = {}

	if ( "video" == backgroundType ) {
		selectors[" > .uagb-section__overlay"] = {
			"opacity" : 1,
			"background-color": backgroundVideoColor
		}
	} else if( "image" == backgroundType ) {
		selectors[" > .uagb-section__overlay"] = {
			"opacity" : ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : 0,
			"background-color": backgroundImageColor
		}
	} else if( "color" == backgroundType ) {
		selectors[" > .uagb-section__overlay"] = {
			"opacity" : ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : "",
			"background-color" : backgroundColor
		}
	}

	selectors[" > .uagb-section__overlay"]["border-radius"] = borderRadius + "px"

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += `#uagb-section-${ props.clientId }`

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
