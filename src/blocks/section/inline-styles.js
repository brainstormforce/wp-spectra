/**
 * Returns Dynamic Generated CSS
 */

function inlineStyles( props, isEditor ) {

	const {
		align,
		contentWidth,
		leftPadding,
		rightPadding,
		topPadding,
		bottomPadding,
		leftMargin,
		rightMargin,
		topMargin,
		bottomMargin,
		width,
		backgroundPosition,
		backgroundSize,
		backgroundAttachment,
		backgroundImage,
		backgroundColor,
		backgroundOpacity,
		backgroundRepeat,
		backgroundType,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		desktopMarginType,
		desktopPaddingType,
	} = props.attributes

	var style = {
		"padding-top": topPadding + desktopPaddingType,
		"padding-bottom": bottomPadding + desktopPaddingType,
		"padding-left": leftPadding + desktopPaddingType,
		"padding-right": rightPadding + desktopPaddingType,
		"border-radius": borderRadius + "px"
	}

	if ( "right" == align ) {
		style["margin-left"] = "auto"
		style["margin-top"] = topMargin + desktopMarginType
		style["margin-bottom"] =  bottomMargin + desktopMarginType
		style["margin-right"] =  rightMargin + desktopMarginType
	} else if ( "left" == align ) {
		style["margin-right"] = "auto"
		style["margin-top"] = topMargin + desktopMarginType
		style["margin-bottom"] =  bottomMargin + desktopMarginType
		style["margin-left"] =  leftMargin + desktopMarginType
	} else if ( "center" == align ) {
		style["margin-right"] = "auto"
		style["margin-left"] = "auto"
		style["margin-top"] = topMargin + desktopMarginType
		style["margin-bottom"] =  bottomMargin + desktopMarginType
	} else {
		style["margin-top"] = topMargin + desktopMarginType
		style["margin-bottom"] =  bottomMargin + desktopMarginType
	}

	if ( borderStyle != "none" ) {
		style["border-style"] = borderStyle
		style["border-width"] = borderWidth + "px"
		style["border-color"] =  borderColor
	}

	var position = backgroundPosition.replace( "-", " " )

	var section_width = "100%"

	if ( "boxed" == contentWidth ) {
		if ( "" != width ) {
			section_width = width + "px"
		}
	}

	style["max-width"] = section_width


	if ( "image" === backgroundType ) {

		style["background-image"] = ( backgroundImage ) ? `url(${ backgroundImage.url })` : null
		style["background-position"] = position
		style["background-attachment"] = backgroundAttachment
		style["background-repeat"] = backgroundRepeat
		style["background-size"] = backgroundSize

	}

	return style
}

export default inlineStyles
