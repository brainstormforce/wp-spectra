/**
 * Returns Dynamic Generated CSS
 */

import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

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
		"padding-top": generateCSSUnit( topPadding, "px" ),
		"padding-bottom": generateCSSUnit( bottomPadding, "px" ),
		"padding-left": generateCSSUnit( leftPadding, "px" ),
		"padding-right": generateCSSUnit( rightPadding, "px" ),
		"border-radius": generateCSSUnit( borderRadius, "px" )
	}

	if ( "right" == align ) {
		style["margin-left"] = "auto"
		style["margin-top"] = generateCSSUnit( topMargin, "px" )
		style["margin-bottom"] =  generateCSSUnit( bottomMargin, "px" )
		style["margin-right"] =  generateCSSUnit( rightMargin, "px" )
	} else if ( "left" == align ) {
		style["margin-right"] = "auto"
		style["margin-top"] = generateCSSUnit( topMargin, "px" )
		style["margin-bottom"] =  generateCSSUnit( bottomMargin, "px" )
		style["margin-left"] =  generateCSSUnit( leftMargin, "px" )
	} else if ( "center" == align ) {
		style["margin-right"] = "auto"
		style["margin-left"] = "auto"
		style["margin-top"] = generateCSSUnit( topMargin, "px" )
		style["margin-bottom"] =  generateCSSUnit( bottomMargin, "px" )
	} else {
		style["margin-top"] = generateCSSUnit( topMargin, "px" )
		style["margin-bottom"] =  generateCSSUnit( bottomMargin, "px" )
	}

	if ( borderStyle != "none" ) {
		style["border-style"] = borderStyle
		style["border-width"] = generateCSSUnit( borderWidth, "px" )
		style["border-color"] =  borderColor
	}

	var position = backgroundPosition.replace( "-", " " )

	var section_width = "100%"

	if ( "boxed" == contentWidth ) {
		if ( "" != width ) {
			section_width = generateCSSUnit( width, "px" )
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
