(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/star-rating/settings"],{

/***/ "./src/blocks/star-rating/settings.js":
/*!********************************************!*\
  !*** ./src/blocks/star-rating/settings.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Import all of our Text Options requirements.
 // Import Web font loader for google fonts.














const Settings = props => {
  props = props.parentProps; // Setup the attributes

  const {
    attributes,
    setAttributes,
    attributes: {
      rating,
      range,
      layout,
      align,
      size,
      gap,
      unmarkedColor,
      color,
      title,
      loadGoogleFonts,
      fontFamily,
      fontWeight,
      fontSizeType,
      fontSize,
      fontSizeMobile,
      fontSizeTablet,
      lineHeightType,
      lineHeight,
      lineHeightMobile,
      lineHeightTablet,
      titleColor,
      titleGap,
      fontStyle,
      fontTransform,
      fontDecoration
    }
  } = props;
  let loadTitleGoogleFonts;

  if (loadGoogleFonts === true) {
    const hconfig = {
      google: {
        families: [fontFamily + (fontWeight ? ':' + fontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: hconfig
    });
  }

  let alignmentOptions = [{
    value: 'left',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-left')
    })
  }, {
    value: 'center',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-center')
    })
  }, {
    value: 'right',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-right')
    })
  }, {
    value: 'full',
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-justify')
    })
  }];

  if ('stack' === layout) {
    alignmentOptions = [{
      value: 'left',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-left')
      })
    }, {
      value: 'center',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-center')
      })
    }, {
      value: 'right',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_10__["default"])('fa fa-align-right')
      })
    }];

    if ('full' === align) {
      setAttributes({
        align: 'left'
      });
    }
  }

  const generalSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('General', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Range', 'ultimate-addons-for-gutenberg'),
    data: {
      value: range,
      label: 'range'
    },
    options: [{
      value: '5',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('1-5', 'ultimate-addons-for-gutenberg')
    }, {
      value: '10',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('1-10', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rating', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: rating,
    onChange: value => setAttributes({
      rating: value
    }),
    min: 0,
    max: range,
    step: 0.1,
    displayUnit: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
    data: {
      value: layout,
      label: 'layout'
    },
    options: [{
      value: 'inline',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inline', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'stack',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Stack', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
    data: {
      value: align,
      label: 'align'
    },
    options: alignmentOptions,
    showIcons: true
  }));
  const titleStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    colorValue: titleColor,
    onColorChange: value => setAttributes({
      titleColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: loadGoogleFonts,
      label: 'loadGoogleFonts'
    },
    fontFamily: {
      value: fontFamily,
      label: 'fontFamily'
    },
    fontWeight: {
      value: fontWeight,
      label: 'fontWeight'
    },
    fontStyle: {
      value: fontStyle,
      label: 'fontStyle'
    },
    transform: {
      value: fontTransform,
      label: 'fontTransform'
    },
    decoration: {
      value: fontDecoration,
      label: 'fontDecoration'
    },
    fontSizeType: {
      value: fontSizeType,
      label: 'fontSizeType'
    },
    fontSize: {
      value: fontSize,
      label: 'fontSize'
    },
    fontSizeMobile: {
      value: fontSizeMobile,
      label: 'fontSizeMobile'
    },
    fontSizeTablet: {
      value: fontSizeTablet,
      label: 'fontSizeTablet'
    },
    lineHeightType: {
      value: lineHeightType,
      label: 'lineHeightType'
    },
    lineHeight: {
      value: lineHeight,
      label: 'lineHeight'
    },
    lineHeightMobile: {
      value: lineHeightMobile,
      label: 'lineHeightMobile'
    },
    lineHeightTablet: {
      value: lineHeightTablet,
      label: 'lineHeightTablet'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Gap', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: titleGap,
    onChange: value => setAttributes({
      titleGap: value
    }),
    min: 0,
    max: 50,
    displayUnit: false
  }));
  const starStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Star', 'ultimate-addons-for-gutenberg'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    colorValue: color,
    onColorChange: value => setAttributes({
      color: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Unmarked Color', 'ultimate-addons-for-gutenberg'),
    colorValue: unmarkedColor,
    onColorChange: value => setAttributes({
      unmarkedColor: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: size,
    onChange: value => setAttributes({
      size: value
    }),
    min: 0,
    max: 100,
    displayUnit: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Gap', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: gap,
    onChange: value => setAttributes({
      gap: value
    }),
    min: 0,
    max: 50,
    displayUnit: false
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    tabs: ['general', 'style', 'advance']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_6__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_6__["UAGTabs"].general, generalSettings), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_6__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_6__["UAGTabs"].style, starStyling, '' !== title && titleStyling), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_6__["UAGTabs"].advance, {
    parentProps: props
  })))), loadTitleGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/typography/fontloader.js":
/*!*************************************************!*\
  !*** ./src/components/typography/fontloader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
var _PropTypes$object, _PropTypes$func;

if (googlefonts === undefined) {
  var googlefonts = []; // eslint-disable-line no-var
}




const statuses = {
  inactive: 'inactive',
  active: 'active',
  loading: 'loading'
};

const noop = () => {};

const WebfontLoader = props => {
  const [value, setValue] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const status = undefined;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    loadFonts();
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const {
      onStatus,
      config
    } = props;

    if (status !== value.status) {
      onStatus(value.status);
    }

    if (config !== value.config) {
      loadFonts();
    }
  }, [props]);

  const handleLoading = () => {
    setValue({
      status: statuses.loading
    });
  };

  const addFont = font => {
    if (!googlefonts.includes(font)) {
      googlefonts.push(font);
    }
  };

  const handleActive = () => {
    setValue({
      status: statuses.active
    });
  };

  const handleInactive = () => {
    setValue({
      status: statuses.inactive
    });
  };

  const loadFonts = () => {
    if (!googlefonts.includes(props.config.google.families[0])) {
      webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({ ...props.config,
        loading: handleLoading,
        active: handleActive,
        inactive: handleInactive
      });
      addFont(props.config.google.families[0]);
    }
  };

  const {
    children
  } = props;
  return children || null;
};

WebfontLoader.propTypes = {
  config: (_PropTypes$object = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object) === null || _PropTypes$object === void 0 ? void 0 : _PropTypes$object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  onStatus: (_PropTypes$func = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func) === null || _PropTypes$func === void 0 ? void 0 : _PropTypes$func.isRequired
};
WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ })

}]);
//# sourceMappingURL=settings.js.map