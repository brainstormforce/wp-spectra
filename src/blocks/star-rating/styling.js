/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		layout,
		layoutTablet,
		layoutMobile,
		rating,
		size,
		sizeMobile,
		sizeTablet,
		align,
		gap,
		gapTablet,
		gapMobile,
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
		titleGapTablet,
		titleGapMobile,
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

	// Since title text is set to flex, we need this function so that stack alignment doesn't break.
	// It converts the normal text-align values to flex-alignment based values.
	function flexAlignment( textAlign ) {

		switch ( textAlign ) {

			case 'left': return 'start';
			case 'center': return 'center';
			case 'right': return 'end';
			default: return 'start';
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
		'.wp-block-uagb-star-rating ': {
			'justify-content': alignment,
			'text-align': stackAlignment,
		},
	};
	let index = 'margin-right';
	if ( 'stack' === layout ) {
		index = 'margin-bottom';
		selectors[ '.wp-block-uagb-star-rating ' ] = {
			'display' : 'block',
			'text-align': stackAlignment,
		};

		// Since title text is set to flex, we need this property that aligns flex objects.
		selectors[ ' .uag-star-rating__title' ] = {
			'justify-content': flexAlignment( stackAlignment ),
		};
		selectors[ ' div.uag-star-rating ' ] = {
			'justify-content': flexAlignment( stackAlignment ),
		};
	} else {
		index = 'margin-right';
		selectors[ '.wp-block-uagb-star-rating ' ] = {
			'display' : 'flex',
			'justify-content' : alignment,
		};
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
		' .uag-star-rating': {
			'font-size': generateCSSUnit( sizeTablet, 'px' ),
		},
		' .uag-star-rating > span': {
			'margin-right': generateCSSUnit( gapTablet, 'px' ),
		},
		' .uag-star-rating__title.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
			'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
		},
	};

	let indexTablet = 'margin-right';
	if ( 'stack' === layoutTablet ) {
		indexTablet = 'margin-bottom';
		tabletSelectors[ '.wp-block-uagb-star-rating ' ] = {
			'display' : 'block',
			'text-align': stackAlignment,
		};

		// Keeping this here, in case responsive alignment is added in the future.
		// Since title text is set to flex, we need this property that aligns flex objects.
		tabletSelectors[ ' .uag-star-rating__title' ] = {
			'justify-content': flexAlignment( stackAlignment ),
			'margin-right' : 0,
		};

		tabletSelectors[ ' div.uag-star-rating' ] = {
			'justify-content': flexAlignment( stackAlignment ),
		};
	} else {
		indexTablet = 'margin-right';
		tabletSelectors[ '.wp-block-uagb-star-rating ' ] = {
			'display' : 'flex',
			'justify-content' : alignment,
		};
		tabletSelectors[ ' .uag-star-rating__title ' ] = {
			'justify-content': flexAlignment( stackAlignment ),
			'margin-bottom' : 0,
		};
	}

	const mobileSelectors = {
		' .uag-star-rating': {
			'font-size': generateCSSUnit( sizeMobile, 'px' ),
		},
		' .uag-star-rating > span': {
			'margin-right': generateCSSUnit( gapMobile, 'px' ),
		},
		' .uag-star-rating__title.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
			'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
		},
	};

	let indexMobile = 'margin-right';
	if ( 'stack' === layoutMobile ) {
		indexMobile = 'margin-bottom';
		mobileSelectors[ '.wp-block-uagb-star-rating ' ] = {
			'display' : 'block',
			'text-align': stackAlignment,
		};

		// Keeping this here, in case responsive alignment is added in the future.
		// Since title text is set to flex, we need this property that aligns flex objects.
		mobileSelectors[ ' .uag-star-rating__title' ] = {
			'justify-content': flexAlignment( stackAlignment ),
			'margin-right' : 0,
		};
		mobileSelectors[ ' div.uag-star-rating ' ] = {
			'justify-content': flexAlignment( stackAlignment ),
		};
	} else {
		indexMobile = 'margin-right';
		mobileSelectors[ '.wp-block-uagb-star-rating ' ] = {
			'display' : 'flex',
			'justify-content' : alignment,
			'margin-bottom' : 0,
		};
		mobileSelectors[ ' .uag-star-rating__title ' ] = {
			'margin-bottom' : 0,
		};
	}

	tabletSelectors[ ' .uag-star-rating__title.block-editor-rich-text__editable' ][
		indexTablet
	] = generateCSSUnit( titleGapTablet, 'px' );
	mobileSelectors[ ' .uag-star-rating__title.block-editor-rich-text__editable' ][
		indexMobile
	] = generateCSSUnit( titleGapMobile, 'px' );

	const baseSelector = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

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
