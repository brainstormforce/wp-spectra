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
	
		imgPosition,
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
		titleFontSubset,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		titleLoadGoogleFonts,
		titleBottomSpace,
		titleTransform,
	   	titleDecoration,
		titleBottomSpaceUnit,

		metaFontSize,
		metaFontSizeType,
		metaFontSizeMobile,
		metaFontSizeTablet,
		metaFontFamily,
		metaFontWeight,
		metaFontSubset,
		metaLineHeightType,
		metaLineHeight,
		metaLineHeightTablet,
		metaLineHeightMobile,
		metaLoadGoogleFonts,
		metaColor,
		metaBottomSpace,
		metaLinkTransform,
		metaLinkDecoration,
		metaBottomSpaceUnit,

		excerptFontSize,
		excerptFontSizeType,
		excerptFontSizeTablet,
		excerptFontSizeMobile,
		excerptFontFamily,
		excerptFontWeight,
		excerptFontSubset,
		excerptLineHeightType,
		excerptLineHeight,
		excerptLineHeightTablet,
		excerptLineHeightMobile,
		excerptLoadGoogleFonts,
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
		ctaFontWeight,
		ctaFontSubset,
		ctaLineHeightType,
		ctaLineHeight,
		ctaLineHeightTablet,
		ctaLineHeightMobile,
		ctaLoadGoogleFonts,
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
		inheritFromTheme,
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
		contentPadding,
		contentPaddingMobile,
		contentPaddingUnit,
		contentPaddingTablet,
		arrowColor,
		arrowSize,
		paginationType 
	} = props.attributes;
	
	let mobile_selectors = {};
	let tablet_selectors = {};

	const selectors = {
		' .uagb-post__items': {
			'margin-right': generateCSSUnit( -rowGap / 2, rowGapUnit ),
			'margin-left': generateCSSUnit( -rowGap / 2, rowGapUnit ),
		},
		' .uagb-post__items article': {
			'padding-right': generateCSSUnit( rowGap / 2, rowGapUnit ),
			'padding-left': generateCSSUnit( rowGap / 2, rowGapUnit ),
			'margin-bottom': generateCSSUnit( columnGap, columnGapUnit  ),
		},
		' .uagb-post__inner-wrap': {
			background: bgColor,
			'padding-top': generateCSSUnit( paddingTop , contentPaddingUnit ),
			'padding-bottom': generateCSSUnit(  paddingBottom , contentPaddingUnit ),
			'padding-left': generateCSSUnit( paddingLeft , contentPaddingUnit  ),
			'padding-right': generateCSSUnit( paddingRight , contentPaddingUnit  ),
			'text-align': align,
		},
		' .uagb-post__inner-wrap .uagb-post__cta': {
			'margin-bottom': generateCSSUnit( ctaBottomSpace, ctaBottomSpaceUnit  ),
		},
		' .uagb-post__inner-wrap .uagb-post__image': {
			'margin-bottom': generateCSSUnit( imageBottomSpace, imageBottomSpaceUnit  ),
		},
		' .uagb-post__inner-wrap .uagb-post__title': {
			'margin-bottom': generateCSSUnit( titleBottomSpace, titleBottomSpaceUnit  ),
		},
		' .uagb-post__inner-wrap .uagb-post-grid-byline': {
			'margin-bottom': generateCSSUnit( metaBottomSpace, metaBottomSpaceUnit  ),
		},
		' .uagb-post__inner-wrap .uagb-post__excerpt': {
			'margin-bottom': generateCSSUnit( excerptBottomSpace, excerptBottomSpaceUnit  ),
		},
		' .uagb-post__image:before': {
			'background-color': bgOverlayColor,
			opacity: overlayOpacity / 100,
		},
		' .uagb-post-pagination-wrap': {
			'margin-top': generateCSSUnit( paginationSpacing, 'px' ),
			'text-align': paginationAlignment,
		},
	};
	if ( imgPosition !== 'background' ) {
		selectors[
			' .uagb-post__inner-wrap  > .uagb-post__image:first-child'
		] = {
			'margin-top': generateCSSUnit( -contentPadding, contentPaddingUnit ),
			'margin-left': generateCSSUnit( -contentPadding, contentPaddingUnit ),
			'margin-right': generateCSSUnit( -contentPadding, contentPaddingUnit ),
		};
	}
	if ( ! inheritFromTheme ) {
		selectors[ ' .uagb-post__title' ] = {
			color: titleColor,
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'font-family': titleFontFamily,
			'font-weight': titleFontWeight,
			'line-height': generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
			'text-transform': titleTransform,
			'text-decoration': titleDecoration,
		};
		selectors[ ' .uagb-post__title a' ] = {
			color: titleColor,
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'font-family': titleFontFamily,
			'font-weight': titleFontWeight,
			'line-height': generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
		};
		selectors[ ' .uagb-post-grid-byline' ] = {
			color: metaColor,
			'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
			'font-family': metaFontFamily,
			'font-weight': metaFontWeight,
			'line-height': generateCSSUnit(
				metaLineHeight,
				metaLineHeightType
			),
			'text-transform': metaLinkTransform,
			'text-decoration': metaLinkDecoration,
		};
		selectors[ ' .uagb-post-grid-byline .uagb-post__author' ] = {
			color: metaColor,
			'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
			'font-family': metaFontFamily,
			'font-weight': metaFontWeight,
			'line-height': generateCSSUnit(
				metaLineHeight,
				metaLineHeightType
			),
		};
		selectors[ ' .uagb-post-grid-byline .uagb-post__author a' ] = {
			color: metaColor,
			'font-size': generateCSSUnit( metaFontSize, metaFontSizeType ),
			'font-family': metaFontFamily,
			'font-weight': metaFontWeight,
			'line-height': generateCSSUnit(
				metaLineHeight,
				metaLineHeightType
			),
		};
		selectors[ ' .uagb-post__excerpt' ] = {
			color: excerptColor,
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
			'text-transform': excerptTransform,
			'text-decoration': excerptDecoration,

		};
		selectors[ ' .uagb-post__cta' ] = {
			'pointer-events': 'visible',
			color: ctaColor,
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'font-family': ctaFontFamily,
			'font-weight': ctaFontWeight,
			'line-height': generateCSSUnit( ctaLineHeight, ctaLineHeightType ),
			'text-transform': ctaTransform,
			'text-decoration': ctaDecoration,
			background: ctaBgColor,
			'border-width': generateCSSUnit( borderWidth, 'px' ),
			'border-radius': generateCSSUnit( borderRadius, 'px' ),
			'border-color': borderColor,
			'border-style': borderStyle,
		};
		selectors[ ' .uagb-post__cta a' ] = {
			color: ctaColor,
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'padding-top': generateCSSUnit( paddingBtnTop , paddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottom , paddingBtnUnit ),
			'padding-left': generateCSSUnit( paddingBtnLeft , paddingBtnUnit  ),
			'padding-right': generateCSSUnit( paddingBtnRight , paddingBtnUnit  ),
		};
		selectors[ ' .uagb-post__text .uagb-post__cta:hover' ] = {
			color: ctaHColor,
			background: ctaBgHColor,
			'border-color': borderHColor,
		};
		selectors[ ' .uagb-post__text .uagb-post__cta:hover a' ] = {
			color: ctaHColor,
		};
	}

	if ( true === postPagination ) {
		if ( 'filled' == paginationLayout ) {
			selectors[ ' .uagb-post-pagination-wrap a' ] = {
				'background-color': paginationBgColor,
				color: paginationColor,
			};
			if (
				'undefined' === typeof paginationBgActiveColor &&
				'undefined' === typeof paginationActiveColor
			) {
				selectors[
					' .uagb-post-pagination-wrap .page-numbers.current'
				] = {
					'background-color': paginationBgColor,
					color: paginationColor,
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
					color: paginationActiveColor,
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
					color: paginationColor,
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
					color: paginationActiveColor,
				};
			}
		}
		if ( 'border' == paginationLayout ) {
			selectors[ ' .uagb-post-pagination-wrap a' ] = {
				'border-style': 'solid',
				'border-width': generateCSSUnit( paginationBorderSize, 'px' ),
				'border-color': paginationBorderColor,
				'border-radius': generateCSSUnit(
					paginationBorderRadius,
					'px'
				),
				color: paginationColor,
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
					color: paginationActiveColor,
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
					color: paginationActiveColor,
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
					color: paginationColor,
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
					color: paginationColor,
					'background-color': 'transparent',
				};
			}
		}
	}

	if ( linkBox ) {
		selectors[ ' .uagb-post__inner-wrap' ].cursor = 'pointer';
	}

	selectors[ ' .slick-arrow svg' ] = {
		fill: arrowColor,
		height: generateCSSUnit( arrowSize, 'px' ),
		width: generateCSSUnit( arrowSize, 'px' ),
	};

	if ( ! inheritFromTheme ) {
		mobile_selectors = {
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
				'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
				'padding-top': generateCSSUnit( paddingBtnTopMobile , mobilePaddingBtnUnit ),
				'padding-bottom': generateCSSUnit( paddingBtnBottomMobile , mobilePaddingBtnUnit ),
				'padding-left': generateCSSUnit( paddingBtnLeftMobile , mobilePaddingBtnUnit  ),
				'padding-right': generateCSSUnit( paddingBtnRightMobile , mobilePaddingBtnUnit  ),
			},
			' .uagb-post__inner-wrap': {
				'padding-top': generateCSSUnit( paddingTopMobile , mobilePaddingUnit ),
				'padding-bottom': generateCSSUnit( paddingBottomMobile , mobilePaddingUnit ),
				'padding-left': generateCSSUnit( paddingLeftMobile , mobilePaddingUnit  ),
				'padding-right': generateCSSUnit( paddingRightMobile , mobilePaddingUnit  ),
			},
		};

		tablet_selectors = {
			' .uagb-post__title': {
				'font-size': generateCSSUnit(
					titleFontSizeTablet,
					titleFontSizeType
				),
				'line-height': titleLineHeightTablet + titleLineHeightType,
			},
			' .uagb-post__inner-wrap': {
				'padding-top': generateCSSUnit( paddingTopTablet , tabletPaddingUnit ),
				'padding-bottom': generateCSSUnit( paddingRightTablet , tabletPaddingUnit ),
				'padding-left': generateCSSUnit( paddingBottomTablet , tabletPaddingUnit  ),
				'padding-right': generateCSSUnit( paddingLeftTablet , tabletPaddingUnit  ),
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
				'padding-top': generateCSSUnit( paddingBtnTopTablet , tabletPaddingBtnUnit ),
				'padding-bottom': generateCSSUnit( paddingBtnBottomTablet , tabletPaddingBtnUnit ),
				'padding-left': generateCSSUnit( paddingBtnLeftTablet , tabletPaddingBtnUnit  ),
				'padding-right': generateCSSUnit( paddingBtnRightTablet , tabletPaddingBtnUnit  ),
			},
		};
	}

	if ( 'infinite' === paginationType ) {
		if ( 'button' === paginationEventType ) {
			selectors[ ' .uagb-post__load-more-wrap' ] = {
				'text-align': paginationAlign,
			};
			selectors[
				' .uagb-post__load-more-wrap .uagb-post-pagination-button'
			] = {
				color: paginationTextColor,
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
				'font-size': generateCSSUnit( paginationFontSize, 'px' ),
				'padding-top': generateCSSUnit(
					vpaginationButtonPaddingDesktop,
					paginationButtonPaddingType
				),
				'padding-bottom': generateCSSUnit(
					vpaginationButtonPaddingDesktop,
					paginationButtonPaddingType
				),
				'padding-right': generateCSSUnit(
					hpaginationButtonPaddingDesktop,
					paginationButtonPaddingType
				),
				'padding-left': generateCSSUnit(
					hpaginationButtonPaddingDesktop,
					paginationButtonPaddingType
				),
			};
			selectors[
				' .uagb-post__load-more-wrap .uagb-post-pagination-button:hover'
			] = {
				color: paginationTextHoverColor,
				'background-color': paginationBgHoverColor,
			};
			mobile_selectors[
				' .uagb-post__load-more-wrap .uagb-post-pagination-button'
			] = {
				'padding-top': generateCSSUnit(
					vpaginationButtonPaddingMobile,
					paginationButtonPaddingType
				),
				'padding-bottom': generateCSSUnit(
					vpaginationButtonPaddingMobile,
					paginationButtonPaddingType
				),
				'padding-right': generateCSSUnit(
					hpaginationButtonPaddingMobile,
					paginationButtonPaddingType
				),
				'padding-left': generateCSSUnit(
					hpaginationButtonPaddingMobile,
					paginationButtonPaddingType
				),
			};
			tablet_selectors[
				' .uagb-post__load-more-wrap .uagb-post-pagination-button'
			] = {
				'padding-top': generateCSSUnit(
					vpaginationButtonPaddingTablet,
					paginationButtonPaddingType
				),
				'padding-bottom': generateCSSUnit(
					vpaginationButtonPaddingTablet,
					paginationButtonPaddingType
				),
				'padding-right': generateCSSUnit(
					hpaginationButtonPaddingTablet,
					paginationButtonPaddingType
				),
				'padding-left': generateCSSUnit(
					hpaginationButtonPaddingTablet,
					paginationButtonPaddingType
				),
			};
		}
		if ( 'scroll' === paginationEventType ) {
			selectors[ '.uagb-post-grid .uagb-post-inf-loader div' ] = {
				width: generateCSSUnit( loaderSize, 'px' ),
				height: generateCSSUnit( loaderSize, 'px' ),
				'background-color': loaderColor,
			};
		}
	}
	tablet_selectors[ ' .uagb-post__inner-wrap' ] = {
		padding: contentPaddingTablet + contentPaddingUnit,
	};
	mobile_selectors[ ' .uagb-post__inner-wrap' ] = {
		padding: contentPaddingMobile + contentPaddingUnit,
	};
	mobile_selectors[
		'.uagb-post__inner-wrap  > .uagb-post__image:first-child'
	] = {
		'margin-top': -contentPadding + contentPaddingUnit,
		'margin-left': -contentPadding + contentPaddingUnit,
		'margin-right': -contentPadding + contentPaddingUnit,
	};
	let styling_css = '';

	styling_css = generateCSS(
		selectors,
		`.uagb-block-${ props.clientId.substr( 0, 8 ) }`
	);

	styling_css += generateCSS(
		tablet_selectors,
		`.uagb-block-${ props.clientId.substr(
			0,
			8
		) }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobile_selectors,
		`.uagb-block-${ props.clientId.substr(
			0,
			8
		) }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return styling_css;
}

export default styling;
