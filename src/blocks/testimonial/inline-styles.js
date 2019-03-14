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
		nameFontSizeType,
		nameFontSize,
		nameFontSizeTablet,
		nameFontSizeMobile,
		nameFontFamily,
		nameFontWeight,
		nameFontSubset,
		nameLineHeightType,
		nameLineHeight,
		nameLineHeightTablet,
		nameLineHeightMobile,
		companyFontSizeType,
		companyFontSize,
		companyFontSizeTablet,
		companyFontSizeMobile,
		companyFontFamily,
		companyFontWeight,
		companyFontSubset,
		companyLineHeightType,
		companyLineHeight,
		companyLineHeightTablet,
		companyLineHeightMobile,
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
		descLoadGoogleFonts,
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
			"font-family": nameFontFamily,
			"font-weight": nameFontWeight,
			"line-height": nameLineHeight + nameLineHeightType,
			"color": authorColor,
			"margin-bottom": nameSpace+"px",
		},
		// Title Style
		" .uagb-tm__company": {
			"font-size" : companyFontSize+companyFontSizeType,
			"font-family": companyFontFamily,
			"font-weight": companyFontWeight,
			"line-height": companyLineHeight + companyLineHeightType,
			"color": companyColor,
		},
		// Description Style
		" .uagb-tm__desc": {
			"font-size" : descFontSize+descFontSizeType,
			"font-family":descFontFamily,
			"font-weight":descFontWeight,
			"line-height":descLineHeight +descLineHeightType,
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

	if( arrowDots === "dots"){
		selectors[".uagb-slick-carousel.uagb-tm__arrow-outside"] = {
			"padding" : "0 0 35px 0",
		}
	}

	if( test_item_count === 1 || test_item_count === columns ){
		selectors[".uagb-slick-carousel.uagb-tm__arrow-outside"] = {
			"padding" : "0",
		}
	}

	var mobile_selectors = {
		" .uagb-tm__desc": {
			"font-size" : descFontSizeMobile+descFontSizeType,
			"line-height": descLineHeightMobile +descLineHeightType,
		},
		" .uagb-tm__company": {
			"font-size" : companyFontSizeMobile+companyFontSizeType,
			"line-height": companyLineHeightMobile +companyLineHeightType,
		},
		" .uagb-tm__author-name": {
			"font-size" : nameFontSizeMobile+nameFontSizeType,
			"line-height": nameLineHeightMobile +nameLineHeightType,
		},
	}

	var tablet_selectors = {
		" .uagb-tm__desc": {
			"font-size" : descFontSizeTablet+descFontSizeType,
			"line-height": descLineHeightTablet +descLineHeightType,
		},
		" .uagb-tm__company": {
			"font-size" : companyFontSizeTablet+companyFontSizeType,
			"line-height": companyLineHeightTablet +companyLineHeightType,
		},
		" .uagb-tm__author-name": {
			"font-size" : nameFontSizeTablet+nameFontSizeType,
			"line-height": nameLineHeightTablet +nameLineHeightType,
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
