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

	const editorGap = undefined !== typeof getFallbackNumber( gap, 'gap', blockName ) && '' !== getFallbackNumber( gap, 'gap', blockName ) ?
											getFallbackNumber( gap, 'gap', blockName ) :
											15;
	const editorGapTablet = undefined !== typeof getFallbackNumber( gapTablet, 'gapTablet', blockName ) && '' !== getFallbackNumber( gapTablet, 'gapTablet', blockName ) ?
											getFallbackNumber( gapTablet, 'gapTablet', blockName ) :
											15;
	const editorGapMobile = undefined !== typeof getFallbackNumber( gapMobile, 'gapMobile', blockName ) && '' !== getFallbackNumber( gapMobile, 'gapMobile', blockName ) ?
											getFallbackNumber( gapMobile, 'gapMobile', blockName ) :
											15;

	selectors = {
		' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap': {
			'padding': generateCSSUnit( getFallbackNumber( bgSize, 'bgSize', blockName ), bgSizeType ),
			'border-radius': generateCSSUnit( getFallbackNumber( borderRadius, 'borderRadius', blockName ), borderRadiusType ),
			'border-style':
				0 === getFallbackNumber( border, 'border', blockName ) ||
					undefined === getFallbackNumber( border, 'border', blockName ) ?
					'none' :
					'solid',
			'border-width': generateCSSUnit( getFallbackNumber( border, 'border', blockName ), borderType ),
			'align-self' : iconPosition === 'top' ? 'flex-start' : 'center'
		},
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit(
						getFallbackNumber( size, 'size', blockName ),
						sizeType
					),
		},
		' .uagb-icon-list__wrap .block-editor-inner-blocks': {
			'text-align': align,
		},
	};

	mobileSelectors = {
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit(
				getFallbackNumber( sizeMobile, 'sizeMobile', blockName ),
				sizeType
			),
		},
	};

	tabletSelectors = {
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit(
					getFallbackNumber( sizeTablet, 'sizeTablet', blockName ),
					sizeType
				),
		},
	};
	selectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit(
					getFallbackNumber( size, 'size', blockName ),
					sizeType
				),
		'height': generateCSSUnit(
					getFallbackNumber( size, 'size', blockName ),
					sizeType
				),
		'font-size': generateCSSUnit(
					getFallbackNumber( size, 'size', blockName ),
					sizeType
				),
	};
	tabletSelectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit(
					getFallbackNumber( sizeTablet, 'sizeTablet', blockName ),
					sizeType
				),
		'height': generateCSSUnit(
					getFallbackNumber( sizeTablet, 'sizeTablet', blockName ),
					sizeType
				),
		'font-size': generateCSSUnit(
					getFallbackNumber( sizeTablet, 'sizeTablet', blockName ),
					sizeType
				),
	};
	mobileSelectors[' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit(
				getFallbackNumber( sizeMobile, 'sizeMobile', blockName ),
				sizeType
			),
		'height': generateCSSUnit(
				getFallbackNumber( sizeMobile, 'sizeMobile', blockName ),
				sizeType
			),
		'font-size': generateCSSUnit(
				getFallbackNumber( sizeMobile, 'sizeMobile', blockName ),
				sizeType
			),
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
			'margin-left': generateCSSUnit(
				getFallbackNumber( inner_gap, 'inner_gap', blockName ),
				innerGapType
			),
		};
		mobileSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-left': generateCSSUnit(
				getFallbackNumber( innerGapMobile, 'innerGapMobile', blockName ),
				innerGapType
			),
		};
		tabletSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-left': generateCSSUnit(
				getFallbackNumber( innerGapTablet, 'innerGapTablet', blockName ),
				innerGapType
			),
		};
		selectors[ ' .wp-block-uagb-icon-list-child ' ] = {
			'flex-direction': 'row-reverse',
		};
	} else {
		selectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit(
				getFallbackNumber( inner_gap, 'inner_gap', blockName ),
				innerGapType
			),
		};
		mobileSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit(
				getFallbackNumber( innerGapMobile, 'innerGapMobile', blockName ),
				innerGapType
			),
		};
		tabletSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit(
				getFallbackNumber( innerGapTablet, 'innerGapTablet', blockName ),
				innerGapType
			),
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
		'border-radius': generateCSSUnit( getFallbackNumber( borderRadiusMobile, 'borderRadiusMobile', blockName ), borderRadiusType ),
		'padding': generateCSSUnit( getFallbackNumber( bgSizeMobile, 'bgSizeMobile', blockName ), 'px' ),
		'border-style':	0 === getFallbackNumber( borderMobile, 'borderMobile', blockName ) || undefined === getFallbackNumber( borderMobile, 'borderMobile', blockName ) ? 'none' : 'solid',
		'border-width': generateCSSUnit( getFallbackNumber( borderMobile, 'borderMobile', blockName ), borderType ),
	};

	tabletSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap' ] = {
		'border-radius': generateCSSUnit( getFallbackNumber( borderRadiusTablet, 'borderRadiusTablet', blockName ), borderRadiusType ),
		'padding': generateCSSUnit( getFallbackNumber( bgSizeTablet, 'bgSizeTablet', blockName ), 'px' ),
		'border-style':	0 === getFallbackNumber( borderTablet, 'borderTablet', blockName ) || undefined === getFallbackNumber( borderTablet, 'borderTablet', blockName ) ? 'none' : 'solid',
		'border-width': generateCSSUnit( getFallbackNumber( borderTablet, 'borderTablet', blockName ), borderType ),
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
