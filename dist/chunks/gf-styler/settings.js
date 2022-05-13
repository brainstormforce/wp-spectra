(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/gf-styler/settings"],{

/***/ "./src/blocks/gf-designer/settings.js":
/*!********************************************!*\
  !*** ./src/blocks/gf-designer/settings.js ***!
  \********************************************/
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
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



















const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes
  } = props; // Setup the attributes.

  const {
    formId,
    align,
    enableAjax,
    enableTabSupport,
    formTabIndex,
    titleDescStyle,
    titleDescAlignment,
    fieldStyle,
    fieldBgColor,
    fieldLabelColor,
    fieldInputColor,
    fieldBorderStyle,
    fieldBorderWidth,
    fieldBorderWidthTablet,
    fieldBorderWidthMobile,
    fieldBorderWidthType,
    fieldBorderRadius,
    fieldBorderColor,
    fieldBorderFocusColor,
    textAreaHeight,
    textAreaHeightTablet,
    textAreaHeightMobile,
    buttonAlignment,
    buttonTextColor,
    buttonBgColor,
    buttonTextHoverColor,
    buttonBgHoverColor,
    buttonBorderStyle,
    buttonBorderWidth,
    buttonBorderWidthTablet,
    buttonBorderWidthMobile,
    buttonBorderWidthType,
    buttonBorderRadius,
    buttonBorderColor,
    buttonBorderHoverColor,
    fieldSpacing,
    fieldSpacingTablet,
    fieldSpacingMobile,
    fieldLabelSpacing,
    fieldLabelSpacingTablet,
    fieldLabelSpacingMobile,
    enableLabel,
    labelFontSize,
    labelFontSizeType,
    labelFontSizeTablet,
    labelFontSizeMobile,
    labelFontFamily,
    labelFontWeight,
    labelLineHeightType,
    labelLineHeight,
    labelLineHeightTablet,
    labelLineHeightMobile,
    labelLoadGoogleFonts,
    inputFontSize,
    inputFontSizeType,
    inputFontSizeTablet,
    inputFontSizeMobile,
    inputFontFamily,
    inputFontWeight,
    inputLineHeightType,
    inputLineHeight,
    inputLineHeightTablet,
    inputLineHeightMobile,
    inputLoadGoogleFonts,
    buttonFontSize,
    buttonFontSizeType,
    buttonFontSizeTablet,
    buttonFontSizeMobile,
    buttonFontFamily,
    buttonFontWeight,
    buttonLineHeightType,
    buttonLineHeight,
    buttonLineHeightTablet,
    buttonLineHeightMobile,
    buttonLoadGoogleFonts,
    enableOveride,
    radioCheckSize,
    radioCheckSizeTablet,
    radioCheckSizeMobile,
    radioCheckBgColor,
    radioCheckSelectColor,
    radioCheckLableColor,
    radioCheckBorderColor,
    radioCheckBorderWidth,
    radioCheckBorderWidthTablet,
    radioCheckBorderWidthMobile,
    radioCheckBorderWidthType,
    radioCheckBorderRadius,
    radioCheckFontSize,
    radioCheckFontSizeType,
    radioCheckFontSizeTablet,
    radioCheckFontSizeMobile,
    radioCheckFontFamily,
    radioCheckFontWeight,
    radioCheckLineHeightType,
    radioCheckLineHeight,
    radioCheckLineHeightTablet,
    radioCheckLineHeightMobile,
    radioCheckLoadGoogleFonts,
    validationMsgColor,
    validationMsgBgColor,
    advancedValidationSettings,
    highlightBorderColor,
    validationMsgFontSize,
    validationMsgFontSizeType,
    validationMsgFontSizeTablet,
    validationMsgFontSizeMobile,
    validationMsgFontFamily,
    validationMsgFontWeight,
    validationMsgLineHeightType,
    validationMsgLineHeight,
    validationMsgLineHeightTablet,
    validationMsgLineHeightMobile,
    validationMsgLoadGoogleFonts,
    successMsgColor,
    errorMsgColor,
    errorMsgBgColor,
    errorMsgBorderColor,
    msgBorderSize,
    msgBorderSizeType,
    msgBorderRadius,
    msgFontSize,
    msgFontSizeType,
    msgFontSizeTablet,
    msgFontSizeMobile,
    msgFontFamily,
    msgFontWeight,
    msgLineHeightType,
    msgLineHeight,
    msgLineHeightTablet,
    msgLineHeightMobile,
    msgLoadGoogleFonts,
    radioCheckBorderRadiusType,
    msgBorderRadiusType,
    fieldBorderRadiusType,
    buttonBorderRadiusType,
    successMsgLoadGoogleFonts,
    successMsgFontFamily,
    successMsgFontWeight,
    successMsgFontSizeType,
    successMsgFontSize,
    successMsgFontSizeMobile,
    successMsgFontSizeTablet,
    successMsgLineHeightType,
    successMsgLineHeight,
    successMsgLineHeightMobile,
    successMsgLineHeightTablet,
    fieldtopPadding,
    fieldrightPadding,
    fieldbottomPadding,
    fieldleftPadding,
    fieldtopMobilePadding,
    fieldrightMobilePadding,
    fieldbottomMobilePadding,
    fieldleftMobilePadding,
    fieldtopTabletPadding,
    fieldrightTabletPadding,
    fieldbottomTabletPadding,
    fieldleftTabletPadding,
    fieldpaddingUnit,
    fieldmobilePaddingUnit,
    fieldtabletPaddingUnit,
    fieldpaddingLink,
    buttontopPadding,
    buttonrightPadding,
    buttonbottomPadding,
    buttonleftPadding,
    buttontopMobilePadding,
    buttonrightMobilePadding,
    buttonbottomMobilePadding,
    buttonleftMobilePadding,
    buttontopTabletPadding,
    buttonrightTabletPadding,
    buttonbottomTabletPadding,
    buttonleftTabletPadding,
    buttonpaddingUnit,
    buttonmobilePaddingUnit,
    buttontabletPaddingUnit,
    buttonpaddingLink,
    msgtopPadding,
    msgrightPadding,
    msgbottomPadding,
    msgleftPadding,
    msgtopMobilePadding,
    msgrightMobilePadding,
    msgbottomMobilePadding,
    msgleftMobilePadding,
    msgtopTabletPadding,
    msgrightTabletPadding,
    msgbottomTabletPadding,
    msgleftTabletPadding,
    msgpaddingUnit,
    msgmobilePaddingUnit,
    msgtabletPaddingUnit,
    msgpaddingLink,
    labelFontStyle,
    labelTransform,
    labelDecoration,
    inputFontStyle,
    inputTransform,
    inputDecoration,
    buttonFontStyle,
    buttonTransform,
    buttonDecoration,
    radioCheckFontStyle,
    radioCheckTransform,
    radioCheckDecoration,
    validationMsgFontStyle,
    validationMsgTransform,
    validationMsgDecoration,
    msgFontStyle,
    msgTransform,
    msgDecoration,
    successMsgDecoration,
    successMsgFontStyle,
    successMsgTransform
  } = attributes;
  let loadInputGoogleFonts;
  let loadButtonGoogleFonts;
  let loadLabelGoogleFonts;
  let loadRadioGoogleFonts;
  let loadValidationGoogleFonts;
  let loadMsgGoogleFonts;

  if (labelLoadGoogleFonts === true) {
    const labelconfig = {
      google: {
        families: [labelFontFamily + (labelFontWeight ? ':' + labelFontWeight : '')]
      }
    };
    loadLabelGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: labelconfig
    });
  }

  if (inputLoadGoogleFonts === true) {
    const inputconfig = {
      google: {
        families: [inputFontFamily + (inputFontWeight ? ':' + inputFontWeight : '')]
      }
    };
    loadInputGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: inputconfig
    });
  }

  if (buttonLoadGoogleFonts === true) {
    const buttonconfig = {
      google: {
        families: [buttonFontFamily + (buttonFontWeight ? ':' + buttonFontWeight : '')]
      }
    };
    loadButtonGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: buttonconfig
    });
  }

  if (radioCheckLoadGoogleFonts === true) {
    const radioCheckconfig = {
      google: {
        families: [radioCheckFontFamily + (radioCheckFontWeight ? ':' + radioCheckFontWeight : '')]
      }
    };
    loadRadioGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: radioCheckconfig
    });
  }

  if (validationMsgLoadGoogleFonts === true) {
    const validationMsgconfig = {
      google: {
        families: [validationMsgFontFamily + (validationMsgFontWeight ? ':' + validationMsgFontWeight : '')]
      }
    };
    loadValidationGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: validationMsgconfig
    });
  }

  if (msgLoadGoogleFonts === true) {
    const msgconfig = {
      google: {
        families: [msgFontFamily + (msgFontWeight ? ':' + msgFontWeight : '')]
      }
    };
    loadMsgGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: msgconfig
    });
  }

  const fieldBorderSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Field Style & Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Field Style', 'ultimate-addons-for-gutenberg'),
      data: {
        value: fieldStyle,
        label: 'fieldStyle'
      },
      options: [{
        value: 'box',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Box', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'underline',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Underline', 'ultimate-addons-for-gutenberg')
      }]
    }), fieldStyle === 'box' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
      value: fieldBorderStyle,
      onChange: value => setAttributes({
        fieldBorderStyle: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), ('none' !== fieldBorderStyle || fieldStyle === 'underline') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: fieldBorderWidth,
          label: 'fieldBorderWidth'
        },
        tablet: {
          value: fieldBorderWidthTablet,
          label: 'fieldBorderWidthTablet'
        },
        mobile: {
          value: fieldBorderWidthMobile,
          label: 'fieldBorderWidthMobile'
        }
      },
      min: 0,
      max: 50,
      unit: {
        value: fieldBorderWidthType,
        label: 'fieldBorderWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Radius', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: fieldBorderRadius,
      onChange: value => setAttributes({
        fieldBorderRadius: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: fieldBorderRadiusType,
        label: 'fieldBorderRadiusType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'active',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Active', 'ultimate-addons-for-gutenberg')
      }],
      normal: ('none' !== fieldBorderStyle || fieldStyle === 'underline') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: fieldBorderColor ? fieldBorderColor : '',
        onColorChange: value => setAttributes({
          fieldBorderColor: value
        })
      })),
      active: ('none' !== fieldBorderStyle || fieldStyle === 'underline') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: fieldBorderFocusColor ? fieldBorderFocusColor : '',
        onColorChange: value => setAttributes({
          fieldBorderFocusColor: value
        })
      })),
      disableBottomSeparator: true
    }));
  };

  const inputSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Input', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: fieldInputColor ? fieldInputColor : '',
      onColorChange: value => setAttributes({
        fieldInputColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: fieldBgColor ? fieldBgColor : '',
      onColorChange: value => setAttributes({
        fieldBgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
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
      fontStyle: {
        value: inputFontStyle,
        label: 'inputFontStyle'
      },
      transform: {
        value: inputTransform,
        label: 'inputTransform'
      },
      decoration: {
        value: inputDecoration,
        label: 'inputDecoration'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Area Height', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: textAreaHeight,
          label: 'textAreaHeight'
        },
        tablet: {
          value: textAreaHeightTablet,
          label: 'textAreaHeightTablet'
        },
        mobile: {
          value: textAreaHeightMobile,
          label: 'textAreaHeightMobile'
        }
      },
      min: 0,
      max: 200,
      displayUnit: false,
      setAttributes: setAttributes
    }));
  };

  const labelSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Label', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: "Hide Label",
      checked: enableLabel,
      onChange: () => setAttributes({
        enableLabel: !enableLabel
      })
    }), !enableLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: fieldLabelColor ? fieldLabelColor : '',
      onColorChange: value => setAttributes({
        fieldLabelColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontStyle: {
        value: labelFontStyle,
        label: 'labelFontStyle'
      },
      transform: {
        value: labelTransform,
        label: 'labelTransform'
      },
      decoration: {
        value: labelDecoration,
        label: 'labelDecoration'
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
    })));
  };

  const fieldSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('General', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Select Form', 'ultimate-addons-for-gutenberg'),
      value: formId,
      onChange: onSelectForm,
      options: uagb_blocks_info.gf_forms
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: "Enable AJAX Form Submission",
      checked: enableAjax,
      onChange: () => setAttributes({
        enableAjax: !enableAjax
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: "Using Multiple Gravity Forms",
      checked: enableTabSupport,
      onChange: () => setAttributes({
        enableTabSupport: !enableTabSupport
      })
    }), enableTabSupport && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Tab Index', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: formTabIndex,
      onChange: value => setAttributes({
        formTabIndex: value
      }),
      min: 0,
      max: 500,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Form Title & Description', 'ultimate-addons-for-gutenberg'),
      data: {
        value: titleDescStyle,
        label: 'titleDescStyle'
      },
      options: [{
        value: 'yes',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hide', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Field & Input Label Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: align,
        label: 'align'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), titleDescStyle !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title & Description Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: titleDescAlignment,
        label: 'titleDescAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }));
  }; //Submit button settings.


  const btnBorderSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      value: buttonBorderStyle,
      onChange: value => setAttributes({
        buttonBorderStyle: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' !== buttonBorderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: buttonBorderWidth,
          label: 'buttonBorderWidth'
        },
        tablet: {
          value: buttonBorderWidthTablet,
          label: 'buttonBorderWidthTablet'
        },
        mobile: {
          value: buttonBorderWidthMobile,
          label: 'buttonBorderWidthMobile'
        }
      },
      min: 0,
      max: 50,
      unit: {
        value: buttonBorderWidthType,
        label: 'buttonBorderWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Radius', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: buttonBorderRadius,
      onChange: value => setAttributes({
        buttonBorderRadius: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: buttonBorderRadiusType,
        label: 'buttonBorderRadiusType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    }));
  };

  const buttonNormalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonTextColor ? buttonTextColor : '',
      onColorChange: value => setAttributes({
        buttonTextColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonBgColor,
      onColorChange: value => setAttributes({
        buttonBgColor: value
      })
    }), 'none' !== buttonBorderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonBorderColor ? buttonBorderColor : '',
      onColorChange: value => setAttributes({
        buttonBorderColor: value
      })
    })));
  };

  const buttonHoverSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonTextHoverColor ? buttonTextHoverColor : '',
      onColorChange: value => setAttributes({
        buttonTextHoverColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonBgHoverColor,
      onColorChange: value => setAttributes({
        buttonBgHoverColor: value
      })
    }), 'none' !== buttonBorderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonBorderHoverColor ? buttonBorderHoverColor : '',
      onColorChange: value => setAttributes({
        buttonBorderHoverColor: value
      })
    })));
  };

  const btnSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Submit', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: buttonAlignment,
        label: 'buttonAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'justify',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_9__["default"])('fa fa-align-justify')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Justified', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), btnBorderSetting(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: buttonNormalSettings(),
      hover: buttonHoverSettings(),
      disableBottomSeparator: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontStyle: {
        value: buttonFontStyle,
        label: 'buttonFontStyle'
      },
      transform: {
        value: buttonTransform,
        label: 'buttonTransform'
      },
      decoration: {
        value: buttonDecoration,
        label: 'buttonDecoration'
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
    }));
  };

  const spacingSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Label & Input Space', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: fieldLabelSpacing,
          label: 'fieldLabelSpacing'
        },
        tablet: {
          value: fieldLabelSpacingTablet,
          label: 'fieldLabelSpacingTablet'
        },
        mobile: {
          value: fieldLabelSpacingMobile,
          label: 'fieldLabelSpacingMobile'
        }
      },
      min: 0,
      max: 30,
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Fields Space', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: fieldSpacing,
          label: 'fieldSpacing'
        },
        tablet: {
          value: fieldSpacingTablet,
          label: 'fieldSpacingTablet'
        },
        mobile: {
          value: fieldSpacingMobile,
          label: 'fieldSpacingMobile'
        }
      },
      min: 0,
      max: 50,
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Field Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: fieldtopPadding,
        label: 'fieldtopPadding'
      },
      valueRight: {
        value: fieldrightPadding,
        label: 'fieldrightPadding'
      },
      valueBottom: {
        value: fieldbottomPadding,
        label: 'fieldbottomPadding'
      },
      valueLeft: {
        value: fieldleftPadding,
        label: 'fieldleftPadding'
      },
      valueTopTablet: {
        value: fieldtopTabletPadding,
        label: 'fieldtopTabletPadding'
      },
      valueRightTablet: {
        value: fieldrightTabletPadding,
        label: 'fieldrightTabletPadding'
      },
      valueBottomTablet: {
        value: fieldbottomTabletPadding,
        label: 'fieldbottomTabletPadding'
      },
      valueLeftTablet: {
        value: fieldleftTabletPadding,
        label: 'fieldleftTabletPadding'
      },
      valueTopMobile: {
        value: fieldtopMobilePadding,
        label: 'fieldtopMobilePadding'
      },
      valueRightMobile: {
        value: fieldrightMobilePadding,
        label: 'fieldrightMobilePadding'
      },
      valueBottomMobile: {
        value: fieldbottomMobilePadding,
        label: 'fieldbottomMobilePadding'
      },
      valueLeftMobile: {
        value: fieldleftMobilePadding,
        label: 'fieldleftMobilePadding'
      },
      unit: {
        value: fieldpaddingUnit,
        label: 'fieldpaddingUnit'
      },
      mUnit: {
        value: fieldmobilePaddingUnit,
        label: 'fieldmobilePaddingUnit'
      },
      tUnit: {
        value: fieldtabletPaddingUnit,
        label: 'fieldtabletPaddingUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: fieldpaddingLink,
        label: 'fieldpaddingLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Button Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: buttontopPadding,
        label: 'buttontopPadding'
      },
      valueRight: {
        value: buttonrightPadding,
        label: 'buttonrightPadding'
      },
      valueBottom: {
        value: buttonbottomPadding,
        label: 'buttonbottomPadding'
      },
      valueLeft: {
        value: buttonleftPadding,
        label: 'buttonleftPadding'
      },
      valueTopTablet: {
        value: buttontopTabletPadding,
        label: 'buttontopTabletPadding'
      },
      valueRightTablet: {
        value: buttonrightTabletPadding,
        label: 'buttonrightTabletPadding'
      },
      valueBottomTablet: {
        value: buttonbottomTabletPadding,
        label: 'buttonbottomTabletPadding'
      },
      valueLeftTablet: {
        value: buttonleftTabletPadding,
        label: 'buttonleftTabletPadding'
      },
      valueTopMobile: {
        value: buttontopMobilePadding,
        label: 'buttontopMobilePadding'
      },
      valueRightMobile: {
        value: buttonrightMobilePadding,
        label: 'buttonrightMobilePadding'
      },
      valueBottomMobile: {
        value: buttonbottomMobilePadding,
        label: 'buttonbottomMobilePadding'
      },
      valueLeftMobile: {
        value: buttonleftMobilePadding,
        label: 'buttonleftMobilePadding'
      },
      unit: {
        value: buttonpaddingUnit,
        label: 'buttonpaddingUnit'
      },
      mUnit: {
        value: buttonmobilePaddingUnit,
        label: 'buttonmobilePaddingUnit'
      },
      tUnit: {
        value: buttontabletPaddingUnit,
        label: 'buttontabletPaddingUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: buttonpaddingLink,
        label: 'buttonpaddingLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Message Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: msgtopPadding,
        label: 'msgtopPadding'
      },
      valueRight: {
        value: msgrightPadding,
        label: 'msgrightPadding'
      },
      valueBottom: {
        value: msgbottomPadding,
        label: 'msgbottomPadding'
      },
      valueLeft: {
        value: msgleftPadding,
        label: 'msgleftPadding'
      },
      valueTopTablet: {
        value: msgtopTabletPadding,
        label: 'msgtopTabletPadding'
      },
      valueRightTablet: {
        value: msgrightTabletPadding,
        label: 'msgrightTabletPadding'
      },
      valueBottomTablet: {
        value: msgbottomTabletPadding,
        label: 'msgbottomTabletPadding'
      },
      valueLeftTablet: {
        value: msgleftTabletPadding,
        label: 'msgleftTabletPadding'
      },
      valueTopMobile: {
        value: msgtopMobilePadding,
        label: 'msgtopMobilePadding'
      },
      valueRightMobile: {
        value: msgrightMobilePadding,
        label: 'msgrightMobilePadding'
      },
      valueBottomMobile: {
        value: msgbottomMobilePadding,
        label: 'msgbottomMobilePadding'
      },
      valueLeftMobile: {
        value: msgleftMobilePadding,
        label: 'msgleftMobilePadding'
      },
      unit: {
        value: msgpaddingUnit,
        label: 'msgpaddingUnit'
      },
      mUnit: {
        value: msgmobilePaddingUnit,
        label: 'msgmobilePaddingUnit'
      },
      tUnit: {
        value: msgtabletPaddingUnit,
        label: 'msgtabletPaddingUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: msgpaddingLink,
        label: 'msgpaddingLink'
      }
    })));
  };

  const radioCheckSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Radio & Checkbox', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Override Current Style', 'ultimate-addons-for-gutenberg'),
      checked: enableOveride,
      onChange: () => setAttributes({
        enableOveride: !enableOveride
      })
    }), enableOveride && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: radioCheckSize,
          label: 'radioCheckSize'
        },
        tablet: {
          value: radioCheckSizeTablet,
          label: 'radioCheckSizeTablet'
        },
        mobile: {
          value: radioCheckSizeMobile,
          label: 'radioCheckSizeMobile'
        }
      },
      min: 0,
      max: 50,
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Radio & Checkbox Label', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Label Color', 'ultimate-addons-for-gutenberg'),
      colorValue: radioCheckLableColor,
      onColorChange: value => setAttributes({
        radioCheckLableColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: radioCheckBgColor,
      onColorChange: value => setAttributes({
        radioCheckBgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Selected Color', 'ultimate-addons-for-gutenberg'),
      colorValue: radioCheckSelectColor,
      onColorChange: value => setAttributes({
        radioCheckSelectColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontStyle: {
        value: radioCheckFontStyle,
        label: 'radioCheckFontStyle'
      },
      transform: {
        value: radioCheckTransform,
        label: 'radioCheckTransform'
      },
      decoration: {
        value: radioCheckDecoration,
        label: 'radioCheckDecoration'
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
    }), fieldBorderStyle !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Radio & Checkbox Border')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: radioCheckBorderWidth,
          label: 'radioCheckBorderWidth'
        },
        tablet: {
          value: radioCheckBorderWidthTablet,
          label: 'radioCheckBorderWidthTablet'
        },
        mobile: {
          value: radioCheckBorderWidthMobile,
          label: 'radioCheckBorderWidthMobile'
        }
      },
      min: 0,
      max: 50,
      unit: {
        value: radioCheckBorderWidthType,
        label: 'radioCheckBorderWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: radioCheckBorderColor ? radioCheckBorderColor : '',
      onColorChange: value => setAttributes({
        radioCheckBorderColor: value
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Radius', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: radioCheckBorderRadius,
      onChange: value => setAttributes({
        radioCheckBorderRadius: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: radioCheckBorderRadiusType,
        label: 'radioCheckBorderRadiusType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    })));
  };

  const msgSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Success/Error Message', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-settings-notice"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: This styling can be only seen on frontend', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Field Validation', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Message Color', 'ultimate-addons-for-gutenberg'),
      colorValue: validationMsgColor ? validationMsgColor : '',
      onColorChange: value => setAttributes({
        validationMsgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
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
      fontStyle: {
        value: validationMsgFontStyle,
        label: 'validationMsgFontStyle'
      },
      transform: {
        value: validationMsgTransform,
        label: 'validationMsgTransform'
      },
      decoration: {
        value: validationMsgDecoration,
        label: 'validationMsgDecoration'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Advanced Settings', 'ultimate-addons-for-gutenberg'),
      checked: advancedValidationSettings,
      onChange: () => setAttributes({
        advancedValidationSettings: !advancedValidationSettings
      })
    }), advancedValidationSettings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Field Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: validationMsgBgColor ? validationMsgBgColor : '',
      onColorChange: value => setAttributes({
        validationMsgBgColor: value
      })
    })), advancedValidationSettings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Highlight Border Color', 'ultimate-addons-for-gutenberg'),
      colorValue: highlightBorderColor ? highlightBorderColor : '',
      onColorChange: value => setAttributes({
        highlightBorderColor: value
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Error Message Validation', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: errorMsgColor ? errorMsgColor : '',
      onColorChange: value => setAttributes({
        errorMsgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: errorMsgBgColor ? errorMsgBgColor : '',
      onColorChange: value => setAttributes({
        errorMsgBgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
      colorValue: errorMsgBorderColor ? errorMsgBorderColor : '',
      onColorChange: value => setAttributes({
        errorMsgBorderColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: msgBorderSize,
      onChange: value => setAttributes({
        msgBorderSize: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: msgBorderSizeType,
        label: 'msgBorderSizeType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: msgBorderRadius,
      onChange: value => setAttributes({
        msgBorderRadius: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: msgBorderRadiusType,
        label: 'msgBorderRadiusType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontStyle: {
        value: msgFontStyle,
        label: 'msgFontStyle'
      },
      transform: {
        value: msgTransform,
        label: 'msgTransform'
      },
      decoration: {
        value: msgDecoration,
        label: 'msgDecoration'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Success Message Validation', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: successMsgColor ? successMsgColor : '',
      onColorChange: value => setAttributes({
        successMsgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: successMsgLoadGoogleFonts,
        label: 'successMsgLoadGoogleFonts'
      },
      fontFamily: {
        value: successMsgFontFamily,
        label: 'successMsgFontFamily'
      },
      fontWeight: {
        value: successMsgFontWeight,
        label: 'successMsgFontWeight'
      },
      fontStyle: {
        value: successMsgFontStyle,
        label: 'successMsgFontStyle'
      },
      transform: {
        value: successMsgTransform,
        label: 'successMsgTransform'
      },
      decoration: {
        value: successMsgDecoration,
        label: 'successMsgDecoration'
      },
      fontSizeType: {
        value: successMsgFontSizeType,
        label: 'successMsgFontSizeType'
      },
      fontSize: {
        value: successMsgFontSize,
        label: 'successMsgFontSize'
      },
      fontSizeMobile: {
        value: successMsgFontSizeMobile,
        label: 'successMsgFontSizeMobile'
      },
      fontSizeTablet: {
        value: successMsgFontSizeTablet,
        label: 'successMsgFontSizeTablet'
      },
      lineHeightType: {
        value: successMsgLineHeightType,
        label: 'successMsgLineHeightType'
      },
      lineHeight: {
        value: successMsgLineHeight,
        label: 'successMsgLineHeight'
      },
      lineHeightMobile: {
        value: successMsgLineHeightMobile,
        label: 'successMsgLineHeightMobile'
      },
      lineHeightTablet: {
        value: successMsgLineHeightTablet,
        label: 'successMsgLineHeightTablet'
      }
    }));
  };

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["AlignmentToolbar"], {
      value: align,
      onChange: value => setAttributes({
        align: value
      })
    }));
  };
  /*
   * Event to set Image as while adding.
   */


  const onSelectForm = id => {
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
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].general, fieldSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].style, fieldBorderSetting(), labelSettings(), inputSettings(), radioCheckSetting(), btnSetting(), msgSettings(), spacingSetting()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].advance, {
    parentProps: props
  })))), loadInputGoogleFonts, loadButtonGoogleFonts, loadLabelGoogleFonts, loadRadioGoogleFonts, loadValidationGoogleFonts, loadMsgGoogleFonts);
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