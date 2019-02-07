/**
 * Returns Dynamic Generated CSS
 */

import inlineStyles from "./inline-styles"
import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function styling( props ) {

	const {
		backgroundType,
		backgroundVideoColor,
		backgroundImageColor,
		backgroundOpacity,
		backgroundColor,
		backgroundVideoOpacity,
		backgroundVideo,
		className,
		innerWidth,
		contentWidth,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		borderRadius,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,

		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		align
	} = props.attributes

	var inner_width = "100%"

	if( typeof contentWidth != "undefined" ) {
		if ( "boxed" != contentWidth ) {
			if ( typeof innerWidth != "undefined" ) {
				inner_width = innerWidth + "px"
			}
		}
	}

	var tablet_selectors = {}
	var mobile_selectors = {}

	var selectors = {
		".uagb-section__wrap" : inlineStyles( props ),
		" .uagb-section__video-wrap": {
			"opacity" : ( typeof backgroundVideoOpacity != "undefined" ) ? ( 100 - backgroundVideoOpacity )/100 : 0.5
		},
		" .uagb-section__inner-wrap": {
			"max-width" : inner_width
		}
	}

	selectors[" > .uagb-section__overlay"] = {}

	if ( "video" == backgroundType ) {
		selectors[" > .uagb-section__overlay"] = {
			"opacity" : 1,
			"background-color": backgroundVideoColor
		}
	} else if( "image" == backgroundType ) {
		selectors[" > .uagb-section__overlay"] = {
			"opacity" : ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : 0,
			"background-color": backgroundImageColor
		}
	} else if( "color" == backgroundType ) {
		selectors[" > .uagb-section__overlay"] = {
			"opacity" : ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : "",
			"background-color" : backgroundColor
		}
	} else if ( "gradient" === backgroundType ) {
		selectors[" > .uagb-section__overlay"]["background-color"] = "transparent"
		selectors[" > .uagb-section__overlay"]["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""

		if ( "linear" === gradientType ) {

			selectors[" > .uagb-section__overlay"]["background-image"] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		} else {

			selectors[" > .uagb-section__overlay"]["background-image"] = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		}
	}

	selectors[" > .uagb-section__overlay"]["border-radius"] = borderRadius + "px"

	tablet_selectors = {
		".uagb-section__wrap" : {
			"padding-top": topPaddingTablet + "px",
			"padding-bottom": bottomPaddingTablet + "px",
			"padding-left": leftPaddingTablet + "px",
			"padding-right": rightPaddingTablet + "px",
		}
	}

	mobile_selectors = {
		".uagb-section__wrap" : {
			"padding-top": topPaddingMobile + "px",
			"padding-bottom": bottomPaddingMobile + "px",
			"padding-left": leftPaddingMobile + "px",
			"padding-right": rightPaddingMobile + "px",
		}
	}

	if ( "right" == align ) {
		mobile_selectors[".uagb-section__wrap"]["margin-top"] = topMarginMobile + "px"
		mobile_selectors[".uagb-section__wrap"]["margin-bottom"] =  bottomMarginMobile + "px"
		mobile_selectors[".uagb-section__wrap"]["margin-right"] =  rightMarginMobile + "px"

		tablet_selectors[".uagb-section__wrap"]["margin-top"] = topMarginTablet + "px"
		tablet_selectors[".uagb-section__wrap"]["margin-bottom"] =  bottomMarginTablet + "px"
		tablet_selectors[".uagb-section__wrap"]["margin-right"] =  rightMarginTablet + "px"
	} else if ( "left" == align ) {
		mobile_selectors[".uagb-section__wrap"]["margin-top"] = topMarginMobile + "px"
		mobile_selectors[".uagb-section__wrap"]["margin-bottom"] =  bottomMarginMobile + "px"
		mobile_selectors[".uagb-section__wrap"]["margin-left"] =  leftMarginMobile + "px"

		tablet_selectors[".uagb-section__wrap"]["margin-top"] = topMarginTablet + "px"
		tablet_selectors[".uagb-section__wrap"]["margin-bottom"] =  bottomMarginTablet + "px"
		tablet_selectors[".uagb-section__wrap"]["margin-left"] =  leftMarginTablet + "px"
	} else {
		mobile_selectors[".uagb-section__wrap"]["margin-top"] = topMarginMobile + "px"
		mobile_selectors[".uagb-section__wrap"]["margin-bottom"] =  bottomMarginMobile + "px"

		tablet_selectors[".uagb-section__wrap"]["margin-top"] = topMarginTablet + "px"
		tablet_selectors[".uagb-section__wrap"]["margin-bottom"] =  bottomMarginTablet + "px"
	}

	var styling_css = ""
	var id = `#uagb-section-${ props.clientId }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling
