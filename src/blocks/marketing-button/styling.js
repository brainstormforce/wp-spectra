/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		titleSpace,
		//Icon
		iconPosition,
		iconSpace,
		iconFontSize,
		iconFontSizeType,
		iconFontSizeMobile,
		iconFontSizeTablet,
		//Colors
		titleColor,
		titleHoverColor,
		prefixColor,
		prefixHoverColor,
		iconColor,
		iconHoverColor,
		//Border
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		//Background
		backgroundType,
		backgroundColor,
		backgroundHoverColor,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		//Typography
		titleFontFamily,
		titleFontWeight,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		prefixFontFamily,
		prefixFontWeight,
		prefixFontSize,
		prefixFontSizeType,
		prefixFontSizeTablet,
		prefixFontSizeMobile,
		prefixLineHeightType,
		prefixLineHeight,
		prefixLineHeightTablet,
		prefixLineHeightMobile,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		paddingBtnTop,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnRight,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		titleTransform,
		titleDecoration,
		prefixTransform,
		prefixDecoration,
		titleFontStyle,
		prefixFontStyle
	} = props.attributes;

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};

	const setIconColor = '' === iconColor ? titleColor : iconColor;
	const setIconHoverColor =
		'' === iconHoverColor ? titleHoverColor : iconHoverColor;
	selectors = {
		' .uagb-marketing-btn__prefix': {
			'margin-top': generateCSSUnit( titleSpace, 'px' ),
		},
		' .block-editor-rich-text__editable.uagb-marketing-btn__title': {
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'line-height': generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
			'font-family': titleFontFamily,
			'font-weight': titleFontWeight,
			'font-style': titleFontStyle,
			'text-transform': titleTransform,
			'text-decoration': titleDecoration,
			'color': titleColor,
		},
		' svg': {
			'fill': setIconColor,
			'width': generateCSSUnit( iconFontSize, iconFontSizeType ),
			'height': generateCSSUnit( iconFontSize, iconFontSizeType ),
		},
		' .block-editor-rich-text__editable.uagb-marketing-btn__prefix': {
			'font-size': generateCSSUnit( prefixFontSize, prefixFontSizeType ),
			'line-height': generateCSSUnit(
				prefixLineHeight,
				prefixLineHeightType
			),
			'font-family': prefixFontFamily,
			'font-weight': prefixFontWeight,
			'color': prefixColor,
			'font-style': prefixFontStyle,
			'text-transform': prefixTransform,
			'text-decoration': prefixDecoration,
		},
		' .uagb-marketing-btn__link:hover .block-editor-rich-text__editable.uagb-marketing-btn__title': {
			'color': titleHoverColor,
		},
		' .uagb-marketing-btn__link:hover .block-editor-rich-text__editable.uagb-marketing-btn__prefix': {
			'color': prefixHoverColor,
		},
		' .uagb-marketing-btn__link:hover svg': {
			'fill': setIconHoverColor,
		},
		' .uagb-marketing-btn__link': {
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottom,
				paddingBtnUnit
			),
			'border-style': borderStyle,
			'border-width': generateCSSUnit( borderWidth, 'px' ),
			'border-color': borderColor,
			'border-radius': generateCSSUnit( borderRadius, 'px' ),
		},
		' .uagb-marketing-btn__link:hover': {
			'border-color': borderHoverColor,
		},
	};

	if ( 'transparent' === backgroundType ) {
		selectors[ ' .uagb-marketing-btn__link' ].background = 'transparent';
	} else if ( 'color' === backgroundType ) {
		selectors[ ' .uagb-marketing-btn__link' ].background = backgroundColor;

		// Hover Background
		selectors[ ' .uagb-marketing-btn__link:hover' ].background = backgroundHoverColor;
	} else if ( 'gradient' === backgroundType ) {
		selectors[ ' .uagb-marketing-btn__link' ][ 'background-color' ] =
			'transparent';

		if ( 'linear' === gradientType ) {
			selectors[ ' .uagb-marketing-btn__link' ][
				'background-image'
			] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${	gradientColor2 } ${ gradientLocation2 }%)`;
		} else {
			selectors[ ' .uagb-marketing-btn__link' ][
				'background-image'
			] = `radial-gradient( at center center, ${ gradientColor1} ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
		}
	}

	const marginType = 'after' === iconPosition ? 'margin-left' : 'margin-right';

	selectors[ ' svg' ][
		marginType
	] = generateCSSUnit( iconSpace, 'px' );

	tabletSelectors = {
		' .block-editor-rich-text__editable.uagb-marketing-btn__title': {
			'font-size': generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightTablet,
				titleLineHeightType
			),
		},
		' .block-editor-rich-text__editable.uagb-marketing-btn__prefix': {
			'font-size': generateCSSUnit(
				prefixFontSizeTablet,
				prefixFontSizeType
			),
			'line-height': generateCSSUnit(
				prefixLineHeightTablet,
				prefixLineHeightType
			),
		},
		' svg': {
			'width': generateCSSUnit( iconFontSizeTablet, iconFontSizeType ),
			'height': generateCSSUnit( iconFontSizeTablet, iconFontSizeType ),
		},
		' .uagb-marketing-btn__link': {
			'padding-left': generateCSSUnit(
				paddingBtnLeftTablet,
				tabletPaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightTablet,
				tabletPaddingBtnUnit
			),
			'padding-top': generateCSSUnit(
				paddingBtnTopTablet,
				tabletPaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomTablet,
				tabletPaddingBtnUnit
			),
		},
	};

	mobileSelectors = {
		' .block-editor-rich-text__editable.uagb-marketing-btn__title': {
			'font-size': generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightMobile,
				titleLineHeightType
			),
		},
		' .block-editor-rich-text__editable.uagb-marketing-btn__prefix': {
			'font-size': generateCSSUnit(
				prefixFontSizeMobile,
				prefixFontSizeType
			),
			'line-height': generateCSSUnit(
				prefixLineHeightMobile,
				prefixLineHeightType
			),
		},
		' svg': {
			'width': generateCSSUnit( iconFontSizeMobile, iconFontSizeType ),
			'height': generateCSSUnit( iconFontSizeMobile, iconFontSizeType ),
		},
		' .uagb-marketing-btn__link': {
			'padding-left': generateCSSUnit(
				paddingBtnLeftMobile,
				mobilePaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightMobile,
				mobilePaddingBtnUnit
			),
			'padding-top': generateCSSUnit(
				paddingBtnTopMobile,
				mobilePaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomMobile,
				mobilePaddingBtnUnit
			),
		},
	};

	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, id );

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
