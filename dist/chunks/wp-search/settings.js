(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/wp-search/settings"],{

/***/ "./src/blocks/wp-search/settings.js":
/*!******************************************!*\
  !*** ./src/blocks/wp-search/settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_box_shadow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/box-shadow */ "./src/components/box-shadow/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");








var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette;

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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      value: layout,
      options: [{
        value: 'input-button',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Classic', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'input',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Minimal', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return setAttributes({
          layout: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Placeholder', 'ultimate-addons-for-gutenberg'),
      value: placeholder,
      onChange: function onChange(value) {
        return setAttributes({
          placeholder: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input Width', 'ultimate-addons-for-gutenberg'),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input Box', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: textColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPalette, {
      value: textColor,
      onChange: function onChange(value) {
        return setAttributes({
          textColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: inputBgColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPalette, {
      value: inputBgColor,
      onChange: function onChange(value) {
        return setAttributes({
          inputBgColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        setAttributes({
          borderStyle: value
        });
      }
    }), 'none' !== borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Thickness (px)', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      onChange: function onChange(value) {
        setAttributes({
          borderWidth: value
        });
      },
      min: 0,
      max: 20
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Rounded Corners (px)', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      max: 50
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPalette, {
      value: borderColor,
      onChange: function onChange(value) {
        return setAttributes({
          borderColor: value
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
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
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
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
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_box_shadow__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Box Shadow', 'ultimate-addons-for-gutenberg'),
      boxShadowColor: {
        value: boxShadowColor,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      boxShadowHOffset: {
        value: boxShadowHOffset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
      },
      boxShadowVOffset: {
        value: boxShadowVOffset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
      },
      boxShadowBlur: {
        value: boxShadowBlur,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Blur', 'ultimate-addons-for-gutenberg')
      },
      boxShadowSpread: {
        value: boxShadowSpread,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spread', 'ultimate-addons-for-gutenberg')
      },
      boxShadowPosition: {
        value: boxShadowPosition,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Position', 'ultimate-addons-for-gutenberg')
      }
    }));
  };

  var buttonSettings = function buttonSettings() {
    if ('input-button' === layout) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button', 'ultimate-addons-for-gutenberg'),
        initialOpen: false,
        className: "uagb__url-panel-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type', 'ultimate-addons-for-gutenberg'),
        value: buttonType,
        options: [{
          value: 'icon',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'text',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text', 'ultimate-addons-for-gutenberg')
        }],
        onChange: function onChange(value) {
          setAttributes({
            buttonType: value
          });
        }
      }), 'text' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextControl, {
        label: "Text",
        value: buttonText,
        onChange: function onChange(value) {
          setAttributes({
            buttonText: value
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
        value: buttonWidth,
        onChange: function onChange(value) {
          setAttributes({
            buttonWidth: value
          });
        },
        min: 0,
        max: 500
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonBgColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPalette, {
        value: buttonBgColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonBgColor: value
          });
        },
        allowReset: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonBgHoverColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPalette, {
        value: buttonBgHoverColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonBgHoverColor: value
          });
        },
        allowReset: true
      }), 'text' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonTextColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPalette, {
        value: buttonTextColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonTextColor: value
          });
        },
        allowReset: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonTextHoverColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPalette, {
        value: buttonTextHoverColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonTextHoverColor: value
          });
        },
        allowReset: true
      }))), 'icon' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "uagb-editor__separator"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
        value: buttonIconSize,
        onChange: function onChange(value) {
          setAttributes({
            buttonIconSize: value
          });
        },
        min: 0,
        max: 500
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonIconColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPalette, {
        value: buttonIconColor,
        onChange: function onChange(value) {
          return setAttributes({
            buttonIconColor: value
          });
        },
        allowReset: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: buttonIconHoverColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPalette, {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
        initialOpen: false,
        className: "uagb__url-panel-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
        value: iconSize,
        onChange: function onChange(value) {
          setAttributes({
            iconSize: value
          });
        },
        min: 0,
        max: 500
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: iconColor
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorPalette, {
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
    loadInputGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    loadButtonGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      config: _qconfig
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InspectorControls, null, generalSettings(), inputSettings(), buttonSettings(), iconSettings()), loadInputGoogleFonts, loadButtonGoogleFonts);
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Box-Shadow reusable component.
 *
 */


 // Extend component



var BoxShadowControl = /*#__PURE__*/function (_Component) {
  _inherits(BoxShadowControl, _Component);

  var _super = _createSuper(BoxShadowControl);

  function BoxShadowControl() {
    var _this;

    _classCallCheck(this, BoxShadowControl);

    _this = _super.apply(this, arguments);
    _this.onAdvancedControlClick = _this.onAdvancedControlClick.bind(_assertThisInitialized(_this));
    _this.onAdvancedControlReset = _this.onAdvancedControlReset.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BoxShadowControl, [{
    key: "onAdvancedControlClick",
    value: function onAdvancedControlClick() {
      var control = true;

      var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Hide Advanced", 'ultimate-addons-for-gutenberg');

      if (this.state !== null && this.state.showAdvancedControls === true) {
        control = false;
        label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Advanced", 'ultimate-addons-for-gutenberg');
      }

      this.setState({
        showAdvancedControls: control,
        showAdvancedControlsLabel: label
      });
    }
  }, {
    key: "onAdvancedControlReset",
    value: function onAdvancedControlReset() {
      var setAttributes = this.props.setAttributes;
      setAttributes({
        boxShadowColor: ""
      });
      setAttributes({
        boxShadowHOffset: ""
      });
      setAttributes({
        boxShadowVOffset: ""
      });
      setAttributes({
        boxShadowBlur: ""
      });
      setAttributes({
        boxShadowSpread: ""
      });
      setAttributes({
        boxShadowPosition: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          boxShadowColor = _this$props.boxShadowColor,
          boxShadowHOffset = _this$props.boxShadowHOffset,
          boxShadowVOffset = _this$props.boxShadowVOffset,
          boxShadowBlur = _this$props.boxShadowBlur,
          boxShadowSpread = _this$props.boxShadowSpread,
          boxShadowPosition = _this$props.boxShadowPosition;
      var advancedControls;
      var boxShadowAdvancedControls;
      var resetBoxShadowAdvancedControls;

      if (this.state !== null && true === this.state.showAdvancedControls) {
        advancedControls = /*#__PURE__*/React.createElement("div", {
          className: "uagb-box-shadow-advanced"
        }, /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("p", {
          className: "uagb-setting-label"
        }, boxShadowColor.label, /*#__PURE__*/React.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/React.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: boxShadowColor.value
          }
        }))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
          value: boxShadowColor.value,
          onChange: function onChange(colorValue) {
            return setAttributes({
              boxShadowColor: colorValue
            });
          },
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowHOffset.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowHOffset.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowHOffset: value
            });
          },
          min: -100,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowVOffset.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowVOffset.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowVOffset: value
            });
          },
          min: -100,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowBlur.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowBlur.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowBlur: value
            });
          },
          min: 0,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowSpread.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowSpread.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowSpread: value
            });
          },
          min: 0,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          label: boxShadowPosition.label,
          value: boxShadowPosition.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowPosition: value
            });
          },
          options: [{
            value: "inset",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Inset", 'ultimate-addons-for-gutenberg')
          }, {
            value: "outset",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Outset", 'ultimate-addons-for-gutenberg')
          }]
        })));
      }

      resetBoxShadowAdvancedControls = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "uagb-size-btn uagb-typography-reset-btn",
        isSmall: true,
        "aria-pressed": this.state !== null,
        onClick: this.onAdvancedControlReset
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "image-rotate"
      }));
      boxShadowAdvancedControls = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "uagb-size-btn uagb-typography-control-btn",
        isSmall: true,
        "aria-pressed": this.state !== null,
        onClick: this.onAdvancedControlClick
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "admin-tools"
      }));
      return /*#__PURE__*/React.createElement("div", {
        className: "uag-typography-option-actions"
      }, /*#__PURE__*/React.createElement("span", null, this.props.label), boxShadowAdvancedControls, resetBoxShadowAdvancedControls, advancedControls);
    }
  }]);

  return BoxShadowControl;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Component"]);

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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

