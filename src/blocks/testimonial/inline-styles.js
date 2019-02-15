/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function TestimonialStyle( props ) {
	const {
		headingAlign,
		companyColor,
		descColor,
		authorColor,
		nameFontSize,
		nameFontSizeType,
		nameFontSizeMobile,
		nameFontSizeTablet,
		companyFontSize,
		companyFontSizeType,
		companyFontSizeMobile,
		companyFontSizeTablet,
		descFontSize,
		descFontSizeType,
		descFontSizeMobile,
		descFontSizeTablet,
		descSpace,
		block_id,
		nameSpace,
		imgVrPadding,
		imgHrPadding,
		imageWidth,
		rowGap,
		columnGap,
		contentPadding,
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundSize,
		backgroundRepeat,
		backgroundImageColor,
		backgroundOpacity,
		borderStyle,
		borderWidth ,
		borderRadius,
		borderColor,
		arrowColor,
		test_item_count,
		columns,
		arrowDots,
		arrowSize
	} = props.attributes

	if( props.clientId ){
		var clientId = "uagb-testimonial-"+props.clientId
	}else{
		var clientId = "uagb-testimonial-"+block_id
	}

	var img_align = "center"

	if( headingAlign == "left" ){
		img_align = "flex-start"
	}else if( headingAlign == "right" ){
		img_align = "flex-end"
	}

	var position = backgroundPosition.replace( "-", " " )

	var selectors = {
		" .uagb-testimonial__wrap": {
			"padding-left" : columnGap/2+"px",
			"padding-right" : columnGap/2+"px",
			"margin-bottom" : rowGap+"px",
		},
		" .uagb-testimonial__wrap .uagb-tm__image-content": {
			"padding-left" : imgHrPadding+"px",
			"padding-right" : imgHrPadding+"px",
			"padding-top" : imgVrPadding+"px",
			"padding-bottom" : imgVrPadding+"px",
		},
		" .uagb-tm__image-position-top .uagb-tm__image-content": {
			"justify-content" : img_align,
		},
		// Image
		" .uagb-tm__image img": {
			"width": imageWidth+"px",
			"max-width": imageWidth+"px",
		},
		" .uagb-tm__content": {
			"text-align" : headingAlign,
			"padding" : contentPadding+"px",
		},
		// Prefix Style
		" .uagb-tm__author-name": {
			"font-size" : nameFontSize+nameFontSizeType,
			"color": authorColor,
			"margin-bottom": nameSpace+"px",
		},
		// Title Style
		" .uagb-tm__company": {
			"font-size" : companyFontSize+companyFontSizeType,
			"color": companyColor,
		},
		// Description Style
		" .uagb-tm__desc": {
			"font-size" : descFontSize+descFontSizeType,
			"color": descColor,
			"margin-bottom": descSpace+"px",
		},
		" .uagb-testimonial__wrap.uagb-tm__bg-type-color .uagb-tm__content": {
			"background-color": backgroundColor,
		},
		" .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__content": {
			"background-image": ( backgroundImage ) ? `url(${ backgroundImage.url })` : null,
			"background-position":position,
			"background-repeat":backgroundRepeat,
			"background-size":backgroundSize,
		},
		" .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__overlay": {
			"background-color":backgroundImageColor,
			"opacity":( typeof backgroundOpacity != "undefined" ) ? ( 100 - backgroundOpacity )/100 : 0.5,
		},
		" ul.slick-dots li button:before": {
			"color" : arrowColor,
		},
		" ul.slick-dots li.slick-active button:before": {
			"color" : arrowColor,
		},
		" .slick-arrow svg": {
			"fill" : arrowColor,
			"height":arrowSize + "px",
			"width":arrowSize + "px",
		},
	}

	if ( borderStyle != "none" ) {
		selectors[".uagb-testimonial__wrap .uagb-tm__content"] = {
			"border-color": borderColor,
			"border-style":borderStyle,
			"border-width":borderWidth + "px",
			"border-radius":borderRadius + "px",
		}
	}else{
		selectors[".uagb-testimonial__wrap .uagb-tm__content"] = {
			"border-radius":borderRadius + "px",
		}
	}

	if( test_item_count === 1 || test_item_count === columns || arrowDots === "dots"){
		selectors[".uagb-slick-carousel.uagb-tm__arrow-outside"] = {
			"padding" : 0,
		}
	}

	var mobile_selectors = {
		" .uagb-tm__desc": {
			"font-size" : descFontSizeMobile+descFontSizeType,
		},
		" .uagb-tm__company": {
			"font-size" : companyFontSizeMobile+companyFontSizeType,
		},
		" .uagb-tm__author-name": {
			"font-size" : nameFontSizeMobile+nameFontSizeType,
		},
	}

	var tablet_selectors = {
		" .uagb-tm__desc": {
			"font-size" : descFontSizeTablet+descFontSizeType,
		},
		" .uagb-tm__company": {
			"font-size" : companyFontSizeTablet+companyFontSizeType,
		},
		" .uagb-tm__author-name": {
			"font-size" : nameFontSizeTablet+nameFontSizeType,
		},
		" .uagb-tm__content": {
			"text-align" : "center",
		},
	}

	var styling_css = ""
	var id = `#wpwrap #${ clientId }`

	styling_css = generateCSS( selectors, id )
	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )
	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css

}

export default TestimonialStyle
