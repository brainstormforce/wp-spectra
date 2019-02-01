/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

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
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		metaFontSize,
		metaFontSizeType,
		metaFontSizeMobile,
		metaFontSizeTablet,
		excerptFontSize,
		excerptFontSizeType,
		excerptFontSizeTablet,
		excerptFontSizeMobile,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeTablet,
		ctaFontSizeMobile,
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
	var tablet_selectors = {}

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
			"font-size": titleFontSize  + titleFontSizeType,
			"margin-bottom": titleBottomSpace  + "px"
		},
		" .uagb-post__text .uagb-post__title a": {
			"color": titleColor,
			"font-size": titleFontSize  + titleFontSizeType
		},
		" .uagb-post__text .uagb-post-grid-byline": {
			"color": metaColor,
			"font-size": metaFontSize  + metaFontSizeType,
			"margin-bottom": metaBottomSpace  + "px"
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author": {
			"color": metaColor,
			"font-size": metaFontSize  + metaFontSizeType,
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author a": {
			"color": metaColor,
			"font-size": metaFontSize  + metaFontSizeType,
		},
		" .uagb-post__text .uagb-post__excerpt": {
			"color": excerptColor,
			"font-size": excerptFontSize  + excerptFontSizeType,
			"margin-bottom": excerptBottomSpace  + "px"
		},
		" .uagb-post__text .uagb-post__cta": {
			"color": ctaColor,
			"font-size": ctaFontSize  + ctaFontSizeType,
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
			"font-size": ctaFontSize  + ctaFontSizeType,
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
		" .uagb-post__text .uagb-post__title": {
			"font-size": titleFontSizeMobile  + titleFontSizeType,
		},
		" .uagb-post__text .uagb-post__title a": {
			"font-size": titleFontSizeMobile  + titleFontSizeType
		},
		" .uagb-post__text .uagb-post-grid-byline": {
			"font-size": metaFontSizeMobile  + metaFontSizeType,
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author": {
			"font-size": metaFontSizeMobile  + metaFontSizeType,
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author a": {
			"font-size": metaFontSizeMobile  + metaFontSizeType,
		},
		" .uagb-post__text .uagb-post__excerpt": {
			"font-size": excerptFontSizeMobile  + excerptFontSizeType,
		},
		" .uagb-post__text .uagb-post__cta": {
			"font-size": ctaFontSizeMobile  + ctaFontSizeType,
		},
		" .uagb-post__text .uagb-post__cta a": {
			"font-size": ctaFontSizeMobile  + ctaFontSizeType,
		},
		" .uagb-post__text": {
			"padding" : ( contentPaddingMobile ) + "px",
		},
	}

	tablet_selectors = {
		" .uagb-post__text .uagb-post__title": {
			"font-size": titleFontSizeTablet  + titleFontSizeType,
		},
		" .uagb-post__text .uagb-post__title a": {
			"font-size": titleFontSizeTablet  + titleFontSizeType
		},
		" .uagb-post__text .uagb-post-grid-byline": {
			"font-size": metaFontSizeTablet  + metaFontSizeType,
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author": {
			"font-size": metaFontSizeTablet  + metaFontSizeType,
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author a": {
			"font-size": metaFontSizeTablet  + metaFontSizeType,
		},
		" .uagb-post__text .uagb-post__excerpt": {
			"font-size": excerptFontSizeTablet  + excerptFontSizeType,
		},
		" .uagb-post__text .uagb-post__cta": {
			"font-size": ctaFontSizeTablet  + ctaFontSizeType,
		},
		" .uagb-post__text .uagb-post__cta a": {
			"font-size": ctaFontSizeTablet  + ctaFontSizeType,
		},
	}

	var styling_css = ""

	styling_css = generateCSS( selectors, `#${id}-${ props.clientId }` )

	styling_css += generateCSS( tablet_selectors, `#${id}-${ props.clientId }`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `#${id}-${ props.clientId }`, true, "mobile" )

	return styling_css
}

export default styling
