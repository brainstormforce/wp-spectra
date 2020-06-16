/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"
import generateCSSUnit from "../../../dist/blocks/uagb-controls/generateCSSUnit"

function styling( props ) {

    const {
        block_id,
        layout,
        inputSize,
        textColor,
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
        buttonFontFamily,
        buttonFontWeight,
        buttonFontSize,
        buttonFontSizeType,
        buttonFontSizeTablet,
        buttonFontSizeMobile,
        buttonLineHeight,
        buttonLineHeightType,
        buttonLineHeightTablet,
        buttonLineHeightMobile,
        buttonTextColor,
        buttonTextHoverColor,
        inputSizeType
    } = props.attributes

    var boxShadowPositionCSS = boxShadowPosition;
    
	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
    }

    var selectors = {}
    var tablet_selectors = {}
    var mobile_selectors = {}
    
    var inputCSS = {
        "color": textColor,
        "background-color": inputBgColor,
        "font-size" : generateCSSUnit( inputFontSize, inputFontSizeType ),
        "line-height" : generateCSSUnit( inputLineHeight, inputLineHeightType ),
        "font-family": inputFontFamily,
        "font-weight": inputFontWeight,
        "border" : 0,
        "border-radius" : '0px',
        "margin" : 0,
        "outline" : "unset",
        "padding-top": generateCSSUnit( vinputPaddingDesktop, inputPaddingTypeDesktop ),
        "padding-bottom": generateCSSUnit( vinputPaddingDesktop, inputPaddingTypeDesktop ),
        "padding-right": generateCSSUnit( hinputPaddingDesktop, inputPaddingTypeDesktop ),
        "padding-left": generateCSSUnit( hinputPaddingDesktop, inputPaddingTypeDesktop ),
        "transition" : "all .5s",
    }
    var boxCSS = {
        "border-style" : borderStyle,
        "border-width" : generateCSSUnit( borderWidth, 'px' ),
        "border-color" : borderColor,
        "outline" : "unset",
        "border-radius" : generateCSSUnit( borderRadius, 'px' ),
        "box-shadow": generateCSSUnit( boxShadowHOffset, "px" ) + ' ' + generateCSSUnit( boxShadowVOffset, "px" ) + ' ' + generateCSSUnit( boxShadowBlur, "px" ) + ' ' + generateCSSUnit( boxShadowSpread, "px" ) + ' ' + boxShadowColor + ' ' + boxShadowPositionCSS
    }

    var icon_color = textColor

    if ( 'undefined' !== typeof iconColor && '' !== iconColor ) {
        icon_color = iconColor
    }
    if ( 'px' === inputSizeType ) {
        boxCSS['max-width'] = generateCSSUnit( inputSize, inputSizeType )
    } else {
        boxCSS['width'] = generateCSSUnit( inputSize, inputSizeType )
    }
    
    selectors = {
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit' : {
            "width" : generateCSSUnit( buttonWidth, 'px' ),
            "padding": 0,
            "border" : 0,
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input::placeholder' : {
            "color": textColor,
            "opacity": 0.6
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit .uagb-wp-search-button-icon-wrap svg' : {
            "width" : generateCSSUnit( buttonIconSize, 'px' ),
            "height" : generateCSSUnit( buttonIconSize, 'px' ),
            "font-size" : generateCSSUnit( buttonIconSize, 'px' ),
            "fill" : buttonIconColor
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit .uagb-wp-search-button-text' : {
            "font-size" : generateCSSUnit( buttonFontSize, buttonFontSizeType ),
            "line-height" : generateCSSUnit( buttonLineHeight, buttonLineHeightType ),
            "font-family": buttonFontFamily,
            "font-weight": buttonFontWeight,
            "color" : buttonTextColor
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit:hover .uagb-wp-search-button-text' : {
            "color" : buttonTextHoverColor
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit:hover .uagb-wp-search-button-icon-wrap svg' : {
            "fill" : buttonIconHoverColor
        },
        '.uagb-layout-input .uagb-wp-search-icon-wrap svg' : {
            "width" : generateCSSUnit( iconSize, 'px' ),
            "height" : generateCSSUnit( iconSize, 'px' ),
            "font-size" : generateCSSUnit( iconSize, 'px' ),
            "fill" : icon_color
        },
    }

    if ( 'input-button' === layout || 'input' === layout ) {

        selectors['.uagb-wp-search__outer-wrap .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input'] = inputCSS

        selectors[' .uagb-search-wrapper .uagb-search-form__container'] = boxCSS

        if ( 'inset' === boxShadowPosition ) {

            selectors[' .uagb-search-wrapper .uagb-search-form__input'] = {

                "box-shadow": generateCSSUnit( boxShadowHOffset, "px" ) + ' ' + generateCSSUnit( boxShadowVOffset, "px" ) + ' ' + generateCSSUnit( boxShadowBlur, "px" ) + ' ' + generateCSSUnit( boxShadowSpread, "px" ) + ' ' + boxShadowColor + ' ' + boxShadowPositionCSS
            }
        }

        selectors['.uagb-wp-search__outer-wrap .uagb-search-wrapper .uagb-search-form__container .uagb-wp-search-icon-wrap'] = {
            "background-color": inputBgColor,
            "padding-top": generateCSSUnit( vinputPaddingDesktop, inputPaddingTypeDesktop ),
            "padding-bottom": generateCSSUnit( vinputPaddingDesktop, inputPaddingTypeDesktop ),
            "padding-left": generateCSSUnit( hinputPaddingDesktop, inputPaddingTypeDesktop ),
        }
    }
    
    selectors['.uagb-layout-input-button .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit'] = {
        "background-color" : buttonBgColor,
    }
    selectors['.uagb-layout-input-button .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit:hover'] = {
        "background-color" : buttonBgHoverColor,
    }

    mobile_selectors = {
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input' : {
            "font-size" : generateCSSUnit( inputFontSizeMobile, inputFontSizeType ),
            "line-height" : generateCSSUnit( inputLineHeightMobile, inputLineHeightType ),
            "padding-top": generateCSSUnit( vinputPaddingMobile, inputPaddingTypeMobile ),
            "padding-bottom": generateCSSUnit( vinputPaddingMobile, inputPaddingTypeMobile ),
            "padding-right": generateCSSUnit( hinputPaddingMobile, inputPaddingTypeMobile ),
            "padding-left": generateCSSUnit( hinputPaddingMobile, inputPaddingTypeMobile ),
        },
        '.uagb-wp-search__outer-wrap .uagb-search-wrapper .uagb-search-form__container .uagb-wp-search-icon-wrap' : {
            "padding-top": generateCSSUnit( vinputPaddingMobile, inputPaddingTypeMobile ),
            "padding-bottom": generateCSSUnit( vinputPaddingMobile, inputPaddingTypeMobile ),
            "padding-left": generateCSSUnit( hinputPaddingMobile, inputPaddingTypeMobile ),
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit .uagb-wp-search-button-text' : {
            "font-size" : generateCSSUnit( buttonFontSizeMobile, buttonFontSizeType ),
            "line-height" : generateCSSUnit( buttonLineHeightMobile, buttonLineHeightType ),
        },
    }

    tablet_selectors = {
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input' : {
            "font-size" : generateCSSUnit( inputFontSizeTablet, inputFontSizeType ),
            "line-height" : generateCSSUnit( inputLineHeightTablet, inputLineHeightType ),
            "padding-top": generateCSSUnit( vinputPaddingTablet, inputPaddingTypeTablet ),
            "padding-bottom": generateCSSUnit( vinputPaddingTablet, inputPaddingTypeTablet ),
            "padding-right": generateCSSUnit( hinputPaddingTablet, inputPaddingTypeTablet ),
            "padding-left": generateCSSUnit( hinputPaddingTablet, inputPaddingTypeTablet ),
        },
        '.uagb-wp-search__outer-wrap .uagb-search-wrapper .uagb-search-form__container .uagb-wp-search-icon-wrap' : {
            "padding-top": generateCSSUnit( vinputPaddingTablet, inputPaddingTypeTablet ),
            "padding-bottom": generateCSSUnit( vinputPaddingTablet, inputPaddingTypeTablet ),
            "padding-left": generateCSSUnit( hinputPaddingTablet, inputPaddingTypeTablet ),
        },
        ' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit .uagb-wp-search-button-text' : {
            "font-size" : generateCSSUnit( buttonFontSizeTablet, buttonFontSizeType ),
            "line-height" : generateCSSUnit( buttonLineHeightTablet, buttonLineHeightType ),
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