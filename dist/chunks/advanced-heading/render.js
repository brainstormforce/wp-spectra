(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/advanced-heading/render"],{

/***/ "./src/blocks/advanced-heading/render.js":
/*!***********************************************!*\
  !*** ./src/blocks/advanced-heading/render.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var Render = function Render(props) {
  props = props.parentProps;
  var _props = props,
      _props$attributes = _props.attributes,
      block_id = _props$attributes.block_id,
      headingTitle = _props$attributes.headingTitle,
      headingDesc = _props$attributes.headingDesc,
      headingTag = _props$attributes.headingTag,
      seperatorStyle = _props$attributes.seperatorStyle,
      setAttributes = _props.setAttributes,
      className = _props.className,
      deviceType = _props.deviceType;
  var headingText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: headingTag,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Write a Heading', 'ultimate-addons-for-gutenberg'),
    value: headingTitle,
    className: "uagb-heading-text",
    multiline: false,
    onChange: function onChange(value) {
      setAttributes({
        headingTitle: value
      });
    }
  });
  var separator = seperatorStyle !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "uagb-separator-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "uagb-separator"
  }));
  var descText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: "p",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Write a Description', 'ultimate-addons-for-gutenberg'),
    value: headingDesc,
    className: "uagb-desc-text",
    onChange: function onChange(value) {
      return setAttributes({
        headingDesc: value
      });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, "uagb-editor-preview-mode-".concat(deviceType.toLowerCase()), "uagb-block-".concat(block_id))
  }, headingText, separator, descText);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map