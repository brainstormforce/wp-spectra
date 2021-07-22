(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/post-grid/blog"],{

/***/ "./src/blocks/post/post-grid/blog.js":
/*!*******************************************!*\
  !*** ./src/blocks/post/post-grid/blog.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././function */ "./src/blocks/post/function.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var Blog = function Blog(props) {
  var attributes = props.attributes,
      className = props.className,
      latestPosts = props.latestPosts,
      block_id = props.block_id,
      deviceType = props.deviceType;
  var columns = attributes.columns,
      tcolumns = attributes.tcolumns,
      mcolumns = attributes.mcolumns,
      imgPosition = attributes.imgPosition,
      postsToShow = attributes.postsToShow,
      equalHeight = attributes.equalHeight,
      paginationMarkup = attributes.paginationMarkup,
      postPagination = attributes.postPagination,
      layoutConfig = attributes.layoutConfig;
  var equalHeightClass = equalHeight ? 'uagb-post__equal-height' : ''; // Removing posts from display should be instant.

  var displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-post-grid', "uagb-post__image-position-".concat(imgPosition), "uagb-editor-preview-mode-".concat(deviceType.toLowerCase()), "uagb-block-".concat(block_id))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('is-grid', "uagb-post__columns-".concat(columns), "uagb-post__columns-tablet-".concat(tcolumns), "uagb-post__columns-mobile-".concat(mcolumns), 'uagb-post__items', "".concat(equalHeightClass))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_function__WEBPACK_IMPORTED_MODULE_1__["InnerBlockLayoutContextProvider"], {
    parentName: "uagb/post-grid",
    parentClassName: "uagb-block-grid"
  }, displayPosts.map(function () {
    var post = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var i = arguments.length > 1 ? arguments[1] : undefined;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "uagb-post__inner-wrap"
    }, Object(_function__WEBPACK_IMPORTED_MODULE_1__["renderPostLayout"])('uagb/post-grid', post, layoutConfig, props.attributes, props.categoriesList)));
  }))), postPagination == true && 'empty' !== paginationMarkup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: paginationMarkup
    },
    className: "uagb-post-pagination-wrap"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Blog));

/***/ })

}]);
//# sourceMappingURL=blog.js.map