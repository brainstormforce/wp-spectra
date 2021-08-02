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
___CSS_LOADER_EXPORT___.push([module.i, "/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n#wpwrap .edit-post-visual-editor .uagb-timeline__widget a {\n  color: inherit;\n  text-decoration: none; }\n\n#wpwrap .edit-post-visual-editor .uagb-timeline__heading a,\n.gutenberg-editor-page #wpwrap .edit-post-visual-editor a {\n  margin: 0;\n  color: inherit;\n  font-size: inherit; }\n\n#wpwrap .edit-post-visual-editor .uagb-timeline__heading {\n  margin: 0; }\n\n#wpwrap .edit-post-visual-editor a {\n  pointer-events: none; }\n", "",{"version":3,"sources":["webpack://./src/blocks/timeline/editor.lazy.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,cAAc;EACd,qBAAqB,EAAE;;AAEzB;;EAEE,SAAS;EACT,cAAc;EACd,kBAAkB,EAAE;;AAEtB;EACE,SAAS,EAAE;;AAEb;EACE,oBAAoB,EAAE","sourcesContent":["/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n#wpwrap .edit-post-visual-editor .uagb-timeline__widget a {\n  color: inherit;\n  text-decoration: none; }\n\n#wpwrap .edit-post-visual-editor .uagb-timeline__heading a,\n.gutenberg-editor-page #wpwrap .edit-post-visual-editor a {\n  margin: 0;\n  color: inherit;\n  font-size: inherit; }\n\n#wpwrap .edit-post-visual-editor .uagb-timeline__heading {\n  margin: 0; }\n\n#wpwrap .edit-post-visual-editor a {\n  pointer-events: none; }\n"],"sourceRoot":""}]);
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


var Author = function Author(props) {
  var post = props.post,
      attributes = props.attributes;
  var target = '_self';

  if (attributes.linkTarget) {
    target = '_blank';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, attributes.displayPostAuthor && undefined !== post.uagb_author_info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "uagb-timeline__author"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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


var CtaLink = function CtaLink(props) {
  var post = props.post,
      attributes = props.attributes;
  var target = '_self';

  if (attributes.linkTarget) {
    target = '_blank';
  }

  if (attributes.displayPostLink) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "uagb-timeline__link_parent"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "uagb-timeline__link",
      href: post.link,
      target: target,
      rel: "noopener noreferrer"
    }, attributes.readMoreText));
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


var Excerpt = function Excerpt(props) {
  var post = props.post,
      attributes = props.attributes;

  if (attributes.displayPostExcerpt && undefined !== post.uagb_excerpt) {
    if (attributes.displayPostExcerpt && post.uagb_excerpt) {
      var trimmed_excerpt = post.uagb_excerpt.split(/\s+/).slice(0, attributes.exerptLength).join(' ');
    }

    var margin_var = '';

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




var FeaturedImage = function FeaturedImage(props) {
  var post = props.post,
      attributes = props.attributes;

  if (attributes.displayPostImage && undefined !== post.uagb_featured_image_src && attributes.imageSize && post.uagb_featured_image_src[attributes.imageSize]) {
    var src = post.uagb_featured_image_src[attributes.imageSize];
    var target = '_self';

    if (attributes.linkTarget) {
      target = '_blank';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "uagb-timeline__image"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: post.link,
      target: target,
      rel: "noopener noreferrer",
      style: {
        textAlign: attributes.align
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: src[0],
      alt: Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__["decodeEntities"])(post.title.rendered.trim()) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('(Untitled)')
    })));
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



var Icon = function Icon(props) {
  var attributes = props.attributes;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-timeline__marker uagb-timeline__out-view-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "uagb-timeline__icon-new uagb-timeline__out-view-icon"
  }, Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_0__["default"])(attributes.icon)));
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



var PostDate = function PostDate(props) {
  var post = props.post,
      attributes = props.attributes,
      dateClass = props.dateClass;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, attributes.displayPostDate && post.date_gmt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("time", {
    dateTime: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__["format"])('c', post.date_gmt),
    className: dateClass,
    style: {
      color: attributes.dateColor
    }
  }, Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_0__["dateI18n"])(attributes.dateFormat, post.date_gmt)));
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




