(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/review/settings"],{

/***/ "./blocks-config/utils/Helpers.js":
/*!****************************************!*\
  !*** ./blocks-config/utils/Helpers.js ***!
  \****************************************/
/*! exports provided: getImageSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSize", function() { return getImageSize; });
/**
 * Get Image Sizes and return an array of Size.
 *
 * @param {Object} sizes - The sizes object.
 * @return {Object} sizeArr - The sizeArr object.
 */
function getImageSize(sizes) {
  const sizeArr = [];

  for (const size in sizes) {
    if (sizes.hasOwnProperty(size)) {
      const p = {
        value: size,
        label: size
      };
      sizeArr.push(p);
    }
  }

  return sizeArr;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss ***!
  \******************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".uagb-bg-image {\n  display: flex; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    border-radius: 2px;\n    background-color: #f0f0f0;\n    min-height: 90px;\n    padding: 8px 0;\n    text-align: center;\n    display: flex;\n    width: 100%;\n    transition: all 0.1s ease-out;\n    box-shadow: 0 0 0 0 #0085ba;\n    margin-top: 10px;\n    align-items: center;\n    justify-content: center; }\n    .uagb-bg-image .components-button.is-destructive:hover:not(:disabled) {\n      color: #710d0d;\n      box-shadow: inset 0 0 0 0 #710d0d; }\n    .uagb-bg-image .components-button.is-link.is-destructive:hover:not(:disabled) {\n      background: #f0f0f0; }\n    .uagb-bg-image .components-button.is-link.is-destructive:focus:not(:disabled) {\n      outline: none; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 0; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n\n.uag-background-image .uagb-bg-image,\n.uag-background-video .uagb-bg-image {\n  display: block; }\n  .uag-background-image .uagb-bg-image .components-button,\n  .uag-background-video .uagb-bg-image .components-button {\n    min-height: 55px; }\n  .uag-background-image .uagb-bg-image .components-button:last-child,\n  .uag-background-video .uagb-bg-image .components-button:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n", "",{"version":3,"sources":["webpack://./src/components/image/editor.lazy.scss"],"names":[],"mappings":"AAAA;EACE,aAAa,EAAE;EACf;IACE,SAAS;IACT,kBAAkB;IAClB,yBAAyB;IACzB,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,6BAA6B;IAC7B,2BAA2B;IAC3B,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB,EAAE;IACzB;MACE,cAAc;MACd,iCAAiC,EAAE;IACrC;MACE,mBAAmB,EAAE;IACvB;MACE,aAAa,EAAE;EACnB;IACE,cAAc,EAAE;;AAEpB;;;;;EAKE,gBAAgB,EAAE;;AAEpB;;EAEE,cAAc,EAAE;EAChB;;IAEE,gBAAgB,EAAE;EACpB;;IAEE,cAAc;IACd,aAAa,EAAE","sourcesContent":[".uagb-bg-image {\n  display: flex; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    border-radius: 2px;\n    background-color: #f0f0f0;\n    min-height: 90px;\n    padding: 8px 0;\n    text-align: center;\n    display: flex;\n    width: 100%;\n    transition: all 0.1s ease-out;\n    box-shadow: 0 0 0 0 #0085ba;\n    margin-top: 10px;\n    align-items: center;\n    justify-content: center; }\n    .uagb-bg-image .components-button.is-destructive:hover:not(:disabled) {\n      color: #710d0d;\n      box-shadow: inset 0 0 0 0 #710d0d; }\n    .uagb-bg-image .components-button.is-link.is-destructive:hover:not(:disabled) {\n      background: #f0f0f0; }\n    .uagb-bg-image .components-button.is-link.is-destructive:focus:not(:disabled) {\n      outline: none; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 0; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n\n.uag-background-image .uagb-bg-image,\n.uag-background-video .uagb-bg-image {\n  display: block; }\n  .uag-background-image .uagb-bg-image .components-button,\n  .uag-background-video .uagb-bg-image .components-button {\n    min-height: 55px; }\n  .uag-background-image .uagb-bg-image .components-button:last-child,\n  .uag-background-video .uagb-bg-image .components-button:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/review/settings.js":
/*!***************************************!*\
  !*** ./src/blocks/review/settings.js ***!
  \***************************************/
/*! exports provided: removeFromArray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromArray", function() { return removeFromArray; });
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Utils_Helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Utils/Helpers */ "./blocks-config/utils/Helpers.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















let imageSizeOptions = [{
  value: 'thumbnail',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
}, {
  value: 'medium',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Medium', 'ultimate-addons-for-gutenberg')
}, {
  value: 'full',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Large', 'ultimate-addons-for-gutenberg')
}];
const removeFromArray = (arr, removedElems) => arr.filter(a => Array.isArray(removedElems) ? !removedElems.includes(a) : a !== removedElems);


const Settings = props => {
  props = props.parentProps; // Setup the attributes

  const {
    attributes,
    setAttributes
  } = props;
  const {
    enableSchema,
    itemType,
    itemSubtype,
    sku,
    identifier,
    identifierType,
    offerType,
    offerCurrency,
    offerStatus,
    offerPrice,
    offerExpiry,
    datepublish,
    ctaLink,
    ctaTarget,
    brand,
    headingTag,
    mainimage,
    imgSize,
    showFeature,
    showAuthor,
    starColor,
    descColor,
    titleColor,
    contentColor,
    headFontFamily,
    headFontWeight,
    headFontSizeType,
    headFontSize,
    headFontSizeMobile,
    headFontSizeTablet,
    headLineHeightType,
    headLineHeight,
    headLineHeightMobile,
    headLineHeightTablet,
    headLoadGoogleFonts,
    subHeadFontFamily,
    subHeadFontWeight,
    subHeadFontSize,
    subHeadFontSizeType,
    subHeadFontSizeMobile,
    subHeadFontSizeTablet,
    subHeadLineHeight,
    subHeadLineHeightType,
    subHeadLineHeightMobile,
    subHeadLineHeightTablet,
    subHeadLoadGoogleFonts,
    contentLoadGoogleFonts,
    contentFontFamily,
    contentFontWeight,
    contentFontSizeType,
    contentLineHeightType,
    contentFontSize,
    contentFontSizeTablet,
    contentFontSizeMobile,
    contentLineHeight,
    contentLineHeightTablet,
    contentLineHeightMobile,
    topPadding,
    bottomPadding,
    rightPadding,
    leftPadding,
    //Mobile
    paddingTopMobile,
    paddingBottomMobile,
    paddingRightMobile,
    paddingLeftMobile,
    //Tablet
    paddingTopTablet,
    paddingBottomTablet,
    paddingRightTablet,
    paddingLeftTablet,
    spacingLink,
    paddingUnit,
    mobilePaddingUnit,
    tabletPaddingUnit,
    authorColor,
    summaryColor,
    starActiveColor,
    starOutlineColor,
    enableDescription,
    enableImage,
    overallAlignment,
    isbn,
    bookAuthorName,
    reviewPublisher,
    provider,
    appCategory,
    operatingSystem,
    datecreated,
    directorname,
    headTransform,
    headDecoration,
    subHeadTransform,
    subHeadDecoration,
    contentTransform,
    contentDecoration,
    headFontStyle,
    subHeadFontStyle,
    contentFontStyle
  } = attributes;
  /*
   * Event to set Image as while adding.
   */

  const onSelectImage = media => {
    if (!media || !media.url) {
      setAttributes({
        mainimage: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      setAttributes({
        mainimage: null
      });
      return;
    }

    setAttributes({
      mainimage: media
    });
  };
  /*
   * Event to set Image as null while removing.
   */


  const onRemoveImage = () => {
    setAttributes({
      mainimage: ''
    });
  };

  let loadContentGoogleFonts;
  let loadHeadingGoogleFonts;
  let loadSubHeadingGoogleFonts;

  if (headLoadGoogleFonts === true) {
    const hconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: hconfig
    });
  }

  if (subHeadLoadGoogleFonts === true) {
    const sconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: sconfig
    });
  }

  if (contentLoadGoogleFonts === true) {
    const cconfig = {
      google: {
        families: [contentFontFamily + (contentFontWeight ? ':' + contentFontWeight : '')]
      }
    };
    loadContentGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: cconfig
    });
  }

  const toggleTarget = () => {
    setAttributes({
      ctaTarget: !ctaTarget
    });
  };

  const authorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Author', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: authorColor,
      onColorChange: value => setAttributes({
        authorColor: value
      })
    })));
  };

  const contentSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: contentColor,
      onColorChange: value => setAttributes({
        contentColor: value
      })
    })));
  };

  const summarySettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Summary', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: summaryColor,
      onColorChange: value => setAttributes({
        summaryColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: props.attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: contentLoadGoogleFonts,
        label: 'contentLoadGoogleFonts'
      },
      fontFamily: {
        value: contentFontFamily,
        label: 'contentFontFamily'
      },
      fontWeight: {
        value: contentFontWeight,
        label: 'contentFontWeight'
      },
      fontStyle: {
        value: contentFontStyle,
        label: 'contentFontStyle'
      },
      transform: {
        value: contentTransform,
        label: 'contentTransform'
      },
      decoration: {
        value: contentDecoration,
        label: 'contentDecoration'
      },
      fontSizeType: {
        value: contentFontSizeType,
        label: 'contentFontSizeType'
      },
      fontSize: {
        value: contentFontSize,
        label: 'contentFontSize'
      },
      fontSizeMobile: {
        value: contentFontSizeMobile,
        label: 'contentFontSizeMobile'
      },
      fontSizeTablet: {
        value: contentFontSizeTablet,
        label: 'contentFontSizeTablet'
      },
      lineHeightType: {
        value: contentLineHeightType,
        label: 'contentLineHeightType'
      },
      lineHeight: {
        value: contentLineHeight,
        label: 'contentLineHeight'
      },
      lineHeightMobile: {
        value: contentLineHeightMobile,
        label: 'contentLineHeightMobile'
      },
      lineHeightTablet: {
        value: contentLineHeightTablet,
        label: 'contentLineHeightTablet'
      }
    }));
  };

  const starSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Star', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Active Color', 'ultimate-addons-for-gutenberg'),
      colorValue: starColor,
      onColorChange: value => setAttributes({
        starColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inactive Color', 'ultimate-addons-for-gutenberg'),
      colorValue: starActiveColor,
      onColorChange: value => setAttributes({
        starActiveColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Outline Color', 'ultimate-addons-for-gutenberg'),
      colorValue: starOutlineColor,
      onColorChange: value => setAttributes({
        starOutlineColor: value
      })
    }));
  };

  const titleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: titleColor,
      onColorChange: value => setAttributes({
        titleColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: props.attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: headLoadGoogleFonts,
        label: 'headLoadGoogleFonts'
      },
      fontFamily: {
        value: headFontFamily,
        label: 'headFontFamily'
      },
      fontWeight: {
        value: headFontWeight,
        label: 'headFontWeight'
      },
      fontStyle: {
        value: headFontStyle,
        label: 'headFontStyle'
      },
      transform: {
        value: headTransform,
        label: 'headTransform'
      },
      decoration: {
        value: headDecoration,
        label: 'headDecoration'
      },
      fontSizeType: {
        value: headFontSizeType,
        label: 'headFontSizeType'
      },
      fontSize: {
        value: headFontSize,
        label: 'headFontSize'
      },
      fontSizeMobile: {
        value: headFontSizeMobile,
        label: 'headFontSizeMobile'
      },
      fontSizeTablet: {
        value: headFontSizeTablet,
        label: 'headFontSizeTablet'
      },
      lineHeightType: {
        value: headLineHeightType,
        label: 'headLineHeightType'
      },
      lineHeight: {
        value: headLineHeight,
        label: 'headLineHeight'
      },
      lineHeightMobile: {
        value: headLineHeightMobile,
        label: 'headLineHeightMobile'
      },
      lineHeightTablet: {
        value: headLineHeightTablet,
        label: 'headLineHeightTablet'
      }
    }));
  };

  const descriptionSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Description', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, enableDescription === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: descColor,
      onColorChange: value => setAttributes({
        descColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: props.attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: subHeadLoadGoogleFonts,
        label: 'subHeadLoadGoogleFonts'
      },
      fontFamily: {
        value: subHeadFontFamily,
        label: 'subHeadFontFamily'
      },
      fontWeight: {
        value: subHeadFontWeight,
        label: 'subHeadFontWeight'
      },
      fontStyle: {
        value: subHeadFontStyle,
        label: 'subHeadFontStyle'
      },
      transform: {
        value: subHeadTransform,
        label: 'subHeadTransform'
      },
      decoration: {
        value: subHeadDecoration,
        label: 'subHeadDecoration'
      },
      fontSizeType: {
        value: subHeadFontSizeType,
        label: 'subHeadFontSizeType'
      },
      fontSize: {
        value: subHeadFontSize,
        label: 'subHeadFontSize'
      },
      fontSizeMobile: {
        value: subHeadFontSizeMobile,
        label: 'subHeadFontSizeMobile'
      },
      fontSizeTablet: {
        value: subHeadFontSizeTablet,
        label: 'subHeadFontSizeTablet'
      },
      lineHeightType: {
        value: subHeadLineHeightType,
        label: 'subHeadLineHeightType'
      },
      lineHeight: {
        value: subHeadLineHeight,
        label: 'subHeadLineHeight'
      },
      lineHeightMobile: {
        value: subHeadLineHeightMobile,
        label: 'subHeadLineHeightMobile'
      },
      lineHeightTablet: {
        value: subHeadLineHeightTablet,
        label: 'subHeadLineHeightTablet'
      }
    })));
  };

  const schemaSettings = () => {
    if (true === enableSchema) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Schema', 'ultimate-addons-for-gutenberg'),
        initialOpen: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Item Type', 'ultimate-addons-for-gutenberg'),
        value: itemType,
        onChange: value => {
          setAttributes({
            itemType: value
          });

          if (itemType === 'Movie') {
            setAttributes({
              enableImage: true
            });
          }

          if (itemType === 'Course') {
            setAttributes({
              enableDescription: true
            });
          }

          if (!subtypeCategories.hasOwnProperty(itemType) || !subtypeCategories[itemType].includes(itemSubtype)) {
            setAttributes({
              itemSubtype: 'None'
            });
          }
        },
        options: [{
          value: 'Book',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Book', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'Course',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Course', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'Movie',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Movie', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'Product',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Product', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'SoftwareApplication',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Software Application', 'ultimate-addons-for-gutenberg')
        }]
      }), subtypeCategories.hasOwnProperty(itemType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Item Subtype', 'ultimate-addons-for-gutenberg'),
        options: [{
          value: 'none',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'ultimate-addons-for-gutenberg')
        }, ...subtypeCategories[itemType]],
        value: itemSubtype,
        onChange: value => setAttributes({
          itemSubtype: value
        })
      }), itemTypeExtras, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Review Publisher', 'ultimate-addons-for-gutenberg'),
        value: reviewPublisher,
        onChange: value => setAttributes({
          reviewPublisher: value
        }),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: This is a mandatory field for the Review schema', 'ultimate-addons-for-gutenberg')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date Of Publish', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["DateTimePicker"], {
        className: "uagb-date-picker",
        currentDate: datepublish,
        onChange: value => setAttributes({
          datepublish: value
        }),
        is12Hour: true
      }), ['Product', 'SoftwareApplication'].includes(itemType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, ['Product'].includes(itemType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Brand', 'ultimate-addons-for-gutenberg'),
        value: brand,
        onChange: value => setAttributes({
          brand: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('SKU', 'ultimate-addons-for-gutenberg'),
        value: sku,
        onChange: value => setAttributes({
          sku: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Identifier', 'ultimate-addons-for-gutenberg'),
        value: identifier,
        onChange: value => setAttributes({
          identifier: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Identifier Type', 'ultimate-addons-for-gutenberg'),
        value: identifierType,
        options: ['nsn', 'mpn', 'gtin8', 'gtin12', 'gtin13', 'gtin14', 'gtin'].map(a => ({
          label: a.toUpperCase(),
          value: a
        })),
        onChange: value => setAttributes({
          identifierType: value
        })
      })), ['Product', 'SoftwareApplication'].includes(itemType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Offer Currency', 'ultimate-addons-for-gutenberg'),
        value: offerCurrency,
        onChange: value => setAttributes({
          offerCurrency: value
        })
      })), offerType === 'Offer' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Offer Price', 'ultimate-addons-for-gutenberg'),
        value: offerPrice,
        onChange: value => setAttributes({
          offerPrice: value
        }),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: This is a mandatory field for the Review schema', 'ultimate-addons-for-gutenberg')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Offer Status'),
        value: offerStatus,
        options: [{
          value: 'https://schema.org/Discontinued',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Discontinued', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/InStock',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('In Stock', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/InStoreOnly',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('In Store Only', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/LimitedAvailability',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Limited Availability', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/OnlineOnly',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Online Only', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/OutOfStock',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Out Of Stock', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/PreOrder',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Pre Order', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/PreSale',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Pre Sale', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/SoldOut',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Sold Out', 'ultimate-addons-for-gutenberg')
        }],
        onChange: value => props.setAttributes({
          offerStatus: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Price Valid Until', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["DateTimePicker"], {
        className: "uagb-date-picker",
        currentDate: offerExpiry,
        onChange: value => setAttributes({
          offerExpiry: value
        }),
        is12Hour: true
      }))));
    }
  };

  const overallPadding = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: topPadding,
        label: 'topPadding'
      },
      valueRight: {
        value: rightPadding,
        label: 'rightPadding'
      },
      valueBottom: {
        value: bottomPadding,
        label: 'bottomPadding'
      },
      valueLeft: {
        value: leftPadding,
        label: 'leftPadding'
      },
      valueTopTablet: {
        value: paddingTopTablet,
        label: 'paddingTopTablet'
      },
      valueRightTablet: {
        value: paddingRightTablet,
        label: 'paddingRightTablet'
      },
      valueBottomTablet: {
        value: paddingBottomTablet,
        label: 'paddingBottomTablet'
      },
      valueLeftTablet: {
        value: paddingLeftTablet,
        label: 'paddingLeftTablet'
      },
      valueTopMobile: {
        value: paddingTopMobile,
        label: 'paddingTopMobile'
      },
      valueRightMobile: {
        value: paddingRightMobile,
        label: 'paddingRightMobile'
      },
      valueBottomMobile: {
        value: paddingBottomMobile,
        label: 'paddingBottomMobile'
      },
      valueLeftMobile: {
        value: paddingLeftMobile,
        label: 'paddingLeftMobile'
      },
      unit: {
        value: paddingUnit,
        label: 'paddingUnit'
      },
      mUnit: {
        value: mobilePaddingUnit,
        label: 'mobilePaddingUnit'
      },
      tUnit: {
        value: tabletPaddingUnit,
        label: 'tabletPaddingUnit'
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: 'spacingLink'
      }
    })));
  };

  const generalSettings = () => {
    if (mainimage && mainimage.sizes) {
      imageSizeOptions = Object(_Utils_Helpers__WEBPACK_IMPORTED_MODULE_12__["getImageSize"])(mainimage.sizes);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Review Title Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingTag,
        label: 'headingTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: overallAlignment,
        label: 'overallAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Enable Schema Support', 'ultimate-addons-for-gutenberg'),
      checked: enableSchema,
      onChange: () => setAttributes({
        enableSchema: !enableSchema
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show Review Description', 'ultimate-addons-for-gutenberg'),
      checked: enableDescription,
      onChange: () => setAttributes({
        enableDescription: !enableDescription
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: This is a mandatory field for the Review schema.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show Review Author', 'ultimate-addons-for-gutenberg'),
      checked: showAuthor,
      onChange: () => setAttributes({
        showAuthor: !showAuthor
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: This is a mandatory field for the Review schema.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show Ratings', 'ultimate-addons-for-gutenberg'),
      checked: showFeature,
      onChange: () => setAttributes({
        showFeature: !showFeature
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: Add feature/section ratings separately.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Show Review Image', 'ultimate-addons-for-gutenberg'),
      checked: enableImage,
      onChange: () => setAttributes({
        enableImage: !enableImage
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: This is a mandatory field for the Review schema.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Link')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
      value: ctaLink,
      onChange: value => setAttributes({
        ctaLink: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Open in new window', 'ultimate-addons-for-gutenberg'),
      checked: ctaTarget,
      onChange: toggleTarget
    }));
  };

  const imageSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_15__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onSelectImage: onSelectImage,
      backgroundImage: mainimage,
      onRemoveImage: onRemoveImage
    }), mainimage && mainimage !== 'null' && mainimage.url !== 'null' && mainimage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      options: imageSizeOptions,
      value: imgSize,
      onChange: value => setAttributes({
        imgSize: value
      })
    })));
  };

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["BlockControls"], {
      key: "index"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["AlignmentToolbar"], {
      value: overallAlignment,
      onChange: value => setAttributes({
        overallAlignment: value
      })
    }));
  };

  let itemTypeExtras;
  const subtypeCategories = {
    Book: [{
      value: 'Audiobook',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Audio book', 'ultimate-addons-for-gutenberg')
    }],
    Product: [{
      value: 'IndividualProduct',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Individual Product', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ProductCollection',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Product Collection', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ProductGroup',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Product Group', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ProductModel',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Product Model', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'SomeProducts',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Some Products', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'Vehicle',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Vehicle', 'ultimate-addons-for-gutenberg')
    }],
    SoftwareApplication: [{
      value: 'MobileApplication',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Mobile Application', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'VideoGame',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Video Game', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'WebApplication',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Web Application', 'ultimate-addons-for-gutenberg')
    }]
  };

  switch (itemType) {
    default:
      //empty
      break;

    case 'Book':
      itemTypeExtras = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('ISBN', 'ultimate-addons-for-gutenberg'),
        value: isbn,
        onChange: value => setAttributes({
          isbn: value
        }),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: This is a mandatory field for the Review schema', 'ultimate-addons-for-gutenberg')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Book author name', 'ultimate-addons-for-gutenberg'),
        value: bookAuthorName,
        onChange: value => setAttributes({
          bookAuthorName: value
        }),
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Note: This is a mandatory field for the Review schema', 'ultimate-addons-for-gutenberg')
      }));
      break;

    case 'Course':
      itemTypeExtras = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Provider', 'ultimate-addons-for-gutenberg'),
        value: provider,
        onChange: value => setAttributes({
          provider: value
        })
      }));
      break;

    case 'SoftwareApplication':
      itemTypeExtras = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Application Category', 'ultimate-addons-for-gutenberg'),
        value: appCategory,
        onChange: value => setAttributes({
          appCategory: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Operating System', 'ultimate-addons-for-gutenberg'),
        value: operatingSystem,
        onChange: value => setAttributes({
          operatingSystem: value
        })
      }));
      break;

    case 'Movie':
      itemTypeExtras = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Director Name', 'ultimate-addons-for-gutenberg'),
        value: directorname,
        onChange: value => setAttributes({
          directorname: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Date of create')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["DateTimePicker"], {
        currentDate: datecreated,
        onChange: value => setAttributes({
          datecreated: value
        }),
        is12Hour: true
      }));
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, generalSettings(), enableImage === true && imageSettings(), schemaSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, titleSettings(), enableDescription && descriptionSettings(), showAuthor === true && authorSettings(), showFeature === true && contentSettings(), summarySettings(), starSettings(), overallPadding()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
    parentProps: props
  })))), loadHeadingGoogleFonts, loadSubHeadingGoogleFonts, loadContentGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/image/editor.lazy.scss":
