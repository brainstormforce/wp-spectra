(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/post-masonry/react-masonry-component"],{

/***/ "./src/blocks/post/post-masonry/blog.js":
/*!**********************************************!*\
  !*** ./src/blocks/post/post-masonry/blog.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././function */ "./src/blocks/post/function.js");




const Masonry = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["lazy"])(() => Promise.all(/*! import() | chunks/post-masonry/react-masonry-component */[__webpack_require__.e("vendors~chunks/post-masonry/react-masonry-component"), __webpack_require__.e("chunks/post-masonry/react-masonry-component")]).then(__webpack_require__.t.bind(null, /*! react-masonry-component */ "./node_modules/react-masonry-component/lib/index.js", 7)));


function Blog(props) {
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
    paginationEventType,
    buttonText,
    paginationType,
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

        if (parent && parent.classList.contains('uagb-post__image-position-background')) {
          const images = parent === null || parent === void 0 ? void 0 : parent.getElementsByClassName('uagb-post__image');

          for (const image of images) {
            if (image) {
              image.style.width = imageWidth + '%';
              image.style.marginLeft = rowGap / 2 + 'px';
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
  }, [imgPosition]); // Removing posts from display should be instant.

  const displayPosts = latestPosts.length > postsToShow ? latestPosts.slice(0, postsToShow) : latestPosts;

  const paginationRender = () => {
    if ('infinite' === paginationType) {
      if ('scroll' === paginationEventType) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "uagb-post-inf-loader"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "uagb-post-loader-1"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "uagb-post-loader-2"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "uagb-post-loader-3"
        }));
      }

      if ('button' === paginationEventType) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "uagb-post__load-more-wrap"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
          className: "uagb-post-pagination-button"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
          // eslint-disable-line jsx-a11y/anchor-is-valid
          className: "uagb-post__load-more"
        }, buttonText)));
      }
    }
  };

  const previewImageData = `${uagb_blocks_info.uagb_url}/admin/assets/preview-images/post-masonry.png`;
  return isPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    width: "100%",
    src: previewImageData,
    alt: ""
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-post-grid', 'uagb-post__arrow-outside', `uagb-post__image-position-${imgPosition}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${block_id}`),
    "data-blog-id": block_id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Masonry, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('is-masonry', `uagb-post__columns-${columns}`, `uagb-post__columns-tablet-${tcolumns}`, `uagb-post__columns-mobile-${mcolumns}`, 'uagb-post__items', className, 'uagb-post-grid', 'uagb-post__arrow-outside', `uagb-post__image-position-${imgPosition}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${block_id}`),
    "data-blog-id": block_id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_function__WEBPACK_IMPORTED_MODULE_4__["InnerBlockLayoutContextProvider"], {
    parentName: "uagb/post-masonry",
    parentClassName: "uagb-block-grid"
  }, displayPosts.map((post, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("article", {
    ref: article,
    key: i,
    className: "uagb-post__inner-wrap"
  }, Object(_function__WEBPACK_IMPORTED_MODULE_4__["renderPostLayout"])('uagb/post-masonry', post, layoutConfig, props.attributes, props.categoriesList)))))), paginationRender());
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

}]);
//# sourceMappingURL=react-masonry-component.js.map