/**
 * Returns Dynamic Generated CSS
 */

import inlineStyles from "./inline-styles"
import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

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
		topHeightTablet,
		topHeightMobile,
		topWidth,
		bottomColor,
		bottomHeight,
		bottomHeightTablet,
		bottomHeightMobile,
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
			max_width = generateCSSUnit( width, "px" )
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
			"padding" : generateCSSUnit( columnGap, "px" )
		},
		" .uagb-columns__shape-top svg" : {
			width: "calc( " + topWidth + "% + 1.3px )",
			height: generateCSSUnit( topHeight, "px" )
		},
		" .uagb-columns__shape-top .uagb-columns__shape-fill" : {
			fill: topColor,
			opacity: ( typeof topDividerOpacity != "undefined" ) ? ( topDividerOpacity )/100 : ""
		},
		" .uagb-columns__shape-bottom svg" : {
			width: "calc( " + bottomWidth + "% + 1.3px )",
			height: generateCSSUnit( bottomHeight, "px" )
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

	selectors[" > .uagb-columns__overlay"]["border-radius"] = generateCSSUnit( borderRadius, "px" )

	tablet_selectors = {
		".uagb-columns__wrap" : {
			"padding-top": generateCSSUnit( topPaddingTablet, "px" ),
			"padding-bottom": generateCSSUnit( bottomPaddingTablet, "px" ),
			"padding-left": generateCSSUnit( leftPaddingTablet, "px" ),
			"padding-right": generateCSSUnit( rightPaddingTablet, "px" ),
			"margin-top": generateCSSUnit( topMarginTablet, "px" ),
			"margin-bottom": generateCSSUnit( bottomMarginTablet, "px" ),
		},
		" .uagb-columns__shape-top svg" : {
			height: generateCSSUnit( topHeightTablet, "px" )
		},
		" .uagb-columns__shape-bottom svg" : {
			height: generateCSSUnit( bottomHeightTablet, "px" )
		},
	}

	mobile_selectors = {
		".uagb-columns__wrap" : {
			"padding-top": generateCSSUnit( topPaddingMobile, "px" ),
			"padding-bottom": generateCSSUnit( bottomPaddingMobile, "px" ),
			"padding-left": generateCSSUnit( leftPaddingMobile, "px" ),
			"padding-right": generateCSSUnit( rightPaddingMobile, "px" ),
			"margin-top": generateCSSUnit( topMarginMobile, "px" ),
			"margin-bottom": generateCSSUnit( bottomMarginMobile, "px" ),
		},
		" .uagb-columns__shape-top svg" : {
			height: generateCSSUnit( topHeightMobile, "px" )
		},
		" .uagb-columns__shape-bottom svg" : {
			height: generateCSSUnit( bottomHeightMobile, "px" )
		},
	}

	var styling_css = ""

	styling_css = generateCSS( selectors, `#uagb-columns-${ props.clientId }` )

	styling_css += generateCSS( tablet_selectors, `#uagb-columns-${ props.clientId }`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `#uagb-columns-${ props.clientId }`, true, "mobile" )

	return styling_css
}

export default styling
