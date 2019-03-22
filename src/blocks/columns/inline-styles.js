/**
 * Returns Dynamic Generated CSS
 */

import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function inlineStyles( props, isEditor ) {

	const {
		leftPadding,
		rightPadding,
		topPadding,
		bottomPadding,
		topMargin,
		bottomMargin,
		backgroundPosition,
		backgroundSize,
		backgroundAttachment,
		backgroundImage,
		backgroundColor,
		backgroundOpacity,
		backgroundRepeat,
		backgroundType,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
	} = props.attributes

	var style = {
		"padding-top": generateCSSUnit( topPadding, "px" ),
		"padding-bottom": generateCSSUnit( bottomPadding, "px" ),
		"padding-left": generateCSSUnit( leftPadding, "px" ),
		"padding-right": generateCSSUnit( rightPadding, "px" ),
		"margin-top": generateCSSUnit( topMargin, "px" ),
		"margin-bottom": generateCSSUnit( bottomMargin, "px" ),
		"border-radius": generateCSSUnit( borderRadius, "px" ),
	}

	if ( borderStyle != "none" ) {
		style["border-style"] = borderStyle
		style["border-width"] = generateCSSUnit( borderWidth, "px" )
		style["border-color"] =  borderColor
	}

	var position = backgroundPosition.replace( "-", " " )

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
