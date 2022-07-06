(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/column/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/column/editor.lazy.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/column/editor.lazy.scss ***!
  \***************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.wp-block[data-type=\"uagb/column\"]::before {\n  content: \"\";\n  position: absolute;\n  border: 1px dashed #a3aeb6;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  width: 100%;\n  height: 100%; }\n\n.is-selected.wp-block[data-type=\"uagb/column\"]::before {\n  border-color: #59646c; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.wp-block[data-type=\"uagb/column\"] .block-editor-block-list__block-edit {\n  height: 100%; }\n\n.uagb-column__inner-wrap .block-editor-block-list__block {\n  margin-left: 0;\n  margin-right: 0; }\n\n.wp-block-uagb-column.uagb-column__wrap .uagb-column__inner-wrap,\n.wp-block-uagb-column.uagb-column__wrap .block-editor-inner-blocks {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2; }\n\n.edit-post-visual-editor .uagb-column__inner-wrap .block-editor-block-list__block > .editor-block-mover {\n  left: -30px; }\n\n@media (max-width: 449px) {\n  .block-editor-page #wpwrap .uagb-columns__inner-wrap .block-editor-block-list__block {\n    background-attachment: scroll !important; } }\n", "",{"version":3,"sources":["webpack://./src/blocks/column/editor.lazy.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,WAAW;EACX,kBAAkB;EAClB,0BAA0B;EAC1B,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,UAAU;EACV,WAAW;EACX,YAAY,EAAE;;AAEhB;EACE,qBAAqB,EAAE;;AAEzB;;EAEE,sBAAsB,EAAE;;AAE1B;;EAEE,iBAAiB,EAAE;;AAErB;EACE,YAAY,EAAE;;AAEhB;EACE,cAAc;EACd,eAAe,EAAE;;AAEnB;;EAEE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,UAAU,EAAE;;AAEd;EACE,WAAW,EAAE;;AAEf;EACE;IACE,wCAAwC,EAAE,EAAE","sourcesContent":["/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.wp-block[data-type=\"uagb/column\"]::before {\n  content: \"\";\n  position: absolute;\n  border: 1px dashed #a3aeb6;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  width: 100%;\n  height: 100%; }\n\n.is-selected.wp-block[data-type=\"uagb/column\"]::before {\n  border-color: #59646c; }\n\n.editor-bg-image-control .components-button,\n.editor-bg-video-control .components-button {\n  vertical-align: middle; }\n\n.editor-bg-image-control .components-button:last-child,\n.editor-bg-video-control .components-button:last-child {\n  margin-left: 10px; }\n\n.wp-block[data-type=\"uagb/column\"] .block-editor-block-list__block-edit {\n  height: 100%; }\n\n.uagb-column__inner-wrap .block-editor-block-list__block {\n  margin-left: 0;\n  margin-right: 0; }\n\n.wp-block-uagb-column.uagb-column__wrap .uagb-column__inner-wrap,\n.wp-block-uagb-column.uagb-column__wrap .block-editor-inner-blocks {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  z-index: 2; }\n\n.edit-post-visual-editor .uagb-column__inner-wrap .block-editor-block-list__block > .editor-block-mover {\n  left: -30px; }\n\n@media (max-width: 449px) {\n  .block-editor-page #wpwrap .uagb-columns__inner-wrap .block-editor-block-list__block {\n    background-attachment: scroll !important; } }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/column/editor.lazy.scss":
/*!********************************************!*\
  !*** ./src/blocks/column/editor.lazy.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/column/editor.lazy.scss");

            

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

/***/ "./src/blocks/column/render.js":
/*!*************************************!*\
  !*** ./src/blocks/column/render.js ***!
  \*************************************/
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
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/column/editor.lazy.scss");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");
/**
 * BLOCK: Column - Editor Render.
 */






const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].unuse();
    };
  }, []);
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_4__["useDeviceType"])();
  const {
    attributes: {
      align,
      backgroundType,
      alignMobile,
      alignTablet
    },
    isSelected,
    className
  } = props.parentProps;
  const active = isSelected ? 'active' : 'not-active';
  const alignClass = 'center' === align ? '' : `uagb-column__align-${align}`;
  const alignClassMobile = '' === alignMobile ? '' : `uagb-column__align-mobile-${alignMobile}`;
  const alignClassTablet = '' === alignTablet ? '' : `uagb-column__align-tablet-${alignTablet}`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-column__wrap', `uagb-column__background-${backgroundType}`, `uagb-column__edit-${active}`, alignClass, alignClassMobile, alignClassTablet, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${props.parentProps.clientId.substr(0, 8)}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-column__overlay"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    templateLock: false
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map