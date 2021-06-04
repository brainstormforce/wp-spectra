(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/section/settings"],{

/***/ "./src/blocks/section/settings.js":
/*!****************************************!*\
  !*** ./src/blocks/section/settings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _Components_gradient_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/gradient-settings */ "./src/components/gradient-settings/index.js");
/* harmony import */ var _Components_box_shadow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/box-shadow */ "./src/components/box-shadow/index.js");
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
  var align = attributes.align,
      contentWidth = attributes.contentWidth,
      width = attributes.width,
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
      gradientOverlayColor1 = attributes.gradientOverlayColor1,
      gradientOverlayColor2 = attributes.gradientOverlayColor2,
      gradientOverlayType = attributes.gradientOverlayType,
      gradientOverlayLocation1 = attributes.gradientOverlayLocation1,
      gradientOverlayLocation2 = attributes.gradientOverlayLocation2,
      gradientOverlayAngle = attributes.gradientOverlayAngle,
      gradientOverlayPosition = attributes.gradientOverlayPosition,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      borderColor = attributes.borderColor,
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
  var blockControls = ['left', 'center', 'right'];

  if ('full_width' == contentWidth) {
    blockControls = ['wide', 'full'];
  }
  /*
   * Event to set Image as null while removing.
   */


  var onRemoveImage = function onRemoveImage() {
    var _props2 = props,
        setAttributes = _props2.setAttributes;
    setAttributes({
      backgroundImage: null
    });
  };
  /*
   * Event to set Image as while adding.
   */


  var onSelectImage = function onSelectImage(media) {
    var _props3 = props,
        setAttributes = _props3.setAttributes;

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
    var _props4 = props,
        setAttributes = _props4.setAttributes;
    setAttributes({
      backgroundVideo: null
    });
  };
  /*
   * Event to set Video while adding.
   */


  var onSelectVideo = function onSelectVideo(media) {
    var _props5 = props,
        setAttributes = _props5.setAttributes;

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

  var getLayoutPanelBody = function getLayoutPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Layout', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content Width', 'ultimate-addons-for-gutenberg'),
      value: contentWidth,
      onChange: function onChange(value) {
        return setAttributes({
          contentWidth: value
        });
      },
      options: [{
        value: 'boxed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Boxed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'full_width',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Full Width', 'ultimate-addons-for-gutenberg')
      }]
    }), contentWidth == 'boxed' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      value: width,
      min: 0,
      max: 2000,
      onChange: function onChange(value) {
        return setAttributes({
          width: value
        });
      }
    }), contentWidth != 'boxed' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inherit Inner Width from Theme', 'ultimate-addons-for-gutenberg'),
      checked: themeWidth,
      onChange: function onChange() {
        return setAttributes({
          themeWidth: !themeWidth
        });
      }
    }), contentWidth != 'boxed' && !themeWidth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: innerWidthType === 'px',
      "aria-pressed": innerWidthType === 'px',
      onClick: function onClick() {
        return setAttributes({
          innerWidthType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: innerWidthType === '%',
      "aria-pressed": innerWidthType === '%',
      onClick: function onClick() {
        return setAttributes({
          innerWidthType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inner Width', 'ultimate-addons-for-gutenberg'),
      value: innerWidth,
      min: 0,
      max: 2000,
      onChange: function onChange(value) {
        return setAttributes({
          innerWidth: value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('HTML Tag', 'ultimate-addons-for-gutenberg'),
      value: tag,
      onChange: function onChange(value) {
        return setAttributes({
          tag: value
        });
      },
      options: [{
        value: 'div',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('div', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'header',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('header', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'footer',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('footer', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'main',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('main', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'article',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('article', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'section',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('section', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'aside',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('aside', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'nav',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('nav', 'ultimate-addons-for-gutenberg')
      }]
    }));
  };

  var getSpacingPanelBody = function getSpacingPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spacing'),
      initialOpen: false
    }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__["default"], null), ' ', 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Padding')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Padding Tablet')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Padding Mobile')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__["default"], null), ' ', 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Margin')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].left_margin,
      className: 'uagb-margin-control',
      value: leftMargin,
      onChange: function onChange(value) {
        return setAttributes({
          leftMargin: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].right_margin,
      className: 'uagb-margin-control',
      value: rightMargin,
      onChange: function onChange(value) {
        return setAttributes({
          rightMargin: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Margin Tablet')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].left_margin,
      className: 'uagb-margin-control',
      value: leftMarginTablet,
      onChange: function onChange(value) {
        return setAttributes({
          leftMarginTablet: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].right_margin,
      className: 'uagb-margin-control',
      value: rightMarginTablet,
      onChange: function onChange(value) {
        return setAttributes({
          rightMarginTablet: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Margin Mobile')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].left_margin,
      className: 'uagb-margin-control',
      value: leftMarginMobile,
      onChange: function onChange(value) {
        return setAttributes({
          leftMarginMobile: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].right_margin,
      className: 'uagb-margin-control',
      value: rightMarginMobile,
      onChange: function onChange(value) {
        return setAttributes({
          rightMarginMobile: value
        });
      },
      min: -2000,
      max: 2000,
      allowReset: true
    })));
  };

  var getBackgroundPanelBody = function getBackgroundPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Type', 'ultimate-addons-for-gutenberg'),
      value: backgroundType,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundType: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'color',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'gradient',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Gradient', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'image',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'video',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Video', 'ultimate-addons-for-gutenberg')
      }]
    }), 'color' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: backgroundColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundColor: colorValue
        });
      },
      allowReset: true
    })), 'image' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["BaseControl"], {
      id: "section-image-settings",
      className: "editor-bg-image-control",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Image', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Background Image', 'ultimate-addons-for-gutenberg'),
      onSelect: onSelectImage,
      allowedTypes: ['image'],
      value: backgroundImage,
      render: function render(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          isSecondary: true,
          onClick: open
        }, !backgroundImage ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Background Image', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Replace image', 'ultimate-addons-for-gutenberg'));
      }
    }), backgroundImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      className: "uagb-rm-btn",
      onClick: onRemoveImage,
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove Image'))), backgroundImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Position', 'ultimate-addons-for-gutenberg'),
      value: backgroundPosition,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundPosition: value
        });
      },
      options: [{
        value: 'top-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Center Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Center Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Center Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bottom Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bottom Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bottom Right', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Attachment', 'ultimate-addons-for-gutenberg'),
      value: backgroundAttachment,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundAttachment: value
        });
      },
      options: [{
        value: 'fixed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Fixed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'scroll',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Scroll', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Repeat', 'ultimate-addons-for-gutenberg'),
      value: backgroundRepeat,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundRepeat: value
        });
      },
      options: [{
        value: 'no-repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No Repeat', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Repeat', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat-x',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Repeat-x', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat-y',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Repeat-y', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      value: backgroundSize,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundSize: value
        });
      },
      options: [{
        value: 'auto',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Auto', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'cover',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Cover', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'contain',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Contain', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Overlay Type', 'ultimate-addons-for-gutenberg'),
      value: overlayType,
      onChange: function onChange(value) {
        return setAttributes({
          overlayType: value
        });
      },
      options: [{
        value: 'color',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'gradient',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Gradient', 'ultimate-addons-for-gutenberg')
      }]
    }), overlayType == 'color' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Overlay Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundImageColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: backgroundImageColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundImageColor: colorValue
        });
      },
      allowReset: true
    })), 'gradient' == overlayType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color 1', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundVideoColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: gradientOverlayColor1,
      onChange: function onChange(colorValue) {
        return setAttributes({
          gradientOverlayColor1: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Location 1', 'ultimate-addons-for-gutenberg'),
      value: gradientOverlayLocation1,
      onChange: function onChange(value) {
        return setAttributes({
          gradientOverlayLocation1: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color 2', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundVideoColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: gradientOverlayColor2,
      onChange: function onChange(colorValue) {
        return setAttributes({
          gradientOverlayColor2: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Location 2', 'ultimate-addons-for-gutenberg'),
      value: gradientOverlayLocation2,
      onChange: function onChange(value) {
        return setAttributes({
          gradientOverlayLocation2: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      value: gradientOverlayType,
      onChange: function onChange(value) {
        return setAttributes({
          gradientOverlayType: value
        });
      },
      options: [{
        value: 'linear',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Linear', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'radial',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Radial', 'ultimate-addons-for-gutenberg')
      }]
    }), 'linear' == gradientOverlayType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Angle', 'ultimate-addons-for-gutenberg'),
      value: gradientOverlayAngle,
      onChange: function onChange(value) {
        return setAttributes({
          gradientOverlayAngle: value
        });
      },
      min: 0,
      max: 360,
      allowReset: true
    }), 'radial' == gradientOverlayType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      value: gradientOverlayPosition,
      onChange: function onChange(value) {
        return setAttributes({
          gradientOverlayPosition: value
        });
      },
      options: [{
        value: 'center center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Center Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Center Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Center Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bottom Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bottom Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bottom Right', 'ultimate-addons-for-gutenberg')
      }]
    })))), 'gradient' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_gradient_settings__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    })), 'video' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["BaseControl"], {
      id: "section-video-settings",
      className: "editor-bg-video-control",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Video', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Background Video', 'ultimate-addons-for-gutenberg'),
      onSelect: onSelectVideo,
      allowedTypes: ['video'],
      value: backgroundVideo,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          isSecondary: true,
          onClick: open
        }, !backgroundVideo ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Background Video', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Replace Video', 'ultimate-addons-for-gutenberg'));
      }
    }), backgroundVideo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      onClick: onRemoveVideo,
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove Video'))), ('color' == backgroundType || 'image' == backgroundType && backgroundImage || 'gradient' == backgroundType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), 'video' == backgroundType && backgroundVideo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Video Overlay Color'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundVideoColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: backgroundVideoColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundVideoColor: colorValue
        });
      },
      allowReset: true
    })), 'video' == backgroundType && backgroundVideo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Opacity', 'ultimate-addons-for-gutenberg'),
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

  var getBorderPanelBody = function getBorderPanelBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
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
    }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
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
    }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
      value: borderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          borderColor: colorValue
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_box_shadow__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Box Shadow', 'ultimate-addons-for-gutenberg'),
      boxShadowColor: {
        value: boxShadowColor,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      boxShadowHOffset: {
        value: boxShadowHOffset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
      },
      boxShadowVOffset: {
        value: boxShadowVOffset,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
      },
      boxShadowBlur: {
        value: boxShadowBlur,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Blur', 'ultimate-addons-for-gutenberg')
      },
      boxShadowSpread: {
        value: boxShadowSpread,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spread', 'ultimate-addons-for-gutenberg')
      },
      boxShadowPosition: {
        value: boxShadowPosition,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Position', 'ultimate-addons-for-gutenberg')
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockAlignmentToolbar"], {
    value: align,
    onChange: function onChange(value) {
      setAttributes({
        align: value
      });
    },
    controls: blockControls
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, getLayoutPanelBody(), getSpacingPanelBody(), getBackgroundPanelBody(), getBorderPanelBody()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * Box-Shadow reusable component.
 *
 */


 // Extend component



var BoxShadowControl = /*#__PURE__*/function (_Component) {
  _inherits(BoxShadowControl, _Component);

  var _super = _createSuper(BoxShadowControl);

  function BoxShadowControl() {
    var _this;

    _classCallCheck(this, BoxShadowControl);

    _this = _super.apply(this, arguments);
    _this.onAdvancedControlClick = _this.onAdvancedControlClick.bind(_assertThisInitialized(_this));
    _this.onAdvancedControlReset = _this.onAdvancedControlReset.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BoxShadowControl, [{
    key: "onAdvancedControlClick",
    value: function onAdvancedControlClick() {
      var control = true;

      var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Hide Advanced", 'ultimate-addons-for-gutenberg');

      if (this.state !== null && this.state.showAdvancedControls === true) {
        control = false;
        label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Advanced", 'ultimate-addons-for-gutenberg');
      }

      this.setState({
        showAdvancedControls: control,
        showAdvancedControlsLabel: label
      });
    }
  }, {
    key: "onAdvancedControlReset",
    value: function onAdvancedControlReset() {
      var setAttributes = this.props.setAttributes;
      setAttributes({
        boxShadowColor: ""
      });
      setAttributes({
        boxShadowHOffset: ""
      });
      setAttributes({
        boxShadowVOffset: ""
      });
      setAttributes({
        boxShadowBlur: ""
      });
      setAttributes({
        boxShadowSpread: ""
      });
      setAttributes({
        boxShadowPosition: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          boxShadowColor = _this$props.boxShadowColor,
          boxShadowHOffset = _this$props.boxShadowHOffset,
          boxShadowVOffset = _this$props.boxShadowVOffset,
          boxShadowBlur = _this$props.boxShadowBlur,
          boxShadowSpread = _this$props.boxShadowSpread,
          boxShadowPosition = _this$props.boxShadowPosition;
      var advancedControls;
      var boxShadowAdvancedControls;
      var resetBoxShadowAdvancedControls;

      if (this.state !== null && true === this.state.showAdvancedControls) {
        advancedControls = /*#__PURE__*/React.createElement("div", {
          className: "uagb-box-shadow-advanced"
        }, /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("p", {
          className: "uagb-setting-label"
        }, boxShadowColor.label, /*#__PURE__*/React.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/React.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: boxShadowColor.value
          }
        }))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
          value: boxShadowColor.value,
          onChange: function onChange(colorValue) {
            return setAttributes({
              boxShadowColor: colorValue
            });
          },
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowHOffset.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowHOffset.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowHOffset: value
            });
          },
          min: -100,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowVOffset.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowVOffset.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowVOffset: value
            });
          },
          min: -100,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowBlur.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowBlur.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowBlur: value
            });
          },
          min: 0,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowSpread.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowSpread.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowSpread: value
            });
          },
          min: 0,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          label: boxShadowPosition.label,
          value: boxShadowPosition.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowPosition: value
            });
          },
          options: [{
            value: "inset",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Inset", 'ultimate-addons-for-gutenberg')
          }, {
            value: "outset",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Outset", 'ultimate-addons-for-gutenberg')
          }]
        })));
      }

      resetBoxShadowAdvancedControls = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "uagb-size-btn uagb-typography-reset-btn",
        isSmall: true,
        "aria-pressed": this.state !== null,
        onClick: this.onAdvancedControlReset
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "image-rotate"
      }));
      boxShadowAdvancedControls = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "uagb-size-btn uagb-typography-control-btn",
        isSmall: true,
        "aria-pressed": this.state !== null,
        onClick: this.onAdvancedControlClick
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "admin-tools"
      }));
      return /*#__PURE__*/React.createElement("div", {
        className: "uag-typography-option-actions"
      }, /*#__PURE__*/React.createElement("span", null, this.props.label), boxShadowAdvancedControls, resetBoxShadowAdvancedControls, advancedControls);
    }
  }]);

  return BoxShadowControl;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BoxShadowControl);

