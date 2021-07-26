(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/info-box/settings"],{

/***/ "./src/blocks/info-box/settings.js":
/*!*****************************************!*\
  !*** ./src/blocks/info-box/settings.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Controls_UAGBIcon_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Controls/UAGBIcon.json */ "./blocks-config/uagb-controls/UAGBIcon.json");
var _Controls_UAGBIcon_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @Controls/UAGBIcon.json */ "./blocks-config/uagb-controls/UAGBIcon.json", 1);
/* harmony import */ var _components_border__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/border */ "./src/components/border/index.js");
/* harmony import */ var _components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _components_spacing_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















$ = jQuery;


var svg_icons = Object.keys(_Controls_UAGBIcon_json__WEBPACK_IMPORTED_MODULE_7__);
var imageSizeOptions = [{
  value: 'thumbnail',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
}, {
  value: 'medium',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium', 'ultimate-addons-for-gutenberg')
}, {
  value: 'full',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large', 'ultimate-addons-for-gutenberg')
}];

var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      setAttributes = _props.setAttributes,
      attributes = _props.attributes,
      deviceType = _props.deviceType; // Setup the attributes.

  var headingAlign = attributes.headingAlign,
      headingColor = attributes.headingColor,
      subHeadingColor = attributes.subHeadingColor,
      prefixColor = attributes.prefixColor,
      prefixFontSize = attributes.prefixFontSize,
      prefixFontSizeType = attributes.prefixFontSizeType,
      prefixFontSizeTablet = attributes.prefixFontSizeTablet,
      prefixFontSizeMobile = attributes.prefixFontSizeMobile,
      prefixFontFamily = attributes.prefixFontFamily,
      prefixFontWeight = attributes.prefixFontWeight,
      prefixFontSubset = attributes.prefixFontSubset,
      prefixLineHeightType = attributes.prefixLineHeightType,
      prefixLineHeight = attributes.prefixLineHeight,
      prefixLineHeightTablet = attributes.prefixLineHeightTablet,
      prefixLineHeightMobile = attributes.prefixLineHeightMobile,
      prefixTextTransform = attributes.prefixTextTransform,
      prefixTextDecoration = attributes.prefixTextDecoration,
      prefixLoadGoogleFonts = attributes.prefixLoadGoogleFonts,
      headingTag = attributes.headingTag,
      headFontSize = attributes.headFontSize,
      headFontSizeType = attributes.headFontSizeType,
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
      subHeadFontSize = attributes.subHeadFontSize,
      subHeadFontSizeType = attributes.subHeadFontSizeType,
      subHeadFontSizeTablet = attributes.subHeadFontSizeTablet,
      subHeadFontSizeMobile = attributes.subHeadFontSizeMobile,
      subHeadFontFamily = attributes.subHeadFontFamily,
      subHeadFontWeight = attributes.subHeadFontWeight,
      subHeadFontSubset = attributes.subHeadFontSubset,
      subHeadLineHeightType = attributes.subHeadLineHeightType,
      subHeadLineHeight = attributes.subHeadLineHeight,
      subHeadLineHeightTablet = attributes.subHeadLineHeightTablet,
      subHeadLineHeightMobile = attributes.subHeadLineHeightMobile,
      subHeadLineTransform = attributes.subHeadLineTransform,
      subHeadLineDecoration = attributes.subHeadLineDecoration,
      subHeadLoadGoogleFonts = attributes.subHeadLoadGoogleFonts,
      separatorWidthType = attributes.separatorWidthType,
      seperatorSpace = attributes.seperatorSpace,
      headSpace = attributes.headSpace,
      subHeadSpace = attributes.subHeadSpace,
      icon = attributes.icon,
      iconColor = attributes.iconColor,
      iconSize = attributes.iconSize,
      iconSizeType = attributes.iconSizeType,
      iconimgPosition = attributes.iconimgPosition,
      iconHover = attributes.iconHover,
      iconimgBorderRadius = attributes.iconimgBorderRadius,
      source_type = attributes.source_type,
      sourceAlign = attributes.sourceAlign,
      seperatorPosition = attributes.seperatorPosition,
      seperatorStyle = attributes.seperatorStyle,
      seperatorWidth = attributes.seperatorWidth,
      seperatorColor = attributes.seperatorColor,
      seperatorThickness = attributes.seperatorThickness,
      thicknessUnit = attributes.thicknessUnit,
      ctaType = attributes.ctaType,
      ctaText = attributes.ctaText,
      ctaLink = attributes.ctaLink,
      ctaTarget = attributes.ctaTarget,
      ctaIcon = attributes.ctaIcon,
      ctaIconPosition = attributes.ctaIconPosition,
      ctaIconSpace = attributes.ctaIconSpace,
      ctaLinkColor = attributes.ctaLinkColor,
      ctaFontSize = attributes.ctaFontSize,
      ctaFontSizeType = attributes.ctaFontSizeType,
      ctaFontSizeMobile = attributes.ctaFontSizeMobile,
      ctaFontSizeTablet = attributes.ctaFontSizeTablet,
      ctaTextTransform = attributes.ctaTextTransform,
      ctaTextDecoration = attributes.ctaTextDecoration,
      ctaFontFamily = attributes.ctaFontFamily,
      ctaFontWeight = attributes.ctaFontWeight,
      ctaFontSubset = attributes.ctaFontSubset,
      ctaLoadGoogleFonts = attributes.ctaLoadGoogleFonts,
      ctaBtnLinkColor = attributes.ctaBtnLinkColor,
      ctaLinkHoverColor = attributes.ctaLinkHoverColor,
      ctaBgHoverColor = attributes.ctaBgHoverColor,
      ctaBgColor = attributes.ctaBgColor,
      paddingBtnUnit = attributes.paddingBtnUnit,
      mobilePaddingBtnUnit = attributes.mobilePaddingBtnUnit,
      tabletPaddingBtnUnit = attributes.tabletPaddingBtnUnit,
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
      ctaBorderStyle = attributes.ctaBorderStyle,
      ctaBorderColor = attributes.ctaBorderColor,
      ctaBorderhoverColor = attributes.ctaBorderhoverColor,
      ctaBorderWidth = attributes.ctaBorderWidth,
      ctaBorderRadius = attributes.ctaBorderRadius,
      prefixSpace = attributes.prefixSpace,
      iconLeftMargin = attributes.iconLeftMargin,
      iconRightMargin = attributes.iconRightMargin,
      iconTopMargin = attributes.iconTopMargin,
      iconBottomMargin = attributes.iconBottomMargin,
      iconMarginTopTablet = attributes.iconMarginTopTablet,
      iconMarginRightTablet = attributes.iconMarginRightTablet,
      iconMarginBottomTablet = attributes.iconMarginBottomTablet,
      iconMarginLeftTablet = attributes.iconMarginLeftTablet,
      iconMarginTopMobile = attributes.iconMarginTopMobile,
      iconMarginRightMobile = attributes.iconMarginRightMobile,
      iconMarginBottomMobile = attributes.iconMarginBottomMobile,
      iconMarginLeftMobile = attributes.iconMarginLeftMobile,
      iconMarginUnit = attributes.iconMarginUnit,
      iconMobilePaddingUnit = attributes.iconMobilePaddingUnit,
      iconTabletPaddingUnit = attributes.iconTabletPaddingUnit,
      iconImage = attributes.iconImage,
      imageSize = attributes.imageSize,
      imageWidth = attributes.imageWidth,
      imageWidthType = attributes.imageWidthType,
      stack = attributes.stack,
      showPrefix = attributes.showPrefix,
      showTitle = attributes.showTitle,
      showDesc = attributes.showDesc,
      inheritFromTheme = attributes.inheritFromTheme,
      spacingLink = attributes.spacingLink,
      headLineTransform = attributes.headLineTransform,
      headLineDecoration = attributes.headLineDecoration;
  /*
   * Event to set Image as while adding.
   */

  var onSelectImage = function onSelectImage(media) {
    if (!media || !media.url) {
      setAttributes({
        iconImage: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      setAttributes({
        iconImage: null
      });
      return;
    }

    if (media.sizes) {
      var new_img = getImageSize(media.sizes);
      imageSizeOptions = new_img;
    }

    setAttributes({
      iconImage: media
    });
  };

  var getImageSize = function getImageSize(sizes) {
    var sizeArr = [];
    $.each(sizes, function (index) {
      var name = index;
      var p = {
        value: name,
        label: name
      };
      sizeArr.push(p);
    });
    return sizeArr;
  };
  /*
   * Event to set Image as null while removing.
   */


  var onRemoveImage = function onRemoveImage() {
    setAttributes({
      iconImage: ''
    });
  };

  if (iconImage && iconImage.sizes) {
    imageSizeOptions = getImageSize(iconImage.sizes);
  }

  var imageName = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Image', 'ultimate-addons-for-gutenberg');

  if (iconImage) {
    if (iconImage.url == null || iconImage.url == '') {
      imageName = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Image', 'ultimate-addons-for-gutenberg');
    } else {
      imageName = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Replace Image', 'ultimate-addons-for-gutenberg');
    }
  }

  var loadPrefixGoogleFonts;
  var loadSubHeadGoogleFonts;
  var loadCtaGoogleFonts;
  var loadHeadGoogleFonts;

  if (prefixLoadGoogleFonts == true) {
    var prefixconfig = {
      google: {
        families: [prefixFontFamily + (prefixFontWeight ? ':' + prefixFontWeight : '')]
      }
    };
    loadPrefixGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: prefixconfig
    });
  }

  if (headLoadGoogleFonts == true) {
    var headconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: headconfig
    });
  }

  if (subHeadLoadGoogleFonts == true) {
    var subHeadconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: subHeadconfig
    });
  }

  if (subHeadLoadGoogleFonts == true) {
    var ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: ctaconfig
    });
  }

  var blockControls = function blockControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["AlignmentToolbar"], {
      value: headingAlign,
      onChange: function onChange(value) {
        return setAttributes({
          headingAlign: value
        });
      }
    }));
  }; // Global Controls.


  var imageIconPanel = function imageIconPanel() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image/Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Position', 'ultimate-addons-for-gutenberg'),
      value: iconimgPosition,
      onChange: function onChange(value) {
        return setAttributes({
          iconimgPosition: value
        });
      },
      options: [{
        value: 'above-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Above Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'below-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Below Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'left-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left of Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right-title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right of Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'left',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left of Text and Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right of Text and Title', 'ultimate-addons-for-gutenberg')
      }]
    }), (iconimgPosition == 'left' || iconimgPosition == 'right') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
      value: stack,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }],
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Note: Choose on what breakpoint the Info Box will stack.', 'ultimate-addons-for-gutenberg'),
      onChange: function onChange(value) {
        return setAttributes({
          stack: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Source', 'ultimate-addons-for-gutenberg'),
      value: source_type,
      onChange: function onChange(value) {
        return setAttributes({
          source_type: value
        });
      },
      options: [{
        value: 'icon',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'image',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image', 'ultimate-addons-for-gutenberg')
      }]
    }), iconimgPosition && iconimgPosition !== 'above-title' && iconimgPosition !== 'below-title' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Vertical Alignment', 'ultimate-addons-for-gutenberg'),
      value: sourceAlign,
      onChange: function onChange(value) {
        return setAttributes({
          sourceAlign: value
        });
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'middle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Middle', 'ultimate-addons-for-gutenberg')
      }]
    }), source_type == 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Icon", "ultimate-addons-for-gutenberg")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      icons: svg_icons,
      renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
      theme: "default",
      value: icon,
      onChange: function onChange(value) {
        return setAttributes({
          icon: value
        });
      },
      isMulti: false,
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Select Icon", "ultimate-addons-for-gutenberg")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Size', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: iconSize,
      onChange: function onChange(value) {
        return setAttributes({
          iconSize: value
        });
      },
      min: 0,
      max: 300,
      unit: {
        value: iconSizeType,
        label: "iconSizeType"
      }
    })), source_type == 'image' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["BaseControl"], {
      className: "editor-bg-image-control",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      id: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image', 'ultimate-addons-for-gutenberg')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["MediaUpload"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Image', 'ultimate-addons-for-gutenberg'),
      onSelect: onSelectImage,
      allowedTypes: ['image'],
      value: iconImage,
      render: function render(_ref) {
        var open = _ref.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Button"], {
          isSecondary: true,
          onClick: open
        }, imageName);
      }
    }), iconImage && iconImage.url !== 'null' && iconImage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["Button"], {
      className: "uagb-rm-btn",
      onClick: onRemoveImage,
      isLink: true,
      isDestructive: true
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove Image', 'ultimate-addons-for-gutenberg'))), iconImage && iconImage.url !== 'null' && iconImage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Size', 'ultimate-addons-for-gutenberg'),
      options: imageSizeOptions,
      value: imageSize,
      onChange: function onChange(value) {
        return setAttributes({
          imageSize: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uag-toggle-wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      checked: imageWidthType,
      onChange: function onChange() {
        return setAttributes({
          imageWidthType: !imageWidthType
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Custom Width', "ultimate-addons-for-gutenberg"),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Turn this off to inherit the natural width of Image.', 'ultimate-addons-for-gutenberg')
    })), imageWidthType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width ', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: imageWidth,
      onChange: function onChange(value) {
        return setAttributes({
          imageWidth: value
        });
      },
      min: 0,
      max: 500
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Rounded Corners (px)', "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: iconimgBorderRadius,
      onChange: function onChange(value) {
        return setAttributes({
          iconimgBorderRadius: value
        });
      },
      min: 0,
      max: 500
    }))));
  }; // Typography settings.


  var typographySettings = function typographySettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uag-toggle-wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      checked: showPrefix,
      onChange: function onChange() {
        return setAttributes({
          showPrefix: !showPrefix
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Prefix', 'ultimate-addons-for-gutenberg')
    })), showPrefix && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: prefixLoadGoogleFonts,
        label: 'prefixLoadGoogleFonts'
      },
      fontFamily: {
        value: prefixFontFamily,
        label: 'prefixFontFamily'
      },
      fontWeight: {
        value: prefixFontWeight,
        label: 'prefixFontWeight'
      },
      fontSubset: {
        value: prefixFontSubset,
        label: 'prefixFontSubset'
      },
      fontSizeType: {
        value: prefixFontSizeType,
        label: 'prefixFontSizeType'
      },
      fontSize: {
        value: prefixFontSize,
        label: 'prefixFontSize'
      },
      fontSizeMobile: {
        value: prefixFontSizeMobile,
        label: 'prefixFontSizeMobile'
      },
      fontSizeTablet: {
        value: prefixFontSizeTablet,
        label: 'prefixFontSizeTablet'
      },
      lineHeightType: {
        value: prefixLineHeightType,
        label: 'prefixLineHeightType'
      },
      lineHeight: {
        value: prefixLineHeight,
        label: 'prefixLineHeight'
      },
      lineHeightMobile: {
        value: prefixLineHeightMobile,
        label: 'prefixLineHeightMobile'
      },
      lineHeightTablet: {
        value: prefixLineHeightTablet,
        label: 'prefixLineHeightTablet'
      },
      transform: {
        value: prefixTextTransform,
        label: "prefixTextTransform"
      },
      decoration: {
        value: prefixTextDecoration,
        label: "prefixTextDecoration"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uag-toggle-wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      checked: showTitle,
      onChange: function onChange() {
        return setAttributes({
          showTitle: !showTitle
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Title', 'ultimate-addons-for-gutenberg')
    })), showTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title Tag', 'ultimate-addons-for-gutenberg'),
      value: headingTag,
      onChange: function onChange(value) {
        return setAttributes({
          headingTag: value
        });
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H1')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H2')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H3')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H4')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H5')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H6')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
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
      },
      transform: {
        value: headLineTransform,
        label: "headLineTransform"
      },
      decoration: {
        value: headLineDecoration,
        label: "headLineDecoration"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uag-toggle-wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      checked: showDesc,
      onChange: function onChange() {
        return setAttributes({
          showDesc: !showDesc
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Description', 'ultimate-addons-for-gutenberg')
    })), showDesc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
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
      },
      transform: {
        value: subHeadLineTransform,
        label: "subHeadLineTransform"
      },
      decoration: {
        value: subHeadLineDecoration,
        label: "subHeadLineDecoration"
      }
    })));
  }; // Separator settings.


  var seperatorSettings = function seperatorSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Separator', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Position', 'ultimate-addons-for-gutenberg'),
      value: seperatorPosition,
      onChange: function onChange(value) {
        return setAttributes({
          seperatorPosition: value
        });
      },
      options: [{
        value: 'after_icon',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Icon/Image', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after_prefix',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Prefix', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after_title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after_desc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Description', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style'),
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
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Double', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dashed', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Dotted', 'ultimate-addons-for-gutenberg')
      }]
    }), 'none' !== seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Thickness", "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: seperatorThickness,
      onChange: function onChange(value) {
        return setAttributes({
          seperatorThickness: value
        });
      },
      min: 0,
      max: 10,
      unit: {
        value: thicknessUnit,
        label: "thicknessUnit"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Width", "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: seperatorWidth,
      onChange: function onChange(value) {
        return setAttributes({
          seperatorWidth: value
        });
      },
      min: 0,
      max: '%' == separatorWidthType ? 100 : 500,
      unit: {
        value: separatorWidthType,
        label: "separatorWidthType"
      }
    })));
  }; // Margin Settings.


  var marginSettings = function marginSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, showPrefix && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Prefix Bottom Margin', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: prefixSpace,
      onChange: function onChange(value) {
        return setAttributes({
          prefixSpace: value
        });
      },
      min: 0,
      max: 50
    }), showTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title Bottom Margin', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: headSpace,
      onChange: function onChange(value) {
        return setAttributes({
          headSpace: value
        });
      },
      min: 0,
      max: 50
    }), 'none' !== seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Separator Bottom Margin', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: seperatorSpace,
      onChange: function onChange(value) {
        return setAttributes({
          seperatorSpace: value
        });
      },
      min: 0,
      max: 50
    }), showDesc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Description Bottom Margin', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: subHeadSpace,
      onChange: function onChange(value) {
        return setAttributes({
          subHeadSpace: value
        });
      },
      min: 0,
      max: 50
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image/Icon Margin', "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: iconTopMargin,
        label: "iconTopMargin"
      },
      valueRight: {
        value: iconRightMargin,
        label: "iconRightMargin"
      },
      valueBottom: {
        value: iconBottomMargin,
        label: "iconBottomMargin"
      },
      valueLeft: {
        value: iconLeftMargin,
        label: "iconLeftMargin"
      },
      valueTopTablet: {
        value: iconMarginTopTablet,
        label: "iconMarginTopTablet"
      },
      valueRightTablet: {
        value: iconMarginRightTablet,
        label: "iconMarginRightTablet"
      },
      valueBottomTablet: {
        value: iconMarginBottomTablet,
        label: "iconMarginBottomTablet"
      },
      valueLeftTablet: {
        value: iconMarginLeftTablet,
        label: "iconMarginLeftTablet"
      },
      valueTopMobile: {
        value: iconMarginTopMobile,
        label: "iconMarginTopMobile"
      },
      valueRightMobile: {
        value: iconMarginRightMobile,
        label: "iconMarginRightMobile"
      },
      valueBottomMobile: {
        value: iconMarginBottomMobile,
        label: "iconMarginBottomMobile"
      },
      valueLeftMobile: {
        value: iconMarginLeftMobile,
        label: "iconMarginLeftMobile"
      },
      unit: {
        value: iconMarginUnit,
        label: "iconMarginUnit"
      },
      mUnit: {
        value: iconMobilePaddingUnit,
        label: "iconMobilePaddingUnit"
      },
      tUnit: {
        value: iconTabletPaddingUnit,
        label: "iconTabletPaddingUnit"
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

  var ctaSettings = function ctaSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Call To Action', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      value: ctaType,
      onChange: function onChange(value) {
        return setAttributes({
          ctaType: value
        });
      },
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'text',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'button',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'all',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Complete Box', 'ultimate-addons-for-gutenberg')
      }]
    }), (ctaType === 'text' || ctaType === 'button') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text', 'ultimate-addons-for-gutenberg'),
      value: ctaText,
      onChange: function onChange(value) {
        return setAttributes({
          ctaText: value
        });
      }
    }), ctaType === 'button' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uag-toggle-wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      checked: inheritFromTheme,
      onChange: function onChange() {
        return setAttributes({
          inheritFromTheme: !inheritFromTheme
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inherit from Theme', "ultimate-addons-for-gutenberg")
    })), ctaType === 'text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      transform: {
        value: ctaTextTransform,
        label: "ctaTextTransform"
      },
      decoration: {
        value: ctaTextDecoration,
        label: "ctaTextDecoration"
      },
      disableLineHeight: true
    }), !inheritFromTheme && ctaType === 'button' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      transform: {
        value: ctaTextTransform,
        label: "ctaTextTransform"
      },
      decoration: {
        value: ctaTextDecoration,
        label: "ctaTextDecoration"
      },
      disableLineHeight: true
    })), ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link', 'ultimate-addons-for-gutenberg'),
      value: ctaLink,
      onChange: function onChange(value) {
        return setAttributes({
          ctaLink: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "uag-toggle-wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["ToggleControl"], {
      checked: ctaTarget,
      onChange: function onChange() {
        return setAttributes({
          ctaTarget: !ctaTarget
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new Window', "ultimate-addons-for-gutenberg")
    }))), ctaType !== 'all' && ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      icons: svg_icons,
      renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"],
      theme: "default",
      value: ctaIcon,
      onChange: function onChange(value) {
        return setAttributes({
          ctaIcon: value
        });
      },
      isMulti: false,
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
    }), ctaIcon !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Position', 'ultimate-addons-for-gutenberg'),
      value: ctaIconPosition,
      onChange: function onChange(value) {
        return setAttributes({
          ctaIconPosition: value
        });
      },
      options: [{
        value: 'before',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Before Text', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Text', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: ctaIconSpace,
      onChange: function onChange(value) {
        return setAttributes({
          ctaIconSpace: value
        });
      },
      min: 0,
      max: 50
    }))), !inheritFromTheme && ctaType == 'button' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Button Padding", "ultimate-addons-for-gutenberg"),
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
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Border', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_border__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: ctaBorderStyle,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Style", "ultimate-addons-for-gutenberg")
      },
      borderWidth: {
        value: ctaBorderWidth,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Width", "ultimate-addons-for-gutenberg")
      },
      borderRadius: {
        value: ctaBorderRadius,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Radius", "ultimate-addons-for-gutenberg")
      },
      borderColor: {
        value: ctaBorderColor,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Color", "ultimate-addons-for-gutenberg")
      },
      borderHoverColor: {
        value: ctaBorderhoverColor,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Hover Color", "ultimate-addons-for-gutenberg")
      }
    })));
  };

  var styleSettings = function styleSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__["PanelBody"], {
      title: "Colors",
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Prefix Color', "ultimate-addons-for-gutenberg"),
      colorValue: prefixColor ? prefixColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          prefixColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headingColor ? headingColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          headingColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Description Color", "ultimate-addons-for-gutenberg"),
      colorValue: subHeadingColor ? subHeadingColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          subHeadingColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Separator Color', 'ultimate-addons-for-gutenberg'),
      colorValue: seperatorColor ? seperatorColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          seperatorColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    }), ctaType === 'text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('CTA Text Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaLinkColor ? ctaLinkColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaLinkColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('CTA Text Hover Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaLinkHoverColor ? ctaLinkHoverColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaLinkHoverColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    })), !inheritFromTheme && ctaType === 'button' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('CTA Button Text Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaBtnLinkColor ? ctaBtnLinkColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaBtnLinkColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Text Hover Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaLinkHoverColor ? ctaLinkHoverColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaLinkHoverColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaBgColor ? ctaBgColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaBgColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Hover Color', "ultimate-addons-for-gutenberg"),
      colorValue: ctaBgHoverColor ? ctaBgHoverColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          ctaBgHoverColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Color', 'ultimate-addons-for-gutenberg'),
      colorValue: iconColor ? iconColor : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          iconColor: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Hover Color', 'ultimate-addons-for-gutenberg'),
      colorValue: iconHover ? iconHover : "",
      colorDefault: "",
      onColorChange: function onColorChange(value) {
        return setAttributes({
          iconHover: value
        });
      },
      onColorClassChange: function onColorClassChange(value) {
        return setAttributes({
          colorClass: value
        });
      }
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, (iconimgPosition == 'above-title' || iconimgPosition == 'below-title') && blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_14__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: "general"
  }, imageIconPanel(), typographySettings(), seperatorSettings(), ctaSettings(), marginSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: "style"
  }, styleSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: "advance"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }, loadPrefixGoogleFonts, loadSubHeadGoogleFonts, loadCtaGoogleFonts, loadHeadGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=settings.js.map