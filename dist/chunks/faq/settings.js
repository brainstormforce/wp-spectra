(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/faq/settings"],{

/***/ "./src/blocks/faq/settings.js":
/*!************************************!*\
  !*** ./src/blocks/faq/settings.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__);
/**
 * BLOCK: FAQ
 */













var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      deviceType = _props.deviceType;
  var layout = attributes.layout,
      inactiveOtherItems = attributes.inactiveOtherItems,
      expandFirstItem = attributes.expandFirstItem,
      enableSchemaSupport = attributes.enableSchemaSupport,
      rowsGap = attributes.rowsGap,
      columnsGap = attributes.columnsGap,
      align = attributes.align,
      enableSeparator = attributes.enableSeparator,
      boxBgColor = attributes.boxBgColor,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      borderColor = attributes.borderColor,
      questionTextColor = attributes.questionTextColor,
      questionTextActiveColor = attributes.questionTextActiveColor,
      questionPaddingTypeDesktop = attributes.questionPaddingTypeDesktop,
      answerTextColor = attributes.answerTextColor,
      answerPaddingTypeDesktop = attributes.answerPaddingTypeDesktop,
      vanswerPaddingMobile = attributes.vanswerPaddingMobile,
      vanswerPaddingTablet = attributes.vanswerPaddingTablet,
      vanswerPaddingDesktop = attributes.vanswerPaddingDesktop,
      hanswerPaddingMobile = attributes.hanswerPaddingMobile,
      hanswerPaddingTablet = attributes.hanswerPaddingTablet,
      hanswerPaddingDesktop = attributes.hanswerPaddingDesktop,
      iconColor = attributes.iconColor,
      iconActiveColor = attributes.iconActiveColor,
      gapBtwIconQUestion = attributes.gapBtwIconQUestion,
      questionloadGoogleFonts = attributes.questionloadGoogleFonts,
      questionFontFamily = attributes.questionFontFamily,
      questionFontWeight = attributes.questionFontWeight,
      questionFontSubset = attributes.questionFontSubset,
      questionFontSizeType = attributes.questionFontSizeType,
      questionFontSize = attributes.questionFontSize,
      questionFontSizeMobile = attributes.questionFontSizeMobile,
      questionFontSizeTablet = attributes.questionFontSizeTablet,
      questionLineHeightType = attributes.questionLineHeightType,
      questionLineHeight = attributes.questionLineHeight,
      questionLineHeightMobile = attributes.questionLineHeightMobile,
      questionLineHeightTablet = attributes.questionLineHeightTablet,
      answerloadGoogleFonts = attributes.answerloadGoogleFonts,
      answerFontFamily = attributes.answerFontFamily,
      answerFontWeight = attributes.answerFontWeight,
      answerFontSubset = attributes.answerFontSubset,
      answerFontSizeType = attributes.answerFontSizeType,
      answerFontSize = attributes.answerFontSize,
      answerFontSizeMobile = attributes.answerFontSizeMobile,
      answerFontSizeTablet = attributes.answerFontSizeTablet,
      answerLineHeightType = attributes.answerLineHeightType,
      answerLineHeight = attributes.answerLineHeight,
      answerLineHeightMobile = attributes.answerLineHeightMobile,
      answerLineHeightTablet = attributes.answerLineHeightTablet,
      icon = attributes.icon,
      iconActive = attributes.iconActive,
      iconAlign = attributes.iconAlign,
      iconSizeType = attributes.iconSizeType,
      iconSizeMobile = attributes.iconSizeMobile,
      iconSizeTablet = attributes.iconSizeTablet,
      iconSize = attributes.iconSize,
      columns = attributes.columns,
      tcolumns = attributes.tcolumns,
      mcolumns = attributes.mcolumns,
      enableToggle = attributes.enableToggle,
      equalHeight = attributes.equalHeight,
      questionLeftPaddingTablet = attributes.questionLeftPaddingTablet,
      hquestionPaddingTablet = attributes.hquestionPaddingTablet,
      vquestionPaddingTablet = attributes.vquestionPaddingTablet,
      questionBottomPaddingTablet = attributes.questionBottomPaddingTablet,
      questionLeftPaddingDesktop = attributes.questionLeftPaddingDesktop,
      hquestionPaddingDesktop = attributes.hquestionPaddingDesktop,
      vquestionPaddingDesktop = attributes.vquestionPaddingDesktop,
      questionBottomPaddingDesktop = attributes.questionBottomPaddingDesktop,
      questionLeftPaddingMobile = attributes.questionLeftPaddingMobile,
      hquestionPaddingMobile = attributes.hquestionPaddingMobile,
      vquestionPaddingMobile = attributes.vquestionPaddingMobile,
      questionBottomPaddingMobile = attributes.questionBottomPaddingMobile,
      headingTag = attributes.headingTag;

  var onchangeIcon = function onchangeIcon(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (faqChild) {
      faqChild.attributes.icon = value;
    });
    setAttributes({
      icon: value
    });
  };

  var onchangeActiveIcon = function onchangeActiveIcon(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (faqChild) {
      faqChild.attributes.iconActive = value;
    });
    setAttributes({
      iconActive: value
    });
  };

  var onchangeLayout = function onchangeLayout(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (faqChild) {
      faqChild.attributes.layout = value;
    });
    setAttributes({
      layout: value
    });
  };

  var onchangeTag = function onchangeTag(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (faqChild) {
      faqChild.attributes.headingTag = value;
    });
    setAttributes({
      headingTag: value
    });
  };

  var faqGeneralSettings = function faqGeneralSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      value: layout,
      options: [{
        value: 'accordion',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Accordion', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'grid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Grid', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return onchangeLayout(value);
      }
    }), 'accordion' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Collapse other items', 'ultimate-addons-for-gutenberg'),
      checked: inactiveOtherItems,
      onChange: function onChange() {
        return setAttributes({
          inactiveOtherItems: !inactiveOtherItems
        });
      }
    }), true === inactiveOtherItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Expand First Item', 'ultimate-addons-for-gutenberg'),
      checked: expandFirstItem,
      onChange: function onChange() {
        return setAttributes({
          expandFirstItem: !expandFirstItem
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Enable Toggle', 'ultimate-addons-for-gutenberg'),
      checked: enableToggle,
      onChange: function onChange() {
        return setAttributes({
          enableToggle: !enableToggle
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Enable Schema Support', 'ultimate-addons-for-gutenberg'),
      checked: enableSchemaSupport,
      onChange: function onChange() {
        return setAttributes({
          enableSchemaSupport: !enableSchemaSupport
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["TabPanel"], {
      className: "uagb-size-type-field-tabs uagb-without-size-type",
      activeClass: "active-tab",
      tabs: [{
        name: 'desktop',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Dashicon"], {
          icon: "desktop"
        }),
        className: 'uagb-desktop-tab uagb-responsive-tabs'
      }, {
        name: 'tablet',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Dashicon"], {
          icon: "tablet"
        }),
        className: 'uagb-tablet-tab uagb-responsive-tabs'
      }, {
        name: 'mobile',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Dashicon"], {
          icon: "smartphone"
        }),
        className: 'uagb-mobile-tab uagb-responsive-tabs'
      }]
    }, function (tab) {
      var tabout;

      if ('mobile' === tab.name) {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Mobile Columns', 'ultimate-addons-for-gutenberg'),
          value: mcolumns,
          onChange: function onChange(value) {
            return setAttributes({
              mcolumns: value
            });
          },
          min: 1,
          max: 2
        });
      } else if ('tablet' === tab.name) {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Tab Columns', 'ultimate-addons-for-gutenberg'),
          value: tcolumns,
          onChange: function onChange(value) {
            return setAttributes({
              tcolumns: value
            });
          },
          min: 1,
          max: 4
        });
      } else {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Desktop Columns', 'ultimate-addons-for-gutenberg'),
          value: columns,
          onChange: function onChange(value) {
            return setAttributes({
              columns: value
            });
          },
          min: 1,
          max: 6
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, tabout);
    }), 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'left',
      icon: "editor-alignleft",
      label: "Left",
      onClick: function onClick() {
        return setAttributes({
          align: 'left'
        });
      },
      "aria-pressed": 'left' === align,
      isPrimary: 'left' === align
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'center',
      icon: "editor-aligncenter",
      label: "Right",
      onClick: function onClick() {
        return setAttributes({
          align: 'center'
        });
      },
      "aria-pressed": 'center' === align,
      isPrimary: 'center' === align
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'right',
      icon: "editor-alignright",
      label: "Right",
      onClick: function onClick() {
        return setAttributes({
          align: 'right'
        });
      },
      "aria-pressed": 'right' === align,
      isPrimary: 'right' === align
    })), 'accordion' === layout && faqIconSettings());
  };

  var faqStylingSettings = function faqStylingSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: boxBgColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
      value: boxBgColor,
      onChange: function onChange(value) {
        return setAttributes({
          boxBgColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Rows Gap (px)', 'ultimate-addons-for-gutenberg'),
      value: rowsGap,
      onChange: function onChange(value) {
        return setAttributes({
          rowsGap: value
        });
      },
      min: 0,
      max: 50
    }), 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Columns Gap (px)', 'ultimate-addons-for-gutenberg'),
      value: columnsGap,
      onChange: function onChange(value) {
        return setAttributes({
          columnsGap: value
        });
      },
      min: 0,
      max: 50
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Equal Height', 'ultimate-addons-for-gutenberg'),
      checked: equalHeight,
      onChange: function onChange() {
        return setAttributes({
          equalHeight: !equalHeight
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Enable Separator', 'ultimate-addons-for-gutenberg'),
      checked: enableSeparator,
      onChange: function onChange() {
        return setAttributes({
          enableSeparator: !enableSeparator
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Border', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        setAttributes({
          borderStyle: value
        });
      }
    }), 'none' !== borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Thickness (px)', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      onChange: function onChange(value) {
        setAttributes({
          borderWidth: value
        });
      },
      min: 0,
      max: 20
    }), 'none' !== borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Rounded Corners (px)', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      max: 50
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
      value: borderColor,
      onChange: function onChange(value) {
        return setAttributes({
          borderColor: value
        });
      },
      allowReset: true
    }), 'accordion' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_5__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: iconSizeType === 'px',
      "aria-pressed": iconSizeType === 'px',
      onClick: function onClick() {
        return setAttributes({
          iconSizeType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: iconSizeType === '%',
      "aria-pressed": iconSizeType === '%',
      onClick: function onClick() {
        return setAttributes({
          iconSizeType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      value: iconSize,
      onChange: function onChange(value) {
        return setAttributes({
          iconSize: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: iconSizeType === 'px',
      "aria-pressed": iconSizeType === 'px',
      onClick: function onClick() {
        return setAttributes({
          iconSizeType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: iconSizeType === '%',
      "aria-pressed": iconSizeType === '%',
      onClick: function onClick() {
        return setAttributes({
          iconSizeType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      value: iconSizeTablet,
      onChange: function onChange(value) {
        return setAttributes({
          iconSizeTablet: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: iconSizeType === 'px',
      "aria-pressed": iconSizeType === 'px',
      onClick: function onClick() {
        return setAttributes({
          iconSizeType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: iconSizeType === '%',
      "aria-pressed": iconSizeType === '%',
      onClick: function onClick() {
        return setAttributes({
          iconSizeType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      value: iconSizeMobile,
      onChange: function onChange(value) {
        return setAttributes({
          iconSizeMobile: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Gap between Icon and Question', 'ultimate-addons-for-gutenberg'),
      value: gapBtwIconQUestion,
      onChange: function onChange(value) {
        return setAttributes({
          gapBtwIconQUestion: value
        });
      },
      min: 0,
      max: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Expand Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: iconColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
      value: iconColor,
      onChange: function onChange(value) {
        return setAttributes({
          iconColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Collapse Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: iconActiveColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
      value: iconActiveColor,
      onChange: function onChange(value) {
        return setAttributes({
          iconActiveColor: value
        });
      },
      allowReset: true
    })));
  };

  var faqIconSettings = function faqIconSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Icon', 'ultimate-addons-for-gutenberg'), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Expand', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
      icons: wp.UAGBSvgIcons,
      renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__["default"],
      theme: "default",
      value: icon,
      onChange: function onChange(value) {
        return onchangeIcon(value);
      },
      isMulti: false,
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Collapse', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
      icons: wp.UAGBSvgIcons,
      renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__["default"],
      theme: "default",
      value: iconActive,
      onChange: function onChange(value) {
        return onchangeActiveIcon(value);
      },
      isMulti: false,
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Icon Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'row',
      icon: "editor-alignleft",
      label: "Left",
      onClick: function onClick() {
        return setAttributes({
          iconAlign: 'row'
        });
      },
      "aria-pressed": 'row' === iconAlign,
      isPrimary: 'row' === iconAlign
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'row-reverse',
      icon: "editor-alignright",
      label: "Right",
      onClick: function onClick() {
        return setAttributes({
          iconAlign: 'row-reverse'
        });
      },
      "aria-pressed": 'row-reverse' === iconAlign,
      isPrimary: 'row-reverse' === iconAlign
    }));
  };

  var faqQuestionSettings = function faqQuestionSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Question', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Question Tag', 'ultimate-addons-for-gutenberg'),
      value: headingTag,
      onChange: function onChange(value) {
        return onchangeTag(value);
      },
      options: [{
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('P', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: questionloadGoogleFonts,
        label: 'questionloadGoogleFonts'
      },
      fontFamily: {
        value: questionFontFamily,
        label: 'questionFontFamily'
      },
      fontWeight: {
        value: questionFontWeight,
        label: 'questionFontWeight'
      },
      fontSubset: {
        value: questionFontSubset,
        label: 'questionFontSubset'
      },
      fontSizeType: {
        value: questionFontSizeType,
        label: 'questionFontSizeType'
      },
      fontSize: {
        value: questionFontSize,
        label: 'questionFontSize'
      },
      fontSizeMobile: {
        value: questionFontSizeMobile,
        label: 'questionFontSizeMobile'
      },
      fontSizeTablet: {
        value: questionFontSizeTablet,
        label: 'questionFontSizeTablet'
      },
      lineHeightType: {
        value: questionLineHeightType,
        label: 'questionLineHeightType'
      },
      lineHeight: {
        value: questionLineHeight,
        label: 'questionLineHeight'
      },
      lineHeightMobile: {
        value: questionLineHeightMobile,
        label: 'questionLineHeightMobile'
      },
      lineHeightTablet: {
        value: questionLineHeightTablet,
        label: 'questionLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: questionTextColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
      value: questionTextColor,
      onChange: function onChange(value) {
        return setAttributes({
          questionTextColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Text Active/Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: questionTextActiveColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
      value: questionTextActiveColor,
      onChange: function onChange(value) {
        return setAttributes({
          questionTextActiveColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_5__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: questionPaddingTypeDesktop === 'px',
      "aria-pressed": questionPaddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          questionPaddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: questionPaddingTypeDesktop === '%',
      "aria-pressed": questionPaddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          questionPaddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Padding')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].left_margin,
      className: 'uagb-margin-control',
      value: questionLeftPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          questionLeftPaddingDesktop: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].right_margin,
      className: 'uagb-margin-control',
      value: hquestionPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          hquestionPaddingDesktop: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].top_margin,
      className: 'uagb-margin-control',
      value: vquestionPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          vquestionPaddingDesktop: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: questionBottomPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          questionBottomPaddingDesktop: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: questionPaddingTypeDesktop === 'px',
      "aria-pressed": questionPaddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          questionPaddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: questionPaddingTypeDesktop === '%',
      "aria-pressed": questionPaddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          questionPaddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].left_margin,
      className: 'uagb-margin-control',
      value: questionLeftPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          questionLeftPaddingTablet: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].right_margin,
      className: 'uagb-margin-control',
      value: hquestionPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          hquestionPaddingTablet: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].top_margin,
      className: 'uagb-margin-control',
      value: vquestionPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          vquestionPaddingTablet: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: questionBottomPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          questionBottomPaddingTablet: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: questionPaddingTypeDesktop === 'px',
      "aria-pressed": questionPaddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          questionPaddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: questionPaddingTypeDesktop === '%',
      "aria-pressed": questionPaddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          questionPaddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].left_margin,
      className: 'uagb-margin-control',
      value: questionLeftPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          questionLeftPaddingMobile: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].right_margin,
      className: 'uagb-margin-control',
      value: hquestionPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          hquestionPaddingMobile: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].top_margin,
      className: 'uagb-margin-control',
      value: vquestionPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          vquestionPaddingMobile: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: questionBottomPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          questionBottomPaddingMobile: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    })));
  };

  var faqAnswerSettings = function faqAnswerSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Answer', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: answerloadGoogleFonts,
        label: 'answerloadGoogleFonts'
      },
      fontFamily: {
        value: answerFontFamily,
        label: 'answerFontFamily'
      },
      fontWeight: {
        value: answerFontWeight,
        label: 'answerFontWeight'
      },
      fontSubset: {
        value: answerFontSubset,
        label: 'answerFontSubset'
      },
      fontSizeType: {
        value: answerFontSizeType,
        label: 'answerFontSizeType'
      },
      fontSize: {
        value: answerFontSize,
        label: 'answerFontSize'
      },
      fontSizeMobile: {
        value: answerFontSizeMobile,
        label: 'answerFontSizeMobile'
      },
      fontSizeTablet: {
        value: answerFontSizeTablet,
        label: 'answerFontSizeTablet'
      },
      lineHeightType: {
        value: answerLineHeightType,
        label: 'answerLineHeightType'
      },
      lineHeight: {
        value: answerLineHeight,
        label: 'answerLineHeight'
      },
      lineHeightMobile: {
        value: answerLineHeightMobile,
        label: 'answerLineHeightMobile'
      },
      lineHeightTablet: {
        value: answerLineHeightTablet,
        label: 'answerLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: answerTextColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["ColorPalette"], {
      value: answerTextColor,
      onChange: function onChange(value) {
        return setAttributes({
          answerTextColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_5__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: answerPaddingTypeDesktop === 'px',
      "aria-pressed": answerPaddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          answerPaddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: answerPaddingTypeDesktop === '%',
      "aria-pressed": answerPaddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          answerPaddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vanswerPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          vanswerPaddingDesktop: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hanswerPaddingDesktop,
      onChange: function onChange(value) {
        return setAttributes({
          hanswerPaddingDesktop: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: answerPaddingTypeDesktop === 'px',
      "aria-pressed": answerPaddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          answerPaddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: answerPaddingTypeDesktop === '%',
      "aria-pressed": answerPaddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          answerPaddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vanswerPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          vanswerPaddingTablet: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hanswerPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          hanswerPaddingTablet: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: answerPaddingTypeDesktop === 'px',
      "aria-pressed": answerPaddingTypeDesktop === 'px',
      onClick: function onClick() {
        return setAttributes({
          answerPaddingTypeDesktop: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: answerPaddingTypeDesktop === '%',
      "aria-pressed": answerPaddingTypeDesktop === '%',
      onClick: function onClick() {
        return setAttributes({
          answerPaddingTypeDesktop: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vanswerPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          vanswerPaddingMobile: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_11__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hanswerPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          hanswerPaddingMobile: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    })));
  };

  var loadQuestionGoogleFonts;
  var loadAnswerGoogleFonts;

  if (questionloadGoogleFonts == true) {
    var qconfig = {
      google: {
        families: [questionFontFamily + (questionFontWeight ? ':' + questionFontWeight : '')]
      }
    };
    loadQuestionGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: qconfig
    });
  }

  if (answerloadGoogleFonts == true) {
    var aconfig = {
      google: {
        families: [answerFontFamily + (answerFontWeight ? ':' + answerFontWeight : '')]
      }
    };
    loadAnswerGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: aconfig
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_10__["InspectorControls"], null, faqGeneralSettings(), faqStylingSettings(), faqQuestionSettings(), faqAnswerSettings()), loadQuestionGoogleFonts, loadAnswerGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/typography/column-responsive.js":
/*!********************************************************!*\
  !*** ./src/components/typography/column-responsive.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnResponsive; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Build the Measure controls
 *
 * @param props
 * @return {Object} Measure settings.
 */

function ColumnResponsive(props) {
  var deviceType = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select) {
    return select("core/edit-post").__experimentalGetPreviewDeviceType();
  }, []);

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])("core/edit-post"),
      setPreviewDeviceType = _useDispatch.__experimentalSetPreviewDeviceType;

  var customSetPreviewDeviceType = function customSetPreviewDeviceType(device) {
    setPreviewDeviceType(device);
  };

  var devices = [{
    name: "Desktop",
    title: /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
      icon: "desktop"
    }),
    itemClass: "uagb-desktop-tab uagb-responsive-tabs"
  }, {
    name: "Tablet",
    title: /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
      icon: "tablet"
    }),
    itemClass: "uagb-tablet-tab uagb-responsive-tabs"
  }, {
    name: "Mobile",
    key: "mobile",
    title: /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
      icon: "smartphone"
    }),
    itemClass: "uagb-mobile-tab uagb-responsive-tabs"
  }];
  var output = {};
  output.Desktop = /*#__PURE__*/React.createElement(React.Fragment, null);
  output.Tablet = /*#__PURE__*/React.createElement(React.Fragment, null);
  output.Mobile = /*#__PURE__*/React.createElement(React.Fragment, null);

  var deviceControls = function deviceControls(devices) {
    var items = [];
    devices.map(function (key) {
      return items.push( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        key: key.key,
        className: "components-button components-tab-panel__tabs-item ".concat(key.itemClass).concat(key.name === deviceType ? " active-tab" : ""),
        "aria-pressed": deviceType === key.name,
        onClick: function onClick() {
          return customSetPreviewDeviceType(key.name);
        }
      }, key.title));
    });
    return items;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "uag-typography-range-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uagb-size-type-field-tabs"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    className: "components-tab-panel__tabs",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Device", "ultimate-addons-for-gutenberg")
  }, deviceControls(devices)), /*#__PURE__*/React.createElement("div", {
    className: "uagb-responsive-control-inner"
  }, output[deviceType] ? output[deviceType] : output.Desktop)));
}

/***/ })

}]);
//# sourceMappingURL=settings.js.map