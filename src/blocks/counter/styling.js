/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';




export default function styling( props ) {
	const {attributes} = props
	const {
		startNumber,
		endNumber,
		totalNumber,
		numberType,
		numberPrefix,
		numberSuffix,
		animationDuration,
		thousandSeparator,
		layout,
		// heading
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
		// Number
		numberLoadGoogleFonts,
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
		numberMarginLink,
		// prefix
		prefixRightDistance,
		suffixLeftDistance,
		// circle
		circleSize,
		circleStokeSize,
		circleForeground,
		circleBackground,
		// bar
		barSize,
		barForeground,
		barBackground
	} = attributes;

	const selectors = {
		'.wp-block-uagb-counter .wp-block-uagb-counter__title':{
			'font-family': headingFontFamily,
			'font-style' : headingFontStyle,
			'text-decoration': headingDecoration,
			'text-transform': headingTransform,
			'font-weight': headingFontWeight,
			'font-size': generateCSSUnit(
				headingFontSize,
				headingFontSizeType
			),
			'line-height': generateCSSUnit(
				headingLineHeight,
				headingLineHeightType
			),
			'color': headingColor,
			'margin-top': generateCSSUnit(
				headingTopMargin,
				headingMarginUnit
			),
			'margin-right': generateCSSUnit(
				headingRightMargin,
				headingMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				headingBottomMargin,
				headingMarginUnit
			),
			'margin-left': generateCSSUnit(
				headingLeftMargin,
				headingMarginUnit
			),
		},
	}



	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	const tablet_selectors = {};
	const mobile_selectors = {};

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title'] = {
        'font-size': generateCSSUnit(
            headingFontSizeTablet,
            headingFontSizeType
        ),
        'line-height': generateCSSUnit(
            headingLineHeightTablet,
            headingLineHeightType
        ),
		'margin-top': generateCSSUnit(
			headingTopMarginTablet,
			headingMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			headingRightMarginTablet,
			headingMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			headingBottomMarginTablet,
			headingMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			headingLeftMarginTablet,
			headingMarginUnitTablet
		),
    }



	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title'] = {
        'font-size': generateCSSUnit(
            headingFontSizeMobile,
            headingFontSizeType
        ),
        'line-height': generateCSSUnit(
            headingLineHeightMobile,
            headingLineHeightType
        ),
		'margin-top': generateCSSUnit(
			headingTopMarginMobile,
			headingMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			headingRightMarginMobile,
			headingMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			headingBottomMarginMobile,
			headingMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			headingLeftMarginMobile,
			headingMarginUnitMobile
		),
    }

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
