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
		iconFontSize,
		iconFontSizeType,
		iconFontSizeMobile,
		iconFontSizeTablet,
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
		borderHoverColor,
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
		" .uagb-marketing-btn__icon-wrap" : {
			"width" : iconFontSize + iconFontSizeType,
			"height" : iconFontSize + iconFontSizeType
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
		" .uagb-marketing-btn__link:hover" : {
			"border-color": borderHoverColor
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

	let margin_type = ( "after" == iconPosition ) ? "margin-left" : "margin-right"

	selectors[" .uagb-marketing-btn__icon-wrap"][margin_type] = iconSpace + "px"

	tablet_selectors = {
		" .editor-rich-text .uagb-marketing-btn__title" : {
			"font-size": titleFontSizeTablet + titleFontSizeType,
			"line-height": titleLineHeightTablet + titleLineHeightType,
		},
		" .editor-rich-text .uagb-marketing-btn__prefix" : {
			"font-size": prefixFontSizeTablet + prefixFontSizeType,
			"line-height": prefixLineHeightTablet + prefixLineHeightType,
		},
		" .uagb-marketing-btn__icon-wrap" : {
			"width" : iconFontSizeTablet + iconFontSizeType,
			"height" : iconFontSizeTablet + iconFontSizeType
		}
	}

	mobile_selectors = {
		" .editor-rich-text .uagb-marketing-btn__title" : {
			"font-size": titleFontSizeMobile + titleFontSizeType,
			"line-height": titleLineHeightMobile + titleLineHeightType,
		},
		" .editor-rich-text .uagb-marketing-btn__prefix" : {
			"font-size": prefixFontSizeMobile + prefixFontSizeType,
			"line-height": prefixLineHeightMobile + prefixLineHeightType,
		},
		" .uagb-marketing-btn__icon-wrap" : {
			"width" : iconFontSizeMobile + iconFontSizeType,
			"height" : iconFontSizeMobile + iconFontSizeType
		}
	}

	var id = `#uagb-marketing-btn-${ props.clientId }`

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
