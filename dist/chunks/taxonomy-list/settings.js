(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/taxonomy-list/settings"],{

/***/ "./src/blocks/taxonomy-list/presets.js":
/*!*********************************************!*\
  !*** ./src/blocks/taxonomy-list/presets.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/taxonomy-list/attributes.js");



const boxShadowPresets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'boxShadowHOffset',
    value: 3
  }, {
    label: 'boxShadowVOffset',
    value: 8
  }, {
    label: 'boxShadowBlur',
    value: 12
  }, {
    label: 'boxShadowSpread',
    value: 15
  }, {
    label: 'boxShadowColor',
    value: 'rgb(0 0 0 / 15%)'
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_451)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_451" x="55" y="75" width="218" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="2"/> <feGaussianBlur stdDeviation="2"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_451"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_451" result="shape"/> </filter> </defs> </svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'boxShadowHOffset',
    value: 0
  }, {
    label: 'boxShadowVOffset',
    value: 18
  }, {
    label: 'boxShadowBlur',
    value: 40
  }, {
    label: 'boxShadowSpread',
    value: -10
  }, {
    label: 'boxShadowColor',
    value: 'rgb(0 0 0 / 20%)'
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_459)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_459" x="48" y="71" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_459"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_459" result="shape"/> </filter> </defs> </svg>'
}, {
  value: 'preset-3',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 3', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'boxShadowHOffset',
    value: 0
  }, {
    label: 'boxShadowVOffset',
    value: 4
  }, {
    label: 'boxShadowBlur',
    value: 12
  }, {
    label: 'boxShadowSpread',
    value: 0
  }, {
    label: 'boxShadowColor',
    value: 'rgb(0 0 0 / 10%)'
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_463)"> <path d="M268 190.388C268 193.493 265.493 196 262.4 196H63.5995C60.5034 196 58 193.486 58 190.388V82.615C58 79.5136 60.5067 77 63.5995 77H262.4C265.497 77 267.997 79.5136 267.997 82.615L268 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_463" x="48" y="67" width="230" height="139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_463"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_463" result="shape"/> </filter> </defs> </svg>'
}, {
  value: 'preset-4',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 4', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'boxShadowHOffset',
    value: 0
  }, {
    label: 'boxShadowVOffset',
    value: 2
  }, {
    label: 'boxShadowBlur',
    value: 5
  }, {
    label: 'boxShadowSpread',
    value: -1
  }, {
    label: 'boxShadowColor',
    value: 'rgb(0 0 0 / 15%)'
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_467)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_467" x="53" y="71" width="222" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset/> <feGaussianBlur stdDeviation="3"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_467"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_467" result="shape"/> </filter> </defs> </svg>'
}, {
  value: 'preset-5',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 5', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'boxShadowHOffset',
    value: 0
  }, {
    label: 'boxShadowVOffset',
    value: 50
  }, {
    label: 'boxShadowBlur',
    value: 50
  }, {
    label: 'boxShadowSpread',
    value: -30
  }, {
    label: 'boxShadowColor',
    value: 'rgb(0 0 0 / 15%)'
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_471)"> <ellipse cx="169" cy="174.5" rx="100" ry="16.5" fill="#FAFAFA"/> </g> <path d="M275 189.388C275 192.493 272.493 195 269.4 195H70.5995C67.5034 195 65 192.486 65 189.388V81.615C65 78.5136 67.5067 76 70.5995 76H269.4C272.497 76 274.997 78.5136 274.997 81.615L275 189.388Z" fill="#FBFBFB"/> <defs> <filter id="filter0_d_103_471" x="60" y="154" width="220" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dx="1" dy="6"/> <feGaussianBlur stdDeviation="5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_471"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_471" result="shape"/> </filter> </defs> </svg>'
}, {
  value: 'preset-6',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 6', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'boxShadowHOffset',
    value: 0
  }, {
    label: 'boxShadowVOffset',
    value: 20
  }, {
    label: 'boxShadowBlur',
    value: 30
  }, {
    label: 'boxShadowSpread',
    value: 0
  }, {
    label: 'boxShadowColor',
    value: 'rgb(0 0 0 / 15%)'
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M28 31.7987C28 29.1485 30.1527 27 32.8081 27H295.192C297.847 27 300 29.1485 300 31.7987V245H28V31.7987Z" fill="white"/> <g filter="url(#filter0_d_103_476)"> <path d="M269 190.388C269 193.493 266.493 196 263.4 196H64.5995C61.5034 196 59 193.486 59 190.388V82.615C59 79.5136 61.5067 77 64.5995 77H263.4C266.497 77 268.997 79.5136 268.997 82.615L269 190.388Z" fill="#FBFBFB"/> </g> <defs> <filter id="filter0_d_103_476" x="52" y="74" width="224" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="4"/> <feGaussianBlur stdDeviation="3.5"/> <feComposite in2="hardAlpha" operator="out"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_476"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_476" result="shape"/> </filter> </defs> </svg>'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(`uag_taxonomy_presets`, boxShadowPresets));

/***/ }),

