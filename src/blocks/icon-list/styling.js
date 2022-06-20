/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {

	const blockName = props.name.replace( 'uagb/', '' );

	const {
		align,
		gap,
		gapTablet,
		gapMobile,
		gapType,
		inner_gap,
		innerGapTablet,
		innerGapMobile,
		innerGapType,
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
		borderType,
		bgSize,
		bgSizeType,
		bgSizeTablet,
		bgSizeMobile,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		borderRadiusType,
		fontStyle,
		fontTransform,
		fontDecoration,
		iconPosition,
		hideLabel,
	} = props.attributes;

	const gapFallback = getFallbackNumber( gap, 'gap', blockName );
	const gapTabletFallback = getFallbackNumber( gapTablet, 'gapTablet', blockName );
	const gapMobileFallback = getFallbackNumber( gapMobile, 'gapMobile', blockName );
	const bgSizeFallback = getFallbackNumber( bgSize, 'bgSize', blockName );
	const bgSizeTabletFallback = getFallbackNumber( bgSizeTablet, 'bgSizeTablet', blockName );
	const bgSizeMobileFallback = getFallbackNumber( bgSizeMobile, 'bgSizeMobile', blockName );
	const borderRadiusFallback = getFallbackNumber( borderRadius, 'borderRadius', blockName );
	const borderRadiusTabletFallback = getFallbackNumber( borderRadiusTablet, 'borderRadiusTablet', blockName );
	const borderRadiusMobileFallback = getFallbackNumber( borderRadiusMobile, 'borderRadiusMobile', blockName );
	const borderFallback = getFallbackNumber( border, 'border', blockName );
	const borderTabletFallback = getFallbackNumber( borderTablet, 'borderTablet', blockName );
	const borderMobileFallback = getFallbackNumber( borderMobile, 'borderMobile', blockName );
	const sizeFallback = getFallbackNumber( size, 'size', blockName );
	const sizeTabletFallback = getFallbackNumber( sizeTablet, 'sizeTablet', blockName );
	const sizeMobileFallback = getFallbackNumber( sizeMobile, 'sizeMobile', blockName );
	const innerGapFallback = getFallbackNumber( inner_gap, 'inner_gap', blockName );
	const innerGapTabletFallback = getFallbackNumber( innerGapTablet, 'innerGapTablet', blockName );
	const innerGapMobileFallback = getFallbackNumber( innerGapMobile, 'innerGapMobile', blockName );

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

	const editorGap = ( undefined !== typeof gapFallback && '' !== gapFallback ) ? gapFallback : 15;
	const editorGapTablet = ( undefined !== typeof gapTabletFallback && '' !== gapTabletFallback ) ? gapTabletFallback : 15;
	const editorGapMobile = ( undefined !== typeof gapMobileFallback && '' !== gapMobileFallback ) ? gapMobileFallback : 15;

	selectors = {
		' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap': {
			'padding': generateCSSUnit( bgSizeFallback, bgSizeType ),
			'border-radius': generateCSSUnit( borderRadiusFallback, borderRadiusType ),
			'border-style': ( 0 === borderFallback || undefined === borderFallback ) ? 'none' : 'solid',
			'border-width': generateCSSUnit( borderFallback, borderType ),
			'align-self' : iconPosition === 'top' ? 'flex-start' : 'center'
		},
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( sizeFallback, sizeType ),
		},
		' .uagb-icon-list__wrap .block-editor-inner-blocks': {
			'text-align': align,
		},
	};

	mobileSelectors = {
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( sizeMobileFallback, sizeType ),
		},
	};

	tabletSelectors = {
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( sizeTabletFallback, sizeType ),
		},
	};
	selectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeFallback, sizeType ),
		'height': generateCSSUnit( sizeFallback, sizeType ),
		'font-size': generateCSSUnit( sizeFallback, sizeType ),
	};
	tabletSelectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeTabletFallback, sizeType ),
		'height': generateCSSUnit( sizeTabletFallback, sizeType ),
		'font-size': generateCSSUnit( sizeTabletFallback, sizeType ),
	};
	mobileSelectors[' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeMobileFallback, sizeType ),
		'height': generateCSSUnit( sizeMobileFallback, sizeType ),
		'font-size': generateCSSUnit( sizeMobileFallback, sizeType ),
	};
	if ( 'horizontal' === icon_layout ) {
		if ( 'tablet' === stack ) {
			tabletSelectors[
				' .uagb-icon-list__wrap .wp-block[data-type="uagb/icon-list-child"]'
			] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( editorGapTablet, gapType ),
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
				'margin-bottom': generateCSSUnit( editorGapMobile, gapType ),
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
			'margin-left': generateCSSUnit( editorGap / 2, gapType ),
			'margin-right': generateCSSUnit( editorGap / 2, gapType ),
			'display': 'inline-flex'
		};
		mobileSelectors[' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': generateCSSUnit( editorGapMobile / 2, gapType ),
			'margin-right': generateCSSUnit( editorGapMobile / 2, gapType ),
			'display': 'inline-flex'
		};
		tabletSelectors[' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': generateCSSUnit( editorGapTablet / 2, gapType ),
			'margin-right': generateCSSUnit( editorGapTablet / 2, gapType ),
			'display': 'inline-flex'
		};
	}
	if( 'vertical' === icon_layout  ) {
		selectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': 0,
			'margin-right': 0,
			'margin-bottom': generateCSSUnit( editorGap, gapType ),
		};
		mobileSelectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': 0,
			'margin-right': 0,
			'margin-bottom': generateCSSUnit( editorGapMobile, gapType ),
		};
		tabletSelectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': 0,
			'margin-right': 0,
			'margin-bottom': generateCSSUnit( editorGapTablet, gapType ),
		};
		selectors[ ' .uagb-icon-list__wrap' ] = {
			'flex-direction': 'column',
		};
	}

	if ( 'right' === align && ! hideLabel ) {
		selectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-left': generateCSSUnit( innerGapFallback, innerGapType ),
		};
		mobileSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-left': generateCSSUnit( innerGapMobileFallback, innerGapType ),
		};
		tabletSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-left': generateCSSUnit( innerGapTabletFallback, innerGapType ),
		};
		selectors[ ' .wp-block-uagb-icon-list-child ' ] = {
			'flex-direction': 'row-reverse',
		};
	} else {
		selectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit( innerGapFallback, innerGapType ),
		};
		mobileSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit( innerGapMobileFallback, innerGapType ),
		};
		tabletSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit( innerGapTabletFallback, innerGapType ),
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
		'border-radius': generateCSSUnit( borderRadiusMobileFallback, borderRadiusType ),
		'padding': generateCSSUnit( bgSizeMobileFallback, 'px' ),
		'border-style':	( 0 === borderMobileFallback || undefined === borderMobileFallback ) ? 'none' : 'solid',
		'border-width': generateCSSUnit( borderMobileFallback, borderType ),
	};

	tabletSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap' ] = {
		'border-radius': generateCSSUnit( borderRadiusTabletFallback, borderRadiusType ),
		'padding': generateCSSUnit( bgSizeTabletFallback, 'px' ),
		'border-style':	( 0 === borderTabletFallback || undefined === borderTabletFallback ) ? 'none' : 'solid',
		'border-width': generateCSSUnit( borderTabletFallback, borderType ),
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