/***/ }),

/***/ "./src/components/gradient-settings/index.js":
/*!***************************************************!*\
  !*** ./src/components/gradient-settings/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_hexToRgba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/hexToRgba */ "./blocks-config/uagb-controls/hexToRgba.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




function GradientSettings(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var gradientValue = attributes.gradientValue,
      gradientAngle = attributes.gradientAngle,
      gradientColor1 = attributes.gradientColor1,
      gradientColor2 = attributes.gradientColor2,
      gradientLocation1 = attributes.gradientLocation1,
      gradientLocation2 = attributes.gradientLocation2,
      gradientPosition = attributes.gradientPosition,
      gradientType = attributes.gradientType; //set the gradient value to settings if new gradientvalue is not set

  if ("" === gradientValue) {
    var rgb_gradientColor1 = Object(_Controls_hexToRgba__WEBPACK_IMPORTED_MODULE_0__["default"])(gradientColor1);
    var rgb_gradientColor2 = Object(_Controls_hexToRgba__WEBPACK_IMPORTED_MODULE_0__["default"])(gradientColor2);

    if ("linear" === gradientType) {
      var value = "linear-gradient(".concat(gradientAngle, "deg,").concat(rgb_gradientColor1, " ").concat(gradientLocation1, "%, ").concat(rgb_gradientColor2, " ").concat(gradientLocation2, "%)");
      setAttributes({
        gradientValue: value
      });
    } else {
      var value = "radial-gradient(at ".concat(gradientPosition, ", ").concat(rgb_gradientColor1, " ").concat(gradientLocation1, "%, ").concat(rgb_gradientColor2, " ").concat(gradientLocation2, "%)");
      setAttributes({
        gradientValue: value
      });
    }
  }

  var onGradientChange = function onGradientChange(value) {
    setAttributes({
      gradientValue: value
    });
    setAttributes({
      gradientAngle: "",
      gradientColor1: "",
      gradientColor2: "",
      gradientLocation1: "",
      gradientLocation2: ""
    });
  };

  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["__experimentalPanelColorGradientSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Color Settings", 'ultimate-addons-for-gutenberg'),
    initialOpen: true,
    settings: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Overlay Color", 'ultimate-addons-for-gutenberg'),
      gradientValue: gradientValue,
      onGradientChange: onGradientChange
    }]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (GradientSettings);

/***/ })

}]);
//# sourceMappingURL=settings.js.map