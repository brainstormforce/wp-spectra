/**
 * Set inline styles.
 *
 * @param  {Object} props - The block object.
 * @return {Object} The inline background type CSS.
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( attributes, clientId ) {
	const {
		align,
		fieldBgColor,
		fieldLabelColor,
		fieldInputColor,
		inputBorderHColor,
		buttonTextColor,
		buttonBgColor,
		buttonTextHoverColor,
		buttonBgHoverColor,
		btnBorderHColor,
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
		radioCheckSizeTablet,
		radioCheckSizeMobile,
		radioCheckBgColor,
		radioCheckSelectColor,
		radioCheckLableColor,
		radioCheckBorderColor,
		radioCheckBorderWidth,
		radioCheckBorderWidthTablet,
		radioCheckBorderWidthMobile,
		radioCheckBorderWidthUnit,
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
		validationMsgLetterSpacingTablet,
		validationMsgLetterSpacingMobile,
		validationMsgLetterSpacingType,
		inputBorderBottomWidth,
	} = attributes;

	const fieldBorderCSS = generateBorderCSS( attributes, 'input' );
	const fieldBorderCSSTablet = generateBorderCSS( attributes, 'input', 'tablet' );
	const fieldBorderCSSMobile = generateBorderCSS( attributes, 'input', 'mobile' );

	const buttonBorderCSS = generateBorderCSS( attributes, 'btn' );
	const buttonBorderCSSTablet = generateBorderCSS( attributes, 'btn', 'tablet' );
	const buttonBorderCSSMobile = generateBorderCSS( attributes, 'btn', 'mobile' );

	fieldBorderCSS[ 'border-color' ] =
		fieldBorderCSS[ 'border-color' ] === '' ? '#EEEEEE' : fieldBorderCSS[ 'border-color' ];
	fieldBorderCSSTablet[ 'border-color' ] =
		fieldBorderCSSTablet[ 'border-color' ] === '' ? '#EEEEEE' : fieldBorderCSSTablet[ 'border-color' ];
	fieldBorderCSSMobile[ 'border-color' ] =
		fieldBorderCSSMobile[ 'border-color' ] === '' ? '#EEEEEE' : fieldBorderCSSMobile[ 'border-color' ];

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
			'padding-left': generateCSSUnit( fieldLeftPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-right': generateCSSUnit( fieldRightPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-top': generateCSSUnit( fieldTopPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-bottom': generateCSSUnit( fieldBottomPaddingDesktop, fieldPaddingTypeDesktop ),
			'margin-top': generateCSSUnit( fieldLabelSpacing, 'px' ),
			'margin-bottom': generateCSSUnit( fieldSpacing, 'px' ),
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-decoration': inputDecoration,
			'text-transform': inputTransform,
			'font-weight': inputFontWeight,
			'line-height': generateCSSUnit( inputLineHeight, inputLineHeightType ),
			'text-align': align,
			'letter-spacing': generateCSSUnit( inputLetterSpacing, inputLetterSpacingType ),
			...fieldBorderCSS,
		},
		' .wpcf7 select': {
			'background-color': fieldBgColor,
			'color': fieldLabelColor,
			'margin-top': generateCSSUnit( fieldLabelSpacing, 'px' ),
			'margin-bottom': generateCSSUnit( fieldSpacing, 'px' ),
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'font-family': inputFontFamily,
			'font-weight': inputFontWeight,
			'line-height': generateCSSUnit( inputLineHeight, inputLineHeightType ),
			'text-align': align,
			'letter-spacing': generateCSSUnit( inputLetterSpacing, inputLetterSpacingType ),
			...fieldBorderCSS,
		},
		" .wpcf7 select.wpcf7-form-control.wpcf7-select:not([multiple='multiple'])": {
			'padding-left': generateCSSUnit( fieldLeftPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-right': generateCSSUnit( fieldRightPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-top': generateCSSUnit( fieldTopPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-bottom': generateCSSUnit( fieldBottomPaddingDesktop, fieldPaddingTypeDesktop ),
		},
		" .wpcf7 select.wpcf7-select[multiple='multiple'] option": {
			'padding-left': generateCSSUnit( fieldLeftPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-right': generateCSSUnit( fieldRightPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-top': generateCSSUnit( fieldTopPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-bottom': generateCSSUnit( fieldBottomPaddingDesktop, fieldPaddingTypeDesktop ),
		},
		' .wpcf7 textarea': {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			...fieldBorderCSS,
			'padding-left': generateCSSUnit( fieldLeftPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-right': generateCSSUnit( fieldRightPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-top': generateCSSUnit( fieldTopPaddingDesktop, fieldPaddingTypeDesktop ),
			'padding-bottom': generateCSSUnit( fieldBottomPaddingDesktop, fieldPaddingTypeDesktop ),
			'margin-top': generateCSSUnit( fieldLabelSpacing, 'px' ),
			'margin-bottom': generateCSSUnit( fieldSpacing, 'px' ),
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'font-family': inputFontFamily,
			'font-weight': inputFontWeight,
			'line-height': generateCSSUnit( inputLineHeight, inputLineHeightType ),
			'text-align': align,
			'letter-spacing': generateCSSUnit( inputLetterSpacing, inputLetterSpacingType ),
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
			'font-style': labelFontStyle,
			'text-decoration': labelDecoration,
			'text-transform': labelTransform,
			'font-weight': labelFontWeight,
			'line-height': generateCSSUnit( labelLineHeight, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacing, labelLetterSpacingType ),
		},
		' .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'font-family': labelFontFamily,
			'font-style': labelFontStyle,
			'text-decoration': labelDecoration,
			'text-transform': labelTransform,
			'font-weight': labelFontWeight,
			'line-height': generateCSSUnit( labelLineHeight, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacing, labelLetterSpacingType ),
		},

		//Focus
		' .wpcf7 form input:not([type=submit]):focus': {
			'border-color': inputBorderHColor,
		},
		' .wpcf7 form select:focus': {
			'border-color': inputBorderHColor,
		},
		' .wpcf7 textarea:focus': {
			'border-color': inputBorderHColor,
		},

		//Submit button
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': {
			'color': buttonTextColor,
			'background-color': buttonBgColor,
			'font-size': generateCSSUnit( buttonFontSize, buttonFontSizeType ),
			'font-family': buttonFontFamily,
			'font-style': buttonFontStyle,
			'text-decoration': buttonDecoration,
			'text-transform': buttonTransform,
			'font-weight': buttonFontWeight,
			'line-height': generateCSSUnit( buttonLineHeight, buttonLineHeightType ),
			...buttonBorderCSS,
			'padding-left': generateCSSUnit( buttonLeftPaddingDesktop, buttonPaddingTypeDesktop ),
			'padding-right': generateCSSUnit( buttonRightPaddingDesktop, buttonPaddingTypeDesktop ),
			'padding-top': generateCSSUnit( buttonTopPaddingDesktop, buttonPaddingTypeDesktop ),
			'padding-bottom': generateCSSUnit( buttonBottomPaddingDesktop, buttonPaddingTypeDesktop ),
			'letter-spacing': generateCSSUnit( buttonLetterSpacing, buttonLetterSpacingType ),
		},

		' .wpcf7 input.wpcf7-form-control.wpcf7-submit:hover': {
			'color': buttonTextHoverColor,
			'background-color': buttonBgHoverColor,
			'border-color': btnBorderHColor,
		},

		// Check box Radio.
		" .wpcf7 .wpcf7-checkbox input[type='checkbox']:checked + span:before": {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'font-size': 'calc( ' + fieldTopPaddingDesktop + 'px / 1.2 )',
			'border-color': inputBorderHColor,
		},
		" .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'display': 'inline-flex',
			'height': generateCSSUnit( fieldTopPaddingDesktop, 'px' ),
			'width': generateCSSUnit( fieldTopPaddingDesktop, 'px' ),
			'font-size': 'calc( ' + fieldTopPaddingDesktop + 'px / 1.2 )',
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox']:checked + span:before": {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'border-color': inputBorderHColor,
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'height': generateCSSUnit( fieldTopPaddingDesktop, 'px' ),
			'width': generateCSSUnit( fieldTopPaddingDesktop, 'px' ),
			'font-size': 'calc( ' + fieldTopPaddingDesktop + 'px / 1.2 )',
			...fieldBorderCSS,
		},
		" .wpcf7 .wpcf7-radio input[type='radio'] + span:before": {
			'background-color': fieldBgColor,
			'color': fieldInputColor,
			'display': 'inline-flex',
			'border-radius': '100%',
			'height': 'calc( ' + fieldTopPaddingDesktop + 'px / 1.2 )',
			'width': 'calc( ' + fieldTopPaddingDesktop + 'px / 1.2 )',
		},

		// underline border
		' .uagb-cf7-styler__field-style-underline .wpcf7 input:not([type=submit])': {
			'border-style': 'none',
			'border-bottom-style': fieldBorderCSS[ 'border-style' ],
			'border-bottom-width': generateCSSUnit( inputBorderBottomWidth, 'px' ),
		},
		' .uagb-cf7-styler__field-style-underline select': {
			'border-style': 'none',
			'border-bottom-style': fieldBorderCSS[ 'border-style' ],
			'border-bottom-width': generateCSSUnit( inputBorderBottomWidth, 'px' ),
		},
		' .uagb-cf7-styler__field-style-underline textarea': {
			'border-style': 'none',
			'border-bottom-style': fieldBorderCSS[ 'border-style' ],
			'border-bottom-width': generateCSSUnit( inputBorderBottomWidth, 'px' ),
		},
		" .uagb-cf7-styler__field-style-underline .wpcf7-checkbox input[type='checkbox'] + span:before": {
			'border-style': 'none',
			'border-bottom-style': fieldBorderCSS[ 'border-style' ],
			'border-bottom-width': generateCSSUnit( inputBorderBottomWidth, 'px' ),
		},
		" .uagb-cf7-styler__field-style-underline .wpcf7 input[type='radio'] + span:before": {
			'border-style': 'none',
			'border-bottom-style': fieldBorderCSS[ 'border-style' ],
			'border-bottom-width': generateCSSUnit( inputBorderBottomWidth, 'px' ),
		},
		" .uagb-cf7-styler__field-style-underline .wpcf7-acceptance input[type='checkbox'] + span:before": {
			'border-style': 'none',
			'border-bottom-style': fieldBorderCSS[ 'border-style' ],
			'border-bottom-width': generateCSSUnit( inputBorderBottomWidth, 'px' ),
		},
		" .wpcf7-radio input[type='radio']:checked + span:before": {
			'background-color': fieldInputColor,
			'border-color': inputBorderHColor,
			'display': 'inline-flex',
		},

		// Override check box , Radio & acceptance.
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'justify-content': 'center',
			'height': generateCSSUnit( radioCheckSize, 'px' ),
			'width': generateCSSUnit( radioCheckSize, 'px' ),
			'font-size': 'calc( ' + radioCheckSize + 'px / 1.2 )',
			'border-color': radioCheckBorderColor,
			'border-width': generateCSSUnit( radioCheckBorderWidth, radioCheckBorderWidthUnit ),
			'border-radius': generateCSSUnit( radioCheckBorderRadius, radioCheckBorderRadiusType ),
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-checkbox input[type='checkbox']:checked + span:before": {
			'border-color': inputBorderHColor,
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			'background-color': radioCheckBgColor,
			'display': 'inline-flex',
			'color': radioCheckSelectColor,
			'justify-content': 'center',
			'height': generateCSSUnit( radioCheckSize, 'px' ),
			'width': generateCSSUnit( radioCheckSize, 'px' ),
			'font-size': 'calc( ' + radioCheckSize + 'px / 1.2 )',
			'border-color': radioCheckBorderColor,
			'border-width': generateCSSUnit( radioCheckBorderWidth, radioCheckBorderWidthUnit ),
			'border-radius': generateCSSUnit( radioCheckBorderRadius, radioCheckBorderRadiusType ),
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-acceptance input[type='checkbox']:checked + span:before": {
			'border-color': inputBorderHColor,
		},

		" .uagb-cf7-styler__check-style-enabled .wpcf7 input[type='radio'] + span:before": {
			'background-color': radioCheckBgColor,
			'color': radioCheckSelectColor,
			'height': generateCSSUnit( radioCheckSize, 'px' ),
			'width': generateCSSUnit( radioCheckSize, 'px' ),
			'font-size': 'calc( ' + radioCheckSize + 'px / 1.2 )',
			'border-color': radioCheckBorderColor,
			'border-width': generateCSSUnit( radioCheckBorderWidth, radioCheckBorderWidthUnit ),
		},

		" .uagb-cf7-styler__check-style-enabled .wpcf7-radio input[type='radio']:checked + span:before": {
			'background-color': radioCheckSelectColor,
			'border-color': inputBorderHColor,
		},
		' .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label': {
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
	};

	const fieldPaddingTablet = {
		'padding-left': generateCSSUnit( fieldLeftPaddingTablet, fieldPaddingTypeTablet ),
		'padding-right': generateCSSUnit( fieldRightPaddingTablet, fieldPaddingTypeTablet ),
		'padding-top': generateCSSUnit( fieldTopPaddingTablet, fieldPaddingTypeTablet ),
		'padding-bottom': generateCSSUnit( fieldBottomPaddingTablet, fieldPaddingTypeTablet ),
	};
	const tabletSelectors = {
		' .wpcf7 input:not([type=submit])': {
			...fieldBorderCSSTablet,
			...fieldPaddingTablet,
		},
		" .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			...fieldBorderCSSTablet,
			...fieldPaddingTablet,
		},
		" .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			...fieldBorderCSSTablet,
			...fieldPaddingTablet,
		},
		" .wpcf7 .wpcf7-radio input[type='radio'] + span:before": {
			...fieldBorderCSSTablet,
			...fieldPaddingTablet,
		},

		// underline border
		' .uagb-cf7-styler__field-style-underline .wpcf7 input:not([type=submit])': {
			...fieldBorderCSSTablet,
		},
		' .uagb-cf7-styler__field-style-underline select': {
			...fieldBorderCSSTablet,
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			'height': generateCSSUnit( radioCheckSizeTablet, 'px' ),
			'width': generateCSSUnit( radioCheckSizeTablet, 'px' ),
			'font-size': 'calc( ' + radioCheckSizeTablet + 'px / 1.2 )',
			'border-width': generateCSSUnit( radioCheckBorderWidthTablet, radioCheckBorderWidthUnit ),
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			'height': generateCSSUnit( radioCheckSizeTablet, 'px' ),
			'width': generateCSSUnit( radioCheckSizeTablet, 'px' ),
			'font-size': 'calc( ' + radioCheckSizeTablet + 'px / 1.2 )',
			'border-width': generateCSSUnit( radioCheckBorderWidthTablet, radioCheckBorderWidthUnit ),
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 input[type='radio'] + span:before": {
			'height': generateCSSUnit( radioCheckSizeTablet, 'px' ),
			'width': generateCSSUnit( radioCheckSizeTablet, 'px' ),
			'font-size': 'calc( ' + radioCheckSizeTablet + 'px / 1.2 )',
			'border-width': generateCSSUnit( radioCheckBorderWidthTablet, radioCheckBorderWidthUnit ),
		},
		' .uagb-cf7-styler__check-style-enabled .wpcf7 input:not([type=submit])': {
			'font-size': generateCSSUnit( inputFontSizeTablet, inputFontSizeType ),
			'line-height': generateCSSUnit( inputLineHeightTablet, inputLineHeightType ),
			'margin-top': generateCSSUnit( fieldLabelSpacingTablet, 'px' ),
			'margin-bottom': generateCSSUnit( fieldSpacingTablet, 'px' ),
			'letter-spacing': generateCSSUnit( inputLetterSpacingTablet, inputLetterSpacingType ),
		},
		' .wpcf7 select': {
			'font-size': generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
			...fieldBorderCSSTablet,
		},
		' .wpcf7 textarea': {
			'font-size': generateCSSUnit( inputFontSizeTablet, inputFontSizeType ),
			'line-height': generateCSSUnit( inputLineHeightTablet, inputLineHeightType ),
			'margin-top': generateCSSUnit( fieldLabelSpacingTablet, 'px' ),
			'margin-bottom': generateCSSUnit( fieldSpacingTablet, 'px' ),
			'letter-spacing': generateCSSUnit( inputLetterSpacingTablet, inputLetterSpacingType ),
			...fieldBorderCSSTablet,
			...fieldPaddingTablet,
		},
		' .wpcf7 form label': {
			'font-size': generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
		},

		' .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit( labelFontSizeTablet, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
		},
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': {
			'font-size': generateCSSUnit( buttonFontSizeTablet, buttonFontSizeType ),
			'line-height': generateCSSUnit( buttonLineHeightTablet, buttonLineHeightType ),
			'letter-spacing': generateCSSUnit( buttonLetterSpacingTablet, buttonLetterSpacingType ),
			'padding-left': generateCSSUnit( buttonLeftPaddingTablet, buttonPaddingTypeTablet ),
			'padding-right': generateCSSUnit( buttonRightPaddingTablet, buttonPaddingTypeTablet ),
			'padding-top': generateCSSUnit( buttonTopPaddingTablet, buttonPaddingTypeTablet ),
			'padding-bottom': generateCSSUnit( buttonBottomPaddingTablet, buttonPaddingTypeTablet ),
			...buttonBorderCSSTablet,
		},
		' .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit( radioCheckFontSizeTablet, radioCheckFontSizeType ),
			'line-height': generateCSSUnit( radioCheckLineHeightTablet, radioCheckLineHeightType ),
			'letter-spacing': generateCSSUnit( radioCheckLetterSpacingTablet, radioCheckLetterSpacingType ),
		},
		' span.wpcf7-not-valid-tip': {
			'font-size': generateCSSUnit( validationMsgFontSizeTablet, validationMsgFontSizeType ),
			'line-height': generateCSSUnit( validationMsgLineHeightTablet, validationMsgLineHeightType ),
			'letter-spacing': generateCSSUnit( validationMsgLetterSpacingTablet, validationMsgLetterSpacingType ),
		},
		' .wpcf7 select.wpcf7-form-control.wpcf7-select:not([multiple="multiple"])': fieldPaddingTablet,
		' .wpcf7 select.wpcf7-select[multiple="multiple"] option': fieldPaddingTablet,
	};
	const fieldPaddingMobile = {
		'padding-left': generateCSSUnit( fieldLeftPaddingMobile, fieldPaddingTypeMobile ),
		'padding-right': generateCSSUnit( fieldRightPaddingMobile, fieldPaddingTypeMobile ),
		'padding-top': generateCSSUnit( fieldTopPaddingMobile, fieldPaddingTypeMobile ),
		'padding-bottom': generateCSSUnit( fieldBottomPaddingMobile, fieldPaddingTypeMobile ),
	};
	const mobileSelectors = {
		' .wpcf7 input:not([type=submit])': {
			...fieldBorderCSSMobile,
			...fieldPaddingMobile,
		},
		" .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": fieldBorderCSSMobile,
		" .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": fieldBorderCSSMobile,
		" .wpcf7 .wpcf7-radio input[type='radio'] + span:before": fieldBorderCSSMobile,

		// underline border
		' .uagb-cf7-styler__field-style-underline .wpcf7 input:not([type=submit])': fieldBorderCSSMobile,
		' .uagb-cf7-styler__field-style-underline select': fieldBorderCSSMobile,
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-checkbox input[type='checkbox'] + span:before": {
			'height': generateCSSUnit( radioCheckSizeMobile, 'px' ),
			'width': generateCSSUnit( radioCheckSizeMobile, 'px' ),
			'font-size': 'calc( ' + radioCheckSizeMobile + 'px / 1.2 )',
			'border-width': generateCSSUnit( radioCheckBorderWidthMobile, radioCheckBorderWidthUnit ),
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-acceptance input[type='checkbox'] + span:before": {
			'height': generateCSSUnit( radioCheckSizeMobile, 'px' ),
			'width': generateCSSUnit( radioCheckSizeMobile, 'px' ),
			'font-size': 'calc( ' + radioCheckSizeMobile + 'px / 1.2 )',
			'border-width': generateCSSUnit( radioCheckBorderWidthMobile, radioCheckBorderWidthUnit ),
		},
		" .uagb-cf7-styler__check-style-enabled .wpcf7 input[type='radio'] + span:before": {
			'height': generateCSSUnit( radioCheckSizeMobile, 'px' ),
			'width': generateCSSUnit( radioCheckSizeMobile, 'px' ),
			'font-size': 'calc( ' + radioCheckSizeMobile + 'px / 1.2 )',
			'border-width': generateCSSUnit( radioCheckBorderWidthMobile, radioCheckBorderWidthUnit ),
		},
		' .uagb-cf7-styler__check-style-enabled .wpcf7 input:not([type=submit])': {
			'font-size': generateCSSUnit( inputFontSizeMobile, inputFontSizeType ),
			'line-height': generateCSSUnit( inputLineHeightMobile, inputLineHeightType ),
			'margin-top': generateCSSUnit( fieldLabelSpacingMobile, 'px' ),
			'margin-bottom': generateCSSUnit( fieldSpacingMobile, 'px' ),
			'letter-spacing': generateCSSUnit( inputLetterSpacingTablet, inputLetterSpacingType ),
		},
		' .wpcf7 select': {
			'font-size': generateCSSUnit( labelFontSizeMobile, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightMobile, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingMobile, labelLetterSpacingType ),
			...fieldBorderCSSMobile,
		},
		' .wpcf7 textarea': {
			'font-size': generateCSSUnit( inputFontSizeTablet, inputFontSizeType ),
			'line-height': generateCSSUnit( inputLineHeightTablet, inputLineHeightType ),
			'margin-top': generateCSSUnit( fieldLabelSpacingMobile, 'px' ),
			'margin-bottom': generateCSSUnit( fieldSpacingMobile, 'px' ),
			'letter-spacing': generateCSSUnit( inputLetterSpacingMobile, inputLetterSpacingType ),
			...fieldBorderCSSMobile,
			...fieldPaddingMobile,
		},
		' .wpcf7 form label': {
			'font-size': generateCSSUnit( inputFontSizeMobile, inputFontSizeType ),
			'line-height': generateCSSUnit( inputLineHeightMobile, inputLineHeightType ),
			'letter-spacing': generateCSSUnit( inputLetterSpacingMobile, inputLetterSpacingType ),
		},
		' .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit( labelFontSizeMobile, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeightMobile, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacingMobile, labelLetterSpacingType ),
		},
		' .wpcf7 input.wpcf7-form-control.wpcf7-submit': {
			'font-size': generateCSSUnit( buttonFontSizeMobile, buttonFontSizeType ),
			'line-height': generateCSSUnit( buttonLineHeightMobile, buttonLineHeightType ),
			'letter-spacing': generateCSSUnit( buttonLetterSpacingMobile, buttonLetterSpacingType ),
			'padding-left': generateCSSUnit( buttonLeftPaddingMobile, buttonPaddingTypeMobile ),
			'padding-right': generateCSSUnit( buttonRightPaddingMobile, buttonPaddingTypeMobile ),
			'padding-top': generateCSSUnit( buttonTopPaddingMobile, buttonPaddingTypeMobile ),
			'padding-bottom': generateCSSUnit( buttonBottomPaddingMobile, buttonPaddingTypeMobile ),
			...buttonBorderCSSMobile,
		},
		' .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label': {
			'font-size': generateCSSUnit( radioCheckFontSizeMobile, radioCheckFontSizeType ),
			'line-height': generateCSSUnit( radioCheckLineHeightMobile, radioCheckLineHeightType ),
			'letter-spacing': generateCSSUnit( radioCheckLetterSpacingMobile, radioCheckLetterSpacingType ),
		},
		' span.wpcf7-not-valid-tip': {
			'font-size': generateCSSUnit( validationMsgFontSizeMobile, validationMsgFontSizeType ),
			'line-height': generateCSSUnit( validationMsgLineHeightMobile, validationMsgLineHeightType ),
			'letter-spacing': generateCSSUnit( validationMsgLetterSpacingMobile, validationMsgLetterSpacingType ),
		},
		' .wpcf7 select.wpcf7-form-control.wpcf7-select:not([multiple="multiple"])': fieldPaddingMobile,
		' .wpcf7 select.wpcf7-select[multiple="multiple"] option': fieldPaddingMobile,
	};
	const id = `.editor-styles-wrapper .uagb-block-${ clientId.substr( 0, 8 ) }`;
	let stylingCss = generateCSS( selectors, `${ id }` );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
