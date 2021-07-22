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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      setAttributes = _props.setAttributes,
      _props$attributes = _props.attributes,
      height = _props$attributes.height,
      zoom = _props$attributes.zoom,
      address = _props$attributes.address,
      language = _props$attributes.language;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-settings-notice"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("This block uses Ultimate Addon for Gutenberg's API key to display the map. You don't need to create your own API key or worry about renewing it.", 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "components-base-control__label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Address', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    value: address,
    onChange: function onChange(value) {
      return setAttributes({
        address: value
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type the address', 'ultimate-addons-for-gutenberg')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Zoom', 'ultimate-addons-for-gutenberg'),
    value: zoom,
    onChange: function onChange(value) {
      return setAttributes({
        zoom: value
      });
    },
    min: 1,
    max: 22,
    beforeIcon: "editor-textcolor",
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
    value: height,
    onChange: function onChange(value) {
      return setAttributes({
        height: value
      });
    },
    min: 0,
    max: 1000,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Language', 'ultimate-addons-for-gutenberg'),
    value: language,
    onChange: function onChange(value) {
      return setAttributes({
        language: value
      });
    },
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
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map