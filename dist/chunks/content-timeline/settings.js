(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/content-timeline/settings"],{

/***/ "./src/blocks/timeline/content-timeline/settings.js":
/*!**********************************************************!*\
  !*** ./src/blocks/timeline/content-timeline/settings.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/**
 * BLOCK: Content Timeline.
 */











var Settings = function Settings(props) {
  props = props.parentProps; // Setup the attributes.

  var _props = props,
      setAttributes = _props.setAttributes,
      _props$attributes = _props.attributes,
      headSpace = _props$attributes.headSpace,
      headingColor = _props$attributes.headingColor,
      subHeadingColor = _props$attributes.subHeadingColor,
      backgroundColor = _props$attributes.backgroundColor,
      separatorColor = _props$attributes.separatorColor,
      separatorFillColor = _props$attributes.separatorFillColor,
      separatorBg = _props$attributes.separatorBg,
      separatorBorder = _props$attributes.separatorBorder,
      borderFocus = _props$attributes.borderFocus,
      headingTag = _props$attributes.headingTag,
      headFontSizeType = _props$attributes.headFontSizeType,
      headFontSize = _props$attributes.headFontSize,
      headFontSizeTablet = _props$attributes.headFontSizeTablet,
      headFontSizeMobile = _props$attributes.headFontSizeMobile,
      headFontFamily = _props$attributes.headFontFamily,
      headFontWeight = _props$attributes.headFontWeight,
      headFontSubset = _props$attributes.headFontSubset,
      headLineHeightType = _props$attributes.headLineHeightType,
      headLineHeight = _props$attributes.headLineHeight,
      headLineHeightTablet = _props$attributes.headLineHeightTablet,
      headLineHeightMobile = _props$attributes.headLineHeightMobile,
      headLoadGoogleFonts = _props$attributes.headLoadGoogleFonts,
      timelinAlignment = _props$attributes.timelinAlignment,
      arrowlinAlignment = _props$attributes.arrowlinAlignment,
      subHeadFontSizeType = _props$attributes.subHeadFontSizeType,
      subHeadFontSize = _props$attributes.subHeadFontSize,
      subHeadFontSizeTablet = _props$attributes.subHeadFontSizeTablet,
      subHeadFontSizeMobile = _props$attributes.subHeadFontSizeMobile,
      subHeadFontFamily = _props$attributes.subHeadFontFamily,
      subHeadFontWeight = _props$attributes.subHeadFontWeight,
      subHeadFontSubset = _props$attributes.subHeadFontSubset,
      subHeadLineHeightType = _props$attributes.subHeadLineHeightType,
      subHeadLineHeight = _props$attributes.subHeadLineHeight,
      subHeadLineHeightTablet = _props$attributes.subHeadLineHeightTablet,
      subHeadLineHeightMobile = _props$attributes.subHeadLineHeightMobile,
      subHeadLoadGoogleFonts = _props$attributes.subHeadLoadGoogleFonts,
      verticalSpace = _props$attributes.verticalSpace,
      horizontalSpace = _props$attributes.horizontalSpace,
      separatorwidth = _props$attributes.separatorwidth,
      borderwidth = _props$attributes.borderwidth,
      connectorBgsize = _props$attributes.connectorBgsize,
      dateBottomspace = _props$attributes.dateBottomspace,
      align = _props$attributes.align,
      icon = _props$attributes.icon,
      iconColor = _props$attributes.iconColor,
      dateColor = _props$attributes.dateColor,
      dateFontsizeType = _props$attributes.dateFontsizeType,
      dateFontsize = _props$attributes.dateFontsize,
      dateFontsizeTablet = _props$attributes.dateFontsizeTablet,
      dateFontsizeMobile = _props$attributes.dateFontsizeMobile,
      dateFontFamily = _props$attributes.dateFontFamily,
      dateFontWeight = _props$attributes.dateFontWeight,
      dateFontSubset = _props$attributes.dateFontSubset,
      dateLineHeightType = _props$attributes.dateLineHeightType,
      dateLineHeight = _props$attributes.dateLineHeight,
      dateLineHeightTablet = _props$attributes.dateLineHeightTablet,
      dateLineHeightMobile = _props$attributes.dateLineHeightMobile,
      dateLoadGoogleFonts = _props$attributes.dateLoadGoogleFonts,
      iconSize = _props$attributes.iconSize,
      borderRadius = _props$attributes.borderRadius,
      bgPadding = _props$attributes.bgPadding,
      iconFocus = _props$attributes.iconFocus,
      iconBgFocus = _props$attributes.iconBgFocus,
      displayPostDate = _props$attributes.displayPostDate,
      stack = _props$attributes.stack,
      dateFormat = _props$attributes.dateFormat;

  var getconnectorBgsize = function getconnectorBgsize(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (UAGBcontentTimelineChild) {
      UAGBcontentTimelineChild.attributes.connectorBgsize = value;
    });
    setAttributes({
      connectorBgsize: value
    });
  };

  var getborderwidth = function getborderwidth(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (UAGBcontentTimelineChild) {
      UAGBcontentTimelineChild.attributes.borderwidth = value;
    });
    setAttributes({
      borderwidth: value
    });
  };

  var geticonSize = function geticonSize(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (UAGBcontentTimelineChild) {
      UAGBcontentTimelineChild.attributes.iconSize = value;
    });
    setAttributes({
      iconSize: value
    });
  };

  var getseparatorwidth = function getseparatorwidth(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (UAGBcontentTimelineChild) {
      UAGBcontentTimelineChild.attributes.separatorwidth = value;
    });
    setAttributes({
      separatorwidth: value
    });
  };

  var getdateFormat = function getdateFormat(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (UAGBcontentTimelineChild) {
      UAGBcontentTimelineChild.attributes.dateFormat = value;
    });
    setAttributes({
      dateFormat: value
    });
  };

  var getTimelineicon = function getTimelineicon(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (UAGBcontentTimelineChild) {
      UAGBcontentTimelineChild.attributes.icon = value;
    });
    setAttributes({
      icon: value
    });
  };

  var toggleDisplayPostDate = function toggleDisplayPostDate() {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (UAGBcontentTimelineChild) {
      UAGBcontentTimelineChild.attributes.displayPostDate = displayPostDate;
    });
    setAttributes({
      displayPostDate: !displayPostDate
    });
  };

  var today = new Date();

  var blockControls = function blockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockAlignmentToolbar"], {
      value: align,
      onChange: function onChange(value) {
        setAttributes({
          align: value
        });
      },
      controls: ['center', 'left', 'right']
    }));
  };

  var generalSettings = function generalSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Layout', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Orientation', 'ultimate-addons-for-gutenberg'),
      value: timelinAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          timelinAlignment: value
        });
      },
      options: [{
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Arrow Alignment', 'ultimate-addons-for-gutenberg'),
      value: arrowlinAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          arrowlinAlignment: value
        });
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
      value: stack,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: Choose on what breakpoint the Content Timeline will stack. It will be visible on front end only.', 'ultimate-addons-for-gutenberg'),
      onChange: function onChange(value) {
        return setAttributes({
          stack: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Date')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display Date', 'ultimate-addons-for-gutenberg'),
      checked: displayPostDate,
      onChange: toggleDisplayPostDate
    }), displayPostDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Date Format', 'ultimate-addons-for-gutenberg'),
      value: dateFormat,
      onChange: getdateFormat,
      options: [{
        value: 'M j, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('M j, Y', today)
      }, {
        value: 'F j, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('F j, Y', today)
      }, {
        value: 'm/d/Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('m/d/Y', today)
      }, {
        value: 'm-d-Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('m-d-Y', today)
      }, {
        value: 'm.d.Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('m.d.Y', today)
      }, {
        value: 'd M Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('d M Y', today)
      }, {
        value: 'd F Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('d F Y', today)
      }, {
        value: 'd-m-Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('d-m-Y', today)
      }, {
        value: 'd.m.Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('d.m.Y', today)
      }, {
        value: 'd/m/Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('d/m/Y', today)
      }, {
        value: 'Y-m-d',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('Y-m-d', today)
      }, {
        value: 'Y.m.d',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('Y.m.d', today)
      }, {
        value: 'Y/m/d',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('Y/m/d', today)
      }, {
        value: 'M, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('M, Y', today)
      }, {
        value: 'M Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('M Y', today)
      }, {
        value: 'F, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('F, Y', today)
      }, {
        value: 'F Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('F Y', today)
      }, {
        value: 'custom',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Normal Text', 'ultimate-addons-for-gutenberg')
      }]
    }), displayPostDate && timelinAlignment !== 'center' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Date Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: dateBottomspace,
      onChange: function onChange(value) {
        return setAttributes({
          dateBottomspace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: props.attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: headLoadGoogleFonts,
        label: 'headLoadGoogleFonts'
      },
      fontFamily: {
        value: headFontFamily,
        label: 'headFontFamily'
      },
      fontWeight: {
        value: headFontWeight,
        label: 'headFontWeight'
      },
      fontSubset: {
        value: headFontSubset,
        label: 'headFontSubset'
      },
      fontSizeType: {
        value: headFontSizeType,
        label: 'headFontSizeType'
      },
      fontSize: {
        value: headFontSize,
        label: 'headFontSize'
      },
      fontSizeMobile: {
        value: headFontSizeMobile,
        label: 'headFontSizeMobile'
      },
      fontSizeTablet: {
        value: headFontSizeTablet,
        label: 'headFontSizeTablet'
      },
      lineHeightType: {
        value: headLineHeightType,
        label: 'headLineHeightType'
      },
      lineHeight: {
        value: headLineHeight,
        label: 'headLineHeight'
      },
      lineHeightMobile: {
        value: headLineHeightMobile,
        label: 'headLineHeightMobile'
      },
      lineHeightTablet: {
        value: headLineHeightTablet,
        label: 'headLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: props.attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: subHeadLoadGoogleFonts,
        label: 'subHeadLoadGoogleFonts'
      },
      fontFamily: {
        value: subHeadFontFamily,
        label: 'subHeadFontFamily'
      },
      fontWeight: {
        value: subHeadFontWeight,
        label: 'subHeadFontWeight'
      },
      fontSubset: {
        value: subHeadFontSubset,
        label: 'subHeadFontSubset'
      },
      fontSizeType: {
        value: subHeadFontSizeType,
        label: 'subHeadFontSizeType'
      },
      fontSize: {
        value: subHeadFontSize,
        label: 'subHeadFontSize'
      },
      fontSizeMobile: {
        value: subHeadFontSizeMobile,
        label: 'subHeadFontSizeMobile'
      },
      fontSizeTablet: {
        value: subHeadFontSizeTablet,
        label: 'subHeadFontSizeTablet'
      },
      lineHeightType: {
        value: subHeadLineHeightType,
        label: 'subHeadLineHeightType'
      },
      lineHeight: {
        value: subHeadLineHeight,
        label: 'subHeadLineHeight'
      },
      lineHeightMobile: {
        value: subHeadLineHeightMobile,
        label: 'subHeadLineHeightMobile'
      },
      lineHeightTablet: {
        value: subHeadLineHeightTablet,
        label: 'subHeadLineHeightTablet'
      }
    }), displayPostDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Date', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: props.attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: dateLoadGoogleFonts,
        label: 'dateLoadGoogleFonts'
      },
      fontFamily: {
        value: dateFontFamily,
        label: 'dateFontFamily'
      },
      fontWeight: {
        value: dateFontWeight,
        label: 'dateFontWeight'
      },
      fontSubset: {
        value: dateFontSubset,
        label: 'dateFontSubset'
      },
      fontSizeType: {
        value: dateFontsizeType,
        label: 'dateFontsizeType'
      },
      fontSize: {
        value: dateFontsize,
        label: 'dateFontsize'
      },
      fontSizeMobile: {
        value: dateFontsizeMobile,
        label: 'dateFontsizeMobile'
      },
      fontSizeTablet: {
        value: dateFontsizeTablet,
        label: 'dateFontsizeTablet'
      },
      lineHeightType: {
        value: dateLineHeightType,
        label: 'dateLineHeightType'
      },
      lineHeight: {
        value: dateLineHeight,
        label: 'dateLineHeight'
      },
      lineHeightMobile: {
        value: dateLineHeightMobile,
        label: 'dateLineHeightMobile'
      },
      lineHeightTablet: {
        value: dateLineHeightTablet,
        label: 'dateLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Date Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: dateColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: dateColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          dateColor: colorValue
        });
      },
      allowReset: true
    })));
  };

  var spacingSettings = function spacingSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Horizontal Space', 'ultimate-addons-for-gutenberg'),
      value: horizontalSpace,
      onChange: function onChange(value) {
        return setAttributes({
          horizontalSpace: value
        });
      },
      min: 1,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Vertical Space', 'ultimate-addons-for-gutenberg'),
      value: verticalSpace,
      onChange: function onChange(value) {
        return setAttributes({
          verticalSpace: value
        });
      },
      min: 1,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: headSpace,
      onChange: function onChange(value) {
        return setAttributes({
          headSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }));
  };

  var connectorSettings = function connectorSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Connector', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      icons: wp.UAGBSvgIcons,
      value: icon,
      onChange: getTimelineicon,
      isMulti: false,
      renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Size', 'ultimate-addons-for-gutenberg'),
      value: iconSize,
      onChange: geticonSize,
      min: 0,
      max: 30,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Background Size', 'ultimate-addons-for-gutenberg'),
      value: connectorBgsize,
      onChange: getconnectorBgsize,
      min: 25,
      max: 90,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: borderwidth,
      onChange: getborderwidth,
      min: 1,
      max: 10,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Connector Width', 'ultimate-addons-for-gutenberg'),
      value: separatorwidth,
      onChange: getseparatorwidth,
      min: 1,
      max: 10,
      allowReset: true
    }));
  };

  var timelineItemSettings = function timelineItemSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Timeline Item', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
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
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('P', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('SPAN', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Rounded Corners', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      initialPosition: 10,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      value: bgPadding,
      onChange: function onChange(value) {
        return setAttributes({
          bgPadding: value
        });
      },
      min: 1,
      initialPosition: 10,
      max: 50,
      allowReset: true
    }));
  };

  var colorSettings = function colorSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["PanelColorSettings"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Colors', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      colorSettings: [{
        value: headingColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            headingColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: subHeadingColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            subHeadingColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: backgroundColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            backgroundColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Color', 'ultimate-addons-for-gutenberg')
      }]
    });
  };

  var connectorColorSettings = function connectorColorSettings() {
    var iconColorSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["PanelColorSettings"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      colorSettings: [{
        value: separatorColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            separatorColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Line Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: iconColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            iconColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: separatorBg,
        onChange: function onChange(colorValue) {
          return setAttributes({
            separatorBg: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: separatorBorder,
        onChange: function onChange(colorValue) {
          return setAttributes({
            separatorBorder: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
      }]
    });
    var iconFocusSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["PanelColorSettings"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      colorSettings: [{
        value: separatorFillColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            separatorFillColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Line Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: iconFocus,
        onChange: function onChange(colorValue) {
          return setAttributes({
            iconFocus: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: iconBgFocus,
        onChange: function onChange(colorValue) {
          return setAttributes({
            iconBgFocus: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: borderFocus,
        onChange: function onChange(colorValue) {
          return setAttributes({
            borderFocus: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
      }]
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Connector Colors', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], {
      className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
      activeClass: "active-tab",
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-normal-tab'
      }, {
        name: 'focus',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Focus', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-focus-tab'
      }]
    }, function (tabName) {
      var tabout;

      if ('focus' === tabName.name) {
        tabout = iconFocusSettings;
      } else {
        tabout = iconColorSettings;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, tabout);
    }));
  };

  var loadHeadGoogleFonts;
  var loadSubHeadGoogleFonts;
  var loadDateGoogleFonts;

  if (headLoadGoogleFonts == true) {
    var headconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: headconfig
    });
  }

  if (subHeadLoadGoogleFonts == true) {
    var subHeadconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: subHeadconfig
    });
  }

  if (dateLoadGoogleFonts == true) {
    var dateconfig = {
      google: {
        families: [dateFontFamily + (dateFontWeight ? ':' + dateFontWeight : '')]
      }
    };
    loadDateGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: dateconfig
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, generalSettings(), spacingSettings(), connectorSettings(), connectorColorSettings(), timelineItemSettings(), colorSettings()), loadHeadGoogleFonts, loadSubHeadGoogleFonts, loadDateGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map