(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/form/accept-settings"],{

/***/ "./src/blocks/forms/child-blocks/accept/settings.js":
/*!**********************************************************!*\
  !*** ./src/blocks/forms/child-blocks/accept/settings.js ***!
  \**********************************************************/
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
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl;
var InspectorControls = wp.blockEditor.InspectorControls;

var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes;
  var acceptRequired = attributes.acceptRequired,
      acceptText = attributes.acceptText,
      showLink = attributes.showLink,
      linkLabel = attributes.linkLabel,
      link = attributes.link,
      linkInNewTab = attributes.linkInNewTab;

  var acceptInspectorControls = function acceptInspectorControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Required', 'ultimate-addons-for-gutenberg'),
      checked: acceptRequired,
      onChange: function onChange() {
        return setAttributes({
          acceptRequired: !acceptRequired
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextareaControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Acceptance Text', 'ultimate-addons-for-gutenberg'),
      help: "Label to display as acceptance message.",
      value: acceptText,
      onChange: function onChange(value) {
        return setAttributes({
          acceptText: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Privacy Link', 'ultimate-addons-for-gutenberg'),
      checked: showLink,
      onChange: function onChange() {
        return setAttributes({
          showLink: !showLink
        });
      }
    }), showLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link Label', 'ultimate-addons-for-gutenberg'),
      value: linkLabel,
      onChange: function onChange(value) {
        return setAttributes({
          linkLabel: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextControl, {
      className: "uagb-forms-editor-privacy-link",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link', 'ultimate-addons-for-gutenberg'),
      value: link,
      onChange: function onChange(value) {
        return setAttributes({
          link: value
        });
      },
      help: '' === link ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a valid link.', 'ultimate-addons-for-gutenberg') : ''
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new tab', 'ultimate-addons-for-gutenberg'),
      checked: linkInNewTab,
      onChange: function onChange() {
        return setAttributes({
          linkInNewTab: !linkInNewTab
        });
      }
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InspectorControls, null, acceptInspectorControls()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=accept-settings.js.map