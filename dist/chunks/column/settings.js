(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/column/settings"],{

/***/ "./src/blocks/column/settings.js":
/*!***************************************!*\
  !*** ./src/blocks/column/settings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_gradient_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/gradient-settings */ "./src/components/gradient-settings/index.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/**
 * BLOCK: Column - Settings.
 */









var Settings = function Settings(props) {
  var _props$parentProps = props.parentProps,
      _props$parentProps$at = _props$parentProps.attributes,
      topPadding = _props$parentProps$at.topPadding,
      bottomPadding = _props$parentProps$at.bottomPadding,
      leftPadding = _props$parentProps$at.leftPadding,
      rightPadding = _props$parentProps$at.rightPadding,
      topPaddingTablet = _props$parentProps$at.topPaddingTablet,
      bottomPaddingTablet = _props$parentProps$at.bottomPaddingTablet,
      leftPaddingTablet = _props$parentProps$at.leftPaddingTablet,
      rightPaddingTablet = _props$parentProps$at.rightPaddingTablet,
      topPaddingMobile = _props$parentProps$at.topPaddingMobile,
      bottomPaddingMobile = _props$parentProps$at.bottomPaddingMobile,
      leftPaddingMobile = _props$parentProps$at.leftPaddingMobile,
      rightPaddingMobile = _props$parentProps$at.rightPaddingMobile,
      backgroundType = _props$parentProps$at.backgroundType,
      backgroundImage = _props$parentProps$at.backgroundImage,
      backgroundColor = _props$parentProps$at.backgroundColor,
      backgroundPosition = _props$parentProps$at.backgroundPosition,
      backgroundAttachment = _props$parentProps$at.backgroundAttachment,
      backgroundRepeat = _props$parentProps$at.backgroundRepeat,
      backgroundSize = _props$parentProps$at.backgroundSize,
      backgroundOpacity = _props$parentProps$at.backgroundOpacity,
      backgroundImageColor = _props$parentProps$at.backgroundImageColor,
      borderStyle = _props$parentProps$at.borderStyle,
      borderWidth = _props$parentProps$at.borderWidth,
      borderRadius = _props$parentProps$at.borderRadius,
      borderColor = _props$parentProps$at.borderColor,
      overlayType = _props$parentProps$at.overlayType,
      gradientOverlayColor1 = _props$parentProps$at.gradientOverlayColor1,
      gradientOverlayColor2 = _props$parentProps$at.gradientOverlayColor2,
      gradientOverlayType = _props$parentProps$at.gradientOverlayType,
      gradientOverlayLocation1 = _props$parentProps$at.gradientOverlayLocation1,
      gradientOverlayLocation2 = _props$parentProps$at.gradientOverlayLocation2,
      gradientOverlayAngle = _props$parentProps$at.gradientOverlayAngle,
      mobilePaddingType = _props$parentProps$at.mobilePaddingType,
      tabletPaddingType = _props$parentProps$at.tabletPaddingType,
      desktopPaddingType = _props$parentProps$at.desktopPaddingType,
      colWidthMobile = _props$parentProps$at.colWidthMobile,
      colWidthTablet = _props$parentProps$at.colWidthTablet,
      colWidth = _props$parentProps$at.colWidth,
      setAttributes = _props$parentProps.setAttributes,
      deviceType = _props$parentProps.deviceType;
  /*
   * Event to set Image as null while removing.
   */

  var onRemoveImage = function onRemoveImage() {
    var setAttributes = props.parentProps.setAttributes;
    setAttributes({
      backgroundImage: null
    });
  };
  /*
   * Event to set Image as while adding.
   */


  var onSelectImage = function onSelectImage(media) {
    var setAttributes = props.parentProps.setAttributes;

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

  var layoutSettings = function layoutSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Layout', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TabPanel"], {
      className: "uagb-size-type-field-tabs uagb-without-size-type",
      activeClass: "active-tab",
      tabs: [{
        name: 'desktop',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Dashicon"], {
          icon: "desktop"
        }),
        className: 'uagb-desktop-tab uagb-responsive-tabs'
      }, {
        name: 'tablet',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Dashicon"], {
          icon: "tablet"
        }),
        className: 'uagb-tablet-tab uagb-responsive-tabs'
      }, {
        name: 'mobile',
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Dashicon"], {
          icon: "smartphone"
        }),
        className: 'uagb-mobile-tab uagb-responsive-tabs'
      }]
    }, function (tab) {
      var tabout;

      if ('mobile' === tab.name) {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Width (%)', 'ultimate-addons-for-gutenberg'),
          value: colWidthMobile,
          onChange: function onChange(value) {
            setAttributes({
              colWidthMobile: value
            });
          },
          min: 0,
          max: 100
        });
      } else if ('tablet' === tab.name) {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Width (%)', 'ultimate-addons-for-gutenberg'),
          value: colWidthTablet,
          onChange: function onChange(value) {
            setAttributes({
              colWidthTablet: value
            });
          },
          min: 0,
          max: 100
        });
      } else {
        tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Width (%)', 'ultimate-addons-for-gutenberg'),
          value: colWidth,
          onChange: function onChange(value) {
            setAttributes({
              colWidth: value
            });
          },
          min: 0,
          max: 100
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, tabout);
    }));
  };

  var spacingSettings = function spacingSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
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
    })));
  };

  var backgroundSettings = function backgroundSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Type', 'ultimate-addons-for-gutenberg'),
      value: backgroundType,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundType: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'color',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'gradient',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Gradient', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'image',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image', 'ultimate-addons-for-gutenberg')
      }]
    }), 'color' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: backgroundColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundColor: colorValue
        });
      },
      allowReset: true
    })), 'image' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
      className: "editor-bg-image-control",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Image', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Background Image', 'ultimate-addons-for-gutenberg'),
      onSelect: onSelectImage,
      allowedTypes: ['image'],
      value: backgroundImage,
      render: function render(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          isSecondary: true,
          onClick: open
        }, !backgroundImage ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Background Image', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Replace image', 'ultimate-addons-for-gutenberg'));
      }
    }), backgroundImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      className: "uagb-rm-btn",
      onClick: onRemoveImage,
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Remove Image', 'ultimate-addons-for-gutenberg'))), backgroundImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image Position', 'ultimate-addons-for-gutenberg'),
      value: backgroundPosition,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundPosition: value
        });
      },
      options: [{
        value: 'top-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Center Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Center Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Center Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom Right', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Attachment', 'ultimate-addons-for-gutenberg'),
      value: backgroundAttachment,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundAttachment: value
        });
      },
      options: [{
        value: 'fixed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Fixed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'scroll',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Scroll', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Repeat', 'ultimate-addons-for-gutenberg'),
      value: backgroundRepeat,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundRepeat: value
        });
      },
      options: [{
        value: 'no-repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('No Repeat', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Repeat', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat-x',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Repeat-x', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat-y',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Repeat-y', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      value: backgroundSize,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundSize: value
        });
      },
      options: [{
        value: 'auto',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Auto', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'cover',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Cover', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'contain',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Contain', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image Overlay Type', 'ultimate-addons-for-gutenberg'),
      value: overlayType,
      onChange: function onChange(value) {
        return setAttributes({
          overlayType: value
        });
      },
      options: [{
        value: 'color',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'gradient',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Gradient', 'ultimate-addons-for-gutenberg')
      }]
    }), 'color' == overlayType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image Overlay Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundImageColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: backgroundImageColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundImageColor: colorValue
        });
      },
      allowReset: true
    })), 'gradient' == overlayType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["PanelColorSettings"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color Settings', 'ultimate-addons-for-gutenberg'),
      colorSettings: [{
        value: gradientOverlayColor2,
        onChange: function onChange(value) {
          return setAttributes({
            gradientOverlayColor2: value
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color 1', 'ultimate-addons-for-gutenberg')
      }, {
        value: gradientOverlayColor1,
        onChange: function onChange(value) {
          return setAttributes({
            gradientOverlayColor1: value
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color 2', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      value: gradientOverlayType,
      onChange: function onChange(value) {
        return setAttributes({
          gradientOverlayType: value
        });
      },
      options: [{
        value: 'linear',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Linear', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'radial',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Radial', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Location 1', 'ultimate-addons-for-gutenberg'),
      value: gradientOverlayLocation1,
      onChange: function onChange(value) {
        return setAttributes({
          gradientOverlayLocation1: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Location 2', 'ultimate-addons-for-gutenberg'),
      value: gradientOverlayLocation2,
      onChange: function onChange(value) {
        return setAttributes({
          gradientOverlayLocation2: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Angle', 'ultimate-addons-for-gutenberg'),
      value: gradientOverlayAngle,
      onChange: function onChange(value) {
        return setAttributes({
          gradientOverlayAngle: value
        });
      },
      min: 0,
      max: 360,
      allowReset: true
    })))), 'gradient' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_gradient_settings__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: props.parentProps.attributes,
      setAttributes: setAttributes
    })), ('color' == backgroundType || 'image' == backgroundType && backgroundImage || 'gradient' == backgroundType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Opacity'),
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
    }));
  };

  var borderSettings = function borderSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          borderStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      onChange: function onChange(value) {
        return setAttributes({
          borderWidth: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: borderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          borderColor: colorValue
        });
      },
      allowReset: true
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, layoutSettings(), spacingSettings(), backgroundSettings(), borderSettings()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

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