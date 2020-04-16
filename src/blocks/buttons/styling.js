/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		fontFamily,
		fontWeight,
		classMigrate,
		gap,
		stack
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}


		selectors[" .uagb-buttons-repeater"] = {
			
			"font-family": fontFamily,
			"font-weight": fontWeight,
		}
		selectors[" .uagb-button__wrapper"] = {
			"margin-left" : generateCSSUnit( ( gap/2 ), "px" ),
			"margin-right" : generateCSSUnit( ( gap/2 ), "px" )
		}
	
		selectors[" .uagb-button__wrapper:first-child"] = {
			"margin-left" : 0
		}
	
		selectors[" .uagb-button__wrapper:last-child"] = {
			"margin-right" : 0
		}
		if ( "desktop" == stack ) {

			selectors[" .uagb-button__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}
	
			selectors[" .uagb-buttons__wrap"] = {
				 "flex-direction": "column"
			}
	
			selectors[" .uagb-button__wrapper:last-child"] = {
				"margin-bottom" : 0
			}
	
		} else if ( "tablet" == stack ) {
	
			tablet_selectors[" .uagb-button__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}
	
			tablet_selectors[" .uagb-buttons__wrap"] = {
				"flex-direction": "column"
			}
	
			tablet_selectors[" .uagb-button__wrapper:last-child"] = {
				"margin-bottom" : 0
			}
	
		} else if ( "mobile" == stack ) {
	
			mobile_selectors[" .uagb-button__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}
	
			mobile_selectors[" .uagb-buttons__wrap"] = {
				"flex-direction": "column"
			}
	
			mobile_selectors[" .uagb-button__wrapper:last-child"] = {
				"margin-bottom" : 0
			}
		}

	var id = `#uagb-buttons-${ props.clientId }`
	if ( classMigrate ) {
		id = `.uagb-block-${ props.clientId }`
	}

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )


	return styling_css
}

export default styling
