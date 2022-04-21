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
		headSpace,
		seperatorStyle,
		separatorHeight,
		separatorWidth,
		separatorWidthType,
		separatorColor,
		separatorSpace,
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
		linkHColor
	} = props.attributes;

	const tablet_selectors = {};
	const mobile_selectors = {};

	const selectors = {
		'.wp-block-uagb-advanced-heading ':{
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
		}
	};

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
		'text-shadow': generateCSSUnit( headShadowHOffset, 'px' ) + ' ' + generateCSSUnit( headShadowVOffset, 'px' ) + ' ' + generateCSSUnit( headShadowBlur, 'px' ) + ' ' +  headShadowColor
	};

	// gradient text color
	if('gradient' === headingColorType){
		selectors[ ' ' + headingTag + '.uagb-heading-text' ] =  {
			'background': headingGradientColor,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent'
		}
	}


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
	mobile_selectors[ ' ' + headingTag + '.uagb-heading-text' ] = {
		'font-size': generateCSSUnit( headFontSizeMobile, headFontSizeType ),
		'line-height': generateCSSUnit(
			headLineHeightMobile,
			headLineHeightType
		),
		'letter-spacing': generateCSSUnit( headLetterSpacingMobile, headLetterSpacingType ),
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
