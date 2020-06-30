/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

function RestMenuStyle( props ) {
	const {
		classMigrate,
		headingAlign,
		
		titleFontSizeType,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleFontFamily,
		titleFontWeight,
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
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,

		descSpace,
		titleSpace,
		imageWidth,
		
		columns,
		tcolumns,
		mcolumns,
		
		
	} = props.attributes

	var tablet_selectors = {}
	var mobile_selectors = {}

	var align = headingAlign
	if( "left" === align ){
    	align = "flex-start"
	}else if( "right" === align ){
    	align = "flex-end"
	}

	var selectors = {
		
		// Image
		" .uagb-rm__image img": {
			"width": generateCSSUnit( imageWidth, "px" ),
			"max-width": generateCSSUnit( imageWidth, "px" ),
		},
		" .uagb-rm__separator-parent": {
			"justify-content" : align,
		},
		
		
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
	var id = `#wpwrap .uagb-block-${ props.clientId.substr( 0, 8 ) }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css

}

export default RestMenuStyle
