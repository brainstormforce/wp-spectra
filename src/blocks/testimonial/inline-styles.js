/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function TestimonialStyle( props ) {
    const {
            headingAlign,
            designationColor,
            descColor,
            authorColor,
            nameFontSize,
            designationFontSize,
            descFontSize,
            separatorWidth,
            headSpace,
            separatorSpace,
            descSpace,
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
            nameSpace,
            imgLeftPadding,
            imgRightPadding,
            imgTopPadding,
            imgBottomPadding,            
            imageSize,  
            imageWidth,            
        } = props.attributes;        

        if( props.clientId ){
            var clientId = 'uagb-testimonial-'+props.clientId;
        }else{
            var clientId = 'uagb-testimonial-'+block_id;
        }

        var selectors = {};
            
            selectors['.uagb-testinomial-content-wrap .uagb-testimonial-image-contnet'] = {
                    'padding-left' : imgLeftPadding+'px',
                    'padding-right' : imgRightPadding+'px',                                
                    'padding-top' : imgTopPadding+'px',
                    'padding-bottom' : imgBottomPadding+'px',
                }; 

            // Image
            selectors['.uagb-testinomial-image img'] = {
                    'width': imageWidth+'px',
                    'max-width': imageWidth+'px',
                }; 
          

            selectors['.uagb-testimonial-imgicon-style-custom .uagb-testinomial-image img'] = {                    
                        'border-style' : iconimgBorderstyle,
                        'border-width' : iconimgBorderWidth+'px',
                        'border-radius' : iconimgBorderRadius+'px',
                        'border-color' : iconimgBorder,
                    };

            selectors['.uagb-testimonial-imgicon-style-custom .uagb-testinomial-image img:hover'] = {
                    'border-color' : iconimgBorderHover,                                     
                };

            selectors['.uagb-testinomial-image .components-button svg'] = {
                    'width': imageWidth+'px',
                    'max-width': imageWidth+'px',
                }; 
                    
            selectors['.uagb-testimonial-imgicon-style-custom .components-button svg'] = {                    
                        'border-style' : iconimgBorderstyle,
                        'border-width' : iconimgBorderWidth+'px',
                        'border-radius' : iconimgBorderRadius+'px',
                        'border-color' : iconimgBorder,
                        'padding-left' : imgLeftPadding+'px',
                        'padding-right' : imgRightPadding+'px',                                
                        'padding-top' : imgTopPadding+'px',
                        'padding-bottom' : imgBottomPadding+'px',                 
                    };          
            
            selectors['.uagb-testinomial-content'] = {                    
                    'text-align' : headingAlign,                   
                };                       

            // Prefix Style
            selectors['.uagb-testinomial-author-name'] = {
                    'font-size' : nameFontSize+'px',
                    'color': authorColor,
                    'margin-bottom': nameSpace+'px',
                };

            // Title Style
            selectors['.uagb-testinomial-designation'] = {
                    'font-size' : designationFontSize+'px',
                    'color': designationColor,
                };

            // Description Style
            selectors['.uagb-testinomial-desc'] = {
                    'font-size' : descFontSize+'px',
                    'color': descColor,
                    'margin-bottom': descSpace+'px',
                };                     
               

        var styling_css = '';

        for( var i in selectors ) {
           
            styling_css += '#wpwrap #'+clientId+' '+i + ' { ';
            
            
            var sel = selectors[i];
            var css = '';

            for( var j in sel ) {

                css += j + ': ' + sel[j] + ';';
            }

            styling_css += css + ' } ';
        }       

        return styling_css;

}

export default TestimonialStyle;
