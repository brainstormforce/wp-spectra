/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function styling( props ) {

	const {
		customWidth,
		width,
		widthType,
		//Color
		backgroundColor,
		linkColor,
		linkHoverColor,
		scrollToTopColor,
		scrollToTopBgColor,
		headingColor,
		//Padding,
		vPadding,
		hPadding,
		headingBottom,
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

		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
		headingFontSubset,
		headingFontSize,
		headingFontSizeType,
		headingFontSizeTablet,
		headingFontSizeMobile,
		headingLineHeightType,
		headingLineHeight,
		headingLineHeightTablet,
		headingLineHeightMobile,
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
		" .uagb-toc__title" : {
			"font-size" : headingFontSize + headingFontSizeType,
			"line-height" : headingLineHeight + headingLineHeightType,
			"font-family": headingFontFamily,
			"font-weight": headingFontWeight,
			"color": headingColor,
			"margin-bottom" : headingBottom + "px"
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

	if ( customWidth ) {
		selectors[" .uagb-toc__wrap"]["width"] = width + widthType
	}

	tablet_selectors = {
		" .uagb-toc__list-wrap ul li a" : {
			"font-size": fontSizeTablet + fontSizeType,
			"line-height": lineHeightTablet + lineHeightType,
		},
		" .uagb-toc__title" : {
			"font-size" : headingFontSizeTablet + headingFontSizeType,
			"line-height" : headingLineHeightTablet + headingLineHeightType,
		},
	}

	mobile_selectors = {
		" .uagb-toc__list-wrap ul li a" : {
			"font-size": fontSizeMobile + fontSizeType,
			"line-height": lineHeightMobile + lineHeightType,
		},
		" .uagb-toc__title" : {
			"font-size" : headingFontSizeMobile + headingFontSizeType,
			"line-height" : headingLineHeightMobile + headingLineHeightType,
		},
	}

	var id = `#uagb-toc-${ props.clientId }`

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	if ( "" != scrollToTopColor ) {
		styling_css += ".uagb-toc__scroll-top { color: " + scrollToTopColor + "; }"
	}

	if ( "" != scrollToTopBgColor ) {
		styling_css += ".uagb-toc__scroll-top { background: " + scrollToTopBgColor + "; }"
	}

	return styling_css
}

export default styling
