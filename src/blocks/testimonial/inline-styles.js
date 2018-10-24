/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function TestimonialStyle( props ) {
    const {
            headingAlign,
            headingColor,
            subHeadingColor,
            prefixColor,
            prefixFontSize,
            headFontSize,
            subHeadFontSize,
            separatorWidth,
            headSpace,
            separatorSpace,
            subHeadSpace,
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
            prefixSpace,
            iconLeftMargin,
            iconRightMargin,
            iconTopMargin,
            iconBottomMargin,            
            imageSize,  
            imageWidth,            
        } = props.attributes;        

        if( props.clientId ){
            var clientId = 'uagb-'+props.clientId;
        }else{
            var clientId = 'uagb-'+block_id;
        }

        var selectors = {};
            
            selectors['.uagb-testinomial-wrapper .uagb-imgicon-wrap'] = {
                    'margin-left' : iconLeftMargin+'px',
                    'margin-right' : iconRightMargin+'px',                                
                    'margin-top' : iconTopMargin+'px',
                    'margin-bottom' : iconBottomMargin+'px',
                }; 

            // Image
            selectors['.uagb-image-content > img'] = {
                    'max-width': imageWidth+'px',
                }; 

            selectors['.uagb-imgicon-style-circle .uagb-image-content img'] = {                    
                        'display' : 'inline-block',
                        'box-sizing' : 'content-box',                    
                    };
            
            selectors['.uagb-imgicon-style-square .uagb-image-content img'] = {                    
                        'display' : 'inline-block',
                        'box-sizing' : 'content-box',                    
                    };
        

            selectors['.uagb-imgicon-style-custom .uagb-image-content img'] = {                    
                        'display' : 'inline-block',
                        'box-sizing' : 'content-box',
                        'border-style' : iconimgBorderstyle,
                        'border-width' : iconimgBorderWidth+'px',
                        'border-radius' : iconimgBorderRadius+'px',
                        'border-color' : iconimgBorder,
                        'box-sizing' : 'content-box',                    
                    };

            selectors['.uagb-imgicon-style-custom .uagb-image-content img:hover'] = {
                    'border-color' : iconimgBorderHover,                                     
                };

            selectors['.uagb-image-content .components-button svg'] = {
                    'width': imageWidth+'px',
                }; 

            selectors['.uagb-imgicon-style-circle .components-button svg'] = {                    
                        'display' : 'inline-block',
                        'box-sizing' : 'content-box',  
                        'margin-left' : iconLeftMargin+'px',
                        'margin-right' : iconRightMargin+'px',                                
                        'margin-top' : iconTopMargin+'px',
                        'margin-bottom' : iconBottomMargin+'px',                  
                    };

            selectors['.uagb-imgicon-style-square .components-button svg'] = {                    
                        'display' : 'inline-block',
                        'box-sizing' : 'content-box',    
                        'margin-left' : iconLeftMargin+'px',
                        'margin-right' : iconRightMargin+'px',                                
                        'margin-top' : iconTopMargin+'px',
                        'margin-bottom' : iconBottomMargin+'px',                
                    };

            selectors['.uagb-imgicon-style-custom .components-button svg'] = {                    
                        'padding' : iconimgbgSize+'px',
                        'background' : iconimgBg,
                        'display' : 'inline-block',
                        'box-sizing' : 'content-box',
                        'border-style' : iconimgBorderstyle,
                        'border-width' : iconimgBorderWidth+'px',
                        'border-radius' : iconimgBorderRadius+'px',
                        'border-color' : iconimgBorder,
                        'box-sizing' : 'content-box',   
                        'margin-left' : iconLeftMargin+'px',
                        'margin-right' : iconRightMargin+'px',                                
                        'margin-top' : iconTopMargin+'px',
                        'margin-bottom' : iconBottomMargin+'px',                 
                    };          
            
           selectors['.uagb-testinomial-wrapper'] = {                    
                    'text-align' : headingAlign,                   
                };                       

            // Prefix Style
            selectors['.uagb-testinomial-author-name'] = {
                    'font-size' : prefixFontSize+'px',
                    'color': prefixColor,
                    'margin-bottom': prefixSpace+'px',
                };

            // Title Style
            selectors['.uagb-testinomial-title'] = {
                    'font-size' : headFontSize+'px',
                    'color': headingColor,
                    'margin-bottom': headSpace+'px',
                };

            // Description Style
            selectors['.uagb-testinomial-desc'] = {
                    'font-size' : subHeadFontSize+'px',
                    'color': subHeadingColor,
                    'margin-bottom': subHeadSpace+'px',
                };                     
               

        var styling_css = '';

        for( var i in selectors ) {
           
            styling_css += '.'+clientId+' '+i + ' { ';
            
            
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
