/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

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

	var selectors = {

		" .uagb-cta__content-wrap" : {
			"text-align" : textAlign,
		},
		// CTA style

		" .uagb-cta__button-wrapper a.uagb-cta-typeof-text" : {
			"font-size" : ctaFontSize+"px",
			"color": ctaBtnLinkColor,
		},
		" .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-text" : {
			"color": ctaLinkHoverColor,
		},

		" .uagb-cta__button-wrapper a.uagb-cta-typeof-button" : {
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
		},

		" .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-button" : {
			"color": ctaLinkHoverColor,
			"background-color": ctaBgHoverColor,
			"border-color": ctaBorderhoverColor,
		},

		" .uagb-cta__button-wrapper .uagb-cta-with-svg" : {
			"font-size" : ctaFontSize+"px",
			"height": ctaFontSize+"px",
			"width": ctaFontSize+"px",
			"line-height": ctaFontSize+"px",
		},

		" .uagb-cta__button-wrapper .uagb-cta__block-link svg" : {
			"fill" : ctaBtnLinkColor,
		},

		" .uagb-cta__button-wrapper:hover .uagb-cta__block-link svg" : {
			"fill": ctaLinkHoverColor,
		},

		// Title Style
		" .editor-rich-text .uagb-cta__title" : {
			"font-size" : titleFontSize+"px",
			"color": titleColor,
			"margin-bottom": titleSpace+"px",
		},

		// Description Style
		" .editor-rich-text .uagb-cta__desc" : {
			"font-size" : descFontSize+"px",
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


	var id = `.block-editor-page #wpwrap #${ clientId }`

	var styling_css = generateCSS( selectors, id )

	return styling_css

}

export default CtaStyle
