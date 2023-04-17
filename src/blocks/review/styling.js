/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( attributes ) {
	const {
		block_id,
		starColor,
		descColor,
		titleColor,
		contentColor,
		headFontFamily,
		headFontWeight,
		headFontSizeType,
		headLineHeightType,
		headFontSize,
		headFontSizeTablet,
		headFontSizeMobile,
		headLineHeight,
		headLineHeightTablet,
		headLineHeightMobile,
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
		contentFontFamily,
		contentFontWeight,
		contentFontSizeType,
		contentLineHeightType,
		contentFontSize,
		contentFontSizeTablet,
		contentFontSizeMobile,
		contentLineHeight,
		contentLineHeightTablet,
		contentLineHeightMobile,
		topPadding,
		bottomPadding,
		rightPadding,
		leftPadding,
		//Mobile
		paddingTopMobile,
		paddingBottomMobile,
		paddingRightMobile,
		paddingLeftMobile,
		//Tablet
		paddingTopTablet,
		paddingBottomTablet,
		paddingRightTablet,
		paddingLeftTablet,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		authorColor,
		summaryColor,
		starActiveColor,
		starOutlineColor,
		overallAlignment,
		headTransform,
		headDecoration,
		subHeadTransform,
		subHeadDecoration,
		contentTransform,
		contentDecoration,
		headFontStyle,
		subHeadFontStyle,
		contentFontStyle,
		headLetterSpacing,
		headLetterSpacingTablet,
		headLetterSpacingMobile,
		headLetterSpacingType,
		subHeadLetterSpacing,
		subHeadLetterSpacingTablet,
		subHeadLetterSpacingMobile,
		subHeadLetterSpacingType,
		contentLetterSpacing,
		contentLetterSpacingTablet,
		contentLetterSpacingMobile,
		contentLetterSpacingType,
	} = attributes;

	let tabletSelectors = {};
	let mobileSelectors = {};

	const selectors = {
		' .uagb-star-inner-container svg': {
			'fill': starColor,
		},
		' .uagb-avg-review-star-inner-container svg': {
			'fill': starColor,
		},
		' .uagb-rating-title': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-weight': headFontWeight,
			'font-family': headFontFamily,
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'line-height': generateCSSUnit( headLineHeight, headLineHeightType ),
			'letter-spacing': generateCSSUnit( headLetterSpacing, headLetterSpacingType ),
			'color': titleColor,
		},
		' .uagb_review_entry': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-weight': headFontWeight,
			'font-family': headFontFamily,
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'line-height': generateCSSUnit( headLineHeight, headLineHeightType ),
			'letter-spacing': generateCSSUnit( headLetterSpacing, headLetterSpacingType ),
		},
		' .uagb-rating-desc': {
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'font-weight': subHeadFontWeight,
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacing, subHeadLetterSpacingType ),
			'color': descColor,
		},
		' .uagb-rating-author': {
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'font-weight': subHeadFontWeight,
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacing, subHeadLetterSpacingType ),
			'color': authorColor,
		},
		' .uagb_review_block': {
			'padding-left': generateCSSUnit( leftPadding, paddingUnit ),
			'padding-right': generateCSSUnit( rightPadding, paddingUnit ),
			'padding-top': generateCSSUnit( topPadding, paddingUnit ),
			'padding-bottom': generateCSSUnit( bottomPadding, paddingUnit ),
			'text-align': overallAlignment,
		},
		' .uagb_review_summary, p.rich-text.block-editor-rich-text__editable.uagb_review_summary_title': {
			'font-size': generateCSSUnit( contentFontSize, contentFontSizeType ),
			'font-weight': contentFontWeight,
			'font-family': contentFontFamily,
			'font-style': contentFontStyle,
			'text-decoration': contentDecoration,
			'text-transform': contentTransform,
			'line-height': generateCSSUnit( contentLineHeight, contentLineHeightType ),
			'letter-spacing': generateCSSUnit( contentLetterSpacing, contentLetterSpacingType ),
			'color': summaryColor,
		},
		' .uagb_review_entry .rich-text': {
			'color': contentColor,
		},
		' .uagb_review_entry .star, .uagb_review_average_stars .star': {
			'fill': starColor,
		},
		' .uagb_review_entry path, .uagb_review_average_stars path': {
			'stroke': starOutlineColor,
			'fill': starActiveColor,
		},
	};

	mobileSelectors = {
		' .uagb-rating-title, .uagb_review_entry': {
			'font-size': generateCSSUnit( headFontSizeMobile, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightMobile, headLineHeightType ),
			'letter-spacing': generateCSSUnit( headLetterSpacingMobile, headLetterSpacingType ),
		},
		' .uagb-rating-desc, .uagb-rating-author': {
			'font-size': generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacingMobile, subHeadLetterSpacingType ),
		},
		' .uagb_review_summary, p.rich-text.block-editor-rich-text__editable.uagb_review_summary_title': {
			'font-size': generateCSSUnit( contentFontSizeMobile, contentFontSizeType ),
			'line-height': generateCSSUnit( contentLineHeightMobile, contentLineHeightType ),
			'letter-spacing': generateCSSUnit( contentLetterSpacingMobile, contentLetterSpacingType ),
		},
		' .uagb_review_block': {
			'padding-left': generateCSSUnit( paddingLeftMobile, mobilePaddingUnit ),
			'padding-right': generateCSSUnit( paddingRightMobile, mobilePaddingUnit ),
			'padding-top': generateCSSUnit( paddingTopMobile, mobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( paddingBottomMobile, mobilePaddingUnit ),
		},
	};

	tabletSelectors = {
		' .uagb-rating-title, .uagb_review_entry': {
			'font-size': generateCSSUnit( headFontSizeTablet, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightTablet, headLineHeightType ),
			'letter-spacing': generateCSSUnit( headLetterSpacingTablet, headLetterSpacingType ),
		},
		' .uagb-rating-desc, .uagb-rating-author': {
			'font-size': generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacingTablet, subHeadLetterSpacingType ),
		},
		' .uagb_review_summary, p.rich-text.block-editor-rich-text__editable.uagb_review_summary_title': {
			'font-size': generateCSSUnit( contentFontSizeTablet, contentFontSizeType ),
			'line-height': generateCSSUnit( contentLineHeightTablet, contentLineHeightType ),
			'letter-spacing': generateCSSUnit( contentLetterSpacingTablet, contentLetterSpacingType ),
		},
		' .uagb_review_block': {
			'padding-left': generateCSSUnit( paddingLeftTablet, tabletPaddingUnit ),
			'padding-right': generateCSSUnit( paddingRightTablet, tabletPaddingUnit ),
			'padding-top': generateCSSUnit( paddingTopTablet, tabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( paddingBottomTablet, tabletPaddingUnit ),
		},
	};

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ block_id.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	stylingCss += generateCSS( tabletSelectors, `${ baseSelector }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ baseSelector }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
