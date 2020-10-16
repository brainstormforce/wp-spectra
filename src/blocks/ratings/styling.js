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
		" .uagb-features .uagb-rating-feature__label" : {
			"font-size": generateCSSUnit( descFontSize, descFontSizeType ),
			"font-weight": descFontWeight,
			"font-family": descFontFamily,
			"line-height": generateCSSUnit( descLineHeight, descLineHeightType ),
		    "color": descColor,
		},
		" .uagb-ratings-wrap .uagb-stock-availability" : {
		        "padding-left" : generateCSSUnit( contentHrPadding, "px" ),
		    	"padding-right" : generateCSSUnit( contentHrPadding, "px" ),
		    	"padding-top" : generateCSSUnit( contentVrPadding, "px" ),
		    	"padding-bottom" : generateCSSUnit( contentVrPadding, "px" ),
		},
		" .uagb-ratings-wrap .uagb-product-price" : {
		        "padding-left" : generateCSSUnit( contentHrPadding, "px" ),
		    	"padding-right" : generateCSSUnit( contentHrPadding, "px" ),
		    	"padding-top" : generateCSSUnit( contentVrPadding, "px" ),
		    	"padding-bottom" : generateCSSUnit( contentVrPadding, "px" ),
		},
		" .uagb-ratings-wrap .uagb-avg-review-star" : {
		        "padding-left" : generateCSSUnit( contentHrPadding, "px" ),
		    	"padding-right" : generateCSSUnit( contentHrPadding, "px" ),
		    	"padding-top" : generateCSSUnit( contentVrPadding, "px" ),
		    	"padding-bottom" : generateCSSUnit( contentVrPadding, "px" ),
		},
		" .uagb-features-star .uagb-star-inner-container" : {
		    "margin-left":generateCSSUnit( star_gap, "px" ),
		},
		" .rich-text.block-editor-rich-text__editable.uagb-avg-rating-text" : {
		   "font-size": generateCSSUnit( contentFontSize, contentFontSizeType ),
		   "font-weight": contentFontWeight,
		   "font-family": contentFontFamily,
		   "line-height": generateCSSUnit( contentLineHeight, contentLineHeightType ),
		},
        " .rich-text.block-editor-rich-text__editable.uagb-price-text" : {
		    "font-size": generateCSSUnit( contentFontSize, contentFontSizeType ),
		    "font-weight": contentFontWeight,
		    "font-family": contentFontFamily,
		    "line-height": generateCSSUnit( contentLineHeight, contentLineHeightType ),
		},
		" .rich-text.block-editor-rich-text__editable.uagb-price-value-text" : {
		    "font-size": generateCSSUnit( contentFontSize, contentFontSizeType ),
		    "font-weight": contentFontWeight,
		    "font-family": contentFontFamily,
		    "line-height": generateCSSUnit( contentLineHeight, contentLineHeightType ),
		},
		" .rich-text.block-editor-rich-text__editable.uagb-price-currency-text" : {
		    "font-size": generateCSSUnit( contentFontSize, contentFontSizeType ),
		    "font-weight": contentFontWeight,
		    "font-family": contentFontFamily,
		    "line-height": generateCSSUnit( contentLineHeight, contentLineHeightType ),
		},
		" .rich-text.block-editor-rich-text__editable.uagb-availability-text" : {
		    "font-size": generateCSSUnit( contentFontSize, contentFontSizeType ),
		    "font-weight": contentFontWeight,
		    "font-family": contentFontFamily,
		    "line-height": generateCSSUnit( contentLineHeight, contentLineHeightType ),
		},
		" .rich-text.block-editor-rich-text__editable.uagb-availability-value-text" : {
		    "font-size": generateCSSUnit( contentFontSize, contentFontSizeType ),
		    "font-weight": contentFontWeight,
		    "font-family": contentFontFamily,
		    "line-height": generateCSSUnit( contentLineHeight, contentLineHeightType ),
		},
		" .uagb_review_entry .rich-text" : {
			"color" : contentColor,
		},
		" .uagb_review_summary" : {
			"color": summaryColor,
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
			" .rich-text.block-editor-rich-text__editable.uagb-rating-title.keep-placeholder-on-focus" : {
				"font-size": generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
				"line-height": generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
			},
			" .rich-text.block-editor-rich-text__editable.uagb-rating-feature-text" : {
				"font-size": generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
				"line-height": generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
			},
			" .rich-text.block-editor-rich-text__editable.uagb-rating-desc.keep-placeholder-on-focus" : {
				"font-size": generateCSSUnit( descFontSizeMobile, descFontSizeType ),
				"line-height": generateCSSUnit( descLineHeightMobile, descLineHeightType ),
			},
			" .uagb-features .uagb-rating-feature__label" : {
				"font-size": generateCSSUnit( descFontSizeMobile, descFontSizeType ),
				"line-height": generateCSSUnit( descLineHeightMobile, descLineHeightType ),
			},
	        " .rich-text.block-editor-rich-text__editable.uagb-price-text" : {
			    "font-size": generateCSSUnit( contentFontSizeMobile, contentFontSizeType ),
			    "line-height": generateCSSUnit( contentLineHeightMobile, contentLineHeightType ),
			},
			" .rich-text.block-editor-rich-text__editable.uagb-price-value-text" : {
			    "font-size": generateCSSUnit( contentFontSizeMobile, contentFontSizeType ),
			    "line-height": generateCSSUnit( contentLineHeightMobile, contentLineHeightType ),
			},
			" .rich-text.block-editor-rich-text__editable.uagb-price-currency-text" : {
			    "font-size": generateCSSUnit( contentFontSizeMobile, contentFontSizeType ),
			    "line-height": generateCSSUnit( contentLineHeightMobile, contentLineHeightType ),
			},
			" .rich-text.block-editor-rich-text__editable.uagb-availability-text" : {
			    "font-size": generateCSSUnit( contentFontSizeMobile, contentFontSizeType ),
			    "line-height": generateCSSUnit( contentLineHeightMobile, contentLineHeightType ),
			},
			" .rich-text.block-editor-rich-text__editable.uagb-availability-value-text" : {
			    "font-size": generateCSSUnit( contentFontSizeMobile, contentFontSizeType ),
			    "line-height": generateCSSUnit( contentLineHeightMobile, contentLineHeightType ),
			},
	}

	tablet_selectors = { 
		" .rich-text.block-editor-rich-text__editable.uagb-rating-title.keep-placeholder-on-focus" : {
			"font-size": generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			"line-height": generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
		},
		" .rich-text.block-editor-rich-text__editable.uagb-rating-feature-text" : {
			"font-size": generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			"line-height": generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
		},
		" .rich-text.block-editor-rich-text__editable.uagb-rating-desc.keep-placeholder-on-focus" : {
			"font-size": generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			"line-height": generateCSSUnit( descLineHeightTablet, descLineHeightType ),
		},
		" .uagb-features .uagb-rating-feature__label" : {
			"font-size": generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			"line-height": generateCSSUnit( descLineHeightTablet, descLineHeightType ),
		},
        " .rich-text.block-editor-rich-text__editable.uagb-price-text" : {
		    "font-size": generateCSSUnit( contentFontSizeTablet, contentFontSizeType ),
		    "line-height": generateCSSUnit( contentLineHeightTablet, contentLineHeightType ),
		},
		" .rich-text.block-editor-rich-text__editable.uagb-price-value-text" : {
		    "font-size": generateCSSUnit( contentFontSizeTablet, contentFontSizeType ),
		    "line-height": generateCSSUnit( contentLineHeightTablet, contentLineHeightType ),
		},
		" .rich-text.block-editor-rich-text__editable.uagb-price-currency-text" : {
			    "font-size": generateCSSUnit( contentFontSizeTablet, contentFontSizeType ),
			    "line-height": generateCSSUnit( contentLineHeightTablet, contentLineHeightType ),
			},
		" .rich-text.block-editor-rich-text__editable.uagb-availability-text" : {
		    "font-size": generateCSSUnit( contentFontSizeTablet, contentFontSizeType ),
		    "line-height": generateCSSUnit( contentLineHeightTablet, contentLineHeightType ),
		},
		" .rich-text.block-editor-rich-text__editable.uagb-availability-value-text" : {
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