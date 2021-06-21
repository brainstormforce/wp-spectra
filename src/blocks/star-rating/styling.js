/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "@Controls/generateCSS"
import generateCSSUnit from "@Controls/generateCSSUnit"

function styling( props ) {

	const {
		rating,
		size,
		align,
		gap,
		unmarkedColor,
		color,
		fontFamily,
		fontWeight,
		fontSizeType,
		fontSize,
		fontSizeMobile,
		fontSizeTablet,
		lineHeightType,
		lineHeight,
		lineHeightMobile,
		lineHeightTablet,
		titleColor,
		titleGap
	} = props.attributes

	let alignment = 'flex-start';
	if ( align ) {
		if ( 'right' === align ) 
			alignment = 'flex-end';
		if ( 'center' === align ) 
			alignment = 'center';
		if ( 'full' === align ) 
			alignment = 'space-between';
	}
	
	var selectors = {
		" .uag-star-rating": {
			"font-size": generateCSSUnit( size, 'px' ),
		},
		" .uag-star-rating > i": {
			"margin-right": generateCSSUnit( gap, 'px' ),
			"color": unmarkedColor
		},
		" .uag-star-rating__title.block-editor-rich-text__editable": {
			"font-size": generateCSSUnit( fontSize, fontSizeType ),
			"font-family": fontFamily,
			"font-weight": fontWeight,
			"line-height": generateCSSUnit(lineHeight,lineHeightType ),
			"color": titleColor,
			"margin-right": generateCSSUnit( titleGap, "px" ),
		},
		".uag-star-rating__wrapper" : {
			'justify-content': alignment
		}
	}

	selectors[" .uag-star:nth-child(-n+" + rating + ")"] = {
		"color": color,
	}

	var tablet_selectors = {
		" .uag-star-rating__title.block-editor-rich-text__editable": {
			"font-size": generateCSSUnit( fontSizeTablet, fontSizeType ),
			"line-height": generateCSSUnit( lineHeightTablet, lineHeightType ),
		},
	}
	var mobile_selectors = {
		" .uag-star-rating__title.block-editor-rich-text__editable": {
			"font-size": generateCSSUnit( fontSizeMobile, fontSizeType ),
			"line-height": generateCSSUnit( lineHeightMobile, lineHeightType ),
		},
	}

	var base_selector = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`

	var styling_css = generateCSS( selectors, base_selector )

	styling_css += generateCSS( tablet_selectors, `${ base_selector }.uagb-editor-preview-mode-tablet`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `${ base_selector }.uagb-editor-preview-mode-mobile`, true, "mobile" )

	return styling_css
}

export default styling
