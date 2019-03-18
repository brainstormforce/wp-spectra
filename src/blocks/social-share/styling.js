/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

	const {
		align,
		className,
		social_count,
		socials,
		gap,
		social_layout,
		borderRadius,
		size,
		sizeType,
		sizeMobile,
		sizeTablet,
		bgSize,
		bgSizeType,
		bgSizeMobile,
		bgSizeTablet,
		stack
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	socials.map( ( social, index ) => {

		if ( social_count <= index ) {
			return
		}

		selectors[" .uagb-ss-repeater-" + index + " a.uagb-ss__link"] = {
			"color" : social.icon_color,
			"padding": generateCSSUnit( bgSize, bgSizeType )
		}

		mobile_selectors[" .uagb-ss-repeater-" + index + " a.uagb-ss__link"] = {
			"padding": generateCSSUnit( bgSizeMobile, bgSizeType )
		}

		tablet_selectors[" .uagb-ss-repeater-" + index + " a.uagb-ss__link"] = {
			"padding": generateCSSUnit( bgSizeTablet, bgSizeType )
		}

		selectors[" .uagb-ss-repeater-" + index + " a.uagb-ss__link svg"] = {
			"fill" : social.icon_color,
		}

		selectors[" .uagb-ss-repeater-" + index + ":hover a.uagb-ss__link"] = {
			"color" : social.icon_hover_color
		}

		selectors[" .uagb-ss-repeater-" + index + ":hover a.uagb-ss__link svg"] = {
			"fill" : social.icon_hover_color
		}

		selectors[" .uagb-ss-repeater-" + index] = {
			"background" : social.icon_bg_color
		}

		selectors[" .uagb-ss-repeater-" + index + ":hover"] = {
			"background" : social.icon_bg_hover_color
		}
	})

	selectors[".uagb-social-share__layout-vertical .uagb-ss__wrapper"] = {
		"margin-left" : 0,
		"margin-right" : 0,
		"margin-bottom" : generateCSSUnit( gap, "px" )
	}

	selectors[".uagb-social-share__layout-vertical .uagb-social-share__wrap"] = {
		 "flex-direction": "column"
	}

	selectors[".uagb-social-share__layout-vertical .uagb-ss__wrapper:last-child"] = {
		"margin-bottom" : 0
	}

	selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper"] = {
		"margin-left" : generateCSSUnit( ( gap/2 ), "px" ),
		"margin-right" : generateCSSUnit( ( gap/2 ), "px" )
	}

	selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper:first-child"] = {
		"margin-left" : 0
	}

	selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper:last-child"] = {
		"margin-right" : 0
	}

	selectors[" .uagb-ss__wrapper"] = {
		"border-radius": generateCSSUnit( borderRadius, "px" )
	}

	selectors[" .uagb-ss__source-image"] = {
		"width": generateCSSUnit( size, sizeType )
	}

	selectors[" .uagb-ss__source-wrap"] = {
		"width": generateCSSUnit( size, sizeType ),
	}

	selectors[" .uagb-ss__source-wrap svg"] = {
		"width": generateCSSUnit( size, sizeType ),
		"height": generateCSSUnit( size, sizeType ),
	}

	selectors[" .uagb-ss__source-icon"] = {
		"width": generateCSSUnit( size, sizeType ),
		"height": generateCSSUnit( size, sizeType ),
		"font-size": generateCSSUnit( size, sizeType ),
		"line-height": generateCSSUnit( size, sizeType )
	}

	var alignment = ( align == "left" ) ? "flex-start" : ( ( align == "right" ) ? "flex-end" : "center" )

	selectors[" .uagb-social-share__wrap"] = {
		"justify-content" : alignment,
		"-webkit-box-pack": alignment,
		"-ms-flex-pack": alignment,
		"justify-content": alignment,
		"-webkit-box-align": alignment,
		"-ms-flex-align": alignment,
		"align-items": alignment,
	}

	if ( "horizontal" == social_layout ) {

		if ( "desktop" == stack ) {

			selectors[" .uagb-ss__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}

			selectors[" .uagb-social-share__wrap"] = {
				 "flex-direction": "column"
			}

			selectors[" .uagb-ss__wrapper:last-child"] = {
				"margin-bottom" : 0
			}


		} else if ( "tablet" == stack ) {

			tablet_selectors[" .uagb-ss__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}

			tablet_selectors[" .uagb-social-share__wrap"] = {
				"flex-direction": "column"
			}

			tablet_selectors[" .uagb-ss__wrapper:last-child"] = {
				"margin-bottom" : 0
			}

			tablet_selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0
			}

		} else if ( "mobile" == stack ) {

			mobile_selectors[" .uagb-ss__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0,
				"margin-bottom" : generateCSSUnit( gap, "px" )
			}

			mobile_selectors[" .uagb-social-share__wrap"] = {
				"flex-direction": "column"
			}

			mobile_selectors[" .uagb-ss__wrapper:last-child"] = {
				"margin-bottom" : 0
			}

			mobile_selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper"] = {
				"margin-left" : 0,
				"margin-right" : 0
			}

		}
	}

	mobile_selectors[" .uagb-ss__source-image"] = {
		"width": generateCSSUnit( sizeMobile, sizeType )
	}

	mobile_selectors[" .uagb-ss__source-wrap"] = {
		"width": generateCSSUnit( sizeMobile, sizeType ),
		"height": generateCSSUnit( sizeMobile, sizeType ),
		"line-height": generateCSSUnit( sizeMobile, sizeType )
	}

	mobile_selectors[" .uagb-ss__source-wrap svg"] = {
		"width": generateCSSUnit( sizeMobile, sizeType ),
		"height": generateCSSUnit( sizeMobile, sizeType ),
	}

	mobile_selectors[" .uagb-ss__source-icon"] = {
		"width": generateCSSUnit( sizeMobile, sizeType ),
		"height": generateCSSUnit( sizeMobile, sizeType ),
		"font-size": generateCSSUnit( sizeMobile, sizeType ),
		"line-height": generateCSSUnit( sizeMobile, sizeType )
	}


	tablet_selectors[" .uagb-ss__source-image"] = {
		"width": generateCSSUnit( sizeTablet, sizeType )
	}

	tablet_selectors[" .uagb-ss__source-wrap"] = {
		"width": generateCSSUnit( sizeTablet, sizeType ),
		"height": generateCSSUnit( sizeTablet, sizeType ),
		"line-height": generateCSSUnit( sizeTablet, sizeType )
	}

	tablet_selectors[" .uagb-ss__source-wrap svg"] = {
		"width": generateCSSUnit( sizeTablet, sizeType ),
		"height": generateCSSUnit( sizeTablet, sizeType ),
	}

	tablet_selectors[" .uagb-ss__source-icon"] = {
		"width": generateCSSUnit( sizeTablet, sizeType ),
		"height": generateCSSUnit( sizeTablet, sizeType ),
		"font-size": generateCSSUnit( sizeTablet, sizeType ),
		"line-height": generateCSSUnit( sizeTablet, sizeType )
	}

	var styling_css = ""
	var id = `#uagb-social-share-${ props.clientId }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
