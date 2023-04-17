/**
 * Set inline styles.
 *
 * @param  {Object} props - The block object.
 * @return {Object} The inline background type CSS.
 */
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( attributes, clientId, name ) {
	const blockName = name.replace( 'uagb/', '' );

	const {
		align,
		titleDescAlignment,
		fieldBgColor,
		fieldLabelColor,
		fieldInputColor,
		fieldBorderStyle,
		fieldBorderWidth,
		fieldBorderWidthTablet,
		fieldBorderWidthMobile,
		fieldBorderWidthType,
		fieldBorderRadius,
		fieldBorderColor,
		fieldBorderFocusColor,
		buttonTextColor,
		buttonBgColor,
		buttonTextHoverColor,
		buttonBgHoverColor,
		buttonBorderStyle,
		buttonBorderWidth,
		buttonBorderWidthMobile,
		buttonBorderWidthTablet,
		buttonBorderWidthType,
		buttonBorderRadius,
		buttonBorderColor,
		buttonBorderHoverColor,
		fieldSpacing,
		fieldSpacingTablet,
		fieldSpacingMobile,
		fieldLabelSpacing,
		fieldLabelSpacingTablet,
		fieldLabelSpacingMobile,
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
		textAreaHeightTablet,
		textAreaHeightMobile,
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
		radioCheckSizeTablet,
		radioCheckSizeMobile,
		radioCheckBgColor,
		radioCheckSelectColor,
		radioCheckLableColor,
		radioCheckBorderColor,
		radioCheckBorderWidth,
		radioCheckBorderWidthTablet,
		radioCheckBorderWidthMobile,
		radioCheckBorderWidthType,
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
		msgBorderSizeType,
		msgBorderRadius,
		msgBorderRadiusType,
		successMsgColor,
		fieldtopPadding,
		fieldrightPadding,
		fieldbottomPadding,
		fieldleftPadding,
		//Mobile
		fieldtopMobilePadding,
		fieldrightMobilePadding,
		fieldbottomMobilePadding,
		fieldleftMobilePadding,
		//Tablet
		fieldtopTabletPadding,
		fieldrightTabletPadding,
		fieldbottomTabletPadding,
		fieldleftTabletPadding,
		fieldpaddingUnit,
		fieldmobilePaddingUnit,
		fieldtabletPaddingUnit,

		buttontopPadding,
		buttonrightPadding,
		buttonbottomPadding,
		buttonleftPadding,
		//Mobile
		buttontopMobilePadding,
		buttonrightMobilePadding,
		buttonbottomMobilePadding,
		buttonleftMobilePadding,
		//Tablet
		buttontopTabletPadding,
		buttonrightTabletPadding,
		buttonbottomTabletPadding,
		buttonleftTabletPadding,
		buttonpaddingUnit,
		buttonmobilePaddingUnit,
		buttontabletPaddingUnit,

		msgtopPadding,
		msgrightPadding,
		msgbottomPadding,
		msgleftPadding,
		//Mobile
		msgtopMobilePadding,
		msgrightMobilePadding,
		msgbottomMobilePadding,
		msgleftMobilePadding,
		//Tablet
		msgtopTabletPadding,
		msgrightTabletPadding,
		msgbottomTabletPadding,
		msgleftTabletPadding,
		msgpaddingUnit,
		msgmobilePaddingUnit,
		msgtabletPaddingUnit,
		labelFontStyle,
		labelTransform,
		labelDecoration,
		inputFontStyle,
		inputTransform,
		inputDecoration,
		buttonFontStyle,
		buttonTransform,
		buttonDecoration,
		radioCheckFontStyle,
		radioCheckTransform,
		radioCheckDecoration,
		validationMsgFontStyle,
		validationMsgTransform,
		validationMsgDecoration,
		msgFontStyle,
		msgTransform,
		msgDecoration,
		successMsgDecoration,
		successMsgFontStyle,
		successMsgTransform,
		labelLetterSpacing,
		labelLetterSpacingTablet,
		labelLetterSpacingMobile,
		labelLetterSpacingType,
		inputLetterSpacing,
		inputLetterSpacingTablet,
		inputLetterSpacingMobile,
		inputLetterSpacingType,
		radioCheckLetterSpacing,
		radioCheckLetterSpacingTablet,
		radioCheckLetterSpacingMobile,
		radioCheckLetterSpacingType,
		buttonLetterSpacing,
		buttonLetterSpacingTablet,
		buttonLetterSpacingMobile,
		buttonLetterSpacingType,
		validationMsgLetterSpacing,
		validationMsgLetterSpacingTablet,
		validationMsgLetterSpacingMobile,
		validationMsgLetterSpacingType,
		msgLetterSpacing,
		msgLetterSpacingTablet,
		msgLetterSpacingMobile,
		msgLetterSpacingType,
		successMsgLetterSpacing,
		successMsgLetterSpacingTablet,
		successMsgLetterSpacingMobile,
		successMsgLetterSpacingType,
	} = attributes;

	const selectors = {
		' .gform_wrapper form': {
			'text-align': align,
		},
		' .wp-block-uagb-gf-styler form:not(input)': {
			'color': fieldLabelColor,
		},
		' .gform_heading': {
			'text-align': titleDescAlignment,
		},
		' input:not([type=submit])': {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'border-style': fieldBorderStyle,
			'border-color': fieldBorderColor,
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ),
				fieldBorderWidthType
			),
			'border-radius': generateCSSUnit( fieldBorderRadius, fieldBorderRadiusType ),
			'padding-left': generateCSSUnit( fieldleftPadding, fieldpaddingUnit ),
			'padding-right': generateCSSUnit( fieldrightPadding, fieldpaddingUnit ),
			'padding-top': generateCSSUnit( fieldtopPadding, fieldpaddingUnit ),
			'padding-bottom': generateCSSUnit( fieldbottomPadding, fieldpaddingUnit ),
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacing, 'fieldLabelSpacing', blockName ),
				'px'
			),
			'margin-bottom': generateCSSUnit( getFallbackNumber( fieldSpacing, 'fieldSpacing', blockName ), 'px' ),
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-decoration': inputDecoration,
			'text-transform': inputTransform,
			'font-weight': inputFontWeight,
			'line-height': generateCSSUnit( inputLineHeight, inputLineHeightType ),
			'text-align': align,
			'letter-spacing': generateCSSUnit( inputLetterSpacing, inputLetterSpacingType ),
		},
		' select': {
			'background-color': fieldBgColor,
			'border-style': fieldBorderStyle,
			'border-color': fieldBorderColor,
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ),
				fieldBorderWidthType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( fieldBorderRadius, 'fieldBorderRadius', blockName ),
				fieldBorderRadiusType
			),
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacing, 'fieldLabelSpacing', blockName ),
				'px'
			),
			'margin-bottom': generateCSSUnit( getFallbackNumber( fieldSpacing, 'fieldSpacing', blockName ), 'px' ),
			'color': fieldInputColor,
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-decoration': inputDecoration,
			'text-transform': inputTransform,
			'font-weight': inputFontWeight,
			'line-height': generateCSSUnit( inputLineHeight, inputLineHeightType ),
			'text-align': align,
			'padding-left': generateCSSUnit( fieldleftPadding, fieldpaddingUnit ),
			'padding-right': generateCSSUnit( fieldrightPadding, fieldpaddingUnit ),
			'padding-top': generateCSSUnit( fieldtopPadding, fieldpaddingUnit ),
			'padding-bottom': generateCSSUnit( fieldbottomPadding, fieldpaddingUnit ),
			'letter-spacing': generateCSSUnit( inputLetterSpacing, inputLetterSpacingType ),
		},
		' .chosen-container-single span': {
			'background-color': fieldBgColor,
			'border-style': fieldBorderStyle,
			'border-color': fieldBorderColor,
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ),
				fieldBorderWidthType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( fieldBorderRadius, 'fieldBorderRadius', blockName ),
				fieldBorderRadiusType
			),
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacing, 'fieldLabelSpacing', blockName ),
				'px'
			),
			'margin-bottom': generateCSSUnit( getFallbackNumber( fieldSpacing, 'fieldSpacing', blockName ), 'px' ),
			'color': fieldInputColor,
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-decoration': inputDecoration,
			'text-transform': inputTransform,
			'font-weight': inputFontWeight,
			'line-height': generateCSSUnit( inputLineHeight, inputLineHeightType ),
			'text-align': align,
			'padding-left': generateCSSUnit( fieldleftPadding, fieldpaddingUnit ),
			'padding-right': generateCSSUnit( fieldrightPadding, fieldpaddingUnit ),
			'padding-top': generateCSSUnit( fieldtopPadding, fieldpaddingUnit ),
			'padding-bottom': generateCSSUnit( fieldbottomPadding, fieldpaddingUnit ),
			'letter-spacing': generateCSSUnit( inputLetterSpacing, inputLetterSpacingType ),
		},
		' .chosen-container-single.chosen-container-active .chosen-single span': {
			'margin-bottom': 0,
		},
		" select.wpgf-form-control.wpgf-select:not([multiple='multiple'])": {
			'padding-left': generateCSSUnit( fieldleftPadding, fieldpaddingUnit ),
			'padding-right': generateCSSUnit( fieldrightPadding, fieldpaddingUnit ),
			'padding-top': generateCSSUnit( fieldtopPadding, fieldpaddingUnit ),
			'padding-bottom': generateCSSUnit( fieldbottomPadding, fieldpaddingUnit ),
		},
		" select.wpgf-select[multiple='multiple'] option": {
			'padding-left': generateCSSUnit( fieldleftPadding, fieldpaddingUnit ),
			'padding-right': generateCSSUnit( fieldrightPadding, fieldpaddingUnit ),
			'padding-top': generateCSSUnit( fieldtopPadding, fieldpaddingUnit ),
			'padding-bottom': generateCSSUnit( fieldbottomPadding, fieldpaddingUnit ),
		},
		' .gform_wrapper .gfield textarea': {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
		},
		' .gform_wrapper.gravity-theme .gfield textarea': {
			'border-color': fieldBorderColor,
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ),
				fieldBorderWidthType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( fieldBorderRadius, 'fieldBorderRadius', blockName ),
				fieldBorderRadiusType
			),
			'border-style': fieldBorderStyle,
			'padding-left': generateCSSUnit( fieldleftPadding, fieldpaddingUnit ),
			'padding-right': generateCSSUnit( fieldrightPadding, fieldpaddingUnit ),
			'padding-top': generateCSSUnit( fieldtopPadding, fieldpaddingUnit ),
			'padding-bottom': generateCSSUnit( fieldbottomPadding, fieldpaddingUnit ),
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacing, 'fieldLabelSpacing', blockName ),
				'px'
			),
			'margin-bottom': generateCSSUnit( getFallbackNumber( fieldSpacing, 'fieldSpacing', blockName ), 'px' ),
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-decoration': inputDecoration,
			'text-transform': inputTransform,
			'font-weight': inputFontWeight,
			'line-height': generateCSSUnit( inputLineHeight, inputLineHeightType ),
			'text-align': align,
			'height':
				'auto' === getFallbackNumber( textAreaHeight, 'textAreaHeight', blockName )
					? getFallbackNumber( textAreaHeight, 'textAreaHeight', blockName )
					: getFallbackNumber( textAreaHeight, 'textAreaHeight', blockName ) + 'px',
			'letter-spacing': generateCSSUnit( inputLetterSpacing, inputLetterSpacingType ),
		},
		' textarea::placeholder': {
			'color': fieldInputColor,
			'text-align': align,
		},
		' input::placeholder': {
			'color': fieldInputColor,
			'text-align': align,
		},
		' form .gfield_label': {
			'color': fieldLabelColor,
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'font-family': labelFontFamily,
			'font-style': labelFontStyle,
			'text-decoration': labelDecoration,
			'text-transform': labelTransform,
			'font-weight': labelFontWeight,
			'line-height': generateCSSUnit( labelLineHeight, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacing, labelLetterSpacingType ),
		},
		' form .gfield_radio label.gfield_label': {
			'color': fieldLabelColor,
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'font-family': labelFontFamily,
			'font-style': labelFontStyle,
			'text-decoration': labelDecoration,
			'text-transform': labelTransform,
			'font-weight': labelFontWeight,
			'line-height': generateCSSUnit( labelLineHeight, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacing, labelLetterSpacingType ),
		},
		' form .gfield_checkbox label.gfield_label': {
			'color': fieldLabelColor,
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'font-family': labelFontFamily,
			'font-style': labelFontStyle,
			'text-decoration': labelDecoration,
			'text-transform': labelTransform,
			'font-weight': labelFontWeight,
			'line-height': generateCSSUnit( labelLineHeight, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacing, labelLetterSpacingType ),
		},
		" .wpgf .gfield_checkbox input[type='checkbox'] + label, .wpgf .gfield_checkbox input[type='checkbox'] + label": {
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacing, 'fieldLabelSpacing', blockName ),
				'px'
			),
		},

		// Focus.
		' form input:not([type=submit]):focus': {
			'border-color': fieldBorderFocusColor,
		},
		' form select:focus': {
			'border-color': fieldBorderFocusColor,
		},
		' textarea:focus': {
			'border-color': fieldBorderFocusColor,
		},

		// Submit button.
		' input.gform_button': {
			'color': buttonTextColor,
			'background-color': buttonBgColor,
			'font-size': generateCSSUnit( buttonFontSize, buttonFontSizeType ) + ' !important',
			'font-family': buttonFontFamily,
			'font-style': buttonFontStyle,
			'text-decoration': buttonDecoration,
			'text-transform': buttonTransform,
			'font-weight': buttonFontWeight,
			'line-height': generateCSSUnit( buttonLineHeight, buttonLineHeightType ),
			'border-color': buttonBorderColor,
			'border-style': buttonBorderStyle,
			'border-width': generateCSSUnit(
				getFallbackNumber( buttonBorderWidth, 'buttonBorderWidth', blockName ),
				buttonBorderWidthType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( buttonBorderRadius, 'buttonBorderRadius', blockName ),
				buttonBorderRadiusType
			),
			'padding-left': generateCSSUnit( buttonleftPadding, buttonpaddingUnit ),
			'padding-right': generateCSSUnit( buttonrightPadding, buttonpaddingUnit ),
			'padding-top': generateCSSUnit( buttontopPadding, buttonpaddingUnit ),
			'padding-bottom': generateCSSUnit( buttonbottomPadding, buttonpaddingUnit ),
			'letter-spacing': generateCSSUnit( buttonLetterSpacing, buttonLetterSpacingType ),
		},
		':hover input.gform_button': {
			'color': buttonTextHoverColor,
			'background-color': buttonBgHoverColor,
			'border-color': buttonBorderHoverColor,
		},
		':hover input.gform_next_button': {
			'color': buttonTextHoverColor,
			'background-color': buttonBgHoverColor,
			'border-color': buttonBorderHoverColor,
		},

		// Underline border.
		' .uagb-gf-styler__field-style-underline input:not([type=submit])': {
			'border-style': 'none',
			'border-bottom-color': fieldBorderColor,
			'border-bottom-style': 'solid',
			'border-bottom-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ),
				fieldBorderWidthType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( fieldBorderRadius, 'fieldBorderRadius', blockName ),
				fieldBorderRadiusType
			),
		},
		' .uagb-gf-styler__field-style-underline textarea': {
			'border-style': 'none',
			'border-bottom-color': fieldBorderColor,
			'border-bottom-style': 'solid',
			'border-bottom-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ),
				fieldBorderWidthType
			),
			'border-radius': generateCSSUnit( fieldBorderRadius, fieldBorderRadiusType ),
		},
		' .uagb-gf-styler__field-style-underline select': {
			'border-style': 'none',
			'border-bottom-color': fieldBorderColor,
			'border-bottom-style': 'solid',
			'border-bottom-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ),
				fieldBorderWidthType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( fieldBorderRadius, 'fieldBorderRadius', blockName ),
				fieldBorderRadiusType
			),
		},
		" .uagb-gf-styler__check-style-enabled input[type='radio'] + label:before": {
			'border-style': 'solid',
		},
		" .uagb-gf-styler__field-style-box .gfield_checkbox input[type='checkbox']:checked + label:before": {
			'border-style': 'solid',
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ),
				fieldBorderWidthType
			),
			'border-radius': generateCSSUnit( fieldBorderRadius, fieldBorderRadiusType ),
			'font-size': 'calc( ' + getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ) + 'px / 1.2 )',
		},
		" .uagb-gf-styler__field-style-box input[type='checkbox']:checked + label:before": {
			'border-style': 'solid',
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ),
				fieldBorderWidthType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( fieldBorderRadius, 'fieldBorderRadius', blockName ),
				fieldBorderRadiusType
			),
			'font-size': 'calc( ' + getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ) + 'px / 1.2)',
		},
		" .gfield_radio input[type='radio']:checked + label:before": {
			'background-color': fieldInputColor,
		},

		// Override check box.
		" .uagb-gf-styler__check-style-enabled .gfield_checkbox input[type='checkbox'] + label:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'height': generateCSSUnit( getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ), 'px' ),
			'width': generateCSSUnit( getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ), 'px' ),
			'font-size': 'calc( ' + getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ) + 'px / 1.2 )',
			'border-color': radioCheckBorderColor,
			'border-style': 'solid',
			'border-width': generateCSSUnit(
				getFallbackNumber( radioCheckBorderWidth, 'radioCheckBorderWidth', blockName ),
				radioCheckBorderWidthType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( radioCheckBorderRadius, 'radioCheckBorderRadius', blockName ),
				radioCheckBorderRadiusType
			),
		},
		" .uagb-gf-styler__check-style-enabled .gfield_checkbox input[type='checkbox']:checked + label:before": {
			'border-color': fieldBorderFocusColor,
		},
		" .uagb-gf-styler__check-style-enabled input[type='checkbox'] + label:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'height': generateCSSUnit( getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ), 'px' ),
			'width': generateCSSUnit( getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ), 'px' ),
			'font-size': 'calc( ' + getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ) + 'px / 1.2 )',
			'border-color': radioCheckBorderColor,
			'border-width': generateCSSUnit(
				getFallbackNumber( radioCheckBorderWidth, 'radioCheckBorderWidth', blockName ),
				radioCheckBorderWidthType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( radioCheckBorderRadius, 'radioCheckBorderRadius', blockName ),
				radioCheckBorderRadiusType
			),
			'border-style': 'solid',
		},
		" .uagb-gf-styler__check-style-enabled .gfield_radio input[type='radio'] + label:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'height': generateCSSUnit( getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ), 'px' ),
			'width': generateCSSUnit( getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ), 'px' ),
			'font-size': 'calc( ' + getFallbackNumber( radioCheckSize, 'radioCheckSize', blockName ) + 'px / 1.2 )',
			'border-color': radioCheckBorderColor,
			'border-width': generateCSSUnit(
				getFallbackNumber( radioCheckBorderWidth, 'radioCheckBorderWidth', blockName ),
				radioCheckBorderWidthType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( radioCheckBorderRadius, 'radioCheckBorderRadius', blockName ),
				radioCheckBorderRadiusType
			),
		},
		" .uagb-gf-styler__check-style-enabled .gfield_radio input[type='radio']:checked + label:before": {
			'background-color': radioCheckSelectColor,
			'border-color': fieldBorderFocusColor,
		},
		' .uagb-gf-styler__check-style-enabled form .gfield_radio label': {
			'font-size': generateCSSUnit( radioCheckFontSize, radioCheckFontSizeType ),
			'font-family': radioCheckFontFamily,
			'font-style': radioCheckFontStyle,
			'text-decoration': radioCheckDecoration,
			'text-transform': radioCheckTransform,
			'font-weight': radioCheckFontWeight,
			'line-height': generateCSSUnit( radioCheckLineHeight, radioCheckLineHeightType ),
			'color': radioCheckLableColor,
			'letter-spacing': generateCSSUnit( radioCheckLetterSpacing, radioCheckLetterSpacingType ),
		},
		' .uagb-gf-styler__check-style-enabled form .gfield_checkbox label': {
			'font-size': generateCSSUnit( radioCheckFontSize, radioCheckFontSizeType ),
			'font-family': radioCheckFontFamily,
			'font-style': radioCheckFontStyle,
			'text-decoration': radioCheckDecoration,
			'text-transform': radioCheckTransform,
			'font-weight': radioCheckFontWeight,
			'line-height': generateCSSUnit( radioCheckLineHeight, radioCheckLineHeightType ),
			'color': radioCheckLableColor,
			'letter-spacing': generateCSSUnit( radioCheckLetterSpacing, radioCheckLetterSpacingType ),
		},

		' .gform_wrapper .gfield_description.validation_message': {
			'color': validationMsgColor,
		},
		' .gform_wrapper .validation_message': {
			'font-size': generateCSSUnit( validationMsgFontSize, validationMsgFontSizeType ),
			'font-family': validationMsgFontFamily,
			'font-style': validationMsgFontStyle,
			'text-decoration': validationMsgDecoration,
			'text-transform': validationMsgTransform,
			'font-weight': validationMsgFontWeight,
			'line-height': generateCSSUnit( validationMsgLineHeight, validationMsgLineHeightType ),
			'letter-spacing': generateCSSUnit( validationMsgLetterSpacing, validationMsgLetterSpacingType ),
		},
		' .uagb-gf-styler__error-yes .gform_wrapper .gfield.gfield_error': {
			'background-color': validationMsgBgColor,
		},

		" .uagb-gf-styler__error-yes .gform_wrapper li.gfield_error input:not([type='submit']):not([type='button']):not([type='image'])": {
			'border-color': highlightBorderColor,
		},

		' .uagb-gf-styler__error-yes .gform_wrapper .gfield_error .ginput_container select': {
			'border-color': highlightBorderColor,
		},

		' .uagb-gf-styler__error-yes .gform_wrapper .gfield_error .ginput_container .chosen-single': {
			'border-color': highlightBorderColor,
		},

		' .uagb-gf-styler__error-yes .gform_wrapper .gfield_error .ginput_container textarea': {
			'border-color': highlightBorderColor,
		},

		' .uagb-gf-styler__error-yes .gform_wrapper li.gfield.gfield_error': {
			'border-color': highlightBorderColor,
		},

		' .uagb-gf-styler__error-yes .gform_wrapper li.gfield.gfield_error.gfield_contains_required.gfield_creditcard_warning': {
			'border-color': highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes li.gfield_error .gfield_checkbox input[type='checkbox'] + label:before": {
			'border-color': highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes li.gfield_error .ginput_container_consent input[type='checkbox'] + label:before": {
			'border-color': highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes li.gfield_error .gfield_radio input[type='radio'] + label:before": {
			'border-color': highlightBorderColor,
		},

		" .uagb-gf-styler__error-yes .gform_wrapper li.gfield_error input[type='text']": {
			'border-color':
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ) +
				fieldBorderWidthType +
				' '.fieldBorderStyle +
				' ' +
				fieldBorderColor +
				'!important',
		},

		" .uael-gf-style-underline.uagb-gf-styler__error-yes .gform_wrapper li.gfield_error input[type='text']": {
			'border-width':
				getFallbackNumber( fieldBorderWidth, 'fieldBorderWidth', blockName ) +
				fieldBorderWidthType +
				'!important',
			'border-style': 'solid' + '!important',
			'border-color': fieldBorderColor + '!important',
		},

		' .gform_wrapper div.validation_error': {
			'color': errorMsgColor,
			'background-color': errorMsgBgColor,
			'border-color': errorMsgBorderColor,
			'border-style': 'solid',
			'border-width': generateCSSUnit(
				getFallbackNumber( msgBorderSize, 'msgBorderSize', blockName ),
				msgBorderSizeType
			),
			'border-radius': generateCSSUnit(
				getFallbackNumber( msgBorderRadius, 'msgBorderRadius', blockName ),
				msgBorderRadiusType
			),
			'padding-left': generateCSSUnit( msgleftPadding, msgpaddingUnit ),
			'padding-right': generateCSSUnit( msgrightPadding, msgpaddingUnit ),
			'padding-top': generateCSSUnit( msgtopPadding, msgpaddingUnit ),
			'padding-bottom': generateCSSUnit( msgbottomPadding, msgpaddingUnit ),
			'font-size': msgFontSize.msgFontSizeType,
			'font-family': msgFontFamily,
			'font-style': msgFontStyle,
			'text-decoration': msgDecoration,
			'text-transform': msgTransform,
			'font-weight': msgFontWeight,
			'line-height': generateCSSUnit( msgLineHeight, msgLineHeightType ),
			'letter-spacing': generateCSSUnit( msgLetterSpacing, msgLetterSpacingType ),
		},

		' .gform_confirmation_message': {
			'color': successMsgColor,
			'font-size': generateCSSUnit( successMsgFontSize, successMsgFontSizeType ),
			'font-family': successMsgFontFamily,
			'font-style': successMsgFontStyle,
			'text-decoration': successMsgDecoration,
			'text-transform': successMsgTransform,
			'font-weight': successMsgFontWeight,
			'line-height': generateCSSUnit( successMsgLineHeight, successMsgLineHeightType ),
			'letter-spacing': generateCSSUnit( successMsgLetterSpacing, successMsgLetterSpacingType ),
		},
	};

	const tabletSelectors = {
		" .uagb-gf-styler__field-style-box .gfield_checkbox input[type='checkbox']:checked + label:before": {
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidthTablet, 'fieldBorderWidthTablet', blockName ),
				fieldBorderWidthType
			),
			'font-size':
				'calc( ' + getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ) + 'px / 1.2 )',
		},
		" .uagb-gf-styler__field-style-box input[type='checkbox']:checked + label:before": {
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidthTablet, 'fieldBorderWidthTablet', blockName ),
				fieldBorderWidthType
			),
			'font-size':
				'calc( ' + getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ) + 'px / 1.2)',
		},
		" .uagb-gf-styler__check-style-enabled input[type='checkbox'] + label:before": {
			'height': generateCSSUnit(
				getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ),
				'px'
			),
			'width': generateCSSUnit(
				getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ),
				'px'
			),
			'font-size':
				'calc( ' + getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ) + 'px / 1.2 )',
			'border-width': generateCSSUnit(
				getFallbackNumber( radioCheckBorderWidthTablet, 'radioCheckBorderWidthTablet', blockName ),
				radioCheckBorderWidthType
			),
		},
		" .uagb-gf-styler__check-style-enabled .gfield_radio input[type='radio'] + label:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'border-color': radioCheckBorderColor,
			'border-style': 'solid',
			'border-radius': generateCSSUnit(
				getFallbackNumber( radioCheckBorderRadius, 'radioCheckBorderRadius', blockName ),
				radioCheckBorderRadiusType
			),
			'height': generateCSSUnit(
				getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ),
				'px'
			),
			'width': generateCSSUnit(
				getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ),
				'px'
			),
			'font-size':
				'calc( ' + getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ) + 'px / 1.2 )',
			'border-width': generateCSSUnit(
				getFallbackNumber( radioCheckBorderWidthTablet, 'radioCheckBorderWidthTablet', blockName ),
				radioCheckBorderWidthType
			),
		},
		" .uagb-gf-styler__check-style-enabled .gfield_checkbox input[type='checkbox'] + label:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'border-color': radioCheckBorderColor,
			'border-style': 'solid',
			'border-radius': generateCSSUnit(
				getFallbackNumber( radioCheckBorderRadius, 'radioCheckBorderRadius', blockName ),
				radioCheckBorderRadiusType
			),
			'height': generateCSSUnit(
				getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ),
				'px'
			),
			'width': generateCSSUnit(
				getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ),
				'px'
			),
			'font-size':
				'calc( ' + getFallbackNumber( radioCheckSizeTablet, 'radioCheckSizeTablet', blockName ) + 'px / 1.2 )',
			'border-width': generateCSSUnit(
				getFallbackNumber( radioCheckBorderWidthTablet, 'radioCheckBorderWidthTablet', blockName ),
				radioCheckBorderWidthType
			),
		},
		' input:not([type=submit])': {
			'font-size': generateCSSUnit( inputFontSizeTablet, inputFontSizeType ),
			'line-height': generateCSSUnit( inputLineHeightTablet, inputLineHeightType ),
			'padding-left': generateCSSUnit( fieldleftTabletPadding, fieldtabletPaddingUnit ),
			'padding-right': generateCSSUnit( fieldrightTabletPadding, fieldtabletPaddingUnit ),
			'padding-top': generateCSSUnit( fieldtopTabletPadding, fieldtabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( fieldbottomTabletPadding, fieldtabletPaddingUnit ),
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidthTablet, 'fieldBorderWidthTablet', blockName ),
				fieldBorderWidthType
			),
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacingTablet, 'fieldLabelSpacingTablet', blockName ),
				'px'
			),
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( fieldSpacingTablet, 'fieldSpacingTablet', blockName ),
				'px'
			),
			'letter-spacing': generateCSSUnit( inputLetterSpacingTablet, inputLetterSpacingType ),
		},
		' select': {
			'font-size': generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacingTablet, 'fieldLabelSpacingTablet', blockName ),
				'px'
			),
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( fieldSpacingTablet, 'fieldSpacingTablet', blockName ),
				'px'
			),
			'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
		},
		' .gform_wrapper.gravity-theme .gfield textarea': {
			'font-size': generateCSSUnit( inputFontSizeTablet, inputFontSizeType ),
			'line-height': generateCSSUnit( inputLineHeightTablet, inputLineHeightType ),
			'padding-left': generateCSSUnit( fieldleftTabletPadding, fieldtabletPaddingUnit ),
			'padding-right': generateCSSUnit( fieldrightTabletPadding, fieldtabletPaddingUnit ),
			'padding-top': generateCSSUnit( fieldtopTabletPadding, fieldtabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( fieldbottomTabletPadding, fieldtabletPaddingUnit ),
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacingTablet, 'fieldLabelSpacingTablet', blockName ),
				'px'
			),
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( fieldSpacingTablet, 'fieldSpacingTablet', blockName ),
				'px'
			),
			'letter-spacing': generateCSSUnit( inputLetterSpacingTablet, inputLetterSpacingType ),
			'height':
				'auto' === getFallbackNumber( textAreaHeightTablet, 'textAreaHeightTablet', blockName )
					? getFallbackNumber( textAreaHeightTablet, 'textAreaHeightTablet', blockName )
					: getFallbackNumber( textAreaHeightTablet, 'textAreaHeightTablet', blockName ) + 'px',
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidthTablet, 'fieldBorderWidthTablet', blockName ),
				fieldBorderWidthType
			),
		},
		' form label': {
			'font-size': generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
		},

		' form .gfield_radio label': {
			'font-size': generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
		},
		' form .gfield_checkbox label': {
			'font-size': generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
		},
		' input.gform_button': {
			'font-size': generateCSSUnit( buttonFontSizeTablet, buttonFontSizeType ),
			'line-height': generateCSSUnit( buttonLineHeightTablet, buttonLineHeightType ),
			'padding-left': generateCSSUnit( buttonleftTabletPadding, buttontabletPaddingUnit ),
			'padding-right': generateCSSUnit( buttonrightTabletPadding, buttontabletPaddingUnit ),
			'padding-top': generateCSSUnit( buttontopTabletPadding, buttontabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( buttonbottomTabletPadding, buttontabletPaddingUnit ),
			'border-width': generateCSSUnit(
				getFallbackNumber( buttonBorderWidthTablet, 'buttonBorderWidthTablet', blockName ),
				buttonBorderWidthType
			),
			'color': buttonTextColor,
			'background-color': buttonBgColor,
			'border-color': buttonBorderColor,
			'border-style': buttonBorderStyle,
			'letter-spacing': generateCSSUnit( buttonLetterSpacingTablet, buttonLetterSpacingType ),
		},
		' .uagb-gf-styler__check-style-enabled form .gfield_radio label': {
			'font-size': generateCSSUnit( radioCheckFontSizeTablet, radioCheckFontSizeType ),
			'line-height': generateCSSUnit( radioCheckLineHeightTablet, radioCheckLineHeightType ),
			'letter-spacing': generateCSSUnit( radioCheckLetterSpacingTablet, radioCheckLetterSpacingType ),
		},
		' .uagb-gf-styler__check-style-enabled form .gfield_checkbox label': {
			'font-size': generateCSSUnit( radioCheckFontSizeTablet, radioCheckFontSizeType ),
			'line-height': generateCSSUnit( radioCheckLineHeightTablet, radioCheckLineHeightType ),
			'letter-spacing': generateCSSUnit( radioCheckLetterSpacingTablet, radioCheckLetterSpacingType ),
		},
		' span.wpgf-not-valid-tip': {
			'font-size': generateCSSUnit( validationMsgFontSizeTablet, validationMsgFontSizeType ),
			'line-height': generateCSSUnit( validationMsgLineHeightTablet, validationMsgLineHeightType ),
		},
		' .gform_wrapper .validation_message': {
			'font-size': generateCSSUnit( validationMsgFontSizeTablet, validationMsgFontSizeType ),
			'line-height': generateCSSUnit( validationMsgLineHeightTablet, validationMsgLineHeightType ),
			'letter-spacing': generateCSSUnit( validationMsgLetterSpacingTablet, validationMsgLetterSpacingType ),
		},
		' .gform_wrapper div.validation_error': {
			'font-size': generateCSSUnit( msgFontSizeTablet, msgFontSizeType ),
			'line-height': generateCSSUnit( msgLineHeightTablet, msgLineHeightType ),
			'padding-left': generateCSSUnit( msgleftTabletPadding, msgtabletPaddingUnit ),
			'padding-right': generateCSSUnit( msgrightTabletPadding, msgtabletPaddingUnit ),
			'padding-top': generateCSSUnit( msgtopTabletPadding, msgtabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( msgbottomTabletPadding, msgtabletPaddingUnit ),
			'letter-spacing': generateCSSUnit( msgLetterSpacingTablet, msgLetterSpacingType ),
		},
		' .gform_confirmation_message': {
			'font-size': generateCSSUnit( successMsgFontSizeTablet, successMsgFontSizeType ),
			'line-height': generateCSSUnit( successMsgLineHeightTablet, successMsgLineHeightType ),
			'letter-spacing': generateCSSUnit( successMsgLetterSpacingTablet, successMsgLetterSpacingType ),
		},
	};

	const mobileSelectors = {
		" .uagb-gf-styler__field-style-box .gfield_checkbox input[type='checkbox']:checked + label:before": {
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidthMobile, 'fieldBorderWidthMobile', blockName ),
				fieldBorderWidthType
			),
			'font-size':
				'calc( ' + getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ) + 'px / 1.2 )',
		},
		" .uagb-gf-styler__field-style-box input[type='checkbox']:checked + label:before": {
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidthMobile, 'fieldBorderWidthMobile', blockName ),
				fieldBorderWidthType
			),
			'font-size':
				'calc( ' + getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ) + 'px / 1.2)',
		},
		" .uagb-gf-styler__check-style-enabled input[type='checkbox'] + label:before": {
			'height': generateCSSUnit(
				getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ),
				'px'
			),
			'width': generateCSSUnit(
				getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ),
				'px'
			),
			'font-size':
				'calc( ' + getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ) + 'px / 1.2 )',
			'border-width': generateCSSUnit(
				getFallbackNumber( radioCheckBorderWidthMobile, 'radioCheckBorderWidthMobile', blockName ),
				radioCheckBorderWidthType
			),
		},
		" .uagb-gf-styler__check-style-enabled .gfield_radio input[type='radio'] + label:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'border-color': radioCheckBorderColor,
			'border-style': 'solid',
			'border-radius': generateCSSUnit(
				getFallbackNumber( radioCheckBorderRadius, 'radioCheckBorderRadius', blockName ),
				radioCheckBorderRadiusType
			),
			'height': generateCSSUnit(
				getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ),
				'px'
			),
			'width': generateCSSUnit(
				getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ),
				'px'
			),
			'font-size':
				'calc( ' + getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ) + 'px / 1.2 )',
			'border-width': generateCSSUnit(
				getFallbackNumber( radioCheckBorderWidthMobile, 'radioCheckBorderWidthMobile', blockName ),
				radioCheckBorderWidthType
			),
		},
		" .uagb-gf-styler__check-style-enabled .gfield_checkbox input[type='checkbox'] + label:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'border-color': radioCheckBorderColor,
			'border-style': 'solid',
			'border-radius': generateCSSUnit(
				getFallbackNumber( radioCheckBorderRadius, 'radioCheckBorderRadius', blockName ),
				radioCheckBorderRadiusType
			),
			'height': generateCSSUnit(
				getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ),
				'px'
			),
			'width': generateCSSUnit(
				getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ),
				'px'
			),
			'font-size':
				'calc( ' + getFallbackNumber( radioCheckSizeMobile, 'radioCheckSizeMobile', blockName ) + 'px / 1.2 )',
			'border-width': generateCSSUnit(
				getFallbackNumber( radioCheckBorderWidthMobile, 'radioCheckBorderWidthMobile', blockName ),
				radioCheckBorderWidthType
			),
		},
		' input:not([type=submit])': {
			'font-size': generateCSSUnit( inputFontSizeMobile, inputFontSizeType ),
			'line-height': generateCSSUnit( inputLineHeightMobile, inputLineHeightType ),
			'padding-left': generateCSSUnit( fieldleftMobilePadding, fieldmobilePaddingUnit ),
			'padding-right': generateCSSUnit( fieldrightMobilePadding, fieldmobilePaddingUnit ),
			'padding-top': generateCSSUnit( fieldtopMobilePadding, fieldmobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( fieldbottomMobilePadding, fieldmobilePaddingUnit ),
			'border-width': generateCSSUnit(
				getFallbackNumber( fieldBorderWidthMobile, 'fieldBorderWidthMobile', blockName ),
				fieldBorderWidthType
			),
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacingMobile, 'fieldLabelSpacingMobile', blockName ),
				'px'
			),
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( fieldSpacingMobile, 'fieldSpacingMobile', blockName ),
				'px'
			),
			'letter-spacing': generateCSSUnit( inputLetterSpacingMobile, inputLetterSpacingType ),
		},
		' select': {
			'font-size': generateCSSUnit( labelFontSizeMobile, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightMobile, labelLineHeightType ),
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacingMobile, 'fieldLabelSpacingMobile', blockName ),
				'px'
			),
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( fieldSpacingMobile, 'fieldSpacingMobile', blockName ),
				'px'
			),
			'letter-spacing': generateCSSUnit( labelLetterSpacingMobile, labelLetterSpacingType ),
		},
		' .gform_wrapper.gravity-theme .gfield textarea': {
			'font-size': generateCSSUnit( inputFontSizeMobile, inputFontSizeType ),
			'line-height': generateCSSUnit( inputLineHeightMobile, inputLineHeightType ),
			'margin-top': generateCSSUnit(
				getFallbackNumber( fieldLabelSpacingMobile, 'fieldLabelSpacingMobile', blockName ),
				'px'
			),
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( fieldSpacingMobile, 'fieldSpacingMobile', blockName ),
				'px'
			),
			'letter-spacing': generateCSSUnit( inputLetterSpacingMobile, inputLetterSpacingType ),
			'height':
				'auto' === getFallbackNumber( textAreaHeightMobile, 'textAreaHeightMobile', blockName )
					? getFallbackNumber( textAreaHeightMobile, 'textAreaHeightMobile', blockName )
					: getFallbackNumber( textAreaHeightMobile, 'textAreaHeightMobile', blockName ) + 'px',
		},
		' form label': {
			'font-size': generateCSSUnit( inputFontSizeMobile, inputFontSizeType ),
			'line-height': generateCSSUnit( inputLineHeightMobile, inputLineHeightType ),
			'padding-left': generateCSSUnit( fieldleftMobilePadding, fieldmobilePaddingUnit ),
			'padding-right': generateCSSUnit( fieldrightMobilePadding, fieldmobilePaddingUnit ),
			'padding-top': generateCSSUnit( fieldtopMobilePadding, fieldmobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( fieldbottomMobilePadding, fieldmobilePaddingUnit ),
			'letter-spacing': generateCSSUnit( inputLetterSpacingMobile, inputLetterSpacingType ),
		},
		' form .gfield_radio label': {
			'font-size': generateCSSUnit( labelFontSizeMobile, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightMobile, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingMobile, labelLetterSpacingType ),
		},
		' form .gfield_checkbox label': {
			'font-size': generateCSSUnit( labelFontSizeMobile, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightMobile, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingMobile, labelLetterSpacingType ),
		},
		' input.gform_button': {
			'font-size': generateCSSUnit( buttonFontSizeMobile, buttonFontSizeType ),
			'line-height': generateCSSUnit( buttonLineHeightMobile, buttonLineHeightType ),
			'padding-left': generateCSSUnit( buttonleftMobilePadding, buttonmobilePaddingUnit ),
			'padding-right': generateCSSUnit( buttonrightMobilePadding, buttonmobilePaddingUnit ),
			'padding-top': generateCSSUnit( buttontopMobilePadding, buttonmobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( buttonbottomMobilePadding, buttonmobilePaddingUnit ),
			'border-width': generateCSSUnit(
				getFallbackNumber( buttonBorderWidthMobile, 'buttonBorderWidthMobile', blockName ),
				buttonBorderWidthType
			),
			'color': buttonTextColor,
			'background-color': buttonBgColor,
			'border-color': buttonBorderColor,
			'border-style': buttonBorderStyle,
			'letter-spacing': generateCSSUnit( buttonLetterSpacingMobile, buttonLetterSpacingType ),
		},
		' .uagb-gf-styler__check-style-enabled form .gfield_radio label': {
			'font-size': generateCSSUnit( radioCheckFontSizeMobile, radioCheckFontSizeType ),
			'line-height': generateCSSUnit( radioCheckLineHeightMobile, radioCheckLineHeightType ),
			'letter-spacing': generateCSSUnit( radioCheckLetterSpacingMobile, radioCheckLetterSpacingType ),
		},
		' .uagb-gf-styler__check-style-enabled form .gfield_checkbox label': {
			'font-size': generateCSSUnit( radioCheckFontSizeMobile, radioCheckFontSizeType ),
			'line-height': generateCSSUnit( radioCheckLineHeightMobile, radioCheckLineHeightType ),
			'letter-spacing': generateCSSUnit( radioCheckLetterSpacingMobile, radioCheckLetterSpacingType ),
		},
		' span.wpgf-not-valid-tip': {
			'font-size': generateCSSUnit( validationMsgFontSizeMobile, validationMsgFontSizeType ),
			'line-height': generateCSSUnit( validationMsgLineHeightMobile, validationMsgLineHeightType ),
			'letter-spacing': generateCSSUnit( validationMsgLetterSpacingMobile, validationMsgLetterSpacingType ),
		},
		' .gform_wrapper .validation_message': {
			'font-size': generateCSSUnit( validationMsgFontSizeMobile, validationMsgFontSizeType ),
			'line-height': generateCSSUnit( validationMsgLineHeightMobile, validationMsgLineHeightType ),
			'letter-spacing': generateCSSUnit( validationMsgLetterSpacingMobile, validationMsgLetterSpacingType ),
		},
		' .gform_wrapper div.validation_error': {
			'font-size': generateCSSUnit( msgFontSizeMobile, msgFontSizeType ),
			'line-height': generateCSSUnit( msgLineHeightMobile, msgLineHeightType ),
			'padding-left': generateCSSUnit( msgleftMobilePadding, msgmobilePaddingUnit ),
			'padding-right': generateCSSUnit( msgrightMobilePadding, msgmobilePaddingUnit ),
			'padding-top': generateCSSUnit( msgtopMobilePadding, msgmobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( msgbottomMobilePadding, msgmobilePaddingUnit ),
			'letter-spacing': generateCSSUnit( msgLetterSpacingMobile, msgLetterSpacingType ),
		},
		' .gform_confirmation_message': {
			'font-size': generateCSSUnit( successMsgFontSizeMobile, successMsgFontSizeType ),
			'line-height': generateCSSUnit( successMsgLineHeightMobile, successMsgLineHeightType ),
			'letter-spacing': generateCSSUnit( successMsgLetterSpacingMobile, successMsgLetterSpacingType ),
		},
	};

	const base_selector = `.editor-styles-wrapper .wp-block-uagb-gf-styler.uagb-block-${ clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, `${ base_selector }` );

	stylingCss += generateCSS( tabletSelectors, `${ base_selector }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ base_selector }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
