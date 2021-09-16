/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		buttonAlign,
		submitColor,
		submitColorHover,
		submitBgColor,
		submitBgColorHover,
		toggleWidthSize,
		toggleHeightSize,
		submitborderStyle,
		submitborderWidth,
		submitborderRadius,
		submitborderColor,
		submitborderHoverColor,
		submitTextFontFamily,
		submitTextFontWeight,
		submitTextFontSize,
		submitTextFontSizeType,
		submitTextFontSizeTablet,
		submitTextFontSizeMobile,
		submitTextLineHeightType,
		submitTextLineHeight,
		submitTextLineHeightTablet,
		submitTextLineHeightMobile,
		labelFontFamily,
		labelFontWeight,
		labelFontSize,
		labelFontSizeType,
		labelFontSizeTablet,
		labelFontSizeMobile,
		labelLineHeightType,
		labelLineHeight,
		labelLineHeightTablet,
		labelLineHeightMobile,
		inputFontFamily,
		inputFontWeight,
		inputFontSize,
		inputFontSizeType,
		inputFontSizeTablet,
		inputFontSizeMobile,
		inputLineHeightType,
		inputLineHeight,
		inputLineHeightTablet,
		inputLineHeightMobile,
		toggleActiveColor,
		labelColor,
		inputColor,
		bgColor,
		inputplaceholderColor,
		inputactiveColor,
		inputborderStyle,
		inputborderWidth,
		inputborderRadius,
		inputborderColor,
		inputborderHoverColor,
		fieldGap,
		formStyle,
		overallAlignment,
		toggleSize,

		paddingBtnTop,
		paddingBtnRight,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		submitTextTransform,
		submitTextDecoration,
		labelTextTransform,
		labelTextDecoration,
		inputTransform,
		inputDecoration,
		fieldGapType,
		paddingFieldTop,
		paddingFieldRight,
		paddingFieldBottom,
		paddingFieldLeft,
		paddingFieldTopTablet,
		paddingFieldRightTablet,
		paddingFieldBottomTablet,
		paddingFieldLeftTablet,
		paddingFieldTopMobile,
		paddingFieldRightMobile,
		paddingFieldBottomMobile,
		paddingFieldLeftMobile,
		paddingFieldUnit,
		paddingFieldUnitmobile,
		paddingFieldUnitTablet,
		toggleSizeType,
	} = props.attributes;

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};

	selectors = {
		' form.uagb-forms-main-form, form.uagb-forms-main-form .uagb-forms-input, form.uagb-forms-main-form textarea': {
			'text-align': overallAlignment,
		},

		' .uagb-forms-main-form .uagb-forms-field-set': {
			'margin-bottom': generateCSSUnit( fieldGap, fieldGapType ),
		},
		' .uagb-forms-main-form .uagb-forms-input-label': {
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'line-height': generateCSSUnit(
				labelLineHeight,
				labelLineHeightType
			),
			'font-family': labelFontFamily,
			'text-transform': labelTextTransform,
			'text-decoration': labelTextDecoration,
			'font-weight': labelFontWeight,
			color: labelColor,
		},
		' .uagb-forms-main-form  .uagb-forms-input::placeholder': {
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'font-family': inputFontFamily,
			'text-transform': inputTransform,
			'text-decoration': inputDecoration,
			'font-weight': inputFontWeight,
			color: inputplaceholderColor,
		},
		' .uagb-forms-main-form input': {
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'font-family': inputFontFamily,
			'text-transform': inputTransform,
			'text-decoration': inputDecoration,
			'font-weight': inputFontWeight,
			color: inputplaceholderColor,
		},
		' .uagb-forms-main-form select': {
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'font-family': inputFontFamily,
			'text-transform': inputTransform,
			'text-decoration': inputDecoration,
			'font-weight': inputFontWeight,
			color: inputplaceholderColor,
		},
		' .uagb-forms-main-form .uagb-forms-input:focus': {
			outline: ' none !important',
			border: '2px solid ' + inputactiveColor,
		},

		' .uagb-forms-main-form .uagb-forms-main-submit-button-wrap': {
			'text-align': buttonAlign,
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button': {
			color: submitColor,
			'font-size': generateCSSUnit(
				submitTextFontSize,
				submitTextFontSizeType
			),
			'line-height': generateCSSUnit(
				submitTextLineHeight,
				submitTextLineHeightType
			),
			'font-family': submitTextFontFamily,
			'text-transform': submitTextTransform,
			'text-decoration': submitTextDecoration,
			'font-weight': submitTextFontWeight,
			'background-color': submitBgColor,
			border:
				generateCSSUnit( submitborderWidth, 'px' ) +
				' ' +
				submitborderStyle +
				' ' +
				submitborderColor,
			'border-radius': generateCSSUnit( submitborderRadius, 'px' ),
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottom,
				paddingBtnUnit
			),
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button:hover': {
			color: submitColorHover,
			'background-color': submitBgColorHover,
			'border-color': submitborderHoverColor,
		},
		' .uagb-switch ': {
			height: generateCSSUnit(
				25 + toggleHeightSize + inputborderWidth,
				'px'
			),
			width: generateCSSUnit(
				50 + toggleWidthSize + inputborderWidth,
				'px'
			),
		},
		' .uagb-switch input:checked + .uagb-slider': {
			'background-color': toggleActiveColor,
		},
		' .uagb-switch input:focus + .uagb-slider': {
			'box-shadow': '0 0 1px' + toggleActiveColor,
		},
		' .uagb-slider:before ': {
			height: generateCSSUnit(
				20 + toggleHeightSize - inputborderWidth,
				'px'
			),
			width: generateCSSUnit(
				20 + toggleWidthSize - inputborderWidth / 2,
				'px'
			),
		},
		' .uagb-switch input:checked + .uagb-slider:before ': {
			transform:
				'translateX(' +
				generateCSSUnit( 26 + toggleWidthSize, 'px' ) / 2 +
				')',
		},
		' .uagb-forms-radio-wrap input[type=radio]:checked + label:before': {
			'background-color': inputColor,
			'font-size': 'calc(' + toggleSize + toggleSizeType + ' / 1.2 )',
		},
		' .uagb-forms-radio-wrap input[type=radio] + label:before': {
			'background-color': bgColor,
			width: generateCSSUnit( toggleSize, toggleSizeType ),
			height: generateCSSUnit( toggleSize, toggleSizeType ),
		},
		' .uagb-forms-radio-wrap > label': {
			color: inputColor,
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before': {
			color: inputColor,
			'font-size': 'calc(' + toggleSize + 'px / 1.2 )',
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before': {
			'background-color': bgColor,
			'border-radius': generateCSSUnit( inputborderRadius, 'px' ),
			width: generateCSSUnit( toggleSize, 'px' ),
			height: generateCSSUnit( toggleSize, 'px' ),
		},
		' .uagb-forms-checkbox-wrap > label': {
			color: inputColor,
		},
		' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before': {
			color: inputColor,
			'font-size': 'calc(' + toggleSize + 'px / 1.2 )',
		},
		' .uagb-forms-accept-wrap input[type=checkbox] + label:before': {
			'border-radius': generateCSSUnit( inputborderRadius, 'px' ),
			'background-color': bgColor,
			width: generateCSSUnit( toggleSize, 'px' ),
			height: generateCSSUnit( toggleSize, 'px' ),
		},
		' .uagb-forms-accept-wrap > label': {
			color: inputColor,
		},
	};

	if ( 'boxed' === formStyle ) {
		selectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			border:
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
			'border-radius': generateCSSUnit( inputborderRadius, 'px' ),
			'background-color': bgColor,
			color: inputColor,
			'padding-top': generateCSSUnit( paddingFieldTop, paddingFieldUnit ),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottom,
				paddingFieldUnit
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeft,
				paddingFieldUnit
			),
			'padding-right': generateCSSUnit(
				paddingFieldRight,
				paddingFieldUnit
			),
		};
		tabletSelectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			'padding-top': generateCSSUnit(
				paddingFieldTopTablet,
				paddingFieldUnitTablet
			),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottomTablet,
				paddingFieldUnitTablet
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeftTablet,
				paddingFieldUnitTablet
			),
			'padding-right': generateCSSUnit(
				paddingFieldRightTablet,
				paddingFieldUnitTablet
			),
		};
		mobileSelectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			'padding-top': generateCSSUnit(
				paddingFieldTopMobile,
				paddingFieldUnitmobile
			),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottomMobile,
				paddingFieldUnitmobile
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeftMobile,
				paddingFieldUnitmobile
			),
			'padding-right': generateCSSUnit(
				paddingFieldRightMobile,
				paddingFieldUnitmobile
			),
		};
		selectors[
			' .uagb-forms-main-form .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'
		] = {
			border:
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
			'border-radius': generateCSSUnit( inputborderRadius, 'px' ),
		};
		selectors[
			' .uagb-forms-main-form .uagb-forms-accept-wrap input[type=checkbox] + label:before'
		] = {
			border:
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
			'border-radius': generateCSSUnit( inputborderRadius, 'px' ),
		};
		selectors[
			' .uagb-forms-main-form .uagb-forms-radio-wrap input[type=radio] + label:before'
		] = {
			border:
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
		};
		selectors[ ' .uagb-slider ' ] = {
			border:
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
			'background-color': bgColor,
		};
		selectors[ ' .uagb-forms-main-form  .uagb-forms-input:hover' ] = {
			'border-color': inputborderHoverColor,
		};
	} else if ( 'underlined' === formStyle ) {
		selectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			border: 0,
			outline: 0,
			'border-radius': 0,
			background: 'transparent',
			'border-bottom':
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
			color: inputColor,
			'padding-top': generateCSSUnit( paddingFieldTop, paddingFieldUnit ),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottom,
				paddingFieldUnit
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeft,
				paddingFieldUnit
			),
			'padding-right': generateCSSUnit(
				paddingFieldRight,
				paddingFieldUnit
			),
		};
		tabletSelectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			'padding-top': generateCSSUnit(
				paddingFieldTopTablet,
				paddingFieldUnitTablet
			),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottomTablet,
				paddingFieldUnitTablet
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeftTablet,
				paddingFieldUnitTablet
			),
			'padding-right': generateCSSUnit(
				paddingFieldRightTablet,
				paddingFieldUnitTablet
			),
		};
		mobileSelectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			'padding-top': generateCSSUnit(
				paddingFieldTopMobile,
				paddingFieldUnitmobile
			),
			'padding-bottom': generateCSSUnit(
				paddingFieldBottomMobile,
				paddingFieldUnitmobile
			),
			'padding-left': generateCSSUnit(
				paddingFieldLeftMobile,
				paddingFieldUnitmobile
			),
			'padding-right': generateCSSUnit(
				paddingFieldRightMobile,
				paddingFieldUnitmobile
			),
		};
		selectors[
			' .uagb-forms-main-form .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'
		] = {
			'border-bottom':
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
		};
		selectors[
			' .uagb-forms-main-form .uagb-forms-accept-wrap input[type=checkbox] + label:before'
		] = {
			'border-bottom':
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
		};
		selectors[
			' .uagb-forms-main-form .uagb-forms-radio-wrap input[type=radio] + label:before'
		] = {
			'border-bottom':
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
		};
		selectors[ ' .uagb-slider ' ] = {
			'background-color': bgColor,
			'border-bottom':
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
		};
		selectors[ ' .uagb-forms-main-form  .uagb-forms-input:hover' ] = {
			'border-color': inputborderHoverColor,
		};
	}

	tabletSelectors = {
		' .uagb-forms-main-form .uagb-forms-main-submit-button': {
			'padding-top': generateCSSUnit(
				paddingBtnTopTablet,
				tabletPaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomTablet,
				tabletPaddingBtnUnit
			),
			'padding-left': generateCSSUnit(
				paddingBtnLeftTablet,
				tabletPaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightTablet,
				tabletPaddingBtnUnit
			),
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button': { // eslint-disable-line no-dupe-keys
			'font-size': generateCSSUnit(
				submitTextFontSizeTablet,
				submitTextFontSizeType
			),
			'line-height': generateCSSUnit(
				submitTextLineHeightTablet,
				submitTextLineHeightType
			),
		},
		' .uagb-forms-main-form .uagb-forms-input-label': {
			'font-size': generateCSSUnit(
				labelFontSizeTablet,
				labelFontSizeType
			),
			'line-height': generateCSSUnit(
				labelLineHeightTablet,
				labelLineHeightType
			),
		},
		' .uagb-forms-main-form  .uagb-forms-input::placeholder': {
			'font-size': generateCSSUnit(
				inputFontSizeTablet,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightTablet,
				inputLineHeightType
			),
		},
	};

	mobileSelectors = {
		' .uagb-forms-main-form .uagb-forms-main-submit-button': { // eslint-disable-line no-dupe-keys
			'padding-top': generateCSSUnit(
				paddingBtnTopMobile,
				mobilePaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomMobile,
				mobilePaddingBtnUnit
			),
			'padding-left': generateCSSUnit(
				paddingBtnLeftMobile,
				mobilePaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightMobile,
				mobilePaddingBtnUnit
			),
			'font-size': generateCSSUnit(
				submitTextFontSizeMobile,
				submitTextFontSizeType
			),
			'line-height': generateCSSUnit(
				submitTextLineHeightMobile,
				submitTextLineHeightType
			),
		},
		' .uagb-forms-main-form .uagb-forms-input-label': {
			'font-size': generateCSSUnit(
				labelFontSizeMobile,
				labelFontSizeType
			),
			'line-height': generateCSSUnit(
				labelLineHeightMobile,
				labelLineHeightType
			),
		},
		' .uagb-forms-main-form  .uagb-forms-input::placeholder': {
			'font-size': generateCSSUnit(
				inputFontSizeMobile,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightMobile,
				inputLineHeightType
			),
		},
	};

	let stylingCss = '';
	const base_selector = `.block-editor-page #wpwrap .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;
	stylingCss = generateCSS( selectors, base_selector );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
