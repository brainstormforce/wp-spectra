(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/marketing-button/settings"],{

/***/ "./src/blocks/marketing-button/settings.js":
/*!*************************************************!*\
  !*** ./src/blocks/marketing-button/settings.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Import all of our Text Options requirements.












var Settings = function Settings(props) {
  props = props.parentProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isURLPickerOpen = _useState2[0],
      setCount = _useState2[1];

  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      deviceType = _props.deviceType;
  var align = attributes.align,
      textAlign = attributes.textAlign,
      link = attributes.link,
      linkTarget = attributes.linkTarget,
      titleSpace = attributes.titleSpace,
      icon = attributes.icon,
      iconPosition = attributes.iconPosition,
      iconSpace = attributes.iconSpace,
      iconFontSize = attributes.iconFontSize,
      iconFontSizeMobile = attributes.iconFontSizeMobile,
      iconFontSizeTablet = attributes.iconFontSizeTablet,
      titleColor = attributes.titleColor,
      titleHoverColor = attributes.titleHoverColor,
      prefixColor = attributes.prefixColor,
      prefixHoverColor = attributes.prefixHoverColor,
      iconColor = attributes.iconColor,
      iconHoverColor = attributes.iconHoverColor,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      borderColor = attributes.borderColor,
      borderHoverColor = attributes.borderHoverColor,
      vPadding = attributes.vPadding,
      hPadding = attributes.hPadding,
      hPaddingMobile = attributes.hPaddingMobile,
      vPaddingMobile = attributes.vPaddingMobile,
      hPaddingTablet = attributes.hPaddingTablet,
      vPaddingTablet = attributes.vPaddingTablet,
      paddingType = attributes.paddingType,
      backgroundType = attributes.backgroundType,
      backgroundColor = attributes.backgroundColor,
      backgroundHoverColor = attributes.backgroundHoverColor,
      gradientColor1 = attributes.gradientColor1,
      gradientColor2 = attributes.gradientColor2,
      gradientLocation1 = attributes.gradientLocation1,
      gradientLocation2 = attributes.gradientLocation2,
      gradientType = attributes.gradientType,
      gradientAngle = attributes.gradientAngle,
      backgroundOpacity = attributes.backgroundOpacity,
      backgroundHoverOpacity = attributes.backgroundHoverOpacity,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleFontSubset = attributes.titleFontSubset,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeType = attributes.titleFontSizeType,
      titleFontSizeTablet = attributes.titleFontSizeTablet,
      titleFontSizeMobile = attributes.titleFontSizeMobile,
      titleLineHeightType = attributes.titleLineHeightType,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightTablet = attributes.titleLineHeightTablet,
      titleLineHeightMobile = attributes.titleLineHeightMobile,
      titleTag = attributes.titleTag,
      prefixFontFamily = attributes.prefixFontFamily,
      prefixFontWeight = attributes.prefixFontWeight,
      prefixFontSubset = attributes.prefixFontSubset,
      prefixFontSize = attributes.prefixFontSize,
      prefixFontSizeType = attributes.prefixFontSizeType,
      prefixFontSizeTablet = attributes.prefixFontSizeTablet,
      prefixFontSizeMobile = attributes.prefixFontSizeMobile,
      prefixLineHeightType = attributes.prefixLineHeightType,
      prefixLineHeight = attributes.prefixLineHeight,
      prefixLineHeightTablet = attributes.prefixLineHeightTablet,
      prefixLineHeightMobile = attributes.prefixLineHeightMobile;

  var onChangeOpensInNewTab = function onChangeOpensInNewTab(value) {
    setAttributes({
      linkTarget: value
    });
  }; // Load Google fonts for heading.


  var loadTitleGoogleFonts;

  if (loadTitleGoogleFonts == true) {
    var titleconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      config: titleconfig
    });
  } // Load Google fonts for prefix.


  var loadPrefixGoogleFonts;

  if (loadPrefixGoogleFonts == true) {
    var prefixconfig = {
      google: {
        families: [prefixFontFamily + (prefixFontWeight ? ':' + prefixFontWeight : '')]
      }
    };
    loadPrefixGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_7__["default"], {
      config: prefixconfig
    });
  }

  var blockControls = function blockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["BlockAlignmentToolbar"], {
      value: align,
      onChange: function onChange(value) {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right', 'full']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToolbarGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToolbarButton"], {
      icon: "admin-links",
      name: "link",
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Link', 'ultimate-addons-for-gutenberg'),
      onClick: function onClick() {
        return setCount(true);
      }
    })));
  };

  var linkControl = isURLPickerOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Popover"], {
    position: "bottom center",
    onClose: function onClose() {
      return setCount(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["__experimentalLinkControl"], {
    value: {
      url: link,
      opensInNewTab: linkTarget
    },
    onChange: function onChange(_ref) {
      var _ref$url = _ref.url,
          newURL = _ref$url === void 0 ? '' : _ref$url,
          newOpensInNewTab = _ref.opensInNewTab;
      setAttributes({
        link: newURL
      });
      setAttributes({
        linkTarget: newOpensInNewTab
      });
      onChangeOpensInNewTab(newOpensInNewTab);
    }
  }));

  var generalSettings = function generalSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Text Alignment', 'ultimate-addons-for-gutenberg'),
      value: textAlign,
      onChange: function onChange(value) {
        return setAttributes({
          textAlign: value
        });
      },
      options: [{
        value: 'center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button Icon')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      icons: wp.UAGBSvgIcons,
      renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
      value: icon,
      onChange: function onChange(value) {
        return setAttributes({
          icon: value
        });
      },
      isMulti: false,
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
    }), '' !== icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Position', 'ultimate-addons-for-gutenberg'),
      value: iconPosition,
      onChange: function onChange(value) {
        return setAttributes({
          iconPosition: value
        });
      },
      options: [{
        value: 'before',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Before Text', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('After Text', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Spacing', 'ultimate-addons-for-gutenberg'),
      value: iconSpace,
      onChange: function onChange(value) {
        return setAttributes({
          iconSpace: value
        });
      },
      min: 0,
      max: 50,
      beforeIcon: "",
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_8__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Size', 'ultimate-addons-for-gutenberg'),
      value: iconFontSize,
      onChange: function onChange(value) {
        return setAttributes({
          iconFontSize: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Size', 'ultimate-addons-for-gutenberg'),
      value: iconFontSizeTablet,
      onChange: function onChange(value) {
        return setAttributes({
          iconFontSizeTablet: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Size', 'ultimate-addons-for-gutenberg'),
      value: iconFontSizeMobile,
      onChange: function onChange(value) {
        return setAttributes({
          iconFontSizeMobile: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: titleSpace,
      onChange: function onChange(value) {
        return setAttributes({
          titleSpace: value
        });
      },
      min: 0,
      max: 20,
      beforeIcon: "",
      allowReset: true
    }));
  };

  var contentSettings = function contentSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title Tag', 'ultimate-addons-for-gutenberg'),
      value: titleTag,
      onChange: function onChange(value) {
        return setAttributes({
          titleTag: value
        });
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('p', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: loadTitleGoogleFonts,
        label: 'loadTitleGoogleFonts'
      },
      fontFamily: {
        value: titleFontFamily,
        label: 'titleFontFamily'
      },
      fontWeight: {
        value: titleFontWeight,
        label: 'titleFontWeight'
      },
      fontSubset: {
        value: titleFontSubset,
        label: 'titleFontSubset'
      },
      fontSizeType: {
        value: titleFontSizeType,
        label: 'titleFontSizeType'
      },
      fontSize: {
        value: titleFontSize,
        label: 'titleFontSize'
      },
      fontSizeMobile: {
        value: titleFontSizeMobile,
        label: 'titleFontSizeMobile'
      },
      fontSizeTablet: {
        value: titleFontSizeTablet,
        label: 'titleFontSizeTablet'
      },
      lineHeightType: {
        value: titleLineHeightType,
        label: 'titleLineHeightType'
      },
      lineHeight: {
        value: titleLineHeight,
        label: 'titleLineHeight'
      },
      lineHeightMobile: {
        value: titleLineHeightMobile,
        label: 'titleLineHeightMobile'
      },
      lineHeightTablet: {
        value: titleLineHeightTablet,
        label: 'titleLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: loadPrefixGoogleFonts,
        label: 'loadPrefixGoogleFonts'
      },
      fontFamily: {
        value: prefixFontFamily,
        label: 'prefixFontFamily'
      },
      fontWeight: {
        value: prefixFontWeight,
        label: 'prefixFontWeight'
      },
      fontSubset: {
        value: prefixFontSubset,
        label: 'prefixFontSubset'
      },
      fontSizeType: {
        value: prefixFontSizeType,
        label: 'prefixFontSizeType'
      },
      fontSize: {
        value: prefixFontSize,
        label: 'prefixFontSize'
      },
      fontSizeMobile: {
        value: prefixFontSizeMobile,
        label: 'prefixFontSizeMobile'
      },
      fontSizeTablet: {
        value: prefixFontSizeTablet,
        label: 'prefixFontSizeTablet'
      },
      lineHeightType: {
        value: prefixLineHeightType,
        label: 'prefixLineHeightType'
      },
      lineHeight: {
        value: prefixLineHeight,
        label: 'prefixLineHeight'
      },
      lineHeightMobile: {
        value: prefixLineHeightMobile,
        label: 'prefixLineHeightMobile'
      },
      lineHeightTablet: {
        value: prefixLineHeightTablet,
        label: 'prefixLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Colors')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["TabPanel"], {
      className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
      activeClass: "active-tab",
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-normal-tab'
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Hover', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-focus-tab'
      }]
    }, function (tabName) {
      var tabout_color;

      if ('normal' === tabName.name) {
        tabout_color = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: titleColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
          value: titleColor,
          onChange: function onChange(colorValue) {
            return setAttributes({
              titleColor: colorValue
            });
          },
          allowReset: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: iconColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
          value: iconColor,
          onChange: function onChange(colorValue) {
            return setAttributes({
              iconColor: colorValue
            });
          },
          allowReset: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: prefixColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
          value: prefixColor,
          onChange: function onChange(colorValue) {
            return setAttributes({
              prefixColor: colorValue
            });
          },
          allowReset: true
        }));
      } else {
        tabout_color = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: titleHoverColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
          value: titleHoverColor,
          onChange: function onChange(colorValue) {
            return setAttributes({
              titleHoverColor: colorValue
            });
          },
          allowReset: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: iconHoverColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
          value: iconHoverColor,
          onChange: function onChange(colorValue) {
            return setAttributes({
              iconHoverColor: colorValue
            });
          },
          allowReset: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: prefixHoverColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
          value: prefixHoverColor,
          onChange: function onChange(colorValue) {
            return setAttributes({
              prefixHoverColor: colorValue
            });
          },
          allowReset: true
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, tabout_color);
    }));
  };

  var backgroundSettings = function backgroundSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_8__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingType === 'px',
      "aria-pressed": paddingType === 'px',
      onClick: function onClick() {
        return setAttributes({
          paddingType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingType === '%',
      "aria-pressed": paddingType === '%',
      onClick: function onClick() {
        return setAttributes({
          paddingType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button Padding')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vPadding,
      onChange: function onChange(value) {
        return setAttributes({
          vPadding: value
        });
      },
      min: 0,
      max: '%' == paddingType ? 100 : 2000
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hPadding,
      onChange: function onChange(value) {
        return setAttributes({
          hPadding: value
        });
      },
      min: 0,
      max: '%' == paddingType ? 100 : 2000
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingType === 'px',
      "aria-pressed": paddingType === 'px',
      onClick: function onClick() {
        return setAttributes({
          paddingType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingType === '%',
      "aria-pressed": paddingType === '%',
      onClick: function onClick() {
        return setAttributes({
          paddingType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button Padding')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          vPaddingTablet: value
        });
      },
      min: 0,
      max: '%' == paddingType ? 100 : 2000
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          hPaddingTablet: value
        });
      },
      min: 0,
      max: '%' == paddingType ? 100 : 2000
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingType === 'px',
      "aria-pressed": paddingType === 'px',
      onClick: function onClick() {
        return setAttributes({
          paddingType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingType === '%',
      "aria-pressed": paddingType === '%',
      onClick: function onClick() {
        return setAttributes({
          paddingType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button Padding')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          vPaddingMobile: value
        });
      },
      min: 0,
      max: '%' == paddingType ? 100 : 2000
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          hPaddingMobile: value
        });
      },
      min: 0,
      max: '%' == paddingType ? 100 : 2000
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Button Background', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Type', 'ultimate-addons-for-gutenberg'),
      value: backgroundType,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundType: value
        });
      },
      options: [{
        value: 'transparent',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Transparent', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'color',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'gradient',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Gradient', 'ultimate-addons-for-gutenberg')
      }]
    }), 'color' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: backgroundColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundColor: colorValue
        });
      },
      allowReset: true
    })), 'gradient' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["PanelColorSettings"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color Settings', 'ultimate-addons-for-gutenberg'),
      colorSettings: [{
        value: gradientColor2,
        onChange: function onChange(value) {
          return setAttributes({
            gradientColor2: value
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: gradientColor1,
        onChange: function onChange(value) {
          return setAttributes({
            gradientColor1: value
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color 2', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      value: gradientType,
      onChange: function onChange(value) {
        return setAttributes({
          gradientType: value
        });
      },
      options: [{
        value: 'linear',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Linear', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'radial',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Radial', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Location 1', 'ultimate-addons-for-gutenberg'),
      value: gradientLocation1,
      onChange: function onChange(value) {
        return setAttributes({
          gradientLocation1: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Location 2', 'ultimate-addons-for-gutenberg'),
      value: gradientLocation2,
      onChange: function onChange(value) {
        return setAttributes({
          gradientLocation2: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Angle', 'ultimate-addons-for-gutenberg'),
      value: gradientAngle,
      onChange: function onChange(value) {
        return setAttributes({
          gradientAngle: value
        });
      },
      min: 0,
      max: 360,
      allowReset: true
    })), 'transparent' !== backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Opacity', 'ultimate-addons-for-gutenberg'),
      value: backgroundOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundOpacity: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true,
      initialPosition: 0
    }), 'color' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundHoverColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: backgroundHoverColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundHoverColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Opacity', 'ultimate-addons-for-gutenberg'),
      value: backgroundHoverOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundHoverOpacity: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true,
      initialPosition: 0
    })));
  };

  var borderSettings = function borderSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          borderStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' !== borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      onChange: function onChange(value) {
        return setAttributes({
          borderWidth: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      max: 1000,
      allowReset: true
    }), 'none' !== borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: borderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          borderColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderHoverColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: borderHoverColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          borderHoverColor: colorValue
        });
      },
      allowReset: true
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_5__["default"])()
  }, blockControls(), linkControl, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["InspectorControls"], null, generalSettings(), contentSettings(), backgroundSettings(), borderSettings()), loadTitleGoogleFonts, loadPrefixGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map