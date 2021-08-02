(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/section/settings"],{

/***/ "./src/blocks/section/settings.js":
/*!****************************************!*\
  !*** ./src/blocks/section/settings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_box_shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/box-shadow */ "./src/components/box-shadow/index.js");
/* harmony import */ var _components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _components_spacing_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/background */ "./src/components/background/index.js");
/* harmony import */ var _components_border__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/border */ "./src/components/border/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      deviceType = _props.deviceType;
  var align = attributes.align,
      contentWidth = attributes.contentWidth,
      width = attributes.width,
      widthUnit = attributes.widthUnit,
      innerWidth = attributes.innerWidth,
      innerWidthType = attributes.innerWidthType,
      tag = attributes.tag,
      themeWidth = attributes.themeWidth,
      leftPadding = attributes.leftPadding,
      rightPadding = attributes.rightPadding,
      topPadding = attributes.topPadding,
      bottomPadding = attributes.bottomPadding,
      leftMargin = attributes.leftMargin,
      rightMargin = attributes.rightMargin,
      topMargin = attributes.topMargin,
      bottomMargin = attributes.bottomMargin,
      topPaddingTablet = attributes.topPaddingTablet,
      bottomPaddingTablet = attributes.bottomPaddingTablet,
      leftPaddingTablet = attributes.leftPaddingTablet,
      rightPaddingTablet = attributes.rightPaddingTablet,
      topMarginTablet = attributes.topMarginTablet,
      bottomMarginTablet = attributes.bottomMarginTablet,
      leftMarginTablet = attributes.leftMarginTablet,
      rightMarginTablet = attributes.rightMarginTablet,
      topPaddingMobile = attributes.topPaddingMobile,
      bottomPaddingMobile = attributes.bottomPaddingMobile,
      leftPaddingMobile = attributes.leftPaddingMobile,
      rightPaddingMobile = attributes.rightPaddingMobile,
      topMarginMobile = attributes.topMarginMobile,
      bottomMarginMobile = attributes.bottomMarginMobile,
      leftMarginMobile = attributes.leftMarginMobile,
      rightMarginMobile = attributes.rightMarginMobile,
      backgroundType = attributes.backgroundType,
      backgroundImage = attributes.backgroundImage,
      backgroundVideo = attributes.backgroundVideo,
      backgroundColor = attributes.backgroundColor,
      backgroundPosition = attributes.backgroundPosition,
      backgroundAttachment = attributes.backgroundAttachment,
      backgroundRepeat = attributes.backgroundRepeat,
      backgroundSize = attributes.backgroundSize,
      backgroundOpacity = attributes.backgroundOpacity,
      backgroundVideoColor = attributes.backgroundVideoColor,
      backgroundVideoOpacity = attributes.backgroundVideoOpacity,
      backgroundImageColor = attributes.backgroundImageColor,
      overlayType = attributes.overlayType,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      borderColor = attributes.borderColor,
      borderHoverColor = attributes.borderHoverColor,
      mobileMarginType = attributes.mobileMarginType,
      tabletMarginType = attributes.tabletMarginType,
      desktopMarginType = attributes.desktopMarginType,
      mobilePaddingType = attributes.mobilePaddingType,
      tabletPaddingType = attributes.tabletPaddingType,
      desktopPaddingType = attributes.desktopPaddingType,
      boxShadowColor = attributes.boxShadowColor,
      boxShadowHOffset = attributes.boxShadowHOffset,
      boxShadowVOffset = attributes.boxShadowVOffset,
      boxShadowBlur = attributes.boxShadowBlur,
      boxShadowSpread = attributes.boxShadowSpread,
      boxShadowPosition = attributes.boxShadowPosition,
      spacingLink = attributes.spacingLink,
      gradientValue = attributes.gradientValue;
  var blockControls = ["left", "center", "right"];

  if ("full_width" == contentWidth) {
    blockControls = ["wide", "full"];
  }

  var getLayoutPanelBody = function getLayoutPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Layout", "ultimate-addons-for-gutenberg"),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Content Width", "ultimate-addons-for-gutenberg"),
      value: contentWidth,
      onChange: function onChange(value) {
        return setAttributes({
          contentWidth: value
        });
      },
      options: [{
        value: "boxed",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Boxed", "ultimate-addons-for-gutenberg")
      }, {
        value: "full_width",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Full Width", "ultimate-addons-for-gutenberg")
      }]
    }), contentWidth == "boxed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Width", "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: width,
      onChange: function onChange(value) {
        return setAttributes({
          width: value
        });
      },
      min: 0,
      max: 2000,
      unit: {
        value: widthUnit,
        label: "widthUnit"
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Pixel", "ultimate-addons-for-gutenberg"),
        unitValue: "px"
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Em", "ultimate-addons-for-gutenberg"),
        unitValue: "em"
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("%", "ultimate-addons-for-gutenberg"),
        unitValue: "%"
      }]
    }), contentWidth !== "boxed" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Inherit Inner Width from Theme", "ultimate-addons-for-gutenberg"),
      checked: themeWidth,
      onChange: function onChange() {
        return setAttributes({
          themeWidth: !themeWidth
        });
      }
    }), contentWidth !== "boxed" && !themeWidth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Inner Width", "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: innerWidth,
      onChange: function onChange(value) {
        return setAttributes({
          innerWidth: value
        });
      },
      min: 0,
      max: 2000,
      unit: {
        value: innerWidthType,
        label: "innerWidthType"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("HTML Tag", "ultimate-addons-for-gutenberg"),
      value: tag,
      onChange: function onChange(value) {
        return setAttributes({
          tag: value
        });
      },
      options: [{
        value: "div",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("div", "ultimate-addons-for-gutenberg")
      }, {
        value: "header",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("header", "ultimate-addons-for-gutenberg")
      }, {
        value: "footer",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("footer", "ultimate-addons-for-gutenberg")
      }, {
        value: "main",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("main", "ultimate-addons-for-gutenberg")
      }, {
        value: "article",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("article", "ultimate-addons-for-gutenberg")
      }, {
        value: "section",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("section", "ultimate-addons-for-gutenberg")
      }, {
        value: "aside",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("aside", "ultimate-addons-for-gutenberg")
      }, {
        value: "nav",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("nav", "ultimate-addons-for-gutenberg")
      }]
    }));
  };

  var getSpacingPanelBody = function getSpacingPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: "Spacing",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Padding", "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: topPadding,
        label: "topPadding"
      },
      valueRight: {
        value: rightPadding,
        label: "rightPadding"
      },
      valueBottom: {
        value: bottomPadding,
        label: "bottomPadding"
      },
      valueLeft: {
        value: leftPadding,
        label: "leftPadding"
      },
      valueTopTablet: {
        value: topPaddingTablet,
        label: "topPaddingTablet"
      },
      valueRightTablet: {
        value: rightPaddingTablet,
        label: "rightPaddingTablet"
      },
      valueBottomTablet: {
        value: bottomPaddingTablet,
        label: "bottomPaddingTablet"
      },
      valueLeftTablet: {
        value: leftPaddingTablet,
        label: "leftPaddingTablet"
      },
      valueTopMobile: {
        value: topPaddingMobile,
        label: "topPaddingMobile"
      },
      valueRightMobile: {
        value: rightPaddingMobile,
        label: "rightPaddingMobile"
      },
      valueBottomMobile: {
        value: bottomPaddingMobile,
        label: "bottomPaddingMobile"
      },
      valueLeftMobile: {
        value: leftPaddingMobile,
        label: "leftPaddingMobile"
      },
      unit: {
        value: desktopPaddingType,
        label: "desktopPaddingType"
      },
      mUnit: {
        value: mobilePaddingType,
        label: "mobilePaddingType"
      },
      tUnit: {
        value: tabletPaddingType,
        label: "tabletPaddingType"
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: "spacingLink"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Margin", "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: topMargin,
        label: "topMargin"
      },
      valueRight: {
        value: rightMargin,
        label: "rightMargin"
      },
      valueBottom: {
        value: bottomMargin,
        label: "bottomMargin"
      },
      valueLeft: {
        value: leftMargin,
        label: "leftMargin"
      },
      valueTopTablet: {
        value: topMarginTablet,
        label: "topMarginTablet"
      },
      valueRightTablet: {
        value: rightMarginTablet,
        label: "rightMarginTablet"
      },
      valueBottomTablet: {
        value: bottomMarginTablet,
        label: "bottomMarginTablet"
      },
      valueLeftTablet: {
        value: leftMarginTablet,
        label: "leftMarginTablet"
      },
      valueTopMobile: {
        value: topMarginMobile,
        label: "topMarginMobile"
      },
      valueRightMobile: {
        value: rightMarginMobile,
        label: "rightMarginMobile"
      },
      valueBottomMobile: {
        value: bottomMarginMobile,
        label: "bottomMarginMobile"
      },
      valueLeftMobile: {
        value: leftMarginMobile,
        label: "leftMarginMobile"
      },
      unit: {
        value: desktopMarginType,
        label: "desktopMarginType"
      },
      mUnit: {
        value: mobileMarginType,
        label: "mobileMarginType"
      },
      tUnit: {
        value: tabletMarginType,
        label: "tabletMarginType"
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: "spacingLink"
      }
    })));
  };

  var getBackgroundPanelBody = function getBackgroundPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Background", "ultimate-addons-for-gutenberg"),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_background__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
      setAttributes: setAttributes,
      backgroundGradient: {
        value: gradientValue,
        label: "gradientValue"
      },
      backgroundImageColor: {
        value: backgroundImageColor,
        label: "backgroundImageColor"
      },
      overlayType: {
        value: overlayType,
        label: "overlayType"
      },
      backgroundSize: {
        value: backgroundSize,
        label: "backgroundSize"
      },
      backgroundRepeat: {
        value: backgroundRepeat,
        label: "backgroundRepeat"
      },
      backgroundAttachment: {
        value: backgroundAttachment,
        label: "backgroundAttachment"
      },
      backgroundPosition: {
        value: backgroundPosition,
        label: "backgroundPosition"
      },
      backgroundImage: {
        value: backgroundImage,
        label: "backgroundImage"
      },
      backgroundColor: {
        value: backgroundColor,
        label: "backgroundColor"
      },
      backgroundType: {
        value: backgroundType,
        label: "backgroundType"
      },
      backgroundOpacity: {
        value: backgroundOpacity,
        label: "backgroundOpacity"
      },
      backgroundVideoType: {
        value: true
      },
      backgroundVideo: {
        value: backgroundVideo,
        label: "backgroundVideo"
      },
      backgroundVideoColor: {
        value: backgroundVideoColor,
        label: "backgroundVideoColor"
      },
      backgroundVideoOpacity: {
        value: backgroundVideoOpacity,
        label: "backgroundVideoOpacity"
      }
    }, props)));
  };

  var getBorderPanelBody = function getBorderPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border", "ultimate-addons-for-gutenberg"),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_border__WEBPACK_IMPORTED_MODULE_9__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: "borderStyle",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Style", "ultimate-addons-for-gutenberg")
      },
      borderWidth: {
        value: borderWidth,
        label: "borderWidth",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Width", "ultimate-addons-for-gutenberg")
      },
      borderRadius: {
        value: borderRadius,
        label: "borderRadius",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Radius", "ultimate-addons-for-gutenberg")
      },
      borderColor: {
        value: borderColor,
        label: "borderColor",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Color", "ultimate-addons-for-gutenberg")
      },
      borderHoverColor: {
        value: borderHoverColor,
        label: "borderHoverColor",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Hover Color", "ultimate-addons-for-gutenberg")
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: "Box Shadow",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_box_shadow__WEBPACK_IMPORTED_MODULE_3__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Box Shadow", "ultimate-addons-for-gutenberg"),
      boxShadowColor: {
        value: boxShadowColor,
        label: "boxShadowColor",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Color", "ultimate-addons-for-gutenberg")
      },
      boxShadowHOffset: {
        value: boxShadowHOffset,
        label: "boxShadowHOffset",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Horizontal", "ultimate-addons-for-gutenberg")
      },
      boxShadowVOffset: {
        value: boxShadowVOffset,
        label: "boxShadowVOffset",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Vertical", "ultimate-addons-for-gutenberg")
      },
      boxShadowBlur: {
        value: boxShadowBlur,
        label: "boxShadowBlur",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Blur", "ultimate-addons-for-gutenberg")
      },
      boxShadowSpread: {
        value: boxShadowSpread,
        label: "boxShadowSpread",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Spread", "ultimate-addons-for-gutenberg")
      },
      boxShadowPosition: {
        value: boxShadowPosition,
        label: "boxShadowPosition",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Position", "ultimate-addons-for-gutenberg")
      }
    })));
  };

  var generalSetting = function generalSetting() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tabs: ["general", "advance"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: "general"
    }, getLayoutPanelBody(), getSpacingPanelBody(), getBorderPanelBody(), getBackgroundPanelBody()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: "advance"
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["BlockAlignmentToolbar"], {
    value: align,
    onChange: function onChange(value) {
      setAttributes({
        align: value
      });
    },
    controls: blockControls
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["InspectorControls"], null, generalSetting()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map