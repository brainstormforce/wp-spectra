(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/gf-styler/render"],{

/***/ "./src/blocks/gf-styler/editor.lazy.scss":
/*!***********************************************!*\
  !*** ./src/blocks/gf-styler/editor.lazy.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (8:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|  */\n| \n> .wp-block-uagb-gf-styler {\n| \t.uagb-gf-styler__gform-heading-none .gform_heading,\n| \t.uagb-gf-styler__gform-heading-no .gform_heading,");

/***/ }),

/***/ "./src/blocks/gf-styler/render.js":
/*!****************************************!*\
  !*** ./src/blocks/gf-styler/render.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/gf-styler/editor.lazy.scss");
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__);






var Render = function Render(props) {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(function () {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4___default.a.use();
    return function () {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4___default.a.unuse();
    };
  }, []);
  props = props.parentProps;
  var _props = props,
      className = _props.className,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes; // Setup the attributes.

  var formId = attributes.formId,
      align = attributes.align,
      isHtml = attributes.isHtml,
      formJson = attributes.formJson,
      titleDescStyle = attributes.titleDescStyle,
      fieldStyle = attributes.fieldStyle,
      buttonAlignment = attributes.buttonAlignment,
      enableLabel = attributes.enableLabel,
      enableOveride = attributes.enableOveride,
      advancedValidationSettings = attributes.advancedValidationSettings;
  /*
   * Event to set Image as while adding.
   */

  var onSelectForm = function onSelectForm(id) {
    if (!id) {
      setAttributes({
        isHtml: false
      });
      setAttributes({
        formId: null
      });
      return;
    }

    setAttributes({
      isHtml: false
    });
    setAttributes({
      formId: id
    });
  };

  var html = '';

  if (formJson && formJson.data.html) {
    html = formJson.data.html;
  }

  if (formId == 0) {
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
      icon: "admin-post",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select a Gravity Form', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      value: formId,
      onChange: onSelectForm,
      options: uagb_blocks_info.gf_forms
    }));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-gf-styler__outer-wrap', "uagb-block-".concat(props.clientId.substr(0, 8)))
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("uagb-gf-styler__align-".concat(align), "uagb-gf-styler__field-style-".concat(fieldStyle), "uagb-gf-styler__btn-align-".concat(buttonAlignment), "uagb-gf-styler__gform-heading-".concat(titleDescStyle), enableOveride ? 'uagb-gf-styler__check-style-enabled' : '', enableLabel ? 'uagb-gf-styler__hide-label' : '', advancedValidationSettings ? 'uagb-gf-styler__error-yes' : '')
  }, isHtml && /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }), isHtml == false && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Placeholder"], {
    icon: "admin-post",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Loading", 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Spinner"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (React.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map