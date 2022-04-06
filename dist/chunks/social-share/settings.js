(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/social-share/settings"],{

/***/ "./src/blocks/social-share/presets.js":
/*!********************************************!*\
  !*** ./src/blocks/social-share/presets.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/social-share/attributes.js");
/* harmony import */ var _social_share_child_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../social-share-child/attributes */ "./src/blocks/social-share-child/attributes.js");




const presets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  defaultChildAttributes: _social_share_child_attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'gap',
    value: 15
  }, {
    label: 'bgSize',
    value: 15
  }, {
    label: 'size',
    value: 15
  }, {
    label: 'borderRadius',
    value: 0
  }, {
    label: 'border',
    value: 0
  }],
  childAttributes: [{
    label: 'icon_color',
    value: '#fff'
  }, {
    label: 'icon_bg_color',
    value: '#0170B9'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 28H22V44H6V28Z" /><path d="M28 28H44V44H28V28Z" /><path d="M50 28H66V44H50V28Z" /></svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'gap',
    value: 15
  }, {
    label: 'bgSize',
    value: 15
  }, {
    label: 'size',
    value: 15
  }, {
    label: 'borderRadius',
    value: 5
  }],
  childAttributes: [{
    label: 'icon_color',
    value: '#fff'
  }, {
    label: 'icon_bg_color',
    value: '#0170B9'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 32C6 29.7909 7.79086 28 10 28H18C20.2091 28 22 29.7909 22 32V40C22 42.2091 20.2091 44 18 44H10C7.79086 44 6 42.2091 6 40V32Z" /><path d="M28 32C28 29.7909 29.7909 28 32 28H40C42.2091 28 44 29.7909 44 32V40C44 42.2091 42.2091 44 40 44H32C29.7909 44 28 42.2091 28 40V32Z" /><path d="M50 32C50 29.7909 51.7909 28 54 28H62C64.2091 28 66 29.7909 66 32V40C66 42.2091 64.2091 44 62 44H54C51.7909 44 50 42.2091 50 40V32Z" /></svg>'
}, {
  value: 'preset-3',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 3', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'gap',
    value: 15
  }, {
    label: 'bgSize',
    value: 15
  }, {
    label: 'size',
    value: 15
  }, {
    label: 'borderRadius',
    value: 100
  }],
  childAttributes: [{
    label: 'icon_color',
    value: '#fff'
  }, {
    label: 'icon_bg_color',
    value: '#0170B9'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 36C6 31.5817 9.58172 28 14 28C18.4183 28 22 31.5817 22 36C22 40.4183 18.4183 44 14 44C9.58172 44 6 40.4183 6 36Z" /><path d="M28 36C28 31.5817 31.5817 28 36 28C40.4183 28 44 31.5817 44 36C44 40.4183 40.4183 44 36 44C31.5817 44 28 40.4183 28 36Z" /><path d="M50 36C50 31.5817 53.5817 28 58 28C62.4183 28 66 31.5817 66 36C66 40.4183 62.4183 44 58 44C53.5817 44 50 40.4183 50 36Z" /></svg>'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(`uag_social_share_presets`, presets));

/***/ }),

/***/ "./src/blocks/social-share/settings.js":
/*!*********************************************!*\
  !*** ./src/blocks/social-share/settings.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./presets */ "./src/blocks/social-share/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * BLOCK: Social Share - Settings.
 */















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    align,
    gap,
    stack,
    social_layout,
    borderRadius,
    size,
    sizeType,
    sizeMobile,
    sizeTablet,
    bgSize
  } = attributes;

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["BlockAlignmentToolbar"], {
      value: align,
      onChange: value => {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right']
    }));
  };

  const generalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__["default"], {
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      data: {
        value: social_layout,
        label: 'social_layout'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'horizontal',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Horizontal', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'vertical',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Vertical', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: align,
        label: 'align'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_8__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_8__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_8__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), 'horizontal' === social_layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Stack On', 'ultimate-addons-for-gutenberg'),
      data: {
        value: stack,
        label: 'stack'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('None', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'desktop',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Desktop', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Desktop', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Tablet', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Mobile', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Note: Choose on what breakpoint the Icons will stack.', 'ultimate-addons-for-gutenberg')
    })));
  };

  const spacingSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Common', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: size,
          label: 'size'
        },
        tablet: {
          value: sizeTablet,
          label: 'sizeTablet'
        },
        mobile: {
          value: sizeMobile,
          label: 'sizeMobile'
        }
      },
      min: 0,
      max: 100,
      unit: {
        value: sizeType,
        label: 'sizeType'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Background Size', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: bgSize,
      onChange: value => setAttributes({
        bgSize: value
      }),
      min: 0,
      max: 100,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Note: Background Size option is useful when one adds background color to the icons.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: borderRadius,
      onChange: value => setAttributes({
        borderRadius: value
      }),
      min: 0,
      max: 100,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Note: Border Radius option is useful when one adds background color to the icons.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Gap between Items', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: gap,
      onChange: value => setAttributes({
        gap: value
      }),
      min: 0,
      max: 100,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Note: The gap between the items will seen larger in the editor, for better user edit experience. But at frontend the gap will be exactly what is set from here.', 'ultimate-addons-for-gutenberg')
    }));
  };

  const presetSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Presets', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_13__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_12__["default"],
      presetInputType: "radioImage"
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_0__["default"])()
  }, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].general, presetSettings(), generalSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].style, spacingSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_5__["UAGTabs"].advance, {
    parentProps: props
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map