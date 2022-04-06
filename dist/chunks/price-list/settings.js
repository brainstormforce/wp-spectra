(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/price-list/settings"],{

/***/ "./src/blocks/price-list/presets.js":
/*!******************************************!*\
  !*** ./src/blocks/price-list/presets.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/price-list/attributes.js");
/* harmony import */ var _price_list_child_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../price-list-child/attributes */ "./src/blocks/price-list-child/attributes.js");




const presets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  defaultChildAttributes: _price_list_child_attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'imgAlign',
    value: 'side'
  }, {
    label: 'imageAlignment',
    value: 'middle'
  }, {
    label: 'imageWidth',
    value: 150
  }, {
    label: 'imgPaddingRight',
    value: 10
  }, {
    label: 'columnGap',
    value: 50
  }, {
    label: 'contentPaddingTop',
    value: 25
  }, {
    label: 'contentPaddingBottom',
    value: 35
  }, {
    label: 'columns',
    value: 2
  }, {
    label: 'headingAlign',
    value: ''
  }, {
    label: 'seperatorStyle',
    value: 'dashed'
  }, {
    label: 'seperatorWidth',
    value: 100
  }, {
    label: 'seperatorThickness',
    value: 1
  }, {
    label: 'seperatorColor',
    value: '#dddddd'
  }, {
    label: 'imgPaddingBottom',
    value: ''
  }, {
    label: 'imagePosition',
    value: 'left'
  }],
  childAttributes: [{
    label: 'image',
    value: {
      url: `${uagb_blocks_info.uagb_url}/admin/assets/images/uag-placeholder.svg`
    }
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 27.5C56 27.7761 55.7761 28 55.5 28H28.5C28.2239 28 28 27.7761 28 27.5C28 27.2239 28.2239 27 28.5 27H55.5C55.7761 27 56 27.2239 56 27.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 23.5C66 23.7761 65.7761 24 65.5 24H28.5C28.2239 24 28 23.7761 28 23.5C28 23.2239 28.2239 23 28.5 23H65.5C65.7761 23 66 23.2239 66 23.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 16C66 16.5523 65.5523 17 65 17H61C60.4477 17 60 16.5523 60 16C60 15.4477 60.4477 15 61 15H65C65.5523 15 66 15.4477 66 16Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M54 16C54 16.5523 53.5523 17 53 17H29C28.4477 17 28 16.5523 28 16C28 15.4477 28.4477 15 29 15H53C53.5523 15 54 15.4477 54 16Z" /><path d="M7 17C7 15.8954 7.89543 15 9 15H18C19.1046 15 20 15.8954 20 17V26C20 27.1046 19.1046 28 18 28H9C7.89543 28 7 27.1046 7 26V17Z" stroke="" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M56 55.5C56 55.7761 55.7761 56 55.5 56H28.5C28.2239 56 28 55.7761 28 55.5C28 55.2239 28.2239 55 28.5 55H55.5C55.7761 55 56 55.2239 56 55.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 51.5C66 51.7761 65.7761 52 65.5 52H28.5C28.2239 52 28 51.7761 28 51.5C28 51.2239 28.2239 51 28.5 51H65.5C65.7761 51 66 51.2239 66 51.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M66 44C66 44.5523 65.5523 45 65 45H61C60.4477 45 60 44.5523 60 44C60 43.4477 60.4477 43 61 43H65C65.5523 43 66 43.4477 66 44Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M54 44C54 44.5523 53.5523 45 53 45H29C28.4477 45 28 44.5523 28 44C28 43.4477 28.4477 43 29 43H53C53.5523 43 54 43.4477 54 44Z" /><path d="M7 45C7 43.8954 7.89543 43 9 43H18C19.1046 43 20 43.8954 20 45V54C20 55.1046 19.1046 56 18 56H9C7.89543 56 7 55.1046 7 54V45Z" stroke="" stroke-width="2"/></svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'columns',
    value: 2
  }, {
    label: 'imgAlign',
    value: 'top'
  }, {
    label: 'headingAlign',
    value: 'center'
  }, {
    label: 'imageWidth',
    value: 150
  }, {
    label: 'seperatorStyle',
    value: 'none'
  }, {
    label: 'imgPaddingBottom',
    value: 20
  }, {
    label: 'columnGap',
    value: 40
  }, {
    label: 'contentPaddingTop',
    value: 5
  }, {
    label: 'contentPaddingBottom',
    value: 5
  }, {
    label: 'imageAlignment',
    value: ''
  }, {
    label: 'imgPaddingRight',
    value: ''
  }],
  childAttributes: [{
    label: 'image',
    value: {
      url: `${uagb_blocks_info.uagb_url}/admin/assets/images/uag-placeholder.svg`
    }
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 46.5C50 46.7761 49.7761 47 49.5 47H22.5C22.2239 47 22 46.7761 22 46.5C22 46.2239 22.2239 46 22.5 46H49.5C49.7761 46 50 46.2239 50 46.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M55 42.5C55 42.7761 54.7761 43 54.5 43H17.5C17.2239 43 17 42.7761 17 42.5C17 42.2239 17.2239 42 17.5 42H54.5C54.7761 42 55 42.2239 55 42.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39 51C39 51.5523 38.5523 52 38 52H34C33.4477 52 33 51.5523 33 51C33 50.4477 33.4477 50 34 50H38C38.5523 50 39 50.4477 39 51Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49 38C49 38.5523 48.5523 39 48 39H24C23.4477 39 23 38.5523 23 38C23 37.4477 23.4477 37 24 37H48C48.5523 37 49 37.4477 49 38Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31.8 22C31.3582 22 31 22.3582 31 22.8V31.2C31 31.6418 31.3582 32 31.8 32H40.2C40.6418 32 41 31.6418 41 31.2V22.8C41 22.3582 40.6418 22 40.2 22H31.8ZM31.8 20C30.2536 20 29 21.2536 29 22.8V31.2C29 32.7464 30.2536 34 31.8 34H40.2C41.7464 34 43 32.7464 43 31.2V22.8C43 21.2536 41.7464 20 40.2 20H31.8Z"/></svg>'
}, {
  value: 'preset-3',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 3', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'columns',
    value: 1
  }, {
    label: 'imgAlign',
    value: 'top'
  }, {
    label: 'headingAlign',
    value: 'center'
  }, {
    label: 'imageWidth',
    value: 150
  }, {
    label: 'seperatorStyle',
    value: 'solid'
  }, {
    label: 'seperatorWidth',
    value: 33
  }, {
    label: 'seperatorThickness',
    value: 1
  }, {
    label: 'seperatorColor',
    value: '#dddddd'
  }, {
    label: 'imgPaddingBottom',
    value: 20
  }, {
    label: 'columnGap',
    value: 40
  }, {
    label: 'contentPaddingTop',
    value: 10
  }, {
    label: 'contentPaddingBottom',
    value: 10
  }, {
    label: 'imageAlignment',
    value: ''
  }, {
    label: 'imgPaddingRight',
    value: ''
  }],
  childAttributes: [{
    label: 'image.url',
    value: ''
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M47 53.5C47 53.7761 46.8241 54 46.6071 54H25.3929C25.1759 54 25 53.7761 25 53.5C25 53.2239 25.1759 53 25.3929 53H46.6071C46.8241 53 47 53.2239 47 53.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M55 49.5C55 49.7761 54.7761 50 54.5 50H17.5C17.2239 50 17 49.7761 17 49.5C17 49.2239 17.2239 49 17.5 49H54.5C54.7761 49 55 49.2239 55 49.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M39 58C39 58.5523 38.5523 59 38 59H34C33.4477 59 33 58.5523 33 58C33 57.4477 33.4477 57 34 57H38C38.5523 57 39 57.4477 39 58Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M47 45C47 45.5523 46.6212 46 46.1538 46H25.8462C25.3788 46 25 45.5523 25 45C25 44.4477 25.3788 44 25.8462 44H46.1538C46.6212 44 47 44.4477 47 45Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M47 28.5C47 28.7761 46.8241 29 46.6071 29H25.3929C25.1759 29 25 28.7761 25 28.5C25 28.2239 25.1759 28 25.3929 28H46.6071C46.8241 28 47 28.2239 47 28.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M55 24.5C55 24.7761 54.7761 25 54.5 25H17.5C17.2239 25 17 24.7761 17 24.5C17 24.2239 17.2239 24 17.5 24H54.5C54.7761 24 55 24.2239 55 24.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M39 33C39 33.5523 38.5523 34 38 34H34C33.4477 34 33 33.5523 33 33C33 32.4477 33.4477 32 34 32H38C38.5523 32 39 32.4477 39 33Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M47 20C47 20.5523 46.6212 21 46.1538 21H25.8462C25.3788 21 25 20.5523 25 20C25 19.4477 25.3788 19 25.8462 19H46.1538C46.6212 19 47 19.4477 47 20Z" /></svg>'
}, {
  value: 'preset-4',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 4', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'columns',
    value: 2
  }, {
    label: 'imgAlign',
    value: 'side'
  }, {
    label: 'headingAlign',
    value: 'center'
  }, {
    label: 'imageWidth',
    value: 100
  }, {
    label: 'seperatorStyle',
    value: 'solid'
  }, {
    label: 'seperatorWidth',
    value: 33
  }, {
    label: 'seperatorThickness',
    value: 1
  }, {
    label: 'seperatorColor',
    value: '#dddddd'
  }, {
    label: 'imgPaddingBottom',
    value: ''
  }, {
    label: 'columnGap',
    value: 50
  }, {
    label: 'contentPaddingTop',
    value: 10
  }, {
    label: 'contentPaddingBottom',
    value: 10
  }, {
    label: 'imageAlignment',
    value: ''
  }, {
    label: 'imgPaddingRight',
    value: ''
  }, {
    label: 'imagePosition',
    value: 'left'
  }],
  childAttributes: [{
    label: 'image',
    value: {
      url: ''
    }
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M33 31C33 31.5523 32.7015 32 32.3333 32H29.6667C29.2985 32 29 31.5523 29 31C29 30.4477 29.2985 30 29.6667 30H32.3333C32.7015 30 33 30.4477 33 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M33 36C33 36.5523 32.7015 37 32.3333 37H29.6667C29.2985 37 29 36.5523 29 36C29 35.4477 29.2985 35 29.6667 35H32.3333C32.7015 35 33 35.4477 33 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M33 41C33 41.5523 32.7015 42 32.3333 42H29.6667C29.2985 42 29 41.5523 29 41C29 40.4477 29.2985 40 29.6667 40H32.3333C32.7015 40 33 40.4477 33 41Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27 31C27 31.5523 26.6556 32 26.2308 32H7.76923C7.3444 32 7 31.5523 7 31C7 30.4477 7.3444 30 7.76923 30H26.2308C26.6556 30 27 30.4477 27 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27 36C27 36.5523 26.6556 37 26.2308 37H7.76923C7.3444 37 7 36.5523 7 36C7 35.4477 7.3444 35 7.76923 35H26.2308C26.6556 35 27 35.4477 27 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M27 41C27 41.5523 26.6556 42 26.2308 42H7.76923C7.3444 42 7 41.5523 7 41C7 40.4477 7.3444 40 7.76923 40H26.2308C26.6556 40 27 40.4477 27 41Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M65 31C65 31.5523 64.7015 32 64.3333 32H61.6667C61.2985 32 61 31.5523 61 31C61 30.4477 61.2985 30 61.6667 30H64.3333C64.7015 30 65 30.4477 65 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M65 36C65 36.5523 64.7015 37 64.3333 37H61.6667C61.2985 37 61 36.5523 61 36C61 35.4477 61.2985 35 61.6667 35H64.3333C64.7015 35 65 35.4477 65 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M65 41C65 41.5523 64.7015 42 64.3333 42H61.6667C61.2985 42 61 41.5523 61 41C61 40.4477 61.2985 40 61.6667 40H64.3333C64.7015 40 65 40.4477 65 41Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59 31C59 31.5523 58.6556 32 58.2308 32H39.7692C39.3444 32 39 31.5523 39 31C39 30.4477 39.3444 30 39.7692 30H58.2308C58.6556 30 59 30.4477 59 31Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59 36C59 36.5523 58.6556 37 58.2308 37H39.7692C39.3444 37 39 36.5523 39 36C39 35.4477 39.3444 35 39.7692 35H58.2308C58.6556 35 59 35.4477 59 36Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59 41C59 41.5523 58.6556 42 58.2308 42H39.7692C39.3444 42 39 41.5523 39 41C39 40.4477 39.3444 40 39.7692 40H58.2308C58.6556 40 59 40.4477 59 41Z" /></svg>'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(`uag_price_list_presets`, presets));

/***/ }),

