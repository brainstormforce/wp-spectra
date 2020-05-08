/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
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
	} = props.attributes

	var selectors = {
		" .uagb-materials .block-editor-rich-text__editable.uagb-materials__label": {
			"font-size" : generateCSSUnit( materialsFontSize, materialsFontSizeType ),
			"line-height" : generateCSSUnit( materialsLineHeight, materialsLineHeightType ),
			"font-family": materialsFontFamily,
			"font-weight": materialsFontWeight,
			"color": materials_icon_color,
		},

		" .uagb-materials .block-editor-rich-text__editable.uagb-materials__label:hover": {
			"color": materials_icon_hover_color,
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