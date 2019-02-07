/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

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
			"padding": bgSize + bgSizeType
		}

		mobile_selectors[" .uagb-ss-repeater-" + index + " a.uagb-ss__link"] = {
			"padding": bgSizeMobile + bgSizeType
		}

		tablet_selectors[" .uagb-ss-repeater-" + index + " a.uagb-ss__link"] = {
			"padding": bgSizeTablet + bgSizeType
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
		"margin-bottom" : gap + "px"
	}

	selectors[".uagb-social-share__layout-vertical .uagb-social-share__wrap"] = {
		 "flex-direction": "column"
	}

	selectors[".uagb-social-share__layout-vertical .uagb-ss__wrapper:last-child"] = {
		"margin-bottom" : 0
	}

	selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper"] = {
		"margin-left" : ( gap/2 ) + "px",
		"margin-right" : ( gap/2 ) + "px"
	}

	selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper:first-child"] = {
		"margin-left" : 0
	}

	selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper:last-child"] = {
		"margin-right" : 0
	}

	selectors[" .uagb-ss__wrapper"] = {
		"border-radius": borderRadius + "px"
	}

	selectors[" .uagb-ss__source-image"] = {
		"width": size + sizeType
	}

	selectors[" .uagb-ss__source-wrap"] = {
		"width": size + sizeType,
	}

	selectors[" .uagb-ss__source-wrap svg"] = {
		"width": size + sizeType,
		"height": size + sizeType,
	}

	selectors[" .uagb-ss__source-icon"] = {
		"width": size + sizeType,
		"height": size + sizeType,
		"font-size": size + sizeType,
		"line-height": size + sizeType
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
				"margin-bottom" : gap + "px"
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
				"margin-bottom" : gap + "px"
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
				"margin-bottom" : gap + "px"
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
		"width": sizeMobile + sizeType
	}

	mobile_selectors[" .uagb-ss__source-wrap"] = {
		"width": sizeMobile + sizeType,
		"height": sizeMobile + sizeType,
		"line-height": sizeMobile + sizeType
	}

	mobile_selectors[" .uagb-ss__source-wrap svg"] = {
		"width": sizeMobile + sizeType,
		"height": sizeMobile + sizeType,
	}

	mobile_selectors[" .uagb-ss__source-icon"] = {
		"width": sizeMobile + sizeType,
		"height": sizeMobile + sizeType,
		"font-size": sizeMobile + sizeType,
		"line-height": sizeMobile + sizeType
	}


	tablet_selectors[" .uagb-ss__source-image"] = {
		"width": sizeTablet + sizeType
	}

	tablet_selectors[" .uagb-ss__source-wrap"] = {
		"width": sizeTablet + sizeType,
		"height": sizeTablet + sizeType,
		"line-height": sizeTablet + sizeType
	}

	tablet_selectors[" .uagb-ss__source-wrap svg"] = {
		"width": sizeTablet + sizeType,
		"height": sizeTablet + sizeType,
	}

	tablet_selectors[" .uagb-ss__source-icon"] = {
		"width": sizeTablet + sizeType,
		"height": sizeTablet + sizeType,
		"font-size": sizeTablet + sizeType,
		"line-height": sizeTablet + sizeType
	}

	var styling_css = ""
	var id = `#uagb-social-share-${ props.clientId }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
