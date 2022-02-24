/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
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
		prefixFontFamily,
		prefixFontWeight,
		prefixFontSizeType,
		prefixFontSize,
		prefixFontSizeMobile,
		prefixFontSizeTablet,
		prefixLineHeightType,
		prefixLineHeight,
		descFontFamily,
		descFontWeight,
		descFontSizeType,
		descFontSize,
		descFontSizeMobile,
		descFontSizeTablet,
		descLineHeightType,
		descLineHeight,
		socialFontSize,
		socialFontSizeType,
		socialFontSizeMobile,
		socialFontSizeTablet,
		imgAlign,
		imgWidth,
		imgPosition,
		titleSpace,
		descSpace,
		prefixSpace,
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
	} = props.attributes;

	let tabletSelectors = {};
	let mobileSelectors = {};

	const selectors = {
		' p.uagb-team__desc.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'line-height': generateCSSUnit(
				descLineHeight,
				descLineHeightType
			),
			'font-family': descFontFamily,
			'font-style' : descFontStyle,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'font-weight': descFontWeight,
			'color': descColor,
			'margin-bottom': generateCSSUnit( descSpace, 'px' ),
			'margin-top': generateCSSUnit( prefixSpace, 'px' ),
		},
		' .rich-text.block-editor-rich-text__editable.uagb-team__prefix': {
			'font-family': prefixFontFamily,
			'font-style' : prefixFontStyle,
			'text-decoration': prefixDecoration,
			'text-transform': prefixTransform,
			'font-weight': prefixFontWeight,
			'font-size': generateCSSUnit( prefixFontSize, prefixFontSizeType ),
			'line-height': generateCSSUnit(
				prefixLineHeight,
				prefixLineHeightType
			),
			'color': prefixColor,
		},
		' .uagb-team__social-icon a': {
			'color': socialColor,
			'font-size': generateCSSUnit( socialFontSize, socialFontSizeType ),
			'width': generateCSSUnit( socialFontSize, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSize, socialFontSizeType ),
			'line-height': generateCSSUnit(
				socialFontSize,
				socialFontSizeType
			),
		},
		' .uagb-team__social-icon svg': {
			'fill': socialColor,
			'width': generateCSSUnit( socialFontSize, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSize, socialFontSizeType ),
		},
		' .uagb-team__social-icon:hover a': {
			'color': socialHoverColor,
		},
		' .uagb-team__social-icon:hover svg': {
			'fill': socialHoverColor,
		},
		'.uagb-team__image-position-left .uagb-team__social-icon': {
			'margin-right': generateCSSUnit( socialSpace, 'px' ),
			'margin-left': '0',
		},
		'.uagb-team__image-position-right .uagb-team__social-icon': {
			'margin-left': generateCSSUnit( socialSpace, 'px' ),
			'margin-right': '0',
		},
		'.uagb-team__image-position-above.uagb-team__align-center .uagb-team__social-icon': {
			'margin-right': generateCSSUnit( socialSpace / 2, 'px' ),
			'margin-left': generateCSSUnit( socialSpace / 2, 'px' ),
		},
		'.uagb-team__image-position-above.uagb-team__align-left .uagb-team__social-icon': {
			'margin-right': generateCSSUnit( socialSpace, 'px' ),
			'margin-left': '0',
		},
		'.uagb-team__image-position-above.uagb-team__align-right .uagb-team__social-icon': {
			'margin-left': generateCSSUnit( socialSpace, 'px' ),
			'margin-right': '0',
		},
		' .uagb-team__image-wrap': { // For Backword.
			'margin-top': generateCSSUnit( imageTopMargin, imageMarginUnit ),
			'margin-bottom': generateCSSUnit(
				imageBottomMargin,
				imageMarginUnit
			),
			'margin-left': generateCSSUnit( imageLeftMargin, imageMarginUnit ),
			'margin-right': generateCSSUnit( imageRightMargin, imageMarginUnit ),
			'width': generateCSSUnit( imgWidth, 'px' ),
		},
		' img': {
			'margin-top': generateCSSUnit( imageTopMargin, imageMarginUnit ),
			'margin-bottom': generateCSSUnit(
				imageBottomMargin,
				imageMarginUnit
			),
			'margin-left': generateCSSUnit( imageLeftMargin, imageMarginUnit ),
			'margin-right': generateCSSUnit( imageRightMargin, imageMarginUnit ),
			'width': generateCSSUnit( imgWidth, 'px' ),
			'height': generateCSSUnit( imgWidth, 'px' ),
		},
	};

	if ( 'above' === imgPosition ) {
		if ( 'center' === align ) {
			selectors[' img']['margin-left'] = 'auto';
			selectors[' img']['margin-right'] = 'auto';
			selectors[ ' .uagb-team__social-list' ] = {
				'justify-content': 'center',
			};
		} else if ( 'left' === align ) {
			selectors[' img']['margin-right'] = 'auto';
			selectors[' img']['margin-right'] = 'auto';
			selectors[ ' .uagb-team__social-list' ] = {
				'justify-content': 'flex-start',
			};
		} else if ( 'right' === align ) {
			selectors[ ' .uagb-team__social-list' ] = {
				'justify-content': 'flex-end',
			};
			selectors[' img']['margin-left'] = 'auto';
			selectors[' img']['margin-right'] = 'auto';
		}
	}

	if ( 'above' !== imgPosition ) {
		if ( 'middle' === imgAlign ) {
			selectors[ ' img' ][ 'align-self' ] = 'center';
		} else {
			selectors[ ' img' ][ 'align-self' ] = 'flex-start';
		}
	}

	selectors[
		' ' +
			tag +
			'.rich-text.block-editor-rich-text__editable.uagb-team__title'
	] = {
		'font-family': titleFontFamily,
		'font-style' : titleFontStyle,
		'text-decoration': titleDecoration,
		'text-transform': titleTransform,
		'font-weight': titleFontWeight,
		'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
		'line-height': generateCSSUnit( titleLineHeight, titleLineHeightType ),
		'color': titleColor,
		'margin-bottom': generateCSSUnit( titleSpace, 'px' ),
	};

	mobileSelectors = {
		' p.uagb-team__desc.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit(
				descFontSizeMobile,
				descFontSizeType
			),
		},
		' .rich-text.block-editor-rich-text__editable.uagb-team__prefix': {
			'font-size': generateCSSUnit(
				prefixFontSizeMobile,
				prefixFontSizeType
			),
		},
		' .uagb-team__social-icon a': {
			'font-size': generateCSSUnit(
				socialFontSizeMobile,
				socialFontSizeType
			),
			'width': generateCSSUnit( socialFontSizeMobile, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSizeMobile, socialFontSizeType ),
			'line-height': generateCSSUnit(
				socialFontSizeMobile,
				socialFontSizeType
			),
		},
		' .uagb-team__social-icon svg': {
			'width': generateCSSUnit( socialFontSizeMobile, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSizeMobile, socialFontSizeType ),
		},
		' .uagb-team__image-wrap': {
			'margin-top': generateCSSUnit(
				imageMarginTopMobile,
				mobileImageMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				imageMarginBottomMobile,
				mobileImageMarginUnit
			),
			'margin-left': generateCSSUnit( imageMarginLeftMobile, mobileImageMarginUnit ),
			'margin-right': generateCSSUnit( imageMarginRightMobile, mobileImageMarginUnit ),
		},
	};

	tabletSelectors = {
		' p.uagb-team__desc.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit(
				descFontSizeTablet,
				descFontSizeType
			),
		},
		' .rich-text.block-editor-rich-text__editable.uagb-team__prefix': {
			'font-size': generateCSSUnit(
				prefixFontSizeTablet,
				prefixFontSizeType
			),
		},
		' .uagb-team__social-icon a': {
			'font-size': generateCSSUnit(
				socialFontSizeTablet,
				socialFontSizeType
			),
			'width': generateCSSUnit( socialFontSizeTablet, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSizeTablet, socialFontSizeType ),
			'line-height': generateCSSUnit(
				socialFontSizeTablet,
				socialFontSizeType
			),
		},
		' .uagb-team__social-icon svg': {
			'width': generateCSSUnit( socialFontSizeTablet, socialFontSizeType ),
			'height': generateCSSUnit( socialFontSizeTablet, socialFontSizeType ),
		},
		' .uagb-team__image-wrap': {
			'margin-top': generateCSSUnit(
				imageMarginTopTablet,
				tabletImageMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				imageMarginBottomTablet,
				tabletImageMarginUnit
			),
			'margin-left': generateCSSUnit( imageMarginLeftTablet, tabletImageMarginUnit ),
			'margin-right': generateCSSUnit( imageMarginRightTablet, tabletImageMarginUnit ),
		},
	};

	mobileSelectors[ ' ' + tag + '.uagb-team__title' ] = {
		'font-size': generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
	};

	tabletSelectors[ ' ' + tag + '.uagb-team__title' ] = {
		'font-size': generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
	};

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

export default styling;
