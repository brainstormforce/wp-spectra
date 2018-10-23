/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

function styling( props ) {

	const {
		tag,
		titleColor,
		prefixColor,
		descColor,
		titleFontSize,
		prefixFontSize,
		descFontSize,
		imgStyle,
		imgAlign,
		imgSize,
		imgWidth,
		imgPosition,
		titleSpace,
		descSpace,
		prefixSpace,
		imgLeftMargin,
		imgRightMargin,
		imgTopMargin,
		imgBottomMargin,
	} = props.attributes

	var selectors = {
		" .editor-rich-text p.uagb-team__desc.editor-rich-text__tinymce": {
			"font-size": descFontSize + "px",
			"color": descColor,
			"margin-bottom": descSpace + "px",
		},
		" .uagb-team__prefix": {
			"font-size": prefixFontSize + "px",
			"color": prefixColor,
		},
		" .uagb-team__desc-wrap": {
			"margin-top": prefixSpace + "px",
		},
		" .uagb-team__imag-wrap": {
			"margin-top": imgTopMargin + "px",
			"margin-bottom": imgBottomMargin + "px",
			"margin-left": imgLeftMargin + "px",
			"margin-right": imgRightMargin + "px",
			"width": imgWidth + "px"
		}
	}

	selectors[" .editor-rich-text " + tag + ".uagb-team__title"] = {
		"font-size": titleFontSize + "px",
		"color": titleColor,
		"margin-bottom": titleSpace + "px",
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += `#uagb-team-${ props.clientId }`

		styling_css += i + " { "

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	return styling_css
}

export default styling
