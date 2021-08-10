(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/post-grid/settings"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/responsive-select/editor.lazy.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/responsive-select/editor.lazy.scss ***!
  \******************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".uagb-responsive-select-control .uagb-size-type-field-tabs .components-tab-panel__tabs {\n  padding-right: 0; }\n", "",{"version":3,"sources":["webpack://./src/components/responsive-select/editor.lazy.scss"],"names":[],"mappings":"AAAA;EACE,gBAAgB,EAAE","sourcesContent":[".uagb-responsive-select-control .uagb-size-type-field-tabs .components-tab-panel__tabs {\n  padding-right: 0; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/post/post-grid/settings.js":
/*!***********************************************!*\
  !*** ./src/blocks/post/post-grid/settings.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_responsive_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/responsive-select */ "./src/components/responsive-select/index.js");
/* harmony import */ var _components_border__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/border */ "./src/components/border/index.js");
/* harmony import */ var _components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _components_spacing_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * BLOCK: Post Grid - Settings.
 */














var MAX_POSTS_COLUMNS = 8;



var Settings = function Settings(props) {
  // Caching all Props
  var _props$parentProps = props.parentProps,
      attributes = _props$parentProps.attributes,
      setAttributes = _props$parentProps.setAttributes,
      latestPosts = _props$parentProps.latestPosts,
      categoriesList = _props$parentProps.categoriesList,
      deviceType = _props$parentProps.deviceType,
      taxonomyList = _props$parentProps.taxonomyList; // Caching all attributes.

  var displayPostTitle = attributes.displayPostTitle,
      displayPostDate = attributes.displayPostDate,
      displayPostComment = attributes.displayPostComment,
      displayPostExcerpt = attributes.displayPostExcerpt,
      displayPostAuthor = attributes.displayPostAuthor,
      displayPostImage = attributes.displayPostImage,
      displayPostTaxonomy = attributes.displayPostTaxonomy,
      imgSize = attributes.imgSize,
      imgPosition = attributes.imgPosition,
      displayPostLink = attributes.displayPostLink,
      newTab = attributes.newTab,
      ctaText = attributes.ctaText,
      borderWidth = attributes.borderWidth,
      borderStyle = attributes.borderStyle,
      borderColor = attributes.borderColor,
      borderHColor = attributes.borderHColor,
      borderRadius = attributes.borderRadius,
      btnVPadding = attributes.btnVPadding,
      btnHPadding = attributes.btnHPadding,
      align = attributes.align,
      columns = attributes.columns,
      tcolumns = attributes.tcolumns,
      mcolumns = attributes.mcolumns,
      order = attributes.order,
      orderBy = attributes.orderBy,
      categories = attributes.categories,
      postsToShow = attributes.postsToShow,
      rowGap = attributes.rowGap,
      columnGap = attributes.columnGap,
      bgColor = attributes.bgColor,
      contentPadding = attributes.contentPadding,
      contentPaddingMobile = attributes.contentPaddingMobile,
      contentPaddingUnit = attributes.contentPaddingUnit,
      contentPaddingTablet = attributes.contentPaddingTablet,
      titleColor = attributes.titleColor,
      titleTag = attributes.titleTag,
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
      metaFontSize = attributes.metaFontSize,
      metaFontSizeType = attributes.metaFontSizeType,
      metaFontSizeMobile = attributes.metaFontSizeMobile,
      metaFontSizeTablet = attributes.metaFontSizeTablet,
      metaFontFamily = attributes.metaFontFamily,
      metaFontWeight = attributes.metaFontWeight,
      metaFontSubset = attributes.metaFontSubset,
      metaLineHeightType = attributes.metaLineHeightType,
      metaLineHeight = attributes.metaLineHeight,
      metaLineHeightTablet = attributes.metaLineHeightTablet,
      metaLineHeightMobile = attributes.metaLineHeightMobile,
      metaLoadGoogleFonts = attributes.metaLoadGoogleFonts,
      excerptFontSize = attributes.excerptFontSize,
      excerptFontSizeType = attributes.excerptFontSizeType,
      excerptFontSizeTablet = attributes.excerptFontSizeTablet,
      excerptFontSizeMobile = attributes.excerptFontSizeMobile,
      excerptFontFamily = attributes.excerptFontFamily,
      excerptFontWeight = attributes.excerptFontWeight,
      excerptFontSubset = attributes.excerptFontSubset,
      excerptLineHeightType = attributes.excerptLineHeightType,
      excerptLineHeight = attributes.excerptLineHeight,
      excerptLineHeightTablet = attributes.excerptLineHeightTablet,
      excerptLineHeightMobile = attributes.excerptLineHeightMobile,
      excerptLoadGoogleFonts = attributes.excerptLoadGoogleFonts,
      ctaFontSize = attributes.ctaFontSize,
      ctaFontSizeType = attributes.ctaFontSizeType,
      ctaFontSizeTablet = attributes.ctaFontSizeTablet,
      ctaFontSizeMobile = attributes.ctaFontSizeMobile,
      ctaFontFamily = attributes.ctaFontFamily,
      ctaFontWeight = attributes.ctaFontWeight,
      ctaFontSubset = attributes.ctaFontSubset,
      ctaLineHeightType = attributes.ctaLineHeightType,
      ctaLineHeight = attributes.ctaLineHeight,
      ctaLineHeightTablet = attributes.ctaLineHeightTablet,
      ctaLineHeightMobile = attributes.ctaLineHeightMobile,
      ctaLoadGoogleFonts = attributes.ctaLoadGoogleFonts,
      metaColor = attributes.metaColor,
      excerptColor = attributes.excerptColor,
      ctaColor = attributes.ctaColor,
      ctaBgColor = attributes.ctaBgColor,
      ctaHColor = attributes.ctaHColor,
      ctaBgHColor = attributes.ctaBgHColor,
      imageBottomSpace = attributes.imageBottomSpace,
      titleBottomSpace = attributes.titleBottomSpace,
      metaBottomSpace = attributes.metaBottomSpace,
      excerptBottomSpace = attributes.excerptBottomSpace,
      excerptBottomSpaceUnit = attributes.excerptBottomSpaceUnit,
      ctaBottomSpace = attributes.ctaBottomSpace,
      equalHeight = attributes.equalHeight,
      excerptLength = attributes.excerptLength,
      overlayOpacity = attributes.overlayOpacity,
      bgOverlayColor = attributes.bgOverlayColor,
      linkBox = attributes.linkBox,
      postType = attributes.postType,
      taxonomyType = attributes.taxonomyType,
      postPagination = attributes.postPagination,
      pageLimit = attributes.pageLimit,
      paginationColor = attributes.paginationColor,
      paginationBgColor = attributes.paginationBgColor,
      paginationActiveColor = attributes.paginationActiveColor,
      paginationBgActiveColor = attributes.paginationBgActiveColor,
      paginationLayout = attributes.paginationLayout,
      paginationBorderSize = attributes.paginationBorderSize,
      paginationBorderRadius = attributes.paginationBorderRadius,
      paginationBorderColor = attributes.paginationBorderColor,
      paginationBorderActiveColor = attributes.paginationBorderActiveColor,
      paginationSpacing = attributes.paginationSpacing,
      paginationAlignment = attributes.paginationAlignment,
      paginationPrevText = attributes.paginationPrevText,
      paginationNextText = attributes.paginationNextText,
      inheritFromTheme = attributes.inheritFromTheme,
      postDisplaytext = attributes.postDisplaytext,
      displayPostContentRadio = attributes.displayPostContentRadio,
      excludeCurrentPost = attributes.excludeCurrentPost,
      rowGapUnit = attributes.rowGapUnit,
      columnGapUnit = attributes.columnGapUnit,
      imageBottomSpaceUnit = attributes.imageBottomSpaceUnit,
      titleBottomSpaceUnit = attributes.titleBottomSpaceUnit,
      metaBottomSpaceUnit = attributes.metaBottomSpaceUnit,
      ctaBottomSpaceUnit = attributes.ctaBottomSpaceUnit,
      titleTransform = attributes.titleTransform,
      metaLinkTransform = attributes.metaLinkTransform,
      excerptTransform = attributes.excerptTransform,
      ctaTransform = attributes.ctaTransform,
      titleDecoration = attributes.titleDecoration,
      metaLinkDecoration = attributes.metaLinkDecoration,
      excerptDecoration = attributes.excerptDecoration,
      ctaDecoration = attributes.ctaDecoration,
      paddingBtnTop = attributes.paddingBtnTop,
      paddingBtnBottom = attributes.paddingBtnBottom,
      paddingBtnLeft = attributes.paddingBtnLeft,
      paddingBtnRight = attributes.paddingBtnRight,
      paddingBtnTopTablet = attributes.paddingBtnTopTablet,
      paddingBtnRightTablet = attributes.paddingBtnRightTablet,
      paddingBtnBottomTablet = attributes.paddingBtnBottomTablet,
      paddingBtnLeftTablet = attributes.paddingBtnLeftTablet,
      paddingBtnTopMobile = attributes.paddingBtnTopMobile,
      paddingBtnRightMobile = attributes.paddingBtnRightMobile,
      paddingBtnBottomMobile = attributes.paddingBtnBottomMobile,
      paddingBtnLeftMobile = attributes.paddingBtnLeftMobile,
      paddingBtnUnit = attributes.paddingBtnUnit,
      mobilePaddingBtnUnit = attributes.mobilePaddingBtnUnit,
      tabletPaddingBtnUnit = attributes.tabletPaddingBtnUnit,
      spacingLink = attributes.spacingLink,
      paddingTop = attributes.paddingTop,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      paddingRight = attributes.paddingRight,
      paddingTopTablet = attributes.paddingTopTablet,
      paddingRightTablet = attributes.paddingRightTablet,
      paddingBottomTablet = attributes.paddingBottomTablet,
      paddingLeftTablet = attributes.paddingLeftTablet,
      paddingTopMobile = attributes.paddingTopMobile,
      paddingRightMobile = attributes.paddingRightMobile,
      paddingBottomMobile = attributes.paddingBottomMobile,
      paddingLeftMobile = attributes.paddingLeftMobile,
      paddingUnit = attributes.paddingUnit,
      mobilePaddingUnit = attributes.mobilePaddingUnit,
      tabletPaddingUnit = attributes.tabletPaddingUnit;
  var hasPosts = Array.isArray(latestPosts) && latestPosts.length;

  var onSelectPostType = function onSelectPostType(value) {
    setAttributes({
      postType: value
    });
    setAttributes({
      categories: ''
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

  var onSelectPagination = function onSelectPagination(value) {
    setAttributes({
      postPagination: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  var onChangePostsPerPage = function onChangePostsPerPage(value) {
    setAttributes({
      postsToShow: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  var onChangePageLimit = function onChangePageLimit(value) {
    setAttributes({
      pageLimit: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  var onChangePrevText = function onChangePrevText(value) {
    setAttributes({
      paginationPrevText: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  var onChangeNextText = function onChangeNextText(value) {
    setAttributes({
      paginationNextText: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  var taxonomyListOptions = [];
  var categoryListOptions = [{
    value: '',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('All', 'ultimate-addons-for-gutenberg')
  }];

  if ('' != taxonomyList) {
    Object.keys(taxonomyList).map(function (item) {
      return taxonomyListOptions.push({
        value: taxonomyList[item].name,
        label: taxonomyList[item].label
      });
    });
  }

  if ('' != categoriesList) {
    Object.keys(categoriesList).map(function (item) {
      return categoryListOptions.push({
        value: categoriesList[item].id,
        label: categoriesList[item].name
      });
    });
  }

  var blockControlsSettings = function blockControlsSettings() {
    var isEditing = props.state.isEditing;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["BlockAlignmentToolbar"], {
      value: align,
      onChange: function onChange(value) {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToolbarGroup"], {
      controls: [{
        icon: 'edit',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Edit'),
        onClick: function onClick() {
          return props.togglePreview();
        },
        isActive: isEditing
      }]
    }));
  };

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
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: titleconfig
    });
  }

  if (metaLoadGoogleFonts == true) {
    var metaconfig = {
      google: {
        families: [metaFontFamily + (metaFontWeight ? ':' + metaFontWeight : '')]
      }
    };
    loadMetaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: metaconfig
    });
  }

  if (excerptLoadGoogleFonts == true) {
    var excerptconfig = {
      google: {
        families: [excerptFontFamily + (excerptFontWeight ? ':' + excerptFontWeight : '')]
      }
    };
    loadExcerptGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: excerptconfig
    });
  }

  if (ctaLoadGoogleFonts == true) {
    var ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: ctaconfig
    });
  }

  var generalSettings = function generalSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Post Type', 'ultimate-addons-for-gutenberg'),
      value: postType,
      onChange: function onChange(value) {
        return onSelectPostType(value);
      },
      options: uagb_blocks_info.post_types
    }), '' != taxonomyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Taxonomy', 'ultimate-addons-for-gutenberg'),
      value: taxonomyType,
      onChange: function onChange(value) {
        return onSelectTaxonomyType(value);
      },
      options: taxonomyListOptions
    }), '' != categoriesList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: taxonomyList[taxonomyType].label,
      value: categories,
      onChange: function onChange(value) {
        return setAttributes({
          categories: value
        });
      },
      options: categoryListOptions
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Exclude Current Post', 'ultimate-addons-for-gutenberg'),
      checked: excludeCurrentPost,
      onChange: function onChange() {
        return setAttributes({
          excludeCurrentPost: !excludeCurrentPost
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Posts Per Page', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: postsToShow,
      onChange: onChangePostsPerPage,
      min: 0,
      max: 500,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Order By'),
      value: orderBy,
      onChange: function onChange(value) {
        return setAttributes({
          orderBy: value
        });
      },
      options: [{
        value: 'date',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Date', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'rand',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Random', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'menu_order',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Menu Order', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Order'),
      value: order,
      onChange: function onChange(value) {
        return setAttributes({
          order: value
        });
      },
      options: [{
        value: 'desc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Descending', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'asc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Ascending', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_responsive_slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Columns', "ultimate-addons-for-gutenberg"),
      data: {
        desktop: {
          value: columns,
          label: "columns"
        },
        tablet: {
          value: tcolumns,
          label: "tcolumns"
        },
        mobile: {
          value: mcolumns,
          label: "mcolumns"
        }
      },
      min: 0,
      max: !hasPosts ? MAX_POSTS_COLUMNS : Math.min(MAX_POSTS_COLUMNS, latestPosts.length),
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Equal Height', 'ultimate-addons-for-gutenberg'),
      checked: equalHeight,
      onChange: function onChange() {
        return setAttributes({
          equalHeight: !equalHeight
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Post Pagination', 'ultimate-addons-for-gutenberg'),
      checked: postPagination,
      onChange: onSelectPagination
    }), postPagination == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Page Limit', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: pageLimit,
      onChange: onChangePageLimit,
      min: 0,
      max: 100,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('If Posts Not Found', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
      autoComplete: "off",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display Message', 'ultimate-addons-for-gutenberg'),
      value: postDisplaytext,
      onChange: function onChange(value) {
        return setAttributes({
          postDisplaytext: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Inherit Styling from Theme', 'ultimate-addons-for-gutenberg'),
      checked: inheritFromTheme,
      onChange: function onChange() {
        return setAttributes({
          inheritFromTheme: !inheritFromTheme
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('This will inherit all the Typography and colors for Title, Meta, Excerpt and Read More button from the theme.', 'ultimate-addons-for-gutenberg')
    }));
  };

  var paginationSettings = function paginationSettings() {
    if (true !== postPagination) {
      return;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Pagination', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Pagination Layout', 'ultimate-addons-for-gutenberg'),
      value: paginationLayout,
      onChange: function onChange(value) {
        return setAttributes({
          paginationLayout: value
        });
      },
      options: [{
        value: 'border',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'filled',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Filled', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Pagination Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Button"], {
      key: 'left',
      icon: "editor-alignleft",
      label: "Left",
      onClick: function onClick() {
        return setAttributes({
          paginationAlignment: 'left'
        });
      },
      "aria-pressed": 'left' === paginationAlignment,
      isPrimary: 'left' === paginationAlignment
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Button"], {
      key: 'center',
      icon: "editor-aligncenter",
      label: "Right",
      onClick: function onClick() {
        return setAttributes({
          paginationAlignment: 'center'
        });
      },
      "aria-pressed": 'center' === paginationAlignment,
      isPrimary: 'center' === paginationAlignment
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Button"], {
      key: 'right',
      icon: "editor-alignright",
      label: "Right",
      onClick: function onClick() {
        return setAttributes({
          paginationAlignment: 'right'
        });
      },
      "aria-pressed": 'right' === paginationAlignment,
      isPrimary: 'right' === paginationAlignment
    }), paginationLayout == 'filled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Color', "ultimate-addons-for-gutenberg"),
      colorValue: paginationBgColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          paginationBgColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Active Color', "ultimate-addons-for-gutenberg"),
      colorValue: paginationBgActiveColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          paginationBgActiveColor: value
        });
      }
    })), paginationLayout == 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_border__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setAttributes: setAttributes,
      borderWidth: {
        value: paginationBorderSize,
        label: 'paginationBorderSize',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Size', "ultimate-addons-for-gutenberg")
      },
      borderRadius: {
        value: paginationBorderRadius,
        label: 'paginationBorderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Radius", "ultimate-addons-for-gutenberg")
      },
      borderColor: {
        value: paginationBorderColor,
        label: 'paginationBorderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Color", "ultimate-addons-for-gutenberg")
      },
      borderHoverColor: {
        value: paginationBorderActiveColor,
        label: 'paginationBorderActiveColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Hover Color", "ultimate-addons-for-gutenberg")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Text Color', "ultimate-addons-for-gutenberg"),
      colorValue: paginationColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          paginationColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Text Active Color', "ultimate-addons-for-gutenberg"),
      colorValue: paginationActiveColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          paginationActiveColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Spacing', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: paginationSpacing,
      onChange: function onChange(value) {
        return setAttributes({
          paginationSpacing: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('This spacing is between the Post Grid and the Pagination', 'ultimate-addons-for-gutenberg'),
      min: 0,
      max: 500
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Previous Text', 'ultimate-addons-for-gutenberg'),
      value: paginationPrevText,
      onChange: onChangePrevText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Next Text', 'ultimate-addons-for-gutenberg'),
      value: paginationNextText,
      onChange: onChangeNextText
    })));
  };

  var imageSettings = function imageSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Featured Image', 'ultimate-addons-for-gutenberg'),
      checked: displayPostImage,
      onChange: function onChange() {
        return setAttributes({
          displayPostImage: !displayPostImage
        });
      }
    }), displayPostImage == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image Sizes', 'ultimate-addons-for-gutenberg'),
      value: imgSize,
      onChange: function onChange(value) {
        return setAttributes({
          imgSize: value
        });
      },
      options: uagb_blocks_info.image_sizes
    }), displayPostImage == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image Position', 'ultimate-addons-for-gutenberg'),
      value: imgPosition,
      onChange: function onChange(value) {
        return setAttributes({
          imgPosition: value
        });
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'background',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background', 'ultimate-addons-for-gutenberg')
      }]
    }), displayPostImage == true && imgPosition == 'background' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Link Complete Box', 'ultimate-addons-for-gutenberg'),
      checked: linkBox,
      onChange: function onChange() {
        return setAttributes({
          linkBox: !linkBox
        });
      }
    }));
  };

  var contentSettings = function contentSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Title', 'ultimate-addons-for-gutenberg'),
      checked: displayPostTitle,
      onChange: function onChange() {
        return setAttributes({
          displayPostTitle: !displayPostTitle
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Author', 'ultimate-addons-for-gutenberg'),
      checked: displayPostAuthor,
      onChange: function onChange() {
        return setAttributes({
          displayPostAuthor: !displayPostAuthor
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Date', 'ultimate-addons-for-gutenberg'),
      checked: displayPostDate,
      onChange: function onChange() {
        return setAttributes({
          displayPostDate: !displayPostDate
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Comment', 'ultimate-addons-for-gutenberg'),
      checked: displayPostComment,
      onChange: function onChange() {
        return setAttributes({
          displayPostComment: !displayPostComment
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Taxonomy', 'ultimate-addons-for-gutenberg'),
      checked: displayPostTaxonomy,
      onChange: function onChange() {
        return setAttributes({
          displayPostTaxonomy: !displayPostTaxonomy
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Excerpt', 'ultimate-addons-for-gutenberg'),
      checked: displayPostExcerpt,
      onChange: function onChange() {
        return setAttributes({
          displayPostExcerpt: !displayPostExcerpt
        });
      }
    }), displayPostExcerpt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["RadioControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show:', 'ultimate-addons-for-gutenberg'),
      selected: displayPostContentRadio,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Excerpt', 'ultimate-addons-for-gutenberg'),
        value: 'excerpt'
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Full post', 'ultimate-addons-for-gutenberg'),
        value: 'full_post'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          displayPostContentRadio: value
        });
      }
    }), displayPostExcerpt && displayPostContentRadio === 'excerpt' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Max number of words in excerpt', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: excerptLength,
      onChange: function onChange(value) {
        return setAttributes({
          excerptLength: value
        });
      },
      min: 1,
      max: 100
    }));
  };

  var readMoreLinkSettings = function readMoreLinkSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Read More Link', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Show Read More Link', 'ultimate-addons-for-gutenberg'),
      checked: displayPostLink,
      onChange: function onChange() {
        return setAttributes({
          displayPostLink: !displayPostLink
        });
      }
    }), displayPostLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Open links in New Tab', 'ultimate-addons-for-gutenberg'),
      checked: newTab,
      onChange: function onChange() {
        return setAttributes({
          newTab: !newTab
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Text', 'ultimate-addons-for-gutenberg'),
      value: ctaText,
      onChange: function onChange(value) {
        return setAttributes({
          ctaText: value
        });
      }
    })));
  };

  var spacingSettings = function spacingSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Vertical Spacing', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: rowGap,
      onChange: function onChange(value) {
        return setAttributes({
          rowGap: value
        });
      },
      min: 0,
      max: 50,
      unit: {
        value: rowGapUnit,
        label: "rowGapUnit"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Horizontal Spacing', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: columnGap,
      onChange: function onChange(value) {
        return setAttributes({
          columnGap: value
        });
      },
      min: 0,
      max: 50,
      unit: {
        value: columnGapUnit,
        label: "columnGapUnit"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Content Padding", "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: paddingTop,
        label: "paddingTop"
      },
      valueRight: {
        value: paddingRight,
        label: "paddingRight"
      },
      valueBottom: {
        value: paddingBottom,
        label: "paddingBottom"
      },
      valueLeft: {
        value: paddingLeft,
        label: "paddingLeft"
      },
      valueTopTablet: {
        value: paddingTopTablet,
        label: "paddingTopTablet"
      },
      valueRightTablet: {
        value: paddingRightTablet,
        label: "paddingRightTablet"
      },
      valueBottomTablet: {
        value: paddingBottomTablet,
        label: "paddingBottomTablet"
      },
      valueLeftTablet: {
        value: paddingLeftTablet,
        label: "paddingLeftTablet"
      },
      valueTopMobile: {
        value: paddingTopMobile,
        label: "paddingTopMobile"
      },
      valueRightMobile: {
        value: paddingRightMobile,
        label: "paddingRightMobile"
      },
      valueBottomMobile: {
        value: paddingBottomMobile,
        label: "paddingBottomMobile"
      },
      valueLeftMobile: {
        value: paddingLeftMobile,
        label: "paddingLeftMobile"
      },
      unit: {
        value: paddingUnit,
        label: "paddingUnit"
      },
      mUnit: {
        value: mobilePaddingUnit,
        label: "mobilePaddingUnit"
      },
      tUnit: {
        value: tabletPaddingUnit,
        label: "tabletPaddingUnit"
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: "spacingLink"
      }
    })));
  };

  var imageStyle = function imageStyle() {
    return displayPostImage == true && imgPosition == 'background' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Overlay Color', "ultimate-addons-for-gutenberg"),
      colorValue: bgOverlayColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          bgOverlayColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Overlay Opacity', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: overlayOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          overlayOpacity: value
        });
      },
      min: 0,
      max: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image Bottom Spacing', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: imageBottomSpace,
      onChange: function onChange(value) {
        return setAttributes({
          imageBottomSpace: value
        });
      },
      min: 0,
      max: 50,
      unit: {
        value: imageBottomSpaceUnit,
        label: "imageBottomSpaceUnit"
      }
    }));
  };

  var titleStyle = function titleStyle() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Html Tag', 'ultimate-addons-for-gutenberg'),
      value: titleTag,
      onChange: function onChange(value) {
        return setAttributes({
          titleTag: value
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
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('p', 'ultimate-addons-for-gutenberg')
      }]
    }), !inheritFromTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color', "ultimate-addons-for-gutenberg"),
      colorValue: titleColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          titleColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      },
      transform: {
        value: titleTransform,
        label: "titleTransform"
      },
      decoration: {
        value: titleDecoration,
        label: "titleDecoration"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom Spacing', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: titleBottomSpace,
      onChange: function onChange(value) {
        return setAttributes({
          titleBottomSpace: value
        });
      },
      min: 0,
      max: 50,
      unit: {
        value: titleBottomSpaceUnit,
        label: "titleBottomSpaceUnit"
      }
    })));
  };

  var metaStyle = function metaStyle() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Meta', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color', "ultimate-addons-for-gutenberg"),
      colorValue: metaColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          metaColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: metaLoadGoogleFonts,
        label: 'metaLoadGoogleFonts'
      },
      fontFamily: {
        value: metaFontFamily,
        label: 'metaFontFamily'
      },
      fontWeight: {
        value: metaFontWeight,
        label: 'metaFontWeight'
      },
      fontSubset: {
        value: metaFontSubset,
        label: 'metaFontSubset'
      },
      fontSizeType: {
        value: metaFontSizeType,
        label: 'metaFontSizeType'
      },
      fontSize: {
        value: metaFontSize,
        label: 'metaFontSize'
      },
      fontSizeMobile: {
        value: metaFontSizeMobile,
        label: 'metaFontSizeMobile'
      },
      fontSizeTablet: {
        value: metaFontSizeTablet,
        label: 'metaFontSizeTablet'
      },
      lineHeightType: {
        value: metaLineHeightType,
        label: 'metaLineHeightType'
      },
      lineHeight: {
        value: metaLineHeight,
        label: 'metaLineHeight'
      },
      lineHeightMobile: {
        value: metaLineHeightMobile,
        label: 'metaLineHeightMobile'
      },
      lineHeightTablet: {
        value: metaLineHeightTablet,
        label: 'metaLineHeightTablet'
      },
      transform: {
        value: metaLinkTransform,
        label: "metaLinkTransform"
      },
      decoration: {
        value: metaLinkDecoration,
        label: "metaLinkDecoration"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom Spacing', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: metaBottomSpace,
      onChange: function onChange(value) {
        return setAttributes({
          metaBottomSpace: value
        });
      },
      min: 0,
      max: 50,
      unit: {
        value: metaBottomSpaceUnit,
        label: "metaBottomSpaceUnit"
      }
    }));
  };

  var excerptStyle = function excerptStyle() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Excerpt', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: excerptLoadGoogleFonts,
        label: 'excerptLoadGoogleFonts'
      },
      fontFamily: {
        value: excerptFontFamily,
        label: 'excerptFontFamily'
      },
      fontWeight: {
        value: excerptFontWeight,
        label: 'excerptFontWeight'
      },
      fontSubset: {
        value: excerptFontSubset,
        label: 'excerptFontSubset'
      },
      fontSizeType: {
        value: excerptFontSizeType,
        label: 'excerptFontSizeType'
      },
      fontSize: {
        value: excerptFontSize,
        label: 'excerptFontSize'
      },
      fontSizeMobile: {
        value: excerptFontSizeMobile,
        label: 'excerptFontSizeMobile'
      },
      fontSizeTablet: {
        value: excerptFontSizeTablet,
        label: 'excerptFontSizeTablet'
      },
      lineHeightType: {
        value: excerptLineHeightType,
        label: 'excerptLineHeightType'
      },
      lineHeight: {
        value: excerptLineHeight,
        label: 'excerptLineHeight'
      },
      lineHeightMobile: {
        value: excerptLineHeightMobile,
        label: 'excerptLineHeightMobile'
      },
      lineHeightTablet: {
        value: excerptLineHeightTablet,
        label: 'excerptLineHeightTablet'
      },
      transform: {
        value: excerptTransform,
        label: "excerptTransform"
      },
      decoration: {
        value: excerptDecoration,
        label: "excerptDecoration"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color', "ultimate-addons-for-gutenberg"),
      colorValue: excerptColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          excerptColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom Spacing', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: excerptBottomSpace,
      onChange: function onChange(value) {
        return setAttributes({
          excerptBottomSpace: value
        });
      },
      min: 0,
      max: 50,
      unit: {
        value: excerptBottomSpaceUnit,
        label: "excerptBottomSpaceUnit"
      }
    }));
  };

  var readMoreLinkStyleSettings = function readMoreLinkStyleSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Read More Link', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: ctaLoadGoogleFonts,
        label: 'ctaLoadGoogleFonts'
      },
      fontFamily: {
        value: ctaFontFamily,
        label: 'ctaFontFamily'
      },
      fontWeight: {
        value: ctaFontWeight,
        label: 'ctaFontWeight'
      },
      fontSubset: {
        value: ctaFontSubset,
        label: 'ctaFontSubset'
      },
      fontSizeType: {
        value: ctaFontSizeType,
        label: 'ctaFontSizeType'
      },
      fontSize: {
        value: ctaFontSize,
        label: 'ctaFontSize'
      },
      fontSizeMobile: {
        value: ctaFontSizeMobile,
        label: 'ctaFontSizeMobile'
      },
      fontSizeTablet: {
        value: ctaFontSizeTablet,
        label: 'ctaFontSizeTablet'
      },
      lineHeightType: {
        value: ctaLineHeightType,
        label: 'ctaLineHeightType'
      },
      lineHeight: {
        value: ctaLineHeight,
        label: 'ctaLineHeight'
      },
      lineHeightMobile: {
        value: ctaLineHeightMobile,
        label: 'ctaLineHeightMobile'
      },
      lineHeightTablet: {
        value: ctaLineHeightTablet,
        label: 'ctaLineHeightTablet'
      },
      transform: {
        value: ctaTransform,
        label: "ctaTransform"
      },
      decoration: {
        value: ctaDecoration,
        label: "ctaDecoration"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom Spacing', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: ctaBottomSpace,
      onChange: function onChange(value) {
        return setAttributes({
          ctaBottomSpace: value
        });
      },
      min: 0,
      max: 500,
      unit: {
        value: ctaBottomSpaceUnit,
        label: "ctaBottomSpaceUnit"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_border__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: 'borderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Style", "ultimate-addons-for-gutenberg")
      },
      borderWidth: {
        value: borderWidth,
        label: 'borderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Width", "ultimate-addons-for-gutenberg")
      },
      borderRadius: {
        value: borderRadius,
        label: 'borderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Radius", "ultimate-addons-for-gutenberg")
      },
      borderColor: {
        value: borderColor,
        label: 'borderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Color", "ultimate-addons-for-gutenberg")
      },
      borderHoverColor: {
        value: borderHColor,
        label: 'borderHColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Border Hover Color", "ultimate-addons-for-gutenberg")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])("Button Padding", "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: paddingBtnTop,
        label: "paddingBtnTop"
      },
      valueRight: {
        value: paddingBtnRight,
        label: "paddingBtnRight"
      },
      valueBottom: {
        value: paddingBtnBottom,
        label: "paddingBtnBottom"
      },
      valueLeft: {
        value: paddingBtnLeft,
        label: "paddingBtnLeft"
      },
      valueTopTablet: {
        value: paddingBtnTopTablet,
        label: "paddingBtnTopTablet"
      },
      valueRightTablet: {
        value: paddingBtnRightTablet,
        label: "paddingBtnRightTablet"
      },
      valueBottomTablet: {
        value: paddingBtnBottomTablet,
        label: "paddingBtnBottomTablet"
      },
      valueLeftTablet: {
        value: paddingBtnLeftTablet,
        label: "paddingBtnLeftTablet"
      },
      valueTopMobile: {
        value: paddingBtnTopMobile,
        label: "paddingBtnTopMobile"
      },
      valueRightMobile: {
        value: paddingBtnRightMobile,
        label: "paddingBtnRightMobile"
      },
      valueBottomMobile: {
        value: paddingBtnBottomMobile,
        label: "paddingBtnBottomMobile"
      },
      valueLeftMobile: {
        value: paddingBtnLeftMobile,
        label: "paddingBtnLeftMobile"
      },
      unit: {
        value: paddingBtnUnit,
        label: "paddingBtnUnit"
      },
      mUnit: {
        value: mobilePaddingBtnUnit,
        label: "mobilePaddingBtnUnit"
      },
      tUnit: {
        value: tabletPaddingBtnUnit,
        label: "tabletPaddingBtnUnit"
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: "spacingLink"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Hover Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaHColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaHColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaBgColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaBgColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Hover Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaBgHColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaBgHColor: value
        });
      }
    }));
  };

  var inspectorControlsSettings = function inspectorControlsSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "general"
    }, generalSettings(), paginationSettings(), imageSettings(), contentSettings(), readMoreLinkSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "style"
    }, !inheritFromTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, displayPostTitle && titleStyle(), (displayPostAuthor || displayPostDate || displayPostComment || displayPostTaxonomy) && metaStyle(), displayPostExcerpt && excerptStyle(), displayPostLink && readMoreLinkStyleSettings()), displayPostImage && imageStyle(), spacingSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: "advance"
    })));
  };

  if (!hasPosts) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, inspectorControlsSettings());
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, blockControlsSettings(), inspectorControlsSettings(), loadTitleGoogleFonts, loadMetaGoogleFonts, loadExcerptGoogleFonts, loadCtaGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/responsive-select/editor.lazy.scss":
/*!***********************************************************!*\
  !*** ./src/components/responsive-select/editor.lazy.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/responsive-select/editor.lazy.scss");

            

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

/***/ "./src/components/responsive-select/index.js":
/*!***************************************************!*\
  !*** ./src/components/responsive-select/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/responsive-select/editor.lazy.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * External dependencies
 */







