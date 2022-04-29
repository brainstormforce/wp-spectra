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
		toggleWidthSizeTablet,
		toggleWidthSizeMobile,
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
		toggleColor,
		toggleActiveColor,
		toggleDotColor,
		toggleDotActiveColor,
		labelColor,
		labelHoverColor,
		inputColor,
		bgColor,
		bgHoverColor,
		bgActiveColor,
		inputplaceholderColor,
		inputplaceholderHoverColor,
		inputplaceholderActiveColor,
		inputactiveColor,
		inputborderStyle,
		inputborderWidth,
		inputborderRadius,
		inputborderColor,
		inputborderHoverColor,
		fieldGap,
		fieldGapTablet,
		fieldGapMobile,
		formStyle,
		overallAlignment,
		toggleSize,
		toggleSizeTablet,
		toggleSizeMobile,

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
		labelTransform,
		labelDecoration,
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
		submitTextFontStyle,
		labelFontStyle,
		inputFontStyle,
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
			'font-style': labelFontStyle,
			'text-transform': labelTransform,
			'text-decoration': labelDecoration,
			'font-weight': labelFontWeight,
			'color': labelColor,
		},
		' .uagb-forms-main-form  .uagb-forms-input::placeholder': {
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-transform': inputTransform,
			'text-decoration': inputDecoration,
			'font-weight': inputFontWeight,
			'color': inputplaceholderColor,
		},
		' .uagb-forms-main-form input': {
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-transform': inputTransform,
			'text-decoration': inputDecoration,
			'font-weight': inputFontWeight,
			'color': inputplaceholderColor,
		},
		' .uagb-forms-main-form select': {
			'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
			'line-height': generateCSSUnit(
				inputLineHeight,
				inputLineHeightType
			),
			'font-family': inputFontFamily,
			'font-style': inputFontStyle,
			'text-transform': inputTransform,
			'text-decoration': inputDecoration,
			'font-weight': inputFontWeight,
			'color': inputplaceholderColor,
		},
		' .uagb-forms-main-form .uagb-forms-input:focus': {
			'outline': ' none !important',
			'border': '2px solid ' + inputactiveColor,
			'background-color': `${ bgActiveColor } !important`,
		},
		' .uagb-forms-main-form .uagb-forms-input:focus::placeholder': {
			'color': `${ inputplaceholderActiveColor } !important`
		},

		' .uagb-forms-main-form .uagb-forms-main-submit-button-wrap': {
			'text-align': buttonAlign,
		},
		' .uagb-forms-main-form .uagb-forms-main-submit-button': {
			'color': submitColor,
			'font-size': generateCSSUnit(
				submitTextFontSize,
				submitTextFontSizeType
			),
			'line-height': generateCSSUnit(
				submitTextLineHeight,
				submitTextLineHeightType
			),
			'font-family': submitTextFontFamily,
			'font-style': submitTextFontStyle,
			'text-transform': submitTextTransform,
			'text-decoration': submitTextDecoration,
			'font-weight': submitTextFontWeight,
			'background-color': submitBgColor,
			'border':
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
			'color': submitColorHover,
			'background-color': submitBgColorHover,
			'border-color': submitborderHoverColor,
		},
		' .uagb-switch ': {
			'height': generateCSSUnit(
				25 + toggleWidthSize + inputborderWidth,
				'px'
			),
			'width': generateCSSUnit(
				50 + toggleWidthSize + inputborderWidth,
				'px'
			),
		},
		' .uagb-switch input:checked + .uagb-slider': {
			'background-color': toggleActiveColor,
		},
		' .uagb-switch input:checked + .uagb-slider:before': {
			'background-color': toggleDotActiveColor,
		},
		' .uagb-switch input:focus + .uagb-slider': {
			'box-shadow': '0 0 1px' + toggleActiveColor,
		},
		' .uagb-slider:before ': {
			'height': generateCSSUnit(
				20 + toggleWidthSize - inputborderWidth * 2,
				'px'
			),
			'width': generateCSSUnit(
				20 + toggleWidthSize - inputborderWidth,
				'px'
			),
			'background-color': toggleDotColor,
		},
		' .uagb-slider.round': {
			'border-radius': generateCSSUnit( 20 + toggleWidthSize - inputborderWidth, 'px' ),
		},
		' .uagb-switch input:checked + .uagb-slider:before ': {
			'transform':
				'translateX(' +
				generateCSSUnit( 26 + toggleWidthSize, 'px' ) / 2 +
				')',
			'background-color': toggleDotActiveColor,
		},
		' .uagb-forms-radio-wrap input[type=radio]:checked + label:before': {
			'background-color': toggleActiveColor,
			'font-size': 'calc(' + toggleSize + toggleSizeType + ' / 1.2 )',
		},
		' .uagb-forms-radio-wrap input[type=radio] + label:before': {
			'background-color': toggleColor,
			'width': generateCSSUnit( toggleSize, toggleSizeType ),
			'height': generateCSSUnit( toggleSize, toggleSizeType ),
		},
		' .uagb-forms-radio-wrap > label': {
			'color': inputColor,
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before': {
			'color': toggleDotActiveColor,
			'background-color': toggleActiveColor,
			'font-size': 'calc(' + toggleSize + 'px / 1.2 )',
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before': {
			'background-color': toggleColor,
			'border-radius': generateCSSUnit( inputborderRadius, 'px' ),
			'width': generateCSSUnit( toggleSize, 'px' ),
			'height': generateCSSUnit( toggleSize, 'px' ),
		},
		' .uagb-forms-checkbox-wrap > label': {
			'color': inputColor,
		},
		' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before': {
			'color': toggleDotColor,
			'font-size': 'calc(' + toggleSize + 'px / 1.2 )',
		},
		' .uagb-forms-accept-wrap input[type=checkbox] + label:before': {
			'border-radius': generateCSSUnit( inputborderRadius, 'px' ),
			'background-color': toggleColor,
			'width': generateCSSUnit( toggleSize, 'px' ),
			'height': generateCSSUnit( toggleSize, 'px' ),
		},
		' .uagb-forms-accept-wrap > label': {
			'color': inputColor,
		},
		// Hover Colors
		' .uagb-forms-field-set:hover .uagb-forms-input-label': {
			'color': labelHoverColor,
		},
		' .uagb-forms-field-set:hover .uagb-forms-input': {
			'background-color': bgHoverColor,
			'border-color': inputborderHoverColor,
		},
		' .uagb-forms-field-set:hover .uagb-forms-input::placeholder': {
			'color': inputplaceholderHoverColor,
		},
	};

	if ( 'boxed' === formStyle ) {
		selectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			'border':
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
			'border-radius': generateCSSUnit( inputborderRadius, 'px' ),
			'background-color': bgColor,
			'color': inputColor,
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
			'border':
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
			'border':
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
			'border':
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
		};
		selectors[ ' .uagb-slider ' ] = {
			'border':
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
			'background-color': toggleColor,
		};
		// Label Hovev Colors
	} else if ( 'underlined' === formStyle ) {
		selectors[ ' .uagb-forms-main-form  .uagb-forms-input' ] = {
			'border': 0,
			'outline': 0,
			'border-radius': 0,
			'background': 'transparent',
			'border-bottom':
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
			'color': inputColor,
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
			'background-color': toggleColor,
			'border-bottom':
				generateCSSUnit( inputborderWidth, 'px' ) +
				' ' +
				inputborderStyle +
				' ' +
				inputborderColor,
		};
	}

	tabletSelectors = {
		' .uagb-forms-main-form .uagb-forms-field-set': {
			'margin-bottom': generateCSSUnit( fieldGapTablet, fieldGapType ),
		},
		' .uagb-forms-radio-wrap input[type=radio]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeTablet + toggleSizeType + ' / 1.2 )',
		},
		' .uagb-forms-radio-wrap input[type=radio] + label:before': {
			'width': generateCSSUnit( toggleSizeTablet, toggleSizeType ),
			'height': generateCSSUnit( toggleSizeTablet, toggleSizeType ),
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeTablet + 'px / 1.2 )',
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before': {
			'width': generateCSSUnit( toggleSizeTablet, 'px' ),
			'height': generateCSSUnit( toggleSizeTablet, 'px' ),
		},
		' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeTablet + 'px / 1.2 )',
		},
		' .uagb-forms-accept-wrap input[type=checkbox] + label:before': {
			'width': generateCSSUnit( toggleSizeTablet, 'px' ),
			'height': generateCSSUnit( toggleSizeTablet, 'px' ),
		},
		' .uagb-switch ' : {
			'height': generateCSSUnit(
				25 + toggleWidthSizeTablet + inputborderWidth,
				'px'
			),
			'width': generateCSSUnit(
				50 + toggleWidthSizeTablet + inputborderWidth,
				'px'
			),
		},
		' .uagb-switch .uagb-slider:before ' : {
			'height': generateCSSUnit(
				20 + toggleWidthSizeTablet - inputborderWidth * 2,
				'px'
			),
			'width': generateCSSUnit(
				20 + toggleWidthSizeTablet - inputborderWidth,
				'px'
			),
		},
		' .uagb-slider.round': {
			'border-radius': generateCSSUnit( 20 + toggleWidthSizeTablet - inputborderWidth, 'px' ),
		},
		' .uagb-switch input:checked + .uagb-slider:before ' : {
			'transform':
				'translateX(' +
				generateCSSUnit( 26 + toggleWidthSizeTablet, 'px' ) / 2 +
				')',
		},
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
		' .uagb-forms-radio-wrap input[type=radio]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeMobile + toggleSizeType + ' / 1.2 )',
		},
		' .uagb-forms-radio-wrap input[type=radio] + label:before': {
			'width': generateCSSUnit( toggleSizeMobile, toggleSizeType ),
			'height': generateCSSUnit( toggleSizeMobile, toggleSizeType ),
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeMobile + 'px / 1.2 )',
		},
		' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before': {
			'width': generateCSSUnit( toggleSizeMobile, 'px' ),
			'height': generateCSSUnit( toggleSizeMobile, 'px' ),
		},
		' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before': {
			'font-size': 'calc(' + toggleSizeMobile + 'px / 1.2 )',
		},
		' .uagb-forms-accept-wrap input[type=checkbox] + label:before': {
			'width': generateCSSUnit( toggleSizeMobile, 'px' ),
			'height': generateCSSUnit( toggleSizeMobile, 'px' ),
		},
		' .uagb-forms-main-form .uagb-forms-field-set': {
			'margin-bottom': generateCSSUnit( fieldGapMobile, fieldGapType ),
		},
		' .uagb-switch ' : {
			'height': generateCSSUnit(
				25 + toggleWidthSizeMobile + inputborderWidth,
				'px'
			),
			'width': generateCSSUnit(
				50 + toggleWidthSizeMobile + inputborderWidth,
				'px'
			),
		},
		' .uagb-switch .uagb-slider:before ' : {
			'height': generateCSSUnit(
				20 + toggleWidthSizeMobile - inputborderWidth * 2,
				'px'
			),
			'width': generateCSSUnit(
				20 + toggleWidthSizeMobile - inputborderWidth,
				'px'
			),
		},
		' .uagb-slider.round': {
			'border-radius': generateCSSUnit( 20 + toggleWidthSizeMobile - inputborderWidth, 'px' ),
		},
		' .uagb-switch input:checked + .uagb-slider:before ' : {
			'transform':
				'translateX(' +
				generateCSSUnit( 26 + toggleWidthSizeMobile, 'px' ) / 2 +
				')',
		},
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
	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
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
