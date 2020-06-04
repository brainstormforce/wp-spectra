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
		noticeDismissColor,
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

		" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus" : {
	    "font-size": generateCSSUnit( titleFontSize, titleFontSizeType ),
	    "font-weight": titleFontWeight,
	    "font-family": titleFontFamily,
	    "line-height": generateCSSUnit( titleLineHeight, titleFontSizeType ),
	    "color": titleColor,
	    "background-color": noticeColor,
		},

		" .rich-text.block-editor-rich-text__editable.uagb-notice-text" : {
		    "border-color": noticeColor,
		},

		" .rich-text.block-editor-rich-text__editable.uagb-notice-text p" : {
		    "font-size": generateCSSUnit( descFontSize, descFontSizeType ),
		    "font-weight": descFontWeight,
		    "font-family": descFontFamily,
		    "line-height": generateCSSUnit( descLineHeight, descFontSizeType ),
		    "color": textColor,
		},

		" span.uagb-notice-dismiss" : {
			"fill": noticeDismissColor,
		},
	}

	mobile_selectors = {
			" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus" : {
		    "font-size": generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
		    "line-height": generateCSSUnit( titleLineHeightMobile, titleFontSizeType ),
			},

			" .rich-text.block-editor-rich-text__editable.uagb-notice-text p" : {
			    "font-size": generateCSSUnit( descFontSizeMobile, descFontSizeType ),
			    "line-height": generateCSSUnit( descLineHeightMobile, descFontSizeType ),
			},
	}

	tablet_selectors = { 
			" .rich-text.block-editor-rich-text__editable.uagb-notice-title.keep-placeholder-on-focus" : {
		    "font-size": generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
		    "line-height": generateCSSUnit( titleLineHeightTablet, titleFontSizeType ),
			},

			" .rich-text.block-editor-rich-text__editable.uagb-notice-text p" : {
			    "font-size": generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			    "line-height": generateCSSUnit( descLineHeightTablet, descFontSizeType ),
			},
	}

	var base_selector = `.block-editor-page #wpwrap .uagb-block-${ props.clientId }`

	var styling_css = generateCSS( selectors, base_selector )

	styling_css += generateCSS( tablet_selectors, base_selector, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, base_selector, true, "mobile" )

	return styling_css
}

export default styling