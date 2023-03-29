/**
 * Returns Dynamic Generated CSS
 */

import generateBorderCSS from '@Controls/generateBorderCSS';
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

export default function styling( props ) {
	const blockName = props.name.replace( 'uagb/', '' );

	const {
		width,
		widthTablet,
		widthMobile,
		height,
		heightTablet,
		heightMobile,
		align,
		alignTablet,
		alignMobile,
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
		objectFit,
		objectFitTablet,
		objectFitMobile,
		// overlay
		overlayOpacity,
		overlayHoverOpacity,
		overlayPositionFromEdge,
		overlayPositionFromEdgeUnit,
		overlayBackground,
		overlayBorderHColor,
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
		imageBorderHColor,
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
		maskRepeat,
		headingLetterSpacing,
		headingLetterSpacingTablet,
		headingLetterSpacingMobile,
		headingLetterSpacingType,
		captionLetterSpacing,
		captionLetterSpacingTablet,
		captionLetterSpacingMobile,
		captionLetterSpacingType,
		customHeightSetDesktop,
		customHeightSetTablet,
		customHeightSetMobile,
	} = props.attributes;

	const seperatorWidthFallback = getFallbackNumber( seperatorWidth, 'seperatorWidth', blockName );
	const overlayPositionFromEdgeFallback = getFallbackNumber(
		overlayPositionFromEdge,
		'overlayPositionFromEdge',
		blockName
	);
	const seperatorThicknessFallback = getFallbackNumber( seperatorThickness, 'seperatorThickness', blockName );

	const overlayOpacityFallback = getFallbackNumber( overlayOpacity, 'overlayOpacity', blockName );
	const overlayHoverOpacityFallback = getFallbackNumber( overlayHoverOpacity, 'overlayHoverOpacity', blockName );

	const overlayBorderCSS = generateBorderCSS( props.attributes, 'overlay' );
	const overlayBorderCSSTablet = generateBorderCSS( props.attributes, 'overlay', 'tablet' );
	const overlayBorderCSSMobile = generateBorderCSS( props.attributes, 'overlay', 'mobile' );
	const imageBorderCSS = generateBorderCSS( props.attributes, 'image' );
	const imageBorderCSSTablet = generateBorderCSS( props.attributes, 'image', 'tablet' );
	const imageBorderCSSMobile = generateBorderCSS( props.attributes, 'image', 'mobile' );

	const tabletWidth = '' !== widthTablet ? widthTablet : width;
	const mobileWidth = '' !== widthMobile ? widthMobile : tabletWidth;

	const tabletHeight = '' !== heightTablet ? heightTablet : height;
	const mobileHeight = '' !== heightMobile ? heightMobile : tabletHeight;

	const getImageShadowPosition = imageBoxShadowPosition !== 'outset' ? imageBoxShadowPosition : '';

	const selectors = {
		'.wp-block-uagb-image': {
			'margin-top': generateCSSUnit( imageTopMargin, imageMarginUnit ),
			'margin-right': generateCSSUnit( imageRightMargin, imageMarginUnit ),
			'margin-bottom': generateCSSUnit( imageBottomMargin, imageMarginUnit ),
			'margin-left': generateCSSUnit( imageLeftMargin, imageMarginUnit ),
			'text-align': align,
		},
		'.wp-block-uagb-image--layout-default figure img': {
			'width': 'inherit',
			'height': 'inherit',
			'box-shadow':
				generateCSSUnit( imageBoxShadowHOffset, 'px' ) +
				' ' +
				generateCSSUnit( imageBoxShadowVOffset, 'px' ) +
				' ' +
				generateCSSUnit( imageBoxShadowBlur, 'px' ) +
				' ' +
				generateCSSUnit( imageBoxShadowSpread, 'px' ) +
				' ' +
				imageBoxShadowColor +
				' ' +
				getImageShadowPosition,
			...imageBorderCSS,
		},
		'.wp-block-uagb-image .wp-block-uagb-image__figure img:hover': {
			'border-color': imageBorderHColor,
		},
		'.wp-block-uagb-image .wp-block-uagb-image__figure figcaption': {
			'font-family': captionFontFamily,
			'font-style': captionFontStyle,
			'text-decoration': captionDecoration,
			'text-transform': captionTransform,
			'font-weight': captionFontWeight,
			'font-size': generateCSSUnit( captionFontSize, captionFontSizeType ),
			'line-height': generateCSSUnit( captionLineHeight, captionLineHeightType ),
			'letter-spacing': generateCSSUnit( captionLetterSpacing, captionLetterSpacingType ),
			'color': captionColor,
			'margin-top': generateCSSUnit( captionTopMargin, captionMarginUnit ),
			'margin-right': generateCSSUnit( captionRightMargin, captionMarginUnit ),
			'margin-bottom': generateCSSUnit( captionBottomMargin, captionMarginUnit ),
			'margin-left': generateCSSUnit( captionLeftMargin, captionMarginUnit ),
			'text-align': captionAlign,
		},
		'.wp-block-uagb-image .wp-block-uagb-image__figure figcaption a': {
			'color': captionColor,
		},
		// overlay
		'.wp-block-uagb-image--layout-overlay figure img': {
			'width': 'inherit',
			'height': 'inherit',
			'box-shadow':
				generateCSSUnit( imageBoxShadowHOffset, 'px' ) +
				' ' +
				generateCSSUnit( imageBoxShadowVOffset, 'px' ) +
				' ' +
				generateCSSUnit( imageBoxShadowBlur, 'px' ) +
				' ' +
				generateCSSUnit( imageBoxShadowSpread, 'px' ) +
				' ' +
				imageBoxShadowColor +
				' ' +
				getImageShadowPosition,
			...imageBorderCSS,
		},
		'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__color-wrapper': {
			'background': overlayBackground,
			'opacity': overlayOpacityFallback,
			...imageBorderCSS,
		},
		'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__color-wrapper:hover': {
			'border-color': imageBorderHColor,
		},
		'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner': {
			'left': generateCSSUnit( overlayPositionFromEdgeFallback, overlayPositionFromEdgeUnit ),
			'right': generateCSSUnit( overlayPositionFromEdgeFallback, overlayPositionFromEdgeUnit ),
			'top': generateCSSUnit( overlayPositionFromEdgeFallback, overlayPositionFromEdgeUnit ),
			'bottom': generateCSSUnit( overlayPositionFromEdgeFallback, overlayPositionFromEdgeUnit ),
			...overlayBorderCSS,
		},
		'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading': {
			'font-family': headingFontFamily,
			'font-style': headingFontStyle,
			'text-decoration': headingDecoration,
			'text-transform': headingTransform,
			'font-weight': headingFontWeight,
			'font-size': generateCSSUnit( headingFontSize, headingFontSizeType ),
			'line-height': generateCSSUnit( headingLineHeight, headingLineHeightType ),
			'letter-spacing': generateCSSUnit( headingLetterSpacing, headingLetterSpacingType ),
			'color': headingColor,
			'margin-top': generateCSSUnit( headingTopMargin, headingMarginUnit ),
			'margin-right': generateCSSUnit( headingRightMargin, headingMarginUnit ),
			'margin-bottom': generateCSSUnit( headingBottomMargin, headingMarginUnit ),
			'margin-left': generateCSSUnit( headingLeftMargin, headingMarginUnit ),
			'opacity': headingShowOn === 'always' ? 1 : 0,
		},
		'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading a': {
			'color': headingColor,
		},
		'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner .uagb-image-caption': {
			'opacity': captionShowOn === 'always' ? 1 : 0,
		},
		'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner': {
			'border-color': overlayBorderHColor,
		},
		'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__color-wrapper': {
			'opacity': overlayHoverOpacityFallback,
		},
		// Seperator
		'.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator': {
			'width': generateCSSUnit( seperatorWidthFallback, separatorWidthType ),
			'border-top-width': generateCSSUnit( seperatorThicknessFallback, seperatorThicknessUnit ),
			'border-top-color': seperatorColor,
			'border-top-style': seperatorStyle,
			'margin-bottom': generateCSSUnit( seperatorBottomMargin, seperatorMarginUnit ),
			'margin-top': generateCSSUnit( seperatorTopMargin, seperatorMarginUnit ),
			'margin-left': generateCSSUnit( seperatorLeftMargin, seperatorMarginUnit ),
			'margin-right': generateCSSUnit( seperatorRightMargin, seperatorMarginUnit ),
			'opacity': seperatorShowOn === 'always' ? 1 : 0,
		},
	};

	selectors[ '.wp-block-uagb-image .wp-block-uagb-image__figure img' ] = {
		'object-fit': objectFit,
		'width': width + 'px',
		'height': 'auto',
	};

	if ( customHeightSetDesktop ) {
		selectors[ '.wp-block-uagb-image .wp-block-uagb-image__figure img' ].height = height + 'px';
	}
	if ( headingShowOn === 'hover' ) {
		selectors[
			'.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading'
		] = {
			'opacity': 1,
		};
	}
	if ( captionShowOn === 'hover' ) {
		selectors[
			'.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-caption'
		] = {
			'opacity': 1,
		};
	}
	if ( seperatorShowOn === 'hover' ) {
		selectors[
			'.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator'
		] = {
			'opacity': 1,
		};
	}

	if ( maskShape !== 'none' ) {
		let imagePath = `${ window?.uagb_blocks_info?.uagb_url }assets/images/masks/${ maskShape }.svg`;
		if ( maskShape === 'custom' ) {
			imagePath = `${ maskCustomShape?.url }`;
		}
		if ( typeof imagePath !== 'undefined' && imagePath ) {
			selectors[ '.wp-block-uagb-image .wp-block-uagb-image__figure img' ] = {
				'mask-image': `url(${ imagePath })`,
				'-webkit-mask-image': `url(${ imagePath })`,
				'mask-size': maskSize,
				'-webkit-mask-size': maskSize,
				'mask-repeat': maskRepeat,
				'-webkit-mask-repeat': maskRepeat,
				'mask-position': maskPosition,
				'-webkit-mask-position': maskPosition,
			};
		}
	}

	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	const tablet_selectors = {};
	const mobile_selectors = {};

	tablet_selectors[ '.wp-block-uagb-image .components-resizable-box__container' ] = {
		'width': generateCSSUnit( widthTablet, 'px' ),
		'height': generateCSSUnit( heightTablet, 'px' ),
	};

	tablet_selectors[ '.wp-block-uagb-image--layout-default figure' ] = imageBorderCSSTablet;
	tablet_selectors[ '.wp-block-uagb-image--layout-overlay figure' ] = imageBorderCSSTablet;

	tablet_selectors[ '.wp-block-uagb-image' ] = {
		'margin-top': generateCSSUnit( imageTopMarginTablet, imageMarginUnitTablet ),
		'margin-right': generateCSSUnit( imageRightMarginTablet, imageMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( imageBottomMarginTablet, imageMarginUnitTablet ),
		'margin-left': generateCSSUnit( imageLeftMarginTablet, imageMarginUnitTablet ),
		'text-align': alignTablet,
	};
	tablet_selectors[ '.wp-block-uagb-image .wp-block-uagb-image__figure figcaption' ] = {
		'font-size': generateCSSUnit( captionFontSizeTablet, captionFontSizeType ),
		'line-height': generateCSSUnit( captionLineHeightTablet, captionLineHeightType ),
		'letter-spacing': generateCSSUnit( captionLetterSpacingTablet, captionLetterSpacingType ),
		'margin-top': generateCSSUnit( captionTopMarginTablet, captionMarginUnitTablet ),
		'margin-right': generateCSSUnit( captionRightMarginTablet, captionMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( captionBottomMarginTablet, captionMarginUnitTablet ),
		'margin-left': generateCSSUnit( captionLeftMarginTablet, captionMarginUnitTablet ),
	};

	tablet_selectors[
		'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner'
	] = overlayBorderCSSTablet;

	tablet_selectors[ '.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading' ] = {
		'font-size': generateCSSUnit( headingFontSizeTablet, headingFontSizeType ),
		'line-height': generateCSSUnit( headingLineHeightTablet, headingLineHeightType ),
		'letter-spacing': generateCSSUnit( headingLetterSpacingTablet, headingLetterSpacingType ),
		'margin-top': generateCSSUnit( headingTopMarginTablet, headingMarginUnitTablet ),
		'margin-right': generateCSSUnit( headingRightMarginTablet, headingMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( headingBottomMarginTablet, headingMarginUnitTablet ),
		'margin-left': generateCSSUnit( headingLeftMarginTablet, headingMarginUnitTablet ),
	};
	// separator
	tablet_selectors[ '.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator' ] = {
		'margin-bottom': generateCSSUnit( seperatorBottomMarginTablet, seperatorMarginUnitTablet ),
		'margin-top': generateCSSUnit( seperatorTopMarginTablet, seperatorMarginUnitTablet ),
		'margin-left': generateCSSUnit( seperatorLeftMarginTablet, seperatorMarginUnitTablet ),
		'margin-right': generateCSSUnit( seperatorRightMarginTablet, seperatorMarginUnitTablet ),
	};

	tablet_selectors[ '.wp-block-uagb-image .wp-block-uagb-image__figure img' ] = {
		'object-fit': objectFitTablet,
		'width': tabletWidth + 'px',
		'height': 'auto',
	};

	if ( customHeightSetTablet ) {
		tablet_selectors[ '.wp-block-uagb-image .wp-block-uagb-image__figure img' ].height = tabletHeight + 'px';
	}

	// Mobile
	mobile_selectors[ '.wp-block-uagb-image .components-resizable-box__container' ] = {
		'width': generateCSSUnit( widthMobile, 'px' ),
		'height': generateCSSUnit( heightMobile, 'px' ),
	};

	mobile_selectors[ '.wp-block-uagb-image--layout-default figure' ] = imageBorderCSSMobile;
	mobile_selectors[ '.wp-block-uagb-image--layout-overlay figure' ] = imageBorderCSSMobile;

	mobile_selectors[ '.wp-block-uagb-image' ] = {
		'margin-top': generateCSSUnit( imageTopMarginMobile, imageMarginUnitMobile ),
		'margin-right': generateCSSUnit( imageRightMarginMobile, imageMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( imageBottomMarginMobile, imageMarginUnitMobile ),
		'margin-left': generateCSSUnit( imageLeftMarginMobile, imageMarginUnitMobile ),
		'text-align': alignMobile,
	};

	mobile_selectors[ '.wp-block-uagb-image .wp-block-uagb-image__figure figcaption' ] = {
		'font-size': generateCSSUnit( captionFontSizeMobile, captionFontSizeType ),
		'line-height': generateCSSUnit( captionLineHeightMobile, captionLineHeightType ),
		'letter-spacing': generateCSSUnit( captionLetterSpacingMobile, captionLetterSpacingType ),
		'margin-top': generateCSSUnit( captionTopMarginMobile, captionMarginUnitMobile ),
		'margin-right': generateCSSUnit( captionRightMarginMobile, captionMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( captionBottomMarginMobile, captionMarginUnitMobile ),
		'margin-left': generateCSSUnit( captionLeftMarginMobile, captionMarginUnitMobile ),
	};

	mobile_selectors[
		'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner'
	] = overlayBorderCSSMobile;

	mobile_selectors[ '.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading' ] = {
		'font-size': generateCSSUnit( headingFontSizeMobile, headingFontSizeType ),
		'line-height': generateCSSUnit( headingLineHeightMobile, headingLineHeightType ),
		'letter-spacing': generateCSSUnit( headingLetterSpacingMobile, headingLetterSpacingType ),
		'margin-top': generateCSSUnit( headingTopMarginMobile, headingMarginUnitMobile ),
		'margin-right': generateCSSUnit( headingRightMarginMobile, headingMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( headingBottomMarginMobile, headingMarginUnitMobile ),
		'margin-left': generateCSSUnit( headingLeftMarginMobile, headingMarginUnitMobile ),
	};

	mobile_selectors[ '.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator' ] = {
		'margin-bottom': generateCSSUnit( seperatorBottomMarginMobile, seperatorMarginUnitMobile ),
		'margin-top': generateCSSUnit( seperatorTopMarginMobile, seperatorMarginUnitMobile ),
		'margin-left': generateCSSUnit( seperatorLeftMarginMobile, seperatorMarginUnitMobile ),
		'margin-right': generateCSSUnit( seperatorRightMarginMobile, seperatorMarginUnitMobile ),
	};

	mobile_selectors[ '.wp-block-uagb-image .wp-block-uagb-image__figure img' ] = {
		'object-fit': objectFitMobile,
		'width': mobileWidth + 'px',
		'height': 'auto',
	};

	if ( customHeightSetMobile ) {
		mobile_selectors[ '.wp-block-uagb-image .wp-block-uagb-image__figure img' ].height = mobileHeight + 'px';
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
