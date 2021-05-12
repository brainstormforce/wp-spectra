(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/form/phone-render"],{

/***/ "./src/blocks/forms/child-blocks/phone/render.js":
/*!*******************************************************!*\
  !*** ./src/blocks/forms/child-blocks/phone/render.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _country_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-option */ "./src/blocks/forms/child-blocks/phone/country-option.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




var ToggleControl = wp.components.ToggleControl;
var RichText = wp.blockEditor.RichText;

var Render = function Render(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      isSelected = _props.isSelected;
  var block_id = attributes.block_id,
      phoneRequired = attributes.phoneRequired,
      phoneName = attributes.phoneName,
      pattern = attributes.pattern;
  var phone_html = '';

  if (pattern != '') {
    phone_html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "tel",
      placeholder: placeholder,
      pattern: pattern,
      required: phoneRequired,
      className: "uagb-forms-phone-input uagb-forms-input",
      name: block_id
    });
  } else {
    phone_html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "tel",
      required: phoneRequired,
      className: "uagb-forms-phone-input uagb-forms-input",
      name: block_id
    });
  }

  var placeholder = '';

  if (pattern == '[0-9]{3}-[0-9]{2}-[0-9]{3}') {
    placeholder = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('123-45-678', 'ultimate-addons-for-gutenberg');
  } else if (pattern == '[0-9]{3}-[0-9]{3}-[0-9]{4}') {
    placeholder = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('123-456-6789', 'ultimate-addons-for-gutenberg');
  }

  var isRequired = phoneRequired ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('required', 'ultimate-addons-for-gutenberg') : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-forms-phone-wrap', 'uagb-forms-field-set', "uagb-block-".concat(block_id))
  }, isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-forms-required-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ToggleControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Required', 'ultimate-addons-for-gutenberg'),
    checked: phoneRequired,
    onChange: function onChange() {
      return setAttributes({
        phoneRequired: !phoneRequired
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RichText, {
    tagName: "div",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Phone Name', 'ultimate-addons-for-gutenberg'),
    value: phoneName,
    onChange: function onChange(value) {
      return setAttributes({
        phoneName: value
      });
    },
    className: "uagb-forms-phone-label ".concat(isRequired, " uagb-forms-input-label"),
    multiline: false,
    id: block_id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    className: "uagb-forms-input uagb-form-phone-country uagb-form-phone-country-editor",
    id: "uagb-form-country-".concat(block_id),
    name: "".concat(phoneName, "[]")
  }, _country_option__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (o, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: o.props.value,
      key: index
    }, o.props.children);
  })), phone_html));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=phone-render.js.map