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
/* harmony import */ var _Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/responsive-border */ "./src/components/responsive-border/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_select_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/select-control */ "./src/components/select-control/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





















const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes,
    deviceType
  } = props;
  const {
    formId,
    align,
    fieldStyle,
    fieldBgColor,
    fieldLabelColor,
    fieldInputColor,
    buttonAlignment,
    buttonAlignmentTablet,
    buttonAlignmentMobile,
    buttonTextColor,
    buttonBgColor,
    buttonTextHoverColor,
    buttonBgHoverColor,
    fieldSpacing,
    fieldSpacingTablet,
    fieldSpacingMobile,
    fieldLabelSpacing,
    fieldLabelSpacingTablet,
    fieldLabelSpacingMobile,
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
    radioCheckBorderWidthUnit,
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
    msgBorderSizeUnit,
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
    msgDecoration,
    labelLetterSpacing,
    labelLetterSpacingTablet,
    labelLetterSpacingMobile,
    labelLetterSpacingType,
    inputLetterSpacing,
    inputLetterSpacingTablet,
    inputLetterSpacingMobile,
    inputLetterSpacingType,
    radioCheckLetterSpacing,
    radioCheckLetterSpacingTablet,
    radioCheckLetterSpacingMobile,
    radioCheckLetterSpacingType,
    buttonLetterSpacing,
    buttonLetterSpacingTablet,
    buttonLetterSpacingMobile,
    buttonLetterSpacingType,
    validationMsgLetterSpacing,
    validationMsgLetterSpacingTablet,
    validationMsgLetterSpacingMobile,
    validationMsgLetterSpacingType,
    msgLetterSpacing,
    msgLetterSpacingTablet,
    msgLetterSpacingMobile,
    msgLetterSpacingType,
    inputBorderBottomWidth,
    inputBorderBottomWidthTablet,
    inputBorderBottomWidthMobile
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
    data: {
      value: buttonTextColor,
      label: 'buttonTextColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: buttonBgColor,
    data: {
      value: buttonBgColor,
      label: 'buttonBgColor'
    },
    setAttributes: setAttributes
  }));
  const buttonHoverSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
    colorValue: buttonTextHoverColor,
    data: {
      value: buttonTextHoverColor,
      label: 'buttonTextHoverColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: buttonBgHoverColor,
    data: {
      value: buttonBgHoverColor,
      label: 'buttonBgHoverColor'
    },
    setAttributes: setAttributes
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

  const generalSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_15__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Form', 'ultimate-addons-for-gutenberg'),
    data: {
      value: formId
    },
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
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: true
  }));
  const fieldSetting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  const radioCheckSetting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radio & Checkbox', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Override Current Style', 'ultimate-addons-for-gutenberg'),
    checked: enableOveride,
    onChange: () => setAttributes({
      enableOveride: !enableOveride
    })
  }));
  const msgSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlight Borders', 'ultimate-addons-for-gutenberg'),
    checked: enableHighlightBorder,
    onChange: () => setAttributes({
      enableHighlightBorder: !enableHighlightBorder
    })
  }));
  const btnSetting = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Submit Button', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Alignment', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: buttonAlignment,
        label: 'buttonAlignment'
      },
      tablet: {
        value: buttonAlignmentTablet,
        label: 'buttonAlignmentTablet'
      },
      mobile: {
        value: buttonAlignmentMobile,
        label: 'buttonAlignmentMobile'
      }
    },
    options: [{
      value: 'left',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'justify',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-justify')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Justified', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: true,
    responsive: true
  }));
  const labelInputStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label & Input', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Color', 'ultimate-addons-for-gutenberg'),
    colorValue: fieldLabelColor,
    data: {
      value: fieldLabelColor,
      label: 'fieldLabelColor'
    },
    setAttributes: setAttributes
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
    },
    letterSpacing: {
      value: labelLetterSpacing,
      label: 'labelLetterSpacing'
    },
    letterSpacingTablet: {
      value: labelLetterSpacingTablet,
      label: 'labelLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: labelLetterSpacingMobile,
      label: 'labelLetterSpacingMobile'
    },
    letterSpacingType: {
      value: labelLetterSpacingType,
      label: 'labelLetterSpacingType'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input Color', 'ultimate-addons-for-gutenberg'),
    colorValue: fieldInputColor,
    data: {
      value: fieldInputColor,
      label: 'fieldInputColor'
    },
    setAttributes: setAttributes
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
    },
    letterSpacing: {
      value: inputLetterSpacing,
      label: 'inputLetterSpacing'
    },
    letterSpacingTablet: {
      value: inputLetterSpacingTablet,
      label: 'inputLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: inputLetterSpacingMobile,
      label: 'inputLetterSpacingMobile'
    },
    letterSpacingType: {
      value: inputLetterSpacingType,
      label: 'inputLetterSpacingType'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: fieldBgColor,
    data: {
      value: fieldBgColor,
      label: 'fieldBgColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label & Input Gap', 'ultimate-addons-for-gutenberg'),
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
  }));
  const fieldStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Field', 'ultimate-addons-for-gutenberg'),
    initialOpen: true
  }, fieldStyle === 'underline' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Bottom', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: inputBorderBottomWidth,
        label: 'inputBorderBottomWidth'
      },
      tablet: {
        value: inputBorderBottomWidthTablet,
        label: 'inputBorderBottomWidthTablet'
      },
      mobile: {
        value: inputBorderBottomWidthMobile,
        label: 'inputBorderBottomWidthMobile'
      }
    },
    min: 0,
    max: 20,
    displayUnit: false,
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabledBorderTitle: false,
    setAttributes: setAttributes,
    borderHoverColorLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Active Color', 'ultimate-addons-for-gutenberg'),
    prefix: 'input',
    attributes: attributes,
    deviceType: deviceType,
    showWidth: fieldStyle === 'box' ? true : false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fields Space', 'ultimate-addons-for-gutenberg'),
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
  const radioCheckStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radio & Checkbox', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Color', 'ultimate-addons-for-gutenberg'),
    colorValue: radioCheckLableColor,
    data: {
      value: radioCheckLableColor,
      label: 'radioCheckLableColor'
    },
    setAttributes: setAttributes
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
    },
    letterSpacing: {
      value: radioCheckLetterSpacing,
      label: 'radioCheckLetterSpacing'
    },
    letterSpacingTablet: {
      value: radioCheckLetterSpacingTablet,
      label: 'radioCheckLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: radioCheckLetterSpacingMobile,
      label: 'radioCheckLetterSpacingMobile'
    },
    letterSpacingType: {
      value: radioCheckLetterSpacingType,
      label: 'radioCheckLetterSpacingType'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: radioCheckBgColor,
    data: {
      value: radioCheckBgColor,
      label: 'radioCheckBgColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Selected Color', 'ultimate-addons-for-gutenberg'),
    colorValue: radioCheckSelectColor,
    data: {
      value: radioCheckSelectColor,
      label: 'radioCheckSelectColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
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
      value: radioCheckBorderWidthUnit,
      label: 'radioCheckBorderWidthUnit'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }],
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    colorValue: radioCheckBorderColor,
    data: {
      value: radioCheckBorderColor,
      label: 'radioCheckBorderColor'
    },
    setAttributes: setAttributes
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Checkbox Rounded Corners', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: radioCheckBorderRadius,
    data: {
      value: radioCheckBorderRadius,
      label: 'radioCheckBorderRadius'
    },
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
  const buttonStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Submit Button', 'ultimate-addons-for-gutenberg'),
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
    hover: buttonHoverSettings,
    disableBottomSeparator: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    prefix: 'btn',
    attributes: attributes,
    deviceType: deviceType,
    disabledBorderTitle: false
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
    },
    letterSpacing: {
      value: buttonLetterSpacing,
      label: 'buttonLetterSpacing'
    },
    letterSpacingTablet: {
      value: buttonLetterSpacingTablet,
      label: 'buttonLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: buttonLetterSpacingMobile,
      label: 'buttonLetterSpacingMobile'
    },
    letterSpacingType: {
      value: buttonLetterSpacingType,
      label: 'buttonLetterSpacingType'
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
  const messageStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success/Error Message', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-settings-notice"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Note: This styling can be only seen at frontend', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Validation Message Color', 'ultimate-addons-for-gutenberg'),
    colorValue: validationMsgColor,
    data: {
      value: validationMsgColor,
      label: 'validationMsgColor'
    },
    setAttributes: setAttributes
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
    },
    letterSpacing: {
      value: validationMsgLetterSpacing,
      label: 'validationMsgLetterSpacing'
    },
    letterSpacingTablet: {
      value: validationMsgLetterSpacingTablet,
      label: 'validationMsgLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: validationMsgLetterSpacingMobile,
      label: 'validationMsgLetterSpacingMobile'
    },
    letterSpacingType: {
      value: validationMsgLetterSpacingType,
      label: 'validationMsgLetterSpacingType'
    }
  }), validationMsgPosition === 'bottom_right' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: validationMsgBgColor,
    data: {
      value: validationMsgBgColor,
      label: 'validationMsgBgColor'
    },
    setAttributes: setAttributes
  })), enableHighlightBorder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlight Border Color', 'ultimate-addons-for-gutenberg'),
    colorValue: highlightBorderColor,
    data: {
      value: highlightBorderColor,
      label: 'highlightBorderColor'
    },
    setAttributes: setAttributes
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
    },
    letterSpacing: {
      value: msgLetterSpacing,
      label: 'msgLetterSpacing'
    },
    letterSpacingTablet: {
      value: msgLetterSpacingTablet,
      label: 'msgLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: msgLetterSpacingMobile,
      label: 'msgLetterSpacingMobile'
    },
    letterSpacingType: {
      value: msgLetterSpacingType,
      label: 'msgLetterSpacingType'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success Message', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    colorValue: successMsgColor,
    data: {
      value: successMsgColor,
      label: 'successMsgColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: successMsgBgColor,
    data: {
      value: successMsgBgColor,
      label: 'successMsgBgColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
    colorValue: successMsgBorderColor,
    data: {
      value: successMsgBorderColor,
      label: 'successMsgBorderColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Error Message', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    colorValue: errorMsgColor,
    data: {
      value: errorMsgColor,
      label: 'errorMsgColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: errorMsgBgColor,
    data: {
      value: errorMsgBgColor,
      label: 'errorMsgBgColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
    colorValue: errorMsgBorderColor,
    data: {
      value: errorMsgBorderColor,
      label: 'errorMsgBorderColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: msgBorderSize,
    data: {
      value: msgBorderSize,
      label: 'msgBorderSize'
    },
    min: 0,
    max: 50,
    unit: {
      value: msgBorderSizeUnit,
      label: 'msgBorderSizeUnit'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: msgBorderRadius,
    data: {
      value: msgBorderRadius,
      label: 'msgBorderRadius'
    },
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["BlockControls"], {
    key: "controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["AlignmentToolbar"], {
    value: align,
    onChange: value => setAttributes({
      align: value
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_17__["Notice"], {
    status: "warning",
    isDismissible: false
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('This block has been deprecated.', 'ultimate-addons-for-gutenberg')), generalSettings, fieldSetting, radioCheckSetting, btnSetting, msgSettings), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, fieldStyling, labelInputStyling, enableOveride && radioCheckStyling, buttonStyling, messageStyling), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
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

    const tabletPreview = document.getElementsByClassName('is-tablet-preview');
    const mobilePreview = document.getElementsByClassName('is-mobile-preview');

    if (0 !== tabletPreview.length || 0 !== mobilePreview.length) {
      const preview = tabletPreview[0] || mobilePreview[0];
      const iframe = preview.getElementsByTagName('iframe')[0];

      if (iframe) {
        webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({ ...props.config,
          loading: handleLoading,
          active: handleActive,
          inactive: handleInactive,
          context: iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow
        });
        addFont(props.config.google.families[0]);
      }
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