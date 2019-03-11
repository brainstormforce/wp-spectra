/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function styling( props ) {

	const {
		counter,
		//Color
		backgroundColor,
		linkColor,
		linkHoverColor,
		//Padding,
		vPadding,
		hPadding,
		//Border
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		//Typography
		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontSubset,
		fontSize,
		fontSizeType,
		fontSizeTablet,
		fontSizeMobile,
		lineHeightType,
		lineHeight,
		lineHeightTablet,
		lineHeightMobile,
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	selectors = {
		" .uagb-toc__list-wrap ul li a" : {
			"font-size" : fontSize + fontSizeType,
			"line-height" : lineHeight + lineHeightType,
			"font-family": fontFamily,
			"font-weight": fontWeight,
			"color": linkColor,
		},
		" .uagb-toc__list-wrap ul li a:hover" : {
			"color": linkHoverColor,
		},
		" .uagb-toc__wrap" : {
			"border-style": borderStyle,
			"border-width": borderWidth + "px",
			"border-color": borderColor,
			"border-radius": borderRadius + "px",
			"padding-left": hPadding + "px",
			"padding-right": hPadding + "px",
			"padding-top": vPadding + "px",
			"padding-bottom": vPadding + "px",
			"background": backgroundColor
		},
	}

	tablet_selectors = {
		" .uagb-toc__list-wrap ul li a" : {
			"font-size": fontSizeTablet + fontSizeType,
			"line-height": lineHeightTablet + lineHeightType,
		}
	}

	mobile_selectors = {
		" .uagb-toc__list-wrap ul li a" : {
			"font-size": fontSizeMobile + fontSizeType,
			"line-height": lineHeightMobile + lineHeightType,
		}
	}

	var id = `#uagb-toc-${ props.clientId }`

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
