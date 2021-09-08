/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		customWidth,
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
		contentPaddingDesktop,
		contentPaddingTablet,
		contentPaddingMobile,
		contentPaddingTypeDesktop,
		contentPaddingTypeTablet,
		contentPaddingTypeMobile,
		//Border
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
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
		headingAlignment,
		borderHoverColor,
	} = props.attributes;

	let selectors = {};
	let tablet_selectors = {};
	let mobile_selectors = {};

	const alignment =
		headingAlignment == 'left'
			? 'flex-start'
			: headingAlignment == 'right'
			? 'flex-end'
			: 'center';

	selectors = {
		' .uagb-toc__list-wrap ol li a': {
			'font-size': generateCSSUnit( fontSize, fontSizeType ),
			'line-height': generateCSSUnit( lineHeight, lineHeightType ),
			'font-family': fontFamily,
			'font-weight': fontWeight,
			color: linkColor,
		},
		' .uagb-toc__title-wrap': {
			'justify-content': alignment,
			'margin-bottom': generateCSSUnit( headingBottom, 'px' ),
		},
		' .uagb-toc__title': {
			'font-size': generateCSSUnit(
				headingFontSize,
				headingFontSizeType
			),
			'line-height': generateCSSUnit(
				headingLineHeight,
				headingLineHeightType
			),
			'font-family': headingFontFamily,
			'font-weight': headingFontWeight,
			color: headingColor,
		},
		' .uagb-toc__list-wrap ol li a:hover': {
			color: linkHoverColor,
		},
		' .uagb-toc__wrap': {
			'border-style': borderStyle,
			'border-width': generateCSSUnit( borderWidth, 'px' ),
			'border-color': borderColor,
			'border-radius': generateCSSUnit( borderRadius, 'px' ),
			'padding-left': generateCSSUnit( leftPadding, paddingTypeDesktop ),
			'padding-right': generateCSSUnit(
				rightPadding,
				paddingTypeDesktop
			),
			'padding-top': generateCSSUnit( topPadding, paddingTypeDesktop ),
			'padding-bottom': generateCSSUnit(
				bottomPadding,
				paddingTypeDesktop
			),
			background: backgroundColor,
		},
		' .uagb-toc__wrap:hover': {
			'border-color': borderHoverColor,
		},
		' .uagb-toc__list-wrap ol.uagb-toc__list:first-child': {
			'margin-left': generateCSSUnit( leftMargin, marginTypeDesktop ),
			'margin-right': generateCSSUnit( rightMargin, marginTypeDesktop ),
			'margin-top': generateCSSUnit( topMargin, marginTypeDesktop ),
			'margin-bottom': generateCSSUnit( bottomMargin, marginTypeDesktop ),
		},
		' .uagb-toc__list-wrap > ol.uagb-toc__list > li:first-child': {
			'padding-top': 0,
		},
		' .uagb-toc__list-wrap > ol.uagb-toc__list li': {
			color: bulletColor,
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child': {
			'padding-bottom': 0,
		},
		' .uagb-toc__list-wrap ol.uagb-toc__list > li': {
			'padding-top':
				'calc( ' +
				generateCSSUnit(
					contentPaddingDesktop,
					contentPaddingTypeDesktop
				) +
				' / 2 )',
			'padding-bottom':
				'calc( ' +
				generateCSSUnit(
					contentPaddingDesktop,
					contentPaddingTypeDesktop
				) +
				' / 2 )',
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list > li': {
			'padding-top':
				'calc( ' +
				generateCSSUnit(
					contentPaddingDesktop,
					contentPaddingTypeDesktop
				) +
				' / 2 )',
			'padding-bottom':
				'calc( ' +
				generateCSSUnit(
					contentPaddingDesktop,
					contentPaddingTypeDesktop
				) +
				' / 2 )',
		},
		' .uag-toc__collapsible-wrap svg': {
			width: generateCSSUnit( iconSize, 'px' ),
			height: generateCSSUnit( iconSize, 'px' ),
			fill: iconColor,
		},
	};

	selectors[ ' .uagb-toc__list-wrap' ] = {
		'column-count': tColumnsDesktop,
		overflow: 'hidden',
	};

	if ( customWidth ) {
		selectors[ ' .uagb-toc__wrap' ].width = generateCSSUnit(
			widthDesktop,
			widthTypeDesktop
		);
	}

	if ( disableBullets ) {
		selectors[ '.wp-block-uagb-table-of-contents ol.uagb-toc__list>li' ] = {
			'list-style-type': 'none',
		};
		selectors[ ' .uagb-toc__list' ] = {
			'list-style-type': 'none',
		};
		selectors[ ' .uagb-toc__list .uagb-toc__list' ] = {
			'list-style-type': 'none',
		};
	}

	tablet_selectors = {
		' .uagb-toc__list-wrap ol li a': {
			'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
			'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
		},
		' .uagb-toc__title': {
			'font-size': generateCSSUnit(
				headingFontSizeTablet,
				headingFontSizeType
			),
			'line-height': generateCSSUnit(
				headingLineHeightTablet,
				headingLineHeightType
			),
		},
		' .uagb-toc__wrap': {
			width: generateCSSUnit( widthTablet, widthTypeTablet ),
			'padding-left': generateCSSUnit(
				leftPaddingTablet,
				paddingTypeTablet
			),
			'padding-right': generateCSSUnit(
				rightPaddingTablet,
				paddingTypeTablet
			),
			'padding-top': generateCSSUnit(
				topPaddingTablet,
				paddingTypeTablet
			),
			'padding-bottom': generateCSSUnit(
				bottomPaddingTablet,
				paddingTypeTablet
			),
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list:first-child': {
			'margin-left': generateCSSUnit(
				leftMarginTablet,
				marginTypeTablet
			),
			'margin-right': generateCSSUnit(
				rightMarginTablet,
				marginTypeTablet
			),
			'margin-top': generateCSSUnit( topMarginTablet, marginTypeTablet ),
			'margin-bottom': generateCSSUnit(
				bottomMarginTablet,
				marginTypeTablet
			),
		},
		' .uagb-toc__list-wrap': {
			'column-count': tColumnsTablet,
			overflow: 'hidden',
		},

		' .uagb-toc__list-wrap > ol.uagb-toc__list > li:first-child': {
			'padding-top': generateCSSUnit(
				contentPaddingTablet,
				contentPaddingTypeTablet
			),
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child': {
			'padding-bottom': generateCSSUnit(
				contentPaddingTablet,
				contentPaddingTypeTablet
			),
		},
		' .uagb-toc__list-wrap ol.uagb-toc__list > li': {
			'padding-top':
				'calc( ' +
				generateCSSUnit(
					contentPaddingTablet,
					contentPaddingTypeTablet
				) +
				' / 2 )',
			'padding-bottom':
				'calc( ' +
				generateCSSUnit(
					contentPaddingTablet,
					contentPaddingTypeTablet
				) +
				' / 2 )',
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list > li': {
			'padding-top':
				'calc( ' +
				generateCSSUnit(
					contentPaddingTablet,
					contentPaddingTypeTablet
				) +
				' / 2 )',
			'padding-bottom':
				'calc( ' +
				generateCSSUnit(
					contentPaddingTablet,
					contentPaddingTypeTablet
				) +
				' / 2 )',
		},
	};

	mobile_selectors = {
		' .uagb-toc__list-wrap ol li a': {
			'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
			'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
		},
		' .uagb-toc__title': {
			'font-size': generateCSSUnit(
				headingFontSizeMobile,
				headingFontSizeType
			),
			'line-height': generateCSSUnit(
				headingLineHeightMobile,
				headingLineHeightType
			),
		},
		' .uagb-toc__wrap': {
			width: generateCSSUnit( widthMobile, widthTypeMobile ),
			'padding-left': generateCSSUnit(
				leftPaddingMobile,
				paddingTypeMobile
			),
			'padding-right': generateCSSUnit(
				rightPaddingMobile,
				paddingTypeMobile
			),
			'padding-top': generateCSSUnit(
				topPaddingMobile,
				paddingTypeMobile
			),
			'padding-bottom': generateCSSUnit(
				bottomPaddingMobile,
				paddingTypeMobile
			),
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list:first-child': {
			'margin-left': generateCSSUnit(
				leftMarginMobile,
				marginTypeMobile
			),
			'margin-right': generateCSSUnit(
				rightMarginMobile,
				marginTypeMobile
			),
			'margin-top': generateCSSUnit( topMarginMobile, marginTypeMobile ),
			'margin-bottom': generateCSSUnit(
				bottomMarginMobile,
				marginTypeMobile
			),
		},
		' .uagb-toc__list-wrap': {
			'column-count': tColumnsMobile,
			overflow: 'hidden',
		},
		' .uagb-toc__list-wrap > ol.uagb-toc__list > li:first-child': {
			'padding-top': generateCSSUnit(
				contentPaddingMobile,
				contentPaddingTypeMobile
			),
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list:last-child > li:last-child': {
			'padding-bottom': generateCSSUnit(
				contentPaddingMobile,
				contentPaddingTypeMobile
			),
		},
		' .uagb-toc__list-wrap ol.uagb-toc__list > li': {
			'padding-top':
				'calc( ' +
				generateCSSUnit(
					contentPaddingMobile,
					contentPaddingTypeMobile
				) +
				' / 2 )',
			'padding-bottom':
				'calc( ' +
				generateCSSUnit(
					contentPaddingMobile,
					contentPaddingTypeMobile
				) +
				' / 2 )',
		},
		' .uagb-toc__list-wrap ul.uagb-toc__list > li': {
			'padding-top':
				'calc( ' +
				generateCSSUnit(
					contentPaddingMobile,
					contentPaddingTypeMobile
				) +
				' / 2 )',
			'padding-bottom':
				'calc( ' +
				generateCSSUnit(
					contentPaddingMobile,
					contentPaddingTypeMobile
				) +
				' / 2 )',
		},
	};

	const id = `.block-editor-block-list__block .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let styling_css = generateCSS( selectors, id );

	styling_css += generateCSS(
		tablet_selectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobile_selectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	if ( '' != scrollToTopColor ) {
		styling_css +=
			'.uagb-toc__scroll-top { color: ' + scrollToTopColor + '; }';
	}

	if ( '' != scrollToTopBgColor ) {
		styling_css +=
			'.block-editor-page .uagb-toc__scroll-top.uagb-toc__show-scroll.uagb-toc__show-scroll { background: ' +
			scrollToTopBgColor +
			'; }';
	}

	return styling_css;
}

export default styling;
