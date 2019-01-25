/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

function styling( props, id ) {

	const {
		newTab,
		align,
		rowGap,
		columnGap,
		bgColor,
		contentPadding,
		contentPaddingMobile,
		titleColor,
		titleTag,
		titleFontSize,
		metaFontSize,
		excerptFontSize,
		ctaFontSize,
		metaColor,
		excerptColor,
		ctaColor,
		ctaBgColor,
		ctaHColor,
		ctaBgHColor,
		titleBottomSpace,
		metaBottomSpace,
		excerptBottomSpace,
		equalHeight,
		excerptLength,
		overlayOpacity,
		bgOverlayColor,
		borderWidth,
		borderStyle,
		borderColor,
		borderHColor,
		borderRadius,
		btnVPadding,
		btnHPadding,
		linkBox,
		arrowColor,
		arrowSize
	} = props.attributes

	var mobile_selectors = {}

	var selectors = {
		" .uagb-post__items": {
			"margin-right" :  ( -rowGap/2 ) + "px",
			"margin-left" :  ( -rowGap/2 ) + "px",
		},
		" .uagb-post__items article": {
			"padding-right" : ( rowGap/2 ) + "px",
			"padding-left" : ( rowGap/2 ) + "px",
			"margin-bottom" : ( columnGap ) + "px"
		},
		" .uagb-post__inner-wrap": {
			"background" : bgColor,
		},
		" .uagb-post__text": {
			"padding" : ( contentPadding ) + "px",
			"text-align" : align
		},
		" .uagb-post__text .uagb-post__title": {
			"color": titleColor,
			"font-size": titleFontSize  + "px",
			"margin-bottom": titleBottomSpace  + "px"
		},
		" .uagb-post__text .uagb-post__title a": {
			"color": titleColor,
			"font-size": titleFontSize  + "px"
		},
		" .uagb-post__text .uagb-post-grid-byline": {
			"color": metaColor,
			"font-size": metaFontSize  + "px",
			"margin-bottom": metaBottomSpace  + "px"
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author": {
			"color": metaColor,
			"font-size": metaFontSize  + "px",
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author a": {
			"color": metaColor,
			"font-size": metaFontSize  + "px",
		},
		" .uagb-post__text .uagb-post__excerpt": {
			"color": excerptColor,
			"font-size": excerptFontSize  + "px",
			"margin-bottom": excerptBottomSpace  + "px"
		},
		" .uagb-post__text .uagb-post__cta": {
			"color": ctaColor,
			"font-size": ctaFontSize  + "px",
			"background": ctaBgColor,
			"border-width": borderWidth  + "px",
			"border-radius": borderRadius  + "px",
			"border-color": borderColor,
			"border-style": borderStyle,
		},
		" .uagb-post__text .uagb-post__cta:hover": {
			"border-color": borderHColor,
		},
		" .uagb-post__text .uagb-post__cta a": {
			"color": ctaColor,
			"font-size": ctaFontSize  + "px",
			"padding": btnVPadding + "px " + btnHPadding + "px"
		},
		" .uagb-post__text .uagb-post__cta:hover": {
			"color": ctaHColor,
			"background": ctaBgHColor
		},
		" .uagb-post__text .uagb-post__cta:hover a": {
			"color": ctaHColor
		},
		" .uagb-post__image:before" : {
			"background-color" : bgOverlayColor,
			"opacity" : ( overlayOpacity / 100 )
		}
	}

	if ( linkBox ) {
		selectors[" .uagb-post__inner-wrap"]["cursor"] = "pointer"
	}

	selectors[" .slick-arrow svg"] = {
		"fill" : arrowColor,
		"height":arrowSize + "px",              
		"width":arrowSize + "px",              
	} 	

	mobile_selectors = {
		" .uagb-post__text": {
			"padding" : ( contentPaddingMobile ) + "px",
		},
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += `#${id}-${ props.clientId }`

		styling_css += i + " { "

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += "@media only screen and (max-width: 767px) {"

	for( var i in mobile_selectors ) {

		styling_css += `#${id}-${ props.clientId }`

		styling_css += i + " { "

		var sel = mobile_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += " }"

	return styling_css
}

export default styling
