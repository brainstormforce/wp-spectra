(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/blockquote/settings"],{

/***/ "./src/blocks/blockquote/settings.js":
/*!*******************************************!*\
  !*** ./src/blocks/blockquote/settings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      className = _props.className,
      setAttributes = _props.setAttributes,
      attributes = _props.attributes;
  var sizeTypes = [{
    key: 'px',
    name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('px', 'ultimate-addons-for-gutenberg')
  }, {
    key: 'em',
    name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('em', 'ultimate-addons-for-gutenberg')
  }];
  var skinStyle = attributes.skinStyle,
      align = attributes.align,
      authorColor = attributes.authorColor,
      descColor = attributes.descColor,
      descFontSize = attributes.descFontSize,
      descFontSizeType = attributes.descFontSizeType,
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
      authorFontSize = attributes.authorFontSize,
      authorFontSizeType = attributes.authorFontSizeType,
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
      descSpace = attributes.descSpace,
      authorSpace = attributes.authorSpace,
      stack = attributes.stack,
      borderColor = attributes.borderColor,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderGap = attributes.borderGap,
      verticalPadding = attributes.verticalPadding,
      quoteColor = attributes.quoteColor,
      quoteBgColor = attributes.quoteBgColor,
      quoteSize = attributes.quoteSize,
      quoteSizeType = attributes.quoteSizeType,
      quoteSizeTablet = attributes.quoteSizeTablet,
      quoteSizeMobile = attributes.quoteSizeMobile,
      quotePadding = attributes.quotePadding,
      quotePaddingType = attributes.quotePaddingType,
      quotePaddingTablet = attributes.quotePaddingTablet,
      quotePaddingMobile = attributes.quotePaddingMobile,
      quoteBorderRadius = attributes.quoteBorderRadius,
      quoteStyle = attributes.quoteStyle,
      enableTweet = attributes.enableTweet,
      tweetLinkColor = attributes.tweetLinkColor,
      tweetBtnColor = attributes.tweetBtnColor,
      tweetBtnHoverColor = attributes.tweetBtnHoverColor,
      tweetBtnBgColor = attributes.tweetBtnBgColor,
      tweetBtnBgHoverColor = attributes.tweetBtnBgHoverColor,
      tweetBtnFontSize = attributes.tweetBtnFontSize,
      tweetBtnFontSizeType = attributes.tweetBtnFontSizeType,
      tweetBtnFontSizeTablet = attributes.tweetBtnFontSizeTablet,
      tweetBtnFontSizeMobile = attributes.tweetBtnFontSizeMobile,
      tweetBtnFontFamily = attributes.tweetBtnFontFamily,
      tweetBtnFontWeight = attributes.tweetBtnFontWeight,
      tweetBtnFontSubset = attributes.tweetBtnFontSubset,
      tweetBtnLineHeightType = attributes.tweetBtnLineHeightType,
      tweetBtnLineHeight = attributes.tweetBtnLineHeight,
      tweetBtnLineHeightTablet = attributes.tweetBtnLineHeightTablet,
      tweetBtnLineHeightMobile = attributes.tweetBtnLineHeightMobile,
      tweetBtnLoadGoogleFonts = attributes.tweetBtnLoadGoogleFonts,
      tweetBtnHrPadding = attributes.tweetBtnHrPadding,
      tweetBtnVrPadding = attributes.tweetBtnVrPadding,
      tweetIconSpacing = attributes.tweetIconSpacing,
      iconView = attributes.iconView,
      iconSkin = attributes.iconSkin,
      iconLabel = attributes.iconLabel,
      iconShareVia = attributes.iconShareVia,
      iconTargetUrl = attributes.iconTargetUrl,
      customUrl = attributes.customUrl,
      authorImage = attributes.authorImage,
      authorImageWidth = attributes.authorImageWidth,
      authorImageSize = attributes.authorImageSize,
      authorImgBorderRadius = attributes.authorImgBorderRadius,
      authorImgPosition = attributes.authorImgPosition,
      quoteTopMargin = attributes.quoteTopMargin,
      quoteBottomMargin = attributes.quoteBottomMargin,
      quoteLeftMargin = attributes.quoteLeftMargin,
      quoteRightMargin = attributes.quoteRightMargin,
      quoteHoverColor = attributes.quoteHoverColor,
      quoteBgHoverColor = attributes.quoteBgHoverColor,
      borderHoverColor = attributes.borderHoverColor;
  var loadDescGoogleFonts;
  var loadAuthorGoogleFonts;
  var loadTweetGoogleFonts;

  if (descLoadGoogleFonts == true) {
    var descconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: descconfig
    });
  }

  if (authorLoadGoogleFonts == true) {
    var authorconfig = {
      google: {
        families: [authorFontFamily + (authorFontWeight ? ':' + authorFontWeight : '')]
      }
    };
    loadAuthorGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: authorconfig
    });
  }

  if (tweetBtnLoadGoogleFonts == true) {
    var tweetBtnconfig = {
      google: {
        families: [tweetBtnFontFamily + (tweetBtnFontWeight ? ':' + tweetBtnFontWeight : '')]
      }
    };
    loadTweetGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: tweetBtnconfig
    });
  }
  /*
   * Event to set Image as null while removing.
   */


  var onRemoveImage = function onRemoveImage() {
    setAttributes({
      authorImage: null
    });
  };
  /*
   * Event to set Image as while adding.
   */


  var onSelectImage = function onSelectImage(media) {
    if (!media || !media.url) {
      setAttributes({
        authorImage: null
      });
      return;
    }

    if (!media.type || 'image' != media.type) {
      return;
    }

    setAttributes({
      authorImage: media
    });
  }; // Image controls.


  var imageControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["BaseControl"], {
    id: "blockquote-image-controls",
    className: "editor-bg-image-control",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author Image', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Image', 'ultimate-addons-for-gutenberg'),
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    value: authorImage,
    render: function render(_ref) {
      var open = _ref.open;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        isSecondary: true,
        onClick: open
      }, imageName);
    }
  }), authorImage && authorImage.url !== 'null' && authorImage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "uagb-rm-btn",
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Remove Image', 'ultimate-addons-for-gutenberg'))), authorImage && authorImage.url !== 'null' && authorImage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author Image Position', 'ultimate-addons-for-gutenberg'),
    value: authorImgPosition,
    onChange: function onChange(value) {
      return setAttributes({
        authorImgPosition: value
      });
    },
    options: [{
      value: 'left',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'top',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Top', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author Image Size', 'ultimate-addons-for-gutenberg'),
    options: imageSizeOptions,
    value: authorImageSize,
    onChange: function onChange(value) {
      return setAttributes({
        authorImageSize: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author Image Width', 'ultimate-addons-for-gutenberg'),
    value: authorImageWidth,
    onChange: function onChange(value) {
      return setAttributes({
        authorImageWidth: value
      });
    },
    min: 0,
    max: 500,
    beforeIcon: "",
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author Image Rounded Corners', 'ultimate-addons-for-gutenberg'),
    value: authorImgBorderRadius,
    onChange: function onChange(value) {
      return setAttributes({
        authorImgBorderRadius: value
      });
    },
    min: 0,
    max: 100,
    beforeIcon: "",
    allowReset: true
  })));
  var borderSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Modern Layout - Styling', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quote Border Style', 'ultimate-addons-for-gutenberg'),
    value: borderStyle,
    onChange: function onChange(value) {
      return setAttributes({
        borderStyle: value
      });
    },
    options: [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('None', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'solid',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Solid', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'dotted',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'dashed',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'double',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Double', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'groove',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Groove', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'inset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Inset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'outset',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Outset', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'ridge',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
    }]
  }), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Thickness (px)', 'ultimate-addons-for-gutenberg'),
    value: borderWidth,
    onChange: function onChange(value) {
      return setAttributes({
        borderWidth: value
      });
    },
    min: 0,
    max: 50,
    allowReset: true
  }));
  var quoteSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quotation Layout - Styling', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], {
    className: "uagb-size-type-field-tabs",
    activeClass: "active-tab",
    tabs: [{
      name: 'desktop',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Dashicon"], {
        icon: "desktop"
      }),
      className: 'uagb-desktop-tab uagb-responsive-tabs'
    }, {
      name: 'tablet',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Dashicon"], {
        icon: "tablet"
      }),
      className: 'uagb-tablet-tab uagb-responsive-tabs'
    }, {
      name: 'mobile',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Dashicon"], {
        icon: "smartphone"
      }),
      className: 'uagb-mobile-tab uagb-responsive-tabs'
    }]
  }, function (tab) {
    var tabout;

    if ('mobile' === tab.name) {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, quoteSizeTypeControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quote Icon Size', 'ultimate-addons-for-gutenberg'),
        value: quoteSizeMobile,
        onChange: function onChange(value) {
          return setAttributes({
            quoteSizeMobile: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "editor-textcolor",
        allowReset: true,
        initialPosition: 30
      }));
    } else if ('tablet' === tab.name) {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, quoteSizeTypeControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quote Icon Size', 'ultimate-addons-for-gutenberg'),
        value: quoteSizeTablet,
        onChange: function onChange(value) {
          return setAttributes({
            quoteSizeTablet: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "editor-textcolor",
        allowReset: true,
        initialPosition: 30
      }));
    } else {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, quoteSizeTypeControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quote Icon Size', 'ultimate-addons-for-gutenberg'),
        value: quoteSize,
        onChange: function onChange(value) {
          return setAttributes({
            quoteSize: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "editor-textcolor",
        allowReset: true,
        initialPosition: 30
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, tabout);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], {
    className: "uagb-size-type-field-tabs",
    activeClass: "active-tab",
    tabs: [{
      name: 'desktop',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Dashicon"], {
        icon: "desktop"
      }),
      className: 'uagb-desktop-tab uagb-responsive-tabs'
    }, {
      name: 'tablet',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Dashicon"], {
        icon: "tablet"
      }),
      className: 'uagb-tablet-tab uagb-responsive-tabs'
    }, {
      name: 'mobile',
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Dashicon"], {
        icon: "smartphone"
      }),
      className: 'uagb-mobile-tab uagb-responsive-tabs'
    }]
  }, function (tab) {
    var tabout;

    if ('mobile' === tab.name) {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, quotePaddingControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Size', 'ultimate-addons-for-gutenberg'),
        value: quotePaddingMobile,
        onChange: function onChange(value) {
          return setAttributes({
            quotePaddingMobile: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "editor-textcolor",
        allowReset: true,
        initialPosition: 30
      }));
    } else if ('tablet' === tab.name) {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, quotePaddingControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Size', 'ultimate-addons-for-gutenberg'),
        value: quotePaddingTablet,
        onChange: function onChange(value) {
          return setAttributes({
            quotePaddingTablet: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "editor-textcolor",
        allowReset: true,
        initialPosition: 30
      }));
    } else {
      tabout = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, quotePaddingControls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Background Size', 'ultimate-addons-for-gutenberg'),
        value: quotePadding,
        onChange: function onChange(value) {
          return setAttributes({
            quotePadding: value
          });
        },
        min: 0,
        max: 500,
        beforeIcon: "editor-textcolor",
        allowReset: true,
        initialPosition: 30
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, tabout);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), quoteBgColor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quote Icon Border Radius (%)', 'ultimate-addons-for-gutenberg'),
    value: quoteBorderRadius,
    onChange: function onChange(value) {
      return setAttributes({
        quoteBorderRadius: value
      });
    },
    min: 0,
    max: 100,
    allowReset: true
  }));
  var skinSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Layout', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
    options: [{
      value: 'border',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Modern', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'quotation',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quotation', 'ultimate-addons-for-gutenberg')
    }],
    value: skinStyle,
    onChange: function onChange(value) {
      return setAttributes({
        skinStyle: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), skinStyle === 'border' && borderSettings, skinStyle === 'quotation' && quoteSettings, skinStyle === 'quotation' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quote Icon Colors', 'ultimate-addons-for-gutenberg'))), 'none' != borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], {
    className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
    activeClass: "active-tab",
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
      className: 'uagb-normal-tab'
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Hover', 'ultimate-addons-for-gutenberg'),
      className: 'uagb-hover-tab'
    }]
  }, function (tabName) {
    var tabout;

    if ('hover' === tabName.name) {
      tabout = hoverSettings;
    } else {
      tabout = colorSettings;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, tabout);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
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
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Note: Choose on what breakpoint the elements will stack.', 'ultimate-addons-for-gutenberg'),
    onChange: function onChange(value) {
      return setAttributes({
        stack: value
      });
    }
  }));
  var typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Content', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quote', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quote Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: descColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: descColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        descColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: authorColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: authorColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        authorColor: colorValue
      });
    },
    allowReset: true
  }), imageControls);
  var twitterSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Twitter Icon', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Enable Twitter Icon', 'ultimate-addons-for-gutenberg'),
    checked: enableTweet,
    onChange: function onChange() {
      return setAttributes({
        enableTweet: !enableTweet
      });
    }
  }), enableTweet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon View', 'ultimate-addons-for-gutenberg'),
    value: iconView,
    onChange: function onChange(value) {
      return setAttributes({
        iconView: value
      });
    },
    options: [{
      value: 'icon_text',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon & Text', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'icon',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'text',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Text', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Style', 'ultimate-addons-for-gutenberg'),
    value: iconSkin,
    onChange: function onChange(value) {
      return setAttributes({
        iconSkin: value
      });
    },
    options: [{
      value: 'classic',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Classic', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bubble',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Bubble', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'link',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Link', 'ultimate-addons-for-gutenberg')
    }]
  })), enableTweet && iconView !== 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Label', 'ultimate-addons-for-gutenberg'),
    value: iconLabel,
    onChange: function onChange(value) {
      return setAttributes({
        iconLabel: value
      });
    }
  })), enableTweet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: tweetBtnLoadGoogleFonts,
      label: 'tweetBtnLoadGoogleFonts'
    },
    fontFamily: {
      value: tweetBtnFontFamily,
      label: 'tweetBtnFontFamily'
    },
    fontWeight: {
      value: tweetBtnFontWeight,
      label: 'tweetBtnFontWeight'
    },
    fontSubset: {
      value: tweetBtnFontSubset,
      label: 'tweetBtnFontSubset'
    },
    fontSizeType: {
      value: tweetBtnFontSizeType,
      label: 'tweetBtnFontSizeType'
    },
    fontSize: {
      value: tweetBtnFontSize,
      label: 'tweetBtnFontSize'
    },
    fontSizeMobile: {
      value: tweetBtnFontSizeMobile,
      label: 'tweetBtnFontSizeMobile'
    },
    fontSizeTablet: {
      value: tweetBtnFontSizeTablet,
      label: 'tweetBtnFontSizeTablet'
    },
    lineHeightType: {
      value: tweetBtnLineHeightType,
      label: 'tweetBtnLineHeightType'
    },
    lineHeight: {
      value: tweetBtnLineHeight,
      label: 'tweetBtnLineHeight'
    },
    lineHeightMobile: {
      value: tweetBtnLineHeightMobile,
      label: 'tweetBtnLineHeightMobile'
    },
    lineHeightTablet: {
      value: tweetBtnLineHeightTablet,
      label: 'tweetBtnLineHeightTablet'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Target URL', 'ultimate-addons-for-gutenberg'),
    value: iconTargetUrl,
    onChange: function onChange(value) {
      return setAttributes({
        iconTargetUrl: value
      });
    },
    options: [{
      value: 'current',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Current Page', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'custom',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Custom URL', 'ultimate-addons-for-gutenberg')
    }]
  }), iconTargetUrl == 'custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('URL', 'ultimate-addons-for-gutenberg'),
    value: customUrl,
    onChange: function onChange(value) {
      return setAttributes({
        customUrl: value
      });
    }
  })), enableTweet && iconSkin !== 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Button Padding (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
    className: 'uagb-margin-control',
    value: tweetBtnVrPadding,
    onChange: function onChange(value) {
      return setAttributes({
        tweetBtnVrPadding: value
      });
    },
    min: 0,
    max: 500,
    allowReset: true,
    initialPosition: 5
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].horizontal_spacing,
    className: 'uagb-margin-control',
    value: tweetBtnHrPadding,
    onChange: function onChange(value) {
      return setAttributes({
        tweetBtnHrPadding: value
      });
    },
    min: 0,
    max: 500,
    allowReset: true,
    initialPosition: 5
  })), enableTweet && iconView == 'icon_text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Space between Tweet Icon and Text', 'ultimate-addons-for-gutenberg'),
    value: tweetIconSpacing,
    onChange: function onChange(value) {
      return setAttributes({
        tweetIconSpacing: value
      });
    },
    min: 0,
    max: 20,
    allowReset: true,
    initialPosition: 5
  })), enableTweet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["TabPanel"], {
    className: "uagb-inspect-tabs uagb-inspect-tabs-col-2",
    activeClass: "active-tab",
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
      className: 'uagb-normal-tab'
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Hover', 'ultimate-addons-for-gutenberg'),
      className: 'uagb-hover-tab'
    }]
  }, function (tabName) {
    var tweet_tab_output;

    if ('hover' === tabName.name) {
      tweet_tab_output = tweetHover;
    } else {
      tweet_tab_output = tweetNormal;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, tweet_tab_output);
  })));
  var spacingSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, skinStyle === 'quotation' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quote Icon Margin (px)', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].top_margin,
    className: 'uagb-margin-control',
    value: quoteTopMargin,
    onChange: function onChange(value) {
      return setAttributes({
        quoteTopMargin: value
      });
    },
    min: 0,
    max: 500,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].bottom_margin,
    className: 'uagb-margin-control',
    value: quoteBottomMargin,
    onChange: function onChange(value) {
      return setAttributes({
        quoteBottomMargin: value
      });
    },
    min: 0,
    max: 500,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].left_margin,
    className: 'uagb-margin-control',
    value: quoteLeftMargin,
    onChange: function onChange(value) {
      return setAttributes({
        quoteLeftMargin: value
      });
    },
    min: 0,
    max: 500,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].right_margin,
    className: 'uagb-margin-control',
    value: quoteRightMargin,
    onChange: function onChange(value) {
      return setAttributes({
        quoteRightMargin: value
      });
    },
    min: 0,
    max: 500,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  })), skinStyle === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Gap Between Border and Quote', 'ultimate-addons-for-gutenberg'),
    value: borderGap,
    onChange: function onChange(value) {
      return setAttributes({
        borderGap: value
      });
    },
    min: 0,
    max: 500,
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Quote Bottom Spacing', 'ultimate-addons-for-gutenberg'),
    value: descSpace,
    onChange: function onChange(value) {
      return setAttributes({
        descSpace: value
      });
    },
    min: 0,
    max: 200,
    allowReset: true,
    initialPosition: 0
  }), align == 'center' && skinStyle !== 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Author Bottom Spacing', 'ultimate-addons-for-gutenberg'),
    value: authorSpace,
    onChange: function onChange(value) {
      return setAttributes({
        authorSpace: value
      });
    },
    min: 0,
    max: 200,
    allowReset: true,
    initialPosition: 0
  }), skinStyle === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    className: "uagb-editor__separator"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Vertical Padding', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["RangeControl"], {
    label: _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_spacing,
    className: 'uagb-margin-control',
    value: verticalPadding,
    onChange: function onChange(value) {
      return setAttributes({
        verticalPadding: value
      });
    },
    min: 0,
    max: 500,
    allowReset: true
  })));
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

  var imageName = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Image', 'ultimate-addons-for-gutenberg');

  if (authorImage) {
    if (authorImage.url == null || authorImage.url == '') {
      imageName = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Select Image', 'ultimate-addons-for-gutenberg');
    } else {
      imageName = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Replace Image', 'ultimate-addons-for-gutenberg');
    }
  }

  var colorSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, 'none' != borderStyle && skinStyle == 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: borderColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: borderColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        borderColor: colorValue
      });
    },
    allowReset: true
  })), skinStyle == 'quotation' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: quoteColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: quoteColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        quoteColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: quoteBgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: quoteBgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        quoteBgColor: colorValue
      });
    },
    allowReset: true
  })));
  var hoverSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, skinStyle == 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Border Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: borderHoverColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: borderHoverColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        borderHoverColor: colorValue
      });
    },
    allowReset: true
  })), skinStyle == 'quotation' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: quoteHoverColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: quoteHoverColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        quoteHoverColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Icon Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: quoteBgHoverColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: quoteBgHoverColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        quoteBgHoverColor: colorValue
      });
    },
    allowReset: true
  })));
  var tweetNormal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, iconSkin == 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tweet Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: tweetLinkColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: tweetLinkColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        tweetLinkColor: colorValue
      });
    },
    allowReset: true
  })), iconSkin !== 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tweet Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: tweetBtnColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: tweetBtnColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        tweetBtnColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tweet Background Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: tweetBtnBgColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: tweetBtnBgColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        tweetBtnBgColor: colorValue
      });
    },
    allowReset: true
  })));
  var tweetHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, iconSkin == 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tweet Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: tweetBtnHoverColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: tweetBtnHoverColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        tweetBtnHoverColor: colorValue
      });
    },
    allowReset: true
  })), iconSkin !== 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tweet Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: tweetBtnHoverColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: tweetBtnHoverColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        tweetBtnHoverColor: colorValue
      });
    },
    allowReset: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "uagb-setting-label"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Tweet Background Hover Color', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "components-base-control__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "component-color-indicator",
    style: {
      backgroundColor: tweetBtnBgHoverColor
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["ColorPalette"], {
    value: tweetBtnBgHoverColor,
    onChange: function onChange(colorValue) {
      return setAttributes({
        tweetBtnBgHoverColor: colorValue
      });
    },
    allowReset: true
  })));
  var quoteSizeTypeControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: "uagb-size-type-field",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
  }, sizeTypes.map(function (_ref2) {
    var name = _ref2.name,
        key = _ref2.key;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: key,
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: quoteSizeType === key,
      "aria-pressed": quoteSizeType === key,
      onClick: function onClick() {
        return setAttributes({
          quoteSizeType: key
        });
      }
    }, name);
  }));
  var quotePaddingControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: "uagb-size-type-field",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Size Type', 'ultimate-addons-for-gutenberg')
  }, sizeTypes.map(function (_ref3) {
    var name = _ref3.name,
        key = _ref3.key;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      key: key,
      className: "uagb-size-btn",
      isSmall: true,
      isPrimary: quotePaddingType === key,
      "aria-pressed": quotePaddingType === key,
      onClick: function onClick() {
        return setAttributes({
          quotePaddingType: key
        });
      }
    }, name);
  }));

  var getTooltipElement = function getTooltipElement() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
      label: "Options"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Twitter Username', 'ultimate-addons-for-gutenberg'),
      className: "".concat(className, "__via-label"),
      htmlFor: "".concat(className, "__via")
    }, ' ', _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].at_the_rate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Twitter Username', 'ultimate-addons-for-gutenberg'),
      className: "".concat(className, "__via"),
      id: "".concat(className, "__via"),
      onChange: function onChange(event) {
        return setAttributes({
          iconShareVia: event.target.value
        });
      },
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Username', 'ultimate-addons-for-gutenberg'),
      type: "text",
      value: iconShareVia
    })));
  };

  var getAlignmentToolbar = function getAlignmentToolbar() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["AlignmentToolbar"], {
      value: align,
      onChange: function onChange(value) {
        return setAttributes({
          align: value
        });
      }
    });
  };

  var getToolbarElement = function getToolbarElement() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
      label: "Options"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Normal Quote', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-icon-button', 'components-toolbar__control', {
        'is-active': quoteStyle === 'style_1'
      }),
      onClick: function onClick() {
        return setAttributes({
          quoteStyle: 'style_1'
        });
      }
    }, _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].quote_1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
      label: "Options"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Inline Quote', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-icon-button', 'components-toolbar__control', {
        'is-active': quoteStyle === 'style_2'
      }),
      onClick: function onClick() {
        return setAttributes({
          quoteStyle: 'style_2'
        });
      }
    }, _Controls_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"].quote_2))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], {
    key: "controls"
  }, skinStyle !== 'border' && getAlignmentToolbar(), skinStyle === 'quotation' && getToolbarElement(), enableTweet && getTooltipElement()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, skinSettings, typography, twitterSettings, spacingSettings), loadDescGoogleFonts, loadAuthorGoogleFonts, loadTweetGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map