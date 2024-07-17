/**
 * Returns Dynamic Generated CSS
 */

import generateBorderCSS from '@Controls/generateBorderCSS';
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( attributes, clientId, name, deviceType ) {
	const blockName = name.replace( 'uagb/', '' );
	const previewType = deviceType.toLowerCase();
	const {
		block_id,
		customWidth,
		makeCollapsible,
		widthDesktop,
		widthTablet,
		widthMobile,
		widthTypeTablet,
		widthTypeMobile,
		widthTypeDesktop,
		tColumnsDesktop,
		tColumnsTablet,
		tColumnsMobile,
		iconColor,
		bulletColor,
		iconSize,
		align,
		overallAlign,
		//Color
		backgroundColor,
		linkColor,
		linkHoverColor,
		scrollToTopColor,
		scrollToTopBgColor,
		headingColor,
		//Margin
		marginTypeDesktop,
		marginTypeMobile,
		topMargin,
		rightMargin,
		bottomMargin,
		leftMargin,
		topMarginTablet,
		rightMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		topMarginMobile,
		rightMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		marginTypeTablet,
		//Padding,
		vPaddingDesktop,
		hPaddingDesktop,
		vPaddingTablet,
		hPaddingTablet,
		vPaddingMobile,
		hPaddingMobile,
		topPadding,
		rightPadding,
		bottomPadding,
		leftPadding,
		topPaddingTablet,
		rightPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		topPaddingMobile,
		rightPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		paddingTypeMobile,
		paddingTypeTablet,
		paddingTypeDesktop,
		//Padding,
		headingBottom,
		headingBottomTablet,
		headingBottomMobile,
		headingBottomType,
		contentPaddingDesktop,
		contentPaddingTablet,
		contentPaddingMobile,
		contentPaddingTypeDesktop,
		contentPaddingTypeTablet,
		contentPaddingTypeMobile,
		//Typography
		fontFamily,
		fontWeight,
		fontSize,
		fontSizeType,
		fontSizeTablet,
		fontSizeMobile,
		lineHeightType,
		lineHeight,
		lineHeightTablet,
		lineHeightMobile,
		headingFontFamily,
		headingFontWeight,
		headingFontSize,
		headingFontSizeType,
		headingFontSizeTablet,
		headingFontSizeMobile,
		headingLineHeightType,
		headingLineHeight,
		headingLineHeightTablet,
		headingLineHeightMobile,
		disableBullets,
		overallBorderHColor,
		fontStyle,
		fontTransform,
		fontDecoration,
		headingFontStyle,
		headingTransform,
		headingDecoration,
		headingAlignment,
		headingLetterSpacing,
		headingLetterSpacingTablet,
		headingLetterSpacingMobile,
		headingLetterSpacingType,
		letterSpacing,
		letterSpacingTablet,
		letterSpacingMobile,
		letterSpacingType,
		markerView,
		// separator
		separatorStyle,
		separatorHeight,
		separatorHeightType,
		separatorSpace,
		separatorSpaceType,
		separatorColor,
		separatorHColor,
		separatorSpaceTablet,
		separatorSpaceMobile,
	} = attributes;

	const tColumnsDesktopFallback = getFallbackNumber( tColumnsDesktop, 'tColumnsDesktop', blockName );
	const tColumnsTabletFallback = getFallbackNumber( tColumnsTablet, 'tColumnsTablet', blockName );
	const tColumnsMobileFallback = getFallbackNumber( tColumnsMobile, 'tColumnsMobile', blockName );
	const widthDesktopFallback = getFallbackNumber( widthDesktop, 'widthDesktop', blockName );

	let selectors = {};
	let tablet_selectors = {};
	let mobile_selectors = {};

	const overallBorderCSS = generateBorderCSS( attributes, 'overall' );
	const overallBorderCSSTablet = generateBorderCSS( attributes, 'overall', 'tablet' );
	const overallBorderCSSMobile = generateBorderCSS( attributes, 'overall', 'mobile' );

	const paddingTop = ( 'number' === typeof topPadding ) ? topPadding : vPaddingDesktop;
	const paddingBottom = ( 'number' === typeof bottomPadding ) ? bottomPadding : vPaddingDesktop;
	const paddingLeft = ( 'number' === typeof leftPadding ) ? leftPadding : hPaddingDesktop;
	const paddingRight = ( 'number' === typeof rightPadding ) ? rightPadding : hPaddingDesktop;

	const paddingTopTablet = ( 'number' === typeof topPaddingTablet ) ? topPaddingTablet : vPaddingTablet;
	const paddingBottomTablet = ( 'number' === typeof bottomPaddingTablet ) ? bottomPaddingTablet : vPaddingTablet;
	const paddingLeftTablet = ( 'number' === typeof leftPaddingTablet ) ? leftPaddingTablet : hPaddingTablet;
	const paddingRightTablet = ( 'number' === typeof rightPaddingTablet ) ? rightPaddingTablet : hPaddingTablet;

	const paddingTopMobile = ( 'number' === typeof topPaddingMobile ) ? topPaddingMobile : vPaddingMobile;
	const paddingBottomMobile = ( 'number' === typeof bottomPaddingMobile ) ? bottomPaddingMobile : vPaddingMobile;
	const paddingLeftMobile = ( 'number' === typeof leftPaddingMobile ) ? leftPaddingMobile : hPaddingMobile;
	const paddingRightMobile = ( 'number' === typeof rightPaddingMobile ) ? rightPaddingMobile : hPaddingMobile;

	selectors = {
		'.wp-block-uagb-table-of-contents': {
			'text-align': overallAlign,
		},
		' .uagb-toc__list-wrap ul li': {
			'font-size': generateCSSUnit( fontSize, fontSizeType ),
		},
		' .uagb-toc__list-wrap ol li': {
			'font-size': generateCSSUnit( fontSize, fontSizeType ),
		},
		' .uagb-toc__list-wrap li a': {
			'font-size': generateCSSUnit( fontSize, fontSizeType ),
			'line-height': generateCSSUnit( lineHeight, lineHeightType ),
			'font-family': fontFamily,
			'font-style': fontStyle,
			'text-decoration': fontDecoration,
			'text-transform': fontTransform,
			'font-weight': fontWeight,
			'color': linkColor,
			'letter-spacing': generateCSSUnit( letterSpacing, letterSpacingType ),
		},
		' .uagb-toc__title-wrap': {
			'justify-content': align,
			'margin-bottom': generateCSSUnit( headingBottom, headingBottomType ),
		},
		' .uagb-toc__title': {
			'justify-content': headingAlignment,
			'margin-bottom': generateCSSUnit( headingBottom, headingBottomType ),
			'font-size': generateCSSUnit( headingFontSize, headingFontSizeType ),
			'line-height': generateCSSUnit( headingLineHeight, headingLineHeightType ),
			'font-family': headingFontFamily,
			'font-style': headingFontStyle,
			'text-decoration': headingDecoration,
			'text-transform': headingTransform,
			'font-weight': headingFontWeight,
			'color': headingColor,
			'letter-spacing': generateCSSUnit( headingLetterSpacing, headingLetterSpacingType ),
		},
		' .uagb-toc__list-wrap ol li a:hover': {
			'color': linkHoverColor,
		},
		' .uagb-toc__wrap': {
			...overallBorderCSS,
			'padding-left': generateCSSUnit( paddingLeft, paddingTypeDesktop ),
			'padding-right': generateCSSUnit( paddingRight, paddingTypeDesktop ),
			'padding-top': generateCSSUnit( paddingTop, paddingTypeDesktop ),
			'padding-bottom': generateCSSUnit( paddingBottom, paddingTypeDesktop ),
			'background': backgroundColor,
		},
		' .uagb-toc__wrap:hover': {
			'border-color': overallBorderHColor,
		},
		' .uagb-toc__list-wrap ol.uagb-toc__list:first-child': {
			'margin-left': generateCSSUnit( leftMargin, marginTypeDesktop ),
			'margin-right': generateCSSUnit( rightMargin, marginTypeDesktop ),
			'margin-top': generateCSSUnit( topMargin, marginTypeDesktop ),
			'margin-bottom': generateCSSUnit( bottomMargin, marginTypeDesktop ),
		},
		' .uagb-toc__list-wrap > ol.uagb-toc__list li': {
			'color': bulletColor,
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child': {
			'padding-bottom': 0,
		},
		' .uagb-toc__list-wrap ol.uagb-toc__list > li': {
			'list-style-type': disableBullets ? 'none !important' : markerView + ' !important',
			'padding-top': 'calc( ' + generateCSSUnit( contentPaddingDesktop, contentPaddingTypeDesktop ) + ' / 2 )',
			'padding-bottom': 'calc( ' + generateCSSUnit( contentPaddingDesktop, contentPaddingTypeDesktop ) + ' / 2 )',
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list > li': {
			'list-style-type': disableBullets ? 'none !important' : markerView + ' !important',
			'padding-top': 'calc( ' + generateCSSUnit( contentPaddingDesktop, contentPaddingTypeDesktop ) + ' / 2 )',
			'padding-bottom': 'calc( ' + generateCSSUnit( contentPaddingDesktop, contentPaddingTypeDesktop ) + ' / 2 )',
		},
		' .uag-toc__collapsible-wrap svg': {
			'width': generateCSSUnit( iconSize, 'px' ),
			'height': generateCSSUnit( iconSize, 'px' ),
			'fill': iconColor,
		},
		' svg': {
			'width': generateCSSUnit( iconSize, 'px' ),
			'height': generateCSSUnit( iconSize, 'px' ),
			'fill': iconColor,
		},
	};

	selectors[ ' .uagb-toc__list-wrap' ] = {
		'column-count': tColumnsDesktopFallback,
		'overflow': 'hidden',
		'text-align': align,
	};

	if ( customWidth ) {
		selectors[ ' .uagb-toc__wrap' ].width = generateCSSUnit( widthDesktopFallback, widthTypeDesktop );
	}

	if ( customWidth && makeCollapsible ) {
		selectors[ ' .uagb-toc__title' ][ 'justify-content' ] = 'space-between';
	}

	if ( customWidth && makeCollapsible ) {
		selectors[ ' .uagb-toc__title' ].cursor = 'pointer';
	}

	if ( disableBullets ) {
		selectors[ '.wp-block-uagb-table-of-contents ol.uagb-toc__list>li' ] = {
			'list-style-type': 'none !important',
		};
		selectors[ ' .uagb-toc__list' ] = {
			'list-style-type': 'none  !important',
		};
		selectors[ ' .uagb-toc__list .uagb-toc__list' ] = {
			'list-style-type': 'none !important',
		};
	}

	tablet_selectors = {
		' .uagb-toc__list-wrap ul li': {
			'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
		},
		' .uagb-toc__list-wrap ol li': {
			'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
		},
		' .uagb-toc__list-wrap ol li a': {
			'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
			'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
			'letter-spacing': generateCSSUnit( letterSpacingTablet, letterSpacingType ),
		},
		' .uagb-toc__title': {
			'font-size': generateCSSUnit( headingFontSizeTablet, headingFontSizeType ),
			'line-height': generateCSSUnit( headingLineHeightTablet, headingLineHeightType ),
			'margin-bottom': generateCSSUnit( headingBottomTablet, headingBottomType ),
			'letter-spacing': generateCSSUnit( headingLetterSpacingTablet, headingLetterSpacingType ),
		},
		' .uagb-toc__wrap': {
			...overallBorderCSSTablet,
			'width': generateCSSUnit( widthTablet, widthTypeTablet ),
			'padding-left': generateCSSUnit( paddingLeftTablet, paddingTypeTablet ),
			'padding-right': generateCSSUnit( paddingRightTablet, paddingTypeTablet ),
			'padding-top': generateCSSUnit( paddingTopTablet, paddingTypeTablet ),
			'padding-bottom': generateCSSUnit( paddingBottomTablet, paddingTypeTablet ),
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list:first-child': {
			'margin-left': generateCSSUnit( leftMarginTablet, marginTypeTablet ),
			'margin-right': generateCSSUnit( rightMarginTablet, marginTypeTablet ),
			'margin-top': generateCSSUnit( topMarginTablet, marginTypeTablet ),
			'margin-bottom': generateCSSUnit( bottomMarginTablet, marginTypeTablet ),
		},
		' .uagb-toc__list-wrap': {
			'column-count': tColumnsTabletFallback,
			'overflow': 'hidden',
			'text-align': align,
		},

		' .uagb-toc__list-wrap > ol.uagb-toc__list > li:first-child': {
			'padding-top': generateCSSUnit( contentPaddingTablet, contentPaddingTypeTablet ),
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child': {
			'padding-bottom': generateCSSUnit( contentPaddingTablet, contentPaddingTypeTablet ),
		},
		' .uagb-toc__list-wrap ol.uagb-toc__list > li': {
			'padding-top': 'calc( ' + generateCSSUnit( contentPaddingTablet, contentPaddingTypeTablet ) + ' / 2 )',
			'padding-bottom': 'calc( ' + generateCSSUnit( contentPaddingTablet, contentPaddingTypeTablet ) + ' / 2 )',
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list > li': {
			'padding-top': 'calc( ' + generateCSSUnit( contentPaddingTablet, contentPaddingTypeTablet ) + ' / 2 )',
			'padding-bottom': 'calc( ' + generateCSSUnit( contentPaddingTablet, contentPaddingTypeTablet ) + ' / 2 )',
		},
	};

	mobile_selectors = {
		' .uagb-toc__list-wrap ul li': {
			'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
		},
		' .uagb-toc__list-wrap ol li': {
			'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
		},
		' .uagb-toc__list-wrap ol li a': {
			'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
			'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
			'letter-spacing': generateCSSUnit( letterSpacingMobile, letterSpacingType ),
		},
		' .uagb-toc__title': {
			'font-size': generateCSSUnit( headingFontSizeMobile, headingFontSizeType ),
			'line-height': generateCSSUnit( headingLineHeightMobile, headingLineHeightType ),
			'margin-bottom': generateCSSUnit( headingBottomMobile, headingBottomType ),
			'letter-spacing': generateCSSUnit( headingLetterSpacingMobile, headingLetterSpacingType ),
		},
		' .uagb-toc__wrap': {
			...overallBorderCSSMobile,
			'width': generateCSSUnit( widthMobile, widthTypeMobile ),
			'padding-left': generateCSSUnit( paddingLeftMobile, paddingTypeMobile ),
			'padding-right': generateCSSUnit( paddingRightMobile, paddingTypeMobile ),
			'padding-top': generateCSSUnit( paddingTopMobile, paddingTypeMobile ),
			'padding-bottom': generateCSSUnit( paddingBottomMobile, paddingTypeMobile ),
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list:first-child': {
			'margin-left': generateCSSUnit( leftMarginMobile, marginTypeMobile ),
			'margin-right': generateCSSUnit( rightMarginMobile, marginTypeMobile ),
			'margin-top': generateCSSUnit( topMarginMobile, marginTypeMobile ),
			'margin-bottom': generateCSSUnit( bottomMarginMobile, marginTypeMobile ),
		},
		' .uagb-toc__list-wrap': {
			'column-count': tColumnsMobileFallback,
			'overflow': 'hidden',
			'text-align': align,
		},
		' .uagb-toc__list-wrap > ol.uagb-toc__list > li:first-child': {
			'padding-top': generateCSSUnit( contentPaddingMobile, contentPaddingTypeMobile ),
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child': {
			'padding-bottom': generateCSSUnit( contentPaddingMobile, contentPaddingTypeMobile ),
		},
		' .uagb-toc__list-wrap ol.uagb-toc__list > li': {
			'padding-top': 'calc( ' + generateCSSUnit( contentPaddingMobile, contentPaddingTypeMobile ) + ' / 2 )',
			'padding-bottom': 'calc( ' + generateCSSUnit( contentPaddingMobile, contentPaddingTypeMobile ) + ' / 2 )',
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list > li': {
			'padding-top': 'calc( ' + generateCSSUnit( contentPaddingMobile, contentPaddingTypeMobile ) + ' / 2 )',
			'padding-bottom': 'calc( ' + generateCSSUnit( contentPaddingMobile, contentPaddingTypeMobile ) + ' / 2 )',
		},
	};

	// separator
	if ( separatorStyle !== 'none' ) {
		// Since we need the separator to ignore the padding and cover the entire width of the parent container,
		// we use calc and do the following calculations.

		const calcPaddingLeft = generateCSSUnit( paddingLeft, paddingTypeDesktop );
		const calcPaddingRight = generateCSSUnit( paddingRight, paddingTypeDesktop );

		const tCalcPaddingLeft = generateCSSUnit( paddingLeftTablet, paddingTypeTablet );
		const tCalcPaddingRight = generateCSSUnit( paddingRightTablet, paddingTypeTablet );

		const mCalcPaddingLeft = generateCSSUnit( paddingLeftMobile, paddingTypeMobile );
		const mCalcPaddingRight = generateCSSUnit( paddingRightMobile, paddingTypeMobile );

		selectors[ ' .uagb-toc__separator' ] = {
			'border-top-style': separatorStyle,
			'border-top-width': generateCSSUnit(
				getFallbackNumber( separatorHeight, 'separatorHeight', blockName ),
				separatorHeightType
			),
			'width': 'calc( 100% + ' + calcPaddingLeft + ' + ' + calcPaddingRight + ')',
			'margin-left': '-' + calcPaddingLeft,
			'border-color': separatorColor,
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( separatorSpace, 'separatorSpace', blockName ),
				separatorSpaceType
			),
		};

		selectors[ ' .uagb-toc__wrap:hover .uagb-toc__separator' ] = {
			'border-color': separatorHColor,
		};

		tablet_selectors[ ' .uagb-toc__separator' ] = {
			'width': 'calc( 100% + ' + tCalcPaddingLeft + ' + ' + tCalcPaddingRight + ')',
			'margin-left': '-' + tCalcPaddingLeft,
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( separatorSpaceTablet, 'separatorSpaceTablet', blockName ),
				separatorSpaceType
			),
		};

		mobile_selectors[ ' .uagb-toc__separator' ] = {
			'width': 'calc( 100% + ' + mCalcPaddingLeft + ' + ' + mCalcPaddingRight + ')',
			'margin-left': '-' + mCalcPaddingLeft,
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( separatorSpaceMobile, 'separatorSpaceMobile', blockName ),
				separatorSpaceType
			),
		};
	}

	const id = `.block-editor-block-list__block .uagb-block-${ block_id }`;

	let styling_css = generateCSS( selectors, id );

	if( 'tablet' === previewType || 'mobile' === previewType ) {
		styling_css += generateCSS(
			tablet_selectors,
			`${ id }`,
			true,
			'tablet'
		);

		if( 'mobile' === previewType ){
			styling_css += generateCSS(
				mobile_selectors,
				`${ id }`,
				true,
				'mobile'
			);
		}
	}

	if ( '' !== scrollToTopColor ) {
		styling_css += '.uagb-toc__scroll-top { color: ' + scrollToTopColor + '; }';
	}

	if ( '' !== scrollToTopBgColor ) {
		styling_css +=
			'.block-editor-page .uagb-toc__scroll-top.uagb-toc__show-scroll.uagb-toc__show-scroll { background: ' +
			scrollToTopBgColor +
			'; }';
	}

	return styling_css;
}

export default styling;
