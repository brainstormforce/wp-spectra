(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/blockquote/settings"],{

/***/ "./src/blocks/blockquote/settings.js":
/*!*******************************************!*\
  !*** ./src/blocks/blockquote/settings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



















const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes,
    deviceType
  } = props;
  const {
    skinStyle,
    align,
    authorColor,
    descColor,
    descFontSize,
    descFontSizeType,
    descFontSizeTablet,
    descFontSizeMobile,
    descFontFamily,
    descFontWeight,
    descFontStyle,
    descLineHeightType,
    descLineHeight,
    descLineHeightTablet,
    descLineHeightMobile,
    descLoadGoogleFonts,
    authorFontSize,
    authorFontSizeType,
    authorFontSizeTablet,
    authorFontSizeMobile,
    authorFontFamily,
    authorFontWeight,
    authorFontStyle,
    authorLineHeightType,
    authorLineHeight,
    authorLineHeightTablet,
    authorLineHeightMobile,
    authorLoadGoogleFonts,
    descSpace,
    descSpaceTablet,
    descSpaceMobile,
    authorSpace,
    authorSpaceTablet,
    authorSpaceMobile,
    borderColor,
    borderStyle,
    borderWidth,
    borderGap,
    borderGapTablet,
    borderGapMobile,
    verticalPadding,
    verticalPaddingTablet,
    verticalPaddingMobile,
    quoteColor,
    quoteBgColor,
    quoteSize,
    quoteSizeType,
    quoteSizeTablet,
    quoteSizeMobile,
    quotePadding,
    quotePaddingType,
    quotePaddingTablet,
    quotePaddingMobile,
    quoteBorderRadius,
    quoteStyle,
    enableTweet,
    tweetLinkColor,
    tweetBtnColor,
    tweetBtnHoverColor,
    tweetBtnBgColor,
    tweetBtnBgHoverColor,
    tweetBtnFontSize,
    tweetBtnFontSizeType,
    tweetBtnFontSizeTablet,
    tweetBtnFontSizeMobile,
    tweetBtnFontFamily,
    tweetBtnFontWeight,
    tweetBtnFontStyle,
    tweetBtnLineHeightType,
    tweetBtnLineHeight,
    tweetBtnLineHeightTablet,
    tweetBtnLineHeightMobile,
    tweetBtnLoadGoogleFonts,
    tweetIconSpacing,
    tweetIconSpacingUnit,
    iconView,
    iconSkin,
    iconLabel,
    iconShareVia,
    iconTargetUrl,
    customUrl,
    authorImage,
    authorImageWidth,
    authorImageWidthTablet,
    authorImageWidthMobile,
    authorImageWidthUnit,
    authorImageGap,
    authorImageGapTablet,
    authorImageGapMobile,
    authorImageGapUnit,
    authorImageSize,
    authorImgBorderRadius,
    authorImgBorderRadiusTablet,
    authorImgBorderRadiusMobile,
    authorImgPosition,
    quoteTopMargin,
    quoteBottomMargin,
    quoteLeftMargin,
    quoteRightMargin,
    quoteHoverColor,
    quoteBgHoverColor,
    borderHoverColor,
    authorImgBorderRadiusUnit,
    borderWidthUnit,
    quoteBorderRadiusUnit,
    quoteUnit,
    quotemobileUnit,
    quotetabletUnit,
    borderGapUnit,
    descSpaceUnit,
    authorSpaceUnit,
    verticalPaddingUnit,
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
    btnspacingLink,
    spacingLink,
    descTransform,
    authorTransform,
    tweetBtnTransform,
    descDecoration,
    authorDecoration,
    tweetBtnDecoration,
    quoteTopMarginTablet,
    quoteBottomMarginTablet,
    quoteLeftMarginTablet,
    quoteRightMarginTablet,
    quoteTopMarginMobile,
    quoteBottomMarginMobile,
    quoteLeftMarginMobile,
    quoteRightMarginMobile,
    author,
    descLetterSpacing,
    descLetterSpacingTablet,
    descLetterSpacingMobile,
    descLetterSpacingType,
    authorLetterSpacing,
    authorLetterSpacingTablet,
    authorLetterSpacingMobile,
    authorLetterSpacingType,
    tweetBtnLetterSpacing,
    tweetBtnLetterSpacingTablet,
    tweetBtnLetterSpacingMobile,
    tweetBtnLetterSpacingType
  } = attributes;
  let loadDescGoogleFonts;
  let loadAuthorGoogleFonts;
  let loadTweetGoogleFonts;

  if (descLoadGoogleFonts === true) {
    const descconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: descconfig
    });
  }

  if (authorLoadGoogleFonts === true) {
    const authorconfig = {
      google: {
        families: [authorFontFamily + (authorFontWeight ? ':' + authorFontWeight : '')]
      }
    };
    loadAuthorGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: authorconfig
    });
  }

  if (tweetBtnLoadGoogleFonts === true) {
    const tweetBtnconfig = {
      google: {
        families: [tweetBtnFontFamily + (tweetBtnFontWeight ? ':' + tweetBtnFontWeight : '')]
      }
    };
    loadTweetGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      config: tweetBtnconfig
    });
  }
  /*
   * Event to set Image as null while removing.
   */


  const onRemoveImage = () => {
    setAttributes({
      authorImage: null
    });
  };
  /*
   * Event to set Image as while adding.
   */


  const onSelectImage = media => {
    if (!media || !media.url) {
      setAttributes({
        authorImage: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      return;
    }

    setAttributes({
      authorImage: media
    });
  };

  const imageSizeOptions = [{
    value: 'thumbnail',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'medium',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Medium', 'ultimate-addons-for-gutenberg')
  }, {
    value: 'full',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Large', 'ultimate-addons-for-gutenberg')
  }]; // Image controls.

  const imageControls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Image', 'ultimate-addons-for-gutenberg'),
    onSelectImage: onSelectImage,
    backgroundImage: authorImage,
    onRemoveImage: onRemoveImage
  }));
  const quoteSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Icon Size', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: quoteSize,
        label: 'quoteSize'
      },
      tablet: {
        value: quoteSizeTablet,
        label: 'quoteSizeTablet'
      },
      mobile: {
        value: quoteSizeMobile,
        label: 'quoteSizeMobile'
      }
    },
    min: 0,
    max: 50,
    unit: {
      value: quoteSizeType,
      label: 'quoteSizeType'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Size', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: quotePadding,
        label: 'quotePadding'
      },
      tablet: {
        value: quotePaddingTablet,
        label: 'quotePaddingTablet'
      },
      mobile: {
        value: quotePaddingMobile,
        label: 'quotePaddingMobile'
      }
    },
    min: 0,
    max: 200,
    unit: {
      value: quotePaddingType,
      label: 'quotePaddingType'
    },
    setAttributes: setAttributes
  }), quoteBgColor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Icon Border Radius', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: quoteBorderRadius,
    onChange: value => setAttributes({
      quoteBorderRadius: value
    }),
    min: 0,
    max: 100,
    unit: {
      value: quoteBorderRadiusUnit,
      label: 'quoteBorderRadiusUnit'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Em', 'ultimate-addons-for-gutenberg'),
      unitValue: 'em'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('%', 'ultimate-addons-for-gutenberg'),
      unitValue: '%'
    }]
  }));
  const skinSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Layout', 'ultimate-addons-for-gutenberg')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Type', 'ultimate-addons-for-gutenberg'),
    data: {
      value: skinStyle,
      label: 'skinStyle'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'border',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Modern', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'quotation',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quotation', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), 'quotation' === skinStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quotation Type', 'ultimate-addons-for-gutenberg'),
    data: {
      value: quoteStyle,
      label: 'quoteStyle'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'style_1',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'style_2',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Inline', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Text Alignment', 'ultimate-addons-for-gutenberg'),
    data: {
      value: align,
      label: 'align'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'left',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: true
  })), imageControls);
  const quoteStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Typography', 'ultimate-addons-for-gutenberg'),
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
    fontStyle: {
      value: descFontStyle,
      label: 'descFontStyle'
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
    },
    letterSpacing: {
      value: descLetterSpacing,
      label: 'descLetterSpacing'
    },
    letterSpacingTablet: {
      value: descLetterSpacingTablet,
      label: 'descLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: descLetterSpacingMobile,
      label: 'descLetterSpacingMobile'
    },
    letterSpacingType: {
      value: descLetterSpacingType,
      label: 'descLetterSpacingType'
    },
    transform: {
      value: descTransform,
      label: 'descTransform'
    },
    decoration: {
      value: descDecoration,
      label: 'descDecoration'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Color', 'ultimate-addons-for-gutenberg'),
    colorValue: descColor ? descColor : '',
    onColorChange: value => setAttributes({
      descColor: value
    })
  }));
  const authorStyling = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, author !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Typography', 'ultimate-addons-for-gutenberg'),
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
    fontStyle: {
      value: authorFontStyle,
      label: 'authorFontStyle'
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
    },
    letterSpacing: {
      value: authorLetterSpacing,
      label: 'authorLetterSpacing'
    },
    letterSpacingTablet: {
      value: authorLetterSpacingTablet,
      label: 'authorLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: authorLetterSpacingMobile,
      label: 'authorLetterSpacingMobile'
    },
    letterSpacingType: {
      value: authorLetterSpacingType,
      label: 'authorLetterSpacingType'
    },
    transform: {
      value: authorTransform,
      label: 'authorTransform'
    },
    decoration: {
      value: authorDecoration,
      label: 'authorDecoration'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Color', 'ultimate-addons-for-gutenberg'),
    colorValue: authorColor ? authorColor : '',
    onColorChange: value => setAttributes({
      authorColor: value
    })
  })), authorImage && authorImage.url !== 'null' && authorImage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Image Position', 'ultimate-addons-for-gutenberg'),
    data: {
      value: authorImgPosition,
      label: 'authorImgPosition'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'left',
      label: 'Left'
    }, {
      value: 'top',
      label: 'Top'
    }, {
      value: 'right',
      label: 'Right'
    }],
    showIcons: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Image Size', 'ultimate-addons-for-gutenberg'),
    options: imageSizeOptions,
    value: authorImageSize,
    onChange: value => setAttributes({
      authorImageSize: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Image Width', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: authorImageWidth,
        label: 'authorImageWidth'
      },
      tablet: {
        value: authorImageWidthTablet,
        label: 'authorImageWidthTablet'
      },
      mobile: {
        value: authorImageWidthMobile,
        label: 'authorImageWidthMobile'
      }
    },
    min: 0,
    max: 500,
    unit: {
      value: authorImageWidthUnit,
      label: 'authorImageWidthUnit'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Image Border Radius', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: authorImgBorderRadius,
        label: 'authorImgBorderRadius'
      },
      tablet: {
        value: authorImgBorderRadiusTablet,
        label: 'authorImgBorderRadiusTablet'
      },
      mobile: {
        value: authorImgBorderRadiusMobile,
        label: 'authorImgBorderRadiusMobile'
      }
    },
    min: 0,
    max: 50,
    unit: {
      value: authorImgBorderRadiusUnit,
      label: 'authorImgBorderRadiusUnit'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('%', 'ultimate-addons-for-gutenberg'),
      unitValue: '%'
    }],
    setAttributes: setAttributes
  })));
  const twitterSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Twitter Icon', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enable Icon', 'ultimate-addons-for-gutenberg'),
    checked: enableTweet,
    onChange: () => setAttributes({
      enableTweet: !enableTweet
    })
  }), enableTweet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Twitter Username', 'ultimate-addons-for-gutenberg'),
    value: iconShareVia,
    onChange: value => setAttributes({
      iconShareVia: value
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon View', 'ultimate-addons-for-gutenberg'),
    data: {
      value: iconView,
      label: 'iconView'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'icon_text',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Both', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'icon',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'text',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Text', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Style', 'ultimate-addons-for-gutenberg'),
    data: {
      value: iconSkin,
      label: 'iconSkin'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'classic',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Classic', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'bubble',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Bubble', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'link',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Link', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Target URL', 'ultimate-addons-for-gutenberg'),
    data: {
      value: iconTargetUrl,
      label: 'iconTargetUrl'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'current',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Current Page', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'custom',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Custom URL', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: false
  }), iconTargetUrl === 'custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('URL', 'ultimate-addons-for-gutenberg'),
    value: customUrl,
    onChange: value => setAttributes({
      customUrl: value
    })
  })), enableTweet && iconView !== 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Label', 'ultimate-addons-for-gutenberg'),
    value: iconLabel,
    onChange: value => setAttributes({
      iconLabel: value
    })
  })));
  const spacingSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
    initialOpen: true
  }, authorImage && authorImage.url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author - Image Gap', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: authorImageGap,
        label: 'authorImageGap'
      },
      tablet: {
        value: authorImageGapTablet,
        label: 'authorImageGapTablet'
      },
      mobile: {
        value: authorImageGapMobile,
        label: 'authorImageGapMobile'
      }
    },
    min: 0,
    max: 500,
    unit: {
      value: authorImageGapUnit,
      label: 'authorImageGapUnit'
    },
    setAttributes: setAttributes
  }), skinStyle === 'quotation' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Icon Margin', 'ultimate-addons-for-gutenberg'),
    valueTop: {
      value: quoteTopMargin,
      label: 'quoteTopMargin'
    },
    valueRight: {
      value: quoteRightMargin,
      label: 'quoteRightMargin'
    },
    valueBottom: {
      value: quoteBottomMargin,
      label: 'quoteBottomMargin'
    },
    valueLeft: {
      value: quoteLeftMargin,
      label: 'quoteLeftMargin'
    },
    valueTopTablet: {
      value: quoteTopMarginTablet,
      label: 'quoteTopMarginTablet'
    },
    valueRightTablet: {
      value: quoteRightMarginTablet,
      label: 'quoteRightMarginTablet'
    },
    valueBottomTablet: {
      value: quoteBottomMarginTablet,
      label: 'quoteBottomMarginTablet'
    },
    valueLeftTablet: {
      value: quoteLeftMarginTablet,
      label: 'quoteLeftMarginTablet'
    },
    valueTopMobile: {
      value: quoteTopMarginMobile,
      label: 'quoteTopMarginMobile'
    },
    valueRightMobile: {
      value: quoteRightMarginMobile,
      label: 'quoteRightMarginMobile'
    },
    valueBottomMobile: {
      value: quoteBottomMarginMobile,
      label: 'quoteBottomMarginMobile'
    },
    valueLeftMobile: {
      value: quoteLeftMarginMobile,
      label: 'quoteLeftMarginMobile'
    },
    unit: {
      value: quoteUnit,
      label: 'quoteUnit'
    },
    mUnit: {
      value: quotemobileUnit,
      label: 'quotemobileUnit'
    },
    tUnit: {
      value: quotetabletUnit,
      label: 'quotetabletUnit'
    },
    deviceType: deviceType,
    attributes: attributes,
    setAttributes: setAttributes,
    link: {
      value: spacingLink,
      label: 'spacingLink'
    }
  })), skinStyle === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border - Quote Gap', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: borderGap,
        label: 'borderGap'
      },
      tablet: {
        value: borderGapTablet,
        label: 'borderGapTablet'
      },
      mobile: {
        value: borderGapMobile,
        label: 'borderGapMobile'
      }
    },
    min: 0,
    max: 200,
    unit: {
      value: borderGapUnit,
      label: 'borderGapUnit'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Bottom Spacing', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: descSpace,
        label: 'descSpace'
      },
      tablet: {
        value: descSpaceTablet,
        label: 'descSpaceTablet'
      },
      mobile: {
        value: descSpaceMobile,
        label: 'descSpaceMobile'
      }
    },
    min: 0,
    max: 200,
    unit: {
      value: descSpaceUnit,
      label: 'descSpaceUnit'
    },
    setAttributes: setAttributes
  }), align === 'center' && skinStyle !== 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Author Bottom Spacing', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: authorSpace,
        label: 'authorSpace'
      },
      tablet: {
        value: authorSpaceTablet,
        label: 'authorSpaceTablet'
      },
      mobile: {
        value: authorSpaceMobile,
        label: 'authorSpaceMobile'
      }
    },
    min: 0,
    max: 200,
    unit: {
      value: authorSpaceUnit,
      label: 'authorSpaceUnit'
    },
    setAttributes: setAttributes
  }), skinStyle === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Vertical Spacing', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: verticalPadding,
        label: 'verticalPadding'
      },
      tablet: {
        value: verticalPaddingTablet,
        label: 'verticalPaddingTablet'
      },
      mobile: {
        value: verticalPaddingMobile,
        label: 'verticalPaddingMobile'
      }
    },
    min: 0,
    max: 500,
    unit: {
      value: verticalPaddingUnit,
      label: 'verticalPaddingUnit'
    },
    setAttributes: setAttributes
  })));

  const generalStyle = () => {
    const tabOutputNormal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'),
      colorValue: quoteColor ? quoteColor : '',
      onColorChange: value => setAttributes({
        quoteColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: quoteBgColor ? quoteBgColor : '',
      onColorChange: value => setAttributes({
        quoteBgColor: value
      })
    }));
    const tabOutputHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'),
      colorValue: quoteHoverColor ? quoteHoverColor : '',
      onColorChange: value => setAttributes({
        quoteHoverColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: quoteBgHoverColor ? quoteBgHoverColor : '',
      onColorChange: value => setAttributes({
        quoteBgHoverColor: value
      })
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, skinStyle === 'border' && borderStyleSetting(), skinStyle === 'quotation' && quoteSettings, skinStyle === 'quotation' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: tabOutputNormal,
      hover: tabOutputHover,
      disableBottomSeparator: true
    }));
  };

  const borderStyleSetting = () => {
    const tabOutputNormal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
      colorValue: borderColor ? borderColor : '',
      onColorChange: value => setAttributes({
        borderColor: value
      })
    });
    const tabOutputHover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
      colorValue: borderHoverColor ? borderHoverColor : '',
      onColorChange: value => setAttributes({
        borderHoverColor: value
      })
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Quote Border Style', 'ultimate-addons-for-gutenberg'),
      value: borderStyle,
      onChange: value => setAttributes({
        borderStyle: value
      }),
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Solid', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Groove', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Inset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Outset', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ridge', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' !== borderStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Thickness', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: borderWidth,
      onChange: value => setAttributes({
        borderWidth: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: borderWidthUnit,
        label: 'borderWidthUnit'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: tabOutputNormal,
      hover: tabOutputHover,
      disableBottomSeparator: true
    })));
  };

  const iconStyleSetting = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_16__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Twitter Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, iconView !== 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontStyle: {
        value: tweetBtnFontStyle,
        label: 'tweetBtnFontStyle'
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
      },
      letterSpacing: {
        value: tweetBtnLetterSpacing,
        label: 'tweetBtnLetterSpacing'
      },
      letterSpacingTablet: {
        value: tweetBtnLetterSpacingTablet,
        label: 'tweetBtnLetterSpacingTablet'
      },
      letterSpacingMobile: {
        value: tweetBtnLetterSpacingMobile,
        label: 'tweetBtnLetterSpacingMobile'
      },
      letterSpacingType: {
        value: tweetBtnLetterSpacingType,
        label: 'tweetBtnLetterSpacingType'
      },
      transform: {
        value: tweetBtnTransform,
        label: 'tweetBtnTransform'
      },
      decoration: {
        value: tweetBtnDecoration,
        label: 'tweetBtnDecoration'
      }
    }), iconSkin !== 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
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
        value: btnspacingLink,
        label: 'btnspacingLink'
      }
    })), iconView === 'icon_text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Icon & Text Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: tweetIconSpacing,
      onChange: value => setAttributes({
        tweetIconSpacing: value
      }),
      min: 0,
      max: 20,
      unit: {
        value: tweetIconSpacingUnit,
        label: 'tweetIconSpacingUnit'
      },
      initialPosition: 5
    }), iconSkin === 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetLinkColor ? tweetLinkColor : '',
        onColorChange: value => setAttributes({
          tweetLinkColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetBtnHoverColor ? tweetBtnHoverColor : '',
        onColorChange: value => setAttributes({
          tweetBtnHoverColor: value
        })
      }),
      disableBottomSeparator: true
    }), iconSkin !== 'link' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetBtnColor ? tweetBtnColor : '',
        onColorChange: value => setAttributes({
          tweetBtnColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetBtnBgColor ? tweetBtnBgColor : '',
        onColorChange: value => setAttributes({
          tweetBtnBgColor: value
        })
      })),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetBtnHoverColor ? tweetBtnHoverColor : '',
        onColorChange: value => setAttributes({
          tweetBtnHoverColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: tweetBtnBgHoverColor ? tweetBtnBgHoverColor : '',
        onColorChange: value => setAttributes({
          tweetBtnBgHoverColor: value
        })
      })),
      disableBottomSeparator: true
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["BlockControls"], {
    key: "controls"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_15__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].general, skinSettings, twitterSettings), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].style, generalStyle(), enableTweet && iconStyleSetting(), quoteStyling, authorStyling), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_7__["UAGTabs"].advance, {
    parentProps: props
  }), spacingSettings))), loadDescGoogleFonts, loadAuthorGoogleFonts, loadTweetGoogleFonts);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/image/index.js":
