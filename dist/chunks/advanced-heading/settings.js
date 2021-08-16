(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/advanced-heading/settings"],{

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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);






 // Extend component

var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes;
  var headingAlign = attributes.headingAlign,
      headingColor = attributes.headingColor,
      subHeadingColor = attributes.subHeadingColor,
      separatorColor = attributes.separatorColor,
      headingTag = attributes.headingTag,
      headFontFamily = attributes.headFontFamily,
      headFontWeight = attributes.headFontWeight,
      headFontSubset = attributes.headFontSubset,
      headFontSizeType = attributes.headFontSizeType,
      headFontSize = attributes.headFontSize,
      headFontSizeMobile = attributes.headFontSizeMobile,
      headFontSizeTablet = attributes.headFontSizeTablet,
      headLineHeightType = attributes.headLineHeightType,
      headLineHeight = attributes.headLineHeight,
      headLineHeightMobile = attributes.headLineHeightMobile,
      headLineHeightTablet = attributes.headLineHeightTablet,
      subHeadFontFamily = attributes.subHeadFontFamily,
      subHeadFontWeight = attributes.subHeadFontWeight,
      subHeadFontSubset = attributes.subHeadFontSubset,
      subHeadFontSize = attributes.subHeadFontSize,
      subHeadFontSizeType = attributes.subHeadFontSizeType,
      subHeadFontSizeMobile = attributes.subHeadFontSizeMobile,
      subHeadFontSizeTablet = attributes.subHeadFontSizeTablet,
      subHeadLineHeight = attributes.subHeadLineHeight,
      subHeadLineHeightType = attributes.subHeadLineHeightType,
      subHeadLineHeightMobile = attributes.subHeadLineHeightMobile,
      subHeadLineHeightTablet = attributes.subHeadLineHeightTablet,
      separatorWidth = attributes.separatorWidth,
      separatorWidthType = attributes.separatorWidthType,
      seperatorStyle = attributes.seperatorStyle,
      separatorHeight = attributes.separatorHeight,
      headSpace = attributes.headSpace,
      separatorSpace = attributes.separatorSpace,
      headLoadGoogleFonts = attributes.headLoadGoogleFonts,
      subHeadLoadGoogleFonts = attributes.subHeadLoadGoogleFonts;
  var loadHeadingGoogleFonts;
  var loadSubHeadingGoogleFonts;

  if (headLoadGoogleFonts === true) {
    var hconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: hconfig
    });
  }

  if (subHeadLoadGoogleFonts === true) {
    var sconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: sconfig
    });
  }

  var blockControlSettings = function blockControlSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["AlignmentToolbar"], {
      value: headingAlign,
      onChange: function onChange(value) {
        return setAttributes({
          headingAlign: value
        });
      }
    }));
  };

  var headingPanel = function headingPanel() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Advanced Heading', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
      value: headingTag,
      onChange: function onChange(value) {
        setAttributes({
          headingTag: value
        });
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
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontSubset: {
        value: headFontSubset,
        label: 'headFontSubset'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: headingColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      value: headingColor,
      onChange: function onChange(value) {
        return setAttributes({
          headingColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Sub-Heading', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontSubset: {
        value: subHeadFontSubset,
        label: 'subHeadFontSubset'
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Sub Heading Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: subHeadingColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      value: subHeadingColor,
      onChange: function onChange(value) {
        return setAttributes({
          subHeadingColor: value
        });
      },
      allowReset: true
    }));
  };

  var seperatorSettings = function seperatorSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Separator', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      value: seperatorStyle,
      onChange: function onChange(value) {
        return setAttributes({
          seperatorStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }]
    }), seperatorStyle !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Thickness (px)', 'ultimate-addons-for-gutenberg'),
      value: separatorHeight,
      onChange: function onChange(value) {
        return setAttributes({
          separatorHeight: value
        });
      },
      min: 0,
      max: 20,
      beforeIcon: "",
      allowReset: true,
      initialPosition: 3
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: separatorWidthType === 'px',
      "aria-pressed": separatorWidthType === 'px',
      onClick: function onClick() {
        return setAttributes({
          separatorWidthType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: separatorWidthType === '%',
      "aria-pressed": separatorWidthType === '%',
      onClick: function onClick() {
        return setAttributes({
          separatorWidthType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      value: separatorWidth,
      onChange: function onChange(value) {
        return setAttributes({
          separatorWidth: value
        });
      },
      min: 0,
      max: '%' === separatorWidthType ? 100 : 500,
      beforeIcon: "",
      allowReset: true,
      initialPosition: 20
    }), seperatorStyle !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Separator Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: separatorColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
      value: separatorColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          separatorColor: colorValue
        });
      },
      allowReset: true
    }))));
  };

  var spacingSettings = function spacingSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading Bottom Spacing (px)', 'ultimate-addons-for-gutenberg'),
      value: headSpace,
      onChange: function onChange(value) {
        return setAttributes({
          headSpace: value
        });
      },
      min: 0,
      max: 500,
      beforeIcon: "",
      allowReset: true,
      initialPosition: 0
    }), seperatorStyle !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Separator Bottom Spacing (px)', 'ultimate-addons-for-gutenberg'),
      value: separatorSpace,
      onChange: function onChange(value) {
        return setAttributes({
          separatorSpace: value
        });
      },
      min: 0,
      max: 500,
      beforeIcon: "",
      allowReset: true,
      initialPosition: 0
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, blockControlSettings(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, headingPanel(), seperatorSettings(), spacingSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, loadHeadingGoogleFonts, loadSubHeadingGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map