(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/post-grid/settings"],{

/***/ "./src/blocks/post/post-grid/settings.js":
/*!***********************************************!*\
  !*** ./src/blocks/post/post-grid/settings.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/typography/column-responsive */ "./src/components/typography/column-responsive.js");
/* harmony import */ var _components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * BLOCK: Post Grid - Settings.
 */
 // Import all of our Text Options requirements.





var MAX_POSTS_COLUMNS = 8;
var _wordpressComponent = '@wordpress/components',
    PanelBody = _wordpressComponent.PanelBody,
    RangeControl = _wordpressComponent.RangeControl,
    SelectControl = _wordpressComponent.SelectControl,
    ToggleControl = _wordpressComponent.ToggleControl,
    TabPanel = _wordpressComponent.TabPanel,
    ToolbarGroup = _wordpressComponent.ToolbarGroup,
    TextControl = _wordpressComponent.TextControl,
    RadioControl = _wordpressComponent.RadioControl,
    Button = _wordpressComponent.Button;
var _wordpressBlockEdi = '@wordpress/block-editor',
    InspectorControls = _wordpressBlockEdi.InspectorControls,
    BlockAlignmentToolbar = _wordpressBlockEdi.BlockAlignmentToolbar,
    BlockControls = _wordpressBlockEdi.BlockControls,
    ColorPalette = _wordpressBlockEdi.ColorPalette;

