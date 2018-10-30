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
            iconimgBg,
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
            
            selectors['.uagb-testinomial__wrap .uagb-tm__image-content'] = {
                    'padding-left' : imgLeftPadding+'px',
                    'padding-right' : imgRightPadding+'px',                                
                    'padding-top' : imgTopPadding+'px',
                    'padding-bottom' : imgBottomPadding+'px',
                }; 

            // Image
            selectors['.uagb-tm__image img'] = {
                    'width': imageWidth+'px',
                    'max-width': imageWidth+'px',
                }; 
            
            selectors['.uagb-tm__content'] = {                    
                    'text-align' : headingAlign,                   
                };                       

            // Prefix Style
            selectors['.uagb-tm__author-name'] = {
                    'font-size' : nameFontSize+'px',
                    'color': authorColor,
                    'margin-bottom': nameSpace+'px',
                };

            // Title Style
            selectors['.uagb-tm__company'] = {
                    'font-size' : designationFontSize+'px',
                    'color': designationColor,
                };

            // Description Style
            selectors['.uagb-tm__desc'] = {
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
