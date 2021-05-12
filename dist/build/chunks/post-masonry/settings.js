(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/post-masonry/settings"],{

/***/ "./src/blocks/post/post-masonry/settings.js":
/*!**************************************************!*\
  !*** ./src/blocks/post/post-masonry/settings.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_typography_fontloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _wp$blockEditor = wp.blockEditor,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls;
var ToolbarGroup = wp.components.ToolbarGroup;

var Settings = function Settings(props) {
  var _props = props,
      state = _props.state,
      togglePreview = _props.togglePreview,
      inspectorControls = _props.inspectorControls;
  props = props.parentProps;
  var _props2 = props,
      attributes = _props2.attributes,
      categoriesList = _props2.categoriesList,
      setAttributes = _props2.setAttributes,
      taxonomyList = _props2.taxonomyList;
  var align = attributes.align,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleLoadGoogleFonts = attributes.titleLoadGoogleFonts,
      metaFontFamily = attributes.metaFontFamily,
      metaFontWeight = attributes.metaFontWeight,
      metaLoadGoogleFonts = attributes.metaLoadGoogleFonts,
      excerptFontFamily = attributes.excerptFontFamily,
      excerptFontWeight = attributes.excerptFontWeight,
      excerptLoadGoogleFonts = attributes.excerptLoadGoogleFonts,
      ctaFontFamily = attributes.ctaFontFamily,
      ctaFontWeight = attributes.ctaFontWeight,
      ctaLoadGoogleFonts = attributes.ctaLoadGoogleFonts;
  var loadTitleGoogleFonts;
  var loadMetaGoogleFonts;
  var loadExcerptGoogleFonts;
  var loadCtaGoogleFonts;

  if (titleLoadGoogleFonts == true) {
    var titleconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      config: titleconfig
    });
  }

  if (metaLoadGoogleFonts == true) {
    var metaconfig = {
      google: {
        families: [metaFontFamily + (metaFontWeight ? ':' + metaFontWeight : '')]
      }
    };
    loadMetaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      config: metaconfig
    });
  }

  if (excerptLoadGoogleFonts == true) {
    var excerptconfig = {
      google: {
        families: [excerptFontFamily + (excerptFontWeight ? ':' + excerptFontWeight : '')]
      }
    };
    loadExcerptGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      config: excerptconfig
    });
  }

  if (ctaLoadGoogleFonts == true) {
    var ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      config: ctaconfig
    });
  }

  var getBlockControls = function getBlockControls() {
    var isEditing = state.isEditing;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ToolbarGroup, {
      controls: [{
        icon: 'edit',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Edit'),
        onClick: function onClick() {
          return togglePreview();
        },
        isActive: isEditing
      }]
    });
  };

  var taxonomyListOptions = [];
  var categoryListOptions = [{
    value: '',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('All', 'ultimate-addons-for-gutenberg')
  }];

  if ('' != taxonomyList) {
    Object.keys(taxonomyList).map(function (item, thisIndex) {
      return taxonomyListOptions.push({
        value: taxonomyList[item].name,
        label: taxonomyList[item].label
      });
    });
  }

  if ('' != categoriesList) {
    Object.keys(categoriesList).map(function (item, thisIndex) {
      return categoryListOptions.push({
        value: categoriesList[item].id,
        label: categoriesList[item].name
      });
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, inspectorControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BlockControls, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BlockAlignmentToolbar, {
    value: align,
    onChange: function onChange(value) {
      setAttributes({
        align: value
      });
    },
    controls: ['left', 'center', 'right']
  }), getBlockControls()), loadTitleGoogleFonts, loadMetaGoogleFonts, loadExcerptGoogleFonts, loadCtaGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map