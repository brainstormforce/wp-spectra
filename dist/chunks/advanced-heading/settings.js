(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/advanced-heading/settings"],{

/***/ "./src/blocks/advanced-heading/presets.js":
/*!************************************************!*\
  !*** ./src/blocks/advanced-heading/presets.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/advanced-heading/attributes.js");



const presets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'headingAlign',
    value: 'left'
  }, {
    label: 'seperatorStyle',
    value: 'none'
  }, {
    label: 'separatorWidth',
    value: 80
  }, {
    label: 'separatorHeight',
    value: ''
  }, {
    label: 'separatorColor',
    value: ''
  }, {
    label: 'separatorWidthType',
    value: 'px'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="27" width="42" height="2" rx="1" /><rect x="7" y="35" width="58" height="1" rx="0.5" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><path d="M7 43.5C7 43.2239 7.22386 43 7.5 43H50.5C50.7761 43 51 43.2239 51 43.5C51 43.7761 50.7761 44 50.5 44H7.5C7.22386 44 7 43.7761 7 43.5Z" /></svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'headingAlign',
    value: 'center'
  }, {
    label: 'seperatorStyle',
    value: 'solid'
  }, {
    label: 'separatorWidth',
    value: 80
  }, {
    label: 'separatorHeight',
    value: 2
  }, {
    label: 'separatorColor',
    value: '#0170B9'
  }, {
    label: 'separatorWidthType',
    value: 'px'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="24" width="43" height="2" rx="1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M24 32.5029C24 32.2252 24.2252 32 24.5029 32H24.7544C25.0321 32 25.2573 32.2252 25.2573 32.5029C25.2573 32.7807 25.0321 33.0058 24.7544 33.0058H24.5029C24.2252 33.0058 24 32.7807 24 32.5029ZM26.2631 32.5029C26.2631 32.2252 26.4883 32 26.766 32H27.2689C27.5467 32 27.7718 32.2252 27.7718 32.5029C27.7718 32.7807 27.5467 33.0058 27.2689 33.0058H26.766C26.4883 33.0058 26.2631 32.7807 26.2631 32.5029ZM28.7777 32.5029C28.7777 32.2252 29.0028 32 29.2806 32H29.7835C30.0613 32 30.2864 32.2252 30.2864 32.5029C30.2864 32.7807 30.0613 33.0058 29.7835 33.0058H29.2806C29.0028 33.0058 28.7777 32.7807 28.7777 32.5029ZM31.2922 32.5029C31.2922 32.2252 31.5174 32 31.7952 32H32.2981C32.5758 32 32.801 32.2252 32.801 32.5029C32.801 32.7807 32.5758 33.0058 32.2981 33.0058H31.7952C31.5174 33.0058 31.2922 32.7807 31.2922 32.5029ZM33.8068 32.5029C33.8068 32.2252 34.032 32 34.3097 32H34.8126C35.0904 32 35.3155 32.2252 35.3155 32.5029C35.3155 32.7807 35.0904 33.0058 34.8126 33.0058H34.3097C34.032 33.0058 33.8068 32.7807 33.8068 32.5029ZM36.3214 32.5029C36.3214 32.2252 36.5465 32 36.8243 32H37.3272C37.605 32 37.8301 32.2252 37.8301 32.5029C37.8301 32.7807 37.605 33.0058 37.3272 33.0058H36.8243C36.5465 33.0058 36.3214 32.7807 36.3214 32.5029ZM38.8359 32.5029C38.8359 32.2252 39.0611 32 39.3389 32H39.8418C40.1195 32 40.3447 32.2252 40.3447 32.5029C40.3447 32.7807 40.1195 33.0058 39.8418 33.0058H39.3389C39.0611 33.0058 38.8359 32.7807 38.8359 32.5029ZM41.3505 32.5029C41.3505 32.2252 41.5757 32 41.8534 32H42.3563C42.6341 32 42.8592 32.2252 42.8592 32.5029C42.8592 32.7807 42.6341 33.0058 42.3563 33.0058H41.8534C41.5757 33.0058 41.3505 32.7807 41.3505 32.5029ZM43.8651 32.5029C43.8651 32.2252 44.0902 32 44.368 32H44.8709C45.1487 32 45.3738 32.2252 45.3738 32.5029C45.3738 32.7807 45.1487 33.0058 44.8709 33.0058H44.368C44.0902 33.0058 43.8651 32.7807 43.8651 32.5029ZM46.3796 32.5029C46.3796 32.2252 46.6048 32 46.8826 32H47.134C47.4118 32 47.6369 32.2252 47.6369 32.5029C47.6369 32.7807 47.4118 33.0058 47.134 33.0058H46.8826C46.6048 33.0058 46.3796 32.7807 46.3796 32.5029Z" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><rect x="7" y="43" width="58" height="1" rx="0.5" /><rect x="14" y="47" width="44" height="1" rx="0.5" /></svg>'
}, {
  value: 'preset-3',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 3', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'headingAlign',
    value: 'left'
  }, {
    label: 'seperatorStyle',
    value: 'solid'
  }, {
    label: 'separatorWidth',
    value: 80
  }, {
    label: 'separatorHeight',
    value: 2
  }, {
    label: 'separatorWidthType',
    value: 'px'
  }, {
    label: 'separatorColor',
    value: '#0170B9'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="24" width="43" height="2" rx="1" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7 32.5029C7 32.2252 7.22516 32 7.50291 32H7.75437C8.03212 32 8.25728 32.2252 8.25728 32.5029C8.25728 32.7807 8.03212 33.0058 7.75437 33.0058H7.50291C7.22516 33.0058 7 32.7807 7 32.5029ZM9.26311 32.5029C9.26311 32.2252 9.48827 32 9.76602 32H10.2689C10.5467 32 10.7718 32.2252 10.7718 32.5029C10.7718 32.7807 10.5467 33.0058 10.2689 33.0058H9.76602C9.48827 33.0058 9.26311 32.7807 9.26311 32.5029ZM11.7777 32.5029C11.7777 32.2252 12.0028 32 12.2806 32H12.7835C13.0613 32 13.2864 32.2252 13.2864 32.5029C13.2864 32.7807 13.0613 33.0058 12.7835 33.0058H12.2806C12.0028 33.0058 11.7777 32.7807 11.7777 32.5029ZM14.2922 32.5029C14.2922 32.2252 14.5174 32 14.7952 32H15.2981C15.5758 32 15.801 32.2252 15.801 32.5029C15.801 32.7807 15.5758 33.0058 15.2981 33.0058H14.7952C14.5174 33.0058 14.2922 32.7807 14.2922 32.5029ZM16.8068 32.5029C16.8068 32.2252 17.032 32 17.3097 32H17.8126C18.0904 32 18.3155 32.2252 18.3155 32.5029C18.3155 32.7807 18.0904 33.0058 17.8126 33.0058H17.3097C17.032 33.0058 16.8068 32.7807 16.8068 32.5029ZM19.3214 32.5029C19.3214 32.2252 19.5465 32 19.8243 32H20.3272C20.605 32 20.8301 32.2252 20.8301 32.5029C20.8301 32.7807 20.605 33.0058 20.3272 33.0058H19.8243C19.5465 33.0058 19.3214 32.7807 19.3214 32.5029ZM21.8359 32.5029C21.8359 32.2252 22.0611 32 22.3389 32H22.8418C23.1195 32 23.3447 32.2252 23.3447 32.5029C23.3447 32.7807 23.1195 33.0058 22.8418 33.0058H22.3389C22.0611 33.0058 21.8359 32.7807 21.8359 32.5029ZM24.3505 32.5029C24.3505 32.2252 24.5757 32 24.8534 32H25.3563C25.6341 32 25.8592 32.2252 25.8592 32.5029C25.8592 32.7807 25.6341 33.0058 25.3563 33.0058H24.8534C24.5757 33.0058 24.3505 32.7807 24.3505 32.5029ZM26.8651 32.5029C26.8651 32.2252 27.0902 32 27.368 32H27.8709C28.1487 32 28.3738 32.2252 28.3738 32.5029C28.3738 32.7807 28.1487 33.0058 27.8709 33.0058H27.368C27.0902 33.0058 26.8651 32.7807 26.8651 32.5029ZM29.3796 32.5029C29.3796 32.2252 29.6048 32 29.8826 32H30.134C30.4118 32 30.6369 32.2252 30.6369 32.5029C30.6369 32.7807 30.4118 33.0058 30.134 33.0058H29.8826C29.6048 33.0058 29.3796 32.7807 29.3796 32.5029Z" /><rect x="7" y="39" width="58" height="1" rx="0.5" /><rect x="7" y="43" width="58" height="1" rx="0.5" /><rect x="7" y="47" width="44" height="1" rx="0.5" /></svg>'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(`uag_creative_heading_presets`, presets));

/***/ }),

