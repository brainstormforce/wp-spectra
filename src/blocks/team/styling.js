/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {
	const blockName = props.name.replace( 'uagb/', '' );

	const {
		tag,
		align,
		titleColor,
		prefixColor,
		descColor,
		titleFontFamily,
		titleFontWeight,
		titleFontSizeType,
		titleFontSize,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleLineHeightType,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		prefixFontFamily,
		prefixFontWeight,
		prefixFontSizeType,
		prefixFontSize,
		prefixFontSizeMobile,
		prefixFontSizeTablet,
		prefixLineHeightType,
		prefixLineHeight,
		prefixLineHeightTablet,
		prefixLineHeightMobile,
		descFontFamily,
		descFontWeight,
		descFontSizeType,
		descFontSize,
		descFontSizeMobile,
		descFontSizeTablet,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		socialFontSize,
		socialFontSizeType,
		socialFontSizeMobile,
		socialFontSizeTablet,
		socialSpaceTablet,
		socialSpaceMobile,
		imgAlign,
		imgWidth,
		imgWidthTablet,
		imgWidthMobile,
		imgPosition,
		titleSpace,
		titleSpaceTablet,
		titleSpaceMobile,
		descSpace,
		descSpaceTablet,
		descSpaceMobile,
		prefixSpace,
		prefixSpaceTablet,
		prefixSpaceMobile,
		socialColor,
		socialHoverColor,
		socialSpace,
		imageLeftMargin,
		imageRightMargin,
		imageTopMargin,
		imageBottomMargin,
		imageMarginTopTablet,
		imageMarginRightTablet,
		imageMarginBottomTablet,
		imageMarginLeftTablet,
		imageMarginTopMobile,
		imageMarginRightMobile,
		imageMarginBottomMobile,
		imageMarginLeftMobile,
		imageMarginUnit,
		tabletImageMarginUnit,
		mobileImageMarginUnit,
		titleTransform,
		titleDecoration,
		descTransform,
		descDecoration,
		prefixTransform,
		prefixDecoration,
		titleFontStyle,
		descFontStyle,
		prefixFontStyle,
		// letter spacing
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		prefixLetterSpacing,
		prefixLetterSpacingTablet,
		prefixLetterSpacingMobile,
		prefixLetterSpacingType,
		descLetterSpacing,
		descLetterSpacingTablet,
		descLetterSpacingMobile,
		descLetterSpacingType,
	} = props.attributes;

	const imgWidthFallback = getFallbackNumber( imgWidth, 'imgWidth', blockName );
	const titleSpaceFallback = getFallbackNumber( titleSpace, 'titleSpace', blockName );
	const prefixSpaceFallback = getFallbackNumber( prefixSpace, 'prefixSpace', blockName );
	const descSpaceFallback = getFallbackNumber( descSpace, 'descSpace', blockName );
	const socialFontSizeFallback = getFallbackNumber( socialFontSize, 'socialFontSize', blockName );
	const socialSpaceFallback = getFallbackNumber( socialSpace, 'socialSpace', blockName );

	const socialSpaceTabletFallback = isNaN( socialSpaceTablet ) ? socialSpaceFallback : socialSpaceTablet;
	const socialSpaceMobileFallback = isNaN( socialSpaceMobile ) ? socialSpaceTabletFallback : socialSpaceMobile;

	let tabletSelectors = {};
	let mobileSelectors = {};

	const selectors = {
		' p.uagb-team__desc.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeight, descLineHeightType ),
			'font-family': descFontFamily,
			'font-style': descFontStyle,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'font-weight': descFontWeight,
			'color': descColor,
			'margin-bottom': generateCSSUnit( descSpaceFallback, 'px' ),
			'margin-top': generateCSSUnit( prefixSpaceFallback, 'px' ),
			'letter-spacing': generateCSSUnit( descLetterSpacing, descLetterSpacingType ),
		},
		' .rich-text.block-editor-rich-text__editable.uagb-team__prefix': {
			'font-family': prefixFontFamily,
			'font-style': prefixFontStyle,
			'text-decoration': prefixDecoration,
			'text-transform': prefixTransform,
			'font-weight': prefixFontWeight,
			'font-size': generateCSSUnit( prefixFontSize, prefixFontSizeType ),
			'line-height': generateCSSUnit( prefixLineHeight, prefixLineHeightType ),
			'color': prefixColor,
			'letter-spacing': generateCSSUnit( prefixLetterSpacing, prefixLetterSpacingType ),
		},
		' .uagb-team__social-icon a': {
			'color': socialColor,
			'font-size': generateCSSUnit( socialFontSizeFallback, socialFontSizeType ),
			'width': generateCSSUnit( socialFontSizeFallback, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSizeFallback, socialFontSizeType ),
			'line-height': generateCSSUnit( socialFontSizeFallback, socialFontSizeType ),
		},
		' .uagb-team__social-icon svg': {
			'fill': socialColor,
			'width': generateCSSUnit( socialFontSizeFallback, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSizeFallback, socialFontSizeType ),
		},
		' .uagb-team__social-icon:hover a': {
			'color': socialHoverColor,
		},
		' .uagb-team__social-icon:hover svg': {
			'fill': socialHoverColor,
		},
		'.uagb-team__image-position-left .uagb-team__social-icon': {
			'margin-right': generateCSSUnit( socialSpaceFallback, 'px' ),
			'margin-left': '0',
		},
		'.uagb-team__image-position-right .uagb-team__social-icon': {
			'margin-left': generateCSSUnit( socialSpaceFallback, 'px' ),
			'margin-right': '0',
		},
		'.uagb-team__image-position-above.uagb-team__align-center .uagb-team__social-icon': {
			'margin-right': generateCSSUnit( socialSpaceFallback / 2, 'px' ),
			'margin-left': generateCSSUnit( socialSpaceFallback / 2, 'px' ),
		},
		'.uagb-team__image-position-above.uagb-team__align-left .uagb-team__social-icon': {
			'margin-right': generateCSSUnit( socialSpaceFallback, 'px' ),
			'margin-left': '0',
		},
		'.uagb-team__image-position-above.uagb-team__align-right .uagb-team__social-icon': {
			'margin-left': generateCSSUnit( socialSpaceFallback, 'px' ),
			'margin-right': '0',
		},
		' .uagb-team__image-wrap': {
			// For Backword.
			'margin-top': generateCSSUnit( imageTopMargin, imageMarginUnit ),
			'margin-bottom': generateCSSUnit( imageBottomMargin, imageMarginUnit ),
			'margin-left': generateCSSUnit( imageLeftMargin, imageMarginUnit ),
			'margin-right': generateCSSUnit( imageRightMargin, imageMarginUnit ),
			'width': generateCSSUnit( imgWidthFallback, 'px' ),
		},
		' img': {
			'margin-top': generateCSSUnit( imageTopMargin, imageMarginUnit ),
			'margin-bottom': generateCSSUnit( imageBottomMargin, imageMarginUnit ),
			'margin-left': generateCSSUnit( imageLeftMargin, imageMarginUnit ),
			'margin-right': generateCSSUnit( imageRightMargin, imageMarginUnit ),
			'width': generateCSSUnit( imgWidthFallback, 'px' ),
			'height': generateCSSUnit( imgWidthFallback, 'px' ),
		},
	};

	if ( 'above' === imgPosition ) {
		if ( 'center' === align ) {
			selectors[ ' img' ][ 'margin-left' ] = 'auto';
			selectors[ ' img' ][ 'margin-right' ] = 'auto';
			selectors[ ' .uagb-team__social-list' ] = {
				'justify-content': 'center',
			};
		} else if ( 'left' === align ) {
			selectors[ ' img' ][ 'margin-right' ] = 'auto';
			selectors[ ' .uagb-team__social-list' ] = {
				'justify-content': 'flex-start',
			};
		} else if ( 'right' === align ) {
			selectors[ ' .uagb-team__social-list' ] = {
				'justify-content': 'flex-end',
			};
			selectors[ ' img' ][ 'margin-left' ] = 'auto';
		}
	}

	if ( 'above' !== imgPosition ) {
		if ( 'middle' === imgAlign ) {
			selectors[ ' img' ][ 'align-self' ] = 'center';
			selectors[ ' .uagb-team__content' ] = { 'align-self': 'center' };
		} else {
			selectors[ ' img' ][ 'align-self' ] = 'flex-start';
		}
	}

	selectors[ ' ' + tag + '.rich-text.block-editor-rich-text__editable.uagb-team__title' ] = {
		'font-family': titleFontFamily,
		'font-style': titleFontStyle,
		'text-decoration': titleDecoration,
		'text-transform': titleTransform,
		'font-weight': titleFontWeight,
		'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
		'line-height': generateCSSUnit( titleLineHeight, titleLineHeightType ),
		'color': titleColor,
		'margin-bottom': generateCSSUnit( titleSpaceFallback, 'px' ),
		'letter-spacing': generateCSSUnit( titleLetterSpacing, titleLetterSpacingType ),
	};

	mobileSelectors = {
		' img': {
			'width': generateCSSUnit( imgWidthMobile, 'px' ),
			'height': generateCSSUnit( imgWidthMobile, 'px' ),
		},
		' p.uagb-team__desc.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( descFontSizeMobile, descFontSizeType ),
			'margin-top': generateCSSUnit( prefixSpaceMobile, 'px' ),
			'margin-bottom': generateCSSUnit( descSpaceMobile, 'px' ),
			'letter-spacing': generateCSSUnit( descLetterSpacingMobile, descLetterSpacingType ),
			'line-height': generateCSSUnit( descLineHeightMobile, descLineHeightType ),
		},
		' .rich-text.block-editor-rich-text__editable.uagb-team__prefix': {
			'font-size': generateCSSUnit( prefixFontSizeMobile, prefixFontSizeType ),
			'letter-spacing': generateCSSUnit( prefixLetterSpacingMobile, prefixLetterSpacingType ),
			'line-height': generateCSSUnit( prefixLineHeightMobile, prefixLineHeightType ),
		},
		' .uagb-team__social-icon a': {
			'font-size': generateCSSUnit( socialFontSizeMobile, socialFontSizeType ),
			'width': generateCSSUnit( socialFontSizeMobile, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSizeMobile, socialFontSizeType ),
			'line-height': generateCSSUnit( socialFontSizeMobile, socialFontSizeType ),
		},
		' .uagb-team__social-icon svg': {
			'width': generateCSSUnit( socialFontSizeMobile, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSizeMobile, socialFontSizeType ),
		},
		' .uagb-team__image-wrap': {
			'margin-top': generateCSSUnit( imageMarginTopMobile, mobileImageMarginUnit ),
			'margin-bottom': generateCSSUnit( imageMarginBottomMobile, mobileImageMarginUnit ),
			'margin-left': generateCSSUnit( imageMarginLeftMobile, mobileImageMarginUnit ),
			'margin-right': generateCSSUnit( imageMarginRightMobile, mobileImageMarginUnit ),
		},
		'.uagb-team__image-position-left .uagb-team__social-icon': {
			'margin-right': generateCSSUnit( socialSpaceMobile, 'px' ),
			'margin-left': '0',
		},
		'.uagb-team__image-position-right .uagb-team__social-icon': {
			'margin-left': generateCSSUnit( socialSpaceMobile, 'px' ),
			'margin-right': '0',
		},
		'.uagb-team__image-position-above.uagb-team__align-center .uagb-team__social-icon': {
			'margin-right': generateCSSUnit( socialSpaceMobileFallback / 2, 'px' ),
			'margin-left': generateCSSUnit( socialSpaceMobileFallback / 2, 'px' ),
		},
	};
	mobileSelectors[ ' ' + tag + '.rich-text.block-editor-rich-text__editable.uagb-team__title' ] = {
		'margin-bottom': generateCSSUnit( titleSpaceMobile, 'px' ),
		'letter-spacing': generateCSSUnit( titleLetterSpacingMobile, titleLetterSpacingType ),
		'line-height': generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
	};
	tabletSelectors = {
		' img': {
			'width': generateCSSUnit( imgWidthTablet, 'px' ),
			'height': generateCSSUnit( imgWidthTablet, 'px' ),
		},
		' p.uagb-team__desc.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			'margin-top': generateCSSUnit( prefixSpaceTablet, 'px' ),
			'margin-bottom': generateCSSUnit( descSpaceTablet, 'px' ),
			'letter-spacing': generateCSSUnit( descLetterSpacingTablet, descLetterSpacingType ),
			'line-height': generateCSSUnit( descLineHeightTablet, descLineHeightType ),
		},
		' .rich-text.block-editor-rich-text__editable.uagb-team__prefix': {
			'font-size': generateCSSUnit( prefixFontSizeTablet, prefixFontSizeType ),
			'letter-spacing': generateCSSUnit( prefixLetterSpacingTablet, prefixLetterSpacingType ),
			'line-height': generateCSSUnit( prefixLineHeightTablet, prefixLineHeightType ),
		},
		' .uagb-team__social-icon a': {
			'font-size': generateCSSUnit( socialFontSizeTablet, socialFontSizeType ),
			'width': generateCSSUnit( socialFontSizeTablet, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSizeTablet, socialFontSizeType ),
			'line-height': generateCSSUnit( socialFontSizeTablet, socialFontSizeType ),
		},
		' .uagb-team__social-icon svg': {
			'width': generateCSSUnit( socialFontSizeTablet, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSizeTablet, socialFontSizeType ),
		},
		' .uagb-team__image-wrap': {
			'margin-top': generateCSSUnit( imageMarginTopTablet, tabletImageMarginUnit ),
			'margin-bottom': generateCSSUnit( imageMarginBottomTablet, tabletImageMarginUnit ),
			'margin-left': generateCSSUnit( imageMarginLeftTablet, tabletImageMarginUnit ),
			'margin-right': generateCSSUnit( imageMarginRightTablet, tabletImageMarginUnit ),
		},
		'.uagb-team__image-position-left .uagb-team__social-icon': {
			'margin-right': generateCSSUnit( socialSpaceTablet, 'px' ),
			'margin-left': '0',
		},
		'.uagb-team__image-position-right .uagb-team__social-icon': {
			'margin-left': generateCSSUnit( socialSpaceTablet, 'px' ),
			'margin-right': '0',
		},
		'.uagb-team__image-position-above.uagb-team__align-center .uagb-team__social-icon': {
			'margin-right': generateCSSUnit( socialSpaceTabletFallback / 2, 'px' ),
			'margin-left': generateCSSUnit( socialSpaceTabletFallback / 2, 'px' ),
		},
	};
	tabletSelectors[ ' ' + tag + '.rich-text.block-editor-rich-text__editable.uagb-team__title' ] = {
		'margin-bottom': generateCSSUnit( titleSpaceTablet, 'px' ),
		'letter-spacing': generateCSSUnit( titleLetterSpacingTablet, titleLetterSpacingType ),
		'line-height': generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
	};
	mobileSelectors[ ' ' + tag + '.uagb-team__title' ] = {
		'font-size': generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
	};

	tabletSelectors[ ' ' + tag + '.uagb-team__title' ] = {
		'font-size': generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
	};

	let stylingCss = '';
	const id = `#block-${ props.clientId } .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
