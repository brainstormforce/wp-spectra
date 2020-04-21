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
		stack,
		align
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
	
		if ( "desktop" == stack ) {

			selectors[" .uagb-button__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}
	
			selectors[" .block-editor-block-list__layout"] = {
				 "flex-direction": "column"
			}
	
		} else if ( "tablet" == stack ) {
	
			tablet_selectors[" .uagb-button__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}
	
			tablet_selectors[" .block-editor-block-list__layout"] = {
				"flex-direction": "column"
			}
	
		} else if ( "mobile" == stack ) {
	
			mobile_selectors[" .uagb-button__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}
	
			mobile_selectors[" .block-editor-block-list__layout"] = {
				"flex-direction": "column"
			}
		}

		var alignment = ( align == "left" ) ? "flex-start" : ( ( align == "right" ) ? "flex-end" : "center" )

		selectors[" .uagb-buttons__wrap"] = {
			"justify-content" : alignment,
			"-webkit-box-pack": alignment,
			"-ms-flex-pack": alignment,
			"justify-content": alignment,
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
