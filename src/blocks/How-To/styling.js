/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		imgWidth,
		classMigrate,
		headingAlign,
		headingTag,
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
	} = props.attributes

	var selectors = {
		" .uagb-separator-wrap": {
			"text-align": headingAlign,
		},
		" .block-editor-rich-text__editable.uagb-howto-desc-text": {
			"text-align": headingAlign,
			"font-family": subHeadFontFamily,
			"font-weight": subHeadFontWeight,
			"font-size": generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			"line-height": generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			"color": subHeadingColor,
		},
		" span.uagb-howto__source-wrap .uagb-howto__source-image": {
			"width": generateCSSUnit( imgWidth, "%" )
		}
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