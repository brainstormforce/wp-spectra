/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';




export default function styling( props ) {
	const {
		// image
		imageTopMargin,
		imageRightMargin,
		imageLeftMargin,
		imageBottomMargin,
		imageTopMarginTablet,
		imageRightMarginTablet,
		imageLeftMarginTablet,
		imageBottomMarginTablet,
		imageTopMarginMobile,
		imageRightMarginMobile,
		imageLeftMarginMobile,
		imageBottomMarginMobile,
		imageMarginUnit,
		imageMarginUnitTablet,
		imageMarginUnitMobile,
		// cpation
		captionShowOn,
		captionAlign,
		captionFontFamily,
		captionFontWeight,
		captionFontStyle,
		captionFontSize,
		captionColor,
		captionTransform,
		captionDecoration,
		captionFontSizeType,
		captionFontSizeMobile,
		captionFontSizeTablet,
		captionLineHeight,
		captionLineHeightType,
		captionLineHeightMobile,
		captionLineHeightTablet,
		captionTopMargin,
		captionRightMargin,
		captionLeftMargin,
		captionBottomMargin,
		captionTopMarginTablet,
		captionRightMarginTablet,
		captionLeftMarginTablet,
		captionBottomMarginTablet,
		captionTopMarginMobile,
		captionRightMarginMobile,
		captionLeftMarginMobile,
		captionBottomMarginMobile,
		captionMarginUnit,
		captionMarginUnitTablet,
		captionMarginUnitMobile,
		// heading
		headingShowOn,
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
		// overlay
		overlayOpacity,
		overlayHoverOpacity,
		overlayPositionFromEdge,
		overlayPositionFromEdgeUnit,
		overlayBackground,
		overlayBorderStyle,
		overlayBorderWidth,
		overlayBorderRadius,
		overlayBorderColor,
		overlayBorderHoverColor,
		// seperator
		seperatorShowOn,
		seperatorStyle,
		seperatorWidth,
		separatorWidthType,
		seperatorThickness,
		seperatorThicknessUnit,
		seperatorColor,
		seperatorTopMargin,
		seperatorRightMargin,
		seperatorLeftMargin,
		seperatorBottomMargin,
		seperatorTopMarginTablet,
		seperatorRightMarginTablet,
		seperatorLeftMarginTablet,
		seperatorBottomMarginTablet,
		seperatorTopMarginMobile,
		seperatorRightMarginMobile,
		seperatorLeftMarginMobile,
		seperatorBottomMarginMobile,
		seperatorMarginUnit,
		seperatorMarginUnitTablet,
		seperatorMarginUnitMobile,
		// border
		imageBorderWidth,
		imageBorderStyle,
		imageBorderRadius,
		imageBorderColor,
		imageBorderhoverColor,
		// shadow
		imageBoxShadowColor,
		imageBoxShadowHOffset,
		imageBoxShadowVOffset,
		imageBoxShadowBlur,
		imageBoxShadowSpread,
		imageBoxShadowPosition,
		// mask
		maskShape,
		maskCustomShape,
		maskSize,
		maskPosition,
		maskRepeat
	} = props.attributes;

	const getImageShadowPosition = imageBoxShadowPosition !== 'outset' ? imageBoxShadowPosition : ''


	const selectors = {
		'.wp-block-uagb-image':{
			'margin-top': generateCSSUnit(
				imageTopMargin,
				imageMarginUnit
			),
			'margin-right': generateCSSUnit(
				imageRightMargin,
				imageMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				imageBottomMargin,
				imageMarginUnit
			),
			'margin-left': generateCSSUnit(
				imageLeftMargin,
				imageMarginUnit
			),
		},
		'.wp-block-uagb-image--layout-default img':{
			'width': 'inherit',
			'height': 'inherit',
			'border-style': imageBorderStyle,
			'border-color': imageBorderColor,
			'border-radius': generateCSSUnit( imageBorderRadius, 'px' ),
			'border-width': generateCSSUnit( imageBorderWidth, 'px' ),
			'box-shadow': generateCSSUnit( imageBoxShadowHOffset, 'px' ) + ' ' + generateCSSUnit( imageBoxShadowVOffset, 'px' ) +	' ' + generateCSSUnit( imageBoxShadowBlur, 'px' ) + ' ' +	generateCSSUnit( imageBoxShadowSpread, 'px' ) + ' ' + imageBoxShadowColor + ' ' + getImageShadowPosition,
		},
		'.wp-block-uagb-image--layout-overlay img':{
			'width': 'inherit',
			'height': 'inherit',
			'box-shadow': generateCSSUnit( imageBoxShadowHOffset, 'px' ) + ' ' + generateCSSUnit( imageBoxShadowVOffset, 'px' ) +	' ' + generateCSSUnit( imageBoxShadowBlur, 'px' ) + ' ' +	generateCSSUnit( imageBoxShadowSpread, 'px' ) + ' ' + imageBoxShadowColor + ' ' + getImageShadowPosition,
		},
		'.wp-block-uagb-image .wp-block-uagb-image__figure img:hover':{
			'border-color': imageBorderhoverColor
		},
		'.wp-block-uagb-image .wp-block-uagb-image__figure figcaption': {
			'font-family': captionFontFamily,
			'font-style' : captionFontStyle,
			'text-decoration': captionDecoration,
			'text-transform': captionTransform,
			'font-weight': captionFontWeight,
			'font-size': generateCSSUnit(
				captionFontSize,
				captionFontSizeType
			),
			'line-height': generateCSSUnit(
				captionLineHeight,
				captionLineHeightType
			),
			'color': captionColor,
			'margin-top': generateCSSUnit(
				captionTopMargin,
				captionMarginUnit
			),
			'margin-right': generateCSSUnit(
				captionRightMargin,
				captionMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				captionBottomMargin,
				captionMarginUnit
			),
			'margin-left': generateCSSUnit(
				captionLeftMargin,
				captionMarginUnit
			),
			'text-align': captionAlign
		},
		// overlay
		'.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__color-wrapper': {
			'background': overlayBackground,
			'opacity': overlayOpacity,
		},
		'.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner': {
			'border-style': overlayBorderStyle,
			'border-color': overlayBorderColor,
			'border-radius': generateCSSUnit( overlayBorderRadius, 'px' ),
			'border-width': generateCSSUnit( overlayBorderWidth, 'px' ),
			'left': generateCSSUnit( overlayPositionFromEdge, overlayPositionFromEdgeUnit ),
			'right': generateCSSUnit( overlayPositionFromEdge, overlayPositionFromEdgeUnit ),
			'top': generateCSSUnit( overlayPositionFromEdge, overlayPositionFromEdgeUnit ),
			'bottom': generateCSSUnit( overlayPositionFromEdge, overlayPositionFromEdgeUnit ),
		},
		'.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading': {
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
			'opacity': headingShowOn === 'always' ? 1 : 0
		},
		'.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-caption': {
			'opacity': captionShowOn === 'always' ? 1 : 0
		},
		'.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner': {
			'border-color': overlayBorderHoverColor,
		},
		'.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__color-wrapper': {
			'opacity': overlayHoverOpacity,
		},
		// Seperator
		'.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator': {
			'width': generateCSSUnit( seperatorWidth, separatorWidthType ),
			'border-top-width': generateCSSUnit(
				seperatorThickness,
				seperatorThicknessUnit
			),
			'border-top-color': seperatorColor,
			'border-top-style': seperatorStyle,
			'margin-bottom': generateCSSUnit( seperatorBottomMargin, seperatorMarginUnit ),
			'margin-top': generateCSSUnit( seperatorTopMargin, seperatorMarginUnit ),
			'margin-left': generateCSSUnit( seperatorLeftMargin, seperatorMarginUnit ),
			'margin-right': generateCSSUnit( seperatorRightMargin, seperatorMarginUnit ),
			'opacity': seperatorShowOn === 'always' ? 1 : 0
		},
	}

	if( headingShowOn === 'hover' ){
		selectors['.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading'] = {
			'opacity': 1
		}
	}
	if( captionShowOn === 'hover' ){
		selectors['.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-caption'] = {
			'opacity': 1
		}
	}
	if( seperatorShowOn === 'hover' ){
		selectors['.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator'] = {
			'opacity': 1
		}
	}


	if( maskShape !== 'none' ){
		let imagePath =  `${window?.uagb_blocks_info?.uagb_url}assets/images/masks/${maskShape}.svg`;
		if( maskShape === 'custom' ){
			imagePath = `${maskCustomShape?.url}`
		}
		if( typeof imagePath !== 'undefined' && imagePath ){
			selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img'] = {
				'mask-image': `url(${imagePath})`,
				'-webkit-mask-image': `url(${imagePath})`,
				'mask-size': maskSize,
				'-webkit-mask-size': maskSize,
				'mask-repeat': maskRepeat,
				'-webkit-mask-repeat': maskRepeat,
				'mask-position': maskPosition,
				'-webkit-mask-position': maskPosition
			}
		}
	}


	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	const tablet_selectors = {};
	const mobile_selectors = {};

	tablet_selectors['.wp-block-uagb-image'] = {
		'margin-top': generateCSSUnit(
			imageTopMarginTablet,
			imageMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			imageRightMarginTablet,
			imageMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			imageBottomMarginTablet,
			imageMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			imageLeftMarginTablet,
			imageMarginUnitTablet
		),
	}
	tablet_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure figcaption'] = {
        'font-size': generateCSSUnit(
            captionFontSizeTablet,
            captionFontSizeType
        ),
        'line-height': generateCSSUnit(
            captionLineHeightTablet,
            captionLineHeightType
        ),
		'margin-top': generateCSSUnit(
			captionTopMarginTablet,
			captionMarginUnitTablet
		),
		'margin-right': generateCSSUnit(
			captionRightMarginTablet,
			captionMarginUnitTablet
		),
		'margin-bottom': generateCSSUnit(
			captionBottomMarginTablet,
			captionMarginUnitTablet
		),
		'margin-left': generateCSSUnit(
			captionLeftMarginTablet,
			captionMarginUnitTablet
		),
    }

	tablet_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading'] = {
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
	// separator
	tablet_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator'] = {
		'margin-bottom': generateCSSUnit( seperatorBottomMarginTablet, seperatorMarginUnitTablet ),
		'margin-top': generateCSSUnit( seperatorTopMarginTablet, seperatorMarginUnitTablet ),
		'margin-left': generateCSSUnit( seperatorLeftMarginTablet, seperatorMarginUnitTablet ),
		'margin-right': generateCSSUnit( seperatorRightMarginTablet, seperatorMarginUnitTablet ),
	}

	mobile_selectors['.wp-block-uagb-image'] = {
		'margin-top': generateCSSUnit(
			imageTopMarginMobile,
			imageMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			imageRightMarginMobile,
			imageMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			imageBottomMarginMobile,
			imageMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			imageLeftMarginMobile,
			imageMarginUnitMobile
		),
	}

	mobile_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure figcaption'] = {
        'font-size': generateCSSUnit(
            captionFontSizeMobile,
            captionFontSizeType
        ),
        'line-height': generateCSSUnit(
            captionLineHeightMobile,
            captionLineHeightType
        ),
		'margin-top': generateCSSUnit(
			captionTopMarginMobile,
			captionMarginUnitMobile
		),
		'margin-right': generateCSSUnit(
			captionRightMarginMobile,
			captionMarginUnitMobile
		),
		'margin-bottom': generateCSSUnit(
			captionBottomMarginMobile,
			captionMarginUnitMobile
		),
		'margin-left': generateCSSUnit(
			captionLeftMarginMobile,
			captionMarginUnitMobile
		),
    }

	mobile_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading'] = {
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

	mobile_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator'] = {
		'margin-bottom': generateCSSUnit( seperatorBottomMarginMobile, seperatorMarginUnitMobile ),
		'margin-top': generateCSSUnit( seperatorTopMarginMobile, seperatorMarginUnitMobile ),
		'margin-left': generateCSSUnit( seperatorLeftMarginMobile, seperatorMarginUnitMobile ),
		'margin-right': generateCSSUnit( seperatorRightMarginMobile, seperatorMarginUnitMobile ),
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
