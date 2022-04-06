(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/info-box/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/info-box/editor.lazy.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/info-box/editor.lazy.scss ***!
  \*****************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n\n.uagb-ifb-title-wrap .block-editor-rich-text__editable.uagb-ifb-title.rich-text {\n  line-height: inherit;\n  margin-top: 0; }\n", "",{"version":3,"sources":["webpack://./src/blocks/info-box/editor.lazy.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,WAAW;EACX,cAAc,EAAE;;AAElB;EACE,oBAAoB;EACpB,aAAa,EAAE","sourcesContent":["/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor a.uagb-infobox-link-wrap {\n  z-index: -1;\n  color: inherit; }\n\n.uagb-ifb-title-wrap .block-editor-rich-text__editable.uagb-ifb-title.rich-text {\n  line-height: inherit;\n  margin-top: 0; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/info-box/editor.lazy.scss":
/*!**********************************************!*\
  !*** ./src/blocks/info-box/editor.lazy.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/info-box/editor.lazy.scss");

            

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

/***/ "./src/blocks/info-box/render.js":
/*!***************************************!*\
  !*** ./src/blocks/info-box/render.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-classes */ "./src/blocks/info-box/style-classes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Title */ "./src/blocks/info-box/components/Title.js");
/* harmony import */ var _components_InfoBoxDesc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/InfoBoxDesc */ "./src/blocks/info-box/components/InfoBoxDesc.js");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CTA */ "./src/blocks/info-box/components/CTA.js");
/* harmony import */ var _components_Separator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Separator */ "./src/blocks/info-box/components/Separator.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Icons */ "./src/blocks/info-box/components/Icons.js");
/* harmony import */ var _components_IconImages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/IconImages */ "./src/blocks/info-box/components/IconImages.js");
/* harmony import */ var _components_Prefix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Prefix */ "./src/blocks/info-box/components/Prefix.js");
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/info-box/editor.lazy.scss");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");













const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_10__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_10__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_11__["useDeviceType"])();
  const {
    attributes,
    setAttributes
  } = props; // Setup the attributes.

  const {
    isPreview,
    icon,
    iconimgPosition,
    source_type,
    seperatorPosition,
    seperatorStyle,
    ctaType,
    showPrefix,
    showTitle,
    showDesc,
    block_id,
    prefixTitle,
    infoBoxTitle
  } = attributes; // Get icon/Image components.

  let isImage = '';

  if (source_type === 'icon' && icon !== '') {
    isImage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Icons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      attributes: attributes
    });
  } else {
    isImage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_IconImages__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attributes: attributes
    });
  }

  let iconImageHtml = isImage;
  let seperatorPos = seperatorPosition;
  const seperatorHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Separator__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes
  });
  let showSeperator = true;

  if (seperatorPos === 'after_icon' && (iconimgPosition === 'above-title' || iconimgPosition === 'below-title')) {
    showSeperator = false;
    iconImageHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, isImage, 'none' !== seperatorStyle && seperatorHtml);
  }

  if (seperatorPos === 'after_icon' && (iconimgPosition !== 'above-title' || iconimgPosition !== 'below-title')) {
    seperatorPos = 'after_title';
  }

  if (iconimgPosition === 'below-title' && seperatorPos === 'after_title') {
    showSeperator = false;
    iconImageHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, 'none' !== seperatorStyle && seperatorHtml, isImage);
  } // Get description and seperator components.


  const desc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, 'none' !== seperatorStyle && seperatorPos === 'after_title' && showSeperator && seperatorHtml, showDesc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_InfoBoxDesc__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    props: props
  }), 'none' !== seperatorStyle && seperatorPos === 'after_desc' && seperatorHtml, ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_CTA__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  })); // Get Title and Prefix components.

  const titleText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-ifb-title-wrap"
  }, showPrefix && '' !== prefixTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Prefix__WEBPACK_IMPORTED_MODULE_9__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    props: props
  }), 'none' !== seperatorStyle && seperatorPos === 'after_prefix' && seperatorHtml, showTitle && '' !== infoBoxTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    props: props
  }));
  const output = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, iconimgPosition === 'left' && iconImageHtml, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-ifb-content"
  }, iconimgPosition === 'above-title' && iconImageHtml, (iconimgPosition === 'above-title' || iconimgPosition === 'below-title') && titleText, iconimgPosition === 'below-title' && iconImageHtml, (iconimgPosition === 'above-title' || iconimgPosition === 'below-title') && desc, iconimgPosition === 'left-title' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-ifb-left-title-image"
  }, iconImageHtml, titleText), desc), iconimgPosition === 'right-title' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-ifb-right-title-image"
  }, titleText, iconImageHtml), desc), (iconimgPosition === 'left' || iconimgPosition === 'right') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, titleText, desc)), iconimgPosition === 'right' && iconImageHtml);
  const previewImageData = `${uagb_blocks_info.uagb_url}/admin/assets/preview-images/info-box.png`;
  return isPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    width: "100%",
    src: previewImageData,
    alt: ""
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(`uagb-block-${block_id}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, 'uagb-infobox__content-wrap', ctaType === 'all' ? ' uagb-infobox_cta-type-all' : '', ...Object(_style_classes__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes))
  }, ctaType === 'all' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    // eslint-disable-line jsx-a11y/anchor-has-content
    className: "uagb-infobox-link-wrap uagb-infbox__link-to-all",
    "aria-label": 'Infobox Link',
    rel: "noopener noreferrer",
    href: "/"
  }), output);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map