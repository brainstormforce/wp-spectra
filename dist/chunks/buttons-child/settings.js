(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/buttons-child/settings"],{

/***/ "./src/blocks/buttons-child/settings.js":
/*!**********************************************!*\
  !*** ./src/blocks/buttons-child/settings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/**
 * BLOCK: Buttons Child - Edit Class
 */
// Import classes










var Settings = function Settings(props) {
  var state = props.state;
  var setStateValue = props.setStateValue;
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      deviceType = _props.deviceType;
  var link = attributes.link,
      size = attributes.size,
      vPadding = attributes.vPadding,
      hPadding = attributes.hPadding,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      borderStyle = attributes.borderStyle,
      borderColor = attributes.borderColor,
      borderHColor = attributes.borderHColor,
      color = attributes.color,
      background = attributes.background,
      hColor = attributes.hColor,
      hBackground = attributes.hBackground,
      sizeType = attributes.sizeType,
      sizeMobile = attributes.sizeMobile,
      sizeTablet = attributes.sizeTablet,
      lineHeight = attributes.lineHeight,
      lineHeightType = attributes.lineHeightType,
      lineHeightMobile = attributes.lineHeightMobile,
      lineHeightTablet = attributes.lineHeightTablet,
      opensInNewTab = attributes.opensInNewTab,
      inheritFromTheme = attributes.inheritFromTheme,
      icon = attributes.icon,
      iconPosition = attributes.iconPosition,
      iconSpace = attributes.iconSpace,
      target = attributes.target;

  var onClickLinkSettings = function onClickLinkSettings() {
    if ('_self' === target) {
      setAttributes({
        opensInNewTab: false
      });
    } else if ('_blank' === target) {
      setAttributes({
        opensInNewTab: true
      });
    }

    setStateValue({
      isURLPickerOpen: true
    });
  };

  var onChangeOpensInNewTab = function onChangeOpensInNewTab(value) {
    if (true === value) {
      props.setAttributes({
        target: '_blank'
      });
    } else {
      props.setAttributes({
        target: '_self'
      });
    }
  };

  var buttonSettings = function buttonSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Button Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Inherit from Theme', 'ultimate-addons-for-gutenberg'),
      checked: inheritFromTheme,
      onChange: function onChange() {
        return setAttributes({
          inheritFromTheme: !inheritFromTheme
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Button Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
    }), '' !== icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Position', 'ultimate-addons-for-gutenberg'),
      value: iconPosition,
      onChange: function onChange(value) {
        return setAttributes({
          iconPosition: value
        });
      },
      options: [{
        value: 'before',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Before Text', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('After Text', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Spacing', 'ultimate-addons-for-gutenberg'),
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
    })), !inheritFromTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(' Color Settings', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["TabPanel"], {
      className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
      activeClass: "active-tab",
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-normal-tab'
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hover', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-hover-tab'
      }]
    }, function (tabName) {
      var btn_color_tab;

      if ('normal' === tabName.name) {
        btn_color_tab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: color
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
          value: color,
          onChange: function onChange(value) {
            return setAttributes({
              color: value
            });
          },
          allowReset: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: background
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
          value: background,
          onChange: function onChange(value) {
            return setAttributes({
              background: value
            });
          },
          allowReset: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: borderColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
          value: borderColor,
          onChange: function onChange(value) {
            return setAttributes({
              borderColor: value
            });
          },
          allowReset: true
        }));
      } else {
        btn_color_tab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Text Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: hColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
          value: hColor,
          onChange: function onChange(value) {
            return setAttributes({
              hColor: value
            });
          },
          allowReset: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: hBackground
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
          value: hBackground,
          onChange: function onChange(value) {
            return setAttributes({
              hBackground: value
            });
          },
          allowReset: true
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          className: "uagb-setting-label"
        }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: borderHColor
          }
        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
          value: borderHColor,
          onChange: function onChange(value) {
            return setAttributes({
              borderHColor: value
            });
          },
          allowReset: true
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, btn_color_tab);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Padding (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: vPadding,
      onChange: function onChange(value) {
        setAttributes({
          vPadding: value
        });
      },
      min: 0,
      max: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: hPadding,
      onChange: function onChange(value) {
        setAttributes({
          hPadding: value
        });
      },
      min: 0,
      max: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        setAttributes({
          borderStyle: value
        });
      }
    }), borderStyle != 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Thickness', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      onChange: function onChange(value) {
        setAttributes({
          borderWidth: value
        });
      },
      min: 0,
      max: 20
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Rounded Corners', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      max: 50
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_6__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: sizeType === 'px',
      "aria-pressed": sizeType === 'px',
      onClick: function onClick() {
        return setAttributes({
          sizeType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: sizeType === '%',
      "aria-pressed": sizeType === '%',
      onClick: function onClick() {
        return setAttributes({
          sizeType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Font Size', 'ultimate-addons-for-gutenberg'),
      value: size,
      onChange: function onChange(value) {
        setAttributes({
          size: value
        });
      },
      min: 0,
      max: 100,
      beforeIcon: "editor-textcolor",
      allowReset: true,
      initialPosition: 16
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size Type')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: sizeType === 'px',
      "aria-pressed": sizeType === 'px',
      onClick: function onClick() {
        return setAttributes({
          sizeType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: sizeType === '%',
      "aria-pressed": sizeType === '%',
      onClick: function onClick() {
        return setAttributes({
          sizeType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Font Size', 'ultimate-addons-for-gutenberg'),
      value: sizeTablet,
      onChange: function onChange(value) {
        setAttributes({
          sizeTablet: value
        });
      },
      min: 0,
      max: 100,
      beforeIcon: "editor-textcolor",
      allowReset: true,
      initialPosition: 16
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: sizeType === 'px',
      "aria-pressed": sizeType === 'px',
      onClick: function onClick() {
        return setAttributes({
          sizeType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: sizeType === '%',
      "aria-pressed": sizeType === '%',
      onClick: function onClick() {
        return setAttributes({
          sizeType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Font Size', 'ultimate-addons-for-gutenberg'),
      value: sizeMobile,
      onChange: function onChange(value) {
        setAttributes({
          sizeMobile: value
        });
      },
      min: 0,
      max: 100,
      beforeIcon: "editor-textcolor",
      allowReset: true,
      initialPosition: 16
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_6__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: lineHeightType === 'px',
      "aria-pressed": lineHeightType === 'px',
      onClick: function onClick() {
        return setAttributes({
          lineHeightType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: lineHeightType === '%',
      "aria-pressed": lineHeightType === '%',
      onClick: function onClick() {
        return setAttributes({
          lineHeightType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Line Height', 'ultimate-addons-for-gutenberg'),
      value: lineHeight,
      onChange: function onChange(value) {
        setAttributes({
          lineHeight: value
        });
      },
      min: 0,
      max: 100,
      step: 0.1,
      beforeIcon: "editor-textcolor",
      allowReset: true,
      initialPosition: 16
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: lineHeightType === 'px',
      "aria-pressed": lineHeightType === 'px',
      onClick: function onClick() {
        return setAttributes({
          lineHeightType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: lineHeightType === '%',
      "aria-pressed": lineHeightType === '%',
      onClick: function onClick() {
        return setAttributes({
          lineHeightType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Line Height', 'ultimate-addons-for-gutenberg'),
      value: lineHeightTablet,
      onChange: function onChange(value) {
        setAttributes({
          lineHeightTablet: value
        });
      },
      min: 0,
      max: 100,
      beforeIcon: "editor-textcolor",
      allowReset: true,
      step: 0.1,
      initialPosition: 16
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ButtonGroup"], {
      className: "uagb-size-type-field",
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: 'px',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: lineHeightType === 'px',
      "aria-pressed": lineHeightType === 'px',
      onClick: function onClick() {
        return setAttributes({
          lineHeightType: 'px'
        });
      }
    }, 'px'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      key: '%',
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: lineHeightType === '%',
      "aria-pressed": lineHeightType === '%',
      onClick: function onClick() {
        return setAttributes({
          lineHeightType: '%'
        });
      }
    }, '%')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Line Height', 'ultimate-addons-for-gutenberg'),
      value: lineHeightMobile,
      onChange: function onChange(value) {
        setAttributes({
          lineHeightMobile: value
        });
      },
      min: 0,
      max: 100,
      beforeIcon: "editor-textcolor",
      allowReset: true,
      initialPosition: 16
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    })));
  };

  var blockControls = function blockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToolbarGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["ToolbarButton"], {
      icon: "admin-links",
      name: "link",
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Link'),
      onClick: onClickLinkSettings
    })));
  };

  var linkControls = function linkControls() {
    if (!state.isURLPickerOpen) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Popover"], {
      position: "bottom center",
      onClose: function onClose() {
        return setStateValue({
          isURLPickerOpen: false
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["__experimentalLinkControl"], {
      value: {
        url: link,
        opensInNewTab: opensInNewTab
      },
      onChange: function onChange(_ref) {
        var _ref$url = _ref.url,
            newURL = _ref$url === void 0 ? '' : _ref$url,
            newOpensInNewTab = _ref.opensInNewTab;
        setAttributes({
          link: newURL
        });
        setAttributes({
          opensInNewTab: newOpensInNewTab
        });
        onChangeOpensInNewTab(newOpensInNewTab);
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }, blockControls(), linkControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, buttonSettings()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map