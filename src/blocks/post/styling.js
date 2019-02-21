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
		titleFontFamily,
		titleFontWeight,
		titleFontSubset,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleLoadGoogleFonts,
		metaFontSize,
		metaFontSizeType,
		metaFontSizeMobile,
		metaFontSizeTablet,
		metaFontFamily,
		metaFontWeight,
		metaFontSubset,
		metaLineHeightType,
		metaLineHeight,
		metaLineHeightTablet,
		metaLineHeightMobile,
		metaLoadGoogleFonts,
		excerptFontSize,
		excerptFontSizeType,
		excerptFontSizeTablet,
		excerptFontSizeMobile,
		excerptFontFamily,
		excerptFontWeight,
		excerptFontSubset,
		excerptLineHeightType,
		excerptLineHeight,
		excerptLineHeightTablet,
		excerptLineHeightMobile,
		excerptLoadGoogleFonts,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeTablet,
		ctaFontSizeMobile,
		ctaFontFamily,
		ctaFontWeight,
		ctaFontSubset,
		ctaLineHeightType,
		ctaLineHeight,
		ctaLineHeightTablet,
		ctaLineHeightMobile,
		ctaLoadGoogleFonts,
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
			"font-family": titleFontFamily,
			"font-weight": titleFontWeight,
			"line-height": titleLineHeight + titleLineHeightType,
			"margin-bottom": titleBottomSpace  + "px"
		},
		" .uagb-post__text .uagb-post__title a": {
			"color": titleColor,
			"font-size": titleFontSize  + titleFontSizeType,
			"font-family": titleFontFamily,
			"font-weight": titleFontWeight,
			"line-height": titleLineHeight + titleLineHeightType,
		},
		" .uagb-post__text .uagb-post-grid-byline": {
			"color": metaColor,
			"font-size": metaFontSize  + metaFontSizeType,
			"font-family": metaFontFamily,
			"font-weight": metaFontWeight,
			"line-height": metaLineHeight + metaLineHeightType,
			"margin-bottom": metaBottomSpace  + "px"
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author": {
			"color": metaColor,
			"font-size": metaFontSize  + metaFontSizeType,
			"font-family": metaFontFamily,
			"font-weight": metaFontWeight,
			"line-height": metaLineHeight + metaLineHeightType,
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author a": {
			"color": metaColor,
			"font-size": metaFontSize  + metaFontSizeType,
			"font-family": metaFontFamily,
			"font-weight": metaFontWeight,
			"line-height": metaLineHeight + metaLineHeightType,
		},
		" .uagb-post__text .uagb-post__excerpt": {
			"color": excerptColor,
			"font-size": excerptFontSize  + excerptFontSizeType,
			"font-family": excerptFontFamily,
			"font-weight": excerptFontWeight,
			"line-height": excerptLineHeight + excerptLineHeightType,
			"margin-bottom": excerptBottomSpace  + "px"
		},
		" .uagb-post__text .uagb-post__cta": {
			"color": ctaColor,
			"font-size": ctaFontSize  + ctaFontSizeType,
			"font-family": ctaFontFamily,
			"font-weight": ctaFontWeight,
			"line-height": ctaLineHeight + ctaLineHeightType,
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
			"line-height": titleLineHeightMobile + titleLineHeightType,
		},
		" .uagb-post__text .uagb-post__title a": {
			"font-size": titleFontSizeMobile  + titleFontSizeType,
			"line-height": titleLineHeightMobile + titleLineHeightType,
		},
		" .uagb-post__text .uagb-post-grid-byline": {
			"font-size": metaFontSizeMobile  + metaFontSizeType,
			"line-height": metaLineHeightMobile + metaLineHeightType,
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author": {
			"font-size": metaFontSizeMobile  + metaFontSizeType,
			"line-height": metaLineHeightMobile + metaLineHeightType,
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author a": {
			"font-size": metaFontSizeMobile  + metaFontSizeType,
			"line-height": metaLineHeightMobile + metaLineHeightType,
		},
		" .uagb-post__text .uagb-post__excerpt": {
			"font-size": excerptFontSizeMobile  + excerptFontSizeType,
			"line-height": excerptLineHeightMobile + excerptLineHeightType,
		},
		" .uagb-post__text .uagb-post__cta": {
			"font-size": ctaFontSizeMobile  + ctaFontSizeType,
			"line-height": ctaLineHeightMobile + ctaLineHeightType,
		},
		" .uagb-post__text .uagb-post__cta a": {
			"font-size": ctaFontSizeMobile  + ctaFontSizeType,
			"line-height": ctaLineHeightMobile + ctaLineHeightType,
		},
		" .uagb-post__text": {
			"padding" : ( contentPaddingMobile ) + "px",
		},
	}

	tablet_selectors = {
		" .uagb-post__text .uagb-post__title": {
			"font-size": titleFontSizeTablet  + titleFontSizeType,
			"line-height": titleLineHeightTablet + titleLineHeightType,
		},
		" .uagb-post__text .uagb-post__title a": {
			"font-size": titleFontSizeTablet  + titleFontSizeType,
			"line-height": titleLineHeightTablet + titleLineHeightType,
		},
		" .uagb-post__text .uagb-post-grid-byline": {
			"font-size": metaFontSizeTablet  + metaFontSizeType,
			"line-height": metaLineHeightTablet + metaLineHeightType,
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author": {
			"font-size": metaFontSizeTablet  + metaFontSizeType,
			"line-height": metaLineHeightTablet + metaLineHeightType,
		},
		" .uagb-post__text .uagb-post-grid-byline .uagb-post__author a": {
			"font-size": metaFontSizeTablet  + metaFontSizeType,
			"line-height": metaLineHeightTablet + metaLineHeightType,
		},
		" .uagb-post__text .uagb-post__excerpt": {
			"font-size": excerptFontSizeTablet  + excerptFontSizeType,
			"line-height": excerptLineHeightTablet + excerptLineHeightType,
		},
		" .uagb-post__text .uagb-post__cta": {
			"font-size": ctaFontSizeTablet  + ctaFontSizeType,
			"line-height": ctaLineHeightTablet + ctaLineHeightType,
		},
		" .uagb-post__text .uagb-post__cta a": {
			"font-size": ctaFontSizeTablet  + ctaFontSizeType,
			"line-height": ctaLineHeightTablet + ctaLineHeightType,
		},
	}

	var styling_css = ""

	styling_css = generateCSS( selectors, `#${id}-${ props.clientId }` )

	styling_css += generateCSS( tablet_selectors, `#${id}-${ props.clientId }`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `#${id}-${ props.clientId }`, true, "mobile" )

	return styling_css
}

export default styling
