(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/icon-list/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/icon-list/editor.lazy.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/icon-list/editor.lazy.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**\r\n * Editor styles for the admin\r\n */\n#wpwrap .edit-post-visual-editor a.uagb-icon-list__link {\n  color: #3a3a3a; }\n\n#wpwrap .uagb-icon-list__outer-wrap .uagb-icon-list__label-wrap {\n  cursor: text; }\n\n[data-type=\"uagb/icon-list\"] .uagb-icon-list__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex; }\n\n[data-type=\"uagb/icon-list\"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0; }\n", "",{"version":3,"sources":["webpack://./src/blocks/icon-list/editor.lazy.scss"],"names":[],"mappings":"AAAA;;EAEE;AACF;EACE,cAAc,EAAE;;AAElB;EACE,YAAY,EAAE;;AAEhB;EACE,aAAa,EAAE;;AAEjB;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,eAAe,EAAE","sourcesContent":["/**\r\n * Editor styles for the admin\r\n */\n#wpwrap .edit-post-visual-editor a.uagb-icon-list__link {\n  color: #3a3a3a; }\n\n#wpwrap .uagb-icon-list__outer-wrap .uagb-icon-list__label-wrap {\n  cursor: text; }\n\n[data-type=\"uagb/icon-list\"] .uagb-icon-list__layout-horizontal .block-editor-inner-blocks > .block-editor-block-list__layout {\n  display: flex; }\n\n[data-type=\"uagb/icon-list\"] .block-editor-inner-blocks > .block-editor-block-list__layout > .wp-block {\n  width: auto;\n  padding-left: 0;\n  padding-right: 0;\n  margin-left: 0;\n  margin-right: 0; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/icon-list/editor.lazy.scss":
/*!***********************************************!*\
  !*** ./src/blocks/icon-list/editor.lazy.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/icon-list/editor.lazy.scss");

            

var refs = 0;
var update;
var options = {"injectType":"lazySingletonStyleTag","attributes":{"id":"uagb-editor-styles"}};

options.insert = "head";
options.singleton = true;

var exported = {};

exported.locals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
exported.use = function() {
  if (!(refs++)) {
    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  return exported;
};
exported.unuse = function() {
  if (refs > 0 && !--refs) {
    update();
    update = null;
  }
};



;
       /* harmony default export */ __webpack_exports__["default"] = (exported);


/***/ }),

/***/ "./src/blocks/icon-list/render.js":
/*!****************************************!*\
  !*** ./src/blocks/icon-list/render.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/icon-list/editor.lazy.scss");
// Import classes




var ALLOWED_BLOCKS = ['uagb/icon-list-child'];

var Render = function Render(props) {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(function () {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].use();
    return function () {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      deviceType = _props.deviceType;
  var className = attributes.className,
      icon_count = attributes.icon_count,
      icon_layout = attributes.icon_layout,
      iconPosition = attributes.iconPosition,
      hideLabel = attributes.hideLabel,
      block_id = attributes.block_id;
  var labelClass = hideLabel ? 'uagb-icon-list__no-label' : '';
  var getIconTemplate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var childIconList = [];

    for (var i = 0; i < icon_count; i++) {
      childIconList.push(['uagb/icon-list-child', {
        id: i + 1
      }]);
    }

    return childIconList;
  }, [icon_count]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-icon-list__outer-wrap', "uagb-icon-list__layout-".concat(icon_layout), iconPosition == 'top' ? 'uagb-icon-list__icon-at-top' : '', labelClass, "uagb-editor-preview-mode-".concat(deviceType.toLowerCase()), "uagb-block-".concat(block_id))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-icon-list__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    template: getIconTemplate,
    templateLock: false,
    allowedBlocks: ALLOWED_BLOCKS,
    orientation: icon_layout
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map