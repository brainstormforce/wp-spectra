/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function styling( props ) {

	const {
		align,
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
		buttonBorderStyle,
		buttonBorderWidth,
		buttonBorderRadius,
		buttonBorderColor,
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
		validationMsgFontSize, 
		validationMsgFontSizeType,
		validationMsgFontSizeTablet,
		validationMsgFontSizeMobile,
		validationMsgLineHeightType,
		validationMsgLineHeight,
		validationMsgLineHeightTablet,
		validationMsgLineHeightMobile,
		msgFontSize,
		msgFontSizeType,
		msgFontSizeTablet,
		msgFontSizeMobile,	
		msgLineHeightType,
		msgLineHeight,
		msgLineHeightTablet,
		msgLineHeightMobile,
		radioCheckBorderRadiusType,
		fieldBorderRadiusType,
		buttonBorderRadiusType
	} = props.attributes

	var selectors = {
		" .wpcf7 .wpcf7-form": {
			"text-align": align,
		},
		" .wpcf7 form.wpcf7-form:not(input)": {
			"color": fieldLabelColor,
		},
		" .wpcf7 input:not([type=submit])": {
			"background-color" : fieldBgColor,
			"color"            : fieldInputColor,
			"border-style"     : fieldBorderStyle,
			"border-color"     : fieldBorderColor,
			"border-width"     : fieldBorderWidth+"px",
			"border-radius"    : fieldBorderRadius+fieldBorderRadiusType,
			"padding-left"     : fieldHrPadding+"px",
			"padding-right"    : fieldHrPadding+"px",
			"padding-top"      : fieldVrPadding+"px",
			"padding-bottom"   : fieldVrPadding+"px",	
			"margin-top"       : fieldLabelSpacing+"px",
			"margin-bottom"    : fieldSpacing+"px",
			"font-size"        : inputFontSize+inputFontSizeType,	
			"font-family"      : inputFontFamily,
			"font-weight"      : inputFontWeight,
			"line-height"      : inputLineHeight + inputLineHeightType,	
			"text-align": align,
		},	
		" .wpcf7 select": {
			"background-color" : fieldBgColor,
			"color"            : fieldLabelColor,
			"border-style"     : fieldBorderStyle,
			"border-color"     : fieldBorderColor,
			"border-width"     : fieldBorderWidth+"px",
			"border-radius"    : fieldBorderRadius+fieldBorderRadiusType,			
			"margin-top"       : fieldLabelSpacing+"px",
			"margin-bottom"    : fieldSpacing+"px",
			"font-size"        : labelFontSize+labelFontSizeType,	
			"font-family"      : labelFontFamily,
			"font-weight"      : labelFontWeight,
			"line-height"      : labelLineHeight + labelLineHeightType,
			"text-align": align,
		},
		" .wpcf7 select.wpcf7-form-control.wpcf7-select:not([multiple='multiple'])": {			
			"padding-left"     : fieldHrPadding+"px",
			"padding-right"    : fieldHrPadding+"px",
			"padding-top"      : fieldVrPadding+"px",
			"padding-bottom"   : fieldVrPadding+"px",			
		},
		" .wpcf7 select.wpcf7-select[multiple='multiple'] option": {			
			"padding-left"     : fieldHrPadding+"px",
			"padding-right"    : fieldHrPadding+"px",
			"padding-top"      : fieldVrPadding+"px",
			"padding-bottom"   : fieldVrPadding+"px",			
		},
		" .wpcf7 textarea": {
			"background-color" : fieldBgColor,
			"color"            : fieldInputColor,
			"border-color"     : fieldBorderColor,
			"border-width"     : fieldBorderWidth+"px",
			"border-radius"    : fieldBorderRadius+fieldBorderRadiusType,
			"border-style"     : fieldBorderStyle,
			"padding-left"     : fieldHrPadding+"px",
			"padding-right"    : fieldHrPadding+"px",
			"padding-top"      : fieldVrPadding+"px",
			"padding-bottom"   : fieldVrPadding+"px",
			"margin-top"       : fieldLabelSpacing+"px",
			"margin-bottom"    : fieldSpacing+"px",
			"font-size"        : inputFontSize+inputFontSizeType,	
			"font-family"      : inputFontFamily,
			"font-weight"      : inputFontWeight,
			"line-height"      : inputLineHeight + inputLineHeightType,
			"text-align": align,
		},
		' .wpcf7 input::placeholder': {  
		    'color'     : fieldInputColor,   
		    "text-align": align, 
		},
		' .wpcf7 textarea::placeholder': {  
		    'color'     : fieldInputColor,  
		    "text-align": align,  
		},
		" .wpcf7 textarea::placeholder": {
			"color": fieldInputColor,
			"text-align": align,
		},	
		" .wpcf7 form label": {
			"font-size": labelFontSize+labelFontSizeType,
			"font-size":labelFontSize+labelFontSizeType,
			"font-family": labelFontFamily,
			"font-weight": labelFontWeight,
			"line-height": labelLineHeight + labelLineHeightType,
		},
		" .wpcf7 form .wpcf7-list-item-label" :{
			"font-size": labelFontSize+labelFontSizeType,
			"font-size":labelFontSize+labelFontSizeType,
			"font-family": labelFontFamily,
			"font-weight": labelFontWeight,
			"line-height": labelLineHeight + labelLineHeightType,
		},

		//Focus
		" .wpcf7 form input:not([type=submit]):focus": {
			"border-color": fieldBorderFocusColor,
		},
		" .wpcf7 form select:focus": {
			"border-color": fieldBorderFocusColor,
		},
		" .wpcf7 textarea:focus": {
			"border-color": fieldBorderFocusColor,
		},

		//Submit button		
		" .wpcf7 input.wpcf7-form-control.wpcf7-submit": {
			"color": buttonTextColor,
			"background-color": buttonBgColor,
			"font-size": buttonFontSize+buttonFontSizeType,
			"font-family":  buttonFontFamily,
			"font-weight":  buttonFontWeight,
			"line-height":  buttonLineHeight +  buttonLineHeightType,
			"border-color": buttonBorderColor,
			"border-style": buttonBorderStyle,
			"border-width": buttonBorderWidth+"px",
			"border-radius": buttonBorderRadius+buttonBorderRadiusType,
			"padding-left": buttonHrPadding+"px",
			"padding-right": buttonHrPadding+"px",
			"padding-top": buttonVrPadding+"px",
			"padding-bottom": buttonVrPadding+"px",
		},

		// Check box Radio.
		" .wpcf7 .wpcf7-checkbox input[type='checkbox']:checked + span:before": {
			"background-color": fieldBgColor,
			"color": fieldInputColor,
			"font-size": "calc( "+fieldVrPadding+"px / 1.2 )",
			"border-color": fieldBorderFocusColor,
		},
		" .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			"background-color": fieldBgColor,
			"color": fieldInputColor,
			"height": fieldVrPadding+"px",
			"width": fieldVrPadding+"px",	
			"font-size": "calc( "+fieldVrPadding+"px / 1.2 )",	
			"border-style": fieldBorderStyle,
			"border-color": fieldBorderColor,
			"border-width": fieldBorderWidth+"px",
			"border-radius": fieldBorderRadius+fieldBorderRadiusType,	
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox']:checked + span:before": {
			"background-color": fieldBgColor,
			"color": fieldInputColor,
			"border-color": fieldBorderFocusColor,
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			"background-color": fieldBgColor,
			"color": fieldInputColor,
			"height": fieldVrPadding+"px",
			"width": fieldVrPadding+"px",
			"font-size": "calc( "+fieldVrPadding+"px / 1.2 )",
			"border-style": fieldBorderStyle,
			"border-color": fieldBorderColor,
			"border-width": fieldBorderWidth+"px",
			"border-radius": fieldBorderRadius+fieldBorderRadiusType,
		},
		" .wpcf7 .wpcf7-radio input[type='radio'] + span:before": {
			"background-color": fieldBgColor,
			"color": fieldInputColor,
			"height": fieldVrPadding+"px",
			"width": fieldVrPadding+"px",		
			"border-style": fieldBorderStyle,
			"border-color": fieldBorderColor,
			"border-width": fieldBorderWidth+"px",
			"height": "calc( "+fieldVrPadding+"px / 1.2 )",
			"width": "calc( "+fieldVrPadding+"px / 1.2 )"
		},

		// underline border	
		" .uagb-cf7-styler__field-style-underline .wpcf7 input:not([type=submit])": {
			"border-style": "none",
			"border-bottom-color": fieldBorderColor,
			"border-bottom-style": "solid",
			"border-bottom-width": fieldBorderWidth+"px",
			"border-radius": fieldBorderRadius+fieldBorderRadiusType,
		},
		" .uagb-cf7-styler__field-style-underline textarea": {
			"border-style": "none",
			"border-bottom-color": fieldBorderColor,
			"border-bottom-style": "solid",
			"border-bottom-width": fieldBorderWidth+"px",
			"border-radius": fieldBorderRadius+fieldBorderRadiusType,
		},	
		" .uagb-cf7-styler__field-style-underline select": {
			"border-style": "none",
			"border-bottom-color": fieldBorderColor,
			"border-bottom-style": "solid",
			"border-bottom-width": fieldBorderWidth+"px",
			"border-radius": fieldBorderRadius+fieldBorderRadiusType,
		},
		" .uagb-cf7-styler__field-style-underline textarea": {
			"border-style": "none",
			"border-bottom-color": fieldBorderColor,
			"border-bottom-style": "solid",
			"border-bottom-width": fieldBorderWidth+"px",
			"border-radius": fieldBorderRadius+fieldBorderRadiusType,
		},
		" .uagb-cf7-styler__field-style-underline .wpcf7-checkbox input[type='checkbox'] + span:before": {
			"border-style": "solid",			
		},
		" .uagb-cf7-styler__field-style-underline .wpcf7 input[type='radio'] + span:before": {
			"border-style": "solid",			
		},
		" .uagb-cf7-styler__field-style-underline .wpcf7-acceptance input[type='checkbox'] + span:before": {
			"border-style": "solid",		
		},			
		" .wpcf7-radio input[type='radio']:checked + span:before": {
			"background-color": fieldInputColor,
			"border-color": fieldBorderFocusColor,	
		},

		// Override check box , Radio & acceptance.
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			"background-color": radioCheckBgColor,
			"color": radioCheckSelectColor,
			"height": radioCheckSize+"px",
			"width": radioCheckSize+"px",	
			"font-size": "calc( "+radioCheckSize+"px / 1.2 )",
			"border-color": radioCheckBorderColor,	
			"border-width": radioCheckBorderWidth+"px",	
			"border-radius": radioCheckBorderRadius+radioCheckBorderRadiusType,	
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-checkbox input[type='checkbox']:checked + span:before": {			
			"border-color": fieldBorderFocusColor,				
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			"background-color": radioCheckBgColor,
			"color": radioCheckSelectColor,
			"height": radioCheckSize+"px",
			"width": radioCheckSize+"px",	
			"font-size": "calc( "+radioCheckSize+"px / 1.2 )",
			"border-color": radioCheckBorderColor,	
			"border-width": radioCheckBorderWidth+"px",	
			"border-radius": radioCheckBorderRadius+radioCheckBorderRadiusType,	
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-acceptance input[type='checkbox']:checked + span:before": {			
			"border-color": fieldBorderFocusColor,				
		},

		" .uagb-cf7-styler__check-style-enabled .wpcf7 input[type='radio'] + span:before": {
			"background-color": radioCheckBgColor,
			"color": radioCheckSelectColor,
			"height": radioCheckSize+"px",
			"width": radioCheckSize+"px",	
			"font-size": "calc( "+radioCheckSize+"px / 1.2 )",
			"border-color": radioCheckBorderColor,	
			"border-width": radioCheckBorderWidth+"px",					
		},

		" .uagb-cf7-styler__check-style-enabled .wpcf7-radio input[type='radio']:checked + span:before": {
			"background-color": radioCheckSelectColor,
			"border-color": fieldBorderFocusColor,				
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label" :{
			"font-size": radioCheckFontSize+radioCheckFontSizeType,
			"font-family":  radioCheckFontFamily,
			"font-weight":  radioCheckFontWeight,
			"line-height":  radioCheckLineHeight +  radioCheckLineHeightType,
			"color": radioCheckLableColor,
		},		
	}

	var tablet_selectors = {		
		" .wpcf7 input:not([type=submit])": {			
			"font-size": inputFontSizeTablet + inputFontSizeType,	
			"line-height": inputLineHeightTablet + inputLineHeightType,	
		},	
		" .wpcf7 select": {			
			"font-size":labelFontSizeTablet + labelFontSizeType,
			"line-height": labelLineHeightTablet + labelLineHeightType,	
		},
		" .wpcf7 textarea": {			
			"font-size": inputFontSizeTablet + inputFontSizeType,	
			"line-height": inputLineHeightTablet + inputLineHeightType,	
		},
		" .wpcf7 form label": {
			"font-size": labelFontSizeTablet + labelFontSizeType,
			"line-height": labelLineHeightTablet + labelLineHeightType,	
		},

		" .wpcf7 form .wpcf7-list-item-label" :{
			"font-size": labelFontSizeTablet + labelFontSizeType,
			"line-height": labelLineHeightTablet + labelLineHeightType,	
		},
		" .wpcf7 input.wpcf7-form-control.wpcf7-submit": {			
			"font-size": buttonFontSizeTablet + buttonFontSizeType,	
			"line-height": buttonLineHeightTablet + buttonLineHeightType,			
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label" :{
			"font-size": radioCheckFontSizeTablet + radioCheckFontSizeType,
			"line-height": radioCheckLineHeightTablet + radioCheckLineHeightType,	
		},
		" span.wpcf7-not-valid-tip" :{
			"font-size": validationMsgFontSizeTablet + validationMsgFontSizeType,
			"line-height": validationMsgLineHeightTablet + validationMsgLineHeightType,	
		},
	}

	var mobile_selectors = {		
		" .wpcf7 input:not([type=submit])": {			
			"font-size": inputFontSizeMobile + inputFontSizeType,	
			"line-height": inputLineHeightMobile + inputLineHeightType,		
		},	
		" .wpcf7 select": {			
			"font-size":labelFontSizeMobile + labelFontSizeType,
			"line-height": labelLineHeightMobile + labelLineHeightType,	
		},
		" .wpcf7 textarea": {			
			"font-size": inputFontSizeTablet + inputFontSizeType,	
			"line-height": inputLineHeightTablet + inputLineHeightType,	
		},
		" .wpcf7 form label": {
			"font-size": inputFontSizeMobile + inputFontSizeType,	
			"line-height": inputLineHeightMobile + inputLineHeightType,
		},
		" .wpcf7 form .wpcf7-list-item-label" :{
			"font-size": labelFontSizeMobile + labelFontSizeType,
			"line-height": labelLineHeightMobile + labelLineHeightType,	
		},
		" .wpcf7 input.wpcf7-form-control.wpcf7-submit": {			
			"font-size": buttonFontSizeMobile + buttonFontSizeType,	
			"line-height": buttonLineHeightMobile + buttonLineHeightType,			
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label" :{
			"font-size": radioCheckFontSizeMobile + radioCheckFontSizeType,
			"line-height": radioCheckLineHeightMobile + radioCheckLineHeightType,	
		},
		" span.wpcf7-not-valid-tip" :{
			"font-size": validationMsgFontSizeMobile + validationMsgFontSizeType,
			"line-height": validationMsgLineHeightMobile + validationMsgLineHeightType,	
		},
	}	

	var styling_css = generateCSS( selectors, `.block-editor-page #wpwrap #uagb-cf7-styler-${ props.clientId }` )

	styling_css += generateCSS( tablet_selectors, `.block-editor-page #wpwrap #uagb-cf7-styler-${ props.clientId }`, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, `.block-editor-page #wpwrap #uagb-cf7-styler-${ props.clientId }`, true, "mobile" )

	return styling_css
}

export default styling
