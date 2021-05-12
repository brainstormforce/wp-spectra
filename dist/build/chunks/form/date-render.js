(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/form/date-render"],{

/***/ "./src/blocks/forms/child-blocks/date/render.js":
/*!******************************************************!*\
  !*** ./src/blocks/forms/child-blocks/date/render.js ***!
  \******************************************************/
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
      dateRequired = attributes.dateRequired,
      name = attributes.name,
      additonalVal = attributes.additonalVal,
      minYear = attributes.minYear,
      minMonth = attributes.minMonth,
      minDay = attributes.minDay;
  var validation_min_value = '';
  var validation_max_value = '';

  if (minYear && minMonth && minDay) {
    validation_min_value = minYear + '-' + minMonth + '-' + minDay;
  }

  var date_html = '';

  if (additonalVal) {
    date_html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "date",
      className: "uagb-forms-date-input uagb-forms-input",
      required: dateRequired,
      min: validation_min_value,
      max: validation_max_value,
      name: block_id
    });
  } else {
    date_html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "date",
      className: "uagb-forms-date-input uagb-forms-input",
      required: dateRequired,
      name: block_id
    });
  }

  var isRequired = dateRequired ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('required', 'ultimate-addons-for-gutenberg') : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-forms-date-wrap', 'uagb-forms-field-set', "uagb-block-".concat(block_id))
  }, isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-required-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToggleControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Required', 'ultimate-addons-for-gutenberg'),
    checked: dateRequired,
    onChange: function onChange() {
      return setAttributes({
        dateRequired: !dateRequired
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RichText, {
    tagName: "div",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date', 'ultimate-addons-for-gutenberg'),
    value: name,
    onChange: function onChange(value) {
      return setAttributes({
        name: value
      });
    },
    className: "uagb-forms-date-label ".concat(isRequired, " uagb-forms-input-label"),
    multiline: false,
    id: block_id
  }), date_html));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=date-render.js.map