(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/marketing-button/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/marketing-button/editor.lazy.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/marketing-button/editor.lazy.scss ***!
  \*************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/**\n * Editor styles for the admin\n */\np.uagb-marketing-btn__prefix.block-editor-rich-text__editable {\n  margin-bottom: 0 !important; }\n\n#wpwrap .edit-post-visual-editor a.uagb-marketing-btn__link {\n  pointer-events: all; }\n\n.uagb-marketing-btn__align-text-center .uagb-marketing-btn__link {\n  text-align: center; }\n\n.uagb-marketing-btn__align-text-left .uagb-marketing-btn__link {\n  text-align: left; }\n\n.uagb-marketing-btn__align-text-right .uagb-marketing-btn__link {\n  text-align: right; }\n", "",{"version":3,"sources":["webpack://./src/blocks/marketing-button/editor.lazy.scss"],"names":[],"mappings":"AAAA;;EAEE;AACF;EACE,2BAA2B,EAAE;;AAE/B;EACE,mBAAmB,EAAE;;AAEvB;EACE,kBAAkB,EAAE;;AAEtB;EACE,gBAAgB,EAAE;;AAEpB;EACE,iBAAiB,EAAE","sourcesContent":["/**\n * Editor styles for the admin\n */\np.uagb-marketing-btn__prefix.block-editor-rich-text__editable {\n  margin-bottom: 0 !important; }\n\n#wpwrap .edit-post-visual-editor a.uagb-marketing-btn__link {\n  pointer-events: all; }\n\n.uagb-marketing-btn__align-text-center .uagb-marketing-btn__link {\n  text-align: center; }\n\n.uagb-marketing-btn__align-text-left .uagb-marketing-btn__link {\n  text-align: left; }\n\n.uagb-marketing-btn__align-text-right .uagb-marketing-btn__link {\n  text-align: right; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/marketing-button/editor.lazy.scss":
/*!******************************************************!*\
  !*** ./src/blocks/marketing-button/editor.lazy.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/marketing-button/editor.lazy.scss");

            

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

/***/ "./src/blocks/marketing-button/render.js":
/*!***********************************************!*\
  !*** ./src/blocks/marketing-button/render.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/marketing-button/editor.lazy.scss");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");








const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_5__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_5__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_6__["useDeviceType"])();
  const {
    attributes,
    setAttributes,
    className,
    mergeBlocks,
    insertBlocksAfter,
    createBlock,
    onReplace
  } = props;
  const {
    isPreview,
    block_id,
    align,
    textAlign,
    heading,
    prefix,
    icon,
    iconPosition,
    titleTag,
    showDescription
  } = attributes;
  const iconHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, '' !== icon && Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(icon));
  const titleHTML = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add Button Title…', 'ultimate-addons-for-gutenberg'),
    value: heading,
    tagName: titleTag,
    onChange: value => setAttributes({
      heading: value
    }),
    allowedFormats: ['bold', 'italic', 'strikethrough'],
    className: "uagb-marketing-btn__title",
    onRemove: () => onReplace([]),
    multiline: false,
    onMerge: mergeBlocks,
    onSplit: insertBlocksAfter ? function (before, after) {
      setAttributes({
        content: before
      });

      for (var _len = arguments.length, blocks = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        blocks[_key - 2] = arguments[_key];
      }

      insertBlocksAfter([...blocks, createBlock('core/paragraph', {
        content: after
      })]);
    } : undefined
  }));
  const previewImageData = `${uagb_blocks_info.uagb_url}/admin/assets/preview-images/marketing-button.png`;
  return isPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    width: "100%",
    src: previewImageData,
    alt: ""
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, `uagb-marketing-btn__align-${align}`, `uagb-marketing-btn__align-text-${textAlign}`, `uagb-marketing-btn__icon-${iconPosition}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${block_id}`, 'wp-block-button')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    // eslint-disable-line jsx-a11y/anchor-is-valid
    className: "uagb-marketing-btn__link wp-block-button__link"
  }, 'before' === iconPosition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, iconHTML, titleHTML), 'after' === iconPosition && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, titleHTML, iconHTML), showDescription && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add Button Description…', 'ultimate-addons-for-gutenberg'),
    value: prefix,
    tagName: "p",
    onChange: value => setAttributes({
      prefix: value
    }),
    allowedFormats: ['bold', 'italic', 'strikethrough'],
    className: "uagb-marketing-btn__prefix",
    onRemove: () => onReplace([]),
    multiline: false,
    onMerge: mergeBlocks,
    onSplit: insertBlocksAfter ? function (before, after) {
      setAttributes({
        content: before
      });

      for (var _len2 = arguments.length, blocks = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        blocks[_key2 - 2] = arguments[_key2];
      }

      insertBlocksAfter([...blocks, createBlock('core/paragraph', {
        content: after
      })]);
    } : undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map