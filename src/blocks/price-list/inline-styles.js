/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function RestMenuStyle( props ) {
	const {
		headingAlign,
		priceColor,
		descColor,
		titleColor,
		titleFontSizeType,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleFontFamily,
		titleFontWeight,
		titleFontSubset,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,

		priceFontSizeType,
		priceFontSize,
		priceFontSizeTablet,
		priceFontSizeMobile,
		priceFontFamily,
		priceFontWeight,
		priceFontSubset,
		priceLineHeightType,
		priceLineHeight,
		priceLineHeightTablet,
		priceLineHeightMobile,

		descFontSizeType,
		descFontSize,
		descFontSizeTablet,
		descFontSizeMobile,
		descFontFamily,
		descFontWeight,
		descFontSubset,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,

		descSpace,
		titleSpace,
		imgVrPadding,
		imgHrPadding,
		imageWidth,
		rowGap,
		columnGap,
		columns,
		tcolumns,
		mcolumns,
		contentVrPadding,
		contentHrPadding,
		seperatorStyle,
		seperatorWidth,
		seperatorThickness,
		seperatorColor,
	} = props.attributes

	var tablet_selectors = {}
	var mobile_selectors = {}
	var clientId = "uagb-rm-"+props.clientId

	var align = headingAlign
	if( "left" === align ){
    	align = "flex-start"
	}else if( "right" === align ){
    	align = "flex-end"
	}

	var column_class = " .uagb-rest_menu__wrap.uagb-rm__desk-column-"+columns+":nth-child("+columns+"n+1)"

	var selectors = {
		" .uagb-rest_menu__wrap": {
			"padding-left" : generateCSSUnit( columnGap/2, "px" ),
			"padding-right" : generateCSSUnit( columnGap/2, "px" ),
			"margin-bottom" : generateCSSUnit( rowGap, "px" ),
		},
		" .uagb-rest_menu__wrap .uagb-rm__image-content": {
			"padding-left" : generateCSSUnit( imgHrPadding, "px" ),
			"padding-right" : generateCSSUnit( imgHrPadding, "px" ),
			"padding-top" : generateCSSUnit( imgVrPadding, "px" ),
			"padding-bottom" : generateCSSUnit( imgVrPadding, "px" ),
		},
		// Image
		" .uagb-rm__image img": {
			"width": generateCSSUnit( imageWidth, "px" ),
			"max-width": generateCSSUnit( imageWidth, "px" ),
		},
		" .uagb-rm__separator-parent": {
			"justify-content" : align,
		},
		" .uagb-rm__content": {
			"text-align" : headingAlign,
			"padding-left" : generateCSSUnit( contentHrPadding, "px" ),
			"padding-right" : generateCSSUnit( contentHrPadding, "px" ),
			"padding-top" : generateCSSUnit( contentVrPadding, "px" ),
			"padding-bottom" : generateCSSUnit( contentVrPadding, "px" ),
		},
		// Prefix Style
		" .uagb-rm__title": {
			"font-size" : generateCSSUnit( titleFontSize, titleFontSizeType ),
			"color": titleColor,
			"margin-bottom": generateCSSUnit( titleSpace, "px" ),
			"font-family": titleFontFamily,
			"font-weight": titleFontWeight,
			"line-height": generateCSSUnit( titleLineHeight, titleLineHeightType ),
		},
		// Title Style
		" .uagb-rm__price": {
			"font-size" : generateCSSUnit( priceFontSize, priceFontSizeType ),
			"font-family": priceFontFamily,
			"font-weight": priceFontWeight,
			"line-height": generateCSSUnit( priceLineHeight, priceLineHeightType ),
			"color": priceColor,
		},
		// Description Style
		" .uagb-rm__desc": {
			"font-size" : generateCSSUnit( descFontSize, descFontSizeType ),
			"font-family": descFontFamily,
			"font-weight": descFontWeight,
			"line-height": generateCSSUnit( descLineHeight, descLineHeightType ),
			"color": descColor,
			"margin-bottom": generateCSSUnit( descSpace, "px" ),
		},
	}

	if ( seperatorStyle !== "none" ) {
		selectors[" .uagb-rest_menu__wrap .uagb-rm__separator"] = {
			"border-top-color": seperatorColor,
			"border-top-style": seperatorStyle,
			"border-top-width": generateCSSUnit( seperatorThickness, "px" ),
			"width": generateCSSUnit( seperatorWidth, "%" ),
		}
	}

	selectors[" .uagb-rest_menu__wrap.uagb-rm__desk-column-"+columns+":nth-child("+columns+"n+1)"] = {
		"margin-left": 0,
		"clear":"left",
	}

	tablet_selectors = {
		" .uagb-rm__title" : {
			"font-size" : generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			"line-height": generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
		},
		" .uagb-rm__desc" : {
			"font-size" : generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			"line-height": generateCSSUnit( descLineHeightTablet, descLineHeightType ),
		},
		" .uagb-rm__price" : {
			"font-size" : generateCSSUnit( priceFontSizeTablet, priceFontSizeType ),
			"line-height": generateCSSUnit( priceLineHeightTablet, priceLineHeightType ),
		}
	}

	tablet_selectors[" .uagb-rest_menu__wrap.uagb-rm__desk-column-"+columns+":nth-child("+columns+"n+1)"] = {
		"margin-left": "unset",
		"clear":"unset",
	}

	tablet_selectors[" .uagb-rest_menu__wrap.uagb-rm__tablet-column-"+tcolumns+":nth-child("+tcolumns+"n+1)"] = {
		"margin-left": 0,
		"clear":"left",
	}

	mobile_selectors = {
		" .uagb-rm__title" : {
			"font-size" : generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
			"line-height": generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
		},
		" .uagb-rm__desc" : {
			"font-size" : generateCSSUnit( descFontSizeMobile, descFontSizeType ),
			"line-height": generateCSSUnit( descLineHeightMobile, descLineHeightType ),
		},
		" .uagb-rm__price" : {
			"font-size" : generateCSSUnit( priceFontSizeMobile, priceFontSizeType ),
			"line-height": generateCSSUnit( priceLineHeightMobile, priceLineHeightType ),
		}
	}

	mobile_selectors[" .uagb-rest_menu__wrap.uagb-rm__desk-column-"+columns+":nth-child("+columns+"n+1)"] = {
		"margin-left": "unset",
		"clear":"unset",
	}

	mobile_selectors[" .uagb-rest_menu__wrap.uagb-rm__mobile-column-"+mcolumns+":nth-child("+mcolumns+"n+1)"] = {
		"margin-left": 0,
		"clear":"left",
	}

	var styling_css = ""
	var id = `#wpwrap #${ clientId }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css

}

export default RestMenuStyle
