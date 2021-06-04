(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/taxonomy-list/settings"],{

/***/ "./src/blocks/taxonomy-list/settings.js":
/*!**********************************************!*\
  !*** ./src/blocks/taxonomy-list/settings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_box_shadow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/box-shadow */ "./src/components/box-shadow/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);










var Settings = function Settings(props) {
  props = props.parentProps; // Caching all Props.

  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      taxonomyList = _props.taxonomyList,
      termsList = _props.termsList,
      deviceType = _props.deviceType; // Caching all attributes.

  var postType = attributes.postType,
      taxonomyType = attributes.taxonomyType,
      layout = attributes.layout,
      columns = attributes.columns,
      tcolumns = attributes.tcolumns,
      mcolumns = attributes.mcolumns,
      bgColor = attributes.bgColor,
      titleColor = attributes.titleColor,
      countColor = attributes.countColor,
      rowGap = attributes.rowGap,
      columnGap = attributes.columnGap,
      contentPadding = attributes.contentPadding,
      contentPaddingMobile = attributes.contentPaddingMobile,
      contentPaddingTablet = attributes.contentPaddingTablet,
      titleBottomSpace = attributes.titleBottomSpace,
      alignment = attributes.alignment,
      listStyle = attributes.listStyle,
      seperatorStyle = attributes.seperatorStyle,
      seperatorWidth = attributes.seperatorWidth,
      seperatorThickness = attributes.seperatorThickness,
      seperatorColor = attributes.seperatorColor,
      listTextColor = attributes.listTextColor,
      hoverlistTextColor = attributes.hoverlistTextColor,
      listBottomMargin = attributes.listBottomMargin,
      listStyleColor = attributes.listStyleColor,
      hoverlistStyleColor = attributes.hoverlistStyleColor,
      noTaxDisplaytext = attributes.noTaxDisplaytext,
      boxShadowColor = attributes.boxShadowColor,
      boxShadowHOffset = attributes.boxShadowHOffset,
      boxShadowVOffset = attributes.boxShadowVOffset,
      boxShadowBlur = attributes.boxShadowBlur,
      boxShadowSpread = attributes.boxShadowSpread,
      boxShadowPosition = attributes.boxShadowPosition,
      showCount = attributes.showCount,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeType = attributes.titleFontSizeType,
      titleFontSizeMobile = attributes.titleFontSizeMobile,
      titleFontSizeTablet = attributes.titleFontSizeTablet,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleFontSubset = attributes.titleFontSubset,
      titleLineHeightType = attributes.titleLineHeightType,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightTablet = attributes.titleLineHeightTablet,
      titleLineHeightMobile = attributes.titleLineHeightMobile,
      titleLoadGoogleFonts = attributes.titleLoadGoogleFonts,
      countFontSize = attributes.countFontSize,
      countFontSizeType = attributes.countFontSizeType,
      countFontSizeMobile = attributes.countFontSizeMobile,
      countFontSizeTablet = attributes.countFontSizeTablet,
      countFontFamily = attributes.countFontFamily,
      countFontWeight = attributes.countFontWeight,
      countFontSubset = attributes.countFontSubset,
      countLineHeightType = attributes.countLineHeightType,
      countLineHeight = attributes.countLineHeight,
      countLineHeightTablet = attributes.countLineHeightTablet,
      countLineHeightMobile = attributes.countLineHeightMobile,
      countLoadGoogleFonts = attributes.countLoadGoogleFonts,
      listFontSize = attributes.listFontSize,
      listFontSizeType = attributes.listFontSizeType,
      listFontSizeMobile = attributes.listFontSizeMobile,
      listFontSizeTablet = attributes.listFontSizeTablet,
      listFontFamily = attributes.listFontFamily,
      listFontWeight = attributes.listFontWeight,
      listFontSubset = attributes.listFontSubset,
      listLineHeightType = attributes.listLineHeightType,
      listLineHeight = attributes.listLineHeight,
      listLineHeightTablet = attributes.listLineHeightTablet,
      listLineHeightMobile = attributes.listLineHeightMobile,
      listLoadGoogleFonts = attributes.listLoadGoogleFonts,
      showEmptyTaxonomy = attributes.showEmptyTaxonomy,
      borderStyle = attributes.borderStyle,
      borderThickness = attributes.borderThickness,
      borderColor = attributes.borderColor,
      borderRadius = attributes.borderRadius,
      listDisplayStyle = attributes.listDisplayStyle,
      showhierarchy = attributes.showhierarchy,
      titleTag = attributes.titleTag;
  var taxonomy_list_setting = showEmptyTaxonomy ? taxonomyList : termsList;
  var taxonomyListOptions = [{
    value: '',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Taxonomy', 'ultimate-addons-for-gutenberg')
  }];

  if ('' != taxonomy_list_setting && undefined != taxonomy_list_setting) {
    Object.keys(taxonomy_list_setting).map(function (item, thisIndex) {
      return taxonomyListOptions.push({
        value: taxonomyList[item].name,
        label: taxonomyList[item].label
      });
    });
  }

  var loadTitleGoogleFonts;
  var loadCountGoogleFonts;
  var loadListGoogleFonts;

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

  if (countLoadGoogleFonts == true) {
    var countconfig = {
      google: {
        families: [countFontFamily + (countFontWeight ? ':' + countFontWeight : '')]
      }
    };
    loadCountGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: countconfig
    });
  }

  if (listLoadGoogleFonts == true) {
    var listconfig = {
      google: {
        families: [listFontFamily + (listFontWeight ? ':' + listFontWeight : '')]
      }
    };
    loadListGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: listconfig
    });
  } // All Controls.


  var colorControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: listTextColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: listTextColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        listTextColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), 'none' != listStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bullet/Numbers Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: listStyleColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: listStyleColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        listStyleColor: colorValue
      });
    },
    allowReset: true
  })));
  var colorControlHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: hoverlistTextColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: hoverlistTextColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        hoverlistTextColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), 'none' != listStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bullet/Numbers Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: hoverlistStyleColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: hoverlistStyleColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        hoverlistStyleColor: colorValue
      });
    },
    allowReset: true
  })));

  var onSelectPostType = function onSelectPostType(value) {
    var _props2 = props,
        setAttributes = _props2.setAttributes;
    setAttributes({
      postType: value
    });
    setAttributes({
      categories: ''
    });
    setAttributes({
      taxonomyType: ''
    });
  };

  var onSelectTaxonomyType = function onSelectTaxonomyType(value) {
    var _props3 = props,
        setAttributes = _props3.setAttributes;
    setAttributes({
      taxonomyType: value
    });
    setAttributes({
      categories: ''
    });
  };

  var inspectorControlsSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
    value: titleTag,
    onChange: function onChange(value) {
      return setAttributes({
        titleTag: value
      });
    },
    options: [{
      value: 'div',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Div', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h1',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H1', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h2',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H2', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h3',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H3', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h4',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H4', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h5',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H5', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'h6',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H6', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
    value: layout,
    onChange: function onChange(value) {
      return setAttributes({
        layout: value
      });
    },
    options: [{
      value: 'grid',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Grid', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'list',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('List', 'ultimate-addons-for-gutenberg')
    }]
  }), 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__["default"], null), 'Desktop' === deviceType && 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Desktop Columns', 'ultimate-addons-for-gutenberg'),
    value: columns,
    onChange: function onChange(value) {
      return setAttributes({
        columns: value
      });
    },
    min: 1,
    max: 4
  })), 'Tablet' === deviceType && 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tab Columns', 'ultimate-addons-for-gutenberg'),
    value: tcolumns,
    onChange: function onChange(value) {
      return setAttributes({
        tcolumns: value
      });
    },
    min: 1,
    max: 3
  })), 'Mobile' === deviceType && 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mobile Columns', 'ultimate-addons-for-gutenberg'),
    value: mcolumns,
    onChange: function onChange(value) {
      return setAttributes({
        mcolumns: value
      });
    },
    min: 1,
    max: 2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Post Type', 'ultimate-addons-for-gutenberg'),
    value: postType,
    onChange: function onChange(value) {
      return onSelectPostType(value);
    },
    options: uagb_blocks_info.post_types
  }), '' != taxonomyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Taxonomy', 'ultimate-addons-for-gutenberg'),
    value: taxonomyType,
    onChange: function onChange(value) {
      return onSelectTaxonomyType(value);
    },
    options: taxonomyListOptions
  }), '' == taxonomyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
    autoComplete: "off",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Message', 'ultimate-addons-for-gutenberg'),
    value: noTaxDisplaytext,
    onChange: function onChange(value) {
      return setAttributes({
        noTaxDisplaytext: value
      });
    },
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('If Taxonomy Not Found', 'ultimate-addons-for-gutenberg')
  }), 'list' == layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Display Style', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    className: "uagb-list-display-style-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'list',
    label: "List",
    onClick: function onClick() {
      return setAttributes({
        listDisplayStyle: 'list'
      });
    },
    "aria-pressed": 'list' === listDisplayStyle,
    isPrimary: 'list' === listDisplayStyle
  }, "List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'dropdown',
    label: "Dropdown",
    onClick: function onClick() {
      return setAttributes({
        listDisplayStyle: 'dropdown'
      });
    },
    "aria-pressed": 'dropdown' === listDisplayStyle,
    isPrimary: 'dropdown' === listDisplayStyle
  }, "Dropdown"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Empty Taxonomy', 'ultimate-addons-for-gutenberg'),
    checked: showEmptyTaxonomy,
    onChange: function onChange() {
      return setAttributes({
        showEmptyTaxonomy: !showEmptyTaxonomy
      });
    },
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Empty Taxonomy in list ')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Posts Count', 'ultimate-addons-for-gutenberg'),
    checked: showCount,
    onChange: function onChange() {
      return setAttributes({
        showCount: !showCount
      });
    },
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Count of taxonomy ', 'ultimate-addons-for-gutenberg')
  }), 'list' == layout && 'list' == listDisplayStyle && 'post_tag' !== taxonomyType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Hierarchy', 'ultimate-addons-for-gutenberg'),
    checked: showhierarchy,
    onChange: function onChange() {
      return setAttributes({
        showhierarchy: !showhierarchy
      });
    },
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Hierarchy of taxonomy ', 'ultimate-addons-for-gutenberg')
  }), 'grid' == layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'left',
    icon: "editor-alignleft",
    label: "Left",
    onClick: function onClick() {
      return setAttributes({
        alignment: 'left'
      });
    },
    "aria-pressed": 'left' === alignment,
    isPrimary: 'left' === alignment
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'center',
    icon: "editor-aligncenter",
    label: "Center",
    onClick: function onClick() {
      return setAttributes({
        alignment: 'center'
      });
    },
    "aria-pressed": 'center' === alignment,
    isPrimary: 'center' === alignment
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'right',
    icon: "editor-alignright",
    label: "Right",
    onClick: function onClick() {
      return setAttributes({
        alignment: 'right'
      });
    },
    "aria-pressed": 'right' === alignment,
    isPrimary: 'right' === alignment
  })), 'list' == layout && 'dropdown' !== listDisplayStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('List Style', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'bullet',
    icon: "editor-ul",
    label: "Bullet",
    onClick: function onClick() {
      return setAttributes({
        listStyle: 'disc'
      });
    },
    "aria-pressed": 'disc' === listStyle,
    isPrimary: 'disc' === listStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'numbers',
    icon: "editor-ol",
    label: "Numbers",
    onClick: function onClick() {
      return setAttributes({
        listStyle: 'decimal'
      });
    },
    "aria-pressed": 'decimal' === listStyle,
    isPrimary: 'decimal' === listStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    key: 'none',
    icon: "menu",
    label: "None",
    onClick: function onClick() {
      return setAttributes({
        listStyle: 'none'
      });
    },
    "aria-pressed": 'none' === listStyle,
    isPrimary: 'none' === listStyle
  }))), 'dropdown' !== listDisplayStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, 'grid' == layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: bgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: bgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        bgColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: titleColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: titleColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        titleColor: colorValue
      });
    },
    allowReset: true
  }), showCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Count Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: countColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: countColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        countColor: colorValue
      });
    },
    allowReset: true
  }))), 'list' == layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TabPanel"], {
    className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
    activeClass: "active-tab",
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
      className: 'uagb-normal-tab'
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg'),
      className: 'uagb-hover-tab'
    }]
  }, function (tabName) {
    var colorTab;

    if ('normal' === tabName.name) {
      colorTab = colorControl;
    } else {
      colorTab = colorControlHover;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, colorTab);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, 'grid' == layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Row Gap', 'ultimate-addons-for-gutenberg'),
    value: rowGap,
    onChange: function onChange(value) {
      return setAttributes({
        rowGap: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Column Gap', 'ultimate-addons-for-gutenberg'),
    value: columnGap,
    onChange: function onChange(value) {
      return setAttributes({
        columnGap: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_4__["default"], null), 'Desktop' === deviceType && 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content Padding'),
    value: contentPadding,
    onChange: function onChange(value) {
      return setAttributes({
        contentPadding: value
      });
    },
    min: 10,
    max: 100
  })), 'Tablet' === deviceType && 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content Padding'),
    value: contentPaddingTablet,
    onChange: function onChange(value) {
      return setAttributes({
        contentPaddingTablet: value
      });
    },
    min: 0,
    max: 100
  })), 'Mobile' === deviceType && 'grid' === layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content Padding'),
    value: contentPaddingMobile,
    onChange: function onChange(value) {
      return setAttributes({
        contentPaddingMobile: value
      });
    },
    min: 0,
    max: 100
  })), showCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title Bottom Spacing', 'ultimate-addons-for-gutenberg'),
    value: titleBottomSpace,
    onChange: function onChange(value) {
      return setAttributes({
        titleBottomSpace: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }))), 'list' == layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Margin', 'ultimate-addons-for-gutenberg'),
    value: listBottomMargin,
    onChange: function onChange(value) {
      return setAttributes({
        listBottomMargin: value
      });
    },
    min: 0,
    max: 100,
    allowReset: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, 'grid' == layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title ', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
  }), showCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Count ', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: countLoadGoogleFonts,
      label: 'countLoadGoogleFonts'
    },
    fontFamily: {
      value: countFontFamily,
      label: 'countFontFamily'
    },
    fontWeight: {
      value: countFontWeight,
      label: 'countFontWeight'
    },
    fontSubset: {
      value: countFontSubset,
      label: 'countFontSubset'
    },
    fontSizeType: {
      value: countFontSizeType,
      label: 'countFontSizeType'
    },
    fontSize: {
      value: countFontSize,
      label: 'countFontSize'
    },
    fontSizeMobile: {
      value: countFontSizeMobile,
      label: 'countFontSizeMobile'
    },
    fontSizeTablet: {
      value: countFontSizeTablet,
      label: 'countFontSizeTablet'
    },
    lineHeightType: {
      value: countLineHeightType,
      label: 'countLineHeightType'
    },
    lineHeight: {
      value: countLineHeight,
      label: 'countLineHeight'
    },
    lineHeightMobile: {
      value: countLineHeightMobile,
      label: 'countLineHeightMobile'
    },
    lineHeightTablet: {
      value: countLineHeightTablet,
      label: 'countLineHeightTablet'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_box_shadow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Box Shadow', 'ultimate-addons-for-gutenberg'),
    boxShadowColor: {
      value: boxShadowColor,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
    },
    boxShadowHOffset: {
      value: boxShadowHOffset,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Horizontal', 'ultimate-addons-for-gutenberg')
    },
    boxShadowVOffset: {
      value: boxShadowVOffset,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Vertical', 'ultimate-addons-for-gutenberg')
    },
    boxShadowBlur: {
      value: boxShadowBlur,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Blur', 'ultimate-addons-for-gutenberg')
    },
    boxShadowSpread: {
      value: boxShadowSpread,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spread', 'ultimate-addons-for-gutenberg')
    },
    boxShadowPosition: {
      value: boxShadowPosition,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Position', 'ultimate-addons-for-gutenberg')
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Style', 'ultimate-addons-for-gutenberg'),
    value: borderStyle,
    onChange: function onChange(value) {
      return setAttributes({
        borderStyle: value
      });
    },
    options: [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'solid',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Solid', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'dotted',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'dashed',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'double',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Double', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'groove',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Groove', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'inset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'outset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Outset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ridge',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
    }]
  }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Thickness', 'ultimate-addons-for-gutenberg'),
    value: borderThickness,
    onChange: function onChange(value) {
      return setAttributes({
        borderThickness: value
      });
    },
    min: 0,
    max: 10,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Rounded Corners (px)', 'ultimate-addons-for-gutenberg'),
    value: borderRadius,
    onChange: function onChange(value) {
      setAttributes({
        borderRadius: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: borderColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: borderColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        borderColor: colorValue
      });
    },
    allowReset: true
  }))), 'list' == layout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Separator Style', 'ultimate-addons-for-gutenberg'),
    value: seperatorStyle,
    onChange: function onChange(value) {
      return setAttributes({
        seperatorStyle: value
      });
    },
    options: [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'solid',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Solid', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'dotted',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'dashed',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'double',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Double', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'groove',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Groove', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'inset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'outset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Outset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ridge',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
    }]
  }), 'none' != seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Separator Width (%)', 'ultimate-addons-for-gutenberg'),
    value: seperatorWidth,
    onChange: function onChange(value) {
      return setAttributes({
        seperatorWidth: value
      });
    },
    min: 0,
    max: 100,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Separator Thickness', 'ultimate-addons-for-gutenberg'),
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
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Separator Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('List ', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: listLoadGoogleFonts,
      label: 'listLoadGoogleFonts'
    },
    fontFamily: {
      value: listFontFamily,
      label: 'listFontFamily'
    },
    fontWeight: {
      value: listFontWeight,
      label: 'listFontWeight'
    },
    fontSubset: {
      value: listFontSubset,
      label: 'listFontSubset'
    },
    fontSizeType: {
      value: listFontSizeType,
      label: 'listFontSizeType'
    },
    fontSize: {
      value: listFontSize,
      label: 'listFontSize'
    },
    fontSizeMobile: {
      value: listFontSizeMobile,
      label: 'listFontSizeMobile'
    },
    fontSizeTablet: {
      value: listFontSizeTablet,
      label: 'listFontSizeTablet'
    },
    lineHeightType: {
      value: listLineHeightType,
      label: 'listLineHeightType'
    },
    lineHeight: {
      value: listLineHeight,
      label: 'listLineHeight'
    },
    lineHeightMobile: {
      value: listLineHeightMobile,
      label: 'listLineHeightMobile'
    },
    lineHeightTablet: {
      value: listLineHeightTablet,
      label: 'listLineHeightTablet'
    }
  })))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, inspectorControlsSettings, loadTitleGoogleFonts, loadCountGoogleFonts, loadListGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/box-shadow/index.js":
