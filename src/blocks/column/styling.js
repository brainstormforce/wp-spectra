/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

import inlineStyles from "./inline-styles"

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
		rightMargin
	} = props.attributes

	var style = {
		"padding-top": topPadding + "px",
		"padding-bottom": bottomPadding + "px",
		"padding-left": leftPadding + "px",
		"padding-right": rightPadding + "px",
		"margin-top": topMargin + "px",
		"margin-bottom": bottomMargin + "px",
		"margin-left": leftMargin + "px",
		"margin-right": rightMargin + "px",
	}

	var selectors = {
		":before" : inlineStyles( props ),
		" .uagb-column__inner-wrap" : style
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += `#block-${ props.clientId }`

		styling_css += i + " { "

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	if ( colWidth != "" && colWidth != 0 ) {
		styling_css += `#wpwrap .edit-post-visual-editor #block-${ props.clientId }.editor-block-list__block { width: ${colWidth}%; }`
	}

	return styling_css
}

export default styling
