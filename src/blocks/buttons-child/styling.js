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
		loadGoogleFonts,
		fontFamily,
		fontWeight,
		fontSubset,
		label,
		link,
		target,
		size,
		vPadding,
		hPadding,
		borderWidth,
		borderRadius,
		borderStyle,
		borderColor,
		borderHColor,
		color,
		background,
		hColor,
		hBackground,
		sizeType,
		sizeMobile,
		sizeTablet,
		lineHeight,
		lineHeightType,
		lineHeightMobile,
		lineHeightTablet,
		classMigrate
	} = props.attributes;
	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

		selectors[" .uagb-buttons-repeater"] = {
			"font-size" : generateCSSUnit( size, sizeType ),
			"line-height" : generateCSSUnit( lineHeight, lineHeightType ),
			"font-family": fontFamily,
			"font-weight": fontWeight,
			"border-width": generateCSSUnit( borderWidth, "px" ),
			"border-style": borderStyle,
			"border-color": borderColor,
			"border-radius" : generateCSSUnit( borderRadius, "px" ),
			"background": background
		}

		selectors[" .uagb-buttons-repeater" + ":hover"] = {
			"background": hBackground,
			"border-width": generateCSSUnit( borderWidth, "px" ),
			"border-style": borderStyle,
			"border-color": borderHColor,
		}

		selectors[" .uagb-buttons-repeater" + " a.uagb-button__link"] = {
			"padding" : vPadding + "px " + hPadding + "px",
			"color": color
		}

		selectors[" .uagb-buttons-repeater" + ":hover a.uagb-button__link"] = {
			"color": hColor
		}

		selectors[" .uagb-buttons-repeater" + " .uagb-button__link"] = {
			"padding" : vPadding + "px " + hPadding + "px",
			"color": color
		}

		selectors[" .uagb-buttons-repeater" + ":hover .uagb-button__link"] = {
			"color": hColor
		}

		mobile_selectors[" .uagb-buttons-repeater"] = {
			"font-size" : generateCSSUnit( sizeMobile, sizeType ),
			"line-height" : generateCSSUnit( lineHeightMobile, lineHeightType ),
		}

		tablet_selectors[" .uagb-buttons-repeater"] = {
			"font-size" : generateCSSUnit( sizeTablet, sizeType ),
			"line-height" : generateCSSUnit( lineHeightTablet, lineHeightType ),
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
