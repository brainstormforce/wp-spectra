/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
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
		borderTopWidth,
		borderLeftWidth,
		borderRightWidth,
		borderBottomWidth,
		borderTopWidthTablet,
		borderLeftWidthTablet,
		borderRightWidthTablet,
		borderBottomWidthTablet,
		borderTopWidthMobile,
		borderLeftWidthMobile,
		borderRightWidthMobile,
		borderBottomWidthMobile,
		borderTopLeftRadius,
		borderTopRightRadius,
		borderBottomLeftRadius,
		borderBottomRightRadius,
		borderTopLeftRadiusTablet,
		borderTopRightRadiusTablet,
		borderBottomLeftRadiusTablet,
		borderBottomRightRadiusTablet,
		borderTopLeftRadiusMobile,
		borderTopRightRadiusMobile,
		borderBottomLeftRadiusMobile,
		borderBottomRightRadiusMobile,
		borderRadiusUnit,
		borderRadiusUnitTablet,
		borderRadiusUnitMobile,
		borderStyle,
		borderColor,
		borderHColor,
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
		inputPaddingTypeDesktop,
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
		inputSizeType,
		paddingInputTop,
		paddingInputRight,
		paddingInputBottom,
		paddingInputLeft,
		paddingInputTopTablet,
		paddingInputBottomTablet,
		paddingInputRightTablet,
		paddingInputLeftTablet,
		paddingInputTopMobile,
		paddingInputRightMobile,
		paddingInputBottomMobile,
		paddingInputLeftMobile,
		mobilePaddingInputUnit,
		tabletPaddingInputUnit,
		iconSizeType,
		inputTransform,
		inputDecoration,
		buttonTransform,
		buttonDecoration,
		buttonIconSizeType,
		buttonWidthType,
		inputFontStyle,
		buttonFontStyle,
	} = props.attributes;

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};

	const $iconSize = generateCSSUnit( iconSize, iconSizeType );
	const $buttonIconSize = generateCSSUnit(
		buttonIconSize,
		buttonIconSizeType
	);

	const inputCSS = {
		'color': textColor,
		'background-color': inputBgColor,
		'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
		'line-height': generateCSSUnit( inputLineHeight, inputLineHeightType ),
		'font-family': inputFontFamily,
		'font-style' : inputFontStyle,
		'font-weight': inputFontWeight,
		'text-decoration': inputDecoration,
		'text-transform': inputTransform,
		'border': 0,
		'border-radius': '0px',
		'margin': 0,
		'outline': 'unset',
		'padding-top': generateCSSUnit(
			paddingInputTop,
			inputPaddingTypeDesktop
		),
		'padding-bottom': generateCSSUnit(
			paddingInputBottom,
			inputPaddingTypeDesktop
		),
		'padding-right': generateCSSUnit(
			paddingInputRight,
			inputPaddingTypeDesktop
		),
		'padding-left': generateCSSUnit(
			paddingInputLeft,
			inputPaddingTypeDesktop
		),
		'transition': 'all .5s',
	};
	const boxCSS = {
		'border-style': borderStyle,
		'border-top-width': generateCSSUnit( borderTopWidth, 'px' ),
		'border-right-width': generateCSSUnit( borderRightWidth, 'px' ),
		'border-bottom-width': generateCSSUnit( borderBottomWidth, 'px' ),
		'border-left-width': generateCSSUnit( borderLeftWidth, 'px' ),
		'border-color': borderColor,
		'border-top-left-radius': generateCSSUnit( borderTopLeftRadius, borderRadiusUnit ),
		'border-top-right-radius':  generateCSSUnit( borderTopRightRadius, borderRadiusUnit ),
		'border-bottom-left-radius':  generateCSSUnit( borderBottomLeftRadius, borderRadiusUnit ),
		'border-bottom-right-radius':  generateCSSUnit( borderBottomRightRadius, borderRadiusUnit ),


		'outline': 'unset',
		'box-shadow':
			generateCSSUnit( boxShadowHOffset, 'px' ) +
			' ' +
			generateCSSUnit( boxShadowVOffset, 'px' ) +
			' ' +
			generateCSSUnit( boxShadowBlur, 'px' ) +
			' ' +
			generateCSSUnit( boxShadowSpread, 'px' ) +
			' ' +
			boxShadowColor +
			' ' +
			boxShadowPositionCSS,
	};

	let tmpIconColor = textColor;

	if ( 'undefined' !== typeof iconColor && '' !== iconColor ) {
		tmpIconColor = iconColor;
	}
	
	boxCSS.width = generateCSSUnit( inputSize, inputSizeType );

	selectors = {
		' .uagb-search-form__container .uagb-search-submit': {
			'width': generateCSSUnit( buttonWidth, buttonWidthType ),
			'padding': 0,
			'border': 0,
		},
		' .uagb-search-form__container .uagb-search-form__input::placeholder': {
			'color': textColor,
			'opacity': 0.6,
		},
		' .uagb-search-form__container .uagb-search-submit .uagb-wp-search-button-icon-wrap svg': {
			'width': $buttonIconSize,
			'height': $buttonIconSize,
			'font-size': $buttonIconSize,
			'fill': buttonIconColor,
		},
		' .uagb-search-form__container .uagb-search-submit .uagb-wp-search-button-text': {
			'font-size': generateCSSUnit( buttonFontSize, buttonFontSizeType ),
			'line-height': generateCSSUnit(
				buttonLineHeight,
				buttonLineHeightType
			),
			'font-family': buttonFontFamily,
			'font-style' : buttonFontStyle,
			'font-weight': buttonFontWeight,
			'text-decoration': buttonDecoration,
			'text-transform': buttonTransform,
			'color': buttonTextColor,
		},
		' .uagb-search-form__container .uagb-search-submit:hover .uagb-wp-search-button-text': {
			'color': buttonTextHoverColor,
		},
		' .uagb-search-form__container .uagb-search-submit:hover .uagb-wp-search-button-icon-wrap svg': {
			'fill': buttonIconHoverColor,
		},
		'.uagb-layout-input .uagb-wp-search-icon-wrap svg': {
			'width': $iconSize,
			'height': $iconSize,
			'font-size': $iconSize,
			'fill': tmpIconColor,
		},
	};

	if ( 'input-button' === layout || 'input' === layout ) {
		selectors[
			' .uagb-search-form__container .uagb-search-form__input'
		] = inputCSS;

		selectors[
			' .uagb-search-wrapper .uagb-search-form__container'
		] = boxCSS;
		selectors[
			' .uagb-search-wrapper .uagb-search-form__container:hover'
		] = {
			'border-color': borderHColor,
		};
		if ( 'inset' === boxShadowPosition ) {
			selectors[ ' .uagb-search-wrapper .uagb-search-form__input' ] = {
				'box-shadow':
					generateCSSUnit( boxShadowHOffset, 'px' ) +
					' ' +
					generateCSSUnit( boxShadowVOffset, 'px' ) +
					' ' +
					generateCSSUnit( boxShadowBlur, 'px' ) +
					' ' +
					generateCSSUnit( boxShadowSpread, 'px' ) +
					' ' +
					boxShadowColor +
					' ' +
					boxShadowPositionCSS,
			};
		}

		selectors[
			' .uagb-search-form__container .uagb-wp-search-icon-wrap'
		] = {
			'background-color': inputBgColor,
			'padding-top': generateCSSUnit(
				paddingInputTop,
				inputPaddingTypeDesktop
			),
			'padding-bottom': generateCSSUnit(
				paddingInputBottom,
				inputPaddingTypeDesktop
			),
			'padding-left': generateCSSUnit(
				paddingInputLeft,
				inputPaddingTypeDesktop
			),
		};
	}

	selectors[
		'.uagb-layout-input-button .uagb-search-form__container .uagb-search-submit'
	] = {
		'background-color': buttonBgColor,
	};
	selectors[
		'.uagb-layout-input-button .uagb-search-form__container .uagb-search-submit:hover'
	] = {
		'background-color': buttonBgHoverColor,
	};

	mobileSelectors = {
		' .uagb-search-wrapper .uagb-search-form__container': {
			'border-top-width': generateCSSUnit( borderTopWidthMobile, 'px' ),
			'border-right-width': generateCSSUnit( borderRightWidthMobile, 'px' ),
			'border-bottom-width': generateCSSUnit( borderBottomWidthMobile, 'px' ),
			'border-left-width': generateCSSUnit( borderLeftWidthMobile, 'px' ),
			'border-top-left-radius': generateCSSUnit( borderTopLeftRadiusMobile, borderRadiusUnitMobile ),
			'border-top-right-radius':  generateCSSUnit( borderTopRightRadiusMobile, borderRadiusUnitMobile ),
			'border-bottom-left-radius':  generateCSSUnit( borderBottomLeftRadiusMobile, borderRadiusUnitMobile ),
			'border-bottom-right-radius':  generateCSSUnit( borderBottomRightRadiusMobile, borderRadiusUnitMobile ),
		},
		' .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input': {
			'font-size': generateCSSUnit(
				inputFontSizeMobile,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightMobile,
				inputLineHeightType
			),
			'padding-top': generateCSSUnit(
				paddingInputTopMobile,
				mobilePaddingInputUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingInputBottomMobile,
				mobilePaddingInputUnit
			),
			'padding-right': generateCSSUnit(
				paddingInputRightMobile,
				mobilePaddingInputUnit
			),
			'padding-left': generateCSSUnit(
				paddingInputLeftMobile,
				mobilePaddingInputUnit
			),
		},
		' .uagb-search-form__container .uagb-wp-search-icon-wrap': {
			'padding-top': generateCSSUnit(
				paddingInputTopMobile,
				mobilePaddingInputUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingInputBottomMobile,
				mobilePaddingInputUnit
			),
			'padding-left': generateCSSUnit(
				paddingInputLeftMobile,
				mobilePaddingInputUnit
			),
		},
		' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit .uagb-wp-search-button-text': {
			'font-size': generateCSSUnit(
				buttonFontSizeMobile,
				buttonFontSizeType
			),
			'line-height': generateCSSUnit(
				buttonLineHeightMobile,
				buttonLineHeightType
			),
		},
	};

	tabletSelectors = {
		' .uagb-search-wrapper .uagb-search-form__container': {
			'border-top-width': generateCSSUnit( borderTopWidthTablet, 'px' ),
			'border-right-width': generateCSSUnit( borderRightWidthTablet, 'px' ),
			'border-bottom-width': generateCSSUnit( borderBottomWidthTablet, 'px' ),
			'border-left-width': generateCSSUnit( borderLeftWidthTablet, 'px' ),
			'border-top-left-radius': generateCSSUnit( borderTopLeftRadiusTablet, borderRadiusUnitTablet ),
			'border-top-right-radius':  generateCSSUnit( borderTopRightRadiusTablet, borderRadiusUnitTablet ),
			'border-bottom-left-radius':  generateCSSUnit( borderBottomLeftRadiusTablet, borderRadiusUnitTablet ),
			'border-bottom-right-radius':  generateCSSUnit( borderBottomRightRadiusTablet, borderRadiusUnitTablet ),
		},
		' .uagb-search-wrapper .uagb-search-form__container .uagb-search-form__input': {
			'font-size': generateCSSUnit(
				inputFontSizeTablet,
				inputFontSizeType
			),
			'line-height': generateCSSUnit(
				inputLineHeightTablet,
				inputLineHeightType
			),
			'padding-top': generateCSSUnit(
				paddingInputTopTablet,
				tabletPaddingInputUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingInputBottomTablet,
				tabletPaddingInputUnit
			),
			'padding-right': generateCSSUnit(
				paddingInputRightTablet,
				tabletPaddingInputUnit
			),
			'padding-left': generateCSSUnit(
				paddingInputLeftTablet,
				tabletPaddingInputUnit
			),
		},
		' .uagb-search-form__container .uagb-wp-search-icon-wrap': {
			'padding-top': generateCSSUnit(
				paddingInputTopTablet,
				tabletPaddingInputUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingInputBottomTablet,
				tabletPaddingInputUnit
			),
			'padding-left': generateCSSUnit(
				paddingInputLeftTablet,
				tabletPaddingInputUnit
			),
		},
		' .uagb-search-wrapper .uagb-search-form__container .uagb-search-submit .uagb-wp-search-button-text': {
			'font-size': generateCSSUnit(
				buttonFontSizeTablet,
				buttonFontSizeType
			),
			'line-height': generateCSSUnit(
				buttonLineHeightTablet,
				buttonLineHeightType
			),
		},
	};
	let stylingCss = '';
	const id = `.uagb-block-${ block_id }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
