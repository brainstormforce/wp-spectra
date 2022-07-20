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
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_box_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/box-shadow */ "./src/components/box-shadow/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_responsive_border__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/responsive-border */ "./src/components/responsive-border/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes,
    deviceType
  } = props;
  const {
    block_id,
    layout,
    placeholder,
    inputSize,
    textColor,
    inputBgColor,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    // borderWidth,
    buttonBgColor,
    buttonBgHoverColor,
    buttonIconColor,
    buttonIconHoverColor,
    buttonWidth,
    buttonWidthType,
    buttonIconSize,
    buttonIconSizeType,
    iconColor,
    iconSize,
    inputloadGoogleFonts,
    inputFontFamily,
    inputFontWeight,
    inputFontSize,
    inputFontSizeType,
    inputFontSizeTablet,
    inputFontSizeMobile,
    inputLineHeight,
    inputLineHeightType,
    inputLineHeightTablet,
    inputLineHeightMobile,
    inputPaddingTypeDesktop,
    buttonType,
    buttonText,
    buttonloadGoogleFonts,
    buttonFontFamily,
    buttonFontWeight,
    buttonFontSize,
    buttonFontSizeType,
    buttonFontSizeTablet,
    buttonFontSizeMobile,
    buttonLineHeight,
    buttonLineHeightType,
    buttonLineHeightTablet,
    buttonTransform,
    buttonDecoration,
    buttonLineHeightMobile,
    buttonTextColor,
    buttonTextHoverColor,
    inputSizeType,
    paddingInputTop,
    paddingInputRight,
    paddingInputBottom,
    paddingInputLeft,
    paddingInputTopTablet,
    paddingInputRightTablet,
    paddingInputBottomTablet,
    paddingInputLeftTablet,
    paddingInputTopMobile,
    paddingInputRightMobile,
    paddingInputBottomMobile,
    paddingInputLeftMobile,
    mobilePaddingInputUnit,
    tabletPaddingInputUnit,
    spacingLink,
    iconSizeType,
    inputTransform,
    inputDecoration,
    inputFontStyle,
    buttonFontStyle
  } = attributes;

  const generalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      data: {
        value: layout,
        label: 'layout'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'input-button',
        label: 'Classic'
      }, {
        value: 'input',
        label: 'Minimal'
      }],
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Placeholder', 'ultimate-addons-for-gutenberg'),
      value: placeholder,
      onChange: value => setAttributes({
        placeholder: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Input Width', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: inputSize,
      data: {
        value: inputSize,
        label: 'inputSize'
      },
      min: 0,
      max: 200,
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }],
      unit: {
        value: inputSizeType,
        label: 'inputSizeType'
      }
    }), layout === 'input-button' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Button Type', 'ultimate-addons-for-gutenberg'),
      data: {
        value: buttonType,
        label: 'buttonType'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'icon',
        label: 'Icon'
      }, {
        value: 'text',
        label: 'Text'
      }],
      showIcons: false
    }), layout === 'input-button' && 'text' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["TextControl"], {
      label: "Text",
      value: buttonText,
      onChange: value => {
        setAttributes({
          buttonText: value
        });
      }
    })));
  };

  const inputSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Input Box', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: textColor ? textColor : '',
      data: {
        value: textColor,
        label: 'textColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: inputBgColor ? inputBgColor : '',
      data: {
        value: inputBgColor,
        label: 'inputBgColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_13__["default"], {
      setAttributes: setAttributes,
      borderStyleLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      borderWidthLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      borderRadiusLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Radius', 'ultimate-addons-for-gutenberg'),
      borderColorLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      borderHoverColorLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Hover Color', 'ultimate-addons-for-gutenberg'),
      prefix: 'input',
      attributes: attributes,
      deviceType: deviceType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: paddingInputTop,
        label: 'paddingInputTop'
      },
      valueRight: {
        value: paddingInputRight,
        label: 'paddingInputRight'
      },
      valueBottom: {
        value: paddingInputBottom,
        label: 'paddingInputBottom'
      },
      valueLeft: {
        value: paddingInputLeft,
        label: 'paddingInputLeft'
      },
      valueTopTablet: {
        value: paddingInputTopTablet,
        label: 'paddingInputTopTablet'
      },
      valueRightTablet: {
        value: paddingInputRightTablet,
        label: 'paddingInputRightTablet'
      },
      valueBottomTablet: {
        value: paddingInputBottomTablet,
        label: 'paddingInputBottomTablet'
      },
      valueLeftTablet: {
        value: paddingInputLeftTablet,
        label: 'paddingInputLeftTablet'
      },
      valueTopMobile: {
        value: paddingInputTopMobile,
        label: 'paddingInputTopMobile'
      },
      valueRightMobile: {
        value: paddingInputRightMobile,
        label: 'paddingInputRightMobile'
      },
      valueBottomMobile: {
        value: paddingInputBottomMobile,
        label: 'paddingInputBottomMobile'
      },
      valueLeftMobile: {
        value: paddingInputLeftMobile,
        label: 'paddingInputLeftMobile'
      },
      unit: {
        value: inputPaddingTypeDesktop,
        label: 'inputPaddingTypeDesktop'
      },
      mUnit: {
        value: mobilePaddingInputUnit,
        label: 'mobilePaddingInputUnit'
      },
      tUnit: {
        value: tabletPaddingInputUnit,
        label: 'tabletPaddingInputUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: 'spacingLink'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_box_shadow__WEBPACK_IMPORTED_MODULE_2__["default"], {
      blockId: block_id,
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Box Shadow', 'ultimate-addons-for-gutenberg'),
      boxShadowColor: {
        value: boxShadowColor,
        label: 'boxShadowColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      boxShadowHOffset: {
        value: boxShadowHOffset,
        label: 'boxShadowHOffset',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
      },
      boxShadowVOffset: {
        value: boxShadowVOffset,
        label: 'boxShadowVOffset',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
      },
      boxShadowBlur: {
        value: boxShadowBlur,
        label: 'boxShadowBlur',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Blur', 'ultimate-addons-for-gutenberg')
      },
      boxShadowSpread: {
        value: boxShadowSpread,
        label: 'boxShadowSpread',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Spread', 'ultimate-addons-for-gutenberg')
      },
      boxShadowPosition: {
        value: boxShadowPosition,
        label: 'boxShadowPosition',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Position', 'ultimate-addons-for-gutenberg')
      },
      popup: true
    }));
  };

  const buttonSettings = () => {
    const tabOutputNormal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonBgColor ? buttonBgColor : '',
      data: {
        value: buttonBgColor,
        label: 'buttonBgColor'
      },
      setAttributes: setAttributes
    }), 'text' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonTextColor ? buttonTextColor : '',
      data: {
        value: buttonTextColor,
        label: 'buttonTextColor'
      },
      setAttributes: setAttributes
    }), 'icon' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonIconColor ? buttonIconColor : '',
      data: {
        value: buttonIconColor,
        label: 'buttonIconColor'
      },
      setAttributes: setAttributes
    }));
    const tabOutputHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonBgHoverColor ? buttonBgHoverColor : '',
      data: {
        value: buttonBgHoverColor,
        label: 'buttonBgHoverColor'
      },
      setAttributes: setAttributes
    }), 'text' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonTextHoverColor ? buttonTextHoverColor : '',
      data: {
        value: buttonTextHoverColor,
        label: 'buttonTextHoverColor'
      },
      setAttributes: setAttributes
    }), 'icon' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'),
      colorValue: buttonIconHoverColor ? buttonIconHoverColor : '',
      data: {
        value: buttonIconHoverColor,
        label: 'buttonIconHoverColor'
      },
      setAttributes: setAttributes
    }));

    if ('input-button' === layout) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Button', 'ultimate-addons-for-gutenberg'),
        initialOpen: false,
        className: "uagb__url-panel-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Width', 'ultimate-addons-for-gutenberg'),
        setAttributes: setAttributes,
        value: buttonWidth,
        data: {
          value: buttonWidth,
          label: 'buttonWidth'
        },
        min: 0,
        max: 500,
        unit: {
          value: buttonWidthType,
          label: 'buttonWidthType'
        }
      }), 'text' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
        fontStyle: {
          value: buttonFontStyle,
          label: 'buttonFontStyle'
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
        transform: {
          value: buttonTransform,
          label: 'buttonTransform'
        },
        decoration: {
          value: buttonDecoration,
          label: 'buttonDecoration'
        }
      })), 'icon' === buttonType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon Size', 'ultimate-addons-for-gutenberg'),
        setAttributes: setAttributes,
        value: buttonIconSize,
        data: {
          value: buttonIconSize,
          label: 'buttonIconSize'
        },
        min: 0,
        max: 100,
        unit: {
          value: buttonIconSizeType,
          label: 'buttonIconSizeType'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_8__["default"], {
        tabs: [{
          name: 'normal',
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Normal', 'ultimate-addons-for-gutenberg')
        }, {
          name: 'hover',
          title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Hover', 'ultimate-addons-for-gutenberg')
        }],
        normal: tabOutputNormal,
        hover: tabOutputHover,
        disableBottomSeparator: true
      }));
    }

    return '';
  };

  const iconSettings = () => {
    if ('input' === layout) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
        initialOpen: false,
        className: "uagb__url-panel-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size', 'ultimate-addons-for-gutenberg'),
        setAttributes: setAttributes,
        value: iconSize,
        data: {
          value: iconSize,
          label: 'iconSize'
        },
        min: 0,
        max: 100,
        unit: {
          value: iconSizeType,
          label: 'iconSizeType'
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: iconColor ? iconColor : '',
        data: {
          value: iconColor,
          label: 'iconColor'
        },
        setAttributes: setAttributes
      })));
    }

    return '';
  };

  let loadInputGoogleFonts;

  if (inputloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [inputFontFamily + (inputFontWeight ? ':' + inputFontWeight : '')]
      }
    };
    loadInputGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  let loadButtonGoogleFonts;

  if (buttonloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [buttonFontFamily + (buttonFontWeight ? ':' + buttonFontWeight : '')]
      }
    };
    loadButtonGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].general, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Notice"], {
    status: "warning",
    isDismissible: false
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('This block has been deprecated.', 'ultimate-addons-for-gutenberg')), generalSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].style, inputSettings(), iconSettings(), buttonSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["UAGTabs"].advance, {
    parentProps: props
  })))), loadInputGoogleFonts, loadButtonGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(Settings));

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
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _color_control_advanced_pop_color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control/advanced-pop-color-control */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _multi_buttons_control_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../multi-buttons-control/index */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Controls_getUAGEditorStateLocalStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Controls/getUAGEditorStateLocalStorage */ "./blocks-config/uagb-controls/getUAGEditorStateLocalStorage.js");
/**
 * Box-Shadow reusable component.
 *
 */