/***/ "./src/blocks/price-list/settings.js":
/*!*******************************************!*\
  !*** ./src/blocks/price-list/settings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./presets */ "./src/blocks/price-list/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















const maxColumns = 3;




const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes,
    deviceType
  } = props; // Setup the attributes.

  const {
    menu_item_count,
    titleSpace,
    columns,
    tcolumns,
    mcolumns,
    rowGap,
    columnGap,
    priceColor,
    descColor,
    titleColor,
    seperatorStyle,
    seperatorWidth,
    seperatorThickness,
    seperatorColor,
    priceLoadGoogleFonts,
    titleLoadGoogleFonts,
    descLoadGoogleFonts,
    titleFontSizeType,
    titleFontSize,
    titleFontSizeTablet,
    titleFontSizeMobile,
    titleFontFamily,
    titleFontWeight,
    titleFontStyle,
    titleLineHeightType,
    titleLineHeight,
    titleLineHeightTablet,
    titleLineHeightMobile,
    priceFontSizeType,
    priceFontSize,
    priceFontSizeTablet,
    priceFontSizeMobile,
    priceFontFamily,
    priceFontWeight,
    priceFontStyle,
    priceLineHeightType,
    priceLineHeight,
    priceLineHeightTablet,
    priceLineHeightMobile,
    descFontSizeType,
    descFontSize,
    descFontSizeTablet,
    descFontSizeMobile,
    descFontFamily,
    descFontWeight,
    descFontStyle,
    descLineHeightType,
    descLineHeight,
    descLineHeightTablet,
    descLineHeightMobile,
    headingTag,
    imagePosition,
    imageAlignment,
    imageSize,
    imageWidth,
    stack,
    imageWidthType,
    seperatorWidthType,
    rowGapType,
    columnGapType,
    titleSpaceType,
    contentPaddingTop,
    contentPaddingRight,
    contentPaddingBottom,
    contentPaddingLeft,
    contentPaddingTopTablet,
    contentPaddingRightTablet,
    contentPaddingBottomTablet,
    contentPaddingLeftTablet,
    contentPaddingTopMobile,
    contentPaddingRightMobile,
    contentPaddingBottomMobile,
    contentPaddingLeftMobile,
    contentPaddingUnit,
    contentMobilePaddingUnit,
    contentTabletPaddingUnit,
    contentSpacingLink,
    imgPaddingTop,
    imgPaddingRight,
    imgPaddingBottom,
    imgPaddingLeft,
    imgPaddingTopTablet,
    imgPaddingRightTablet,
    imgPaddingBottomTablet,
    imgPaddingLeftTablet,
    imgPaddingTopMobile,
    imgPaddingRightMobile,
    imgPaddingBottomMobile,
    imgPaddingLeftMobile,
    imgPaddingUnit,
    imgMobilePaddingUnit,
    imgTabletPaddingUnit,
    imgSpacingLink,
    titleTransform,
    titleDecoration,
    descTransform,
    descDecoration,
    priceTransform,
    priceDecoration,
    headingAlign,
    imgAlign
  } = attributes;

  const setimageSize = value => {
    const getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(pricelistChild => {
      pricelistChild.attributes.imageSize = value;
    });
    setAttributes({
      imageSize: value
    });
  };

  let loadTitleGoogleFonts;
  let loadDescGoogleFonts;
  let loadPriceGoogleFonts;

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

  if (descLoadGoogleFonts === true) {
    const descconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: descconfig
    });
  }

  if (priceLoadGoogleFonts === true) {
    const priceconfig = {
      google: {
        families: [priceFontFamily + (priceFontWeight ? ':' + priceFontWeight : '')]
      }
    };
    loadPriceGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: priceconfig
    });
  } // Margin Settings.


  const marginSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Row Gap'),
      setAttributes: setAttributes,
      value: rowGap,
      onChange: value => setAttributes({
        rowGap: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: rowGapType,
        label: 'rowGapType'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Column Gap'),
      setAttributes: setAttributes,
      value: columnGap,
      onChange: value => setAttributes({
        columnGap: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: columnGapType,
        label: 'columnGapType'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Item Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: contentPaddingTop,
        label: 'contentPaddingTop'
      },
      valueRight: {
        value: contentPaddingRight,
        label: 'contentPaddingRight'
      },
      valueBottom: {
        value: contentPaddingBottom,
        label: 'contentPaddingBottom'
      },
      valueLeft: {
        value: contentPaddingLeft,
        label: 'contentPaddingLeft'
      },
      valueTopTablet: {
        value: contentPaddingTopTablet,
        label: 'contentPaddingTopTablet'
      },
      valueRightTablet: {
        value: contentPaddingRightTablet,
        label: 'contentPaddingRightTablet'
      },
      valueBottomTablet: {
        value: contentPaddingBottomTablet,
        label: 'contentPaddingBottomTablet'
      },
      valueLeftTablet: {
        value: contentPaddingLeftTablet,
        label: 'contentPaddingLeftTablet'
      },
      valueTopMobile: {
        value: contentPaddingTopMobile,
        label: 'contentPaddingTopMobile'
      },
      valueRightMobile: {
        value: contentPaddingRightMobile,
        label: 'contentPaddingRightMobile'
      },
      valueBottomMobile: {
        value: contentPaddingBottomMobile,
        label: 'contentPaddingBottomMobile'
      },
      valueLeftMobile: {
        value: contentPaddingLeftMobile,
        label: 'contentPaddingLeftMobile'
      },
      unit: {
        value: contentPaddingUnit,
        label: 'contentPaddingUnit'
      },
      mUnit: {
        value: contentMobilePaddingUnit,
        label: 'contentMobilePaddingUnit'
      },
      tUnit: {
        value: contentTabletPaddingUnit,
        label: 'contentTabletPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: contentSpacingLink,
        label: 'contentSpacingLink'
      }
    })));
  }; // Image sizes.


  const imageSizeOptions = [{
    value: 'thumbnail',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Thumbnail')
  }, {
    value: 'medium',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Medium')
  }, {
    value: 'full',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Large')
  }]; //Image Setting

  const imageSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Position', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imgAlign,
        label: 'imgAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'top',
        label: 'Top'
      }, {
        value: 'side',
        label: 'Side'
      }],
      showIcons: false
    }), imgAlign === 'side' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imagePosition,
        label: 'imagePosition'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), imgAlign === 'top' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingAlign,
        label: 'headingAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), (imagePosition === 'left' || imagePosition === 'right') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
      data: {
        value: stack,
        label: 'stack'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'tablet',
        label: 'Tablet'
      }, {
        value: 'mobile',
        label: 'Mobile'
      }],
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: Choose on what breakpoint the Images will stack.'),
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Vertical Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imageAlignment,
        label: 'imageAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'top',
        label: 'Top'
      }, {
        value: 'middle',
        label: 'Middle'
      }],
      showIcons: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Size'),
      options: imageSizeOptions,
      value: imageSize,
      onChange: setimageSize
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width'),
      value: imageWidth,
      setAttributes: setAttributes,
      onChange: value => setAttributes({
        imageWidth: value
      }),
      min: 0,
      max: 500,
      unit: {
        value: imageWidthType,
        label: 'imageWidthType'
      }
    }));
  }; //Image Setting


  const imageStyles = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: imgPaddingTop,
        label: 'imgPaddingTop'
      },
      valueRight: {
        value: imgPaddingRight,
        label: 'imgPaddingRight'
      },
      valueBottom: {
        value: imgPaddingBottom,
        label: 'imgPaddingBottom'
      },
      valueLeft: {
        value: imgPaddingLeft,
        label: 'imgPaddingLeft'
      },
      valueTopTablet: {
        value: imgPaddingTopTablet,
        label: 'imgPaddingTopTablet'
      },
      valueRightTablet: {
        value: imgPaddingRightTablet,
        label: 'imgPaddingRightTablet'
      },
      valueBottomTablet: {
        value: imgPaddingBottomTablet,
        label: 'imgPaddingBottomTablet'
      },
      valueLeftTablet: {
        value: imgPaddingLeftTablet,
        label: 'imgPaddingLeftTablet'
      },
      valueTopMobile: {
        value: imgPaddingTopMobile,
        label: 'imgPaddingTopMobile'
      },
      valueRightMobile: {
        value: imgPaddingRightMobile,
        label: 'imgPaddingRightMobile'
      },
      valueBottomMobile: {
        value: imgPaddingBottomMobile,
        label: 'imgPaddingBottomMobile'
      },
      valueLeftMobile: {
        value: imgPaddingLeftMobile,
        label: 'imgPaddingLeftMobile'
      },
      unit: {
        value: imgPaddingUnit,
        label: 'imgPaddingUnit'
      },
      mUnit: {
        value: imgMobilePaddingUnit,
        label: 'imgMobilePaddingUnit'
      },
      tUnit: {
        value: imgTabletPaddingUnit,
        label: 'imgTabletPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: imgSpacingLink,
        label: 'imgSpacingLink'
      }
    })));
  }; //Color settings


  const contentSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: descColor ? descColor : '',
      onColorChange: value => setAttributes({
        descColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: descLoadGoogleFonts,
        label: 'descLoadGoogleFonts'
      },
      fontFamily: {
        value: descFontFamily,
        label: 'descFontFamily'
      },
      fontWeight: {
        value: descFontWeight,
        label: 'descFontWeight'
      },
      fontStyle: {
        value: descFontStyle,
        label: 'descFontStyle'
      },
      fontSizeType: {
        value: descFontSizeType,
        label: 'descFontSizeType'
      },
      fontSize: {
        value: descFontSize,
        label: 'descFontSize'
      },
      fontSizeMobile: {
        value: descFontSizeMobile,
        label: 'descFontSizeMobile'
      },
      fontSizeTablet: {
        value: descFontSizeTablet,
        label: 'descFontSizeTablet'
      },
      lineHeightType: {
        value: descLineHeightType,
        label: 'descLineHeightType'
      },
      lineHeight: {
        value: descLineHeight,
        label: 'descLineHeight'
      },
      lineHeightMobile: {
        value: descLineHeightMobile,
        label: 'descLineHeightMobile'
      },
      lineHeightTablet: {
        value: descLineHeightTablet,
        label: 'descLineHeightTablet'
      },
      transform: {
        value: descTransform,
        label: 'descTransform'
      },
      decoration: {
        value: descDecoration,
        label: 'descDecoration'
      }
    }));
  }; //seperator setting


  const separatorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Separator'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Style'),
      value: seperatorStyle,
      onChange: value => setAttributes({
        seperatorStyle: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('None')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Solid')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dotted')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dashed')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Double')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Groove')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Inset')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Outset')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ridge')
      }]
    }), 'none' !== seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width'),
      setAttributes: setAttributes,
      value: seperatorWidth,
      onChange: value => setAttributes({
        seperatorWidth: value
      }),
      min: 0,
      max: 100,
      unit: {
        value: seperatorWidthType,
        label: 'seperatorWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Thickness'),
      setAttributes: setAttributes,
      value: seperatorThickness,
      onChange: value => setAttributes({
        seperatorThickness: value
      }),
      min: 0,
      max: 20,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: seperatorColor ? seperatorColor : '',
      onColorChange: value => setAttributes({
        seperatorColor: value
      })
    })));
  }; // Typography settings.


  const priceSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Price'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: priceColor ? priceColor : '',
      onColorChange: value => setAttributes({
        priceColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: priceLoadGoogleFonts,
        label: 'priceLoadGoogleFonts'
      },
      fontFamily: {
        value: priceFontFamily,
        label: 'priceFontFamily'
      },
      fontWeight: {
        value: priceFontWeight,
        label: 'priceFontWeight'
      },
      fontStyle: {
        value: priceFontStyle,
        label: 'priceFontStyle'
      },
      fontSizeType: {
        value: priceFontSizeType,
        label: 'priceFontSizeType'
      },
      fontSize: {
        value: priceFontSize,
        label: 'priceFontSize'
      },
      fontSizeMobile: {
        value: priceFontSizeMobile,
        label: 'priceFontSizeMobile'
      },
      fontSizeTablet: {
        value: priceFontSizeTablet,
        label: 'priceFontSizeTablet'
      },
      lineHeightType: {
        value: priceLineHeightType,
        label: 'priceLineHeightType'
      },
      lineHeight: {
        value: priceLineHeight,
        label: 'priceLineHeight'
      },
      lineHeightMobile: {
        value: priceLineHeightMobile,
        label: 'priceLineHeightMobile'
      },
      lineHeightTablet: {
        value: priceLineHeightTablet,
        label: 'priceLineHeightTablet'
      },
      transform: {
        value: priceTransform,
        label: 'priceTransform'
      },
      decoration: {
        value: priceDecoration,
        label: 'priceDecoration'
      }
    }));
  };

  const titleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: titleColor ? titleColor : '',
      onColorChange: value => setAttributes({
        titleColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
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
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Margin'),
      value: titleSpace,
      setAttributes: setAttributes,
      onChange: value => setAttributes({
        titleSpace: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: titleSpaceType,
        label: 'titleSpaceType'
      }
    }));
  };

  const presetSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Presets', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_15__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_14__["default"],
      presetInputType: "radioImage"
    }));
  };

  const inspectControl = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["UAGTabs"].general, presetSettings(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('General'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: columns,
          label: 'columns'
        },
        tablet: {
          value: tcolumns,
          label: 'tcolumns'
        },
        mobile: {
          value: mcolumns,
          label: 'mcolumns'
        }
      },
      min: 1,
      max: Math.min(maxColumns, menu_item_count),
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingTag,
        label: 'headingTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('P', 'ultimate-addons-for-gutenberg')
      }]
    })), imageSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["UAGTabs"].style, titleSettings(), separatorSettings(), imageStyles(), contentSettings(), priceSettings(), marginSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_12__["UAGTabs"].advance, {
      parentProps: props
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, inspectControl(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, loadTitleGoogleFonts, loadDescGoogleFonts, loadPriceGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

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