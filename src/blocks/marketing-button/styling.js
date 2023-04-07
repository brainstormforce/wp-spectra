/**
 * Returns Dynamic Generated CSS
 */
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {
	const blockName = props.name.replace( 'uagb/', '' );

	const {
		titleSpace,
		titleSpaceTablet,
		titleSpaceMobile,
		titleSpaceUnit,
		//Icon
		iconPosition,
		iconSpace,
		iconSpaceTablet,
		iconSpaceMobile,
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
		btnBorderHColor,
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
		prefixFontStyle,
		// letter spacing
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		prefixLetterSpacing,
		prefixLetterSpacingTablet,
		prefixLetterSpacingMobile,
		prefixLetterSpacingType,
	} = props.attributes;

	const gradientLocation1Fallback = getFallbackNumber( gradientLocation1, 'gradientLocation1', blockName );
	const gradientLocation2Fallback = getFallbackNumber( gradientLocation2, 'gradientLocation2', blockName );
	const gradientAngleFallback = getFallbackNumber( gradientAngle, 'gradientAngle', blockName );
	const iconSpaceFallback = getFallbackNumber( iconSpace, 'iconSpace', blockName );
	const iconFontSizeFallback = getFallbackNumber( iconFontSize, 'iconFontSize', blockName );
	const titleSpaceFallback = getFallbackNumber( titleSpace, 'titleSpace', blockName );

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};

	const setIconColor = '' === iconColor ? titleColor : iconColor;
	const setIconHoverColor = '' === iconHoverColor ? titleHoverColor : iconHoverColor;

	const btnBorderCSS = generateBorderCSS( props.attributes, 'btn' );
	const btnBorderCSSTablet = generateBorderCSS( props.attributes, 'btn', 'tablet' );
	const btnBorderCSSMobile = generateBorderCSS( props.attributes, 'btn', 'mobile' );

	selectors = {
		' .uagb-marketing-btn__prefix': {
			'margin-top': generateCSSUnit( titleSpaceFallback, titleSpaceUnit ),
		},
		' .block-editor-rich-text__editable.uagb-marketing-btn__title': {
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeight, titleLineHeightType ),
			'font-family': titleFontFamily,
			'font-weight': titleFontWeight,
			'font-style': titleFontStyle,
			'text-transform': titleTransform,
			'text-decoration': titleDecoration,
			'color': titleColor,
			'letter-spacing': generateCSSUnit( titleLetterSpacing, titleLetterSpacingType ),
		},
		' svg': {
			'fill': setIconColor,
			'width': generateCSSUnit( iconFontSizeFallback, iconFontSizeType ),
			'height': generateCSSUnit( iconFontSizeFallback, iconFontSizeType ),
		},
		' .block-editor-rich-text__editable.uagb-marketing-btn__prefix': {
			'font-size': generateCSSUnit( prefixFontSize, prefixFontSizeType ),
			'line-height': generateCSSUnit( prefixLineHeight, prefixLineHeightType ),
			'font-family': prefixFontFamily,
			'font-weight': prefixFontWeight,
			'color': prefixColor,
			'font-style': prefixFontStyle,
			'text-transform': prefixTransform,
			'text-decoration': prefixDecoration,
			'letter-spacing': generateCSSUnit( prefixLetterSpacing, prefixLetterSpacingType ),
		},
		' .uagb-marketing-btn__link:hover .block-editor-rich-text__editable.uagb-marketing-btn__title': {
			'color': titleHoverColor,
		},
		' .uagb-marketing-btn__link:focus .block-editor-rich-text__editable.uagb-marketing-btn__title': {
			'color': titleHoverColor,
		},
		' .uagb-marketing-btn__link:hover .block-editor-rich-text__editable.uagb-marketing-btn__prefix': {
			'color': prefixHoverColor,
		},
		' .uagb-marketing-btn__link:focus .block-editor-rich-text__editable.uagb-marketing-btn__prefix': {
			'color': prefixHoverColor,
		},
		' .uagb-marketing-btn__link:hover svg': {
			'fill': setIconHoverColor,
		},
		' .uagb-marketing-btn__link:focus svg': {
			'fill': setIconHoverColor,
		},
		' .uagb-marketing-btn__link:not(.has-background)': {
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottom, paddingBtnUnit ),
			...btnBorderCSS,
		},
		' .uagb-marketing-btn__link:hover': {
			'border-color': btnBorderHColor,
		},
		' .uagb-marketing-btn__link:focus': {
			'border-color': btnBorderHColor,
		},
	};

	if ( 'transparent' === backgroundType ) {
		selectors[ ':not(.is-style-outline) .uagb-marketing-btn__link:not(.has-background)' ] = {
			'background-color': 'transparent',
		};
	} else if ( 'color' === backgroundType ) {
		selectors[ ':not(.is-style-outline) .uagb-marketing-btn__link:not(.has-background)' ] = {
			'background-color': backgroundColor,
		};

		// Hover Background
		selectors[ ':not(.is-style-outline) .uagb-marketing-btn__link:not(.has-background):hover' ] = {
			'background-color': backgroundHoverColor,
		};
	} else if ( 'gradient' === backgroundType ) {
		selectors[ ':not(.is-style-outline) .uagb-marketing-btn__link:not(.has-background)' ] = {
			'background-color': 'transparent',
		};

		if ( 'linear' === gradientType ) {
			selectors[ ':not(.is-style-outline) .uagb-marketing-btn__link:not(.has-background)' ][
				'background-image'
			] = `linear-gradient(${ gradientAngleFallback }deg, ${ gradientColor1 } ${ gradientLocation1Fallback }%, ${ gradientColor2 } ${ gradientLocation2Fallback }%)`;
		} else {
			selectors[ ':not(.is-style-outline) .uagb-marketing-btn__link:not(.has-background)' ][
				'background-image'
			] = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1Fallback }%, ${ gradientColor2 } ${ gradientLocation2Fallback }%)`;
		}
	}

	const marginType = 'after' === iconPosition ? 'margin-left' : 'margin-right';

	selectors[ ' svg' ][ marginType ] = generateCSSUnit( iconSpaceFallback, 'px' );

	tabletSelectors = {
		' .uagb-marketing-btn__prefix': {
			'margin-top': generateCSSUnit( titleSpaceTablet, 'px' ),
		},
		' .block-editor-rich-text__editable.uagb-marketing-btn__title': {
			'font-size': generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingTablet, titleLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-marketing-btn__prefix': {
			'font-size': generateCSSUnit( prefixFontSizeTablet, prefixFontSizeType ),
			'line-height': generateCSSUnit( prefixLineHeightTablet, prefixLineHeightType ),
			'letter-spacing': generateCSSUnit( prefixLetterSpacingTablet, prefixLetterSpacingType ),
		},
		' svg': {
			'width': generateCSSUnit( iconFontSizeTablet, iconFontSizeType ),
			'height': generateCSSUnit( iconFontSizeTablet, iconFontSizeType ),
		},
		' .uagb-marketing-btn__link': {
			'padding-left': generateCSSUnit( paddingBtnLeftTablet, tabletPaddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRightTablet, tabletPaddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTopTablet, tabletPaddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottomTablet, tabletPaddingBtnUnit ),
			...btnBorderCSSTablet,
		},
	};

	mobileSelectors = {
		' .uagb-marketing-btn__prefix': {
			'margin-top': generateCSSUnit( titleSpaceMobile, 'px' ),
		},
		' .block-editor-rich-text__editable.uagb-marketing-btn__title': {
			'font-size': generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingMobile, titleLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-marketing-btn__prefix': {
			'font-size': generateCSSUnit( prefixFontSizeMobile, prefixFontSizeType ),
			'line-height': generateCSSUnit( prefixLineHeightMobile, prefixLineHeightType ),
			'letter-spacing': generateCSSUnit( prefixLetterSpacingMobile, prefixLetterSpacingType ),
		},
		' svg': {
			'width': generateCSSUnit( iconFontSizeMobile, iconFontSizeType ),
			'height': generateCSSUnit( iconFontSizeMobile, iconFontSizeType ),
		},
		' .uagb-marketing-btn__link': {
			'padding-left': generateCSSUnit( paddingBtnLeftMobile, mobilePaddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRightMobile, mobilePaddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTopMobile, mobilePaddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottomMobile, mobilePaddingBtnUnit ),
			...btnBorderCSSMobile,
		},
	};

	tabletSelectors[ ' svg' ][ marginType ] = generateCSSUnit( iconSpaceTablet, 'px' );

	mobileSelectors[ ' svg' ][ marginType ] = generateCSSUnit( iconSpaceMobile, 'px' );

	const id = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
