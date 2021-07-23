/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "@Controls/generateCSS";
import generateCSSUnit from "@Controls/generateCSSUnit";

function styling(props) {
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
		//Border
		borderWidth,
		borderColor,
		iconColor,
		iconSize,
		tabBodyLeftMargin,
		tabBodyRightMargin,
		tabBodyTopMargin,
		tabBodyBottomMargin,
		tabBodyVertPadding,
		tabBodyHrPadding,
		iconSpacing,
		tabsStyleD,
		tabsStyleM,
		tabsStyleT,
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
	} = props.attributes;

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};
	selectors = {
		" > .uagb-tabs__panel .uagb-tab": {
			background: headerBgColor,
			"text-align": titleAlign,
			"padding-top": generateCSSUnit(
				tabTitleTopPadding,
				tabTitlePaddingUnit
			),
			"padding-bottom": generateCSSUnit(
				tabTitleBottomPadding,
				tabTitlePaddingUnit
			),
			"padding-left": generateCSSUnit(
				tabTitleLeftPadding,
				tabTitlePaddingUnit
			),
			"padding-right": generateCSSUnit(
				tabTitleRightPadding,
				tabTitlePaddingUnit
			),
			"margin-top": generateCSSUnit(
				tabTitleTopMargin,
				tabTitleMarginUnit
			),
			"margin-left": generateCSSUnit(
				tabTitleLeftMargin,
				tabTitleMarginUnit
			),
			"margin-right": generateCSSUnit(
				tabTitleRightMargin,
				tabTitleMarginUnit
			),
			"margin-bottom": generateCSSUnit(
				tabTitleBottomMargin,
				tabTitleMarginUnit
			),
		},
		" > .uagb-tabs__panel .uagb-tab a > p": {
			color: headerTextColor,
			"font-family": titleFontFamily,
			"font-weight": titleFontWeight,
			"font-size": generateCSSUnit(titleFontSize, titleFontSizeType),
			"line-height": generateCSSUnit(
				titleLineHeight,
				titleLineHeightType
			),
		},
		" > .uagb-tabs__panel .uagb-tab.uagb-tabs__active ": {
			background: activeTabBgColor,
		},
		" > .uagb-tabs__panel .uagb-tab.uagb-tabs__active p": {
			color: activeTabTextColor,
		},
		" > .uagb-tabs__panel .uagb-tab.uagb-tabs__active .uagb-tabs__icon svg": {
			fill: activeiconColor,
		},
		" > .uagb-tabs__body-wrap ": {
			background: bodyBgColor,
			"padding-top": generateCSSUnit(
				tabBodyTopPadding,
				tabBodyPaddingUnit
			),
			"padding-bottom": generateCSSUnit(
				tabBodyBottomPadding,
				tabBodyPaddingUnit
			),
			"padding-left": generateCSSUnit(
				tabBodyLeftPadding,
				tabBodyPaddingUnit
			),
			"padding-right": generateCSSUnit(
				tabBodyRightPadding,
				tabBodyPaddingUnit
			),
			"margin-top": generateCSSUnit(tabBodyTopMargin, tabBodyMarginUnit),
			"margin-left": generateCSSUnit(
				tabBodyLeftMargin,
				tabBodyMarginUnit
			),
			"margin-right": generateCSSUnit(
				tabBodyRightMargin,
				tabBodyMarginUnit
			),
			"margin-bottom": generateCSSUnit(
				tabBodyBottomMargin,
				tabBodyMarginUnit
			),
		},
		" > .uagb-tabs__body-wrap > .block-editor-inner-blocks p": {
			color: bodyTextColor,
		},
		" .uagb-tabs__icon svg": {
			height: generateCSSUnit(iconSize, "px"),
			width: generateCSSUnit(iconSize, "px"),
			fill: iconColor,
		},
		".uagb-tabs__wrap > .uagb-tabs__panel .uagb-tab": {
			"border-width": generateCSSUnit(borderWidth, "px"),
			"border-color": borderColor,
		},
		".uagb-tabs__wrap > .uagb-tabs__body-wrap": {
			"border-width": generateCSSUnit(borderWidth, "px"),
			"border-color": borderColor,
		},
		" .uagb-tabs__icon-position-left  .uagb-tabs__icon ": {
			"margin-right": generateCSSUnit(iconSpacing, "px"),
		},
		" .uagb-tabs__icon-position-right  .uagb-tabs__icon ": {
			"margin-left": generateCSSUnit(iconSpacing, "px"),
		},
		" .uagb-tabs__icon-position-top  .uagb-tabs__icon ": {
			"margin-bottom": generateCSSUnit(iconSpacing, "px"),
		},
		" .uagb-tabs__icon-position-bottom  .uagb-tabs__icon ": {
			"margin-top": generateCSSUnit(iconSpacing, "px"),
		},
	};
	tabletSelectors = {
		" > .uagb-tabs__panel .uagb-tab p": {
			"font-size": generateCSSUnit(
				titleFontSizeTablet,
				titleFontSizeType
			),
			"line-height": generateCSSUnit(
				titleLineHeightTablet,
				titleLineHeightType
			),
		},
		" > .uagb-tabs__panel .uagb-tab": {
			"padding-top": generateCSSUnit(
				tabTitleTopPaddingTablet,
				tablettabTitlePaddingUnit
			),
			"padding-bottom": generateCSSUnit(
				tabTitleBottomPaddingTablet,
				tablettabTitlePaddingUnit
			),
			"padding-left": generateCSSUnit(
				tabTitleLeftPaddingTablet,
				tablettabTitlePaddingUnit
			),
			"padding-right": generateCSSUnit(
				tabTitleRightPaddingTablet,
				tablettabTitlePaddingUnit
			),
			"margin-top": generateCSSUnit(
				tabTitleTopMarginTablet,
				tablettabTitleMarginUnit
			),
			"margin-left": generateCSSUnit(
				tabTitleLeftMarginTablet,
				tablettabTitleMarginUnit
			),
			"margin-right": generateCSSUnit(
				tabTitleRightMarginTablet,
				tablettabTitleMarginUnit
			),
			"margin-bottom": generateCSSUnit(
				tabTitleBottomMarginTablet,
				tablettabTitleMarginUnit
			),
		},
		" > .uagb-tabs__body-wrap ": {
			"padding-top": generateCSSUnit(
				tabBodyTopPaddingTablet,
				tablettabBodyPaddingUnit
			),
			"padding-bottom": generateCSSUnit(
				tabBodyBottomPaddingTablet,
				tablettabBodyPaddingUnit
			),
			"padding-left": generateCSSUnit(
				tabBodyLeftPaddingTablet,
				tablettabBodyPaddingUnit
			),
			"padding-right": generateCSSUnit(
				tabBodyRightPaddingTablet,
				tablettabBodyPaddingUnit
			),
			"margin-top": generateCSSUnit(
				tabBodyTopMarginTablet,
				tablettabBodyMarginUnit
			),
			"margin-left": generateCSSUnit(
				tabBodyLeftMarginTablet,
				tablettabBodyMarginUnit
			),
			"margin-right": generateCSSUnit(
				tabBodyRightMarginTablet,
				tablettabBodyMarginUnit
			),
			"margin-bottom": generateCSSUnit(
				tabBodyBottomMarginTablet,
				tablettabBodyMarginUnit
			),
		},
	};
	mobileSelectors = {
		" > .uagb-tabs__panel .uagb-tab p": {
			"font-size": generateCSSUnit(
				titleFontSizeMobile,
				titleFontSizeType
			),
			"line-height": generateCSSUnit(
				titleLineHeightMobile,
				titleLineHeightType
			),
		},
		" > .uagb-tabs__panel .uagb-tab": {
			"padding-top": generateCSSUnit(
				tabTitleTopPaddingMobile,
				mobiletabTitlePaddingUnit
			),
			"padding-bottom": generateCSSUnit(
				tabTitleBottomPaddingMobile,
				mobiletabTitlePaddingUnit
			),
			"padding-left": generateCSSUnit(
				tabTitleLeftPaddingMobile,
				mobiletabTitlePaddingUnit
			),
			"padding-right": generateCSSUnit(
				tabTitleRightPaddingMobile,
				mobiletabTitlePaddingUnit
			),
			"margin-top": generateCSSUnit(
				tabTitleTopMarginMobile,
				mobiletabTitleMarginUnit
			),
			"margin-left": generateCSSUnit(
				tabTitleLeftMarginMobile,
				mobiletabTitleMarginUnit
			),
			"margin-right": generateCSSUnit(
				tabTitleRightMarginMobile,
				mobiletabTitleMarginUnit
			),
			"margin-bottom": generateCSSUnit(
				tabTitleBottomMarginMobile,
				mobiletabTitleMarginUnit
			),
		},
		" > .uagb-tabs__body-wrap ": {
			"padding-top": generateCSSUnit(
				tabBodyTopPaddingMobile,
				mobiletabBodyPaddingUnit
			),
			"padding-bottom": generateCSSUnit(
				tabBodyBottomPaddingMobile,
				mobiletabBodyPaddingUnit
			),
			"padding-left": generateCSSUnit(
				tabBodyLeftPaddingMobile,
				mobiletabBodyPaddingUnit
			),
			"padding-right": generateCSSUnit(
				tabBodyRightPaddingMobile,
				mobiletabBodyPaddingUnit
			),
			"margin-top": generateCSSUnit(
				tabBodyTopMarginMobile,
				mobiletabBodyMarginUnit
			),
			"margin-left": generateCSSUnit(
				tabBodyLeftMarginMobile,
				mobiletabBodyMarginUnit
			),
			"margin-right": generateCSSUnit(
				tabBodyRightMarginMobile,
				mobiletabBodyMarginUnit
			),
			"margin-bottom": generateCSSUnit(
				tabBodyBottomMarginMobile,
				mobiletabBodyMarginUnit
			),
		},
	};

	if (tabsStyleD === "hstyle5") {
		selectors[".uagb-tabs__wrap.uagb-tabs__hstyle5-desktop "] = {
			background: bodyBgColor,
			"border-color": borderColor,
			"border-width": generateCSSUnit(borderWidth, "px"),
		};
	}
	if (tabsStyleD === "vstyle10") {
		selectors[".uagb-tabs__wrap.uagb-tabs__vstyle10-desktop "] = {
			background: bodyBgColor,
			"border-color": borderColor,
			"border-width": generateCSSUnit(borderWidth, "px"),
		};
	}
	if (tabsStyleT === "hstyle5") {
		tabletSelectors[".uagb-tabs__wrap.uagb-tabs__hstyle5-tablet"] = {
			background: bodyBgColor,
			"border-color": borderColor,
			"border-width": generateCSSUnit(borderWidth, "px"),
		};
	}
	if (tabsStyleT === "vstyle10") {
		tabletSelectors[".uagb-tabs__wrap.uagb-tabs__vstyle10-tablet"] = {
			background: bodyBgColor,
			"border-color": borderColor,
			"border-width": generateCSSUnit(borderWidth, "px"),
		};
	}
	if (tabsStyleM === "hstyle5") {
		mobileSelectors[".uagb-tabs__wrap.uagb-tabs__hstyle5-mobile "] = {
			background: bodyBgColor,
			"border-color": borderColor,
			"border-width": generateCSSUnit(borderWidth, "px"),
		};
	}
	if (tabsStyleM === "vstyle10") {
		mobileSelectors[".uagb-tabs__wrap.uagb-tabs__vstyle10-mobile "] = {
			background: bodyBgColor,
			"border-color": borderColor,
			"border-width": generateCSSUnit(borderWidth, "px"),
		};
	}
	if (tabsStyleM === "stack4") {
		mobileSelectors[".uagb-tabs__wrap.uagb-tabs__stack4-mobile"] = {
			background: bodyBgColor,
			"border-color": borderColor,
			"border-width": generateCSSUnit(borderWidth, "px"),
		};
	}
	const base_selector = `.block-editor-page #wpwrap .uagb-block-${props.clientId.substr(
		0,
		8
	)}`;

	let stylingCss = generateCSS(selectors, base_selector);

	stylingCss += generateCSS(
		tabletSelectors,
		`${base_selector}.uagb-editor-preview-mode-tablet`,
		true,
		"tablet"
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${base_selector}.uagb-editor-preview-mode-mobile`,
		true,
		"mobile"
	);

	return stylingCss;
}

export default styling;
