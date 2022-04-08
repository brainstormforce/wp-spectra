/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function CtaStyle( props ) {
	const {
		textAlign,
		titleColor,
		descColor,
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
		descFontSize,
		descFontSizeType,
		descFontSizeMobile,
		descFontSizeTablet,
		descFontFamily,
		descFontWeight,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		titleSpace,
		descSpace,
		ctaPosition,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeMobile,
		ctaFontSizeTablet,
		ctaFontFamily,
		ctaFontWeight,
		ctaBtnLinkColor,
		ctaBgColor,
		ctaTopPadding,
		ctaRightPadding,
		ctaBottomPadding,
		ctaLeftPadding,
		ctaTopPaddingTablet,
		ctaRightPaddingTablet,
		ctaBottomPaddingTablet,
		ctaLeftPaddingTablet,
		ctaTopPaddingMobile,
		ctaRightPaddingMobile,
		ctaBottomPaddingMobile,
		ctaLeftPaddingMobile,
		ctaPaddingUnit,
		mobileCTAPaddingUnit,
		tabletCTAPaddingUnit,
		ctaBorderStyle,
		ctaBorderColor,
		ctaBorderWidth,
		ctaBorderRadius,
		ctaLinkHoverColor,
		ctaBgHoverColor,
		ctaBorderhoverColor,
		ctaIconSpace,
		ctaLeftSpace,
		ctaRightSpace,
		contentWidth,
		ctaType,
		titleTransform,
		titleDecoration,
		descTransform,
		descDecoration,
		ctaTransform,
		ctaDecoration,
		titleFontStyle,
		descFontStyle,
		ctaFontStyle,
		buttonAlign,
		ctaIconPosition,
		secondCtaIconSpace,
		secondCtaIconPosition,
		secondCtaSize,
		secondCtaSizeType,
		secondCtaSizeMobile,
		secondCtaSizeTablet,
		secondCtaFontFamily,
		secondCtaFontWeight,
		secondCtaFontStyle,
		secondCtaFontTransform,
		secondCtaFontDecoration,
		secondCtaTopPadding,
		secondCtaRightPadding,
		secondCtaBottomPadding,
		secondCtaLeftPadding,
		secondCtaTopMobilePadding,
		secondCtaRightMobilePadding,
		secondCtaBottomMobilePadding,
		secondCtaLeftMobilePadding,
		secondCtaTopTabletPadding,
		secondCtaRightTabletPadding,
		secondCtaBottomTabletPadding,
		secondCtaLeftTabletPadding,
		secondCtaPaddingUnit,
		secondCtaMobilePaddingUnit,
		secondCtaTabletPaddingUnit,
		secondCtaBorderWidth,
		secondCtaBorderRadius,
		secondCtaBorderStyle,
		secondCtaBorderColor,
		secondCtaBorderHColor,
		secondCtaColor,
		secondCtaBackground,
		secondCtaHoverColor,
		secondCtaHoverBackground,
		gap,
		secondCtaType
	} = props.attributes;

	const selectors = {
		' .uagb-cta__content-wrap': {
			'text-align': textAlign,
		},
		' .uagb-cta__wrap': {
			'text-align': textAlign,
		},
		'.uagb-cta__outer-wrap':{
			'text-align': textAlign,
		},
		// Title Style
		' .block-editor-rich-text__editable.uagb-cta__title': {
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'font-family': titleFontFamily,
			'font-style' : titleFontStyle,
			'text-decoration': titleDecoration,
			'text-transform': titleTransform,
			'font-weight': titleFontWeight,
			'line-height': generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
			'color': titleColor,
			'margin-bottom': generateCSSUnit( titleSpace, 'px' ),
		},

		// Description Style
		' .block-editor-rich-text__editable.uagb-cta__desc': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'font-family': descFontFamily,
			'font-style' : descFontStyle,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'font-weight': descFontWeight,
			'line-height': generateCSSUnit(
				descLineHeight,
				descLineHeightType
			),
			'color': descColor,
			'margin-bottom': generateCSSUnit( descSpace, 'px' ),
		},
	};

	if ( textAlign === 'left' && ctaPosition === 'right' ) {
		selectors[ ' .uagb-cta__left-right-wrap .uagb-cta__content' ] = {
			'margin-left': generateCSSUnit( ctaLeftSpace, 'px' ),
			'margin-right': '0',
		};
		selectors[ ' > .uagb-cta__wrap' ] = {
			'margin-left': generateCSSUnit( ctaLeftSpace, 'px' ),
			'margin-right': '0',
		};
	}

	if ( textAlign === 'right' && ctaPosition === 'right' ) {
		selectors[ ' .uagb-cta__left-right-wrap .uagb-cta__content' ] = {
			'margin-right': generateCSSUnit( ctaRightSpace, 'px' ),
			'margin-left': '0',
		};
		selectors[ ' > .uagb-cta__wrap' ] = {
			'margin-right': generateCSSUnit( ctaRightSpace, 'px' ),
			'margin-left': '0',
		};
	}

	if ( ctaPosition === 'right' && ( ctaType === 'text' || ctaType === 'button' ) ) {
		selectors[ ' .uagb-cta__wrap' ] = {
			'width': generateCSSUnit( contentWidth, '%' ),
		};
		selectors[ '.uagb-cta__outer-wrap > a' ] = {
			'align-self': 'top' === buttonAlign ? 'flex-start' : 'center',
			'height' : 'fit-content',
			'margin-left': 'auto'
		};
	}

	if ( ctaPosition === 'right' ) {
		selectors[ '.uagb-cta__outer-wrap ' ] = {
			'display' : 'inline-flex'
		};
	}

	// CTA style.
	selectors['.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper'] = {
		'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'font-family': ctaFontFamily,
		'font-style' : ctaFontStyle,
		'text-decoration': ctaDecoration,
		'text-transform': ctaTransform,
		'font-weight': ctaFontWeight,
		'color': ctaBtnLinkColor,
		'background-color': ctaBgColor,
		'border-style': ctaBorderStyle,
		'border-color': ctaBorderColor,
		'border-radius': generateCSSUnit( ctaBorderRadius, 'px' ),
		'border-width': generateCSSUnit( ctaBorderWidth, 'px' ),
		'padding-top': generateCSSUnit( ctaTopPadding, ctaPaddingUnit ),
		'padding-bottom': generateCSSUnit( ctaBottomPadding, ctaPaddingUnit ),
		'padding-left': generateCSSUnit( ctaLeftPadding, ctaPaddingUnit ),
		'padding-right': generateCSSUnit( ctaRightPadding, ctaPaddingUnit ),
	};

	if( 'text' === secondCtaType ){
		selectors['.uagb-cta__outer-wrap a.uagb-cta-second__button'] = {
			'font-size': generateCSSUnit( secondCtaSize, secondCtaSizeType ),
			'font-family': secondCtaFontFamily,
			'font-style' : secondCtaFontStyle,
			'text-decoration': secondCtaFontDecoration,
			'text-transform': secondCtaFontTransform,
			'font-weight': secondCtaFontWeight,
			'color': secondCtaColor,
			'background-color': secondCtaBackground,
			'margin-left': generateCSSUnit( gap, 'px' ),
			'margin-right': '0',
		};
		selectors['.uagb-cta__outer-wrap:hover a.uagb-cta-second__button'] = {
			'color': secondCtaHoverColor,
			'background-color': secondCtaHoverBackground,
		};
	}

	if( 'button' === secondCtaType ){
		selectors['.uagb-cta__outer-wrap a.uagb-cta-second__button'] = {
			'font-size': generateCSSUnit( secondCtaSize, secondCtaSizeType ),
			'font-family': secondCtaFontFamily,
			'font-style' : secondCtaFontStyle,
			'text-decoration': secondCtaFontDecoration,
			'text-transform': secondCtaFontTransform,
			'font-weight': secondCtaFontWeight,
			'color': secondCtaColor,
			'background-color': secondCtaBackground,
			'border-style': secondCtaBorderStyle,
			'border-color': secondCtaBorderColor,
			'border-radius': generateCSSUnit( secondCtaBorderRadius, 'px' ),
			'border-width': generateCSSUnit( secondCtaBorderWidth, 'px' ),
			'padding-top': generateCSSUnit( secondCtaTopPadding, secondCtaPaddingUnit ),
			'padding-bottom': generateCSSUnit( secondCtaBottomPadding, secondCtaPaddingUnit ),
			'padding-left': generateCSSUnit( secondCtaLeftPadding, secondCtaPaddingUnit ),
			'padding-right': generateCSSUnit( secondCtaRightPadding, secondCtaPaddingUnit ),
			'margin-left': generateCSSUnit( gap, 'px' ),
			'margin-right': '0',
		};
		selectors['.uagb-cta__outer-wrap:hover a.uagb-cta-second__button'] = {
			'color': secondCtaHoverColor,
			'background-color': secondCtaHoverBackground,
			'border-color': secondCtaBorderHColor,
		};
	}

	selectors['.uagb-cta__outer-wrap:hover a.uagb-cta__button-link-wrapper'] = {
		'color': ctaLinkHoverColor,
		'background-color': ctaBgHoverColor,
		'border-color': ctaBorderhoverColor,
	};



	selectors['.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper svg' ] = {
		'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'width': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'line-height': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		'fill': ctaBtnLinkColor,
	};

	selectors['.uagb-cta__outer-wrap a.uagb-cta-second__button svg' ] = {
		'font-size': generateCSSUnit( secondCtaSize, secondCtaSizeType ),
		'width': generateCSSUnit( secondCtaSize, secondCtaSizeType ),
		'line-height': generateCSSUnit( secondCtaSize, secondCtaSizeType ),
		'fill': secondCtaColor,
	};

	selectors['.uagb-cta__outer-wrap:hover a.uagb-cta__button-link-wrapper svg'] = {
		'fill': ctaLinkHoverColor,
	};

	selectors['.uagb-cta__outer-wrap:hover a.uagb-cta-second__button svg'] = {
		'fill': secondCtaHoverColor,
	};

	if( ctaIconPosition === 'before' ){
		selectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper > svg' ] = {
			'margin-right': generateCSSUnit( ctaIconSpace, 'px' ),
		};
	}else{
		selectors[ '.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper > svg' ] = {
			'margin-left': generateCSSUnit( ctaIconSpace, 'px' ),
		};
	}

	if( secondCtaIconPosition === 'before' ){
		selectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button > svg' ] = {
			'margin-right': generateCSSUnit( secondCtaIconSpace, 'px' ),
		};
	}else{
		selectors[ '.uagb-cta__outer-wrap a.uagb-cta-second__button > svg' ] = {
			'margin-left': generateCSSUnit( secondCtaIconSpace, 'px' ),
		};
	}

	const tabletSelectors = {
		' .block-editor-rich-text__editable.uagb-cta__title': {
			'font-size': generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightTablet,
				titleLineHeightType
			),
		},
		' .block-editor-rich-text__editable.uagb-cta__desc': {
			'font-size': generateCSSUnit(
				descFontSizeTablet,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightTablet,
				descLineHeightType
			),
		},
		'.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'padding-top': generateCSSUnit(
				ctaTopPaddingTablet,
				tabletCTAPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				ctaBottomPaddingTablet,
				tabletCTAPaddingUnit
			),
			'padding-left': generateCSSUnit(
				ctaLeftPaddingTablet,
				tabletCTAPaddingUnit
			),
			'padding-right': generateCSSUnit(
				ctaRightPaddingTablet,
				tabletCTAPaddingUnit
			),
		},
		'.uagb-cta__outer-wrap a.uagb-cta__button-link-wrapper svg': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'width': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaFontSizeTablet,
				ctaFontSizeType
			),
		},
		'.uagb-cta__outer-wrap a.uagb-cta-second__button': {
			'font-size': generateCSSUnit( secondCtaSizeTablet, secondCtaSizeType ),
			'padding-top': generateCSSUnit(
				secondCtaTopTabletPadding,
				secondCtaTabletPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				secondCtaBottomTabletPadding,
				secondCtaTabletPaddingUnit
			),
			'padding-left': generateCSSUnit(
				secondCtaLeftTabletPadding,
				secondCtaTabletPaddingUnit
			),
			'padding-right': generateCSSUnit(
				secondCtaRightTabletPadding,
				secondCtaTabletPaddingUnit
			),
		},
		'.uagb-cta__outer-wrap a.uagb-cta-second__button svg': {
			'font-size': generateCSSUnit( secondCtaSizeTablet, secondCtaSizeType ),
			'height': generateCSSUnit( secondCtaSizeTablet, secondCtaSizeType ),
			'width': generateCSSUnit( secondCtaSizeTablet, secondCtaSizeType ),
			'line-height': generateCSSUnit(
				secondCtaSizeTablet,
				secondCtaSizeType
			),
		},
	};

	const mobileSelectors = {
		' .block-editor-rich-text__editable.uagb-cta__title': {
			'font-size': generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightMobile,
				titleLineHeightType
			),
		},
		' .block-editor-rich-text__editable.uagb-cta__desc': {
			'font-size': generateCSSUnit(
				descFontSizeMobile,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightMobile,
				descLineHeightType
			),
		},
		' .uagb-cta__button-wrapper a.uagb-cta-typeof-text': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
		},
		' .uagb-cta__button-wrapper a.uagb-cta-typeof-button': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'padding-top': generateCSSUnit(
				ctaTopPaddingMobile,
				mobileCTAPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				ctaBottomPaddingMobile,
				mobileCTAPaddingUnit
			),
			'padding-left': generateCSSUnit(
				ctaLeftPaddingMobile,
				mobileCTAPaddingUnit
			),
			'padding-right': generateCSSUnit(
				ctaRightPaddingMobile,
				mobileCTAPaddingUnit
			),
		},
		' .uagb-cta__button-wrapper .uagb-cta-with-svg': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'width': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaFontSizeMobile,
				ctaFontSizeType
			),
		},
		'.uagb-cta__outer-wrap a.uagb-cta-second__button': {
			'font-size': generateCSSUnit( secondCtaSizeMobile, secondCtaSizeType ),
			'padding-top': generateCSSUnit(
				secondCtaTopMobilePadding,
				secondCtaMobilePaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				secondCtaBottomMobilePadding,
				secondCtaMobilePaddingUnit
			),
			'padding-left': generateCSSUnit(
				secondCtaLeftMobilePadding,
				secondCtaMobilePaddingUnit
			),
			'padding-right': generateCSSUnit(
				secondCtaRightMobilePadding,
				secondCtaMobilePaddingUnit
			),
		},
		'.uagb-cta__outer-wrap a.uagb-cta-second__button svg': {
			'font-size': generateCSSUnit( secondCtaSizeMobile, secondCtaSizeType ),
			'height': generateCSSUnit( secondCtaSizeMobile, secondCtaSizeType ),
			'width': generateCSSUnit( secondCtaSizeMobile, secondCtaSizeType ),
			'line-height': generateCSSUnit(
				secondCtaSizeMobile,
				secondCtaSizeType
			),
		},
	};

	const id = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default CtaStyle;
