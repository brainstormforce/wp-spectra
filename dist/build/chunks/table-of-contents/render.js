(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/table-of-contents/render"],{

/***/ "./src/blocks/table-of-contents/render.js":
/*!************************************************!*\
  !*** ./src/blocks/table-of-contents/render.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toc */ "./src/blocks/table-of-contents/toc.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");





var RichText = wp.blockEditor.RichText;

var Render = function Render(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      className = _props.className,
      headers = _props.headers,
      deviceType = _props.deviceType;
  var align = attributes.align,
      makeCollapsible = attributes.makeCollapsible,
      initialCollapse = attributes.initialCollapse,
      icon = attributes.icon,
      tColumnsDesktop = attributes.tColumnsDesktop,
      mappingHeaders = attributes.mappingHeaders,
      headingTitle = attributes.headingTitle;
  var icon_html = '';

  if (makeCollapsible && icon) {
    icon_html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "uag-toc__collapsible-wrap"
    }, Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_4__["default"])(icon));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, "uagb-toc__align-".concat(align), "uagb-toc__columns-".concat(tColumnsDesktop), initialCollapse ? 'uagb-toc__collapse' : '', "uagb-editor-preview-mode-".concat(deviceType.toLowerCase()), "uagb-block-".concat(props.clientId.substr(0, 8)))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-toc__wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "uagb-toc__title-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(RichText, {
    tagName: 'div',
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Table Of Contents', 'ultimate-addons-for-gutenberg'),
    value: headingTitle,
    className: "uagb-toc__title",
    onChange: function onChange(value) {
      return setAttributes({
        headingTitle: value
      });
    },
    multiline: false,
    onRemove: function onRemove() {
      return props.onReplace([]);
    }
  }), icon_html), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_toc__WEBPACK_IMPORTED_MODULE_1__["default"], {
    mappingHeaders: mappingHeaders,
    headers: headers
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map