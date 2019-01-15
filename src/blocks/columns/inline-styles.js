/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
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
		borderColor
	} = props.attributes

	var style = {
		"padding-top": topPadding + "px",
		"padding-bottom": bottomPadding + "px",
		"padding-left": leftPadding + "px",
		"padding-right": rightPadding + "px",
		"margin-top": topMargin + "px",
		"margin-bottom": bottomMargin + "px",
		"border-radius": borderRadius + "px",
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
