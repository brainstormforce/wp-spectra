/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		block_id,
		starColor,
		descColor,
		titleColor,
		titleFontFamily,
		titleFontWeight,
		titleFontSizeType,
		titleLineHeightType,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		descFontFamily,
		descFontWeight,
		descFontSize,
		descFontSizeType,
		descFontSizeTablet,
		descFontSizeMobile,
		descLineHeight,
		descLineHeightType,
		descLineHeightTablet,
		descLineHeightMobile,
	} = props.attributes

	var tablet_selectors = {}
	var mobile_selectors = {}

	var selectors = {

		" .uagb-star-inner-container svg" : {
		    "fill":starColor,
		},
		" .uagb-avg-review-star-inner-container svg" : {
			"fill":starColor,
		},
		" .rich-text.block-editor-rich-text__editable.uagb-rating-title.keep-placeholder-on-focus" : {
			"font-size": generateCSSUnit( titleFontSize, titleFontSizeType ),
			"font-weight": titleFontWeight,
			"font-family": titleFontFamily,
			"line-height": generateCSSUnit( titleLineHeight, titleLineHeightType ),
		    "color": titleColor,
		},
		" .rich-text.block-editor-rich-text__editable.uagb-rating-desc.keep-placeholder-on-focus" : {
			"font-size": generateCSSUnit( descFontSize, descFontSizeType ),
			"font-weight": descFontWeight,
			"font-family": descFontFamily,
			"line-height": generateCSSUnit( descLineHeight, descLineHeightType ),
		    "color": descColor,
		},
		" .uagb-features .uagb-rating-feature__label" : {
			"font-size": generateCSSUnit( descFontSize, descFontSizeType ),
			"font-weight": descFontWeight,
			"font-family": descFontFamily,
			"line-height": generateCSSUnit( descLineHeight, descLineHeightType ),
		    "color": descColor,
		},
	}

	mobile_selectors = {
			
	}

	tablet_selectors = { 
		
	}

	var base_selector = `.block-editor-page #wpwrap .uagb-block-${ block_id }`

	var styling_css = generateCSS( selectors, base_selector )

	styling_css += generateCSS( tablet_selectors, base_selector, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, base_selector, true, "mobile" )

	return styling_css
}

export default styling