/**
 * Returns Dynamic Generated CSS
 */

import inlineStyles from "./inline-styles"
import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		colWidth,
		colWidthTablet,
		colWidthMobile,

		topPadding,
		bottomPadding,
		leftPadding,
		rightPadding,
		topMargin,
		bottomMargin,
		leftMargin,
		rightMargin,

		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,

		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,

		backgroundType,
		backgroundImage,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
	} = props.attributes

	var position = backgroundPosition.replace( "-", " " )
	var tablet_selectors = {}
	var mobile_selectors = {}

	var style = {
		"padding-top": generateCSSUnit( topPadding, "px" ),
		"padding-bottom": generateCSSUnit( bottomPadding, "px" ),
		"padding-left": generateCSSUnit( leftPadding, "px" ),
		"padding-right": generateCSSUnit( rightPadding, "px" ),
		"margin-top": generateCSSUnit( topMargin, "px" ),
		"margin-bottom": generateCSSUnit( bottomMargin, "px" ),
		"margin-left": generateCSSUnit( leftMargin, "px" ),
		"margin-right": generateCSSUnit( rightMargin, "px" ),
		"border-radius": generateCSSUnit( borderRadius, "px" ),
	}

	if ( borderStyle != "none" ) {
		style["border-style"] = borderStyle
		style["border-width"] = generateCSSUnit( borderWidth, "px" )
		style["border-color"] =  borderColor
	}

	if ( "image" === backgroundType ) {

		style["background-image"] = ( backgroundImage ) ? `url(${ backgroundImage.url })` : null
		style["background-position"] = position
		style["background-attachment"] = backgroundAttachment
		style["background-repeat"] = backgroundRepeat
		style["background-size"] = backgroundSize

	}

	var selectors = {
		":before" : inlineStyles( props ),
		"" : style
	}

	tablet_selectors = {
		"" : {
			"padding-top": generateCSSUnit( topPaddingTablet, "px" ),
			"padding-bottom": generateCSSUnit( bottomPaddingTablet, "px" ),
			"padding-left": generateCSSUnit( leftPaddingTablet, "px" ),
			"padding-right": generateCSSUnit( rightPaddingTablet, "px" ),
			"margin-top": generateCSSUnit( topMarginTablet, "px" ),
			"margin-bottom": generateCSSUnit( bottomMarginTablet, "px" ),
			"margin-left": generateCSSUnit( leftMarginTablet, "px" ),
			"margin-right": generateCSSUnit( rightMarginTablet, "px" ),
		}
	}

	mobile_selectors = {
		"" : {
			"padding-top": generateCSSUnit( topPaddingMobile, "px" ),
			"padding-bottom": generateCSSUnit( bottomPaddingMobile, "px" ),
			"padding-left": generateCSSUnit( leftPaddingMobile, "px" ),
			"padding-right": generateCSSUnit( rightPaddingMobile, "px" ),
			"margin-top": generateCSSUnit( topMarginMobile, "px" ),
			"margin-bottom": generateCSSUnit( bottomMarginMobile, "px" ),
			"margin-left": generateCSSUnit( leftMarginMobile, "px" ),
			"margin-right": generateCSSUnit( rightMarginMobile, "px" ),
		}
	}

	if ( colWidth != "" && colWidth != 0 ) {
		selectors[".editor-block-list__block"] = { "width" : colWidth + "%" }
	}

	if ( colWidthTablet != "" && colWidthTablet != 0 ) {
		tablet_selectors[".editor-block-list__block"] = { "width" : colWidthTablet + "%" }
	}

	if ( colWidthMobile != "" && colWidthMobile != 0 ) {
		mobile_selectors[".editor-block-list__block"] = { "width" : colWidthMobile + "%" }
	}

	var styling_css = ""

	var id = `#wpwrap .edit-post-visual-editor #block-${ props.clientId }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
