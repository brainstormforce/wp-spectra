/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
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
		borderColor
	} = props.attributes

	var style = {
		"padding-top": topPadding + "px",
		"padding-bottom": bottomPadding + "px",
		"padding-left": leftPadding + "px",
		"padding-right": rightPadding + "px",
		"border-radius": borderRadius + "px"
	}

	if ( "right" == align ) {
		style["margin-left"] = "auto"
		style["margin-top"] = topMargin + "px"
		style["margin-bottom"] =  bottomMargin + "px"
		style["margin-right"] =  rightMargin + "px"
	} else if ( "left" == align ) {
		style["margin-right"] = "auto"
		style["margin-top"] = topMargin + "px"
		style["margin-bottom"] =  bottomMargin + "px"
		style["margin-left"] =  leftMargin + "px"
	} else if ( "center" == align ) {
		style["margin-right"] = "auto"
		style["margin-left"] = "auto"
		style["margin-top"] = topMargin + "px"
		style["margin-bottom"] =  bottomMargin + "px"
	} else {
		style["margin-top"] = topMargin + "px"
		style["margin-bottom"] =  bottomMargin + "px"
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

	} else if ( "gradient" === backgroundType ) {
		style["background-color"] = "transparent"
		style["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""

		if ( "linear" === gradientType ) {

			style["background-image"] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		} else {

			style["background-image"] = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		}
	}

	return style
}

export default inlineStyles