/*!***************************************!*\
  !*** ./src/components/image/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Controls_block_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/block-icons */ "./blocks-config/uagb-controls/block-icons.js");






const UAGImage = props => {
  const {
    onSelectImage,
    backgroundImage,
    onRemoveImage,
    showVideoInput,
    label,
    disableRemove = false,
    allow = ['image']
  } = props; // This is used to render an icon in place of the background image when needed.

  let placeholderIcon; // Need to refactor this code as per multi-image select for more diversity.

  let labelText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image', 'ultimate-addons-for-gutenberg');

  let selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Image', 'ultimate-addons-for-gutenberg');

  let replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Change Image', 'ultimate-addons-for-gutenberg');

  let allowedTypes = ['image'];

  if (showVideoInput) {
    labelText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Video', 'ultimate-addons-for-gutenberg');
    selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Video', 'ultimate-addons-for-gutenberg');
    replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Change Video', 'ultimate-addons-for-gutenberg');
    allowedTypes = ['video'];
    placeholderIcon = _Controls_block_icons__WEBPACK_IMPORTED_MODULE_4__["default"].video_placeholder;
  }

  labelText = label ? label : labelText;
  labelText = false === label ? label : labelText; // Newer Dynamic Code here ( Currently used in Lottie Block )

  if (label === 'Lottie Animation') {
    // No Template Literals due to @wordpress/i18n-no-variables
    selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Lottie Animation', 'ultimate-addons-for-gutenberg');
    replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Change Lottie Animation', 'ultimate-addons-for-gutenberg');
    allowedTypes = allow;
    placeholderIcon = _Controls_block_icons__WEBPACK_IMPORTED_MODULE_4__["default"].lottie;
  }

  const renderMediaUploader = open => {
    const uploadType = backgroundImage !== null && backgroundImage !== void 0 && backgroundImage.url ? 'replace' : 'add';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      className: `spectra-media-control__clickable spectra-media-control__clickable--${uploadType}`,
      onClick: open
    }, 'add' === uploadType ? renderButton(uploadType) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uag-control-label"
    }, replaceImageLabel));
  };

  const renderButton = buttonType => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: `spectra-media-control__button spectra-media-control__button--${buttonType}`
  }, _Controls_block_icons__WEBPACK_IMPORTED_MODULE_4__["default"][buttonType]); // This Can Be Deprecated.


  const generateBackground = media => {
    const regex = /(?:\.([^.]+))?$/;
    let mediaURL = media; // console.log( String( mediaURL ) );

    switch (regex.exec(String(mediaURL))[1]) {
      // For Lottie JSON Files.
      case 'json':
        mediaURL = '';
        break;
      // For Videos.

      case 'avi':
      case 'mpg':
      case 'mp4':
      case 'm4v':
      case 'mov':
      case 'ogv':
      case 'vtt':
      case 'wmv':
      case '3gp':
      case '3g2':
        mediaURL = '';
        break;
    }

    return mediaURL;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    className: "spectra-media-control",
    id: `uagb-option-selector-${label}`,
    label: labelText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "spectra-media-control__wrapper",
    style: {
      backgroundImage: !placeholderIcon && (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.url) && `url("${generateBackground(backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.url)}")`
    }
  }, placeholderIcon && (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "spectra-media-control__icon"
  }, placeholderIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    title: selectImageLabel,
    onSelect: onSelectImage,
    allowedTypes: allowedTypes,
    value: backgroundImage,
    render: _ref => {
      let {
        open
      } = _ref;
      return renderMediaUploader(open);
    }
  }), !disableRemove && (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "spectra-media-control__clickable spectra-media-control__clickable--close",
    onClick: onRemoveImage
  }, renderButton('close'))), props.help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "uag-control-help-notice"
  }, props.help));
};

/* harmony default export */ __webpack_exports__["default"] = (UAGImage);

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

    const tabletPreview = document.getElementsByClassName('is-tablet-preview');
    const mobilePreview = document.getElementsByClassName('is-mobile-preview');

    if (0 !== tabletPreview.length || 0 !== mobilePreview.length) {
      const preview = tabletPreview[0] || mobilePreview[0];
      const iframe = preview.getElementsByTagName('iframe')[0];

      if (iframe) {
        webfontloader__WEBPACK_IMPORTED_MODULE_1___default.a.load({ ...props.config,
          loading: handleLoading,
          active: handleActive,
          inactive: handleInactive,
          context: iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow
        });
        addFont(props.config.google.families[0]);
      }
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