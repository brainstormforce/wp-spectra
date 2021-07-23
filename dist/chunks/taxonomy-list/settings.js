(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/taxonomy-list/settings"],{

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

/***/ })

}]);
//# sourceMappingURL=settings.js.map