/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		imgWidth,
		classMigrate,
		overallAlignment,
		headingAlign,
		descriptionAlign,
		headingTag,
		showEstcost,
		showTotaltime,
		showEstcostcolor,
		showTotaltimecolor,
		headingColor,
		headSpace,
		seperatorStyle,
		separatorHeight,
		separatorWidth,
		separatorWidthType,
		separatorColor,
		separatorSpace,
		subHeadingColor,
		subHeadSpace,
		headFontFamily,
		headFontWeight,
		headFontSize,
		headFontSizeType,
		headFontSizeMobile,
		headFontSizeTablet,
		headLineHeight,
		headLineHeightType,
		headLineHeightMobile,
		headLineHeightTablet,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeMobile,
		subHeadFontSizeTablet,
		subHeadLineHeight,
		subHeadLineHeightType,
		subHeadLineHeightMobile,
		subHeadLineHeightTablet,
		estcostLoadGoogleFonts,
		estcostFontFamily,
		estcostFontWeight,
		estcostFontSubset,
		estcostFontSizeType,
		estcostFontSize,
		estcostFontSizeMobile,
		estcostFontSizeTablet,
		estcostLineHeightType,
		estcostLineHeight,
		estcostLineHeightMobile,
		estcostLineHeightTablet,
		priceFontSizeType,
		priceFontSize,
		priceFontSizeTablet,
		priceFontSizeMobile,
		priceFontFamily,
		priceFontWeight,
		priceFontSubset,
		priceLineHeightType,
		priceLineHeight,
		priceLineHeightTablet,
		priceLineHeightMobile,
		priceLoadGoogleFonts,
		//tools attr
		toolsTitleColor,
		icon_color,
		icon_hover_color,
		toolsLoadGoogleFonts,
		toolsFontFamily,
		toolsFontWeight,
		toolsFontSubset,
		toolsFontSize,
		toolsFontSizeType,
		toolsFontSizeTablet,
		toolsFontSizeMobile,
		toolsLineHeightType,
		toolsLineHeight,
		toolsLineHeightTablet,
		toolsLineHeightMobile,
		//materials
		materialTitleColor,
		add_required_materials,
		materials_icon_color,
		materials_icon_hover_color,
		materialsLoadGoogleFonts,
		materialsFontFamily,
		materialsFontWeight,
		materialsFontSubset,
		materialsFontSize,
		materialsFontSizeType,
		materialsFontSizeTablet,
		materialsFontSizeMobile,
		materialsLineHeight,
		materialsLineHeightType,
		materialsLineHeightTablet,
		materialsLineHeightMobile,
		timeSpace,
		costSpace,
	} = props.attributes

	var selectors = {
		" .uagb-separator-wrap": {
			"text-align": headingAlign,
		},
		" .block-editor-rich-text__editable.uagb-howto-desc-text": {
			"text-align": descriptionAlign,
			"font-family": subHeadFontFamily,
			"font-weight": subHeadFontWeight,
			"font-size": generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			"line-height": generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			"color": subHeadingColor,
		},
		" span.uagb-howto__source-wrap .uagb-howto__source-image": {
			"width": generateCSSUnit( imgWidth, "%" )
		},
		" .block-editor-rich-text__editable.uagb-howto-timeNeeded-text, .block-editor-rich-text__editable.uagb-howto-timeNeeded-value,.block-editor-rich-text__editable.uagb-howto-timeINmin-text ": {
			// "text-align": headingAlign,
			"font-family": priceFontFamily,
			"font-weight": priceFontWeight,
			"font-size": generateCSSUnit( priceFontSizeType, priceFontSizeType ),
			"line-height": generateCSSUnit( priceLineHeight, priceLineHeightType ),
			"color": showTotaltimecolor,
		},
		" .block-editor-rich-text__editable.uagb-howto-estcost-text, .block-editor-rich-text__editable.uagb-howto-estcost-value,.block-editor-rich-text__editable.uagb-howto-estcost-type": {
			// "text-align": headingAlign,
			"font-family": estcostFontFamily,
			"font-weight": estcostFontWeight,
			"font-size": generateCSSUnit( estcostFontSize, estcostFontSizeType ),
			"line-height": generateCSSUnit( estcostLineHeight, estcostLineHeightType ),
			"color": showEstcostcolor,
		},
		" .block-editor-rich-text__editable.uagb-tools__label": {
			// "text-align": headingAlign,
			"font-family": toolsFontFamily,
			"font-weight": toolsFontWeight,
			"font-size": generateCSSUnit( toolsFontSize, toolsFontSizeType ),
			"line-height": generateCSSUnit( toolsLineHeight, toolsLineHeightType ),
			"color": icon_color,
		},
		'.block-editor-rich-text__editable.uagb-howto-timeNeeded-text,.block-editor-rich-text__editable.uagb-howto-timeNeeded-value,block-editor-rich-text__editable.uagb-howto-timeINmin-text': {
				"margin-left" : generateCSSUnit( timeSpace,"px"),
				"margin-right" : generateCSSUnit( timeSpace,"px"),
		},
		'.block-editor-rich-text__editable.uagb-howto-estcost-text,.block-editor-rich-text__editable.uagb-howto-estcost-value,.block-editor-rich-text__editable.uagb-howto-estcost-type': {
				"margin-left" : generateCSSUnit( costSpace,"px"),
				"margin-right" : generateCSSUnit( costSpace,"px"),
		},
		" .block-editor-rich-text__editable.uagb-tools__label:hover": {
			"color": icon_hover_color,
		},
		" .block-editor-rich-text__editable.uagb-materials__label": {
			// "text-align": headingAlign,
			"font-family": materialsFontFamily,
			"font-weight": materialsFontWeight,
			"font-size": generateCSSUnit( materialsFontSize, materialsFontSizeType ),
			"line-height": generateCSSUnit( materialsLineHeight, materialsLineHeightType ),
			"color": materials_icon_color,
		},
		" .block-editor-rich-text__editable.uagb-materials__label:hover": {
			"color": materials_icon_hover_color,
		},

		" .block-editor-rich-text__editable.uagb-howto-req-tools-text": {
			"color": toolsTitleColor,
		},

		" .block-editor-rich-text__editable.uagb-howto-req-materials-text": {
			"color": materialTitleColor,
		},
	}

	selectors[" " + headingTag + ".block-editor-rich-text__editable.uagb-howto-heading-text"] = {
		"text-align": headingAlign,
		"font-family": headFontFamily,
		"font-weight": headFontWeight,
		"font-size": generateCSSUnit( headFontSize, headFontSizeType ),
		"line-height": generateCSSUnit( headLineHeight, headLineHeightType ),
		"color": headingColor,
		"margin-bottom": generateCSSUnit( headSpace, "px" ),
	}

	var base_selector = `.block-editor-page #wpwrap #uagb-how-to-${ props.clientId }`
	
	if ( classMigrate ) {
		base_selector = `.block-editor-page #wpwrap .uagb-block-${ props.clientId }`
	}

	var styling_css = generateCSS( selectors, base_selector )

	// styling_css += generateCSS( tablet_selectors, base_selector, true, "tablet" )

	// styling_css += generateCSS( mobile_selectors, base_selector, true, "mobile" )

	return styling_css
}

export default styling