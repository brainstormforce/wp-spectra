(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/testimonial/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/testimonial/editor.lazy.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/testimonial/editor.lazy.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0; }\n", "",{"version":3,"sources":["webpack://./src/blocks/testimonial/editor.lazy.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,cAAc,EAAE;;AAElB;EACE,iBAAiB,EAAE;;AAErB;;EAEE,mBAAmB,EAAE;;AAEvB;;EAEE,kBAAkB;EAClB,eAAe;EACf,iBAAiB,EAAE;;AAErB;EACE,SAAS,EAAE","sourcesContent":["/**\r\n * #.# Editor Styles\r\n *\r\n * CSS for just Backend enqueued after style.scss\r\n * which makes it higher in priority.\r\n */\n.gutenberg-editor-page #wpwrap ul.slick-dots {\n  margin: 0 auto; }\n\n#wpwrap .edit-post-visual-editor button.slick-arrow {\n  line-height: 16px; }\n\n.uagb-tm__desc,\n.editor-block-list__layout .uagb-tm__desc.block-editor-rich-text__editable {\n  margin-bottom: 15px; }\n\n.uagb-tm__author-name,\n.editor-block-list__layout .uagb-tm__author-name.block-editor-rich-text__editable {\n  margin-bottom: 5px;\n  font-size: 30px;\n  line-height: 16px; }\n\n#wpwrap .edit-post-visual-editor ul.slick-dots {\n  margin: 0; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/testimonial/editor.lazy.scss":
/*!*************************************************!*\
  !*** ./src/blocks/testimonial/editor.lazy.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/testimonial/editor.lazy.scss");

            

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

/***/ "./src/blocks/testimonial/render.js":
/*!******************************************!*\
  !*** ./src/blocks/testimonial/render.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/blocks/testimonial/classes.js");
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Image */ "./src/blocks/testimonial/components/Image.js");
/* harmony import */ var _components_AuthorName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AuthorName */ "./src/blocks/testimonial/components/AuthorName.js");
/* harmony import */ var _components_Company__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Company */ "./src/blocks/testimonial/components/Company.js");
/* harmony import */ var _components_Description__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Description */ "./src/blocks/testimonial/components/Description.js");
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/testimonial/editor.lazy.scss");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











var Slider = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["lazy"])(function () {
  return __webpack_require__.e(/*! import() | chunks/testimonial/react-slick */ "vendors~chunks/testimonial/react-slick").then(__webpack_require__.t.bind(null, /*! react-slick */ "./node_modules/react-slick/lib/index.js", 7));
});

var Render = function Render(props) {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(function () {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_9__["default"].use();
    return function () {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_9__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  var _props = props,
      className = _props.className,
      setAttributes = _props.setAttributes,
      attributes = _props.attributes,
      deviceType = _props.deviceType; // Setup the attributes.

  var test_block = attributes.test_block,
      imagePosition = attributes.imagePosition,
      columns = attributes.columns,
      tcolumns = attributes.tcolumns,
      mcolumns = attributes.mcolumns,
      pauseOnHover = attributes.pauseOnHover,
      infiniteLoop = attributes.infiniteLoop,
      transitionSpeed = attributes.transitionSpeed,
      arrowDots = attributes.arrowDots,
      arrowSize = attributes.arrowSize,
      arrowBorderSize = attributes.arrowBorderSize,
      arrowBorderRadius = attributes.arrowBorderRadius,
      autoplay = attributes.autoplay,
      autoplaySpeed = attributes.autoplaySpeed,
      arrowColor = attributes.arrowColor;

  var NextArrow = function NextArrow() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "button",
      "data-role": "none",
      className: "slick-next slick-arrow",
      "aria-label": "Next",
      tabIndex: "0",
      style: {
        borderColor: arrowColor,
        borderRadius: arrowBorderRadius,
        borderWidth: arrowBorderSize
      }
    }, _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].carousel_right);
  };

  var PrevArrow = function PrevArrow() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      type: "button",
      "data-role": "none",
      className: "slick-prev slick-arrow",
      "aria-label": "Previous",
      tabIndex: "0",
      style: {
        borderColor: arrowColor,
        borderRadius: arrowBorderRadius,
        borderWidth: arrowBorderSize
      }
    }, _Controls_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"].carousel_left);
  };

  var dots = 'dots' == arrowDots || 'arrows_dots' == arrowDots ? true : false;
  var arrows = 'arrows' == arrowDots || 'arrows_dots' == arrowDots ? true : false;
  var settings = {
    slidesToShow: columns,
    slidesToScroll: 1,
    autoplaySpeed: autoplaySpeed,
    autoplay: autoplay,
    infinite: infiniteLoop,
    pauseOnHover: pauseOnHover,
    speed: transitionSpeed,
    arrows: arrows,
    dots: dots,
    rtl: false,
    draggable: false,
    nextArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(NextArrow, {
      arrowSize: arrowSize
    }),
    prevArrow: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PrevArrow, {
      arrowSize: arrowSize
    }),
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: tcolumns,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: mcolumns,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-slick-carousel uagb-tm__arrow-outside', "uagb-editor-preview-mode-".concat(deviceType.toLowerCase()), "uagb-block-".concat(props.clientId.substr(0, 8)))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Slider, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('is-carousel', "uagb-tm__columns-".concat(columns), 'uagb-tm__items')
  }, settings), test_block.map(function (test, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default.a.apply(void 0, ['uagb-testimonial__wrap'].concat(_toConsumableArray(Object(_classes__WEBPACK_IMPORTED_MODULE_1__["default"])(attributes)))),
      key: 'wrap-' + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uagb-tm__content",
      key: 'tm_content-' + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uagb-tm__overlay"
    }), (imagePosition == 'top' || imagePosition == 'left') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      index_value: index
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uagb-tm__text-wrap"
    },
    /*#__PURE__*/
    // Get description.
    react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Description__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      props: props,
      index_value: index
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uagb-tm__meta-inner"
    }, imagePosition == 'bottom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      index_value: index
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uagb-testimonial-details",
      key: 'tm_wraps-' + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_AuthorName__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      props: props,
      index_value: index
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Company__WEBPACK_IMPORTED_MODULE_7__["default"], {
      attributes: attributes,
      setAttributes: setAttributes,
      props: props,
      index_value: index
    }))))), imagePosition == 'right' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
      attributes: attributes,
      index_value: index
    })));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map