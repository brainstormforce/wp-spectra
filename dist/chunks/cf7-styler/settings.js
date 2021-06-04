(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/cf7-styler/settings"],{

/***/ "./src/blocks/cf7-styler/settings.js":
/*!*******************************************!*\
  !*** ./src/blocks/cf7-styler/settings.js ***!
  \*******************************************/
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
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);









var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      setAttributes = _props.setAttributes,
      attributes = _props.attributes;
  var formId = attributes.formId,
      align = attributes.align,
      fieldStyle = attributes.fieldStyle,
      fieldVrPadding = attributes.fieldVrPadding,
      fieldHrPadding = attributes.fieldHrPadding,
      fieldBgColor = attributes.fieldBgColor,
      fieldLabelColor = attributes.fieldLabelColor,
      fieldInputColor = attributes.fieldInputColor,
      fieldBorderStyle = attributes.fieldBorderStyle,
      fieldBorderWidth = attributes.fieldBorderWidth,
      fieldBorderRadius = attributes.fieldBorderRadius,
      fieldBorderColor = attributes.fieldBorderColor,
      fieldBorderFocusColor = attributes.fieldBorderFocusColor,
      buttonAlignment = attributes.buttonAlignment,
      buttonVrPadding = attributes.buttonVrPadding,
      buttonHrPadding = attributes.buttonHrPadding,
      buttonTextColor = attributes.buttonTextColor,
      buttonBgColor = attributes.buttonBgColor,
      buttonTextHoverColor = attributes.buttonTextHoverColor,
      buttonBgHoverColor = attributes.buttonBgHoverColor,
      buttonBorderStyle = attributes.buttonBorderStyle,
      buttonBorderWidth = attributes.buttonBorderWidth,
      buttonBorderRadius = attributes.buttonBorderRadius,
      buttonBorderColor = attributes.buttonBorderColor,
      buttonBorderHoverColor = attributes.buttonBorderHoverColor,
      fieldSpacing = attributes.fieldSpacing,
      fieldLabelSpacing = attributes.fieldLabelSpacing,
      labelFontSize = attributes.labelFontSize,
      labelFontSizeType = attributes.labelFontSizeType,
      labelFontSizeTablet = attributes.labelFontSizeTablet,
      labelFontSizeMobile = attributes.labelFontSizeMobile,
      labelFontFamily = attributes.labelFontFamily,
      labelFontWeight = attributes.labelFontWeight,
      labelFontSubset = attributes.labelFontSubset,
      labelLineHeightType = attributes.labelLineHeightType,
      labelLineHeight = attributes.labelLineHeight,
      labelLineHeightTablet = attributes.labelLineHeightTablet,
      labelLineHeightMobile = attributes.labelLineHeightMobile,
      labelLoadGoogleFonts = attributes.labelLoadGoogleFonts,
      inputFontSize = attributes.inputFontSize,
      inputFontSizeType = attributes.inputFontSizeType,
      inputFontSizeTablet = attributes.inputFontSizeTablet,
      inputFontSizeMobile = attributes.inputFontSizeMobile,
      inputFontFamily = attributes.inputFontFamily,
      inputFontWeight = attributes.inputFontWeight,
      inputFontSubset = attributes.inputFontSubset,
      inputLineHeightType = attributes.inputLineHeightType,
      inputLineHeight = attributes.inputLineHeight,
      inputLineHeightTablet = attributes.inputLineHeightTablet,
      inputLineHeightMobile = attributes.inputLineHeightMobile,
      inputLoadGoogleFonts = attributes.inputLoadGoogleFonts,
      buttonFontSize = attributes.buttonFontSize,
      buttonFontSizeType = attributes.buttonFontSizeType,
      buttonFontSizeTablet = attributes.buttonFontSizeTablet,
      buttonFontSizeMobile = attributes.buttonFontSizeMobile,
      buttonFontFamily = attributes.buttonFontFamily,
      buttonFontWeight = attributes.buttonFontWeight,
      buttonFontSubset = attributes.buttonFontSubset,
      buttonLineHeightType = attributes.buttonLineHeightType,
      buttonLineHeight = attributes.buttonLineHeight,
      buttonLineHeightTablet = attributes.buttonLineHeightTablet,
      buttonLineHeightMobile = attributes.buttonLineHeightMobile,
      buttonLoadGoogleFonts = attributes.buttonLoadGoogleFonts,
      enableOveride = attributes.enableOveride,
      radioCheckSize = attributes.radioCheckSize,
      radioCheckBgColor = attributes.radioCheckBgColor,
      radioCheckSelectColor = attributes.radioCheckSelectColor,
      radioCheckLableColor = attributes.radioCheckLableColor,
      radioCheckBorderColor = attributes.radioCheckBorderColor,
      radioCheckBorderWidth = attributes.radioCheckBorderWidth,
      radioCheckBorderRadius = attributes.radioCheckBorderRadius,
      radioCheckFontSize = attributes.radioCheckFontSize,
      radioCheckFontSizeType = attributes.radioCheckFontSizeType,
      radioCheckFontSizeTablet = attributes.radioCheckFontSizeTablet,
      radioCheckFontSizeMobile = attributes.radioCheckFontSizeMobile,
      radioCheckFontFamily = attributes.radioCheckFontFamily,
      radioCheckFontWeight = attributes.radioCheckFontWeight,
      radioCheckFontSubset = attributes.radioCheckFontSubset,
      radioCheckLineHeightType = attributes.radioCheckLineHeightType,
      radioCheckLineHeight = attributes.radioCheckLineHeight,
      radioCheckLineHeightTablet = attributes.radioCheckLineHeightTablet,
      radioCheckLineHeightMobile = attributes.radioCheckLineHeightMobile,
      radioCheckLoadGoogleFonts = attributes.radioCheckLoadGoogleFonts,
      validationMsgPosition = attributes.validationMsgPosition,
      validationMsgColor = attributes.validationMsgColor,
      validationMsgBgColor = attributes.validationMsgBgColor,
      enableHighlightBorder = attributes.enableHighlightBorder,
      highlightBorderColor = attributes.highlightBorderColor,
      validationMsgFontSize = attributes.validationMsgFontSize,
      validationMsgFontSizeType = attributes.validationMsgFontSizeType,
      validationMsgFontSizeTablet = attributes.validationMsgFontSizeTablet,
      validationMsgFontSizeMobile = attributes.validationMsgFontSizeMobile,
      validationMsgFontFamily = attributes.validationMsgFontFamily,
      validationMsgFontWeight = attributes.validationMsgFontWeight,
      validationMsgFontSubset = attributes.validationMsgFontSubset,
      validationMsgLineHeightType = attributes.validationMsgLineHeightType,
      validationMsgLineHeight = attributes.validationMsgLineHeight,
      validationMsgLineHeightTablet = attributes.validationMsgLineHeightTablet,
      validationMsgLineHeightMobile = attributes.validationMsgLineHeightMobile,
      validationMsgLoadGoogleFonts = attributes.validationMsgLoadGoogleFonts,
      successMsgColor = attributes.successMsgColor,
      successMsgBgColor = attributes.successMsgBgColor,
      successMsgBorderColor = attributes.successMsgBorderColor,
      errorMsgColor = attributes.errorMsgColor,
      errorMsgBgColor = attributes.errorMsgBgColor,
      errorMsgBorderColor = attributes.errorMsgBorderColor,
      msgBorderSize = attributes.msgBorderSize,
      msgBorderRadius = attributes.msgBorderRadius,
      msgVrPadding = attributes.msgVrPadding,
      msgHrPadding = attributes.msgHrPadding,
      msgFontSize = attributes.msgFontSize,
      msgFontSizeType = attributes.msgFontSizeType,
      msgFontSizeTablet = attributes.msgFontSizeTablet,
      msgFontSizeMobile = attributes.msgFontSizeMobile,
      msgFontFamily = attributes.msgFontFamily,
      msgFontWeight = attributes.msgFontWeight,
      msgFontSubset = attributes.msgFontSubset,
      msgLineHeightType = attributes.msgLineHeightType,
      msgLineHeight = attributes.msgLineHeight,
      msgLineHeightTablet = attributes.msgLineHeightTablet,
      msgLineHeightMobile = attributes.msgLineHeightMobile,
      msgLoadGoogleFonts = attributes.msgLoadGoogleFonts,
      radioCheckBorderRadiusType = attributes.radioCheckBorderRadiusType,
      msgBorderRadiusType = attributes.msgBorderRadiusType,
      fieldBorderRadiusType = attributes.fieldBorderRadiusType,
      buttonBorderRadiusType = attributes.buttonBorderRadiusType;
  var loadInputGoogleFonts;
  var loadButtonGoogleFonts;
  var loadLabelGoogleFonts;
  var loadRadioGoogleFonts;
  var loadValidationGoogleFonts;
  var loadMsgGoogleFonts;

  if (labelLoadGoogleFonts == true) {
    var labelconfig = {
      google: {
        families: [labelFontFamily + (labelFontWeight ? ':' + labelFontWeight : '')]
      }
    };
    loadLabelGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: labelconfig
    });
  }

  if (inputLoadGoogleFonts == true) {
    var inputconfig = {
      google: {
        families: [inputFontFamily + (inputFontWeight ? ':' + inputFontWeight : '')]
      }
    };
    loadInputGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: inputconfig
    });
  }

  if (buttonLoadGoogleFonts == true) {
    var buttonconfig = {
      google: {
        families: [buttonFontFamily + (buttonFontWeight ? ':' + buttonFontWeight : '')]
      }
    };
    loadButtonGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: buttonconfig
    });
  }

  if (radioCheckLoadGoogleFonts == true) {
    var radioCheckconfig = {
      google: {
        families: [radioCheckFontFamily + (radioCheckFontWeight ? ':' + radioCheckFontWeight : '')]
      }
    };
    loadRadioGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: radioCheckconfig
    });
  }

  if (validationMsgLoadGoogleFonts == true) {
    var validationMsgconfig = {
      google: {
        families: [validationMsgFontFamily + (validationMsgFontWeight ? ':' + validationMsgFontWeight : '')]
      }
    };
    loadValidationGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: validationMsgconfig
    });
  }

  if (msgLoadGoogleFonts == true) {
    var msgconfig = {
      google: {
        families: [msgFontFamily + (msgFontWeight ? ':' + msgFontWeight : '')]
      }
    };
    loadMsgGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: msgconfig
    });
  }

  var fieldSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Form', 'ultimate-addons-for-gutenberg'),
    value: formId,
    onChange: onSelectForm,
    options: uagb_blocks_info.cf7_forms
  }));
  var fieldBorderSetting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Field Style & Border', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Field Style', 'ultimate-addons-for-gutenberg'),
    value: fieldStyle,
    onChange: function onChange(value) {
      return setAttributes({
        fieldStyle: value
      });
    },
    options: [{
      value: 'box',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Box', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'underline',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Underline', 'ultimate-addons-for-gutenberg')
    }]
  }), fieldStyle == 'box' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
    value: fieldBorderStyle,
    onChange: function onChange(value) {
      return setAttributes({
        fieldBorderStyle: value
      });
    },
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
    }, {
      value: 'groove',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Groove', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'inset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'outset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Outset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ridge',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
    }]
  }), ('none' != fieldBorderStyle || fieldStyle == 'underline') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Width (px)', 'ultimate-addons-for-gutenberg'),
    value: fieldBorderWidth,
    onChange: function onChange(value) {
      return setAttributes({
        fieldBorderWidth: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    className: "uagb-size-type-field",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'px',
    className: "uagb-size-btn",
    isSmall: true,
    isPrimary: fieldBorderRadiusType === 'px',
    "aria-pressed": fieldBorderRadiusType === 'px',
    onClick: function onClick() {
      return setAttributes({
        fieldBorderRadiusType: 'px'
      });
    }
  }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: '%',
    className: "uagb-size-btn",
    isSmall: true,
    isPrimary: fieldBorderRadiusType === '%',
    "aria-pressed": fieldBorderRadiusType === '%',
    onClick: function onClick() {
      return setAttributes({
        fieldBorderRadiusType: '%'
      });
    }
  }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
    value: fieldBorderRadius,
    onChange: function onChange(value) {
      return setAttributes({
        fieldBorderRadius: value
      });
    },
    min: 0,
    max: 100,
    allowReset: true
  }), ('none' != fieldBorderStyle || fieldStyle == 'underline') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: fieldBorderColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: fieldBorderColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        fieldBorderColor: colorValue
      });
    },
    allowReset: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Active Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: fieldBorderFocusColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: fieldBorderFocusColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        fieldBorderFocusColor: colorValue
      });
    },
    allowReset: true
  }));
  var typographySettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: labelLoadGoogleFonts,
      label: 'labelLoadGoogleFonts'
    },
    fontFamily: {
      value: labelFontFamily,
      label: 'labelFontFamily'
    },
    fontWeight: {
      value: labelFontWeight,
      label: 'labelFontWeight'
    },
    fontSubset: {
      value: labelFontSubset,
      label: 'labelFontSubset'
    },
    fontSizeType: {
      value: labelFontSizeType,
      label: 'labelFontSizeType'
    },
    fontSize: {
      value: labelFontSize,
      label: 'labelFontSize'
    },
    fontSizeMobile: {
      value: labelFontSizeMobile,
      label: 'labelFontSizeMobile'
    },
    fontSizeTablet: {
      value: labelFontSizeTablet,
      label: 'labelFontSizeTablet'
    },
    lineHeightType: {
      value: labelLineHeightType,
      label: 'labelLineHeightType'
    },
    lineHeight: {
      value: labelLineHeight,
      label: 'labelLineHeight'
    },
    lineHeightMobile: {
      value: labelLineHeightMobile,
      label: 'labelLineHeightMobile'
    },
    lineHeightTablet: {
      value: labelLineHeightTablet,
      label: 'labelLineHeightTablet'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: fieldLabelColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: fieldLabelColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        fieldLabelColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: inputLoadGoogleFonts,
      label: 'inputLoadGoogleFonts'
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: fieldInputColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: fieldInputColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        fieldInputColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Field Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: fieldBgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: fieldBgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        fieldBgColor: colorValue
      });
    },
    allowReset: true
  }));
  var radioCheckSetting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radio & Checkbox', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Override Current Style', 'ultimate-addons-for-gutenberg'),
    checked: enableOveride,
    onChange: function onChange(value) {
      return setAttributes({
        enableOveride: !enableOveride
      });
    }
  }), enableOveride && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
    value: radioCheckSize,
    onChange: function onChange(value) {
      return setAttributes({
        radioCheckSize: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radio & Checkbox Label', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: radioCheckLoadGoogleFonts,
      label: 'radioCheckLoadGoogleFonts'
    },
    fontFamily: {
      value: radioCheckFontFamily,
      label: 'radioCheckFontFamily'
    },
    fontWeight: {
      value: radioCheckFontWeight,
      label: 'radioCheckFontWeight'
    },
    fontSubset: {
      value: radioCheckFontSubset,
      label: 'radioCheckFontSubset'
    },
    fontSizeType: {
      value: radioCheckFontSizeType,
      label: 'radioCheckFontSizeType'
    },
    fontSize: {
      value: radioCheckFontSize,
      label: 'radioCheckFontSize'
    },
    fontSizeMobile: {
      value: radioCheckFontSizeMobile,
      label: 'radioCheckFontSizeMobile'
    },
    fontSizeTablet: {
      value: radioCheckFontSizeTablet,
      label: 'radioCheckFontSizeTablet'
    },
    lineHeightType: {
      value: radioCheckLineHeightType,
      label: 'radioCheckLineHeightType'
    },
    lineHeight: {
      value: radioCheckLineHeight,
      label: 'radioCheckLineHeight'
    },
    lineHeightMobile: {
      value: radioCheckLineHeightMobile,
      label: 'radioCheckLineHeightMobile'
    },
    lineHeightTablet: {
      value: radioCheckLineHeightTablet,
      label: 'radioCheckLineHeightTablet'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: radioCheckLableColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: radioCheckLableColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        radioCheckLableColor: colorValue
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
      backgroundColor: radioCheckBgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: radioCheckBgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        radioCheckBgColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Selected Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: radioCheckSelectColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: radioCheckSelectColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        radioCheckSelectColor: colorValue
      });
    },
    allowReset: true
  }), fieldBorderStyle !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radio & Checkbox Border')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Width (px)', 'ultimate-addons-for-gutenberg'),
    value: radioCheckBorderWidth,
    onChange: function onChange(value) {
      return setAttributes({
        radioCheckBorderWidth: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    className: "uagb-size-type-field",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'px',
    className: "uagb-size-btn",
    isSmall: true,
    isPrimary: radioCheckBorderRadiusType === 'px',
    "aria-pressed": radioCheckBorderRadiusType === 'px',
    onClick: function onClick() {
      return setAttributes({
        radioCheckBorderRadiusType: 'px'
      });
    }
  }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: '%',
    className: "uagb-size-btn",
    isSmall: true,
    isPrimary: radioCheckBorderRadiusType === '%',
    "aria-pressed": radioCheckBorderRadiusType === '%',
    onClick: function onClick() {
      return setAttributes({
        radioCheckBorderRadiusType: '%'
      });
    }
  }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
    value: radioCheckBorderRadius,
    onChange: function onChange(value) {
      return setAttributes({
        radioCheckBorderRadius: value
      });
    },
    min: 0,
    max: 100,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: radioCheckBorderColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: radioCheckBorderColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        radioCheckBorderColor: colorValue
      });
    },
    allowReset: true
  })))); //Submit button settings.

  var btn_border_setting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
    value: buttonBorderStyle,
    onChange: function onChange(value) {
      return setAttributes({
        buttonBorderStyle: value
      });
    },
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
    }, {
      value: 'groove',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Groove', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'inset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'outset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Outset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ridge',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
    }]
  }), 'none' != buttonBorderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Width (px)', 'ultimate-addons-for-gutenberg'),
    value: buttonBorderWidth,
    onChange: function onChange(value) {
      return setAttributes({
        buttonBorderWidth: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    className: "uagb-size-type-field",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'px',
    className: "uagb-size-btn",
    isSmall: true,
    isPrimary: buttonBorderRadiusType === 'px',
    "aria-pressed": buttonBorderRadiusType === 'px',
    onClick: function onClick() {
      return setAttributes({
        buttonBorderRadiusType: 'px'
      });
    }
  }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: '%',
    className: "uagb-size-btn",
    isSmall: true,
    isPrimary: buttonBorderRadiusType === '%',
    "aria-pressed": buttonBorderRadiusType === '%',
    onClick: function onClick() {
      return setAttributes({
        buttonBorderRadiusType: '%'
      });
    }
  }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
    value: buttonBorderRadius,
    onChange: function onChange(value) {
      return setAttributes({
        buttonBorderRadius: value
      });
    },
    min: 0,
    max: 100,
    allowReset: true
  }));
  var msgSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success / Error Message', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-settings-notice"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Note: This styling can be only seen at frontend', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Field Validation', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Validation Message Position', 'ultimate-addons-for-gutenberg'),
    value: validationMsgPosition,
    onChange: function onChange(value) {
      return setAttributes({
        validationMsgPosition: value
      });
    },
    options: [{
      value: 'default',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Default', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bottom_right',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Right Side of Field', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Validation Font', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: validationMsgLoadGoogleFonts,
      label: 'validationMsgLoadGoogleFonts'
    },
    fontFamily: {
      value: validationMsgFontFamily,
      label: 'validationMsgFontFamily'
    },
    fontWeight: {
      value: validationMsgFontWeight,
      label: 'validationMsgFontWeight'
    },
    fontSubset: {
      value: validationMsgFontSubset,
      label: 'validationMsgFontSubset'
    },
    fontSizeType: {
      value: validationMsgFontSizeType,
      label: 'validationMsgFontSizeType'
    },
    fontSize: {
      value: validationMsgFontSize,
      label: 'validationMsgFontSize'
    },
    fontSizeMobile: {
      value: validationMsgFontSizeMobile,
      label: 'validationMsgFontSizeMobile'
    },
    fontSizeTablet: {
      value: validationMsgFontSizeTablet,
      label: 'validationMsgFontSizeTablet'
    },
    lineHeightType: {
      value: validationMsgLineHeightType,
      label: 'validationMsgLineHeightType'
    },
    lineHeight: {
      value: validationMsgLineHeight,
      label: 'validationMsgLineHeight'
    },
    lineHeightMobile: {
      value: validationMsgLineHeightMobile,
      label: 'validationMsgLineHeightMobile'
    },
    lineHeightTablet: {
      value: validationMsgLineHeightTablet,
      label: 'validationMsgLineHeightTablet'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Validation Message Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: validationMsgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: validationMsgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        validationMsgColor: colorValue
      });
    },
    allowReset: true
  }), validationMsgPosition === 'bottom_right' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: validationMsgBgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: validationMsgBgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        validationMsgBgColor: colorValue
      });
    },
    allowReset: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlight Borders', 'ultimate-addons-for-gutenberg'),
    checked: enableHighlightBorder,
    onChange: function onChange(value) {
      return setAttributes({
        enableHighlightBorder: !enableHighlightBorder
      });
    }
  }), enableHighlightBorder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlight Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: highlightBorderColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: highlightBorderColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        highlightBorderColor: colorValue
      });
    },
    allowReset: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Form Success / Error Validation', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: msgLoadGoogleFonts,
      label: 'msgLoadGoogleFonts'
    },
    fontFamily: {
      value: msgFontFamily,
      label: 'msgFontFamily'
    },
    fontWeight: {
      value: msgFontWeight,
      label: 'msgFontWeight'
    },
    fontSubset: {
      value: msgFontSubset,
      label: 'msgFontSubset'
    },
    fontSizeType: {
      value: msgFontSizeType,
      label: 'msgFontSizeType'
    },
    fontSize: {
      value: msgFontSize,
      label: 'msgFontSize'
    },
    fontSizeMobile: {
      value: msgFontSizeMobile,
      label: 'msgFontSizeMobile'
    },
    fontSizeTablet: {
      value: msgFontSizeTablet,
      label: 'msgFontSizeTablet'
    },
    lineHeightType: {
      value: msgLineHeightType,
      label: 'msgLineHeightType'
    },
    lineHeight: {
      value: msgLineHeight,
      label: 'msgLineHeight'
    },
    lineHeightMobile: {
      value: msgLineHeightMobile,
      label: 'msgLineHeightMobile'
    },
    lineHeightTablet: {
      value: msgLineHeightTablet,
      label: 'msgLineHeightTablet'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success Message', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: successMsgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: successMsgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        successMsgColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: successMsgBgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: successMsgBgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        successMsgBgColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: successMsgBorderColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: successMsgBorderColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        successMsgBorderColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Error Message', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: errorMsgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: errorMsgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        errorMsgColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: errorMsgBgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: errorMsgBgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        errorMsgBgColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: errorMsgBorderColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: errorMsgBorderColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        errorMsgBorderColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Border Width (px)', 'ultimate-addons-for-gutenberg'),
    value: msgBorderSize,
    onChange: function onChange(value) {
      return setAttributes({
        msgBorderSize: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    className: "uagb-size-type-field",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'px',
    className: "uagb-size-btn",
    isSmall: true,
    isPrimary: msgBorderRadiusType === 'px',
    "aria-pressed": msgBorderRadiusType === 'px',
    onClick: function onClick() {
      return setAttributes({
        msgBorderRadiusType: 'px'
      });
    }
  }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: '%',
    className: "uagb-size-btn",
    isSmall: true,
    isPrimary: msgBorderRadiusType === '%',
    "aria-pressed": msgBorderRadiusType === '%',
    onClick: function onClick() {
      return setAttributes({
        msgBorderRadiusType: '%'
      });
    }
  }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Border Radius', 'ultimate-addons-for-gutenberg'),
    value: msgBorderRadius,
    onChange: function onChange(value) {
      return setAttributes({
        msgBorderRadius: value
      });
    },
    min: 0,
    max: 100,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Padding (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
    className: 'uagb-margin-control',
    value: msgVrPadding,
    onChange: function onChange(value) {
      return setAttributes({
        msgVrPadding: value
      });
    },
    min: 0,
    max: 100,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
    className: 'uagb-margin-control',
    value: msgHrPadding,
    onChange: function onChange(value) {
      return setAttributes({
        msgHrPadding: value
      });
    },
    min: 0,
    max: 100,
    allowReset: true
  }));
  var btnSetting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Submit Button', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Alignment', 'ultimate-addons-for-gutenberg'),
    value: buttonAlignment,
    onChange: function onChange(value) {
      return setAttributes({
        buttonAlignment: value
      });
    },
    options: [{
      value: 'center',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'left',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'justify',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Justified', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Font', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: buttonLoadGoogleFonts,
      label: 'buttonLoadGoogleFonts'
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), btn_border_setting, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TabPanel"], {
    className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
    activeClass: "active-tab",
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
      className: 'uagb-normal-tab'
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg'),
      className: 'uagb-focus-tab'
    }]
  }, function (tabName) {
    var tabout;

    if ('normal' === tabName.name) {
      tabout = buttonNormalSettings;
    } else {
      tabout = buttonHoverSettings;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, tabout);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Padding (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
    className: 'uagb-margin-control',
    value: buttonVrPadding,
    onChange: function onChange(value) {
      return setAttributes({
        buttonVrPadding: value
      });
    },
    min: 0,
    max: 200,
    initialPosition: 10
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
    className: 'uagb-margin-control',
    value: buttonHrPadding,
    onChange: function onChange(value) {
      return setAttributes({
        buttonHrPadding: value
      });
    },
    min: 0,
    max: 200,
    initialPosition: 10
  }));
  var spacing = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label & Input Space', 'ultimate-addons-for-gutenberg'),
    value: fieldLabelSpacing,
    onChange: function onChange(value) {
      return setAttributes({
        fieldLabelSpacing: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fields Space', 'ultimate-addons-for-gutenberg'),
    value: fieldSpacing,
    onChange: function onChange(value) {
      return setAttributes({
        fieldSpacing: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Field Padding (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
    className: 'uagb-margin-control',
    value: fieldVrPadding,
    onChange: function onChange(value) {
      return setAttributes({
        fieldVrPadding: value
      });
    },
    min: 0,
    max: 200,
    initialPosition: 10
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
    className: 'uagb-margin-control',
    value: fieldHrPadding,
    onChange: function onChange(value) {
      return setAttributes({
        fieldHrPadding: value
      });
    },
    min: 0,
    max: 200,
    initialPosition: 10
  }));
  var buttonNormalSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: buttonTextColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: buttonTextColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        buttonTextColor: colorValue
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
      backgroundColor: buttonBgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: buttonBgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        buttonBgColor: colorValue
      });
    },
    allowReset: true
  }), 'none' != buttonBorderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: buttonBorderColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: buttonBorderColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        buttonBorderColor: colorValue
      });
    },
    allowReset: true
  })));
  var buttonHoverSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: buttonTextHoverColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: buttonTextHoverColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        buttonTextHoverColor: colorValue
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: buttonBgHoverColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        buttonBgHoverColor: colorValue
      });
    },
    allowReset: true
  }), 'none' != buttonBorderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: buttonBorderHoverColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
    value: buttonBorderHoverColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        buttonBorderHoverColor: colorValue
      });
    },
    allowReset: true
  })));
  /*
   * Event to set Image as while adding.
   */

  var onSelectForm = function onSelectForm(id) {
    var formId = props.attributes.formId;
    var _props2 = props,
        setAttributes = _props2.setAttributes,
        setState = _props2.setState;

    if (!id) {
      setAttributes({
        isHtml: false
      });
      setAttributes({
        formId: null
      });
      return;
    }

    setAttributes({
      isHtml: false
    });
    setAttributes({
      formId: id
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockControls"], {
    key: "controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["AlignmentToolbar"], {
    value: align,
    onChange: function onChange(value) {
      return setAttributes({
        align: value
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, fieldSettings, fieldBorderSetting, typographySettings, radioCheckSetting, btnSetting, msgSettings, spacing), loadInputGoogleFonts, loadButtonGoogleFonts, loadLabelGoogleFonts, loadRadioGoogleFonts, loadValidationGoogleFonts, loadMsgGoogleFonts);
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