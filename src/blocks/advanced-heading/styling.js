/**
 * Returns Dynamic Generated CSS
 */

import generateBorderCSS from '@Controls/generateBorderCSS';
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import { applyFilters } from '@wordpress/hooks';

function styling( attributes, clientId, name ) {
	const blockName = name.replace( 'uagb/', '' );

	const {
		headingAlign,
		headingAlignTablet,
		headingAlignMobile,
		headingTag,
		headingColor,
		headingColorType,
		headingGradientColor,
		blockBackgroundType,
		blockBackground,
		blockGradientBackground,
		headSpace,
		headSpaceTablet,
		headSpaceMobile,
		seperatorStyle,
		separatorHeight,
		separatorHeightType,
		separatorWidth,
		separatorWidthTablet,
		separatorWidthMobile,
		separatorWidthType,
		separatorColor,
		separatorSpace,
		separatorSpaceTablet,
		separatorSpaceMobile,
		separatorSpaceType,
		subHeadingColor,
		headFontFamily,
		headFontStyle,
		headFontWeight,
		headFontSize,
		headFontSizeType,
		headFontSizeMobile,
		headFontSizeTablet,
		headLineHeight,
		headLineHeightType,
		headLineHeightMobile,
		headLineHeightTablet,
		headLetterSpacing,
		headLetterSpacingTablet,
		headLetterSpacingMobile,
		headLetterSpacingType,
		headShadowColor,
		headShadowHOffset,
		headShadowVOffset,
		headShadowBlur,
		// sub heading
		subHeadFontFamily,
		subHeadFontStyle,
		subHeadFontWeight,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeMobile,
		subHeadFontSizeTablet,
		subHeadLineHeight,
		subHeadLineHeightType,
		subHeadLineHeightMobile,
		subHeadLineHeightTablet,
		headTransform,
		headDecoration,
		subHeadTransform,
		subHeadDecoration,
		subHeadLetterSpacing,
		subHeadLetterSpacingTablet,
		subHeadLetterSpacingMobile,
		subHeadLetterSpacingType,
		// padding
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
		// margin
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
		// link
		linkColor,
		linkHColor,
		// Highlight
		highLightBorderHColor,
		highLightColor,
		highLightBackground,
		highLightFontFamily,
		highLightFontWeight,
		highLightFontStyle,
		highLightTransform,
		highLightDecoration,
		highLightFontSizeType,
		highLightLineHeightType,
		highLightFontSize,
		highLightFontSizeTablet,
		highLightFontSizeMobile,
		highLightLineHeight,
		highLightLineHeightTablet,
		highLightLineHeightMobile,
		highLightLetterSpacing,
		highLightLetterSpacingTablet,
		highLightLetterSpacingMobile,
		highLightLetterSpacingType,
		highLightTopPadding,
		highLightRightPadding,
		highLightLeftPadding,
		highLightBottomPadding,
		highLightTopPaddingTablet,
		highLightRightPaddingTablet,
		highLightLeftPaddingTablet,
		highLightBottomPaddingTablet,
		highLightTopPaddingMobile,
		highLightRightPaddingMobile,
		highLightLeftPaddingMobile,
		highLightBottomPaddingMobile,
		highLightPaddingUnit,
		highLightPaddingUnitTablet,
		highLightPaddingUnitMobile,
		subHeadSpace,
		subHeadSpaceTablet,
		subHeadSpaceMobile,
		headingDescToggle
	} = attributes;

	let tablet_selectors = {};
	let mobile_selectors = {};

	let gradientLinkColor = {};
	let gradientLinkHoverColor = {};
	if ( 'gradient' === headingColorType ) {
		gradientLinkColor = {
			'-webkit-text-fill-color': linkColor,
		};
		gradientLinkHoverColor = {
			'-webkit-text-fill-color': linkHColor,
		};
	}

	const highLightBorderCSS = generateBorderCSS( attributes, 'highLight' );
	const highLightBorderCSSTablet = generateBorderCSS( attributes, 'highLight', 'tablet' );
	const highLightBorderCSSMobile = generateBorderCSS( attributes, 'highLight', 'mobile' );

	let selectors = {
		'.wp-block-uagb-advanced-heading ': {
			'background': 'classic' === blockBackgroundType ? blockBackground : blockGradientBackground,
			'text-align': headingAlign,
			'margin-top': generateCSSUnit( blockTopMargin, blockMarginUnit ),
			'margin-right': generateCSSUnit( blockRightMargin, blockMarginUnit ),
			'margin-bottom': generateCSSUnit( blockBottomMargin, blockMarginUnit ),
			'margin-left': generateCSSUnit( blockLeftMargin, blockMarginUnit ),
			'padding-top': generateCSSUnit( blockTopPadding, blockPaddingUnit ),
			'padding-right': generateCSSUnit( blockRightPadding, blockPaddingUnit ),
			'padding-bottom': generateCSSUnit( blockBottomPadding, blockPaddingUnit ),
			'padding-left': generateCSSUnit( blockLeftPadding, blockPaddingUnit ),
		},
		' p.uagb-desc-text': {
			'margin': 0,
			'font-family': subHeadFontFamily,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'font-weight': subHeadFontWeight,
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacing, subHeadLetterSpacingType ),
			'color': subHeadingColor,
			'margin-bottom': generateCSSUnit( getFallbackNumber( subHeadSpace, 'subHeadSpace', blockName ), 'px' ),
		},
		'.wp-block-uagb-advanced-heading a': {
			'color': linkColor,
			...gradientLinkColor,
		},
		'.wp-block-uagb-advanced-heading a:hover': {
			'color': linkHColor,
			...gradientLinkHoverColor,
		},
		'.wp-block-uagb-advanced-heading .uagb-highlight': {
			'background': highLightBackground,
			'color': highLightColor,
			'-webkit-text-fill-color': highLightColor,
			'font-family': highLightFontFamily,
			'font-style': highLightFontStyle,
			'text-decoration': highLightDecoration,
			'text-transform': highLightTransform,
			'font-weight': highLightFontWeight,
			'font-size': generateCSSUnit( highLightFontSize, highLightFontSizeType ),
			'line-height': generateCSSUnit( highLightLineHeight, highLightLineHeightType ),
			'letter-spacing': generateCSSUnit( highLightLetterSpacing, highLightLetterSpacingType ),
			'padding-top': generateCSSUnit( highLightTopPadding, highLightPaddingUnit ),
			'padding-right': generateCSSUnit( highLightRightPadding, highLightPaddingUnit ),
			'padding-bottom': generateCSSUnit( highLightBottomPadding, highLightPaddingUnit ),
			'padding-left': generateCSSUnit( highLightLeftPadding, highLightPaddingUnit ),
			...highLightBorderCSS,
		},
		'.wp-block-uagb-advanced-heading .uagb-highlight:hover': {
			'border-color': highLightBorderHColor,
		},
	};

	// gradient text color
	let headingGradientStyle = {};
	if ( 'gradient' === headingColorType ) {
		headingGradientStyle = {
			'background': headingGradientColor,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
		};
	}

	// Text Selection & highlight
	const highlightSelectionText = {
		'color': highLightColor,
		'background': highLightBackground,
		'-webkit-text-fill-color': highLightColor,
	};
	selectors[ '.wp-block-uagb-advanced-heading .uagb-highlight::-moz-selection' ] = highlightSelectionText;
	selectors[ '.wp-block-uagb-advanced-heading .uagb-highlight::selection' ] = highlightSelectionText;

	// heading
	selectors[ ' ' + headingTag + '.uagb-heading-text' ] = {
		'font-family': headFontFamily,
		'font-style': headFontStyle,
		'text-decoration': headDecoration,
		'text-transform': headTransform,
		'font-weight': headFontWeight,
		'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
		'line-height': generateCSSUnit( headLineHeight, headLineHeightType ),
		'color': headingColor,
		'letter-spacing': generateCSSUnit( headLetterSpacing, headLetterSpacingType ),
		...headingGradientStyle,
	};

	const headingTextShadow =
		headShadowColor &&
		generateCSSUnit( headShadowHOffset, 'px' ) +
			' ' +
			generateCSSUnit( headShadowVOffset, 'px' ) +
			' ' +
			generateCSSUnit( headShadowBlur, 'px' ) +
			' ' +
			headShadowColor;

	// Text Shadow conditional CSS as per Color Type of Heading.
	if ( 'gradient' === headingColorType ) {
		selectors[ ' ' + headingTag + '.uagb-heading-text' ].filter = `drop-shadow(${ headingTextShadow })`;
	} else {
		selectors[ ' ' + headingTag + '.uagb-heading-text' ][ 'text-shadow' ] = headingTextShadow;
	}

	// separator
	if ( seperatorStyle !== 'none' ) {
		selectors[ ' .uagb-separator' ] = {
			'border-top-style': seperatorStyle,
			'border-top-width': generateCSSUnit(
				getFallbackNumber( separatorHeight, 'separatorHeight', blockName ),
				separatorHeightType
			),
			'width': generateCSSUnit(
				getFallbackNumber( separatorWidth, 'separatorWidth', blockName ),
				separatorWidthType
			),
			'border-color': separatorColor,
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( separatorSpace, 'separatorSpace', blockName ),
				separatorSpaceType
			),
		};
	}

	// tablet
	tablet_selectors[ '.wp-block-uagb-advanced-heading ' ] = {
		'text-align': headingAlignTablet,
		'margin-top': generateCSSUnit( blockTopMarginTablet, blockMarginUnitTablet ),
		'margin-right': generateCSSUnit( blockRightMarginTablet, blockMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( blockBottomMarginTablet, blockMarginUnitTablet ),
		'margin-left': generateCSSUnit( blockLeftMarginTablet, blockMarginUnitTablet ),
		'padding-top': generateCSSUnit( blockTopPaddingTablet, blockPaddingUnitTablet ),
		'padding-right': generateCSSUnit( blockRightPaddingTablet, blockPaddingUnitTablet ),
		'padding-bottom': generateCSSUnit( blockBottomPaddingTablet, blockPaddingUnitTablet ),
		'padding-left': generateCSSUnit( blockLeftPaddingTablet, blockPaddingUnitTablet ),
	};

	tablet_selectors[ ' ' + headingTag + '.uagb-heading-text' ] = {
		'font-size': generateCSSUnit( headFontSizeTablet, headFontSizeType ),
		'line-height': generateCSSUnit( headLineHeightTablet, headLineHeightType ),
		'letter-spacing': generateCSSUnit( headLetterSpacingTablet, headLetterSpacingType ),
	};
	tablet_selectors[ ' p.uagb-desc-text' ] = {
		'font-size': generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeType ),
		'line-height': generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
		'letter-spacing': generateCSSUnit( subHeadLetterSpacingTablet, subHeadLetterSpacingType ),
		'margin-bottom': generateCSSUnit(
			getFallbackNumber( subHeadSpaceTablet, 'subHeadSpaceTablet', blockName ),
			'px'
		),
	};
	tablet_selectors[ '.wp-block-uagb-advanced-heading .uagb-highlight' ] = {
		'font-size': generateCSSUnit( highLightFontSizeTablet, highLightFontSizeType ),
		'line-height': generateCSSUnit( highLightLineHeightTablet, highLightLineHeightType ),
		'letter-spacing': generateCSSUnit( highLightLetterSpacingTablet, highLightLetterSpacingType ),
		'padding-top': generateCSSUnit( highLightTopPaddingTablet, highLightPaddingUnitTablet ),
		'padding-right': generateCSSUnit( highLightRightPaddingTablet, highLightPaddingUnitTablet ),
		'padding-bottom': generateCSSUnit( highLightBottomPaddingTablet, highLightPaddingUnitTablet ),
		'padding-left': generateCSSUnit( highLightLeftPaddingTablet, highLightPaddingUnitTablet ),
		...highLightBorderCSSTablet,
	};
	// mobile
	mobile_selectors[ '.wp-block-uagb-advanced-heading ' ] = {
		'text-align': headingAlignMobile,
		'margin-top': generateCSSUnit( blockTopMarginMobile, blockMarginUnitMobile ),
		'margin-right': generateCSSUnit( blockRightMarginMobile, blockMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( blockBottomMarginMobile, blockMarginUnitMobile ),
		'margin-left': generateCSSUnit( blockLeftMarginMobile, blockMarginUnitMobile ),
		'padding-top': generateCSSUnit( blockTopPaddingMobile, blockPaddingUnitMobile ),
		'padding-right': generateCSSUnit( blockRightPaddingMobile, blockPaddingUnitMobile ),
		'padding-bottom': generateCSSUnit( blockBottomPaddingMobile, blockPaddingUnitMobile ),
		'padding-left': generateCSSUnit( blockLeftPaddingMobile, blockPaddingUnitMobile ),
	};
	tablet_selectors[ ' .uagb-separator' ] = {
		'width': generateCSSUnit(
			getFallbackNumber( separatorWidthTablet, 'separatorWidthTablet', blockName ),
			separatorWidthType
		),
		'margin-bottom': generateCSSUnit(
			getFallbackNumber( separatorSpaceTablet, 'separatorSpaceTablet', blockName ),
			separatorSpaceType
		),
	};

	mobile_selectors[ ' ' + headingTag + '.uagb-heading-text' ] = {
		'font-size': generateCSSUnit( headFontSizeMobile, headFontSizeType ),
		'line-height': generateCSSUnit( headLineHeightMobile, headLineHeightType ),
		'letter-spacing': generateCSSUnit( headLetterSpacingMobile, headLetterSpacingType ),
	};
	mobile_selectors[ ' p.uagb-desc-text' ] = {
		'font-size': generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeType ),
		'line-height': generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
		'letter-spacing': generateCSSUnit( subHeadLetterSpacingMobile, subHeadLetterSpacingType ),
		'margin-bottom': generateCSSUnit(
			getFallbackNumber( subHeadSpaceMobile, 'subHeadSpaceMobile', blockName ),
			'px'
		),
	};
	mobile_selectors[ '.wp-block-uagb-advanced-heading .uagb-highlight' ] = {
		'font-size': generateCSSUnit( highLightFontSizeMobile, highLightFontSizeType ),
		'line-height': generateCSSUnit( highLightLineHeightMobile, highLightLineHeightType ),
		'letter-spacing': generateCSSUnit( highLightLetterSpacingMobile, highLightLetterSpacingType ),
		'padding-top': generateCSSUnit( highLightTopPaddingMobile, highLightPaddingUnitMobile ),
		'padding-right': generateCSSUnit( highLightRightPaddingMobile, highLightPaddingUnitMobile ),
		'padding-bottom': generateCSSUnit( highLightBottomPaddingMobile, highLightPaddingUnitMobile ),
		'padding-left': generateCSSUnit( highLightLeftPaddingMobile, highLightPaddingUnitMobile ),
		...highLightBorderCSSMobile,
	};
	mobile_selectors[ ' .uagb-separator' ] = {
		'width': generateCSSUnit(
			getFallbackNumber( separatorWidthMobile, 'separatorWidthMobile', blockName ),
			separatorWidthType
		),
		'margin-bottom': generateCSSUnit(
			getFallbackNumber( separatorSpaceMobile, 'separatorSpaceMobile', blockName ),
			separatorSpaceType
		),
	};

	if( headingDescToggle || 'none' !== seperatorStyle ) {
		selectors[ ' .uagb-heading-text' ] ={ 
			'margin-bottom': generateCSSUnit( getFallbackNumber( headSpace, 'headSpace', blockName ), 'px' ),
		};
		tablet_selectors[ ' .uagb-heading-text' ] = {
			'margin-bottom': generateCSSUnit( getFallbackNumber( headSpaceTablet, 'headSpaceTablet', blockName ), 'px' ),
		};
		mobile_selectors[ ' .uagb-heading-text' ] = {
			'margin-bottom': generateCSSUnit( getFallbackNumber( headSpaceMobile, 'headSpaceMobile', blockName ), 'px' ),
		};
	}
	const base_selector = `.editor-styles-wrapper #block-${ clientId } .uagb-block-${ clientId.substr( 0, 8 ) }`;

	selectors = applyFilters( `spectra.${ blockName }.styling`, selectors, attributes );
	tablet_selectors = applyFilters( `spectra.${ blockName }.tabletStyling`, tablet_selectors, attributes );
	mobile_selectors = applyFilters( `spectra.${ blockName }.mobileStyling`, mobile_selectors, attributes );

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS( tablet_selectors, `${ base_selector }`, true, 'tablet' );

	styling_css += generateCSS( mobile_selectors, `${ base_selector }`, true, 'mobile' );
	return styling_css;
}

export default styling;
