/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function InfoBoxStyle( props ) {
	const {
		headingAlign,
		headingColor,
		subHeadingColor,
		prefixColor,
		prefixFontSize,
		headFontSize,
		subHeadFontSize,
		separatorWidth,
		separatorHeight,
		headSpace,
		separatorSpace,
		subHeadSpace,
		icon,
		iconColor,
		iconSize,
		iconimgPosition,
		block_id,
		iconHover,
		iconimgBorderRadius,
		seperatorStyle,
		seperatorWidth,
		seperatorColor,
		seperatorThickness,
		seperatorSpace,
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
		prefixSpace,
		iconLeftMargin,
		iconRightMargin,
		iconTopMargin,
		iconBottomMargin,
		imageSize,
		imageWidth,
		ctaLinkHoverColor,
		ctaBgHoverColor,
		ctaBorderhoverColor,
		ctaIconSpace
	} = props.attributes

	if( props.clientId ){
		var clientId = "uagb-infobox-"+props.clientId
	}else{
		var clientId = "uagb-infobox-"+block_id
	}

	var selectors = {}

	// Icon css
	selectors[".uagb-ifb-icon"] = {
		"height" : iconSize+"px",
		"width" : iconSize+"px",
		"line-height" : iconSize+"px",
	}

	selectors[".uagb-ifb-icon > span"] = {
		"font-size" : iconSize+"px",
		"height": iconSize+"px",
		"color": iconColor,
		"fill": iconColor,
		"width": iconSize+"px",
		"line-height": iconSize + "px",
	}

	selectors[".uagb-ifb-icon > svg"] = {
		"fill": iconColor,
	}

	selectors[".uagb-ifb-icon:hover > span"] = {
		"color" : iconHover,
	}

	selectors[".uagb-ifb-icon:hover > svg"] = {
		"fill" : iconHover,
	}

	selectors[".uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap"] = {
		"margin-left" : iconLeftMargin+"px",
		"margin-right" : iconRightMargin+"px",
		"margin-top" : iconTopMargin+"px",
		"margin-bottom" : iconBottomMargin+"px",
	}

	// Image
	selectors[".uagb-ifb-image-content img"] = {
		"width": imageWidth+"px",
		"max-width": imageWidth+"px",
	}

	selectors[".uagb-infobox .uagb-ifb-image-content img"] = {
		"border-radius" : iconimgBorderRadius+"px",
	}


	if( iconimgPosition == "above-title" ||  iconimgPosition == "below-title" ){
		selectors[".uagb-infobox__content-wrap"] = {
			"text-align" : headingAlign,
		}
	}

	// CTA style
	selectors[".uagb-infobox-cta-link a"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaLinkColor,
	}

	selectors[".uagb-infobox-cta-link a:hover"] = {
		"color": ctaLinkHoverColor,
	}

	selectors[".uagb-infobox-cta-link .uagb-ifb-text-icon svg"] = {
		"fill": ctaLinkColor,
	}

	selectors[".uagb-infobox-cta-link a:hover svg"] = {
		"fill": ctaLinkHoverColor,
	}

	selectors[".uagb-infobox-cta-link span"] = {
		"font-size" : ctaFontSize+"px",
		"width" : ctaFontSize+"px",
		"height" : ctaFontSize+"px",
		"color": ctaLinkColor,
	}
	selectors[".uagb-infobox-cta-link:hover span"] = {
		"color": ctaLinkHoverColor,
	}

	selectors[".uagb-infobox-cta-link svg"] = {
		"fill": ctaBtnLinkColor,
	}
	selectors[".uagb-infobox-cta-link:hover svg"] = {
		"fill": ctaLinkHoverColor,
	}

	selectors[".uagb-ifb-button-wrapper .uagb-infobox-cta-link span"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaBtnLinkColor,
	}
	selectors[".uagb-ifb-button-wrapper:hover .uagb-infobox-cta-link span"] = {
		"color": ctaLinkHoverColor,
	}

	selectors[".uagb-ifb-button-wrapper .uagb-infobox-cta-link"] = {
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

	selectors[".uagb-ifb-button-wrapper:hover .uagb-infobox-cta-link"] = {
		"color": ctaLinkHoverColor,
		"background-color": ctaBgHoverColor,
		"border-color": ctaBorderhoverColor,
	}

	// Prefix Style
	selectors[".editor-rich-text .uagb-ifb-title-prefix"] = {
		"font-size" : prefixFontSize+"px",
		"color": prefixColor,
		"margin-bottom": prefixSpace+"px",
	}

	// Title Style
	selectors[".editor-rich-text .uagb-ifb-title"] = {
		"font-size" : headFontSize+"px",
		"color": headingColor,
		"margin-bottom": headSpace+"px",
	}

	// Description Style
	selectors[".editor-rich-text .uagb-ifb-desc"] = {
		"font-size" : subHeadFontSize+"px",
		"color": subHeadingColor,
		"margin-bottom": subHeadSpace+"px",
	}

	// Seperator
	selectors[".uagb-ifb-separator"] = {
		"width" : seperatorWidth+"%",
		"border-top-width" : seperatorThickness+"px",
		"border-top-color": seperatorColor,
		"border-top-style": seperatorStyle,
	}
	selectors[".uagb-ifb-separator-parent"] = {
		"margin-bottom":seperatorSpace+"px"
	}

	selectors[".uagb-ifb-content"] = {
		"padding": ( typeof blockPadding != "undefined" ) ? blockPadding+"px": "inherit"
	}

	selectors[".uagb-ifb-align-icon-after"] = {
		"margin-left" : ctaIconSpace+"px",
	}

	selectors[".uagb-ifb-align-icon-before"] = {
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

export default InfoBoxStyle
