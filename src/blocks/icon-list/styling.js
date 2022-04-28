/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		align,
		gap,
		gapTablet,
		gapMobile,
		inner_gap,
		innerGapTablet,
		innerGapMobile,
		icon_layout,
		size,
		sizeType,
		sizeTablet,
		sizeMobile,
		fontSize,
		fontSizeType,
		fontSizeMobile,
		fontSizeTablet,
		fontFamily,
		fontWeight,
		lineHeightType,
		lineHeight,
		lineHeightTablet,
		lineHeightMobile,
		stack,
		border,
		borderTablet,
		borderMobile,
		bgSize,
		bgSizeTablet,
		bgSizeMobile,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		fontStyle,
		fontTransform,
		fontDecoration,
		iconPosition,
		hideLabel,
	} = props.attributes;

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};
	let alignment = '';
	if ( align === 'left' ) {
		alignment = 'flex-start';
	} else if ( align === 'right' ) {
		alignment = 'flex-end';
	} else {
		alignment = 'center';
	}

	const editorGap = undefined !== typeof gap && '' !== gap ? gap : 15;
	const editorGapTablet = undefined !== typeof gapTablet && '' !== gapTablet ? gapTablet : 15;
	const editorGapMobile = undefined !== typeof gapMobile && '' !== gapMobile ? gapMobile : 15;

	selectors = {
		' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap': {
			'padding': generateCSSUnit( bgSize, 'px' ),
			'border-radius': generateCSSUnit( borderRadius, 'px' ),
			'border-style':
				0 === border || undefined === border ? 'none' : 'solid',
			'border-width': generateCSSUnit( border, 'px' ),
			'align-self' : iconPosition === 'top' ? 'flex-start' : 'center'
		},
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( size, sizeType ),
		},
		' .uagb-icon-list__wrap .block-editor-inner-blocks': {
			'text-align': align,
		},
	};

	mobileSelectors = {
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( sizeMobile, sizeType ),
		},
	};

	tabletSelectors = {
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( sizeTablet, sizeType ),
		},
	};
	selectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( size, sizeType ),
		'height': generateCSSUnit( size, sizeType ),
		'font-size': generateCSSUnit( size, sizeType ),
	};
	tabletSelectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
		'height': generateCSSUnit( sizeTablet, sizeType ),
		'font-size': generateCSSUnit( sizeTablet, sizeType ),
	};
	mobileSelectors[' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
		'height': generateCSSUnit( sizeMobile, sizeType ),
		'font-size': generateCSSUnit( sizeMobile, sizeType ),
	};
	if ( 'horizontal' === icon_layout ) {
		if ( 'tablet' === stack ) {
			tabletSelectors[
				' .uagb-icon-list__wrap .wp-block[data-type="uagb/icon-list-child"]'
			] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( editorGapTablet, 'px' ),
			};

			tabletSelectors[
				'.uagb-editor-preview-mode-tablet .block-editor-block-list__layout'
			] = {
				'display': 'flex',
				'flex-direction': 'column',
			};
			mobileSelectors[
				'.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'
			] = {
				'display': 'flex',
				'flex-direction': 'column',
			};
			tabletSelectors[
				' .uagb-icon-list__wrap .wp-block[data-type="uagb/icon-list-child"]:last-child'
			] = {
				'margin-bottom': 0,
			};
		} else if ( 'mobile' === stack ) {
			mobileSelectors[
				' .uagb-icon-list__wrap .wp-block[data-type="uagb/icon-list-child"]'
			] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( editorGapMobile, 'px' ),
			};

			mobileSelectors[
				'.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'
			] = {
				'display': 'flex',
				'flex-direction': 'column',
			};

			mobileSelectors[
				' .uagb-icon-list__wrap .wp-block-uagb-icon-list-child:last-child'
			] = {
				'margin-bottom': 0,
			};
		}
		selectors[ ' .uagb-icon-list__wrap .block-editor-block-list__layout'] = {
			'justify-content': alignment,
			'-webkit-box-pack': alignment,
			'-ms-flex-pack': alignment,
		};
		selectors[' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': generateCSSUnit( editorGap / 2, 'px' ),
			'margin-right': generateCSSUnit( editorGap / 2, 'px' ),
			'display': 'inline-flex'
		};
		mobileSelectors[' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': generateCSSUnit( editorGapMobile / 2, 'px' ),
			'margin-right': generateCSSUnit( editorGapMobile / 2, 'px' ),
			'display': 'inline-flex'
		};
		tabletSelectors[' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': generateCSSUnit( editorGapTablet / 2, 'px' ),
			'margin-right': generateCSSUnit( editorGapTablet / 2, 'px' ),
			'display': 'inline-flex'
		};
	}
	if( 'vertical' === icon_layout  ) {
		selectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': 0,
			'margin-right': 0,
			'margin-bottom': generateCSSUnit( editorGap, 'px' ),
		};
		mobileSelectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': 0,
			'margin-right': 0,
			'margin-bottom': generateCSSUnit( editorGapMobile, 'px' ),
		};
		tabletSelectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': 0,
			'margin-right': 0,
			'margin-bottom': generateCSSUnit( editorGapTablet, 'px' ),
		};
		selectors[ ' .uagb-icon-list__wrap' ] = {
			'flex-direction': 'column',
		};
	}

	if ( 'right' === align && ! hideLabel ) {
		selectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-left': generateCSSUnit( inner_gap, 'px' ),
		};
		mobileSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-left': generateCSSUnit( innerGapMobile, 'px' ),
		};
		tabletSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-left': generateCSSUnit( innerGapTablet, 'px' ),
		};
		selectors[ ' .wp-block-uagb-icon-list-child ' ] = {
			'flex-direction': 'row-reverse',
		};
	} else {
		selectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit( inner_gap, 'px' ),
		};
		mobileSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit( innerGapMobile, 'px' ),
		};
		tabletSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit( innerGapTablet, 'px' ),
		};
	}

	selectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__label' ] = {
		'font-size': generateCSSUnit( fontSize, fontSizeType ),
		'font-family': fontFamily,
		'font-style' : fontStyle,
		'text-decoration': fontDecoration,
		'text-transform': fontTransform,
		'font-weight': fontWeight,
		'line-height': generateCSSUnit( lineHeight, lineHeightType ),
	};

	mobileSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__label' ] = {
		'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
		'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
	};

	tabletSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__label' ] = {
		'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
		'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
	};

	mobileSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap' ] = {
		'padding': generateCSSUnit( bgSizeMobile, 'px' ),
		'border-radius': generateCSSUnit( borderRadiusMobile, 'px' ),
		'border-style':	0 === borderMobile || undefined === borderMobile ? 'none' : 'solid',
		'border-width': generateCSSUnit( border, 'px' ),
	};

	tabletSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap' ] = {
		'padding': generateCSSUnit( bgSizeTablet, 'px' ),
		'border-radius': generateCSSUnit( borderRadiusTablet, 'px' ),
		'border-style':	0 === borderTablet || undefined === borderTablet ? 'none' : 'solid',
		'border-width': generateCSSUnit( borderTablet, 'px' ),
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
