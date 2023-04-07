/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function RestMenuStyle( props ) {
	const {
		headingAlign,
		priceColor,
		descColor,
		titleColor,
		titleFontSizeType,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleFontFamily,
		titleFontWeight,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		priceFontSizeType,
		priceFontSize,
		priceFontSizeTablet,
		priceFontSizeMobile,
		priceFontFamily,
		priceFontWeight,
		priceLineHeightType,
		priceLineHeight,
		priceLineHeightTablet,
		priceLineHeightMobile,
		descFontSizeType,
		descFontSize,
		descFontSizeTablet,
		descFontSizeMobile,
		descFontFamily,
		descFontWeight,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		descSpace,
		titleSpace,
		titleSpaceTablet,
		titleSpaceMobile,
		imageWidth,
		imageWidthTablet,
		imageWidthMobile,
		rowGap,
		rowGapTablet,
		rowGapMobile,
		columnGap,
		columnGapTablet,
		columnGapMobile,
		seperatorStyle,
		seperatorWidth,
		seperatorWidthTablet,
		seperatorWidthMobile,
		seperatorThickness,
		seperatorColor,

		imageWidthType,
		seperatorWidthType,
		rowGapType,
		columnGapType,
		titleSpaceType,
		contentPaddingTop,
		contentPaddingRight,
		contentPaddingBottom,
		contentPaddingLeft,
		contentPaddingTopTablet,
		contentPaddingRightTablet,
		contentPaddingBottomTablet,
		contentPaddingLeftTablet,
		contentPaddingTopMobile,
		contentPaddingRightMobile,
		contentPaddingBottomMobile,
		contentPaddingLeftMobile,
		contentPaddingUnit,
		contentMobilePaddingUnit,
		contentTabletPaddingUnit,
		imgPaddingTop,
		imgPaddingRight,
		imgPaddingBottom,
		imgPaddingLeft,
		imgPaddingTopTablet,
		imgPaddingRightTablet,
		imgPaddingBottomTablet,
		imgPaddingLeftTablet,
		imgPaddingTopMobile,
		imgPaddingRightMobile,
		imgPaddingBottomMobile,
		imgPaddingLeftMobile,
		imgPaddingUnit,
		imgMobilePaddingUnit,
		imgTabletPaddingUnit,
		titleFontStyle,
		titleTransform,
		titleDecoration,
		descFontStyle,
		descTransform,
		descDecoration,
		priceFontStyle,
		priceTransform,
		priceDecoration,
		descLetterSpacing,
		descLetterSpacingTablet,
		descLetterSpacingMobile,
		descLetterSpacingType,
		priceLetterSpacing,
		priceLetterSpacingTablet,
		priceLetterSpacingMobile,
		priceLetterSpacingType,
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		imagePosition,
		imgAlign,
		imageAlignment,
		stack,
	} = props.attributes;

	const blockName = props.name.replace( 'uagb/', '' );

	const seperatorThicknessFallback = getFallbackNumber( seperatorThickness, 'seperatorThickness', blockName );

	const rowGapFallback = getFallbackNumber( rowGap, 'rowGap', blockName );
	const rowGapTabletFallback = getFallbackNumber( rowGapTablet, 'rowGapTablet', blockName );
	const rowGapMobileFallback = getFallbackNumber( rowGapMobile, 'rowGapMobile', blockName );

	const columnGapFallback = getFallbackNumber( columnGap, 'columnGap', blockName );
	const columnGapTabletFallback = isNaN( columnGapTablet ) ? columnGapFallback : columnGapTablet;
	const columnGapMobileFallback = isNaN( columnGapMobile ) ? columnGapTabletFallback : columnGapMobile;

	const imageWidthFallback = getFallbackNumber( imageWidth, 'imageWidth', blockName );
	const imageWidthTabletFallback = isNaN( imageWidthTablet ) ? imageWidthFallback : imageWidthTablet;
	const imageWidthMobileFallback = isNaN( imageWidthMobile ) ? imageWidthTabletFallback : imageWidthMobile;

	const seperatorWidthFallback = getFallbackNumber( seperatorWidth, 'seperatorWidth', blockName );
	const seperatorWidthTabletFallback = getFallbackNumber( seperatorWidthTablet, 'seperatorWidthTablet', blockName );
	const seperatorWidthMobileFallback = getFallbackNumber( seperatorWidthMobile, 'seperatorWidthMobile', blockName );

	const titleSpaceFallback = getFallbackNumber( titleSpace, 'titleSpace', blockName );
	const titleSpaceTabletFallback = getFallbackNumber( titleSpaceTablet, 'titleSpaceTablet', blockName );
	const titleSpaceMobileFallback = getFallbackNumber( titleSpaceMobile, 'titleSpaceMobile', blockName );

	let tabletSelectors = {};
	let mobileSelectors = {};

	const selectors = {
		' .block-editor-block-list__layout': {
			'column-gap': generateCSSUnit( columnGapFallback, columnGapType ),
			'row-gap': generateCSSUnit( rowGapFallback, rowGapType ),
		},
		" [data-type='uagb/restaurant-menu-child'] img": {
			'padding-left': generateCSSUnit( imgPaddingLeft, imgPaddingUnit ),
			'padding-right': generateCSSUnit( imgPaddingRight, imgPaddingUnit ),
			'padding-top': generateCSSUnit( imgPaddingTop, imgPaddingUnit ),
			'padding-bottom': generateCSSUnit( imgPaddingBottom, imgPaddingUnit ),
		},
		// Image
		' img': {
			'width': generateCSSUnit( imageWidthFallback, imageWidthType ),
			'max-width': generateCSSUnit( imageWidthFallback, imageWidthType ),
		},
		' .uagb-rm__content': {
			'padding-left': generateCSSUnit( contentPaddingLeft, contentPaddingUnit ),
			'padding-right': generateCSSUnit( contentPaddingRight, contentPaddingUnit ),
			'padding-top': generateCSSUnit( contentPaddingTop, contentPaddingUnit ),
			'padding-bottom': generateCSSUnit( contentPaddingBottom, contentPaddingUnit ),
		},
		// Prefix Style
		'.wp-block-uagb-restaurant-menu .uagb-rest_menu__wrap .uagb-rm__content .uagb-rm-details .uagb-rm__title': {
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'color': titleColor,
			'margin-bottom': generateCSSUnit( titleSpaceFallback, titleSpaceType ),
			'font-family': titleFontFamily,
			'font-style': titleFontStyle,
			'text-transform': titleTransform,
			'text-decoration': titleDecoration,
			'font-weight': titleFontWeight,
			'line-height': generateCSSUnit( titleLineHeight, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacing, titleLetterSpacingType ),
		},
		// Title Style
		' .uagb-rm__price': {
			'font-size': generateCSSUnit( priceFontSize, priceFontSizeType ),
			'font-family': priceFontFamily,
			'text-transform': priceTransform,
			'text-decoration': priceDecoration,
			'font-style': priceFontStyle,
			'font-weight': priceFontWeight,
			'line-height': generateCSSUnit( priceLineHeight, priceLineHeightType ),
			'color': priceColor,
			'letter-spacing': generateCSSUnit( priceLetterSpacing, priceLetterSpacingType ),
		},
		// Description Style
		' .uagb-rm__desc': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'font-family': descFontFamily,
			'text-transform': descTransform,
			'text-decoration': descDecoration,
			'font-style': descFontStyle,
			'font-weight': descFontWeight,
			'line-height': generateCSSUnit( descLineHeight, descLineHeightType ),
			'color': descColor,
			'margin-bottom': generateCSSUnit( descSpace, 'px' ),
			'letter-spacing': generateCSSUnit( descLetterSpacing, descLetterSpacingType ),
		},
	};

	tabletSelectors = {
		// Image
		' img': {
			'width': generateCSSUnit( imageWidthTabletFallback, imageWidthType ),
			'max-width': generateCSSUnit( imageWidthTabletFallback, imageWidthType ),
		},
		'.wp-block-uagb-restaurant-menu': {
			'column-gap': generateCSSUnit( columnGapTabletFallback, columnGapType ),
			'row-gap': generateCSSUnit( rowGapTabletFallback, rowGapType ),
		},
		'.wp-block-uagb-restaurant-menu .uagb-rest_menu__wrap .uagb-rm__content .uagb-rm-details .uagb-rm__title': {
			'font-size': generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
			'margin-bottom': generateCSSUnit( titleSpaceTabletFallback, titleSpaceType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingTablet, titleLetterSpacingType ),
		},
		' .uagb-rm__desc': {
			'font-size': generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeightTablet, descLineHeightType ),
			'letter-spacing': generateCSSUnit( descLetterSpacingTablet, descLetterSpacingType ),
		},
		' .uagb-rm__price': {
			'font-size': generateCSSUnit( priceFontSizeTablet, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightTablet, priceLineHeightType ),
			'letter-spacing': generateCSSUnit( priceLetterSpacingTablet, priceLetterSpacingType ),
		},
		" [data-type='uagb/restaurant-menu-child'] img": {
			'padding-left': generateCSSUnit( imgPaddingLeftTablet, imgTabletPaddingUnit ),
			'padding-right': generateCSSUnit( imgPaddingRightTablet, imgTabletPaddingUnit ),
			'padding-top': generateCSSUnit( imgPaddingTopTablet, imgTabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( imgPaddingBottomTablet, imgTabletPaddingUnit ),
		},
		' .uagb-rm__content': {
			'padding-left': generateCSSUnit( contentPaddingLeftTablet, contentTabletPaddingUnit ),
			'padding-right': generateCSSUnit( contentPaddingRightTablet, contentTabletPaddingUnit ),
			'padding-top': generateCSSUnit( contentPaddingTopTablet, contentTabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( contentPaddingBottomTablet, contentTabletPaddingUnit ),
		},
	};

	mobileSelectors = {
		// Image
		' img': {
			'width': generateCSSUnit( imageWidthMobileFallback, imageWidthType ),
			'max-width': generateCSSUnit( imageWidthMobileFallback, imageWidthType ),
		},
		'.wp-block-uagb-restaurant-menu': {
			'column-gap': generateCSSUnit( columnGapMobileFallback, columnGapType ),
			'row-gap': generateCSSUnit( rowGapMobileFallback, rowGapType ),
		},
		'.wp-block-uagb-restaurant-menu .uagb-rest_menu__wrap .uagb-rm__content .uagb-rm-details .uagb-rm__title': {
			'font-size': generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
			'margin-bottom': generateCSSUnit( titleSpaceMobileFallback, titleSpaceType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingMobile, titleLetterSpacingType ),
		},
		' .uagb-rm__desc': {
			'font-size': generateCSSUnit( descFontSizeMobile, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeightMobile, descLineHeightType ),
			'letter-spacing': generateCSSUnit( descLetterSpacingMobile, descLetterSpacingType ),
		},
		' .uagb-rm__price': {
			'font-size': generateCSSUnit( priceFontSizeMobile, priceFontSizeType ),
			'line-height': generateCSSUnit( priceLineHeightMobile, priceLineHeightType ),
			'letter-spacing': generateCSSUnit( priceLetterSpacingMobile, priceLetterSpacingType ),
		},
		" [data-type='uagb/restaurant-menu-child'] img": {
			'padding-left': generateCSSUnit( imgPaddingLeftMobile, imgMobilePaddingUnit ),
			'padding-right': generateCSSUnit( imgPaddingRightMobile, imgMobilePaddingUnit ),
			'padding-top': generateCSSUnit( imgPaddingTopMobile, imgMobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( imgPaddingBottomMobile, imgMobilePaddingUnit ),
		},
		' .uagb-rm__content': {
			'padding-left': generateCSSUnit( contentPaddingLeftMobile, contentMobilePaddingUnit ),
			'padding-right': generateCSSUnit( contentPaddingRightMobile, contentMobilePaddingUnit ),
			'padding-top': generateCSSUnit( contentPaddingTopMobile, contentMobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( contentPaddingBottomMobile, contentMobilePaddingUnit ),
		},
	};

	if ( seperatorStyle !== 'none' ) {
		selectors[ ' .uagb-rm__separator' ] = {
			'border-top-color': seperatorColor,
			'border-top-style': seperatorStyle,
			'border-top-width': generateCSSUnit( seperatorThicknessFallback, 'px' ),
			'width': generateCSSUnit( seperatorWidthFallback, seperatorWidthType ),
		};
		tabletSelectors[ ' .uagb-rm__separator' ] = {
			'width': generateCSSUnit( seperatorWidthTabletFallback, seperatorWidthType ),
		};
		mobileSelectors[ ' .uagb-rm__separator' ] = {
			'width': generateCSSUnit( seperatorWidthMobileFallback, seperatorWidthType ),
		};
	}

	if ( imgAlign === 'side' ) {
		selectors[ ' .wp-block-uagb-restaurant-menu-child .uagb-rm__content' ] = {
			'align-items': imageAlignment === 'top' ? 'flex-start' : 'center',
		};

		if ( stack === 'tablet' ) {
			if ( imagePosition === 'left' ) {
				tabletSelectors[ ' .wp-block-uagb-restaurant-menu-child .uagb-rm__content' ] = {
					'display': 'block',
				};
				mobileSelectors[ ' .wp-block-uagb-restaurant-menu-child .uagb-rm__content' ] = {
					'display': 'block',
				};
			} else {
				tabletSelectors[ ' .wp-block-uagb-restaurant-menu-child .uagb-rm__content' ] = {
					'display': 'flex',
					'flex-direction': 'column-reverse',
					'align-items': 'flex-end',
				};
				mobileSelectors[ ' .wp-block-uagb-restaurant-menu-child .uagb-rm__content' ] = {
					'display': 'flex',
					'flex-direction': 'column-reverse',
					'align-items': 'flex-end',
				};
			}
		} else if ( stack === 'mobile' ) {
			if ( imagePosition === 'left' ) {
				mobileSelectors[ ' .wp-block-uagb-restaurant-menu-child .uagb-rm__content' ] = {
					'display': 'block',
				};
			} else {
				mobileSelectors[ ' .wp-block-uagb-restaurant-menu-child .uagb-rm__content' ] = {
					'display': 'flex',
					'flex-direction': 'column-reverse',
					'align-items': 'flex-end',
				};
			}
		}
		if ( imagePosition === 'left' ) {
			selectors[ ' .uagb-rm-details' ] = {
				'text-align': 'left',
			};
		} else if ( imagePosition === 'right' ) {
			selectors[ ' .uagb-rm-details' ] = {
				'text-align': 'right',
			};
			selectors[ ' .uagb-rest_menu__wrap .uagb-rm__content' ] = {
				'text-align': 'right',
			};
			selectors[ ' .wp-block-uagb-restaurant-menu-child .uagb-rm__separator' ] = {
				'margin-left': 'auto',
			};
		}
	}

	if ( imgAlign === 'top' ) {
		selectors[ ' .wp-block-uagb-restaurant-menu-child ' ] = {
			'text-align': headingAlign,
			'display': 'block',
		};
		selectors[ ' .wp-block-uagb-restaurant-menu-child .uagb-rm__content' ] = {
			'text-align': headingAlign,
		};

		if ( 'center' === headingAlign ) {
			selectors[ ' .uagb-rm__content ' ] = {
				'display': 'block',
			};
			selectors[ ' .uagb-rm__content ' ] = {
				'display': 'block',
			};
			selectors[ ' .wp-block-uagb-restaurant-menu-child  .uagb-rm__separator' ] = {
				'margin': '0 auto',
			};
		} else if ( 'right' === headingAlign ) {
			selectors[ ' .wp-block-uagb-restaurant-menu-child .uagb-rm__separator' ] = {
				'margin-left': 'auto',
			};
		}
	}

	let stylingCss = '';
	const id = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default RestMenuStyle;
