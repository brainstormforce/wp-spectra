(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/form/accept-render"],{

/***/ "./src/blocks/forms/child-blocks/accept/render.js":
/*!********************************************************!*\
  !*** ./src/blocks/forms/child-blocks/accept/render.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




var Render = function Render(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes;
  var block_id = attributes.block_id,
      acceptRequired = attributes.acceptRequired,
      acceptText = attributes.acceptText,
      showLink = attributes.showLink,
      linkLabel = attributes.linkLabel,
      link = attributes.link,
      linkInNewTab = attributes.linkInNewTab;
  var isRequired = acceptRequired ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('required', 'ultimate-addons-for-gutenberg') : '';
  var target = linkInNewTab ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('_blank', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('_self', 'ultimate-addons-for-gutenberg');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-forms-accept-wrap', 'uagb-forms-field-set', "uagb-block-".concat(block_id))
  }, showLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-accept-privacy-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: link,
    target: target,
    rel: "noopener noreferrer"
  }, ' ', linkLabel, ' ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "uagb-forms-accept-".concat(block_id),
    className: "uagb-forms-checkbox",
    name: block_id,
    required: acceptRequired,
    value: "Agree"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    name: block_id,
    htmlFor: "uagb-forms-accept-".concat(block_id),
    className: "uagb-forms-accept-label ".concat(isRequired)
  }, acceptText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=accept-render.js.map