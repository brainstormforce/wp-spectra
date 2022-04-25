/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		headingAlign,
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
		separatorWidth,
		separatorWidthTablet,
		separatorWidthMobile,
		separatorWidthType,
		separatorColor,
		separatorSpace,
		separatorSpaceTablet,
		separatorSpaceMobile,
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
		headingBlockTopPadding,
		headingBlockRightPadding,
		headingBlockLeftPadding,
		headingBlockBottomPadding,
		headingBlockTopPaddingTablet,
		headingBlockRightPaddingTablet,
		headingBlockLeftPaddingTablet,
		headingBlockBottomPaddingTablet,
		headingBlockTopPaddingMobile,
		headingBlockRightPaddingMobile,
		headingBlockLeftPaddingMobile,
		headingBlockBottomPaddingMobile,
		headingBlockPaddingUnit,
		headingBlockPaddingUnitTablet,
		headingBlockPaddingUnitMobile,
		// margin
		headingBlockTopMargin,
		headingBlockRightMargin,
		headingBlockLeftMargin,
		headingBlockBottomMargin,
		headingBlockTopMarginTablet,
		headingBlockRightMarginTablet,
		headingBlockLeftMarginTablet,
		headingBlockBottomMarginTablet,
		headingBlockTopMarginMobile,
		headingBlockRightMarginMobile,
		headingBlockLeftMarginMobile,
		headingBlockBottomMarginMobile,
		headingBlockMarginUnit,
		headingBlockMarginUnitTablet,
		headingBlockMarginUnitMobile,
		// link
		linkColor,
		linkHColor,
		// Highlight
		highLightColor,
		highLightBackground,
		highLightBorderWidth,
		highLightBorderRadius,
		highLightBorderStyle,
		highLightBorderColor,
		highLightBorderHColor,
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
	} = props.attributes;

	const tablet_selectors = {};
	const mobile_selectors = {};

	const selectors = {
		'.wp-block-uagb-advanced-heading ':{
			'background': 	'classic' === blockBackgroundType ? blockBackground : blockGradientBackground,
			'text-align': headingAlign,
			'margin-top': generateCSSUnit(
				headingBlockTopMargin,
				headingBlockMarginUnit
			),
			'margin-right': generateCSSUnit(
				headingBlockRightMargin,
				headingBlockMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				headingBlockBottomMargin,
				headingBlockMarginUnit
			),
			'margin-left': generateCSSUnit(
				headingBlockLeftMargin,
				headingBlockMarginUnit
			),
			'padding-top': generateCSSUnit(
				headingBlockTopPadding,
				headingBlockPaddingUnit
			),
			'padding-right': generateCSSUnit(
				headingBlockRightPadding,
				headingBlockPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				headingBlockBottomPadding,
				headingBlockPaddingUnit
			),
			'padding-left': generateCSSUnit(
				headingBlockLeftPadding,
				headingBlockPaddingUnit
			),
		},
		' .uagb-desc-text': {
			'margin': 0,
			'font-family': subHeadFontFamily,
			'font-style' : subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'font-weight': subHeadFontWeight,
			'font-size': generateCSSUnit(
				subHeadFontSize,
				subHeadFontSizeType
			),
			'line-height': generateCSSUnit(
				subHeadLineHeight,
				subHeadLineHeightType
			),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacing, subHeadLetterSpacingType ),
			'color': subHeadingColor,
		},
		'.wp-block-uagb-advanced-heading a': {
			'color': linkColor,
		},
		'.wp-block-uagb-advanced-heading a:hover': {
			'color': linkHColor,
		},
		'.wp-block-uagb-advanced-heading .uagb-highlight': {
			'background': highLightBackground,
			'color': highLightColor,
			'font-family': highLightFontFamily,
			'font-style' : highLightFontStyle,
			'text-decoration': highLightDecoration,
			'text-transform': highLightTransform,
			'font-weight': highLightFontWeight,
			'font-size': generateCSSUnit( highLightFontSize, highLightFontSizeType ),
			'line-height': generateCSSUnit( highLightLineHeight, highLightLineHeightType ),
			'letter-spacing': generateCSSUnit( highLightLetterSpacing, highLightLetterSpacingType ),
			'border-style': highLightBorderStyle,
			'border-width': generateCSSUnit( highLightBorderWidth, 'px' ),
			'border-color': highLightBorderColor,
			'border-radius': generateCSSUnit( highLightBorderRadius, 'px' ),
			'padding-top': generateCSSUnit(
				highLightTopPadding,
				highLightPaddingUnit
			),
			'padding-right': generateCSSUnit(
				highLightRightPadding,
				highLightPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				highLightBottomPadding,
				highLightPaddingUnit
			),
			'padding-left': generateCSSUnit(
				highLightLeftPadding,
				highLightPaddingUnit
			),
		},
		'.wp-block-uagb-advanced-heading .uagb-highlight:hover': {
			'border-color': highLightBorderHColor,
		}
	};

	// gradient text color
	let headingGradientStyle  = {}
	if( 'gradient' === headingColorType ){
		headingGradientStyle =  {
			'background': headingGradientColor,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent'
		}
	}

	selectors[ ' ' + headingTag + '.uagb-heading-text' ] = {
		'font-family': headFontFamily,
		'font-style' : headFontStyle,
		'text-decoration': headDecoration,
		'text-transform': headTransform,
		'font-weight': headFontWeight,
		'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
		'line-height': generateCSSUnit( headLineHeight, headLineHeightType ),
		'color': headingColor,
		'margin-bottom': generateCSSUnit( headSpace, 'px' ),
		'letter-spacing': generateCSSUnit( headLetterSpacing, headLetterSpacingType ),
		'text-shadow': headShadowColor && generateCSSUnit( headShadowHOffset, 'px' ) + ' ' + generateCSSUnit( headShadowVOffset, 'px' ) + ' ' + generateCSSUnit( headShadowBlur, 'px' ) + ' ' +  headShadowColor,
		...headingGradientStyle
	};


	if ( seperatorStyle !== 'none' ) {
		selectors[ ' .uagb-separator' ] = {
			'border-top-style': seperatorStyle,
			'border-top-width': generateCSSUnit( separatorHeight, 'px' ),
			'width': generateCSSUnit( separatorWidth, separatorWidthType ),
			'border-color': separatorColor,
			'margin-bottom': generateCSSUnit( separatorSpace, 'px' ),
		};
	}


	// tablet
	tablet_selectors['.wp-block-uagb-advanced-heading '] = {
		'margin-top': generateCSSUnit(
			headingBlockTopMarginTablet,
			headingBlockMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			headingBlockRightMarginTablet,
			headingBlockMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			headingBlockBottomMarginTablet,
			headingBlockMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			headingBlockLeftMarginTablet,
			headingBlockMarginUnitTablet
		),
		'padding-top': generateCSSUnit(
			headingBlockTopPaddingTablet,
			headingBlockPaddingUnitTablet
		),
		'padding-right': generateCSSUnit(
			headingBlockRightPaddingTablet,
			headingBlockPaddingUnitTablet
		),
		'padding-bottom': generateCSSUnit(
			headingBlockBottomPaddingTablet,
			headingBlockPaddingUnitTablet
		),
		'padding-left': generateCSSUnit(
			headingBlockLeftPaddingTablet,
			headingBlockPaddingUnitTablet
		),
	}

	tablet_selectors[ ' ' + headingTag + '.uagb-heading-text' ] = {
		'font-size': generateCSSUnit( headFontSizeTablet, headFontSizeType ),
		'line-height': generateCSSUnit(
			headLineHeightTablet,
			headLineHeightType
		),
		'letter-spacing': generateCSSUnit( headLetterSpacingTablet, headLetterSpacingType ),
		'margin-bottom': generateCSSUnit( headSpaceTablet, 'px' ),
	};
	tablet_selectors[ ' .uagb-desc-text' ] = {
		'font-size': generateCSSUnit(
			subHeadFontSizeTablet,
			subHeadFontSizeType
		),
		'line-height': generateCSSUnit(
			subHeadLineHeightTablet,
			subHeadLineHeightType
		),
		'letter-spacing': generateCSSUnit( subHeadLetterSpacingTablet, subHeadLetterSpacingType ),
	};
	tablet_selectors[ '.wp-block-uagb-advanced-heading .uagb-highlight' ] = {
		'font-size': generateCSSUnit(
			highLightFontSizeTablet,
			highLightFontSizeType
		),
		'line-height': generateCSSUnit(
			highLightLineHeightTablet,
			highLightLineHeightType
		),
		'letter-spacing': generateCSSUnit( highLightLetterSpacingTablet, highLightLetterSpacingType ),
		'padding-top': generateCSSUnit(
			highLightTopPaddingTablet,
			highLightPaddingUnitTablet
		),
		'padding-right': generateCSSUnit(
			highLightRightPaddingTablet,
			highLightPaddingUnitTablet
		),
		'padding-bottom': generateCSSUnit(
			highLightBottomPaddingTablet,
			highLightPaddingUnitTablet
		),
		'padding-left': generateCSSUnit(
			highLightLeftPaddingTablet,
			highLightPaddingUnitTablet
		),
	};
	// mobile
	mobile_selectors['.wp-block-uagb-advanced-heading '] = {
		'margin-top': generateCSSUnit(
			headingBlockTopMarginMobile,
			headingBlockMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			headingBlockRightMarginMobile,
			headingBlockMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			headingBlockBottomMarginMobile,
			headingBlockMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			headingBlockLeftMarginMobile,
			headingBlockMarginUnitMobile
		),
		'padding-top': generateCSSUnit(
			headingBlockTopPaddingMobile,
			headingBlockPaddingUnitMobile
		),
		'padding-right': generateCSSUnit(
			headingBlockRightPaddingMobile,
			headingBlockPaddingUnitMobile
		),
		'padding-bottom': generateCSSUnit(
			headingBlockBottomPaddingMobile,
			headingBlockPaddingUnitMobile
		),
		'padding-left': generateCSSUnit(
			headingBlockLeftPaddingMobile,
			headingBlockPaddingUnitMobile
		),
	}
	tablet_selectors[ ' .uagb-separator' ] = {
		'width': generateCSSUnit( separatorWidthTablet, separatorWidthType ),
		'margin-bottom': generateCSSUnit( separatorSpaceTablet, 'px' ),
	};

	mobile_selectors[ ' ' + headingTag + '.uagb-heading-text' ] = {
		'font-size': generateCSSUnit( headFontSizeMobile, headFontSizeType ),
		'line-height': generateCSSUnit(
			headLineHeightMobile,
			headLineHeightType
		),
		'letter-spacing': generateCSSUnit( headLetterSpacingMobile, headLetterSpacingType ),
		'margin-bottom': generateCSSUnit( headSpaceMobile, 'px' ),
	};
	mobile_selectors[ ' .uagb-desc-text' ] = {
		'font-size': generateCSSUnit(
			subHeadFontSizeMobile,
			subHeadFontSizeType
		),
		'line-height': generateCSSUnit(
			subHeadLineHeightMobile,
			subHeadLineHeightType
		),
		'letter-spacing': generateCSSUnit( subHeadLetterSpacingMobile, subHeadLetterSpacingType ),
	};
	mobile_selectors[ '.wp-block-uagb-advanced-heading .uagb-highlight' ] = {
		'font-size': generateCSSUnit(
			highLightFontSizeMobile,
			highLightFontSizeType
		),
		'line-height': generateCSSUnit(
			highLightLineHeightMobile,
			highLightLineHeightType
		),
		'letter-spacing': generateCSSUnit( highLightLetterSpacingMobile, highLightLetterSpacingType ),
		'padding-top': generateCSSUnit(
			highLightTopPaddingMobile,
			highLightPaddingUnitMobile
		),
		'padding-right': generateCSSUnit(
			highLightRightPaddingMobile,
			highLightPaddingUnitMobile
		),
		'padding-bottom': generateCSSUnit(
			highLightBottomPaddingMobile,
			highLightPaddingUnitMobile
		),
		'padding-left': generateCSSUnit(
			highLightLeftPaddingMobile,
			highLightPaddingUnitMobile
		),
	};
	mobile_selectors[ ' .uagb-separator' ] = {
		'width': generateCSSUnit( separatorWidthMobile, separatorWidthType ),
		'margin-bottom': generateCSSUnit( separatorSpaceMobile, 'px' ),
	};

	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS(
		tablet_selectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobile_selectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return styling_css;
}

export default styling;