const BoxShadowControl = props => {
  const [showAdvancedControls, toggleAdvancedControls] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useLayoutEffect"])(() => {
    window.addEventListener('click', function (e) {
      var _e$target, _e$target$classList, _e$target2, _e$target2$parentElem, _e$target3, _e$target3$parentElem;

      const popupButton = document.querySelector(`.active.popup-${blockId} .spectra-control-popup__options--action-button`);
      const popupWrap = document.querySelector(`.active.popup-${blockId} .spectra-control-popup`);

      if (popupButton && !(popupButton !== null && popupButton !== void 0 && popupButton.contains(e.target)) && popupWrap && !(popupWrap !== null && popupWrap !== void 0 && popupWrap.contains(e.target)) && !((_e$target = e.target) !== null && _e$target !== void 0 && (_e$target$classList = _e$target.classList) !== null && _e$target$classList !== void 0 && _e$target$classList.contains('uagb-advanced-color-indicate')) && !((_e$target2 = e.target) !== null && _e$target2 !== void 0 && (_e$target2$parentElem = _e$target2.parentElement) !== null && _e$target2$parentElem !== void 0 && _e$target2$parentElem.closest('.uagb-popover-color')) && !((_e$target3 = e.target) !== null && _e$target3 !== void 0 && (_e$target3$parentElem = _e$target3.parentElement) !== null && _e$target3$parentElem !== void 0 && _e$target3$parentElem.closest('.uagb-reset'))) {
        toggleAdvancedControls(false);
      }
    });
  }, []);
  const {
    setAttributes,
    boxShadowColor,
    boxShadowHOffset,
    boxShadowVOffset,
    boxShadowBlur,
    boxShadowSpread,
    boxShadowPosition,
    label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Box Shadow', 'ultimate-addons-for-gutenberg'),
    popup = false,
    blockId
  } = props;
  let advancedControls;
  const activeClass = showAdvancedControls ? 'active' : '';
  const overallControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_color_control_advanced_pop_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: boxShadowColor.title,
    colorValue: boxShadowColor.value,
    data: {
      value: boxShadowColor.value,
      label: boxShadowColor.label
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: boxShadowHOffset.title,
    value: boxShadowHOffset.value,
    min: -100,
    max: 100,
    displayUnit: false,
    setAttributes: setAttributes,
    data: {
      value: boxShadowHOffset.value,
      label: boxShadowHOffset.label
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: boxShadowVOffset.title,
    value: boxShadowVOffset.value,
    min: -100,
    max: 100,
    displayUnit: false,
    setAttributes: setAttributes,
    data: {
      value: boxShadowVOffset.value,
      label: boxShadowVOffset.label
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: boxShadowBlur.title,
    value: boxShadowBlur.value,
    min: 0,
    max: 100,
    displayUnit: false,
    setAttributes: setAttributes,
    data: {
      value: boxShadowBlur.value,
      label: boxShadowBlur.label
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: boxShadowSpread.title,
    value: boxShadowSpread.value,
    min: -100,
    max: 100,
    displayUnit: false,
    setAttributes: setAttributes,
    data: {
      value: boxShadowSpread.value,
      label: boxShadowSpread.label
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_multi_buttons_control_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    label: boxShadowPosition.title,
    data: {
      value: boxShadowPosition.value,
      label: boxShadowPosition.label
    },
    options: [{
      value: 'outset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Outset', 'ultimate-addons-for-gutenberg'),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Outset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'inset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Inset', 'ultimate-addons-for-gutenberg'),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Inset (10px)', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }));

  if (showAdvancedControls) {
    advancedControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "uagb-box-shadow-advanced spectra-control-popup"
    }, overallControls);
  }

  const boxShadowAdvancedControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "spectra-control-popup__options--action-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "uag-control-label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: 'uag-box-shadow-button spectra-control-popup__options--action-button',
    "aria-pressed": showAdvancedControls,
    onClick: () => {
      const allPopups = document.querySelectorAll('.spectra-control-popup__options');

      if (allPopups && 0 < allPopups.length) {
        for (let i = 0; i < allPopups.length; i++) {
          var _allPopups$i;

          const popupButton = (_allPopups$i = allPopups[i]) === null || _allPopups$i === void 0 ? void 0 : _allPopups$i.querySelector('.spectra-control-popup__options.active .spectra-control-popup__options--action-button');
          popupButton === null || popupButton === void 0 ? void 0 : popupButton.click();
        }
      }

      toggleAdvancedControls(!showAdvancedControls);

      if (!showAdvancedControls) {
        var _getSelectedBlock;

        const {
          getSelectedBlock
        } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/block-editor');
        const blockName = (_getSelectedBlock = getSelectedBlock()) === null || _getSelectedBlock === void 0 ? void 0 : _getSelectedBlock.name;
        const uagSettingState = Object(_Controls_getUAGEditorStateLocalStorage__WEBPACK_IMPORTED_MODULE_8__["default"])('uagSettingState');
        const data = { ...uagSettingState,
          [blockName]: { ...(uagSettingState === null || uagSettingState === void 0 ? void 0 : uagSettingState[blockName]),
            selectedSetting: '.uag-box-shadow-options'
          }
        };
        const uagLocalStorage = Object(_Controls_getUAGEditorStateLocalStorage__WEBPACK_IMPORTED_MODULE_8__["default"])();

        if (uagLocalStorage) {
          uagLocalStorage.setItem('uagSettingState', JSON.stringify(data));
        }
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
    icon: "edit"
  })));
  return popup ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: `components-base-control uag-box-shadow-options spectra-control-popup__options popup-${blockId} ${activeClass}`
  }, boxShadowAdvancedControls, showAdvancedControls && advancedControls) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, overallControls);
};

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