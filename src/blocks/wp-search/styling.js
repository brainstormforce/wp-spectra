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
		borderHColor,
		buttonIconSizeType,
		buttonWidthType,
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
		"color": textColor,
		'background-color': inputBgColor,
		'font-size': generateCSSUnit( inputFontSize, inputFontSizeType ),
		'line-height': generateCSSUnit( inputLineHeight, inputLineHeightType ),
		'font-family': inputFontFamily,
		'font-weight': inputFontWeight,
		'text-decoration': inputDecoration,
		'text-transform': inputTransform,
		"border": 0,
		'border-radius': '0px',
		"margin": 0,
		"outline": 'unset',
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
		"transition": 'all .5s',
	};
	const boxCSS = {
		'border-style': borderStyle,
		'border-width': generateCSSUnit( borderWidth, 'px' ),
		'border-color': borderColor,
		"outline": 'unset',
		'border-radius': generateCSSUnit( borderRadius, 'px' ),
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
	if ( 'px' === inputSizeType ) {
		boxCSS[ 'max-width' ] = generateCSSUnit( inputSize, inputSizeType );
	} else {
		boxCSS.width = generateCSSUnit( inputSize, inputSizeType );
	}

	selectors = {
		' .uagb-search-form__container .uagb-search-submit': {
			"width": generateCSSUnit( buttonWidth, buttonWidthType ),
			"padding": 0,
			"border": 0,
		},
		' .uagb-search-form__container .uagb-search-form__input::placeholder': {
			"color": textColor,
			"opacity": 0.6,
		},
		' .uagb-search-form__container .uagb-search-submit .uagb-wp-search-button-icon-wrap svg': {
			"width": $buttonIconSize,
			"height": $buttonIconSize,
			'font-size': $buttonIconSize,
			"fill": buttonIconColor,
		},
		' .uagb-search-form__container .uagb-search-submit .uagb-wp-search-button-text': {
			'font-size': generateCSSUnit( buttonFontSize, buttonFontSizeType ),
			'line-height': generateCSSUnit(
				buttonLineHeight,
				buttonLineHeightType
			),
			'font-family': buttonFontFamily,
			'font-weight': buttonFontWeight,
			'text-decoration': buttonDecoration,
			'text-transform': buttonTransform,
			"color": buttonTextColor,
		},
		' .uagb-search-form__container .uagb-search-submit:hover .uagb-wp-search-button-text': {
			"color": buttonTextHoverColor,
		},
		' .uagb-search-form__container .uagb-search-submit:hover .uagb-wp-search-button-icon-wrap svg': {
			"fill": buttonIconHoverColor,
		},
		'.uagb-layout-input .uagb-wp-search-icon-wrap svg': {
			"width": $iconSize,
			"height": $iconSize,
			'font-size': $iconSize,
			"fill": tmpIconColor,
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
