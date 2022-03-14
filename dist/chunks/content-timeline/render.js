(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/content-timeline/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/timeline/content-timeline/editor.lazy.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/timeline/content-timeline/editor.lazy.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*\n  Content Timeline.\n*/\n.block-editor-inner-blocks .block-editor-block-list__layout .block-editor-block-list__block {\n  padding: 0;\n  margin: 0;\n  max-width: unset; }\n\n.edit-post-visual-editor .block-editor-block-list__block[data-type=\"uagb/content-timeline\"] {\n  padding: 15px; }\n  .edit-post-visual-editor .block-editor-block-list__block[data-type=\"uagb/content-timeline\"] .components-button svg {\n    fill: #fff;\n    width: 24px; }\n\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__outer-wrap.uagb-timeline__left-block .uagb-timeline__line {\n  right: auto;\n  left: 34px; }\n\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__outer-wrap.uagb-timeline__right-block .uagb-timeline__line {\n  right: 31px;\n  left: auto; }\n", "",{"version":3,"sources":["webpack://./src/blocks/timeline/content-timeline/editor.lazy.scss"],"names":[],"mappings":"AAAA;;CAEC;AACD;EACE,UAAU;EACV,SAAS;EACT,gBAAgB,EAAE;;AAEpB;EACE,aAAa,EAAE;EACf;IACE,UAAU;IACV,WAAW,EAAE;;AAEjB;EACE,WAAW;EACX,UAAU,EAAE;;AAEd;EACE,WAAW;EACX,UAAU,EAAE","sourcesContent":["/*\n  Content Timeline.\n*/\n.block-editor-inner-blocks .block-editor-block-list__layout .block-editor-block-list__block {\n  padding: 0;\n  margin: 0;\n  max-width: unset; }\n\n.edit-post-visual-editor .block-editor-block-list__block[data-type=\"uagb/content-timeline\"] {\n  padding: 15px; }\n  .edit-post-visual-editor .block-editor-block-list__block[data-type=\"uagb/content-timeline\"] .components-button svg {\n    fill: #fff;\n    width: 24px; }\n\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__outer-wrap.uagb-timeline__left-block .uagb-timeline__line {\n  right: auto;\n  left: 34px; }\n\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__outer-wrap.uagb-timeline__right-block .uagb-timeline__line {\n  right: 31px;\n  left: auto; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/timeline/content-timeline/editor.lazy.scss":
/*!***************************************************************!*\
  !*** ./src/blocks/timeline/content-timeline/editor.lazy.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/timeline/content-timeline/editor.lazy.scss");

            

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

/***/ "./src/blocks/timeline/content-timeline/render.js":
/*!********************************************************!*\
  !*** ./src/blocks/timeline/content-timeline/render.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././classes */ "./src/blocks/timeline/classes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/timeline/content-timeline/editor.lazy.scss");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");






const ALLOWED_BLOCKS = ['uagb/content-timeline-child'];

const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_5__["useDeviceType"])(); // Setup the attributes.

  const {
    className,
    attributes: {
      tm_content,
      timelineItem
    }
  } = props;
  const getContentTimelineTemplate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    const childTimeline = [];

    for (let i = 0; i < timelineItem; i++) {
      childTimeline.push(['uagb/content-timeline-child', tm_content[i]]);
    }

    return childTimeline;
  }, [timelineItem, tm_content]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-timeline__outer-wrap', `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${props.clientId}`, 'uagb-timeline__content-wrap', ...Object(_classes__WEBPACK_IMPORTED_MODULE_1__["default"])(props.attributes))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
    template: getContentTimelineTemplate,
    templateLock: false,
    allowedBlocks: ALLOWED_BLOCKS
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-timeline__line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-timeline__line__inner"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map