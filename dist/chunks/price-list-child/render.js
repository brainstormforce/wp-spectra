(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/price-list-child/render"],{

/***/ "./src/blocks/price-list-child/render.js":
/*!***********************************************!*\
  !*** ./src/blocks/price-list-child/render.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _price_list_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../price-list/classes */ "./src/blocks/price-list/classes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _components_RestMenuImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/RestMenuImage */ "./src/blocks/price-list-child/components/RestMenuImage.js");
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Title */ "./src/blocks/price-list-child/components/Title.js");
/* harmony import */ var _components_Price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Price */ "./src/blocks/price-list-child/components/Price.js");
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Description */ "./src/blocks/price-list-child/components/Description.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);










const Render = props => {
  props = props.parentProps;
  const {
    className,
    setAttributes,
    attributes
  } = props; // Setup the attributes.

  const {
    imagePosition,
    headingAlign
  } = attributes;
  const parentClientId = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["select"])('core/block-editor').getBlockHierarchyRootClientId(props.clientId);
  const parentAttributes = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["select"])('core/block-editor').getBlockAttributes(parentClientId);
  const position = parentAttributes ? parentAttributes.imagePosition ? parentAttributes.imagePosition : imagePosition : imagePosition; // eslint-disable-line no-nested-ternary

  const align = parentAttributes ? parentAttributes.headingAlign ? parentAttributes.headingAlign : headingAlign : headingAlign; // eslint-disable-line no-nested-ternary

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-rest_menu__wrap', `uagb-block-${props.clientId.substr(0, 8)}`, ...Object(_price_list_classes__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-rm__content"
  }, (position === 'top' || position === 'left') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RestMenuImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-rm-details"
  }, position === 'right' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Price__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    props: props
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    props: props
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Description__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    props: props
  })), (position === 'top' || position === 'left') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, align === 'right' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Price__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    props: props
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    props: props
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Description__WEBPACK_IMPORTED_MODULE_7__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    props: props
  }), align !== 'right' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Price__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    props: props
  })))), position === 'right' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_RestMenuImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-rm__separator"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map