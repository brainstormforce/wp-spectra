/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

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
			"padding-left" : columnGap/2+"px",
			"padding-right" : columnGap/2+"px",
			"margin-bottom" : rowGap+"px",
		},
		" .uagb-rest_menu__wrap .uagb-rm__image-content": {
			"padding-left" : imgHrPadding+"px",
			"padding-right" : imgHrPadding+"px",
			"padding-top" : imgVrPadding+"px",
			"padding-bottom" : imgVrPadding+"px",
		},
		// Image
		" .uagb-rm__image img": {
			"width": imageWidth+"px",
			"max-width": imageWidth+"px",
		},
		" .uagb-rm__separator-parent": {
			"justify-content" : align,
		},
		" .uagb-rm__content": {
			"text-align" : headingAlign,
			"padding-left" : contentHrPadding+"px",
			"padding-right" : contentHrPadding+"px",
			"padding-top" : contentVrPadding+"px",
			"padding-bottom" : contentVrPadding+"px",
		},
		// Prefix Style
		" .uagb-rm__title": {
			"font-size" : titleFontSize+titleFontSizeType,
			"color": titleColor,
			"margin-bottom": titleSpace+"px",
			"font-family": titleFontFamily,
			"font-weight": titleFontWeight,
			"line-height": titleLineHeight + titleLineHeightType,
		},
		// Title Style
		" .uagb-rm__price": {
			"font-size" : priceFontSize+priceFontSizeType,
			"font-family": priceFontFamily,
			"font-weight": priceFontWeight,
			"line-height": priceLineHeight + priceLineHeightType,
			"color": priceColor,
		},
		// Description Style
		" .uagb-rm__desc": {
			"font-size" : descFontSize+descFontSizeType,
			"font-family": descFontFamily,
			"font-weight": descFontWeight,
			"line-height": descLineHeight + descLineHeightType,
			"color": descColor,
			"margin-bottom": descSpace+"px",
		},
	}

	if ( seperatorStyle !== "none" ) {
		selectors[" .uagb-rest_menu__wrap .uagb-rm__separator"] = {
			"border-top-color": seperatorColor,
			"border-top-style":seperatorStyle,
			"border-top-width":seperatorThickness + "px",
			"width":seperatorWidth + "%",
		}
	}

	selectors[" .uagb-rest_menu__wrap.uagb-rm__desk-column-"+columns+":nth-child("+columns+"n+1)"] = {
		"margin-left": 0,
		"clear":"left",
	}

	tablet_selectors = {
		" .uagb-rm__title" : {
			"font-size" : titleFontSizeTablet + titleFontSizeType,
			"line-height": titleLineHeightTablet + titleLineHeightType,
		},
		" .uagb-rm__desc" : {
			"font-size" : descFontSizeTablet + descFontSizeType,
			"line-height": descLineHeightTablet + descLineHeightType,
		},
		" .uagb-rm__price" : {
			"font-size" : priceFontSizeTablet + priceFontSizeType,
			"line-height": priceLineHeightTablet + priceLineHeightType,
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
			"font-size" : titleFontSizeMobile + titleFontSizeType,
			"line-height": titleLineHeightMobile + titleLineHeightType,
		},
		" .uagb-rm__desc" : {
			"font-size" : descFontSizeMobile + descFontSizeType,
			"line-height": descLineHeightMobile + descLineHeightType,
		},
		" .uagb-rm__price" : {
			"font-size" : priceFontSizeMobile + priceFontSizeType,
			"line-height": priceLineHeightMobile + priceLineHeightType,
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