/***/ "./src/blocks/advanced-heading/settings.js":
/*!*************************************************!*\
  !*** ./src/blocks/advanced-heading/settings.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./presets */ "./src/blocks/advanced-heading/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















 // Extend component



const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    headingAlign,
    headingColor,
    subHeadingColor,
    separatorColor,
    headingTag,
    headFontFamily,
    headFontWeight,
    headFontStyle,
    headFontSizeType,
    headFontSize,
    headFontSizeMobile,
    headFontSizeTablet,
    headLineHeightType,
    headLineHeight,
    headLineHeightMobile,
    headLineHeightTablet,
    subHeadFontFamily,
    subHeadFontWeight,
    subHeadFontStyle,
    subHeadFontSize,
    subHeadFontSizeType,
    subHeadFontSizeMobile,
    subHeadFontSizeTablet,
    subHeadLineHeight,
    subHeadLineHeightType,
    subHeadLineHeightMobile,
    subHeadLineHeightTablet,
    headTransform,
    headDecoration,
    subHeadTransform,
    subHeadDecoration,
    separatorWidth,
    separatorWidthTablet,
    separatorWidthMobile,
    separatorWidthType,
    seperatorStyle,
    separatorHeight,
    separatorHeightType,
    headSpace,
    headSpaceTablet,
    headSpaceMobile,
    headSpaceType,
    separatorSpace,
    separatorSpaceTablet,
    separatorSpaceMobile,
    separatorSpaceType,
    headLoadGoogleFonts,
    subHeadLoadGoogleFonts
  } = attributes;
  let loadHeadingGoogleFonts;
  let loadSubHeadingGoogleFonts;

  if (headLoadGoogleFonts === true) {
    const hconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: hconfig
    });
  }

  if (subHeadLoadGoogleFonts === true) {
    const sconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: sconfig
    });
  }

  const blockControlSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__["AlignmentToolbar"], {
      value: headingAlign,
      onChange: value => setAttributes({
        headingAlign: value
      })
    }));
  };

  const generalPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingAlign,
        label: 'headingAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingTag,
        label: 'headingTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Separator Style', 'ultimate-addons-for-gutenberg'),
      value: seperatorStyle,
      onChange: value => setAttributes({
        seperatorStyle: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }]
    }));
  };

  const headingPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Heading', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: headLoadGoogleFonts,
        label: 'headLoadGoogleFonts'
      },
      fontFamily: {
        value: headFontFamily,
        label: 'headFontFamily'
      },
      fontWeight: {
        value: headFontWeight,
        label: 'headFontWeight'
      },
      fontStyle: {
        value: headFontStyle,
        label: 'headFontStyle'
      },
      transform: {
        value: headTransform,
        label: 'headTransform'
      },
      decoration: {
        value: headDecoration,
        label: 'headDecoration'
      },
      fontSizeType: {
        value: headFontSizeType,
        label: 'headFontSizeType'
      },
      fontSize: {
        value: headFontSize,
        label: 'headFontSize'
      },
      fontSizeMobile: {
        value: headFontSizeMobile,
        label: 'headFontSizeMobile'
      },
      fontSizeTablet: {
        value: headFontSizeTablet,
        label: 'headFontSizeTablet'
      },
      lineHeightType: {
        value: headLineHeightType,
        label: 'headLineHeightType'
      },
      lineHeight: {
        value: headLineHeight,
        label: 'headLineHeight'
      },
      lineHeightMobile: {
        value: headLineHeightMobile,
        label: 'headLineHeightMobile'
      },
      lineHeightTablet: {
        value: headLineHeightTablet,
        label: 'headLineHeightTablet'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headingColor ? headingColor : '',
      onColorChange: value => setAttributes({
        headingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_15__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: headSpace,
          label: 'headSpace'
        },
        tablet: {
          value: headSpaceTablet,
          label: 'headSpaceTablet'
        },
        mobile: {
          value: headSpaceMobile,
          label: 'headSpaceMobile'
        }
      },
      min: 0,
      max: 200,
      unit: {
        value: headSpaceType,
        label: 'headSpaceType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }],
      setAttributes: setAttributes
    }));
  };

  const subheadingPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Description', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: subHeadLoadGoogleFonts,
        label: 'subHeadLoadGoogleFonts'
      },
      fontFamily: {
        value: subHeadFontFamily,
        label: 'subHeadFontFamily'
      },
      fontWeight: {
        value: subHeadFontWeight,
        label: 'subHeadFontWeight'
      },
      fontStyle: {
        value: subHeadFontStyle,
        label: 'subHeadFontStyle'
      },
      transform: {
        value: subHeadTransform,
        label: 'subHeadTransform'
      },
      decoration: {
        value: subHeadDecoration,
        label: 'subHeadDecoration'
      },
      fontSizeType: {
        value: subHeadFontSizeType,
        label: 'subHeadFontSizeType'
      },
      fontSize: {
        value: subHeadFontSize,
        label: 'subHeadFontSize'
      },
      fontSizeMobile: {
        value: subHeadFontSizeMobile,
        label: 'subHeadFontSizeMobile'
      },
      fontSizeTablet: {
        value: subHeadFontSizeTablet,
        label: 'subHeadFontSizeTablet'
      },
      lineHeightType: {
        value: subHeadLineHeightType,
        label: 'subHeadLineHeightType'
      },
      lineHeight: {
        value: subHeadLineHeight,
        label: 'subHeadLineHeight'
      },
      lineHeightMobile: {
        value: subHeadLineHeightMobile,
        label: 'subHeadLineHeightMobile'
      },
      lineHeightTablet: {
        value: subHeadLineHeightTablet,
        label: 'subHeadLineHeightTablet'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: subHeadingColor ? subHeadingColor : '',
      onColorChange: value => setAttributes({
        subHeadingColor: value
      })
    }));
  };

  const seperatorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Separator', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_15__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: separatorWidth,
          label: 'separatorWidth'
        },
        tablet: {
          value: separatorWidthTablet,
          label: 'separatorWidthTablet'
        },
        mobile: {
          value: separatorWidthMobile,
          label: 'separatorWidthMobile'
        }
      },
      min: 0,
      max: '%' === separatorWidthType ? 100 : 500,
      unit: {
        value: separatorWidthType,
        label: 'separatorWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Thickness', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: separatorHeight,
      onChange: value => setAttributes({
        separatorHeight: value
      }),
      min: 0,
      max: 20,
      unit: {
        value: separatorHeightType,
        label: 'separatorHeightType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: separatorColor ? separatorColor : '',
      onColorChange: value => setAttributes({
        separatorColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_15__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: separatorSpace,
          label: 'separatorSpace'
        },
        tablet: {
          value: separatorSpaceTablet,
          label: 'separatorSpaceTablet'
        },
        mobile: {
          value: separatorSpaceMobile,
          label: 'separatorSpaceMobile'
        }
      },
      min: 0,
      max: 200,
      unit: {
        value: separatorSpaceType,
        label: 'separatorSpaceType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }],
      setAttributes: setAttributes
    }));
  };

  const presetSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Presets', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_11__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_10__["default"],
      presetInputType: "radioImage"
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, blockControlSettings(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].general, presetSettings(), generalPanel()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].style, headingPanel(), 'none' !== seperatorStyle && seperatorSettings(), subheadingPanel()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].advance, {
    parentProps: props
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, loadHeadingGoogleFonts, loadSubHeadingGoogleFonts));
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