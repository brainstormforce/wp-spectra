/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		align,
		icon_count,
		icons,
		gap,
		inner_gap,
		icon_layout,
		size,
		sizeType,
		sizeTablet,
		sizeMobile,
		fontSize,
		fontSizeType,
		fontSizeMobile,
		fontSizeTablet,
		fontFamily,
		fontWeight,
		fontSubset,
		lineHeightType,
		lineHeight,
		lineHeightTablet,
		lineHeightMobile,
		loadGoogleFonts,
		stack,
		border,
		bgSize,
		borderRadius,
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}
	var alignment = ( align == "left" ) ? "flex-start" : ( ( align == "right" ) ? "flex-end" : "center" )

	selectors = {
		" .uagb-icon-list__source-wrap" : {
			"padding": generateCSSUnit( bgSize, "px" ),
			"border-radius": generateCSSUnit( borderRadius, "px" ),
			"border-style" : "solid",
			"border-width" : generateCSSUnit( border, "px" )
		},
		".uagb-icon-list__layout-vertical a.uagb-icon-list__wrapper" : {
			"margin-left" : 0,
			"margin-right" : 0,
			"margin-bottom" : generateCSSUnit( gap, "px" )
		},
		".uagb-icon-list__layout-vertical .uagb-icon-list__wrap" : {
			 "flex-direction": "column"
		},
		".uagb-icon-list__layout-vertical a.uagb-icon-list__wrapper:last-child" : {
			"margin-bottom" : 0
		},
		".uagb-icon-list__layout-horizontal a.uagb-icon-list__wrapper" : {
			"margin-left" : generateCSSUnit( ( gap/2 ), "px" ),
			"margin-right" : generateCSSUnit( ( gap/2 ), "px" )
		},
		".uagb-icon-list__layout-horizontal a.uagb-icon-list__wrapper:first-child" : {
			"margin-left" : 0
		},
		".uagb-icon-list__layout-horizontal a.uagb-icon-list__wrapper:last-child" : {
			"margin-right" : 0
		},
		" .uagb-icon-list__source-image" : {
			"width": generateCSSUnit( size, sizeType )
		},
		" .uagb-icon-list__source-icon" : {
			"width": generateCSSUnit( size, sizeType ),
			"height": generateCSSUnit( size, sizeType ),
			"font-size": generateCSSUnit( size, sizeType )
		},
		" .uagb-icon-list__source-icon svg" : {
			"width": generateCSSUnit( size, sizeType ),
			"height": generateCSSUnit( size, sizeType ),
		},
		" .uagb-icon-list__source-icon:before" : {
			"width": generateCSSUnit( size, sizeType ),
			"height": generateCSSUnit( size, sizeType ),
			"font-size": generateCSSUnit( size, sizeType )
		},
		" .uagb-icon-list__label-wrap" : {
			"text-align": align
		},
		" .uagb-icon-list__wrap" : {
			"justify-content" : alignment,
			"-webkit-box-pack": alignment,
			"-ms-flex-pack": alignment,
			"justify-content": alignment,
			"-webkit-box-align": alignment,
			"-ms-flex-align": alignment,
			"align-items": alignment,
		},
	}

	mobile_selectors = {
		" .uagb-icon-list__source-image": {
			"width": generateCSSUnit( sizeMobile, sizeType )
		},
		" .uagb-icon-list__source-icon": {
			"width": generateCSSUnit( sizeMobile, sizeType ),
			"height": generateCSSUnit( sizeMobile, sizeType ),
			"font-size": generateCSSUnit( sizeMobile, sizeType )
		},
		" .uagb-icon-list__source-icon svg": {
			"width": generateCSSUnit( sizeMobile, sizeType ),
			"height": generateCSSUnit( sizeMobile, sizeType ),
		},
		" .uagb-icon-list__source-icon:before": {
			"width": generateCSSUnit( sizeMobile, sizeType ),
			"height": generateCSSUnit( sizeMobile, sizeType ),
			"font-size": generateCSSUnit( sizeMobile, sizeType )
		},
	}

	tablet_selectors = {
		" .uagb-icon-list__source-image" : {
			"width": generateCSSUnit( sizeTablet, sizeType )
		},
		" .uagb-icon-list__source-icon" : {
			"width": generateCSSUnit( sizeTablet, sizeType ),
			"height": generateCSSUnit( sizeTablet, sizeType ),
			"font-size": generateCSSUnit( sizeTablet, sizeType )
		},
		" .uagb-icon-list__source-icon svg" : {
			"width": generateCSSUnit( sizeTablet, sizeType ),
			"height": generateCSSUnit( sizeTablet, sizeType ),
		},
		" .uagb-icon-list__source-icon:before" : {
			"width": generateCSSUnit( sizeTablet, sizeType ),
			"height": generateCSSUnit( sizeTablet, sizeType ),
			"font-size": generateCSSUnit( sizeTablet, sizeType )
		}
	}

	if ( "horizontal" == icon_layout ) {

		if ( "tablet" == stack ) {

			tablet_selectors[" .uagb-icon-list__wrap a.uagb-icon-list__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}

			tablet_selectors[" .uagb-icon-list__wrap"] = {
				"flex-direction": "column"
			}

			tablet_selectors[" .uagb-icon-list__wrap a.uagb-icon-list__wrapper:last-child"] = {
				"margin-bottom" : 0
			}

		} else if ( "mobile" == stack ) {

			mobile_selectors[" .uagb-icon-list__wrap a.uagb-icon-list__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}

			mobile_selectors[" .uagb-icon-list__wrap"] = {
				"flex-direction": "column"
			}

			mobile_selectors[" .uagb-icon-list__wrap a.uagb-icon-list__wrapper:last-child"] = {
				"margin-bottom" : 0
			}
		}
	}

	icons.map( ( icon, index ) => {

		if ( icon_count <= index ) {
			return
		}

		selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__source-icon"] = {
			"color" : icon.icon_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__source-icon svg"] = {
			"fill" : icon.icon_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + ":hover .uagb-icon-list__source-icon"] = {
			"color" : icon.icon_hover_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + ":hover .uagb-icon-list__source-icon svg"] = {
			"fill" : icon.icon_hover_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__label"] = {
			"color" : icon.label_color,
			"font-size" : generateCSSUnit( fontSize, fontSizeType ),
			"font-family": fontFamily,
			"font-weight": fontWeight,
			"line-height": generateCSSUnit( lineHeight, lineHeightType ),
		}

		mobile_selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__label"] = {
			"font-size" : generateCSSUnit( fontSizeMobile, fontSizeType ),
			"line-height": generateCSSUnit( lineHeightMobile, lineHeightType ),
		}

		tablet_selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__label"] = {
			"font-size" : generateCSSUnit( fontSizeTablet, fontSizeType ),
			"line-height": generateCSSUnit( lineHeightTablet, lineHeightType ),
		}

		selectors[" .uagb-icon-list-repeater-" + index + ":hover .uagb-icon-list__label"] = {
			"color" : icon.label_hover_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + " .uagb-icon-list__source-wrap"] = {
			"background" : icon.icon_bg_color,
			"border-color" : icon.icon_border_color
		}

		selectors[" .uagb-icon-list-repeater-" + index + ":hover .uagb-icon-list__source-wrap"] = {
			"background" : icon.icon_bg_hover_color,
			"border-color" : icon.icon_border_hover_color
		}
	})

	if ( "right" == align ) {
		selectors[":not(.uagb-icon-list__no-label) .uagb-icon-list__source-wrap"] = {
			"margin-left" : generateCSSUnit( inner_gap, "px" )
		}
		selectors[" .uagb-icon-list__content-wrap"] = {
			"flex-direction" : "row-reverse"
		}
	} else {
		selectors[":not(.uagb-icon-list__no-label) .uagb-icon-list__source-wrap"] = {
			"margin-right" : generateCSSUnit( inner_gap, "px" )
		}
	}

	var styling_css = ""
	var id = `#uagb-icon-list-${ props.clientId }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
