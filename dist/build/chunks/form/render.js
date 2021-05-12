(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/form/render"],{

/***/ "./src/blocks/forms/render.js":
/*!************************************!*\
  !*** ./src/blocks/forms/render.js ***!
  \************************************/
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



var ALLOWED_BLOCKS = ['uagb/forms-name', 'uagb/forms-email', 'uagb/forms-hidden', 'uagb/forms-phone', 'uagb/forms-textarea', 'uagb/forms-url', 'uagb/forms-select', 'uagb/forms-radio', 'uagb/forms-checkbox', 'uagb/forms-toggle', 'uagb/forms-date', 'uagb/forms-accept'];
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    RichText = _wp$blockEditor.RichText;

var Render = function Render(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes;
  var block_id = attributes.block_id,
      submitButtonText = attributes.submitButtonText,
      formLabel = attributes.formLabel,
      buttonSize = attributes.buttonSize,
      reCaptchaEnable = attributes.reCaptchaEnable,
      reCaptchaType = attributes.reCaptchaType,
      reCaptchaSecretKeyV2 = attributes.reCaptchaSecretKeyV2,
      reCaptchaSiteKeyV2 = attributes.reCaptchaSiteKeyV2;
  var onSubmitClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();
  });

  var renderButtonHtml = function renderButtonHtml() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: onSubmitClick,
      className: "uagb-forms-main-submit-button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RichText, {
      tagName: "div",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Submit', 'ultimate-addons-for-gutenberg'),
      value: submitButtonText,
      onChange: function onChange(value) {
        return setAttributes({
          submitButtonText: value
        });
      },
      className: "uagb-forms-main-submit-button-text",
      multiline: false,
      allowedFormats: ['core/bold', 'core/italic', 'core/strikethrough']
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-forms__outer-wrap', "uagb-block-".concat(block_id), "uagb-forms__".concat(buttonSize, "-btn"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "uagb-forms-main-form",
    name: "uagb-form-".concat(block_id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-form-hidden-data"
  }, reCaptchaEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "hidden",
    id: "g-recaptcha-response",
    className: "uagb-forms-recaptcha"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "hidden",
    name: "uagb_forms_form_label",
    value: formLabel
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "hidden",
    name: "uagb_forms_form_id",
    value: "uagb-form-".concat(block_id)
  })), reCaptchaEnable && 'v2' === reCaptchaType && reCaptchaSiteKeyV2 && reCaptchaSecretKeyV2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "g-recaptcha uagb-forms-field-set",
    "data-sitekey": reCaptchaSiteKeyV2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-form-reacaptcha-error-".concat(block_id)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-forms-main-submit-button-wrap"
  }, renderButtonHtml()))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map