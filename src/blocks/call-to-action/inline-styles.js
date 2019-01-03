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
		contentWidth,
		ctaType
	} = props.attributes

	if( props.clientId ){
		var clientId = "uagb-cta-block-"+props.clientId
	}else{
		var clientId = "uagb-cta-block-"+block_id
	}

	var selectors = {}

	selectors[".uagb-cta__content-wrap"] = {
		"text-align" : textAlign,
	}		
	

	if( textAlign === "left" && ctaPosition === "right" ){		
		selectors[".uagb-cta__left-right-wrap .uagb-cta__content"] = {
			"margin-left" : ctaLeftSpace+"px",
			"margin-right" : "0px",
		}		
	}

	if( textAlign === "right" && ctaPosition === "right" ){		
		selectors[".uagb-cta__left-right-wrap .uagb-cta__content"] = {
			"margin-right" : ctaRightSpace+"px",	
			"margin-left" : "0px",	
		}		
	}

	if( ctaPosition === "right" && ( ctaType === "text" || ctaType === "button" ) ){		
		selectors[".uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content"] = {
			"width" : contentWidth+"%",	
		}	
		selectors[".uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper"] = {
			"width" : ( 100 - contentWidth )+"%",	
		}
	}

	// CTA style

	selectors[".uagb-cta__button-wrapper a.uagb-cta-typeof-text"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaBtnLinkColor,
	}
	selectors[".uagb-cta__button-wrapper:hover a.uagb-cta-typeof-text"] = {
		"color": ctaLinkHoverColor,
	}

	selectors[".uagb-cta__button-wrapper a.uagb-cta-typeof-button"] = {
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

	selectors[".uagb-cta__button-wrapper:hover a.uagb-cta-typeof-button"] = {
		"color": ctaLinkHoverColor,
		"background-color": ctaBgHoverColor,
		"border-color": ctaBorderhoverColor,
	}

	// Title Style
	selectors[".editor-rich-text .uagb-cta__title"] = {
		"font-size" : titleFontSize+"px",
		"color": titleColor,
		"margin-bottom": titleSpace+"px",
	}

	// Description Style
	selectors[".editor-rich-text .uagb-cta__desc"] = {
		"font-size" : descFontSize+"px",
		"color": descColor,
		"margin-bottom": descSpace+"px",
	}
	
	selectors[".uagb-cta__align-button-after"] = {
		"margin-left" : ctaIconSpace+"px",
	}

	selectors[".uagb-cta__align-button-before"] = {
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
