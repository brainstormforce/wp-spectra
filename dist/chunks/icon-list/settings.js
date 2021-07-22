(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/icon-list/settings"],{

/***/ "./src/blocks/icon-list/settings.js":
/*!******************************************!*\
  !*** ./src/blocks/icon-list/settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);










var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      deviceType = _props.deviceType,
      clientId = _props.clientId;
  var align = attributes.align,
      gap = attributes.gap,
      inner_gap = attributes.inner_gap,
      stack = attributes.stack,
      icon_layout = attributes.icon_layout,
      iconPosition = attributes.iconPosition,
      size = attributes.size,
      sizeType = attributes.sizeType,
      sizeMobile = attributes.sizeMobile,
      sizeTablet = attributes.sizeTablet,
      hideLabel = attributes.hideLabel,
      borderRadius = attributes.borderRadius,
      bgSize = attributes.bgSize,
      border = attributes.border,
      fontSize = attributes.fontSize,
      fontSizeType = attributes.fontSizeType,
      fontSizeMobile = attributes.fontSizeMobile,
      fontSizeTablet = attributes.fontSizeTablet,
      fontFamily = attributes.fontFamily,
      fontWeight = attributes.fontWeight,
      fontSubset = attributes.fontSubset,
      lineHeight = attributes.lineHeight,
      lineHeightType = attributes.lineHeightType,
      lineHeightMobile = attributes.lineHeightMobile,
      lineHeightTablet = attributes.lineHeightTablet,
      loadGoogleFonts = attributes.loadGoogleFonts;
  var googleFonts;

  if (loadGoogleFonts == true) {
    var hconfig = {
      google: {
        families: [fontFamily + (fontWeight ? ':' + fontWeight : '')]
      }
    };
    googleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: hconfig
    });
  }

  var sizeTypes = [{
    key: 'px',
    name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('px', 'ultimate-addons-for-gutenberg')
  }, {
    key: 'em',
    name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('em', 'ultimate-addons-for-gutenberg')
  }];
  var sizeTypeControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
    className: "uagb-size-type-field",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
  }, sizeTypes.map(function (_ref) {
    var name = _ref.name,
        key = _ref.key;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: key,
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: sizeType === key,
      "aria-pressed": sizeType === key,
      onClick: function onClick() {
        return setAttributes({
          sizeType: key
        });
      }
    }, name);
  }));

  var blockControls = function blockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockAlignmentToolbar"], {
      value: align,
      onChange: function onChange(value) {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right']
    }));
  };

  var changeChildAttr = function changeChildAttr(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["select"])('core/block-editor').getBlocks(clientId);
    getChildBlocks.forEach(function (iconChild) {
      iconChild.attributes.hideLabel = value;
    });
    setAttributes({
      hideLabel: value
    });
  };

  var generalSetting = function generalSetting() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      value: icon_layout,
      options: [{
        value: 'horizontal',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vertical',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return setAttributes({
          icon_layout: value
        });
      }
    }), 'horizontal' == icon_layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Stack on'),
      value: stack,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return setAttributes({
          stack: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: Choose on what breakpoint the Icons will stack.', 'ultimate-addons-for-gutenberg')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Hide Labels', 'ultimate-addons-for-gutenberg'),
      checked: hideLabel,
      onChange: function onChange(value) {
        return changeChildAttr(value);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Gap between Items', 'ultimate-addons-for-gutenberg'),
      value: gap,
      onChange: function onChange(value) {
        return setAttributes({
          gap: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: For better editing experience, the gap between items might look larger than applied.  Viewing in frontend will show the actual results.', 'ultimate-addons-for-gutenberg'),
      min: 0,
      max: 100
    }), !hideLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Gap between Icon and Label', 'ultimate-addons-for-gutenberg'),
      value: inner_gap,
      onChange: function onChange(value) {
        return setAttributes({
          inner_gap: value
        });
      },
      min: 0,
      max: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Alignment', 'ultimate-addons-for-gutenberg'),
      value: iconPosition,
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'middle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Middle', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return setAttributes({
          iconPosition: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: This manages the Icon Position with respect to the Label.', 'ultimate-addons-for-gutenberg')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_2__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, sizeTypeControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Size'),
      value: size,
      onChange: function onChange(value) {
        return setAttributes({
          size: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true,
      initialPosition: 40
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, sizeTypeControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Size'),
      value: sizeTablet,
      onChange: function onChange(value) {
        return setAttributes({
          sizeTablet: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true,
      initialPosition: 40
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, sizeTypeControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Size'),
      value: sizeMobile,
      onChange: function onChange(value) {
        return setAttributes({
          sizeMobile: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true,
      initialPosition: 40
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), !hideLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontSizeType: {
        value: fontSizeType,
        label: 'fontSizeType'
      },
      fontSize: {
        value: fontSize,
        label: 'fontSize'
      },
      fontSizeMobile: {
        value: fontSizeMobile,
        label: 'fontSizeMobile'
      },
      fontSizeTablet: {
        value: fontSizeTablet,
        label: 'fontSizeTablet'
      },
      lineHeightType: {
        value: lineHeightType,
        label: 'lineHeightType'
      },
      lineHeight: {
        value: lineHeight,
        label: 'lineHeight'
      },
      lineHeightMobile: {
        value: lineHeightMobile,
        label: 'lineHeightMobile'
      },
      lineHeightTablet: {
        value: lineHeightTablet,
        label: 'lineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Size', 'ultimate-addons-for-gutenberg'),
      value: bgSize,
      onChange: function onChange(value) {
        return setAttributes({
          bgSize: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: Background Size option is useful when one adds background color to the icons.', 'ultimate-addons-for-gutenberg'),
      min: 0,
      max: 500
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      value: border,
      onChange: function onChange(value) {
        return setAttributes({
          border: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: Border option is useful when one adds border color to the icons.', 'ultimate-addons-for-gutenberg'),
      min: 0,
      max: 10
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          borderRadius: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: Border Radius option is useful when one adds background color to the icons.', 'ultimate-addons-for-gutenberg'),
      min: 0,
      max: 500
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, blockControls(), generalSetting(), googleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map