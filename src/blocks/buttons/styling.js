/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		align,
		className,
		btn_count,
		buttons,
		gap,
		stack,
		fontFamily,
		fontWeight,
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	buttons.map( ( button, index ) => {

		if ( btn_count <= index ) {
			return
		}

		selectors[" .uagb-buttons-repeater-" + index] = {
			"font-size" : generateCSSUnit( button.size, button.sizeType ),
			"line-height" : generateCSSUnit( button.lineHeight, button.lineHeightType ),
			"font-family": fontFamily,
			"font-weight": fontWeight,
			"border-width": generateCSSUnit( button.borderWidth, "px" ),
			"border-style": button.borderStyle,
			"border-color": button.borderColor,
			"border-radius" : generateCSSUnit( button.borderRadius, "px" ),
			"background": button.background
		}

		selectors[" .uagb-buttons-repeater-" + index + ":hover"] = {
			"background": button.hBackground,
			"border-width": generateCSSUnit( button.borderWidth, "px" ),
			"border-style": button.borderStyle,
			"border-color": button.borderHColor,
		}

		selectors[" .uagb-buttons-repeater-" + index + " a.uagb-button__link"] = {
			"padding" : button.vPadding + "px " + button.hPadding + "px",
			"color": button.color
		}

		selectors[" .uagb-buttons-repeater-" + index + ":hover a.uagb-button__link"] = {
			"color": button.hColor
		}

		selectors[" .uagb-buttons-repeater-" + index + " .uagb-button__link"] = {
			"padding" : button.vPadding + "px " + button.hPadding + "px",
			"color": button.color
		}

		selectors[" .uagb-buttons-repeater-" + index + ":hover .uagb-button__link"] = {
			"color": button.hColor
		}

		mobile_selectors[" .uagb-buttons-repeater-" + index] = {
			"font-size" : generateCSSUnit( button.sizeMobile, button.sizeType ),
			"line-height" : generateCSSUnit( button.lineHeightMobile, button.lineHeightType ),
		}

		tablet_selectors[" .uagb-buttons-repeater-" + index] = {
			"font-size" : generateCSSUnit( button.sizeTablet, button.sizeType ),
			"line-height" : generateCSSUnit( button.lineHeightTablet, button.lineHeightType ),
		}

	})

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

	var alignment = ( align == "left" ) ? "flex-start" : ( ( align == "right" ) ? "flex-end" : "center" )

	selectors[" .uagb-buttons__wrap"] = {
		"justify-content" : alignment,
		"-webkit-box-pack": alignment,
		"-ms-flex-pack": alignment,
		"justify-content": alignment,
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

	var styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
