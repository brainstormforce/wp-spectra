(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/columns/render"],{

/***/ "./src/blocks/columns/render.js":
/*!**************************************!*\
  !*** ./src/blocks/columns/render.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shapes */ "./src/blocks/columns/shapes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/**
 * BLOCK: Columns - Editor Render.
 */




const ALLOWED_BLOCKS = ['uagb/column'];


const Render = props => {
  const {
    attributes,
    isSelected,
    className
  } = props.parentProps;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_3__["useDeviceType"])();
  const {
    stack,
    align,
    vAlign,
    tag,
    columnGap,
    backgroundType,
    backgroundVideo,
    columns,
    bottomType,
    topType,
    bottomFlip,
    topFlip,
    reverseTablet,
    reverseMobile,
    topContentAboveShape,
    bottomContentAboveShape
  } = attributes;
  const getColumnsTemplate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    const childColumns = [];

    for (let i = 0; i < columns; i++) {
      childColumns.push(['uagb/column', {
        id: i + 1
      }]);
    }

    return childColumns;
  }, [columns]);
  const topDividerHtml = topType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-columns__shape', 'uagb-columns__shape-top', {
      'uagb-columns__shape-flip': topFlip === true
    }, {
      'uagb-columns__shape-above-content': topContentAboveShape === true
    })
  }, _shapes__WEBPACK_IMPORTED_MODULE_1__["default"][topType]);
  const bottomDividerHtml = bottomType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-columns__shape', 'uagb-columns__shape-bottom', {
      'uagb-columns__shape-flip': bottomFlip === true
    }, {
      'uagb-columns__shape-above-content': bottomContentAboveShape === true
    }),
    "data-negative": "false"
  }, _shapes__WEBPACK_IMPORTED_MODULE_1__["default"][bottomType]);
  const reverseTabletClass = reverseTablet ? 'uagb-columns__reverse-tablet' : '';
  const reverseMobileClass = reverseMobile ? 'uagb-columns__reverse-mobile' : '';
  const CustomTag = `${tag}`;
  const active = isSelected ? 'active' : 'not-active';
  const bgType = undefined !== backgroundType ? `uagb-columns__background-${backgroundType}` : '';
  const verticalAlign = undefined !== vAlign ? `uagb-columns__valign-${vAlign}` : '';
  const alignType = undefined !== align ? `align${align}` : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CustomTag, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-columns__wrap', `${bgType}`, `uagb-columns__edit-${active}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-columns__stack-${stack}`, `${verticalAlign}`, `uagb-columns__gap-${columnGap}`, `${alignType}`, reverseTabletClass, reverseMobileClass, `uagb-block-${props.parentProps.clientId.substr(0, 8)}`, `uagb-columns__columns-${columns}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-columns__overlay"
  }), topDividerHtml, 'video' === backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-columns__video-wrap"
  }, backgroundVideo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsinline: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("source", {
    src: backgroundVideo.url,
    type: "video/mp4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
    template: getColumnsTemplate,
    templateLock: "all",
    allowedBlocks: ALLOWED_BLOCKS
  }), bottomDividerHtml);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map