/***/ "./src/blocks/taxonomy-list/settings.js":
/*!**********************************************!*\
  !*** ./src/blocks/taxonomy-list/settings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_box_shadow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/box-shadow */ "./src/components/box-shadow/index.js");
/* harmony import */ var _Components_responsive_border__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/responsive-border */ "./src/components/responsive-border/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_select_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/select-control */ "./src/components/select-control/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./presets */ "./src/blocks/taxonomy-list/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_22__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

























const Settings = props => {
  props = props.parentProps; // Caching all Props.

  const {
    attributes,
    setAttributes,
    taxonomyList,
    termsList,
    deviceType
  } = props; // Caching all attributes.

  const {
    block_id,
    postType,
    taxonomyType,
    layout,
    columns,
    tcolumns,
    mcolumns,
    bgColor,
    titleColor,
    countColor,
    rowGap,
    rowGapTablet,
    rowGapMobile,
    columnGap,
    columnGapTablet,
    columnGapMobile,
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
    contentPaddingLink,
    titleBottomSpace,
    titleBottomSpaceTablet,
    titleBottomSpaceMobile,
    alignment,
    listStyle,
    listTextColor,
    hoverlistTextColor,
    listBottomMargin,
    listStyleColor,
    hoverlistStyleColor,
    noTaxDisplaytext,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    showCount,
    titleFontSize,
    titleFontSizeType,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontFamily,
    titleFontWeight,
    titleFontStyle,
    titleLineHeightType,
    titleLineHeight,
    titleLineHeightTablet,
    titleLineHeightMobile,
    titleLoadGoogleFonts,
    countFontSize,
    countFontSizeType,
    countFontSizeMobile,
    countFontSizeTablet,
    countFontFamily,
    countFontWeight,
    countFontStyle,
    countLineHeightType,
    countLineHeight,
    countLineHeightTablet,
    countLineHeightMobile,
    countLoadGoogleFonts,
    listFontSize,
    listFontSizeType,
    listFontSizeMobile,
    listFontSizeTablet,
    listFontFamily,
    listFontWeight,
    listFontStyle,
    listLineHeightType,
    listLineHeight,
    listLineHeightTablet,
    listLineHeightMobile,
    listLoadGoogleFonts,
    showEmptyTaxonomy,
    listDisplayStyle,
    showhierarchy,
    titleTag,
    titleTransform,
    countTransform,
    listTransform,
    titleDecoration,
    countDecoration,
    listDecoration,
    // letter spacing
    titleLetterSpacing,
    titleLetterSpacingTablet,
    titleLetterSpacingMobile,
    titleLetterSpacingType,
    countLetterSpacing,
    countLetterSpacingTablet,
    countLetterSpacingMobile,
    countLetterSpacingType,
    listLetterSpacing,
    listLetterSpacingTablet,
    listLetterSpacingMobile,
    listLetterSpacingType
  } = attributes;
  const taxonomy_list_setting = showEmptyTaxonomy ? taxonomyList : termsList;
  const taxonomyListOptions = [{
    value: '',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Taxonomy', 'ultimate-addons-for-gutenberg')
  }];

  if ('' !== taxonomy_list_setting && undefined !== taxonomy_list_setting) {
    Object.keys(taxonomy_list_setting).map(item => {
      return taxonomyListOptions.push({
        value: taxonomyList[item].name,
        label: taxonomyList[item].label
      });
    });
  }

  let loadTitleGoogleFonts;
  let loadCountGoogleFonts;
  let loadListGoogleFonts;

  if (titleLoadGoogleFonts === true) {
    const titleconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: titleconfig
    });
  }

  if (countLoadGoogleFonts === true) {
    const countconfig = {
      google: {
        families: [countFontFamily + (countFontWeight ? ':' + countFontWeight : '')]
      }
    };
    loadCountGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: countconfig
    });
  }

  if (listLoadGoogleFonts === true) {
    const listconfig = {
      google: {
        families: [listFontFamily + (listFontWeight ? ':' + listFontWeight : '')]
      }
    };
    loadListGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: listconfig
    });
  } // All Controls.


  const colorControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
    colorValue: listTextColor ? listTextColor : '',
    data: {
      value: listTextColor,
      label: 'listTextColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), 'none' !== listStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bullet/Numbers Color', 'ultimate-addons-for-gutenberg'),
    colorValue: listStyleColor ? listStyleColor : '',
    data: {
      value: listStyleColor,
      label: 'listStyleColor'
    },
    setAttributes: setAttributes
  })));
  const colorControlHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
    colorValue: hoverlistTextColor ? hoverlistTextColor : '',
    data: {
      value: hoverlistTextColor,
      label: 'hoverlistTextColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), 'none' !== listStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bullet/Numbers Color', 'ultimate-addons-for-gutenberg'),
    colorValue: hoverlistStyleColor ? hoverlistStyleColor : '',
    data: {
      value: hoverlistStyleColor,
      label: 'hoverlistStyleColor'
    },
    setAttributes: setAttributes
  })));

  const onSelectPostType = value => {
    const formData = new window.FormData();
    formData.append('action', 'uagb_get_taxonomy');
    formData.append('nonce', uagb_blocks_info.uagb_ajax_nonce);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_22___default()({
      url: uagb_blocks_info.ajax_url,
      method: 'POST',
      body: formData
    }).then(data => {
      setAttributes({
        listInJson: data
      });
      setAttributes({
        postType: value
      });
      setAttributes({
        categories: ''
      });
      setAttributes({
        taxonomyType: ''
      });
    });
  };

  const onSelectTaxonomyType = value => {
    setAttributes({
      taxonomyType: value
    });
    setAttributes({
      categories: ''
    });
  };

  const generalPanel = () => {
    let tempTitleTag = titleTag;

    if ('' === titleTag) {
      tempTitleTag = 'h4';

      if ('list' === layout) {
        tempTitleTag = 'div';
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: tempTitleTag,
        label: 'titleTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'div',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Div', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      data: {
        value: layout,
        label: 'layout'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'grid',
        label: 'Grid'
      }, {
        value: 'list',
        label: 'List'
      }],
      showIcons: false
    }), 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: columns,
          label: 'columns',
          min: 1,
          max: 4
        },
        tablet: {
          value: tcolumns,
          label: 'tcolumns',
          min: 1,
          max: 3
        },
        mobile: {
          value: mcolumns,
          label: 'mcolumns',
          min: 1,
          max: 2
        }
      },
      min: 1,
      max: 4,
      displayUnit: false,
      setAttributes: setAttributes
    }), 'list' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Style', 'ultimate-addons-for-gutenberg'),
      data: {
        value: listDisplayStyle,
        label: 'listDisplayStyle'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'list',
        label: 'List'
      }, {
        value: 'dropdown',
        label: 'Dropdown'
      }],
      showIcons: false
    })), 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: alignment,
        label: 'alignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    })), 'list' === layout && 'dropdown' !== listDisplayStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('List Style', 'ultimate-addons-for-gutenberg'),
      data: {
        value: listStyle,
        label: 'listStyle'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'disc',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"])('fa fa-list-ul')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bullet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'decimal',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"])('fa fa-list-ol')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Numbers', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'none',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"])('fa fa-bars')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    })));
  };

  const postQueryPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Query', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_15__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Post Type', 'ultimate-addons-for-gutenberg'),
      data: {
        value: postType
      },
      onChange: onSelectPostType,
      options: uagb_blocks_info.post_types
    }), '' !== taxonomyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_15__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Taxonomy', 'ultimate-addons-for-gutenberg'),
      data: {
        value: taxonomyType
      },
      onChange: onSelectTaxonomyType,
      options: taxonomyListOptions
    }), '' === taxonomyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["TextControl"], {
      autoComplete: "off",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Message', 'ultimate-addons-for-gutenberg'),
      value: noTaxDisplaytext,
      onChange: value => setAttributes({
        noTaxDisplaytext: value
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('If taxonomy Not Found', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Empty Taxonomy', 'ultimate-addons-for-gutenberg'),
      checked: showEmptyTaxonomy,
      onChange: () => setAttributes({
        showEmptyTaxonomy: !showEmptyTaxonomy
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Posts Count', 'ultimate-addons-for-gutenberg'),
      checked: showCount,
      onChange: () => setAttributes({
        showCount: !showCount
      })
    }), 'list' === layout && 'list' === listDisplayStyle && 'post_tag' !== taxonomyType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Hierarchy', 'ultimate-addons-for-gutenberg'),
      checked: showhierarchy,
      onChange: () => setAttributes({
        showhierarchy: !showhierarchy
      })
    }));
  };

  const titleColorPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: titleLoadGoogleFonts,
        label: 'titleLoadGoogleFonts'
      },
      fontFamily: {
        value: titleFontFamily,
        label: 'titleFontFamily'
      },
      fontWeight: {
        value: titleFontWeight,
        label: 'titleFontWeight'
      },
      fontStyle: {
        value: titleFontStyle,
        label: 'titleFontStyle'
      },
      fontSizeType: {
        value: titleFontSizeType,
        label: 'titleFontSizeType'
      },
      fontSize: {
        value: titleFontSize,
        label: 'titleFontSize'
      },
      fontSizeMobile: {
        value: titleFontSizeMobile,
        label: 'titleFontSizeMobile'
      },
      fontSizeTablet: {
        value: titleFontSizeTablet,
        label: 'titleFontSizeTablet'
      },
      lineHeightType: {
        value: titleLineHeightType,
        label: 'titleLineHeightType'
      },
      lineHeight: {
        value: titleLineHeight,
        label: 'titleLineHeight'
      },
      lineHeightMobile: {
        value: titleLineHeightMobile,
        label: 'titleLineHeightMobile'
      },
      lineHeightTablet: {
        value: titleLineHeightTablet,
        label: 'titleLineHeightTablet'
      },
      transform: {
        value: titleTransform,
        label: 'titleTransform'
      },
      decoration: {
        value: titleDecoration,
        label: 'titleDecoration'
      },
      letterSpacing: {
        value: titleLetterSpacing,
        label: 'titleLetterSpacing'
      },
      letterSpacingTablet: {
        value: titleLetterSpacingTablet,
        label: 'titleLetterSpacingTablet'
      },
      letterSpacingMobile: {
        value: titleLetterSpacingMobile,
        label: 'titleLetterSpacingMobile'
      },
      letterSpacingType: {
        value: titleLetterSpacingType,
        label: 'titleLetterSpacingType'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: titleColor ? titleColor : '',
      data: {
        value: titleColor,
        label: 'titleColor'
      },
      setAttributes: setAttributes
    }), showCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: titleBottomSpace,
          label: 'titleBottomSpace'
        },
        tablet: {
          value: titleBottomSpaceTablet,
          label: 'titleBottomSpaceTablet'
        },
        mobile: {
          value: titleBottomSpaceMobile,
          label: 'titleBottomSpaceMobile'
        }
      },
      min: 0,
      max: 50,
      displayUnit: false,
      setAttributes: setAttributes
    }));
  };

  const countColorPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Count', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: countColor ? countColor : '',
      data: {
        value: countColor,
        label: 'countColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: countLoadGoogleFonts,
        label: 'countLoadGoogleFonts'
      },
      fontFamily: {
        value: countFontFamily,
        label: 'countFontFamily'
      },
      fontWeight: {
        value: countFontWeight,
        label: 'countFontWeight'
      },
      fontStyle: {
        value: countFontStyle,
        label: 'countFontStyle'
      },
      fontSizeType: {
        value: countFontSizeType,
        label: 'countFontSizeType'
      },
      fontSize: {
        value: countFontSize,
        label: 'countFontSize'
      },
      fontSizeMobile: {
        value: countFontSizeMobile,
        label: 'countFontSizeMobile'
      },
      fontSizeTablet: {
        value: countFontSizeTablet,
        label: 'countFontSizeTablet'
      },
      lineHeightType: {
        value: countLineHeightType,
        label: 'countLineHeightType'
      },
      lineHeight: {
        value: countLineHeight,
        label: 'countLineHeight'
      },
      lineHeightMobile: {
        value: countLineHeightMobile,
        label: 'countLineHeightMobile'
      },
      lineHeightTablet: {
        value: countLineHeightTablet,
        label: 'countLineHeightTablet'
      },
      transform: {
        value: countTransform,
        label: 'countTransform'
      },
      decoration: {
        value: countDecoration,
        label: 'countDecoration'
      },
      letterSpacing: {
        value: countLetterSpacing,
        label: 'countLetterSpacing'
      },
      letterSpacingTablet: {
        value: countLetterSpacingTablet,
        label: 'countLetterSpacingTablet'
      },
      letterSpacingMobile: {
        value: countLetterSpacingMobile,
        label: 'countLetterSpacingMobile'
      },
      letterSpacingType: {
        value: countLetterSpacingType,
        label: 'countLetterSpacingType'
      }
    }));
  };

  const bgColorPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgColor ? bgColor : '',
      data: {
        value: bgColor,
        label: 'bgColor'
      },
      setAttributes: setAttributes
    }));
  };

  const spacingPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Row Gap', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: rowGap,
          label: 'rowGap'
        },
        tablet: {
          value: rowGapTablet,
          label: 'rowGapTablet'
        },
        mobile: {
          value: rowGapMobile,
          label: 'rowGapMobile'
        }
      },
      min: 1,
      max: 50,
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Column Gap', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: columnGap,
          label: 'columnGap'
        },
        tablet: {
          value: columnGapTablet,
          label: 'columnGapTablet'
        },
        mobile: {
          value: columnGapMobile,
          label: 'columnGapMobile'
        }
      },
      min: 1,
      max: 50,
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: contentTopPadding,
        label: 'contentTopPadding'
      },
      valueRight: {
        value: contentRightPadding,
        label: 'contentRightPadding'
      },
      valueBottom: {
        value: contentBottomPadding,
        label: 'contentBottomPadding'
      },
      valueLeft: {
        value: contentLeftPadding,
        label: 'contentLeftPadding'
      },
      valueTopTablet: {
        value: contentTopPaddingTablet,
        label: 'contentTopPaddingTablet'
      },
      valueRightTablet: {
        value: contentRightPaddingTablet,
        label: 'contentRightPaddingTablet'
      },
      valueBottomTablet: {
        value: contentBottomPaddingTablet,
        label: 'contentBottomPaddingTablet'
      },
      valueLeftTablet: {
        value: contentLeftPaddingTablet,
        label: 'contentLeftPaddingTablet'
      },
      valueTopMobile: {
        value: contentTopPaddingMobile,
        label: 'contentTopPaddingMobile'
      },
      valueRightMobile: {
        value: contentRightPaddingMobile,
        label: 'contentRightPaddingMobile'
      },
      valueBottomMobile: {
        value: contentBottomPaddingMobile,
        label: 'contentBottomPaddingMobile'
      },
      valueLeftMobile: {
        value: contentLeftPaddingMobile,
        label: 'contentLeftPaddingMobile'
      },
      unit: {
        value: contentPaddingUnit,
        label: 'contentPaddingUnit'
      },
      mUnit: {
        value: mobileContentPaddingUnit,
        label: 'mobileContentPaddingUnit'
      },
      tUnit: {
        value: tabletContentPaddingUnit,
        label: 'tabletContentPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: contentPaddingLink,
        label: 'contentPaddingLink'
      }
    }))), 'list' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Margin', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: listBottomMargin,
      data: {
        value: listBottomMargin,
        label: 'listBottomMargin'
      },
      min: 0,
      max: 100,
      displayUnit: false
    }));
  };

  const borderPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setAttributes: setAttributes,
      prefix: 'overall',
      attributes: attributes,
      deviceType: deviceType,
      disableBottomSeparator: true,
      disabledBorderTitle: true
    }));
  };

  const listPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('List', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: listLoadGoogleFonts,
        label: 'listLoadGoogleFonts'
      },
      fontFamily: {
        value: listFontFamily,
        label: 'listFontFamily'
      },
      fontWeight: {
        value: listFontWeight,
        label: 'listFontWeight'
      },
      fontStyle: {
        value: listFontStyle,
        label: 'listFontStyle'
      },
      fontSizeType: {
        value: listFontSizeType,
        label: 'listFontSizeType'
      },
      fontSize: {
        value: listFontSize,
        label: 'listFontSize'
      },
      fontSizeMobile: {
        value: listFontSizeMobile,
        label: 'listFontSizeMobile'
      },
      fontSizeTablet: {
        value: listFontSizeTablet,
        label: 'listFontSizeTablet'
      },
      lineHeightType: {
        value: listLineHeightType,
        label: 'listLineHeightType'
      },
      lineHeight: {
        value: listLineHeight,
        label: 'listLineHeight'
      },
      lineHeightMobile: {
        value: listLineHeightMobile,
        label: 'listLineHeightMobile'
      },
      lineHeightTablet: {
        value: listLineHeightTablet,
        label: 'listLineHeightTablet'
      },
      transform: {
        value: listTransform,
        label: 'listTransform'
      },
      decoration: {
        value: listDecoration,
        label: 'listDecoration'
      },
      letterSpacing: {
        value: listLetterSpacing,
        label: 'listLetterSpacing'
      },
      letterSpacingTablet: {
        value: listLetterSpacingTablet,
        label: 'listLetterSpacingTablet'
      },
      letterSpacingMobile: {
        value: listLetterSpacingMobile,
        label: 'listLetterSpacingMobile'
      },
      letterSpacingType: {
        value: listLetterSpacingType,
        label: 'listLetterSpacingType'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_16__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: colorControl,
      hover: colorControlHover,
      disableBottomSeparator: true
    }));
  };

  const separatorPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Separator', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setAttributes: setAttributes,
      prefix: 'separator',
      attributes: attributes,
      deviceType: deviceType,
      disableBottomSeparator: true,
      disabledBorderTitle: true
    }));
  };

  const boxShadowPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Box Shadow', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_21__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_20__["default"],
      presetInputType: "radioImage"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_box_shadow__WEBPACK_IMPORTED_MODULE_6__["default"], {
      blockId: block_id,
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Box Shadow', 'ultimate-addons-for-gutenberg'),
      boxShadowColor: {
        value: boxShadowColor,
        label: 'boxShadowColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      boxShadowHOffset: {
        value: boxShadowHOffset,
        label: 'boxShadowHOffset',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
      },
      boxShadowVOffset: {
        value: boxShadowVOffset,
        label: 'boxShadowVOffset',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
      },
      boxShadowBlur: {
        value: boxShadowBlur,
        label: 'boxShadowBlur',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Blur', 'ultimate-addons-for-gutenberg')
      },
      boxShadowSpread: {
        value: boxShadowSpread,
        label: 'boxShadowSpread',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spread', 'ultimate-addons-for-gutenberg')
      },
      boxShadowPosition: {
        value: boxShadowPosition,
        label: 'boxShadowPosition',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Position', 'ultimate-addons-for-gutenberg')
      }
    }));
  };

  const inspectorControlsSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].general, postQueryPanel(), generalPanel()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].style, 'grid' === layout && 'dropdown' !== listDisplayStyle && titleColorPanel(), 'grid' === layout && 'dropdown' !== listDisplayStyle && showCount && countColorPanel(), 'grid' === layout && 'dropdown' !== listDisplayStyle && bgColorPanel(), 'grid' === layout && 'dropdown' !== listDisplayStyle && boxShadowPanel(), 'grid' === layout && 'dropdown' !== listDisplayStyle && borderPanel(), 'list' === layout && 'dropdown' !== listDisplayStyle && listPanel(), 'list' === layout && 'dropdown' !== listDisplayStyle && separatorPanel(), 'dropdown' !== listDisplayStyle && spacingPanel(), 'list' === layout && 'dropdown' === listDisplayStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-settings-notice"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('There is no style available for the currently selected layout.', 'ultimate-addons-for-gutenberg'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].advance, {
    parentProps: props
  }))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, inspectorControlsSettings, loadTitleGoogleFonts, loadCountGoogleFonts, loadListGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/box-shadow/index.js":
