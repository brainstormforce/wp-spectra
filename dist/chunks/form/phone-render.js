(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/form/phone-render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/forms/child-blocks/phone/editor.lazy.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/forms/child-blocks/phone/editor.lazy.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".editor-styles-wrapper .uagb-forms-phone-wrap .uagb-form-phone-country-editor {\n  line-height: normal; }\n  .editor-styles-wrapper .uagb-forms-phone-wrap .uagb-form-phone-country-editor .components-input-control__backdrop {\n    border: none; }\n\n.editor-styles-wrapper .uagb-forms-phone-wrap .components-base-control {\n  width: 30%; }\n\n.editor-styles-wrapper .uagb-forms-phone-wrap .uagb-forms-phone-input {\n  width: 70%; }\n", "",{"version":3,"sources":["webpack://./src/blocks/forms/child-blocks/phone/editor.lazy.scss"],"names":[],"mappings":"AAAA;EACE,mBAAmB,EAAE;EACrB;IACE,YAAY,EAAE;;AAElB;EACE,UAAU,EAAE;;AAEd;EACE,UAAU,EAAE","sourcesContent":[".editor-styles-wrapper .uagb-forms-phone-wrap .uagb-form-phone-country-editor {\n  line-height: normal; }\n  .editor-styles-wrapper .uagb-forms-phone-wrap .uagb-form-phone-country-editor .components-input-control__backdrop {\n    border: none; }\n\n.editor-styles-wrapper .uagb-forms-phone-wrap .components-base-control {\n  width: 30%; }\n\n.editor-styles-wrapper .uagb-forms-phone-wrap .uagb-forms-phone-input {\n  width: 70%; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/forms/child-blocks/phone/editor.lazy.scss":
/*!**************************************************************!*\
  !*** ./src/blocks/forms/child-blocks/phone/editor.lazy.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/forms/child-blocks/phone/editor.lazy.scss");

            

var refs = 0;
var update;
var options = {"injectType":"lazySingletonStyleTag","attributes":{"id":"uagb-editor-styles"}};

options.insert = "head";
options.singleton = true;

var exported = {};

exported.locals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
exported.use = function() {
  if (!(refs++)) {
    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  return exported;
};
exported.unuse = function() {
  if (refs > 0 && !--refs) {
    update();
    update = null;
  }
};



;
       /* harmony default export */ __webpack_exports__["default"] = (exported);


/***/ }),

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
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/forms/child-blocks/phone/editor.lazy.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);








const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  const {
    attributes,
    setAttributes,
    isSelected
  } = props;
  const {
    block_id,
    phoneRequired,
    phoneName,
    pattern,
    selectPhoneCode,
    autocomplete
  } = attributes;
  let phone_html = '';
  let placeholder = '';

  if (pattern === '[0-9]{3}-[0-9]{2}-[0-9]{3}') {
    placeholder = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('123-45-678', 'ultimate-addons-for-gutenberg');
  } else if (pattern === '[0-9]{3}-[0-9]{3}-[0-9]{4}') {
    placeholder = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('123-456-6789', 'ultimate-addons-for-gutenberg');
  }

  if (pattern !== '') {
    phone_html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "tel",
      placeholder: placeholder,
      pattern: pattern,
      required: phoneRequired,
      className: "uagb-forms-phone-input uagb-forms-input",
      name: block_id,
      autoComplete: autocomplete
    });
  } else {
    phone_html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "tel",
      required: phoneRequired,
      className: "uagb-forms-phone-input uagb-forms-input",
      name: block_id,
      autoComplete: autocomplete
    });
  }

  const contryCode = [];
  _country_option__WEBPACK_IMPORTED_MODULE_1__["default"].map((o, index) => // eslint-disable-line no-unused-vars
  contryCode.push({
    value: o.props.value,
    label: o.props.children
  }));
  const isRequired = phoneRequired ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('required', 'ultimate-addons-for-gutenberg') : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-forms-phone-wrap', 'uagb-forms-field-set', `uagb-block-${block_id}`)
  }, isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-forms-required-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Required', 'ultimate-addons-for-gutenberg'),
    checked: phoneRequired,
    onChange: () => setAttributes({
      phoneRequired: !phoneRequired
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["RichText"], {
    tagName: "div",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Phone Name', 'ultimate-addons-for-gutenberg'),
    value: phoneName,
    onChange: value => setAttributes({
      phoneName: value
    }),
    className: `uagb-forms-phone-label ${isRequired} uagb-forms-input-label`,
    multiline: false,
    id: block_id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-forms-phone-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    className: 'uagb-forms-input uagb-form-phone-country uagb-form-phone-country-editor',
    options: contryCode,
    value: selectPhoneCode,
    onChange: value => setAttributes({
      selectPhoneCode: value
    })
  }), phone_html)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=phone-render.js.map