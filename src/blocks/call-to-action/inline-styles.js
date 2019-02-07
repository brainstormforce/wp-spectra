/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function CtaStyle( props ) {
	const {
		textAlign,
		titleColor,
		descColor,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		descFontSize,
		descFontSizeType,
		descFontSizeMobile,
		descFontSizeTablet,
		titleSpace,
		descSpace,
		ctaPosition,
		block_id,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeMobile,
		ctaFontSizeTablet,
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

	var clientId = "uagb-cta-block-"+props.clientId

	var selectors = {

		" .uagb-cta__content-wrap" : {
			"text-align" : textAlign,
		},
		// CTA style

		" .uagb-cta__button-wrapper a.uagb-cta-typeof-text" : {
			"font-size" : ctaFontSize+ctaFontSizeType,
			"color": ctaBtnLinkColor,
		},
		" .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-text" : {
			"color": ctaLinkHoverColor,
		},

		" .uagb-cta__button-wrapper a.uagb-cta-typeof-button" : {
			"font-size" : ctaFontSize+ctaFontSizeType,
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
		},

		" .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-button" : {
			"color": ctaLinkHoverColor,
			"background-color": ctaBgHoverColor,
			"border-color": ctaBorderhoverColor,
		},

		" .uagb-cta__button-wrapper .uagb-cta-with-svg" : {
			"font-size" : ctaFontSize+ctaFontSizeType,
			"height": ctaFontSize+ctaFontSizeType,
			"width": ctaFontSize+ctaFontSizeType,
			"line-height": ctaFontSize+ctaFontSizeType,
		},

		" .uagb-cta__button-wrapper .uagb-cta__block-link svg" : {
			"fill" : ctaBtnLinkColor,
		},

		" .uagb-cta__button-wrapper:hover .uagb-cta__block-link svg" : {
			"fill": ctaLinkHoverColor,
		},

		// Title Style
		" .editor-rich-text .uagb-cta__title" : {
			"font-size" : titleFontSize+titleFontSizeType,
			"color": titleColor,
			"margin-bottom": titleSpace+"px",
		},

		// Description Style
		" .editor-rich-text .uagb-cta__desc" : {
			"font-size" : descFontSize+descFontSizeType,
			"color": descColor,
			"margin-bottom": descSpace+"px",
		},

		" .uagb-cta__align-button-after" : {
			"margin-left" : ctaIconSpace+"px",
		},

		" .uagb-cta__align-button-before" : {
			"margin-right" : ctaIconSpace+"px",
		},
	}

	if( textAlign === "left" && ctaPosition === "right" ){
		selectors[" .uagb-cta__left-right-wrap .uagb-cta__content"] = {
			"margin-left" : ctaLeftSpace+"px",
			"margin-right" : "0px",
		}
	}

	if( textAlign === "right" && ctaPosition === "right" ){
		selectors[" .uagb-cta__left-right-wrap .uagb-cta__content"] = {
			"margin-right" : ctaRightSpace+"px",
			"margin-left" : "0px",
		}
	}

	if( ctaPosition === "right" && ( ctaType === "text" || ctaType === "button" ) ){
		selectors[" .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content"] = {
			"width" : contentWidth+"%",
		}
		selectors[" .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper"] = {
			"width" : ( 100 - contentWidth )+"%",
		}
	}

	var tablet_selectors = {
		" .editor-rich-text .uagb-cta__title" : {
			"font-size" : titleFontSizeTablet + titleFontSizeType,
		},
		" .editor-rich-text .uagb-cta__desc" : {
			"font-size" : descFontSizeTablet + descFontSizeType,
		},
		" .uagb-cta__button-wrapper a.uagb-cta-typeof-text" : {
			"font-size" : ctaFontSizeTablet + ctaFontSizeType,
		},
		" .uagb-cta__button-wrapper a.uagb-cta-typeof-button" : {
			"font-size" : ctaFontSizeTablet + ctaFontSizeType,
		},
		" .uagb-cta__button-wrapper .uagb-cta-with-svg" : {
			"font-size" : ctaFontSizeTablet + ctaFontSizeType,
			"height": ctaFontSizeTablet + ctaFontSizeType,
			"width": ctaFontSizeTablet + ctaFontSizeType,
			"line-height": ctaFontSizeTablet + ctaFontSizeType,
		},
	}

	var mobile_selectors = {
		" .editor-rich-text .uagb-cta__title" : {
			"font-size" : titleFontSizeMobile + titleFontSizeType,
		},
		" .editor-rich-text .uagb-cta__desc" : {
			"font-size" : descFontSizeMobile + descFontSizeType,
		},
		" .uagb-cta__button-wrapper a.uagb-cta-typeof-text" : {
			"font-size" : ctaFontSizeMobile + ctaFontSizeType,
		},
		" .uagb-cta__button-wrapper a.uagb-cta-typeof-button" : {
			"font-size" : ctaFontSizeMobile + ctaFontSizeType,
		},
		" .uagb-cta__button-wrapper .uagb-cta-with-svg" : {
			"font-size" : ctaFontSizeMobile + ctaFontSizeType,
			"height": ctaFontSizeMobile + ctaFontSizeType,
			"width": ctaFontSizeMobile + ctaFontSizeType,
			"line-height": ctaFontSizeMobile + ctaFontSizeType,
		},
	}


	var id = `.block-editor-page #wpwrap #${ clientId }`

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css

}

export default CtaStyle
