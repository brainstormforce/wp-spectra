/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
        height,
        width,
        backgroundColor
	} = props.attributes

	var tablet_selectors = {}
	var mobile_selectors = {}

	var selectors = {
		
	}

		
	mobile_selectors = {
		
	}

	tablet_selectors = {
		
	}



	var styling_css = ""
	var id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