var Title = function Title(props) {
  var Tag = props.attributes.headingTag;
  var post = props.post,
      attributes = props.attributes;
  var target = '_self';

  if (attributes.linkTarget) {
    target = '_blank';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-timeline__heading-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, {
    className: "uagb-timeline__heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: post.link,
    target: target,
    rel: "noopener noreferrer"
  }, Object(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__["decodeEntities"])(post.title.rendered.trim()) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('(Untitled)'))));
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
/* harmony import */ var _inline_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././inline-styles */ "./src/blocks/timeline/inline-styles.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././classes */ "./src/blocks/timeline/classes.js");
/* harmony import */ var _align_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././align-classes */ "./src/blocks/timeline/align-classes.js");
/* harmony import */ var _day_align_classes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././day-align-classes */ "./src/blocks/timeline/day-align-classes.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Title */ "./src/blocks/timeline/post-timeline/components/Title.js");
/* harmony import */ var _components_FeaturedImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FeaturedImage */ "./src/blocks/timeline/post-timeline/components/FeaturedImage.js");
/* harmony import */ var _components_Excerpt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Excerpt */ "./src/blocks/timeline/post-timeline/components/Excerpt.js");
/* harmony import */ var _components_CtaLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/CtaLink */ "./src/blocks/timeline/post-timeline/components/CtaLink.js");
/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Author */ "./src/blocks/timeline/post-timeline/components/Author.js");
/* harmony import */ var _components_PostDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/PostDate */ "./src/blocks/timeline/post-timeline/components/PostDate.js");
/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Icon */ "./src/blocks/timeline/post-timeline/components/Icon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../editor.lazy.scss */ "./src/blocks/timeline/editor.lazy.scss");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // Import css for timeline.

















var Render = function Render(props) {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_14__["useLayoutEffect"])(function () {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_15__["default"].use();
    return function () {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_15__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      className = _props.className,
      deviceType = _props.deviceType,
      latestPosts = _props.latestPosts;
  var displayPostLink = attributes.displayPostLink,
      timelinAlignment = attributes.timelinAlignment,
      postsToShow = attributes.postsToShow,
      contentPadding = attributes.contentPadding;
  /* Render output at backend */

  var getContent = function getContent() {
    // Add CSS.
    var element = document.getElementById('uagb-timeline-style-' + props.clientId);

    if (null != element && 'undefined' !== typeof element) {
      element.innerHTML = Object(_inline_styles__WEBPACK_IMPORTED_MODULE_1__["default"])(props);
    }

    var hasPosts = Array.isArray(latestPosts) && latestPosts.length;

    if (!hasPosts) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["Placeholder"], {
        icon: "admin-post",
        label: uagb_blocks_info.blocks['uagb/post-timeline'].title
      }, !Array.isArray(latestPosts) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_13__["Spinner"], null) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])('No posts found.'));
    } // Removing posts from display should be instant.


    var displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;
    var contentAlignClass = Object(_align_classes__WEBPACK_IMPORTED_MODULE_3__["default"])(props.attributes, 0); // Get classname for layout alignment

    var dayAlignClass = Object(_day_align_classes__WEBPACK_IMPORTED_MODULE_4__["default"])(props.attributes, 0); // Get classname for day alignment.

    var displayInnerDate = false;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      className: "uagb-timeline__days"
    }, displayPosts.map(function (post, index) {
      if (timelinAlignment == 'center') {
        displayInnerDate = true;
        contentAlignClass = Object(_align_classes__WEBPACK_IMPORTED_MODULE_3__["default"])(props.attributes, index);
        dayAlignClass = Object(_day_align_classes__WEBPACK_IMPORTED_MODULE_4__["default"])(props.attributes, index);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("article", {
        className: "uagb-timeline__field uagb-timeline__field-wrap",
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: contentAlignClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: dayAlignClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "uagb-timeline__events-inner-new"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "uagb-timeline__date-hide uagb-timeline__date-inner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_PostDate__WEBPACK_IMPORTED_MODULE_10__["default"], {
        post: post,
        attributes: attributes,
        dateClass: "uagb-timeline__inner-date-new"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_FeaturedImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post,
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "uagb-content",
        style: {
          padding: contentPadding + 'px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
        post: post,
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Author__WEBPACK_IMPORTED_MODULE_9__["default"], {
        post: post,
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Excerpt__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post,
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_CtaLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        post: post,
        attributes: attributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "uagb-timeline__arrow"
      })))), displayInnerDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "uagb-timeline__date-new"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_PostDate__WEBPACK_IMPORTED_MODULE_10__["default"], {
        post: post,
        attributes: attributes,
        dateClass: "uagb-timeline__date-new"
      }))));
    }));
  };

  var ctaEnable = '';

  if (displayPostLink) {
    ctaEnable = 'uagb_timeline__cta-enable';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default.a.apply(void 0, [className, 'uagb-timeline__outer-wrap', 'uagb-timeline__content-wrap', "uagb-editor-preview-mode-".concat(deviceType.toLowerCase()), "uagb-block-".concat(props.clientId), ctaEnable].concat(_toConsumableArray(Object(_classes__WEBPACK_IMPORTED_MODULE_2__["default"])(props.attributes))))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "uagb-timeline__main"
  }, getContent(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "uagb-timeline__line"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "uagb-timeline__line__inner"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map