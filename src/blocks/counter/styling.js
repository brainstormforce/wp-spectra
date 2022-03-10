/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';




export default function styling( props ) {
	const {attributes} = props
	const {
		align,
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
		'.wp-block-uagb-counter':{
			'text-align': align
		},
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
		'.wp-block-uagb-counter .wp-block-uagb-counter__number': {
			'font-family': numberFontFamily,
			'font-style' : numberFontStyle,
			'text-decoration': numberDecoration,
			'text-transform': numberTransform,
			'font-weight': numberFontWeight,
			'font-size': generateCSSUnit(
				numberFontSize,
				numberFontSizeType
			),
			'line-height': generateCSSUnit(
				numberLineHeight,
				numberLineHeightType
			),
			'color': numberColor,
			'margin-top': generateCSSUnit(
				numberTopMargin,
				numberMarginUnit
			),
			'margin-right': generateCSSUnit(
				numberRightMargin,
				numberMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				numberBottomMargin,
				numberMarginUnit
			),
			'margin-left': generateCSSUnit(
				numberLeftMargin,
				numberMarginUnit
			),
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix': {
			'margin-right': generateCSSUnit(
				prefixRightDistance,
				'px'
			)
		},
		'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix': {
			'margin-left': generateCSSUnit(
				suffixLeftDistance,
				'px'
			)
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container': {
			'width': generateCSSUnit( circleSize, 'px' ),
			'height': generateCSSUnit( circleSize, 'px' )
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg circle': {
			'stroke-width': generateCSSUnit( circleStokeSize, 'px' ),
			'stroke': circleForeground,
		},
		'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg #bar': {
			'stroke': circleBackground
		},
		'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container': {
			'background': barForeground,
		},
		'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container .wp-block-uagb-counter__number': {
			'height': generateCSSUnit( barSize, 'px' ),
			'background': barBackground,
		}
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

	tablet_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number'] = {
		'font-size': generateCSSUnit(
			numberFontSizeTablet,
			numberFontSizeType
		),
		'line-height': generateCSSUnit(
			numberLineHeightTablet,
			numberLineHeightType
		),
		'margin-top': generateCSSUnit(
			numberTopMarginTablet,
			numberMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			numberRightMarginTablet,
			numberMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			numberBottomMarginTablet,
			numberMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			numberLeftMarginTablet,
			numberMarginUnitTablet
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

	mobile_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number'] = {
		'font-size': generateCSSUnit(
			numberFontSizeMobile,
			numberFontSizeType
		),
		'line-height': generateCSSUnit(
			numberLineHeightMobile,
			numberLineHeightType
		),
		'margin-top': generateCSSUnit(
			numberTopMarginMobile,
			numberMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			numberRightMarginMobile,
			numberMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			numberBottomMarginMobile,
			numberMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			numberLeftMarginMobile,
			numberMarginUnitMobile
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
