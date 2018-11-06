/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function RestMenuStyle( props ) {
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
            backgroundAttachment,
            backgroundImageColor,
            backgroundOpacity,
            borderStyle,
            borderWidth ,
            borderRadius,
            borderColor         
        } = props.attributes;        

        if( props.clientId ){
            var clientId = 'uagb-testimonial-'+props.clientId;
        }else{
            var clientId = 'uagb-testimonial-'+block_id;
        }

        var selectors = {};

            selectors['.uagb-rest_menu__wrap'] = {
                    'padding-left' : rowGap/2+'px',
                    'padding-right' : rowGap/2+'px',                                
                    'margin-bottom' : columnGap+'px',
                }; 
            
            selectors['.uagb-rest_menu__wrap .uagb-rm__image-content'] = {
                    'padding-left' : imgHrPadding+'px',
                    'padding-right' : imgHrPadding+'px',                                
                    'padding-top' : imgVrPadding+'px',
                    'padding-bottom' : imgVrPadding+'px',
                }; 

            // Image
            selectors['.uagb-rm__image img'] = {
                    'width': imageWidth+'px',
                    'max-width': imageWidth+'px',
                }; 
            
            selectors['.uagb-rm__content'] = {                    
                    'text-align' : headingAlign, 
                    'padding' : contentPadding+'px',                  
                };                       

            // Prefix Style
            selectors['.uagb-rm__author-name'] = {
                    'font-size' : nameFontSize+'px',
                    'color': authorColor,
                    'margin-bottom': nameSpace+'px',
                };

            // Title Style
            selectors['.uagb-rm__company'] = {
                    'font-size' : companyFontSize+'px',
                    'color': companyColor,
                };

            // Description Style
            selectors['.uagb-rm__desc'] = {
                    'font-size' : descFontSize+'px',
                    'color': descColor,
                    'margin-bottom': descSpace+'px',
                };     

            selectors['.uagb-rest_menu__wrap.uagb-rm__bg-type-color .uagb-rm__content'] = {
                    'background-color': backgroundColor,
                };  

            var position = backgroundPosition.replace( "-", " " )
            selectors['.uagb-rest_menu__wrap.uagb-rm__bg-type-image .uagb-rm__content'] = {
                    'background-image': ( backgroundImage ) ? `url(${ backgroundImage.url })` : null,
                    'background-position':position,
                    'background-attachment':backgroundAttachment,
                    'background-repeat':backgroundRepeat,
                    'background-size':backgroundSize,
                }; 

            selectors['.uagb-rest_menu__wrap.uagb-rm__bg-type-image .uagb-rm__overlay'] = {
                    'background-color':backgroundImageColor,
                    'opacity':'0.'+backgroundOpacity,
                };                              
               
            if ( borderStyle != "none" ) {
                selectors['.uagb-rest_menu__wrap .uagb-rm__content'] = {
                    'border-color': borderColor,
                    'border-style':borderStyle,
                    'border-width':borderWidth + "px",
                    'border-radius':borderRadius + "px",                    
                };                 
            }

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

export default RestMenuStyle;
