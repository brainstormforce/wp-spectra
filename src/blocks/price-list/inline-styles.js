/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function RestMenuStyle( props ) {
	const {
		headingAlign,
		priceColor,
		descColor,
		titleColor,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeTablet,
		titleFontSizeMobile,
		priceFontSize,
		priceFontSizeType,
		priceFontSizeTablet,
		priceFontSizeMobile,
		descFontSize,
		descFontSizeType,
		descFontSizeTablet,
		descFontSizeMobile,
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
	var selectors = {}
	var clientId = "uagb-rm-"+props.clientId


	selectors[".uagb-rest_menu__wrap"] = {
		"padding-left" : columnGap/2+"px",
		"padding-right" : columnGap/2+"px",
		"margin-bottom" : rowGap+"px",
	}

	selectors[".uagb-rest_menu__wrap .uagb-rm__image-content"] = {
		"padding-left" : imgHrPadding+"px",
		"padding-right" : imgHrPadding+"px",
		"padding-top" : imgVrPadding+"px",
		"padding-bottom" : imgVrPadding+"px",
	}

	// Image
	selectors[".uagb-rm__image img"] = {
		"width": imageWidth+"px",
		"max-width": imageWidth+"px",
	}

	var align = headingAlign
	if( "left" === align ){
    	align = "flex-start"
	}else if( "right" === align ){
    	align = "flex-end"
	}

	selectors[".uagb-rm__separator-parent"] ={
		"justify-content" : align,
	}

	selectors[".uagb-rm__content"] = {
		"text-align" : headingAlign,
		"padding-left" : contentHrPadding+"px",
		"padding-right" : contentHrPadding+"px",
		"padding-top" : contentVrPadding+"px",
		"padding-bottom" : contentVrPadding+"px",
	}

	// Prefix Style
	selectors[".uagb-rm__title"] = {
		"font-size" : titleFontSize+titleFontSizeType,
		"color": titleColor,
		"margin-bottom": titleSpace+"px",
	}

	// Title Style
	selectors[".uagb-rm__price"] = {
		"font-size" : priceFontSize+priceFontSizeType,
		"color": priceColor,
	}

	// Description Style
	selectors[".uagb-rm__desc"] = {
		"font-size" : descFontSize+descFontSizeType,
		"color": descColor,
		"margin-bottom": descSpace+"px",
	}

	if ( seperatorStyle != "none" ) {
		selectors[".uagb-rest_menu__wrap .uagb-rm__separator"] = {
			"border-top-color": seperatorColor,
			"border-top-style":seperatorStyle,
			"border-top-width":seperatorThickness + "px",
			"width":seperatorWidth + "%",
		}
	}

	selectors[".uagb-rest_menu__wrap.uagb-rm__desk-column-"+columns+":nth-child("+columns+"n+1)"] = {
		"margin-left": "0%",
		"clear":"left",
	}

	tablet_selectors = {
		".uagb-rm__title" : {
			"font-size" : titleFontSizeTablet + titleFontSizeType
		},
		".uagb-rm__desc" : {
			"font-size" : descFontSizeTablet + descFontSizeType
		},
		".uagb-rm__price" : {
			"font-size" : priceFontSizeTablet + priceFontSizeType
		}
	}

	mobile_selectors = {
		".uagb-rm__title" : {
			"font-size" : titleFontSizeMobile + titleFontSizeType
		},
		".uagb-rm__desc" : {
			"font-size" : descFontSizeMobile + descFontSizeType
		},
		".uagb-rm__price" : {
			"font-size" : priceFontSizeMobile + priceFontSizeType
		}
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += "#wpwrap #"+clientId+" "+i + " { "


		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += "@media only screen and (max-width: 976px) {"

	for( var i in tablet_selectors ) {

		styling_css += "#wpwrap #"+clientId+" "+i + " { "

		var sel = tablet_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += " }"

	styling_css += "@media only screen and (max-width: 767px) {"

	for( var i in mobile_selectors ) {

		styling_css += "#wpwrap #"+clientId+" "+i + " { "

		var sel = mobile_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += " }"

	return styling_css

}

export default RestMenuStyle
