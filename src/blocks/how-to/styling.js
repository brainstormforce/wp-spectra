/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( attributes, clientId, name ) {
	const blockName = name.replace( 'uagb/', '' );

	const {
		overallAlignment,
		headingTag,
		showTotaltimecolor,
		headingColor,
		headSpace,
		subHeadingColor,
		headFontFamily,
		headFontWeight,
		headFontSize,
		headFontSizeType,
		headFontSizeMobile,
		headFontSizeTablet,
		headLineHeight,
		headLineHeightType,
		headLineHeightMobile,
		headLineHeightTablet,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeMobile,
		subHeadFontSizeTablet,
		subHeadLineHeight,
		subHeadLineHeightType,
		subHeadLineHeightMobile,
		subHeadLineHeightTablet,
		priceFontSizeType,
		priceFontSize,
		priceFontSizeTablet,
		priceFontSizeMobile,
		priceFontFamily,
		priceFontWeight,
		priceLineHeightType,
		priceLineHeight,
		priceLineHeightTablet,
		priceLineHeightMobile,
		timeSpace,
		costSpace,
		row_gap,
		rowGapTablet,
		rowGapMobile,
		step_gap,
		priceFontStyle,
		priceTransform,
		priceDecoration,
		headFontStyle,
		headTransform,
		headDecoration,
		subHeadFontStyle,
		subHeadTransform,
		subHeadDecoration,
		// letter spacing
		headLetterSpacing,
		headLetterSpacingTablet,
		headLetterSpacingMobile,
		headLetterSpacingType,
		priceLetterSpacing,
		priceLetterSpacingTablet,
		priceLetterSpacingMobile,
		priceLetterSpacingType,
		subHeadLetterSpacing,
		subHeadLetterSpacingTablet,
		subHeadLetterSpacingMobile,
		subHeadLetterSpacingType,
	} = attributes;

	let tabletSelectors = {};
	let mobileSelectors = {};

	let sGap =
		'' !== getFallbackNumber( step_gap, 'step_gap', blockName )
			? getFallbackNumber( step_gap, 'step_gap', blockName )
			: 0;
	sGap += 30;

	const selectors = {
		' .block-editor-rich-text__editable.uagb-howto-desc-text': {
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'font-weight': subHeadFontWeight,
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'color': subHeadingColor,
			'letter-spacing': generateCSSUnit( subHeadLetterSpacing, subHeadLetterSpacingType ),
		},
		'.uagb-how-to-main-wrap p': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
		},
		'.uagb-how-to-main-wrap .uagb-how-to-tools__wrap': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
		},

		'.uagb-how-to-main-wrap .uagb-howto__source-wrap': {
			// For Backward
			'margin-bottom': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
		},
		'.uagb-how-to-main-wrap .uagb-howto__source-image': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
		},
		'.uagb-how-to-main-wrap span.uagb-howto__time-wrap': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
			'justify-content': overallAlignment,
		},

		'.uagb-how-to-main-wrap span.uagb-howto__cost-wrap': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
			'justify-content': overallAlignment,
		},

		' .uagb-how-to-tools .uagb-how-to-tools-child__wrapper:last-child': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
		},

		'.uagb-how-to-main-wrap .uagb-how-to-materials-child__wrapper:last-child': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
		},
		' h4.uagb-howto-req-steps-text': {
			'margin-top': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
			'margin-bottom': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
		},
		' h4.uagb-howto-req-materials-text': {
			'margin-top': generateCSSUnit( getFallbackNumber( row_gap, 'row_gap', blockName ), 'px' ),
		},
		' .uagb-infobox__content-wrap': {
			'margin-bottom': generateCSSUnit( sGap, 'px' ),
		},
		' .uagb-how-to-step-wrap': {
			'margin-bottom': generateCSSUnit( sGap, 'px' ),
		},
		' .block-editor-rich-text__editable.uagb-howto-timeNeeded-text': {
			'font-family': priceFontFamily,
			'font-style': priceFontStyle,
			'text-decoration': priceDecoration,
			'text-transform': priceTransform,
			'font-weight': priceFontWeight,
			'font-size': generateCSSUnit( priceFontSize, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeight, priceLineHeightType ),
			'color': showTotaltimecolor,
			'letter-spacing': generateCSSUnit( priceLetterSpacing, priceLetterSpacingType ),
		},
		' .uagb-howto-timeNeeded-value': {
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'font-weight': subHeadFontWeight,
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'color': subHeadingColor,
			'margin-left': generateCSSUnit( getFallbackNumber( timeSpace, 'timeSpace', blockName ), 'px' ),
		},
		' .uagb-howto-timeINmin-text ': {
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'font-weight': subHeadFontWeight,
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'color': subHeadingColor,
		},
		' .block-editor-rich-text__editable.uagb-howto-estcost-text': {
			'font-family': priceFontFamily,
			'font-style': priceFontStyle,
			'text-decoration': priceDecoration,
			'text-transform': priceTransform,
			'font-weight': priceFontWeight,
			'font-size': generateCSSUnit( priceFontSize, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeight, priceLineHeightType ),
			'color': showTotaltimecolor,
		},
		' .block-editor-rich-text__editable.uagb-howto-estcost-value': {
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'font-weight': subHeadFontWeight,
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'color': subHeadingColor,
			'margin-left': generateCSSUnit( getFallbackNumber( costSpace, 'costSpace', blockName ), 'px' ),
		},

		' h4.block-editor-rich-text__editable': {
			'font-family': priceFontFamily,
			'font-style': priceFontStyle,
			'text-decoration': priceDecoration,
			'text-transform': priceTransform,
			'font-weight': priceFontWeight,
			'font-size': generateCSSUnit( priceFontSize, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeight, priceLineHeightType ),
		},
		' p.block-editor-rich-text__editable': {
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'font-weight': subHeadFontWeight,
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
		},

		' .block-editor-rich-text__editable.uagb-howto-estcost-type': {
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'font-weight': subHeadFontWeight,
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'color': subHeadingColor,
		},

		' .block-editor-rich-text__editable.uagb-howto-req-tools-text': {
			'font-family': priceFontFamily,
			'font-style': priceFontStyle,
			'text-decoration': priceDecoration,
			'text-transform': priceTransform,
			'font-weight': priceFontWeight,
			'font-size': generateCSSUnit( priceFontSize, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeight, priceLineHeightType ),
			'color': showTotaltimecolor,
		},

		'  .block-editor-rich-text__editable.uagb-tools__label': {
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'font-weight': subHeadFontWeight,
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'color': subHeadingColor,
		},

		' .block-editor-rich-text__editable.uagb-howto-req-materials-text': {
			'font-family': priceFontFamily,
			'font-style': priceFontStyle,
			'text-decoration': priceDecoration,
			'text-transform': priceTransform,
			'font-weight': priceFontWeight,
			'font-size': generateCSSUnit( priceFontSize, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeight, priceLineHeightType ),
			'color': showTotaltimecolor,
		},

		' .block-editor-rich-text__editable.uagb-howto-req-steps-text': {
			'font-family': priceFontFamily,
			'font-style': priceFontStyle,
			'text-decoration': priceDecoration,
			'text-transform': priceTransform,
			'font-weight': priceFontWeight,
			'font-size': generateCSSUnit( priceFontSize, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeight, priceLineHeightType ),
			'color': showTotaltimecolor,
		},

		' .block-editor-rich-text__editable.uagb-materials__label': {
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'font-weight': subHeadFontWeight,
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'color': subHeadingColor,
		},
	};

	selectors[ '.uagb-how-to-main-wrap' ] = {
		'text-align': overallAlignment,
		'display': 'block',
	};

	selectors[ ' ' + headingTag + '.block-editor-rich-text__editable.uagb-howto-heading-text' ] = {
		'font-family': headFontFamily,
		'font-style': headFontStyle,
		'text-decoration': headDecoration,
		'text-transform': headTransform,
		'font-weight': headFontWeight,
		'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
		'line-height': generateCSSUnit( headLineHeight, headLineHeightType ),
		'color': headingColor,
		'margin-bottom': generateCSSUnit( headSpace, 'px' ),
		'letter-spacing': generateCSSUnit( headLetterSpacing, headLetterSpacingType ),
	};

	mobileSelectors = {
		' .block-editor-rich-text__editable.uagb-howto-heading-text': {
			'font-size': generateCSSUnit( headFontSizeMobile, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightMobile, headLineHeightType ),
			'letter-spacing': generateCSSUnit( headLetterSpacingMobile, headLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-desc-text': {
			'font-size': generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacingMobile, subHeadLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-timeNeeded-text': {
			'font-size': generateCSSUnit( priceFontSizeMobile, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightMobile, priceLineHeightType ),
			'letter-spacing': generateCSSUnit( priceLetterSpacingMobile, priceLetterSpacingType ),
		},
		' .uagb-howto-timeNeeded-value': {
			'font-size': generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
		},
		' .uagb-howto-timeINmin-text ': {
			'font-size': generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-estcost-text': {
			'font-size': generateCSSUnit( priceFontSizeMobile, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightMobile, priceLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-estcost-value': {
			'font-size': generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-estcost-type': {
			'font-size': generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-tools__label': {
			'font-size': generateCSSUnit( priceFontSizeMobile, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightMobile, priceLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-req-tools-text': {
			'font-size': generateCSSUnit( priceFontSizeMobile, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightMobile, priceLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-materials__label': {
			'font-size': generateCSSUnit( priceFontSizeMobile, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightMobile, priceLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-req-materials-text': {
			'font-size': generateCSSUnit( priceFontSizeMobile, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightMobile, priceLineHeightType ),
		},
		'.uagb-how-to-main-wrap p': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName ), 'px' ),
		},
		'.uagb-how-to-main-wrap .uagb-how-to-tools__wrap': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName ), 'px' ),
		},
		'.uagb-how-to-main-wrap .uagb-howto__source-image': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName ), 'px' ),
		},
		'.uagb-how-to-main-wrap span.uagb-howto__time-wrap': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName ), 'px' ),
		},

		'.uagb-how-to-main-wrap span.uagb-howto__cost-wrap': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName ), 'px' ),
		},

		' .uagb-how-to-tools .uagb-how-to-tools-child__wrapper:last-child': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName ), 'px' ),
		},

		'.uagb-how-to-main-wrap .uagb-how-to-materials-child__wrapper:last-child': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName ), 'px' ),
		},
		' h4.uagb-howto-req-steps-text': {
			'margin-top': generateCSSUnit( getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName ), 'px' ),
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName ), 'px' ),
		},
		' h4.uagb-howto-req-materials-text': {
			'margin-top': generateCSSUnit( getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName ), 'px' ),
		},
	};

	tabletSelectors = {
		' .block-editor-rich-text__editable.uagb-howto-heading-text': {
			'font-size': generateCSSUnit( headFontSizeTablet, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightTablet, headLineHeightType ),
			'letter-spacing': generateCSSUnit( headLetterSpacingTablet, headLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-desc-text': {
			'font-size': generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacingTablet, subHeadLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-timeNeeded-text': {
			'font-size': generateCSSUnit( priceFontSizeTablet, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightTablet, priceLineHeightType ),
			'letter-spacing': generateCSSUnit( priceLetterSpacingTablet, priceLetterSpacingType ),
		},
		' .uagb-howto-timeNeeded-value': {
			'font-size': generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
		},
		' .uagb-howto-timeINmin-text ': {
			'font-size': generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-estcost-text': {
			'font-size': generateCSSUnit( priceFontSizeTablet, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightTablet, priceLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-estcost-value': {
			'font-size': generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-estcost-type': {
			'font-size': generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-tools__label': {
			'font-size': generateCSSUnit( priceFontSizeTablet, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightTablet, priceLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-req-tools-text': {
			'font-size': generateCSSUnit( priceFontSizeTablet, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightTablet, priceLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-materials__label': {
			'font-size': generateCSSUnit( priceFontSizeTablet, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightTablet, priceLineHeightType ),
		},
		' .block-editor-rich-text__editable.uagb-howto-req-materials-text': {
			'font-size': generateCSSUnit( priceFontSizeTablet, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightTablet, priceLineHeightType ),
		},
		'.uagb-how-to-main-wrap p': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName ), 'px' ),
		},
		'.uagb-how-to-main-wrap .uagb-how-to-tools__wrap': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName ), 'px' ),
		},
		'.uagb-how-to-main-wrap .uagb-howto__source-image': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName ), 'px' ),
		},
		'.uagb-how-to-main-wrap span.uagb-howto__time-wrap': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName ), 'px' ),
		},

		'.uagb-how-to-main-wrap span.uagb-howto__cost-wrap': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName ), 'px' ),
		},

		' .uagb-how-to-tools .uagb-how-to-tools-child__wrapper:last-child': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName ), 'px' ),
		},

		'.uagb-how-to-main-wrap .uagb-how-to-materials-child__wrapper:last-child': {
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName ), 'px' ),
		},
		' h4.uagb-howto-req-steps-text': {
			'margin-top': generateCSSUnit( getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName ), 'px' ),
			'margin-bottom': generateCSSUnit( getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName ), 'px' ),
		},
		' h4.uagb-howto-req-materials-text': {
			'margin-top': generateCSSUnit( getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName ), 'px' ),
		},
	};

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	stylingCss += generateCSS( tabletSelectors, `${ baseSelector }`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ baseSelector }`, true, 'mobile' );

	return stylingCss;
}

export default styling;
