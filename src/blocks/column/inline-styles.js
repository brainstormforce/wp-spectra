/**
 * Returns Dynamic Generated CSS
 */

function inlineStyles( props, isEditor ) {

	const {
		backgroundPosition,
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
		backgroundImageColor,
		borderStyle,
		borderRadius,
	} = props.attributes

	var style = {}

	var position = backgroundPosition.replace( "-", " " )

	if ( "image" === backgroundType ) {

		style["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""
		style["background-color"] = backgroundImageColor

	} else if ( "gradient" === backgroundType ) {
		style["background-color"] = "transparent"
		style["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""

		if ( "linear" === gradientType ) {

			style["background-image"] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		} else {

			style["background-image"] = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		}
	} else if ( "color" == backgroundType ) {

		style["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""
		style["background-color"] = backgroundColor
	}

	style["border-radius"] = borderRadius + "px"

	return style
}

export default inlineStyles
