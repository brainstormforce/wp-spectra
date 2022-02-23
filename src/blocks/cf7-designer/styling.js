/**
 * Set inline styles.
 *
 * @param  {Object} props - The block object.
 * @return {Object} The inline background type CSS.
 */
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		align,
		fieldBgColor,
		fieldLabelColor,
		fieldInputColor,
		fieldBorderStyle,
		fieldBorderWidth,
		fieldBorderRadius,
		fieldBorderColor,
		fieldBorderFocusColor,
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
		validationMsgFontSizeType,
		validationMsgFontSizeTablet,
		validationMsgFontSizeMobile,
		validationMsgLineHeightType,
		validationMsgLineHeightTablet,
		validationMsgLineHeightMobile,
		radioCheckBorderRadiusType,
		fieldBorderRadiusType,
		buttonBorderRadiusType,
		buttonTopPaddingDesktop,
		buttonRightPaddingDesktop,
		buttonBottomPaddingDesktop,
		buttonLeftPaddingDesktop,
		buttonTopPaddingTablet,
		buttonRightPaddingTablet,
		buttonBottomPaddingTablet,
		buttonLeftPaddingTablet,
		buttonTopPaddingMobile,
		buttonRightPaddingMobile,
		buttonBottomPaddingMobile,
		buttonLeftPaddingMobile,
		buttonPaddingTypeDesktop,
		buttonPaddingTypeTablet,
		buttonPaddingTypeMobile,
		fieldTopPaddingDesktop,
		fieldRightPaddingDesktop,
		fieldBottomPaddingDesktop,
		fieldLeftPaddingDesktop,
		fieldTopPaddingTablet,
		fieldRightPaddingTablet,
		fieldBottomPaddingTablet,
		fieldLeftPaddingTablet,
		fieldTopPaddingMobile,
		fieldRightPaddingMobile,
		fieldBottomPaddingMobile,
		fieldLeftPaddingMobile,
		fieldPaddingTypeDesktop,
		fieldPaddingTypeTablet,
		fieldPaddingTypeMobile,
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
	} = props.attributes;

	const selectors = {
		' .wpcf7 .wpcf7-form': {
			'text-align': align,
		},
		' .wpcf7 form.wpcf7-form:not(input)': {
			'color': fieldLabelColor,
		},
		' .wpcf7 input:not([type=submit])': {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'border-style': fieldBorderStyle,
			'border-color': fieldBorderColor,
			'border-width': generateCSSUnit( fieldBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				fieldBorderRadius,
				fieldBorderRadiusType
			),
			'padding-left': generateCSSUnit(
				fieldLeftPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-right': generateCSSUnit(
				fieldRightPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-top': generateCSSUnit(
				fieldTopPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-bottom': generateCSSUnit(
				fieldBottomPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'margin-top': generateCSSUnit( fieldLabelSpacing, 'px' ),
			'margin-bottom': generateCSSUnit( fieldSpacing, 'px' ),
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'font-family': inputFontFamily,
			'font-style' : inputFontStyle,
			'text-decoration': inputDecoration,
			'text-transform': inputTransform,
			'font-weight': inputFontWeight,
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'text-align': align,
		},
		' .wpcf7 select': {
			'background-color': fieldBgColor,
			'color': fieldLabelColor,
			'border-style': fieldBorderStyle,
			'border-color': fieldBorderColor,
			'border-width': generateCSSUnit( fieldBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				fieldBorderRadius,
				fieldBorderRadiusType
			),
			'margin-top': generateCSSUnit( fieldLabelSpacing, 'px' ),
			'margin-bottom': generateCSSUnit( fieldSpacing, 'px' ),
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'font-family': inputFontFamily,
			'font-weight': inputFontWeight,
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'text-align': align,
		},
		" .wpcf7 select.wpcf7-form-control.wpcf7-select:not([multiple='multiple'])": {
			'padding-left': generateCSSUnit(
				fieldLeftPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-right': generateCSSUnit(
				fieldRightPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-top': generateCSSUnit(
				fieldTopPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-bottom': generateCSSUnit(
				fieldBottomPaddingDesktop,
				fieldPaddingTypeDesktop
			),
		},
		" .wpcf7 select.wpcf7-select[multiple='multiple'] option": {
			'padding-left': generateCSSUnit(
				fieldLeftPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-right': generateCSSUnit(
				fieldRightPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-top': generateCSSUnit(
				fieldTopPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-bottom': generateCSSUnit(
				fieldBottomPaddingDesktop,
				fieldPaddingTypeDesktop
			),
		},
		' .wpcf7 textarea': {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'border-color': fieldBorderColor,
			'border-width': generateCSSUnit( fieldBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				fieldBorderRadius,
				fieldBorderRadiusType
			),
			'border-style': fieldBorderStyle,
			'padding-left': generateCSSUnit(
				fieldLeftPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-right': generateCSSUnit(
				fieldRightPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-top': generateCSSUnit(
				fieldTopPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'padding-bottom': generateCSSUnit(
				fieldBottomPaddingDesktop,
				fieldPaddingTypeDesktop
			),
			'margin-top': generateCSSUnit( fieldLabelSpacing, 'px' ),
			'margin-bottom': generateCSSUnit( fieldSpacing, 'px' ),
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'font-family': inputFontFamily,
			'font-weight': inputFontWeight,
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'text-align': align,
		},
		' .wpcf7 input::placeholder': {
			'color': fieldInputColor,
			'text-align': align,
		},
		' .wpcf7 textarea::placeholder': {
			'color': fieldInputColor,
			'text-align': align,
		},
		' .wpcf7 form label': {
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'font-family': labelFontFamily,
			'font-style' : labelFontStyle,
			'text-decoration': labelDecoration,
			'text-transform': labelTransform,
			'font-weight': labelFontWeight,
			'line-height': generateCSSUnit(
				labelLineHeight,
				labelLineHeightType
			),
		},
		' .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'font-family': labelFontFamily,
			'font-style' : labelFontStyle,
			'text-decoration': labelDecoration,
			'text-transform': labelTransform,
			'font-weight': labelFontWeight,
			'line-height': generateCSSUnit(
				labelLineHeight,
				labelLineHeightType
			),
		},

		//Focus
		' .wpcf7 form input:not([type=submit]):focus': {
			'border-color': fieldBorderFocusColor,
		},
		' .wpcf7 form select:focus': {
			'border-color': fieldBorderFocusColor,
		},
		' .wpcf7 textarea:focus': {
			'border-color': fieldBorderFocusColor,
		},

		//Submit button
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': {
			'color': buttonTextColor,
			'background-color': buttonBgColor,
			'font-size': generateCSSUnit( buttonFontSize, buttonFontSizeType ),
			'font-family': buttonFontFamily,
			'font-style' : buttonFontStyle,
			'text-decoration': buttonDecoration,
			'text-transform': buttonTransform,
			'font-weight': buttonFontWeight,
			'line-height': generateCSSUnit(
				buttonLineHeight,
				buttonLineHeightType
			),
			'border-color': buttonBorderColor,
			'border-style': buttonBorderStyle,
			'border-width': generateCSSUnit( buttonBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				buttonBorderRadius,
				buttonBorderRadiusType
			),
			'padding-left': generateCSSUnit(
				buttonLeftPaddingDesktop,
				buttonPaddingTypeDesktop
			),
			'padding-right': generateCSSUnit(
				buttonRightPaddingDesktop,
				buttonPaddingTypeDesktop
			),
			'padding-top': generateCSSUnit(
				buttonTopPaddingDesktop,
				buttonPaddingTypeDesktop
			),
			'padding-bottom': generateCSSUnit(
				buttonBottomPaddingDesktop,
				buttonPaddingTypeDesktop
			),
		},

		' .wpcf7 input.wpcf7-form-control.wpcf7-submit:hover': {
			'color': buttonTextHoverColor,
			'background-color': buttonBgHoverColor,
			'border-color': buttonBorderHoverColor,
		},

		// Check box Radio.
		" .wpcf7 .wpcf7-checkbox input[type='checkbox']:checked + span:before": {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'font-size': 'calc( ' + fieldTopPaddingDesktop + 'px / 1.2 )',
			'border-color': fieldBorderFocusColor,
		},
		" .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'display': 'inline-flex',
			'height': generateCSSUnit( fieldTopPaddingDesktop, 'px' ),
			'width': generateCSSUnit( fieldTopPaddingDesktop, 'px' ),
			'font-size': 'calc( ' + fieldTopPaddingDesktop + 'px / 1.2 )',
			'border-style': fieldBorderStyle,
			'border-color': fieldBorderColor,
			'border-width': generateCSSUnit( fieldBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				fieldBorderRadius,
				fieldBorderRadiusType
			),
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox']:checked + span:before": {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'border-color': fieldBorderFocusColor,
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'height': generateCSSUnit( fieldTopPaddingDesktop, 'px' ),
			'width': generateCSSUnit( fieldTopPaddingDesktop, 'px' ),
			'font-size': 'calc( ' + fieldTopPaddingDesktop + 'px / 1.2 )',
			'border-style': fieldBorderStyle,
			'border-color': fieldBorderColor,
			'border-width': generateCSSUnit( fieldBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				fieldBorderRadius,
				fieldBorderRadiusType
			),
		},
		" .wpcf7 .wpcf7-radio input[type='radio'] + span:before": {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'display': 'inline-flex',
			'border-radius': '100%',
			'border-style': fieldBorderStyle,
			'border-color': fieldBorderColor,
			'border-width': generateCSSUnit( fieldBorderWidth, 'px' ),
			'height': 'calc( ' + fieldTopPaddingDesktop + 'px / 1.2 )',
			'width': 'calc( ' + fieldTopPaddingDesktop + 'px / 1.2 )',
		},

		// underline border
		' .uagb-cf7-styler__field-style-underline .wpcf7 input:not([type=submit])': {
			'border-style': 'none',
			'border-bottom-color': fieldBorderColor,
			'border-bottom-style': 'solid',
			'border-bottom-width': generateCSSUnit( fieldBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				fieldBorderRadius,
				fieldBorderRadiusType
			),
		},
		' .uagb-cf7-styler__field-style-underline select': {
			'border-style': 'none',
			'border-bottom-color': fieldBorderColor,
			'border-bottom-style': 'solid',
			'border-bottom-width': generateCSSUnit( fieldBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				fieldBorderRadius,
				fieldBorderRadiusType
			),
		},
		' .uagb-cf7-styler__field-style-underline textarea': {
			'border-style': 'none',
			'border-bottom-color': fieldBorderColor,
			'border-bottom-style': 'solid',
			'border-bottom-width': generateCSSUnit( fieldBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				fieldBorderRadius,
				fieldBorderRadiusType
			),
		},
		" .uagb-cf7-styler__field-style-underline .wpcf7-checkbox input[type='checkbox'] + span:before": {
			'border-style': 'solid',
		},
		" .uagb-cf7-styler__field-style-underline .wpcf7 input[type='radio'] + span:before": {
			'border-style': 'solid',
		},
		" .uagb-cf7-styler__field-style-underline .wpcf7-acceptance input[type='checkbox'] + span:before": {
			'border-style': 'solid',
		},
		" .wpcf7-radio input[type='radio']:checked + span:before": {
			'background-color': fieldInputColor,
			'border-color': fieldBorderFocusColor,
			'display': 'inline-flex',
		},

		// Override check box , Radio & acceptance.
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'height': generateCSSUnit( radioCheckSize, 'px' ),
			'width': generateCSSUnit( radioCheckSize, 'px' ),
			'font-size': 'calc( ' + radioCheckSize + 'px / 1.2 )',
			'border-color': radioCheckBorderColor,
			'border-width': generateCSSUnit( radioCheckBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				radioCheckBorderRadius,
				radioCheckBorderRadiusType
			),
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-checkbox input[type='checkbox']:checked + span:before": {
			'border-color': fieldBorderFocusColor,
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			'background-color': radioCheckBgColor,
			'display': 'inline-flex',
			'color': radioCheckSelectColor,
			'height': generateCSSUnit( radioCheckSize, 'px' ),
			'width': generateCSSUnit( radioCheckSize, 'px' ),
			'font-size': 'calc( ' + radioCheckSize + 'px / 1.2 )',
			'border-color': radioCheckBorderColor,
			'border-width': generateCSSUnit( radioCheckBorderWidth, 'px' ),
			'border-radius': generateCSSUnit(
				radioCheckBorderRadius,
				radioCheckBorderRadiusType
			),
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-acceptance input[type='checkbox']:checked + span:before": {
			'border-color': fieldBorderFocusColor,
		},

		" .uagb-cf7-styler__check-style-enabled .wpcf7 input[type='radio'] + span:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'height': generateCSSUnit( radioCheckSize, 'px' ),
			'width': generateCSSUnit( radioCheckSize, 'px' ),
			'font-size': 'calc( ' + radioCheckSize + 'px / 1.2 )',
			'border-color': radioCheckBorderColor,
			'border-width': generateCSSUnit( radioCheckBorderWidth, 'px' ),
		},

		" .uagb-cf7-styler__check-style-enabled .wpcf7-radio input[type='radio']:checked + span:before": {
			'background-color': radioCheckSelectColor,
			'border-color': fieldBorderFocusColor,
		},
		' .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit(
				radioCheckFontSize,
				radioCheckFontSizeType
			),
			'font-family': radioCheckFontFamily,
			'font-style' : radioCheckFontStyle,
			'text-decoration': radioCheckDecoration,
			'text-transform': radioCheckTransform,
			'font-weight': radioCheckFontWeight,
			'line-height': generateCSSUnit(
				radioCheckLineHeight,
				radioCheckLineHeightType
			),
			'color': radioCheckLableColor,
		},
	};

	const fieldPaddingTablet = {
		'padding-left': generateCSSUnit(
			fieldLeftPaddingTablet,
			fieldPaddingTypeTablet
		),
		'padding-right': generateCSSUnit(
			fieldRightPaddingTablet,
			fieldPaddingTypeTablet
		),
		'padding-top': generateCSSUnit(
			fieldTopPaddingTablet,
			fieldPaddingTypeTablet
		),
		'padding-bottom': generateCSSUnit(
			fieldBottomPaddingTablet,
			fieldPaddingTypeTablet
		),
	};
	const tabletSelectors = {
		' .wpcf7 input:not([type=submit])': {
			'font-size': generateCSSUnit(
				inputFontSizeTablet,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightTablet,
				inputLineHeightType
			),
		},
		' .wpcf7 select': {
			'font-size': generateCSSUnit(
				labelFontSizeTablet,
				labelFontSizeType
			),
			'line-height': generateCSSUnit(
				labelLineHeightTablet,
				labelLineHeightType
			),
		},
		' .wpcf7 textarea': {
			'font-size': generateCSSUnit(
				inputFontSizeTablet,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightTablet,
				inputLineHeightType
			),
		},
		' .wpcf7 form label': {
			'font-size': generateCSSUnit(
				labelFontSizeTablet,
				labelFontSizeType
			),
			'line-height': generateCSSUnit(
				labelLineHeightTablet,
				labelLineHeightType
			),
		},

		' .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit(
				labelFontSizeTablet,
				labelFontSizeType
			),
			'line-height': generateCSSUnit(
				labelLineHeightTablet,
				labelLineHeightType
			),
		},
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': {
			'font-size': generateCSSUnit(
				buttonFontSizeTablet,
				buttonFontSizeType
			),
			'line-height': generateCSSUnit(
				buttonLineHeightTablet,
				buttonLineHeightType
			),
		},
		' .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit(
				radioCheckFontSizeTablet,
				radioCheckFontSizeType
			),
			'line-height': generateCSSUnit(
				radioCheckLineHeightTablet,
				radioCheckLineHeightType
			),
		},
		' span.wpcf7-not-valid-tip': {
			'font-size': generateCSSUnit(
				validationMsgFontSizeTablet,
				validationMsgFontSizeType
			),
			'line-height': generateCSSUnit(
				validationMsgLineHeightTablet,
				validationMsgLineHeightType
			),
		},
		' .wpcf7 input:not([type=submit])': fieldPaddingTablet, // eslint-disable-line no-dupe-keys
		' .wpcf7 select.wpcf7-form-control.wpcf7-select:not([multiple="multiple"])': fieldPaddingTablet,
		' .wpcf7 select.wpcf7-select[multiple="multiple"] option': fieldPaddingTablet,
		' .wpcf7 textarea': fieldPaddingTablet, // eslint-disable-line no-dupe-keys
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': { // eslint-disable-line no-dupe-keys
			'padding-left': generateCSSUnit(
				buttonLeftPaddingTablet,
				buttonPaddingTypeTablet
			),
			'padding-right': generateCSSUnit(
				buttonRightPaddingTablet,
				buttonPaddingTypeTablet
			),
			'padding-top': generateCSSUnit(
				buttonTopPaddingTablet,
				buttonPaddingTypeTablet
			),
			'padding-bottom': generateCSSUnit(
				buttonBottomPaddingTablet,
				buttonPaddingTypeTablet
			),
		},
	};
	const fieldPaddingMobile = {
		'padding-left': generateCSSUnit(
			fieldLeftPaddingMobile,
			fieldPaddingTypeMobile
		),
		'padding-right': generateCSSUnit(
			fieldRightPaddingMobile,
			fieldPaddingTypeMobile
		),
		'padding-top': generateCSSUnit(
			fieldTopPaddingMobile,
			fieldPaddingTypeMobile
		),
		'padding-bottom': generateCSSUnit(
			fieldBottomPaddingMobile,
			fieldPaddingTypeMobile
		),
	};
	const mobileSelectors = {
		' .wpcf7 input:not([type=submit])': {
			'font-size': generateCSSUnit(
				inputFontSizeMobile,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightMobile,
				inputLineHeightType
			),
		},
		' .wpcf7 select': {
			'font-size': generateCSSUnit(
				labelFontSizeMobile,
				labelFontSizeType
			),
			'line-height': generateCSSUnit(
				labelLineHeightMobile,
				labelLineHeightType
			),
		},
		' .wpcf7 textarea': {
			'font-size': generateCSSUnit(
				inputFontSizeTablet,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightTablet,
				inputLineHeightType
			),
		},
		' .wpcf7 form label': {
			'font-size': generateCSSUnit(
				inputFontSizeMobile,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightMobile,
				inputLineHeightType
			),
		},
		' .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit(
				labelFontSizeMobile,
				labelFontSizeType
			),
			'line-height': generateCSSUnit(
				labelLineHeightMobile,
				labelLineHeightType
			),
		},
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': {
			'font-size': generateCSSUnit(
				buttonFontSizeMobile,
				buttonFontSizeType
			),
			'line-height': generateCSSUnit(
				buttonLineHeightMobile,
				buttonLineHeightType
			),
		},
		' .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit(
				radioCheckFontSizeMobile,
				radioCheckFontSizeType
			),
			'line-height': generateCSSUnit(
				radioCheckLineHeightMobile,
				radioCheckLineHeightType
			),
		},
		' span.wpcf7-not-valid-tip': {
			'font-size': generateCSSUnit(
				validationMsgFontSizeMobile,
				validationMsgFontSizeType
			),
			'line-height': generateCSSUnit(
				validationMsgLineHeightMobile,
				validationMsgLineHeightType
			),
		},
		' .wpcf7 input:not([type=submit])': fieldPaddingMobile, // eslint-disable-line no-dupe-keys
		' .wpcf7 select.wpcf7-form-control.wpcf7-select:not([multiple="multiple"])': fieldPaddingMobile,
		' .wpcf7 select.wpcf7-select[multiple="multiple"] option': fieldPaddingMobile,
		' .wpcf7 textarea': fieldPaddingMobile, // eslint-disable-line no-dupe-keys
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': { // eslint-disable-line no-dupe-keys
			'padding-left': generateCSSUnit(
				buttonLeftPaddingMobile,
				buttonPaddingTypeMobile
			),
			'padding-right': generateCSSUnit(
				buttonRightPaddingMobile,
				buttonPaddingTypeMobile
			),
			'padding-top': generateCSSUnit(
				buttonTopPaddingMobile,
				buttonPaddingTypeMobile
			),
			'padding-bottom': generateCSSUnit(
				buttonBottomPaddingMobile,
				buttonPaddingTypeMobile
			),
		},
	};

	let stylingCss = generateCSS(
		selectors,
		`.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
			0,
			8
		) }`
	);

	stylingCss += generateCSS(
		tabletSelectors,
		`.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
			0,
			8
		) }`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
			0,
			8
		) }`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
