/**
 * Returns Dynamic Generated CSS
 */
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( attributes, clientId, name, deviceType ) {
    const blockName = name.replace( 'uagb/', '' );
    const previewType = deviceType.toLowerCase();
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
        gradientLocationTablet1,
        gradientLocationMobile1,
        gradientLocation2,
        gradientLocationTablet2,
        gradientLocationMobile2,
        gradientType,
        gradientAngle,
        gradientAngleTablet,
        gradientAngleMobile,
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
        block_id,
        inheritFromTheme,
    } = attributes;

    const gradientLocation1Fallback = getFallbackNumber( gradientLocation1, 'gradientLocation1', blockName );
    const gradientLocation2Fallback = getFallbackNumber( gradientLocation2, 'gradientLocation2', blockName );
    const gradientAngleFallback = getFallbackNumber( gradientAngle, 'gradientAngle', blockName );
    const iconSpaceFallback = getFallbackNumber( iconSpace, 'iconSpace', blockName );
    const iconFontSizeFallback = getFallbackNumber( iconFontSize, 'iconFontSize', blockName );
    const titleSpaceFallback = getFallbackNumber( titleSpace, 'titleSpace', blockName );

    const gradientLocationTablet1Fallback = 'number' === typeof gradientLocationTablet1 ? gradientLocationTablet1 : gradientLocation1Fallback;
    const gradientLocationTablet2Fallback = 'number' === typeof gradientLocationTablet2 ? gradientLocationTablet2 : gradientLocation2Fallback;

    const gradientLocationMobile1Fallback = 'number' === typeof gradientLocationMobile1 ? gradientLocationMobile1 : gradientLocationTablet1Fallback;
    const gradientLocationMobile2Fallback = 'number' === typeof gradientLocationMobile2 ? gradientLocationMobile2 : gradientLocationTablet2Fallback;

    const gradientAngleTabletFallback = 'number' === typeof gradientAngleTablet ? gradientAngleTablet : gradientAngleFallback;
    const gradientAngleMobileFallback = 'number' === typeof gradientAngleMobile ? gradientAngleMobile : gradientAngleTabletFallback;

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};

	const setIconColor = '' === iconColor ? titleColor : iconColor;
	const setIconHoverColor = '' === iconHoverColor ? titleHoverColor : iconHoverColor;

	const btnBorderCSS = generateBorderCSS( attributes, 'btn' );
	const btnBorderCSSTablet = generateBorderCSS( attributes, 'btn', 'tablet' );
	const btnBorderCSSMobile = generateBorderCSS( attributes, 'btn', 'mobile' );

	selectors = {
		' .uagb-marketing-btn__prefix': {
			'margin-top': generateCSSUnit( titleSpaceFallback, titleSpaceUnit ),
		},
		' svg': {
			'fill': setIconColor,
			'width': generateCSSUnit( iconFontSizeFallback, iconFontSizeType ),
			'height': generateCSSUnit( iconFontSizeFallback, iconFontSizeType ),
		},
		' .uagb-marketing-btn__link:hover svg': {
			'fill': setIconHoverColor,
		},
		' .uagb-marketing-btn__link:focus svg': {
			'fill': setIconHoverColor,
		},
	};

	let marginType;
	if ( uagb_blocks_info.is_rtl !== '1' ) {
		marginType = 'after' === iconPosition ? 'margin-left' : 'margin-right';
	} else {
		marginType = 'after' === iconPosition ? 'margin-right' : 'margin-left';
	}

	selectors[ ' svg' ][ marginType ] = generateCSSUnit( iconSpaceFallback, 'px' );

	tabletSelectors = {
		' .uagb-marketing-btn__prefix': {
			'margin-top': generateCSSUnit( titleSpaceTablet, 'px' ),
		},
		' svg': {
			'width': generateCSSUnit( iconFontSizeTablet, iconFontSizeType ),
			'height': generateCSSUnit( iconFontSizeTablet, iconFontSizeType ),
		},
	};

	mobileSelectors = {
		' .uagb-marketing-btn__prefix': {
			'margin-top': generateCSSUnit( titleSpaceMobile, 'px' ),
		},
		' svg': {
			'width': generateCSSUnit( iconFontSizeMobile, iconFontSizeType ),
			'height': generateCSSUnit( iconFontSizeMobile, iconFontSizeType ),
		},
	};


	tabletSelectors[ ' svg' ][ marginType ] = generateCSSUnit( iconSpaceTablet, 'px' );

	mobileSelectors[ ' svg' ][ marginType ] = generateCSSUnit( iconSpaceMobile, 'px' );

	let linearGradient = '';
		if ( deviceType === 'Desktop' ) {
			linearGradient = `linear-gradient(${ gradientAngleFallback }deg, ${ gradientColor1 } ${ gradientLocation1Fallback }%, ${ gradientColor2 } ${ gradientLocation2Fallback }%)`;
		} else if ( deviceType === 'Tablet' ) {
			linearGradient = `linear-gradient(${ gradientAngleTabletFallback }deg, ${ gradientColor1 } ${ gradientLocationTablet1Fallback }%, ${ gradientColor2 } ${ gradientLocationTablet2Fallback }%)`;
		} else if ( deviceType === 'Mobile' ) {
			linearGradient = `linear-gradient(${ gradientAngleMobileFallback }deg, ${ gradientColor1 } ${ gradientLocationMobile1Fallback }%, ${ gradientColor2 } ${ gradientLocationMobile2Fallback }%)`;
		}
   let radialGradient = ''
		if ( deviceType === 'Desktop' ) {
			radialGradient = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1Fallback }%, ${ gradientColor2 } ${ gradientLocation2Fallback }%)`;
		} else if ( deviceType === 'Tablet' ) {
			radialGradient = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocationTablet1Fallback }%, ${ gradientColor2 } ${ gradientLocationTablet2Fallback }%)`;
		} else if ( deviceType === 'Mobile' ) {
			radialGradient = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocationMobile1Fallback }%, ${ gradientColor2 } ${ gradientLocationMobile2Fallback }%)`;
		}

	if( !inheritFromTheme ) {
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
				] = linearGradient;
			} else {
				selectors[ ':not(.is-style-outline) .uagb-marketing-btn__link:not(.has-background)' ][
					'background-image'
				] = radialGradient;
			}
		}
		selectors = {
			...selectors,
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

		tabletSelectors = {
			...tabletSelectors,
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
			' .uagb-marketing-btn__link:not(.has-background)': {
				'padding-left': generateCSSUnit( paddingBtnLeftTablet, tabletPaddingBtnUnit ),
				'padding-right': generateCSSUnit( paddingBtnRightTablet, tabletPaddingBtnUnit ),
				'padding-top': generateCSSUnit( paddingBtnTopTablet, tabletPaddingBtnUnit ),
				'padding-bottom': generateCSSUnit( paddingBtnBottomTablet, tabletPaddingBtnUnit ),
				...btnBorderCSSTablet,
			},
		};

		mobileSelectors = {
			...mobileSelectors,
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
			' .uagb-marketing-btn__link:not(.has-background)': {
				'padding-left': generateCSSUnit( paddingBtnLeftMobile, mobilePaddingBtnUnit ),
				'padding-right': generateCSSUnit( paddingBtnRightMobile, mobilePaddingBtnUnit ),
				'padding-top': generateCSSUnit( paddingBtnTopMobile, mobilePaddingBtnUnit ),
				'padding-bottom': generateCSSUnit( paddingBtnBottomMobile, mobilePaddingBtnUnit ),
				...btnBorderCSSMobile,
			},
		};

	}

	const id = `.editor-styles-wrapper .uagb-block-${ block_id }`;

	let stylingCss = generateCSS( selectors, id );

	if( 'tablet' === previewType || 'mobile' === previewType ) {
		stylingCss += generateCSS(
			tabletSelectors,
			`${ id }`,
			true,
			'tablet'
		);

		if( 'mobile' === previewType ){
			stylingCss += generateCSS(
				mobileSelectors,
				`${ id }`,
				true,
				'mobile'
			);
		}
	}
	return stylingCss;
}

export default styling;