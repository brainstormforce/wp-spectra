(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/form/hidden-render"],{

/***/ "./src/blocks/forms/child-blocks/hidden/render.js":
/*!********************************************************!*\
  !*** ./src/blocks/forms/child-blocks/hidden/render.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Render = props => {
  props = props.parentProps;
  const {
    attributes
  } = props;
  const {
    block_id,
    hidden_field_name,
    hidden_field_value
  } = attributes;
  const hidden_field_label = hidden_field_name.replace(/\s+/g, '-').toLowerCase();

  const changeHiddenName = value => {
    const {
      setAttributes
    } = props;
    setAttributes({
      hidden_field_name: value.target.value
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-forms-hidden-wrap', `uagb-block-${block_id}`)
  }, props.isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    className: "uagb-forms-hidden-input",
    onChange: changeHiddenName,
    value: hidden_field_name
  }), !props.isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: `uagb-forms-hidden-label uagb-form-hidden-${hidden_field_label}`,
    htmlFor: hidden_field_label
  }, hidden_field_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: hidden_field_label,
    type: "hidden",
    className: "uagb-forms-hidden-input",
    value: hidden_field_value
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=hidden-render.js.map