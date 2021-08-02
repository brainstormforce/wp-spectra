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
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















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
      titleTopPadding = attributes.titleTopPadding,
      titleRightPadding = attributes.titleRightPadding,
      titleBottomPadding = attributes.titleBottomPadding,
      titleLeftPadding = attributes.titleLeftPadding,
      titleTopPaddingTablet = attributes.titleTopPaddingTablet,
      titleRightPaddingTablet = attributes.titleRightPaddingTablet,
      titleBottomPaddingTablet = attributes.titleBottomPaddingTablet,
      titleLeftPaddingTablet = attributes.titleLeftPaddingTablet,
      titleTopPaddingMobile = attributes.titleTopPaddingMobile,
      titleRightPaddingMobile = attributes.titleRightPaddingMobile,
      titleBottomPaddingMobile = attributes.titleBottomPaddingMobile,
      titleLeftPaddingMobile = attributes.titleLeftPaddingMobile,
      titlePaddingUnit = attributes.titlePaddingUnit,
      mobileTitlePaddingUnit = attributes.mobileTitlePaddingUnit,
      tabletTitlePaddingUnit = attributes.tabletTitlePaddingUnit,
      titlePaddingLink = attributes.titlePaddingLink,
      headingTag = attributes.headingTag,
      layout = attributes.layout,
      highlightWidth = attributes.highlightWidth,
      contentTopPadding = attributes.contentTopPadding,
      contentRightPadding = attributes.contentRightPadding,
      contentBottomPadding = attributes.contentBottomPadding,
      contentLeftPadding = attributes.contentLeftPadding,
      contentTopPaddingTablet = attributes.contentTopPaddingTablet,
      contentRightPaddingTablet = attributes.contentRightPaddingTablet,
      contentBottomPaddingTablet = attributes.contentBottomPaddingTablet,
      contentLeftPaddingTablet = attributes.contentLeftPaddingTablet,
      contentTopPaddingMobile = attributes.contentTopPaddingMobile,
      contentRightPaddingMobile = attributes.contentRightPaddingMobile,
      contentBottomPaddingMobile = attributes.contentBottomPaddingMobile,
      contentLeftPaddingMobile = attributes.contentLeftPaddingMobile,
      contentPaddingUnit = attributes.contentPaddingUnit,
      mobileContentPaddingUnit = attributes.mobileContentPaddingUnit,
      tabletContentPaddingUnit = attributes.tabletContentPaddingUnit,
      contentPaddingLink = attributes.contentPaddingLink;
  var loadTitleGoogleFonts;
  var loadDescriptionGoogleFonts;

  if (true === titleLoadGoogleFonts) {
    var hconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: hconfig
    });
  }

  if (true === descLoadGoogleFonts) {
    var sconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescriptionGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: sconfig
    });
  }

  var updateCookieId = function updateCookieId(value) {
    var _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_12__["select"])('core/editor'),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["AlignmentToolbar"], {
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
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Allow Always', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'uagb-dismissable',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Allow to Dismiss', 'ultimate-addons-for-gutenberg')
  }];

  var inlineGeneralSettings = function inlineGeneralSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      value: layout,
      onChange: function onChange(value) {
        return setAttributes({
          layout: value
        });
      },
      options: [{
        value: 'modern',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Modern', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'simple',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Default', 'ultimate-addons-for-gutenberg')
      }]
    }), 'simple' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Highlight width', 'ultimate-addons-for-gutenberg'),
      value: highlightWidth,
      onChange: function onChange(value) {
        return setAttributes({
          highlightWidth: value
        });
      },
      min: 0,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Primary Heading', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tag'),
      value: headingTag,
      onChange: function onChange(value) {
        return setAttributes({
          headingTag: value
        });
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('p', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Notice Display', 'ultimate-addons-for-gutenberg'),
      options: noticeDismissOptions,
      value: noticeDismiss,
      onChange: function onChange(value) {
        return setAttributes({
          noticeDismiss: value
        });
      }
    }), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      icons: wp.UAGBSvgIcons,
      renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
      theme: "default",
      value: icon,
      onChange: function onChange(value) {
        return setAttributes({
          icon: value
        });
      },
      isMulti: false,
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
    })), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Enable Cookies', 'ultimate-addons-for-gutenberg'),
      checked: cookies,
      onChange: updateCookieId
    }), cookies && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Closed Notice After (Days)', 'ultimate-addons-for-gutenberg'),
      value: close_cookie_days,
      onChange: function onChange(value) {
        return setAttributes({
          close_cookie_days: value
        });
      },
      min: 0,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Colors', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Title Color", "ultimate-addons-for-gutenberg"),
      colorValue: titleColor ? titleColor : "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          titleColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Highlight Color", "ultimate-addons-for-gutenberg"),
      colorValue: noticeColor ? noticeColor : "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          noticeColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Content Color", "ultimate-addons-for-gutenberg"),
      colorValue: textColor ? textColor : "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          textColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Content Background Color", "ultimate-addons-for-gutenberg"),
      colorValue: contentBgColor ? contentBgColor : "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          contentBgColor: value
        });
      }
    }), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), noticeDismiss && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Content Background Color", "ultimate-addons-for-gutenberg"),
      colorValue: noticeDismissColor ? noticeDismissColor : "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          noticeDismissColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Title', 'ultimate-addons-for-gutenberg'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content', 'ultimate-addons-for-gutenberg'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Title Padding", "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: titleTopPadding,
        label: "titleTopPadding"
      },
      valueRight: {
        value: titleRightPadding,
        label: "titleRightPadding"
      },
      valueBottom: {
        value: titleBottomPadding,
        label: "titleBottomPadding"
      },
      valueLeft: {
        value: titleLeftPadding,
        label: "titleLeftPadding"
      },
      valueTopTablet: {
        value: titleTopPaddingTablet,
        label: "titleTopPaddingTablet"
      },
      valueRightTablet: {
        value: titleRightPaddingTablet,
        label: "titleRightPaddingTablet"
      },
      valueBottomTablet: {
        value: titleBottomPaddingTablet,
        label: "titleBottomPaddingTablet"
      },
      valueLeftTablet: {
        value: titleLeftPaddingTablet,
        label: "titleLeftPaddingTablet"
      },
      valueTopMobile: {
        value: titleTopPaddingMobile,
        label: "titleTopPaddingMobile"
      },
      valueRightMobile: {
        value: titleRightPaddingMobile,
        label: "titleRightPaddingMobile"
      },
      valueBottomMobile: {
        value: titleBottomPaddingMobile,
        label: "titleBottomPaddingMobile"
      },
      valueLeftMobile: {
        value: titleLeftPaddingMobile,
        label: "titleLeftPaddingMobile"
      },
      unit: {
        value: titlePaddingUnit,
        label: "titlePaddingUnit"
      },
      mUnit: {
        value: mobileTitlePaddingUnit,
        label: "mobiletitlePaddingUnit"
      },
      tUnit: {
        value: tabletTitlePaddingUnit,
        label: "tablettitlePaddingUnit"
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: titlePaddingLink,
        label: "titlePaddingLink"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Content Padding", "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: contentTopPadding,
        label: "contentTopPadding"
      },
      valueRight: {
        value: contentRightPadding,
        label: "contentRightPadding"
      },
      valueBottom: {
        value: contentBottomPadding,
        label: "contentBottomPadding"
      },
      valueLeft: {
        value: contentLeftPadding,
        label: "contentLeftPadding"
      },
      valueTopTablet: {
        value: contentTopPaddingTablet,
        label: "contentTopPaddingTablet"
      },
      valueRightTablet: {
        value: contentRightPaddingTablet,
        label: "contentRightPaddingTablet"
      },
      valueBottomTablet: {
        value: contentBottomPaddingTablet,
        label: "contentBottomPaddingTablet"
      },
      valueLeftTablet: {
        value: contentLeftPaddingTablet,
        label: "contentLeftPaddingTablet"
      },
      valueTopMobile: {
        value: contentTopPaddingMobile,
        label: "contentTopPaddingMobile"
      },
      valueRightMobile: {
        value: contentRightPaddingMobile,
        label: "contentRightPaddingMobile"
      },
      valueBottomMobile: {
        value: contentBottomPaddingMobile,
        label: "contentBottomPaddingMobile"
      },
      valueLeftMobile: {
        value: contentLeftPaddingMobile,
        label: "contentLeftPaddingMobile"
      },
      unit: {
        value: contentPaddingUnit,
        label: "contentPaddingUnit"
      },
      mUnit: {
        value: mobileContentPaddingUnit,
        label: "mobileContentPaddingUnit"
      },
      tUnit: {
        value: tabletContentPaddingUnit,
        label: "tabletContentPaddingUnit"
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: contentPaddingLink,
        label: "contentPaddingLink"
      }
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tabs: ["general", "advance"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "general"
  }, inlineGeneralSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "advance"
  }))), loadTitleGoogleFonts, loadDescriptionGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map