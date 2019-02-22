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
		borderRadius,
		contentWidth,
		width,
		columnGap,
		topColor,
		topHeight,
		topWidth,
		bottomColor,
		bottomHeight,
		bottomWidth,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginMobile,
		bottomMarginMobile,
		topMarginTablet,
		bottomMarginTablet,
		topDividerOpacity,
		bottomDividerOpacity
	} = props.attributes

	let max_width = "100%"

	if ( "custom" == contentWidth ) {
		if ( "" != width ) {
			max_width = width + "px"
		}
	}

	var tablet_selectors = {}
	var mobile_selectors = {}

	var selectors = {
		".uagb-columns__wrap" : inlineStyles( props ),
		" .uagb-columns__video-wrap": {
			"opacity" : ( typeof backgroundVideoOpacity != "undefined" ) ? ( 100 - backgroundVideoOpacity )/100 : 0.5
		},
		" > .uagb-columns__inner-wrap": {
			"max-width" : max_width
		},
		" .uagb-column__inner-wrap" : {
			"padding" : columnGap + "px"
		},
		" .uagb-columns__shape-top svg" : {
			width: "calc( " + topWidth + "% + 1.3px )",
			height: topHeight + "px"
		},
		" .uagb-columns__shape-top .uagb-columns__shape-fill" : {
			fill: topColor,
			opacity: ( typeof topDividerOpacity != "undefined" ) ? ( topDividerOpacity )/100 : ""
		},
		" .uagb-columns__shape-bottom svg" : {
			width: "calc( " + bottomWidth + "% + 1.3px )",
			height: bottomHeight + "px"
		},
		" .uagb-columns__shape-bottom .uagb-columns__shape-fill" : {
			fill: bottomColor,
			opacity: ( typeof bottomDividerOpacity != "undefined" ) ? ( bottomDividerOpacity )/100 : ""
		},
	}

	selectors[" > .uagb-columns__overlay"] = {}

	if ( "video" == backgroundType ) {
		selectors[" > .uagb-columns__overlay"] = {
			"opacity" : 1,
			"background-color": backgroundVideoColor
		}
	} else if( "image" == backgroundType ) {
		selectors[" > .uagb-columns__overlay"] = {
			"opacity" : ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : "",
			"background-color": backgroundImageColor
		}
	} else if( "color" == backgroundType ) {
		selectors[" > .uagb-columns__overlay"] = {
			"opacity" : ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : "",
			"background-color" : backgroundColor
		}
	} else if ( "gradient" === backgroundType ) {

		selectors[" > .uagb-columns__overlay"]["background-color"] = "transparent"
		selectors[" > .uagb-columns__overlay"]["opacity"] = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : ""

		if ( "linear" === gradientType ) {

			selectors[" > .uagb-columns__overlay"]["background-image"] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		} else {

			selectors[" > .uagb-columns__overlay"]["background-image"] = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		}
	}

	selectors[" > .uagb-columns__overlay"]["border-radius"] = borderRadius + "px"

	tablet_selectors = {
		".uagb-columns__wrap" : {
			"padding-top": topPaddingTablet + "px",
			"padding-bottom": bottomPaddingTablet + "px",
			"padding-left": leftPaddingTablet + "px",
			"padding-right": rightPaddingTablet + "px",
			"margin-top": topMarginTablet + "px",
			"margin-bottom": bottomMarginTablet + "px",
		}
	}

	mobile_selectors = {
		".uagb-columns__wrap" : {
			"padding-top": topPaddingMobile + "px",
			"padding-bottom": bottomPaddingMobile + "px",
			"padding-left": leftPaddingMobile + "px",
			"padding-right": rightPaddingMobile + "px",
			"margin-top": topMarginMobile + "px",
			"margin-bottom": bottomMarginMobile + "px",
		}
	}

	var styling_css = ""

	styling_css = generateCSS( selectors, `#uagb-columns-${ props.clientId }` )

	styling_css += generateCSS( tablet_selectors, `#uagb-columns-${ props.clientId }`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `#uagb-columns-${ props.clientId }`, true, "mobile" )

	return styling_css
}

export default styling
