(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/testimonial/settings"],{

/***/ "./src/blocks/testimonial/settings.js":
/*!********************************************!*\
  !*** ./src/blocks/testimonial/settings.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
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










var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      setAttributes = _props.setAttributes,
      attributes = _props.attributes,
      deviceType = _props.deviceType; // Setup the attributes.

  var test_item_count = attributes.test_item_count,
      test_block = attributes.test_block,
      headingAlign = attributes.headingAlign,
      companyColor = attributes.companyColor,
      descColor = attributes.descColor,
      authorColor = attributes.authorColor,
      nameFontSizeType = attributes.nameFontSizeType,
      nameFontSize = attributes.nameFontSize,
      nameFontSizeTablet = attributes.nameFontSizeTablet,
      nameFontSizeMobile = attributes.nameFontSizeMobile,
      nameFontFamily = attributes.nameFontFamily,
      nameFontWeight = attributes.nameFontWeight,
      nameFontSubset = attributes.nameFontSubset,
      nameLineHeightType = attributes.nameLineHeightType,
      nameLineHeight = attributes.nameLineHeight,
      nameLineHeightTablet = attributes.nameLineHeightTablet,
      nameLineHeightMobile = attributes.nameLineHeightMobile,
      nameLoadGoogleFonts = attributes.nameLoadGoogleFonts,
      companyFontSizeType = attributes.companyFontSizeType,
      companyFontSize = attributes.companyFontSize,
      companyFontSizeTablet = attributes.companyFontSizeTablet,
      companyFontSizeMobile = attributes.companyFontSizeMobile,
      companyFontFamily = attributes.companyFontFamily,
      companyFontWeight = attributes.companyFontWeight,
      companyFontSubset = attributes.companyFontSubset,
      companyLineHeightType = attributes.companyLineHeightType,
      companyLineHeight = attributes.companyLineHeight,
      companyLineHeightTablet = attributes.companyLineHeightTablet,
      companyLineHeightMobile = attributes.companyLineHeightMobile,
      companyLoadGoogleFonts = attributes.companyLoadGoogleFonts,
      descFontSizeType = attributes.descFontSizeType,
      descFontSize = attributes.descFontSize,
      descFontSizeTablet = attributes.descFontSizeTablet,
      descFontSizeMobile = attributes.descFontSizeMobile,
      descFontFamily = attributes.descFontFamily,
      descFontWeight = attributes.descFontWeight,
      descFontSubset = attributes.descFontSubset,
      descLineHeightType = attributes.descLineHeightType,
      descLineHeight = attributes.descLineHeight,
      descLineHeightTablet = attributes.descLineHeightTablet,
      descLineHeightMobile = attributes.descLineHeightMobile,
      descLoadGoogleFonts = attributes.descLoadGoogleFonts,
      descSpace = attributes.descSpace,
      iconimgStyle = attributes.iconimgStyle,
      imagePosition = attributes.imagePosition,
      imageAlignment = attributes.imageAlignment,
      nameSpace = attributes.nameSpace,
      imgHrPadding = attributes.imgHrPadding,
      imgVrPadding = attributes.imgVrPadding,
      imageSize = attributes.imageSize,
      imageWidth = attributes.imageWidth,
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
      arrowColor = attributes.arrowColor,
      rowGap = attributes.rowGap,
      columnGap = attributes.columnGap,
      contentPadding = attributes.contentPadding,
      backgroundType = attributes.backgroundType,
      backgroundColor = attributes.backgroundColor,
      backgroundImage = attributes.backgroundImage,
      backgroundPosition = attributes.backgroundPosition,
      backgroundSize = attributes.backgroundSize,
      backgroundRepeat = attributes.backgroundRepeat,
      backgroundImageColor = attributes.backgroundImageColor,
      backgroundOpacity = attributes.backgroundOpacity,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      borderColor = attributes.borderColor,
      stack = attributes.stack;
  var loadNameGoogleFonts;
  var loadCompanyGoogleFonts;
  var loadDescGoogleFonts;

  if (nameLoadGoogleFonts == true) {
    var nameconfig = {
      google: {
        families: [nameFontFamily + (nameFontWeight ? ':' + nameFontWeight : '')]
      }
    };
    loadNameGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: nameconfig
    });
  }

  if (companyLoadGoogleFonts == true) {
    var companyconfig = {
      google: {
        families: [companyFontFamily + (companyFontWeight ? ':' + companyFontWeight : '')]
      }
    };
    loadCompanyGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: companyconfig
    });
  }

  if (descLoadGoogleFonts == true) {
    var descconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: descconfig
    });
  }
  /*
   * Event to set Image as while adding.
   */


  var onSelectTestImage = function onSelectTestImage(media, index) {
    var imgUrl = null;

    if (!media || !media.url) {
      imgUrl = null;
    } else {
      imgUrl = media;
    }

    if (!media.type || 'image' !== media.type) {
      imgUrl = null;
    }

    var newItems = test_block.map(function (item, thisIndex) {
      if (index === thisIndex) {
        item.image = imgUrl;
      }

      return item;
    });
    setAttributes({
      test_block: newItems
    });
  };
  /*
   * Event to set Image as null while removing.
   */


  var onRemoveTestImage = function onRemoveTestImage(index) {
    var newItems = test_block.map(function (item, thisIndex) {
      if (index === thisIndex) {
        item.image = null;
      }

      return item;
    });
    setAttributes({
      test_block: newItems
    });
  };
  /*
   * Event to set Image selectot label.
   */


  var getImageName = function getImageName(image) {
    var imageName = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Image', 'ultimate-addons-for-gutenberg');

    if (image) {
      if (image.url == null || image.url == '') {
        imageName = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Image', 'ultimate-addons-for-gutenberg');
      } else {
        imageName = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace Image', 'ultimate-addons-for-gutenberg');
      }
    }

    return imageName;
  };

  var getImageData = function getImageData() {
    var getImages = [];

    for (var i = 0; i < test_item_count; i++) {
      getImages.push(tmControls(i));
    }

    return getImages;
  };

  var togglePauseOnHover = function togglePauseOnHover() {
    setAttributes({
      pauseOnHover: !pauseOnHover
    });
  };

  var toggleInfiniteLoop = function toggleInfiniteLoop() {
    setAttributes({
      infiniteLoop: !infiniteLoop
    });
  };

  var toggleAutoplay = function toggleAutoplay() {
    setAttributes({
      autoplay: !autoplay
    });
  };
  /*
   * Event to set Image as null while removing.
   */


  var onRemoveImage = function onRemoveImage() {
    setAttributes({
      backgroundImage: null
    });
  };
  /*
   * Event to set Image as while adding.
   */


  var onSelectImage = function onSelectImage(media) {
    if (!media || !media.url) {
      setAttributes({
        backgroundImage: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      setAttributes({
        backgroundImage: null
      });
      return;
    }

    setAttributes({
      backgroundImage: media
    });
  }; // Image sizes.


  var imageSizeOptions = [{
    value: 'thumbnail',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'medium',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Medium', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'full',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Large', 'ultimate-addons-for-gutenberg')
  }]; // Typography settings.

  var typographySettings = function typographySettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Testimonial', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: descLoadGoogleFonts,
        label: 'descLoadGoogleFonts'
      },
      fontFamily: {
        value: descFontFamily,
        label: 'descFontFamily'
      },
      fontWeight: {
        value: descFontWeight,
        label: 'descFontWeight'
      },
      fontSubset: {
        value: descFontSubset,
        label: 'descFontSubset'
      },
      fontSizeType: {
        value: descFontSizeType,
        label: 'descFontSizeType'
      },
      fontSize: {
        value: descFontSize,
        label: 'descFontSize'
      },
      fontSizeMobile: {
        value: descFontSizeMobile,
        label: 'descFontSizeMobile'
      },
      fontSizeTablet: {
        value: descFontSizeTablet,
        label: 'descFontSizeTablet'
      },
      lineHeightType: {
        value: descLineHeightType,
        label: 'descLineHeightType'
      },
      lineHeight: {
        value: descLineHeight,
        label: 'descLineHeight'
      },
      lineHeightMobile: {
        value: descLineHeightMobile,
        label: 'descLineHeightMobile'
      },
      lineHeightTablet: {
        value: descLineHeightTablet,
        label: 'descLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Name', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: nameLoadGoogleFonts,
        label: 'nameLoadGoogleFonts'
      },
      fontFamily: {
        value: nameFontFamily,
        label: 'nameFontFamily'
      },
      fontWeight: {
        value: nameFontWeight,
        label: 'nameFontWeight'
      },
      fontSubset: {
        value: nameFontSubset,
        label: 'nameFontSubset'
      },
      fontSizeType: {
        value: nameFontSizeType,
        label: 'nameFontSizeType'
      },
      fontSize: {
        value: nameFontSize,
        label: 'nameFontSize'
      },
      fontSizeMobile: {
        value: nameFontSizeMobile,
        label: 'nameFontSizeMobile'
      },
      fontSizeTablet: {
        value: nameFontSizeTablet,
        label: 'nameFontSizeTablet'
      },
      lineHeightType: {
        value: nameLineHeightType,
        label: 'nameLineHeightType'
      },
      lineHeight: {
        value: nameLineHeight,
        label: 'nameLineHeight'
      },
      lineHeightMobile: {
        value: nameLineHeightMobile,
        label: 'nameLineHeightMobile'
      },
      lineHeightTablet: {
        value: nameLineHeightTablet,
        label: 'nameLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Company', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: companyLoadGoogleFonts,
        label: 'companyLoadGoogleFonts'
      },
      fontFamily: {
        value: companyFontFamily,
        label: 'companyFontFamily'
      },
      fontWeight: {
        value: companyFontWeight,
        label: 'companyFontWeight'
      },
      fontSubset: {
        value: companyFontSubset,
        label: 'companyFontSubset'
      },
      fontSizeType: {
        value: companyFontSizeType,
        label: 'companyFontSizeType'
      },
      fontSize: {
        value: companyFontSize,
        label: 'companyFontSize'
      },
      fontSizeMobile: {
        value: companyFontSizeMobile,
        label: 'companyFontSizeMobile'
      },
      fontSizeTablet: {
        value: companyFontSizeTablet,
        label: 'companyFontSizeTablet'
      },
      lineHeightType: {
        value: companyLineHeightType,
        label: 'companyLineHeightType'
      },
      lineHeight: {
        value: companyLineHeight,
        label: 'companyLineHeight'
      },
      lineHeightMobile: {
        value: companyLineHeightMobile,
        label: 'companyLineHeightMobile'
      },
      lineHeightTablet: {
        value: companyLineHeightTablet,
        label: 'companyLineHeightTablet'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["PanelColorSettings"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      colorSettings: [{
        value: descColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            descColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Testimonial Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: authorColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            authorColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Name Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: companyColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            companyColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Company Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: arrowColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            arrowColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Arrow & Dots Color', 'ultimate-addons-for-gutenberg')
      }]
    }));
  };

  var carousalSettings = function carousalSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Carousel', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Pause On Hover', 'ultimate-addons-for-gutenberg'),
      checked: pauseOnHover,
      onChange: togglePauseOnHover
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Autoplay'),
      checked: autoplay,
      onChange: toggleAutoplay
    }), autoplay == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Autoplay Speed (ms)', 'ultimate-addons-for-gutenberg'),
      value: autoplaySpeed,
      onChange: function onChange(value) {
        return setAttributes({
          autoplaySpeed: value
        });
      },
      min: 100,
      max: 10000
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Infinite Loop', 'ultimate-addons-for-gutenberg'),
      checked: infiniteLoop,
      onChange: toggleInfiniteLoop
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Transition Speed (ms)', 'ultimate-addons-for-gutenberg'),
      value: transitionSpeed,
      onChange: function onChange(value) {
        return setAttributes({
          transitionSpeed: value
        });
      },
      min: 100,
      max: 5000
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show Arrows & Dots', 'ultimate-addons-for-gutenberg'),
      value: arrowDots,
      onChange: function onChange(value) {
        return setAttributes({
          arrowDots: value
        });
      },
      options: [{
        value: 'arrows',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Only Arrows', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dots',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Only Dots', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'arrows_dots',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Both Arrows & Dots', 'ultimate-addons-for-gutenberg')
      }]
    }), 'dots' != arrowDots && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Arrow Size', 'ultimate-addons-for-gutenberg'),
      value: arrowSize,
      onChange: function onChange(value) {
        return setAttributes({
          arrowSize: value
        });
      },
      min: 0,
      max: 50
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Arrow Border Size', 'ultimate-addons-for-gutenberg'),
      value: arrowBorderSize,
      onChange: function onChange(value) {
        return setAttributes({
          arrowBorderSize: value
        });
      },
      min: 0,
      max: 50
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Arrow Border Radius', 'ultimate-addons-for-gutenberg'),
      value: arrowBorderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          arrowBorderRadius: value
        });
      },
      min: 0,
      max: 50
    })));
  }; // Margin Settings.


  var marginSettings = function marginSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Gap Between Content & Dots', 'ultimate-addons-for-gutenberg'),
      value: rowGap,
      onChange: function onChange(value) {
        return setAttributes({
          rowGap: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Row Gap', 'ultimate-addons-for-gutenberg'),
      value: columnGap,
      onChange: function onChange(value) {
        return setAttributes({
          columnGap: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Content Padding', 'ultimate-addons-for-gutenberg'),
      value: contentPadding,
      onChange: function onChange(value) {
        return setAttributes({
          contentPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Testimonial Bottom Margin', 'ultimate-addons-for-gutenberg'),
      value: descSpace,
      onChange: function onChange(value) {
        return setAttributes({
          descSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Name Bottom Margin', 'ultimate-addons-for-gutenberg'),
      value: nameSpace,
      onChange: function onChange(value) {
        return setAttributes({
          nameSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image Horizontal Padding', 'ultimate-addons-for-gutenberg'),
      value: imgHrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          imgHrPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image Vertical Padding', 'ultimate-addons-for-gutenberg'),
      value: imgVrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          imgVrPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }));
  };

  var backgroundSettings = function backgroundSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Type', 'ultimate-addons-for-gutenberg'),
      value: backgroundType,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundType: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'color',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'image',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image', 'ultimate-addons-for-gutenberg')
      }]
    }), 'color' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: backgroundColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundColor: colorValue
        });
      },
      allowReset: true
    })), 'image' == backgroundType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
      id: "Background Image",
      className: "editor-bg-image-control",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Background Image', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Background Image', 'ultimate-addons-for-gutenberg'),
      onSelect: onSelectImage,
      allowedTypes: ['image'],
      value: backgroundImage,
      render: function render(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          isSecondary: true,
          onClick: open
        }, !backgroundImage ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Background Image', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace image', 'ultimate-addons-for-gutenberg'));
      }
    }), backgroundImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      className: "uagb-rm-btn",
      onClick: onRemoveImage,
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Image', 'ultimate-addons-for-gutenberg'))), backgroundImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image Position', 'ultimate-addons-for-gutenberg'),
      value: backgroundPosition,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundPosition: value
        });
      },
      options: [{
        value: 'top-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Top Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Top Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'top-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Top Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Center Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Center Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Center Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bottom Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bottom Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom-right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bottom Right', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Repeat', 'ultimate-addons-for-gutenberg'),
      value: backgroundRepeat,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundRepeat: value
        });
      },
      options: [{
        value: 'no-repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('No Repeat', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Repeat', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat-x',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Repeat-x', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'repeat-y',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Repeat-y', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Size'),
      value: backgroundSize,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundSize: value
        });
      },
      options: [{
        value: 'auto',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Auto', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'cover',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Cover', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'contain',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Contain', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image Overlay Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: backgroundImageColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: backgroundImageColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          backgroundImageColor: colorValue
        });
      },
      allowReset: true
    })))), 'image' == backgroundType && backgroundImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Opacity', 'ultimate-addons-for-gutenberg'),
      value: backgroundOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          backgroundOpacity: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true,
      initialPosition: 0
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          borderStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      onChange: function onChange(value) {
        return setAttributes({
          borderWidth: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: borderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          borderColor: colorValue
        });
      },
      allowReset: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      max: 1000,
      allowReset: true
    })));
  }; // Set testinomial image panel


  var tmControls = function tmControls(index) {
    var imageVal = null;

    if (test_block[index] && typeof test_block[index] !== 'undefined') {
      imageVal = test_block[index].image;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      key: index,
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image', 'ultimate-addons-for-gutenberg') + ' ' + (index + 1) + ' ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: 'uagb-repeater-panel'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["BaseControl"], {
      id: "",
      className: "editor-bg-image-control",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Image' + (index + 1)),
      onSelect: function onSelect(media) {
        onSelectTestImage(media, index);
      },
      allowedTypes: ['image'],
      value: imageVal,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          isSecondary: true,
          onClick: open
        }, getImageName(test_block[index].image));
      }
    }), imageVal && test_block[index].image.url !== null && test_block[index].image.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      className: "uagb-rm-btn",
      key: index,
      onClick: function onClick() {
        onRemoveTestImage(index);
      },
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Image'))));
  };

  var cnt = 0;
  test_block.map(function (item, thisIndex) {
    var imageArray = test_block[thisIndex];

    if (imageArray && typeof imageArray !== 'undefined') {
      var image = imageArray.image;

      if (typeof image !== 'undefined' && image !== null && image !== '') {
        cnt++;
      }
    }
  }); // Global Controls.

  var inspectControl = function inspectControl() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('General'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Number of Testimonials', 'ultimate-addons-for-gutenberg'),
      value: test_item_count,
      onChange: function onChange(newCount) {
        var cloneTest_block = _toConsumableArray(test_block);

        if (cloneTest_block.length < newCount) {
          var incAmount = Math.abs(newCount - cloneTest_block.length);

          for (var i = 0; i < incAmount; i++) {
            cloneTest_block.push({
              description: 'I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!',
              name: 'John Doe',
              company: 'Company' + (cloneTest_block.length + 1),
              image: ''
            });
          }

          setAttributes({
            test_block: cloneTest_block
          });
        } else {
          var _incAmount = Math.abs(newCount - cloneTest_block.length);

          var data_new = cloneTest_block;

          for (var _i = 0; _i < _incAmount; _i++) {
            data_new.pop();
          }

          setAttributes({
            test_block: data_new
          });
        }

        setAttributes({
          test_item_count: newCount
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_5__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      value: columns,
      onChange: function onChange(value) {
        return setAttributes({
          columns: value
        });
      },
      min: 1,
      max: test_item_count
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      value: tcolumns,
      onChange: function onChange(value) {
        return setAttributes({
          tcolumns: value
        });
      },
      min: 1,
      max: test_item_count
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      value: mcolumns,
      onChange: function onChange(value) {
        return setAttributes({
          mcolumns: value
        });
      },
      min: 1,
      max: test_item_count
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, getImageData(), cnt > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image Position'),
      value: imagePosition,
      onChange: function onChange(value) {
        return setAttributes({
          imagePosition: value
        });
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Bottom', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }]
    }), (imagePosition == 'left' || imagePosition == 'right') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Vertical ALignment', 'ultimate-addons-for-gutenberg'),
      value: imageAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          imageAlignment: value
        });
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'middle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Middle', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
      value: stack,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Note: Choose on what breakpoint the Info Box will stack.', 'ultimate-addons-for-gutenberg'),
      onChange: function onChange(value) {
        return setAttributes({
          stack: value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image Style', 'ultimate-addons-for-gutenberg'),
      value: iconimgStyle,
      onChange: function onChange(value) {
        return setAttributes({
          iconimgStyle: value
        });
      },
      options: [{
        value: 'normal',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'circle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Circle', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'square',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Square', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image Size', 'ultimate-addons-for-gutenberg'),
      options: imageSizeOptions,
      value: imageSize,
      onChange: function onChange(value) {
        return setAttributes({
          imageSize: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      value: imageWidth,
      onChange: function onChange(value) {
        return setAttributes({
          imageWidth: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }))), carousalSettings(), typographySettings(), marginSettings(), backgroundSettings());
  };

  var blockControls = function blockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["AlignmentToolbar"], {
      value: headingAlign,
      onChange: function onChange(value) {
        return setAttributes({
          headingAlign: value
        });
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, blockControls(), inspectControl(), loadNameGoogleFonts, loadCompanyGoogleFonts, loadDescGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/typography/column-responsive.js":
/*!********************************************************!*\
  !*** ./src/components/typography/column-responsive.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnResponsive; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Build the Measure controls
 *
 * @param props
 * @return {Object} Measure settings.
 */

function ColumnResponsive(props) {
  var deviceType = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select) {
    return select("core/edit-post").__experimentalGetPreviewDeviceType();
  }, []);

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])("core/edit-post"),
      setPreviewDeviceType = _useDispatch.__experimentalSetPreviewDeviceType;

  var customSetPreviewDeviceType = function customSetPreviewDeviceType(device) {
    setPreviewDeviceType(device);
  };

  var devices = [{
    name: "Desktop",
    title: /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
      icon: "desktop"
    }),
    itemClass: "uagb-desktop-tab uagb-responsive-tabs"
  }, {
    name: "Tablet",
    title: /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
      icon: "tablet"
    }),
    itemClass: "uagb-tablet-tab uagb-responsive-tabs"
  }, {
    name: "Mobile",
    key: "mobile",
    title: /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dashicon"], {
      icon: "smartphone"
    }),
    itemClass: "uagb-mobile-tab uagb-responsive-tabs"
  }];
  var output = {};
  output.Desktop = /*#__PURE__*/React.createElement(React.Fragment, null);
  output.Tablet = /*#__PURE__*/React.createElement(React.Fragment, null);
  output.Mobile = /*#__PURE__*/React.createElement(React.Fragment, null);

  var deviceControls = function deviceControls(devices) {
    var items = [];
    devices.map(function (key) {
      return items.push( /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        key: key.key,
        className: "components-button components-tab-panel__tabs-item ".concat(key.itemClass).concat(key.name === deviceType ? " active-tab" : ""),
        "aria-pressed": deviceType === key.name,
        onClick: function onClick() {
          return customSetPreviewDeviceType(key.name);
        }
      }, key.title));
    });
    return items;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "uag-typography-range-options"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uagb-size-type-field-tabs"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    className: "components-tab-panel__tabs",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Device", "ultimate-addons-for-gutenberg")
  }, deviceControls(devices)), /*#__PURE__*/React.createElement("div", {
    className: "uagb-responsive-control-inner"
  }, output[deviceType] ? output[deviceType] : output.Desktop)));
}

/***/ })

}]);
//# sourceMappingURL=settings.js.map