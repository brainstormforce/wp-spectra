/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
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
	} = props.attributes

	var selectors = {
		" .block-editor-rich-text__editable.uagb-materials__label": {
			"font-size" : generateCSSUnit( toolsFontSize, toolsFontSizeType ),
			"line-height" : generateCSSUnit( toolsLineHeight, toolsLineHeightType ),
			"font-family": toolsFontFamily,
			"font-weight": toolsFontWeight,
			"color": icon_color,
		},

		" .block-editor-rich-text__editable.uagb-materials__label:hover": {
			"color": icon_hover_color,
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