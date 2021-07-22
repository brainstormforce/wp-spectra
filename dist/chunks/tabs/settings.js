(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/tabs/settings"],{

/***/ "./src/blocks/tabs/settings.js":
/*!*************************************!*\
  !*** ./src/blocks/tabs/settings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);










var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      deviceType = _props.deviceType;
  var tabsStyleD = attributes.tabsStyleD,
      tabsStyleM = attributes.tabsStyleM,
      tabsStyleT = attributes.tabsStyleT,
      tabActiveFrontend = attributes.tabActiveFrontend,
      tabHeaders = attributes.tabHeaders,
      headerBgColor = attributes.headerBgColor,
      borderWidth = attributes.borderWidth,
      borderColor = attributes.borderColor,
      headerTextColor = attributes.headerTextColor,
      activeTabBgColor = attributes.activeTabBgColor,
      activeTabTextColor = attributes.activeTabTextColor,
      bodyBgColor = attributes.bodyBgColor,
      bodyTextColor = attributes.bodyTextColor,
      tabTitleLeftMargin = attributes.tabTitleLeftMargin,
      tabTitleRightMargin = attributes.tabTitleRightMargin,
      tabTitleTopMargin = attributes.tabTitleTopMargin,
      tabTitleBottomMargin = attributes.tabTitleBottomMargin,
      tabBodyLeftMargin = attributes.tabBodyLeftMargin,
      tabBodyRightMargin = attributes.tabBodyRightMargin,
      tabBodyTopMargin = attributes.tabBodyTopMargin,
      tabBodyBottomMargin = attributes.tabBodyBottomMargin,
      tabBodyVertPadding = attributes.tabBodyVertPadding,
      tabBodyHrPadding = attributes.tabBodyHrPadding,
      tabTitleVertPadding = attributes.tabTitleVertPadding,
      tabTitleHrPadding = attributes.tabTitleHrPadding,
      titleLoadGoogleFonts = attributes.titleLoadGoogleFonts,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleFontSubset = attributes.titleFontSubset,
      titleFontSizeType = attributes.titleFontSizeType,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeMobile = attributes.titleFontSizeMobile,
      titleFontSizeTablet = attributes.titleFontSizeTablet,
      titleLineHeightType = attributes.titleLineHeightType,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightMobile = attributes.titleLineHeightMobile,
      titleLineHeightTablet = attributes.titleLineHeightTablet,
      titleAlign = attributes.titleAlign,
      tabAlign = attributes.tabAlign,
      showIcon = attributes.showIcon,
      icon = attributes.icon,
      iconColor = attributes.iconColor,
      iconPosition = attributes.iconPosition,
      iconSpacing = attributes.iconSpacing,
      iconSize = attributes.iconSize,
      activeiconColor = attributes.activeiconColor;

  var tabStyleSettings = function tabStyleSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tabs Style', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Desktop Style', 'ultimate-addons-for-gutenberg'),
      value: tabsStyleD,
      onChange: function onChange(value) {
        return setAttributes({
          tabsStyleD: value
        });
      },
      beforeIcon: "editor-textcolor",
      options: [{
        value: 'hstyle1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle7',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 7', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle8',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 8', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle9',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 9', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle10',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 10', 'ultimate-addons-for-gutenberg')
      }]
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tablet Style', 'ultimate-addons-for-gutenberg'),
      value: tabsStyleT,
      onChange: function onChange(value) {
        return setAttributes({
          tabsStyleT: value
        });
      },
      beforeIcon: "editor-textcolor",
      options: [{
        value: 'hstyle1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle7',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 7', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle8',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 8', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle9',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 9', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle10',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 10', 'ultimate-addons-for-gutenberg')
      }]
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Mobile Style', 'ultimate-addons-for-gutenberg'),
      value: tabsStyleM,
      onChange: function onChange(value) {
        return setAttributes({
          tabsStyleM: value
        });
      },
      beforeIcon: "editor-textcolor",
      options: [{
        value: 'hstyle1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'hstyle5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Horizontal Style 5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle7',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 7', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle8',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 8', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle9',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 9', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vstyle10',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Style 10', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Stack Style 11', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Stack Style 12', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Stack Style 13', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stack4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Stack Style 14', 'ultimate-addons-for-gutenberg')
      }]
    })));
  };

  var tabTitleSettings = function tabTitleSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tabs Title Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Initial Open Tab', 'ultimate-addons-for-gutenberg'),
      value: tabActiveFrontend,
      options: tabHeaders.map(function (tab, index) {
        return {
          value: index,
          label: tab
        };
      }),
      onChange: function onChange(value) {
        return setAttributes({
          tabActiveFrontend: parseInt(value)
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tab Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockAlignmentToolbar"], {
      value: tabAlign,
      onChange: function onChange(value) {
        return setAttributes({
          tabAlign: value
        });
      },
      controls: ['left', 'center', 'right'],
      isCollapsed: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tab Text Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockAlignmentToolbar"], {
      value: titleAlign,
      onChange: function onChange(value) {
        return setAttributes({
          titleAlign: value
        });
      },
      controls: ['left', 'center', 'right'],
      isCollapsed: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Enable Icon', 'ultimate-addons-for-gutenberg'),
      checked: showIcon,
      onChange: function onChange() {
        return setAttributes({
          showIcon: !showIcon
        });
      }
    }), showIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      icons: wp.UAGBSvgIcons,
      renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
      theme: "default",
      value: icon,
      onChange: function onChange(value) {
        return setAttributes({
          icon: value
        });
      },
      isMulti: false,
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Icon Position', 'ultimate-addons-for-gutenberg'),
      value: iconPosition,
      options: [{
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Bottom', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return setAttributes({
          iconPosition: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Icon Spacing', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      className: 'uagb-tabs__icon',
      value: iconSpacing,
      onChange: function onChange(value) {
        return setAttributes({
          iconSpacing: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Icon Color', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: iconColor,
      onChange: function onChange(value) {
        return setAttributes({
          iconColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Active Icon Color', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: activeiconColor,
      onChange: function onChange(value) {
        return setAttributes({
          activeiconColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Icon Size', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      className: 'uagb-tabs__icon',
      value: iconSize,
      onChange: function onChange(value) {
        return setAttributes({
          iconSize: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tab Title Margin (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].left_margin,
      className: 'uagb-margin-control',
      value: tabTitleLeftMargin,
      onChange: function onChange(value) {
        return setAttributes({
          tabTitleLeftMargin: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].right_margin,
      className: 'uagb-margin-control',
      value: tabTitleRightMargin,
      onChange: function onChange(value) {
        return setAttributes({
          tabTitleRightMargin: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].top_margin,
      value: tabTitleTopMargin,
      onChange: function onChange(value) {
        return setAttributes({
          tabTitleTopMargin: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: tabTitleBottomMargin,
      onChange: function onChange(value) {
        return setAttributes({
          tabTitleBottomMargin: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
      value: tabTitleVertPadding,
      onChange: function onChange(value) {
        return setAttributes({
          tabTitleVertPadding: value
        });
      },
      min: 0,
      max: 500,
      className: 'uagb-margin-control',
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
      value: tabTitleHrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          tabTitleHrPadding: value
        });
      },
      min: 0,
      max: 500,
      className: 'uagb-margin-control',
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title Background Color', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: headerBgColor,
      onChange: function onChange(value) {
        return setAttributes({
          headerBgColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title Text Color', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: headerTextColor,
      onChange: function onChange(value) {
        return setAttributes({
          headerTextColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Active Tab Background Color', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: activeTabBgColor,
      onChange: function onChange(value) {
        return setAttributes({
          activeTabBgColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Active Tab Text Color', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: activeTabTextColor,
      onChange: function onChange(value) {
        return setAttributes({
          activeTabTextColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    })));
  };

  var tabBorderSettings = function tabBorderSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Border Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Border Color', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: borderColor,
      onChange: function onChange(value) {
        return setAttributes({
          borderColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Border width', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      min: 1,
      max: 500,
      onChange: function onChange(value) {
        return setAttributes({
          borderWidth: value
        });
      }
    }));
  };

  var tabBodySettings = function tabBodySettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tabs Body Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Body Background Color', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: bodyBgColor,
      onChange: function onChange(value) {
        return setAttributes({
          bodyBgColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Body Text Color', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: bodyTextColor,
      onChange: function onChange(value) {
        return setAttributes({
          bodyTextColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tab Body Margin (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].left_margin,
      className: 'uagb-margin-control',
      value: tabBodyLeftMargin,
      onChange: function onChange(value) {
        return setAttributes({
          tabBodyLeftMargin: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].right_margin,
      className: 'uagb-margin-control',
      value: tabBodyRightMargin,
      onChange: function onChange(value) {
        return setAttributes({
          tabBodyRightMargin: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].top_margin,
      className: 'uagb-margin-control',
      value: tabBodyTopMargin,
      onChange: function onChange(value) {
        return setAttributes({
          tabBodyTopMargin: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: tabBodyBottomMargin,
      onChange: function onChange(value) {
        return setAttributes({
          tabBodyBottomMargin: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Body Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
      value: tabBodyVertPadding,
      onChange: function onChange(value) {
        return setAttributes({
          tabBodyVertPadding: value
        });
      },
      min: 0,
      max: 500,
      className: 'uagb-margin-control',
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
      value: tabBodyHrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          tabBodyHrPadding: value
        });
      },
      min: 0,
      max: 500,
      className: 'uagb-margin-control',
      allowReset: true
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, tabStyleSettings(), tabTitleSettings(), tabBodySettings(), tabBorderSettings());
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map