var ResponsiveSelectControl = function ResponsiveSelectControl(props) {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_0__["default"].use();
    return function () {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_0__["default"].unuse();
    };
  }, []);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      displayResponsive = _useState2[0],
      toggleResponsive = _useState2[1];

  var label = props.label,
      data = props.data,
      setAttributes = props.setAttributes,
      options = props.options;
  var deviceType = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select("core/edit-post").__experimentalGetPreviewDeviceType();
  }, []);

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])("core/edit-post"),
      setPreviewDeviceType = _useDispatch.__experimentalSetPreviewDeviceType;

  var customSetPreviewDeviceType = function customSetPreviewDeviceType(device) {
    setPreviewDeviceType(device);
    toggleResponsive(!displayResponsive);
  };

  var devicesSvgs = {
    desktop: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z",
      fill: "#007CBA"
    })),
    tablet: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z",
      fill: "#5A5A5A"
    })),
    mobile: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z",
      fill: "#5A5A5A"
    }))
  };
  var devices = [{
    name: "Desktop",
    title: devicesSvgs.desktop,
    itemClass: "uagb-desktop-tab uagb-responsive-tabs"
  }, {
    name: "Tablet",
    title: devicesSvgs.tablet,
    itemClass: "uagb-tablet-tab uagb-responsive-tabs"
  }, {
    name: "Mobile",
    key: "mobile",
    title: devicesSvgs.mobile,
    itemClass: "uagb-mobile-tab uagb-responsive-tabs"
  }];
  var output = {};
  output.Desktop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    value: data.desktop.value,
    onChange: function onChange(value) {
      return setAttributes(_defineProperty({}, data.desktop.label, value));
    },
    options: options.desktop
  });
  output.Tablet = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    value: data.tablet.value,
    onChange: function onChange(value) {
      return setAttributes(_defineProperty({}, data.tablet.label, value));
    },
    options: options.tablet || options.desktop
  });
  output.Mobile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    value: data.mobile.value,
    onChange: function onChange(value) {
      return setAttributes(_defineProperty({}, data.mobile.label, value));
    },
    options: options.mobile || options.desktop
  });

  var commonResponsiveHandler = function commonResponsiveHandler() {
    toggleResponsive(!displayResponsive);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "components-base-control uagb-responsive-select-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-size-type-field-tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-control__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uag-responsive-label-wrap"
  }, props.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "uagb-range-control__label"
  }, props.label), !displayResponsive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    key: "uag-responsive-common-button",
    className: "uag-responsive-common-button",
    onClick: commonResponsiveHandler
  }, devicesSvgs[deviceType.toLowerCase()]), displayResponsive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    className: "uagb-range-control-responsive components-tab-panel__tabs",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Device", "ultimate-addons-for-gutenberg")
  }, devices.map(function (_ref) {
    var name = _ref.name,
        key = _ref.key,
        title = _ref.title,
        itemClass = _ref.itemClass;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      key: key,
      className: "components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ".concat(itemClass).concat(name === deviceType ? " active-tab" : ""),
      "aria-pressed": deviceType === name,
      onClick: function onClick() {
        return customSetPreviewDeviceType(name);
      }
    }, title);
  })))), output[deviceType] ? output[deviceType] : output.Desktop));
};

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveSelectControl);

/***/ })

}]);
//# sourceMappingURL=settings.js.map