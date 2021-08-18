(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/post-grid/settings"],{

/***/ "./src/blocks/post/post-grid/settings.js":
/*!***********************************************!*\
  !*** ./src/blocks/post/post-grid/settings.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/border */ "./src/components/border/index.js");
/* harmony import */ var _components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
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
      paginationSpacingUnit = attributes.paginationSpacingUnit,
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
      spacingLinkPadding = attributes.spacingLinkPadding,
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
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('All', 'ultimate-addons-for-gutenberg')
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["BlockAlignmentToolbar"], {
      value: align,
      onChange: function onChange(value) {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToolbarGroup"], {
      controls: [{
        icon: 'edit',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Edit'),
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
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: titleconfig
    });
  }

  if (metaLoadGoogleFonts == true) {
    var metaconfig = {
      google: {
        families: [metaFontFamily + (metaFontWeight ? ':' + metaFontWeight : '')]
      }
    };
    loadMetaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: metaconfig
    });
  }

  if (excerptLoadGoogleFonts == true) {
    var excerptconfig = {
      google: {
        families: [excerptFontFamily + (excerptFontWeight ? ':' + excerptFontWeight : '')]
      }
    };
    loadExcerptGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: excerptconfig
    });
  }

  if (ctaLoadGoogleFonts == true) {
    var ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: ctaconfig
    });
  }

  var generalSettings = function generalSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post Type', 'ultimate-addons-for-gutenberg'),
      value: postType,
      onChange: function onChange(value) {
        return onSelectPostType(value);
      },
      options: uagb_blocks_info.post_types
    }), '' != taxonomyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Taxonomy', 'ultimate-addons-for-gutenberg'),
      value: taxonomyType,
      onChange: function onChange(value) {
        return onSelectTaxonomyType(value);
      },
      options: taxonomyListOptions
    }), '' != categoriesList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: taxonomyList[taxonomyType].label,
      value: categories,
      onChange: function onChange(value) {
        return setAttributes({
          categories: value
        });
      },
      options: categoryListOptions
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Exclude Current Post', 'ultimate-addons-for-gutenberg'),
      checked: excludeCurrentPost,
      onChange: function onChange() {
        return setAttributes({
          excludeCurrentPost: !excludeCurrentPost
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Posts Per Page', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: postsToShow,
      onChange: onChangePostsPerPage,
      min: 0,
      max: 500,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Order By'),
      value: orderBy,
      onChange: function onChange(value) {
        return setAttributes({
          orderBy: value
        });
      },
      options: [{
        value: 'date',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Date', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'rand',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Random', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'menu_order',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Menu Order', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Order'),
      value: order,
      onChange: function onChange(value) {
        return setAttributes({
          order: value
        });
      },
      options: [{
        value: 'desc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Descending', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'asc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ascending', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Columns', "ultimate-addons-for-gutenberg"),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Equal Height', 'ultimate-addons-for-gutenberg'),
      checked: equalHeight,
      onChange: function onChange() {
        return setAttributes({
          equalHeight: !equalHeight
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post Pagination', 'ultimate-addons-for-gutenberg'),
      checked: postPagination,
      onChange: onSelectPagination
    }), postPagination == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Page Limit', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: pageLimit,
      onChange: onChangePageLimit,
      min: 0,
      max: 100,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('If Posts Not Found', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
      autoComplete: "off",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Display Message', 'ultimate-addons-for-gutenberg'),
      value: postDisplaytext,
      onChange: function onChange(value) {
        return setAttributes({
          postDisplaytext: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Inherit Styling from Theme', 'ultimate-addons-for-gutenberg'),
      checked: inheritFromTheme,
      onChange: function onChange() {
        return setAttributes({
          inheritFromTheme: !inheritFromTheme
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('This will inherit all the Typography and colors for Title, Meta, Excerpt and Read More button from the theme.', 'ultimate-addons-for-gutenberg')
    }));
  };

  var paginationSettings = function paginationSettings() {
    if (true !== postPagination) {
      return;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination Layout', 'ultimate-addons-for-gutenberg'),
      value: paginationLayout,
      onChange: function onChange(value) {
        return setAttributes({
          paginationLayout: value
        });
      },
      options: [{
        value: 'border',
        title: 'border',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'filled',
        title: 'filled',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Filled', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination Alignment', "ultimate-addons-for-gutenberg"),
      data: {
        value: paginationAlignment,
        label: "paginationAlignment"
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: "left",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])("fa fa-align-left")
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Left", "ultimate-addons-for-gutenberg")
      }, {
        value: "center",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])("fa fa-align-center")
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Center", "ultimate-addons-for-gutenberg")
      }, {
        value: "right",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])("fa fa-align-right")
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Right", "ultimate-addons-for-gutenberg")
      }],
      showIcons: true
    }), paginationLayout == 'filled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', "ultimate-addons-for-gutenberg"),
      colorValue: paginationBgColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          paginationBgColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Active Color', "ultimate-addons-for-gutenberg"),
      colorValue: paginationBgActiveColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          paginationBgActiveColor: value
        });
      }
    })), paginationLayout == 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setAttributes: setAttributes,
      borderWidth: {
        value: paginationBorderSize,
        label: 'paginationBorderSize',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Size', "ultimate-addons-for-gutenberg")
      },
      borderRadius: {
        value: paginationBorderRadius,
        label: 'paginationBorderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Radius", "ultimate-addons-for-gutenberg")
      },
      borderColor: {
        value: paginationBorderColor,
        label: 'paginationBorderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Color", "ultimate-addons-for-gutenberg")
      },
      borderHoverColor: {
        value: paginationBorderActiveColor,
        label: 'paginationBorderActiveColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Hover Color", "ultimate-addons-for-gutenberg")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Color', "ultimate-addons-for-gutenberg"),
      colorValue: paginationColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          paginationColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Active Color', "ultimate-addons-for-gutenberg"),
      colorValue: paginationActiveColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          paginationActiveColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: paginationSpacing,
      onChange: function onChange(value) {
        return setAttributes({
          paginationSpacing: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('This spacing is between the Post Grid and the Pagination', 'ultimate-addons-for-gutenberg'),
      min: 0,
      max: 500,
      unit: {
        value: paginationSpacingUnit,
        label: "paginationSpacingUnit"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Previous Text', 'ultimate-addons-for-gutenberg'),
      value: paginationPrevText,
      onChange: onChangePrevText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Next Text', 'ultimate-addons-for-gutenberg'),
      value: paginationNextText,
      onChange: onChangeNextText
    })));
  };

  var imageSettings = function imageSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Featured Image', 'ultimate-addons-for-gutenberg'),
      checked: displayPostImage,
      onChange: function onChange() {
        return setAttributes({
          displayPostImage: !displayPostImage
        });
      }
    }), displayPostImage == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Sizes', 'ultimate-addons-for-gutenberg'),
      value: imgSize,
      onChange: function onChange(value) {
        return setAttributes({
          imgSize: value
        });
      },
      options: uagb_blocks_info.image_sizes
    }), displayPostImage == true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Position', 'ultimate-addons-for-gutenberg'),
      value: imgPosition,
      onChange: function onChange(value) {
        return setAttributes({
          imgPosition: value
        });
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'background',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background', 'ultimate-addons-for-gutenberg')
      }]
    }), displayPostImage == true && imgPosition == 'background' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Link Complete Box', 'ultimate-addons-for-gutenberg'),
      checked: linkBox,
      onChange: function onChange() {
        return setAttributes({
          linkBox: !linkBox
        });
      }
    }));
  };

  var contentSettings = function contentSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Title', 'ultimate-addons-for-gutenberg'),
      checked: displayPostTitle,
      onChange: function onChange() {
        return setAttributes({
          displayPostTitle: !displayPostTitle
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Author', 'ultimate-addons-for-gutenberg'),
      checked: displayPostAuthor,
      onChange: function onChange() {
        return setAttributes({
          displayPostAuthor: !displayPostAuthor
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Date', 'ultimate-addons-for-gutenberg'),
      checked: displayPostDate,
      onChange: function onChange() {
        return setAttributes({
          displayPostDate: !displayPostDate
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Comment', 'ultimate-addons-for-gutenberg'),
      checked: displayPostComment,
      onChange: function onChange() {
        return setAttributes({
          displayPostComment: !displayPostComment
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Taxonomy', 'ultimate-addons-for-gutenberg'),
      checked: displayPostTaxonomy,
      onChange: function onChange() {
        return setAttributes({
          displayPostTaxonomy: !displayPostTaxonomy
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Excerpt', 'ultimate-addons-for-gutenberg'),
      checked: displayPostExcerpt,
      onChange: function onChange() {
        return setAttributes({
          displayPostExcerpt: !displayPostExcerpt
        });
      }
    }), displayPostExcerpt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["RadioControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show:', 'ultimate-addons-for-gutenberg'),
      selected: displayPostContentRadio,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Excerpt', 'ultimate-addons-for-gutenberg'),
        value: 'excerpt'
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Full post', 'ultimate-addons-for-gutenberg'),
        value: 'full_post'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          displayPostContentRadio: value
        });
      }
    }), displayPostExcerpt && displayPostContentRadio === 'excerpt' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Max number of words in excerpt', "ultimate-addons-for-gutenberg"),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Read More Link', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Read More Link', 'ultimate-addons-for-gutenberg'),
      checked: displayPostLink,
      onChange: function onChange() {
        return setAttributes({
          displayPostLink: !displayPostLink
        });
      }
    }), displayPostLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Open links in New Tab', 'ultimate-addons-for-gutenberg'),
      checked: newTab,
      onChange: function onChange() {
        return setAttributes({
          newTab: !newTab
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text', 'ultimate-addons-for-gutenberg'),
      value: ctaText,
      onChange: function onChange(value) {
        return setAttributes({
          ctaText: value
        });
      }
    })));
  };

  var spacingSettings = function spacingSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Blog Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', "ultimate-addons-for-gutenberg"),
      colorValue: bgColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          bgColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Vertical Spacing', "ultimate-addons-for-gutenberg"),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Horizontal Spacing', "ultimate-addons-for-gutenberg"),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Content Padding", "ultimate-addons-for-gutenberg"),
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
        value: contentPaddingUnit,
        label: "contentPaddingUnit"
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
        value: spacingLinkPadding,
        label: "spacingLinkPadding"
      }
    })));
  };

  var imageStyle = function imageStyle() {
    return displayPostImage == true && imgPosition == 'background' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Overlay Color', "ultimate-addons-for-gutenberg"),
      colorValue: bgOverlayColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          bgOverlayColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Overlay Opacity', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: overlayOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          overlayOpacity: value
        });
      },
      min: 0,
      max: 100
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', "ultimate-addons-for-gutenberg"),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Html Tag', 'ultimate-addons-for-gutenberg'),
      value: titleTag,
      onChange: function onChange(value) {
        return setAttributes({
          titleTag: value
        });
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('p', 'ultimate-addons-for-gutenberg')
      }]
    }), !inheritFromTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', "ultimate-addons-for-gutenberg"),
      colorValue: titleColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          titleColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', "ultimate-addons-for-gutenberg"),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Meta', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', "ultimate-addons-for-gutenberg"),
      colorValue: metaColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          metaColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', "ultimate-addons-for-gutenberg"),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Excerpt', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', "ultimate-addons-for-gutenberg"),
      colorValue: excerptColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          excerptColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', "ultimate-addons-for-gutenberg"),
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Read More Link', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', "ultimate-addons-for-gutenberg"),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: 'borderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Border Style", "ultimate-addons-for-gutenberg")
      },
      borderWidth: {
        value: borderWidth,
        label: 'borderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Border Width", "ultimate-addons-for-gutenberg")
      },
      borderRadius: {
        value: borderRadius,
        label: 'borderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Border Radius", "ultimate-addons-for-gutenberg")
      },
      borderColor: {
        value: borderColor,
        label: 'borderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Border Color", "ultimate-addons-for-gutenberg")
      },
      borderHoverColor: {
        value: borderHColor,
        label: 'borderHColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Border Hover Color", "ultimate-addons-for-gutenberg")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Button Padding", "ultimate-addons-for-gutenberg"),
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hover Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaHColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaHColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaBgColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaBgColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Hover Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaBgHColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaBgHColor: value
        });
      }
    }));
  };

  var inspectorControlsSettings = function inspectorControlsSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: "general"
    }, generalSettings(), paginationSettings(), imageSettings(), contentSettings(), readMoreLinkSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: "style"
    }, !inheritFromTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, displayPostTitle && titleStyle(), (displayPostAuthor || displayPostDate || displayPostComment || displayPostTaxonomy) && metaStyle(), displayPostExcerpt && excerptStyle(), displayPostLink && readMoreLinkStyleSettings()), displayPostImage && imageStyle(), spacingSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: "advance"
    })));
  };

  var hasPosts = Array.isArray(latestPosts) && latestPosts.length;

  if (!hasPosts) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, inspectorControlsSettings());
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, blockControlsSettings(), inspectorControlsSettings(), loadTitleGoogleFonts, loadMetaGoogleFonts, loadExcerptGoogleFonts, loadCtaGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map