(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/post-timeline/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/timeline/editor.lazy.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/timeline/editor.lazy.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.i, "/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__field {\n  margin: 0; }\n  .edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__field a {\n    color: inherit;\n    text-decoration: none;\n    font-size: inherit;\n    margin: 0; }\n\n.edit-post-visual-editor .block-editor-block-list__block a {\n  pointer-events: none; }\n", "",{"version":3,"sources":["webpack://./src/blocks/timeline/editor.lazy.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,SAAS,EAAE;EACX;IACE,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,SAAS,EAAE;;AAEf;EACE,oBAAoB,EAAE","sourcesContent":["/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__field {\n  margin: 0; }\n  .edit-post-visual-editor .block-editor-block-list__block .uagb-timeline__field a {\n    color: inherit;\n    text-decoration: none;\n    font-size: inherit;\n    margin: 0; }\n\n.edit-post-visual-editor .block-editor-block-list__block a {\n  pointer-events: none; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/timeline/editor.lazy.scss":
/*!**********************************************!*\
  !*** ./src/blocks/timeline/editor.lazy.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/timeline/editor.lazy.scss");

            

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

/***/ "./src/blocks/timeline/post-timeline/components/Author.js":
/*!****************************************************************!*\
  !*** ./src/blocks/timeline/post-timeline/components/Author.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Author = props => {
  const {
    post,
    attributes
  } = props;
  let target = '_self';

  if (attributes.linkTarget) {
    target = '_blank';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, attributes.displayPostAuthor && undefined !== post.uagb_author_info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dashicons-admin-users dashicons"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "uagb-timeline__author-link",
    target: target,
    href: post.uagb_author_info.author_link,
    rel: "noopener noreferrer"
  }, post.uagb_author_info.display_name)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Author));

/***/ }),

/***/ "./src/blocks/timeline/post-timeline/components/CtaLink.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/timeline/post-timeline/components/CtaLink.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const CtaLink = props => {
  const {
    post,
    attributes
  } = props;
  let target = '_self';

  if (attributes.linkTarget) {
    target = '_blank';
  }

  if (attributes.displayPostLink) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "uagb-timeline__link",
      href: post.link,
      target: target,
      rel: "noopener noreferrer"
    }, attributes.readMoreText);
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CtaLink));

/***/ }),

/***/ "./src/blocks/timeline/post-timeline/components/Excerpt.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/timeline/post-timeline/components/Excerpt.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Excerpt = props => {
  const {
    post,
    attributes
  } = props;
  let trimmed_excerpt;

  if (attributes.displayPostExcerpt && post.uagb_excerpt) {
    trimmed_excerpt = post.uagb_excerpt.split(/\s+/).slice(0, attributes.exerptLength).join(' ');
    let margin_var = '';

    if (attributes.displayPostLink) {
      margin_var = attributes.contentSpace + 'px';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "uagb-timeline-desc-content",
      dangerouslySetInnerHTML: {
        __html: trimmed_excerpt
      },
      style: {
        marginBottom: margin_var
      }
    });
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Excerpt));

/***/ }),

/***/ "./src/blocks/timeline/post-timeline/components/FeaturedImage.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/timeline/post-timeline/components/FeaturedImage.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const FeaturedImage = props => {
  const {
    post,
    attributes
  } = props;

  if (attributes.displayPostImage && undefined !== post.uagb_featured_image_src && attributes.imageSize && post.uagb_featured_image_src[attributes.imageSize]) {
    const src = post.uagb_featured_image_src[attributes.imageSize];
    let target = '_self';

    if (attributes.linkTarget) {
      target = '_blank';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: post.link,
      target: target,
      rel: "noopener noreferrer",
      style: {
        textAlign: attributes.align
      },
      className: "uagb-timeline__image"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: src[0],
      alt: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__["decodeEntities"])(post.title.rendered.trim()) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('(Untitled)')
    }));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(FeaturedImage));

/***/ }),

/***/ "./src/blocks/timeline/post-timeline/components/Icon.js":
/*!**************************************************************!*\
  !*** ./src/blocks/timeline/post-timeline/components/Icon.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Icon = props => {
  const {
    attributes
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-timeline__marker uagb-timeline__out-view-icon uagb-timeline__icon-new"
  }, Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(attributes.icon));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Icon));

/***/ }),

/***/ "./src/blocks/timeline/post-timeline/components/PostDate.js":
/*!******************************************************************!*\
  !*** ./src/blocks/timeline/post-timeline/components/PostDate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const PostDate = props => {
  const {
    post,
    attributes,
    dateClass
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dateTime: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__["format"])('c', post.date_gmt),
    className: dateClass,
    style: {
      color: attributes.dateColor
    }
  }, attributes.displayPostDate && post.date_gmt && Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__["dateI18n"])(attributes.dateFormat, post.date_gmt)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(PostDate));

/***/ }),

