/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		layout,
		rating,
		size,
		align,
		gap,
		unmarkedColor,
		color,
		fontFamily,
		fontWeight,
		fontSizeType,
		fontSize,
		fontSizeMobile,
		fontSizeTablet,
		lineHeightType,
		lineHeight,
		lineHeightMobile,
		lineHeightTablet,
		titleColor,
		titleGap,
		fontStyle,
		fontTransform,
		fontDecoration,
	} = props.attributes;

	let alignment = 'flex-start';
	let stackAlignment = align;

	if ( align ) {
		if ( 'right' === align ) {
			alignment = 'flex-end';
		}
		if ( 'center' === align ) {
			alignment = 'center';
		}
		if ( 'full' === align ) {
			alignment = 'space-between';
			stackAlignment = 'left';
		}
	}

	const remainder = ( rating % 1 ).toFixed( 1 );
	const width = remainder * 100;

	const selectors = {
		' .uag-star-rating': {
			'font-size': generateCSSUnit( size, 'px' ),
		},
		' .uag-star-rating > span': {
			'margin-right': generateCSSUnit( gap, 'px' ),
			'color': unmarkedColor,
		},
		' .uag-star-rating__title.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( fontSize, fontSizeType ),
			'font-family': fontFamily,
			'font-style' : fontStyle,
			'text-decoration': fontDecoration,
			'text-transform': fontTransform,
			'font-weight': fontWeight,
			'line-height': generateCSSUnit( lineHeight, lineHeightType ),
			'color': titleColor,
		},
		'.uag-star-rating__wrapper': {
			'justify-content': alignment,
			'text-align': stackAlignment,
		},
	};

	let index = 'margin-right';
	if ( 'stack' === layout ) {
		index = 'margin-bottom';
	}
	
	selectors[ ' .uag-star-rating__title.block-editor-rich-text__editable' ][
		index
	] = generateCSSUnit( titleGap, 'px' );

	if ( 0 !== width ) {
		selectors[
			' .uag-star:nth-child(' + Math.ceil( rating ) + '):before'
		] = {
			'color': color,
			'width': generateCSSUnit( width, '%' ),
			'position': 'absolute',
			'content': "'★'",
			'overflow': 'hidden',
		};

		selectors[ ' .uag-star:nth-child(' + Math.ceil( rating ) + ')' ] = {
			'position': 'relative',
		};
	}

	selectors[ ' .uag-star:nth-child(-n+' + Math.floor( rating ) + ')' ] = {
		'color': color,
	};

	const tabletSelectors = {
		' .uag-star-rating__title.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
			'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
		},
	};
	const mobileSelectors = {
		' .uag-star-rating__title.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
			'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
		},
	};

	const baseSelector = `.uagb-block-${ props.clientId.substr( 0, 8 ) }.uag-star-rating__wrapper`;

	let stylingCss = generateCSS( selectors, baseSelector );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ baseSelector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ baseSelector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
