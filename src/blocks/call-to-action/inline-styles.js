/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';

function CtaStyle( props ) {
	const blockName = props.name.replace( 'uagb/', '' );

	const {
		stack,
		textAlign,
		titleColor,
		descColor,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		descFontSize,
		descFontSizeType,
		descFontSizeMobile,
		descFontSizeTablet,
		descFontFamily,
		descFontWeight,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		titleSpace,
		titleSpaceTablet,
		titleSpaceMobile,
		titleSpaceType,
		descSpace,
		descSpaceTablet,
		descSpaceMobile,
		descSpaceType,
		ctaPosition,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeMobile,
		ctaFontSizeTablet,
		ctaFontFamily,
		ctaFontWeight,
		ctaBtnLinkColor,
		ctaBgType,
		ctaBgColor,
		ctaTopPadding,
		ctaRightPadding,
		ctaBottomPadding,
		ctaLeftPadding,
		ctaTopPaddingTablet,
		ctaRightPaddingTablet,
		ctaBottomPaddingTablet,
		ctaLeftPaddingTablet,
		ctaTopPaddingMobile,
		ctaRightPaddingMobile,
		ctaBottomPaddingMobile,
		ctaLeftPaddingMobile,
		ctaPaddingUnit,
		mobileCTAPaddingUnit,
		tabletCTAPaddingUnit,
		ctaLinkHoverColor,
		ctaBgHoverType,
		ctaBgHoverColor,
		btnBorderHColor,
		ctaIconSpace,
		ctaIconSpaceTablet,
		ctaIconSpaceMobile,
		contentWidth,
		contentWidthTablet,
		contentWidthMobile,
		contentWidthType,
		ctaType,
		titleTransform,
		titleDecoration,
		descTransform,
		descDecoration,
		ctaTransform,
		ctaDecoration,
		titleFontStyle,
		descFontStyle,
		ctaFontStyle,
		buttonAlign,
		ctaIconPosition,
		secondCtaBgType,
		secondCtaBgHoverType,
		secondCtaIconSpace,
		secondCtaIconPosition,
		secondCtaFontSize,
		secondCtaFontSizeType,
		secondCtaFontSizeMobile,
		secondCtaFontSizeTablet,
		secondCtaFontFamily,
		secondCtaFontWeight,
		secondCtaFontStyle,
		secondCtaFontTransform,
		secondCtaFontDecoration,
		secondCtaTopPadding,
		secondCtaRightPadding,
		secondCtaBottomPadding,
		secondCtaLeftPadding,
		secondCtaTopMobilePadding,
		secondCtaRightMobilePadding,
		secondCtaBottomMobilePadding,
		secondCtaLeftMobilePadding,
		secondCtaTopTabletPadding,
		secondCtaRightTabletPadding,
		secondCtaBottomTabletPadding,
		secondCtaLeftTabletPadding,
		secondCtaPaddingUnit,
		secondCtaMobilePaddingUnit,
		secondCtaTabletPaddingUnit,
		secondCtaBorderHColor,
		secondCtaColor,
		secondCtaBackground,
		secondCtaHoverColor,
		secondCtaHoverBackground,
		stackBtn,
		gapBtn,
		gapBtnTablet,
		gapBtnMobile,
		textAlignTablet,
		textAlignMobile,
		overallBlockTopMargin,
		overallBlockRightMargin,
		overallBlockBottomMargin,
		overallBlockLeftMargin,
		overallBlockTopMobileMargin,
		overallBlockRightMobileMargin,
		overallBlockBottomMobileMargin,
		overallBlockLeftMobileMargin,
		overallBlockTopTabletMargin,
		overallBlockRightTabletMargin,
		overallBlockBottomTabletMargin,
		overallBlockLeftTabletMargin,
		overallBlockMarginUnit,
		overallBlockMobileMarginUnit,
		overallBlockTabletMarginUnit,
		overallBlockTopPadding,
		overallBlockRightPadding,
		overallBlockBottomPadding,
		overallBlockLeftPadding,
		overallBlockTopMobilePadding,
		overallBlockRightMobilePadding,
		overallBlockBottomMobilePadding,
		overallBlockLeftMobilePadding,
		overallBlockTopTabletPadding,
		overallBlockRightTabletPadding,
		overallBlockBottomTabletPadding,
		overallBlockLeftTabletPadding,
		overallBlockPaddingUnit,
		overallBlockMobilePaddingUnit,
		overallBlockTabletPaddingUnit,
		buttonRightSpace,
		buttonRightSpaceTablet,
		buttonRightSpaceMobile,
		buttonRightSpaceType,
		secondCtaIconSpaceTablet,
		secondCtaIconSpaceMobile,
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		descLetterSpacing,
		descLetterSpacingTablet,
		descLetterSpacingMobile,
		descLetterSpacingType,
		ctaLetterSpacing,
		ctaLetterSpacingTablet,
		ctaLetterSpacingMobile,
		ctaLetterSpacingType,
		secondCtaLetterSpacing,
		secondCtaLetterSpacingTablet,
		secondCtaLetterSpacingMobile,
		secondCtaLetterSpacingType,
		btncontentWidth,
		btncontentWidthTablet,
		btncontentWidthMobile,
		btncontentWidthType,
		enabledSecondCtaButton,
	} = props.attributes;

	const ctaBorderCSS = generateBorderCSS( props.attributes, 'btn' );
	const ctaBorderCSSTablet = generateBorderCSS( props.attributes, 'btn', 'tablet' );
	const ctaBorderCSSMobile = generateBorderCSS( props.attributes, 'btn', 'mobile' );
	const titleSpaceFallback = getFallbackNumber( titleSpace, 'titleSpace', blockName );
	const descSpaceFallback = getFallbackNumber( descSpace, 'descSpace', blockName );
	const secondCtaIconSpaceFallback = getFallbackNumber( secondCtaIconSpace, 'secondCtaIconSpace', blockName );
	const ctaIconSpaceFallback = getFallbackNumber( ctaIconSpace, 'ctaIconSpace', blockName );
	const contentWidthFallback = getFallbackNumber( contentWidth, 'contentWidth', blockName );
	const btncontentWidthFallback = getFallbackNumber( btncontentWidth, 'btncontentWidth', blockName );
	const gapBtnFallback = getFallbackNumber( gapBtn, 'gapBtn', blockName );
	const buttonRightSpaceFallback = getFallbackNumber( buttonRightSpace, 'buttonRightSpace', blockName );

	const secondCtaBorderCSS = generateBorderCSS( props.attributes, 'secondCta' );
	const secondCtaBorderCSSTablet = generateBorderCSS( props.attributes, 'secondCta', 'tablet' );
	const secondCtaBorderCSSMobile = generateBorderCSS( props.attributes, 'secondCta', 'mobile' );

	const selectors = {
		' .uagb-cta__content-wrap': {
			'text-align': textAlign,
		},
		' .uagb-cta__wrap': {
			'text-align': textAlign,
		},
		'.uagb-cta__outer-wrap': {
			'text-align': textAlign,
			'padding-top': generateCSSUnit( overallBlockTopPadding, overallBlockPaddingUnit ),
			'padding-bottom': generateCSSUnit( overallBlockBottomPadding, overallBlockPaddingUnit ),
			'padding-left': generateCSSUnit( overallBlockLeftPadding, overallBlockPaddingUnit ),
			'padding-right': generateCSSUnit( overallBlockRightPadding, overallBlockPaddingUnit ),
			'margin-top': generateCSSUnit( overallBlockTopMargin, overallBlockMarginUnit ),
			'margin-bottom': generateCSSUnit( overallBlockBottomMargin, overallBlockMarginUnit ),
			'margin-left': generateCSSUnit( overallBlockLeftMargin, overallBlockMarginUnit ),
			'margin-right': generateCSSUnit( overallBlockRightMargin, overallBlockMarginUnit ),
		},
		// Title Style
		' .block-editor-rich-text__editable.uagb-cta__title': {
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'font-family': titleFontFamily,
			'font-style': titleFontStyle,
			'text-decoration': titleDecoration,
			'text-transform': titleTransform,
			'font-weight': titleFontWeight,
			'line-height': generateCSSUnit( titleLineHeight, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacing, titleLetterSpacingType ),
			'color': titleColor,
			'margin-bottom': generateCSSUnit( titleSpaceFallback, titleSpaceType ),
		},

		// Description Style
		' .block-editor-rich-text__editable.uagb-cta__desc': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'font-family': descFontFamily,
			'font-style': descFontStyle,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'font-weight': descFontWeight,
			'line-height': generateCSSUnit( descLineHeight, descLineHeightType ),
			'letter-spacing': generateCSSUnit( descLetterSpacing, descLetterSpacingType ),
			'color': descColor,
			'margin-bottom': generateCSSUnit( descSpaceFallback, descSpaceType ),
		},
	};

	if ( ctaPosition === 'right' ) {
		selectors[ '.uagb-cta__outer-wrap ' ] = {
			'display': 'inline-flex',
		};
	}

	// CTA style.
	selectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper' ] = {
		'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'font-family': ctaFontFamily,
		'font-style': ctaFontStyle,
		'text-decoration': ctaDecoration,
		'text-transform': ctaTransform,
		'font-weight': ctaFontWeight,
		'color': ctaBtnLinkColor,
		'background-color': ctaBgType === 'color' ? ctaBgColor : 'transparent',
		'padding-top': generateCSSUnit( ctaTopPadding, ctaPaddingUnit ),
		'padding-bottom': generateCSSUnit( ctaBottomPadding, ctaPaddingUnit ),
		'padding-left': generateCSSUnit( ctaLeftPadding, ctaPaddingUnit ),
		'padding-right': generateCSSUnit( ctaRightPadding, ctaPaddingUnit ),
		...ctaBorderCSS,
		'letter-spacing': generateCSSUnit( ctaLetterSpacing, ctaLetterSpacingType ),
	};

	// Core Theme CSS
	selectors[
		'.uagb-cta__outer-wrap.wp-block-button:not(.is-style-outline) a.uagb-cta__button-link-wrapper.wp-block-button__link:not(.has-background)'
	] = {
		'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'font-family': ctaFontFamily,
		'font-style': ctaFontStyle,
		'text-decoration': ctaDecoration,
		'text-transform': ctaTransform,
		'font-weight': ctaFontWeight,
		'color': ctaBtnLinkColor,
		'background-color': ctaBgColor,
		'padding-top': generateCSSUnit( ctaTopPadding, ctaPaddingUnit ),
		'padding-bottom': generateCSSUnit( ctaBottomPadding, ctaPaddingUnit ),
		'padding-left': generateCSSUnit( ctaLeftPadding, ctaPaddingUnit ),
		'padding-right': generateCSSUnit( ctaRightPadding, ctaPaddingUnit ),
		...ctaBorderCSS,
	};
	selectors[
		'.uagb-cta__outer-wrap.wp-block-button:not(.is-style-outline) a.uagb-cta__button-link-wrapper.wp-block-button__link:not(.has-background):hover'
	] = {
		'color': ctaLinkHoverColor,
		'background-color': ctaBgHoverType === 'color' ? ctaBgHoverColor : 'transparent',
		'border-color': btnBorderHColor,
	};
	selectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button' ] = {
		'font-size': generateCSSUnit( secondCtaFontSize, secondCtaFontSizeType ),
		'font-family': secondCtaFontFamily,
		'font-style': secondCtaFontStyle,
		'text-decoration': secondCtaFontDecoration,
		'text-transform': secondCtaFontTransform,
		'font-weight': secondCtaFontWeight,
		'color': secondCtaColor,
		'background-color': secondCtaBgType === 'color' ? secondCtaBackground : 'transparent',
		'padding-top': generateCSSUnit( secondCtaTopPadding, secondCtaPaddingUnit ),
		'padding-bottom': generateCSSUnit( secondCtaBottomPadding, secondCtaPaddingUnit ),
		'padding-left': generateCSSUnit( secondCtaLeftPadding, secondCtaPaddingUnit ),
		'padding-right': generateCSSUnit( secondCtaRightPadding, secondCtaPaddingUnit ),
		'align-self': 'top' === buttonAlign ? 'flex-start' : 'center',
		'height': 'fit-content',
		...secondCtaBorderCSS,
		'letter-spacing': generateCSSUnit( secondCtaLetterSpacing, secondCtaLetterSpacingType ),
	};
	selectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button:hover' ] = {
		'color': secondCtaHoverColor,
		'background-color': secondCtaBgHoverType === 'color' ? secondCtaHoverBackground : 'transparent',
		'border-color': secondCtaBorderHColor,
	};

	selectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper:hover' ] = {
		'color': ctaLinkHoverColor,
		'background-color': ctaBgHoverType === 'color' ? ctaBgHoverColor : 'transparent',
		'border-color': btnBorderHColor,
	};

	selectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper svg' ] = {
		'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'width': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'line-height': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'fill': ctaBtnLinkColor,
		'letter-spacing': generateCSSUnit( ctaLetterSpacing, ctaLetterSpacingType ),
	};

	selectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button svg' ] = {
		'font-size': generateCSSUnit( secondCtaFontSize, secondCtaFontSizeType ),
		'width': generateCSSUnit( secondCtaFontSize, secondCtaFontSizeType ),
		'line-height': generateCSSUnit( secondCtaFontSize, secondCtaFontSizeType ),
		'fill': secondCtaColor,
	};

	selectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper:hover svg' ] = {
		'fill': ctaLinkHoverColor,
	};

	selectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button:hover svg' ] = {
		'fill': secondCtaHoverColor,
	};

	const tabletSelectors = {
		' .uagb-cta__wrap': {
			'text-align': textAlignTablet,
		},
		'.uagb-editor-preview-mode-tablet.uagb-cta__outer-wrap ': {
			'text-align': textAlignTablet,
			'padding-top': generateCSSUnit( overallBlockTopTabletPadding, overallBlockTabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( overallBlockBottomTabletPadding, overallBlockTabletPaddingUnit ),
			'padding-left': generateCSSUnit( overallBlockLeftTabletPadding, overallBlockTabletPaddingUnit ),
			'padding-right': generateCSSUnit( overallBlockRightTabletPadding, overallBlockTabletPaddingUnit ),
			'margin-top': generateCSSUnit( overallBlockTopTabletMargin, overallBlockTabletMarginUnit ),
			'margin-bottom': generateCSSUnit( overallBlockBottomTabletMargin, overallBlockTabletMarginUnit ),
			'margin-left': generateCSSUnit( overallBlockLeftTabletMargin, overallBlockTabletMarginUnit ),
			'margin-right': generateCSSUnit( overallBlockRightTabletMargin, overallBlockTabletMarginUnit ),
		},
		' .block-editor-rich-text__editable.uagb-cta__title': {
			'font-size': generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingTablet, titleLetterSpacingType ),
			'margin-bottom': generateCSSUnit( titleSpaceTablet, titleSpaceType ),
		},
		' .block-editor-rich-text__editable.uagb-cta__desc': {
			'font-size': generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeightTablet, descLineHeightType ),
			'letter-spacing': generateCSSUnit( descLetterSpacingTablet, descLetterSpacingType ),
			'margin-bottom': generateCSSUnit( descSpaceTablet, descSpaceType ),
		},
		'.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'padding-top': generateCSSUnit( ctaTopPaddingTablet, tabletCTAPaddingUnit ),
			'padding-bottom': generateCSSUnit( ctaBottomPaddingTablet, tabletCTAPaddingUnit ),
			'padding-left': generateCSSUnit( ctaLeftPaddingTablet, tabletCTAPaddingUnit ),
			'padding-right': generateCSSUnit( ctaRightPaddingTablet, tabletCTAPaddingUnit ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingTablet, ctaLetterSpacingType ),
			...ctaBorderCSSTablet,
		},
		'.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper svg': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'width': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'line-height': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingTablet, ctaLetterSpacingType ),
		},
		'.uagb-cta__outer-wrap a.uagb-cta-second__button': {
			'font-size': generateCSSUnit( secondCtaFontSizeTablet, secondCtaFontSizeType ),
			'padding-top': generateCSSUnit( secondCtaTopTabletPadding, secondCtaTabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( secondCtaBottomTabletPadding, secondCtaTabletPaddingUnit ),
			'padding-left': generateCSSUnit( secondCtaLeftTabletPadding, secondCtaTabletPaddingUnit ),
			'padding-right': generateCSSUnit( secondCtaRightTabletPadding, secondCtaTabletPaddingUnit ),
			...secondCtaBorderCSSTablet,
			'letter-spacing': generateCSSUnit( secondCtaLetterSpacingTablet, secondCtaLetterSpacingType ),
		},
		'.uagb-cta__outer-wrap a.uagb-cta-second__button svg': {
			'font-size': generateCSSUnit( secondCtaFontSizeTablet, secondCtaFontSizeType ),
			'height': generateCSSUnit( secondCtaFontSizeTablet, secondCtaFontSizeType ),
			'width': generateCSSUnit( secondCtaFontSizeTablet, secondCtaFontSizeType ),
			'line-height': generateCSSUnit( secondCtaFontSizeTablet, secondCtaFontSizeType ),
			'letter-spacing': generateCSSUnit( secondCtaLetterSpacingTablet, secondCtaLetterSpacingType ),
		},
	};
	tabletSelectors[
		'.uagb-cta__outer-wrap.wp-block-button:not(.is-style-outline) a.uagb-cta__button-link-wrapper.wp-block-button__link:not(.has-background)'
	] = ctaBorderCSSTablet;
	if ( ctaPosition === 'right' ) {
		tabletSelectors[ '.uagb-cta__outer-wrap.uagb-cta__content-stacked-tablet ' ] = {
			'display': 'inherit',
		};
		tabletSelectors[ '.uagb-cta__content-stacked-tablet .uagb-cta__wrap ' ] = {
			'width': '100%',
		};
	}

	const mobileSelectors = {
		' .uagb-cta__wrap': {
			'text-align': textAlignMobile,
		},
		'.uagb-editor-preview-mode-mobile.uagb-cta__outer-wrap ': {
			'text-align': textAlignMobile,
			'padding-top': generateCSSUnit( overallBlockTopMobilePadding, overallBlockMobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( overallBlockBottomMobilePadding, overallBlockMobilePaddingUnit ),
			'padding-left': generateCSSUnit( overallBlockLeftMobilePadding, overallBlockMobilePaddingUnit ),
			'padding-right': generateCSSUnit( overallBlockRightMobilePadding, overallBlockMobilePaddingUnit ),
			'margin-top': generateCSSUnit( overallBlockTopMobileMargin, overallBlockMobileMarginUnit ),
			'margin-bottom': generateCSSUnit( overallBlockBottomMobileMargin, overallBlockMobileMarginUnit ),
			'margin-left': generateCSSUnit( overallBlockLeftMobileMargin, overallBlockMobileMarginUnit ),
			'margin-right': generateCSSUnit( overallBlockRightMobileMargin, overallBlockMobileMarginUnit ),
		},
		' .block-editor-rich-text__editable.uagb-cta__title': {
			'font-size': generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingMobile, titleLetterSpacingType ),
			'margin-bottom': generateCSSUnit( titleSpaceMobile, titleSpaceType ),
		},
		' .block-editor-rich-text__editable.uagb-cta__desc': {
			'font-size': generateCSSUnit( descFontSizeMobile, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeightMobile, descLineHeightType ),
			'letter-spacing': generateCSSUnit( descLetterSpacingMobile, descLetterSpacingType ),
			'margin-bottom': generateCSSUnit( descSpaceMobile, descSpaceType ),
		},
		' .uagb-cta__button-wrapper a.uagb-cta-typeof-text': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingMobile, ctaLetterSpacingType ),
		},
		'.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'padding-top': generateCSSUnit( ctaTopPaddingMobile, mobileCTAPaddingUnit ),
			'padding-bottom': generateCSSUnit( ctaBottomPaddingMobile, mobileCTAPaddingUnit ),
			'padding-left': generateCSSUnit( ctaLeftPaddingMobile, mobileCTAPaddingUnit ),
			'padding-right': generateCSSUnit( ctaRightPaddingMobile, mobileCTAPaddingUnit ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingMobile, ctaLetterSpacingType ),
			...ctaBorderCSSMobile,
		},
		' .uagb-cta__button-wrapper .uagb-cta-with-svg': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'width': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'line-height': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingMobile, ctaLetterSpacingType ),
		},
		'.uagb-cta__outer-wrap a.uagb-cta-second__button': {
			'font-size': generateCSSUnit( secondCtaFontSizeMobile, secondCtaFontSizeType ),
			'padding-top': generateCSSUnit( secondCtaTopMobilePadding, secondCtaMobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( secondCtaBottomMobilePadding, secondCtaMobilePaddingUnit ),
			'padding-left': generateCSSUnit( secondCtaLeftMobilePadding, secondCtaMobilePaddingUnit ),
			'padding-right': generateCSSUnit( secondCtaRightMobilePadding, secondCtaMobilePaddingUnit ),
			...secondCtaBorderCSSMobile,
			'letter-spacing': generateCSSUnit( secondCtaLetterSpacingMobile, secondCtaLetterSpacingType ),
		},
		'.uagb-cta__outer-wrap a.uagb-cta-second__button svg': {
			'font-size': generateCSSUnit( secondCtaFontSizeMobile, secondCtaFontSizeType ),
			'height': generateCSSUnit( secondCtaFontSizeMobile, secondCtaFontSizeType ),
			'width': generateCSSUnit( secondCtaFontSizeMobile, secondCtaFontSizeType ),
			'line-height': generateCSSUnit( secondCtaFontSizeMobile, secondCtaFontSizeType ),
			'letter-spacing': generateCSSUnit( secondCtaLetterSpacingMobile, secondCtaLetterSpacingType ),
		},
	};
	mobileSelectors[
		'.uagb-cta__outer-wrap.wp-block-button:not(.is-style-outline) a.uagb-cta__button-link-wrapper.wp-block-button__link:not(.has-background)'
	] = ctaBorderCSSMobile;
	if ( ctaType === 'text' ) {
		selectors[ ' a.uagb-cta__button-link-wrapper' ] = {
			'color': ctaBtnLinkColor,
			'border-style': 'none !important',
			'text-decoration': 'underline',
			'padding': 'unset !important',
		};
		selectors[ ' a.uagb-cta__button-link-wrapper:hover ' ] = {
			'color': ctaLinkHoverColor,
		};
	}

	if ( secondCtaIconPosition === 'before' ) {
		selectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button > svg' ] = {
			'margin-right': generateCSSUnit( secondCtaIconSpaceFallback, 'px' ),
		};
		tabletSelectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button > svg' ] = {
			'margin-right': generateCSSUnit( secondCtaIconSpaceTablet, 'px' ),
		};
		mobileSelectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button > svg' ] = {
			'margin-right': generateCSSUnit( secondCtaIconSpaceMobile, 'px' ),
		};
	} else {
		selectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button > svg' ] = {
			'margin-left': generateCSSUnit( secondCtaIconSpaceFallback, 'px' ),
		};
		tabletSelectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button > svg' ] = {
			'margin-left': generateCSSUnit( secondCtaIconSpaceTablet, 'px' ),
		};
		mobileSelectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button > svg' ] = {
			'margin-left': generateCSSUnit( secondCtaIconSpaceMobile, 'px' ),
		};
	}

	if ( ctaIconPosition === 'before' ) {
		selectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper > svg' ] = {
			'margin-right': generateCSSUnit( ctaIconSpaceFallback, 'px' ),
		};
		tabletSelectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper > svg' ] = {
			'margin-right': generateCSSUnit( ctaIconSpaceTablet, 'px' ),
		};
		mobileSelectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper > svg' ] = {
			'margin-right': generateCSSUnit( ctaIconSpaceMobile, 'px' ),
		};
	} else {
		selectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper > svg' ] = {
			'margin-left': generateCSSUnit( ctaIconSpaceFallback, 'px' ),
		};
		tabletSelectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper > svg' ] = {
			'margin-left': generateCSSUnit( ctaIconSpaceTablet, 'px' ),
		};
		mobileSelectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper > svg' ] = {
			'margin-left': generateCSSUnit( ctaIconSpaceMobile, 'px' ),
		};
	}

	if ( ctaType === 'none' || ctaType === 'all' ) {
		// 100% width when ctaType is none or all.
		selectors[ ' .uagb-cta__wrap' ] = {
			'width': '100%',
		};
	}

	if ( ctaPosition === 'right' && ( ctaType === 'text' || ctaType === 'button' ) ) {
		selectors[ ' .uagb-cta__wrap' ] = {
			'width': generateCSSUnit( contentWidthFallback, contentWidthType ),
		};
		selectors[ '.uagb-cta__outer-wrap > a' ] = {
			'align-self': 'top' === buttonAlign ? 'flex-start' : 'center',
			'height': 'fit-content',
			'margin-left': 'auto',
		};
		tabletSelectors[ ' .uagb-cta__wrap' ] = {
			'width': generateCSSUnit( contentWidthTablet, contentWidthType ),
		};
		mobileSelectors[ ' .uagb-cta__wrap' ] = {
			'width': generateCSSUnit( contentWidthMobile, contentWidthType ),
		};
	}

	if ( ctaPosition === 'right' ) {
		mobileSelectors[ '.uagb-cta__outer-wrap.uagb-cta__content-stacked-mobile ' ] = {
			'display': 'inherit',
		};
		mobileSelectors[ '.uagb-cta__outer-wrap.uagb-cta__content-stacked-tablet ' ] = {
			'display': 'inherit',
		};
		mobileSelectors[ '.uagb-cta__content-stacked-mobile .uagb-cta__wrap ' ] = {
			'width': '100%',
		};
	}

	if ( 'below-title' === ctaPosition ) {
		mobileSelectors[ '.uagb-cta__outer-wrap ' ] = {
			'display': 'inherit',
		};
	}
	if ( 'desktop' === stackBtn ) {
		selectors[ ' .uagb-cta__buttons' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapBtnFallback, 'px' ),
		};
		tabletSelectors[ ' .uagb-cta__buttons' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapBtnTablet, 'px' ),
		};
		mobileSelectors[ ' .uagb-cta__buttons' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapBtnMobile, 'px' ),
		};
	} else if ( 'tablet' === stackBtn ) {
		selectors[ ' .uagb-cta__buttons' ] = {
			'column-gap': generateCSSUnit( gapBtnFallback, 'px' ),
			'align-items': 'center',
		};
		tabletSelectors[ ' .uagb-cta__buttons' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapBtnTablet, 'px' ),
		};
		mobileSelectors[ ' .uagb-cta__buttons' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapBtnMobile, 'px' ),
		};
	} else if ( 'mobile' === stackBtn ) {
		selectors[ ' .uagb-cta__buttons' ] = {
			'column-gap': generateCSSUnit( gapBtnFallback, 'px' ),
			'align-items': 'center',
		};
		tabletSelectors[ ' .uagb-cta__buttons' ] = {
			'column-gap': generateCSSUnit( gapBtnTablet, 'px' ),
			'align-items': 'center',
		};
		mobileSelectors[ ' .uagb-cta__buttons' ] = {
			'flex-direction': 'column',
			'row-gap': generateCSSUnit( gapBtnMobile, 'px' ),
		};
	} else if ( 'none' === stackBtn ) {
		selectors[ ' .uagb-cta__buttons' ] = {
			'column-gap': generateCSSUnit( gapBtnFallback, 'px' ),
			'align-items': 'center',
		};
		tabletSelectors[ ' .uagb-cta__buttons' ] = {
			'column-gap': generateCSSUnit( gapBtnTablet, 'px' ),
		};
		mobileSelectors[ ' .uagb-cta__buttons' ] = {
			'column-gap': generateCSSUnit( gapBtnMobile, 'px' ),
		};
	}
	if ( ctaType === 'button' && enabledSecondCtaButton ) {
		selectors[ '.uagb-cta__outer-wrap .uagb-cta__buttons' ] = {
			'width': generateCSSUnit( btncontentWidthFallback, btncontentWidthType ),
		};
		tabletSelectors[ '.uagb-cta__outer-wrap .uagb-cta__buttons' ] = {
			'width': generateCSSUnit( btncontentWidthTablet, btncontentWidthType ),
		};
		mobileSelectors[ '.uagb-cta__outer-wrap .uagb-cta__buttons' ] = {
			'width': generateCSSUnit( btncontentWidthMobile, btncontentWidthType ),
		};
	}
	let alignment;
	if ( 'left' === textAlign ) {
		alignment = 'flex-start';
	} else if ( 'right' === textAlign ) {
		alignment = 'flex-end';
	} else {
		alignment = 'center';
	}
	let alignmentTablet;
	if ( 'left' === textAlignTablet ) {
		alignmentTablet = 'flex-start';
	} else if ( 'right' === textAlignTablet ) {
		alignmentTablet = 'flex-end';
	} else {
		alignmentTablet = 'center';
	}
	let alignmentMobile;
	if ( 'left' === textAlignMobile ) {
		alignmentMobile = 'flex-start';
	} else if ( 'right' === textAlignMobile ) {
		alignmentMobile = 'flex-end';
	} else {
		alignmentMobile = 'center';
	}
	if ( 'desktop' === stack ) {
		selectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'column',
			'align-items': alignment,
		};
		tabletSelectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'column',
			'align-items': alignmentTablet,
		};
		mobileSelectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'column',
			'align-items': alignmentMobile,
		};
	} else if ( 'tablet' === stack ) {
		selectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'row',
			'align-items': 'top' === buttonAlign ? 'flex-start' : 'center',
		};
		tabletSelectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'column',
			'align-items': alignmentTablet,
		};
		mobileSelectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'column',
			'align-items': alignmentMobile,
		};
	} else if ( 'mobile' === stack ) {
		selectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'row',
			'align-items': 'top' === buttonAlign ? 'flex-start' : 'center',
		};
		tabletSelectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'row',
			'align-items': 'top' === buttonAlign ? 'flex-start' : 'center',
		};
		mobileSelectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'column',
			'align-items': alignmentMobile,
		};
	} else if ( 'none' === stack ) {
		selectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'row',
			'align-items': 'top' === buttonAlign ? 'flex-start' : 'center',
		};
		tabletSelectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'row',
			'align-items': 'top' === buttonAlign ? 'flex-start' : 'center',
		};
		mobileSelectors[ '.uagb-cta__outer-wrap ' ] = {
			'flex-direction': 'row',
			'align-items': 'top' === buttonAlign ? 'flex-start' : 'center',
		};
		selectors[ ' .uagb-cta__buttons' ] = {
			'column-gap': generateCSSUnit( gapBtn, 'px' ),
			'margin-left': generateCSSUnit( buttonRightSpaceFallback, buttonRightSpaceType ),
		};
		tabletSelectors[ ' .uagb-cta__buttons' ] = {
			'column-gap': generateCSSUnit( gapBtnTablet, 'px' ),
			'margin-left': generateCSSUnit( buttonRightSpaceTablet, buttonRightSpaceType ),
		};
		mobileSelectors[ ' .uagb-cta__buttons' ] = {
			'column-gap': generateCSSUnit( gapBtnMobile, 'px' ),
			'margin-left': generateCSSUnit( buttonRightSpaceMobile, buttonRightSpaceType ),
		};
	}

	const id = `.editor-styles-wrapper #block-${ props.clientId } .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, `${ id }` );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default CtaStyle;