/*!********************************************!*\
  !*** ./src/components/box-shadow/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _color_control_advanced_pop_color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control/advanced-pop-color-control */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _multi_buttons_control_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../multi-buttons-control/index */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Controls_getUAGEditorStateLocalStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Controls/getUAGEditorStateLocalStorage */ "./blocks-config/uagb-controls/getUAGEditorStateLocalStorage.js");
/**
 * Box-Shadow reusable component.
 *
 */










const BoxShadowControl = props => {
  const [showAdvancedControls, toggleAdvancedControls] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useLayoutEffect"])(() => {
    window.addEventListener('click', function (e) {
      var _e$target, _e$target$classList, _e$target2, _e$target2$parentElem, _e$target3, _e$target3$parentElem;

      const popupButton = document.querySelector(`.active.popup-${blockId} .spectra-control-popup__options--action-button`);
      const popupWrap = document.querySelector(`.active.popup-${blockId} .spectra-control-popup`);

      if (popupButton && !(popupButton !== null && popupButton !== void 0 && popupButton.contains(e.target)) && popupWrap && !(popupWrap !== null && popupWrap !== void 0 && popupWrap.contains(e.target)) && !((_e$target = e.target) !== null && _e$target !== void 0 && (_e$target$classList = _e$target.classList) !== null && _e$target$classList !== void 0 && _e$target$classList.contains('uagb-advanced-color-indicate')) && !((_e$target2 = e.target) !== null && _e$target2 !== void 0 && (_e$target2$parentElem = _e$target2.parentElement) !== null && _e$target2$parentElem !== void 0 && _e$target2$parentElem.closest('.uagb-popover-color')) && !((_e$target3 = e.target) !== null && _e$target3 !== void 0 && (_e$target3$parentElem = _e$target3.parentElement) !== null && _e$target3$parentElem !== void 0 && _e$target3$parentElem.closest('.uagb-reset'))) {
        toggleAdvancedControls(false);
      }
    });
  }, []);
  const {
    setAttributes,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Box Shadow', 'ultimate-addons-for-gutenberg'),
    popup = false,
    blockId
  } = props;
  let advancedControls;
  const activeClass = showAdvancedControls ? 'active' : '';
  const overallControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_color_control_advanced_pop_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: boxShadowColor.title,
    colorValue: boxShadowColor.value,
    data: {
      value: boxShadowColor.value,
      label: boxShadowColor.label
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: boxShadowHOffset.title,
    value: boxShadowHOffset.value,
    min: -100,
    max: 100,
    displayUnit: false,
    setAttributes: setAttributes,
    data: {
      value: boxShadowHOffset.value,
      label: boxShadowHOffset.label
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: boxShadowVOffset.title,
    value: boxShadowVOffset.value,
    min: -100,
    max: 100,
    displayUnit: false,
    setAttributes: setAttributes,
    data: {
      value: boxShadowVOffset.value,
      label: boxShadowVOffset.label
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: boxShadowBlur.title,
    value: boxShadowBlur.value,
    min: 0,
    max: 100,
    displayUnit: false,
    setAttributes: setAttributes,
    data: {
      value: boxShadowBlur.value,
      label: boxShadowBlur.label
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: boxShadowSpread.title,
    value: boxShadowSpread.value,
    min: -100,
    max: 100,
    displayUnit: false,
    setAttributes: setAttributes,
    data: {
      value: boxShadowSpread.value,
      label: boxShadowSpread.label
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_multi_buttons_control_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    label: boxShadowPosition.title,
    data: {
      value: boxShadowPosition.value,
      label: boxShadowPosition.label
    },
    options: [{
      value: 'outset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Outset', 'ultimate-addons-for-gutenberg'),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Outset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'inset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Inset', 'ultimate-addons-for-gutenberg'),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Inset (10px)', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }));

  if (showAdvancedControls) {
    advancedControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "uagb-box-shadow-advanced spectra-control-popup"
    }, overallControls);
  }

  const boxShadowAdvancedControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "spectra-control-popup__options--action-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "uag-control-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: 'uag-box-shadow-button spectra-control-popup__options--action-button',
    "aria-pressed": showAdvancedControls,
    onClick: () => {
      const allPopups = document.querySelectorAll('.spectra-control-popup__options');

      if (allPopups && 0 < allPopups.length) {
        for (let i = 0; i < allPopups.length; i++) {
          var _allPopups$i;

          const popupButton = (_allPopups$i = allPopups[i]) === null || _allPopups$i === void 0 ? void 0 : _allPopups$i.querySelector('.spectra-control-popup__options.active .spectra-control-popup__options--action-button');
          popupButton === null || popupButton === void 0 ? void 0 : popupButton.click();
        }
      }

      toggleAdvancedControls(!showAdvancedControls);

      if (!showAdvancedControls) {
        var _getSelectedBlock;

        const {
          getSelectedBlock
        } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/block-editor');
        const blockName = (_getSelectedBlock = getSelectedBlock()) === null || _getSelectedBlock === void 0 ? void 0 : _getSelectedBlock.name;
        const uagSettingState = Object(_Controls_getUAGEditorStateLocalStorage__WEBPACK_IMPORTED_MODULE_8__["default"])('uagSettingState');
        const data = { ...uagSettingState,
          [blockName]: { ...(uagSettingState === null || uagSettingState === void 0 ? void 0 : uagSettingState[blockName]),
            selectedSetting: '.uag-box-shadow-options'
          }
        };
        const uagLocalStorage = Object(_Controls_getUAGEditorStateLocalStorage__WEBPACK_IMPORTED_MODULE_8__["default"])();

        if (uagLocalStorage) {
          uagLocalStorage.setItem('uagSettingState', JSON.stringify(data));
        }
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
    icon: "edit"
  })));
  return popup ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: `components-base-control uag-box-shadow-options spectra-control-popup__options popup-${blockId} ${activeClass}`
  }, boxShadowAdvancedControls, showAdvancedControls && advancedControls) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, overallControls);
};

