(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/columns/settings"],{

/***/ "./src/blocks/columns/settings.js":
/*!****************************************!*\
  !*** ./src/blocks/columns/settings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_gradient_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/gradient-settings */ "./src/components/gradient-settings/index.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _Components_option_selector_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/option-selector-control */ "./src/components/option-selector-control/index.js");
/* harmony import */ var _Components_box_shadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/box-shadow */ "./src/components/box-shadow/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/**
 * BLOCK: Columns - Settings.
 */











var Settings = function Settings(props) {
  var _props$parentProps = props.parentProps,
      attributes = _props$parentProps.attributes,
      setAttributes = _props$parentProps.setAttributes,
      deviceType = _props$parentProps.deviceType;
  var stack = attributes.stack,
      align = attributes.align,
      vAlign = attributes.vAlign,
      contentWidth = attributes.contentWidth,
      width = attributes.width,
      widthType = attributes.widthType,
      tag = attributes.tag,
      columnGap = attributes.columnGap,
      topMargin = attributes.topMargin,
      bottomMargin = attributes.bottomMargin,
      topMarginMobile = attributes.topMarginMobile,
      bottomMarginMobile = attributes.bottomMarginMobile,
      topMarginTablet = attributes.topMarginTablet,
      bottomMarginTablet = attributes.bottomMarginTablet,
      topPadding = attributes.topPadding,
      bottomPadding = attributes.bottomPadding,
      leftPadding = attributes.leftPadding,
      rightPadding = attributes.rightPadding,
      topPaddingTablet = attributes.topPaddingTablet,
      bottomPaddingTablet = attributes.bottomPaddingTablet,
      leftPaddingTablet = attributes.leftPaddingTablet,
      rightPaddingTablet = attributes.rightPaddingTablet,
      topPaddingMobile = attributes.topPaddingMobile,
      bottomPaddingMobile = attributes.bottomPaddingMobile,
      leftPaddingMobile = attributes.leftPaddingMobile,
      rightPaddingMobile = attributes.rightPaddingMobile,
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
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      borderColor = attributes.borderColor,
      columns = attributes.columns,
      bottomType = attributes.bottomType,
      bottomColor = attributes.bottomColor,
      bottomHeight = attributes.bottomHeight,
      bottomHeightTablet = attributes.bottomHeightTablet,
      bottomHeightMobile = attributes.bottomHeightMobile,
      bottomWidth = attributes.bottomWidth,
      topType = attributes.topType,
      topColor = attributes.topColor,
      topHeight = attributes.topHeight,
      topHeightTablet = attributes.topHeightTablet,
      topHeightMobile = attributes.topHeightMobile,
      topWidth = attributes.topWidth,
      bottomFlip = attributes.bottomFlip,
      topFlip = attributes.topFlip,
      reverseTablet = attributes.reverseTablet,
      reverseMobile = attributes.reverseMobile,
      topDividerOpacity = attributes.topDividerOpacity,
      bottomDividerOpacity = attributes.bottomDividerOpacity,
      topContentAboveShape = attributes.topContentAboveShape,
      bottomContentAboveShape = attributes.bottomContentAboveShape,
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
      boxShadowPosition = attributes.boxShadowPosition;
  /*
   * Event to set Image as null while removing.
   */

  var onRemoveImage = function onRemoveImage() {
    setAttributes({
      backgroundImage: null
    });
  };
  /*
   * Event to set Image as while adding.
   */


  var onSelectImage = function onSelectImage(media) {
    if (!media || !media.url) {
      setAttributes({
        backgroundImage: null
      });
      return;
    }

    if (!media.type || 'image' != media.type) {
      return;
    }

    setAttributes({
      backgroundImage: media
    });
  };
  /*
   * Event to set Video as null while removing.
   */


  var onRemoveVideo = function onRemoveVideo() {
    setAttributes({
      backgroundVideo: null
    });
  };
  /*
   * Event to set Video while adding.
   */


  var onSelectVideo = function onSelectVideo(media) {
    if (!media || !media.url) {
      setAttributes({
        backgroundVideo: null
      });
      return;
    }

    if (!media.type || 'video' != media.type) {
      return;
    }

    setAttributes({
      backgroundVideo: media
    });
  };

  var blockControlSettings = function blockControlSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["BlockAlignmentToolbar"], {
      value: align,
      onChange: function onChange(value) {
        setAttributes({
          align: value
        });
      },
      controls: ['wide', 'full']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["BlockVerticalAlignmentToolbar"], {
      value: vAlign,
      onChange: function onChange(value) {
        setAttributes({
          vAlign: value
        });
      }
    }));
  };

  var layoutSettings = function layoutSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Layout', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      value: columns,
      min: 0,
      max: 6,
      onChange: function onChange(value) {
        return setAttributes({
          columns: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
      value: stack,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tablet & Mobile', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return setAttributes({
          stack: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Note: Choose on what breakpoint the columns will stack.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Container Width', 'ultimate-addons-for-gutenberg'),
      value: contentWidth,
      onChange: function onChange(value) {
        return setAttributes({
          contentWidth: value
        });
      },
      options: [{
        value: 'theme',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Theme Container Width', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'custom',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Custom', 'ultimate-addons-for-gutenberg')
      }]
    }), contentWidth == 'custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: widthType === 'px',
      "aria-pressed": widthType === 'px',
      min: 0,
      max: 2000,
      onClick: function onClick() {
        return setAttributes({
          widthType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: widthType === '%',
      "aria-pressed": widthType === '%',
      min: 0,
      max: 100,
      onClick: function onClick() {
        return setAttributes({
          widthType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inner Width', 'ultimate-addons-for-gutenberg'),
      value: width,
      min: 0,
      max: '%' == widthType ? 100 : 2000,
      onChange: function onChange(value) {
        return setAttributes({
          width: value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_option_selector_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Column Gap', 'ultimate-addons-for-gutenberg'),
      currentOption: columnGap,
      options: [{
        value: '10',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Default', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Default (10px)', 'ultimate-addons-for-gutenberg')
      }, {
        value: '0',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('No Gap (0px)', 'ultimate-addons-for-gutenberg')
      }, {
        value: '5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('S', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Narrow (5px)', 'ultimate-addons-for-gutenberg')
      }, {
        value: '15',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('M', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Extended (15px)', 'ultimate-addons-for-gutenberg')
      }, {
        value: '20',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('L', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Wide (20px)', 'ultimate-addons-for-gutenberg')
      }, {
        value: '30',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('XL', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Wider (30px)', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return setAttributes({
          columnGap: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Note: The individual Column Gap can be managed from Column Settings.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('HTML Tag', 'ultimate-addons-for-gutenberg'),
      value: tag,
      onChange: function onChange(value) {
        return setAttributes({
          tag: value
        });
      },
      options: [{
        value: 'div',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('div', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'header',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('header', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'footer',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('footer', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'main',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('main', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'article',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('article', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'section',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('section', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'aside',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('aside', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'nav',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('nav', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reverse Columns (Tablet & Mobile)', 'ultimate-addons-for-gutenberg'),
      checked: reverseTablet,
      onChange: function onChange() {
        return setAttributes({
          reverseTablet: !reverseTablet
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reverse Columns (Mobile)', 'ultimate-addons-for-gutenberg'),
      checked: reverseMobile,
      onChange: function onChange() {
        return setAttributes({
          reverseMobile: !reverseMobile
        });
      }
    }));
  };

  var spacingSettings = function spacingSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_5__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: desktopPaddingType === 'px',
      "aria-pressed": desktopPaddingType === 'px',
      onClick: function onClick() {
        return setAttributes({
          desktopPaddingType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: desktopPaddingType === '%',
      "aria-pressed": desktopPaddingType === '%',
      onClick: function onClick() {
        return setAttributes({
          desktopPaddingType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].top_margin,
      className: 'uagb-margin-control',
      value: topPadding,
      onChange: function onChange(value) {
        return setAttributes({
          topPadding: value
        });
      },
      min: 0,
      max: '%' == desktopPaddingType ? 100 : 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: bottomPadding,
      onChange: function onChange(value) {
        return setAttributes({
          bottomPadding: value
        });
      },
      min: 0,
      max: '%' == desktopPaddingType ? 100 : 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].left_margin,
      className: 'uagb-margin-control',
      value: leftPadding,
      onChange: function onChange(value) {
        return setAttributes({
          leftPadding: value
        });
      },
      min: 0,
      max: '%' == desktopPaddingType ? 100 : 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].right_margin,
      className: 'uagb-margin-control',
      value: rightPadding,
      onChange: function onChange(value) {
        return setAttributes({
          rightPadding: value
        });
      },
      min: 0,
      max: '%' == desktopPaddingType ? 100 : 2000,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: tabletPaddingType === 'px',
      "aria-pressed": tabletPaddingType === 'px',
      onClick: function onClick() {
        return setAttributes({
          tabletPaddingType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: tabletPaddingType === '%',
      "aria-pressed": tabletPaddingType === '%',
      onClick: function onClick() {
        return setAttributes({
          tabletPaddingType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].top_margin,
      className: 'uagb-margin-control',
      value: topPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          topPaddingTablet: value
        });
      },
      min: 0,
      max: '%' == tabletPaddingType ? 100 : 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: bottomPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          bottomPaddingTablet: value
        });
      },
      min: 0,
      max: '%' == tabletPaddingType ? 100 : 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].left_margin,
      className: 'uagb-margin-control',
      value: leftPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          leftPaddingTablet: value
        });
      },
      min: 0,
      max: '%' == tabletPaddingType ? 100 : 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].right_margin,
      className: 'uagb-margin-control',
      value: rightPaddingTablet,
      onChange: function onChange(value) {
        return setAttributes({
          rightPaddingTablet: value
        });
      },
      min: 0,
      max: '%' == tabletPaddingType ? 100 : 2000,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: mobilePaddingType === 'px',
      "aria-pressed": mobilePaddingType === 'px',
      onClick: function onClick() {
        return setAttributes({
          mobilePaddingType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: mobilePaddingType === '%',
      "aria-pressed": mobilePaddingType === '%',
      onClick: function onClick() {
        return setAttributes({
          mobilePaddingType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].top_margin,
      className: 'uagb-margin-control',
      value: topPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          topPaddingMobile: value
        });
      },
      min: 0,
      max: '%' == mobilePaddingType ? 100 : 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: bottomPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          bottomPaddingMobile: value
        });
      },
      min: 0,
      max: '%' == mobilePaddingType ? 100 : 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].left_margin,
      className: 'uagb-margin-control',
      value: leftPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          leftPaddingMobile: value
        });
      },
      min: 0,
      max: '%' == mobilePaddingType ? 100 : 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].right_margin,
      className: 'uagb-margin-control',
      value: rightPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          rightPaddingMobile: value
        });
      },
      min: 0,
      max: '%' == mobilePaddingType ? 100 : 2000,
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_5__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: desktopMarginType === 'px',
      "aria-pressed": desktopMarginType === 'px',
      onClick: function onClick() {
        return setAttributes({
          desktopMarginType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: desktopMarginType === '%',
      "aria-pressed": desktopMarginType === '%',
      onClick: function onClick() {
        return setAttributes({
          desktopMarginType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].top_margin,
      className: 'uagb-margin-control',
      value: topMargin,
      onChange: function onChange(value) {
        return setAttributes({
          topMargin: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: bottomMargin,
      onChange: function onChange(value) {
        return setAttributes({
          bottomMargin: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: tabletMarginType === 'px',
      "aria-pressed": tabletMarginType === 'px',
      onClick: function onClick() {
        return setAttributes({
          tabletMarginType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: tabletMarginType === '%',
      "aria-pressed": tabletMarginType === '%',
      onClick: function onClick() {
        return setAttributes({
          tabletMarginType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin Tablet', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].top_margin,
      className: 'uagb-margin-control',
      value: topMarginTablet,
      onChange: function onChange(value) {
        return setAttributes({
          topMarginTablet: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: bottomMarginTablet,
      onChange: function onChange(value) {
        return setAttributes({
          bottomMarginTablet: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: mobileMarginType === 'px',
      "aria-pressed": mobileMarginType === 'px',
      onClick: function onClick() {
        return setAttributes({
          mobileMarginType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: mobileMarginType === '%',
      "aria-pressed": mobileMarginType === '%',
      onClick: function onClick() {
        return setAttributes({
          mobileMarginType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin Mobile', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].top_margin,
      className: 'uagb-margin-control',
      value: topMarginMobile,
      onChange: function onChange(value) {
        return setAttributes({
          topMarginMobile: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].bottom_margin,
      className: 'uagb-margin-control',
      value: bottomMarginMobile,
      onChange: function onChange(value) {
        return setAttributes({
          bottomMarginMobile: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    })));
  };

  var backgroundSettings = function backgroundSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Type', 'ultimate-addons-for-gutenberg'),
      value: backgroundType,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundType: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'color',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'gradient',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Gradient', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'image',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'video',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Video', 'ultimate-addons-for-gutenberg')
      }]
    }), 'color' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: backgroundColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundColor: colorValue
        });
      },
      allowReset: true
    })), 'image' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["BaseControl"], {
      id: "Background Image",
      className: "editor-bg-image-control",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Image', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Background Image', 'ultimate-addons-for-gutenberg'),
      onSelect: onSelectImage,
      allowedTypes: ['image'],
      value: backgroundImage,
      render: function render(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          isSecondary: true,
          onClick: open
        }, !backgroundImage ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Background Image', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Replace image', 'ultimate-addons-for-gutenberg'));
      }
    }), backgroundImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      className: "uagb-rm-btn",
      onClick: onRemoveImage,
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove Image', 'ultimate-addons-for-gutenberg'))), backgroundImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Position', 'ultimate-addons-for-gutenberg'),
      value: backgroundPosition,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundPosition: value
        });
      },
      options: [{
        value: 'top-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Right', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Attachment', 'ultimate-addons-for-gutenberg'),
      value: backgroundAttachment,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundAttachment: value
        });
      },
      options: [{
        value: 'fixed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fixed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'scroll',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Scroll', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Repeat', 'ultimate-addons-for-gutenberg'),
      value: backgroundRepeat,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundRepeat: value
        });
      },
      options: [{
        value: 'no-repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('No Repeat', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Repeat', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat-x',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Repeat-x', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat-y',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Repeat-y', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      value: backgroundSize,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundSize: value
        });
      },
      options: [{
        value: 'auto',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Auto', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'cover',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cover', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'contain',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Contain', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Overlay Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundImageColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: backgroundImageColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundImageColor: colorValue
        });
      },
      allowReset: true
    })))), 'gradient' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_gradient_settings__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    })), 'video' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["BaseControl"], {
      id: "Background Video",
      className: "editor-bg-video-control",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Video', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Background Video', 'ultimate-addons-for-gutenberg'),
      onSelect: onSelectVideo,
      allowedTypes: ['video'],
      value: backgroundVideo,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          isSecondary: true,
          onClick: open
        }, !backgroundVideo ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Background Video', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Replace Video', 'ultimate-addons-for-gutenberg'));
      }
    }), backgroundVideo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      onClick: onRemoveVideo,
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove Video', 'ultimate-addons-for-gutenberg'))), ('color' == backgroundType || 'image' == backgroundType && backgroundImage || 'gradient' == backgroundType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity', 'ultimate-addons-for-gutenberg'),
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
    }), 'video' == backgroundType && backgroundVideo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Video Overlay Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundVideoColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: backgroundVideoColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundVideoColor: colorValue
        });
      },
      allowReset: true
    })), 'video' == backgroundType && backgroundVideo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity', 'ultimate-addons-for-gutenberg'),
      value: backgroundVideoOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundVideoOpacity: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true,
      initialPosition: 50
    }));
  };

  var shapeDividersSettings = function shapeDividersSettings() {
    var dividers = [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'tilt',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tilt', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'mountains',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mountains', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'wave_brush',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Wave Brush', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'waves',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Waves', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'wave_pattern',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Waves Pattern', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'triangle',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Triangle', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'drops',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Drops', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'clouds',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Clouds', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'zigzag',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('ZigZag', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'pyramids',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pyramids', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'triangle_asymmetrical',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Triangle Asymmetrical', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'tilt_opacity',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tilt Opacity', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'fan_opacity',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Fan Opacity', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'curve',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Curve', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'curve_asymmetrical',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Curve Asymmetrical', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'curve_reverse',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Curve Reverse', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'curve_asym_reverse',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Curve Asymmetrical Reverse', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'arrow',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Arrow', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'arrow_split',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Arrow Split', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'book',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Book', 'ultimate-addons-for-gutenberg')
    }];
    var topSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      value: topType,
      onChange: function onChange(value) {
        return setAttributes({
          topType: value
        });
      },
      options: dividers
    }), topType != 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        topColor: topColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: topColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          topColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity', 'ultimate-addons-for-gutenberg'),
      value: topDividerOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          topDividerOpacity: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      value: topWidth,
      onChange: function onChange(value) {
        return setAttributes({
          topWidth: value
        });
      },
      min: 100,
      max: 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
      className: "uagb-size-type-field-tabs uagb-without-size-type",
      activeClass: "active-tab",
      tabs: [{
        name: 'desktop',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Dashicon"], {
          icon: "desktop"
        }),
        className: 'uagb-desktop-tab uagb-responsive-tabs'
      }, {
        name: 'tablet',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Dashicon"], {
          icon: "tablet"
        }),
        className: 'uagb-tablet-tab uagb-responsive-tabs'
      }, {
        name: 'mobile',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Dashicon"], {
          icon: "smartphone"
        }),
        className: 'uagb-mobile-tab uagb-responsive-tabs'
      }]
    }, function (tab) {
      var tabout;

      if ('mobile' === tab.name) {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
          value: topHeightMobile,
          onChange: function onChange(value) {
            return setAttributes({
              topHeightMobile: value
            });
          },
          min: 0,
          max: 500,
          allowReset: true
        });
      } else if ('tablet' === tab.name) {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
          value: topHeightTablet,
          onChange: function onChange(value) {
            return setAttributes({
              topHeightTablet: value
            });
          },
          min: 0,
          max: 500,
          allowReset: true
        });
      } else {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
          value: topHeight,
          onChange: function onChange(value) {
            return setAttributes({
              topHeight: value
            });
          },
          min: 0,
          max: 500,
          allowReset: true
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, tabout);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Flip', 'ultimate-addons-for-gutenberg'),
      checked: topFlip,
      onChange: function onChange() {
        return setAttributes({
          topFlip: !topFlip
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bring To Front', 'ultimate-addons-for-gutenberg'),
      checked: topContentAboveShape,
      onChange: function onChange() {
        return setAttributes({
          topContentAboveShape: !topContentAboveShape
        });
      }
    })));
    var bottomSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      value: bottomType,
      onChange: function onChange(value) {
        return setAttributes({
          bottomType: value
        });
      },
      options: dividers
    }), bottomType != 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        bottomColor: bottomColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: bottomColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          bottomColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Opacity', 'ultimate-addons-for-gutenberg'),
      value: bottomDividerOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          bottomDividerOpacity: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      value: bottomWidth,
      onChange: function onChange(value) {
        return setAttributes({
          bottomWidth: value
        });
      },
      min: 100,
      max: 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
      className: "uagb-size-type-field-tabs uagb-without-size-type",
      activeClass: "active-tab",
      tabs: [{
        name: 'desktop',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Dashicon"], {
          icon: "desktop"
        }),
        className: 'uagb-desktop-tab uagb-responsive-tabs'
      }, {
        name: 'tablet',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Dashicon"], {
          icon: "tablet"
        }),
        className: 'uagb-tablet-tab uagb-responsive-tabs'
      }, {
        name: 'mobile',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Dashicon"], {
          icon: "smartphone"
        }),
        className: 'uagb-mobile-tab uagb-responsive-tabs'
      }]
    }, function (tab) {
      var tabout;

      if ('mobile' === tab.name) {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
          value: bottomHeightMobile,
          onChange: function onChange(value) {
            return setAttributes({
              bottomHeightMobile: value
            });
          },
          min: 0,
          max: 500,
          allowReset: true
        });
      } else if ('tablet' === tab.name) {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
          value: bottomHeightTablet,
          onChange: function onChange(value) {
            return setAttributes({
              bottomHeightTablet: value
            });
          },
          min: 0,
          max: 500,
          allowReset: true
        });
      } else {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
          value: bottomHeight,
          onChange: function onChange(value) {
            return setAttributes({
              bottomHeight: value
            });
          },
          min: 0,
          max: 500,
          allowReset: true
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, tabout);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Flip', 'ultimate-addons-for-gutenberg'),
      checked: bottomFlip,
      onChange: function onChange() {
        return setAttributes({
          bottomFlip: !bottomFlip
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bring To Front', 'ultimate-addons-for-gutenberg'),
      checked: bottomContentAboveShape,
      onChange: function onChange() {
        return setAttributes({
          bottomContentAboveShape: !bottomContentAboveShape
        });
      }
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Shape Dividers', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
      className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
      activeClass: "active-tab",
      tabs: [{
        name: 'top',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-top-tab'
      }, {
        name: 'bottom',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-bottom-tab'
      }]
    }, function (tabName) {
      var tabout;

      if ('bottom' === tabName.name) {
        tabout = bottomSettings;
      } else {
        tabout = topSettings;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, tabout);
    }));
  };

  var borderSettings = function borderSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          borderStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      onChange: function onChange(value) {
        return setAttributes({
          borderWidth: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      max: 1000,
      allowReset: true
    }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: borderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          borderColor: colorValue
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_box_shadow__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Box Shadow', 'ultimate-addons-for-gutenberg'),
      boxShadowColor: {
        value: boxShadowColor,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      boxShadowHOffset: {
        value: boxShadowHOffset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
      },
      boxShadowVOffset: {
        value: boxShadowVOffset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
      },
      boxShadowBlur: {
        value: boxShadowBlur,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Blur', 'ultimate-addons-for-gutenberg')
      },
      boxShadowSpread: {
        value: boxShadowSpread,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spread', 'ultimate-addons-for-gutenberg')
      },
      boxShadowPosition: {
        value: boxShadowPosition,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Position', 'ultimate-addons-for-gutenberg')
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }, blockControlSettings(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, layoutSettings(), spacingSettings(), backgroundSettings(), shapeDividersSettings(), borderSettings()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/option-selector-control/index.js":
/*!*********************************************************!*\
  !*** ./src/components/option-selector-control/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OptionSelectorControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * WordPress dependencies
 */



/**
 * Constants
 */

var DEFAULT_OPTIONS = [{
  value: '5',

  /* translators: abbreviation for small size */
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('S', 'ultimate-addons-for-gutenberg'),
  tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Small', 'ultimate-addons-for-gutenberg')
}, {
  value: '15',

  /* translators: abbreviation for medium size */
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('M', 'ultimate-addons-for-gutenberg'),
  tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Medium', 'ultimate-addons-for-gutenberg')
}, {
  value: '20',

  /* translators: abbreviation for large size */
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('L', 'ultimate-addons-for-gutenberg'),
  tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Large', 'ultimate-addons-for-gutenberg')
}, {
  value: '30',

  /* translators: abbreviation for extra large size */
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('XL', 'ultimate-addons-for-gutenberg'),
  tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Extra Large', 'ultimate-addons-for-gutenberg')
}];
var NONE_OPTION = {
  value: '0',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg'),
  tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
};

var OptionSelectorControl = /*#__PURE__*/function (_Component) {
  _inherits(OptionSelectorControl, _Component);

  var _super = _createSuper(OptionSelectorControl);

  function OptionSelectorControl() {
    _classCallCheck(this, OptionSelectorControl);

    return _super.apply(this, arguments);
  }

  _createClass(OptionSelectorControl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          advancedMaxValue = _this$props.advancedMaxValue,
          advancedMinValue = _this$props.advancedMinValue,
          currentOption = _this$props.currentOption,
          label = _this$props.label,
          _onChange = _this$props.onChange,
          options = _this$props.options,
          showAdvancedControls = _this$props.showAdvancedControls,
          showIcons = _this$props.showIcons,
          showNoneOption = _this$props.showNoneOption;
      var buttons = options || DEFAULT_OPTIONS;

      if (showNoneOption) {
        buttons = [NONE_OPTION].concat(_toConsumableArray(buttons));
      }

      return showAdvancedControls && advancedMinValue !== false && advancedMaxValue !== false ? /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: label,
        value: currentOption,
        onChange: function onChange(value) {
          return _onChange(value);
        },
        min: advancedMinValue,
        max: advancedMaxValue
      }) : /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
        id: "uagb-option-selector-".concat(label),
        label: label
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        "aria-label": label
      }, buttons.map(function (option) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          key: "option-".concat(option.value),
          text: option.tooltip
        }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          isLarge: true,
          isSecondary: currentOption !== option.value,
          isPrimary: currentOption === option.value,
          "aria-pressed": currentOption === option.value,
          onClick: function onClick() {
            return _onChange(option.value);
          },
          "aria-label": option.tooltip
        }, showIcons ? option.icon : option.label));
      }))));
    }
  }]);

  return OptionSelectorControl;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

}]);
//# sourceMappingURL=settings.js.map