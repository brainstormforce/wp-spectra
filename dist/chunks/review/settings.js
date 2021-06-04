(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/review/settings"],{

/***/ "./src/blocks/review/settings.js":
/*!***************************************!*\
  !*** ./src/blocks/review/settings.js ***!
  \***************************************/
/*! exports provided: removeFromArray, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromArray", function() { return removeFromArray; });
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








$ = jQuery;

var imageSizeOptions = [{
  value: 'thumbnail',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
}, {
  value: 'medium',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Medium', 'ultimate-addons-for-gutenberg')
}, {
  value: 'full',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Large', 'ultimate-addons-for-gutenberg')
}];
var removeFromArray = function removeFromArray(arr, removedElems) {
  return arr.filter(function (a) {
    return Array.isArray(removedElems) ? !removedElems.includes(a) : a !== removedElems;
  });
};

var Settings = function Settings(props) {
  props = props.parentProps; // Setup the attributes

  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes;
  var enableSchema = attributes.enableSchema,
      itemType = attributes.itemType,
      itemSubtype = attributes.itemSubtype,
      sku = attributes.sku,
      identifier = attributes.identifier,
      identifierType = attributes.identifierType,
      offerType = attributes.offerType,
      offerCurrency = attributes.offerCurrency,
      offerStatus = attributes.offerStatus,
      offerPrice = attributes.offerPrice,
      offerExpiry = attributes.offerExpiry,
      datepublish = attributes.datepublish,
      ctaLink = attributes.ctaLink,
      ctaTarget = attributes.ctaTarget,
      brand = attributes.brand,
      headingTag = attributes.headingTag,
      mainimage = attributes.mainimage,
      imgSize = attributes.imgSize,
      showFeature = attributes.showFeature,
      showAuthor = attributes.showAuthor,
      starColor = attributes.starColor,
      descColor = attributes.descColor,
      titleColor = attributes.titleColor,
      contentColor = attributes.contentColor,
      headFontFamily = attributes.headFontFamily,
      headFontWeight = attributes.headFontWeight,
      headFontSubset = attributes.headFontSubset,
      headFontSizeType = attributes.headFontSizeType,
      headFontSize = attributes.headFontSize,
      headFontSizeMobile = attributes.headFontSizeMobile,
      headFontSizeTablet = attributes.headFontSizeTablet,
      headLineHeightType = attributes.headLineHeightType,
      headLineHeight = attributes.headLineHeight,
      headLineHeightMobile = attributes.headLineHeightMobile,
      headLineHeightTablet = attributes.headLineHeightTablet,
      headLoadGoogleFonts = attributes.headLoadGoogleFonts,
      subHeadFontFamily = attributes.subHeadFontFamily,
      subHeadFontWeight = attributes.subHeadFontWeight,
      subHeadFontSubset = attributes.subHeadFontSubset,
      subHeadFontSize = attributes.subHeadFontSize,
      subHeadFontSizeType = attributes.subHeadFontSizeType,
      subHeadFontSizeMobile = attributes.subHeadFontSizeMobile,
      subHeadFontSizeTablet = attributes.subHeadFontSizeTablet,
      subHeadLineHeight = attributes.subHeadLineHeight,
      subHeadLineHeightType = attributes.subHeadLineHeightType,
      subHeadLineHeightMobile = attributes.subHeadLineHeightMobile,
      subHeadLineHeightTablet = attributes.subHeadLineHeightTablet,
      subHeadLoadGoogleFonts = attributes.subHeadLoadGoogleFonts,
      contentLoadGoogleFonts = attributes.contentLoadGoogleFonts,
      contentFontFamily = attributes.contentFontFamily,
      contentFontWeight = attributes.contentFontWeight,
      contentFontSubset = attributes.contentFontSubset,
      contentFontSizeType = attributes.contentFontSizeType,
      contentLineHeightType = attributes.contentLineHeightType,
      contentFontSize = attributes.contentFontSize,
      contentFontSizeTablet = attributes.contentFontSizeTablet,
      contentFontSizeMobile = attributes.contentFontSizeMobile,
      contentLineHeight = attributes.contentLineHeight,
      contentLineHeightTablet = attributes.contentLineHeightTablet,
      contentLineHeightMobile = attributes.contentLineHeightMobile,
      contentVrPadding = attributes.contentVrPadding,
      contentHrPadding = attributes.contentHrPadding,
      authorColor = attributes.authorColor,
      summaryColor = attributes.summaryColor,
      starActiveColor = attributes.starActiveColor,
      starOutlineColor = attributes.starOutlineColor,
      enableDescription = attributes.enableDescription,
      enableImage = attributes.enableImage,
      overallAlignment = attributes.overallAlignment,
      isbn = attributes.isbn,
      bookAuthorName = attributes.bookAuthorName,
      reviewPublisher = attributes.reviewPublisher,
      provider = attributes.provider,
      appCategory = attributes.appCategory,
      operatingSystem = attributes.operatingSystem,
      datecreated = attributes.datecreated,
      directorname = attributes.directorname;
  var loadContentGoogleFonts;
  var loadHeadingGoogleFonts;
  var loadSubHeadingGoogleFonts;

  if (headLoadGoogleFonts == true) {
    var hconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: hconfig
    });
  }

  if (subHeadLoadGoogleFonts == true) {
    var sconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: sconfig
    });
  }

  if (contentLoadGoogleFonts == true) {
    var cconfig = {
      google: {
        families: [contentFontFamily + (contentFontWeight ? ':' + contentFontWeight : '')]
      }
    };
    loadContentGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: cconfig
    });
  }

  var toggleTarget = function toggleTarget() {
    var ctaTarget = props.attributes.ctaTarget;
    var _props2 = props,
        setAttributes = _props2.setAttributes;
    setAttributes({
      ctaTarget: !ctaTarget
    });
  };

  var getImageSize = function getImageSize(sizes) {
    var sizeArr = [];
    $.each(sizes, function (index, item) {
      var name = index;
      var p = {
        value: name,
        label: name
      };
      sizeArr.push(p);
    });
    return sizeArr;
  };

  var styleSettings = function styleSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Title Typography', 'ultimate-addons-for-gutenberg'),
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
      fontSubset: {
        value: headFontSubset,
        label: 'headFontSubset'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Title Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: titleColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: titleColor,
      onChange: function onChange(value) {
        return setAttributes({
          titleColor: value
        });
      },
      allowReset: true
    }), enableDescription === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Description Typography', 'ultimate-addons-for-gutenberg'),
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
      fontSubset: {
        value: subHeadFontSubset,
        label: 'subHeadFontSubset'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Description Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: descColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: descColor,
      onChange: function onChange(value) {
        return setAttributes({
          descColor: value
        });
      },
      allowReset: true
    })), showAuthor === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: authorColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: authorColor,
      onChange: function onChange(value) {
        return setAttributes({
          authorColor: value
        });
      },
      allowReset: true
    })), showFeature === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Content Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: contentColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: contentColor,
      onChange: function onChange(value) {
        return setAttributes({
          contentColor: value
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Summary Typography', 'ultimate-addons-for-gutenberg'),
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
      fontSubset: {
        value: contentFontSubset,
        label: 'contentFontSubset'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Summary Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: summaryColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: summaryColor,
      onChange: function onChange(value) {
        return setAttributes({
          summaryColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Active Star Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: starColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: starColor,
      onChange: function onChange(value) {
        return setAttributes({
          starColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Inactive Star Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: starActiveColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: starActiveColor,
      onChange: function onChange(value) {
        return setAttributes({
          starActiveColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Star Outline Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: starOutlineColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: starOutlineColor,
      onChange: function onChange(value) {
        return setAttributes({
          starOutlineColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Overall Padding (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: contentVrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          contentVrPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: contentHrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          contentHrPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }));
  };

  var schemaSettings = function schemaSettings() {
    if (true === enableSchema) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Schema', 'ultimate-addons-for-gutenberg'),
        initialOpen: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Item type', 'ultimate-addons-for-gutenberg'),
        value: itemType,
        onChange: function onChange(value) {
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
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Book', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'Course',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Course', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'Movie',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Movie', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'Product',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Product', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'SoftwareApplication',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Software Application', 'ultimate-addons-for-gutenberg')
        }]
      }), subtypeCategories.hasOwnProperty(itemType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Item subtype', 'ultimate-addons-for-gutenberg'),
        options: [{
          value: 'none',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('None', 'ultimate-addons-for-gutenberg')
        }].concat(_toConsumableArray(subtypeCategories[itemType])),
        value: itemSubtype,
        onChange: function onChange(value) {
          return setAttributes({
            itemSubtype: value
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
        className: "uagb-editor__separator"
      }), itemTypeExtras, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Review publisher', 'ultimate-addons-for-gutenberg'),
        value: reviewPublisher,
        onChange: function onChange(value) {
          return setAttributes({
            reviewPublisher: value
          });
        },
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Note: This is a mandatory field for the Review schema', 'ultimate-addons-for-gutenberg')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Date of publish', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["DateTimePicker"], {
        currentDate: datepublish,
        onChange: function onChange(value) {
          return setAttributes({
            datepublish: value
          });
        },
        is12Hour: true
      }), ['Product', 'SoftwareApplication'].includes(itemType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, ['Product'].includes(itemType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Brand', 'ultimate-addons-for-gutenberg'),
        value: brand,
        onChange: function onChange(value) {
          return setAttributes({
            brand: value
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('SKU', 'ultimate-addons-for-gutenberg'),
        value: sku,
        onChange: function onChange(value) {
          return setAttributes({
            sku: value
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Identifier', 'ultimate-addons-for-gutenberg'),
        value: identifier,
        onChange: function onChange(value) {
          return setAttributes({
            identifier: value
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Identifier type', 'ultimate-addons-for-gutenberg'),
        value: identifierType,
        options: ['nsn', 'mpn', 'gtin8', 'gtin12', 'gtin13', 'gtin14', 'gtin'].map(function (a) {
          return {
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(a.toUpperCase()),
            value: a
          };
        }),
        onChange: function onChange(value) {
          return setAttributes({
            identifierType: value
          });
        }
      })), ['Product', 'SoftwareApplication'].includes(itemType) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Offer Currency', 'ultimate-addons-for-gutenberg'),
        value: offerCurrency,
        onChange: function onChange(value) {
          return setAttributes({
            offerCurrency: value
          });
        }
      })), offerType == 'Offer' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Offer Price', 'ultimate-addons-for-gutenberg'),
        value: offerPrice,
        onChange: function onChange(value) {
          return setAttributes({
            offerPrice: value
          });
        },
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Note: This is a mandatory field for the Review schema', 'ultimate-addons-for-gutenberg')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Offer Status'),
        value: offerStatus,
        options: [{
          value: 'https://schema.org/Discontinued',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Discontinued', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/InStock',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('In Stock', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/InStoreOnly',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('In Store Only', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/LimitedAvailability',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Limited Availability', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/OnlineOnly',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Online Only', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/OutOfStock',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Out Of Stock', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/PreOrder',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pre Order', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/PreSale',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pre Sale', 'ultimate-addons-for-gutenberg')
        }, {
          value: 'https://schema.org/SoldOut',
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Sold Out', 'ultimate-addons-for-gutenberg')
        }],
        onChange: function onChange(value) {
          return props.setAttributes({
            offerStatus: value
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Price Valid Until', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["DateTimePicker"], {
        currentDate: offerExpiry,
        onChange: function onChange(value) {
          return setAttributes({
            offerExpiry: value
          });
        },
        is12Hour: true
      }))));
    }
  };

  var generalSettings = function generalSettings() {
    if (mainimage && mainimage.sizes) {
      imageSizeOptions = getImageSize(mainimage.sizes);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Review Title', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Tag', 'ultimate-addons-for-gutenberg'),
      value: headingTag,
      onChange: function onChange(value) {
        return setAttributes({
          headingTag: value
        });
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('H1')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('H2')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('H3')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('H4')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('H5')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('H6')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Link')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      value: ctaLink,
      onChange: function onChange(value) {
        return setAttributes({
          ctaLink: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Open in new window', 'ultimate-addons-for-gutenberg'),
      checked: ctaTarget,
      onChange: toggleTarget
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Show review description', 'ultimate-addons-for-gutenberg'),
      checked: enableDescription,
      onChange: function onChange(value) {
        return setAttributes({
          enableDescription: !enableDescription
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Note: This is a mandatory field for the Review schema.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Show review author', 'ultimate-addons-for-gutenberg'),
      checked: showAuthor,
      onChange: function onChange(value) {
        return setAttributes({
          showAuthor: !showAuthor
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Note: This is a mandatory field for the Review schema.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Show review image', 'ultimate-addons-for-gutenberg'),
      checked: enableImage,
      onChange: function onChange(value) {
        return setAttributes({
          enableImage: !enableImage
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Note: This is a mandatory field for the Review schema.', 'ultimate-addons-for-gutenberg')
    }), enableImage === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Image')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select Image', 'ultimate-addons-for-gutenberg'),
      onSelect: function onSelect(value) {
        return setAttributes({
          mainimage: value
        });
      },
      allowedTypes: ['image'],
      value: mainimage,
      render: function render(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          isSecondary: true,
          onClick: open
        }, !mainimage.url ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Select Image', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Replace image', 'ultimate-addons-for-gutenberg'));
      }
    }), mainimage.url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      className: "uagb-rm-btn",
      onClick: function onClick() {
        return setAttributes({
          mainimage: ''
        });
      },
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Remove Image', 'ultimate-addons-for-gutenberg')), mainimage.url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      options: imageSizeOptions,
      value: imgSize,
      onChange: function onChange(value) {
        return setAttributes({
          imgSize: value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Show ratings', 'ultimate-addons-for-gutenberg'),
      checked: showFeature,
      onChange: function onChange(value) {
        return setAttributes({
          showFeature: !showFeature
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Note: Add feature/section ratings separately.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enable schema support', 'ultimate-addons-for-gutenberg'),
      checked: enableSchema,
      onChange: function onChange(value) {
        return setAttributes({
          enableSchema: !enableSchema
        });
      }
    }));
  };

  var blockControls = function blockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockControls"], {
      key: "index"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["AlignmentToolbar"], {
      value: overallAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          overallAlignment: value
        });
      }
    }));
  };

  var itemTypeExtras;
  var subtypeCategories = {
    Book: [{
      value: 'Audiobook',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Audio book', 'ultimate-addons-for-gutenberg')
    }],
    Product: [{
      value: 'IndividualProduct',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Individual Product', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ProductCollection',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Product Collection', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ProductGroup',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Product Group', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ProductModel',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Product Model', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'SomeProducts',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Some Products', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'Vehicle',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Vehicle', 'ultimate-addons-for-gutenberg')
    }],
    SoftwareApplication: [{
      value: 'MobileApplication',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Mobile Application', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'VideoGame',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Video Game', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'WebApplication',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Web Application', 'ultimate-addons-for-gutenberg')
    }]
  };
  var unusedDefaults = ['bookAuthorName', 'isbn', 'provider', 'brand', 'sku', 'identifierType', 'identifier', 'appCategory', 'operatingSystem', 'directorname', 'datecreated'];

  switch (itemType) {
    default:
      //empty
      break;

    case 'Book':
      itemTypeExtras = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('ISBN', 'ultimate-addons-for-gutenberg'),
        value: isbn,
        onChange: function onChange(value) {
          return setAttributes({
            isbn: value
          });
        },
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Note: This is a mandatory field for the Review schema', 'ultimate-addons-for-gutenberg')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Book author name', 'ultimate-addons-for-gutenberg'),
        value: bookAuthorName,
        onChange: function onChange(value) {
          return setAttributes({
            bookAuthorName: value
          });
        },
        help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Note: This is a mandatory field for the Review schema', 'ultimate-addons-for-gutenberg')
      }));
      unusedDefaults = removeFromArray(unusedDefaults, ['isbn', 'bookAuthorName']);
      break;

    case 'Course':
      itemTypeExtras = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Provider', 'ultimate-addons-for-gutenberg'),
        value: provider,
        onChange: function onChange(value) {
          return setAttributes({
            provider: value
          });
        }
      }));
      unusedDefaults = removeFromArray(unusedDefaults, ['provider']);
      break;

    case 'SoftwareApplication':
      itemTypeExtras = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Application Category', 'ultimate-addons-for-gutenberg'),
        value: appCategory,
        onChange: function onChange(value) {
          return setAttributes({
            appCategory: value
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Operating System', 'ultimate-addons-for-gutenberg'),
        value: operatingSystem,
        onChange: function onChange(value) {
          return setAttributes({
            operatingSystem: value
          });
        }
      }));
      unusedDefaults = removeFromArray(unusedDefaults, ['appCategory', 'operatingSystem']);
      break;

    case 'Movie':
      itemTypeExtras = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Director Name', 'ultimate-addons-for-gutenberg'),
        value: directorname,
        onChange: function onChange(value) {
          return setAttributes({
            directorname: value
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Date of create')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["DateTimePicker"], {
        currentDate: datecreated,
        onChange: function onChange(value) {
          return setAttributes({
            datecreated: value
          });
        },
        is12Hour: true
      }));
      unusedDefaults = removeFromArray(unusedDefaults, ['directorname', 'datecreated']);
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_5__["default"])()
  }, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, generalSettings(), schemaSettings(), styleSettings()), loadHeadingGoogleFonts, loadSubHeadingGoogleFonts, loadContentGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/typography/fontloader.js":
/*!*************************************************!*\
  !*** ./src/components/typography/fontloader.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

if (googlefonts === undefined) {
  var googlefonts = [];
}




var statuses = {
  inactive: "inactive",
  active: "active",
  loading: "loading"
};

var noop = function noop() {};

var WebfontLoader = /*#__PURE__*/function (_Component) {
  _inherits(WebfontLoader, _Component);

  var _super = _createSuper(WebfontLoader);

  function WebfontLoader(props) {
    var _this;

    _classCallCheck(this, WebfontLoader);

    _this = _super.call(this, props);
    _this.state = {
      status: undefined
    };

    _this.handleLoading = function () {
      _this.setState({
        status: statuses.loading
      });
    };

    _this.addFont = function (font) {
      if (!googlefonts.includes(font)) {
        googlefonts.push(font);
      }
    };

    _this.handleActive = function () {
      _this.setState({
        status: statuses.active
      });
    };

    _this.handleInactive = function () {
      _this.setState({
        status: statuses.inactive
      });
    };

    _this.loadFonts = function () {
      //if ( ! this.state.fonts.includes( this.props.config.google.families[ 0 ] ) ) {
      if (!googlefonts.includes(_this.props.config.google.families[0])) {
        webfontloader__WEBPACK_IMPORTED_MODULE_2___default.a.load(_objectSpread(_objectSpread({}, _this.props.config), {}, {
          loading: _this.handleLoading,
          active: _this.handleActive,
          inactive: _this.handleInactive
        }));

        _this.addFont(_this.props.config.google.families[0]);
      }
    };

    return _this;
  }

  _createClass(WebfontLoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadFonts();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          onStatus = _this$props.onStatus,
          config = _this$props.config;

      if (prevState.status !== this.state.status) {
        onStatus(this.state.status);
      }

      if (prevProps.config !== config) {
        this.loadFonts();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children || null;
    }
  }]);

  return WebfontLoader;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

WebfontLoader.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  onStatus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
WebfontLoader.defaultProps = {
  onStatus: noop
};
/* harmony default export */ __webpack_exports__["default"] = (WebfontLoader);

/***/ })

}]);
//# sourceMappingURL=settings.js.map