/*!********************************************!*\
  !*** ./src/components/box-shadow/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
 * Box-Shadow reusable component.
 *
 */


 // Extend component



var BoxShadowControl = /*#__PURE__*/function (_Component) {
  _inherits(BoxShadowControl, _Component);

  var _super = _createSuper(BoxShadowControl);

  function BoxShadowControl() {
    var _this;

    _classCallCheck(this, BoxShadowControl);

    _this = _super.apply(this, arguments);
    _this.onAdvancedControlClick = _this.onAdvancedControlClick.bind(_assertThisInitialized(_this));
    _this.onAdvancedControlReset = _this.onAdvancedControlReset.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BoxShadowControl, [{
    key: "onAdvancedControlClick",
    value: function onAdvancedControlClick() {
      var control = true;

      var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Hide Advanced", 'ultimate-addons-for-gutenberg');

      if (this.state !== null && this.state.showAdvancedControls === true) {
        control = false;
        label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Advanced", 'ultimate-addons-for-gutenberg');
      }

      this.setState({
        showAdvancedControls: control,
        showAdvancedControlsLabel: label
      });
    }
  }, {
    key: "onAdvancedControlReset",
    value: function onAdvancedControlReset() {
      var setAttributes = this.props.setAttributes;
      setAttributes({
        boxShadowColor: ""
      });
      setAttributes({
        boxShadowHOffset: ""
      });
      setAttributes({
        boxShadowVOffset: ""
      });
      setAttributes({
        boxShadowBlur: ""
      });
      setAttributes({
        boxShadowSpread: ""
      });
      setAttributes({
        boxShadowPosition: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          boxShadowColor = _this$props.boxShadowColor,
          boxShadowHOffset = _this$props.boxShadowHOffset,
          boxShadowVOffset = _this$props.boxShadowVOffset,
          boxShadowBlur = _this$props.boxShadowBlur,
          boxShadowSpread = _this$props.boxShadowSpread,
          boxShadowPosition = _this$props.boxShadowPosition;
      var advancedControls;
      var boxShadowAdvancedControls;
      var resetBoxShadowAdvancedControls;

      if (this.state !== null && true === this.state.showAdvancedControls) {
        advancedControls = /*#__PURE__*/React.createElement("div", {
          className: "uagb-box-shadow-advanced"
        }, /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("p", {
          className: "uagb-setting-label"
        }, boxShadowColor.label, /*#__PURE__*/React.createElement("span", {
          className: "components-base-control__label"
        }, /*#__PURE__*/React.createElement("span", {
          className: "component-color-indicator",
          style: {
            backgroundColor: boxShadowColor.value
          }
        }))), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["ColorPalette"], {
          value: boxShadowColor.value,
          onChange: function onChange(colorValue) {
            return setAttributes({
              boxShadowColor: colorValue
            });
          },
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowHOffset.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowHOffset.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowHOffset: value
            });
          },
          min: -100,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowVOffset.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowVOffset.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowVOffset: value
            });
          },
          min: -100,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowBlur.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowBlur.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowBlur: value
            });
          },
          min: 0,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("h2", null, boxShadowSpread.label), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          value: boxShadowSpread.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowSpread: value
            });
          },
          min: 0,
          max: 100,
          allowReset: true
        })), /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          label: boxShadowPosition.label,
          value: boxShadowPosition.value,
          onChange: function onChange(value) {
            return setAttributes({
              boxShadowPosition: value
            });
          },
          options: [{
            value: "inset",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Inset", 'ultimate-addons-for-gutenberg')
          }, {
            value: "outset",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Outset", 'ultimate-addons-for-gutenberg')
          }]
        })));
      }

      resetBoxShadowAdvancedControls = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "uagb-size-btn uagb-typography-reset-btn",
        isSmall: true,
        "aria-pressed": this.state !== null,
        onClick: this.onAdvancedControlReset
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "image-rotate"
      }));
      boxShadowAdvancedControls = /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "uagb-size-btn uagb-typography-control-btn",
        isSmall: true,
        "aria-pressed": this.state !== null,
        onClick: this.onAdvancedControlClick
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
        icon: "admin-tools"
      }));
      return /*#__PURE__*/React.createElement("div", {
        className: "uag-typography-option-actions"
      }, /*#__PURE__*/React.createElement("span", null, this.props.label), boxShadowAdvancedControls, resetBoxShadowAdvancedControls, advancedControls);
    }
  }]);

  return BoxShadowControl;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BoxShadowControl);

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