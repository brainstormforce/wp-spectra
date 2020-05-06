/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
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
	} = props.attributes

	var selectors = {
		" .block-editor-rich-text__editable.uagb-steps__label": {
			"font-size" : generateCSSUnit( stepsFontSize, stepsFontSizeType ),
			"line-height" : generateCSSUnit( stepsLineHeight, stepsLineHeightType ),
			"font-family": stepsFontFamily,
			"font-weight": stepsFontWeight,
			"color": steps_icon_color,
		},

		" .block-editor-rich-text__editable.uagb-steps__label:hover": {
			"color": steps_icon_hover_color,
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