(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/form/settings"],{

/***/ "./src/blocks/forms/presets.js":
/*!*************************************!*\
  !*** ./src/blocks/forms/presets.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/forms/attributes.js");



const presets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'bgColor',
    value: '#ffffff'
  }, {
    label: 'inputborderRadius',
    value: 2
  }, {
    label: 'paddingFieldTop',
    value: 12
  }, {
    label: 'paddingFieldRight',
    value: 12
  }, {
    label: 'paddingFieldBottom',
    value: 12
  }, {
    label: 'paddingFieldLeft',
    value: 12
  }, {
    label: 'formStyle',
    value: 'boxed'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 53C14.8954 53 14 53.8954 14 55C14 56.1046 14.8954 57 16 57H29C30.1046 57 31 56.1046 31 55C31 53.8954 30.1046 53 29 53H22.5H16Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M56 42H16V49H56V42ZM56 40H16C14.8954 40 14 40.8954 14 42V49C14 50.1046 14.8954 51 16 51H56C57.1046 51 58 50.1046 58 49V42C58 40.8954 57.1046 40 56 40ZM56 24H16C14.8954 24 14 24.8954 14 26V28C14 29.1046 14.8954 30 16 30H56C57.1046 30 58 29.1046 58 28V26C58 24.8954 57.1046 24 56 24ZM56 26H16V28H56V26ZM56 34H16V36H56V34ZM56 18H16V20H56V18ZM16 16C14.8954 16 14 16.8954 14 18V20C14 21.1046 14.8954 22 16 22H56C57.1046 22 58 21.1046 58 20V18C58 16.8954 57.1046 16 56 16H16ZM14 34C14 32.8954 14.8954 32 16 32H56C57.1046 32 58 32.8954 58 34V36C58 37.1046 57.1046 38 56 38H16C14.8954 38 14 37.1046 14 36V34Z" /></svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'bgColor',
    value: '#ffffff'
  }, {
    label: 'inputborderRadius',
    value: 3
  }, {
    label: 'paddingFieldTop',
    value: 0
  }, {
    label: 'paddingFieldRight',
    value: 10
  }, {
    label: 'paddingFieldBottom',
    value: 10
  }, {
    label: 'paddingFieldLeft',
    value: 0
  }, {
    label: 'formStyle',
    value: 'underlined'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_179_65" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 38H16V45H56V38ZM16 36C14.8954 36 14 36.8954 14 38V45C14 46.1046 14.8954 47 16 47H56C57.1046 47 58 46.1046 58 45V38C58 36.8954 57.1046 36 56 36H16Z"/><path d="M14 25C14 24.4477 14.4477 24 15 24H57C57.5523 24 58 24.4477 58 25C58 25.5523 57.5523 26 57 26H15C14.4477 26 14 25.5523 14 25Z"/><path d="M14 31C14 30.4477 14.4477 30 15 30H57C57.5523 30 58 30.4477 58 31C58 31.5523 57.5523 32 57 32H15C14.4477 32 14 31.5523 14 31Z"/><path d="M14 53C14 51.8954 14.8954 51 16 51H29C30.1046 51 31 51.8954 31 53C31 54.1046 30.1046 55 29 55H16C14.8954 55 14 54.1046 14 53Z"/><path d="M14 19C14 18.4477 14.4477 18 15 18H57C57.5523 18 58 18.4477 58 19C58 19.5523 57.5523 20 57 20H15C14.4477 20 14 19.5523 14 19Z"/></mask><path d="M16 38V36H14V38H16ZM56 38H58V36H56V38ZM16 45H14V47H16V45ZM56 45V47H58V45H56ZM16 40H56V36H16V40ZM18 45V38H14V45H18ZM56 43H16V47H56V43ZM54 38V45H58V38H54ZM16 38V34C13.7909 34 12 35.7909 12 38H16ZM16 45V38H12V45H16ZM16 45H16H12C12 47.2091 13.7909 49 16 49V45ZM56 45H16V49H56V45ZM56 45V49C58.2091 49 60 47.2091 60 45H56ZM56 38V45H60V38H56ZM56 38H60C60 35.7909 58.2091 34 56 34V38ZM16 38H56V34H16V38ZM15 26H57V22H15V26ZM57 24H15V28H57V24ZM15 24C15.5523 24 16 24.4477 16 25H12C12 26.6569 13.3431 28 15 28V24ZM56 25C56 24.4477 56.4477 24 57 24V28C58.6569 28 60 26.6569 60 25H56ZM57 26C56.4477 26 56 25.5523 56 25H60C60 23.3431 58.6569 22 57 22V26ZM15 22C13.3431 22 12 23.3431 12 25H16C16 25.5523 15.5523 26 15 26V22ZM15 32H57V28H15V32ZM57 30H15V34H57V30ZM15 30C15.5523 30 16 30.4477 16 31H12C12 32.6569 13.3431 34 15 34V30ZM56 31C56 30.4477 56.4477 30 57 30V34C58.6569 34 60 32.6569 60 31H56ZM57 32C56.4477 32 56 31.5523 56 31H60C60 29.3431 58.6569 28 57 28V32ZM15 28C13.3431 28 12 29.3431 12 31H16C16 31.5523 15.5523 32 15 32V28ZM16 53H29V49H16V53ZM29 53H16V57H29V53ZM16 53H16H12C12 55.2091 13.7909 57 16 57V53ZM29 53V57C31.2091 57 33 55.2091 33 53H29ZM29 53H33C33 50.7909 31.2091 49 29 49V53ZM16 49C13.7909 49 12 50.7909 12 53H16V49ZM15 20H57V16H15V20ZM57 18H15V22H57V18ZM15 18C15.5523 18 16 18.4477 16 19H12C12 20.6569 13.3431 22 15 22V18ZM56 19C56 18.4477 56.4477 18 57 18V22C58.6569 22 60 20.6569 60 19H56ZM57 20C56.4477 20 56 19.5523 56 19H60C60 17.3431 58.6569 16 57 16V20ZM15 16C13.3431 16 12 17.3431 12 19H16C16 19.5523 15.5523 20 15 20V16Z"  mask="url(#path-1-inside-1_179_65)"/></svg>'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(`uag_forms_presets`, presets));

/***/ }),

