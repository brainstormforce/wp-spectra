(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/price-list/settings"],{

/***/ "./src/blocks/price-list/settings.js":
/*!*******************************************!*\
  !*** ./src/blocks/price-list/settings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);








var maxColumns = 3;



var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      setAttributes = _props.setAttributes,
      attributes = _props.attributes,
      deviceType = _props.deviceType; // Setup the attributes.

  var menu_item_count = attributes.menu_item_count,
      titleSpace = attributes.titleSpace,
      imgHrPadding = attributes.imgHrPadding,
      imgVrPadding = attributes.imgVrPadding,
      columns = attributes.columns,
      tcolumns = attributes.tcolumns,
      mcolumns = attributes.mcolumns,
      rowGap = attributes.rowGap,
      columnGap = attributes.columnGap,
      contentHrPadding = attributes.contentHrPadding,
      contentVrPadding = attributes.contentVrPadding,
      priceColor = attributes.priceColor,
      descColor = attributes.descColor,
      titleColor = attributes.titleColor,
      seperatorStyle = attributes.seperatorStyle,
      seperatorWidth = attributes.seperatorWidth,
      seperatorThickness = attributes.seperatorThickness,
      seperatorColor = attributes.seperatorColor,
      priceLoadGoogleFonts = attributes.priceLoadGoogleFonts,
      titleLoadGoogleFonts = attributes.titleLoadGoogleFonts,
      descLoadGoogleFonts = attributes.descLoadGoogleFonts,
      titleFontSizeType = attributes.titleFontSizeType,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeTablet = attributes.titleFontSizeTablet,
      titleFontSizeMobile = attributes.titleFontSizeMobile,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleFontSubset = attributes.titleFontSubset,
      titleLineHeightType = attributes.titleLineHeightType,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightTablet = attributes.titleLineHeightTablet,
      titleLineHeightMobile = attributes.titleLineHeightMobile,
      priceFontSizeType = attributes.priceFontSizeType,
      priceFontSize = attributes.priceFontSize,
      priceFontSizeTablet = attributes.priceFontSizeTablet,
      priceFontSizeMobile = attributes.priceFontSizeMobile,
      priceFontFamily = attributes.priceFontFamily,
      priceFontWeight = attributes.priceFontWeight,
      priceFontSubset = attributes.priceFontSubset,
      priceLineHeightType = attributes.priceLineHeightType,
      priceLineHeight = attributes.priceLineHeight,
      priceLineHeightTablet = attributes.priceLineHeightTablet,
      priceLineHeightMobile = attributes.priceLineHeightMobile,
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
      headingTag = attributes.headingTag,
      imagePosition = attributes.imagePosition,
      imageAlignment = attributes.imageAlignment,
      imageSize = attributes.imageSize,
      imageWidth = attributes.imageWidth,
      stack = attributes.stack;

  var setcolumns = function setcolumns(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (pricelistChild) {
      pricelistChild.attributes.columns = value;
    });
    setAttributes({
      columns: value
    });
  };

  var setheadingTag = function setheadingTag(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (pricelistChild) {
      pricelistChild.attributes.headingTag = value;
    });
    setAttributes({
      headingTag: value
    });
  };

  var setimagePosition = function setimagePosition(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (pricelistChild) {
      pricelistChild.attributes.imagePosition = value;
    });
    setAttributes({
      imagePosition: value
    });
  };

  var setimageSize = function setimageSize(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (pricelistChild) {
      pricelistChild.attributes.imageSize = value;
    });
    setAttributes({
      imageSize: value
    });
  };

  var setimageAlignment = function setimageAlignment(value) {
    var getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(function (pricelistChild) {
      pricelistChild.attributes.imageAlignment = value;
    });
    setAttributes({
      imageAlignment: value
    });
  };

  var loadTitleGoogleFonts;
  var loadDescGoogleFonts;
  var loadPriceGoogleFonts;

  if (titleLoadGoogleFonts == true) {
    var titleconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: titleconfig
    });
  }

  if (descLoadGoogleFonts == true) {
    var descconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: descconfig
    });
  }

  if (priceLoadGoogleFonts == true) {
    var priceconfig = {
      google: {
        families: [priceFontFamily + (priceFontWeight ? ':' + priceFontWeight : '')]
      }
    };
    loadPriceGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: priceconfig
    });
  } // Margin Settings.


  var marginSettings = function marginSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Spacing'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Row Gap'),
      value: rowGap,
      onChange: function onChange(value) {
        return setAttributes({
          rowGap: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Column Gap'),
      value: columnGap,
      onChange: function onChange(value) {
        return setAttributes({
          columnGap: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title Bottom Margin'),
      value: titleSpace,
      onChange: function onChange(value) {
        return setAttributes({
          titleSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Item Padding (px)')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_5__["default"].vertical_spacing,
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_5__["default"].horizontal_spacing,
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Image Padding (px)')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_5__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: imgVrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          imgVrPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_5__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: imgHrPadding,
      onChange: function onChange(value) {
        return setAttributes({
          imgHrPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    })));
  }; // Image sizes.


  var imageSizeOptions = [{
    value: 'thumbnail',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Thumbnail')
  }, {
    value: 'medium',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Medium')
  }, {
    value: 'full',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Large')
  }];
  var alignTop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Path"], {
    d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z"
  })); //Image Setting

  var imageSettings = function imageSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Image Settings'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Image Position')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], {
      className: "uagb-editor_imgpos_group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: 'left',
      icon: "editor-alignleft",
      label: "Left",
      onClick: function onClick() {
        return setimagePosition('left');
      },
      "aria-pressed": 'left' === imagePosition,
      isPrimary: 'left' === imagePosition
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: 'top',
      icon: alignTop,
      label: "Top",
      onClick: function onClick() {
        return setimagePosition('top');
      },
      "aria-pressed": 'top' === imagePosition,
      isPrimary: 'top' === imagePosition
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: 'right',
      icon: "editor-alignright",
      label: "Right",
      onClick: function onClick() {
        return setimagePosition('right');
      },
      "aria-pressed": 'right' === imagePosition,
      isPrimary: 'right' === imagePosition
    })), (imagePosition == 'left' || imagePosition == 'right') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Vertical Alignment'),
      value: imageAlignment,
      onChange: setimageAlignment,
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Top')
      }, {
        value: 'middle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Middle')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Stack on'),
      value: stack,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('None')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Tablet')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Mobile')
      }],
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Note: Choose on what breakpoint the Images will stack.'),
      onChange: function onChange(value) {
        return setAttributes({
          stack: value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Image Size'),
      options: imageSizeOptions,
      value: imageSize,
      onChange: setimageSize
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Width'),
      value: imageWidth,
      onChange: function onChange(value) {
        return setAttributes({
          imageWidth: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }));
  }; //Color settings


  var colorSettings = function colorSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["PanelColorSettings"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: titleColor,
        onChange: function onChange(value) {
          return setAttributes({
            titleColor: value
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title Color')
      }, {
        value: descColor,
        onChange: function onChange(value) {
          return setAttributes({
            descColor: value
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Content Color')
      }, {
        value: priceColor,
        onChange: function onChange(value) {
          return setAttributes({
            priceColor: value
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Price Color')
      }]
    });
  }; //seperator setting


  var separatorSettings = function separatorSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Separator Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Separator Style'),
      value: seperatorStyle,
      onChange: function onChange(value) {
        return setAttributes({
          seperatorStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('None')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Solid')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Dotted')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Dashed')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Double')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Groove')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Inset')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Outset')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Ridge')
      }]
    }), 'none' != seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Separator Width (%)'),
      value: seperatorWidth,
      onChange: function onChange(value) {
        return setAttributes({
          seperatorWidth: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Separator Thickness'),
      value: seperatorThickness,
      onChange: function onChange(value) {
        return setAttributes({
          seperatorThickness: value
        });
      },
      min: 0,
      max: 20,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Separator Color'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: seperatorColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: seperatorColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          seperatorColor: colorValue
        });
      },
      allowReset: true
    }))));
  }; // Typography settings.


  var typographySettings = function typographySettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Typography'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Title Tag'),
      value: headingTag,
      onChange: setheadingTag,
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H1')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H2')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H3')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H4')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H5')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('H6')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('P')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('SPAN')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Typography'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: titleLoadGoogleFonts,
        label: 'titleLoadGoogleFonts'
      },
      fontFamily: {
        value: titleFontFamily,
        label: 'titleFontFamily'
      },
      fontWeight: {
        value: titleFontWeight,
        label: 'titleFontWeight'
      },
      fontSubset: {
        value: titleFontSubset,
        label: 'titleFontSubset'
      },
      fontSizeType: {
        value: titleFontSizeType,
        label: 'titleFontSizeType'
      },
      fontSize: {
        value: titleFontSize,
        label: 'titleFontSize'
      },
      fontSizeMobile: {
        value: titleFontSizeMobile,
        label: 'titleFontSizeMobile'
      },
      fontSizeTablet: {
        value: titleFontSizeTablet,
        label: 'titleFontSizeTablet'
      },
      lineHeightType: {
        value: titleLineHeightType,
        label: 'titleLineHeightType'
      },
      lineHeight: {
        value: titleLineHeight,
        label: 'titleLineHeight'
      },
      lineHeightMobile: {
        value: titleLineHeightMobile,
        label: 'titleLineHeightMobile'
      },
      lineHeightTablet: {
        value: titleLineHeightTablet,
        label: 'titleLineHeightTablet'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Content')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Typography'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Price')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Typography'),
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
    })));
  };

  var inspectControl = function inspectControl() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('General'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Columns'),
      value: columns,
      onChange: setcolumns,
      min: 1,
      max: Math.min(maxColumns, menu_item_count)
    })), 'Tablet' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Columns'),
      value: tcolumns,
      onChange: function onChange(value) {
        return setAttributes({
          tcolumns: value
        });
      },
      min: 1,
      max: Math.min(maxColumns, menu_item_count)
    })), 'Mobile' === deviceType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Columns'),
      value: mcolumns,
      onChange: function onChange(value) {
        return setAttributes({
          mcolumns: value
        });
      },
      min: 1,
      max: Math.min(maxColumns, menu_item_count)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), imageSettings(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), separatorSettings()), marginSettings(), colorSettings(), typographySettings());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, inspectControl(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, loadTitleGoogleFonts, loadDescGoogleFonts, loadPriceGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

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