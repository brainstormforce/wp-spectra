/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( attributes, clientId, name ) {
	const blockName = name.replace( 'uagb/', '' );

	const {
		align,
		alignTablet,
		alignMobile,
		gap,
		gapTablet,
		gapMobile,
		gapType,
		inner_gap,
		innerGapTablet,
		innerGapMobile,
		innerGapType,
		icon_layout,
		iconLayoutTablet,
		iconLayoutMobile,
		size,
		sizeType,
		sizeTablet,
		sizeMobile,
		fontSize,
		fontSizeType,
		fontSizeMobile,
		fontSizeTablet,
		fontFamily,
		fontWeight,
		lineHeightType,
		lineHeight,
		lineHeightTablet,
		lineHeightMobile,
		border,
		borderTablet,
		borderMobile,
		borderType,
		bgSize,
		bgSizeType,
		bgSizeTablet,
		bgSizeMobile,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		borderRadiusType,
		fontStyle,
		fontTransform,
		fontDecoration,
		iconPosition,
		iconPositionTablet,
		iconPositionMobile,
		hideLabel,
		labelLetterSpacing,
		labelLetterSpacingTablet,
		labelLetterSpacingMobile,
		labelLetterSpacingType,
		iconColor,
		labelColor,
		iconHoverColor,
		labelHoverColor,
		iconBgColor,
		iconBgHoverColor,
		iconBorderColor,
		iconBorderHoverColor,
		iconPlacement,
		blockTopMargin,
		// margin
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
	} = attributes;

	const gapFallback = getFallbackNumber( gap, 'gap', blockName );
	const bgSizeFallback = getFallbackNumber( bgSize, 'bgSize', blockName );
	const borderRadiusFallback = getFallbackNumber( borderRadius, 'borderRadius', blockName );
	const borderRadiusTabletFallback = getFallbackNumber( borderRadiusTablet, 'borderRadiusTablet', blockName );
	const borderRadiusMobileFallback = getFallbackNumber( borderRadiusMobile, 'borderRadiusMobile', blockName );
	const borderFallback = getFallbackNumber( border, 'border', blockName );
	const sizeFallback = getFallbackNumber( size, 'size', blockName );
	const innerGapFallback = getFallbackNumber( inner_gap, 'inner_gap', blockName );
	const innerGapTabletFallback = getFallbackNumber( innerGapTablet, 'innerGapTablet', blockName );
	const innerGapMobileFallback = getFallbackNumber( innerGapMobile, 'innerGapMobile', blockName );

	// Responsive Fallback Values that Need to be Numeric for Math.
	const sizeTabletFallback = isNaN( sizeTablet ) ? sizeFallback : sizeTablet;
	const sizeMobileFallback = isNaN( sizeMobile ) ? sizeTabletFallback : sizeMobile;
	const bgSizeTabletFallback = isNaN( bgSizeTablet ) ? bgSizeFallback : bgSizeTablet;
	const bgSizeMobileFallback = isNaN( bgSizeMobile ) ? bgSizeTabletFallback : bgSizeMobile;
	const borderTabletFallback = isNaN( borderTablet ) ? borderFallback : borderTablet;
	const borderMobileFallback = isNaN( borderMobile ) ? borderTabletFallback : borderMobile;
	const gapTabletFallback = isNaN( gapTablet ) ? gapFallback : gapTablet;
	const gapMobileFallback = isNaN( gapMobile ) ? gapTabletFallback : gapMobile;

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};
	let alignment = '';
	if ( align === 'left' ) {
		alignment = 'flex-start';
	} else if ( align === 'right' ) {
		alignment = 'flex-end';
	} else {
		alignment = 'center';
	}

	let tabletAlignment = alignment;

	if ( alignTablet === 'left' ) {
		tabletAlignment = 'flex-start';
	} else if ( alignTablet === 'right' ) {
		tabletAlignment = 'flex-end';
	} else if ( alignTablet === 'center' ) {
		tabletAlignment = 'center';
	}

	let mobileAlignment = tabletAlignment;

	if ( alignMobile === 'left' ) {
		mobileAlignment = 'flex-start';
	} else if ( alignMobile === 'right' ) {
		mobileAlignment = 'flex-end';
	} else if ( alignMobile === 'center' ) {
		mobileAlignment = 'center';
	}

	const iconListLayout = icon_layout;
	const iconListLayoutTablet = iconLayoutTablet ? iconLayoutTablet : iconListLayout;
	const iconListLayoutMobile = iconLayoutMobile ? iconLayoutMobile : iconListLayoutTablet;

	const position = iconPosition === 'top' ? 'flex-start' : 'center';
	let positionTablet = '';
	let positionMobile = '';

	if ( iconPositionTablet === 'top' ) {
		positionTablet = 'flex-start';
	} else if ( iconPositionTablet === 'middle' ) {
		positionTablet = 'center';
	} else {
		positionTablet = position;
	}

	if ( iconPositionMobile === 'top' ) {
		positionMobile = 'flex-start';
	} else if ( iconPositionMobile === 'middle' ) {
		positionMobile = 'center';
	} else {
		positionMobile = positionTablet;
	}

	selectors = {
		' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap': {
			'background': iconBgColor,
			'border-color': iconBorderColor,
			'padding': generateCSSUnit( bgSizeFallback, bgSizeType ),
			'border-radius': generateCSSUnit( borderRadiusFallback, borderRadiusType ),
			'border-style': 0 === borderFallback || undefined === borderFallback ? 'none' : 'solid',
			'border-width': generateCSSUnit( borderFallback, borderType ),
			'align-self': position,
		},
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( sizeFallback, sizeType ),
		},
		' .uagb-icon-list__wrap .block-editor-inner-blocks': {
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
		' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap svg': {
			'color': iconColor,
			'fill': iconColor,
		},
		' .wp-block-uagb-icon-list-child:hover .uagb-icon-list__source-wrap svg': {
			'color': iconHoverColor,
			'fill': iconHoverColor,
		},
		' .wp-block-uagb-icon-list-child .uagb-icon-list__label': {
			'color': labelColor,
		},
		' .wp-block-uagb-icon-list-child:hover .uagb-icon-list__label': {
			'color': labelHoverColor,
		},
		' .wp-block-uagb-icon-list-child:hover .uagb-icon-list__source-wrap': {
			'background': iconBgHoverColor,
			'border-color': iconBorderHoverColor,
		},
	};

	tabletSelectors = {
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( sizeTabletFallback, sizeType ),
		},
		' .uagb-icon-list__wrap .block-editor-inner-blocks': {
			'text-align': alignTablet,
			'margin-top': generateCSSUnit( blockTopMarginTablet, blockMarginUnitTablet ),
			'margin-right': generateCSSUnit( blockRightMarginTablet, blockMarginUnitTablet ),
			'margin-bottom': generateCSSUnit( blockBottomMarginTablet, blockMarginUnitTablet ),
			'margin-left': generateCSSUnit( blockLeftMarginTablet, blockMarginUnitTablet ),
			'padding-top': generateCSSUnit( blockTopPaddingTablet, blockPaddingUnitTablet ),
			'padding-right': generateCSSUnit( blockRightPaddingTablet, blockPaddingUnitTablet ),
			'padding-bottom': generateCSSUnit( blockBottomPaddingTablet, blockPaddingUnitTablet ),
			'padding-left': generateCSSUnit( blockLeftPaddingTablet, blockPaddingUnitTablet ),
		},
	};

	mobileSelectors = {
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( sizeMobileFallback, sizeType ),
		},
		' .uagb-icon-list__wrap .block-editor-inner-blocks': {
			'text-align': alignMobile,
			'margin-top': generateCSSUnit( blockTopMarginMobile, blockMarginUnitMobile ),
			'margin-right': generateCSSUnit( blockRightMarginMobile, blockMarginUnitMobile ),
			'margin-bottom': generateCSSUnit( blockBottomMarginMobile, blockMarginUnitMobile ),
			'margin-left': generateCSSUnit( blockLeftMarginMobile, blockMarginUnitMobile ),
			'padding-top': generateCSSUnit( blockTopPaddingMobile, blockPaddingUnitMobile ),
			'padding-right': generateCSSUnit( blockRightPaddingMobile, blockPaddingUnitMobile ),
			'padding-bottom': generateCSSUnit( blockBottomPaddingMobile, blockPaddingUnitMobile ),
			'padding-left': generateCSSUnit( blockLeftPaddingMobile, blockPaddingUnitMobile ),
		},
	};

	selectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeFallback, sizeType ),
		'height': generateCSSUnit( sizeFallback, sizeType ),
		'font-size': generateCSSUnit( sizeFallback, sizeType ),
	};
	tabletSelectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeTabletFallback, sizeType ),
		'height': generateCSSUnit( sizeTabletFallback, sizeType ),
		'font-size': generateCSSUnit( sizeTabletFallback, sizeType ),
	};

	mobileSelectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeMobileFallback, sizeType ),
		'height': generateCSSUnit( sizeMobileFallback, sizeType ),
		'font-size': generateCSSUnit( sizeMobileFallback, sizeType ),
	};

	if ( 'horizontal' === iconListLayout ) {
		selectors[ ' .uagb-icon-list__wrap .block-editor-block-list__layout' ] = {
			'justify-content': alignment,
			'-webkit-box-pack': alignment,
			'-ms-flex-pack': alignment,
			'align-items': 'center',
			'display': 'inline-flex',
			'flex-direction': 'row',
		};
		selectors[ ' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-right': generateCSSUnit( gapFallback / 2, gapType ),
		};
		selectors[
			' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]:not(:first-child)'
		] = {
			'margin-left': generateCSSUnit( gapFallback / 2, gapType ),
		};
	} else if ( 'vertical' === iconListLayout ) {
		selectors[ ' .uagb-icon-list__wrap .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
		};
		selectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'display': 'block',
			'margin-left': 0,
			'margin-right': 0,
			'margin-bottom': generateCSSUnit( gapFallback, gapType ),
		};
	}

	if ( 'horizontal' === iconListLayoutTablet ) {
		tabletSelectors[ ' .uagb-icon-list__wrap .block-editor-block-list__layout' ] = {
			'justify-content': tabletAlignment,
			'-webkit-box-pack': tabletAlignment,
			'-ms-flex-pack': tabletAlignment,
			'align-items': 'center',
			'display': 'inline-flex',
			'flex-direction': 'row',
		};
		tabletSelectors[ ' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-right': generateCSSUnit( gapTabletFallback / 2, gapType ),
		};
		tabletSelectors[
			' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]:not(:first-child)'
		] = {
			'margin-left': generateCSSUnit( gapTabletFallback / 2, gapType ),
		};
	} else if ( 'vertical' === iconListLayoutTablet ) {
		tabletSelectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': 0 + ' !important',
			'margin-right': 0 + ' !important',
			'margin-bottom': generateCSSUnit( gapTabletFallback, gapType ),
		};
		tabletSelectors[ ' .uagb-icon-list__wrap .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
		};
	}

	if ( 'horizontal' === iconListLayoutMobile ) {
		mobileSelectors[ ' .uagb-icon-list__wrap .block-editor-block-list__layout' ] = {
			'justify-content': mobileAlignment,
			'-webkit-box-pack': mobileAlignment,
			'-ms-flex-pack': mobileAlignment,
			'align-items': 'center',
			'display': 'inline-flex',
			'flex-direction': 'row',
		};
		mobileSelectors[ ' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-right': generateCSSUnit( gapMobileFallback / 2, gapType ),
		};
		mobileSelectors[
			' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]:not(:first-child)'
		] = {
			'margin-left': generateCSSUnit( gapMobileFallback / 2, gapType ),
		};
	} else if ( 'vertical' === iconListLayoutMobile ) {
		mobileSelectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'display': 'block',
			'margin-left': 0 + ' !important',
			'margin-right': 0 + ' !important',
			'margin-bottom': generateCSSUnit( gapMobileFallback, gapType ),
		};
		mobileSelectors[ ' .uagb-icon-list__wrap .block-editor-block-list__layout' ] = {
			'flex-direction': 'column',
		};
	}

	if ( 'right' === align && hideLabel ) {
		selectors[ ' .uagb-icon-list__source-wrap' ] = {
			'margin-left': generateCSSUnit( innerGapFallback, innerGapType ),
		};
		mobileSelectors[ ' .uagb-icon-list__source-wrap' ] = {
			'margin-left': generateCSSUnit( innerGapMobileFallback, innerGapType ),
		};
		tabletSelectors[ ' .uagb-icon-list__source-wrap' ] = {
			'margin-left': generateCSSUnit( innerGapTabletFallback, innerGapType ),
		};
		selectors[ ' .wp-block-uagb-icon-list-child ' ] = {
			'flex-direction': 'row-reverse',
		};
	} else if ( 'before' === iconPlacement && ! hideLabel ) {
		selectors[ ' .uagb-icon-list__source-wrap' ] = {
			'margin-right': generateCSSUnit( innerGapFallback, innerGapType ),
		};
		mobileSelectors[ ' .uagb-icon-list__source-wrap' ] = {
			'margin-right': generateCSSUnit( innerGapMobileFallback, innerGapType ),
		};
		tabletSelectors[ ' .uagb-icon-list__source-wrap' ] = {
			'margin-right': generateCSSUnit( innerGapTabletFallback, innerGapType ),
		};
	} else if ( 'after' === iconPlacement && ! hideLabel ) {
		selectors[ ' .uagb-icon-list__source-wrap' ] = {
			'margin-left': generateCSSUnit( innerGapFallback, innerGapType ),
		};
		mobileSelectors[ ' .uagb-icon-list__source-wrap' ] = {
			'margin-left': generateCSSUnit( innerGapMobileFallback, innerGapType ),
		};
		tabletSelectors[ ' .uagb-icon-list__source-wrap' ] = {
			'margin-left': generateCSSUnit( innerGapTabletFallback, innerGapType ),
		};
		selectors[ ' .wp-block-uagb-icon-list-child ' ] = {
			'flex-direction': 'row-reverse',
		};
	}

	selectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__label' ] = {
		'font-size': generateCSSUnit( fontSize, fontSizeType ),
		'font-family': fontFamily,
		'font-style': fontStyle,
		'text-decoration': fontDecoration,
		'text-transform': fontTransform,
		'font-weight': fontWeight,
		'line-height': generateCSSUnit( lineHeight, lineHeightType ),
		'letter-spacing': generateCSSUnit( labelLetterSpacing, labelLetterSpacingType ),
		'color': labelColor,
	};

	mobileSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__label' ] = {
		'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
		'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
		'letter-spacing': generateCSSUnit( labelLetterSpacingMobile, labelLetterSpacingType ),
	};

	tabletSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__label' ] = {
		'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
		'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
		'letter-spacing': generateCSSUnit( labelLetterSpacingTablet, labelLetterSpacingType ),
	};

	mobileSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap' ] = {
		'border-radius': generateCSSUnit( borderRadiusMobileFallback, borderRadiusType ),
		'padding': generateCSSUnit( bgSizeMobileFallback, 'px' ),
		'border-style': 0 === borderMobileFallback || undefined === borderMobileFallback ? 'none' : 'solid',
		'border-width': generateCSSUnit( borderMobileFallback, borderType ),
		'align-self': positionMobile,
	};

	tabletSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap' ] = {
		'border-radius': generateCSSUnit( borderRadiusTabletFallback, borderRadiusType ),
		'padding': generateCSSUnit( bgSizeTabletFallback, 'px' ),
		'border-style': 0 === borderTabletFallback || undefined === borderTabletFallback ? 'none' : 'solid',
		'border-width': generateCSSUnit( borderTabletFallback, borderType ),
		'align-self': positionTablet,
	};

	let stylingCss = '';
	const id = `.uagb-block-${ clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
