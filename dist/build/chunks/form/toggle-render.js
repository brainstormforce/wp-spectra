(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/form/toggle-render"],{

/***/ "./src/blocks/forms/child-blocks/toggle/render.js":
/*!********************************************************!*\
  !*** ./src/blocks/forms/child-blocks/toggle/render.js ***!
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



var ToggleControl = wp.components.ToggleControl;
var RichText = wp.blockEditor.RichText;

var Render = function Render(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      isSelected = _props.isSelected;
  var block_id = attributes.block_id,
      toggleRequired = attributes.toggleRequired,
      name = attributes.name,
      toggleStatus = attributes.toggleStatus,
      layout = attributes.layout,
      trueValue = attributes.trueValue,
      falseValue = attributes.falseValue;
  var isRequired = toggleRequired ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('required', 'ultimate-addons-for-gutenberg') : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-forms-toggle-wrap', 'uagb-forms-field-set', "uagb-block-".concat(block_id))
  }, isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-required-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToggleControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Required', 'ultimate-addons-for-gutenberg'),
    checked: toggleRequired,
    onChange: function onChange() {
      return setAttributes({
        toggleRequired: !toggleRequired
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RichText, {
    tagName: "div",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Name', 'ultimate-addons-for-gutenberg'),
    value: name,
    onChange: function onChange(value) {
      return setAttributes({
        name: value
      });
    },
    className: "uagb-forms-toggle-label ".concat(isRequired, " uagb-forms-input-label"),
    multiline: false,
    id: block_id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: block_id,
    className: "uagb-switch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "hidden",
    className: "uagb-forms-toggle-input",
    checked: toggleStatus,
    "data-truestate": trueValue,
    "data-falsestate": falseValue,
    value: toggleStatus ? trueValue : falseValue,
    required: toggleRequired,
    name: block_id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    className: "uagb-forms-toggle-input",
    readOnly: true,
    checked: toggleStatus,
    "data-truestate": trueValue,
    "data-falsestate": falseValue,
    value: toggleStatus ? trueValue : falseValue,
    required: toggleRequired,
    name: block_id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "uagb-slider ".concat(layout)
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=toggle-render.js.map