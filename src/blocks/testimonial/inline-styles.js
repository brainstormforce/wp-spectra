/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function testimonialStyle( props ) {
	const {
		headingAlign,
		companyColor,
		descColor,
		authorColor,
		nameFontSizeType,
		nameFontSize,
		nameFontSizeTablet,
		nameFontSizeMobile,
		nameFontFamily,
		nameFontWeight,
		nameLineHeightType,
		nameLineHeight,
		nameLineHeightTablet,
		nameLineHeightMobile,
		companyFontSizeType,
		companyFontSize,
		companyFontSizeTablet,
		companyFontSizeMobile,
		companyFontFamily,
		companyFontWeight,
		companyLineHeightType,
		companyLineHeight,
		companyLineHeightTablet,
		companyLineHeightMobile,
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
		nameSpace,
		imageWidth,
		rowGap,
		columnGap,
		backgroundType,
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundSize,
		backgroundRepeat,
		backgroundImageColor,
		backgroundOpacity,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		gradientPosition,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		arrowColor,
		test_item_count,
		columns,
		arrowDots,
		arrowSize,

		imageWidthType,
		arrowSizeType,
		rowGapType,
		columnGapType,
		descSpaceType,
		nameSpaceType,
		borderHoverColor,
		gradientValue,
		descTransform,
		descDecoration,
		nameTransform,
		nameDecoration,
		companyTransform,
		companyDecoration,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
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
		imgpaddingTop,
		imgpaddingRight,
		imgpaddingBottom,
		imgpaddingLeft,
		imgpaddingTopTablet,
		imgpaddingRightTablet,
		imgpaddingBottomTablet,
		imgpaddingLeftTablet,
		imgpaddingTopMobile,
		imgpaddingRightMobile,
		imgpaddingBottomMobile,
		imgpaddingLeftMobile,
		imgpaddingUnit,
		imgmobilePaddingUnit,
		imgtabletPaddingUnit,
	} = props.attributes;

	let imgAlign = 'center';

	if ( headingAlign === 'left' ) {
		imgAlign = 'flex-start';
	} else if ( headingAlign === 'right' ) {
		imgAlign = 'flex-end';
	}

	const position = backgroundPosition.replace( '-', ' ' );

	const selectors = {
		' .uagb-testimonial__wrap': {
			'padding-left': generateCSSUnit( columnGap / 2, columnGapType ),
			'padding-right': generateCSSUnit( columnGap / 2, columnGapType ),
			'margin-bottom': generateCSSUnit( rowGap, rowGapType ),
		},
		' .uagb-testimonial__wrap .uagb-tm__image-content': {
			'padding-top': generateCSSUnit( imgpaddingTop, imgpaddingUnit ),
			'padding-right': generateCSSUnit( imgpaddingRight, imgpaddingUnit ),
			'padding-bottom': generateCSSUnit(
				imgpaddingBottom,
				imgpaddingUnit
			),
			'padding-left': generateCSSUnit( imgpaddingLeft, imgpaddingUnit ),
		},
		' .uagb-tm__image-position-top .uagb-tm__image-content': {
			'justify-content': imgAlign,
		},
		// Image
		' .uagb-tm__image img': {
			'width': generateCSSUnit( imageWidth, imageWidthType ),
			'max-width': generateCSSUnit( imageWidth, imageWidthType ),
		},
		' .uagb-tm__content': {
			'text-align': headingAlign,
			'padding-top': generateCSSUnit( paddingTop, paddingUnit ),
			'padding-bottom': generateCSSUnit( paddingBottom, paddingUnit ),
			'padding-left': generateCSSUnit( paddingLeft, paddingUnit ),
			'padding-right': generateCSSUnit( paddingRight, paddingUnit ),
		},
		// Prefix Style
		' .uagb-tm__author-name': {
			'font-size': generateCSSUnit( nameFontSize, nameFontSizeType ),
			'font-family': nameFontFamily,
			'font-weight': nameFontWeight,
			'text-decoration': nameDecoration,
			'text-transform': nameTransform,
			'line-height': generateCSSUnit(
				nameLineHeight,
				nameLineHeightType
			),
			'color': authorColor,
			'margin-bottom': generateCSSUnit( nameSpace, nameSpaceType ),
		},
		// Title Style
		' .uagb-tm__company': {
			'font-size': generateCSSUnit(
				companyFontSize,
				companyFontSizeType
			),
			'font-family': companyFontFamily,
			'font-weight': companyFontWeight,
			'text-decoration': companyDecoration,
			'text-transform': companyTransform,
			'line-height': generateCSSUnit(
				companyLineHeight,
				companyLineHeightType
			),
			'color': companyColor,
		},
		// Description Style
		' .uagb-tm__desc': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'font-family': descFontFamily,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'font-weight': descFontWeight,
			'line-height': generateCSSUnit(
				descLineHeight,
				descLineHeightType
			),
			'color': descColor,
			'margin-bottom': generateCSSUnit( descSpace, descSpaceType ),
		},
		' .uagb-testimonial__wrap.uagb-tm__bg-type-color .uagb-tm__content': {
			'background-color': backgroundColor,
		},
		' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__content': {
			'background-image': backgroundImage
				? `url(${ backgroundImage.url })`
				: null,
			'background-position': position,
			'background-repeat': backgroundRepeat,
			'background-size': backgroundSize,
		},
		' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__overlay': {
			'background-color': backgroundImageColor,
			'opacity':
				typeof backgroundOpacity !== 'undefined'
					? ( 100 - backgroundOpacity ) / 100
					: 0.5,
		},
		' ul.slick-dots li button:before': {
			'color': arrowColor,
		},
		' ul.slick-dots li.slick-active button:before': {
			'color': arrowColor,
		},
		' .slick-arrow svg': {
			'fill': arrowColor,
			'height': generateCSSUnit( arrowSize, arrowSizeType ),
			'width': generateCSSUnit( arrowSize, arrowSizeType ),
		},
	};

	if ( test_item_count === columns ) {
		selectors[ '.uagb-slick-carousel' ] = {
			'padding': '0',
		};
	}

	if ( borderStyle !== 'none' ) {
		selectors[ ' .uagb-testimonial__wrap .uagb-tm__content' ] = {
			'border-color': borderColor,
			'border-style': borderStyle,
			'border-width': generateCSSUnit( borderWidth, 'px' ),
			'border-radius': generateCSSUnit( borderRadius, 'px' ),
		};
		selectors[ ' .uagb-testimonial__wrap .uagb-tm__content:hover' ] = {
			'border-color': borderHoverColor,
		};
	} else {
		selectors[ ' .uagb-testimonial__wrap .uagb-tm__content' ] = {
			'border-radius': generateCSSUnit( borderRadius, 'px' ),
		};
	}

	if ( arrowDots === 'dots' ) {
		selectors[ ' .uagb-slick-carousel.uagb-tm__arrow-outside' ] = {
			'padding': '0 0 35px 0',
		};
	}

	if ( test_item_count === 1 || test_item_count === columns ) {
		selectors[ ' .uagb-slick-carousel.uagb-tm__arrow-outside' ] = {
			'padding': '0',
		};
	}

	const mobileSelectors = {
		' .uagb-tm__desc': {
			'font-size': generateCSSUnit(
				descFontSizeMobile,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightMobile,
				descLineHeightType
			),
		},
		' .uagb-testimonial__wrap .uagb-tm__image-content': {
			'padding-top': generateCSSUnit(
				imgpaddingTopMobile,
				imgmobilePaddingUnit
			),
			'padding-right': generateCSSUnit(
				imgpaddingRightMobile,
				imgmobilePaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				imgpaddingBottomMobile,
				imgmobilePaddingUnit
			),
			'padding-left': generateCSSUnit(
				imgpaddingLeftMobile,
				imgmobilePaddingUnit
			),
		},
		' .uagb-tm__company': {
			'font-size': generateCSSUnit(
				companyFontSizeMobile,
				companyFontSizeType
			),
			'line-height': generateCSSUnit(
				companyLineHeightMobile,
				companyLineHeightType
			),
		},
		' .uagb-tm__author-name': {
			'font-size': generateCSSUnit(
				nameFontSizeMobile,
				nameFontSizeType
			),
			'line-height': generateCSSUnit(
				nameLineHeightMobile,
				nameLineHeightType
			),
		},
		' .uagb-tm__content': {
			'padding-top': generateCSSUnit(
				paddingTopMobile,
				mobilePaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBottomMobile,
				mobilePaddingUnit
			),
			'padding-left': generateCSSUnit(
				paddingLeftMobile,
				mobilePaddingUnit
			),
			'padding-right': generateCSSUnit(
				paddingRightMobile,
				mobilePaddingUnit
			),
		},
	};

	const tabletSelectors = {
		' .uagb-testimonial__wrap .uagb-tm__image-content': {
			'padding-top': generateCSSUnit(
				imgpaddingTopTablet,
				imgtabletPaddingUnit
			),
			'padding-right': generateCSSUnit(
				imgpaddingRightTablet,
				imgtabletPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				imgpaddingBottomTablet,
				imgtabletPaddingUnit
			),
			'padding-left': generateCSSUnit(
				imgpaddingLeftTablet,
				imgtabletPaddingUnit
			),
		},
		' .uagb-tm__content': {
			'padding-top': generateCSSUnit(
				paddingTopTablet,
				tabletPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBottomTablet,
				tabletPaddingUnit
			),
			'padding-left': generateCSSUnit(
				paddingLeftTablet,
				tabletPaddingUnit
			),
			'padding-right': generateCSSUnit(
				paddingRightTablet,
				tabletPaddingUnit
			),
			'text-align': 'center',
		},
		' .uagb-tm__desc': {
			'font-size': generateCSSUnit(
				descFontSizeTablet,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightTablet,
				descLineHeightType
			),
		},
		' .uagb-tm__company': {
			'font-size': generateCSSUnit(
				companyFontSizeTablet,
				companyFontSizeType
			),
			'line-height': generateCSSUnit(
				companyLineHeightTablet,
				companyLineHeightType
			),
		},
		' .uagb-tm__author-name': {
			'font-size': generateCSSUnit(
				nameFontSizeTablet,
				nameFontSizeType
			),
			'line-height': generateCSSUnit(
				nameLineHeightTablet,
				nameLineHeightType
			),
		},
	};
	if ( 'gradient' === backgroundType ) {
		selectors[ ' .uagb-tm__content' ][ 'background-color' ] = 'transparent';
		selectors[ ' .uagb-tm__content' ].opacity =
			typeof backgroundOpacity !== 'undefined'
				? backgroundOpacity / 100
				: '';

		if ( gradientValue ) {
			selectors[ ' .uagb-tm__content' ][
				'background-image'
			] = gradientValue;
		} else if ( 'linear' === gradientType ) {
			selectors[ ' .uagb-tm__content' ][
				'background-image'
			] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
		} else {
			selectors[ ' .uagb-tm__content' ][
				'background-image'
			] = `radial-gradient( at ${ gradientPosition }, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
		}
	}
	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );
	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);
	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default testimonialStyle;
