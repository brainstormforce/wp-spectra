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
		headFontSize,
		headFontSizeType,
		headFontSizeMobile,
		headFontSizeTablet,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeMobile,
		subHeadFontSizeTablet,
	} = props.attributes

	var tablet_selectors = {}
	var mobile_selectors = {}

	var selectors = {
		" .uagb-separator-wrap": {
			"text-align": headingAlign,
		},
		" .editor-rich-text .uagb-desc-text": {
			"text-align": headingAlign,
			"font-size": subHeadFontSize + subHeadFontSizeType,
			"color": subHeadingColor,
		}
	}

	selectors[" .editor-rich-text " + headingTag + ".uagb-heading-text"] = {
		"text-align": headingAlign,
		"font-size": headFontSize + headFontSizeType,
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
	}
	tablet_selectors[" .editor-rich-text .uagb-desc-text"] = {
		"font-size": subHeadFontSizeTablet + subHeadFontSizeType,
	}

	mobile_selectors[" .editor-rich-text " + headingTag + ".uagb-heading-text"] = {
		"font-size": headFontSizeMobile + headFontSizeType,
	}
	mobile_selectors[" .editor-rich-text .uagb-desc-text"] = {
		"font-size": subHeadFontSizeMobile + subHeadFontSizeType,
	}

	var styling_css = generateCSS( selectors, `.block-editor-page #wpwrap #uagb-adv-heading-${ props.clientId }` )

	styling_css += generateCSS( tablet_selectors, `.block-editor-page #wpwrap #uagb-adv-heading-${ props.clientId }`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `.block-editor-page #wpwrap #uagb-adv-heading-${ props.clientId }`, true, "mobile" )

	return styling_css
}

export default styling
