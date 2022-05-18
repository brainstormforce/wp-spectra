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
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const Blog = props => {
  const article = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  const {
    attributes,
    className,
    latestPosts,
    block_id
  } = props;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_2__["useDeviceType"])();
  const {
    isPreview,
    columns,
    tcolumns,
    mcolumns,
    imgPosition,
    postsToShow,
    equalHeight,
    paginationMarkup,
    postPagination,
    layoutConfig,
    rowGap
  } = attributes;

  const updateImageBgWidth = () => {
    setTimeout(() => {
      if (article !== null && article !== void 0 && article.current) {
        var _article$current, _article$current2;

        const articleWidth = article === null || article === void 0 ? void 0 : (_article$current = article.current) === null || _article$current === void 0 ? void 0 : _article$current.offsetWidth;
        const imageWidth = 100 - rowGap / articleWidth * 100;
        const parent = article === null || article === void 0 ? void 0 : (_article$current2 = article.current) === null || _article$current2 === void 0 ? void 0 : _article$current2.parentNode;

        if ('background' === attributes.imgPosition && parent && parent.classList.contains('uagb-post__image-position-background')) {
          const images = parent === null || parent === void 0 ? void 0 : parent.getElementsByClassName('uagb-post__image');

          for (const image of images) {
            if (image) {
              image.style.width = imageWidth + '%';
              image.style.marginLeft = rowGap / 2 + 'px';
            }
          }
        }

        if ('top' === attributes.imgPosition) {
          const images = parent === null || parent === void 0 ? void 0 : parent.getElementsByClassName('uagb-post__image');

          for (const image of images) {
            if (image) {
              image.style.width = null;
              image.style.marginLeft = null;
            }
          }
        }
      }
    }, 100);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    updateImageBgWidth();
  }, [article]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    updateImageBgWidth();
  }, [imgPosition]);
  const equalHeightClass = equalHeight ? 'uagb-post__equal-height' : ''; // Removing posts from display should be instant.

  const displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;
  const previewImageData = `${uagb_blocks_info.uagb_url}/admin/assets/preview-images/post-grid.png`;
  return isPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    width: "100%",
    src: previewImageData,
    alt: ""
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('is-grid', `uagb-post__columns-${columns}`, `uagb-post__columns-tablet-${tcolumns}`, `uagb-post__columns-mobile-${mcolumns}`, 'uagb-post__items', `${equalHeightClass}`, className, 'uagb-post-grid', `uagb-post__image-position-${imgPosition}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${block_id}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_function__WEBPACK_IMPORTED_MODULE_1__["InnerBlockLayoutContextProvider"], {
    parentName: "uagb/post-grid",
    parentClassName: "uagb-block-grid"
  }, displayPosts.map(function () {
    let post = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let i = arguments.length > 1 ? arguments[1] : undefined;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
      ref: article,
      key: i,
      className: "uagb-post__inner-wrap"
    }, Object(_function__WEBPACK_IMPORTED_MODULE_1__["renderPostLayout"])('uagb/post-grid', post, layoutConfig, props.attributes, props.categoriesList, article));
  })), postPagination === true && 'empty' !== paginationMarkup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: paginationMarkup
    },
    className: "uagb-post-pagination-wrap"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Blog));

/***/ })

}]);
//# sourceMappingURL=blog.js.map