/***/ "./src/blocks/forms/settings.js":
/*!**************************************!*\
  !*** ./src/blocks/forms/settings.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./presets */ "./src/blocks/forms/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes,
    deviceType
  } = props;
  const {
    formPaddingTop,
    formPaddingRight,
    formPaddingBottom,
    formPaddingLeft,
    formPaddingTopTab,
    formPaddingRightTab,
    formPaddingBottomTab,
    formPaddingLeftTab,
    formPaddingTopMob,
    formPaddingRightMob,
    formPaddingBottomMob,
    formPaddingLeftMob,
    formPaddingUnit,
    formPaddingUnitTab,
    formPaddingUnitMob,
    formPaddingLink,
    formLabel,
    buttonAlign,
    buttonSize,
    confirmationType,
    confirmationMessage,
    failedMessage,
    confirmationUrl,
    afterSubmitToEmail,
    afterSubmitCcEmail,
    afterSubmitBccEmail,
    afterSubmitEmailSubject,
    submitColor,
    submitColorHover,
    submitBgColor,
    submitBgColorHover,
    submitborderStyle,
    submitborderWidth,
    submitborderRadius,
    submitborderColor,
    submitborderHoverColor,
    submitTextloadGoogleFonts,
    submitTextFontFamily,
    submitTextFontWeight,
    submitTextFontSize,
    submitTextFontSizeType,
    submitTextFontSizeTablet,
    submitTextFontSizeMobile,
    submitTextLineHeightType,
    submitTextLineHeight,
    submitTextLineHeightTablet,
    submitTextLineHeightMobile,
    labelloadGoogleFonts,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelFontSizeType,
    labelFontSizeTablet,
    labelFontSizeMobile,
    labelLineHeightType,
    labelLineHeight,
    labelLineHeightTablet,
    labelLineHeightMobile,
    inputloadGoogleFonts,
    inputFontFamily,
    inputFontWeight,
    inputFontSize,
    inputFontSizeType,
    inputFontSizeTablet,
    inputFontSizeMobile,
    inputLineHeightType,
    inputLineHeight,
    inputLineHeightTablet,
    inputLineHeightMobile,
    toggleSize,
    toggleSizeTablet,
    toggleSizeMobile,
    toggleWidthSize,
    toggleWidthSizeTablet,
    toggleWidthSizeMobile,
    toggleColor,
    toggleActiveColor,
    toggleDotColor,
    toggleDotActiveColor,
    labelColor,
    labelHoverColor,
    inputColor,
    bgColor,
    bgHoverColor,
    bgActiveColor,
    inputplaceholderColor,
    inputplaceholderHoverColor,
    inputplaceholderActiveColor,
    inputactiveColor,
    inputborderStyle,
    inputborderWidth,
    inputborderRadius,
    inputborderColor,
    inputborderHoverColor,
    fieldGap,
    fieldGapTablet,
    fieldGapMobile,
    formStyle,
    overallAlignment,
    reCaptchaEnable,
    reCaptchaType,
    successMessageTextColor,
    successMessageBGColor,
    successMessageBorderColor,
    successMessageBorderStyle,
    successMessageBorderWidth,
    failedMessageTextColor,
    failedMessageBorderColor,
    failedMessageBorderStyle,
    failedMessageBorderWidth,
    failedMessageBGColor,
    successMessageBorderRadius,
    successMessageHoverBorderColor,
    failedMessageBorderRadius,
    failedMessageHoverBorderColor,
    paddingBtnTop,
    paddingBtnRight,
    paddingBtnBottom,
    paddingBtnLeft,
    paddingBtnTopTablet,
    paddingBtnRightTablet,
    paddingBtnBottomTablet,
    paddingBtnLeftTablet,
    paddingBtnTopMobile,
    paddingBtnRightMobile,
    paddingBtnBottomMobile,
    paddingBtnLeftMobile,
    paddingBtnUnit,
    mobilePaddingBtnUnit,
    tabletPaddingBtnUnit,
    paddingspacingLink,
    submitTextTransform,
    submitTextDecoration,
    labelTransform,
    labelDecoration,
    inputTransform,
    inputDecoration,
    fieldGapType,
    paddingFieldTop,
    paddingFieldRight,
    paddingFieldBottom,
    paddingFieldLeft,
    paddingFieldTopTablet,
    paddingFieldRightTablet,
    paddingFieldBottomTablet,
    paddingFieldLeftTablet,
    paddingFieldTopMobile,
    paddingFieldRightMobile,
    paddingFieldBottomMobile,
    paddingFieldLeftMobile,
    paddingFieldUnit,
    paddingFieldUnitmobile,
    paddingFieldUnitTablet,
    paddingFieldLink,
    toggleSizeType,
    submitTextFontStyle,
    labelFontStyle,
    inputFontStyle,
    hidereCaptchaBatch,
    labelGap,
    labelGapTablet,
    labelGapMobile,
    labelGapUnit
  } = attributes;

  const presetSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Presets', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_17__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_16__["default"],
      presetInputType: "radioImage"
    }));
  };

  const generalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hidden Field Label', 'ultimate-addons-for-gutenberg'),
      value: formLabel,
      onChange: value => setAttributes({
        formLabel: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      data: {
        value: formStyle,
        label: 'formStyle'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'boxed',
        label: 'Boxed'
      }, {
        value: 'underlined',
        label: 'Underlined'
      }],
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Overall Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: overallAlignment,
        label: 'overallAlignment'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Confirmation Type', 'ultimate-addons-for-gutenberg'),
      data: {
        value: confirmationType,
        label: 'confirmationType'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'message',
        label: 'Message'
      }, {
        value: 'url',
        label: 'URL Text'
      }],
      showIcons: false
    }), 'message' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextareaControl"], {
      label: "Success Message Text",
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a message you want to display after successfull form submission', 'ultimate-addons-for-gutenberg'),
      value: confirmationMessage,
      onChange: value => setAttributes({
        confirmationMessage: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextareaControl"], {
      label: "Error Message Text",
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a message you want to display after unsuccessfull form submission', 'ultimate-addons-for-gutenberg'),
      value: failedMessage,
      onChange: value => setAttributes({
        failedMessage: value
      })
    })), 'url' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success Redirect URL', 'ultimate-addons-for-gutenberg'),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a URL you want to redirect your page to after form Submission', 'ultimate-addons-for-gutenberg'),
      value: confirmationUrl,
      onChange: value => setAttributes({
        confirmationUrl: value
      })
    }));
  };

  const successMessageStyle = () => 'message' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
    colorValue: successMessageTextColor ? successMessageTextColor : '',
    onColorChange: value => setAttributes({
      successMessageTextColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: successMessageBGColor ? successMessageBGColor : '',
    onColorChange: value => setAttributes({
      successMessageBGColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabledBorderTitle: false,
    setAttributes: setAttributes,
    borderStyle: {
      value: successMessageBorderStyle,
      label: 'successMessageBorderStyle',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg')
    },
    borderWidth: {
      value: successMessageBorderWidth,
      label: 'successMessageBorderWidth',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
    },
    borderRadius: {
      value: successMessageBorderRadius,
      label: 'successMessageBorderRadius',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
    },
    borderColor: {
      value: successMessageBorderColor,
      label: 'successMessageBorderColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success Border Color', 'ultimate-addons-for-gutenberg')
    },
    borderHoverColor: {
      value: successMessageHoverBorderColor,
      label: 'successMessageHoverBorderColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success Border Color', 'ultimate-addons-for-gutenberg')
    },
    disableBottomSeparator: true
  }));

  const failedMessageStyle = () => 'message' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
    colorValue: failedMessageTextColor ? failedMessageTextColor : '',
    onColorChange: value => setAttributes({
      failedMessageTextColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: failedMessageBGColor ? failedMessageBGColor : '',
    onColorChange: value => setAttributes({
      failedMessageBGColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabledBorderTitle: false,
    setAttributes: setAttributes,
    borderStyle: {
      value: failedMessageBorderStyle,
      label: 'failedMessageBorderStyle',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg')
    },
    borderWidth: {
      value: failedMessageBorderWidth,
      label: 'failedMessageBorderWidth',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
    },
    borderRadius: {
      value: failedMessageBorderRadius,
      label: 'failedMessageBorderRadius',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
    },
    borderColor: {
      value: failedMessageBorderColor,
      label: 'failedMessageBorderColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Error Border Color', 'ultimate-addons-for-gutenberg')
    },
    borderHoverColor: {
      value: failedMessageHoverBorderColor,
      label: 'failedMessageHoverBorderColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Error Border Color', 'ultimate-addons-for-gutenberg')
    },
    disableBottomSeparator: true
  }));

  const afterSubmitActions = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Actions'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-form-notice"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Note: It is required to enter an email ID to receive the data submitted via Form. Else you will not receive any data.', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
      tabs: [{
        name: 'to',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('To', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'cc',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('CC', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'bcc',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('BCC', 'ultimate-addons-for-gutenberg')
      }],
      to: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg'),
        value: afterSubmitToEmail,
        onChange: value => setAttributes({
          afterSubmitToEmail: value
        })
      }),
      cc: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg'),
        value: afterSubmitCcEmail,
        onChange: value => setAttributes({
          afterSubmitCcEmail: value
        })
      }),
      bcc: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg'),
        value: afterSubmitBccEmail,
        onChange: value => setAttributes({
          afterSubmitBccEmail: value
        })
      }),
      disableBottomSeparator: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Subject', 'ultimate-addons-for-gutenberg'),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Subject', 'ultimate-addons-for-gutenberg'),
      value: afterSubmitEmailSubject,
      onChange: value => setAttributes({
        afterSubmitEmailSubject: value
      })
    }));
  };

  const fieldStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fields', 'ultimate-addons-for-gutenberg'),
    initialOpen: true // className="uagb__url-panel-body"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input Color', 'ultimate-addons-for-gutenberg'),
    colorValue: inputColor ? inputColor : '',
    onColorChange: value => setAttributes({
      inputColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'active',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Active', 'ultimate-addons-for-gutenberg')
    }],
    normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Placeholder Color', 'ultimate-addons-for-gutenberg'),
      colorValue: inputplaceholderColor ? inputplaceholderColor : '',
      onColorChange: value => setAttributes({
        inputplaceholderColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Color', 'ultimate-addons-for-gutenberg'),
      colorValue: labelColor ? labelColor : '',
      onColorChange: value => setAttributes({
        labelColor: value
      })
    }), 'underlined' !== formStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgColor ? bgColor : '',
      onColorChange: value => setAttributes({
        bgColor: value
      })
    })),
    hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Placeholder Color', 'ultimate-addons-for-gutenberg'),
      colorValue: inputplaceholderHoverColor ? inputplaceholderHoverColor : '',
      onColorChange: value => setAttributes({
        inputplaceholderHoverColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Color', 'ultimate-addons-for-gutenberg'),
      colorValue: labelHoverColor ? labelHoverColor : '',
      onColorChange: value => setAttributes({
        labelHoverColor: value
      })
    }), 'underlined' !== formStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgHoverColor ? bgHoverColor : '',
      onColorChange: value => setAttributes({
        bgHoverColor: value
      })
    })),
    active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Placeholder Color', 'ultimate-addons-for-gutenberg'),
      colorValue: inputplaceholderActiveColor ? inputplaceholderActiveColor : '',
      onColorChange: value => setAttributes({
        inputplaceholderActiveColor: value
      })
    }), 'underlined' !== formStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgActiveColor ? bgActiveColor : '',
      onColorChange: value => setAttributes({
        bgActiveColor: value
      })
    })),
    disableBottomSeparator: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabledBorderTitle: false,
    setAttributes: setAttributes,
    borderStyle: {
      value: inputborderStyle,
      label: 'inputborderStyle',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg')
    },
    borderWidth: {
      value: inputborderWidth,
      label: 'inputborderWidth',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
    },
    borderRadius: {
      value: inputborderRadius,
      label: 'inputborderRadius',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
    },
    borderColor: {
      value: inputborderColor,
      label: 'inputborderColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
    },
    borderHoverColor: {
      value: inputborderHoverColor,
      label: 'inputborderHoverColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
    },
    borderActiveColor: {
      value: inputactiveColor,
      label: 'inputactiveColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
    },
    disableBottomSeparator: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input Padding', 'ultimate-addons-for-gutenberg'),
    valueTop: {
      value: paddingFieldTop,
      label: 'paddingFieldTop'
    },
    valueRight: {
      value: paddingFieldRight,
      label: 'paddingFieldRight'
    },
    valueBottom: {
      value: paddingFieldBottom,
      label: 'paddingFieldBottom'
    },
    valueLeft: {
      value: paddingFieldLeft,
      label: 'paddingFieldLeft'
    },
    valueTopTablet: {
      value: paddingFieldTopTablet,
      label: 'paddingFieldTopTablet'
    },
    valueRightTablet: {
      value: paddingFieldRightTablet,
      label: 'paddingFieldRightTablet'
    },
    valueBottomTablet: {
      value: paddingFieldBottomTablet,
      label: 'paddingFieldBottomTablet'
    },
    valueLeftTablet: {
      value: paddingFieldLeftTablet,
      label: 'paddingFieldLeftTablet'
    },
    valueTopMobile: {
      value: paddingFieldTopMobile,
      label: 'paddingFieldTopMobile'
    },
    valueRightMobile: {
      value: paddingFieldRightMobile,
      label: 'paddingFieldRightMobile'
    },
    valueBottomMobile: {
      value: paddingFieldBottomMobile,
      label: 'paddingFieldBottomMobile'
    },
    valueLeftMobile: {
      value: paddingFieldLeftMobile,
      label: 'paddingFieldLeftMobile'
    },
    unit: {
      value: paddingFieldUnit,
      label: 'paddingFieldUnit'
    },
    mUnit: {
      value: paddingFieldUnitmobile,
      label: 'paddingFieldUnitmobile'
    },
    tUnit: {
      value: paddingFieldUnitTablet,
      label: 'paddingFieldUnitTablet'
    },
    deviceType: deviceType,
    attributes: attributes,
    setAttributes: setAttributes,
    link: {
      value: paddingFieldLink,
      label: 'paddingFieldLink'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: labelloadGoogleFonts,
      label: 'labelloadGoogleFonts'
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
    transform: {
      value: labelTransform,
      label: 'labelTransform'
    },
    decoration: {
      value: labelDecoration,
      label: 'labelDecoration'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input Typography', 'ultimate-addons-for-gutenberg'),
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
    fontStyle: {
      value: inputFontStyle,
      label: 'inputFontStyle'
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
    transform: {
      value: inputTransform,
      label: 'inputTransform'
    },
    decoration: {
      value: inputDecoration,
      label: 'inputDecoration'
    }
  }));

  const elementStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Checkbox/Toggle/Radio', 'ultimate-addons-for-gutenberg'),
    initialOpen: false // className="uagb__url-panel-body"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Checkbox/Radio Size', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: toggleSize,
        label: 'toggleSize'
      },
      tablet: {
        value: toggleSizeTablet,
        label: 'toggleSizeTablet'
      },
      mobile: {
        value: toggleSizeMobile,
        label: 'toggleSizeMobile'
      }
    },
    min: 0,
    max: 50,
    unit: {
      value: toggleSizeType,
      label: 'toggleSizeType'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Toggle Size', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: toggleWidthSize,
        label: 'toggleWidthSize'
      },
      tablet: {
        value: toggleWidthSizeTablet,
        label: 'toggleWidthSizeTablet'
      },
      mobile: {
        value: toggleWidthSizeMobile,
        label: 'toggleWidthSizeMobile'
      }
    },
    min: 0,
    max: 50,
    displayUnit: false,
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'active',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Active', 'ultimate-addons-for-gutenberg')
    }],
    normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: toggleColor ? toggleColor : '',
      onColorChange: value => setAttributes({
        toggleColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Element Color', 'ultimate-addons-for-gutenberg'),
      colorValue: toggleDotColor ? toggleDotColor : '',
      onColorChange: value => setAttributes({
        toggleDotColor: value
      })
    })),
    active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: toggleActiveColor ? toggleActiveColor : '',
      onColorChange: value => setAttributes({
        toggleActiveColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Element Color', 'ultimate-addons-for-gutenberg'),
      colorValue: toggleDotActiveColor ? toggleDotActiveColor : '',
      onColorChange: value => setAttributes({
        toggleDotActiveColor: value
      })
    })),
    disableBottomSeparator: true
  }));

  const submitStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Submit Button', 'ultimate-addons-for-gutenberg'),
    initialOpen: false // className="uagb__url-panel-body"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Size', 'ultimate-addons-for-gutenberg'),
    value: buttonSize,
    onChange: value => setAttributes({
      buttonSize: value
    }),
    options: [{
      value: 'small',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'medium',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'large',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'extralarge',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Extra Large', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'full',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Full', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Alignment', 'ultimate-addons-for-gutenberg'),
    data: {
      value: buttonAlign,
      label: 'buttonAlign'
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Padding', 'ultimate-addons-for-gutenberg'),
    valueTop: {
      value: paddingBtnTop,
      label: 'paddingBtnTop'
    },
    valueRight: {
      value: paddingBtnRight,
      label: 'paddingBtnRight'
    },
    valueBottom: {
      value: paddingBtnBottom,
      label: 'paddingBtnBottom'
    },
    valueLeft: {
      value: paddingBtnLeft,
      label: 'paddingBtnLeft'
    },
    valueTopTablet: {
      value: paddingBtnTopTablet,
      label: 'paddingBtnTopTablet'
    },
    valueRightTablet: {
      value: paddingBtnRightTablet,
      label: 'paddingBtnRightTablet'
    },
    valueBottomTablet: {
      value: paddingBtnBottomTablet,
      label: 'paddingBtnBottomTablet'
    },
    valueLeftTablet: {
      value: paddingBtnLeftTablet,
      label: 'paddingBtnLeftTablet'
    },
    valueTopMobile: {
      value: paddingBtnTopMobile,
      label: 'paddingBtnTopMobile'
    },
    valueRightMobile: {
      value: paddingBtnRightMobile,
      label: 'paddingBtnRightMobile'
    },
    valueBottomMobile: {
      value: paddingBtnBottomMobile,
      label: 'paddingBtnBottomMobile'
    },
    valueLeftMobile: {
      value: paddingBtnLeftMobile,
      label: 'paddingBtnLeftMobile'
    },
    unit: {
      value: paddingBtnUnit,
      label: 'paddingBtnUnit'
    },
    mUnit: {
      value: mobilePaddingBtnUnit,
      label: 'mobilePaddingBtnUnit'
    },
    tUnit: {
      value: tabletPaddingBtnUnit,
      label: 'tabletPaddingBtnUnit'
    },
    deviceType: deviceType,
    attributes: attributes,
    setAttributes: setAttributes,
    link: {
      value: paddingspacingLink,
      label: 'paddingspacingLink'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
    }],
    normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: submitColor ? submitColor : '',
      onColorChange: value => setAttributes({
        submitColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: submitBgColor ? submitBgColor : '',
      onColorChange: value => setAttributes({
        submitBgColor: value
      })
    })),
    hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: submitColorHover ? submitColorHover : '',
      onColorChange: value => setAttributes({
        submitColorHover: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: submitBgColorHover ? submitBgColorHover : '',
      onColorChange: value => setAttributes({
        submitBgColorHover: value
      })
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabledBorderTitle: false,
    setAttributes: setAttributes,
    borderStyle: {
      value: submitborderStyle,
      label: 'submitborderStyle',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg')
    },
    borderWidth: {
      value: submitborderWidth,
      label: 'submitborderWidth',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
    },
    borderRadius: {
      value: submitborderRadius,
      label: 'submitborderRadius',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
    },
    borderColor: {
      value: submitborderColor,
      label: 'submitborderColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
    },
    borderHoverColor: {
      value: submitborderHoverColor,
      label: 'submitborderHoverColor',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
    },
    disableBottomSeparator: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: submitTextloadGoogleFonts,
      label: 'submitTextloadGoogleFonts'
    },
    fontFamily: {
      value: submitTextFontFamily,
      label: 'submitTextFontFamily'
    },
    fontWeight: {
      value: submitTextFontWeight,
      label: 'submitTextFontWeight'
    },
    fontStyle: {
      value: submitTextFontStyle,
      label: 'submitTextFontStyle'
    },
    fontSizeType: {
      value: submitTextFontSizeType,
      label: 'submitTextFontSizeType'
    },
    fontSize: {
      value: submitTextFontSize,
      label: 'submitTextFontSize'
    },
    fontSizeMobile: {
      value: submitTextFontSizeMobile,
      label: 'submitTextFontSizeMobile'
    },
    fontSizeTablet: {
      value: submitTextFontSizeTablet,
      label: 'submitTextFontSizeTablet'
    },
    lineHeightType: {
      value: submitTextLineHeightType,
      label: 'submitTextLineHeightType'
    },
    lineHeight: {
      value: submitTextLineHeight,
      label: 'submitTextLineHeight'
    },
    lineHeightMobile: {
      value: submitTextLineHeightMobile,
      label: 'submitTextLineHeightMobile'
    },
    lineHeightTablet: {
      value: submitTextLineHeightTablet,
      label: 'submitTextLineHeightTablet'
    },
    transform: {
      value: submitTextTransform,
      label: 'submitTextTransform'
    },
    decoration: {
      value: submitTextDecoration,
      label: 'submitTextDecoration'
    }
  }));

  const messageStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Messages', 'ultimate-addons-for-gutenberg'),
    initialOpen: false // className="uagb__url-panel-body"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
    tabs: [{
      name: 'success',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'error',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Error', 'ultimate-addons-for-gutenberg')
    }],
    success: successMessageStyle(),
    error: failedMessageStyle(),
    disableBottomSeparator: true
  }));

  const spaceStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
    initialOpen: false // className="uagb__url-panel-body"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Form Padding', 'ultimate-addons-for-gutenberg'),
    valueTop: {
      value: formPaddingTop,
      label: 'formPaddingTop'
    },
    valueRight: {
      value: formPaddingRight,
      label: 'formPaddingRight'
    },
    valueBottom: {
      value: formPaddingBottom,
      label: 'formPaddingBottom'
    },
    valueLeft: {
      value: formPaddingLeft,
      label: 'formPaddingLeft'
    },
    valueTopTablet: {
      value: formPaddingTopTab,
      label: 'formPaddingTopTab'
    },
    valueRightTablet: {
      value: formPaddingRightTab,
      label: 'formPaddingRightTab'
    },
    valueBottomTablet: {
      value: formPaddingBottomTab,
      label: 'formPaddingBottomTab'
    },
    valueLeftTablet: {
      value: formPaddingLeftTab,
      label: 'formPaddingLeftTab'
    },
    valueTopMobile: {
      value: formPaddingTopMob,
      label: 'formPaddingTopMob'
    },
    valueRightMobile: {
      value: formPaddingRightMob,
      label: 'formPaddingRightMob'
    },
    valueBottomMobile: {
      value: formPaddingBottomMob,
      label: 'formPaddingBottomMob'
    },
    valueLeftMobile: {
      value: formPaddingLeftMob,
      label: 'formPaddingLeftMob'
    },
    unit: {
      value: formPaddingUnit,
      label: 'formPaddingUnit'
    },
    mUnit: {
      value: formPaddingUnitTab,
      label: 'formPaddingUnitTab'
    },
    tUnit: {
      value: formPaddingUnitMob,
      label: 'formPaddingUnitMob'
    },
    deviceType: deviceType,
    attributes: attributes,
    setAttributes: setAttributes,
    link: {
      value: formPaddingLink,
      label: 'formPaddingLink'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Row Spacing', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: fieldGap,
        label: 'fieldGap'
      },
      tablet: {
        value: fieldGapTablet,
        label: 'fieldGapTablet'
      },
      mobile: {
        value: fieldGapMobile,
        label: 'fieldGapMobile'
      }
    },
    min: 0,
    max: 100,
    unit: {
      value: fieldGapType,
      label: 'fieldGapType'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%', 'ultimate-addons-for-gutenberg'),
      unitValue: '%'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('em', 'ultimate-addons-for-gutenberg'),
      unitValue: 'em'
    }],
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Bottom Margin', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: labelGap,
        label: 'labelGap'
      },
      tablet: {
        value: labelGapTablet,
        label: 'labelGapTablet'
      },
      mobile: {
        value: labelGapMobile,
        label: 'labelGapMobile'
      }
    },
    min: 0,
    max: 100,
    unit: {
      value: labelGapUnit,
      label: 'labelGapUnit'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%', 'ultimate-addons-for-gutenberg'),
      unitValue: '%'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('em', 'ultimate-addons-for-gutenberg'),
      unitValue: 'em'
    }],
    setAttributes: setAttributes
  }));

  const googleReCaptcha = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_18__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Google reCAPTCHA', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-form-notice"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable reCAPTCHA ', 'ultimate-addons-for-gutenberg'),
      checked: reCaptchaEnable,
      onChange: () => setAttributes({
        reCaptchaEnable: !reCaptchaEnable
      })
    }), reCaptchaEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-form-notice"
    }, "Please configure the Google reCAPTCHA Site & Secret key from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      target: "_blank",
      href: `${uagb_blocks_info.uagb_home_url}/wp-admin/options-general.php?page=spectra&path=settings&settings=block-settings`,
      rel: "noreferrer"
    }, "here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Version', 'ultimate-addons-for-gutenberg'),
      data: {
        value: reCaptchaType,
        label: 'reCaptchaType'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'v2',
        label: 'V2',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('V2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'v3',
        label: 'V3',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('V3', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    })), reCaptchaEnable && 'v3' === reCaptchaType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hide reCAPTCHA Badge', 'ultimate-addons-for-gutenberg'),
      checked: hidereCaptchaBatch,
      onChange: () => setAttributes({
        hidereCaptchaBatch: !hidereCaptchaBatch
      })
    }));
  };

  let loadsubmittextGoogleFonts;

  if (submitTextloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [submitTextFontFamily + (submitTextFontWeight ? ':' + submitTextFontWeight : '')]
      }
    };
    loadsubmittextGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  let loadlabelGoogleFonts;

  if (labelloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [labelFontFamily + (labelFontWeight ? ':' + labelFontWeight : '')]
      }
    };
    loadlabelGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  let loadinputGoogleFonts;

  if (inputloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [inputFontFamily + (inputFontWeight ? ':' + inputFontWeight : '')]
      }
    };
    loadinputGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, presetSettings(), generalSettings(), afterSubmitActions(), googleReCaptcha()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, fieldStyling(), elementStyling(), submitStyling(), messageStyling(), spaceStyling()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
    parentProps: props
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, loadsubmittextGoogleFonts, loadlabelGoogleFonts, loadinputGoogleFonts));
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