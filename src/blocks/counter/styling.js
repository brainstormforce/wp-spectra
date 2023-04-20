/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

export default function styling( attributes, clientId, name ) {
	const {
		align,
		alignTablet,
		alignMobile,
		layout,
		endNumber,
		headingFontFamily,
		headingFontWeight,
		headingFontStyle,
		headingFontSize,
		headingColor,
		headingTransform,
		headingDecoration,
		headingFontSizeType,
		headingFontSizeMobile,
		headingFontSizeTablet,
		headingLineHeight,
		headingLineHeightType,
		headingLineHeightMobile,
		headingLineHeightTablet,
		headingTopMargin,
		headingRightMargin,
		headingLeftMargin,
		headingBottomMargin,
		headingTopMarginTablet,
		headingRightMarginTablet,
		headingLeftMarginTablet,
		headingBottomMarginTablet,
		headingTopMarginMobile,
		headingRightMarginMobile,
		headingLeftMarginMobile,
		headingBottomMarginMobile,
		headingMarginUnit,
		headingMarginUnitTablet,
		headingMarginUnitMobile,
		headingLetterSpacingType,
		headingLetterSpacing,
		headingLetterSpacingTablet,
		headingLetterSpacingMobile,
		// Number
		numberFontFamily,
		numberFontWeight,
		numberFontStyle,
		numberFontSize,
		numberColor,
		numberTransform,
		numberDecoration,
		numberFontSizeType,
		numberFontSizeMobile,
		numberFontSizeTablet,
		numberLineHeight,
		numberLineHeightType,
		numberLineHeightMobile,
		numberLineHeightTablet,
		numberTopMargin,
		numberRightMargin,
		numberLeftMargin,
		numberBottomMargin,
		numberTopMarginTablet,
		numberRightMarginTablet,
		numberLeftMarginTablet,
		numberBottomMarginTablet,
		numberTopMarginMobile,
		numberRightMarginMobile,
		numberLeftMarginMobile,
		numberBottomMarginMobile,
		numberMarginUnit,
		numberMarginUnitTablet,
		numberMarginUnitMobile,
		numberLetterSpacingType,
		numberLetterSpacing,
		numberLetterSpacingTablet,
		numberLetterSpacingMobile,
		// prefix
		prefixRightDistance,
		prefixRightDistanceTablet,
		prefixRightDistanceMobile,
		suffixLeftDistance,
		suffixLeftDistanceTablet,
		suffixLeftDistanceMobile,
		// circle
		circleSize,
		circleStokeSize,
		circleForeground,
		circleBackground,
		// bar
		barSize,
		barForeground,
		barBackground,
		barFlip,
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
		// Box Shadow
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
		// Icon, Image
		iconImgPosition,
		iconColor,
		iconBackgroundColor,
		iconHoverColor,
		iconBackgroundHoverColor,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		iconSizeType,
		iconSizeTypeTablet,
		iconSizeTypeMobile,
		iconWrapBorderHColor,
		imageWidthType,
		imageWidth,
		imageWidthTablet,
		imageWidthMobile,
		imageWidthUnit,
		imageWidthUnitTablet,
		imageWidthUnitMobile,
		// Icon Padding
		iconTopPadding,
		iconRightPadding,
		iconLeftPadding,
		iconBottomPadding,
		iconTopPaddingTablet,
		iconRightPaddingTablet,
		iconLeftPaddingTablet,
		iconBottomPaddingTablet,
		iconTopPaddingMobile,
		iconRightPaddingMobile,
		iconLeftPaddingMobile,
		iconBottomPaddingMobile,
		iconPaddingUnit,
		iconPaddingUnitTablet,
		iconPaddingUnitMobile,
		// Icon Margin
		iconTopMargin,
		iconRightMargin,
		iconLeftMargin,
		iconBottomMargin,
		iconTopMarginTablet,
		iconRightMarginTablet,
		iconLeftMarginTablet,
		iconBottomMarginTablet,
		iconTopMarginMobile,
		iconRightMarginMobile,
		iconLeftMarginMobile,
		iconBottomMarginMobile,
		iconMarginUnit,
		iconMarginUnitTablet,
		iconMarginUnitMobile,
	} = attributes;

	const blockName = name.replace( 'uagb/', '' );

	// <---------- FALLBACKS ---------->

	// Numbers.
	const endFallback = getFallbackNumber( endNumber, 'endNumber', 'counter' );

	// Circle, circle stroke and bar size.
	const circleSizeFallback = getFallbackNumber( circleSize, 'circleSize', blockName );
	const circleStrokeSizeFallback = getFallbackNumber( circleStokeSize, 'circleStokeSize', blockName );
	const barSizeFallback = getFallbackNumber( barSize, 'barSize', blockName );

	// Prefix spacing fallbacks.
	const prefixRightDistanceFallback = getFallbackNumber( prefixRightDistance, 'prefixRightDistance', blockName );
	const prefixRightDistanceFallbackTablet = isNaN( prefixRightDistanceTablet )
		? prefixRightDistance
		: prefixRightDistanceTablet;
	const prefixRightDistanceFallbackMobile = isNaN( prefixRightDistanceMobile )
		? prefixRightDistanceTablet
		: prefixRightDistanceMobile;

	// Suffix spacing fallbacks.
	const suffixLeftDistanceFallback = getFallbackNumber( suffixLeftDistance, 'suffixLeftDistance', blockName );
	const suffixLeftDistanceFallbackTablet = isNaN( suffixLeftDistanceTablet )
		? suffixLeftDistance
		: suffixLeftDistanceTablet;
	const suffixLeftDistanceFallbackMobile = isNaN( suffixLeftDistanceMobile )
		? suffixLeftDistanceTablet
		: suffixLeftDistanceMobile;

	// Icon size fallbacks.
	const iconSizeFallback = getFallbackNumber( iconSize, 'iconSize', blockName );
	const iconSizeFallbackTablet = isNaN( iconSizeTablet ) ? iconSize : iconSizeTablet;
	const iconSizeFallbackMobile = isNaN( iconSizeMobile ) ? iconSizeTablet : iconSizeMobile;

	// Image size fallbacks.
	const imageWidthFallback = getFallbackNumber( imageWidth, 'imageWidth', blockName );
	const imageWidthFallbackTablet = isNaN( imageWidthTablet ) ? imageWidthFallback : imageWidthTablet;
	const imageWidthFallbackMobile = isNaN( imageWidthMobile ) ? imageWidthFallbackTablet : imageWidthMobile;

	// Border.
	const iconWrapCSS = generateBorderCSS( attributes, 'iconWrap' );
	const iconWrapCSSTablet = generateBorderCSS( attributes, 'iconWrap', 'tablet' );
	const iconWrapCSSMobile = generateBorderCSS( attributes, 'iconWrap', 'mobile' );

	const circlePos = circleSizeFallback / 2;
	const circleRadius = circlePos - circleStrokeSizeFallback / 2;
	const circleDash = parseFloat( 2 * Math.PI * circleRadius ).toFixed( 2 );

	// Icon-Image Common Padding.
	const iconAndImageSpacing = {
		'padding-top': generateCSSUnit( iconTopPadding, iconPaddingUnit ),
		'padding-right': generateCSSUnit( iconRightPadding, iconPaddingUnit ),
		'padding-bottom': generateCSSUnit( iconBottomPadding, iconPaddingUnit ),
		'padding-left': generateCSSUnit( iconLeftPadding, iconPaddingUnit ),
		'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
		'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
		'margin-bottom': generateCSSUnit( iconBottomMargin, iconMarginUnit ),
		'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
	};

	const iconAndImageSpacingTablet = {
		'padding-top': generateCSSUnit( iconTopPaddingTablet, iconPaddingUnitTablet ),
		'padding-right': generateCSSUnit( iconRightPaddingTablet, iconPaddingUnitTablet ),
		'padding-bottom': generateCSSUnit( iconBottomPaddingTablet, iconPaddingUnitTablet ),
		'padding-left': generateCSSUnit( iconLeftPaddingTablet, iconPaddingUnitTablet ),
		'margin-top': generateCSSUnit( iconTopMarginTablet, iconMarginUnitTablet ),
		'margin-right': generateCSSUnit( iconRightMarginTablet, iconMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( iconBottomMarginTablet, iconMarginUnitTablet ),
		'margin-left': generateCSSUnit( iconLeftMarginTablet, iconMarginUnitTablet ),
	};

	const iconAndImageSpacingMobile = {
		'padding-top': generateCSSUnit( iconTopPaddingMobile, iconPaddingUnitMobile ),
		'padding-right': generateCSSUnit( iconRightPaddingMobile, iconPaddingUnitMobile ),
		'padding-bottom': generateCSSUnit( iconBottomPaddingMobile, iconPaddingUnitMobile ),
		'padding-left': generateCSSUnit( iconLeftPaddingMobile, iconPaddingUnitMobile ),
		'margin-top': generateCSSUnit( iconTopMarginMobile, iconMarginUnitMobile ),
		'margin-right': generateCSSUnit( iconRightMarginMobile, iconMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( iconBottomMarginMobile, iconMarginUnitMobile ),
		'margin-left': generateCSSUnit( iconLeftMarginMobile, iconMarginUnitMobile ),
	};

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let boxShadowPositionCSSHover = boxShadowPositionHover;

	if ( 'outset' === boxShadowPositionHover ) {
		boxShadowPositionCSSHover = '';
	}

	const selectors = {
		'.wp-block-uagb-counter': {
			'text-align': align,
			'margin-top': generateCSSUnit( blockTopMargin, blockMarginUnit ),
			'margin-right': generateCSSUnit( blockRightMargin, blockMarginUnit ),
			'margin-bottom': generateCSSUnit( blockBottomMargin, blockMarginUnit ),
			'margin-left': generateCSSUnit( blockLeftMargin, blockMarginUnit ),
			'padding-top': generateCSSUnit( blockTopPadding, blockPaddingUnit ),
			'padding-right': generateCSSUnit( blockRightPadding, blockPaddingUnit ),
			'padding-bottom': generateCSSUnit( blockBottomPadding, blockPaddingUnit ),
			'padding-left': generateCSSUnit( blockLeftPadding, blockPaddingUnit ),
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__icon': {
			'background-color': iconBackgroundColor,
			...iconAndImageSpacing,
			...iconWrapCSS,
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap': {
			...iconAndImageSpacing,
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap img': {
			...iconWrapCSS,
		},
		'.wp-block-uagb-counter:hover .wp-block-uagb-counter__image-wrap img': {
			'border-color': iconWrapBorderHColor,
		},
		'.wp-block-uagb-counter:hover .wp-block-uagb-counter__icon': {
			'background-color': iconBackgroundHoverColor,
			'border-color': iconWrapBorderHColor,
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__icon svg': {
			'width': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'height': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'fill': iconColor,
		},
		'.wp-block-uagb-counter:hover .wp-block-uagb-counter__icon svg': {
			'fill': iconHoverColor,
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__title': {
			'font-family': headingFontFamily,
			'font-style': headingFontStyle,
			'text-decoration': headingDecoration,
			'text-transform': headingTransform,
			'font-weight': headingFontWeight,
			'font-size': generateCSSUnit( headingFontSize, headingFontSizeType ),
			'line-height': generateCSSUnit( headingLineHeight, headingLineHeightType ),
			'letter-Spacing': generateCSSUnit( headingLetterSpacing, headingLetterSpacingType ),
			'color': headingColor,
			'margin-top': generateCSSUnit( headingTopMargin, headingMarginUnit ),
			'margin-right': generateCSSUnit( headingRightMargin, headingMarginUnit ),
			'margin-bottom': generateCSSUnit( headingBottomMargin, headingMarginUnit ),
			'margin-left': generateCSSUnit( headingLeftMargin, headingMarginUnit ),
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__number': {
			'font-family': numberFontFamily,
			'font-style': numberFontStyle,
			'text-decoration': numberDecoration,
			'text-transform': numberTransform,
			'font-weight': numberFontWeight,
			'font-size': generateCSSUnit( numberFontSize, numberFontSizeType ),
			'line-height': generateCSSUnit( numberLineHeight, numberLineHeightType ),
			'letter-Spacing': generateCSSUnit( numberLetterSpacing, numberLetterSpacingType ),
			'color': numberColor,
			'margin-top': generateCSSUnit( numberTopMargin, numberMarginUnit ),
			'margin-right': generateCSSUnit( numberRightMargin, numberMarginUnit ),
			'margin-bottom': generateCSSUnit( numberBottomMargin, numberMarginUnit ),
			'margin-left': generateCSSUnit( numberLeftMargin, numberMarginUnit ),
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix': {
			'margin-right': generateCSSUnit( prefixRightDistanceFallback, 'px' ),
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix': {
			'margin-left': generateCSSUnit( suffixLeftDistanceFallback, 'px' ),
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container': {
			'max-width': generateCSSUnit( circleSizeFallback, 'px' ),
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg circle': {
			'stroke-width': generateCSSUnit( circleStrokeSizeFallback, 'px' ),
			'stroke': circleBackground,
			'r': generateCSSUnit( circleRadius, 'px' ),
			'cx': generateCSSUnit( circlePos, 'px' ),
			'cy': generateCSSUnit( circlePos, 'px' ),
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg .uagb-counter-circle__progress': {
			'stroke': circleForeground,
			'stroke-dasharray': generateCSSUnit( circleDash, 'px' ),
			'stroke-dashoffset': generateCSSUnit( circleDash, 'px' ),
		},
		'.wp-block-uagb-counter--bars': {
			'flex-direction': barFlip ? 'column-reverse' : 'column',
		},
		'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container': {
			'background': barBackground,
		},
		'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container .wp-block-uagb-counter__number': {
			'height': generateCSSUnit( barSizeFallback, 'px' ),
			'background': barForeground,
			'padding-top': generateCSSUnit( numberTopMargin, numberMarginUnit ),
			'padding-right': generateCSSUnit( numberRightMargin, numberMarginUnit ),
			'padding-bottom': generateCSSUnit( numberBottomMargin, numberMarginUnit ),
			'padding-left': generateCSSUnit( numberLeftMargin, numberMarginUnit ),
		},
	};

	const base_selector = `.editor-styles-wrapper .uagb-block-${ clientId.substr( 0, 8 ) }`;

	const tablet_selectors = {};
	const mobile_selectors = {};

	tablet_selectors[ '.wp-block-uagb-counter' ] = {
		'text-align': alignTablet,
		'margin-top': generateCSSUnit( blockTopMarginTablet, blockMarginUnitTablet ),
		'margin-right': generateCSSUnit( blockRightMarginTablet, blockMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( blockBottomMarginTablet, blockMarginUnitTablet ),
		'margin-left': generateCSSUnit( blockLeftMarginTablet, blockMarginUnitTablet ),
		'padding-top': generateCSSUnit( blockTopPaddingTablet, blockPaddingUnitTablet ),
		'padding-right': generateCSSUnit( blockRightPaddingTablet, blockPaddingUnitTablet ),
		'padding-bottom': generateCSSUnit( blockBottomPaddingTablet, blockPaddingUnitTablet ),
		'padding-left': generateCSSUnit( blockLeftPaddingTablet, blockPaddingUnitTablet ),
	};

	tablet_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__icon' ] = {
		...iconAndImageSpacingTablet,
		...iconWrapCSSTablet,
	};

	tablet_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap' ] = {
		...iconAndImageSpacingTablet,
	};

	tablet_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap img' ] = {
		...iconWrapCSSTablet,
	};

	tablet_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__icon svg' ] = {
		'width': generateCSSUnit( iconSizeFallbackTablet, iconSizeTypeTablet ),
		'height': generateCSSUnit( iconSizeFallbackTablet, iconSizeTypeTablet ),
	};

	tablet_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__title' ] = {
		'font-size': generateCSSUnit( headingFontSizeTablet, headingFontSizeType ),
		'line-height': generateCSSUnit( headingLineHeightTablet, headingLineHeightType ),
		'letter-Spacing': generateCSSUnit( headingLetterSpacingTablet, headingLetterSpacingType ),
		'margin-top': generateCSSUnit( headingTopMarginTablet, headingMarginUnitTablet ),
		'margin-right': generateCSSUnit( headingRightMarginTablet, headingMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( headingBottomMarginTablet, headingMarginUnitTablet ),
		'margin-left': generateCSSUnit( headingLeftMarginTablet, headingMarginUnitTablet ),
	};

	tablet_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__number' ] = {
		'font-size': generateCSSUnit( numberFontSizeTablet, numberFontSizeType ),
		'line-height': generateCSSUnit( numberLineHeightTablet, numberLineHeightType ),
		'letter-Spacing': generateCSSUnit( numberLetterSpacingTablet, numberLetterSpacingType ),
		'margin-top': generateCSSUnit( numberTopMarginTablet, numberMarginUnitTablet ),
		'margin-right': generateCSSUnit( numberRightMarginTablet, numberMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( numberBottomMarginTablet, numberMarginUnitTablet ),
		'margin-left': generateCSSUnit( numberLeftMarginTablet, numberMarginUnitTablet ),
	};

	tablet_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__title' ] = {
		'font-size': generateCSSUnit( headingFontSizeTablet, headingFontSizeType ),
		'line-height': generateCSSUnit( headingLineHeightTablet, headingLineHeightType ),
		'letter-Spacing': generateCSSUnit( headingLetterSpacingTablet, headingLetterSpacingType ),
		'margin-top': generateCSSUnit( headingTopMarginTablet, headingMarginUnitTablet ),
		'margin-right': generateCSSUnit( headingRightMarginTablet, headingMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( headingBottomMarginTablet, headingMarginUnitTablet ),
		'margin-left': generateCSSUnit( headingLeftMarginTablet, headingMarginUnitTablet ),
	};

	tablet_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__number' ] = {
		'font-size': generateCSSUnit( numberFontSizeTablet, numberFontSizeType ),
		'line-height': generateCSSUnit( numberLineHeightTablet, numberLineHeightType ),
		'letter-Spacing': generateCSSUnit( numberLetterSpacingTablet, numberLetterSpacingType ),
		'margin-top': generateCSSUnit( numberTopMarginTablet, numberMarginUnitTablet ),
		'margin-right': generateCSSUnit( numberRightMarginTablet, numberMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( numberBottomMarginTablet, numberMarginUnitTablet ),
		'margin-left': generateCSSUnit( numberLeftMarginTablet, numberMarginUnitTablet ),
	};

	tablet_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix' ] = {
		'margin-right': generateCSSUnit( prefixRightDistanceFallbackTablet, 'px' ),
	};

	tablet_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix' ] = {
		'margin-left': generateCSSUnit( suffixLeftDistanceFallbackTablet, 'px' ),
	};

	tablet_selectors[ '.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container' ] = {
		'padding-top': generateCSSUnit( numberTopMarginTablet, numberMarginUnitTablet ),
		'padding-right': generateCSSUnit( numberRightMarginTablet, numberMarginUnitTablet ),
		'padding-bottom': generateCSSUnit( numberBottomMarginTablet, numberMarginUnitTablet ),
		'padding-left': generateCSSUnit( numberLeftMarginTablet, numberMarginUnitTablet ),
	};

	mobile_selectors[ '.wp-block-uagb-counter' ] = {
		'text-align': alignMobile,
		'margin-top': generateCSSUnit( blockTopMarginMobile, blockMarginUnitMobile ),
		'margin-right': generateCSSUnit( blockRightMarginMobile, blockMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( blockBottomMarginMobile, blockMarginUnitMobile ),
		'margin-left': generateCSSUnit( blockLeftMarginMobile, blockMarginUnitMobile ),
		'padding-top': generateCSSUnit( blockTopPaddingMobile, blockPaddingUnitMobile ),
		'padding-right': generateCSSUnit( blockRightPaddingMobile, blockPaddingUnitMobile ),
		'padding-bottom': generateCSSUnit( blockBottomPaddingMobile, blockPaddingUnitTablet ),
		'padding-left': generateCSSUnit( blockLeftPaddingMobile, blockPaddingUnitMobile ),
	};

	mobile_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__icon' ] = {
		...iconAndImageSpacingMobile,
		...iconWrapCSSMobile,
	};

	mobile_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap' ] = {
		...iconAndImageSpacingMobile,
	};

	mobile_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap img' ] = {
		...iconWrapCSSMobile,
	};

	mobile_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__icon svg' ] = {
		'width': generateCSSUnit( iconSizeFallbackMobile, iconSizeTypeMobile ),
		'height': generateCSSUnit( iconSizeFallbackMobile, iconSizeTypeMobile ),
	};

	mobile_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__title' ] = {
		'font-size': generateCSSUnit( headingFontSizeMobile, headingFontSizeType ),
		'line-height': generateCSSUnit( headingLineHeightMobile, headingLineHeightType ),
		'letter-Spacing': generateCSSUnit( headingLetterSpacingMobile, headingLetterSpacingType ),
		'margin-top': generateCSSUnit( headingTopMarginMobile, headingMarginUnitMobile ),
		'margin-right': generateCSSUnit( headingRightMarginMobile, headingMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( headingBottomMarginMobile, headingMarginUnitMobile ),
		'margin-left': generateCSSUnit( headingLeftMarginMobile, headingMarginUnitMobile ),
	};

	mobile_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__title' ] = {
		'font-size': generateCSSUnit( headingFontSizeMobile, headingFontSizeType ),
		'line-height': generateCSSUnit( headingLineHeightMobile, headingLineHeightType ),
		'letter-Spacing': generateCSSUnit( headingLetterSpacingMobile, headingLetterSpacingType ),
		'margin-top': generateCSSUnit( headingTopMarginMobile, headingMarginUnitMobile ),
		'margin-right': generateCSSUnit( headingRightMarginMobile, headingMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( headingBottomMarginMobile, headingMarginUnitMobile ),
		'margin-left': generateCSSUnit( headingLeftMarginMobile, headingMarginUnitMobile ),
	};

	mobile_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__number' ] = {
		'font-size': generateCSSUnit( numberFontSizeMobile, numberFontSizeType ),
		'line-height': generateCSSUnit( numberLineHeightMobile, numberLineHeightType ),
		'letter-spacing': generateCSSUnit( numberLetterSpacingMobile, numberLetterSpacingType ),
		'margin-top': generateCSSUnit( numberTopMarginMobile, numberMarginUnitMobile ),
		'margin-right': generateCSSUnit( numberRightMarginMobile, numberMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( numberBottomMarginMobile, numberMarginUnitMobile ),
		'margin-left': generateCSSUnit( numberLeftMarginMobile, numberMarginUnitMobile ),
	};

	mobile_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix' ] = {
		'margin-right': generateCSSUnit( prefixRightDistanceFallbackMobile, 'px' ),
	};

	mobile_selectors[ '.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix' ] = {
		'margin-left': generateCSSUnit( suffixLeftDistanceFallbackMobile, 'px' ),
	};

	mobile_selectors[ '.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container' ] = {
		'padding-top': generateCSSUnit( numberTopMarginMobile, numberMarginUnitMobile ),
		'padding-right': generateCSSUnit( numberRightMarginMobile, numberMarginUnitMobile ),
		'padding-bottom': generateCSSUnit( numberBottomMarginMobile, numberMarginUnitMobile ),
		'padding-left': generateCSSUnit( numberLeftMarginMobile, numberMarginUnitMobile ),
	};

	if ( imageWidthType ) {
		// Image
		selectors[ ' .wp-block-uagb-counter__image-wrap .wp-block-uagb-counter__image' ] = {
			'width': generateCSSUnit( imageWidthFallback, imageWidthUnit ),
		};

		tablet_selectors[ ' .wp-block-uagb-counter__image-wrap .wp-block-uagb-counter__image' ] = {
			'width': generateCSSUnit( imageWidthFallbackTablet, imageWidthUnitTablet ),
		};

		mobile_selectors[ ' .wp-block-uagb-counter__image-wrap .wp-block-uagb-counter__image' ] = {
			'width': generateCSSUnit( imageWidthFallbackMobile, imageWidthUnitMobile ),
		};
	}

	// Special styling.

	if ( layout === 'number' && ( iconImgPosition === 'left-number' || iconImgPosition === 'right-number' ) ) {
		selectors[ ' .wp-block-uagb-counter__number' ] = {
			'display': 'flex',
			'align-items': 'center',
			'justify-content': align,
		};

		tablet_selectors[ ' .wp-block-uagb-counter__number' ] = {
			'justify-content': alignTablet,
		};

		mobile_selectors[ ' .wp-block-uagb-counter__number' ] = {
			'justify-content': alignMobile,
		};
	}

	// In case of 'Bar' layout, we need to add padding to number element and remove the margin.
	if ( layout === 'bars' ) {
		const num_container = '.wp-block-uagb-counter .wp-block-uagb-counter__number';

		selectors[ num_container ][ 'margin-top' ] = 'unset';
		selectors[ num_container ][ 'margin-bottom' ] = 'unset';
		selectors[ num_container ][ 'margin-left' ] = 'unset';
		selectors[ num_container ][ 'margin-right' ] = 'unset';

		tablet_selectors[ num_container ][ 'margin-top' ] = 'unset';
		tablet_selectors[ num_container ][ 'margin-bottom' ] = 'unset';
		tablet_selectors[ num_container ][ 'margin-left' ] = 'unset';
		tablet_selectors[ num_container ][ 'margin-right' ] = 'unset';

		mobile_selectors[ num_container ][ 'margin-top' ] = 'unset';
		mobile_selectors[ num_container ][ 'margin-bottom' ] = 'unset';
		mobile_selectors[ num_container ][ 'margin-left' ] = 'unset';
		mobile_selectors[ num_container ][ 'margin-right' ] = 'unset';

		if ( endFallback === 0 ) {
			selectors[ num_container ][ 'padding-left' ] = 'unset';
			selectors[ num_container ][ 'padding-right' ] = 'unset';

			tablet_selectors[ num_container ][ 'padding-left' ] = 'unset';
			tablet_selectors[ num_container ][ 'padding-right' ] = 'unset';

			mobile_selectors[ num_container ][ 'padding-left' ] = 'unset';
			mobile_selectors[ num_container ][ 'padding-right' ] = 'unset';
		}

		const bar_container = '.wp-block-uagb-counter .wp-block-uagb-counter-bars-container';
		const bar_container_hover = '.wp-block-uagb-counter:hover .wp-block-uagb-counter-bars-container';

		selectors[ bar_container ] = {
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

		selectors[ bar_container_hover ] = {
			'box-shadow': '',
		};

		const boxShadowBlurHoverTemp = isNaN( boxShadowBlurHover ) ? '' : boxShadowBlurHover;
		const boxShadowColorHoverTemp = boxShadowColorHover ? boxShadowColorHover : '';

		if ( '' !== boxShadowColorHoverTemp || '' !== boxShadowBlurHoverTemp ) {
			const boxShadowBlurHoverCSSUnit =
				'' === boxShadowBlurHoverTemp ? '' : generateCSSUnit( boxShadowBlurHoverTemp, 'px' );

			selectors[ bar_container_hover ][ 'box-shadow' ] =
				generateCSSUnit( boxShadowHOffsetHover, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffsetHover, 'px' ) +
				' ' +
				boxShadowBlurHoverCSSUnit +
				' ' +
				generateCSSUnit( boxShadowSpreadHover, 'px' ) +
				' ' +
				boxShadowColorHoverTemp +
				' ' +
				boxShadowPositionCSSHover;
		}
	}

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS( tablet_selectors, `${ base_selector }`, true, 'tablet' );

	styling_css += generateCSS( mobile_selectors, `${ base_selector }`, true, 'mobile' );

	return styling_css;
}
