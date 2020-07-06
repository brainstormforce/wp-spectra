/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

function RestMenuStyle( props ) {
	const {
		classMigrate,
		headingAlign,
		imageWidth,
		
		
	} = props.attributes


	var selectors = {
		
	
	}

	
	

	

	var styling_css = ""
	var id = `#wpwrap .uagb-block-${ props.clientId.substr( 0, 8 ) }`

	styling_css = generateCSS( selectors, id )

	// styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	// styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css

}

export default RestMenuStyle
