/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( attributes, clientId, name ) {
	const blockName = name.replace( 'uagb/', '' );

	const {
		headerBgColor,
		titleAlign,
		headerTextColor,
		activeTabBgColor,
		activeTabTextColor,
		bodyBgColor,
		bodyTextColor,
		tabTitleTopMargin,
		tabTitleLeftMargin,
		tabTitleRightMargin,
		tabTitleBottomMargin,
		tabTitleTopPadding,
		tabTitleBottomPadding,
		tabTitleLeftPadding,
		tabTitleRightPadding,
		titleFontFamily,
		titleFontWeight,
		titleFontSize,
		titleFontSizeType,
		titleFontSizeMobile,
		titleFontSizeTablet,
		titleLineHeight,
		titleLineHeightType,
		titleLineHeightMobile,
		titleLineHeightTablet,
		titleTransform,
		titleDecoration,
		//Border
		tabBorderHColor,
		iconColor,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		tabBodyLeftMargin,
		tabBodyRightMargin,
		tabBodyTopMargin,
		tabBodyBottomMargin,
		iconSpacing,
		iconSpacingTablet,
		iconSpacingMobile,
		activeiconColor,
		tabTitlePaddingUnit,
		tabTitleMarginUnit,
		tabBodyPaddingUnit,
		tabBodyMarginUnit,
		tabTitleTopPaddingTablet,
		tabTitleBottomPaddingTablet,
		tabTitleLeftPaddingTablet,
		tabTitleRightPaddingTablet,
		tabTitleTopMarginTablet,
		tabTitleLeftMarginTablet,
		tabTitleRightMarginTablet,
		tabTitleBottomMarginTablet,
		tablettabTitlePaddingUnit,
		tablettabTitleMarginUnit,
		tabTitleTopPaddingMobile,
		tabTitleBottomPaddingMobile,
		tabTitleLeftPaddingMobile,
		tabTitleRightPaddingMobile,
		tabTitleTopMarginMobile,
		tabTitleLeftMarginMobile,
		tabTitleRightMarginMobile,
		tabTitleBottomMarginMobile,
		mobiletabTitlePaddingUnit,
		mobiletabTitleMarginUnit,
		tabBodyTopPadding,
		tabBodyBottomPadding,
		tabBodyLeftPadding,
		tabBodyRightPadding,
		tabBodyTopPaddingTablet,
		tabBodyBottomPaddingTablet,
		tabBodyLeftPaddingTablet,
		tabBodyRightPaddingTablet,
		tabBodyTopMarginTablet,
		tabBodyLeftMarginTablet,
		tabBodyRightMarginTablet,
		tabBodyBottomMarginTablet,
		tablettabBodyPaddingUnit,
		tablettabBodyMarginUnit,
		tabBodyTopPaddingMobile,
		tabBodyBottomPaddingMobile,
		tabBodyLeftPaddingMobile,
		tabBodyRightPaddingMobile,
		tabBodyTopMarginMobile,
		tabBodyLeftMarginMobile,
		tabBodyRightMarginMobile,
		tabBodyBottomMarginMobile,
		mobiletabBodyPaddingUnit,
		mobiletabBodyMarginUnit,
		titleFontStyle,
		tabAlign,
		titleLetterSpacing,
		titleLetterSpacingTablet,
		titleLetterSpacingMobile,
		titleLetterSpacingType,
	} = attributes;

	const iconSizeFallback = getFallbackNumber( iconSize, 'iconSize', blockName );
	const iconSpacingFallback = getFallbackNumber( iconSpacing, 'iconSpacing', blockName );

	const borderCSS = generateBorderCSS( attributes, 'tab', '' );
	const borderCSSTablet = generateBorderCSS( attributes, 'tab', 'tablet' );
	const borderCSSMobile = generateBorderCSS( attributes, 'tab', 'mobile' );

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};
	selectors = {
		'.uagb-tabs__hstyle1-desktop > .uagb-tabs__panel .uagb-tab': borderCSS,
		'.uagb-tabs__hstyle1-desktop > .uagb-tabs__body-wrap': borderCSS,
		'.uagb-tabs__hstyle2-desktop > .uagb-tabs__panel .uagb-tab': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__hstyle2-desktop ul.uagb-tabs__panel': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSS,
		},
		'.uagb-tabs__hstyle2-desktop > .uagb-tabs__body-wrap': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__hstyle3-desktop .uagb-tab': {
			'border-bottom-width': '0px',
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSS,
		},
		'.uagb-tabs__hstyle3-desktop > .uagb-tabs__body-wrap': borderCSS,
		'.uagb-tabs__hstyle4-desktop .uagb-tab': {
			'border-radius': '30px',
			...borderCSS,
		},
		'.uagb-tabs__hstyle4-desktop > .uagb-tabs__body-wrap': borderCSS,
		'.uagb-tabs__hstyle5-desktop': {
			...borderCSS,
		},
		'.uagb-tabs__hstyle5-desktop .uagb-tab': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-bottom-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
		},
		'.uagb-tabs__hstyle5-desktop .uagb-tab.uagb-tabs__active': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSS,
		},
		'.uagb-tabs__vstyle6-desktop .uagb-tab': borderCSS,
		'.uagb-tabs__vstyle6-desktop .uagb-tabs__body-wrap': borderCSS,
		'.uagb-tabs__vstyle7-desktop .uagb-tab': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSS,
		},
		'.uagb-tabs__vstyle7-desktop > .uagb-tabs__body-wrap': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__vstyle8-desktop .uagb-tab': {
			'border-right-width': '0px',
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSS,
		},
		'.uagb-tabs__vstyle8-desktop > .uagb-tabs__body-wrap': borderCSS,
		'.uagb-tabs__vstyle9-desktop .uagb-tab': {
			'border-radius': '30px',
			...borderCSS,
		},
		'.uagb-tabs__vstyle9-desktop > .uagb-tabs__body-wrap': borderCSS,
		'.uagb-tabs__vstyle10-desktop': {
			...borderCSS,
		},
		'.uagb-tabs__vstyle10-desktop ul.uagb-tabs__panel .uagb-tab': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__vstyle10-desktop .uagb-tabs__body-wrap': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__vstyle10-desktop ul.uagb-tabs__panel .uagb-tab.uagb-tabs__active': {
			'border-top-width': '0px',
			'border-bottom-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSS,
		},
		' > .uagb-tabs__panel .uagb-tab': {
			'background': headerBgColor,
			'text-align': titleAlign,
			'margin-top': generateCSSUnit( tabTitleTopMargin, tabTitleMarginUnit ),
			'margin-left': generateCSSUnit( tabTitleLeftMargin, tabTitleMarginUnit ),
			'margin-right': generateCSSUnit( tabTitleRightMargin, tabTitleMarginUnit ),
			'margin-bottom': generateCSSUnit( tabTitleBottomMargin, tabTitleMarginUnit ),
		},
		' > .uagb-tabs__panel .uagb-tab a': {
			'padding-top': generateCSSUnit( tabTitleTopPadding, tabTitlePaddingUnit ),
			'padding-bottom': generateCSSUnit( tabTitleBottomPadding, tabTitlePaddingUnit ),
			'padding-left': generateCSSUnit( tabTitleLeftPadding, tabTitlePaddingUnit ),
			'padding-right': generateCSSUnit( tabTitleRightPadding, tabTitlePaddingUnit ),
		},
		' > .uagb-tabs__panel .uagb-tab a > p': {
			'color': headerTextColor,
			'font-family': titleFontFamily,
			'font-weight': titleFontWeight,
			'font-size': generateCSSUnit( titleFontSize, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeight, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacing, titleLetterSpacingType ),
			'text-transform': titleTransform,
			'text-decoration': titleDecoration,
			'font-style': titleFontStyle,
		},
		' > .uagb-tabs__panel .uagb-tab.uagb-tabs__active ': {
			'background': activeTabBgColor,
		},
		' > .uagb-tabs__panel .uagb-tab.uagb-tabs__active p': {
			'color': activeTabTextColor,
		},
		' > .uagb-tabs__panel .uagb-tab.uagb-tabs__active .uagb-tabs__icon svg': {
			'fill': activeiconColor,
		},
		' > .uagb-tabs__body-wrap ': {
			'background': bodyBgColor,
			'padding-top': generateCSSUnit( tabBodyTopPadding, tabBodyPaddingUnit ),
			'padding-bottom': generateCSSUnit( tabBodyBottomPadding, tabBodyPaddingUnit ),
			'padding-left': generateCSSUnit( tabBodyLeftPadding, tabBodyPaddingUnit ),
			'padding-right': generateCSSUnit( tabBodyRightPadding, tabBodyPaddingUnit ),
			'margin-top': generateCSSUnit( tabBodyTopMargin, tabBodyMarginUnit ),
			'margin-left': generateCSSUnit( tabBodyLeftMargin, tabBodyMarginUnit ),
			'margin-right': generateCSSUnit( tabBodyRightMargin, tabBodyMarginUnit ),
			'margin-bottom': generateCSSUnit( tabBodyBottomMargin, tabBodyMarginUnit ),
		},
		' > .uagb-tabs__body-wrap > .block-editor-inner-blocks p': {
			'color': bodyTextColor,
		},
		' .uagb-tabs__icon svg': {
			'height': generateCSSUnit( iconSizeFallback, 'px' ),
			'width': generateCSSUnit( iconSizeFallback, 'px' ),
			'fill': iconColor,
		},
		'.uagb-tabs__wrap > .uagb-tabs__panel .uagb-tab:hover': {
			'border-color': tabBorderHColor,
		},
		'.uagb-tabs__wrap > .uagb-tabs__body-wrap:hover': {
			'border-color': tabBorderHColor,
		},
		' .uagb-tabs__icon-position-left  .uagb-tabs__icon ': {
			'margin-right': generateCSSUnit( iconSpacingFallback, 'px' ),
		},
		' .uagb-tabs__icon-position-right  .uagb-tabs__icon ': {
			'margin-left': generateCSSUnit( iconSpacingFallback, 'px' ),
		},
		' .uagb-tabs__icon-position-top  .uagb-tabs__icon ': {
			'margin-bottom': generateCSSUnit( iconSpacingFallback, 'px' ),
		},
		' .uagb-tabs__icon-position-bottom  .uagb-tabs__icon ': {
			'margin-top': generateCSSUnit( iconSpacingFallback, 'px' ),
		},
	};

	if ( 'left' === tabAlign ) {
		selectors[ ' .uagb-tabs__panel' ] = {
			'margin-right': 'auto',
			'margin-left': 0,
		};
	} else if ( 'right' === tabAlign ) {
		selectors[ ' .uagb-tabs__panel' ] = {
			'margin-left': 'auto',
			'margin-right': 0,
		};
	} else {
		selectors[ ' .uagb-tabs__panel' ] = {
			'margin': 'auto',
		};
	}

	tabletSelectors = {
		'.uagb-tabs__hstyle1-tablet > .uagb-tabs__panel .uagb-tab': borderCSSTablet,
		'.uagb-tabs__hstyle1-tablet > .uagb-tabs__body-wrap': borderCSSTablet,
		'.uagb-tabs__hstyle2-tablet > .uagb-tabs__panel .uagb-tab': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__hstyle2-tablet ul.uagb-tabs__panel': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSTablet,
		},
		'.uagb-tabs__hstyle2-tablet > .uagb-tabs__body-wrap': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__hstyle3-tablet .uagb-tab': {
			'border-bottom-width': '0px',
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSTablet,
		},
		'.uagb-tabs__hstyle3-tablet > .uagb-tabs__body-wrap': borderCSSTablet,
		'.uagb-tabs__hstyle4-tablet .uagb-tab': {
			'border-radius': '30px',
			...borderCSSTablet,
		},
		'.uagb-tabs__hstyle4-tablet > .uagb-tabs__body-wrap': borderCSSTablet,
		'.uagb-tabs__hstyle5-tablet': {
			...borderCSSTablet,
		},
		'.uagb-tabs__hstyle5-tablet .uagb-tab': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-bottom-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
		},
		'.uagb-tabs__hstyle5-tablet .uagb-tab.uagb-tabs__active': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSTablet,
		},
		'.uagb-tabs__vstyle6-tablet .uagb-tab': borderCSSTablet,
		'.uagb-tabs__vstyle6-tablet .uagb-tabs__body-wrap': borderCSSTablet,
		'.uagb-tabs__vstyle7-tablet .uagb-tab': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSTablet,
		},
		'.uagb-tabs__vstyle7-tablet > .uagb-tabs__body-wrap': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__vstyle8-tablet .uagb-tab': {
			'border-right-width': '0px',
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSTablet,
		},
		'.uagb-tabs__vstyle8-tablet > .uagb-tabs__body-wrap': borderCSSTablet,
		'.uagb-tabs__vstyle9-tablet .uagb-tab': {
			'border-radius': '30px',
			...borderCSSTablet,
		},
		'.uagb-tabs__vstyle9-tablet > .uagb-tabs__body-wrap': borderCSSTablet,
		'.uagb-tabs__vstyle10-tablet': {
			...borderCSSTablet,
		},
		'.uagb-tabs__vstyle10-tablet ul.uagb-tabs__panel .uagb-tab': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__vstyle10-tablet .uagb-tabs__body-wrap': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__vstyle10-tablet ul.uagb-tabs__panel .uagb-tab.uagb-tabs__active': {
			'border-top-width': '0px',
			'border-bottom-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSTablet,
		},
		' .uagb-tabs__icon svg': {
			'height': generateCSSUnit( iconSizeTablet, 'px' ),
			'width': generateCSSUnit( iconSizeTablet, 'px' ),
		},
		' > .uagb-tabs__panel .uagb-tab p': {
			'font-size': generateCSSUnit( titleFontSizeTablet, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightTablet, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingTablet, titleLetterSpacingType ),
		},
		' > .uagb-tabs__panel .uagb-tab a': {
			'padding-top': generateCSSUnit( tabTitleTopPaddingTablet, tablettabTitlePaddingUnit ),
			'padding-bottom': generateCSSUnit( tabTitleBottomPaddingTablet, tablettabTitlePaddingUnit ),
			'padding-left': generateCSSUnit( tabTitleLeftPaddingTablet, tablettabTitlePaddingUnit ),
			'padding-right': generateCSSUnit( tabTitleRightPaddingTablet, tablettabTitlePaddingUnit ),
		},
		' > .uagb-tabs__panel .uagb-tab': {
			'margin-top': generateCSSUnit( tabTitleTopMarginTablet, tablettabTitleMarginUnit ),
			'margin-left': generateCSSUnit( tabTitleLeftMarginTablet, tablettabTitleMarginUnit ),
			'margin-right': generateCSSUnit( tabTitleRightMarginTablet, tablettabTitleMarginUnit ),
			'margin-bottom': generateCSSUnit( tabTitleBottomMarginTablet, tablettabTitleMarginUnit ),
			...borderCSSTablet,
		},
		' > .uagb-tabs__body-wrap ': {
			'padding-top': generateCSSUnit( tabBodyTopPaddingTablet, tablettabBodyPaddingUnit ),
			'padding-bottom': generateCSSUnit( tabBodyBottomPaddingTablet, tablettabBodyPaddingUnit ),
			'padding-left': generateCSSUnit( tabBodyLeftPaddingTablet, tablettabBodyPaddingUnit ),
			'padding-right': generateCSSUnit( tabBodyRightPaddingTablet, tablettabBodyPaddingUnit ),
			'margin-top': generateCSSUnit( tabBodyTopMarginTablet, tablettabBodyMarginUnit ),
			'margin-left': generateCSSUnit( tabBodyLeftMarginTablet, tablettabBodyMarginUnit ),
			'margin-right': generateCSSUnit( tabBodyRightMarginTablet, tablettabBodyMarginUnit ),
			'margin-bottom': generateCSSUnit( tabBodyBottomMarginTablet, tablettabBodyMarginUnit ),
			...borderCSSTablet,
		},
		' .uagb-tabs__icon-position-left  .uagb-tabs__icon ': {
			'margin-right': generateCSSUnit( iconSpacingTablet, 'px' ),
		},
		' .uagb-tabs__icon-position-right  .uagb-tabs__icon ': {
			'margin-left': generateCSSUnit( iconSpacingTablet, 'px' ),
		},
		' .uagb-tabs__icon-position-top  .uagb-tabs__icon ': {
			'margin-bottom': generateCSSUnit( iconSpacingTablet, 'px' ),
		},
		' .uagb-tabs__icon-position-bottom  .uagb-tabs__icon ': {
			'margin-top': generateCSSUnit( iconSpacingTablet, 'px' ),
		},
	};
	mobileSelectors = {
		'.uagb-tabs__hstyle1-mobile > .uagb-tabs__panel .uagb-tab': borderCSSMobile,
		'.uagb-tabs__hstyle1-mobile > .uagb-tabs__body-wrap': borderCSSMobile,
		'.uagb-tabs__hstyle2-mobile > .uagb-tabs__panel .uagb-tab': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__hstyle2-mobile ul.uagb-tabs__panel': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSMobile,
		},
		'.uagb-tabs__hstyle2-mobile > .uagb-tabs__body-wrap': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__hstyle3-mobile .uagb-tab': {
			'border-bottom-width': '0px',
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSMobile,
		},
		'.uagb-tabs__hstyle3-mobile > .uagb-tabs__body-wrap': borderCSSMobile,
		'.uagb-tabs__hstyle4-mobile .uagb-tab': {
			'border-radius': '30px',
			...borderCSSMobile,
		},
		'.uagb-tabs__hstyle4-mobile > .uagb-tabs__body-wrap': borderCSSMobile,
		'.uagb-tabs__hstyle5-mobile': {
			...borderCSSMobile,
		},
		'.uagb-tabs__hstyle5-mobile .uagb-tab': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-bottom-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
		},
		'.uagb-tabs__hstyle5-mobile .uagb-tab.uagb-tabs__active': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSMobile,
		},
		'.uagb-tabs__vstyle6-mobile .uagb-tab': borderCSSMobile,
		'.uagb-tabs__vstyle6-mobile .uagb-tabs__body-wrap': borderCSSMobile,
		'.uagb-tabs__vstyle7-mobile .uagb-tab': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSMobile,
		},
		'.uagb-tabs__vstyle7-mobile > .uagb-tabs__body-wrap': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__vstyle8-mobile .uagb-tab': {
			'border-right-width': '0px',
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSMobile,
		},
		'.uagb-tabs__vstyle8-mobile > .uagb-tabs__body-wrap': borderCSSMobile,
		'.uagb-tabs__vstyle9-mobile .uagb-tab': {
			'border-radius': '30px',
			...borderCSSMobile,
		},
		'.uagb-tabs__vstyle9-mobile > .uagb-tabs__body-wrap': borderCSSMobile,
		'.uagb-tabs__vstyle10-mobile': {
			...borderCSSMobile,
		},
		'.uagb-tabs__vstyle10-mobile ul.uagb-tabs__panel .uagb-tab': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__vstyle10-mobile .uagb-tabs__body-wrap': {
			'border-width': '0px',
			'border-style': 'none',
		},
		'.uagb-tabs__vstyle10-mobile ul.uagb-tabs__panel .uagb-tab.uagb-tabs__active': {
			'border-top-width': '0px',
			'border-bottom-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSMobile,
		},
		'.uagb-tabs__stack11-mobile > .uagb-tabs__panel .uagb-tab': borderCSSMobile,
		'.uagb-tabs__stack11-mobile > .uagb-tabs__body-wrap': borderCSSMobile,
		'.uagb-tabs__stack12-mobile .uagb-tab': {
			'border-bottom-width': '0px',
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSMobile,
		},
		'.uagb-tabs__stack12-mobile > .uagb-tabs__body-wrap': borderCSSMobile,
		'.uagb-tabs__stack13-mobile .uagb-tab': {
			'border-radius': '30px',
			...borderCSSMobile,
		},
		'.uagb-tabs__stack13-mobile > .uagb-tabs__body-wrap': borderCSSMobile,
		'.uagb-tabs__stack14-mobile': borderCSSMobile,
		'.uagb-tabs__stack14-mobile .uagb-tab': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-bottom-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'border-bottom': 0,
			'outline': 0,
			'border-radius': 0,
		},
		'.uagb-tabs__stack14-mobile .uagb-tab.uagb-tabs__active': {
			'border-top-width': '0px',
			'border-right-width': '0px',
			'border-left-width': '0px',
			'border-top': 0,
			'border-left': 0,
			'border-right': 0,
			'outline': 0,
			'border-radius': 0,
			...borderCSSMobile,
		},

		' .uagb-tabs__icon svg': {
			'height': generateCSSUnit( iconSizeMobile, 'px' ),
			'width': generateCSSUnit( iconSizeMobile, 'px' ),
		},
		' > .uagb-tabs__panel .uagb-tab p': {
			'font-size': generateCSSUnit( titleFontSizeMobile, titleFontSizeType ),
			'line-height': generateCSSUnit( titleLineHeightMobile, titleLineHeightType ),
			'letter-spacing': generateCSSUnit( titleLetterSpacingMobile, titleLetterSpacingType ),
		},
		' > .uagb-tabs__panel .uagb-tab': {
			'margin-top': generateCSSUnit( tabTitleTopMarginMobile, mobiletabTitleMarginUnit ),
			'margin-left': generateCSSUnit( tabTitleLeftMarginMobile, mobiletabTitleMarginUnit ),
			'margin-right': generateCSSUnit( tabTitleRightMarginMobile, mobiletabTitleMarginUnit ),
			'margin-bottom': generateCSSUnit( tabTitleBottomMarginMobile, mobiletabTitleMarginUnit ),
			...borderCSSMobile,
		},
		' > .uagb-tabs__panel .uagb-tab a': {
			'padding-top': generateCSSUnit( tabTitleTopPaddingMobile, mobiletabTitlePaddingUnit ),
			'padding-bottom': generateCSSUnit( tabTitleBottomPaddingMobile, mobiletabTitlePaddingUnit ),
			'padding-left': generateCSSUnit( tabTitleLeftPaddingMobile, mobiletabTitlePaddingUnit ),
			'padding-right': generateCSSUnit( tabTitleRightPaddingMobile, mobiletabTitlePaddingUnit ),
		},
		' > .uagb-tabs__body-wrap ': {
			'padding-top': generateCSSUnit( tabBodyTopPaddingMobile, mobiletabBodyPaddingUnit ),
			'padding-bottom': generateCSSUnit( tabBodyBottomPaddingMobile, mobiletabBodyPaddingUnit ),
			'padding-left': generateCSSUnit( tabBodyLeftPaddingMobile, mobiletabBodyPaddingUnit ),
			'padding-right': generateCSSUnit( tabBodyRightPaddingMobile, mobiletabBodyPaddingUnit ),
			'margin-top': generateCSSUnit( tabBodyTopMarginMobile, mobiletabBodyMarginUnit ),
			'margin-left': generateCSSUnit( tabBodyLeftMarginMobile, mobiletabBodyMarginUnit ),
			'margin-right': generateCSSUnit( tabBodyRightMarginMobile, mobiletabBodyMarginUnit ),
			'margin-bottom': generateCSSUnit( tabBodyBottomMarginMobile, mobiletabBodyMarginUnit ),
			...borderCSSMobile,
		},
		' .uagb-tabs__icon-position-left  .uagb-tabs__icon ': {
			'margin-right': generateCSSUnit( iconSpacingMobile, 'px' ),
		},
		' .uagb-tabs__icon-position-right  .uagb-tabs__icon ': {
			'margin-left': generateCSSUnit( iconSpacingMobile, 'px' ),
		},
		' .uagb-tabs__icon-position-top  .uagb-tabs__icon ': {
			'margin-bottom': generateCSSUnit( iconSpacingMobile, 'px' ),
		},
		' .uagb-tabs__icon-position-bottom  .uagb-tabs__icon ': {
			'margin-top': generateCSSUnit( iconSpacingMobile, 'px' ),
		},
	};

	const base_selector = `.editor-styles-wrapper .uagb-block-${ clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, base_selector );

	stylingCss += generateCSS( tabletSelectors, `${ base_selector }`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ base_selector }`, true, 'mobile' );

	return stylingCss;
}

export default styling;
