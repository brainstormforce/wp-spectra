(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/how-to/settings"],{

/***/ "./src/blocks/how-to/settings.js":
/*!***************************************!*\
  !*** ./src/blocks/how-to/settings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/how-to/style.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
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
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
}, {
  value: 'medium',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Medium', 'ultimate-addons-for-gutenberg')
}, {
  value: 'full',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Large', 'ultimate-addons-for-gutenberg')
}];

var Settings = function Settings(props) {
  props = props.parentProps; // Setup the attributes

  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      _props$attributes = _props.attributes,
      overallAlignment = _props$attributes.overallAlignment,
      showEstcost = _props$attributes.showEstcost,
      showTotaltime = _props$attributes.showTotaltime,
      showMaterials = _props$attributes.showMaterials,
      showTools = _props$attributes.showTools,
      showTotaltimecolor = _props$attributes.showTotaltimecolor,
      tools_count = _props$attributes.tools_count,
      material_count = _props$attributes.material_count,
      tools = _props$attributes.tools,
      materials = _props$attributes.materials,
      mainimage = _props$attributes.mainimage,
      imgSize = _props$attributes.imgSize,
      headingColor = _props$attributes.headingColor,
      subHeadingColor = _props$attributes.subHeadingColor,
      headingTag = _props$attributes.headingTag,
      headFontFamily = _props$attributes.headFontFamily,
      headFontWeight = _props$attributes.headFontWeight,
      headFontSubset = _props$attributes.headFontSubset,
      headFontSizeType = _props$attributes.headFontSizeType,
      headFontSize = _props$attributes.headFontSize,
      headFontSizeMobile = _props$attributes.headFontSizeMobile,
      headFontSizeTablet = _props$attributes.headFontSizeTablet,
      headLineHeightType = _props$attributes.headLineHeightType,
      headLineHeight = _props$attributes.headLineHeight,
      headLineHeightMobile = _props$attributes.headLineHeightMobile,
      headLineHeightTablet = _props$attributes.headLineHeightTablet,
      subHeadFontFamily = _props$attributes.subHeadFontFamily,
      subHeadFontWeight = _props$attributes.subHeadFontWeight,
      subHeadFontSubset = _props$attributes.subHeadFontSubset,
      subHeadFontSize = _props$attributes.subHeadFontSize,
      subHeadFontSizeType = _props$attributes.subHeadFontSizeType,
      subHeadFontSizeMobile = _props$attributes.subHeadFontSizeMobile,
      subHeadFontSizeTablet = _props$attributes.subHeadFontSizeTablet,
      subHeadLineHeight = _props$attributes.subHeadLineHeight,
      subHeadLineHeightType = _props$attributes.subHeadLineHeightType,
      subHeadLineHeightMobile = _props$attributes.subHeadLineHeightMobile,
      subHeadLineHeightTablet = _props$attributes.subHeadLineHeightTablet,
      headLoadGoogleFonts = _props$attributes.headLoadGoogleFonts,
      subHeadLoadGoogleFonts = _props$attributes.subHeadLoadGoogleFonts,
      priceFontSizeType = _props$attributes.priceFontSizeType,
      priceFontSize = _props$attributes.priceFontSize,
      priceFontSizeTablet = _props$attributes.priceFontSizeTablet,
      priceFontSizeMobile = _props$attributes.priceFontSizeMobile,
      priceFontFamily = _props$attributes.priceFontFamily,
      priceFontWeight = _props$attributes.priceFontWeight,
      priceFontSubset = _props$attributes.priceFontSubset,
      priceLineHeightType = _props$attributes.priceLineHeightType,
      priceLineHeight = _props$attributes.priceLineHeight,
      priceLineHeightTablet = _props$attributes.priceLineHeightTablet,
      priceLineHeightMobile = _props$attributes.priceLineHeightMobile,
      priceLoadGoogleFonts = _props$attributes.priceLoadGoogleFonts,
      timeSpace = _props$attributes.timeSpace,
      costSpace = _props$attributes.costSpace,
      row_gap = _props$attributes.row_gap,
      step_gap = _props$attributes.step_gap,
      timeInHours = _props$attributes.timeInHours,
      timeInDays = _props$attributes.timeInDays,
      timeInMonths = _props$attributes.timeInMonths,
      timeInYears = _props$attributes.timeInYears,
      timeInMins = _props$attributes.timeInMins,
      time = _props$attributes.time;

  var getImageSize = function getImageSize(sizes) {
    var sizeArr = [];
    $.each(sizes, function (index) {
      var name = index;
      var p = {
        value: name,
        label: name
      };
      sizeArr.push(p);
    });
    return sizeArr;
  };

  if (mainimage && mainimage.sizes) {
    imageSizeOptions = getImageSize(mainimage.sizes);
  }

  var minsValue = timeInMins ? timeInMins : time;
  var loadHeadingGoogleFonts;
  var loadSubHeadingGoogleFonts;
  var loadPriceGoogleFonts;

  if (true === headLoadGoogleFonts) {
    var hconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: hconfig
    });
  }

  if (true === subHeadLoadGoogleFonts) {
    var sconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadingGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: sconfig
    });
  }

  if (true === priceLoadGoogleFonts) {
    var pconfig = {
      google: {
        families: [priceFontFamily + (priceFontWeight ? ':' + priceFontWeight : '')]
      }
    };
    loadPriceGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: pconfig
    });
  }

  var generalSettings = function generalSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Image', 'ultimate-addons-for-gutenberg'),
      onSelect: function onSelect(value) {
        return setAttributes({
          mainimage: value
        });
      },
      allowedTypes: ['image'],
      value: mainimage,
      render: function render(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          isSecondary: true,
          onClick: open
        }, !mainimage.url ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Image', 'ultimate-addons-for-gutenberg') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Replace image', 'ultimate-addons-for-gutenberg'));
      }
    }), mainimage.url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      className: "uagb-rm-btn",
      onClick: function onClick() {
        return setAttributes({
          mainimage: ''
        });
      },
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Remove Image', 'ultimate-addons-for-gutenberg')), mainimage.url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      options: imageSizeOptions,
      value: imgSize,
      onChange: function onChange(value) {
        return setAttributes({
          imgSize: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Primary Heading', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tag'),
      value: headingTag,
      onChange: function onChange(value) {
        return setAttributes({
          headingTag: value
        });
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Total Time', 'ultimate-addons-for-gutenberg'),
      checked: showTotaltime,
      onChange: function onChange() {
        return setAttributes({
          showTotaltime: !showTotaltime
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: Time is recommended field for schema. It should be ON', 'ultimate-addons-for-gutenberg')
    }), showTotaltime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Time', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb-editor-howto-timepanel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Years', 'ultimate-addons-for-gutenberg'),
      value: timeInYears,
      onChange: function onChange(value) {
        return setAttributes({
          timeInYears: value
        });
      },
      min: 1,
      max: 10,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Months', 'ultimate-addons-for-gutenberg'),
      value: timeInMonths,
      onChange: function onChange(value) {
        return setAttributes({
          timeInMonths: value
        });
      },
      min: 1,
      max: 12,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Days', 'ultimate-addons-for-gutenberg'),
      value: timeInDays,
      onChange: function onChange(value) {
        return setAttributes({
          timeInDays: value
        });
      },
      min: 1,
      max: 31,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Hours', 'ultimate-addons-for-gutenberg'),
      value: timeInHours,
      onChange: function onChange(value) {
        return setAttributes({
          timeInHours: value
        });
      },
      min: 1,
      max: 24,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Minutes', 'ultimate-addons-for-gutenberg'),
      value: minsValue,
      onChange: function onChange(value) {
        return setAttributes({
          timeInMins: value
        });
      },
      min: 1,
      max: 60,
      allowReset: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Estimated Cost', 'ultimate-addons-for-gutenberg'),
      checked: showEstcost,
      onChange: function onChange() {
        return setAttributes({
          showEstcost: !showEstcost
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: Cost is recommended field for schema.It should be ON', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ExternalLink"], {
      href: 'https://en.wikipedia.org/wiki/List_of_circulating_currencies'
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Click here to find your countrys ISO code.', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Tools', 'ultimate-addons-for-gutenberg'),
      checked: showTools,
      onChange: function onChange() {
        return setAttributes({
          showTools: !showTools
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: This is recommended field for schema.It should be ON', 'ultimate-addons-for-gutenberg')
    }), showTools && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Number of Tools', 'ultimate-addons-for-gutenberg'),
      value: tools_count,
      onChange: function onChange(newCount) {
        var cloneIcons = _toConsumableArray(tools);

        if (cloneIcons.length < newCount) {
          var incAmount = Math.abs(newCount - cloneIcons.length);
          {
            for (var i = 0; i < incAmount; i++) {
              cloneIcons.push({
                add_required_tools: '- A Computer' + (cloneIcons.length + 1)
              });
            }
          }
          setAttributes({
            tools: cloneIcons
          });
        } else {
          var _incAmount = Math.abs(newCount - cloneIcons.length);

          var data_new = cloneIcons;

          for (var _i = 0; _i < _incAmount; _i++) {
            data_new.pop();
          }

          setAttributes({
            tools: data_new
          });
        }

        setAttributes({
          tools_count: newCount
        });
      },
      min: 1,
      max: 50
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Materials', 'ultimate-addons-for-gutenberg'),
      checked: showMaterials,
      onChange: function onChange() {
        return setAttributes({
          showMaterials: !showMaterials
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: This is recommended field for schema.It should be ON', 'ultimate-addons-for-gutenberg')
    }), showMaterials && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Number of Materials', 'ultimate-addons-for-gutenberg'),
      value: material_count,
      onChange: function onChange(newCount) {
        var cloneIcons = _toConsumableArray(materials);

        if (cloneIcons.length < newCount) {
          var incAmount = Math.abs(newCount - cloneIcons.length);
          {
            for (var i = 0; i < incAmount; i++) {
              cloneIcons.push({
                add_required_materials: '- A WordPress Website' + (cloneIcons.length + 1)
              });
            }
          }
          setAttributes({
            materials: cloneIcons
          });
        } else {
          var _incAmount2 = Math.abs(newCount - cloneIcons.length);

          var data_new = cloneIcons;

          for (var _i2 = 0; _i2 < _incAmount2; _i2++) {
            data_new.pop();
          }

          setAttributes({
            materials: data_new
          });
        }

        setAttributes({
          material_count: newCount
        });
      },
      min: 1,
      max: 50
    }));
  };

  var styleSettings = function styleSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Colors')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: headingColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: headingColor,
      onChange: function onChange(value) {
        return setAttributes({
          headingColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Secondary Heading', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: showTotaltimecolor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: showTotaltimecolor,
      onChange: function onChange(value) {
        return setAttributes({
          showTotaltimecolor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Description', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: subHeadingColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      value: subHeadingColor,
      onChange: function onChange(value) {
        return setAttributes({
          subHeadingColor: value
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Secondary Heading', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: priceLoadGoogleFonts,
        label: 'priceLoadGoogleFonts'
      },
      fontFamily: {
        value: priceFontFamily,
        label: 'priceFontFamily'
      },
      fontWeight: {
        value: priceFontWeight,
        label: 'priceFontWeight'
      },
      fontSubset: {
        value: priceFontSubset,
        label: 'priceFontSubset'
      },
      fontSizeType: {
        value: priceFontSizeType,
        label: 'priceFontSizeType'
      },
      fontSize: {
        value: priceFontSize,
        label: 'priceFontSize'
      },
      fontSizeMobile: {
        value: priceFontSizeMobile,
        label: 'priceFontSizeMobile'
      },
      fontSizeTablet: {
        value: priceFontSizeTablet,
        label: 'priceFontSizeTablet'
      },
      lineHeightType: {
        value: priceLineHeightType,
        label: 'priceLineHeightType'
      },
      lineHeight: {
        value: priceLineHeight,
        label: 'priceLineHeight'
      },
      lineHeightMobile: {
        value: priceLineHeightMobile,
        label: 'priceLineHeightMobile'
      },
      lineHeightTablet: {
        value: priceLineHeightTablet,
        label: 'priceLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Description', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Spacing', 'ultimate-addons-for-gutenberg')), showTotaltime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Time Margin', 'ultimate-addons-for-gutenberg'),
      value: timeSpace,
      onChange: function onChange(value) {
        return setAttributes({
          timeSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), showEstcost && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Cost Margin', 'ultimate-addons-for-gutenberg'),
      value: costSpace,
      onChange: function onChange(value) {
        return setAttributes({
          costSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Row Gap', 'ultimate-addons-for-gutenberg'),
      value: row_gap,
      onChange: function onChange(value) {
        return setAttributes({
          row_gap: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Gap Between Steps', 'ultimate-addons-for-gutenberg'),
      value: step_gap,
      onChange: function onChange(value) {
        return setAttributes({
          step_gap: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }));
  };

  var blockControls = function blockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockControls"], {
      key: "index"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["AlignmentToolbar"], {
      value: overallAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          overallAlignment: value
        });
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, generalSettings(), styleSettings()), loadHeadingGoogleFonts, loadSubHeadingGoogleFonts, loadPriceGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map