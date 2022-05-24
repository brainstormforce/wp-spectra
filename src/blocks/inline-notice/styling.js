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
		iconSize,
		iconSizeTab,
		iconSizeMob,
		iconSizeUnit,
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
		highlightWidthMobile,
		highlightWidthTablet,
		titleTransform,
		titleDecoration,
		descTransform,
		descDecoration,
		titleFontStyle,
		descFontStyle,
	} = props.attributes;

	let lPadding;
	let rPadding;
	let lPaddingMobile;
	let rPaddingMobile;
	let lPaddingTablet;
	let rPaddingTablet;

	if ( noticeDismiss ) {
		if ( 'left' === noticeAlignment || 'center' === noticeAlignment ) {
			rPadding = titleRightPadding;
			lPadding = titleLeftPadding;
			lPaddingMobile = titleLeftPaddingMobile;
			rPaddingMobile = titleRightPaddingMobile;
			lPaddingTablet = titleLeftPaddingTablet;
			rPaddingTablet = titleRightPaddingTablet;
		} else {
			lPadding = titleLeftPadding;
			rPadding = titleRightPadding;
			lPaddingMobile = titleLeftPaddingMobile;
			rPaddingMobile = titleRightPaddingMobile;
			lPaddingTablet = titleLeftPaddingTablet;
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

	const posTopTab = ! isNaN( titleTopPaddingTablet ) ? titleTopPaddingTablet : titleTopPadding;
	const posLeftTab = ! isNaN( titleLeftPaddingTablet ) ? titleLeftPaddingTablet : titleLeftPadding;
	const posRightTab = ! isNaN( titleRightPaddingTablet ) ? titleRightPaddingTablet : titleRightPadding;
	const posClassicTab = ! isNaN( highlightWidthTablet ) ? highlightWidthTablet : highlightWidth;
	const posTopUnitTab = ! isNaN( titleTopPaddingTablet ) ? tabletTitlePaddingUnit : titlePaddingUnit;
	const posLeftUnitTab = ! isNaN( titleLeftPaddingTablet ) ? tabletTitlePaddingUnit : titlePaddingUnit;
	const posRightUnitTab = ! isNaN( titleRightPaddingTablet ) ? tabletTitlePaddingUnit : titlePaddingUnit;

	const posTopMob = ! isNaN( titleTopPaddingMobile ) ? titleTopPaddingMobile : posTopTab;
	const posLeftMob = ! isNaN( titleLeftPaddingMobile ) ? titleLeftPaddingMobile : posLeftTab;
	const posRightMob = ! isNaN( titleRightPaddingMobile ) ? titleRightPaddingMobile : posRightTab;
	const posClassicMob = ! isNaN( highlightWidthMobile ) ? highlightWidthMobile : posClassicTab;
	const posTopUnitMob = ! isNaN( titleTopPaddingMobile ) ? mobileTitlePaddingUnit : posTopUnitTab;
	const posLeftUnitMob = ! isNaN( titleLeftPaddingMobile ) ? mobileTitlePaddingUnit : posLeftUnitTab;
	const posRightUnitMob = ! isNaN( titleRightPaddingMobile ) ? mobileTitlePaddingUnit : posRightUnitTab;

	let tabletSelectors = {};
	let mobileSelectors = {};

	const selectors = {
		' .rich-text.block-editor-rich-text__editable.uagb-notice-title': {
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'font-weight': titleFontWeight,
			'font-family': titleFontFamily,
			'font-style' : titleFontStyle,
			'text-decoration': titleDecoration,
			'text-transform': titleTransform,
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
			'font-style' : descFontStyle,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'line-height': generateCSSUnit(
				descLineHeight,
				descLineHeightType
			),
			'color': textColor,
		},

		' span.uagb-notice-dismiss': { // For Backward.
			'fill': noticeDismissColor,
		},
		' svg': {
			'fill': noticeDismissColor,
		},
		'.uagb-dismissable > svg': {
			'width': generateCSSUnit(
				iconSize,
				iconSizeUnit
			),
			'height': generateCSSUnit(
				iconSize,
				iconSizeUnit
			),
			'top': generateCSSUnit(
				titleTopPadding,
				titlePaddingUnit
			),
		},
		'.uagb-inline_notice__align-left svg': {
			'right': generateCSSUnit(
				titleRightPadding,
				titlePaddingUnit
			),
		},
		'.uagb-inline_notice__align-center svg': {
			'right': generateCSSUnit(
				titleRightPadding,
				titlePaddingUnit
			),
		},
	};

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
		'.uagb-dismissable > svg': {
			'width': generateCSSUnit(
				iconSizeMob,
				iconSizeUnit
			),
			'height': generateCSSUnit(
				iconSizeMob,
				iconSizeUnit
			),
			'top': generateCSSUnit(
				posTopMob,
				posTopUnitMob
			),
		},
		'.uagb-inline_notice__align-left svg': {
			'right': generateCSSUnit(
				posRightMob,
				posRightUnitMob
			),
		},
		'.uagb-inline_notice__align-center svg': {
			'right': generateCSSUnit(
				posRightMob,
				posRightUnitMob
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
		'.uagb-dismissable > svg': {
			'width': generateCSSUnit(
				iconSizeTab,
				iconSizeUnit
			),
			'height': generateCSSUnit(
				iconSizeTab,
				iconSizeUnit
			),
			'top': generateCSSUnit(
				posTopTab,
				posTopUnitTab
			),
		},
		'.uagb-inline_notice__align-left svg': {
			'right': generateCSSUnit(
				posRightTab,
				posRightUnitTab
			),
		},
		'.uagb-inline_notice__align-center svg': {
			'right': generateCSSUnit(
				posRightTab,
				posRightUnitTab
			),
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
		].border = '2px solid ' + noticeColor;
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-text'
		][ 'border-bottom-left-radius' ] = '3px';
		selectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-text'
		][ 'border-bottom-right-radius' ] = '3px';
		selectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': generateCSSUnit(
				titleLeftPadding,
				titlePaddingUnit
			),
		};
		tabletSelectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': generateCSSUnit(
				posLeftTab,
				posLeftUnitTab
			),
		};
		mobileSelectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': generateCSSUnit(
				posLeftMob,
				posLeftUnitMob
			),
		};
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
		mobileSelectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-text'
		][ 'border-left' ] =
			generateCSSUnit( highlightWidthMobile, 'px' ) + ' solid ' + noticeColor;
		mobileSelectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-title'
		][ 'border-left' ] =
			generateCSSUnit( highlightWidthMobile, 'px' ) + ' solid ' + noticeColor;
		tabletSelectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-text'
		][ 'border-left' ] =
			generateCSSUnit( highlightWidthTablet, 'px' ) + ' solid ' + noticeColor;
		tabletSelectors[
			' .rich-text.block-editor-rich-text__editable.uagb-notice-title'
		][ 'border-left' ] =
			generateCSSUnit( highlightWidthTablet, 'px' ) + ' solid ' + noticeColor;
		selectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': `calc(${ generateCSSUnit(
				titleLeftPadding,
				titlePaddingUnit
			) } + ${ generateCSSUnit(
				highlightWidth,
				'px'
			) })`,
		};
		tabletSelectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': `calc(${ generateCSSUnit(
				posLeftTab,
				posLeftUnitTab
			) } + ${ generateCSSUnit(
				posClassicTab,
				'px'
			) })`,
		};
		mobileSelectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': `calc(${ generateCSSUnit(
				posLeftMob,
				posLeftUnitMob
			) } + ${ generateCSSUnit(
				posClassicMob,
				'px'
			) })`,
		};
	}

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ block_id }`;

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