if (googlefonts === undefined) {
  var googlefonts = [];
}




var statuses = {
  inactive: "inactive",
  active: "active",
  loading: "loading"
};

var noop = function noop() {};

var WebfontLoader = /*#__PURE__*/function (_Component) {
  _inherits(WebfontLoader, _Component);

  var _super = _createSuper(WebfontLoader);

  function WebfontLoader(props) {
    var _this;

    _classCallCheck(this, WebfontLoader);

    _this = _super.call(this, props);
    _this.state = {
      status: undefined
    };

    _this.handleLoading = function () {
      _this.setState({
        status: statuses.loading
      });
    };

    _this.addFont = function (font) {
      if (!googlefonts.includes(font)) {
        googlefonts.push(font);
      }
    };

    _this.handleActive = function () {
      _this.setState({
        status: statuses.active
      });
    };

    _this.handleInactive = function () {
      _this.setState({
        status: statuses.inactive
      });
    };

    _this.loadFonts = function () {
      //if ( ! this.state.fonts.includes( this.props.config.google.families[ 0 ] ) ) {
      if (!googlefonts.includes(_this.props.config.google.families[0])) {
        webfontloader__WEBPACK_IMPORTED_MODULE_2___default.a.load(_objectSpread(_objectSpread({}, _this.props.config), {}, {
          loading: _this.handleLoading,
          active: _this.handleActive,
          inactive: _this.handleInactive
        }));

        _this.addFont(_this.props.config.google.families[0]);
      }
    };

    return _this;
  }

  _createClass(WebfontLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadFonts();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          onStatus = _this$props.onStatus,
          config = _this$props.config;

      if (prevState.status !== this.state.status) {
        onStatus(this.state.status);
      }

      if (prevProps.config !== config) {
        this.loadFonts();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children || null;
    }
  }]);

  return WebfontLoader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WebfontLoader.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  onStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ })

}]);
//# sourceMappingURL=settings.js.map