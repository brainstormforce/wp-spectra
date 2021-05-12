(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/post-masonry/render"],{

/***/ "./src/blocks/post/post-masonry/render.js":
/*!************************************************!*\
  !*** ./src/blocks/post/post-masonry/render.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../function */ "./src/blocks/post/function.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Blog = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["lazy"])(function () {
  return Promise.all(/*! import() | chunks/post-masonry/react-masonry-component */[__webpack_require__.e("vendors~chunks/post-masonry/react-masonry-component"), __webpack_require__.e("chunks/post-masonry/react-masonry-component")]).then(__webpack_require__.bind(null, /*! ./blog */ "./src/blocks/post/post-masonry/blog.js"));
});
var createBlock = wp.blocks.createBlock;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    Button = _wp$components.Button,
    Disabled = _wp$components.Disabled,
    Tip = _wp$components.Tip;

var Render = function Render(props) {
  var _props = props,
      state = _props.state,
      setState = _props.setState,
      togglePreview = _props.togglePreview;
  props = props.parentProps;
  var _props2 = props,
      categoriesList = _props2.categoriesList,
      latestPosts = _props2.latestPosts,
      attributes = _props2.attributes,
      deviceType = _props2.deviceType;

  var renderEditMode = function renderEditMode() {
    var onDone = function onDone() {
      var _props3 = props,
          block = _props3.block,
          setAttributes = _props3.setAttributes;
      setAttributes({
        layoutConfig: Object(_function__WEBPACK_IMPORTED_MODULE_0__["getPostLayoutConfig"])(block)
      });
      setState({
        innerBlocks: block
      });
      togglePreview();
    };

    var onCancel = function onCancel() {
      var _props4 = props,
          replaceInnerBlocks = _props4.replaceInnerBlocks;
      var innerBlocks = state.innerBlocks;
      replaceInnerBlocks(props.clientId, innerBlocks);
      togglePreview();
    };

    var onReset = function onReset() {
      var _props5 = props,
          block = _props5.block,
          replaceInnerBlocks = _props5.replaceInnerBlocks;
      var newBlocks = [];
      _function__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_POST_LIST_LAYOUT"].map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            attributes = _ref2[1];

        newBlocks.push(createBlock(name, attributes));
        return true;
      });
      replaceInnerBlocks(props.clientId, newBlocks);
      setState({
        innerBlocks: block
      });
    };

    var InnerBlockProps = {
      template: props.attributes.layoutConfig,
      templateLock: false,
      allowedBlocks: Object.keys(Object(_function__WEBPACK_IMPORTED_MODULE_0__["getBlockMap"])('uagb/post-masonry'))
    };

    if (props.attributes.layoutConfig.length !== 0) {
      InnerBlockProps.renderAppender = false;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Placeholder, {
      label: "Post Masonry Layout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "uagb-block-all-post-grid-item-template"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tip, null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Edit the blocks inside the preview below to change the content displayed for each post within the post grid.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_function__WEBPACK_IMPORTED_MODULE_0__["InnerBlockLayoutContextProvider"], {
      parentName: "uagb/post-masonry",
      parentClassName: "uagb-block-grid"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "uagb-post__inner-wrap uagb-post__edit-mode"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "uagb-post__text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InnerBlocks, InnerBlockProps))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "uagb-block-all-post__actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
      className: "uagb-block-all-post__done-button",
      isPrimary: true,
      onClick: onDone
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Done')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
      className: "uagb-block-all-post__cancel-button",
      isTertiary: true,
      onClick: onCancel
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cancel')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
      className: "uagb-block-all-post__reset-button",
      onClick: onReset
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reset Layout')))));
  };

  var renderViewMode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Disabled, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Blog, {
    attributes: attributes,
    className: props.className,
    latestPosts: latestPosts,
    block_id: props.clientId.substr(0, 8),
    categoriesList: categoriesList,
    deviceType: deviceType
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, state.isEditing ? renderEditMode() : renderViewMode);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map