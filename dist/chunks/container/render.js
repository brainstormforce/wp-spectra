(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/container/render"],{

/***/ "./src/blocks/container/render.js":
/*!****************************************!*\
  !*** ./src/blocks/container/render.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes */ "./src/blocks/container/shapes.js");





const Render = props => {
  props = props.parentProps;
  const {
    attributes,
    className,
    deviceType
  } = props;
  const {
    block_id,
    topType,
    topFlip,
    topContentAboveShape,
    bottomType,
    bottomFlip,
    bottomContentAboveShape
  } = attributes;
  const direction = attributes['direction' + deviceType];
  const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';
  const topDividerHtml = 'none' !== topType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-container__shape', 'uagb-container__shape-top', {
      'uagb-container__shape-flip': topFlip === true
    }, {
      'uagb-container__shape-above-content': topContentAboveShape === true
    })
  }, _shapes__WEBPACK_IMPORTED_MODULE_3__["default"][topType]);
  const bottomDividerHtml = 'none' !== bottomType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-container__shape', 'uagb-container__shape-bottom', {
      'uagb-container__shape-flip': bottomFlip === true
    }, {
      'uagb-container__shape-above-content': bottomContentAboveShape === true
    }),
    "data-negative": "false"
  }, _shapes__WEBPACK_IMPORTED_MODULE_3__["default"][bottomType]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, `uagb-block-${block_id}`),
    key: block_id
  }, topDividerHtml, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    __experimentalMoverDirection: moverDirection
  }), bottomDividerHtml);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map