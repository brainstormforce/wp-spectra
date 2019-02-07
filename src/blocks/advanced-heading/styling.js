/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function styling( props ) {

	const {
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

	var tablet_selectors = {}
	var mobile_selectors = {}
	
	var selectors = {
		" .uagb-separator-wrap": {
			"text-align": headingAlign,
		},
		" .editor-rich-text .uagb-desc-text": {
			"text-align": headingAlign,
			"font-family": subHeadFontFamily,
			"font-weight": subHeadFontWeight,
			"font-size": subHeadFontSize + subHeadFontSizeType,
			"line-height": subHeadLineHeight + subHeadLineHeightType,
			"color": subHeadingColor,
		}
	}

	selectors[" .editor-rich-text " + headingTag + ".uagb-heading-text"] = {
		"text-align": headingAlign,
		"font-family": headFontFamily,
		"font-weight": headFontWeight,
		"font-size": headFontSize + headFontSizeType,
		"line-height": headLineHeight + headLineHeightType,
		"color": headingColor,
		"margin-bottom": headSpace + "px",
	}

	if( seperatorStyle !== "none" ){
		selectors[" .uagb-separator"] = {
			"border-top-style": seperatorStyle,
			"border-top-width": separatorHeight + "px",
			"width": separatorWidth + separatorWidthType,
			"border-color": separatorColor,
			"margin-bottom": separatorSpace + "px",
		}
	}

	tablet_selectors[" .editor-rich-text " + headingTag + ".uagb-heading-text"] = {
		"font-size": headFontSizeTablet + headFontSizeType,
		"line-height": headLineHeightTablet + headLineHeightType,
	}
	tablet_selectors[" .editor-rich-text .uagb-desc-text"] = {
		"font-size": subHeadFontSizeTablet + subHeadFontSizeType,
		"line-height": subHeadLineHeightTablet + subHeadLineHeightType,
	}

	mobile_selectors[" .editor-rich-text " + headingTag + ".uagb-heading-text"] = {
		"font-size": headFontSizeMobile + headFontSizeType,
		"line-height": headLineHeightMobile + headLineHeightType,
	}
	mobile_selectors[" .editor-rich-text .uagb-desc-text"] = {
		"font-size": subHeadFontSizeMobile + subHeadFontSizeType,
		"line-height": subHeadLineHeightMobile + subHeadLineHeightType,
	}

	var styling_css = generateCSS( selectors, `.block-editor-page #wpwrap #uagb-adv-heading-${ props.clientId }` )

	styling_css += generateCSS( tablet_selectors, `.block-editor-page #wpwrap #uagb-adv-heading-${ props.clientId }`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `.block-editor-page #wpwrap #uagb-adv-heading-${ props.clientId }`, true, "mobile" )

	return styling_css
}

export default styling
