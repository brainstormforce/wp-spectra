/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		block_id,
		textColor,
		titleColor,
		noticeColor,
		contentBgColor,
		noticeDismissColor,
		titleFontFamily,
		titleFontWeight,
		titleFontSizeType,
		titleLineHeightType,
		titleFontSize,
		titleFontSizeTablet,
		titleFontSizeMobile,
		titleLineHeight,
		titleLineHeightTablet,
		titleLineHeightMobile,
		descFontFamily,
		descFontWeight,
		descFontSize,
		descFontSizeType,
		descFontSizeTablet,
		descFontSizeMobile,
		descLineHeight,
		descLineHeightType,
		descLineHeightTablet,
		descLineHeightMobile,
		contentTopPadding,
		contentRightPadding,
		contentBottomPadding,
		contentLeftPadding,
		contentTopPaddingTablet,
		contentRightPaddingTablet,
		contentBottomPaddingTablet,
		contentLeftPaddingTablet,
		contentTopPaddingMobile,
		contentRightPaddingMobile,
		contentBottomPaddingMobile,
		contentLeftPaddingMobile,
		contentPaddingUnit,
		mobileContentPaddingUnit,
		tabletContentPaddingUnit,
		titleTopPadding,
		titleRightPadding,
		titleBottomPadding,
		titleLeftPadding,
		titleTopPaddingTablet,
		titleRightPaddingTablet,
		titleBottomPaddingTablet,
		titleLeftPaddingTablet,
		titleTopPaddingMobile,
		titleRightPaddingMobile,
		titleBottomPaddingMobile,
		titleLeftPaddingMobile,
		titlePaddingUnit,
		mobileTitlePaddingUnit,
		tabletTitlePaddingUnit,
		noticeDismiss,
		noticeAlignment,
		layout,
		highlightWidth,
	} = props.attributes;

	let lPadding;
	let rPadding;
	let lPaddingMobile;
	let rPaddingMobile;
	let lPaddingTablet;
	let rPaddingTablet;

	if ( noticeDismiss ) {
		if ( 'left' === noticeAlignment || 'center' === noticeAlignment ) {
			rPadding = titleRightPadding + 13;
			lPadding = titleLeftPadding;
			lPaddingMobile = titleLeftPaddingMobile;
			rPaddingMobile = titleRightPaddingMobile + 13;
			lPaddingTablet = titleLeftPaddingTablet;
			rPaddingTablet = titleRightPaddingTablet + 13;
		} else {
			lPadding = titleLeftPadding + 13;
			rPadding = titleRightPadding;
			lPaddingMobile = titleLeftPaddingMobile + 13;
			rPaddingMobile = titleRightPaddingMobile;
			lPaddingTablet = titleLeftPaddingTablet + 13;
			rPaddingTablet = titleRightPaddingTablet;
		}
	} else {
		lPadding = titleLeftPadding;
		rPadding = titleRightPadding;
		lPaddingMobile = titleLeftPaddingMobile;
		rPaddingMobile = titleRightPaddingMobile;
		lPaddingTablet = titleLeftPaddingTablet;
		rPaddingTablet = titleRightPaddingTablet;
	}

	let tabletSelectors = {};
	let mobileSelectors = {};

	const selectors = {
		' .rich-text.block-editor-rich-text__editable.uagb-notice-title': {
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'font-weight': titleFontWeight,
			'font-family': titleFontFamily,
			'line-height': generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
			'color': titleColor,
			'padding-left': generateCSSUnit( lPadding, titlePaddingUnit ),
			'padding-right': generateCSSUnit( rPadding, titlePaddingUnit ),
			'padding-top': generateCSSUnit( titleTopPadding, titlePaddingUnit ),
			'padding-bottom': generateCSSUnit(
				titleBottomPadding,
				titlePaddingUnit
			),
		},

		' .rich-text.block-editor-rich-text__editable.uagb-notice-text': {
			'padding-left': generateCSSUnit(
				contentLeftPadding,
				contentPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentRightPadding,
				contentPaddingUnit
			),
			'padding-top': generateCSSUnit(
				contentTopPadding,
				contentPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentBottomPadding,
				contentPaddingUnit
			),
		},

		' .rich-text.block-editor-rich-text__editable.uagb-notice-text p': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'font-weight': descFontWeight,
			'font-family': descFontFamily,
			'line-height': generateCSSUnit(
				descLineHeight,
				descLineHeightType
			),
			'color': textColor,
		},

		' span.uagb-notice-dismiss': {
			'fill': noticeDismissColor,
		},
	};

	if ( 'modern' === layout ) {
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-title'
		][ 'background-color' ] = noticeColor;
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-title'
		][ 'border-top-right-radius' ] = '3px';
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-title'
		][ 'border-top-left-radius' ] = '3px';

		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-text'
		][ 'background-color' ] = contentBgColor;
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-text'
		].border = '2px solid' + noticeColor;
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-text'
		][ 'border-bottom-left-radius' ] = '3px';
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-text'
		][ 'border-bottom-right-radius' ] = '3px';
	} else if ( 'simple' === layout ) {
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-title'
		][ 'background-color' ] = contentBgColor;
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-title'
		][ 'border-left' ] =
			generateCSSUnit( highlightWidth, 'px' ) + ' solid ' + noticeColor;

		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-text'
		][ 'background-color' ] = contentBgColor;
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-text'
		][ 'border-left' ] =
			generateCSSUnit( highlightWidth, 'px' ) + ' solid ' + noticeColor;
	}
	mobileSelectors = {
		' .rich-text.block-editor-rich-text__editable.uagb-notice-title': {
			'font-size': generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightMobile,
				titleLineHeightType
			),
			'padding-left': generateCSSUnit(
				lPaddingMobile,
				mobileTitlePaddingUnit
			),
			'padding-right': generateCSSUnit(
				rPaddingMobile,
				mobileTitlePaddingUnit
			),
			'padding-top': generateCSSUnit(
				titleTopPaddingMobile,
				mobileTitlePaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				titleBottomPaddingMobile,
				mobileTitlePaddingUnit
			),
		},

		' .rich-text.block-editor-rich-text__editable.uagb-notice-text p': {
			'font-size': generateCSSUnit(
				descFontSizeMobile,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightMobile,
				descLineHeightType
			),
		},
		' .rich-text.block-editor-rich-text__editable.uagb-notice-text': {
			'padding-left': generateCSSUnit(
				contentLeftPaddingMobile,
				mobileContentPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentRightPaddingMobile,
				mobileContentPaddingUnit
			),
			'padding-top': generateCSSUnit(
				contentTopPaddingMobile,
				mobileContentPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentBottomPaddingMobile,
				mobileContentPaddingUnit
			),
		},
	};

	tabletSelectors = {
		' .rich-text.block-editor-rich-text__editable.uagb-notice-title': {
			'font-size': generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
			'line-height': generateCSSUnit(
				titleLineHeightTablet,
				titleLineHeightType
			),
			'padding-left': generateCSSUnit(
				lPaddingTablet,
				tabletTitlePaddingUnit
			),
			'padding-right': generateCSSUnit(
				rPaddingTablet,
				tabletTitlePaddingUnit
			),
			'padding-top': generateCSSUnit(
				titleTopPaddingTablet,
				tabletTitlePaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				titleBottomPaddingTablet,
				tabletTitlePaddingUnit
			),
		},

		' .rich-text.block-editor-rich-text__editable.uagb-notice-text p': {
			'font-size': generateCSSUnit(
				descFontSizeTablet,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightTablet,
				descLineHeightType
			),
		},

		' .rich-text.block-editor-rich-text__editable.uagb-notice-text': {
			'padding-left': generateCSSUnit(
				contentLeftPaddingTablet,
				tabletContentPaddingUnit
			),
			'padding-right': generateCSSUnit(
				contentRightPaddingTablet,
				tabletContentPaddingUnit
			),
			'padding-top': generateCSSUnit(
				contentTopPaddingTablet,
				tabletContentPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				contentBottomPaddingTablet,
				tabletContentPaddingUnit
			),
		},
	};

	const baseSelector = `.block-editor-page #wpwrap .uagb-block-${ block_id }`;

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
