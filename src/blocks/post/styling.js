/**
 * Set inline styles.
 *
 * @param  {Object} props - The block object.
 * @return {Object} The inline background type CSS.
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		borderWidth,
		borderStyle,
		borderColor,
		borderHColor,
		borderRadius,
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
		ctaBgColor,
		ctaHColor,
		ctaBgHColor,
		ctaTransform,
		ctaDecoration,
		ctaBottomSpaceUnit,

		imageBottomSpace,
		imageBottomSpaceUnit,

		overlayOpacity,
		bgOverlayColor,
		postPagination,
		rowGapUnit,
		columnGapUnit,
		rowGap,
		columnGap,
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
		paginationMasonryBorderStyle,
		paginationMasonryBorderWidth,
		paginationMasonryBorderRadius,
		paginationMasonryBorderColor,
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
	} = props.attributes;

	let mobileSelectors = {};
	let tabletSelectors = {};

	const selectors = {
		'.uagb-post__items': {
			'margin-right': generateCSSUnit( -rowGap / 2, rowGapUnit ),
			'margin-left': generateCSSUnit( -rowGap / 2, rowGapUnit ),
		},
		'.uagb-post__items article': {
			'padding-right': generateCSSUnit( rowGap / 2, rowGapUnit ),
			'padding-left': generateCSSUnit( rowGap / 2, rowGapUnit ),
			'margin-bottom': generateCSSUnit( columnGap, columnGapUnit ),
		},
		' .uagb-post__inner-wrap': {
			'background': bgColor,
			'text-align': align,
		},
		' .uagb-post__inner-wrap .uagb-post__text': {
			'margin-left': generateCSSUnit( paddingLeft, contentPaddingUnit ),
			'margin-right': generateCSSUnit(
				paddingRight,
				contentPaddingUnit
			),
		},
		' .uagb-post__inner-wrap .uagb-post__text:first-child': {
			'margin-top': generateCSSUnit( paddingTop, contentPaddingUnit ),
		},
		' .uagb-post__inner-wrap .uagb-post__text.uagb-post__title': {
			'margin-top': generateCSSUnit( paddingTop, contentPaddingUnit ),
		},
		' .uagb-post__inner-wrap .uagb-post__text:last-child': {
			'margin-bottom': generateCSSUnit(
				paddingBottom,
				contentPaddingUnit
			),
		},
		' .uagb-post__inner-wrap .uagb-post__cta': {
			'margin-bottom': generateCSSUnit(
				ctaBottomSpace,
				ctaBottomSpaceUnit
			),
		},
		' .uagb-post__inner-wrap .uagb-post__image': {
			'margin-bottom': generateCSSUnit(
				imageBottomSpace,
				imageBottomSpaceUnit
			),
		},
		' .uagb-post__inner-wrap .uagb-post__title': {
			'margin-bottom': generateCSSUnit(
				titleBottomSpace,
				titleBottomSpaceUnit
			),
		},
		' .uagb-post__inner-wrap .uagb-post-grid-byline': {
			'margin-bottom': generateCSSUnit(
				metaBottomSpace,
				metaBottomSpaceUnit
			),
		},
		' .uagb-post__inner-wrap .uagb-post__excerpt': {
			'margin-bottom': generateCSSUnit(
				excerptBottomSpace,
				excerptBottomSpaceUnit
			),
		},
		' .uagb-post__image:before': {
			'background-color': bgOverlayColor,
			'opacity': overlayOpacity / 100,
		},
		' .uagb-post-pagination-wrap': {
			'margin-top': generateCSSUnit(
				paginationSpacing,
				paginationSpacingUnit
			),
			'justify-content': paginationAlignment,
		},
	};

	if ( 'left' === paginationAlignment ) {
		selectors[' .uagb-post-pagination-wrap']['margin-left'] = generateCSSUnit( rowGap / 2, rowGapUnit );
	} else if ( 'right' === paginationAlignment ) {
		selectors[' .uagb-post-pagination-wrap']['margin-right'] = generateCSSUnit( rowGap / 2, rowGapUnit );
	}

	selectors[ ' .uagb-post__title' ] = {
		'color': titleColor,
		'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
		'font-family': titleFontFamily,
		'font-weight': titleFontWeight,
		'line-height': generateCSSUnit(
			titleLineHeight,
			titleLineHeightType
		),
		'text-transform': titleTransform,
		'text-decoration': titleDecoration,
		'font-style': titleFontStyle,
	};
	selectors[ ' .uagb-post__title a' ] = {
		'color': titleColor,
		'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
		'font-family': titleFontFamily,
		'font-weight': titleFontWeight,
		'line-height': generateCSSUnit(
			titleLineHeight,
			titleLineHeightType
		),
	};
	selectors[ ' .uagb-post-grid-byline' ] = {
		'color': metaColor,
		'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
		'font-family': metaFontFamily,
		'font-weight': metaFontWeight,
		'line-height': generateCSSUnit(
			metaLineHeight,
			metaLineHeightType
		),
		'text-transform': metaTransform,
		'text-decoration': metaDecoration,
		'font-style': metaFontStyle,
	};
	selectors[ ' .uagb-post-grid-byline .uagb-post__author' ] = {
		'color': metaColor,
		'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
		'font-family': metaFontFamily,
		'font-weight': metaFontWeight,
		'line-height': generateCSSUnit(
			metaLineHeight,
			metaLineHeightType
		),
		'text-transform': metaTransform,
		'text-decoration': metaDecoration,
	};
	selectors[ ' .uagb-post-grid-byline .uagb-post__author a' ] = {
		'color': metaColor,
		'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
		'font-family': metaFontFamily,
		'font-weight': metaFontWeight,
		'line-height': generateCSSUnit(
			metaLineHeight,
			metaLineHeightType
		),
		'text-transform': metaTransform,
		'text-decoration': metaDecoration,
	};
	selectors[ ' .uagb-post__excerpt' ] = {
		'color': excerptColor,
		'font-size': generateCSSUnit(
			excerptFontSize,
			excerptFontSizeType
		),
		'font-family': excerptFontFamily,
		'font-weight': excerptFontWeight,
		'line-height': generateCSSUnit(
			excerptLineHeight,
			excerptLineHeightType
		),
		'font-style': excerptFontStyle,
		'text-transform': excerptTransform,
		'text-decoration': excerptDecoration,
	};
	selectors[ ' .uagb-post__cta .uagb-text-link' ] = {
		'pointer-events': 'visible',
		'color': ctaColor,
		'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'font-family': ctaFontFamily,
		'font-weight': ctaFontWeight,
		'font-style': ctaFontStyle,
		'line-height': generateCSSUnit( ctaLineHeight, ctaLineHeightType ),
		'background': ctaBgColor,
		'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
		'padding-bottom': generateCSSUnit(
			paddingBtnBottom,
			paddingBtnUnit
		),
		'text-transform': ctaTransform,
		'text-decoration': ctaDecoration,
		'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
		'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
		'border-width': generateCSSUnit( borderWidth, 'px' ),
		'border-radius': generateCSSUnit( borderRadius, 'px' ),
		'border-color': borderColor,
		'border-style': borderStyle,
	};
	selectors[ ' .uagb-post__text .uagb-post__cta:hover' ] = {
		'color': ctaHColor,
		'background': ctaBgHColor,
		'border-color': borderHColor,
	};
	selectors[ ' .uagb-post__text .uagb-post__cta:hover a' ] = {
		'color': ctaHColor,
		'background': ctaBgHColor,
		'border-color': borderHColor,
	};

	if ( true === postPagination ) {
		if ( 'filled' === paginationLayout ) {
			selectors[ ' .uagb-post-pagination-wrap a' ] = {
				'background-color': paginationBgColor,
				'color': paginationColor,
			};
			if (
				'undefined' === typeof paginationBgActiveColor &&
				'undefined' === typeof paginationActiveColor
			) {
				selectors[
					' .uagb-post-pagination-wrap .page-numbers.current'
				] = {
					'background-color': paginationBgColor,
					'color': paginationColor,
				};
			}
			if (
				'undefined' === typeof paginationBgActiveColor &&
				'undefined' !== typeof paginationActiveColor
			) {
				selectors[
					' .uagb-post-pagination-wrap .page-numbers.current'
				] = {
					'background-color': paginationBgColor,
					'color': paginationActiveColor,
				};
			}
			if (
				'undefined' !== typeof paginationBgActiveColor &&
				'undefined' === typeof paginationActiveColor
			) {
				selectors[
					' .uagb-post-pagination-wrap .page-numbers.current'
				] = {
					'background-color': paginationBgActiveColor,
					'color': paginationColor,
				};
			}
			if (
				'undefined' !== typeof paginationBgActiveColor &&
				'undefined' !== typeof paginationActiveColor
			) {
				selectors[
					' .uagb-post-pagination-wrap .page-numbers.current'
				] = {
					'background-color': paginationBgActiveColor,
					'color': paginationActiveColor,
				};
			}
		}
		if ( 'border' === paginationLayout ) {
			selectors[ ' .uagb-post-pagination-wrap a' ] = {
				'border-style': 'solid',
				'border-width': generateCSSUnit( paginationBorderSize, 'px' ),
				'border-color': paginationBorderColor,
				'border-radius': generateCSSUnit(
					paginationBorderRadius,
					'px'
				),
				'color': paginationColor,
				'background-color': 'transparent',
			};
			if (
				'undefined' !== typeof paginationBorderActiveColor &&
				'undefined' !== typeof paginationActiveColor
			) {
				selectors[
					' .uagb-post-pagination-wrap .page-numbers.current'
				] = {
					'border-style': 'solid',
					'border-width': generateCSSUnit(
						paginationBorderSize,
						'px'
					),
					'border-color': paginationBorderActiveColor,
					'border-radius': generateCSSUnit(
						paginationBorderRadius,
						'px'
					),
					'color': paginationActiveColor,
					'background-color': 'transparent',
				};
			}
			if (
				'undefined' === typeof paginationBorderActiveColor &&
				'undefined' !== typeof paginationActiveColor
			) {
				selectors[
					' .uagb-post-pagination-wrap .page-numbers.current'
				] = {
					'border-style': 'solid',
					'border-width': generateCSSUnit(
						paginationBorderSize,
						'px'
					),
					'border-color': paginationBorderColor,
					'border-radius': generateCSSUnit(
						paginationBorderRadius,
						'px'
					),
					'color': paginationActiveColor,
					'background-color': 'transparent',
				};
			}
			if (
				'undefined' !== typeof paginationBorderActiveColor &&
				'undefined' === typeof paginationActiveColor
			) {
				selectors[
					' .uagb-post-pagination-wrap .page-numbers.current'
				] = {
					'border-style': 'solid',
					'border-width': generateCSSUnit(
						paginationBorderSize,
						'px'
					),
					'border-color': paginationBorderActiveColor,
					'border-radius': generateCSSUnit(
						paginationBorderRadius,
						'px'
					),
					'color': paginationColor,
					'background-color': 'transparent',
				};
			}
			if (
				'undefined' === typeof paginationBorderActiveColor &&
				'undefined' === typeof paginationActiveColor
			) {
				selectors[
					' .uagb-post-pagination-wrap .page-numbers.current'
				] = {
					'border-style': 'solid',
					'border-width': generateCSSUnit(
						paginationBorderSize,
						'px'
					),
					'border-color': paginationBorderColor,
					'border-radius': generateCSSUnit(
						paginationBorderRadius,
						'px'
					),
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
		'height': generateCSSUnit( arrowSize, 'px' ),
		'width': generateCSSUnit( arrowSize, 'px' ),
	};


	mobileSelectors = {
		' .uagb-post__title': {
			'font-size': generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
			'line-height': titleLineHeightMobile + titleLineHeightType,
		},
		' .uagb-post__title a': {
			'font-size': generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
			'line-height': titleLineHeightMobile + titleLineHeightType,
		},
		' .uagb-post-grid-byline': {
			'font-size': generateCSSUnit(
				metaFontSizeMobile,
				metaFontSizeType
			),
			'line-height': metaLineHeightMobile + metaLineHeightType,
		},
		' .uagb-post-grid-byline .uagb-post__author': {
			'font-size': generateCSSUnit(
				metaFontSizeMobile,
				metaFontSizeType
			),
			'line-height': metaLineHeightMobile + metaLineHeightType,
		},
		' .uagb-post-grid-byline .uagb-post__author a': {
			'font-size': generateCSSUnit(
				metaFontSizeMobile,
				metaFontSizeType
			),
			'line-height': metaLineHeightMobile + metaLineHeightType,
		},
		' .uagb-post__excerpt': {
			'font-size': generateCSSUnit(
				excerptFontSizeMobile,
				excerptFontSizeType
			),
			'line-height': excerptLineHeightMobile + excerptLineHeightType,
		},
		' .uagb-post__cta': {
			'font-size': generateCSSUnit(
				ctaFontSizeMobile,
				ctaFontSizeType
			),
			'line-height': ctaLineHeightMobile + ctaLineHeightType,
		},
		' .uagb-post__cta a': {
			'font-size': generateCSSUnit(
				ctaFontSizeMobile,
				ctaFontSizeType
			),
			'line-height': ctaLineHeightMobile + ctaLineHeightType,
			'padding-top': generateCSSUnit(
				paddingBtnTopMobile,
				mobilePaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomMobile,
				mobilePaddingBtnUnit
			),
			'padding-left': generateCSSUnit(
				paddingBtnLeftMobile,
				mobilePaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightMobile,
				mobilePaddingBtnUnit
			),
		},
	};

	tabletSelectors = {
		' .uagb-post__title': {
			'font-size': generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
			'line-height': titleLineHeightTablet + titleLineHeightType,
		},
		' .uagb-post__title a': {
			'font-size': generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
			'line-height': titleLineHeightTablet + titleLineHeightType,
		},
		' .uagb-post-grid-byline': {
			'font-size': generateCSSUnit(
				metaFontSizeTablet,
				metaFontSizeType
			),
			'line-height': metaLineHeightTablet + metaLineHeightType,
		},
		' .uagb-post-grid-byline .uagb-post__author': {
			'font-size': generateCSSUnit(
				metaFontSizeTablet,
				metaFontSizeType
			),
			'line-height': metaLineHeightTablet + metaLineHeightType,
		},
		' .uagb-post-grid-byline .uagb-post__author a': {
			'font-size': generateCSSUnit(
				metaFontSizeTablet,
				metaFontSizeType
			),
			'line-height': metaLineHeightTablet + metaLineHeightType,
		},
		' .uagb-post__excerpt': {
			'font-size': generateCSSUnit(
				excerptFontSizeTablet,
				excerptFontSizeType
			),
			'line-height': excerptLineHeightTablet + excerptLineHeightType,
		},
		' .uagb-post__cta': {
			'font-size': generateCSSUnit(
				ctaFontSizeTablet,
				ctaFontSizeType
			),
			'line-height': ctaLineHeightTablet + ctaLineHeightType,
		},
		' .uagb-post__cta a': {
			'font-size': generateCSSUnit(
				ctaFontSizeTablet,
				ctaFontSizeType
			),
			'line-height': ctaLineHeightTablet + ctaLineHeightType,
			'padding-top': generateCSSUnit(
				paddingBtnTopTablet,
				tabletPaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomTablet,
				tabletPaddingBtnUnit
			),
			'padding-left': generateCSSUnit(
				paddingBtnLeftTablet,
				tabletPaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightTablet,
				tabletPaddingBtnUnit
			),
		},
	};

	if ( 'infinite' === paginationType ) {
		if ( 'button' === paginationEventType ) {
			selectors['.uagb-post__items'] = {
				'margin-bottom': '40px',
			};
			selectors[ ' .uagb-post__load-more-wrap' ] = {
				'text-align': paginationAlign,
			};
			selectors[
				' .uagb-post__load-more-wrap .uagb-post-pagination-button'
			] = {
				'color': paginationTextColor,
				'background-color': paginationMasonryBgColor,
				'border-style': paginationMasonryBorderStyle,
				'border-width': generateCSSUnit(
					paginationMasonryBorderWidth,
					'px'
				),
				'border-radius': generateCSSUnit(
					paginationMasonryBorderRadius,
					'px'
				),
				'border-color': paginationMasonryBorderColor,
				'font-size': generateCSSUnit(
					paginationFontSize,
					'px'
				),
				'padding-top': generateCSSUnit(
					paginationButtonPaddingTop,
					paginationButtonPaddingType
				),
				'padding-bottom': generateCSSUnit(
					paginationButtonPaddingBottom,
					paginationButtonPaddingType
				),
				'padding-right': generateCSSUnit(
					paginationButtonPaddingRight,
					paginationButtonPaddingType
				),
				'padding-left': generateCSSUnit(
					paginationButtonPaddingLeft,
					paginationButtonPaddingType
				),
			};
			selectors[
				' .uagb-post__load-more-wrap .uagb-post-pagination-button:hover'
			] = {
				'color': paginationTextHoverColor,
				'background-color': paginationBgHoverColor,
				'border-color': paginationMasonryBorderHColor,
			};
			mobileSelectors[
				' .uagb-post__load-more-wrap .uagb-post-pagination-button'
			] = {
				'padding-top': generateCSSUnit(
					paginationButtonPaddingTopMobile,
					mobilepaginationButtonPaddingType
				),
				'padding-bottom': generateCSSUnit(
					paginationButtonPaddingBottomMobile,
					mobilepaginationButtonPaddingType
				),
				'padding-right': generateCSSUnit(
					paginationButtonPaddingRightMobile,
					mobilepaginationButtonPaddingType
				),
				'padding-left': generateCSSUnit(
					paginationButtonPaddingLeftMobile,
					mobilepaginationButtonPaddingType
				),
			};
			tabletSelectors[
				' .uagb-post__load-more-wrap .uagb-post-pagination-button'
			] = {
				'padding-top': generateCSSUnit(
					paginationButtonPaddingTopTablet,
					tabletpaginationButtonPaddingType
				),
				'padding-bottom': generateCSSUnit(
					paginationButtonPaddingRightTablet,
					tabletpaginationButtonPaddingType
				),
				'padding-right': generateCSSUnit(
					paginationButtonPaddingBottomTablet,
					tabletpaginationButtonPaddingType
				),
				'padding-left': generateCSSUnit(
					paginationButtonPaddingLeftTablet,
					tabletpaginationButtonPaddingType
				),
			};
		}
		if ( 'scroll' === paginationEventType ) {
			selectors[ '.uagb-post-grid .uagb-post-inf-loader div' ] = {
				'width': generateCSSUnit( loaderSize, 'px' ),
				'height': generateCSSUnit( loaderSize, 'px' ),
				'background-color': loaderColor,
			};
		}
	}
	tabletSelectors[ ' .uagb-post__inner-wrap' ] = {
		'padding-top': generateCSSUnit( paddingTopTablet, tabletPaddingUnit ),
		'padding-bottom': generateCSSUnit(
			paddingBottomTablet,
			tabletPaddingUnit
		),
		'padding-left': generateCSSUnit( paddingLeftTablet, tabletPaddingUnit ),
		'padding-right': generateCSSUnit(
			paddingRightTablet,
			tabletPaddingUnit
		),
	};
	mobileSelectors[ ' .uagb-post__inner-wrap' ] = {
		'padding-top': generateCSSUnit( paddingTopMobile, mobilePaddingUnit ),
		'padding-bottom': generateCSSUnit(
			paddingBottomMobile,
			mobilePaddingUnit
		),
		'padding-left': generateCSSUnit( paddingLeftMobile, mobilePaddingUnit ),
		'padding-right': generateCSSUnit(
			paddingRightMobile,
			mobilePaddingUnit
		),
	};

	let stylingCss = '';

	stylingCss = generateCSS(
		selectors,
		`.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`
	);

	stylingCss += generateCSS(
		tabletSelectors,
		`.uagb-block-${ props.clientId.substr(
			0,
			8
		) }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`.uagb-block-${ props.clientId.substr(
			0,
			8
		) }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
