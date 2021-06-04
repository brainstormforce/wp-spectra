(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/form/phone-settings"],{

/***/ "./src/blocks/forms/child-blocks/phone/settings.js":
/*!*********************************************************!*\
  !*** ./src/blocks/forms/child-blocks/phone/settings.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl;
var InspectorControls = wp.blockEditor.InspectorControls;

var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes;
  var phoneRequired = attributes.phoneRequired,
      pattern = attributes.pattern;

  var phoneInspectorControls = function phoneInspectorControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Required', 'ultimate-addons-for-gutenberg'),
      checked: phoneRequired,
      onChange: function onChange() {
        return setAttributes({
          phoneRequired: !phoneRequired
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pattern'),
      value: pattern,
      options: [{
        label: 'None',
        value: ''
      }, {
        label: '123-45-678',
        value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('[0-9]{3}-[0-9]{2}-[0-9]{3}', 'ultimate-addons-for-gutenberg')
      }, {
        label: '123-456-6789',
        value: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('[0-9]{3}-[0-9]{3}-[0-9]{4}', 'ultimate-addons-for-gutenberg')
      }],
      onChange: function onChange(new_pattern) {
        setAttributes({
          new_pattern: new_pattern
        });
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InspectorControls, null, phoneInspectorControls()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=phone-settings.js.map