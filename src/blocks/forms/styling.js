/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

    const {
        block_id,
        buttonAlign,
        submitColor,
        submitColorHover,
        submitBgColor,
        submitBgColorHover,
        //Border
        submitborderStyle,
        submitborderWidth,
        submitborderRadius,
        submitborderColor,
        submitborderHoverColor,
        vPaddingSubmit,
        hPaddingSubmit,
        //Typography
        submitTextFontFamily,
        submitTextFontWeight,
        submitTextFontSubset,
        submitTextFontSize,
        submitTextFontSizeType,
        submitTextFontSizeTablet,
        submitTextFontSizeMobile,
        submitTextLineHeightType,
        submitTextLineHeight,
        submitTextLineHeightTablet,
        submitTextLineHeightMobile,
        //label
        labelloadGoogleFonts,
        labelFontFamily,
        labelFontWeight,
        labelFontSubset,
        labelFontSize,
        labelFontSizeType,
        labelFontSizeTablet,
        labelFontSizeMobile,
        labelLineHeightType,
        labelLineHeight,
        labelLineHeightTablet,
        labelLineHeightMobile,
        //Input
        inputloadGoogleFonts,
        inputFontFamily,
        inputFontWeight,
        inputFontSubset,
        inputFontSize,
        inputFontSizeType,
        inputFontSizeTablet,
        inputFontSizeMobile,
        inputLineHeightType,
        inputLineHeight,
        inputLineHeightTablet,
        inputLineHeightMobile,

        labelColor,
        inputColor,
        bgColor,
        inputplaceholderColor,
        inputactiveColor,
        //Input Border
        inputborderStyle,
        inputborderWidth,
        inputborderRadius,
        inputborderColor,
        inputborderHoverColor,
        vPaddingField,
        hPaddingField,
        fieldGap,
        formStyle,
        overallAlignment
    } = props.attributes

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}
    
    selectors = {
        
        " form.uagb-forms-main-form, form.uagb-forms-main-form .uagb-forms-input, form.uagb-forms-main-form textarea" : {
            'text-align' : overallAlignment
        },

        " .uagb-forms-main-form .uagb-forms-field-set" : {
            'margin-bottom' : generateCSSUnit( fieldGap, "px" ),
        },
        " .uagb-forms-main-form .uagb-forms-input-label" : {            
            "font-size" : generateCSSUnit( labelFontSize, labelFontSizeType ),
            "line-height" : generateCSSUnit( labelLineHeight, labelLineHeightType ),
            "font-family": labelFontFamily,
            "font-weight": labelFontWeight,
            'color' : labelColor,            
        },
               

        " .uagb-forms-main-form  .uagb-forms-input::placeholder" : {            
            "font-size" : generateCSSUnit( inputFontSize, inputFontSizeType ),
			"line-height" : generateCSSUnit( inputLineHeight, inputLineHeightType ),
			"font-family": inputFontFamily,
            "font-weight": inputFontWeight,
            'color' : inputplaceholderColor,          
            
        },
        ' .uagb-forms-main-form .uagb-forms-input:focus': {
            'outline' : ' none !important',
            'border'  : '2px solid ' + inputactiveColor,
        },
        
        " .uagb-forms-main-form .uagb-forms-main-submit-button-wrap" : {
            'text-align' : buttonAlign
        },
        " .uagb-forms-main-form .uagb-forms-main-submit-button" : {
            'color' : submitColor,
            "font-size" : generateCSSUnit( submitTextFontSize, submitTextFontSizeType ),
			"line-height" : generateCSSUnit( submitTextLineHeight, submitTextLineHeightType ),
			"font-family": submitTextFontFamily,
			"font-weight": submitTextFontWeight,
            'background-color' : submitBgColor,
            'border' : generateCSSUnit( submitborderWidth, "px" ) + " " + submitborderStyle + " " + submitborderColor,
            'border-radius' : generateCSSUnit( submitborderRadius, "px" ),
            'padding' : generateCSSUnit( vPaddingSubmit, "px" ) + " " + generateCSSUnit( hPaddingSubmit, "px" ),
        },
        " .uagb-forms-main-form .uagb-forms-main-submit-button:hover" : {
            'color' : submitColorHover,
            'background-color' : submitBgColorHover,
            'border-color' : submitborderHoverColor,
        },        
        
    }
    
    if ( "boxed" == formStyle ) {		
        selectors[" .uagb-forms-main-form  .uagb-forms-input"] = {
            'border' : generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
            'border-radius' : generateCSSUnit( inputborderRadius, "px" ),
            'background-color' : bgColor,
            'color' : inputColor,
            'padding' : generateCSSUnit( vPaddingField, "px" ) + " " + generateCSSUnit( hPaddingField, "px" ),
        }
        selectors[" .uagb-forms-main-form .uagb-forms-radio-wrap > label"] = {
            'color' : inputColor
        }
        selectors[" .uagb-forms-main-form .uagb-forms-checkbox-wrap > label"] = {
            'color' : inputColor
        }
        selectors[" .uagb-forms-main-form .uagb-forms-accept-wrap > label"] = {
            'color' : inputColor
        }
        selectors[" .uagb-forms-main-form  .uagb-forms-input:hover"] = {
            'border-color' : inputborderHoverColor,            
        }
        
	}else if( "underlined" == formStyle ){
        selectors[" .uagb-forms-main-form  .uagb-forms-input"] = {
            'border': 0,
            'outline': 0,
            'border-radius' :0,
            'background': 'transparent',
            'border-bottom':  generateCSSUnit( inputborderWidth, "px" ) + " " + inputborderStyle + " " + inputborderColor,
            'color' : inputColor,
            'padding' : generateCSSUnit( vPaddingField, "px" ) + " " + generateCSSUnit( hPaddingField, "px" ),
        }
        selectors[" .uagb-forms-main-form .uagb-forms-radio-wrap > label"] = {
            'color' : inputColor
        }
        selectors[" .uagb-forms-main-form .uagb-forms-checkbox-wrap > label"] = {
            'color' : inputColor
        }
        selectors[" .uagb-forms-main-form .uagb-forms-accept-wrap > label"] = {
            'color' : inputColor
        }
        selectors[" .uagb-forms-main-form  .uagb-forms-input:hover"] = {
            'border-color' : inputborderHoverColor,            
        }
       
    }
   
    tablet_selectors = {
        " .uagb-forms-main-form .uagb-forms-main-submit-button" : {            
            "font-size" : generateCSSUnit( submitTextFontSizeTablet, submitTextFontSizeType ),
			"line-height" : generateCSSUnit( submitTextLineHeightTablet, submitTextLineHeightType ),			
        },
        " .uagb-forms-main-form .uagb-forms-input-label" : {            
            "font-size" : generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
			"line-height" : generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),			            
        },
        " .uagb-forms-main-form  .uagb-forms-input::placeholder" : {         
            "font-size" : generateCSSUnit( inputFontSizeTablet, inputFontSizeType ),
			"line-height" : generateCSSUnit( inputLineHeightTablet, inputLineHeightType ),			
        },
    }

    mobile_selectors = {
        " .uagb-forms-main-form .uagb-forms-main-submit-button" : {            
            "font-size" : generateCSSUnit( submitTextFontSizeMobile, submitTextFontSizeType ),
			"line-height" : generateCSSUnit( submitTextLineHeightMobile, submitTextLineHeightType ),			
        },
        " .uagb-forms-main-form .uagb-forms-input-label" : {            
            "font-size" : generateCSSUnit( labelFontSizeMobile, labelFontSizeType ),
			"line-height" : generateCSSUnit( labelLineHeightMobile, labelLineHeightType ),			            
        },
        " .uagb-forms-main-form  .uagb-forms-input::placeholder" : {         
            "font-size" : generateCSSUnit( inputFontSizeMobile, inputFontSizeType ),
			"line-height" : generateCSSUnit( inputLineHeightMobile, inputLineHeightType ),			
        },
    }

    var styling_css = '';
    var id = `.uagb-block-${ block_id }`

    styling_css = generateCSS( selectors, id )
    
    styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

    return styling_css
}

export default styling
