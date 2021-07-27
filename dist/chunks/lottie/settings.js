(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/lottie/settings"],{

/***/ "./src/blocks/lottie/settings.js":
/*!***************************************!*\
  !*** ./src/blocks/lottie/settings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





var Settings = function Settings(props) {
  var _props = props,
      loopLottie = _props.loopLottie,
      reverseDirection = _props.reverseDirection;
  props = props.parentProps;
  var _props2 = props,
      setAttributes = _props2.setAttributes,
      attributes = _props2.attributes;
  var align = attributes.align,
      height = attributes.height,
      heightTablet = attributes.heightTablet,
      heightMob = attributes.heightMob,
      width = attributes.width,
      widthTablet = attributes.widthTablet,
      widthMob = attributes.widthMob,
      backgroundColor = attributes.backgroundColor,
      loop = attributes.loop,
      speed = attributes.speed,
      reverse = attributes.reverse,
      jsonLottie = attributes.jsonLottie,
      lottieURl = attributes.lottieURl,
      playOn = attributes.playOn,
      backgroundHColor = attributes.backgroundHColor;
  var controlsSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Controls', 'ultimate-addons-for-gutenberg'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Play On', 'ultimate-addons-for-gutenberg'),
    value: playOn,
    onChange: function onChange(value) {
      return setAttributes({
        playOn: value
      });
    },
    options: [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'hover',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('On Hover', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'click',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('On Click', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'scroll',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Viewport', 'ultimate-addons-for-gutenberg')
    }],
    help: 'scroll' === playOn ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("This setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg') : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Loop', 'ultimate-addons-for-gutenberg'),
    checked: loop,
    onChange: loopLottie,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Speed', 'ultimate-addons-for-gutenberg'),
    value: speed,
    onChange: function onChange(value) {
      return setAttributes({
        speed: value
      });
    },
    min: 1,
    max: 50,
    allowReset: true
  }), loop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reverse', 'ultimate-addons-for-gutenberg'),
    checked: reverse,
    onChange: reverseDirection,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Direction of animation.', 'ultimate-addons-for-gutenberg')
  }));
  var styleSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "uagb-size-type-field-tabs uagb-without-size-type",
    activeClass: "active-tab",
    tabs: [{
      name: 'desktop',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "desktop"
      }),
      className: 'uagb-desktop-tab uagb-responsive-tabs'
    }, {
      name: 'tablet',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "tablet"
      }),
      className: 'uagb-tablet-tab uagb-responsive-tabs'
    }, {
      name: 'mobile',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "smartphone"
      }),
      className: 'uagb-mobile-tab uagb-responsive-tabs'
    }]
  }, function (tab) {
    var tabout;

    if ('mobile' === tab.name) {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
        value: widthMob,
        onChange: function onChange(value) {
          return setAttributes({
            widthMob: value
          });
        },
        min: 0,
        max: 1000,
        allowReset: true
      });
    } else if ('tablet' === tab.name) {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
        value: widthTablet,
        onChange: function onChange(value) {
          return setAttributes({
            widthTablet: value
          });
        },
        min: 0,
        max: 1000,
        allowReset: true
      });
    } else {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
        value: width,
        onChange: function onChange(value) {
          return setAttributes({
            width: value
          });
        },
        min: 0,
        max: 1000,
        allowReset: true
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, tabout);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "uagb-size-type-field-tabs uagb-without-size-type",
    activeClass: "active-tab",
    tabs: [{
      name: 'desktop',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "desktop"
      }),
      className: 'uagb-desktop-tab uagb-responsive-tabs'
    }, {
      name: 'tablet',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "tablet"
      }),
      className: 'uagb-tablet-tab uagb-responsive-tabs'
    }, {
      name: 'mobile',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: "smartphone"
      }),
      className: 'uagb-mobile-tab uagb-responsive-tabs'
    }]
  }, function (tab) {
    var tabout;

    if ('mobile' === tab.name) {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
        value: heightMob,
        onChange: function onChange(value) {
          return setAttributes({
            heightMob: value
          });
        },
        min: 0,
        max: 1000,
        allowReset: true
      });
    } else if ('tablet' === tab.name) {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
        value: heightTablet,
        onChange: function onChange(value) {
          return setAttributes({
            heightTablet: value
          });
        },
        min: 0,
        max: 1000,
        allowReset: true
      });
    } else {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
        value: height,
        onChange: function onChange(value) {
          return setAttributes({
            height: value
          });
        },
        min: 0,
        max: 1000,
        allowReset: true
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, tabout);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockAlignmentToolbar"], {
    value: align,
    onChange: function onChange(value) {
      return setAttributes({
        align: value
      });
    },
    controls: ['left', 'center', 'right'],
    isCollapsed: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: backgroundColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
    value: backgroundColor,
    onChange: function onChange(value) {
      return setAttributes({
        backgroundColor: value
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: backgroundHColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"], {
    value: backgroundHColor,
    onChange: function onChange(value) {
      return setAttributes({
        backgroundHColor: value
      });
    },
    allowReset: true
  }));

  var onSelectLottieJSON = function onSelectLottieJSON(media) {
    if (!media || !media.url) {
      setAttributes({
        jsonLottie: null
      });
      return;
    }

    setAttributes({
      jsonLottie: media
    });
    setAttributes({
      lottieURl: media.url
    });
  }; //Check if given url is valid or not for json extension.


  var validJsonPath = 'invalid';

  if (lottieURl && lottieURl.endsWith('.json')) {
    validJsonPath = 'valid';
  }

  if (!uagb_blocks_info.uagb_mime_type) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "uagb-show-notice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "".concat(uagb_blocks_info.uagb_site_url, "/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin"),
      target: "__blank"
    }, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('this document'), ' '), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('to know more about it.')));
  }

  if (validJsonPath === 'invalid') {
    var lottie_url = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://lottiefiles.com/",
      target: "__blank"
    }, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('here on this'), ' '), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('website.'));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "uagb-lottie_upload_wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaPlaceholder"], {
      labels: {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Lottie', 'ultimate-addons-for-gutenberg'),
        instructions: lottie_url
      },
      allowedTypes: ['application/json'],
      accept: ['application/json'],
      value: jsonLottie,
      onSelectURL: function onSelectURL(value) {
        return setAttributes({
          lottieURl: value
        });
      },
      onSelect: onSelectLottieJSON
    }));
  }

  var getBlockControls = function getBlockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToolbarGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaReplaceFlow"], {
      mediaURL: lottieURl,
      allowedTypes: ['application/json'],
      accept: ['application/json'],
      onSelectURL: function onSelectURL(value) {
        return setAttributes({
          lottieURl: value
        });
      },
      onSelect: onSelectLottieJSON
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, validJsonPath === 'valid' && getBlockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, controlsSettings, styleSettings));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map