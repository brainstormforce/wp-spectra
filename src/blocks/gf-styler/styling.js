/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function styling( props ) {

	const {
		align,
		titleDescAlignment,
		fieldHrPadding,
		fieldVrPadding,
		fieldBgColor,
		fieldLabelColor,
		fieldInputColor,
		fieldBorderStyle,
		fieldBorderWidth ,
		fieldBorderRadius,
		fieldBorderColor,
		fieldBorderFocusColor,
		buttonAlignment,
		buttonVrPadding,
		buttonHrPadding,
		buttonTextColor,
		buttonBgColor,
		buttonTextHoverColor,
		buttonBgHoverColor,
		buttonBorderStyle,
		buttonBorderWidth,
		buttonBorderRadius,
		buttonBorderColor,
		buttonBorderHoverColor,
		fieldSpacing,
		fieldLabelSpacing,
		labelFontSize,
		labelFontSizeType,
		labelFontSizeTablet,
		labelFontSizeMobile,
		labelFontFamily,
		labelFontWeight,
		labelLineHeightType,
		labelLineHeight,
		labelLineHeightTablet,
		labelLineHeightMobile,
		textAreaHeight,	
		inputFontSize,	
		inputFontSizeType,
		inputFontSizeTablet,
		inputFontSizeMobile,
		inputFontFamily,
		inputFontWeight,
		inputLineHeightType,
		inputLineHeight,
		inputLineHeightTablet,
		inputLineHeightMobile,
		buttonFontSize,
		buttonFontSizeType,
		buttonFontSizeTablet,
		buttonFontSizeMobile,
		buttonFontFamily,
		buttonFontWeight,
		buttonLineHeightType,
		buttonLineHeight,
		buttonLineHeightTablet,
		buttonLineHeightMobile,
		highlightBorderColor,
		radioCheckSize,
		radioCheckBgColor,
		radioCheckSelectColor,
		radioCheckLableColor,
		radioCheckBorderColor,
		radioCheckBorderWidth,
		radioCheckBorderRadius,
		radioCheckFontSize,
		radioCheckFontSizeType,
		radioCheckFontSizeTablet,
		radioCheckFontSizeMobile,
		radioCheckFontFamily,
		radioCheckFontWeight,
		radioCheckLineHeightType,
		radioCheckLineHeight,
		radioCheckLineHeightTablet,
		radioCheckLineHeightMobile,
		validationMsgColor,
		validationMsgBgColor, 
		validationMsgFontFamily,
		validationMsgFontWeight,
		validationMsgFontSize, 
		validationMsgFontSizeType,
		validationMsgFontSizeTablet,
		validationMsgFontSizeMobile,
		validationMsgLineHeightType,
		validationMsgLineHeight,
		validationMsgLineHeightTablet,
		validationMsgLineHeightMobile,
		msgFontFamily,
		msgFontWeight,
		msgFontSize,
		msgFontSizeType,
		msgFontSizeTablet,
		msgFontSizeMobile,	
		msgLineHeightType,
		msgLineHeight,
		msgLineHeightTablet,
		msgLineHeightMobile,		
		successMsgFontFamily,
		successMsgFontWeight,
		successMsgFontSize,
		successMsgFontSizeType,
		successMsgFontSizeTablet,
		successMsgFontSizeMobile,	
		successMsgLineHeightType,
		successMsgLineHeight,
		successMsgLineHeightTablet,
		successMsgLineHeightMobile,
		radioCheckBorderRadiusType,
		fieldBorderRadiusType,
		buttonBorderRadiusType,
		errorMsgColor,
		errorMsgBgColor,
		errorMsgBorderColor,
		msgBorderSize,
		msgBorderRadius,
		msgBorderRadiusType,
		msgVrPadding,
		msgHrPadding,
		successMsgColor,
	} = props.attributes

	var selectors = {
		" .gform_wrapper form" :{
			"text-align" : align,
		},
		" .wp-block-uagb-gf-styler form:not(input)" :{
			"color" : fieldLabelColor,
		},
		" .gform_heading" :{
			"text-align" : titleDescAlignment,
		},
		" input:not([type=submit])" :{
			"background-color" : fieldBgColor,
			"color"            : fieldInputColor,
			"border-style"     : fieldBorderStyle,
			"border-color"     : fieldBorderColor,
			"border-width"     : fieldBorderWidth + "px",
			"border-radius"    : fieldBorderRadius + fieldBorderRadiusType,
			"padding-left"     : fieldHrPadding + "px",
			"padding-right"    : fieldHrPadding + "px",
			"padding-top"      : fieldVrPadding + "px",
			"padding-bottom"   : fieldVrPadding + "px",
			"margin-top"       : fieldLabelSpacing + "px",
			"margin-bottom"    : fieldSpacing + "px",
			"font-size"        : inputFontSize + inputFontSizeType,
			"font-family"      : inputFontFamily,
			"font-weight"      : inputFontWeight,
			"line-height"      : inputLineHeight + inputLineHeightType,
			"text-align"       : align,
		},
		" select" :{
			"background-color" : fieldBgColor,
			"border-style"     : fieldBorderStyle,
			"border-color"     : fieldBorderColor,
			"border-width"     : fieldBorderWidth + "px",
			"border-radius"    : fieldBorderRadius + fieldBorderRadiusType,
			"margin-top"       : fieldLabelSpacing + "px",
			"margin-bottom"    : fieldSpacing + "px",
			"color"            : fieldInputColor,
			"font-size"        : inputFontSize + inputFontSizeType,
			"font-family"      : inputFontFamily,
			"font-weight"      : inputFontWeight,
			"line-height"      : inputLineHeight + inputLineHeightType,
			"text-align"       : align,
			"padding-left"     : fieldHrPadding + "px",
			"padding-right"    : fieldHrPadding + "px",
			"padding-top"      : fieldVrPadding + "px",
			"padding-bottom"   : fieldVrPadding + "px",
		},
		" .chosen-container-single span" :{
			"background-color" : fieldBgColor,
			"border-style"     : fieldBorderStyle,
			"border-color"     : fieldBorderColor,
			"border-width"     : fieldBorderWidth + "px",
			"border-radius"    : fieldBorderRadius + fieldBorderRadiusType,
			"margin-top"       : fieldLabelSpacing + "px",
			"margin-bottom"    : fieldSpacing + "px",
			"color"            : fieldInputColor,
			"font-size"        : inputFontSize + inputFontSizeType,
			"font-family"      : inputFontFamily,
			"font-weight"      : inputFontWeight,
			"line-height"      : inputLineHeight + inputLineHeightType,
			"text-align"       : align,
			"padding-left"     : fieldHrPadding + "px",
			"padding-right"    : fieldHrPadding + "px",
			"padding-top"      : fieldVrPadding + "px",
			"padding-bottom"   : fieldVrPadding + "px",
		},
		" .chosen-container-single.chosen-container-active .chosen-single span" :{
			"margin-bottom" : 0,
		},
		" select.wpgf-form-control.wpgf-select:not([multiple='multiple'])" :{
			"padding-left"   : fieldHrPadding + "px",
			"padding-right"  : fieldHrPadding + "px",
			"padding-top"    : fieldVrPadding + "px",
			"padding-bottom" : fieldVrPadding + "px",
		},
		" select.wpgf-select[multiple='multiple'] option" : {
			"padding-left"   : fieldHrPadding + "px",
			"padding-right"  : fieldHrPadding + "px",
			"padding-top"    : fieldVrPadding + "px",
			"padding-bottom" : fieldVrPadding + "px",
		},
		" textarea"                              : {
			"background-color" : fieldBgColor,
			"color"            : fieldInputColor,
			"border-color"     : fieldBorderColor,
			"border-width"     : fieldBorderWidth + "px",
			"border-radius"    : fieldBorderRadius + fieldBorderRadiusType,
			"border-style"     : fieldBorderStyle,
			"padding-left"     : fieldHrPadding + "px",
			"padding-right"    : fieldHrPadding + "px",
			"padding-top"      : fieldVrPadding + "px",
			"padding-bottom"   : fieldVrPadding + "px",
			"margin-top"       : fieldLabelSpacing + "px",
			"margin-bottom"    : fieldSpacing + "px",
			"font-size"        : inputFontSize + inputFontSizeType,
			"font-family"      : inputFontFamily,
			"font-weight"      : inputFontWeight,
			"line-height"      : inputLineHeight + inputLineHeightType,
			"text-align"       : align,
			"height"       	   : ( "auto" === textAreaHeight ) ? textAreaHeight : textAreaHeight + "px",
		},
		" textarea::placeholder"                 : {
			"color"      : fieldInputColor,
			"text-align" : align,
		},
		" input::placeholder"                    : {
			"color"      : fieldInputColor,
			"text-align" : align,
		},
		" form label"                            : {
			"color"       : fieldLabelColor,
			"font-size"   : labelFontSize + labelFontSizeType,
			"font-family" : labelFontFamily,
			"font-weight" : labelFontWeight,
			"line-height" : labelLineHeight + labelLineHeightType,
		},
		" form .gfield_radio label"              : {
			"color"       : fieldLabelColor,
			"font-size"   : labelFontSize + labelFontSizeType,
			"font-family" : labelFontFamily,
			"font-weight" : labelFontWeight,
			"line-height" : labelLineHeight + labelLineHeightType,
		},
		" form .gfield_checkbox label"           : {
			"color"       : fieldLabelColor,
			"font-size"   : labelFontSize + labelFontSizeType,
			"font-family" : labelFontFamily,
			"font-weight" : labelFontWeight,
			"line-height" : labelLineHeight + labelLineHeightType,
		},
		" .wpgf .gfield_checkbox input[type='checkbox'] + label, .wpgf .gfield_checkbox input[type='checkbox'] + label" : {
			"margin-top" : fieldLabelSpacing + "px",
		},

		// Focus.
		" form input:not([type=submit]):focus"   : {
			"border-color" : fieldBorderFocusColor,
		},
		" form select:focus"                     : {
			"border-color" : fieldBorderFocusColor,
		},
		" textarea:focus"                        : {
			"border-color" : fieldBorderFocusColor,
		},

		// Submit button.
		" input.gform_button"                    : {
			"color"            : buttonTextColor,
			"background-color" : buttonBgColor,
			"font-size"        : buttonFontSize + buttonFontSizeType,
			"font-family"      : buttonFontFamily,
			"font-weight"      : buttonFontWeight,
			"line-height"      : buttonLineHeight + buttonLineHeightType,
			"border-color"     : buttonBorderColor,
			"border-style"     : buttonBorderStyle,
			"border-width"     : buttonBorderWidth + "px",
			"border-radius"    : buttonBorderRadius + buttonBorderRadiusType,
			"padding-left"     : buttonHrPadding + "px",
			"padding-right"    : buttonHrPadding + "px",
			"padding-top"      : buttonVrPadding + "px",
			"padding-bottom"   : buttonVrPadding + "px",
		},
		" input.gform_button:hover"              : {
			"color"            : buttonTextHoverColor,
			"background-color" : buttonBgHoverColor,
			"border-color"     : buttonBorderHoverColor,
		},

		// Check box Radio.
		" .uagb-gf-styler__check-style-enabled .gfield_checkbox input[type='checkbox']:checked + label:before" : {
			"background-color" : fieldBgColor,
			"color"            : fieldInputColor,
			"font-size"        : "calc( " + fieldVrPadding + "px * 1.8 )",
			"border-color"     : fieldBorderFocusColor,
		},
		" .uagb-gf-styler__check-style-enabled .gfield_checkbox input[type='checkbox'] + label:before" : {
			"background-color" : fieldBgColor,
			"color"            : fieldInputColor,
			"height"           : fieldVrPadding + "px",
			"width"            : fieldVrPadding + "px",
			"border-style"     : fieldBorderStyle,
			"border-color"     : fieldBorderColor,
			"border-width"     : fieldBorderWidth + "px",
			"border-radius"    : fieldBorderRadius + fieldBorderRadiusType,
			"font-size"        : "calc( " + fieldVrPadding + "px * 1.8 )",
		},
		" .uagb-gf-styler__check-style-enabled input[type='checkbox']:checked + label:before" : {
			"background-color" : fieldBgColor,
			"color"            : fieldInputColor,
			"font-size"        : "calc( " + fieldVrPadding + "px * 1.8 )",
			"border-color"     : fieldBorderFocusColor,
		},
		" .uagb-gf-styler__check-style-enabled input[type='checkbox'] + label:before" : {
			"background-color" : fieldBgColor,
			"color"            : fieldInputColor,
			"height"           : fieldVrPadding + "px",
			"width"            : fieldVrPadding + "px",
			"font-size"        : "calc( " + fieldVrPadding + "px * 1.8 )",
			"border-color"     : fieldBorderColor,
			"border-style"     : fieldBorderStyle,
			"border-width"     : fieldBorderWidth + "px",
			"border-radius"    : fieldBorderRadius + fieldBorderRadiusType,
		},
		" .uagb-gf-styler__check-style-enabled .gfield_radio input[type='radio'] + label:before" : {
			"background-color" : fieldBgColor,
			"color"            : fieldInputColor,
			"height"           : fieldVrPadding + "px",
			"width"            : fieldVrPadding + "px",
			"border-style"     : fieldBorderStyle,
			"border-color"     : fieldBorderColor,
			"border-width"     : fieldBorderWidth + "px",
		},
		" .uagb-gf-styler__check-style-enabled .gfield_radio input[type='radio']:checked + label:before" : {
			"border-color" : fieldBorderFocusColor,
		},

		// Underline border.
		" .uagb-gf-styler__field-style-underline input:not([type=submit])" : {
			"border-style"        : "none",
			"border-bottom-color" : fieldBorderColor,
			"border-bottom-style" : "solid",
			"border-bottom-width" : fieldBorderWidth + "px",
			"border-radius"       : fieldBorderRadius + fieldBorderRadiusType,
		},
		" .uagb-gf-styler__field-style-underline textarea" : {
			"border-style"        : "none",
			"border-bottom-color" : fieldBorderColor,
			"border-bottom-style" : "solid",
			"border-bottom-width" : fieldBorderWidth + "px",
			"border-radius"       : fieldBorderRadius + fieldBorderRadiusType,
		},
		" .uagb-gf-styler__field-style-underline select" : {
			"border-style"        : "none",
			"border-bottom-color" : fieldBorderColor,
			"border-bottom-style" : "solid",
			"border-bottom-width" : fieldBorderWidth + "px",
			"border-radius"       : fieldBorderRadius + fieldBorderRadiusType,
		},
		" .uagb-gf-styler__field-style-underline textarea" : {
			"border-style"        : "none",
			"border-bottom-color" : fieldBorderColor,
			"border-bottom-style" : "solid",
			"border-bottom-width" : fieldBorderWidth + "px",
			"border-radius"       : fieldBorderRadius + fieldBorderRadiusType,
		},
		" .uagb-gf-styler__check-style-enabled input[type='checkbox'] + label:before" : {
			"border-style" : "solid",
		},
		" .uagb-gf-styler__check-style-enabled input[type='radio'] + label:before" : {
			"border-style" : "solid",
		},
		" .uagb-gf-styler__field-style-box .gfield_checkbox input[type='checkbox']:checked + label:before" : {
			"border-style"  : "solid",
			"border-width"  : radioCheckBorderWidth + "px",
			"border-radius" : fieldBorderRadius + fieldBorderRadiusType,
			"font-size"     : "calc( " + fieldVrPadding + "px * 1.8 )",
		},
		" .uagb-gf-styler__field-style-box input[type='checkbox']:checked + label:before" : {
			"border-style"  : "solid",
			"border-width"  : radioCheckBorderWidth + "px",
			"border-radius" : fieldBorderRadius + fieldBorderRadiusType,
			"font-size"     : "calc( " + fieldVrPadding + "px * 1.8)",
		},
		" .gfield_radio input[type='radio']:checked + label:before" : {
			"background-color" : fieldInputColor,
		},

		// Override check box.
		" .uagb-gf-styler__check-style-enabled .gfield_checkbox input[type='checkbox'] + label:before" : {
			"background-color" : radioCheckBgColor,
			"color"            : radioCheckSelectColor,
			"height"           : radioCheckSize + "px",
			"width"            : radioCheckSize + "px",
			"font-size"        : "calc( " + radioCheckSize + "px * 1.8 )",
			"border-color"     : radioCheckBorderColor,
			"border-width"     : radioCheckBorderWidth + "px",
			"border-style"     : "solid",
			"border-radius"    : radioCheckBorderRadius + radioCheckBorderRadiusType,
		},
		" .uagb-gf-styler__check-style-enabled .gfield_checkbox input[type='checkbox']:checked + label:before" : {
			"border-color" : fieldBorderFocusColor,
		},
		" .uagb-gf-styler__check-style-enabled input[type='checkbox'] + label:before" : {
			"background-color" : radioCheckBgColor,
			"color"            : radioCheckSelectColor,
			"height"           : radioCheckSize + "px",
			"width"            : radioCheckSize + "px",
			"font-size"        : "calc( " + radioCheckSize + "px * 1.8 )",
			"border-color"     : radioCheckBorderColor,
			"border-width"     : radioCheckBorderWidth + "px",
			"border-radius"    : radioCheckBorderRadius + radioCheckBorderRadiusType,
		},
		" .uagb-gf-styler__check-style-enabled input[type='checkbox']:checked + label:before" : {
			"border-color" : fieldBorderFocusColor,
		},
		" .uagb-gf-styler__check-style-enabled .gfield_radio input[type='radio'] + label:before" : {
			"background-color" : radioCheckBgColor,
			"color"            : radioCheckSelectColor,
			"height"           : radioCheckSize + "px",
			"width"            : radioCheckSize + "px",
			"font-size"        : "calc( " + radioCheckSize + "px / 1.2 )",
			"border-color"     : radioCheckBorderColor,
			"border-width"     : radioCheckBorderWidth + "px",
		},
		" .uagb-gf-styler__check-style-enabled .gfield_radio input[type='radio']:checked + label:before" : {
			"background-color" : radioCheckSelectColor,
		},
		" .uagb-gf-styler__check-style-enabled form .gfield_radio label" : {
			"font-size"   : radioCheckFontSize + radioCheckFontSizeType,
			"font-family" : radioCheckFontFamily,
			"font-weight" : radioCheckFontWeight,
			"line-height" : radioCheckLineHeight + radioCheckLineHeightType,
			"color"       : radioCheckLableColor,
		},
		" .uagb-gf-styler__check-style-enabled form .gfield_checkbox label" : {
			"font-size"   : radioCheckFontSize + radioCheckFontSizeType,
			"font-family" : radioCheckFontFamily,
			"font-weight" : radioCheckFontWeight,
			"line-height" : radioCheckLineHeight + radioCheckLineHeightType,
			"color"       : radioCheckLableColor,
		},

		" .gform_wrapper .gfield_description.validation_message" :{
			"color" : validationMsgColor,
		},
		" .gform_wrapper .validation_message"   :{
			"font-size"   : validationMsgFontSize + validationMsgFontSizeType,
			"font-family" : validationMsgFontFamily,
			"font-weight" : validationMsgFontWeight,
			"line-height" : validationMsgLineHeight + validationMsgLineHeightType,
		},
		" .uagb-gf-styler__error-yes .gform_wrapper .gfield.gfield_error" :{
			"background-color" : validationMsgBgColor,
		},

		" .uagb-gf-styler__error-yes .gform_wrapper li.gfield_error input:not([type='submit']):not([type='button']):not([type='image'])" : 	{
			"border-color" : highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes .gform_wrapper .gfield_error .ginput_container select" :{
			"border-color" : highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes .gform_wrapper .gfield_error .ginput_container .chosen-single" :{
			"border-color" : highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes .gform_wrapper .gfield_error .ginput_container textarea":{
			"border-color" : highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes .gform_wrapper li.gfield.gfield_error":{
			"border-color" : highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes .gform_wrapper li.gfield.gfield_error.gfield_contains_required.gfield_creditcard_warning":{
			"border-color" : highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes li.gfield_error .gfield_checkbox input[type='checkbox'] + label:before":{
			"border-color" : highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes li.gfield_error .ginput_container_consent input[type='checkbox'] + label:before" :{
			"border-color" : highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes li.gfield_error .gfield_radio input[type='radio'] + label:before" :{
			"border-color" : highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes .gform_wrapper li.gfield_error input[type='text']" :{
			"border-color" : fieldBorderWidth + "px " . fieldBorderStyle + " " + fieldBorderColor + "!important",
		},

		" .uael-gf-style-underline.uagb-gf-styler__error-yes .gform_wrapper li.gfield_error input[type='text']" :{
			"border-width" : fieldBorderWidth + "px" + "!important",
			"border-style" : "solid" + "!important",
			"border-color" : fieldBorderColor + "!important"
		},

		" .gform_wrapper div.validation_error" :{
			"color" : errorMsgColor,
			"background-color" : errorMsgBgColor,
			"border-color" : errorMsgBorderColor,
			"border-style" : "solid",
			"border-width" : msgBorderSize + "px",
			"border-radius" : msgBorderRadius + msgBorderRadiusType,
			"padding" 		: msgVrPadding + "px " + msgHrPadding + "px",
			"font-size"   : msgFontSize . msgFontSizeType,
			"font-family" : msgFontFamily,
			"font-weight" : msgFontWeight,
			"line-height" : msgLineHeight + msgLineHeightType,
		},

		" .gform_confirmation_message" :{
			"color" : successMsgColor,
			"font-size"   : successMsgFontSize + successMsgFontSizeType,
			"font-family" : successMsgFontFamily,
			"font-weight" : successMsgFontWeight,
			"line-height" : successMsgLineHeight + successMsgLineHeightType,
		},	
	}

	var tablet_selectors = {		
		" input:not([type=submit])": {			
			"font-size": inputFontSizeTablet + inputFontSizeType,	
			"line-height": inputLineHeightTablet + inputLineHeightType,	
		},	
		" select": {			
			"font-size":labelFontSizeTablet + labelFontSizeType,
			"line-height": labelLineHeightTablet + labelLineHeightType,	
		},
		" textarea": {			
			"font-size": inputFontSizeTablet + inputFontSizeType,	
			"line-height": inputLineHeightTablet + inputLineHeightType,	
		},
		" form label": {
			"font-size": labelFontSizeTablet + labelFontSizeType,
			"line-height": labelLineHeightTablet + labelLineHeightType,	
		},

		" form .gfield_radio label" :{
			"font-size": labelFontSizeTablet + labelFontSizeType,
			"line-height": labelLineHeightTablet + labelLineHeightType,	
		},
		" form .gfield_checkbox label" :{
			"font-size": labelFontSizeTablet + labelFontSizeType,
			"line-height": labelLineHeightTablet + labelLineHeightType,	
		},
		" input.gform_button": {			
			"font-size": buttonFontSizeTablet + buttonFontSizeType,	
			"line-height": buttonLineHeightTablet + buttonLineHeightType,			
		},
		" .uagb-gf-styler__check-style-enabled form .gfield_radio label" :{
			"font-size": radioCheckFontSizeTablet + radioCheckFontSizeType,
			"line-height": radioCheckLineHeightTablet + radioCheckLineHeightType,	
		},
		" .uagb-gf-styler__check-style-enabled form .gfield_checkbox label" :{
			"font-size": radioCheckFontSizeTablet + radioCheckFontSizeType,
			"line-height": radioCheckLineHeightTablet + radioCheckLineHeightType,	
		},
		" span.wpgf-not-valid-tip" :{
			"font-size": validationMsgFontSizeTablet + validationMsgFontSizeType,
			"line-height": validationMsgLineHeightTablet + validationMsgLineHeightType,	
		},
		" .gform_wrapper .validation_message"    :{
			"font-size"  : validationMsgFontSizeTablet + validationMsgFontSizeType,
			"line-height": validationMsgLineHeightTablet + validationMsgLineHeightType,
		},
		" .gform_wrapper div.validation_error" :{
			"font-size"  : msgFontSizeTablet + msgFontSizeType,
			"line-height": msgLineHeightTablet + msgLineHeightType,
		},
		" .gform_confirmation_message" :{
			"font-size"  : successMsgFontSizeTablet + successMsgFontSizeType,
			"line-height": successMsgLineHeightTablet + successMsgLineHeightType,
		},
	}

	var mobile_selectors = {		
		" input:not([type=submit])": {			
			"font-size": inputFontSizeMobile + inputFontSizeType,	
			"line-height": inputLineHeightMobile + inputLineHeightType,		
		},	
		" select": {			
			"font-size":labelFontSizeMobile + labelFontSizeType,
			"line-height": labelLineHeightMobile + labelLineHeightType,	
		},
		" textarea": {			
			"font-size": inputFontSizeTablet + inputFontSizeType,	
			"line-height": inputLineHeightTablet + inputLineHeightType,	
		},
		" form label": {
			"font-size": inputFontSizeMobile + inputFontSizeType,	
			"line-height": inputLineHeightMobile + inputLineHeightType,
		},
		" form .gfield_radio label" :{
			"font-size": labelFontSizeMobile + labelFontSizeType,
			"line-height": labelLineHeightMobile + labelLineHeightType,	
		},
		" form .gfield_checkbox label" :{
			"font-size": labelFontSizeMobile + labelFontSizeType,
			"line-height": labelLineHeightMobile + labelLineHeightType,	
		},
		" input.gform_button": {			
			"font-size": buttonFontSizeMobile + buttonFontSizeType,	
			"line-height": buttonLineHeightMobile + buttonLineHeightType,			
		},
		" .uagb-gf-styler__check-style-enabled form .gfield_radio label" :{
			"font-size": radioCheckFontSizeMobile + radioCheckFontSizeType,
			"line-height": radioCheckLineHeightMobile + radioCheckLineHeightType,	
		},
		" .uagb-gf-styler__check-style-enabled form .gfield_checkbox label" :{
			"font-size": radioCheckFontSizeMobile + radioCheckFontSizeType,
			"line-height": radioCheckLineHeightMobile + radioCheckLineHeightType,	
		},
		" span.wpgf-not-valid-tip" :{
			"font-size": validationMsgFontSizeMobile + validationMsgFontSizeType,
			"line-height": validationMsgLineHeightMobile + validationMsgLineHeightType,	
		},		
		" .gform_wrapper .validation_message"    :{
			"font-size"  : validationMsgFontSizeMobile + validationMsgFontSizeType,
			"line-height": validationMsgLineHeightMobile + validationMsgLineHeightType,
		},
		" .gform_wrapper div.validation_error" :{
			"font-size"  : msgFontSizeMobile + msgFontSizeType,
			"line-height": msgLineHeightMobile + msgLineHeightType,
		},
		" .gform_confirmation_message" :{
			"font-size"  : successMsgFontSizeMobile + successMsgFontSizeType,
			"line-height": successMsgLineHeightMobile + successMsgLineHeightType,
		},
	}	

	var styling_css = generateCSS( selectors, `.block-editor-page #wpwrap #uagb-gf-styler-${ props.clientId }` )

	styling_css += generateCSS( tablet_selectors, `.block-editor-page #wpwrap #uagb-gf-styler-${ props.clientId }`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `.block-editor-page #wpwrap #uagb-gf-styler-${ props.clientId }`, true, "mobile" )

	return styling_css
}

export default styling
