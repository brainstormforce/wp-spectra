/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		imgWidth,
		steps_icon_color,
		steps_icon_hover_color,
		stepsLoadGoogleFonts,
		stepsFontFamily,
		stepsFontWeight,
		stepsFontSubset,
		stepsFontSize,
		stepsFontSizeType,
		stepsFontSizeTablet,
		stepsFontSizeMobile,
		stepsLineHeightType,
		stepsLineHeight,
		stepsLineHeightTablet,
		stepsLineHeightMobile,
		steps_desc_icon_color,
			steps_desc_icon_hover_color,
			stepsdescLoadGoogleFonts,
			stepsdescFontFamily,
			stepsdescFontWeight,
			stepsdescFontSubset,
			stepsdescFontSize,
			stepsdescFontSizeType,
			stepsdescFontSizeTablet,
			stepsdescFontSizeMobile,
			stepsdescLineHeightType,
			stepsdescLineHeight,
			stepsdescLineHeightTablet,
			stepsdescLineHeightMobile,	
	} = props.attributes

	var selectors = {
		" .block-editor-rich-text__editable.uagb-steps__label": {
			"font-size" : generateCSSUnit( stepsFontSize, stepsFontSizeType ),
			"line-height" : generateCSSUnit( stepsLineHeight, stepsLineHeightType ),
			"font-family": stepsFontFamily,
			"font-weight": stepsFontWeight,
			"color": steps_icon_color,
		},
		" span.uagb-howto-steps__image-wrap .uagb-howto-steps__source-image": {
			"width": generateCSSUnit( imgWidth, "%" )
		},

		" .block-editor-rich-text__editable.uagb-steps__label:hover": {
			"color": steps_icon_hover_color,
		},

		" .block-editor-rich-text__editable.uagb-steps__description": {
			"font-size" : generateCSSUnit( stepsdescFontSize, stepsdescFontSizeType ),
			"line-height" : generateCSSUnit( stepsdescLineHeight, stepsdescLineHeightType ),
			"font-family": stepsdescFontFamily,
			"font-weight": stepsdescFontWeight,
			"color": steps_desc_icon_color,
		},
		" .block-editor-rich-text__editable.uagb-steps__description:hover": {
			"color": steps_desc_icon_hover_color,
		},
		
	}

	// var base_selector = `.block-editor-page #wpwrap #uagb-how-to-${ props.clientId }`
	
	// if ( classMigrate ) {
	// 	base_selector = `.block-editor-page #wpwrap .uagb-block-${ props.clientId }`
	// }

	var styling_css = ""
	var id = `.uagb-block-${ props.clientId }`

	styling_css = generateCSS( selectors, id )


	// styling_css += generateCSS( tablet_selectors, base_selector, true, "tablet" )

	// styling_css += generateCSS( mobile_selectors, base_selector, true, "mobile" )

	return styling_css
}

export default styling