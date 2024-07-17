/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateShadowCSS from '@Controls/generateShadowCSS';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import { applyFilters } from '@wordpress/hooks';

export default function styling( attributes, clientId, name, deviceType, gbsSelector = false ) {
	const previewType = deviceType.toLowerCase();
	const {
		block_id,
		showDays,
		showHours,
		showMinutes,
		showSeconds,
		// digit.
		digitFontFamily,
		digitFontWeight,
		digitFontStyle,
		digitFontSize,
		digitColor,
		digitDecoration,
		digitFontSizeType,
		digitFontSizeTypeMobile,
		digitFontSizeTypeTablet,
		digitFontSizeMobile,
		digitFontSizeTablet,
		digitLineHeight,
		digitLineHeightType,
		digitLineHeightMobile,
		digitLineHeightTablet,
		digitLetterSpacing,
		digitLetterSpacingType,
		digitLetterSpacingMobile,
		digitLetterSpacingTablet,
		// label.
		labelFontFamily,
		labelFontWeight,
		labelFontStyle,
		labelFontSize,
		labelColor,
		labelTransform,
		labelDecoration,
		labelFontSizeType,
		labelFontSizeTypeMobile,
		labelFontSizeTypeTablet,
		labelFontSizeMobile,
		labelFontSizeTablet,
		labelLineHeight,
		labelLineHeightType,
		labelLineHeightMobile,
		labelLineHeightTablet,
		labelLetterSpacing,
		labelLetterSpacingType,
		labelLetterSpacingMobile,
		labelLetterSpacingTablet,
		// Separator styling.
		separatorFontFamily,
		separatorFontWeight,
		separatorFontStyle,
		separatorFontSize,
		separatorColor,
		separatorFontSizeType,
		separatorFontSizeTypeMobile,
		separatorFontSizeTypeTablet,
		separatorFontSizeMobile,
		separatorFontSizeTablet,
		separatorLineHeight,
		separatorLineHeightType,
		separatorLineHeightMobile,
		separatorLineHeightTablet,
		separatorRightSpacing,
		separatorRightSpacingTablet,
		separatorRightSpacingMobile,
		separatorTopSpacing,
		separatorTopSpacingTablet,
		separatorTopSpacingMobile,
		// Block Margin
		blockTopMargin,
		blockRightMargin,
		blockLeftMargin,
		blockBottomMargin,
		blockTopMarginTablet,
		blockRightMarginTablet,
		blockLeftMarginTablet,
		blockBottomMarginTablet,
		blockTopMarginMobile,
		blockRightMarginMobile,
		blockLeftMarginMobile,
		blockBottomMarginMobile,
		blockMarginUnit,
		blockMarginUnitTablet,
		blockMarginUnitMobile,
		// Block Padding
		blockTopPadding,
		blockRightPadding,
		blockLeftPadding,
		blockBottomPadding,
		blockTopPaddingTablet,
		blockRightPaddingTablet,
		blockLeftPaddingTablet,
		blockBottomPaddingTablet,
		blockTopPaddingMobile,
		blockRightPaddingMobile,
		blockLeftPaddingMobile,
		blockBottomPaddingMobile,
		blockPaddingUnit,
		blockPaddingUnitTablet,
		blockPaddingUnitMobile,
		// Box Padding.
		boxTopPadding,
		boxRightPadding,
		boxLeftPadding,
		boxBottomPadding,
		boxTopPaddingTablet,
		boxRightPaddingTablet,
		boxLeftPaddingTablet,
		boxBottomPaddingTablet,
		boxTopPaddingMobile,
		boxRightPaddingMobile,
		boxLeftPaddingMobile,
		boxBottomPaddingMobile,
		boxPaddingUnit,
		boxPaddingUnitTablet,
		boxPaddingUnitMobile,
		// Overall Align.
		align,
		alignTablet,
		alignMobile,
		// Box Align.
		boxAlign,
		boxAlignTablet,
		boxAlignMobile,
		// Box Width.
		boxWidth,
		boxWidthTablet,
		boxWidthMobile,
		// Square Box.
		isSquareBox,
		// Label Vertical Alignment.
		labelVerticalAlignment,
		labelVerticalAlignmentTablet,
		labelVerticalAlignmentMobile,
		// Box Spacing.
		boxSpacing,
		boxSpacingTablet,
		boxSpacingMobile,
		// Internal Box Spacing.
		internalBoxSpacing,
		internalBoxSpacingTablet,
		internalBoxSpacingMobile,
		// Box Flex Direction.
		boxFlex,
		boxFlexTablet,
		boxFlexMobile,
		// Box Background.
		boxBgType,
		boxBgColor,
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
		showSeparator,
		separatorType,
		boxBorderHColor,
		globalBlockStyleId,
	} = attributes;

	const blockName = name.replace( 'uagb/', '' );

	const isRTL = '1' === uagb_blocks_info.is_rtl ? true : false;

	const childSelectorType = isRTL ? 'first' : 'last';
	const pseudoElementSelectorType = isRTL ? 'before' : 'after';

	const separatorSelector =
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:' +
		childSelectorType +
		'-child) .wp-block-uagb-countdown__time::' +
		pseudoElementSelectorType;
	
    // On showSeconds disable this selector is used to remove the separator after minutes. 
	const minSeparatorRemovalSelector = 
	'.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-minutes:not(:' +
	childSelectorType +
	'-child) .wp-block-uagb-countdown__time.wp-block-uagb-countdown__time-minutes::' +
	pseudoElementSelectorType;

	// On showSeconds and showMinutes disable this selector is used to remove the separator after hours. 
	 const hoursSeparatorRemovalSelector = 
	 '.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-hours:not(:' +
	 childSelectorType +
	 '-child) .wp-block-uagb-countdown__time.wp-block-uagb-countdown__time-hours::' +
	 pseudoElementSelectorType;

	// On showSeconds, showMinutes and showHours disable this selector is used to remove the separator after days.
	const daysSeparatorRemovalSelector = 
	'.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-days:not(:' +
	childSelectorType +
	'-child) .wp-block-uagb-countdown__time.wp-block-uagb-countdown__time-days::' +
	pseudoElementSelectorType;

	// Fallbacks.

	const boxSpacingFallback = getFallbackNumber( boxSpacing, 'boxSpacing', blockName );
	const boxSpacingFallbackTablet = isNaN( boxSpacingTablet ) ? boxSpacing : boxSpacingTablet;
	const boxSpacingFallbackMobile = isNaN( boxSpacingMobile ) ? boxSpacingTablet : boxSpacingMobile;

	const internalBoxSpacingFallback = getFallbackNumber( internalBoxSpacing, 'internalBoxSpacing', blockName );
	const internalBoxSpacingFallbackTablet = isNaN( internalBoxSpacingTablet )
		? internalBoxSpacing
		: internalBoxSpacingTablet;
	const internalBoxSpacingFallbackMobile = isNaN( internalBoxSpacingMobile )
		? internalBoxSpacingTablet
		: internalBoxSpacingMobile;

	const separatorRightSpacingFallback = getFallbackNumber(
		separatorRightSpacing,
		'separatorRightSpacing',
		blockName
	);
	const separatorRightSpacingTabletFallback = isNaN( separatorRightSpacingTablet )
		? separatorRightSpacing
		: separatorRightSpacingTablet;
	const separatorRightSpacingMobileFallback = isNaN( separatorRightSpacingMobile )
		? separatorRightSpacingTablet
		: separatorRightSpacingMobile;

	const separatorTopSpacingFallback = getFallbackNumber( separatorTopSpacing, 'separatorTopSpacing', blockName );
	const separatorTopSpacingTabletFallback = isNaN( separatorTopSpacingTablet )
		? separatorTopSpacing
		: separatorTopSpacingTablet;
	const separatorTopSpacingMobileFallback = isNaN( separatorTopSpacingMobile )
		? separatorTopSpacingTablet
		: separatorTopSpacingMobile;

	// Border.
	const boxBorderCSS = generateBorderCSS( attributes, 'box' );
	const boxBorderCSSTablet = generateBorderCSS( attributes, 'box', 'tablet' );
	const boxBorderCSSMobile = generateBorderCSS( attributes, 'box', 'mobile' );

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

	let tabletSelectors = {};
	let mobileSelectors = {};

	let selectors = {
		'.wp-block-uagb-countdown': {
			'justify-content': align,
			'margin-top': generateCSSUnit( blockTopMargin, blockMarginUnit ),
			'margin-right': generateCSSUnit( blockRightMargin, blockMarginUnit ),
			'margin-bottom': generateCSSUnit( blockBottomMargin, blockMarginUnit ),
			'margin-left': generateCSSUnit( blockLeftMargin, blockMarginUnit ),
			'padding-top': generateCSSUnit( blockTopPadding, blockPaddingUnit ),
			'padding-right': generateCSSUnit( blockRightPadding, blockPaddingUnit ),
			'padding-bottom': generateCSSUnit( blockBottomPadding, blockPaddingUnit ),
			'padding-left': generateCSSUnit( blockLeftPadding, blockPaddingUnit ),
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-days': {
			'display': showDays ? '' : 'none',
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-hours': {
			'display': showHours ? '' : 'none',
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-minutes': {
			'display': showMinutes ? '' : 'none',
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-seconds': {
			'display': showSeconds ? '' : 'none',
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box': {
			// eslint-disable-next-line no-nested-ternary
			'aspect-ratio': isSquareBox ? 1 : ( ! globalBlockStyleId ? 'auto' : '' ),
			'width': generateCSSUnit( boxWidth, 'px' ),
			// eslint-disable-next-line no-nested-ternary
			'height': isSquareBox ? generateCSSUnit( boxWidth, 'px' ) : ( ! globalBlockStyleId ? 'auto' : '' ),
			'flex-direction': boxFlex,
			'justify-content': boxFlex !== 'column' ? boxAlign : 'center',
			'align-items': boxFlex !== 'row' ? boxAlign : 'center',
			'background-color': boxBgType !== 'transparent' ? boxBgColor : 'transparent',
			'padding-top': generateCSSUnit( boxTopPadding, boxPaddingUnit ),
			'padding-right': generateCSSUnit( boxRightPadding, boxPaddingUnit ),
			'padding-bottom': generateCSSUnit( boxBottomPadding, boxPaddingUnit ),
			'padding-left': generateCSSUnit( boxLeftPadding, boxPaddingUnit ),
			'row-gap': generateCSSUnit( internalBoxSpacingFallback, 'px' ),
			'column-gap': generateCSSUnit( internalBoxSpacingFallback, 'px' ),
			'box-shadow': boxShadowCSS,
			...boxBorderCSS,
		},
		'.wp-block-uagb-countdown:hover .wp-block-uagb-countdown__box': {
			'border-color': boxBorderHColor,
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-minutes:not(:last-child)': {
			'margin-right': showSeconds ? generateCSSUnit( boxSpacingFallback, 'px' ) : 'unset',
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-hours:not(:last-child)': {
			'margin-right': ( showSeconds || showMinutes ) ? generateCSSUnit( boxSpacingFallback, 'px' ) : 'unset',
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-days:not(:last-child)': {
			'margin-right': ( showSeconds || showMinutes || showHours ) ? generateCSSUnit( boxSpacingFallback, 'px' ) : 'unset',
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__time': {
			'font-family': digitFontFamily,
			'font-style': digitFontStyle,
			'text-decoration': digitDecoration,
			'font-weight': digitFontWeight,
			'font-size': generateCSSUnit( digitFontSize, digitFontSizeType ),
			'line-height': generateCSSUnit( digitLineHeight, digitLineHeightType ),
			'letter-spacing': generateCSSUnit( digitLetterSpacing, digitLetterSpacingType ),
			'color': digitColor,
		},
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child) .wp-block-uagb-countdown__time::after': {}, // Empty ruleset to prevent undefined error.
		'.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:first-child)': {}, // Empty ruleset to prevent undefined error (for RTL Box Gap).
		'.wp-block-uagb-countdown div.wp-block-uagb-countdown__label': {
			'align-self': ! isSquareBox && boxFlex === 'row' ? labelVerticalAlignment : 'unset',
			'font-family': labelFontFamily,
			'font-style': labelFontStyle,
			'text-decoration': labelDecoration,
			'text-transform': labelTransform,
			'font-weight': labelFontWeight,
			'font-size': generateCSSUnit( labelFontSize, labelFontSizeType ),
			'line-height': generateCSSUnit( labelLineHeight, labelLineHeightType ),
			'letter-spacing': generateCSSUnit( labelLetterSpacing, labelLetterSpacingType ),
			'color': labelColor,
		},
	};

	// Box Shadow.
	if ( useSeparateBoxShadows ) {
		selectors[ '.wp-block-uagb-countdown:hover .wp-block-uagb-countdown__box' ][ 'box-shadow' ] = boxShadowHoverCSS;
	}

	// TABLET SELECTORS.
	tabletSelectors[ '.wp-block-uagb-countdown' ] = {
		'justify-content': alignTablet,
		'margin-top': generateCSSUnit( blockTopMarginTablet, blockMarginUnitTablet ),
		'margin-right': generateCSSUnit( blockRightMarginTablet, blockMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( blockBottomMarginTablet, blockMarginUnitTablet ),
		'margin-left': generateCSSUnit( blockLeftMarginTablet, blockMarginUnitTablet ),
		'padding-top': generateCSSUnit( blockTopPaddingTablet, blockPaddingUnitTablet ),
		'padding-right': generateCSSUnit( blockRightPaddingTablet, blockPaddingUnitTablet ),
		'padding-bottom': generateCSSUnit( blockBottomPaddingTablet, blockPaddingUnitTablet ),
		'padding-left': generateCSSUnit( blockLeftPaddingTablet, blockPaddingUnitTablet ),
	};

	tabletSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__box' ] = {
		'width': generateCSSUnit( boxWidthTablet, 'px' ),
		// eslint-disable-next-line no-nested-ternary
		'height': isSquareBox ? generateCSSUnit( boxWidthTablet, 'px' ) : ( ! globalBlockStyleId ? 'auto' : '' ),
		'flex-direction': boxFlexTablet,
		'justify-content': boxFlexTablet !== 'column' ? boxAlignTablet : 'center',
		'align-items': boxFlexTablet !== 'row' ? boxAlignTablet : 'center',
		'padding-top': generateCSSUnit( boxTopPaddingTablet, boxPaddingUnitTablet ),
		'padding-right': generateCSSUnit( boxRightPaddingTablet, boxPaddingUnitTablet ),
		'padding-bottom': generateCSSUnit( boxBottomPaddingTablet, boxPaddingUnitTablet ),
		'padding-left': generateCSSUnit( boxLeftPaddingTablet, boxPaddingUnitTablet ),
		'row-gap': generateCSSUnit( internalBoxSpacingFallbackTablet, 'px' ),
		'column-gap': generateCSSUnit( internalBoxSpacingFallbackTablet, 'px' ),
		...boxBorderCSSTablet,
	};

	tabletSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-minutes:not(:last-child)' ] = {
		'margin-right': showSeconds ? generateCSSUnit( boxSpacingFallbackTablet, 'px' ) : 'unset',
	};
	tabletSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-hours:not(:last-child)' ] = {
		'margin-right': ( showSeconds || showMinutes ) ? generateCSSUnit( boxSpacingFallbackTablet, 'px' ) : 'unset',
	};
	tabletSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-days:not(:last-child)' ] = {
		'margin-right': ( showSeconds || showMinutes || showHours ) ? generateCSSUnit( boxSpacingFallbackTablet, 'px' ) : 'unset',
	};

	tabletSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:first-child)' ] = {}; // Empty ruleset to prevent undefined error (for RTL Box Gap).

	tabletSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__time' ] = {
		'font-size': generateCSSUnit( digitFontSizeTablet, digitFontSizeTypeTablet ),
		'line-height': generateCSSUnit( digitLineHeightTablet, digitLineHeightType ),
		'letter-spacing': generateCSSUnit( digitLetterSpacingTablet, digitLetterSpacingType ),
	};

	tabletSelectors[ '.wp-block-uagb-countdown div.wp-block-uagb-countdown__label' ] = {
		'align-self': ! isSquareBox && boxFlexTablet === 'row' ? labelVerticalAlignmentTablet : 'unset',
		'font-size': generateCSSUnit( labelFontSizeTablet, labelFontSizeTypeTablet ),
		'line-height': generateCSSUnit( labelLineHeightTablet, labelLineHeightType ),
		'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
	};

	mobileSelectors[ '.wp-block-uagb-countdown' ] = {
		'justify-content': alignMobile,
		'margin-top': generateCSSUnit( blockTopMarginMobile, blockMarginUnitMobile ),
		'margin-right': generateCSSUnit( blockRightMarginMobile, blockMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( blockBottomMarginMobile, blockMarginUnitMobile ),
		'margin-left': generateCSSUnit( blockLeftMarginMobile, blockMarginUnitMobile ),
		'padding-top': generateCSSUnit( blockTopPaddingMobile, blockPaddingUnitMobile ),
		'padding-right': generateCSSUnit( blockRightPaddingMobile, blockPaddingUnitMobile ),
		'padding-bottom': generateCSSUnit( blockBottomPaddingMobile, blockPaddingUnitMobile ),
		'padding-left': generateCSSUnit( blockLeftPaddingMobile, blockPaddingUnitMobile ),
	};

	mobileSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__box' ] = {
		'width': generateCSSUnit( boxWidthMobile, 'px' ),
		// eslint-disable-next-line no-nested-ternary
		'height': isSquareBox ? generateCSSUnit( boxWidthMobile, 'px' ) : ( ! globalBlockStyleId ? 'auto' : '' ),
		'flex-direction': boxFlexMobile,
		'justify-content': boxFlexMobile !== 'column' ? boxAlignMobile : 'center',
		'align-items': boxFlexMobile !== 'row' ? boxAlignMobile : 'center',
		'padding-top': generateCSSUnit( boxTopPaddingMobile, boxPaddingUnitMobile ),
		'padding-right': generateCSSUnit( boxRightPaddingMobile, boxPaddingUnitMobile ),
		'padding-bottom': generateCSSUnit( boxBottomPaddingMobile, boxPaddingUnitMobile ),
		'padding-left': generateCSSUnit( boxLeftPaddingMobile, boxPaddingUnitMobile ),
		'row-gap': generateCSSUnit( internalBoxSpacingFallbackMobile, 'px' ),
		'column-gap': generateCSSUnit( internalBoxSpacingFallbackMobile, 'px' ),
		...boxBorderCSSMobile,
	};

	mobileSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-minutes:not(:last-child)' ] = {
		'margin-right': showSeconds ? generateCSSUnit( boxSpacingFallbackMobile, 'px' ) : 'unset',
	};
	mobileSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-hours:not(:last-child)' ] = {
		'margin-right': ( showSeconds || showMinutes ) ? generateCSSUnit( boxSpacingFallbackMobile, 'px' ) : 'unset',
	};
	mobileSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__box.wp-block-uagb-countdown__box-days:not(:last-child)' ] = {
		'margin-right': ( showSeconds || showMinutes || showHours ) ? generateCSSUnit( boxSpacingFallbackMobile, 'px' ) : 'unset',
	};

	mobileSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:first-child)' ] = {}; // Empty ruleset to prevent undefined error (for RTL Box Gap).

	mobileSelectors[ '.wp-block-uagb-countdown .wp-block-uagb-countdown__time' ] = {
		'font-size': generateCSSUnit( digitFontSizeMobile, digitFontSizeTypeMobile ),
		'line-height': generateCSSUnit( digitLineHeightMobile, digitLineHeightType ),
		'letter-spacing': generateCSSUnit( digitLetterSpacingMobile, digitLetterSpacingType ),
	};

	mobileSelectors[ '.wp-block-uagb-countdown div.wp-block-uagb-countdown__label' ] = {
		'align-self': ! isSquareBox && boxFlexMobile === 'row' ? labelVerticalAlignmentMobile : 'unset',
		'font-size': generateCSSUnit( labelFontSizeMobile, labelFontSizeTypeMobile ),
		'line-height': generateCSSUnit( labelLineHeightMobile, labelLineHeightType ),
		'letter-spacing': generateCSSUnit( labelLetterSpacingMobile, labelLetterSpacingType ),
	};

	// Separator.
	if ( showSeparator ) {
		selectors[ separatorSelector ] = {
			'content': separatorType ? `'${ separatorType }'` : '',
			'font-family': separatorFontFamily,
			'font-style': separatorFontStyle,
			'font-weight': separatorFontWeight,
			'font-size': generateCSSUnit( separatorFontSize, separatorFontSizeType ),
			'line-height': generateCSSUnit( separatorLineHeight, separatorLineHeightType ),
			'color': separatorColor,

			'right': separatorRightSpacingFallback ? generateCSSUnit( -separatorRightSpacingFallback, 'px' ) : '',
			'top': generateCSSUnit( separatorTopSpacingFallback, 'px' ),
		};

		selectors[ minSeparatorRemovalSelector ] = {
			'display': showSeconds ? '' : 'none',
		};

		selectors[ hoursSeparatorRemovalSelector ] = {
			'display': showMinutes || showSeconds ? '' : 'none',
		};

		selectors[ daysSeparatorRemovalSelector ] = {
			'display': showHours || showMinutes || showSeconds ? '' : 'none',
		};

		tabletSelectors[ separatorSelector ] = {
			'font-size': generateCSSUnit( separatorFontSizeTablet, separatorFontSizeTypeTablet ),
			'line-height': generateCSSUnit( separatorLineHeightTablet, separatorLineHeightType ),
			'right': separatorRightSpacingTabletFallback ? generateCSSUnit( -separatorRightSpacingTabletFallback, 'px' ) : '',
			'top': generateCSSUnit( separatorTopSpacingTabletFallback, 'px' ),
		};

		mobileSelectors[ separatorSelector ] = {
			'font-size': generateCSSUnit( separatorFontSizeMobile, separatorFontSizeTypeMobile ),
			'line-height': generateCSSUnit( separatorLineHeightMobile, separatorLineHeightType ),
			'right': separatorRightSpacingMobileFallback ? generateCSSUnit( -separatorRightSpacingMobileFallback, 'px' ) : '',
			'top': generateCSSUnit( separatorTopSpacingMobileFallback, 'px' ),
		};
	}

	// If RTL is enabled, we use the following selectors and CSS properties for box gap.
	if ( isRTL ) {
		const boxGapSelectorLTR = '.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:last-child)';
		const boxGapSelectorRTL = '.wp-block-uagb-countdown .wp-block-uagb-countdown__box:not(:first-child)';

		selectors[ boxGapSelectorLTR ][ 'margin-right' ] = 'unset';
		tabletSelectors[ boxGapSelectorLTR ][ 'margin-right' ] = 'unset';
		mobileSelectors[ boxGapSelectorLTR ][ 'margin-right' ] = 'unset';

		selectors[ boxGapSelectorRTL ][ 'margin-right' ] = generateCSSUnit( boxSpacingFallback, 'px' );
		tabletSelectors[ boxGapSelectorRTL ][ 'margin-right' ] = generateCSSUnit( boxSpacingFallbackTablet, 'px' );
		mobileSelectors[ boxGapSelectorRTL ][ 'margin-right' ] = generateCSSUnit( boxSpacingFallbackMobile, 'px' );
	}

	const baseSelector = '.editor-styles-wrapper ' + ( gbsSelector ? gbsSelector : `.uagb-block-${ block_id }` );

	selectors = applyFilters( `spectra.${ blockName }.styling`, selectors, attributes );
	tabletSelectors = applyFilters( `spectra.${ blockName }.tabletStyling`, tabletSelectors, attributes );
	mobileSelectors = applyFilters( `spectra.${ blockName }.mobileStyling`, mobileSelectors, attributes );

	let styling_css = generateCSS( selectors, baseSelector );

	if( 'tablet' === previewType || 'mobile' === previewType || gbsSelector ) {
		styling_css += generateCSS(
			tabletSelectors,
			`${ baseSelector }`,
			true,
			'tablet'
		);

		if( 'mobile' === previewType || gbsSelector ){
			styling_css += generateCSS(
				mobileSelectors,
				`${ baseSelector }`,
				true,
				'mobile'
			);
		}
	}
	return styling_css;
}
