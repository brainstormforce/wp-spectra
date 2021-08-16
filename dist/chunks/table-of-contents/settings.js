(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/table-of-contents/settings"],{

/***/ "./src/blocks/table-of-contents/settings.js":
/*!**************************************************!*\
  !*** ./src/blocks/table-of-contents/settings.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }













var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      deviceType = _props.deviceType;
  var align = attributes.align,
      disableBullets = attributes.disableBullets,
      makeCollapsible = attributes.makeCollapsible,
      initialCollapse = attributes.initialCollapse,
      icon = attributes.icon,
      iconColor = attributes.iconColor,
      bulletColor = attributes.bulletColor,
      iconSize = attributes.iconSize,
      smoothScroll = attributes.smoothScroll,
      smoothScrollOffset = attributes.smoothScrollOffset,
      smoothScrollDelay = attributes.smoothScrollDelay,
      scrollToTop = attributes.scrollToTop,
      scrollToTopColor = attributes.scrollToTopColor,
      scrollToTopBgColor = attributes.scrollToTopBgColor,
      customWidth = attributes.customWidth,
      widthDesktop = attributes.widthDesktop,
      widthTablet = attributes.widthTablet,
      widthMobile = attributes.widthMobile,
      widthTypeMobile = attributes.widthTypeMobile,
      widthTypeTablet = attributes.widthTypeTablet,
      widthTypeDesktop = attributes.widthTypeDesktop,
      tColumnsDesktop = attributes.tColumnsDesktop,
      tColumnsTablet = attributes.tColumnsTablet,
      tColumnsMobile = attributes.tColumnsMobile,
      backgroundColor = attributes.backgroundColor,
      linkColor = attributes.linkColor,
      linkHoverColor = attributes.linkHoverColor,
      headingColor = attributes.headingColor,
      vPaddingDesktop = attributes.vPaddingDesktop,
      vPaddingTablet = attributes.vPaddingTablet,
      vPaddingMobile = attributes.vPaddingMobile,
      hPaddingDesktop = attributes.hPaddingDesktop,
      hPaddingTablet = attributes.hPaddingTablet,
      hPaddingMobile = attributes.hPaddingMobile,
      paddingTypeMobile = attributes.paddingTypeMobile,
      paddingTypeTablet = attributes.paddingTypeTablet,
      paddingTypeDesktop = attributes.paddingTypeDesktop,
      vMarginDesktop = attributes.vMarginDesktop,
      vMarginTablet = attributes.vMarginTablet,
      vMarginMobile = attributes.vMarginMobile,
      hMarginDesktop = attributes.hMarginDesktop,
      hMarginTablet = attributes.hMarginTablet,
      hMarginMobile = attributes.hMarginMobile,
      marginTypeMobile = attributes.marginTypeMobile,
      marginTypeTablet = attributes.marginTypeTablet,
      marginTypeDesktop = attributes.marginTypeDesktop,
      headingBottom = attributes.headingBottom,
      contentPaddingDesktop = attributes.contentPaddingDesktop,
      contentPaddingTablet = attributes.contentPaddingTablet,
      contentPaddingMobile = attributes.contentPaddingMobile,
      contentPaddingTypeMobile = attributes.contentPaddingTypeMobile,
      contentPaddingTypeTablet = attributes.contentPaddingTypeTablet,
      contentPaddingTypeDesktop = attributes.contentPaddingTypeDesktop,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      borderColor = attributes.borderColor,
      loadGoogleFonts = attributes.loadGoogleFonts,
      fontFamily = attributes.fontFamily,
      fontWeight = attributes.fontWeight,
      fontSubset = attributes.fontSubset,
      fontSize = attributes.fontSize,
      fontSizeType = attributes.fontSizeType,
      fontSizeTablet = attributes.fontSizeTablet,
      fontSizeMobile = attributes.fontSizeMobile,
      lineHeightType = attributes.lineHeightType,
      lineHeight = attributes.lineHeight,
      lineHeightTablet = attributes.lineHeightTablet,
      lineHeightMobile = attributes.lineHeightMobile,
      headingLoadGoogleFonts = attributes.headingLoadGoogleFonts,
      headingFontFamily = attributes.headingFontFamily,
      headingFontWeight = attributes.headingFontWeight,
      headingFontSubset = attributes.headingFontSubset,
      headingFontSize = attributes.headingFontSize,
      headingFontSizeType = attributes.headingFontSizeType,
      headingFontSizeTablet = attributes.headingFontSizeTablet,
      headingFontSizeMobile = attributes.headingFontSizeMobile,
      headingLineHeightType = attributes.headingLineHeightType,
      headingLineHeight = attributes.headingLineHeight,
      headingLineHeightTablet = attributes.headingLineHeightTablet,
      headingLineHeightMobile = attributes.headingLineHeightMobile,
      mappingHeaders = attributes.mappingHeaders,
      headingAlignment = attributes.headingAlignment;

  var getIcon = function getIcon(value) {
    props.setAttributes({
      icon: value
    });
  };

  var iconProps = {
    icons: wp.UAGBSvgIcons,
    value: icon,
    onChange: getIcon,
    isMulti: false,
    renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
    noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
  };
  var loadGFonts;
  var headingloadGFonts;

  if (loadGoogleFonts == true) {
    var config = {
      google: {
        families: [fontFamily + (fontWeight ? ':' + fontWeight : '')]
      }
    };
    loadGFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      config: config
    });
  }

  if (headingLoadGoogleFonts == true) {
    var headingconfig = {
      google: {
        families: [headingFontFamily + (headingFontWeight ? ':' + headingFontWeight : '')]
      }
    };
    headingloadGFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      config: headingconfig
    });
  }

  var getGeneralPanelBody = function getGeneralPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select the heading to consider when generating the table', 'ultimate-addons-for-gutenberg')), mappingHeaders.map(function (a, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelRow"], {
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
        htmlFor: "ub_toggle_h".concat(i + 1)
      }, "H".concat(i + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
        id: "ub_toggle_h".concat(i + 1),
        checked: a,
        onChange: function onChange() {
          return setAttributes({
            mappingHeaders: [].concat(_toConsumableArray(mappingHeaders.slice(0, i)), [!mappingHeaders[i]], _toConsumableArray(mappingHeaders.slice(i + 1)))
          });
        }
      }));
    }));
  };

  var getScrollPanelBody = function getScrollPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Scroll', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Smooth Scroll', 'ultimate-addons-for-gutenberg'),
      checked: smoothScroll,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('This will be in Action only in Front End.', 'ultimate-addons-for-gutenberg'),
      onChange: function onChange() {
        return setAttributes({
          smoothScroll: !smoothScroll
        });
      }
    }), smoothScroll && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Smooth Scroll Offset (px)', 'ultimate-addons-for-gutenberg'),
      value: smoothScrollOffset,
      onChange: function onChange(value) {
        return setAttributes({
          smoothScrollOffset: value
        });
      },
      min: 0,
      max: 1000
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Scroll Animation Delay (ms)', 'ultimate-addons-for-gutenberg'),
      value: smoothScrollDelay,
      onChange: function onChange(value) {
        return setAttributes({
          smoothScrollDelay: value
        });
      },
      min: 100,
      max: 5000
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show Scroll To Top', 'ultimate-addons-for-gutenberg'),
      checked: scrollToTop,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('This will add a Scroll to Top arrow at the bottom of page.', 'ultimate-addons-for-gutenberg'),
      onChange: function onChange() {
        return setAttributes({
          scrollToTop: !scrollToTop
        });
      }
    }), scrollToTop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: scrollToTopColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: scrollToTopColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          scrollToTopColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: scrollToTopBgColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: scrollToTopBgColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          scrollToTopBgColor: colorValue
        });
      },
      allowReset: true
    })));
  };

  var getContentPanelBody = function getContentPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Heading', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      value: headingAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          headingAlignment: value
        });
      },
      options: [{
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bottom Space', 'ultimate-addons-for-gutenberg'),
      value: headingBottom,
      onChange: function onChange(value) {
        return setAttributes({
          headingBottom: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: headingLoadGoogleFonts,
        label: 'headingLoadGoogleFonts'
      },
      fontFamily: {
        value: headingFontFamily,
        label: 'headingFontFamily'
      },
      fontWeight: {
        value: headingFontWeight,
        label: 'headingFontWeight'
      },
      fontSubset: {
        value: headingFontSubset,
        label: 'headingFontSubset'
      },
      fontSizeType: {
        value: headingFontSizeType,
        label: 'headingFontSizeType'
      },
      fontSize: {
        value: headingFontSize,
        label: 'headingFontSize'
      },
      fontSizeMobile: {
        value: headingFontSizeMobile,
        label: 'headingFontSizeMobile'
      },
      fontSizeTablet: {
        value: headingFontSizeTablet,
        label: 'headingFontSizeTablet'
      },
      lineHeightType: {
        value: headingLineHeightType,
        label: 'headingLineHeightType'
      },
      lineHeight: {
        value: headingLineHeight,
        label: 'headingLineHeight'
      },
      lineHeightMobile: {
        value: headingLineHeightMobile,
        label: 'headingLineHeightMobile'
      },
      lineHeightTablet: {
        value: headingLineHeightTablet,
        label: 'headingLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Heading Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: headingColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: headingColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          headingColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Collapsible', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Make Content Collapsible', 'ultimate-addons-for-gutenberg'),
      checked: makeCollapsible,
      onChange: function onChange() {
        return setAttributes({
          makeCollapsible: !makeCollapsible
        });
      }
    }), makeCollapsible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Keep Collapsed Initially', 'ultimate-addons-for-gutenberg'),
      checked: initialCollapse,
      onChange: function onChange() {
        return setAttributes({
          initialCollapse: !initialCollapse
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_6___default.a, iconProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Icon Size', 'ultimate-addons-for-gutenberg'),
      value: iconSize,
      onChange: function onChange(value) {
        return setAttributes({
          iconSize: value
        });
      },
      min: 0,
      max: 300,
      beforeIcon: "",
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: iconColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          iconColor: colorValue
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Content', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Disable Bullet Points', 'ultimate-addons-for-gutenberg'),
      checked: disableBullets,
      onChange: function onChange() {
        return setAttributes({
          disableBullets: !disableBullets
        });
      }
    }), !disableBullets && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bullet Points Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: bulletColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: bulletColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          bulletColor: colorValue
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_7__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: contentPaddingTypeDesktop === 'px',
      "aria-pressed": contentPaddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          contentPaddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: contentPaddingTypeDesktop === '%',
      "aria-pressed": contentPaddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          contentPaddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
      className: "uagb-light-font-weight"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Gap Between Lists')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      className: 'uagb-gap-control',
      value: contentPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          contentPaddingDesktop: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: contentPaddingTypeTablet === 'px',
      "aria-pressed": contentPaddingTypeTablet === 'px',
      onClick: function onClick() {
        return setAttributes({
          contentPaddingTypeTablet: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: contentPaddingTypeTablet === '%',
      "aria-pressed": contentPaddingTypeTablet === '%',
      onClick: function onClick() {
        return setAttributes({
          contentPaddingTypeTablet: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
      className: "uagb-lighter-font-weight"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Gap Between Lists')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      className: 'uagb-margin-control',
      value: contentPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          contentPaddingTablet: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: contentPaddingTypeMobile === 'px',
      "aria-pressed": contentPaddingTypeMobile === 'px',
      onClick: function onClick() {
        return setAttributes({
          contentPaddingTypeMobile: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: contentPaddingTypeMobile === '%',
      "aria-pressed": contentPaddingTypeMobile === '%',
      onClick: function onClick() {
        return setAttributes({
          contentPaddingTypeMobile: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
      className: "uagb-light-font-weight"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Gap Between Lists')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      className: 'uagb-margin-control',
      value: contentPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          contentPaddingMobile: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: loadGoogleFonts,
        label: 'loadGoogleFonts'
      },
      fontFamily: {
        value: fontFamily,
        label: 'fontFamily'
      },
      fontWeight: {
        value: fontWeight,
        label: 'fontWeight'
      },
      fontSubset: {
        value: fontSubset,
        label: 'fontSubset'
      },
      fontSizeType: {
        value: fontSizeType,
        label: 'fontSizeType'
      },
      fontSize: {
        value: fontSize,
        label: 'fontSize'
      },
      fontSizeMobile: {
        value: fontSizeMobile,
        label: 'fontSizeMobile'
      },
      fontSizeTablet: {
        value: fontSizeTablet,
        label: 'fontSizeTablet'
      },
      lineHeightType: {
        value: lineHeightType,
        label: 'lineHeightType'
      },
      lineHeight: {
        value: lineHeight,
        label: 'lineHeight'
      },
      lineHeightMobile: {
        value: lineHeightMobile,
        label: 'lineHeightMobile'
      },
      lineHeightTablet: {
        value: lineHeightTablet,
        label: 'lineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Content Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: linkColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: linkColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          linkColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Content Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: linkHoverColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: linkHoverColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          linkHoverColor: colorValue
        });
      },
      allowReset: true
    }));
  };

  var getStylePanelBody = function getStylePanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: backgroundColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Custom Width', 'ultimate-addons-for-gutenberg'),
      checked: customWidth,
      onChange: function onChange() {
        return setAttributes({
          customWidth: !customWidth
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Table's width will be auto if this is kept off.", 'ultimate-addons-for-gutenberg')
    }), customWidth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_7__["default"], null), 'Desktop' === deviceType && customWidth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: widthTypeDesktop === 'px',
      "aria-pressed": widthTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          widthTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: widthTypeDesktop === '%',
      "aria-pressed": widthTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          widthTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Width'),
      value: widthDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          widthDesktop: value
        });
      },
      min: 0,
      max: '%' == widthTypeDesktop ? 100 : 1000,
      beforeIcon: "",
      allowReset: true
    })), 'Tablet' === deviceType && customWidth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: widthTypeTablet === 'px',
      "aria-pressed": widthTypeTablet === 'px',
      onClick: function onClick() {
        return setAttributes({
          widthTypeTablet: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: widthTypeTablet === '%',
      "aria-pressed": widthTypeTablet === '%',
      onClick: function onClick() {
        return setAttributes({
          widthTypeTablet: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Width'),
      value: widthTablet,
      onChange: function onChange(value) {
        return setAttributes({
          widthTablet: value
        });
      },
      min: 0,
      max: '%' == widthTypeTablet ? 100 : 1000,
      beforeIcon: "",
      allowReset: true
    })), 'Mobile' === deviceType && customWidth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: widthTypeMobile === 'px',
      "aria-pressed": widthTypeMobile === 'px',
      onClick: function onClick() {
        return setAttributes({
          widthTypeMobile: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: widthTypeMobile === '%',
      "aria-pressed": widthTypeMobile === '%',
      onClick: function onClick() {
        return setAttributes({
          widthTypeMobile: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Width'),
      value: widthMobile,
      onChange: function onChange(value) {
        return setAttributes({
          widthMobile: value
        });
      },
      min: 0,
      max: '%' == widthTypeMobile ? 100 : 1000,
      beforeIcon: "",
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_7__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Columns'),
      value: tColumnsDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          tColumnsDesktop: value
        });
      },
      min: 1,
      max: 10
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Columns'),
      value: tColumnsTablet,
      onChange: function onChange(value) {
        return setAttributes({
          tColumnsTablet: value
        });
      },
      min: 1,
      max: 10
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Columns'),
      value: tColumnsMobile,
      onChange: function onChange(value) {
        return setAttributes({
          tColumnsMobile: value
        });
      },
      min: 1,
      max: 10
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_7__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingTypeDesktop === 'px',
      "aria-pressed": paddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          paddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingTypeDesktop === '%',
      "aria-pressed": paddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          paddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Padding')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          vPaddingDesktop: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          hPaddingDesktop: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingTypeTablet === 'px',
      "aria-pressed": paddingTypeTablet === 'px',
      onClick: function onClick() {
        return setAttributes({
          paddingTypeTablet: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingTypeTablet === '%',
      "aria-pressed": paddingTypeTablet === '%',
      onClick: function onClick() {
        return setAttributes({
          paddingTypeTablet: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Padding')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          vPaddingTablet: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          hPaddingTablet: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingTypeMobile === 'px',
      "aria-pressed": paddingTypeMobile === 'px',
      onClick: function onClick() {
        return setAttributes({
          paddingTypeMobile: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: paddingTypeMobile === '%',
      "aria-pressed": paddingTypeMobile === '%',
      onClick: function onClick() {
        return setAttributes({
          paddingTypeMobile: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Padding')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          vPaddingMobile: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          hPaddingMobile: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_7__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: marginTypeDesktop === 'px',
      "aria-pressed": marginTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          marginTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: marginTypeDesktop === '%',
      "aria-pressed": marginTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          marginTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('List Margin')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vMarginDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          vMarginDesktop: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hMarginDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          hMarginDesktop: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: marginTypeTablet === 'px',
      "aria-pressed": marginTypeTablet === 'px',
      onClick: function onClick() {
        return setAttributes({
          marginTypeTablet: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: marginTypeTablet === '%',
      "aria-pressed": marginTypeTablet === '%',
      onClick: function onClick() {
        return setAttributes({
          marginTypeTablet: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('List Margin')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vMarginTablet,
      onChange: function onChange(value) {
        return setAttributes({
          vMarginTablet: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hMarginTablet,
      onChange: function onChange(value) {
        return setAttributes({
          hMarginTablet: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: marginTypeMobile === 'px',
      "aria-pressed": marginTypeMobile === 'px',
      onClick: function onClick() {
        return setAttributes({
          marginTypeMobile: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: marginTypeMobile === '%',
      "aria-pressed": marginTypeMobile === '%',
      onClick: function onClick() {
        return setAttributes({
          marginTypeMobile: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('List Margin')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vMarginMobile,
      onChange: function onChange(value) {
        return setAttributes({
          vMarginMobile: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hMarginMobile,
      onChange: function onChange(value) {
        return setAttributes({
          hMarginMobile: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          borderStyle: value
        });
      },
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
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      onChange: function onChange(value) {
        return setAttributes({
          borderWidth: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      max: 1000,
      allowReset: true
    }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["ColorPalette"], {
      value: borderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          borderColor: colorValue
        });
      },
      allowReset: true
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["BlockAlignmentToolbar"], {
    value: align,
    onChange: function onChange(value) {
      setAttributes({
        align: value
      });
    },
    controls: ['left', 'center', 'right']
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["InspectorControls"], null, getGeneralPanelBody(), getScrollPanelBody(), getContentPanelBody(), getStylePanelBody()), loadGFonts, headingloadGFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map