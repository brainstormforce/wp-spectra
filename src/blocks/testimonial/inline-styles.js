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
            imgLeftMargin,
            imgRightMargin,
            imgTopMargin,
            imgBottomMargin,            
            imageSize,  
            imageWidth,            
        } = props.attributes;        

        if( props.clientId ){
            var clientId = 'uagb-'+props.clientId;
        }else{
            var clientId = 'uagb-'+block_id;
        }

        var selectors = {};
            
            selectors['.uagb-testinomial-wrapper .uagb-testinomial-image'] = {
                    'margin-left' : imgLeftMargin+'px',
                    'margin-right' : imgRightMargin+'px',                                
                    'margin-top' : imgTopMargin+'px',
                    'margin-bottom' : imgBottomMargin+'px',
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
                        'margin-left' : imgLeftMargin+'px',
                        'margin-right' : imgRightMargin+'px',                                
                        'margin-top' : imgTopMargin+'px',
                        'margin-bottom' : imgBottomMargin+'px',                 
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
            selectors['p.uagb-testinomial-desc'] = {
                    'font-size' : descFontSize+'px',
                    'color': descColor,
                    'margin-bottom': descSpace+'px',
                };                     
               

        var styling_css = '';

        for( var i in selectors ) {
           
            styling_css += '.gutenberg-editor-page #wpwrap .'+clientId+' '+i + ' { ';
            
            
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
