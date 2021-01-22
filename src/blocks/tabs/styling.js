/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		headerBgColor,
		headerTextColor,
		activeTabBgColor,
		activeTabTextColor,
		bodyBgColor,
		bodyTextColor,
		//Border
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
	} = props.attributes

	var selectors = {}
	selectors = {
		" .uagb-tabs__wrap .uagb-tab" : {
			"background": headerBgColor,
			"color": headerTextColor,
		},
		" .uagb-tabs__wrap .uagb-tab.uagb-tabs__active" : {
			"background": activeTabBgColor,
			"color": activeTabTextColor ,
		},
		" .uagb-tabs__wrap .uagb-tabs__body-wrap" : {
			"background": bodyBgColor,
			"color": bodyTextColor,
		},
	}
	if ( borderStyle !== "none" ) {
		selectors[" .uagb-tabs__wrap uagb-tab , .uagb-tabs__wrap .uagb-tabs__body-wrap"] = {
            "border" : generateCSSUnit( borderWidth, "px" ) + ' ' + borderStyle + ' ' + borderColor,
            "border-radius" : generateCSSUnit( borderRadius, "px" ),
		}
	}
	var id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`

	var styling_css = generateCSS( selectors, id )

	return styling_css
}

export default styling
