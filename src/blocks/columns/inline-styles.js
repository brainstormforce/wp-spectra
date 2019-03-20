/**
 * Returns Dynamic Generated CSS
 */

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
		desktopMarginType,
		desktopPaddingType,
	} = props.attributes

	var style = {
		"padding-top": topPadding + desktopPaddingType,
		"padding-bottom": bottomPadding + desktopPaddingType,
		"padding-left": leftPadding + desktopPaddingType,
		"padding-right": rightPadding + desktopPaddingType,
		"margin-top": topMargin + desktopMarginType,
		"margin-bottom": bottomMargin + desktopMarginType,
		"border-radius": borderRadius + desktopMarginType,
	}

	if ( borderStyle != "none" ) {
		style["border-style"] = borderStyle
		style["border-width"] = borderWidth + "px"
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
