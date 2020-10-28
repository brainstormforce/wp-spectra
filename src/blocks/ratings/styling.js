/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		blockID,
		block_id,
		starColor,
		descColor,
		titleColor,
		contentColor,
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
		contentFontFamily,
		contentFontWeight,
		contentFontSubset,
		contentFontSizeType,
		contentLineHeightType,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentLineHeight,
		contentLineHeightTablet,
		contentLineHeightMobile,
		contentVrPadding,
		contentHrPadding,
		star_gap,
		authorColor,
		summaryColor,
		starActiveColor,
		starOutlineColor,
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
		" .uagb-rating-title.keep-placeholder-on-focus" : {
			"font-size": generateCSSUnit( titleFontSize, titleFontSizeType ),
			"font-weight": titleFontWeight,
			"font-family": titleFontFamily,
			"line-height": generateCSSUnit( titleLineHeight, titleLineHeightType ),
		    "color": titleColor,
		},
		" .uagb-rating-desc.keep-placeholder-on-focus" : {
			"font-size": generateCSSUnit( descFontSize, descFontSizeType ),
			"font-weight": descFontWeight,
			"font-family": descFontFamily,
			"line-height": generateCSSUnit( descLineHeight, descLineHeightType ),
		    "color": descColor,
		},
		" .uagb-rating-author.keep-placeholder-on-focus" : {
			"font-size": generateCSSUnit( descFontSize, descFontSizeType ),
			"font-weight": descFontWeight,
			"font-family": descFontFamily,
			"line-height": generateCSSUnit( descLineHeight, descLineHeightType ),
		    "color": authorColor,
		},
		" .uagb-rating-desc, .uagb-rating-author" : {
			"font-size": generateCSSUnit( descFontSize, descFontSizeType ),
			"font-weight": descFontWeight,
			"font-family": descFontFamily,
			"line-height": generateCSSUnit( descLineHeight, descLineHeightType ),
		    "color": descColor,
		},
		" .uagb_review_block" : {
		        "padding-left" : generateCSSUnit( contentHrPadding, "px" ),
		    	"padding-right" : generateCSSUnit( contentHrPadding, "px" ),
		    	"padding-top" : generateCSSUnit( contentVrPadding, "px" ),
		    	"padding-bottom" : generateCSSUnit( contentVrPadding, "px" ),
		},
		" .uagb_review_summary, .uagb_review_summary_title" : {
		    "font-size": generateCSSUnit( contentFontSize, contentFontSizeType ),
		    "font-weight": contentFontWeight,
		    "font-family": contentFontFamily,
			"line-height": generateCSSUnit( contentLineHeight, contentLineHeightType ),
			"color": summaryColor,
		},
		" .uagb_review_entry .rich-text" : {
			"color" : contentColor,
		},
		" .uagb_review_entry .star, .uagb_review_average_stars .star" : {
			"fill": starColor,
		},
		" .uagb_review_entry path, .uagb_review_average_stars path" : {
			"stroke":starOutlineColor,
			"fill": starActiveColor,
		}
	}

	mobile_selectors = {
			" .uagb-rating-title" : {
				"font-size": generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
				"line-height": generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
			},
			" .uagb-rating-desc, .uagb-rating-author" : {
				"font-size": generateCSSUnit( descFontSizeMobile, descFontSizeType ),
				"line-height": generateCSSUnit( descLineHeightMobile, descLineHeightType ),
			},
			" .uagb_review_summary, .uagb_review_summary_title" : {
			    "font-size": generateCSSUnit( contentFontSizeMobile, contentFontSizeType ),
			    "line-height": generateCSSUnit( contentLineHeightMobile, contentLineHeightType ),
			},
	}

	tablet_selectors = { 
		" .uagb-rating-title" : {
			"font-size": generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			"line-height": generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
		},
		" .uagb-rating-desc, .uagb-rating-author" : {
			"font-size": generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			"line-height": generateCSSUnit( descLineHeightTablet, descLineHeightType ),
		},
		" .uagb_review_summary, .uagb_review_summary_title" : {
		    "font-size": generateCSSUnit( contentFontSizeTablet, contentFontSizeType ),		    
		    "line-height": generateCSSUnit( contentLineHeightTablet, contentLineHeightType ),
		},
	}

	var base_selector = `.block-editor-page #wpwrap .uagb-block-${ blockID.substr( 0, 8 ) }`

	var styling_css = generateCSS( selectors, base_selector )

	styling_css += generateCSS( tablet_selectors, base_selector, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, base_selector, true, "mobile" )

	return styling_css
}

export default styling