/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function TestimonialStyle( props ) {
	const {
		headingAlign,
		companyColor,
		descColor,
		authorColor,
		nameFontSize,
		companyFontSize,
		descFontSize,
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

	var selectors = {}

	selectors[".uagb-testimonial__wrap"] = {
		"padding-left" : columnGap/2+"px",
		"padding-right" : columnGap/2+"px",                                
		"margin-bottom" : rowGap+"px",
	} 
            
	selectors[".uagb-testimonial__wrap .uagb-tm__image-content"] = {
		"padding-left" : imgHrPadding+"px",
		"padding-right" : imgHrPadding+"px",                                
		"padding-top" : imgVrPadding+"px",
		"padding-bottom" : imgVrPadding+"px",
	} 

	selectors[".uagb-tm__image-position-top .uagb-tm__image-content"] = {
		"justify-content" : img_align,
	} 

	// Image
	selectors[".uagb-tm__image img"] = {
		"width": imageWidth+"px",
		"max-width": imageWidth+"px",
	} 
            
	selectors[".uagb-tm__content"] = {                    
		"text-align" : headingAlign, 
		"padding" : contentPadding+"px",                  
	}                       

	// Prefix Style
	selectors[".uagb-tm__author-name"] = {
		"font-size" : nameFontSize+"px",
		"color": authorColor,
		"margin-bottom": nameSpace+"px",
	}

	// Title Style
	selectors[".uagb-tm__company"] = {
		"font-size" : companyFontSize+"px",
		"color": companyColor,
	}

	// Description Style
	selectors[".uagb-tm__desc"] = {
		"font-size" : descFontSize+"px",
		"color": descColor,
		"margin-bottom": descSpace+"px",
	}     

	selectors[".uagb-testimonial__wrap.uagb-tm__bg-type-color .uagb-tm__content"] = {
		"background-color": backgroundColor,
	}  

	var position = backgroundPosition.replace( "-", " " )
	selectors[".uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__content"] = {
		"background-image": ( backgroundImage ) ? `url(${ backgroundImage.url })` : null,
		"background-position":position,
		"background-repeat":backgroundRepeat,
		"background-size":backgroundSize,
	} 

	selectors[".uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__overlay"] = {
		"background-color":backgroundImageColor,
		"opacity":( typeof backgroundOpacity != "undefined" ) ? ( 100 - backgroundOpacity )/100 : 0.5,
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

	selectors["ul.slick-dots li button:before"] = {
		"color" : arrowColor,
	} 
	selectors["ul.slick-dots li.slick-active button:before"] = {
		"color" : arrowColor,
	} 

	selectors[".slick-arrow svg"] = {
		"fill" : arrowColor,
		"height":arrowSize + "px",              
		"width":arrowSize + "px",              
	} 	

	if( test_item_count === 1 || test_item_count === columns || arrowDots === "dots"){
		selectors[".uagb-slick-carousel.uagb-tm__arrow-outside"] = {
			"padding" : 0,
		} 
	}

	var styling_css = ""

	for( var i in selectors ) {
       
		if( i === ".uagb-slick-carousel.uagb-tm__arrow-outside"){
        	styling_css += "#wpwrap #"+clientId+i + " { "     
		}else{
        	styling_css += "#wpwrap #"+clientId+" "+i + " { " 
		}		       
            
		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}       

	return styling_css

}

export default TestimonialStyle
