/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateShadowCSS from '@Controls/generateShadowCSS';

function styling( attributes, clientId, name, deviceType, gbsSelector = false ) {
	const blockName = name.replace( 'uagb/', '' );
	const previewType = deviceType.toLowerCase();

	const {
		block_id,
		fontFamily,
		fontWeight,
		size,
		topPadding,
		rightPadding,
		bottomPadding,
		leftPadding,
		//Mobile
		topMobilePadding,
		rightMobilePadding,
		bottomMobilePadding,
		leftMobilePadding,
		//Tablet
		topTabletPadding,
		rightTabletPadding,
		bottomTabletPadding,
		leftTabletPadding,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		btnBorderHColor,
		color,
		background,
		hColor,
		hBackground,
		sizeType,
		sizeTypeTablet,
		sizeTypeMobile,
		sizeMobile,
		sizeTablet,
		lineHeight,
		lineHeightType,
		lineHeightMobile,
		lineHeightTablet,
		iconSpace,
		iconSpaceMobile,
		iconSpaceTablet,

		fontStyle,
		transform,
		decoration,
		backgroundType,
		hoverbackgroundType,
		gradientValue,
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
		selectGradient,
		hovergradientValue,
		hovergradientColor1,
		hovergradientColor2,
		hovergradientLocation1,
		hovergradientLocationTablet1,
		hovergradientLocationMobile1,
		hovergradientLocation2,
		hovergradientLocationTablet2,
		hovergradientLocationMobile2,
		hovergradientType,
		hovergradientAngle,
		hovergradientAngleTablet,
		hovergradientAngleMobile,
		hoverselectGradient,
		topMargin,
		rightMargin,
		bottomMargin,
		leftMargin,
		topMarginTablet,
		rightMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		topMarginMobile,
		rightMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		marginType,
		// Box - Box Shadow.
		useSeparateBoxShadows,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,
		iconColor,
		iconHColor,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		removeText,

		// letter spacing
		letterSpacing,
		letterSpacingTablet,
		letterSpacingMobile,
		letterSpacingType,
		inheritFromTheme,
		buttonType,
	} = attributes;

	const buttonClass = 'primary' === buttonType ? '.wp-block-button__link' : '.ast-outline-button';

	const tabletSelectors = {};
	const mobileSelectors = {};
	let selectors = {};
	// Box Shadow
	const boxShadowCSS = generateShadowCSS( {
		'horizontal': boxShadowHOffset,
		'vertical': boxShadowVOffset,
		'blur': boxShadowBlur,
		'spread': boxShadowSpread,
		'color': boxShadowColor,
		'position': boxShadowPosition,
	} );
	const boxShadowHoverCSS = generateShadowCSS( {
		'horizontal': boxShadowHOffsetHover,
		'vertical': boxShadowVOffsetHover,
		'blur': boxShadowBlurHover,
		'spread': boxShadowSpreadHover,
		'color': boxShadowColorHover,
		'position': boxShadowPositionHover,
		'altColor': boxShadowColor,
	} );

	if ( ! inheritFromTheme ) {

		const borderCSS = generateBorderCSS( attributes, 'btn' );
		const borderCSSTablet = generateBorderCSS( attributes, 'btn', 'tablet' );
		const borderCSSMobile = generateBorderCSS( attributes, 'btn', 'mobile' );

		selectors = {
			'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover .uagb-button__link': {
				'color': hColor,
			},
			'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover': {
				'color': hColor,
			},
			'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater .uagb-button__link': {
				'color': color,
			},
		};
		selectors[`.uagb-buttons__outer-wrap .uagb-button__wrapper ${buttonClass}.uagb-buttons-repeater`] = {
			'font-size': generateCSSUnit( size, sizeType ),
				'line-height': generateCSSUnit( lineHeight, lineHeightType ),
				'font-family': fontFamily,
				'font-weight': fontWeight,
				'font-style': fontStyle,
				'text-transform': transform,
				'text-decoration': decoration,
				'padding-left': generateCSSUnit( leftPadding, paddingUnit ),
				'padding-right': generateCSSUnit( rightPadding, paddingUnit ),
				'padding-top': generateCSSUnit( topPadding, paddingUnit ),
				'padding-bottom': generateCSSUnit( bottomPadding, paddingUnit ),
				'margin-left': generateCSSUnit( leftMargin, marginType ),
				'margin-right': generateCSSUnit( rightMargin, marginType ),
				'margin-top': generateCSSUnit( topMargin, marginType ),
				'margin-bottom': generateCSSUnit( bottomMargin, marginType ),
				'color': color,
				'box-shadow': boxShadowCSS,
				'letter-spacing': generateCSSUnit( letterSpacing, letterSpacingType ),
		};
		selectors[ ' .wp-block-button__link.uagb-buttons-repeater' ] = borderCSS;
		selectors[ '.uagb-buttons__outer-wrap .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater:hover' ] = {
			'border-color': btnBorderHColor,
		};
		if ( useSeparateBoxShadows ) {
			selectors['.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover'] = {
				'box-shadow' : boxShadowHoverCSS,
			}
		}
		//Twenty Twenty theme
		selectors[
			'.uagb-buttons__outer-wrap.wp-block-button.is-style-outline .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater'
		] = borderCSS;
		tabletSelectors[
			'.uagb-buttons__outer-wrap.wp-block-button.is-style-outline .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater'
		] = borderCSSTablet;
		mobileSelectors[
			'.uagb-buttons__outer-wrap.wp-block-button.is-style-outline .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater'
		] = borderCSSMobile;
		selectors[
			'.uagb-buttons__outer-wrap.wp-block-button.is-style-outline .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater:hover'
		] = {
			'border-color': btnBorderHColor,
		};
		mobileSelectors[
			`.uagb-buttons__outer-wrap .uagb-button__wrapper ${buttonClass}.uagb-buttons-repeater`
		] = {
			'font-size': generateCSSUnit( sizeMobile, sizeTypeMobile ),
			'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
			'letter-spacing': generateCSSUnit( letterSpacingMobile, letterSpacingType ),
			'padding-left': generateCSSUnit( leftMobilePadding, mobilePaddingUnit ),
			'padding-right': generateCSSUnit( rightMobilePadding, mobilePaddingUnit ),
			'padding-top': generateCSSUnit( topMobilePadding, mobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( bottomMobilePadding, mobilePaddingUnit ),
			'margin-left': generateCSSUnit( leftMarginMobile, marginType ),
			'margin-right': generateCSSUnit( rightMarginMobile, marginType ),
			'margin-top': generateCSSUnit( topMarginMobile, marginType ),
			'margin-bottom': generateCSSUnit( bottomMarginMobile, marginType ),
			...borderCSSMobile,
		};

		tabletSelectors[
			`.uagb-buttons__outer-wrap .uagb-button__wrapper ${buttonClass}.uagb-buttons-repeater`
		] = {
			'font-size': generateCSSUnit( sizeTablet, sizeTypeTablet ),
			'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
			'letter-spacing': generateCSSUnit( letterSpacingTablet, letterSpacingType ),
			'padding-left': generateCSSUnit( leftTabletPadding, tabletPaddingUnit ),
			'padding-right': generateCSSUnit( rightTabletPadding, tabletPaddingUnit ),
			'padding-top': generateCSSUnit( topTabletPadding, tabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( bottomTabletPadding, tabletPaddingUnit ),
			'margin-left': generateCSSUnit( leftMarginTablet, marginType ),
			'margin-right': generateCSSUnit( rightMarginTablet, marginType ),
			'margin-top': generateCSSUnit( topMarginTablet, marginType ),
			'margin-bottom': generateCSSUnit( bottomMarginTablet, marginType ),
			...borderCSSTablet,
		};

		if ( 'transparent' === backgroundType ) {
			selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ] = {
				'background': 'transparent',
			};
		} else if ( 'gradient' === backgroundType ) {
			const backgroundAttributes = {
				'backgroundType': 'gradient',
				'gradientValue': gradientValue,
				'gradientColor1': gradientColor1,
				'gradientColor2': gradientColor2,
				'gradientLocation1': gradientLocation1,
				'gradientLocation2': gradientLocation2,
				'gradientType': gradientType,
				'gradientAngle': gradientAngle,
				'selectGradient': selectGradient,
			};
			const backgroundAttributesTablet = {
				'backgroundType': 'gradient',
				'gradientValue': gradientValue,
				'gradientColor1': gradientColor1,
				'gradientColor2': gradientColor2,
				'gradientLocation1': gradientLocationTablet1 ? gradientLocationTablet1 : backgroundAttributes.gradientLocation1,
				'gradientLocation2': gradientLocationTablet2 ? gradientLocationTablet2 : backgroundAttributes.gradientLocation2,
				'gradientType': gradientType,
				'gradientAngle': gradientAngleTablet ? gradientAngleTablet : backgroundAttributes.gradientAngle,
				'selectGradient': selectGradient,
			};
			const backgroundAttributesMobile = {
				'backgroundType': 'gradient',
				'gradientValue': gradientValue,
				'gradientColor1': gradientColor1,
				'gradientColor2': gradientColor2,
				'gradientLocation1': gradientLocationMobile1 ? gradientLocationMobile1 : backgroundAttributesTablet.gradientLocation1,
				'gradientLocation2': gradientLocationMobile2 ? gradientLocationMobile2 : backgroundAttributesTablet.gradientLocation2,
				'gradientType': gradientType,
				'gradientAngle': gradientAngleMobile ? gradientAngleMobile : backgroundAttributesTablet.gradientAngle,
				'selectGradient': selectGradient,
			};
			const btnBackground = generateBackgroundCSS( backgroundAttributes );
			const btnBackgroundTablet = generateBackgroundCSS( backgroundAttributesTablet );
			const btnBackgroundMobile = generateBackgroundCSS( backgroundAttributesMobile );
			selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ] = btnBackground;
			tabletSelectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ] = btnBackgroundTablet;
		    mobileSelectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ] = btnBackgroundMobile;
		} else if ( 'color' === backgroundType ) {
			selectors[ '.uagb-buttons__outer-wrap.wp-block-button .wp-block-button__link.uagb-buttons-repeater' ] = {
				'background': background,
			};
		}


		if ( 'transparent' === hoverbackgroundType ) {
			selectors[ '.uagb-buttons__outer-wrap.wp-block-button .wp-block-button__link.uagb-buttons-repeater:hover' ] = {
				'background': 'transparent',
			};
		} else if ( 'gradient' === hoverbackgroundType ) {
			const hoverbackgroundAttributes = {
				'backgroundType': 'gradient',
				'gradientValue': hovergradientValue,
				'gradientColor1': hovergradientColor1,
				'gradientColor2': hovergradientColor2,
				'gradientLocation1': hovergradientLocation1,
				'gradientLocation2': hovergradientLocation2,
				'gradientType': hovergradientType,
				'gradientAngle': hovergradientAngle,
				'selectGradient': hoverselectGradient,
			};

			const hoverbackgroundAttributesTablet = {
				'backgroundType': 'gradient',
				'gradientValue': hovergradientValue,
				'gradientColor1': hovergradientColor1,
				'gradientColor2': hovergradientColor2,
				'gradientLocation1': hovergradientLocationTablet1 ? hovergradientLocationTablet1 : hoverbackgroundAttributes.gradientLocation1,
				'gradientLocation2': hovergradientLocationTablet2 ? hovergradientLocationTablet2 : hoverbackgroundAttributes.gradientLocation2,
				'gradientType': hovergradientType,
				'gradientAngle': hovergradientAngleTablet ? hovergradientAngleTablet : hoverbackgroundAttributes.gradientAngle,
				'selectGradient': hoverselectGradient,
			};

			const hoverbackgroundAttributesMobile = {
				'backgroundType': 'gradient',
				'gradientValue': hovergradientValue,
				'gradientColor1': hovergradientColor1,
				'gradientColor2': hovergradientColor2,
				'gradientLocation1': hovergradientLocationMobile1 ? hovergradientLocationMobile1 : hoverbackgroundAttributesTablet.gradientLocation1,
				'gradientLocation2': hovergradientLocationMobile2 ? hovergradientLocationMobile2 : hoverbackgroundAttributesTablet.gradientLocation2,
				'gradientType': hovergradientType,
				'gradientAngle': hovergradientAngleMobile ? hovergradientAngleMobile : hoverbackgroundAttributesTablet.gradientAngle,
				'selectGradient': hoverselectGradient,
			};

			const btnhBackground = generateBackgroundCSS( hoverbackgroundAttributes );
			const btnhBackgroundTablet = generateBackgroundCSS( hoverbackgroundAttributesTablet );
			const btnhBackgroundMobile = generateBackgroundCSS( hoverbackgroundAttributesMobile );
			selectors[
				'.uagb-buttons__outer-wrap.wp-block-button .wp-block-button__link.uagb-buttons-repeater:hover'
			] = btnhBackground;
			tabletSelectors[
				'.uagb-buttons__outer-wrap.wp-block-button .wp-block-button__link.uagb-buttons-repeater:hover'
			] = btnhBackgroundTablet;
			mobileSelectors[
				'.uagb-buttons__outer-wrap.wp-block-button .wp-block-button__link.uagb-buttons-repeater:hover'
			] = btnhBackgroundMobile;
		} else if ( 'color' === hoverbackgroundType ) {
			selectors[ '.uagb-buttons__outer-wrap.wp-block-button .wp-block-button__link.uagb-buttons-repeater:hover' ] = {
				'background': hBackground,
			};
		}
	} else {
		selectors[
			`.uagb-buttons__outer-wrap .uagb-button__wrapper ${buttonClass}.uagb-buttons-repeater`
		] = {
				'margin-left': generateCSSUnit( leftMargin, marginType ),
				'margin-right': generateCSSUnit( rightMargin, marginType ),
				'margin-top': generateCSSUnit( topMargin, marginType ),
				'margin-bottom': generateCSSUnit( bottomMargin, marginType ),
				'box-shadow': boxShadowCSS,
			}

		mobileSelectors[
			`.uagb-buttons__outer-wrap .uagb-button__wrapper ${buttonClass}.uagb-buttons-repeater`
		] = {
			'margin-left': generateCSSUnit( leftMarginMobile, marginType ),
			'margin-right': generateCSSUnit( rightMarginMobile, marginType ),
			'margin-top': generateCSSUnit( topMarginMobile, marginType ),
			'margin-bottom': generateCSSUnit( bottomMarginMobile, marginType ),
		};

		tabletSelectors[
			`.uagb-buttons__outer-wrap .uagb-button__wrapper ${buttonClass}.uagb-buttons-repeater`
		] = {
			'margin-left': generateCSSUnit( leftMarginTablet, marginType ),
			'margin-right': generateCSSUnit( rightMarginTablet, marginType ),
			'margin-top': generateCSSUnit( topMarginTablet, marginType ),
			'margin-bottom': generateCSSUnit( bottomMarginTablet, marginType ),
		};
	}
	selectors[ `.uagb-buttons__outer-wrap ${buttonClass}.uagb-buttons-repeater .uagb-button__icon svg` ] = {
		'width': generateCSSUnit( getFallbackNumber( iconSize, 'iconSize', blockName ), 'px' ),
		'height': generateCSSUnit( getFallbackNumber( iconSize, 'iconSize', blockName ), 'px' ),
		'fill': iconColor,
	};
	tabletSelectors[
		`.uagb-buttons__outer-wrap ${buttonClass}.uagb-buttons-repeater .uagb-button__icon svg`
	] = {
		'width': generateCSSUnit( iconSizeTablet, 'px' ),
		'height': generateCSSUnit( iconSizeTablet, 'px' ),
		'fill': iconColor,
	};
	mobileSelectors[
		`.uagb-buttons__outer-wrap ${buttonClass}.uagb-buttons-repeater .uagb-button__icon svg`
	] = {
		'width': generateCSSUnit( iconSizeMobile, 'px' ),
		'height': generateCSSUnit( iconSizeMobile, 'px' ),
		'fill': iconColor,
	};
	selectors[
		`.uagb-buttons__outer-wrap ${buttonClass}.uagb-buttons-repeater:hover .uagb-button__icon > svg`
	] = {
		'fill': iconHColor || hColor,
	};
	if ( ! removeText ) {
        const iconMargin = generateCSSUnit( getFallbackNumber( iconSpace, 'iconSpace', blockName ), 'px' );
        const tabletIconMargin = generateCSSUnit( iconSpaceTablet, 'px' );
        const mobileIconMargin = generateCSSUnit( iconSpaceMobile, 'px' );
        let rightSideMargin = 'margin-right';
        let leftSideMargin = 'margin-left';

		if( '1' !== uagb_blocks_info.is_rtl ) {
			rightSideMargin = 'margin-left';
			leftSideMargin = 'margin-right';
		}

        selectors[ ' .uagb-button__icon-position-after' ] = {
            [ rightSideMargin ]: iconMargin,
        };
        selectors[ ' .uagb-button__icon-position-before' ] = {
            [ leftSideMargin ]: iconMargin,
        };
        tabletSelectors[ ' .uagb-button__icon-position-before' ] = {
            [ leftSideMargin ]: tabletIconMargin,
        };
        tabletSelectors[ ' .uagb-button__icon-position-after' ] = {
            [ rightSideMargin ]: tabletIconMargin,
        };
        mobileSelectors[ ' .uagb-button__icon-position-before' ] = {
            [ leftSideMargin ]: mobileIconMargin,
        };
        mobileSelectors[ ' .uagb-button__icon-position-after' ] = {
            [ rightSideMargin ]: mobileIconMargin,
        };
    }

	const base_selector = gbsSelector ? gbsSelector + ' ' : `.editor-styles-wrapper .uagb-block-${ block_id }`;
	let stylingCss = generateCSS( selectors, base_selector );

	if( 'tablet' === previewType || 'mobile' === previewType || gbsSelector ) {
		stylingCss += generateCSS(
			tabletSelectors,
			`${ base_selector }`,
			true,
			'tablet'
		);

		if( 'mobile' === previewType || gbsSelector ){
			stylingCss += generateCSS(
				mobileSelectors,
				`${ base_selector }`,
				true,
				'mobile'
			);
		}
	}
	return stylingCss;
}

export default styling;