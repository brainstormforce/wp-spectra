/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';

function testimonialStyle( props ) {
	const blockName = props.name.replace( 'uagb/', '' );

	const {
		headingAlign,
		headingAlignTablet,
		headingAlignMobile,
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
		descSpaceTablet,
		descSpaceMobile,
		nameSpace,
		nameSpaceTablet,
		nameSpaceMobile,
		imageWidth,
		imageWidthTablet,
		imageWidthMobile,
		rowGap,
		rowGapTablet,
		rowGapMobile,
		columnGap,
		columnGapTablet,
		columnGapMobile,
		backgroundType,
		backgroundColor,
		backgroundImage,
		backgroundPosition,
		backgroundSize,
		backgroundRepeat,
		backgroundImageColor,
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
		nameFontStyle,
		companyFontStyle,
		descFontStyle,
		overallBorderHColor,

		// letter spacing
		nameLetterSpacing,
		nameLetterSpacingTablet,
		nameLetterSpacingMobile,
		nameLetterSpacingType,
		descLetterSpacing,
		descLetterSpacingTablet,
		descLetterSpacingMobile,
		descLetterSpacingType,
		companyLetterSpacing,
		companyLetterSpacingTablet,
		companyLetterSpacingMobile,
		companyLetterSpacingType,
		overlayType,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientAngle,
		selectGradient,
		gradientType,
	} = props.attributes;

	const arrowSizeFallback = getFallbackNumber( arrowSize, 'arrowSize', blockName );
	const testItemCountFallback = getFallbackNumber( test_item_count, 'test_item_count', blockName );
	const rowGapFallback = getFallbackNumber( rowGap, 'rowGap', blockName );
	const nameSpaceFallback = getFallbackNumber( nameSpace, 'nameSpace', blockName );
	const descSpaceFallback = getFallbackNumber( descSpace, 'descSpace', blockName );
	const columnGapFallback = getFallbackNumber( columnGap, 'columnGap', blockName );
	const columnsFallback = getFallbackNumber( columns, 'columns', blockName );
	const imageWidthFallback = getFallbackNumber( imageWidth, 'imageWidth', blockName );

	const columnGapTabletFallback = isNaN( columnGapTablet ) ? columnGapFallback : columnGapTablet;
	const columnGapMobileFallback = isNaN( columnGapMobile ) ? columnGapTabletFallback : columnGapMobile;

	const overallBorderCSS = generateBorderCSS( props.attributes, 'overall' );
	const overallBorderCSSTablet = generateBorderCSS( props.attributes, 'overall', 'tablet' );
	const overallBorderCSSMobile = generateBorderCSS( props.attributes, 'overall', 'mobile' );

	let imgAlign = 'center';

	if ( headingAlign === 'left' ) {
		imgAlign = 'flex-start';
	} else if ( headingAlign === 'right' ) {
		imgAlign = 'flex-end';
	}

	const position = backgroundPosition.replace( '-', ' ' );

	const selectors = {
		' .uagb-testimonial__wrap': {
			'margin-bottom': generateCSSUnit( rowGapFallback, rowGapType ),
			'padding-left': generateCSSUnit( columnGapFallback / 2, columnGapType ),
			'padding-right': generateCSSUnit( columnGapFallback / 2, columnGapType ),
		},
		' .uagb-testimonial__wrap .uagb-tm__image-content': {
			'padding-top': generateCSSUnit( imgpaddingTop, imgpaddingUnit ),
			'padding-right': generateCSSUnit( imgpaddingRight, imgpaddingUnit ),
			'padding-bottom': generateCSSUnit( imgpaddingBottom, imgpaddingUnit ),
			'padding-left': generateCSSUnit( imgpaddingLeft, imgpaddingUnit ),
		},
		' .uagb-tm__image-position-top .uagb-tm__image-content': {
			'justify-content': imgAlign,
		},
		// Image
		' .uagb-tm__image img': {
			'width': generateCSSUnit( imageWidthFallback, imageWidthType ),
			'max-width': generateCSSUnit( imageWidthFallback, imageWidthType ),
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
			'font-style': nameFontStyle,
			'text-decoration': nameDecoration,
			'text-transform': nameTransform,
			'line-height': generateCSSUnit( nameLineHeight, nameLineHeightType ),
			'color': authorColor,
			'margin-bottom': generateCSSUnit( nameSpaceFallback, nameSpaceType ),
			'letter-spacing': generateCSSUnit( nameLetterSpacing, nameLetterSpacingType ),
		},
		// Title Style
		' .uagb-tm__company': {
			'font-size': generateCSSUnit( companyFontSize, companyFontSizeType ),
			'font-family': companyFontFamily,
			'font-weight': companyFontWeight,
			'font-style': companyFontStyle,
			'text-decoration': companyDecoration,
			'text-transform': companyTransform,
			'line-height': generateCSSUnit( companyLineHeight, companyLineHeightType ),
			'color': companyColor,
			'letter-spacing': generateCSSUnit( companyLetterSpacing, companyLetterSpacingType ),
		},
		// Description Style
		' .uagb-tm__desc': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'font-family': descFontFamily,
			'font-style': descFontStyle,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'font-weight': descFontWeight,
			'line-height': generateCSSUnit( descLineHeight, descLineHeightType ),
			'color': descColor,
			'margin-bottom': generateCSSUnit( descSpaceFallback, descSpaceType ),
			'letter-spacing': generateCSSUnit( descLetterSpacing, descLetterSpacingType ),
		},
		' ul.slick-dots li button:before': {
			'color': arrowColor,
		},
		' ul.slick-dots li.slick-active button:before': {
			'color': arrowColor,
		},
		' .slick-arrow svg': {
			'fill': arrowColor,
			'height': generateCSSUnit( arrowSizeFallback, arrowSizeType ),
			'width': generateCSSUnit( arrowSizeFallback, arrowSizeType ),
		},
		' .uagb-testimonial__wrap .uagb-tm__content': overallBorderCSS,
		' .uagb-testimonial__wrap .uagb-tm__content:hover': {
			'border-color': overallBorderHColor,
		},
	};

	if ( testItemCountFallback === columnsFallback ) {
		selectors[ '.uagb-slick-carousel' ] = {
			'padding': '0',
		};
	}

	if ( arrowDots === 'dots' ) {
		selectors[ ' .uagb-slick-carousel.uagb-tm__arrow-outside' ] = {
			'padding': '0 0 35px 0',
		};
	}

	if ( testItemCountFallback === 1 || testItemCountFallback === columnsFallback ) {
		selectors[ ' .uagb-slick-carousel.uagb-tm__arrow-outside' ] = {
			'padding': '0',
		};
	}

	const mobileSelectors = {
		' .uagb-tm__image img': {
			'width': generateCSSUnit( imageWidthMobile, imageWidthType ),
			'max-width': generateCSSUnit( imageWidthMobile, imageWidthType ),
		},
		' .uagb-testimonial__wrap': {
			'padding-left': generateCSSUnit( columnGapMobileFallback / 2, columnGapType ),
			'padding-right': generateCSSUnit( columnGapMobileFallback / 2, columnGapType ),
			'margin-bottom': generateCSSUnit( rowGapMobile, rowGapType ),
		},
		' .block-editor-rich-text__editable.uagb-tm__author-name': {
			'margin-bottom': generateCSSUnit( nameSpaceMobile, nameSpaceType ),
			'letter-spacing': generateCSSUnit( nameLetterSpacingMobile, nameLetterSpacingType ),
		},
		' .uagb-tm__desc': {
			'margin-bottom': generateCSSUnit( descSpaceMobile, descSpaceType ),
			'font-size': generateCSSUnit( descFontSizeMobile, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeightMobile, descLineHeightType ),
			'letter-spacing': generateCSSUnit( descLetterSpacingMobile, descLetterSpacingType ),
		},
		' .uagb-testimonial__wrap .uagb-tm__content': overallBorderCSSMobile,
		' .uagb-testimonial__wrap .uagb-tm__image-content': {
			'text-align': headingAlignMobile,
			'padding-top': generateCSSUnit( imgpaddingTopMobile, imgmobilePaddingUnit ),
			'padding-right': generateCSSUnit( imgpaddingRightMobile, imgmobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( imgpaddingBottomMobile, imgmobilePaddingUnit ),
			'padding-left': generateCSSUnit( imgpaddingLeftMobile, imgmobilePaddingUnit ),
		},
		' .uagb-tm__company': {
			'font-size': generateCSSUnit( companyFontSizeMobile, companyFontSizeType ),
			'line-height': generateCSSUnit( companyLineHeightMobile, companyLineHeightType ),
			'letter-spacing': generateCSSUnit( companyLetterSpacingMobile, companyLetterSpacingType ),
		},
		' .uagb-tm__author-name': {
			'font-size': generateCSSUnit( nameFontSizeMobile, nameFontSizeType ),
			'line-height': generateCSSUnit( nameLineHeightMobile, nameLineHeightType ),
		},
		' .uagb-tm__content': {
			'text-align': headingAlignMobile,
			'padding-top': generateCSSUnit( paddingTopMobile, mobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( paddingBottomMobile, mobilePaddingUnit ),
			'padding-left': generateCSSUnit( paddingLeftMobile, mobilePaddingUnit ),
			'padding-right': generateCSSUnit( paddingRightMobile, mobilePaddingUnit ),
		},
	};

	const tabletSelectors = {
		' .uagb-tm__image img': {
			'width': generateCSSUnit( imageWidthTablet, imageWidthType ),
			'max-width': generateCSSUnit( imageWidthTablet, imageWidthType ),
		},
		' .block-editor-rich-text__editable.uagb-tm__author-name': {
			'margin-bottom': generateCSSUnit( nameSpaceTablet, nameSpaceType ),
			'letter-spacing': generateCSSUnit( nameLetterSpacingTablet, nameLetterSpacingType ),
		},
		' .uagb-testimonial__wrap': {
			'padding-left': generateCSSUnit( columnGapTabletFallback / 2, columnGapType ),
			'padding-right': generateCSSUnit( columnGapTabletFallback / 2, columnGapType ),
			'margin-bottom': generateCSSUnit( rowGapTablet, rowGapType ),
		},
		' .uagb-testimonial__wrap .uagb-tm__content': overallBorderCSSTablet,
		' .uagb-testimonial__wrap .uagb-tm__image-content': {
			'text-align': headingAlignTablet,
			'padding-top': generateCSSUnit( imgpaddingTopTablet, imgtabletPaddingUnit ),
			'padding-right': generateCSSUnit( imgpaddingRightTablet, imgtabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( imgpaddingBottomTablet, imgtabletPaddingUnit ),
			'padding-left': generateCSSUnit( imgpaddingLeftTablet, imgtabletPaddingUnit ),
		},
		' .uagb-tm__content': {
			'text-align': headingAlignTablet,
			'padding-top': generateCSSUnit( paddingTopTablet, tabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( paddingBottomTablet, tabletPaddingUnit ),
			'padding-left': generateCSSUnit( paddingLeftTablet, tabletPaddingUnit ),
			'padding-right': generateCSSUnit( paddingRightTablet, tabletPaddingUnit ),
		},
		' .uagb-tm__desc': {
			'margin-bottom': generateCSSUnit( descSpaceTablet, descSpaceType ),
			'font-size': generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeightTablet, descLineHeightType ),
			'letter-spacing': generateCSSUnit( descLetterSpacingTablet, descLetterSpacingType ),
		},
		' .uagb-tm__company': {
			'font-size': generateCSSUnit( companyFontSizeTablet, companyFontSizeType ),
			'line-height': generateCSSUnit( companyLineHeightTablet, companyLineHeightType ),
			'letter-spacing': generateCSSUnit( companyLetterSpacingTablet, companyLetterSpacingType ),
		},
		' .uagb-tm__author-name': {
			'font-size': generateCSSUnit( nameFontSizeTablet, nameFontSizeType ),
			'line-height': generateCSSUnit( nameLineHeightTablet, nameLineHeightType ),
		},
	};
	if ( 'gradient' === backgroundType ) {
		let gradient;
		switch ( selectGradient ) {
			case 'basic':
				gradient = gradientValue;
				break;
			case 'advanced':
				switch ( gradientType ) {
					case 'linear':
						gradient = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
						break;
					case 'radial':
						gradient = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
						break;
					default:
						gradient = '';
						break;
				}
				break;
			default:
				gradient = '';
				break;
		}

		selectors[ ' .uagb-tm__content' ][ 'background-image' ] = gradient;
	}

	if ( 'image' === backgroundType ) {
		if ( 'color' === overlayType ) {
			selectors[ ' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__overlay' ] = {
				'background-color': backgroundImageColor,
			};
		} else if ( 'gradient' === overlayType ) {
			if ( gradientValue ) {
				selectors[ ' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__overlay' ] = {
					'background-image': gradientValue,
				};
			}
		}
	} else {
		selectors[ ' .uagb-testimonial__wrap.uagb-tm__bg-type-color .uagb-tm__content' ] = {
			'background-color': backgroundColor,
		};
	}

	selectors[ ' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__content' ] = {
		'background-image': backgroundImage ? `url(${ backgroundImage.url })` : null,
		'background-position': position,
		'background-repeat': backgroundRepeat,
		'background-size': backgroundSize,
	};

	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );
	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );
	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default testimonialStyle;
