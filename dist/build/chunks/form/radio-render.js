(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/form/radio-render"],{

/***/ "./src/blocks/forms/child-blocks/radio/render.js":
/*!*******************************************************!*\
  !*** ./src/blocks/forms/child-blocks/radio/render.js ***!
  \*******************************************************/
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _wp$components = wp.components,
    Button = _wp$components.Button,
    ToggleControl = _wp$components.ToggleControl;
var RichText = wp.blockEditor.RichText;

var Render = function Render(props) {
  var _props = props,
      setState = _props.setState;
  props = props.parentProps;
  var _props2 = props,
      attributes = _props2.attributes,
      setAttributes = _props2.setAttributes,
      isSelected = _props2.isSelected;
  var block_id = attributes.block_id,
      radioRequired = attributes.radioRequired,
      options = attributes.options,
      radioName = attributes.radioName;

  var addOption = function addOption() {
    var newOption = {
      optiontitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Option Name ', 'ultimate-addons-for-gutenberg') + "".concat(options.length + 1),
      optionvalue: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Option Value ', 'ultimate-addons-for-gutenberg') + "".concat(options.length + 1)
    };
    options[options.length] = newOption;
    var addnewOptions = options.map(function (item) {
      return item;
    });
    setAttributes({
      options: addnewOptions
    });
    setState({
      optionsstate: addnewOptions
    });
  };

  var editView = options.map(function (option, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "uagb-form-radio-option"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "radio",
      name: "radio-".concat(block_id),
      value: option.optiontitle,
      id: option.optiontitle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: option.optiontitle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "uagb-inner-input-view",
      "aria-label": option.optiontitle,
      onChange: function onChange(e) {
        return changeOption({
          optiontitle: e.target.value,
          optionvalue: e.target.value
        }, index);
      },
      type: "text",
      value: option.optiontitle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "uagb-inner-input-view",
      "aria-label": option.optionvalue,
      onChange: function onChange(e) {
        return changeOption({
          optionvalue: e.target.value
        }, index);
      },
      type: "text",
      value: option.optionvalue
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
      className: "uagb-form-radio-option-delete",
      icon: "trash",
      label: "Remove",
      onClick: function onClick() {
        return deleteOption(index);
      }
    }));
  });

  var RadioView = function RadioView() {
    return options.map(function (option, index) {
      var optionvalue = option.optionvalue;
      var value = optionvalue.replace(/\s+/g, '-').toLowerCase();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "radio",
        id: value,
        name: block_id,
        value: optionvalue,
        required: radioRequired
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: value
      }, option.optiontitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null));
    });
  };

  var changeOption = function changeOption(e, index) {
    var editOptions = options.map(function (item, thisIndex) {
      if (index === thisIndex) {
        item = _objectSpread(_objectSpread({}, item), e);
      }

      return item;
    });
    setAttributes({
      options: editOptions
    });
    setState({
      optionsstate: editOptions
    });
  };

  var deleteOption = function deleteOption(index) {
    var deleteOptions = options.map(function (item, thisIndex) {
      if (index === thisIndex) {
        options.splice(index, 1);
        item = {
          options: options
        };
      }

      return item;
    });
    setState({
      optionsstate: deleteOptions
    });
    setAttributes({
      deleteOptions: deleteOptions
    });
  };

  var isRequired = radioRequired ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('required', 'ultimate-addons-for-gutenberg') : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-forms-radio-wrap', 'uagb-forms-field-set', "uagb-block-".concat(block_id))
  }, isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-required-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToggleControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Required', 'ultimate-addons-for-gutenberg'),
    checked: radioRequired,
    onChange: function onChange() {
      return setAttributes({
        radioRequired: !radioRequired
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RichText, {
    tagName: "div",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Radio Title', 'ultimate-addons-for-gutenberg'),
    value: radioName,
    onChange: function onChange(value) {
      return setAttributes({
        radioName: value
      });
    },
    className: "uagb-forms-radio-label ".concat(isRequired, " uagb-forms-input-label"),
    multiline: false,
    id: block_id
  }), isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-radio-controls"
  }, editView, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    isSecondary: true,
    onClick: addOption
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(' + Add Option ', 'ultimate-addons-for-gutenberg'))))), !isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioView, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=radio-render.js.map