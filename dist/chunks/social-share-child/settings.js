(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/social-share-child/settings"],{

/***/ "./src/blocks/social-share-child/settings.js":
/*!***************************************************!*\
  !*** ./src/blocks/social-share-child/settings.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/**
 * BLOCK: Social Share - Settings.
 */
// Import classes







var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes;
  var type = attributes.type,
      image_icon = attributes.image_icon,
      icon = attributes.icon,
      image = attributes.image,
      icon_color = attributes.icon_color,
      icon_hover_color = attributes.icon_hover_color,
      icon_bg_color = attributes.icon_bg_color,
      icon_bg_hover_color = attributes.icon_bg_hover_color;

  var onChangeType = function onChangeType(value) {
    var icon_mapping = {
      facebook: 'fab fa-facebook',
      twitter: 'fab fa-twitter-square',
      google: 'fab fa-google-plus-square',
      pinterest: 'fab fa-pinterest-square',
      linkedin: 'fab fa-linkedin',
      digg: 'fab fa-digg',
      blogger: 'fab fa-blogger',
      reddit: 'fab fa-reddit-square',
      stumbleupon: 'fab fa-stumbleupon-circle',
      tumblr: 'fab fa-tumblr-square',
      myspace: 'fas fa-user-friends',
      email: 'fas fa-envelope',
      pocket: 'fab fa-get-pocket',
      vk: 'fab fa-vk',
      odnoklassniki: 'fab fa-odnoklassniki',
      skype: 'fab fa-skype',
      telegram: 'fab fa-telegram',
      whatsapp: 'fab fa-whatsapp',
      xing: 'fab fa-xing',
      buffer: 'fab fa-buffer'
    };
    setAttributes({
      type: value
    });
    setAttributes({
      icon: icon_mapping[value]
    });
  };

  var generalSettings = function generalSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Type'),
      value: type,
      options: [{
        value: 'facebook',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Facebook', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'twitter',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Twitter', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'google',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Google Currents', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'pinterest',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Pinterest', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'linkedin',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('LinkedIn', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'digg',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Digg', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'blogger',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Blogger', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'reddit',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Reddit', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'stumbleupon',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('StumbleUpon', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tumblr',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Tumblr', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'myspace',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Myspace', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'email',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Email', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'pocket',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Pocket', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vk',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('VK', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'odnoklassniki',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Odnoklassniki', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'skype',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Skype', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'telegram',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Telegram', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'whatsapp',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('WhatsApp', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'xing',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Xing', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'buffer',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Buffer', 'ultimate-addons-for-gutenberg')
      }],
      onChange: onChangeType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image / Icon', 'ultimate-addons-for-gutenberg'),
      value: image_icon,
      options: [{
        value: 'icon',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'image',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(value) {
        return setAttributes({
          image_icon: value
        });
      }
    }), 'icon' == image_icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
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
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
    })), 'image' == image_icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Image', 'ultimate-addons-for-gutenberg'),
      onSelect: function onSelect(value) {
        return setAttributes({
          image: value
        });
      },
      allowedTypes: ['image'],
      value: image,
      render: function render(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          isSecondary: true,
          onClick: open
        }, !image ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Image', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Replace image', 'ultimate-addons-for-gutenberg'));
      }
    }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: "uagb-rm-btn",
      onClick: function onClick() {
        return setAttributes({
          image: null
        });
      },
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Remove Image', 'ultimate-addons-for-gutenberg'))));
  };

  var iconColorSettings = function iconColorSettings() {
    var colorControl = '';
    var colorControlHover = '';

    if ('image' == image_icon) {
      colorControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: icon_bg_color
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
        value: icon_bg_color,
        onChange: function onChange(value) {
          return setAttributes({
            icon_bg_color: value
          });
        },
        allowReset: true
      }));
      colorControlHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: icon_bg_hover_color
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
        value: icon_bg_hover_color,
        onChange: function onChange(value) {
          return setAttributes({
            icon_bg_hover_color: value
          });
        },
        allowReset: true
      }));
    } else {
      colorControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Color'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: icon_color
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
        value: icon_color,
        onChange: function onChange(value) {
          return setAttributes({
            icon_color: value
          });
        },
        allowReset: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: icon_bg_color
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
        value: icon_bg_color,
        onChange: function onChange(value) {
          return setAttributes({
            icon_bg_color: value
          });
        },
        allowReset: true
      }));
      colorControlHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: icon_hover_color
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
        value: icon_hover_color,
        onChange: function onChange(value) {
          return setAttributes({
            icon_hover_color: value
          });
        },
        allowReset: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
        className: "uagb-setting-label"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "components-base-control__label"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "component-color-indicator",
        style: {
          backgroundColor: icon_bg_hover_color
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["ColorPalette"], {
        value: icon_bg_hover_color,
        onChange: function onChange(value) {
          return setAttributes({
            icon_bg_hover_color: value
          });
        },
        allowReset: true
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Color', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["TabPanel"], {
      className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
      activeClass: "active-tab",
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-normal-tab'
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Hover', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-hover-tab'
      }]
    }, function (tabName) {
      var color_tab;

      if ('normal' === tabName.name) {
        color_tab = colorControl;
      } else {
        color_tab = colorControlHover;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, color_tab);
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, generalSettings(), iconColorSettings());
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map