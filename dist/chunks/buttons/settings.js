(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/buttons/settings"],{

/***/ "./src/blocks/buttons/settings.js":
/*!****************************************!*\
  !*** ./src/blocks/buttons/settings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");








var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes;
  var align = attributes.align,
      gap = attributes.gap,
      stack = attributes.stack,
      loadGoogleFonts = attributes.loadGoogleFonts,
      fontFamily = attributes.fontFamily,
      fontWeight = attributes.fontWeight,
      fontSubset = attributes.fontSubset;
  var loadBtnGoogleFonts;

  if (loadGoogleFonts == true) {
    var btnconfig = {
      google: {
        families: [fontFamily + (fontWeight ? ':' + fontWeight : '')]
      }
    };
    loadBtnGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: btnconfig
    });
  }

  var generalSettings = function generalSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"].VisualLabel, null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockAlignmentToolbar"], {
      value: align,
      onChange: function onChange(value) {
        return setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right', 'full'],
      isCollapsed: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spacing', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Gap Between Buttons', 'ultimate-addons-for-gutenberg'),
      value: gap,
      onChange: function onChange(value) {
        return setAttributes({
          gap: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: The gap between the buttons will seem larger in the editor, for better user edit experience. But at frontend the gap will be exactly what is set from here.', 'ultimate-addons-for-gutenberg'),
      min: 0,
      max: 500
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
      value: stack,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'desktop',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Desktop', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return setAttributes({
          stack: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: Choose on what breakpoint the buttons will stack.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: loadGoogleFonts,
        label: 'loadGoogleFonts'
      },
      fontFamily: {
        value: fontFamily,
        label: 'fontFamily'
      },
      fontWeight: {
        value: fontWeight,
        label: 'fontWeight'
      },
      fontSubset: {
        value: fontSubset,
        label: 'fontSubset'
      },
      disableFontSize: true,
      disableLineHeight: true
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_0__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, generalSettings()), loadBtnGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map