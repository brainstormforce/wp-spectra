/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function RestMenuStyle( props ) {
	const {
		classMigrate,
		headingAlign,
		
		titleSpace,
		imgVrPadding,
		imgHrPadding,
		rowGap,
		columnGap,		
		contentVrPadding,
		contentHrPadding,
	} = props.attributes

	

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
		
		// Prefix Style
		" .uagb-rm__title": {			
			"margin-bottom": generateCSSUnit( titleSpace, "px" ),
		},
		" .uagb-rm__content": {
			"text-align" : headingAlign,
			"padding-left" : generateCSSUnit( contentHrPadding, "px" ),
			"padding-right" : generateCSSUnit( contentHrPadding, "px" ),
			"padding-top" : generateCSSUnit( contentVrPadding, "px" ),
			"padding-bottom" : generateCSSUnit( contentVrPadding, "px" ),
		},
		
		
	}


	var styling_css = ""
	var id = `#wpwrap .uagb-block-${ props.clientId.substr( 0, 8 ) }`

	styling_css = generateCSS( selectors, id )

	return styling_css

}

export default RestMenuStyle