/*!***********************************************!*\
  !*** ./src/components/image/editor.lazy.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss");

            

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

/***/ "./src/components/image/index.js":
/*!***************************************!*\
  !*** ./src/components/image/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/image/editor.lazy.scss");






const UAGImage = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].unuse();
    };
  }, []);
  const {
    onSelectImage,
    backgroundImage,
    onRemoveImage,
    showVideoInput,
    label,
    disableRemove = false,
    allow = ['image']
  } = props; // Need to refactor this code as per multi-image select for more diversity.

  let labelText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image', 'ultimate-addons-for-gutenberg');

  let selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Image', 'ultimate-addons-for-gutenberg');

  let replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace Image', 'ultimate-addons-for-gutenberg');

  let removeImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Image', 'ultimate-addons-for-gutenberg');

  let allowedTypes = ['image'];

  if (showVideoInput) {
    labelText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Video', 'ultimate-addons-for-gutenberg');
    selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Video', 'ultimate-addons-for-gutenberg');
    replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace Video', 'ultimate-addons-for-gutenberg');
    removeImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Video', 'ultimate-addons-for-gutenberg');
    allowedTypes = ['video'];
  }

  labelText = label ? label : labelText;
  labelText = false === label ? label : labelText; // Newer Dynamic Code here ( Currently used in Lottie Block )

  if (label === 'Lottie Animation') {
    // No Template Literals due to @wordpress/i18n-no-variables
    selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Lottie Animation', 'ultimate-addons-for-gutenberg');
    replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace Lottie Animation', 'ultimate-addons-for-gutenberg');
    removeImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Lottie Animation', 'ultimate-addons-for-gutenberg');
    allowedTypes = allow;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    className: "editor-bg-image-control",
    id: `uagb-option-selector-${label}`,
    label: labelText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "uagb-bg-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    title: selectImageLabel,
    onSelect: onSelectImage,
    allowedTypes: allowedTypes,
    value: backgroundImage,
    render: _ref => {
      let {
        open
      } = _ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSecondary: true,
        onClick: open
      }, !(backgroundImage !== null && backgroundImage !== void 0 && backgroundImage.url) ? selectImageLabel : replaceImageLabel);
    }
  }), !disableRemove && (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "uagb-rm-btn",
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, removeImageLabel), props.help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "uag-control-help-notice"
  }, props.help)));
};

/* harmony default export */ __webpack_exports__["default"] = (UAGImage);

