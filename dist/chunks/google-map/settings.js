(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/google-map/settings"],{

/***/ "./src/blocks/google-map/settings.js":
/*!*******************************************!*\
  !*** ./src/blocks/google-map/settings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes: {
      height,
      zoom,
      address,
      language
    }
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tabs: ['general', 'advance']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].general, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_7__["default"], {
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-settings-notice"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("This block uses Spectra's API key to display the map. You don't need to create your own API key or worry about renewing it.", 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Address', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
    value: address,
    onChange: value => setAttributes({
      address: value
    }),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type the address', 'ultimate-addons-for-gutenberg')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Zoom', 'ultimate-addons-for-gutenberg'),
    value: zoom,
    setAttributes: setAttributes,
    onChange: value => setAttributes({
      zoom: value
    }),
    min: 1,
    max: 22,
    displayUnit: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
    value: height,
    onChange: value => setAttributes({
      height: value
    }),
    min: 0,
    max: 1000,
    displayUnit: false,
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Language', 'ultimate-addons-for-gutenberg'),
    value: language,
    onChange: value => setAttributes({
      language: value
    }),
    options: [{
      value: 'af',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Afrikaans', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'sq',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Albanian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'am',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Amharic', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ar',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Arabic', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'hy',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Armenian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'az',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Azerbaijani', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'eu',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Basque', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'be',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Belarusian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bn',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bengali', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bs',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bosnian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bg',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bulgarian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'my',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Burmese', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ca',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Catalan', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'zh',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Chinese', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'hr',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Croatian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'cs',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Czech', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'da',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Danish', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'nl',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dutch', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'en',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('English', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'et',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Estonian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'fa',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Farsi', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'fi',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Finnish', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'fr',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('French', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'gl',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Galician', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ka',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Georgian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'de',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('German', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'el',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Greek', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'gu',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Gujarati', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'iw',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hebrew', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'hi',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hindi', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'hu',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hungarian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'is',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icelandic', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'id',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Indonesian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'it',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Italian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ja',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Japanese', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'kn',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Kannada', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'kk',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Kazakh', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'km',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Khmer', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ko',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Korean', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ky',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Kyrgyz', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'lo',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Lao', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'lv',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Latvian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'lt',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Lithuanian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'mk',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Macedonian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ms',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Malay', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ml',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Malayalam', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'mr',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Marathi', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'mn',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mongolian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ne',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Nepali', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'no',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Norwegian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'pl',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Polish', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'pt',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Portuguese', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'pa',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Punjabi', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ro',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Romanian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ru',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Russian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'sr',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Serbian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'si',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Sinhalese', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'sk',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slovak', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'sl',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Slovenian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'es',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spanish', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'sw',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Swahili', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'sv',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Swedish', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ta',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tamil', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'te',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Telugu', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'th',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Thai', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'tr',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Turkish', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'uk',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ukrainian', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ur',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Urdu', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'uz',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Uzbek', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'vi',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Vietnamese', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'zu',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Zulu', 'ultimate-addons-for-gutenberg')
    }]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].advance, {
    parentProps: props
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map