/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

function styling( props ) {

	const {
		tag,
		align,
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
		socialColor,
		socialHoverColor,
		socialSpace,
		socialFontSize
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
		" .uagb-team__social-icon a": {
			"color": socialColor,
			"font-size": socialFontSize + "px",
			"width": socialFontSize + "px",
			"height": socialFontSize + "px",
			"line-height": socialFontSize + "px",
		},
		" .uagb-team__social-icon svg": {
			"fill": socialColor,
			"width": socialFontSize + "px",
			"height": socialFontSize + "px",
		},
		" .uagb-team__social-icon:hover a": {
			"color": socialHoverColor,
		},
		" .uagb-team__social-icon:hover svg": {
			"fill": socialHoverColor
		},
		".uagb-team__image-position-left .uagb-team__social-icon" : {
			"margin-right": socialSpace + "px",
			"margin-left": "0",
		},
		".uagb-team__image-position-right .uagb-team__social-icon" : {
			"margin-left": socialSpace + "px",
			"margin-right": "0",
		},
		".uagb-team__image-position-above.uagb-team__align-center .uagb-team__social-icon" : {
			"margin-right": ( socialSpace / 2 ) + "px",
			"margin-left": ( socialSpace / 2 ) + "px",
		},
		".uagb-team__image-position-above.uagb-team__align-left .uagb-team__social-icon" : {
			"margin-right": socialSpace + "px",
			"margin-left": "0",
		},
		".uagb-team__image-position-above.uagb-team__align-right .uagb-team__social-icon" : {
			"margin-left": socialSpace + "px",
			"margin-right": "0",
		},
		" .uagb-team__image-wrap" : {
			"margin-top": imgTopMargin + "px",
			"margin-bottom": imgBottomMargin + "px",
			"margin-left": imgLeftMargin + "px",
			"margin-right": imgRightMargin + "px",
			"width": imgWidth + "px"
		}
	}

	if ( "above" == imgPosition ) {
		if ( "center" == align ) {
			selectors[" .uagb-team__image-wrap"]["margin-left"] = "auto"
			selectors[" .uagb-team__image-wrap"]["margin-right"] = "auto"
		} else if ( "left" == align ) {
			selectors[" .uagb-team__image-wrap"]["margin-right"] = "auto"
		} else if ( "right" == align ) {
			selectors[" .uagb-team__image-wrap"]["margin-left"] = "auto"
		}
	}

	if ( "above" != imgPosition ) {
		if ( "middle" == imgAlign ) {
			selectors[" .uagb-team__image-wrap"]["align-self"] = "center"
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
