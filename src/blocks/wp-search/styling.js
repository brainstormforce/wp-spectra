/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

    const {
        layout,
        inputSize,
        textColor,
        placeholderColor,
        inputBgColor,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        borderStyle,
        borderWidth,
        borderRadius,
        borderColor,
        buttonBgColor,
        buttonBgHoverColor,
        buttonIconColor,
        buttonIconHoverColor,
        buttonWidth,
        buttonIconSize,
        iconColor,
        iconHoverColor,
        iconSize,
        inputFontFamily,
        inputFontWeight,
        inputFontSize,
        inputFontSizeType,
        inputFontSizeTablet,
        inputFontSizeMobile,
        inputLineHeight,
        inputLineHeightType,
        inputLineHeightTablet,
        inputLineHeightMobile,
        inputPaddingTypeMobile,
        inputPaddingTypeTablet,
        inputPaddingTypeDesktop,
        vinputPaddingMobile,
        vinputPaddingTablet,
        vinputPaddingDesktop,
        hinputPaddingMobile,
        hinputPaddingTablet,
        hinputPaddingDesktop,
        buttonPaddingTypeMobile,
        buttonPaddingTypeTablet,
        buttonPaddingTypeDesktop,
        vbuttonPaddingMobile,
        vbuttonPaddingTablet,
        vbuttonPaddingDesktop,
        hbuttonPaddingMobile,
        hbuttonPaddingTablet,
        hbuttonPaddingDesktop,
    } = props.attributes

    var boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
    }
    
    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}

    selectors = {
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input' : {
            "width": generateCSSUnit( inputSize, 'px' ),
            "color": textColor,
            "background-color": inputBgColor,
            "font-size" : generateCSSUnit( inputFontSize, inputFontSizeType ),
			"line-height" : generateCSSUnit( inputLineHeight, inputLineHeightType ),
			"font-family": inputFontFamily,
            "font-weight": inputFontWeight,
            "border-style" : borderStyle,
            "border-width" : generateCSSUnit( borderWidth, 'px' ),
            "border-right-width" : '0px',
            "border-color" : borderColor,
            "padding-top": generateCSSUnit( vinputPaddingDesktop, inputPaddingTypeDesktop ),
            "padding-bottom": generateCSSUnit( vinputPaddingDesktop, inputPaddingTypeDesktop ),
            "padding-right": generateCSSUnit( hinputPaddingDesktop, inputPaddingTypeDesktop ),
            "padding-left": generateCSSUnit( hinputPaddingDesktop, inputPaddingTypeDesktop ),
            "box-shadow": generateCSSUnit( boxShadowHOffset, "px" ) + ' ' + generateCSSUnit( boxShadowVOffset, "px" ) + ' ' + generateCSSUnit( boxShadowBlur, "px" ) + ' ' + generateCSSUnit( boxShadowSpread, "px" ) + ' ' + boxShadowColor + ' ' + boxShadowPositionCSS  
        },
        ' .uagb-search-wrapper .uagb-search-form__container' : {

            "border-radius" : generateCSSUnit( borderRadius, 'px' ),
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit' : {
            "width" : generateCSSUnit( buttonWidth, 'px' ),
            "background-color" : buttonBgColor,
            "padding-top": generateCSSUnit( vbuttonPaddingDesktop, buttonPaddingTypeDesktop ),
            "padding-bottom": generateCSSUnit( vbuttonPaddingDesktop, buttonPaddingTypeDesktop ),
            "padding-right": generateCSSUnit( hbuttonPaddingDesktop, buttonPaddingTypeDesktop ),
            "padding-left": generateCSSUnit( hbuttonPaddingDesktop, buttonPaddingTypeDesktop ),
            "border-style" : borderStyle,
            "border-width" : generateCSSUnit( borderWidth, 'px' ),
            "border-left-width" : '0px',
            "border-color" : borderColor,
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit:hover' : {
            "background-color" : buttonBgHoverColor,
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input::placeholder' : {
            "color": placeholderColor
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit .uagb-wp-search-icon-wrap svg' : {
            "width" : generateCSSUnit( buttonIconSize, 'px' ),
            "height" : generateCSSUnit( buttonIconSize, 'px' ),
            "font-size" : generateCSSUnit( buttonIconSize, 'px' ),
            "fill" : buttonIconColor
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit:hover .uagb-wp-search-icon-wrap svg' : {
            "fill" : buttonIconHoverColor
        },
    }

    mobile_selectors = {
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input' : {
            "font-size" : generateCSSUnit( inputFontSizeMobile, inputFontSizeType ),
            "line-height" : generateCSSUnit( inputLineHeightMobile, inputLineHeightType ),
            "padding-top": generateCSSUnit( vinputPaddingMobile, inputPaddingTypeMobile ),
            "padding-bottom": generateCSSUnit( vinputPaddingMobile, inputPaddingTypeMobile ),
            "padding-right": generateCSSUnit( hinputPaddingMobile, inputPaddingTypeMobile ),
            "padding-left": generateCSSUnit( hinputPaddingMobile, inputPaddingTypeMobile ),
            "padding-top": generateCSSUnit( vbuttonPaddingMobile, buttonPaddingTypeMobile ),
            "padding-bottom": generateCSSUnit( vbuttonPaddingMobile, buttonPaddingTypeMobile ),
            "padding-right": generateCSSUnit( hbuttonPaddingMobile, buttonPaddingTypeMobile ),
            "padding-left": generateCSSUnit( hbuttonPaddingMobile, buttonPaddingTypeMobile ),
        }
    }

    tablet_selectors = {
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input' : {
            "font-size" : generateCSSUnit( inputFontSizeTablet, inputFontSizeType ),
            "line-height" : generateCSSUnit( inputLineHeightTablet, inputLineHeightType ),
            "padding-top": generateCSSUnit( vinputPaddingTablet, inputPaddingTypeTablet ),
            "padding-bottom": generateCSSUnit( vinputPaddingTablet, inputPaddingTypeTablet ),
            "padding-right": generateCSSUnit( hinputPaddingTablet, inputPaddingTypeTablet ),
            "padding-left": generateCSSUnit( hinputPaddingTablet, inputPaddingTypeTablet ),
            "padding-top": generateCSSUnit( vbuttonPaddingTablet, buttonPaddingTypeTablet ),
            "padding-bottom": generateCSSUnit( vbuttonPaddingTablet, buttonPaddingTypeTablet ),
            "padding-right": generateCSSUnit( hbuttonPaddingTablet, buttonPaddingTypeTablet ),
            "padding-left": generateCSSUnit( hbuttonPaddingTablet, buttonPaddingTypeTablet ),
        }
    }
    var styling_css = '';
    var id = `.uagb-block-${ props.clientId }`

    styling_css = generateCSS( selectors, id )
    
    styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css
}

export default styling