/***/ }),

/***/ "./src/components/typography/fontloader.js":
/*!*************************************************!*\
  !*** ./src/components/typography/fontloader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
var _PropTypes$object, _PropTypes$func;

if (googlefonts === undefined) {
  var googlefonts = []; // eslint-disable-line no-var
}




const statuses = {
  inactive: 'inactive',
  active: 'active',
  loading: 'loading'
};

const noop = () => {};

const WebfontLoader = props => {
  const [value, setValue] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const status = undefined;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    loadFonts();
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const {
      onStatus,
      config
    } = props;

    if (status !== value.status) {
      onStatus(value.status);
    }

    if (config !== value.config) {
      loadFonts();
    }
  }, [props]);

  const handleLoading = () => {
    setValue({
      status: statuses.loading
    });
  };

  const addFont = font => {
    if (!googlefonts.includes(font)) {
      googlefonts.push(font);
    }
  };

  const handleActive = () => {
    setValue({
      status: statuses.active
    });
  };

  const handleInactive = () => {
    setValue({
      status: statuses.inactive
    });
  };

  const loadFonts = () => {
    if (!googlefonts.includes(props.config.google.families[0])) {
      webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({ ...props.config,
        loading: handleLoading,
        active: handleActive,
        inactive: handleInactive
      });
      addFont(props.config.google.families[0]);
    }
  };

  const {
    children
  } = props;
  return children || null;
};

WebfontLoader.propTypes = {
  config: (_PropTypes$object = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object) === null || _PropTypes$object === void 0 ? void 0 : _PropTypes$object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  onStatus: (_PropTypes$func = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func) === null || _PropTypes$func === void 0 ? void 0 : _PropTypes$func.isRequired
};
WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ })

}]);
//# sourceMappingURL=settings.js.map