/***/ "./src/blocks/timeline/post-timeline/components/Title.js":
/*!***************************************************************!*\
  !*** ./src/blocks/timeline/post-timeline/components/Title.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const Title = props => {
  const Tag = props.attributes.headingTag;
  const {
    post,
    attributes
  } = props;
  let target = '_self';

  if (attributes.linkTarget) {
    target = '_blank';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, {
    className: "uagb-timeline__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: post.link,
    target: target,
    rel: "noopener noreferrer"
  }, Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__["decodeEntities"])(post.title.rendered.trim()) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('(Untitled)')));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Title));

/***/ }),

/***/ "./src/blocks/timeline/post-timeline/render.js":
/*!*****************************************************!*\
  !*** ./src/blocks/timeline/post-timeline/render.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././classes */ "./src/blocks/timeline/classes.js");
/* harmony import */ var _align_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././align-classes */ "./src/blocks/timeline/align-classes.js");
/* harmony import */ var _day_align_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././day-align-classes */ "./src/blocks/timeline/day-align-classes.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Title */ "./src/blocks/timeline/post-timeline/components/Title.js");
/* harmony import */ var _components_FeaturedImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/FeaturedImage */ "./src/blocks/timeline/post-timeline/components/FeaturedImage.js");
/* harmony import */ var _components_Excerpt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Excerpt */ "./src/blocks/timeline/post-timeline/components/Excerpt.js");
/* harmony import */ var _components_CtaLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CtaLink */ "./src/blocks/timeline/post-timeline/components/CtaLink.js");
/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Author */ "./src/blocks/timeline/post-timeline/components/Author.js");
/* harmony import */ var _components_PostDate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PostDate */ "./src/blocks/timeline/post-timeline/components/PostDate.js");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Icon */ "./src/blocks/timeline/post-timeline/components/Icon.js");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../editor.lazy.scss */ "./src/blocks/timeline/editor.lazy.scss");

















const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_14__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_15__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_15__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_11__["useDeviceType"])();
  const {
    attributes,
    className,
    latestPosts
  } = props;
  const {
    isPreview,
    displayPostLink,
    timelinAlignment,
    postsToShow
  } = attributes;
  /* Render output at backend */

  const getContent = () => {
    const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

    if (!hasPosts) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["Placeholder"], {
        icon: "admin-post",
        label: uagb_blocks_info.blocks['uagb/post-timeline'].title
      }, !Array.isArray(latestPosts) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["Spinner"], null) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('No posts found.'));
    } // Removing posts from display should be instant.


    const displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;
    let contentAlignClass = Object(_align_classes__WEBPACK_IMPORTED_MODULE_2__["default"])(props.attributes, 0); // Get classname for layout alignment

    let dayAlignClass = Object(_day_align_classes__WEBPACK_IMPORTED_MODULE_3__["default"])(props.attributes, 0); // Get classname for day alignment.

    let displayInnerDate = false;
    const previewImageData = `${uagb_blocks_info.uagb_url}/admin/assets/preview-images/post-timeline.png`;
    return isPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("img", {
      width: "100%",
      src: previewImageData,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, displayPosts.map((post, index) => {
      if (timelinAlignment === 'center') {
        displayInnerDate = true;
        contentAlignClass = Object(_align_classes__WEBPACK_IMPORTED_MODULE_2__["default"])(props.attributes, index);
        dayAlignClass = Object(_day_align_classes__WEBPACK_IMPORTED_MODULE_3__["default"])(props.attributes, index);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("article", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-timeline__field ', contentAlignClass),
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_10__["default"], {
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(dayAlignClass, 'uagb-timeline__events-inner-new')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_PostDate__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post,
        attributes: attributes,
        dateClass: "uagb-timeline__date-hide uagb-timeline__inner-date-new"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_FeaturedImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        post: post,
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        post: post,
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Author__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post,
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Excerpt__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post,
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_CtaLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post,
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "uagb-timeline__arrow"
      })), displayInnerDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_14___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_PostDate__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post,
        attributes: attributes,
        dateClass: "uagb-timeline__date-new"
      })));
    }));
  };

  let ctaEnable = '';

  if (displayPostLink) {
    ctaEnable = 'uagb_timeline__cta-enable';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-timeline__outer-wrap', 'uagb-timeline__content-wrap', `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${props.clientId}`, ctaEnable, ...Object(_classes__WEBPACK_IMPORTED_MODULE_1__["default"])(props.attributes))
  }, getContent(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "uagb-timeline__line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "uagb-timeline__line__inner"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map