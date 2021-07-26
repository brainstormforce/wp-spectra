(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/inline-notice/settings"],{

/***/ "./src/blocks/inline-notice/settings.js":
/*!**********************************************!*\
  !*** ./src/blocks/inline-notice/settings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);











var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes;
  var icon = attributes.icon,
      noticeDismiss = attributes.noticeDismiss,
      cookies = attributes.cookies,
      close_cookie_days = attributes.close_cookie_days,
      textColor = attributes.textColor,
      titleColor = attributes.titleColor,
      noticeColor = attributes.noticeColor,
      contentBgColor = attributes.contentBgColor,
      noticeDismissColor = attributes.noticeDismissColor,
      noticeAlignment = attributes.noticeAlignment,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleFontSubset = attributes.titleFontSubset,
      titleFontSizeType = attributes.titleFontSizeType,
      titleLineHeightType = attributes.titleLineHeightType,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeTablet = attributes.titleFontSizeTablet,
      titleFontSizeMobile = attributes.titleFontSizeMobile,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightTablet = attributes.titleLineHeightTablet,
      titleLineHeightMobile = attributes.titleLineHeightMobile,
      descFontFamily = attributes.descFontFamily,
      descFontWeight = attributes.descFontWeight,
      descFontSubset = attributes.descFontSubset,
      descFontSize = attributes.descFontSize,
      descFontSizeType = attributes.descFontSizeType,
      descFontSizeTablet = attributes.descFontSizeTablet,
      descFontSizeMobile = attributes.descFontSizeMobile,
      descLineHeight = attributes.descLineHeight,
      descLineHeightType = attributes.descLineHeightType,
      descLineHeightTablet = attributes.descLineHeightTablet,
      descLineHeightMobile = attributes.descLineHeightMobile,
      titleLoadGoogleFonts = attributes.titleLoadGoogleFonts,
      descLoadGoogleFonts = attributes.descLoadGoogleFonts,
      contentVrPadding = attributes.contentVrPadding,
      contentHrPadding = attributes.contentHrPadding,
      titleVrPadding = attributes.titleVrPadding,
      titleHrPadding = attributes.titleHrPadding,
      headingTag = attributes.headingTag,
      layout = attributes.layout,
      highlightWidth = attributes.highlightWidth;
  var loadTitleGoogleFonts;
  var loadDescriptionGoogleFonts;

  if (true === titleLoadGoogleFonts) {
    var hconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: hconfig
    });
  }

  if (true === descLoadGoogleFonts) {
    var sconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescriptionGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: sconfig
    });
  }

  var updateCookieId = function updateCookieId(value) {
    var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["select"])('core/editor'),
        getCurrentPostId = _select.getCurrentPostId;

    var post_id = getCurrentPostId().toString();
    var timestamp = new Date().getTime();
    setAttributes({
      c_id: post_id + '-' + timestamp
    });
    setAttributes({
      cookies: value
    });
  };

  var blockControls = function blockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["AlignmentToolbar"], {
      value: noticeAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          noticeAlignment: value
        });
      }
    }));
  }; // Notice dismiss options


  var noticeDismissOptions = [{
    value: '',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Allow Always', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'uagb-dismissable',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Allow to Dismiss', 'ultimate-addons-for-gutenberg')
  }];

  var inlineGeneralSettings = function inlineGeneralSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      value: layout,
      onChange: function onChange(value) {
        return setAttributes({
          layout: value
        });
      },
      options: [{
        value: 'modern',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Modern', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'simple',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Default', 'ultimate-addons-for-gutenberg')
      }]
    }), 'simple' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Highlight width', 'ultimate-addons-for-gutenberg'),
      value: highlightWidth,
      onChange: function onChange(value) {
        return setAttributes({
          highlightWidth: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Primary Heading', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tag'),
      value: headingTag,
      onChange: function onChange(value) {
        return setAttributes({
          headingTag: value
        });
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('p', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Notice Display', 'ultimate-addons-for-gutenberg'),
      options: noticeDismissOptions,
      value: noticeDismiss,
      onChange: function onChange(value) {
        return setAttributes({
          noticeDismiss: value
        });
      }
    }), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      icons: wp.UAGBSvgIcons,
      renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
      theme: "default",
      value: icon,
      onChange: function onChange(value) {
        return setAttributes({
          icon: value
        });
      },
      isMulti: false,
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
    })), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Enable Cookies', 'ultimate-addons-for-gutenberg'),
      checked: cookies,
      onChange: updateCookieId
    }), cookies && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Show Closed Notice After (Days)', 'ultimate-addons-for-gutenberg'),
      value: close_cookie_days,
      onChange: function onChange(value) {
        return setAttributes({
          close_cookie_days: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Colors', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: titleColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: titleColor,
      onChange: function onChange(value) {
        return setAttributes({
          titleColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Highlight Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: noticeColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: noticeColor,
      onChange: function onChange(value) {
        return setAttributes({
          noticeColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Content Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: textColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: textColor,
      onChange: function onChange(value) {
        return setAttributes({
          textColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Content Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: contentBgColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: contentBgColor,
      onChange: function onChange(value) {
        return setAttributes({
          contentBgColor: value
        });
      },
      allowReset: true
    }), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Dismiss Icon Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: noticeDismissColor
      }
    }))), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: noticeDismissColor,
      onChange: function onChange(value) {
        return setAttributes({
          noticeDismissColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Typography', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: titleLoadGoogleFonts,
        label: 'titleLoadGoogleFonts'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: descLoadGoogleFonts,
        label: 'descLoadGoogleFonts'
      },
      fontFamily: {
        value: descFontFamily,
        label: 'descFontFamily'
      },
      fontWeight: {
        value: descFontWeight,
        label: 'descFontWeight'
      },
      fontSubset: {
        value: descFontSubset,
        label: 'descFontSubset'
      },
      fontSizeType: {
        value: descFontSizeType,
        label: 'descFontSizeType'
      },
      fontSize: {
        value: descFontSize,
        label: 'descFontSize'
      },
      fontSizeMobile: {
        value: descFontSizeMobile,
        label: 'descFontSizeMobile'
      },
      fontSizeTablet: {
        value: descFontSizeTablet,
        label: 'descFontSizeTablet'
      },
      lineHeightType: {
        value: descLineHeightType,
        label: 'descLineHeightType'
      },
      lineHeight: {
        value: descLineHeight,
        label: 'descLineHeight'
      },
      lineHeightMobile: {
        value: descLineHeightMobile,
        label: 'descLineHeightMobile'
      },
      lineHeightTablet: {
        value: descLineHeightTablet,
        label: 'descLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title Padding (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: titleVrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          titleVrPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: titleHrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          titleHrPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Content Padding (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: contentVrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          contentVrPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: contentHrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          contentHrPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, inlineGeneralSettings()), loadTitleGoogleFonts, loadDescriptionGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map