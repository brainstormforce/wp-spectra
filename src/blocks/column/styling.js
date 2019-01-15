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
		rightMargin,
		backgroundType,
		backgroundImage,
		backgroundPosition,
		backgroundAttachment,
		backgroundRepeat,
		backgroundSize
	} = props.attributes

	var position = backgroundPosition.replace( "-", " " )

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

	var p_style = {}

	if ( "image" === backgroundType ) {

		p_style["background-image"] = ( backgroundImage ) ? `url(${ backgroundImage.url })` : null
		p_style["background-position"] = position
		p_style["background-attachment"] = backgroundAttachment
		p_style["background-repeat"] = backgroundRepeat
		p_style["background-size"] = backgroundSize

	}

	var selectors = {
		":before" : inlineStyles( props ),
		"" : p_style,
		" .uagb-column__inner-wrap" : style
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += `#wpwrap .edit-post-visual-editor #block-${ props.clientId }`

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
