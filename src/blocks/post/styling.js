/**
 * Set inline styles.
 *
 * @return {Object} The inline background type CSS.
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( attributes, clientId ) {
	const {
		blockName,
		btnBorderHColor,
		align,
		titleColor,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleFontFamily,
		titleFontWeight,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleBottomSpace,
		titleBottomSpaceTablet,
		titleBottomSpaceMobile,
		titleTransform,
		titleDecoration,
		titleBottomSpaceUnit,
		titleFontStyle,

		metaFontSize,
		metaFontSizeType,
		metaFontSizeMobile,
		metaFontSizeTablet,
		metaFontFamily,
		metaFontWeight,
		metaLineHeightType,
		metaLineHeight,
		metaLineHeightTablet,
		metaLineHeightMobile,
		metaColor,
		metaBottomSpace,
		metaBottomSpaceTablet,
		metaBottomSpaceMobile,
		metaTransform,
		metaDecoration,
		metaBottomSpaceUnit,
		metaFontStyle,

		excerptFontSize,
		excerptFontSizeType,
		excerptFontSizeTablet,
		excerptFontSizeMobile,
		excerptFontFamily,
		excerptFontWeight,
		excerptFontStyle,
		excerptLineHeightType,
		excerptLineHeight,
		excerptLineHeightTablet,
		excerptLineHeightMobile,
		excerptColor,
		excerptBottomSpace,
		excerptBottomSpaceTablet,
		excerptBottomSpaceMobile,
		excerptBottomSpaceUnit,
		excerptTransform,
		excerptDecoration,

		ctaColor,
		linkBox,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeTablet,
		ctaFontSizeMobile,
		ctaFontFamily,
		ctaFontStyle,
		ctaFontWeight,
		ctaLineHeightType,
		ctaLineHeight,
		ctaLineHeightTablet,
		ctaLineHeightMobile,
		ctaBottomSpace,
		ctaBottomSpaceTablet,
		ctaBottomSpaceMobile,
		ctaBgType,
		ctaBgHType,
		ctaBgColor,
		ctaHColor,
		ctaBgHColor,
		ctaTransform,
		ctaDecoration,
		ctaBottomSpaceUnit,

		imageBottomSpace,
		imageBottomSpaceTablet,
		imageBottomSpaceMobile,
		imageBottomSpaceUnit,

		overlayOpacity,
		bgOverlayColor,
		postPagination,
		rowGapUnit,
		columnGapUnit,
		rowGap,
		rowGapTablet,
		rowGapMobile,
		columnGap,
		columnGapTablet,
		columnGapMobile,
		bgType,
		bgColor,

		paginationColor,
		paginationBgColor,
		paginationActiveColor,
		paginationBgActiveColor,
		paginationLayout,
		paginationBorderSize,
		paginationBorderRadius,
		paginationBorderColor,
		paginationBorderActiveColor,
		paginationSpacing,
		paginationSpacingUnit,
		paginationAlignment,

		paddingBtnTop,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnRight,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,

		paddingTop,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTopTablet,
		paddingRightTablet,
		paddingBottomTablet,
		paddingLeftTablet,
		paddingTopMobile,
		paddingRightMobile,
		paddingBottomMobile,
		paddingLeftMobile,
		mobilePaddingUnit,
		tabletPaddingUnit,
		contentPaddingUnit,
		arrowColor,
		arrowSize,
		paginationType,
		paginationFontSize,
		paginationEventType,
		paginationAlign,
		paginationTextColor,
		paginationMasonryBgColor,
		paginationMasonryBorderHColor,
		paginationButtonPaddingType,
		paginationTextHoverColor,
		paginationBgHoverColor,
		paginationButtonPaddingTopTablet,
		paginationButtonPaddingRightTablet,
		paginationButtonPaddingBottomTablet,
		paginationButtonPaddingLeftTablet,
		paginationButtonPaddingTopMobile,
		paginationButtonPaddingRightMobile,
		paginationButtonPaddingBottomMobile,
		paginationButtonPaddingLeftMobile,
		paginationButtonPaddingTop,
		paginationButtonPaddingRight,
		paginationButtonPaddingBottom,
		paginationButtonPaddingLeft,
		mobilepaginationButtonPaddingType,
		tabletpaginationButtonPaddingType,
		loaderSize,
		loaderColor,
		highlightedTextColor,
		highlightedTextBgColor,
		imgPosition,
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		metaLetterSpacing,
		metaLetterSpacingTablet,
		metaLetterSpacingMobile,
		metaLetterSpacingType,
		excerptLetterSpacing,
		excerptLetterSpacingTablet,
		excerptLetterSpacingMobile,
		excerptLetterSpacingType,
		ctaLetterSpacing,
		ctaLetterSpacingTablet,
		ctaLetterSpacingMobile,
		ctaLetterSpacingType,
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
		overallBorderHColor,
		arrowDistance,
		arrowDistanceTablet,
		arrowDistanceMobile,
		columns,
		tcolumns,
		mcolumns,

		// row spacing controls between content and dots
		dotsMarginTop,
		dotsMarginTopTablet,
		dotsMarginTopMobile,
		dotsMarginTopUnit,
	} = attributes;

	const overlayOpacityFallback = getFallbackNumber( overlayOpacity, 'overlayOpacity', blockName );
	const columnGapFallback = getFallbackNumber( columnGap, 'columnGap', blockName );
	const rowGapFallback = getFallbackNumber( rowGap, 'rowGap', blockName );
	const imageBottomSpaceFallback = getFallbackNumber( imageBottomSpace, 'imageBottomSpace', blockName );
	const titleBottomSpaceFallback = getFallbackNumber( titleBottomSpace, 'titleBottomSpace', blockName );
	const metaBottomSpaceFallback = getFallbackNumber( metaBottomSpace, 'metaBottomSpace', blockName );
	const excerptBottomSpaceFallback = getFallbackNumber( excerptBottomSpace, 'excerptBottomSpace', blockName );
	const ctaBottomSpaceFallback = getFallbackNumber( ctaBottomSpace, 'ctaBottomSpace', blockName );

	const paginationSpacingFallback =
		undefined !== paginationSpacing ? getFallbackNumber( paginationSpacing, 'paginationSpacing', blockName ) : '';
	const paginationBorderRadiusFallback =
		undefined !== paginationBorderRadius
			? getFallbackNumber( paginationBorderRadius, 'paginationBorderRadius', blockName )
			: '';
	const paginationBorderSizeFallback =
		undefined !== paginationBorderSize
			? getFallbackNumber( paginationBorderSize, 'paginationBorderSize', blockName )
			: '';
	const arrowSizeFallback = undefined !== arrowSize ? getFallbackNumber( arrowSize, 'arrowSize', blockName ) : '';
	const paginationFontSizeFallback =
		undefined !== paginationFontSize
			? getFallbackNumber( paginationFontSize, 'paginationFontSize', blockName )
			: '';
	const loaderSizeFallback = undefined !== loaderSize ? getFallbackNumber( loaderSize, 'loaderSize', blockName ) : '';

	const rowGapTabletFallback = isNaN( rowGapTablet ) ? rowGapFallback : rowGapTablet;
	const rowGapMobileFallback = isNaN( rowGapMobile ) ? rowGapTabletFallback : rowGapMobile;

	const borderCSS = generateBorderCSS( attributes, 'btn' );
	const borderCSSTablet = generateBorderCSS( attributes, 'btn', 'tablet' );
	const borderCSSMobile = generateBorderCSS( attributes, 'btn', 'mobile' );

	const overallBorderCSS = generateBorderCSS( attributes, 'overall' );
	const overallBorderCSSTablet = generateBorderCSS( attributes, 'overall', 'tablet' );
	const overallBorderCSSMobile = generateBorderCSS( attributes, 'overall', 'mobile' );

	const paginationMasonryBorderCSS = generateBorderCSS( attributes, 'paginationMasonry' );
	const paginationMasonryBorderCSSTablet = generateBorderCSS( attributes, 'paginationMasonry', 'tablet' );
	const paginationMasonryBorderCSSMobile = generateBorderCSS( attributes, 'paginationMasonry', 'mobile' );

	// post carousal margin top for dots

	const dotsMarginTopFallback = getFallbackNumber( dotsMarginTop, 'dotsMarginTop', 'post-carousel' );
	const dotsMarginTopTabletFallback = getFallbackNumber(
		dotsMarginTopTablet,
		'dotsMarginTopTablet',
		'post-carousel'
	);
	const dotsMarginTopMobileFallback = getFallbackNumber(
		dotsMarginTopMobile,
		'dotsMarginTopMobile',
		'post-carousel'
	);

	let mobileSelectors = {};
	let tabletSelectors = {};

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let boxShadowPositionCSSHover = boxShadowPositionHover;

	if ( 'outset' === boxShadowPositionHover ) {
		boxShadowPositionCSSHover = '';
	}
	const selectors = {
		'.wp-block-uagb-post-grid': {
			'grid-template-columns': 'repeat(' + columns + ' , minmax(0, 1fr))',
		},
		'.wp-block-uagb-post-grid.uagb-post__items': {
			'column-gap': generateCSSUnit( columnGapFallback, columnGapUnit ),
			'row-gap': generateCSSUnit( rowGapFallback, rowGapUnit ),
		},
		':not(.wp-block-uagb-post-grid).uagb-post__items': {
			'margin-right': generateCSSUnit( -rowGapFallback / 2, rowGapUnit ),
			'margin-left': generateCSSUnit( -rowGapFallback / 2, rowGapUnit ),
		},
		':not(.wp-block-uagb-post-grid).uagb-post__items article': {
			'padding-right': generateCSSUnit( rowGapFallback / 2, rowGapUnit ),
			'padding-left': generateCSSUnit( rowGapFallback / 2, rowGapUnit ),
			'margin-bottom': generateCSSUnit( columnGapFallback, columnGapUnit ),
		},
		' .uagb-post__inner-wrap': {
			'background': bgColor,
			'text-align': align,
		},
		'.is_carousel .uagb-post__inner-wrap': {
			'background': bgType ? bgColor : 'transparent',
		},
		'.wp-block-uagb-post-grid .uagb-post__inner-wrap': {
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
			...overallBorderCSS,
			'padding-top': generateCSSUnit( paddingTop, contentPaddingUnit ),
			'padding-left': generateCSSUnit( paddingLeft, contentPaddingUnit ),
			'padding-bottom': generateCSSUnit( paddingBottom, contentPaddingUnit ),
			'padding-right': generateCSSUnit( paddingRight, contentPaddingUnit ),
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap > .uagb-post__text:not(.highlighted)': {
			'margin-left': generateCSSUnit( paddingLeft, contentPaddingUnit ),
			'margin-right': generateCSSUnit( paddingRight, contentPaddingUnit ),
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text.highlighted': {
			'margin-left': generateCSSUnit( paddingLeft, contentPaddingUnit ),
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text:first-child': {
			'margin-top': generateCSSUnit( paddingTop, contentPaddingUnit ),
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text:last-child': {
			'margin-bottom': generateCSSUnit( paddingBottom, contentPaddingUnit ),
		},
		' .uagb-post__inner-wrap .uagb-post__cta': {
			'padding-bottom': generateCSSUnit( ctaBottomSpaceFallback, ctaBottomSpaceUnit ),
		},
		' .uagb-post__inner-wrap .uagb-post__image': {
			'padding-bottom': generateCSSUnit( imageBottomSpaceFallback, imageBottomSpaceUnit ),
		},
		' .uagb-post__inner-wrap .uagb-post__image + .uagb-post__title ': {
			'margin-top': '0px',
		},
		' .uagb-post__inner-wrap .uagb-post__title': {
			'padding-bottom': generateCSSUnit( titleBottomSpaceFallback, titleBottomSpaceUnit ),
		},
		' .uagb-post__inner-wrap .uagb-post-grid-byline': {
			'padding-bottom': generateCSSUnit( metaBottomSpaceFallback, metaBottomSpaceUnit ),
		},
		' .uagb-post__inner-wrap .uagb-post__excerpt': {
			'padding-bottom': generateCSSUnit( excerptBottomSpaceFallback, excerptBottomSpaceUnit ),
		},
		' .uagb-post__image:before': {
			'background-color': bgOverlayColor,
			'opacity': overlayOpacityFallback / 100,
		},
		' .uagb-post-pagination-wrap': {
			'margin-top': generateCSSUnit( paginationSpacingFallback, paginationSpacingUnit ),
			'justify-content': paginationAlignment,
		},
	};

	if ( 'left' === paginationAlignment ) {
		selectors[ ' .uagb-post-pagination-wrap' ][ 'margin-left' ] = generateCSSUnit( rowGapFallback / 2, rowGapUnit );
	} else if ( 'right' === paginationAlignment ) {
		selectors[ ' .uagb-post-pagination-wrap' ][ 'margin-right' ] = generateCSSUnit(
			rowGapFallback / 2,
			rowGapUnit
		);
	}

	selectors[ ' .uagb-post__title' ] = {
		'color': titleColor,
		'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
		'font-family': titleFontFamily,
		'font-weight': titleFontWeight,
		'line-height': generateCSSUnit( titleLineHeight, titleLineHeightType ),
		'text-transform': titleTransform,
		'text-decoration': titleDecoration,
		'font-style': titleFontStyle,
		'letter-spacing': generateCSSUnit( titleLetterSpacing, titleLetterSpacingType ),
	};
	selectors[ ' .uagb-post__title a' ] = {
		'color': titleColor,
		'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
		'font-family': titleFontFamily,
		'font-weight': titleFontWeight,
		'line-height': generateCSSUnit( titleLineHeight, titleLineHeightType ),
		'letter-spacing': generateCSSUnit( titleLetterSpacing, titleLetterSpacingType ),
	};
	selectors[ ' .uagb-post-grid-byline' ] = {
		'color': metaColor,
		'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
		'font-family': metaFontFamily,
		'font-weight': metaFontWeight,
		'line-height': generateCSSUnit( metaLineHeight, metaLineHeightType ),
		'text-transform': metaTransform,
		'text-decoration': metaDecoration,
		'font-style': metaFontStyle,
		'letter-spacing': generateCSSUnit( metaLetterSpacing, metaLetterSpacingType ),
	};
	selectors[ ' .uagb-post-grid-byline time' ] = {
		'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
		'font-family': metaFontFamily,
		'font-weight': metaFontWeight,
		'line-height': generateCSSUnit( metaLineHeight, metaLineHeightType ),
		'text-transform': metaTransform,
		'text-decoration': metaDecoration,
		'font-style': metaFontStyle,
		'letter-spacing': generateCSSUnit( metaLetterSpacing, metaLetterSpacingType ),
	};
	selectors[ ' .uagb-post-grid-byline span.uagb-post__comment' ] = {
		'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
		'font-family': metaFontFamily,
		'font-weight': metaFontWeight,
		'line-height': generateCSSUnit( metaLineHeight, metaLineHeightType ),
		'text-transform': metaTransform,
		'text-decoration': metaDecoration,
		'font-style': metaFontStyle,
		'letter-spacing': generateCSSUnit( metaLetterSpacing, metaLetterSpacingType ),
	};
	selectors[ ' span.uagb-post__taxonomy' ] = {
		'color': metaColor,
		'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
		'font-family': metaFontFamily,
		'font-weight': metaFontWeight,
		'line-height': generateCSSUnit( metaLineHeight, metaLineHeightType ),
		'text-transform': metaTransform,
		'text-decoration': metaDecoration,
		'font-style': metaFontStyle,
		'letter-spacing': generateCSSUnit( metaLetterSpacing, metaLetterSpacingType ),
	};
	selectors[ ' span.uagb-post__taxonomy.highlighted' ] = {
		'color': highlightedTextColor,
		'background-color': highlightedTextBgColor,
		'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
		'font-family': metaFontFamily,
		'font-weight': metaFontWeight,
		'line-height': generateCSSUnit( metaLineHeight, metaLineHeightType ),
		'text-transform': metaTransform,
		'text-decoration': metaDecoration,
		'font-style': metaFontStyle,
		'letter-spacing': generateCSSUnit( metaLetterSpacing, metaLetterSpacingType ),
	};
	selectors[ ' .uagb-post-grid-byline .uagb-post__author' ] = {
		'color': metaColor,
		'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
		'font-family': metaFontFamily,
		'font-weight': metaFontWeight,
		'line-height': generateCSSUnit( metaLineHeight, metaLineHeightType ),
		'text-transform': metaTransform,
		'text-decoration': metaDecoration,
		'letter-spacing': generateCSSUnit( metaLetterSpacing, metaLetterSpacingType ),
	};
	selectors[ ' .uagb-post-grid-byline .uagb-post__author a' ] = {
		'color': metaColor,
		'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
		'font-family': metaFontFamily,
		'font-weight': metaFontWeight,
		'line-height': generateCSSUnit( metaLineHeight, metaLineHeightType ),
		'text-transform': metaTransform,
		'text-decoration': metaDecoration,
		'letter-spacing': generateCSSUnit( metaLetterSpacing, metaLetterSpacingType ),
	};
	selectors[ ' .uagb-post__excerpt' ] = {
		'color': excerptColor,
		'font-size': generateCSSUnit( excerptFontSize, excerptFontSizeType ),
		'font-family': excerptFontFamily,
		'font-weight': excerptFontWeight,
		'line-height': generateCSSUnit( excerptLineHeight, excerptLineHeightType ),
		'font-style': excerptFontStyle,
		'text-transform': excerptTransform,
		'text-decoration': excerptDecoration,
		'letter-spacing': generateCSSUnit( excerptLetterSpacing, excerptLetterSpacingType ),
	};
	selectors[ ' .uagb-post__cta .uagb-text-link' ] = {
		'pointer-events': 'visible',
		'color': ctaColor,
		'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'font-family': ctaFontFamily,
		'font-weight': ctaFontWeight,
		'font-style': ctaFontStyle,
		'line-height': generateCSSUnit( ctaLineHeight, ctaLineHeightType ),
		'background': ctaBgType === 'color' ? ctaBgColor : 'transparent',
		'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
		'padding-bottom': generateCSSUnit( paddingBtnBottom, paddingBtnUnit ),
		'text-transform': ctaTransform,
		'text-decoration': ctaDecoration,
		'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
		'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
		...borderCSS,
		'letter-spacing': generateCSSUnit( ctaLetterSpacing, ctaLetterSpacingType ),
	};
	selectors[
		' .uagb-post__inner-wrap .uagb-post__text .wp-block-button.uagb-post__cta:not(.is-style-outline) .uagb-text-link.wp-block-button__link:not(.has-background) '
	] = {
		'pointer-events': 'visible',
		'color': ctaColor,
		'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'font-family': ctaFontFamily,
		'font-weight': ctaFontWeight,
		'font-style': ctaFontStyle,
		'line-height': generateCSSUnit( ctaLineHeight, ctaLineHeightType ),
		'background': ctaBgColor,
		'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
		'padding-bottom': generateCSSUnit( paddingBtnBottom, paddingBtnUnit ),
		'text-transform': ctaTransform,
		'text-decoration': ctaDecoration,
		'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
		'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
		...borderCSS,
		'letter-spacing': generateCSSUnit( ctaLetterSpacing, ctaLetterSpacingType ),
	};
	selectors[
		' .uagb-post__inner-wrap .uagb-post__text .wp-block-button.uagb-post__cta:not(.is-style-outline) .uagb-text-link.wp-block-button__link:not(.has-background):hover'
	] = {
		'color': ctaHColor,
		'background': ctaBgHType === 'color' ? ctaBgHColor : 'transparent',
		'border-color': btnBorderHColor,
	};

	if ( true === postPagination ) {
		if ( 'filled' === paginationLayout ) {
			selectors[ ' .uagb-post-pagination-wrap a' ] = {
				'background-color': paginationBgColor,
				'color': paginationColor,
			};
			if ( 'undefined' === typeof paginationBgActiveColor && 'undefined' === typeof paginationActiveColor ) {
				selectors[ ' .uagb-post-pagination-wrap .page-numbers.current' ] = {
					'background-color': paginationBgColor,
					'color': paginationColor,
				};
			}
			if ( 'undefined' === typeof paginationBgActiveColor && 'undefined' !== typeof paginationActiveColor ) {
				selectors[ ' .uagb-post-pagination-wrap .page-numbers.current' ] = {
					'background-color': paginationBgColor,
					'color': paginationActiveColor,
				};
			}
			if ( 'undefined' !== typeof paginationBgActiveColor && 'undefined' === typeof paginationActiveColor ) {
				selectors[ ' .uagb-post-pagination-wrap .page-numbers.current' ] = {
					'background-color': paginationBgActiveColor,
					'color': paginationColor,
				};
			}
			if ( 'undefined' !== typeof paginationBgActiveColor && 'undefined' !== typeof paginationActiveColor ) {
				selectors[ ' .uagb-post-pagination-wrap .page-numbers.current' ] = {
					'background-color': paginationBgActiveColor,
					'color': paginationActiveColor,
				};
			}
		}
		if ( 'border' === paginationLayout ) {
			selectors[ ' .uagb-post-pagination-wrap a' ] = {
				'border-style': 'solid',
				'border-width': generateCSSUnit( paginationBorderSizeFallback, 'px' ),
				'border-color': paginationBorderColor,
				'border-radius': generateCSSUnit( paginationBorderRadiusFallback, 'px' ),
				'color': paginationColor,
				'background-color': 'transparent',
			};
			if ( 'undefined' !== typeof paginationBorderActiveColor && 'undefined' !== typeof paginationActiveColor ) {
				selectors[ ' .uagb-post-pagination-wrap .page-numbers.current' ] = {
					'border-style': 'solid',
					'border-width': generateCSSUnit( paginationBorderSizeFallback, 'px' ),
					'border-color': paginationBorderActiveColor,
					'border-radius': generateCSSUnit( paginationBorderRadiusFallback, 'px' ),
					'color': paginationActiveColor,
					'background-color': 'transparent',
				};
			}
			if ( 'undefined' === typeof paginationBorderActiveColor && 'undefined' !== typeof paginationActiveColor ) {
				selectors[ ' .uagb-post-pagination-wrap .page-numbers.current' ] = {
					'border-style': 'solid',
					'border-width': generateCSSUnit( paginationBorderSizeFallback, 'px' ),
					'border-color': paginationBorderColor,
					'border-radius': generateCSSUnit( paginationBorderRadiusFallback, 'px' ),
					'color': paginationActiveColor,
					'background-color': 'transparent',
				};
			}
			if ( 'undefined' !== typeof paginationBorderActiveColor && 'undefined' === typeof paginationActiveColor ) {
				selectors[ ' .uagb-post-pagination-wrap .page-numbers.current' ] = {
					'border-style': 'solid',
					'border-width': generateCSSUnit( paginationBorderSizeFallback, 'px' ),
					'border-color': paginationBorderActiveColor,
					'border-radius': generateCSSUnit( paginationBorderRadiusFallback, 'px' ),
					'color': paginationColor,
					'background-color': 'transparent',
				};
			}
			if ( 'undefined' === typeof paginationBorderHColor && 'undefined' === typeof paginationActiveColor ) {
				selectors[ ' .uagb-post-pagination-wrap .page-numbers.current' ] = {
					'border-style': 'solid',
					'border-width': generateCSSUnit( paginationBorderSizeFallback, 'px' ),
					'border-color': paginationBorderColor,
					'border-radius': generateCSSUnit( paginationBorderRadiusFallback, 'px' ),
					'color': paginationColor,
					'background-color': 'transparent',
				};
			}
		}
	}

	if ( linkBox ) {
		selectors[ ' .uagb-post__inner-wrap' ].cursor = 'pointer';
	}

	selectors[ ' .slick-arrow svg' ] = {
		'fill': arrowColor,
		'height': generateCSSUnit( arrowSizeFallback, 'px' ),
		'width': generateCSSUnit( arrowSizeFallback, 'px' ),
	};

	selectors[ '.uagb-post__arrow-outside.uagb-post-grid .slick-prev' ] = {
		'left': generateCSSUnit( arrowDistance, 'px' ),
	};

	selectors[ '.uagb-post__arrow-outside.uagb-post-grid .slick-next' ] = {
		'right': generateCSSUnit( arrowDistance, 'px' ),
	};

	mobileSelectors = {
		'.wp-block-uagb-post-grid': {
			'grid-template-columns': 'repeat(' + mcolumns + ' , minmax(0, 1fr))',
		},
		'.uagb-post__arrow-outside.uagb-post-grid .slick-prev': {
			'left': generateCSSUnit( arrowDistanceMobile, 'px' ),
		},
		'.uagb-post__arrow-outside.uagb-post-grid .slick-next': {
			'right': generateCSSUnit( arrowDistanceMobile, 'px' ),
		},
		' .uagb-post__inner-wrap .uagb-post__title': {
			'font-size': generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
			'line-height': titleLineHeightMobile + titleLineHeightType,
			'padding-bottom': generateCSSUnit( titleBottomSpaceMobile, titleBottomSpaceUnit ),
		},
		'.wp-block-uagb-post-grid .uagb-post__inner-wrap': overallBorderCSSMobile,
		' .uagb-post__title a': {
			'font-size': generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
			'line-height': titleLineHeightMobile + titleLineHeightType,
			'letter-spacing': generateCSSUnit( titleLetterSpacingMobile, titleLetterSpacingType ),
		},
		' .uagb-post__inner-wrap .uagb-post-grid-byline': {
			'font-size': generateCSSUnit( metaFontSizeMobile, metaFontSizeType ),
			'line-height': metaLineHeightMobile + metaLineHeightType,
			'padding-bottom': generateCSSUnit( metaBottomSpaceMobile, metaBottomSpaceUnit ),
			'letter-spacing': generateCSSUnit( metaLetterSpacingMobile, metaLetterSpacingType ),
		},
		' span.uagb-post__taxonomy.default': {
			'font-size': generateCSSUnit( metaFontSizeMobile, metaFontSizeType ),
			'line-height': metaLineHeightMobile + metaLineHeightType,
			'letter-spacing': generateCSSUnit( metaLetterSpacingMobile, metaLetterSpacingType ),
		},
		' .uagb-post-grid-byline .uagb-post__author': {
			'font-size': generateCSSUnit( metaFontSizeMobile, metaFontSizeType ),
			'line-height': metaLineHeightMobile + metaLineHeightType,
			'letter-spacing': generateCSSUnit( metaLetterSpacingMobile, metaLetterSpacingType ),
		},
		' .uagb-post-grid-byline .uagb-post__author a': {
			'font-size': generateCSSUnit( metaFontSizeMobile, metaFontSizeType ),
			'line-height': metaLineHeightMobile + metaLineHeightType,
			'letter-spacing': generateCSSUnit( metaLetterSpacingMobile, metaLetterSpacingType ),
		},
		' .uagb-post__inner-wrap .uagb-post__excerpt': {
			'font-size': generateCSSUnit( excerptFontSizeMobile, excerptFontSizeType ),
			'line-height': excerptLineHeightMobile + excerptLineHeightType,
			'padding-bottom': generateCSSUnit( excerptBottomSpaceMobile, excerptBottomSpaceUnit ),
			'letter-spacing': generateCSSUnit( excerptLetterSpacingMobile, excerptLetterSpacingType ),
		},
		' .uagb-post__inner-wrap .uagb-post__cta': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'line-height': ctaLineHeightMobile + ctaLineHeightType,
			'padding-bottom': generateCSSUnit( ctaBottomSpaceMobile, ctaBottomSpaceUnit ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingMobile, ctaLetterSpacingType ),
		},
		' .uagb-post__inner-wrap .uagb-post__cta a': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'line-height': ctaLineHeightMobile + ctaLineHeightType,
			'padding-top': generateCSSUnit( paddingBtnTopMobile, mobilePaddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottomMobile, mobilePaddingBtnUnit ),
			'padding-left': generateCSSUnit( paddingBtnLeftMobile, mobilePaddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRightMobile, mobilePaddingBtnUnit ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingMobile, ctaLetterSpacingType ),
		},
		' .uagb-post__inner-wrap .uagb-post__image': {
			'padding-bottom': generateCSSUnit( imageBottomSpaceMobile, imageBottomSpaceUnit ),
		},
		'.uagb-post__items': {
			'margin-right': generateCSSUnit( -rowGapMobileFallback / 2, rowGapUnit ),
			'margin-left': generateCSSUnit( -rowGapMobileFallback / 2, rowGapUnit ),
		},
		':not(.wp-block-uagb-post-grid).uagb-post__items article': {
			'padding-right': generateCSSUnit( rowGapMobileFallback / 2, rowGapUnit ),
			'padding-left': generateCSSUnit( rowGapMobileFallback / 2, rowGapUnit ),
			'margin-bottom': generateCSSUnit( columnGapMobile, columnGapUnit ),
		},
		'.wp-block-uagb-post-grid.uagb-post__items': {
			'column-gap': generateCSSUnit( columnGapMobile, columnGapUnit ),
			'row-gap': generateCSSUnit( rowGapMobile, rowGapUnit ),
		},
		' .is-masonry': {
			'height': 'initial !important',
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text:not(.highlighted)': {
			'margin-left': generateCSSUnit( paddingLeftMobile, mobilePaddingUnit ),
			'margin-right': generateCSSUnit( paddingRightMobile, mobilePaddingUnit ),
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text.highlighted': {
			'margin-left': generateCSSUnit( paddingLeftMobile, mobilePaddingUnit ),
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text:first-child': {
			'margin-top': generateCSSUnit( paddingTopMobile, mobilePaddingUnit ),
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text:last-child': {
			'margin-bottom': generateCSSUnit( paddingBottomMobile, mobilePaddingUnit ),
		},
	};

	const boxShadowBlurHoverValue = isNaN( boxShadowBlurHover ) ? '' : boxShadowBlurHover;
	const boxShadowColorHoverValue = boxShadowColorHover ? boxShadowColorHover : '';

	if ( '' !== boxShadowColorHoverValue || '' !== boxShadowBlurHoverValue ) {
		const boxShadowBlurHoverCSSUnit =
			'' === boxShadowBlurHoverValue ? '' : generateCSSUnit( boxShadowBlurHoverValue, 'px' );

		selectors[ '.wp-block-uagb-post-grid .uagb-post__inner-wrap:hover' ] = {
			'box-shadow':
				generateCSSUnit( boxShadowHOffsetHover, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffsetHover, 'px' ) +
				' ' +
				boxShadowBlurHoverCSSUnit +
				' ' +
				generateCSSUnit( boxShadowSpreadHover, 'px' ) +
				' ' +
				boxShadowColorHoverValue +
				' ' +
				boxShadowPositionCSSHover,
		};
	}
	selectors[ '.wp-block-uagb-post-grid article:hover' ] = {
		'border-color': overallBorderHColor,
	};
	tabletSelectors = {
		'.wp-block-uagb-post-grid': {
			'grid-template-columns': 'repeat(' + tcolumns + ' , minmax(0, 1fr))',
		},
		'.uagb-post__arrow-outside.uagb-post-grid .slick-prev': {
			'left': generateCSSUnit( arrowDistanceTablet, 'px' ),
		},
		'.uagb-post__arrow-outside.uagb-post-grid .slick-next': {
			'right': generateCSSUnit( arrowDistanceTablet, 'px' ),
		},
		' .uagb-post__inner-wrap .uagb-post__title': {
			'font-size': generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			'line-height': titleLineHeightTablet + titleLineHeightType,
			'padding-bottom': generateCSSUnit( titleBottomSpaceTablet, titleBottomSpaceUnit ),
		},
		' .uagb-post__title a': {
			'font-size': generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			'line-height': titleLineHeightTablet + titleLineHeightType,
			'letter-spacing': generateCSSUnit( titleLetterSpacingTablet, titleLetterSpacingType ),
		},
		' .uagb-post__inner-wrap .uagb-post-grid-byline': {
			'font-size': generateCSSUnit( metaFontSizeTablet, metaFontSizeType ),
			'line-height': metaLineHeightTablet + metaLineHeightType,
			'padding-bottom': generateCSSUnit( metaBottomSpaceTablet, metaBottomSpaceUnit ),
			'letter-spacing': generateCSSUnit( metaLetterSpacingTablet, metaLetterSpacingType ),
		},
		' span.uagb-post__taxonomy.default': {
			'font-size': generateCSSUnit( metaFontSizeTablet, metaFontSizeType ),
			'line-height': metaLineHeightTablet + metaLineHeightType,
			'letter-spacing': generateCSSUnit( metaLetterSpacingTablet, metaLetterSpacingType ),
		},
		' .uagb-post-grid-byline .uagb-post__author': {
			'font-size': generateCSSUnit( metaFontSizeTablet, metaFontSizeType ),
			'line-height': metaLineHeightTablet + metaLineHeightType,
			'letter-spacing': generateCSSUnit( metaLetterSpacingTablet, metaLetterSpacingType ),
		},
		' .uagb-post-grid-byline .uagb-post__author a': {
			'font-size': generateCSSUnit( metaFontSizeTablet, metaFontSizeType ),
			'line-height': metaLineHeightTablet + metaLineHeightType,
			'letter-spacing': generateCSSUnit( metaLetterSpacingTablet, metaLetterSpacingType ),
		},
		' .uagb-post__inner-wrap .uagb-post__excerpt': {
			'font-size': generateCSSUnit( excerptFontSizeTablet, excerptFontSizeType ),
			'line-height': excerptLineHeightTablet + excerptLineHeightType,
			'padding-bottom': generateCSSUnit( excerptBottomSpaceTablet, excerptBottomSpaceUnit ),
			'letter-spacing': generateCSSUnit( excerptLetterSpacingTablet, excerptLetterSpacingType ),
		},
		' .uagb-post__inner-wrap .uagb-post__cta': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'line-height': ctaLineHeightTablet + ctaLineHeightType,
			'padding-bottom': generateCSSUnit( ctaBottomSpaceTablet, ctaBottomSpaceUnit ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingTablet, ctaLetterSpacingType ),
		},
		' .uagb-post__inner-wrap .uagb-post__cta .uagb-text-link': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'line-height': ctaLineHeightTablet + ctaLineHeightType,
			'padding-top': generateCSSUnit( paddingBtnTopTablet, tabletPaddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottomTablet, tabletPaddingBtnUnit ),
			'padding-left': generateCSSUnit( paddingBtnLeftTablet, tabletPaddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRightTablet, tabletPaddingBtnUnit ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingTablet, ctaLetterSpacingType ),
		},
		' .uagb-post__inner-wrap .uagb-post__image': {
			'padding-bottom': generateCSSUnit( imageBottomSpaceTablet, imageBottomSpaceUnit ),
		},
		'.uagb-post__items': {
			'margin-right': generateCSSUnit( -rowGapTabletFallback / 2, rowGapUnit ),
			'margin-left': generateCSSUnit( -rowGapTabletFallback / 2, rowGapUnit ),
		},
		':not(.wp-block-uagb-post-grid).uagb-post__items article': {
			'padding-right': generateCSSUnit( rowGapTabletFallback / 2, rowGapUnit ),
			'padding-left': generateCSSUnit( rowGapTabletFallback / 2, rowGapUnit ),
			'margin-bottom': generateCSSUnit( columnGapTablet, columnGapUnit ),
		},
		'.wp-block-uagb-post-grid.uagb-post__items': {
			'column-gap': generateCSSUnit( columnGapTablet, columnGapUnit ),
			'row-gap': generateCSSUnit( rowGapTablet, rowGapUnit ),
		},
		'.wp-block-uagb-post-grid .uagb-post__inner-wrap': overallBorderCSSTablet,
		' .is-masonry': {
			'height': 'initial !important',
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text:not(.highlighted)': {
			'margin-left': generateCSSUnit( paddingLeftTablet, tabletPaddingUnit ),
			'margin-right': generateCSSUnit( paddingRightTablet, tabletPaddingUnit ),
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text.highlighted': {
			'margin-left': generateCSSUnit( paddingLeftTablet, tabletPaddingUnit ),
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text:first-child': {
			'margin-top': generateCSSUnit( paddingTopTablet, tabletPaddingUnit ),
		},
		':not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap .uagb-post__text:last-child': {
			'margin-bottom': generateCSSUnit( paddingBottomTablet, tabletPaddingUnit ),
		},
	};

	if ( 'infinite' === paginationType ) {
		if ( 'button' === paginationEventType ) {
			selectors[ '.uagb-post__items' ] = {
				'margin-bottom': '40px',
			};
			selectors[ ' .uagb-post__load-more-wrap' ] = {
				'text-align': paginationAlign,
			};
			selectors[ ' .uagb-post__load-more-wrap .uagb-post-pagination-button' ] = {
				'color': paginationTextColor,
				'background-color': paginationMasonryBgColor,
				'font-size': generateCSSUnit( paginationFontSizeFallback, 'px' ),
				'padding-top': generateCSSUnit( paginationButtonPaddingTop, paginationButtonPaddingType ),
				'padding-bottom': generateCSSUnit( paginationButtonPaddingBottom, paginationButtonPaddingType ),
				'padding-right': generateCSSUnit( paginationButtonPaddingRight, paginationButtonPaddingType ),
				'padding-left': generateCSSUnit( paginationButtonPaddingLeft, paginationButtonPaddingType ),
				...paginationMasonryBorderCSS,
			};
			selectors[ ' .uagb-post__load-more-wrap .uagb-post-pagination-button:hover' ] = {
				'color': paginationTextHoverColor,
				'background-color': paginationBgHoverColor,
				'border-color': paginationMasonryBorderHColor,
			};
			mobileSelectors[ ' .uagb-post__load-more-wrap .uagb-post-pagination-button' ] = {
				'padding-top': generateCSSUnit( paginationButtonPaddingTopMobile, mobilepaginationButtonPaddingType ),
				'padding-bottom': generateCSSUnit(
					paginationButtonPaddingBottomMobile,
					mobilepaginationButtonPaddingType
				),
				'padding-right': generateCSSUnit(
					paginationButtonPaddingRightMobile,
					mobilepaginationButtonPaddingType
				),
				'padding-left': generateCSSUnit( paginationButtonPaddingLeftMobile, mobilepaginationButtonPaddingType ),
			};
			tabletSelectors[ ' .uagb-post__load-more-wrap .uagb-post-pagination-button' ] = {
				'padding-top': generateCSSUnit( paginationButtonPaddingTopTablet, tabletpaginationButtonPaddingType ),
				'padding-bottom': generateCSSUnit(
					paginationButtonPaddingRightTablet,
					tabletpaginationButtonPaddingType
				),
				'padding-right': generateCSSUnit(
					paginationButtonPaddingBottomTablet,
					tabletpaginationButtonPaddingType
				),
				'padding-left': generateCSSUnit( paginationButtonPaddingLeftTablet, tabletpaginationButtonPaddingType ),
			};
		}
		if ( 'scroll' === paginationEventType ) {
			selectors[ '.uagb-post-grid .uagb-post-inf-loader div' ] = {
				'width': generateCSSUnit( loaderSizeFallback, 'px' ),
				'height': generateCSSUnit( loaderSizeFallback, 'px' ),
				'background-color': loaderColor,
			};
		}
	}
	tabletSelectors[ '.uagb-post-grid .uagb-post__inner-wrap' ] = {
		'padding-top': generateCSSUnit( paddingTopTablet, tabletPaddingUnit ),
		'padding-bottom': generateCSSUnit( paddingBottomTablet, tabletPaddingUnit ),
		'padding-left': generateCSSUnit( paddingLeftTablet, tabletPaddingUnit ),
		'padding-right': generateCSSUnit( paddingRightTablet, tabletPaddingUnit ),
		...overallBorderCSSTablet,
	};
	mobileSelectors[ '.uagb-post-grid .uagb-post__inner-wrap' ] = {
		'padding-top': generateCSSUnit( paddingTopMobile, mobilePaddingUnit ),
		'padding-bottom': generateCSSUnit( paddingBottomMobile, mobilePaddingUnit ),
		'padding-left': generateCSSUnit( paddingLeftMobile, mobilePaddingUnit ),
		'padding-right': generateCSSUnit( paddingRightMobile, mobilePaddingUnit ),
		...overallBorderCSSMobile,
	};
	tabletSelectors[ ' .uagb-post__cta .uagb-text-link' ] = borderCSSTablet;
	mobileSelectors[ ' .uagb-post__cta .uagb-text-link' ] = borderCSSMobile;
	tabletSelectors[ ' .uagb-post__load-more-wrap .uagb-post-pagination-button' ] = paginationMasonryBorderCSSTablet;
	mobileSelectors[ ' .uagb-post__load-more-wrap .uagb-post-pagination-button' ] = paginationMasonryBorderCSSMobile;
	if ( 'background' === imgPosition ) {
		selectors[ ' .uagb-post__inner-wrap .uagb-post__text:nth-child(2)' ] = {
			'margin-top': generateCSSUnit( paddingTop, contentPaddingUnit ),
		};
	}

	if ( imgPosition !== 'background' ) {
		selectors[ '.wp-block-uagb-post-grid .uagb-post__inner-wrap  > .uagb-post__image:first-child' ] = {
			'margin-top': generateCSSUnit( -paddingTop, contentPaddingUnit ),
			'margin-left': generateCSSUnit( -paddingLeft, contentPaddingUnit ),
			'margin-right': generateCSSUnit( -paddingRight, contentPaddingUnit ),
		};
		mobileSelectors[ '.wp-block-uagb-post-grid .uagb-post__inner-wrap  > .uagb-post__image:first-child' ] = {
			'margin-top': generateCSSUnit( -paddingTopMobile, mobilePaddingUnit ),
			'margin-left': generateCSSUnit( -paddingLeftMobile, mobilePaddingUnit ),
			'margin-right': generateCSSUnit( -paddingRightMobile, mobilePaddingUnit ),
		};
		tabletSelectors[ '.wp-block-uagb-post-grid .uagb-post__inner-wrap  > .uagb-post__image:first-child' ] = {
			'margin-top': generateCSSUnit( -paddingTopTablet, tabletPaddingUnit ),
			'margin-left': generateCSSUnit( -paddingLeftTablet, tabletPaddingUnit ),
			'margin-right': generateCSSUnit( -paddingRightTablet, tabletPaddingUnit ),
		};
	}

	tabletSelectors[
		' .uagb-post__inner-wrap .uagb-post__text .wp-block-button.uagb-post__cta:not(.is-style-outline) .uagb-text-link.wp-block-button__link:not(.has-background) '
	] = borderCSSTablet;
	mobileSelectors[
		' .uagb-post__inner-wrap .uagb-post__text .wp-block-button.uagb-post__cta:not(.is-style-outline) .uagb-text-link.wp-block-button__link:not(.has-background) '
	] = borderCSSMobile;

	// post carousal margin top for dots
	selectors[ ' .slick-dots' ] = {
		'margin-top': generateCSSUnit( dotsMarginTopFallback, dotsMarginTopUnit ) + '!important',
	};
	tabletSelectors[ ' .slick-dots' ] = {
		'margin-top': generateCSSUnit( dotsMarginTopTabletFallback, dotsMarginTopUnit ) + '!important',
	};
	mobileSelectors[ ' .slick-dots' ] = {
		'margin-top': generateCSSUnit( dotsMarginTopMobileFallback, dotsMarginTopUnit ) + '!important',
	};

	if ( 'post-grid' === blockName ) {
		selectors[
			'.uagb-equal_height_inline-read-more-buttons-in-editor .uagb-post__inner-wrap .uagb-post__text:last-child'
		] = {
			'left': generateCSSUnit( paddingLeft, contentPaddingUnit ),
			'right': generateCSSUnit( paddingRight, contentPaddingUnit ),
		};
		tabletSelectors[
			'.uagb-equal_height_inline-read-more-buttons-in-editor .uagb-post__inner-wrap .uagb-post__text:last-child'
		] = {
			'left': generateCSSUnit( paddingLeftTablet, tabletPaddingUnit ),
			'right': generateCSSUnit( paddingRightTablet, tabletPaddingUnit ),
		};
		mobileSelectors[
			'.uagb-equal_height_inline-read-more-buttons-in-editor .uagb-post__inner-wrap .uagb-post__text:last-child'
		] = {
			'left': generateCSSUnit( paddingLeftMobile, mobilePaddingUnit ),
			'right': generateCSSUnit( paddingRightMobile, mobilePaddingUnit ),
		};
	}

	let stylingCss = '';

	stylingCss = generateCSS( selectors, `.editor-styles-wrapper .uagb-block-${ clientId.substr( 0, 8 ) }` );

	stylingCss += generateCSS( tabletSelectors, `.uagb-block-${ clientId.substr( 0, 8 ) }`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `.uagb-block-${ clientId.substr( 0, 8 ) }`, true, 'mobile' );

	return stylingCss;
}

export default styling;
