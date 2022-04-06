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
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * BLOCK: Post Grid - Settings.
 */















const MAX_POSTS_COLUMNS = 8;




const Settings = props => {
  // Caching all Props
  const {
    attributes,
    setAttributes,
    latestPosts,
    categoriesList,
    deviceType,
    taxonomyList
  } = props.parentProps; // Caching all attributes.

  const {
    displayPostTitle,
    displayPostDate,
    displayPostComment,
    displayPostExcerpt,
    displayPostAuthor,
    displayPostImage,
    displayPostTaxonomy,
    imgSize,
    imgPosition,
    displayPostLink,
    newTab,
    ctaText,
    borderWidth,
    borderStyle,
    borderColor,
    borderHColor,
    borderRadius,
    align,
    columns,
    tcolumns,
    mcolumns,
    order,
    orderBy,
    categories,
    postsToShow,
    rowGap,
    columnGap,
    bgColor,
    contentPaddingUnit,
    titleColor,
    titleTag,
    titleFontSize,
    titleFontSizeType,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontFamily,
    titleFontWeight,
    titleFontStyle,
    titleLineHeightType,
    titleLineHeight,
    titleLineHeightTablet,
    titleLineHeightMobile,
    titleLoadGoogleFonts,
    metaFontSize,
    metaFontSizeType,
    metaFontSizeMobile,
    metaFontSizeTablet,
    metaFontFamily,
    metaFontWeight,
    metaFontStyle,
    metaLineHeightType,
    metaLineHeight,
    metaLineHeightTablet,
    metaLineHeightMobile,
    metaLoadGoogleFonts,
    excerptFontSize,
    excerptFontSizeType,
    excerptFontSizeTablet,
    excerptFontSizeMobile,
    excerptFontFamily,
    excerptFontWeight,
    excerptFontStyle,
    excerptLineHeightType,
    excerptLineHeight,
    excerptLineHeightTablet,
    excerptLineHeightMobile,
    excerptLoadGoogleFonts,
    ctaFontSize,
    ctaFontSizeType,
    ctaFontSizeTablet,
    ctaFontSizeMobile,
    ctaFontFamily,
    ctaFontWeight,
    ctaFontStyle,
    ctaLineHeightType,
    ctaLineHeight,
    ctaLineHeightTablet,
    ctaLineHeightMobile,
    ctaLoadGoogleFonts,
    metaColor,
    excerptColor,
    ctaColor,
    ctaBgColor,
    ctaHColor,
    ctaBgHColor,
    imageBottomSpace,
    titleBottomSpace,
    metaBottomSpace,
    excerptBottomSpace,
    excerptBottomSpaceUnit,
    ctaBottomSpace,
    equalHeight,
    excerptLength,
    overlayOpacity,
    bgOverlayColor,
    linkBox,
    postType,
    taxonomyType,
    postPagination,
    pageLimit,
    paginationColor,
    paginationBgColor,
    paginationActiveColor,
    paginationBgActiveColor,
    paginationLayout,
    paginationBorderSize,
    paginationBorderRadius,
    paginationBorderColor,
    paginationBorderActiveColor,
    paginationSpacing,
    paginationSpacingUnit,
    paginationAlignment,
    paginationPrevText,
    paginationNextText,
    postDisplaytext,
    displayPostContentRadio,
    excludeCurrentPost,
    rowGapUnit,
    columnGapUnit,
    imageBottomSpaceUnit,
    titleBottomSpaceUnit,
    metaBottomSpaceUnit,
    ctaBottomSpaceUnit,
    titleTransform,
    metaTransform,
    excerptTransform,
    ctaTransform,
    titleDecoration,
    metaDecoration,
    excerptDecoration,
    ctaDecoration,
    paddingBtnTop,
    paddingBtnBottom,
    paddingBtnLeft,
    paddingBtnRight,
    paddingBtnTopTablet,
    paddingBtnRightTablet,
    paddingBtnBottomTablet,
    paddingBtnLeftTablet,
    paddingBtnTopMobile,
    paddingBtnRightMobile,
    paddingBtnBottomMobile,
    paddingBtnLeftMobile,
    paddingBtnUnit,
    mobilePaddingBtnUnit,
    tabletPaddingBtnUnit,
    spacingLink,
    spacingLinkPadding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTopTablet,
    paddingRightTablet,
    paddingBottomTablet,
    paddingLeftTablet,
    paddingTopMobile,
    paddingRightMobile,
    paddingBottomMobile,
    paddingLeftMobile,
    mobilePaddingUnit,
    tabletPaddingUnit,
    postsOffset
  } = attributes;

  const onSelectPostType = value => {
    setAttributes({
      postType: value
    });
    setAttributes({
      categories: ''
    });
    setAttributes({
      taxonomyType: 'category'
    });
  };

  const onSelectTaxonomyType = value => {
    setAttributes({
      taxonomyType: value
    });
    setAttributes({
      categories: ''
    });
  };

  const onSelectPagination = value => {
    setAttributes({
      postPagination: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const onChangePostsPerPage = value => {
    setAttributes({
      postsToShow: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const onChangePostsOffset = value => {
    setAttributes({
      postsOffset: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const onChangePageLimit = value => {
    setAttributes({
      pageLimit: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const onChangePrevText = value => {
    setAttributes({
      paginationPrevText: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const onChangeNextText = value => {
    setAttributes({
      paginationNextText: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const taxonomyListOptions = [];
  const categoryListOptions = [{
    value: '',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('All', 'ultimate-addons-for-gutenberg')
  }];

  if ('' !== taxonomyList) {
    Object.keys(taxonomyList).map(item => {
      return taxonomyListOptions.push({
        value: taxonomyList[item].name,
        label: taxonomyList[item].label
      });
    });
  }

  if ('' !== categoriesList) {
    Object.keys(categoriesList).map(item => {
      return categoryListOptions.push({
        value: categoriesList[item].id,
        label: categoriesList[item].name
      });
    });
  }

  const blockControlsSettings = () => {
    const {
      isEditing
    } = props.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["BlockAlignmentToolbar"], {
      value: align,
      onChange: value => {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right']
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToolbarGroup"], {
      controls: [{
        icon: 'edit',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Edit'),
        onClick: () => props.togglePreview(),
        isActive: isEditing
      }]
    }));
  };

  let loadTitleGoogleFonts;
  let loadMetaGoogleFonts;
  let loadExcerptGoogleFonts;
  let loadCtaGoogleFonts;

  if (titleLoadGoogleFonts === true) {
    const titleconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: titleconfig
    });
  }

  if (metaLoadGoogleFonts === true) {
    const metaconfig = {
      google: {
        families: [metaFontFamily + (metaFontWeight ? ':' + metaFontWeight : '')]
      }
    };
    loadMetaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: metaconfig
    });
  }

  if (excerptLoadGoogleFonts === true) {
    const excerptconfig = {
      google: {
        families: [excerptFontFamily + (excerptFontWeight ? ':' + excerptFontWeight : '')]
      }
    };
    loadExcerptGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: excerptconfig
    });
  }

  if (ctaLoadGoogleFonts === true) {
    const ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: ctaconfig
    });
  }

  const generalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: align,
        label: 'align'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post Type', 'ultimate-addons-for-gutenberg'),
      value: postType,
      onChange: value => onSelectPostType(value),
      options: uagb_blocks_info.post_types
    }), '' !== taxonomyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Taxonomy', 'ultimate-addons-for-gutenberg'),
      value: taxonomyType,
      onChange: value => onSelectTaxonomyType(value),
      options: taxonomyListOptions
    }), '' != categoriesList &&
    /*#__PURE__*/
    // eslint-disable-line eqeqeq
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: taxonomyList[taxonomyType].label,
      value: categories,
      onChange: value => setAttributes({
        categories: value
      }),
      options: categoryListOptions
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Exclude Current Post', 'ultimate-addons-for-gutenberg'),
      checked: excludeCurrentPost,
      onChange: () => setAttributes({
        excludeCurrentPost: !excludeCurrentPost
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Posts Per Page', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: postsToShow,
      onChange: onChangePostsPerPage,
      min: 0,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Offset Starting Post', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: postsOffset,
      onChange: onChangePostsOffset,
      min: 0,
      max: 500,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Order By', 'ultimate-addons-for-gutenberg'),
      data: {
        value: orderBy,
        label: 'orderBy'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Order', 'ultimate-addons-for-gutenberg'),
      data: {
        value: order,
        label: 'order'
      },
      options: [{
        value: 'desc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Descending', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'asc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ascending', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: columns,
          label: 'columns'
        },
        tablet: {
          value: tcolumns,
          label: 'tcolumns'
        },
        mobile: {
          value: mcolumns,
          label: 'mcolumns'
        }
      },
      min: 0,
      max: !hasPosts ? MAX_POSTS_COLUMNS : Math.min(MAX_POSTS_COLUMNS, latestPosts.length),
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Equal Height', 'ultimate-addons-for-gutenberg'),
      checked: equalHeight,
      onChange: () => setAttributes({
        equalHeight: !equalHeight
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post Pagination', 'ultimate-addons-for-gutenberg'),
      checked: postPagination,
      onChange: onSelectPagination
    }), postPagination === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Page Limit', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: pageLimit,
      onChange: onChangePageLimit,
      min: 0,
      max: 100,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('If Posts Not Found', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      autoComplete: "off",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Display Message', 'ultimate-addons-for-gutenberg'),
      value: postDisplaytext,
      onChange: value => setAttributes({
        postDisplaytext: value
      })
    }));
  };

  const paginationSettings = () => {
    if (true !== postPagination) {
      return;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination Layout', 'ultimate-addons-for-gutenberg'),
      data: {
        value: paginationLayout,
        label: 'paginationLayout'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'border',
        label: 'Border'
      }, {
        value: 'filled',
        label: 'Filled'
      }],
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Previous Text', 'ultimate-addons-for-gutenberg'),
      value: paginationPrevText,
      onChange: onChangePrevText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Next Text', 'ultimate-addons-for-gutenberg'),
      value: paginationNextText,
      onChange: onChangeNextText
    }));
  };

  const imageSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Featured Image', 'ultimate-addons-for-gutenberg'),
      checked: displayPostImage,
      onChange: () => setAttributes({
        displayPostImage: !displayPostImage
      })
    }), displayPostImage === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Sizes', 'ultimate-addons-for-gutenberg'),
      value: imgSize,
      onChange: value => setAttributes({
        imgSize: value
      }),
      options: uagb_blocks_info.image_sizes
    }), displayPostImage === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Position', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imgPosition,
        label: 'imgPosition'
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'background',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background', 'ultimate-addons-for-gutenberg')
      }]
    }), displayPostImage === true && imgPosition === 'background' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Link Complete Box', 'ultimate-addons-for-gutenberg'),
      checked: linkBox,
      onChange: () => setAttributes({
        linkBox: !linkBox
      })
    }));
  };

  const contentSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Title', 'ultimate-addons-for-gutenberg'),
      checked: displayPostTitle,
      onChange: () => setAttributes({
        displayPostTitle: !displayPostTitle
      })
    }), displayPostTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('HTML Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: titleTag,
        label: 'titleTag'
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
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('P', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Author', 'ultimate-addons-for-gutenberg'),
      checked: displayPostAuthor,
      onChange: () => setAttributes({
        displayPostAuthor: !displayPostAuthor
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Date', 'ultimate-addons-for-gutenberg'),
      checked: displayPostDate,
      onChange: () => setAttributes({
        displayPostDate: !displayPostDate
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Comment', 'ultimate-addons-for-gutenberg'),
      checked: displayPostComment,
      onChange: () => setAttributes({
        displayPostComment: !displayPostComment
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Taxonomy', 'ultimate-addons-for-gutenberg'),
      checked: displayPostTaxonomy,
      onChange: () => setAttributes({
        displayPostTaxonomy: !displayPostTaxonomy
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Excerpt', 'ultimate-addons-for-gutenberg'),
      checked: displayPostExcerpt,
      onChange: () => setAttributes({
        displayPostExcerpt: !displayPostExcerpt
      })
    }), displayPostExcerpt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["RadioControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show:', 'ultimate-addons-for-gutenberg'),
      selected: displayPostContentRadio,
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Excerpt', 'ultimate-addons-for-gutenberg'),
        value: 'excerpt'
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Full post', 'ultimate-addons-for-gutenberg'),
        value: 'full_post'
      }],
      onChange: value => setAttributes({
        displayPostContentRadio: value
      })
    }), displayPostExcerpt && displayPostContentRadio === 'excerpt' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Max number of words in excerpt', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: excerptLength,
      onChange: value => setAttributes({
        excerptLength: value
      }),
      min: 1,
      max: 100,
      displayUnit: false
    }));
  };

  const readMoreLinkSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Read More Link', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Read More Link', 'ultimate-addons-for-gutenberg'),
      checked: displayPostLink,
      onChange: () => setAttributes({
        displayPostLink: !displayPostLink
      })
    }), displayPostLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Open links in New Tab', 'ultimate-addons-for-gutenberg'),
      checked: newTab,
      onChange: () => setAttributes({
        newTab: !newTab
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text', 'ultimate-addons-for-gutenberg'),
      value: ctaText,
      onChange: value => setAttributes({
        ctaText: value
      })
    })));
  };

  const spacingSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Blog Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgColor,
      onColorChange: value => setAttributes({
        bgColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Column Gap', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: rowGap,
      onChange: value => setAttributes({
        rowGap: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: rowGapUnit,
        label: 'rowGapUnit'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Row Gap', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: columnGap,
      onChange: value => setAttributes({
        columnGap: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: columnGapUnit,
        label: 'columnGapUnit'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: paddingTop,
        label: 'paddingTop'
      },
      valueRight: {
        value: paddingRight,
        label: 'paddingRight'
      },
      valueBottom: {
        value: paddingBottom,
        label: 'paddingBottom'
      },
      valueLeft: {
        value: paddingLeft,
        label: 'paddingLeft'
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
        value: contentPaddingUnit,
        label: 'contentPaddingUnit'
      },
      mUnit: {
        value: mobilePaddingUnit,
        label: 'mobilePaddingUnit'
      },
      tUnit: {
        value: tabletPaddingUnit,
        label: 'tabletPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLinkPadding,
        label: 'spacingLinkPadding'
      }
    })));
  };

  const imageStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, imgPosition === 'background' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Overlay Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgOverlayColor,
      onColorChange: value => setAttributes({
        bgOverlayColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Overlay Opacity', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: overlayOpacity,
      onChange: value => setAttributes({
        overlayOpacity: value
      }),
      min: 0,
      max: 100
    })), imgPosition === 'top' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: imageBottomSpace,
      onChange: value => setAttributes({
        imageBottomSpace: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: imageBottomSpaceUnit,
        label: 'imageBottomSpaceUnit'
      }
    }));
  };

  const titleStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: titleColor,
      onColorChange: value => setAttributes({
        titleColor: value
      })
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
      fontStyle: {
        value: titleFontStyle,
        label: 'titleFontStyle'
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
        label: 'titleTransform'
      },
      decoration: {
        value: titleDecoration,
        label: 'titleDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: titleBottomSpace,
      onChange: value => setAttributes({
        titleBottomSpace: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: titleBottomSpaceUnit,
        label: 'titleBottomSpaceUnit'
      }
    }));
  };

  const metaStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Meta', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: metaColor,
      onColorChange: value => setAttributes({
        metaColor: value
      })
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
      fontStyle: {
        value: metaFontStyle,
        label: 'metaFontStyle'
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
        value: metaTransform,
        label: 'metaTransform'
      },
      decoration: {
        value: metaDecoration,
        label: 'metaDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: metaBottomSpace,
      onChange: value => setAttributes({
        metaBottomSpace: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: metaBottomSpaceUnit,
        label: 'metaBottomSpaceUnit'
      }
    }));
  };

  const excerptStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Excerpt', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: excerptColor,
      onColorChange: value => setAttributes({
        excerptColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      fontStyle: {
        value: excerptFontStyle,
        label: 'excerptFontStyle'
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
        label: 'excerptTransform'
      },
      decoration: {
        value: excerptDecoration,
        label: 'excerptDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: excerptBottomSpace,
      onChange: value => setAttributes({
        excerptBottomSpace: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: excerptBottomSpaceUnit,
        label: 'excerptBottomSpaceUnit'
      }
    }));
  };

  const readMoreLinkStyleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Read More Link', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaColor,
        onColorChange: value => setAttributes({
          ctaColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaBgColor,
        onColorChange: value => setAttributes({
          ctaBgColor: value
        })
      })),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaHColor,
        onColorChange: value => setAttributes({
          ctaHColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaBgHColor,
        onColorChange: value => setAttributes({
          ctaBgHColor: value
        })
      }))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      fontStyle: {
        value: ctaFontStyle,
        label: 'ctaFontStyle'
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
        label: 'ctaTransform'
      },
      decoration: {
        value: ctaDecoration,
        label: 'ctaDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
      disableBottomSeparator: false,
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: 'borderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: borderWidth,
        label: 'borderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: borderRadius,
        label: 'borderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: borderColor,
        label: 'borderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: borderHColor,
        label: 'borderHColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: ctaBottomSpace,
      onChange: value => setAttributes({
        ctaBottomSpace: value
      }),
      min: 0,
      max: 300,
      unit: {
        value: ctaBottomSpaceUnit,
        label: 'ctaBottomSpaceUnit'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Button Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: paddingBtnTop,
        label: 'paddingBtnTop'
      },
      valueRight: {
        value: paddingBtnRight,
        label: 'paddingBtnRight'
      },
      valueBottom: {
        value: paddingBtnBottom,
        label: 'paddingBtnBottom'
      },
      valueLeft: {
        value: paddingBtnLeft,
        label: 'paddingBtnLeft'
      },
      valueTopTablet: {
        value: paddingBtnTopTablet,
        label: 'paddingBtnTopTablet'
      },
      valueRightTablet: {
        value: paddingBtnRightTablet,
        label: 'paddingBtnRightTablet'
      },
      valueBottomTablet: {
        value: paddingBtnBottomTablet,
        label: 'paddingBtnBottomTablet'
      },
      valueLeftTablet: {
        value: paddingBtnLeftTablet,
        label: 'paddingBtnLeftTablet'
      },
      valueTopMobile: {
        value: paddingBtnTopMobile,
        label: 'paddingBtnTopMobile'
      },
      valueRightMobile: {
        value: paddingBtnRightMobile,
        label: 'paddingBtnRightMobile'
      },
      valueBottomMobile: {
        value: paddingBtnBottomMobile,
        label: 'paddingBtnBottomMobile'
      },
      valueLeftMobile: {
        value: paddingBtnLeftMobile,
        label: 'paddingBtnLeftMobile'
      },
      unit: {
        value: paddingBtnUnit,
        label: 'paddingBtnUnit'
      },
      mUnit: {
        value: mobilePaddingBtnUnit,
        label: 'mobilePaddingBtnUnit'
      },
      tUnit: {
        value: tabletPaddingBtnUnit,
        label: 'tabletPaddingBtnUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: 'spacingLink'
      }
    })));
  };

  const paginationStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: paginationAlignment,
        label: 'paginationAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'active',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Active', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationColor,
        onColorChange: value => setAttributes({
          paginationColor: value
        })
      }), paginationLayout === 'filled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationBgColor,
        onColorChange: value => setAttributes({
          paginationBgColor: value
        })
      }), paginationLayout === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationBorderColor,
        onColorChange: value => setAttributes({
          paginationBorderColor: value
        })
      })),
      active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationActiveColor,
        onColorChange: value => setAttributes({
          paginationActiveColor: value
        })
      }), paginationLayout === 'filled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationBgActiveColor,
        onColorChange: value => setAttributes({
          paginationBgActiveColor: value
        })
      }), paginationLayout === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationBorderActiveColor,
        onColorChange: value => setAttributes({
          paginationBorderActiveColor: value
        })
      })),
      disableBottomSeparator: false
    }), paginationLayout === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Size', 'ultimate-addons-for-gutenberg'),
      value: paginationBorderSize,
      onChange: value => setAttributes({
        paginationBorderSize: value
      }),
      min: 0,
      max: 10,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: paginationBorderRadius,
      onChange: value => setAttributes({
        paginationBorderRadius: value
      }),
      displayUnit: false,
      min: 0,
      max: 100
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: paginationSpacing,
      onChange: value => setAttributes({
        paginationSpacing: value
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('This spacing is between the Post Grid and the Pagination', 'ultimate-addons-for-gutenberg'),
      min: 0,
      max: 300,
      unit: {
        value: paginationSpacingUnit,
        label: 'paginationSpacingUnit'
      }
    }));
  };

  const inspectorControlsSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_16__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, generalSettings(), paginationSettings(), imageSettings(), contentSettings(), readMoreLinkSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, displayPostTitle && titleStyle(), (displayPostAuthor || displayPostDate || displayPostComment || displayPostTaxonomy) && metaStyle(), displayPostExcerpt && excerptStyle(), displayPostLink && readMoreLinkStyleSettings(), postPagination && paginationStyle(), displayPostImage === true && imageStyle(), spacingSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
      parentProps: props.parentProps
    }))));
  };

  const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

  if (!hasPosts) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, inspectorControlsSettings());
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, blockControlsSettings(), inspectorControlsSettings(), loadTitleGoogleFonts, loadMetaGoogleFonts, loadExcerptGoogleFonts, loadCtaGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

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