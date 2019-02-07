/**
 * Returns Dynamic Generated CSS
 */

import inlineStyles from "./inline-styles"
import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function styling( props ) {

	const {
		colWidth,

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
		"padding-top": topPadding + "px",
		"padding-bottom": bottomPadding + "px",
		"padding-left": leftPadding + "px",
		"padding-right": rightPadding + "px",
		"margin-top": topMargin + "px",
		"margin-bottom": bottomMargin + "px",
		"margin-left": leftMargin + "px",
		"margin-right": rightMargin + "px",
		"border-radius": borderRadius + "px",
	}

	if ( borderStyle != "none" ) {
		style["border-style"] = borderStyle
		style["border-width"] = borderWidth + "px"
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
			"padding-top": topPaddingTablet + "px",
			"padding-bottom": bottomPaddingTablet + "px",
			"padding-left": leftPaddingTablet + "px",
			"padding-right": rightPaddingTablet + "px",
			"margin-top": topMarginTablet + "px",
			"margin-bottom": bottomMarginTablet + "px",
			"margin-left": leftMarginTablet + "px",
			"margin-right": rightMarginTablet + "px",
		}
	}

	mobile_selectors = {
		"" : {
			"padding-top": topPaddingMobile + "px",
			"padding-bottom": bottomPaddingMobile + "px",
			"padding-left": leftPaddingMobile + "px",
			"padding-right": rightPaddingMobile + "px",
			"margin-top": topMarginMobile + "px",
			"margin-bottom": bottomMarginMobile + "px",
			"margin-left": leftMarginMobile + "px",
			"margin-right": rightMarginMobile + "px",
		}
	}

	var styling_css = ""

	var id = `#wpwrap .edit-post-visual-editor #block-${ props.clientId }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	if ( colWidth != "" && colWidth != 0 ) {
		styling_css += `#wpwrap .edit-post-visual-editor #block-${ props.clientId }.editor-block-list__block { width: ${colWidth}%; }`
	}

	return styling_css
}

export default styling
