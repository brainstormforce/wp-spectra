(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/content-timeline-child/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/timeline/content-timeline-child/editor.lazy.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/timeline/content-timeline-child/editor.lazy.scss ***!
  \****************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/*\n  Content Timeline Child.\n*/\n#wpwrap .edit-post-visual-editor .block-editor-block-list__block[data-type=\"uagb/content-timeline-child\"] {\n  padding-left: 0;\n  padding-right: 0; }\n", "",{"version":3,"sources":["webpack://./src/blocks/timeline/content-timeline-child/editor.lazy.scss"],"names":[],"mappings":"AAAA;;CAEC;AACD;EACE,eAAe;EACf,gBAAgB,EAAE","sourcesContent":["/*\n  Content Timeline Child.\n*/\n#wpwrap .edit-post-visual-editor .block-editor-block-list__block[data-type=\"uagb/content-timeline-child\"] {\n  padding-left: 0;\n  padding-right: 0; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/timeline/content-timeline-child/editor.lazy.scss":
/*!*********************************************************************!*\
  !*** ./src/blocks/timeline/content-timeline-child/editor.lazy.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/timeline/content-timeline-child/editor.lazy.scss");

            

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

/***/ "./src/blocks/timeline/content-timeline-child/render.js":
/*!**************************************************************!*\
  !*** ./src/blocks/timeline/content-timeline-child/render.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/timeline/content-timeline-child/editor.lazy.scss");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].unuse();
    };
  }, []);
  props = props.parentProps; // Setup the attributes.

  const {
    setAttributes,
    insertBlocksAfter,
    mergeBlocks,
    onReplace,
    attributes: {
      block_id,
      headingTag,
      timelinAlignment,
      icon,
      t_date,
      displayPostDate,
      dateFormat,
      time_heading,
      time_desc,
      content
    }
  } = props;

  const splitBlock = function (before, after) {
    for (var _len = arguments.length, blocks = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      blocks[_key - 2] = arguments[_key];
    }

    if (after) {
      // any other blocks being inserted after the current paragraph.
      blocks.push(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__["createBlock"])('core/paragraph', {
        content: after
      }));
    }

    if (blocks.length && insertBlocksAfter) {
      insertBlocksAfter(blocks);
    }

    if (!before) {
      // If before content is omitted, treat as intent to delete block.
      onReplace([]);
    } else if (content !== before) {
      // Only update content if it has in-fact changed. In case that user
      // has created a new paragraph at end of an existing one, the value
      // of before will be strictly equal to the current content.
      setAttributes({
        content: before
      });
    }
  };

  let displayInnerDate = false;
  const postDate = t_date;

  if (timelinAlignment === 'center') {
    displayInnerDate = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('wp-block-uagb-content-timeline-child uagb-timeline__field', `uagb-timeline-child-${block_id}`, props.attributes.content_class)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-timeline__marker uagb-timeline__out-view-icon"
  }, Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(icon)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(props.attributes.dayalign_class, 'uagb-timeline__events-inner-new')
  }, displayPostDate !== true && t_date && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: 'uagb-timeline__date-hide uagb-timeline__inner-date-new'
  }, 'custom' !== dateFormat && Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__["dateI18n"])(dateFormat, postDate) || postDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
    tagName: headingTag,
    value: time_heading,
    onChange: value => setAttributes({
      time_heading: value
    }),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Write a Heading', 'ultimate-addons-for-gutenberg'),
    className: "uagb-timeline__heading",
    onMerge: mergeBlocks,
    onSplit: insertBlocksAfter ? function (before, after) {
      setAttributes({
        content: before
      });

      for (var _len2 = arguments.length, blocks = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        blocks[_key2 - 2] = arguments[_key2];
      }

      insertBlocksAfter([...blocks, Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__["createBlock"])('core/paragraph', {
        content: after
      })]);
    } : undefined,
    onRemove: () => onReplace([])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
    tagName: "p",
    value: time_desc,
    onChange: value => setAttributes({
      time_desc: value
    }),
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Write a Description', 'ultimate-addons-for-gutenberg'),
    className: "uagb-timeline-desc-content",
    onMerge: mergeBlocks,
    onSplit: splitBlock,
    onRemove: () => onReplace([])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-timeline__arrow"
  })), displayInnerDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-timeline__date-new"
  }, displayPostDate !== true && t_date && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, 'custom' !== dateFormat && Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_4__["dateI18n"])(dateFormat, postDate) || postDate)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map