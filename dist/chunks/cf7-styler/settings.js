(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/cf7-styler/settings"],{

/***/ "./src/blocks/cf7-designer/settings.js":
/*!*********************************************!*\
  !*** ./src/blocks/cf7-designer/settings.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
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
  } = props;
  const {
    formId,
    align,
    fieldStyle,
    fieldBgColor,
    fieldLabelColor,
    fieldInputColor,
    fieldBorderStyle,
    fieldBorderWidth,
    fieldBorderRadius,
    fieldBorderColor,
    fieldBorderFocusColor,
    buttonAlignment,
    buttonTextColor,
    buttonBgColor,
    buttonTextHoverColor,
    buttonBgHoverColor,
    buttonBorderStyle,
    buttonBorderWidth,
    buttonBorderRadius,
    buttonBorderColor,
    buttonBorderHoverColor,
    fieldSpacing,
    fieldLabelSpacing,
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
    radioCheckBgColor,
    radioCheckSelectColor,
    radioCheckLableColor,
    radioCheckBorderColor,
    radioCheckBorderWidth,
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
    validationMsgPosition,
    validationMsgColor,
    validationMsgBgColor,
    enableHighlightBorder,
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
    successMsgBgColor,
    successMsgBorderColor,
    errorMsgColor,
    errorMsgBgColor,
    errorMsgBorderColor,
    msgBorderSize,
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
    messageTopPaddingDesktop,
    messageRightPaddingDesktop,
    messageBottomPaddingDesktop,
    messageLeftPaddingDesktop,
    messageTopPaddingTablet,
    messageRightPaddingTablet,
    messageBottomPaddingTablet,
    messageLeftPaddingTablet,
    messageTopPaddingMobile,
    messageRightPaddingMobile,
    messageBottomPaddingMobile,
    messageLeftPaddingMobile,
    messagePaddingTypeDesktop,
    messagePaddingTypeTablet,
    messagePaddingTypeMobile,
    messageSpacingLink,
    buttonTopPaddingDesktop,
    buttonRightPaddingDesktop,
    buttonBottomPaddingDesktop,
    buttonLeftPaddingDesktop,
    buttonTopPaddingTablet,
    buttonRightPaddingTablet,
    buttonBottomPaddingTablet,
    buttonLeftPaddingTablet,
    buttonTopPaddingMobile,
    buttonRightPaddingMobile,
    buttonBottomPaddingMobile,
    buttonLeftPaddingMobile,
    buttonPaddingTypeDesktop,
    buttonPaddingTypeTablet,
    buttonPaddingTypeMobile,
    buttonSpacingLink,
    fieldTopPaddingDesktop,
    fieldRightPaddingDesktop,
    fieldBottomPaddingDesktop,
    fieldLeftPaddingDesktop,
    fieldTopPaddingTablet,
    fieldRightPaddingTablet,
    fieldBottomPaddingTablet,
    fieldLeftPaddingTablet,
    fieldTopPaddingMobile,
    fieldRightPaddingMobile,
    fieldBottomPaddingMobile,
    fieldLeftPaddingMobile,
    fieldPaddingTypeDesktop,
    fieldPaddingTypeMobile,
    fieldPaddingTypeTablet,
    fieldSpacingLink,
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
    msgDecoration
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

  const buttonNormalSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
    colorValue: buttonTextColor,
    onColorChange: value => setAttributes({
      buttonTextColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: buttonBgColor,
    onColorChange: value => setAttributes({
      buttonBgColor: value
    })
  }));
  const buttonHoverSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
    colorValue: buttonTextHoverColor,
    onColorChange: value => setAttributes({
      buttonTextHoverColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: buttonBgHoverColor,
    onColorChange: value => setAttributes({
      buttonBgHoverColor: value
    })
  }));
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

  const generalSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Form', 'ultimate-addons-for-gutenberg'),
    value: formId,
    onChange: onSelectForm,
    options: uagb_blocks_info.cf7_forms
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Alignment', 'ultimate-addons-for-gutenberg'),
    data: {
      value: align,
      label: 'align'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'left',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: true
  }));
  const fieldSetting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Field', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg'),
    data: {
      value: fieldStyle,
      label: 'fieldStyle'
    },
    options: [{
      value: 'box',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Box', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'underline',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Underline', 'ultimate-addons-for-gutenberg')
    }]
  }));
  const radioCheckSetting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radio & Checkbox', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Override Current Style', 'ultimate-addons-for-gutenberg'),
    checked: enableOveride,
    onChange: () => setAttributes({
      enableOveride: !enableOveride
    })
  }));
  const msgSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success/Error Message', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-settings-notice"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Note: This styling can be only seen at frontend', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Validation Message Position', 'ultimate-addons-for-gutenberg'),
    data: {
      value: validationMsgPosition,
      label: 'validationMsgPosition'
    },
    options: [{
      value: 'default',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Default', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bottom_right',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Right Side of Field', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlight Borders', 'ultimate-addons-for-gutenberg'),
    checked: enableHighlightBorder,
    onChange: () => setAttributes({
      enableHighlightBorder: !enableHighlightBorder
    })
  }));
  const btnSetting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Submit', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
    data: {
      value: buttonAlignment,
      label: 'buttonAlignment'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'left',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'justify',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-justify')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Justified', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: true
  }));
  const labelInputStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label & Input', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Color', 'ultimate-addons-for-gutenberg'),
    colorValue: fieldLabelColor,
    onColorChange: value => setAttributes({
      fieldLabelColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Typography', 'ultimate-addons-for-gutenberg'),
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input Color', 'ultimate-addons-for-gutenberg'),
    colorValue: fieldInputColor,
    onColorChange: value => setAttributes({
      fieldInputColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input Typography', 'ultimate-addons-for-gutenberg'),
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: fieldBgColor,
    onColorChange: value => setAttributes({
      fieldBgColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: fieldLabelSpacing,
    onChange: value => setAttributes({
      fieldLabelSpacing: value
    }),
    min: 0,
    max: 50,
    displayUnit: false
  }));
  const fieldStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Field', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    borderStyle: {
      value: fieldBorderStyle,
      label: 'fieldBorderStyle',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg')
    },
    borderWidth: {
      value: fieldBorderWidth,
      label: 'fieldBorderWidth',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
    },
    borderRadius: {
      value: fieldBorderRadius,
      label: 'fieldBorderRadius',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg'),
      displayUnit: true,
      unit: {
        value: fieldBorderRadiusType,
        label: 'fieldBorderRadiusType'
      }
    },
    borderColor: {
      value: fieldBorderColor,
      label: 'fieldBorderColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
    },
    borderHoverColor: {
      value: fieldBorderFocusColor,
      label: 'fieldBorderFocusColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Focus Color', 'ultimate-addons-for-gutenberg')
    },
    disableBottomSeparator: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fields Space', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: fieldSpacing,
    onChange: value => setAttributes({
      fieldSpacing: value
    }),
    min: 0,
    max: 50
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
    valueTop: {
      value: fieldTopPaddingDesktop,
      label: 'fieldTopPaddingDesktop'
    },
    valueRight: {
      value: fieldRightPaddingDesktop,
      label: 'fieldRightPaddingDesktop'
    },
    valueBottom: {
      value: fieldBottomPaddingDesktop,
      label: 'fieldBottomPaddingDesktop'
    },
    valueLeft: {
      value: fieldLeftPaddingDesktop,
      label: 'fieldLeftPaddingDesktop'
    },
    valueTopTablet: {
      value: fieldTopPaddingTablet,
      label: 'fieldTopPaddingTablet'
    },
    valueRightTablet: {
      value: fieldRightPaddingTablet,
      label: 'fieldRightPaddingTablet'
    },
    valueBottomTablet: {
      value: fieldBottomPaddingTablet,
      label: 'fieldBottomPaddingTablet'
    },
    valueLeftTablet: {
      value: fieldLeftPaddingTablet,
      label: 'fieldLeftPaddingTablet'
    },
    valueTopMobile: {
      value: fieldTopPaddingMobile,
      label: 'fieldTopPaddingMobile'
    },
    valueRightMobile: {
      value: fieldRightPaddingMobile,
      label: 'fieldRightPaddingMobile'
    },
    valueBottomMobile: {
      value: fieldBottomPaddingMobile,
      label: 'fieldBottomPaddingMobile'
    },
    valueLeftMobile: {
      value: fieldLeftPaddingMobile,
      label: 'fieldLeftPaddingMobile'
    },
    unit: {
      value: fieldPaddingTypeDesktop,
      label: 'fieldPaddingTypeDesktop'
    },
    mUnit: {
      value: fieldPaddingTypeMobile,
      label: 'fieldPaddingTypeMobile'
    },
    tUnit: {
      value: fieldPaddingTypeTablet,
      label: 'fieldPaddingTypeTablet'
    },
    attributes: attributes,
    setAttributes: setAttributes,
    link: {
      value: fieldSpacingLink,
      label: 'fieldSpacingLink'
    }
  })));
  const radioCheckStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radio & Checkbox', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: radioCheckSize,
    onChange: value => setAttributes({
      radioCheckSize: value
    }),
    min: 0,
    max: 50,
    displayUnit: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Color', 'ultimate-addons-for-gutenberg'),
    colorValue: radioCheckLableColor,
    onColorChange: value => setAttributes({
      radioCheckLableColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Typography', 'ultimate-addons-for-gutenberg'),
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: radioCheckBgColor,
    onColorChange: value => setAttributes({
      radioCheckBgColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Selected Color', 'ultimate-addons-for-gutenberg'),
    colorValue: radioCheckSelectColor,
    onColorChange: value => setAttributes({
      radioCheckSelectColor: value
    })
  }), fieldBorderStyle !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Width (px)', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: radioCheckBorderWidth,
    onChange: value => setAttributes({
      radioCheckBorderWidth: value
    }),
    min: 0,
    max: 50,
    displayUnit: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    colorValue: radioCheckBorderColor,
    onColorChange: value => setAttributes({
      radioCheckBorderColor: value
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: radioCheckBorderRadius,
    onChange: value => setAttributes({
      radioCheckBorderRadius: value
    }),
    min: 0,
    max: 100,
    unit: {
      value: radioCheckBorderRadiusType,
      label: 'radioCheckBorderRadiusType'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%', 'ultimate-addons-for-gutenberg'),
      unitValue: '%'
    }]
  }));
  const buttonStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Submit', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_12__["default"], {
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
    }],
    normal: buttonNormalSettings,
    hover: buttonHoverSettings
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    borderStyle: {
      value: buttonBorderStyle,
      label: 'buttonBorderStyle',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg')
    },
    borderWidth: {
      value: buttonBorderWidth,
      label: 'buttonBorderWidth',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
    },
    borderRadius: {
      value: buttonBorderRadius,
      label: 'buttonBorderRadius',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg'),
      displayUnit: true,
      unit: {
        value: buttonBorderRadiusType,
        label: 'buttonBorderRadiusType'
      }
    },
    borderColor: {
      value: buttonBorderColor,
      label: 'buttonBorderColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
    },
    borderHoverColor: {
      value: buttonBorderHoverColor,
      label: 'buttonBorderHoverColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
    valueTop: {
      value: buttonTopPaddingDesktop,
      label: 'buttonTopPaddingDesktop'
    },
    valueRight: {
      value: buttonRightPaddingDesktop,
      label: 'buttonRightPaddingDesktop'
    },
    valueBottom: {
      value: buttonBottomPaddingDesktop,
      label: 'buttonBottomPaddingDesktop'
    },
    valueLeft: {
      value: buttonLeftPaddingDesktop,
      label: 'buttonLeftPaddingDesktop'
    },
    valueTopTablet: {
      value: buttonTopPaddingTablet,
      label: 'buttonTopPaddingTablet'
    },
    valueRightTablet: {
      value: buttonRightPaddingTablet,
      label: 'buttonRightPaddingTablet'
    },
    valueBottomTablet: {
      value: buttonBottomPaddingTablet,
      label: 'buttonBottomPaddingTablet'
    },
    valueLeftTablet: {
      value: buttonLeftPaddingTablet,
      label: 'buttonLeftPaddingTablet'
    },
    valueTopMobile: {
      value: buttonTopPaddingMobile,
      label: 'buttonTopPaddingMobile'
    },
    valueRightMobile: {
      value: buttonRightPaddingMobile,
      label: 'buttonRightPaddingMobile'
    },
    valueBottomMobile: {
      value: buttonBottomPaddingMobile,
      label: 'buttonBottomPaddingMobile'
    },
    valueLeftMobile: {
      value: buttonLeftPaddingMobile,
      label: 'buttonLeftPaddingMobile'
    },
    unit: {
      value: buttonPaddingTypeDesktop,
      label: 'buttonPaddingTypeDesktop'
    },
    mUnit: {
      value: buttonPaddingTypeMobile,
      label: 'buttonPaddingTypeMobile'
    },
    tUnit: {
      value: buttonPaddingTypeTablet,
      label: 'buttonPaddingTypeTablet'
    },
    attributes: attributes,
    setAttributes: setAttributes,
    link: {
      value: buttonSpacingLink,
      label: 'buttonSpacingLink'
    }
  })));
  const messageStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success/Error Message', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-settings-notice"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Note: This styling can be only seen at frontend', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Validation Message Color', 'ultimate-addons-for-gutenberg'),
    colorValue: validationMsgColor,
    onColorChange: value => setAttributes({
      validationMsgColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Validation Typography', 'ultimate-addons-for-gutenberg'),
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
  }), validationMsgPosition === 'bottom_right' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: validationMsgBgColor,
    onColorChange: value => setAttributes({
      validationMsgBgColor: value
    })
  })), enableHighlightBorder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlight Border Color', 'ultimate-addons-for-gutenberg'),
    colorValue: highlightBorderColor,
    onColorChange: value => setAttributes({
      highlightBorderColor: value
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success/Error Message', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success Message', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    colorValue: successMsgColor,
    onColorChange: value => setAttributes({
      successMsgColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: successMsgBgColor,
    onColorChange: value => setAttributes({
      successMsgBgColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
    colorValue: successMsgBorderColor,
    onColorChange: value => setAttributes({
      successMsgBorderColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Error Message', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    colorValue: errorMsgColor,
    onColorChange: value => setAttributes({
      errorMsgColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: errorMsgBgColor,
    onColorChange: value => setAttributes({
      errorMsgBgColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
    colorValue: errorMsgBorderColor,
    onColorChange: value => setAttributes({
      errorMsgBorderColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Width (px)', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: msgBorderSize,
    onChange: value => setAttributes({
      msgBorderSize: value
    }),
    min: 0,
    max: 50,
    displayUnit: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: msgBorderRadius,
    onChange: value => setAttributes({
      msgBorderRadius: value
    }),
    min: 0,
    max: 100,
    unit: {
      value: msgBorderRadiusType,
      label: 'msgBorderRadiusType'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%', 'ultimate-addons-for-gutenberg'),
      unitValue: '%'
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
    valueTop: {
      value: messageTopPaddingDesktop,
      label: 'messageTopPaddingDesktop'
    },
    valueRight: {
      value: messageRightPaddingDesktop,
      label: 'messageRightPaddingDesktop'
    },
    valueBottom: {
      value: messageBottomPaddingDesktop,
      label: 'messageBottomPaddingDesktop'
    },
    valueLeft: {
      value: messageLeftPaddingDesktop,
      label: 'messageLeftPaddingDesktop'
    },
    valueTopTablet: {
      value: messageTopPaddingTablet,
      label: 'messageTopPaddingTablet'
    },
    valueRightTablet: {
      value: messageRightPaddingTablet,
      label: 'messageRightPaddingTablet'
    },
    valueBottomTablet: {
      value: messageBottomPaddingTablet,
      label: 'messageBottomPaddingTablet'
    },
    valueLeftTablet: {
      value: messageLeftPaddingTablet,
      label: 'messageLeftPaddingTablet'
    },
    valueTopMobile: {
      value: messageTopPaddingMobile,
      label: 'messageTopPaddingMobile'
    },
    valueRightMobile: {
      value: messageRightPaddingMobile,
      label: 'messageRightPaddingMobile'
    },
    valueBottomMobile: {
      value: messageBottomPaddingMobile,
      label: 'messageBottomPaddingMobile'
    },
    valueLeftMobile: {
      value: messageLeftPaddingMobile,
      label: 'messageLeftPaddingMobile'
    },
    unit: {
      value: messagePaddingTypeDesktop,
      label: 'messagePaddingTypeDesktop'
    },
    mUnit: {
      value: messagePaddingTypeMobile,
      label: 'messagePaddingTypeMobile'
    },
    tUnit: {
      value: messagePaddingTypeTablet,
      label: 'messagePaddingTypeTablet'
    },
    attributes: attributes,
    setAttributes: setAttributes,
    link: {
      value: messageSpacingLink,
      label: 'messageSpacingLink'
    }
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["BlockControls"], {
    key: "controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["AlignmentToolbar"], {
    value: align,
    onChange: value => setAttributes({
      align: value
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, generalSettings, fieldSetting, radioCheckSetting, btnSetting, msgSettings), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, fieldStyle === 'box' && fieldStyling, enableOveride && radioCheckStyling, buttonStyling, messageStyling, labelInputStyling), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
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