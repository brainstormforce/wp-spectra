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
		priceFontSize,
		descFontSize,
		descSpace,
		block_id,
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

	if( props.clientId ){
		var clientId = "uagb-rm-"+props.clientId
	}else{
		var clientId = "uagb-rm-"+block_id
	}

	var selectors = {}

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
		"font-size" : titleFontSize+"px",
		"color": titleColor,
		"margin-bottom": titleSpace+"px",
	}

	// Title Style
	selectors[".uagb-rm__price"] = {
		"font-size" : priceFontSize+"px",
		"color": priceColor,
	}

	// Description Style
	selectors[".uagb-rm__desc"] = {
		"font-size" : descFontSize+"px",
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
        
	return styling_css

}

export default RestMenuStyle