var Settings = function Settings(props) {
  // Caching all Props
  var _props$parentProps = props.parentProps,
      attributes = _props$parentProps.attributes,
      setAttributes = _props$parentProps.setAttributes,
      latestPosts = _props$parentProps.latestPosts,
      categoriesList = _props$parentProps.categoriesList,
      deviceType = _props$parentProps.deviceType,
      taxonomyList = _props$parentProps.taxonomyList; // Caching all attributes.

  var block_id = attributes.block_id,
      displayPostTitle = attributes.displayPostTitle,
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
      layoutConfig = attributes.layoutConfig;
  var hasPosts = Array.isArray(latestPosts) && latestPosts.length;

  var onSelectPostType = function onSelectPostType(value) {
    var setAttributes = props.parentProps.setAttributes;
    setAttributes({
      postType: value
    });
    setAttributes({
      categories: ''
    });
  };

  var onSelectTaxonomyType = function onSelectTaxonomyType(value) {
    var setAttributes = props.parentProps.setAttributes;
    setAttributes({
      taxonomyType: value
    });
    setAttributes({
      categories: ''
    });
  };

  var onSelectPagination = function onSelectPagination(value) {
    var setAttributes = props.parentProps.setAttributes;
    setAttributes({
      postPagination: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  var onChangePostsPerPage = function onChangePostsPerPage(value) {
    var setAttributes = props.parentProps.setAttributes;
    setAttributes({
      postsToShow: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  var onChangePageLimit = function onChangePageLimit(value) {
    var setAttributes = props.parentProps.setAttributes;
    setAttributes({
      pageLimit: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  var onChangePrevText = function onChangePrevText(value) {
    var setAttributes = props.parentProps.setAttributes;
    setAttributes({
      paginationPrevText: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  var onChangeNextText = function onChangeNextText(value) {
    var setAttributes = props.parentProps.setAttributes;
    setAttributes({
      paginationNextText: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  var togglePreview = function togglePreview() {
    props.setStateValue({
      isEditing: !props.state.isEditing
    });

    if (!props.state.isEditing) {
      Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Showing All Post Grid Layout.');
    }
  };

  var taxonomyListOptions = [];
  var categoryListOptions = [{
    value: '',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('All', 'ultimate-addons-for-gutenberg')
  }];

  if ('' != taxonomyList) {
    Object.keys(taxonomyList).map(function (item, thisIndex) {
      return taxonomyListOptions.push({
        value: taxonomyList[item].name,
        label: taxonomyList[item].label
      });
    });
  }

  if ('' != categoriesList) {
    Object.keys(categoriesList).map(function (item, thisIndex) {
      return categoryListOptions.push({
        value: categoriesList[item].id,
        label: categoriesList[item].name
      });
    });
  }

  var generalSettings = function generalSettings() {
    return /*#__PURE__*/React.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('General', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/React.createElement(SelectControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post Type', 'ultimate-addons-for-gutenberg'),
      value: postType,
      onChange: function onChange(value) {
        return onSelectPostType(value);
      },
      options: uagb_blocks_info.post_types
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), '' != taxonomyList && /*#__PURE__*/React.createElement(SelectControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Taxonomy', 'ultimate-addons-for-gutenberg'),
      value: taxonomyType,
      onChange: function onChange(value) {
        return onSelectTaxonomyType(value);
      },
      options: taxonomyListOptions
    }), '' != categoriesList && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
      label: taxonomyList[taxonomyType].label,
      value: categories,
      onChange: function onChange(value) {
        return setAttributes({
          categories: value
        });
      },
      options: categoryListOptions
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    })), /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Exclude Current Post', 'ultimate-addons-for-gutenberg'),
      checked: excludeCurrentPost,
      onChange: function onChange(value) {
        return setAttributes({
          excludeCurrentPost: !excludeCurrentPost
        });
      }
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Posts Per Page', 'ultimate-addons-for-gutenberg'),
      value: postsToShow,
      onChange: onChangePostsPerPage,
      min: 0,
      max: 500
    }), /*#__PURE__*/React.createElement(SelectControl, {
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
    }), /*#__PURE__*/React.createElement(SelectControl, {
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
    }), /*#__PURE__*/React.createElement(_components_typography_column_responsive__WEBPACK_IMPORTED_MODULE_2__["default"], null), 'Desktop' === deviceType && /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Columns'),
      value: columns,
      onChange: function onChange(value) {
        return setAttributes({
          columns: value
        });
      },
      min: 1,
      max: !hasPosts ? MAX_POSTS_COLUMNS : Math.min(MAX_POSTS_COLUMNS, latestPosts.length)
    }), 'Tablet' === deviceType && /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Columns'),
      value: tcolumns,
      onChange: function onChange(value) {
        return setAttributes({
          tcolumns: value
        });
      },
      min: 1,
      max: !hasPosts ? MAX_POSTS_COLUMNS : Math.min(MAX_POSTS_COLUMNS, latestPosts.length)
    }), 'Mobile' === deviceType && /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Columns'),
      value: mcolumns,
      onChange: function onChange(value) {
        return setAttributes({
          mcolumns: value
        });
      },
      min: 1,
      max: !hasPosts ? MAX_POSTS_COLUMNS : Math.min(MAX_POSTS_COLUMNS, latestPosts.length)
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Equal Height', 'ultimate-addons-for-gutenberg'),
      checked: equalHeight,
      onChange: function onChange(value) {
        return setAttributes({
          equalHeight: !equalHeight
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post Pagination', 'ultimate-addons-for-gutenberg'),
      checked: postPagination,
      onChange: onSelectPagination
    }), postPagination == true && /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Page Limit', 'ultimate-addons-for-gutenberg'),
      value: pageLimit,
      onChange: onChangePageLimit,
      min: 0,
      max: 100
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('If Posts Not Found', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/React.createElement(TextControl, {
      autoComplete: "off",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Display Message', 'ultimate-addons-for-gutenberg'),
      value: postDisplaytext,
      onChange: function onChange(value) {
        return setAttributes({
          postDisplaytext: value
        });
      }
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Inherit Styling from Theme', 'ultimate-addons-for-gutenberg'),
      checked: inheritFromTheme,
      onChange: function onChange(value) {
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

    return /*#__PURE__*/React.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination Layout', 'ultimate-addons-for-gutenberg'),
      value: paginationLayout,
      onChange: function onChange(value) {
        return setAttributes({
          paginationLayout: value
        });
      },
      options: [{
        value: 'border',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'filled',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Filled', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/React.createElement("h2", null, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination Alignment', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/React.createElement(Button, {
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
    }), /*#__PURE__*/React.createElement(Button, {
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
    }), /*#__PURE__*/React.createElement(Button, {
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
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), paginationLayout == 'filled' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: paginationBgColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: paginationBgColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          paginationBgColor: colorValue
        });
      }
    }), /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Active Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: paginationBgActiveColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: paginationBgActiveColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          paginationBgActiveColor: colorValue
        });
      }
    })), paginationLayout == 'border' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Size', 'ultimate-addons-for-gutenberg'),
      value: paginationBorderSize,
      onChange: function onChange(value) {
        return setAttributes({
          paginationBorderSize: value
        });
      },
      min: 0,
      max: 10
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: paginationBorderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          paginationBorderRadius: value
        });
      },
      min: 0,
      max: 500
    }), /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: paginationBorderColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: paginationBorderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          paginationBorderColor: colorValue
        });
      }
    }), /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Active Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: paginationBorderActiveColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: paginationBorderActiveColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          paginationBorderActiveColor: colorValue
        });
      }
    })), /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: paginationColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: paginationColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          paginationColor: colorValue
        });
      }
    }), /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Active Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: paginationActiveColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: paginationActiveColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          paginationActiveColor: colorValue
        });
      }
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      value: paginationSpacing,
      onChange: function onChange(value) {
        return setAttributes({
          paginationSpacing: value
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('This spacing is between the Post Grid and the Pagination', 'ultimate-addons-for-gutenberg'),
      min: 0,
      max: 500
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Previous Text', 'ultimate-addons-for-gutenberg'),
      value: paginationPrevText,
      onChange: onChangePrevText
    }), /*#__PURE__*/React.createElement(TextControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Next Text', 'ultimate-addons-for-gutenberg'),
      value: paginationNextText,
      onChange: onChangeNextText
    })));
  };

  var imageSettings = function imageSettings() {
    return /*#__PURE__*/React.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Featured Image', 'ultimate-addons-for-gutenberg'),
      checked: displayPostImage,
      onChange: function onChange(value) {
        return setAttributes({
          displayPostImage: !displayPostImage
        });
      }
    }), displayPostImage == true && /*#__PURE__*/React.createElement(SelectControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image Sizes', 'ultimate-addons-for-gutenberg'),
      value: imgSize,
      onChange: function onChange(value) {
        return setAttributes({
          imgSize: value
        });
      },
      options: uagb_blocks_info.image_sizes
    }), displayPostImage == true && /*#__PURE__*/React.createElement(SelectControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image Position', 'ultimate-addons-for-gutenberg'),
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
    }), displayPostImage == true && imgPosition == 'background' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Overlay Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: bgOverlayColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: bgOverlayColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          bgOverlayColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Overlay Opacity', 'ultimate-addons-for-gutenberg'),
      value: overlayOpacity,
      onChange: function onChange(value) {
        return setAttributes({
          overlayOpacity: value
        });
      },
      min: 0,
      max: 100,
      allowReset: true
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Link Complete Box', 'ultimate-addons-for-gutenberg'),
      checked: linkBox,
      onChange: function onChange(value) {
        return setAttributes({
          linkBox: !linkBox
        });
      }
    })));
  };

  var contentSettings = function contentSettings() {
    return /*#__PURE__*/React.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Title', 'ultimate-addons-for-gutenberg'),
      checked: displayPostTitle,
      onChange: function onChange(value) {
        return setAttributes({
          displayPostTitle: !displayPostTitle
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Author', 'ultimate-addons-for-gutenberg'),
      checked: displayPostAuthor,
      onChange: function onChange(value) {
        return setAttributes({
          displayPostAuthor: !displayPostAuthor
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Date', 'ultimate-addons-for-gutenberg'),
      checked: displayPostDate,
      onChange: function onChange(value) {
        return setAttributes({
          displayPostDate: !displayPostDate
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Comment', 'ultimate-addons-for-gutenberg'),
      checked: displayPostComment,
      onChange: function onChange(value) {
        return setAttributes({
          displayPostComment: !displayPostComment
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Taxonomy', 'ultimate-addons-for-gutenberg'),
      checked: displayPostTaxonomy,
      onChange: function onChange(value) {
        return setAttributes({
          displayPostTaxonomy: !displayPostTaxonomy
        });
      }
    }), /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Excerpt', 'ultimate-addons-for-gutenberg'),
      checked: displayPostExcerpt,
      onChange: function onChange(value) {
        return setAttributes({
          displayPostExcerpt: !displayPostExcerpt
        });
      }
    }), displayPostExcerpt && /*#__PURE__*/React.createElement(RadioControl, {
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
    }), displayPostExcerpt && displayPostContentRadio === 'excerpt' && /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Max number of words in excerpt', 'ultimate-addons-for-gutenberg'),
      value: excerptLength,
      onChange: function onChange(value) {
        return setAttributes({
          excerptLength: value
        });
      },
      min: 1,
      max: 100,
      allowReset: true
    }));
  };

  var readMoreLinkSettings = function readMoreLinkSettings() {
    var hoverSettings = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaHColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: ctaHColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          ctaHColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaBgHColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: ctaBgHColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          ctaBgHColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderHColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: borderHColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          borderHColor: colorValue
        });
      },
      allowReset: true
    }));
    var normalSettings = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: ctaColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          ctaColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaBgColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: ctaBgColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          ctaBgColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: borderColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: borderColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          borderColor: colorValue
        });
      },
      allowReset: true
    }));
    return /*#__PURE__*/React.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Read More Link', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Read More Link', 'ultimate-addons-for-gutenberg'),
      checked: displayPostLink,
      onChange: function onChange(value) {
        return setAttributes({
          displayPostLink: !displayPostLink
        });
      }
    }), displayPostLink && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Open links in New Tab', 'ultimate-addons-for-gutenberg'),
      checked: newTab,
      onChange: function onChange(value) {
        return setAttributes({
          newTab: !newTab
        });
      }
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Button Text', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/React.createElement(TextControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text', 'ultimate-addons-for-gutenberg'),
      value: ctaText,
      onChange: function onChange(value) {
        return setAttributes({
          ctaText: value
        });
      }
    }), !inheritFromTheme && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
      }
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Button Border', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/React.createElement(SelectControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      onChange: function onChange(value) {
        return setAttributes({
          borderStyle: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      value: borderWidth,
      onChange: function onChange(value) {
        return setAttributes({
          borderWidth: value
        });
      },
      min: 0,
      max: 10,
      allowReset: true
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Rounded Corner', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Button Padding (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/React.createElement(RangeControl, {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].vertical_spacing,
      className: 'uagb-margin-control',
      value: btnVPadding,
      onChange: function onChange(value) {
        return setAttributes({
          btnVPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_0__["default"].horizontal_spacing,
      className: 'uagb-margin-control',
      value: btnHPadding,
      onChange: function onChange(value) {
        return setAttributes({
          btnHPadding: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Button Colors', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/React.createElement(TabPanel, {
      className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
      activeClass: "active-tab",
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-normal-tab'
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hover', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-hover-tab'
      }]
    }, function (tabName) {
      var tabout;

      if ('hover' === tabName.name) {
        tabout = hoverSettings;
      } else {
        tabout = normalSettings;
      }

      return /*#__PURE__*/React.createElement("div", null, tabout);
    }))));
  };

  var typographySettings = function typographySettings() {
    return /*#__PURE__*/React.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/React.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/React.createElement(SelectControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title Tag', 'ultimate-addons-for-gutenberg'),
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
    }), !inheritFromTheme && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
      }
    }), (displayPostAuthor || displayPostDate || displayPostComment || displayPostTaxonomy) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Meta', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/React.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
      }
    })), displayPostExcerpt && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Excerpt', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/React.createElement(_components_typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
      }
    }))));
  };

  var colorsSettings = function colorsSettings() {
    return /*#__PURE__*/React.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Colors', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Blog Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: bgColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: bgColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          bgColor: colorValue
        });
      },
      allowReset: true
    }), !inheritFromTheme && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: titleColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: titleColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          titleColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Meta Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: metaColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: metaColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          metaColor: colorValue
        });
      }
    }), displayPostExcerpt == true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Excerpt Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/React.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/React.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: excerptColor
      }
    }))), /*#__PURE__*/React.createElement(ColorPalette, {
      value: excerptColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          excerptColor: colorValue
        });
      },
      allowReset: true
    }))));
  };

  var spacingSettings = function spacingSettings() {
    return /*#__PURE__*/React.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Vertical Spacing', 'ultimate-addons-for-gutenberg'),
      value: rowGap,
      onChange: function onChange(value) {
        return setAttributes({
          rowGap: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Horizontal Spacing', 'ultimate-addons-for-gutenberg'),
      value: columnGap,
      onChange: function onChange(value) {
        return setAttributes({
          columnGap: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content Padding', 'ultimate-addons-for-gutenberg'),
      value: contentPadding,
      onChange: function onChange(value) {
        return setAttributes({
          contentPadding: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content Padding (Mobile)', 'ultimate-addons-for-gutenberg'),
      value: contentPaddingMobile,
      onChange: function onChange(value) {
        return setAttributes({
          contentPaddingMobile: value
        });
      },
      min: 0,
      max: 500,
      allowReset: true
    }), /*#__PURE__*/React.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: imageBottomSpace,
      onChange: function onChange(value) {
        return setAttributes({
          imageBottomSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: titleBottomSpace,
      onChange: function onChange(value) {
        return setAttributes({
          titleBottomSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Meta Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: metaBottomSpace,
      onChange: function onChange(value) {
        return setAttributes({
          metaBottomSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Excerpt Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: excerptBottomSpace,
      onChange: function onChange(value) {
        return setAttributes({
          excerptBottomSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/React.createElement(RangeControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('CTA Bottom Spacing'),
      value: ctaBottomSpace,
      onChange: function onChange(value) {
        return setAttributes({
          ctaBottomSpace: value
        });
      },
      min: 0,
      max: 50,
      allowReset: true
    }));
  };

  var blockControlsSettings = function blockControlsSettings() {
    var _state = state,
        isEditing = _state.isEditing;
    return /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(BlockAlignmentToolbar, {
      value: align,
      onChange: function onChange(value) {
        setAttributes({
          align: value
        });
      },
      controls: ['left', 'center', 'right']
    }), /*#__PURE__*/React.createElement(ToolbarGroup, {
      controls: [{
        icon: 'edit',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Edit'),
        onClick: function onClick() {
          return togglePreview();
        },
        isActive: isEditing
      }]
    }));
  };

  var inspectorControlsSettings = function inspectorControlsSettings() {
    return /*#__PURE__*/React.createElement(InspectorControls, null, generalSettings(), paginationSettings(), imageSettings(), contentSettings(), readMoreLinkSettings(), typographySettings(), colorsSettings(), spacingSettings());
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
    loadTitleGoogleFonts = /*#__PURE__*/React.createElement(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: titleconfig
    });
  }

  if (metaLoadGoogleFonts == true) {
    var metaconfig = {
      google: {
        families: [metaFontFamily + (metaFontWeight ? ':' + metaFontWeight : '')]
      }
    };
    loadMetaGoogleFonts = /*#__PURE__*/React.createElement(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: metaconfig
    });
  }

  if (excerptLoadGoogleFonts == true) {
    var excerptconfig = {
      google: {
        families: [excerptFontFamily + (excerptFontWeight ? ':' + excerptFontWeight : '')]
      }
    };
    loadExcerptGoogleFonts = /*#__PURE__*/React.createElement(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: excerptconfig
    });
  }

  if (ctaLoadGoogleFonts == true) {
    var ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/React.createElement(_components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: ctaconfig
    });
  }

  if (!hasPosts) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, inspectorControlsSettings());
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, blockControlsSettings(), inspectorControlsSettings(), loadTitleGoogleFonts, loadMetaGoogleFonts, loadExcerptGoogleFonts, loadCtaGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (React.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map