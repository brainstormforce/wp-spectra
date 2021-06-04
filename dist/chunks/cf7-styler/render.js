(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/cf7-styler/render"],{

/***/ "./src/blocks/cf7-styler/editor.lazy.scss":
/*!************************************************!*\
  !*** ./src/blocks/cf7-styler/editor.lazy.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (8:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|  */\n| \n> .wp-block-uagb-cf7-styler {\n| \n| \t.wpcf7 form {");

/***/ }),

/***/ "./src/blocks/cf7-styler/render.js":
/*!*****************************************!*\
  !*** ./src/blocks/cf7-styler/render.js ***!
  \*****************************************/
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
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/cf7-styler/editor.lazy.scss");
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);






var Render = function Render(props) {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3___default.a.use();
    return function () {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3___default.a.unuse();
    };
  }, []);
  props = props.parentProps;
  var _props = props,
      className = _props.className,
      attributes = _props.attributes;
  var formId = attributes.formId,
      align = attributes.align,
      isHtml = attributes.isHtml,
      formJson = attributes.formJson,
      fieldStyle = attributes.fieldStyle,
      buttonAlignment = attributes.buttonAlignment,
      enableOveride = attributes.enableOveride,
      validationMsgPosition = attributes.validationMsgPosition,
      enableHighlightBorder = attributes.enableHighlightBorder;
  /*
   * Event to set Image as while adding.
   */

  var onSelectForm = function onSelectForm(id) {
    var formId = props.attributes.formId;
    var _props2 = props,
        setAttributes = _props2.setAttributes,
        setState = _props2.setState;

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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Placeholder"], {
      icon: "admin-post",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select a Contact Form 7', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      value: formId,
      onChange: onSelectForm,
      options: uagb_blocks_info.cf7_forms
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-cf7-styler__outer-wrap', "uagb-block-".concat(props.clientId.substr(0, 8)))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("uagb-cf7-styler__align-".concat(align), "uagb-cf7-styler__field-style-".concat(fieldStyle), "uagb-cf7-styler__btn-align-".concat(buttonAlignment), "uagb-cf7-styler__highlight-style-".concat(validationMsgPosition), enableOveride ? 'uagb-cf7-styler__check-style-enabled' : '', enableHighlightBorder ? 'uagb-cf7-styler__highlight-border' : '')
  }, isHtml && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }), isHtml == false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Placeholder"], {
    icon: "admin-post",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Loading', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map