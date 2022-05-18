(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/buttons-child/render"],{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");
/**
 * BLOCK: Buttons Child - Edit Class
 */
// Import classes







const Render = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_5__["useDeviceType"])();
  const {
    className,
    label,
    icon,
    iconPosition,
    removeText,
    noFollow
  } = attributes;

  const iconHtml = curr_position => {
    if ('' !== icon && curr_position === iconPosition) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-button__icon', `uagb-button__icon-position-${iconPosition}`)
      }, Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(icon));
    }

    return null;
  };

  const btnText = () => {
    if (!removeText) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add text…'),
        value: label,
        tagName: "div",
        onChange: value => {
          setAttributes({
            label: value
          });
        },
        allowedFormats: ['bold', 'italic', 'strikethrough'],
        className: "uagb-button__link",
        rel: noFollow ? 'nofollow noopener' : 'follow noopener',
        keepPlaceholderOnFocus: true
      });
    }

    return '';
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-buttons__outer-wrap', `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${props.clientId.substr(0, 8)}`, 'wp-block-button')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "uagb-button__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-buttons-repeater', 'wp-block-button__link')
  }, iconHtml('before'), btnText(), iconHtml('after'))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map