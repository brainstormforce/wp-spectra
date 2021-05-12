(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/form/select-render"],{

/***/ "./src/blocks/forms/child-blocks/select/render.js":
/*!********************************************************!*\
  !*** ./src/blocks/forms/child-blocks/select/render.js ***!
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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
      selectRequired = attributes.selectRequired,
      options = attributes.options,
      selectName = attributes.selectName;

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

  var editView = options.map(function (s, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "uagb-form-select-option"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "uagb-inner-input-view",
      "aria-label": s.optiontitle,
      onChange: function onChange(e) {
        return changeOption({
          optiontitle: e.target.value,
          optionvalue: e.target.value
        }, index);
      },
      type: "text",
      value: s.optiontitle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "uagb-inner-input-view",
      "aria-label": s.optionvalue,
      onChange: function onChange(e) {
        return changeOption({
          optionvalue: e.target.value
        }, index);
      },
      type: "text",
      value: s.optionvalue
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
      className: "uagb-form-select-option-delete",
      icon: "trash",
      label: "Remove",
      onClick: function onClick() {
        return deleteOption(index);
      }
    }));
  });

  var SelectView = function SelectView() {
    var showoptionsField = options.map(function (o, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        key: index,
        value: o.optionvalue
      }, o.optiontitle);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      className: "uagb-forms-select-box uagb-forms-input",
      required: selectRequired,
      name: block_id,
      defaultValue: ""
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      value: "",
      disabled: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select your option', 'ultimate-addons-for-gutenberg')), showoptionsField);
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
    var deleteCurrentOptions = options.map(function (item, thisIndex) {
      if (index === thisIndex) {
        options.splice(index, 1);
        item = {
          options: options
        };
      }

      return item;
    });
    setState({
      optionsstate: deleteCurrentOptions
    });
    setAttributes({
      deleteCurrentOptions: deleteCurrentOptions
    });
  };

  var isRequired = selectRequired ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('required', 'ultimate-addons-for-gutenberg') : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-forms-select-wrap', 'uagb-forms-field-set', "uagb-block-".concat(block_id))
  }, isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-required-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToggleControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Required', 'ultimate-addons-for-gutenberg'),
    checked: selectRequired,
    onChange: function onChange() {
      return setAttributes({
        selectRequired: !selectRequired
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RichText, {
    tagName: "div",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select Title', 'ultimate-addons-for-gutenberg'),
    value: selectName,
    onChange: function onChange(value) {
      return setAttributes({
        selectName: value
      });
    },
    className: "uagb-forms-select-label ".concat(isRequired, " uagb-forms-input-label"),
    multiline: false,
    id: block_id
  }), isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, editView, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-select-controls"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, {
    isSecondary: true,
    onClick: addOption
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(' + Add Option ', 'ultimate-addons-for-gutenberg'))))), !isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectView, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=select-render.js.map