/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		block_id,
		textColor,
		titleColor,
		noticeColor,
		fontSize,
		noticeAlignment,
		titleFontFamily,
		titleFontWeight,
		titleFontSubset,
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
		descFontSubset,
		descFontSize,
		descFontSizeType,
		descFontSizeTablet,
		descFontSizeMobile,
		descLineHeight,
		descLineHeightType,
		descLineHeightTablet,
		descLineHeightMobile,
		titleLoadGoogleFonts,
		descLoadGoogleFonts
	} = props.attributes

	var tablet_selectors = {}
	var mobile_selectors = {}

	var selectors = { 

		" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus" : {
	    "font-size": generateCSSUnit( titleFontSize, titleFontSizeType ),
	    "font-weight": titleLineHeight,
	    "font-family": titleFontFamily,
	    "line-height": generateCSSUnit( titleFontSize, titleFontSizeType ),
		},

		" .rich-text.block-editor-rich-text__editable.uagb-notice-text p" : {
		    "font-size": generateCSSUnit( descFontSize, descFontSizeType ),
		    "font-weight": descFontWeight,
		    "font-family": descFontFamily,
		    "line-height": generateCSSUnit( descFontSize, descFontSizeType ),
		},
	}

	mobile_selectors = {
			" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus" : {
		    "font-size": generateCSSUnit( titleFontSize, titleFontSizeType ),
		    "line-height": generateCSSUnit( titleFontSize, titleFontSizeType ),
			},

			" .rich-text.block-editor-rich-text__editable.uagb-notice-text p" : {
			    "font-size": generateCSSUnit( descFontSize, descFontSizeType ),
			    "line-height": generateCSSUnit( descFontSize, descFontSizeType ),
			},
	}

	tablet_selectors = { 
			" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus" : {
		    "font-size": generateCSSUnit( titleFontSize, titleFontSizeType ),
		    "line-height": generateCSSUnit( titleFontSize, titleFontSizeType ),
			},

			" .rich-text.block-editor-rich-text__editable.uagb-notice-text p" : {
			    "font-size": generateCSSUnit( descFontSize, descFontSizeType ),
			    "line-height": generateCSSUnit( descFontSize, descFontSizeType ),
			},
	}

	var base_selector = `.block-editor-page #wpwrap .uagb-block-${ props.clientId }`

	var styling_css = generateCSS( selectors, base_selector )

	styling_css += generateCSS( tablet_selectors, base_selector, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, base_selector, true, "mobile" )

	return styling_css
}

export default styling