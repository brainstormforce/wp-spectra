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
		excerptLength
	} = props.attributes

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
			"background" : bgColor
		},
		" .uagb-post__text": {
			"padding" : ( contentPadding ) + "px"
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
			"background": ctaBgColor
		},
		" .uagb-post__text .uagb-post__cta a": {
			"color": ctaColor,
			"font-size": ctaFontSize  + "px"
		},
		" .uagb-post__text .uagb-post__cta:hover": {
			"color": ctaHColor,
			"background": ctaBgHColor
		},
		" .uagb-post__text .uagb-post__cta:hover a": {
			"color": ctaHColor
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

	return styling_css
}

export default styling
