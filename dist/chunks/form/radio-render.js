(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/form/radio-render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/forms/child-blocks/radio/editor.lazy.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/forms/child-blocks/radio/editor.lazy.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.i, ".uagb-forms-radio-wrap input[type=\"radio\"],\n.uagb-form-radio-option input[type=\"radio\"] {\n  vertical-align: middle;\n  margin-right: 15px; }\n\n.uagb-forms-radio-controls {\n  margin-top: 10px; }\n\n.uagb-form-radio-option-delete.has-icon {\n  vertical-align: middle;\n  padding: 10px;\n  margin: 0; }\n\n.uagb-forms-main-form .uagb-inner-input-view {\n  vertical-align: middle;\n  width: 35% !important;\n  margin: 0 10px !important; }\n\n.uagb-forms-main-form .uagb-forms-radio-wrap input[type=\"radio\"] {\n  border-radius: 50%; }\n", "",{"version":3,"sources":["webpack://./src/blocks/forms/child-blocks/radio/editor.lazy.scss"],"names":[],"mappings":"AAAA;;EAEE,sBAAsB;EACtB,kBAAkB,EAAE;;AAEtB;EACE,gBAAgB,EAAE;;AAEpB;EACE,sBAAsB;EACtB,aAAa;EACb,SAAS,EAAE;;AAEb;EACE,sBAAsB;EACtB,qBAAqB;EACrB,yBAAyB,EAAE;;AAE7B;EACE,kBAAkB,EAAE","sourcesContent":[".uagb-forms-radio-wrap input[type=\"radio\"],\n.uagb-form-radio-option input[type=\"radio\"] {\n  vertical-align: middle;\n  margin-right: 15px; }\n\n.uagb-forms-radio-controls {\n  margin-top: 10px; }\n\n.uagb-form-radio-option-delete.has-icon {\n  vertical-align: middle;\n  padding: 10px;\n  margin: 0; }\n\n.uagb-forms-main-form .uagb-inner-input-view {\n  vertical-align: middle;\n  width: 35% !important;\n  margin: 0 10px !important; }\n\n.uagb-forms-main-form .uagb-forms-radio-wrap input[type=\"radio\"] {\n  border-radius: 50%; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/forms/child-blocks/radio/editor.lazy.scss":
/*!**************************************************************!*\
  !*** ./src/blocks/forms/child-blocks/radio/editor.lazy.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/forms/child-blocks/radio/editor.lazy.scss");

            

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
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/forms/child-blocks/radio/editor.lazy.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);







const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].unuse();
    };
  }, []);
  const {
    setState
  } = props;
  props = props.parentProps;
  const {
    attributes,
    setAttributes,
    isSelected
  } = props;
  const {
    block_id,
    radioRequired,
    options,
    radioName
  } = attributes;

  const addOption = () => {
    const newOption = {
      optiontitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Option Name ', 'ultimate-addons-for-gutenberg') + `${options.length + 1}`,
      optionvalue: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Option Value ', 'ultimate-addons-for-gutenberg') + `${options.length + 1}`
    };
    options[options.length] = newOption;
    const addnewOptions = options.map(item => item);
    setAttributes({
      options: addnewOptions
    });
    setState({
      optionsstate: addnewOptions
    });
  };

  const editView = options.map((option, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "uagb-form-radio-option"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "radio",
      name: `radio-${block_id}`,
      value: option.optiontitle,
      id: option.optiontitle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      // eslint-disable-line jsx-a11y/label-has-associated-control
      htmlFor: option.optiontitle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "uagb-inner-input-view",
      "aria-label": option.optiontitle,
      onChange: e => changeOption({
        optiontitle: e.target.value,
        optionvalue: e.target.value
      }, index),
      type: "text",
      value: option.optiontitle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      className: "uagb-inner-input-view",
      "aria-label": option.optionvalue,
      onChange: e => changeOption({
        optionvalue: e.target.value
      }, index),
      type: "text",
      value: option.optionvalue
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      className: "uagb-form-radio-option-delete",
      icon: "trash",
      label: "Remove",
      onClick: () => deleteOption(index)
    }));
  });

  const RadioView = () => {
    return options.map(option => {
      const optionvalue = option.optionvalue;
      const value = optionvalue.replace(/\s+/g, '-').toLowerCase();
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

  const changeOption = (e, index) => {
    const editOptions = options.map((item, thisIndex) => {
      if (index === thisIndex) {
        item = { ...item,
          ...e
        };
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

  const deleteOption = index => {
    const deleteOptions = options.map((item, thisIndex) => {
      if (index === thisIndex) {
        options.splice(index, 1);
        item = {
          options
        };
      }

      return item;
    });
    setState({
      optionsstate: deleteOptions
    });
    setAttributes({
      deleteOptions
    });
  };

  const isRequired = radioRequired ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('required', 'ultimate-addons-for-gutenberg') : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-forms-radio-wrap', 'uagb-forms-field-set', `uagb-block-${block_id}`)
  }, isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-required-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Required', 'ultimate-addons-for-gutenberg'),
    checked: radioRequired,
    onChange: () => setAttributes({
      radioRequired: !radioRequired
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
    tagName: "div",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Radio Title', 'ultimate-addons-for-gutenberg'),
    value: radioName,
    onChange: value => setAttributes({
      radioName: value
    }),
    className: `uagb-forms-radio-label ${isRequired} uagb-forms-input-label`,
    multiline: false,
    id: block_id
  }), isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-radio-controls"
  }, editView, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isSecondary: true,
    onClick: addOption
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(' + Add Option ', 'ultimate-addons-for-gutenberg'))))), !isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RadioView, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=radio-render.js.map