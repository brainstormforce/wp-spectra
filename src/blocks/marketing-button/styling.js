/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function styling( props ) {

	const {
		titleSpace,
		//Icon
		iconPosition,
		iconSpace,
		//Colors
		titleColor,
		titleHoverColor,
		prefixColor,
		prefixHoverColor,
		iconColor,
		iconHoverColor,
		//Border
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		//Background
		vPadding,
		hPadding,
		backgroundType,
		backgroundColor,
		backgroundHoverColor,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		backgroundOpacity,
		backgroundHoverOpacity,
		//Typography
		titleFontFamily,
		titleFontWeight,
		titleFontSubset,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		prefixFontFamily,
		prefixFontWeight,
		prefixFontSubset,
		prefixFontSize,
		prefixFontSizeType,
		prefixFontSizeTablet,
		prefixFontSizeMobile,
		prefixLineHeightType,
		prefixLineHeight,
		prefixLineHeightTablet,
		prefixLineHeightMobile,
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	let icon_color = ( "" == iconColor ) ? titleColor : iconColor
	let icon_hover_color = ( "" == iconHoverColor ) ? titleHoverColor : iconHoverColor

	selectors = {
		" .uagb-marketing-btn__title-wrap" : {
			"margin-bottom" : titleSpace + "px"
		},
		" .editor-rich-text .uagb-marketing-btn__title" : {
			"font-size" : titleFontSize + titleFontSizeType,
			"line-height" : titleLineHeight + titleLineHeightType,
			"font-family": titleFontFamily,
			"font-weight": titleFontWeight,
			"color": titleColor,
		},
		" .uagb-marketing-btn__icon-wrap svg" : {
			"fill" : icon_color
		},
		" .editor-rich-text .uagb-marketing-btn__prefix" : {
			"font-size" : prefixFontSize + prefixFontSizeType,
			"line-height" : prefixLineHeight + prefixLineHeightType,
			"font-family": prefixFontFamily,
			"font-weight": prefixFontWeight,
			"color": prefixColor,
		},
		" .uagb-marketing-btn__link:hover .editor-rich-text .uagb-marketing-btn__title" : {
			"color": titleHoverColor,
		},
		" .uagb-marketing-btn__link:hover .editor-rich-text .uagb-marketing-btn__prefix" : {
			"color": prefixHoverColor,
		},
		" .uagb-marketing-btn__link:hover .uagb-marketing-btn__icon-wrap svg" : {
			"fill" : icon_hover_color
		},
		" .uagb-marketing-btn__link" : {
			"padding-left" : hPadding + "px",
			"padding-right" : hPadding + "px",
			"padding-top" : vPadding + "px",
			"padding-bottom" : vPadding + "px",
			"border-style": borderStyle,
			"border-width": borderWidth + "px",
			"border-color": borderColor,
			"border-radius": borderRadius + "px",
		},
		" a.uagb-marketing-btn__link:before" : {
			"border-radius": borderRadius + "px",
		},
	}

	if ( "transparent" == backgroundType ) {
		selectors[" a.uagb-marketing-btn__link:before"]["background"] = "transparent"
	} else if ( "color" == backgroundType ) {
		selectors[" a.uagb-marketing-btn__link:before"]["background"] = backgroundColor
		selectors[" a.uagb-marketing-btn__link:before"]["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? ( backgroundOpacity )/100 : ""

		// Hover Background
		selectors[" a.uagb-marketing-btn__link:hover:before"] = {
			"background" : backgroundHoverColor,
			"opacity" : ( typeof backgroundHoverOpacity != "undefined" ) ? ( backgroundHoverOpacity )/100 : ""
		}

	} else if ( "gradient" == backgroundType ) {
		selectors[" a.uagb-marketing-btn__link:before"]["background-color"] = "transparent"
		selectors[" a.uagb-marketing-btn__link:before"]["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""

		if ( "linear" === gradientType ) {

			selectors[" a.uagb-marketing-btn__link:before"]["background-image"] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		} else {

			selectors[" a.uagb-marketing-btn__link:before"]["background-image"] = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		}
	}

	if ( "after" == iconPosition ) {
		selectors[" .uagb-marketing-btn__icon-wrap"] = {
			"margin-left" : iconSpace + "px",
		}
	} else {
		selectors[" .uagb-marketing-btn__icon-wrap"] = {
			"margin-right" : iconSpace + "px",
		}
	}

	tablet_selectors[" .editor-rich-text .uagb-marketing-btn__title"] = {
		"font-size": titleFontSizeTablet + titleFontSizeType,
		"line-height": titleLineHeightTablet + titleLineHeightType,
	}
	tablet_selectors[" .editor-rich-text .uagb-marketing-btn__prefix"] = {
		"font-size": prefixFontSizeTablet + prefixFontSizeType,
		"line-height": prefixLineHeightTablet + prefixLineHeightType,
	}

	mobile_selectors[" .editor-rich-text .uagb-marketing-btn__title"] = {
		"font-size": titleFontSizeMobile + titleFontSizeType,
		"line-height": titleLineHeightMobile + titleLineHeightType,
	}
	mobile_selectors[" .editor-rich-text .uagb-marketing-btn__prefix"] = {
		"font-size": prefixFontSizeMobile + prefixFontSizeType,
		"line-height": prefixLineHeightMobile + prefixLineHeightType,
	}

	var id = `#uagb-marketing-btn-${ props.clientId }`

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
