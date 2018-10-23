/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function InfoBoxStyle( props ) {
	const {
		headingAlign,
		headingColor,
		subHeadingColor,
		prefixColor,
		prefixFontSize,
		headFontSize,
		subHeadFontSize,
		separatorWidth,
		separatorHeight,
		headSpace,
		separatorSpace,
		subHeadSpace,
		icon,
		iconColor,
		iconSize,
		iconRotate,
		iconimgPosition,
		block_id,
		iconHover,
		iconBgHover,
		iconimgBorderHover,
		iconimgBorder,
		iconimgBg,
		iconimgBorderstyle,
		iconimgBorderWidth,
		iconimgBorderRadius, 
		iconimgbgSize,
		seperatorStyle,
		seperatorWidth,
		seperatorColor,
		seperatorThickness,
		ctaLinkColor,
		ctaFontSize,   
		ctaBtnSize,
		ctaBtnLinkColor,
		ctaBgColor,
		ctaBtnPadding,
		ctaBorderStyle,
		ctaBorderColor,
		ctaBorderWidth,
		ctaBorderRadius,
		prefixSpace,
		iconLeftMargin,
		iconRightMargin,
		iconTopMargin,
		iconBottomMargin,            
		imageSize,  
		imageWidth,
		backgroundType,
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundSize,
		backgroundRepeat,
		backgroundOpacity,
		gradientColor1,
		gradientColor2,
		gradientType,
		gradientLocation1,
		gradientLocation2,
		gradientDirection,
		gradientAngle,
		blockPadding,
		blockMargin,
		enableBorder,
		borderstyle,
		borderWidth,
		borderRadius,
		borderColor
	} = props.attributes        

	if( props.clientId ){
		var clientId = "uagb-"+props.clientId
	}else{
		var clientId = "uagb-"+block_id
	}

	var selectors = {}

	// Icon css
	selectors[".uagb-icon"] = {
		"height" : iconSize+"px",
		"width" : iconSize+"px",
		"line-height" : iconSize+"px",                    
	}

	selectors[".uagb-icon > span"] = {
		"font-size" : iconSize+"px",
		"height": iconSize+"px",
		"color": iconColor,
		"width": iconSize+"px",
		"line-height": iconSize + "px",                    
		"transform": "rotate("+iconRotate +"deg)",                                       
	}

	selectors[".uagb-icon:hover > span"] = {
		"color" : iconHover,                                       
	}
                    
	selectors[".uagb-imgicon-style-circle .uagb-icon"] = {                   
		"padding" : iconimgbgSize+"px",
		"background" : iconimgBg,
		"display" : "inline-block",
		"box-sizing" : "content-box",
	}

	selectors[".uagb-imgicon-style-circle .uagb-icon:hover"] = {
		"background" : iconBgHover,                                       
	}

	selectors[".uagb-imgicon-style-square .uagb-icon"] = {                   
		"padding" : iconimgbgSize+"px",
		"background" : iconimgBg,
		"display" : "inline-block",
		"box-sizing" : "content-box",
	}

	selectors[".uagb-imgicon-style-square .uagb-icon:hover"] = {
		"background" : iconBgHover,                                       
	}

	selectors[".uagb-imgicon-style-custom .uagb-icon"] = {                   
		"padding" : iconimgbgSize+"px",
		"background" : iconimgBg,
		"display" : "inline-block",
		"box-sizing" : "content-box",
		"border-style" : iconimgBorderstyle,
		"border-width" : iconimgBorderWidth+"px",
		"border-radius" : iconimgBorderRadius+"px",
		"border-color" : iconimgBorder,
		"box-sizing" : "content-box",
	}

	selectors[".uagb-imgicon-style-custom .uagb-icon:hover"] = {
		"background" : iconBgHover,      
		"border-color" : iconimgBorderHover,                                 
	}

	selectors[".uagb-infobox__content-wrap .uagb-imgicon-wrap"] = {
		"margin-left" : iconLeftMargin+"px",
		"margin-right" : iconRightMargin+"px",                                
		"margin-top" : iconTopMargin+"px",
		"margin-bottom" : iconBottomMargin+"px",
	} 

	// Image
	selectors[".uagb-image-content img"] = {
		"width": imageWidth+"px",
	} 

	selectors[".uagb-imgicon-style-circle .uagb-image-content img"] = {                    
		//"padding" : iconimgbgSize+"px",
		//"background" : iconimgBg,
		"display" : "inline-block",
		"box-sizing" : "content-box",                    
	}

	selectors[".uagb-imgicon-style-circle .uagb-image-content img:hover"] = {
		"background" : iconBgHover,                                       
	}

	selectors[".uagb-imgicon-style-square .uagb-image-content img"] = {                    
		//"padding" : iconimgbgSize+"px",
		//"background" : iconimgBg,
		"display" : "inline-block",
		"box-sizing" : "content-box",                    
	}

	selectors[".uagb-imgicon-style-square .uagb-image-content img:hover"] = {
		//"background" : iconBgHover,                                       
	}

	selectors[".uagb-imgicon-style-custom .uagb-image-content img"] = {                    
		//"padding" : iconimgbgSize+"px",
		//"background" : iconimgBg,
		"display" : "inline-block",
		"box-sizing" : "content-box",
		"border-style" : iconimgBorderstyle,
		"border-width" : iconimgBorderWidth+"px",
		"border-radius" : iconimgBorderRadius+"px",
		"border-color" : iconimgBorder,
		"box-sizing" : "content-box",                    
	}

	selectors[".uagb-imgicon-style-custom .uagb-image-content img:hover"] = {
		//"background" : iconBgHover,  
		"border-color" : iconimgBorderHover,                                     
	}

	selectors[".uagb-image-content .components-button svg"] = {
		"width": imageWidth+"px",
	} 

	selectors[".uagb-imgicon-style-circle .components-button svg"] = {                    
		//"padding" : iconimgbgSize+"px",
		//"background" : iconimgBg,
		"display" : "inline-block",
		"box-sizing" : "content-box",  
		"margin-left" : iconLeftMargin+"px",
		"margin-right" : iconRightMargin+"px",                                
		"margin-top" : iconTopMargin+"px",
		"margin-bottom" : iconBottomMargin+"px",                  
	}

	selectors[".uagb-imgicon-style-square .components-button svg"] = {                    
		//"padding" : iconimgbgSize+"px",
		//"background" : iconimgBg,
		"display" : "inline-block",
		"box-sizing" : "content-box",    
		"margin-left" : iconLeftMargin+"px",
		"margin-right" : iconRightMargin+"px",                                
		"margin-top" : iconTopMargin+"px",
		"margin-bottom" : iconBottomMargin+"px",                
	}

	selectors[".uagb-imgicon-style-custom .components-button svg"] = {                    
		//"padding" : iconimgbgSize+"px",
		//"background" : iconimgBg,
		"display" : "inline-block",
		"box-sizing" : "content-box",
		"border-style" : iconimgBorderstyle,
		"border-width" : iconimgBorderWidth+"px",
		"border-radius" : iconimgBorderRadius+"px",
		"border-color" : iconimgBorder,
		"box-sizing" : "content-box",   
		"margin-left" : iconLeftMargin+"px",
		"margin-right" : iconRightMargin+"px",                                
		"margin-top" : iconTopMargin+"px",
		"margin-bottom" : iconBottomMargin+"px",                 
	}
            

	if( iconimgPosition == "above-title" ||  iconimgPosition == "below-title" ){
		selectors[".uagb-infobox__content-wrap"] = {                    
			"text-align" : headingAlign,                   
		}
	}

	// CTA style 
	selectors[".uagb-infobox-cta-link a"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaLinkColor,
	}

	selectors[".uagb-infobox-cta-link span"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaLinkColor,
	}

	selectors[".uagb-button-wrapper .uagb-infobox-cta-link span"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaBtnLinkColor,
	}

	selectors[".uagb-button-wrapper .uagb-infobox-cta-link"] = {
		"font-size" : ctaFontSize+"px",
		"color": ctaBtnLinkColor,
		"background-color": ctaBgColor,
		"border-style": ctaBorderStyle,
		"border-color": ctaBorderColor,
		"border-radius": ctaBorderRadius + "px",
		"border-width": ctaBorderWidth + "px",
		"padding": ctaBtnPadding + "px",
	}

	// Prefix Style
	selectors[".editor-rich-text .uagb-infobox-title-prefix"] = {
		"font-size" : prefixFontSize+"px",
		"color": prefixColor,
		"margin-bottom": prefixSpace+"px",
	}

	// Title Style
	selectors[".editor-rich-text .uagb-infobox-title"] = {
		"font-size" : headFontSize+"px",
		"color": headingColor,
		"margin-bottom": headSpace+"px",
	}

	// Description Style
	selectors[".editor-rich-text .uagb-infobox-desc"] = {
		"font-size" : subHeadFontSize+"px",
		"color": subHeadingColor,
		"margin-bottom": subHeadSpace+"px",
	}

	// Seperator
	selectors[".uagb-separator"] = {
		"width" : seperatorWidth+"%",
		"border-top-width" : seperatorThickness+"px",
		"border-top-color": seperatorColor,
		"border-top-style": seperatorStyle,
	}

	var opacity = ( typeof backgroundOpacity != "undefined" ) ? backgroundOpacity/100 : 0
	// Background           
	if( backgroundType !== "gradient" || backgroundType === "image" ){
		selectors[".uagb-infobox__content-wrap.uagb-infobox"] = {
			"background-color": backgroundColor,
			"opacity":opacity,
			"margin":  ( typeof blockMargin != "undefined" ) ? blockMargin+"px": "inherit",
		}                
	}

	if( backgroundType === "image" ){
		var position = backgroundPosition.replace( "-", " " )
		selectors[".uagb-infobox__content-wrap.uagb-infobox"] = {
			"background-image": ( backgroundImage ) ? `url(${ backgroundImage.url })` : null,
			"background-size" : backgroundSize,
			"background-repeat" : backgroundRepeat,                    
			"background-position" : position,
			"margin":  ( typeof blockMargin != "undefined" ) ? blockMargin+"px": "inherit",
		}

		selectors[".uagb-infobox-overlay"] = {
			"background-color": backgroundColor,
			"opacity":opacity,
		}  
	}else if ( "gradient" === backgroundType ) {  
		let grad_bg_color =""
		let gd_position = gradientDirection.replace( "_", " " )
		if ( "linear" === gradientType ) {  
			gd_position = gd_position.replace( "center", "" )  

			if( gd_position === " center" ){
				gd_position = "top"
			}
			grad_bg_color = `linear-gradient( to ${ gd_position }, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		} else {
			grad_bg_color = `radial-gradient( at ${ gd_position }, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
		}

		selectors[".uagb-infobox__content-wrap.uagb-infobox"] = {
			"background" :grad_bg_color,
			"margin":  ( typeof blockMargin != "undefined" ) ? blockMargin+"px": "inherit",
		}
		selectors[".uagb-infobox-overlay"] = {
			"opacity":opacity,
		}   
	}

	if( enableBorder ){
		selectors[".uagb-infobox__content-wrap.uagb-infobox-enable-border"] = {
			"border-color" : ( typeof borderColor != "undefined" ) ? borderColor: "inherit",
			"border-style" : ( typeof borderstyle != "undefined" ) ? borderstyle: "inherit",
			"border-width" : ( typeof borderWidth != "undefined" ) ? borderWidth+"px": "inherit",
			"border-radius" : ( typeof borderRadius != "undefined" ) ? borderRadius+"px": "inherit",
		}           
	}else{
		selectors[".uagb-infobox__content-wrap.uagb-infobox-enable-border-radius"] = {
			"border-radius" : ( typeof borderRadius != "undefined" ) ? borderRadius+"px": "inherit",                    
		}
	}

	selectors[".uagb-infobox-content"] = {
		"padding": ( typeof blockPadding != "undefined" ) ? blockPadding+"px": "inherit"
	}           

	var styling_css = ""

	for( var i in selectors ) {
           
		styling_css += " .gutenberg-editor-page #wpwrap ."+clientId+" "+i + " { "
            
            
		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	/*// Responsive css.
        styling_css += '@media(max-width:768px){'; 
        for( var i in response_selector ) {

           
            styling_css += '.'+clientId+i + ' { ';           
            
            var sel = response_selector[i];
            var css = '';

            for( var j in sel ) {

                css += j + ': ' + sel[j] + ';';
            }

            styling_css += css + ' } ';
        }        
        styling_css += '}';*/

	return styling_css

}

export default InfoBoxStyle
