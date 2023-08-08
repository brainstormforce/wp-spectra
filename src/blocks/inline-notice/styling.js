/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( attributes, clientId, name, deviceType ) {
	const blockName = name.replace( 'uagb/', '' );
	const previewType = deviceType.toLowerCase();
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
		contentVrPadding,
		contentHrPadding,
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
		titleVrPadding,
		titleHrPadding,
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
		// letter spaceing
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
		descLetterSpacing,
		descLetterSpacingTablet,
		descLetterSpacingMobile,
		descLetterSpacingType,
	} = attributes;

	const iconSizeFallback = getFallbackNumber( iconSize, 'iconSize', blockName );
	const iconSizeTabFallback = getFallbackNumber( iconSizeTab, 'iconSizeTab', blockName );
	const iconSizeMobFallback = getFallbackNumber( iconSizeMob, 'iconSizeMob', blockName );
	const highlightWidthFallback = getFallbackNumber( highlightWidth, 'highlightWidth', blockName );
	const highlightWidthTabletFallback = getFallbackNumber( highlightWidthTablet, 'highlightWidthTablet', blockName );
	const highlightWidthMobileFallback = getFallbackNumber( highlightWidthMobile, 'highlightWidthMobile', blockName );

		// setting title padding Defaults
		const titlePaddingTop = ( 'number' === typeof titleTopPadding ) ? titleTopPadding : titleVrPadding;
		const titlePaddingLeft = ( 'number' === typeof titleLeftPadding ) ? titleLeftPadding : titleHrPadding;
		const titlePaddingRight = ( 'number' === typeof titleRightPadding ) ? titleRightPadding : titleHrPadding;
		const titlePaddingBottom = ( 'number' === typeof titleBottomPadding ) ? titleBottomPadding : titleVrPadding;
	
		const titlePaddingTopMobile = ( 'number' === typeof titleTopPaddingMobile ) ? titleTopPaddingMobile : titleVrPadding;
		const titlePaddingLeftMobile = ( 'number' === typeof titleLeftPaddingMobile ) ? titleLeftPaddingMobile : titleHrPadding;
		const titlePaddingRightMobile = ( 'number' === typeof titleRightPaddingMobile ) ? titleRightPaddingMobile : titleHrPadding;
		const titlePaddingBottomMobile = ( 'number' === typeof titleBottomPaddingMobile ) ? titleBottomPaddingMobile : titleVrPadding;
	
		const titlePaddingTopTablet = ( 'number' === typeof titleTopPaddingTablet ) ? titleTopPaddingTablet : titleVrPadding;
		const titlePaddingLeftTablet = ( 'number' === typeof titleLeftPaddingTablet ) ? titleLeftPaddingTablet : titleHrPadding;
		const titlePaddingRightTablet = ( 'number' === typeof titleRightPaddingTablet ) ? titleRightPaddingTablet : titleHrPadding;
		const titlePaddingBottomTablet = ( 'number' === typeof titleBottomPaddingTablet ) ? titleBottomPaddingTablet : titleVrPadding;

	let lPadding;
	let rPadding;
	let lPaddingMobile;
	let rPaddingMobile;
	let lPaddingTablet;
	let rPaddingTablet;

	if ( noticeDismiss ) {
		if ( 'left' === noticeAlignment || 'center' === noticeAlignment ) {
			rPadding = titlePaddingRight;
			lPadding = titlePaddingLeft;
			lPaddingMobile = titlePaddingLeftMobile;
			rPaddingMobile = titlePaddingRightMobile;
			lPaddingTablet = titlePaddingLeftTablet;
			rPaddingTablet = titlePaddingRightTablet;
		} else {
			lPadding = titlePaddingLeft;
			rPadding = titlePaddingRight;
			lPaddingMobile = titlePaddingLeftMobile;
			rPaddingMobile = titlePaddingRightMobile;
			lPaddingTablet = titlePaddingLeftTablet;
			rPaddingTablet = titlePaddingRightTablet;
		}
	} else {
		lPadding = titlePaddingLeft;
		rPadding = titlePaddingRight;
		lPaddingMobile = titlePaddingLeftMobile;
		rPaddingMobile = titlePaddingRightMobile;
		lPaddingTablet = titlePaddingLeftTablet;
		rPaddingTablet = titlePaddingRightTablet;
	}

	// Setting the Icon Position Defaults
	const posTopTab = ( 'number' === typeof titlePaddingTopTablet ) ? titlePaddingTopTablet : titlePaddingTop;
	const posLeftTab = ( 'number' === typeof titlePaddingLeftTablet ) ? titlePaddingLeftTablet : titlePaddingLeft;
	const posRightTab = ( 'number' === typeof titlePaddingRightTablet ) ? titlePaddingRightTablet : titlePaddingRight;
	const posClassicTab = ( 'number' === typeof highlightWidthTablet ) ? highlightWidthTablet : highlightWidthFallback;
	const posTopUnitTab = ( 'number' === typeof titlePaddingTopTablet ) ? tabletTitlePaddingUnit : titlePaddingUnit;
	const posLeftUnitTab = ( 'number' === typeof titlePaddingLeftTablet ) ? tabletTitlePaddingUnit : titlePaddingUnit;
	const posRightUnitTab = ( 'number' === typeof titlePaddingRightTablet ) ? tabletTitlePaddingUnit : titlePaddingUnit;

	const posTopMob = ( 'number' === typeof titlePaddingTopMobile ) ? titlePaddingTopMobile : posTopTab;
	const posLeftMob = ( 'number' === typeof titlePaddingLeftMobile ) ? titlePaddingLeftMobile : posLeftTab;
	const posRightMob = ( 'number' === typeof titlePaddingRightMobile ) ? titlePaddingRightMobile : posRightTab;
	const posClassicMob = ( 'number' === typeof highlightWidthMobile ) ? highlightWidthMobile : posClassicTab;
	const posTopUnitMob = ( 'number' === typeof titlePaddingTopMobile ) ? mobileTitlePaddingUnit : posTopUnitTab;
	const posLeftUnitMob = ( 'number' === typeof titlePaddingLeftMobile ) ? mobileTitlePaddingUnit : posLeftUnitTab;
	const posRightUnitMob = ( 'number' === typeof titlePaddingRightMobile ) ? mobileTitlePaddingUnit : posRightUnitTab;

	// setting content padding Defaults
	const contentPaddingTop = ( 'number' === typeof contentTopPadding ) ? contentTopPadding : contentVrPadding;
	const contentPaddingLeft = ( 'number' === typeof contentLeftPadding ) ? contentLeftPadding : contentHrPadding;
	const contentPaddingRight = ( 'number' === typeof contentRightPadding ) ? contentRightPadding : contentHrPadding;
	const contentPaddingBottom = ( 'number' === typeof contentBottomPadding ) ? contentBottomPadding : contentVrPadding;

	const contentPaddingTopMobile = ( 'number' === typeof contentTopPaddingMobile ) ? contentTopPaddingMobile : contentVrPadding;
	const conttentPaddingLeftMobile = ( 'number' === typeof contentLeftPaddingMobile ) ? contentLeftPaddingMobile : contentHrPadding;
	const contentPaddingRightMobile = ( 'number' === typeof contentRightPaddingMobile ) ? contentRightPaddingMobile : contentHrPadding;
	const contentPaddingBottomMobile = ( 'number' === typeof contentBottomPaddingMobile ) ? contentBottomPaddingMobile : contentVrPadding;

	const contentPaddingTopTablet = ( 'number' === typeof contentTopPaddingTablet ) ? contentTopPaddingTablet : contentVrPadding;
	const contentPaddingLeftTablet = ( 'number' === typeof contentLeftPaddingTablet ) ? contentLeftPaddingTablet : contentHrPadding;
	const contentPaddingRightTablet = ( 'number' === typeof contentRightPaddingTablet ) ? contentRightPaddingTablet : contentHrPadding;
	const contentPaddingBottomTablet = ( 'number' === typeof contentBottomPaddingTablet ) ? contentBottomPaddingTablet : contentVrPadding;

	let tabletSelectors = {};
	let mobileSelectors = {};

	const selectors = {
		' .rich-text.block-editor-rich-text__editable.uagb-notice-title': {
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'font-weight': titleFontWeight,
			'font-family': titleFontFamily,
			'font-style': titleFontStyle,
			'text-decoration': titleDecoration,
			'text-transform': titleTransform,
			'line-height': generateCSSUnit( titleLineHeight, titleLineHeightType ),
			'color': titleColor,
			'padding-left': generateCSSUnit( lPadding, titlePaddingUnit ),
			'padding-right': generateCSSUnit( rPadding, titlePaddingUnit ),
			'padding-top': generateCSSUnit( titlePaddingTop, titlePaddingUnit ),
			'padding-bottom': generateCSSUnit( titlePaddingBottom, titlePaddingUnit ),
			'letter-spacing': generateCSSUnit( titleLetterSpacing, titleLetterSpacingType ),
		},
		' .rich-text.block-editor-rich-text__editable.uagb-notice-text': {
			'color': textColor,
			'padding-left': generateCSSUnit( contentPaddingLeft, contentPaddingUnit ),
			'padding-right': generateCSSUnit( contentPaddingRight, contentPaddingUnit ),
			'padding-top': generateCSSUnit( contentPaddingTop, contentPaddingUnit ),
			'padding-bottom': generateCSSUnit( contentPaddingBottom, contentPaddingUnit ),
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'font-weight': descFontWeight,
			'font-family': descFontFamily,
			'font-style': descFontStyle,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'line-height': generateCSSUnit( descLineHeight, descLineHeightType ),
			'letter-spacing': generateCSSUnit( descLetterSpacing, descLetterSpacingType ),
		},
		' span.uagb-notice-dismiss': {
			// For Backward.
			'fill': noticeDismissColor,
		},
		' svg': {
			'fill': noticeDismissColor,
		},
		'.uagb-dismissable > svg': {
			'width': generateCSSUnit( iconSizeFallback, iconSizeUnit ),
			'height': generateCSSUnit( iconSizeFallback, iconSizeUnit ),
			'top': generateCSSUnit( titlePaddingTop, titlePaddingUnit ),
		},
		'.uagb-inline_notice__align-left svg': {
			'right': generateCSSUnit( titlePaddingRight, titlePaddingUnit ),
		},
		'.uagb-inline_notice__align-center svg': {
			'right': generateCSSUnit( titlePaddingRight, titlePaddingUnit ),
		},
	};

	mobileSelectors = {
		' .rich-text.block-editor-rich-text__editable.uagb-notice-title': {
			'font-size': generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
			'padding-left': generateCSSUnit( lPaddingMobile, mobileTitlePaddingUnit ),
			'padding-right': generateCSSUnit( rPaddingMobile, mobileTitlePaddingUnit ),
			'padding-top': generateCSSUnit( titlePaddingTopMobile, mobileTitlePaddingUnit ),
			'padding-bottom': generateCSSUnit( titlePaddingBottomMobile, mobileTitlePaddingUnit ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingMobile, titleLetterSpacingType ),
		},

		' .rich-text.block-editor-rich-text__editable.uagb-notice-text': {
			'font-size': generateCSSUnit( descFontSizeMobile, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeightMobile, descLineHeightType ),
			'letter-spacing': generateCSSUnit( descLetterSpacingMobile, descLetterSpacingType ),
			'padding-left': generateCSSUnit( conttentPaddingLeftMobile, mobileContentPaddingUnit ),
			'padding-right': generateCSSUnit( contentPaddingRightMobile, mobileContentPaddingUnit ),
			'padding-top': generateCSSUnit( contentPaddingTopMobile, mobileContentPaddingUnit ),
			'padding-bottom': generateCSSUnit( contentPaddingBottomMobile, mobileContentPaddingUnit ),
		},
		'.uagb-dismissable > svg': {
			'width': generateCSSUnit( iconSizeMobFallback, iconSizeUnit ),
			'height': generateCSSUnit( iconSizeMobFallback, iconSizeUnit ),
			'top': generateCSSUnit( posTopMob, posTopUnitMob ),
		},
		'.uagb-inline_notice__align-left svg': {
			'right': generateCSSUnit( posRightMob, posRightUnitMob ),
		},
		'.uagb-inline_notice__align-center svg': {
			'right': generateCSSUnit( posRightMob, posRightUnitMob ),
		},
	};

	tabletSelectors = {
		' .rich-text.block-editor-rich-text__editable.uagb-notice-title': {
			'font-size': generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
			'padding-left': generateCSSUnit( lPaddingTablet, tabletTitlePaddingUnit ),
			'padding-right': generateCSSUnit( rPaddingTablet, tabletTitlePaddingUnit ),
			'padding-top': generateCSSUnit( titlePaddingTopTablet, tabletTitlePaddingUnit ),
			'padding-bottom': generateCSSUnit( titlePaddingBottomTablet, tabletTitlePaddingUnit ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingTablet, titleLetterSpacingType ),
		},

		' .rich-text.block-editor-rich-text__editable.uagb-notice-text': {
			'font-size': generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeightTablet, descLineHeightType ),
			'letter-spacing': generateCSSUnit( descLetterSpacingTablet, descLetterSpacingType ),
			'padding-left': generateCSSUnit( contentPaddingLeftTablet, tabletContentPaddingUnit ),
			'padding-right': generateCSSUnit( contentPaddingRightTablet, tabletContentPaddingUnit ),
			'padding-top': generateCSSUnit( contentPaddingTopTablet, tabletContentPaddingUnit ),
			'padding-bottom': generateCSSUnit( contentPaddingBottomTablet, tabletContentPaddingUnit ),
		},
		'.uagb-dismissable > svg': {
			'width': generateCSSUnit( iconSizeTabFallback, iconSizeUnit ),
			'height': generateCSSUnit( iconSizeTabFallback, iconSizeUnit ),
			'top': generateCSSUnit( posTopTab, posTopUnitTab ),
		},
		'.uagb-inline_notice__align-left svg': {
			'right': generateCSSUnit( posRightTab, posRightUnitTab ),
		},
		'.uagb-inline_notice__align-center svg': {
			'right': generateCSSUnit( posRightTab, posRightUnitTab ),
		},
	};

	if ( 'modern' === layout ) {
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-title' ][
			'background-color'
		] = noticeColor;
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-title' ][ 'border-top-right-radius' ] =
			'3px';
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-title' ][ 'border-top-left-radius' ] =
			'3px';
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-text' ][
			'background-color'
		] = contentBgColor;
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-text' ].border =
			'2px solid ' + noticeColor;
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-text' ][ 'border-bottom-left-radius' ] =
			'3px';
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-text' ][ 'border-bottom-right-radius' ] =
			'3px';
		selectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': generateCSSUnit( titlePaddingLeft, titlePaddingUnit ),
		};
		tabletSelectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': generateCSSUnit( posLeftTab, posLeftUnitTab ),
		};
		mobileSelectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': generateCSSUnit( posLeftMob, posLeftUnitMob ),
		};
	} else if ( 'simple' === layout ) {
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-title' ][
			'background-color'
		] = contentBgColor;
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-title' ][ 'border-left' ] =
			generateCSSUnit( highlightWidthFallback, 'px' ) + ' solid ' + noticeColor;
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-text' ][
			'background-color'
		] = contentBgColor;
		selectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-text' ][ 'border-left' ] =
			generateCSSUnit( highlightWidthFallback, 'px' ) + ' solid ' + noticeColor;
		mobileSelectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-text' ][ 'border-left' ] =
			generateCSSUnit( highlightWidthMobileFallback, 'px' ) + ' solid ' + noticeColor;
		mobileSelectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-title' ][ 'border-left' ] =
			generateCSSUnit( highlightWidthMobileFallback, 'px' ) + ' solid ' + noticeColor;
		tabletSelectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-text' ][ 'border-left' ] =
			generateCSSUnit( highlightWidthTabletFallback, 'px' ) + ' solid ' + noticeColor;
		tabletSelectors[ ' .rich-text.block-editor-rich-text__editable.uagb-notice-title' ][ 'border-left' ] =
			generateCSSUnit( highlightWidthTabletFallback, 'px' ) + ' solid ' + noticeColor;
		selectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': `calc(${ generateCSSUnit( titlePaddingLeft, titlePaddingUnit ) } + ${ generateCSSUnit(
				highlightWidthFallback,
				'px'
			) })`,
		};
		tabletSelectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': `calc(${ generateCSSUnit( posLeftTab, posLeftUnitTab ) } + ${ generateCSSUnit(
				posClassicTab,
				'px'
			) })`,
		};
		mobileSelectors[ '.uagb-inline_notice__align-right svg' ] = {
			'left': `calc(${ generateCSSUnit( posLeftMob, posLeftUnitMob ) } + ${ generateCSSUnit(
				posClassicMob,
				'px'
			) })`,
		};
	}

	const baseSelector = `.editor-styles-wrapper #block-${ clientId } .uagb-block-${ block_id }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	if( 'tablet' === previewType || 'mobile' === previewType ) {
		stylingCss += generateCSS(
			tabletSelectors,
			`${ baseSelector }`,
			true,
			'tablet'
		);

		if( 'mobile' === previewType ){
			stylingCss += generateCSS(
				mobileSelectors,
				`${ baseSelector }`,
				true,
				'mobile'
			);
		}
	}
	return stylingCss;
}

export default styling;
