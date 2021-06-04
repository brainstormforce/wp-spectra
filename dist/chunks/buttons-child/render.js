(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/buttons-child/render"],{

/***/ "./src/blocks/buttons-child/render.js":
/*!********************************************!*\
  !*** ./src/blocks/buttons-child/render.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * BLOCK: Buttons Child - Edit Class
 */
// Import classes





var Render = function Render(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      deviceType = _props.deviceType;
  var className = attributes.className,
      label = attributes.label,
      inheritFromTheme = attributes.inheritFromTheme,
      icon = attributes.icon,
      iconPosition = attributes.iconPosition;

  var iconHtml = function iconHtml(curr_position) {
    if ('' !== icon && curr_position === iconPosition) {
      return /*#__PURE__*/React.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("uagb-button__icon", "uagb-button__icon-position-".concat(iconPosition))
      }, Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(icon));
    }

    return null;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-buttons__outer-wrap', "uagb-editor-preview-mode-".concat(deviceType.toLowerCase()), "uagb-block-".concat(props.clientId.substr(0, 8)), inheritFromTheme ? 'wp-block-button' : null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "uagb-button__wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-buttons-repeater', inheritFromTheme ? 'wp-block-button__link' : null)
  }, iconHtml('before'), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add text…'),
    value: label,
    tagName: "div",
    onChange: function onChange(value) {
      setAttributes({
        label: value
      });
    },
    allowedFormats: ['bold', 'italic', 'strikethrough'],
    className: "uagb-button__link",
    rel: "noopener noreferrer",
    keepPlaceholderOnFocus: true
  }), iconHtml('after'))));
};

/* harmony default export */ __webpack_exports__["default"] = (React.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map