/* harmony default export */ __webpack_exports__["default"] = (BoxShadowControl);

/***/ }),

/***/ "./src/components/typography/fontloader.js":
/*!*************************************************!*\
  !*** ./src/components/typography/fontloader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
var _PropTypes$object, _PropTypes$func;

if (googlefonts === undefined) {
  var googlefonts = []; // eslint-disable-line no-var
}




const statuses = {
  inactive: 'inactive',
  active: 'active',
  loading: 'loading'
};

const noop = () => {};

const WebfontLoader = props => {
  const [value, setValue] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const status = undefined;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    loadFonts();
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const {
      onStatus,
      config
    } = props;

    if (status !== value.status) {
      onStatus(value.status);
    }

    if (config !== value.config) {
      loadFonts();
    }
  }, [props]);

  const handleLoading = () => {
    setValue({
      status: statuses.loading
    });
  };

  const addFont = font => {
    if (!googlefonts.includes(font)) {
      googlefonts.push(font);
    }
  };

  const handleActive = () => {
    setValue({
      status: statuses.active
    });
  };

  const handleInactive = () => {
    setValue({
      status: statuses.inactive
    });
  };

  const loadFonts = () => {
    if (!googlefonts.includes(props.config.google.families[0])) {
      webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({ ...props.config,
        loading: handleLoading,
        active: handleActive,
        inactive: handleInactive
      });
      addFont(props.config.google.families[0]);
    }

    const tabletPreview = document.getElementsByClassName('is-tablet-preview');
    const mobilePreview = document.getElementsByClassName('is-mobile-preview');

    if (0 !== tabletPreview.length || 0 !== mobilePreview.length) {
      const preview = tabletPreview[0] || mobilePreview[0];
      const iframe = preview.getElementsByTagName('iframe')[0];

      if (iframe) {
        webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({ ...props.config,
          loading: handleLoading,
          active: handleActive,
          inactive: handleInactive,
          context: iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow
        });
        addFont(props.config.google.families[0]);
      }
    }
  };

  const {
    children
  } = props;
  return children || null;
};

WebfontLoader.propTypes = {
  config: (_PropTypes$object = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object) === null || _PropTypes$object === void 0 ? void 0 : _PropTypes$object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  onStatus: (_PropTypes$func = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func) === null || _PropTypes$func === void 0 ? void 0 : _PropTypes$func.isRequired
};
WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ })

}]);
//# sourceMappingURL=settings.js.map