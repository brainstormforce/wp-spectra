/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function CtaStyle( props ) {
	const {
		textAlign,
		titleColor,
		descColor,
		titleFontSize,
		descFontSize,
		titleSpace,
		descSpace,
		ctaPosition,
		block_id,
		ctaLinkColor,
		ctaFontSize,
		ctaBtnSize,
		ctaBtnLinkColor,
		ctaBgColor,
		ctaBtnVertPadding,
		ctaBtnHrPadding,
		ctaBorderStyle,
		ctaBorderColor,
		ctaBorderWidth,
		ctaBorderRadius,
		ctaLinkHoverColor,
		ctaBgHoverColor,
		ctaBorderhoverColor,
		ctaIconSpace,
		ctaLeftSpace,
		ctaRightSpace,
	} = props.attributes

	if( props.clientId ){
		var clientId = "uagb-cta-block-"+props.clientId
	}else{
		var clientId = "uagb-cta-block-"+block_id
	}

	var selectors = {}

	selectors[".uagb-cta-block__content-wrap"] = {
		"text-align" : textAlign,
	}		
	

	if( ctaPosition == "left" ||  ctaPosition == "right" ){		
		selectors[".uagb-cta-left-right-wrap .uagb-cta-content"] = {
			"margin-left" : ctaLeftSpace+"px",
			"margin-right" : ctaRightSpace+"px",			
		}		
	}

	// CTA style
	selectors[".uagb-cta-block-link a"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaLinkColor,
	}

	selectors[".uagb-cta-block-link a:hover"] = {
		"color": ctaLinkHoverColor,
	}

	selectors[".uagb-cta-block-link span"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaLinkColor,
	}
	selectors[".uagb-cta-block-link:hover span"] = {
		"color": ctaLinkHoverColor,
	}

	selectors[".uagb-cta-button-wrapper .uagb-cta-block-link span"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaBtnLinkColor,
	}
	selectors[".uagb-cta-button-wrapper:hover .uagb-cta-block-link span"] = {
		"color": ctaLinkHoverColor,
	}

	selectors[".uagb-cta-button-wrapper .uagb-cta-block-link"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaBtnLinkColor,
		"background-color": ctaBgColor,
		"border-style": ctaBorderStyle,
		"border-color": ctaBorderColor,
		"border-radius": ctaBorderRadius + "px",
		"border-width": ctaBorderWidth + "px",
		"padding-top": ctaBtnVertPadding + "px",
		"padding-bottom": ctaBtnVertPadding + "px",
		"padding-left": ctaBtnHrPadding + "px",
		"padding-right": ctaBtnHrPadding + "px",
	}

	selectors[".uagb-cta-button-wrapper:hover .uagb-cta-block-link"] = {
		"color": ctaLinkHoverColor,
		"background-color": ctaBgHoverColor,
		"border-color": ctaBorderhoverColor,
	}

	// Title Style
	selectors[".editor-rich-text .uagb-cta-title"] = {
		"font-size" : titleFontSize+"px",
		"color": titleColor,
		"margin-bottom": titleSpace+"px",
	}

	// Description Style
	selectors[".editor-rich-text .uagb-cta-desc"] = {
		"font-size" : descFontSize+"px",
		"color": descColor,
		"margin-bottom": descSpace+"px",
	}
	
	selectors[".uagb-cta-align-icon-after"] = {
		"margin-left" : ctaIconSpace+"px",
	}

	selectors[".uagb-cta-align-icon-before"] = {
		"margin-right" : ctaIconSpace+"px",
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += " .block-editor-page #wpwrap #"+clientId+" "+i + " { "


		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	return styling_css

}

export default CtaStyle
