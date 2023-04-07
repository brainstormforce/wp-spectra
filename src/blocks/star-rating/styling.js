/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {
	const blockName = props.name.replace( 'uagb/', '' );

	const {
		layout,
		layoutTablet,
		layoutMobile,
		rating,
		size,
		sizeMobile,
		sizeTablet,
		align,
		alignTablet,
		alignMobile,
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
		//letter spacing
		letterSpacing,
		letterSpacingTablet,
		letterSpacingMobile,
		letterSpacingType,
		// padding
		blockTopPadding,
		blockRightPadding,
		blockLeftPadding,
		blockBottomPadding,
		blockTopPaddingTablet,
		blockRightPaddingTablet,
		blockLeftPaddingTablet,
		blockBottomPaddingTablet,
		blockTopPaddingMobile,
		blockRightPaddingMobile,
		blockLeftPaddingMobile,
		blockBottomPaddingMobile,
		blockPaddingUnit,
		blockPaddingUnitTablet,
		blockPaddingUnitMobile,
		// margin
		blockTopMargin,
		blockRightMargin,
		blockLeftMargin,
		blockBottomMargin,
		blockTopMarginTablet,
		blockRightMarginTablet,
		blockLeftMarginTablet,
		blockBottomMarginTablet,
		blockTopMarginMobile,
		blockRightMarginMobile,
		blockLeftMarginMobile,
		blockBottomMarginMobile,
		blockMarginUnit,
		blockMarginUnitTablet,
		blockMarginUnitMobile,
		starPosition,
		starPositionTablet,
		starPositionMobile,
	} = props.attributes;

	const ratingFallback = getFallbackNumber( rating, 'rating', blockName );
	const titleGapFallback = getFallbackNumber( titleGap, 'titleGap', blockName );
	const sizeFallback = getFallbackNumber( size, 'size', blockName );
	const gapFallback = getFallbackNumber( gap, 'gap', blockName );

	let stackAlignment = align;

	if ( 'full' === align ) {
		stackAlignment = 'left';
	}

	const flexJustifyContent = ( JustifyContent ) => {
		let alignment = '';
		switch ( JustifyContent ) {
			case 'right':
				alignment = 'flex-end';
				break;
			case 'center':
				alignment = 'center';
				break;
			case 'full':
				alignment = 'space-between';
				break;
			default:
				alignment = 'flex-start';
				break;
		}
		return alignment;
	};

	//for flex-direction: row-reverse, justify-content work opposite.
	function flexAlignmentWhenDirectionIsRowReverse( textAlign ) {
		switch ( flexJustifyContent( textAlign ) ) {
			case 'flex-end':
				return 'flex-start';
			case 'center':
				return 'center';
			case 'space-between':
				return 'space-between';
			default:
				return 'flex-end';
		}
	}

	const remainder = ( ratingFallback % 1 ).toFixed( 1 );
	const width = remainder * 100;

	const wrapperCSS = {
		'margin-top': generateCSSUnit( blockTopMargin, blockMarginUnit ),
		'margin-right': generateCSSUnit( blockRightMargin, blockMarginUnit ),
		'margin-bottom': generateCSSUnit( blockBottomMargin, blockMarginUnit ),
		'margin-left': generateCSSUnit( blockLeftMargin, blockMarginUnit ),
		'padding-top': generateCSSUnit( blockTopPadding, blockPaddingUnit ),
		'padding-right': generateCSSUnit( blockRightPadding, blockPaddingUnit ),
		'padding-bottom': generateCSSUnit( blockBottomPadding, blockPaddingUnit ),
		'padding-left': generateCSSUnit( blockLeftPadding, blockPaddingUnit ),
	};

	const selectors = {
		' .uag-star-rating': {
			'font-size': generateCSSUnit( sizeFallback, 'px' ),
		},
		' .uag-star-rating > span': {
			'margin-right': generateCSSUnit( gapFallback, 'px' ),
			'color': unmarkedColor,
		},
		' p.uag-star-rating__title.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( fontSize, fontSizeType ),
			'font-family': fontFamily,
			'font-style': fontStyle,
			'text-decoration': fontDecoration,
			'text-transform': fontTransform,
			'font-weight': fontWeight,
			'line-height': generateCSSUnit( lineHeight, lineHeightType ),
			'color': titleColor,
			'letter-spacing': generateCSSUnit( letterSpacing, letterSpacingType ),
		},
		'.wp-block-uagb-star-rating ': {
			'justify-content': flexJustifyContent( align ),
			'text-align': stackAlignment,
		},
	};
	let index = 'margin-right';
	if ( 'stack' === layout ) {
		if ( 'before' === starPosition ) {
			index = 'margin-top';
			selectors[ '.wp-block-uagb-star-rating' ] = {
				'flex-direction': 'column-reverse',
				'align-items': flexJustifyContent( align ), // To align-item in flex-direction column-reverse.
				...wrapperCSS,
			};
		} else if ( 'after' === starPosition ) {
			index = 'margin-bottom';
			selectors[ '.wp-block-uagb-star-rating' ] = {
				'flex-direction': 'column', // Stack layout using flex.
				'align-items': flexJustifyContent( align ), // To align-item in flex-direction column.
				...wrapperCSS,
			};
		}
	} else if ( 'inline' === layout ) {
		if ( 'before' === starPosition ) {
			index = 'margin-left';
			selectors[ '.wp-block-uagb-star-rating' ] = {
				'flex-direction': 'row-reverse',
				'justify-content': flexAlignmentWhenDirectionIsRowReverse( align ),
				...wrapperCSS,
			};
		} else if ( 'after' === starPosition ) {
			index = 'margin-right';
			selectors[ '.wp-block-uagb-star-rating' ] = {
				'flex-direction': 'row', // inline layout using flex.
				'align-items': 'center',
				'justify-content': flexJustifyContent( align ),
				...wrapperCSS,
			};
		}
	}

	selectors[ ' p.uag-star-rating__title.block-editor-rich-text__editable' ][ index ] = generateCSSUnit(
		titleGapFallback,
		'px'
	);

	if ( 0 !== width ) {
		selectors[ ' .uag-star:nth-child(' + Math.ceil( ratingFallback ) + '):before' ] = {
			'color': color,
			'width': generateCSSUnit( width, '%' ),
			'position': 'absolute',
			'content': "'★'",
			'overflow': 'hidden',
		};

		selectors[ ' .uag-star:nth-child(' + Math.ceil( ratingFallback ) + ')' ] = {
			'position': 'relative',
		};
	}

	selectors[ ' .uag-star:nth-child(-n+' + Math.floor( ratingFallback ) + ')' ] = {
		'color': color,
	};

	const wrapperCSSTablet = {
		'margin-top': generateCSSUnit( blockTopMarginTablet, blockMarginUnitTablet ),
		'margin-right': generateCSSUnit( blockRightMarginTablet, blockMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( blockBottomMarginTablet, blockMarginUnitTablet ),
		'margin-left': generateCSSUnit( blockLeftMarginTablet, blockMarginUnitTablet ),
		'padding-top': generateCSSUnit( blockTopPaddingTablet, blockPaddingUnitTablet ),
		'padding-right': generateCSSUnit( blockRightPaddingTablet, blockPaddingUnitTablet ),
		'padding-bottom': generateCSSUnit( blockBottomPaddingTablet, blockPaddingUnitTablet ),
		'padding-left': generateCSSUnit( blockLeftPaddingTablet, blockPaddingUnitTablet ),
	};

	const tabletSelectors = {
		'.wp-block-uagb-star-rating ': {
			'justify-content': flexJustifyContent( alignTablet ),
		},
		' .uag-star-rating': {
			'font-size': generateCSSUnit( sizeTablet, 'px' ),
		},
		' .uag-star-rating > span': {
			'margin-right': generateCSSUnit( gapTablet, 'px' ),
		},
		' .uag-star-rating__title.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
			'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
			'letter-spacing': generateCSSUnit( letterSpacingTablet, letterSpacingType ),
		},
	};

	let indexTablet = 'margin-right';
	if ( 'stack' === layoutTablet ) {
		if ( 'before' === starPositionTablet ) {
			indexTablet = 'margin-top';
			tabletSelectors[ '.wp-block-uagb-star-rating ' ] = {
				'flex-direction': 'column-reverse',
				'align-items': flexJustifyContent( alignTablet ), // To align-item in flex-direction column-reverse.
				...wrapperCSSTablet,
			};
		} else if ( 'after' === starPositionTablet ) {
			indexTablet = 'margin-bottom';
			tabletSelectors[ '.wp-block-uagb-star-rating ' ] = {
				'flex-direction': 'column',
				'align-items': flexJustifyContent( alignTablet ), // To align-item in flex-direction column.
				...wrapperCSSTablet,
			};
		}
	} else if ( 'inline' === layoutTablet ) {
		if ( 'before' === starPositionTablet ) {
			indexTablet = 'margin-left';
			tabletSelectors[ '.wp-block-uagb-star-rating ' ] = {
				'flex-direction': 'row-reverse',
				'justify-content': flexAlignmentWhenDirectionIsRowReverse( alignTablet ),
				...wrapperCSSTablet,
			};
		} else if ( 'after' === starPositionTablet ) {
			indexTablet = 'margin-right';
			tabletSelectors[ '.wp-block-uagb-star-rating ' ] = {
				'flex-direction': 'row',
				'align-items': 'center',
				'justify-content': flexJustifyContent( alignTablet ),
				...wrapperCSSTablet,
			};
		}
		tabletSelectors[ '.wp-block-uagb-star-rating p.block-editor-rich-text__editable.uag-star-rating__title ' ] = {
			'margin-bottom': 0,
		};
	}

	const wrapperCSSMobile = {
		'margin-top': generateCSSUnit( blockTopMarginMobile, blockMarginUnitMobile ),
		'margin-right': generateCSSUnit( blockRightMarginMobile, blockMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( blockBottomMarginMobile, blockMarginUnitMobile ),
		'margin-left': generateCSSUnit( blockLeftMarginMobile, blockMarginUnitMobile ),
		'padding-top': generateCSSUnit( blockTopPaddingMobile, blockPaddingUnitMobile ),
		'padding-right': generateCSSUnit( blockRightPaddingMobile, blockPaddingUnitMobile ),
		'padding-bottom': generateCSSUnit( blockBottomPaddingMobile, blockPaddingUnitMobile ),
		'padding-left': generateCSSUnit( blockLeftPaddingMobile, blockPaddingUnitMobile ),
	};

	const mobileSelectors = {
		'.wp-block-uagb-star-rating ': {
			'justify-content': flexJustifyContent( alignMobile ),
		},
		' .uag-star-rating': {
			'font-size': generateCSSUnit( sizeMobile, 'px' ),
		},
		' .uag-star-rating > span': {
			'margin-right': generateCSSUnit( gapMobile, 'px' ),
		},
		' .uag-star-rating__title.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
			'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
			'letter-spacing': generateCSSUnit( letterSpacingMobile, letterSpacingType ),
		},
	};

	let indexMobile = 'margin-right';
	if ( 'stack' === layoutMobile ) {
		if ( 'before' === starPositionMobile ) {
			indexMobile = 'margin-top';
			mobileSelectors[ '.wp-block-uagb-star-rating ' ] = {
				'flex-direction': 'column-reverse',
				'align-items': flexJustifyContent( alignMobile ), // To align-item in flex-direction column-reverse.
				...wrapperCSSMobile,
			};
		} else if ( 'after' === starPositionMobile ) {
			indexMobile = 'margin-bottom';
			mobileSelectors[ '.wp-block-uagb-star-rating ' ] = {
				'flex-direction': 'column',
				'align-items': flexJustifyContent( alignMobile ),
				...wrapperCSSMobile,
			};
		}
	} else if ( 'inline' === layoutMobile ) {
		if ( 'before' === starPositionMobile ) {
			indexMobile = 'margin-left';
			mobileSelectors[ '.wp-block-uagb-star-rating ' ] = {
				'flex-direction': 'row-reverse',
				'justify-content': flexAlignmentWhenDirectionIsRowReverse( alignMobile ),
				...wrapperCSSMobile,
			};
		} else if ( 'after' === starPositionMobile ) {
			indexMobile = 'margin-right';
			mobileSelectors[ '.wp-block-uagb-star-rating ' ] = {
				'flex-direction': 'row',
				'align-items': 'center',
				'justify-content': flexJustifyContent( alignMobile ),
				'margin-bottom': 0,
				...wrapperCSSMobile,
			};
		}
		mobileSelectors[ '.wp-block-uagb-star-rating p.block-editor-rich-text__editable.uag-star-rating__title ' ] = {
			'margin-bottom': 0,
		};
	}

	tabletSelectors[ ' .uag-star-rating__title.block-editor-rich-text__editable' ][ indexTablet ] = generateCSSUnit(
		titleGapTablet,
		'px'
	);
	mobileSelectors[ ' .uag-star-rating__title.block-editor-rich-text__editable' ][ indexMobile ] = generateCSSUnit(
		titleGapMobile,
		'px'
	);

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	stylingCss += generateCSS( tabletSelectors, `${ baseSelector }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ baseSelector }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
