(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/wp-search/settings"],{

/***/ "./src/blocks/wp-search/settings.js":
/*!******************************************!*\
  !*** ./src/blocks/wp-search/settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_box_shadow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/box-shadow */ "./src/components/box-shadow/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);










var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      deviceType = _props.deviceType;
  var layout = attributes.layout,
      placeholder = attributes.placeholder,
      inputSize = attributes.inputSize,
      textColor = attributes.textColor,
      inputBgColor = attributes.inputBgColor,
      boxShadowColor = attributes.boxShadowColor,
      boxShadowHOffset = attributes.boxShadowHOffset,
      boxShadowVOffset = attributes.boxShadowVOffset,
      boxShadowBlur = attributes.boxShadowBlur,
      boxShadowSpread = attributes.boxShadowSpread,
      boxShadowPosition = attributes.boxShadowPosition,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      borderColor = attributes.borderColor,
      buttonBgColor = attributes.buttonBgColor,
      buttonBgHoverColor = attributes.buttonBgHoverColor,
      buttonIconColor = attributes.buttonIconColor,
      buttonIconHoverColor = attributes.buttonIconHoverColor,
      buttonWidth = attributes.buttonWidth,
      buttonIconSize = attributes.buttonIconSize,
      iconColor = attributes.iconColor,
      iconSize = attributes.iconSize,
      inputloadGoogleFonts = attributes.inputloadGoogleFonts,
      inputFontFamily = attributes.inputFontFamily,
      inputFontWeight = attributes.inputFontWeight,
      inputFontSubset = attributes.inputFontSubset,
      inputFontSize = attributes.inputFontSize,
      inputFontSizeType = attributes.inputFontSizeType,
      inputFontSizeTablet = attributes.inputFontSizeTablet,
      inputFontSizeMobile = attributes.inputFontSizeMobile,
      inputLineHeight = attributes.inputLineHeight,
      inputLineHeightType = attributes.inputLineHeightType,
      inputLineHeightTablet = attributes.inputLineHeightTablet,
      inputLineHeightMobile = attributes.inputLineHeightMobile,
      inputPaddingTypeDesktop = attributes.inputPaddingTypeDesktop,
      vinputPaddingMobile = attributes.vinputPaddingMobile,
      vinputPaddingTablet = attributes.vinputPaddingTablet,
      vinputPaddingDesktop = attributes.vinputPaddingDesktop,
      hinputPaddingMobile = attributes.hinputPaddingMobile,
      hinputPaddingTablet = attributes.hinputPaddingTablet,
      hinputPaddingDesktop = attributes.hinputPaddingDesktop,
      buttonType = attributes.buttonType,
      buttonText = attributes.buttonText,
      buttonloadGoogleFonts = attributes.buttonloadGoogleFonts,
      buttonFontFamily = attributes.buttonFontFamily,
      buttonFontWeight = attributes.buttonFontWeight,
      buttonFontSubset = attributes.buttonFontSubset,
      buttonFontSize = attributes.buttonFontSize,
      buttonFontSizeType = attributes.buttonFontSizeType,
      buttonFontSizeTablet = attributes.buttonFontSizeTablet,
      buttonFontSizeMobile = attributes.buttonFontSizeMobile,
      buttonLineHeight = attributes.buttonLineHeight,
      buttonLineHeightType = attributes.buttonLineHeightType,
      buttonLineHeightTablet = attributes.buttonLineHeightTablet,
      buttonLineHeightMobile = attributes.buttonLineHeightMobile,
      buttonTextColor = attributes.buttonTextColor,
      buttonTextHoverColor = attributes.buttonTextHoverColor,
      inputSizeType = attributes.inputSizeType;

  var generalSettings = function generalSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      value: layout,
      options: [{
        value: 'input-button',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Classic', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'input',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Minimal', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return setAttributes({
          layout: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Placeholder', 'ultimate-addons-for-gutenberg'),
      value: placeholder,
      onChange: function onChange(value) {
        return setAttributes({
          placeholder: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: inputSizeType === 'px',
      "aria-pressed": inputSizeType === 'px',
      onClick: function onClick() {
        return setAttributes({
          inputSizeType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: inputSizeType === '%',
      "aria-pressed": inputSizeType === '%',
      onClick: function onClick() {
        return setAttributes({
          inputSizeType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Input Width', 'ultimate-addons-for-gutenberg'),
      value: inputSize,
      onChange: function onChange(value) {
        return setAttributes({
          inputSize: value
        });
      },
      min: 0,
      max: 'px' === inputSizeType ? 500 : 100
    })));
  };

  var inputSettings = function inputSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Input Box', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: textColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: textColor,
      onChange: function onChange(value) {
        return setAttributes({
          textColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: inputBgColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: inputBgColor,
      onChange: function onChange(value) {
        return setAttributes({
          inputBgColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        setAttributes({
          borderStyle: value
        });
      }
    }), 'none' !== borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Thickness (px)', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      onChange: function onChange(value) {
        setAttributes({
          borderWidth: value
        });
      },
      min: 0,
      max: 20
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Rounded Corners (px)', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      max: 50
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: borderColor,
      onChange: function onChange(value) {
        return setAttributes({
          borderColor: value
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_2__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: inputPaddingTypeDesktop === 'px',
      "aria-pressed": inputPaddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          inputPaddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: inputPaddingTypeDesktop === '%',
      "aria-pressed": inputPaddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          inputPaddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vinputPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          vinputPaddingDesktop: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hinputPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          hinputPaddingDesktop: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: inputPaddingTypeDesktop === 'px',
      "aria-pressed": inputPaddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          inputPaddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: inputPaddingTypeDesktop === '%',
      "aria-pressed": inputPaddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          inputPaddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vinputPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          vinputPaddingTablet: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hinputPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          hinputPaddingTablet: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: inputPaddingTypeDesktop === 'px',
      "aria-pressed": inputPaddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          inputPaddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: inputPaddingTypeDesktop === '%',
      "aria-pressed": inputPaddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          inputPaddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vinputPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          vinputPaddingMobile: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hinputPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          hinputPaddingMobile: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: inputloadGoogleFonts,
        label: 'inputloadGoogleFonts'
      },
      fontFamily: {
        value: inputFontFamily,
        label: 'inputFontFamily'
      },
      fontWeight: {
        value: inputFontWeight,
        label: 'inputFontWeight'
      },
      fontSubset: {
        value: inputFontSubset,
        label: 'inputFontSubset'
      },
      fontSizeType: {
        value: inputFontSizeType,
        label: 'inputFontSizeType'
      },
      fontSize: {
        value: inputFontSize,
        label: 'inputFontSize'
      },
      fontSizeMobile: {
        value: inputFontSizeMobile,
        label: 'inputFontSizeMobile'
      },
      fontSizeTablet: {
        value: inputFontSizeTablet,
        label: 'inputFontSizeTablet'
      },
      lineHeightType: {
        value: inputLineHeightType,
        label: 'inputLineHeightType'
      },
      lineHeight: {
        value: inputLineHeight,
        label: 'inputLineHeight'
      },
      lineHeightMobile: {
        value: inputLineHeightMobile,
        label: 'inputLineHeightMobile'
      },
      lineHeightTablet: {
        value: inputLineHeightTablet,
        label: 'inputLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_box_shadow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Box Shadow', 'ultimate-addons-for-gutenberg'),
      boxShadowColor: {
        value: boxShadowColor,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      boxShadowHOffset: {
        value: boxShadowHOffset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
      },
      boxShadowVOffset: {
        value: boxShadowVOffset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
      },
      boxShadowBlur: {
        value: boxShadowBlur,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Blur', 'ultimate-addons-for-gutenberg')
      },
      boxShadowSpread: {
        value: boxShadowSpread,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Spread', 'ultimate-addons-for-gutenberg')
      },
      boxShadowPosition: {
        value: boxShadowPosition,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Position', 'ultimate-addons-for-gutenberg')
      }
    }));
  };

  var buttonSettings = function buttonSettings() {
    if ('input-button' === layout) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Button', 'ultimate-addons-for-gutenberg'),
        initialOpen: false,
        className: "uagb__url-panel-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Type', 'ultimate-addons-for-gutenberg'),
        value: buttonType,
        options: [{
          value: 'icon',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'text',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Text', 'ultimate-addons-for-gutenberg')
        }],
        onChange: function onChange(value) {
          setAttributes({
            buttonType: value
          });
        }
      }), 'text' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: "Text",
        value: buttonText,
        onChange: function onChange(value) {
          setAttributes({
            buttonText: value
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
        attributes: attributes,
        setAttributes: setAttributes,
        loadGoogleFonts: {
          value: buttonloadGoogleFonts,
          label: 'buttonloadGoogleFonts'
        },
        fontFamily: {
          value: buttonFontFamily,
          label: 'buttonFontFamily'
        },
        fontWeight: {
          value: buttonFontWeight,
          label: 'buttonFontWeight'
        },
        fontSubset: {
          value: buttonFontSubset,
          label: 'buttonFontSubset'
        },
        fontSizeType: {
          value: buttonFontSizeType,
          label: 'buttonFontSizeType'
        },
        fontSize: {
          value: buttonFontSize,
          label: 'buttonFontSize'
        },
        fontSizeMobile: {
          value: buttonFontSizeMobile,
          label: 'buttonFontSizeMobile'
        },
        fontSizeTablet: {
          value: buttonFontSizeTablet,
          label: 'buttonFontSizeTablet'
        },
        lineHeightType: {
          value: buttonLineHeightType,
          label: 'buttonLineHeightType'
        },
        lineHeight: {
          value: buttonLineHeight,
          label: 'buttonLineHeight'
        },
        lineHeightMobile: {
          value: buttonLineHeightMobile,
          label: 'buttonLineHeightMobile'
        },
        lineHeightTablet: {
          value: buttonLineHeightTablet,
          label: 'buttonLineHeightTablet'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Width', 'ultimate-addons-for-gutenberg'),
        value: buttonWidth,
        onChange: function onChange(value) {
          setAttributes({
            buttonWidth: value
          });
        },
        min: 0,
        max: 500
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonBgColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
        value: buttonBgColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonBgColor: value
          });
        },
        allowReset: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonBgHoverColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
        value: buttonBgHoverColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonBgHoverColor: value
          });
        },
        allowReset: true
      }), 'text' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonTextColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
        value: buttonTextColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonTextColor: value
          });
        },
        allowReset: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Text Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonTextHoverColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
        value: buttonTextHoverColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonTextHoverColor: value
          });
        },
        allowReset: true
      }))), 'icon' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "uagb-editor__separator"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size', 'ultimate-addons-for-gutenberg'),
        value: buttonIconSize,
        onChange: function onChange(value) {
          setAttributes({
            buttonIconSize: value
          });
        },
        min: 0,
        max: 500
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonIconColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
        value: buttonIconColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonIconColor: value
          });
        },
        allowReset: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonIconHoverColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
        value: buttonIconHoverColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonIconHoverColor: value
          });
        },
        allowReset: true
      }))));
    }

    return '';
  };

  var iconSettings = function iconSettings() {
    if ('input' === layout) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
        initialOpen: false,
        className: "uagb__url-panel-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size', 'ultimate-addons-for-gutenberg'),
        value: iconSize,
        onChange: function onChange(value) {
          setAttributes({
            iconSize: value
          });
        },
        min: 0,
        max: 500
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: iconColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
        value: iconColor,
        onChange: function onChange(value) {
          return setAttributes({
            iconColor: value
          });
        },
        allowReset: true
      })));
    }

    return '';
  };

  var loadInputGoogleFonts;

  if (inputloadGoogleFonts == true) {
    var qconfig = {
      google: {
        families: [inputFontFamily + (inputFontWeight ? ':' + inputFontWeight : '')]
      }
    };
    loadInputGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: qconfig
    });
  }

  var loadButtonGoogleFonts;

  if (buttonloadGoogleFonts == true) {
    var _qconfig = {
      google: {
        families: [buttonFontFamily + (buttonFontWeight ? ':' + buttonFontWeight : '')]
      }
    };
    loadButtonGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: _qconfig
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, generalSettings(), inputSettings(), buttonSettings(), iconSettings()), loadInputGoogleFonts, loadButtonGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map