(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/post-timeline/settings"],{

/***/ "./src/blocks/timeline/post-timeline/settings.js":
/*!*******************************************************!*\
  !*** ./src/blocks/timeline/post-timeline/settings.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);










var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      categoriesList = _props.categoriesList,
      setAttributes = _props.setAttributes,
      taxonomyList = _props.taxonomyList;
  var headingColor = attributes.headingColor,
      subHeadingColor = attributes.subHeadingColor,
      backgroundColor = attributes.backgroundColor,
      separatorColor = attributes.separatorColor,
      separatorFillColor = attributes.separatorFillColor,
      separatorBg = attributes.separatorBg,
      separatorBorder = attributes.separatorBorder,
      borderFocus = attributes.borderFocus,
      headingTag = attributes.headingTag,
      headFontSizeType = attributes.headFontSizeType,
      headFontSize = attributes.headFontSize,
      headFontSizeTablet = attributes.headFontSizeTablet,
      headFontSizeMobile = attributes.headFontSizeMobile,
      headFontFamily = attributes.headFontFamily,
      headFontWeight = attributes.headFontWeight,
      headFontSubset = attributes.headFontSubset,
      headLineHeightType = attributes.headLineHeightType,
      headLineHeight = attributes.headLineHeight,
      headLineHeightTablet = attributes.headLineHeightTablet,
      headLineHeightMobile = attributes.headLineHeightMobile,
      headLoadGoogleFonts = attributes.headLoadGoogleFonts,
      timelinAlignment = attributes.timelinAlignment,
      arrowlinAlignment = attributes.arrowlinAlignment,
      subHeadFontSizeType = attributes.subHeadFontSizeType,
      subHeadFontSize = attributes.subHeadFontSize,
      subHeadFontSizeTablet = attributes.subHeadFontSizeTablet,
      subHeadFontSizeMobile = attributes.subHeadFontSizeMobile,
      subHeadFontFamily = attributes.subHeadFontFamily,
      subHeadFontWeight = attributes.subHeadFontWeight,
      subHeadFontSubset = attributes.subHeadFontSubset,
      subHeadLineHeightType = attributes.subHeadLineHeightType,
      subHeadLineHeight = attributes.subHeadLineHeight,
      subHeadLineHeightTablet = attributes.subHeadLineHeightTablet,
      subHeadLineHeightMobile = attributes.subHeadLineHeightMobile,
      subHeadLoadGoogleFonts = attributes.subHeadLoadGoogleFonts,
      verticalSpace = attributes.verticalSpace,
      horizontalSpace = attributes.horizontalSpace,
      headSpace = attributes.headSpace,
      separatorwidth = attributes.separatorwidth,
      borderwidth = attributes.borderwidth,
      connectorBgsize = attributes.connectorBgsize,
      authorSpace = attributes.authorSpace,
      contentSpace = attributes.contentSpace,
      authorColor = attributes.authorColor,
      authorFontSizeType = attributes.authorFontSizeType,
      authorFontSize = attributes.authorFontSize,
      authorFontSizeTablet = attributes.authorFontSizeTablet,
      authorFontSizeMobile = attributes.authorFontSizeMobile,
      authorFontFamily = attributes.authorFontFamily,
      authorFontWeight = attributes.authorFontWeight,
      authorFontSubset = attributes.authorFontSubset,
      authorLineHeightType = attributes.authorLineHeightType,
      authorLineHeight = attributes.authorLineHeight,
      authorLineHeightTablet = attributes.authorLineHeightTablet,
      authorLineHeightMobile = attributes.authorLineHeightMobile,
      authorLoadGoogleFonts = attributes.authorLoadGoogleFonts,
      dateBottomspace = attributes.dateBottomspace,
      displayPostDate = attributes.displayPostDate,
      displayPostExcerpt = attributes.displayPostExcerpt,
      displayPostAuthor = attributes.displayPostAuthor,
      displayPostImage = attributes.displayPostImage,
      displayPostLink = attributes.displayPostLink,
      align = attributes.align,
      order = attributes.order,
      orderBy = attributes.orderBy,
      categories = attributes.categories,
      postsToShow = attributes.postsToShow,
      imageSize = attributes.imageSize,
      readMoreText = attributes.readMoreText,
      ctaBackground = attributes.ctaBackground,
      icon = attributes.icon,
      iconColor = attributes.iconColor,
      dateColor = attributes.dateColor,
      ctaColor = attributes.ctaColor,
      dateFontsizeType = attributes.dateFontsizeType,
      dateFontsize = attributes.dateFontsize,
      dateFontsizeTablet = attributes.dateFontsizeTablet,
      dateFontsizeMobile = attributes.dateFontsizeMobile,
      dateFontFamily = attributes.dateFontFamily,
      dateFontWeight = attributes.dateFontWeight,
      dateFontSubset = attributes.dateFontSubset,
      dateLineHeightType = attributes.dateLineHeightType,
      dateLineHeight = attributes.dateLineHeight,
      dateLineHeightTablet = attributes.dateLineHeightTablet,
      dateLineHeightMobile = attributes.dateLineHeightMobile,
      dateLoadGoogleFonts = attributes.dateLoadGoogleFonts,
      ctaFontSizeType = attributes.ctaFontSizeType,
      ctaFontSize = attributes.ctaFontSize,
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
      iconSize = attributes.iconSize,
      exerptLength = attributes.exerptLength,
      borderRadius = attributes.borderRadius,
      bgPadding = attributes.bgPadding,
      contentPadding = attributes.contentPadding,
      iconFocus = attributes.iconFocus,
      iconBgFocus = attributes.iconBgFocus,
      stack = attributes.stack,
      linkTarget = attributes.linkTarget,
      postType = attributes.postType,
      taxonomyType = attributes.taxonomyType,
      dateFormat = attributes.dateFormat,
      excludeCurrentPost = attributes.excludeCurrentPost;

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

  var getTimelineicon = function getTimelineicon(value) {
    props.setAttributes({
      icon: value
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

  var loadHeadGoogleFonts;
  var loadSubHeadGoogleFonts;
  var loadDateGoogleFonts;
  var loadAuthorGoogleFonts;
  var loadCtaGoogleFonts;

  if (headLoadGoogleFonts == true) {
    var headconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: headconfig
    });
  }

  if (subHeadLoadGoogleFonts == true) {
    var subHeadconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: subHeadconfig
    });
  }

  if (dateLoadGoogleFonts == true) {
    var dateconfig = {
      google: {
        families: [dateFontFamily + (dateFontWeight ? ':' + dateFontWeight : '')]
      }
    };
    loadDateGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: dateconfig
    });
  }

  if (authorLoadGoogleFonts == true) {
    var authorconfig = {
      google: {
        families: [authorFontFamily + (authorFontWeight ? ':' + authorFontWeight : '')]
      }
    };
    loadAuthorGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: authorconfig
    });
  }

  if (ctaLoadGoogleFonts == true) {
    var ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: ctaconfig
    });
  }

  var today = new Date(); // Parameters for FontIconPicker.

  var iconProps = {
    icons: wp.UAGBSvgIcons,
    value: icon,
    onChange: getTimelineicon,
    isMulti: false,
    renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
    noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
  };

  var querySettings = function querySettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Query', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Post Type', 'ultimate-addons-for-gutenberg'),
      value: postType,
      onChange: function onChange(value) {
        return onSelectPostType(value);
      },
      options: uagb_blocks_info.post_types
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), '' != taxonomyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Taxonomy', 'ultimate-addons-for-gutenberg'),
      value: taxonomyType,
      onChange: function onChange(value) {
        return onSelectTaxonomyType(value);
      },
      options: taxonomyListOptions
    }), '' != categoriesList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: taxonomyList[taxonomyType].label,
      value: categories,
      onChange: function onChange(value) {
        return setAttributes({
          categories: value
        });
      },
      options: categoryListOptions
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Exclude Current Post', 'ultimate-addons-for-gutenberg'),
      checked: excludeCurrentPost,
      onChange: function onChange() {
        return setAttributes({
          excludeCurrentPost: !excludeCurrentPost
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["QueryControls"], {
      order: order,
      orderBy: orderBy,
      numberOfItems: postsToShow,
      onNumberOfItemsChange: function onNumberOfItemsChange(value) {
        return setAttributes({
          postsToShow: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Order By', 'ultimate-addons-for-gutenberg'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Order', 'ultimate-addons-for-gutenberg'),
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
    }));
  };

  var layoutSettings = function layoutSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Orientation', 'ultimate-addons-for-gutenberg'),
      value: timelinAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          timelinAlignment: value
        });
      },
      options: [{
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Arrow Alignment', 'ultimate-addons-for-gutenberg'),
      value: arrowlinAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          arrowlinAlignment: value
        });
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'bottom',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bottom', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
      value: stack,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: Choose on what breakpoint the Post Timeline will stack.', 'ultimate-addons-for-gutenberg'),
      onChange: function onChange(value) {
        return setAttributes({
          stack: value
        });
      }
    }));
  };

  var imageSettings = function imageSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display Featured Image', 'ultimate-addons-for-gutenberg'),
      checked: displayPostImage,
      onChange: function onChange() {
        return setAttributes({
          displayPostImage: !displayPostImage
        });
      }
    }), displayPostImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Featured Image Style', 'ultimate-addons-for-gutenberg'),
      options: uagb_blocks_info.image_sizes,
      value: imageSize,
      onChange: function onChange(value) {
        return props.setAttributes({
          imageSize: value
        });
      }
    }));
  };

  var contentSettings = function contentSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display Post Author', 'ultimate-addons-for-gutenberg'),
      checked: displayPostAuthor,
      onChange: function onChange() {
        return setAttributes({
          displayPostAuthor: !displayPostAuthor
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display Post Date', 'ultimate-addons-for-gutenberg'),
      checked: displayPostDate,
      onChange: function onChange() {
        return setAttributes({
          displayPostDate: !displayPostDate
        });
      }
    }), displayPostDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Date Format', 'ultimate-addons-for-gutenberg'),
      value: dateFormat,
      onChange: function onChange(value) {
        return setAttributes({
          dateFormat: value
        });
      },
      options: [{
        value: 'M j, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('M j, Y', today)
      }, {
        value: 'F j, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('F j, Y', today)
      }, {
        value: 'm/d/Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('m/d/Y', today)
      }, {
        value: 'm-d-Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('m-d-Y', today)
      }, {
        value: 'm.d.Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('m.d.Y', today)
      }, {
        value: 'd M Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('d M Y', today)
      }, {
        value: 'd F Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('d F Y', today)
      }, {
        value: 'd-m-Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('d-m-Y', today)
      }, {
        value: 'd.m.Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('d.m.Y', today)
      }, {
        value: 'd/m/Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('d/m/Y', today)
      }, {
        value: 'Y-m-d',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('Y-m-d', today)
      }, {
        value: 'Y.m.d',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('Y.m.d', today)
      }, {
        value: 'Y/m/d',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('Y/m/d', today)
      }, {
        value: 'M, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('M, Y', today)
      }, {
        value: 'M Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('M Y', today)
      }, {
        value: 'F, Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('F, Y', today)
      }, {
        value: 'F Y',
        label: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_6__["dateI18n"])('F Y', today)
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display Post Excerpt', 'ultimate-addons-for-gutenberg'),
      checked: displayPostExcerpt,
      onChange: function onChange() {
        return setAttributes({
          displayPostExcerpt: !displayPostExcerpt
        });
      }
    }), displayPostExcerpt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Excerpt Length', 'ultimate-addons-for-gutenberg'),
      value: exerptLength,
      onChange: function onChange(value) {
        return setAttributes({
          exerptLength: value
        });
      },
      min: 1,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Display Continue Reading Link', 'ultimate-addons-for-gutenberg'),
      checked: displayPostLink,
      onChange: function onChange() {
        return setAttributes({
          displayPostLink: !displayPostLink
        });
      }
    }), displayPostLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('CTA Text', 'ultimate-addons-for-gutenberg'),
      value: readMoreText,
      onChange: function onChange(value) {
        return setAttributes({
          readMoreText: value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Open links in New Tab', 'ultimate-addons-for-gutenberg'),
      checked: linkTarget,
      onChange: function onChange() {
        return setAttributes({
          linkTarget: !linkTarget
        });
      }
    }));
  };

  var timelineItemSettings = function timelineItemSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Timeline Item', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
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
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('P', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('SPAN', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    }), displayPostExcerpt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    })), displayPostDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Date', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: props.attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: dateLoadGoogleFonts,
        label: 'dateLoadGoogleFonts'
      },
      fontFamily: {
        value: dateFontFamily,
        label: 'dateFontFamily'
      },
      fontWeight: {
        value: dateFontWeight,
        label: 'dateFontWeight'
      },
      fontSubset: {
        value: dateFontSubset,
        label: 'dateFontSubset'
      },
      fontSizeType: {
        value: dateFontsizeType,
        label: 'dateFontsizeType'
      },
      fontSize: {
        value: dateFontsize,
        label: 'dateFontsize'
      },
      fontSizeMobile: {
        value: dateFontsizeMobile,
        label: 'dateFontsizeMobile'
      },
      fontSizeTablet: {
        value: dateFontsizeTablet,
        label: 'dateFontsizeTablet'
      },
      lineHeightType: {
        value: dateLineHeightType,
        label: 'dateLineHeightType'
      },
      lineHeight: {
        value: dateLineHeight,
        label: 'dateLineHeight'
      },
      lineHeightMobile: {
        value: dateLineHeightMobile,
        label: 'dateLineHeightMobile'
      },
      lineHeightTablet: {
        value: dateLineHeightTablet,
        label: 'dateLineHeightTablet'
      }
    })), displayPostAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: authorLoadGoogleFonts,
        label: 'authorLoadGoogleFonts'
      },
      fontFamily: {
        value: authorFontFamily,
        label: 'authorFontFamily'
      },
      fontWeight: {
        value: authorFontWeight,
        label: 'authorFontWeight'
      },
      fontSubset: {
        value: authorFontSubset,
        label: 'authorFontSubset'
      },
      fontSizeType: {
        value: authorFontSizeType,
        label: 'authorFontSizeType'
      },
      fontSize: {
        value: authorFontSize,
        label: 'authorFontSize'
      },
      fontSizeMobile: {
        value: authorFontSizeMobile,
        label: 'authorFontSizeMobile'
      },
      fontSizeTablet: {
        value: authorFontSizeTablet,
        label: 'authorFontSizeTablet'
      },
      lineHeightType: {
        value: authorLineHeightType,
        label: 'authorLineHeightType'
      },
      lineHeight: {
        value: authorLineHeight,
        label: 'authorLineHeight'
      },
      lineHeightMobile: {
        value: authorLineHeightMobile,
        label: 'authorLineHeightMobile'
      },
      lineHeightTablet: {
        value: authorLineHeightTablet,
        label: 'authorLineHeightTablet'
      }
    })), displayPostLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('CTA', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("hr", {
      className: "uagb-editor__separator"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Rounded Corners', 'ultimate-addons-for-gutenberg'),
      value: borderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          borderRadius: value
        });
      },
      min: 0,
      initialPosition: 10,
      max: 50,
      allowReset: true
    }));
  };

  var connectorSettings = function connectorSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Connector', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, iconProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Size', 'ultimate-addons-for-gutenberg'),
      value: iconSize,
      onChange: function onChange(value) {
        return setAttributes({
          iconSize: value
        });
      },
      min: 0,
      max: 30,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Background Size', 'ultimate-addons-for-gutenberg'),
      value: connectorBgsize,
      onChange: function onChange(value) {
        return setAttributes({
          connectorBgsize: value
        });
      },
      min: 25,
      max: 90,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Width', 'ultimate-addons-for-gutenberg'),
      value: borderwidth,
      onChange: function onChange(value) {
        return setAttributes({
          borderwidth: value
        });
      },
      min: 1,
      max: 10,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Connector Width', 'ultimate-addons-for-gutenberg'),
      value: separatorwidth,
      onChange: function onChange(value) {
        return setAttributes({
          separatorwidth: value
        });
      },
      min: 1,
      max: 10,
      allowReset: true
    }));
  };

  var connectorColorsSettings = function connectorColorsSettings() {
    var iconColorSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["PanelColorSettings"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      colorSettings: [{
        value: separatorColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            separatorColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Line Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: iconColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            iconColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: separatorBg,
        onChange: function onChange(colorValue) {
          return setAttributes({
            separatorBg: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: separatorBorder,
        onChange: function onChange(colorValue) {
          return setAttributes({
            separatorBorder: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
      }]
    });
    var iconFocusSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["PanelColorSettings"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      colorSettings: [{
        value: separatorFillColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            separatorFillColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Line Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: iconFocus,
        onChange: function onChange(colorValue) {
          return setAttributes({
            iconFocus: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: iconBgFocus,
        onChange: function onChange(colorValue) {
          return setAttributes({
            iconBgFocus: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Color', 'ultimate-addons-for-gutenberg')
      }, {
        value: borderFocus,
        onChange: function onChange(colorValue) {
          return setAttributes({
            borderFocus: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Color', 'ultimate-addons-for-gutenberg')
      }]
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Connector Colors', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["TabPanel"], {
      className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
      activeClass: "active-tab",
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-normal-tab'
      }, {
        name: 'focus',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Focus', 'ultimate-addons-for-gutenberg'),
        className: 'uagb-focus-tab'
      }]
    }, function (tabName) {
      var tabout;

      if ('focus' === tabName.name) {
        tabout = iconFocusSettings;
      } else {
        tabout = iconColorSettings;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, tabout);
    }));
  };

  var colorSettings = function colorSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["PanelColorSettings"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      colorSettings: [{
        value: backgroundColor,
        onChange: function onChange(colorValue) {
          return setAttributes({
            backgroundColor: colorValue
          });
        },
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Color', 'ultimate-addons-for-gutenberg')
      }]
    }, displayPostDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Date Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: dateColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: dateColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          dateColor: colorValue
        });
      },
      allowReset: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: headingColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: headingColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          headingColor: colorValue
        });
      },
      allowReset: true
    })), displayPostAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: authorColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: authorColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          authorColor: colorValue
        });
      },
      allowReset: true
    })), displayPostExcerpt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: subHeadingColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: subHeadingColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          subHeadingColor: colorValue
        });
      },
      allowReset: true
    })), displayPostLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('CTA Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaColor
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: ctaColor,
      onChange: function onChange(colorValue) {
        return setAttributes({
          ctaColor: colorValue
        });
      },
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      className: "uagb-setting-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('CTA Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "components-base-control__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "component-color-indicator",
      style: {
        backgroundColor: ctaBackground
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
      value: ctaBackground,
      onChange: function onChange(colorValue) {
        return setAttributes({
          ctaBackground: colorValue
        });
      },
      allowReset: true
    })));
  };

  var spacingSettings = function spacingSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Block Padding', 'ultimate-addons-for-gutenberg'),
      value: bgPadding,
      onChange: function onChange(value) {
        return setAttributes({
          bgPadding: value
        });
      },
      min: 0,
      initialPosition: 10,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Padding', 'ultimate-addons-for-gutenberg'),
      value: contentPadding,
      onChange: function onChange(value) {
        return setAttributes({
          contentPadding: value
        });
      },
      min: 0,
      initialPosition: 10,
      max: 50,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Horizontal Space', 'ultimate-addons-for-gutenberg'),
      value: horizontalSpace,
      onChange: function onChange(value) {
        return setAttributes({
          horizontalSpace: value
        });
      },
      min: 0,
      max: 50,
      initialPosition: 10,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Vertical Space', 'ultimate-addons-for-gutenberg'),
      value: verticalSpace,
      onChange: function onChange(value) {
        return setAttributes({
          verticalSpace: value
        });
      },
      min: 0,
      max: 100,
      initialPosition: 10,
      allowReset: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Heading Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: headSpace,
      onChange: function onChange(value) {
        return setAttributes({
          headSpace: value
        });
      },
      min: 0,
      max: 50,
      initialPosition: 10,
      allowReset: true
    }), displayPostAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: authorSpace,
      onChange: function onChange(value) {
        return setAttributes({
          authorSpace: value
        });
      },
      min: 0,
      max: 50,
      initialPosition: 10,
      allowReset: true
    }), displayPostExcerpt && displayPostLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: contentSpace,
      onChange: function onChange(value) {
        return setAttributes({
          contentSpace: value
        });
      },
      min: 0,
      max: 50,
      initialPosition: 10,
      allowReset: true
    }), displayPostDate && timelinAlignment !== 'center' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["RangeControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Date Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      value: dateBottomspace,
      onChange: function onChange(value) {
        return setAttributes({
          dateBottomspace: value
        });
      },
      min: 0,
      max: 50,
      initialPosition: 10,
      allowReset: true
    }));
  };

  var blockControls = function blockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["BlockAlignmentToolbar"], {
      value: align,
      onChange: function onChange(value) {
        setAttributes({
          align: value
        });
      },
      controls: ['center', 'left', 'right']
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, querySettings(), layoutSettings(), imageSettings(), contentSettings(), timelineItemSettings(), connectorSettings(), connectorColorsSettings(), colorSettings(), spacingSettings()), loadHeadGoogleFonts, loadSubHeadGoogleFonts, loadDateGoogleFonts, loadAuthorGoogleFonts, loadCtaGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map