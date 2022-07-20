(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/lottie/settings"],{

/***/ "./src/blocks/lottie/settings.js":
/*!***************************************!*\
  !*** ./src/blocks/lottie/settings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















const Settings = props => {
  const {
    loopLottie,
    reverseDirection
  } = props;
  props = props.parentProps;
  const {
    setAttributes,
    attributes
  } = props;
  const {
    lottieSource,
    align,
    height,
    heightTablet,
    heightMob,
    width,
    widthTablet,
    widthMob,
    backgroundColor,
    loop,
    speed,
    reverse,
    jsonLottie,
    lottieURl,
    playOn,
    backgroundHColor,
    isPreview
  } = attributes;

  const onSelectLottieJSON = media => {
    if (!media || !media.url) {
      setAttributes({
        jsonLottie: null
      });
      return;
    }

    setAttributes({
      jsonLottie: media,
      lottieURl: media.url,
      lottieSource: 'library'
    });
  };

  const onSelectLottieURL = mediaURL => {
    setAttributes({
      lottieURl: mediaURL,
      lottieSource: 'url'
    });
  };

  const controlsSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('File Source', 'ultimate-addons-for-gutenberg'),
    data: {
      value: lottieSource,
      label: 'lottieSource'
    },
    options: [{
      value: 'library',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Library', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'url',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('URL', 'ultimate-addons-for-gutenberg')
    }]
  }), lottieSource === 'upload' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: 'Lottie Animation',
    backgroundImage: jsonLottie,
    onSelectImage: onSelectLottieJSON,
    disableRemove: true,
    allow: ['application/json']
  }), lottieSource === 'library' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: 'Lottie Animation',
    backgroundImage: jsonLottie,
    onSelectImage: onSelectLottieJSON,
    disableRemove: true,
    allow: ['application/json']
  }), lottieSource === 'url' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Lottie Animation URL', 'ultimate-addons-for-gutenberg'),
    value: lottieURl,
    onChange: value => setAttributes({
      lottieURl: value
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content', 'ultimate-addons-for-gutenberg'),
    initialOpen: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Play On', 'ultimate-addons-for-gutenberg'),
    data: {
      value: playOn,
      label: 'playOn'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'none',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Default', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'hover',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'click',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Click', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'scroll',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Viewport', 'ultimate-addons-for-gutenberg')
    }],
    help: 'scroll' === playOn || 'none' === playOn ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("This setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg') : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
    data: {
      value: align,
      label: 'align'
    },
    className: "uagb-multi-button-alignment-control",
    options: [{
      value: 'left',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('fa fa-align-left')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('fa fa-align-center')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_2__["default"])('fa fa-align-right')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Loop', 'ultimate-addons-for-gutenberg'),
    checked: loop,
    onChange: loopLottie,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Enabling this will show the animation in the loop. This setting will only take effect once you are on the live page, and not while you're editing.", 'ultimate-addons-for-gutenberg')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Speed', 'ultimate-addons-for-gutenberg'),
    setAttributes: setAttributes,
    value: speed,
    data: {
      value: speed,
      label: 'speed'
    },
    min: 1,
    max: 50,
    displayUnit: false,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('This setting will only take effect once you refresh the editor page.', 'ultimate-addons-for-gutenberg')
  }), loop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reverse', 'ultimate-addons-for-gutenberg'),
    checked: reverse,
    onChange: reverseDirection,
    help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Direction of animation.', 'ultimate-addons-for-gutenberg')
  })));
  const styleSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_13__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background', 'ultimate-addons-for-gutenberg'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: width,
        label: 'width'
      },
      tablet: {
        value: widthTablet,
        label: 'widthTablet'
      },
      mobile: {
        value: widthMob,
        label: 'widthMob'
      }
    },
    min: 0,
    max: 1000,
    displayUnit: false,
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Height', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: height,
        label: 'height'
      },
      tablet: {
        value: heightTablet,
        label: 'heightTablet'
      },
      mobile: {
        value: heightMob,
        label: 'heightMob'
      }
    },
    min: 0,
    max: 1000,
    displayUnit: false,
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_10__["default"], {
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
    }],
    normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: backgroundColor ? backgroundColor : '',
      data: {
        value: backgroundColor,
        label: 'backgroundColor'
      },
      setAttributes: setAttributes
    }),
    hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: backgroundHColor ? backgroundHColor : '',
      data: {
        value: backgroundHColor,
        label: 'backgroundHColor'
      },
      setAttributes: setAttributes
    }),
    disableBottomSeparator: true
  })); //Check if given url is valid or not for json extension.

  let validJsonPath = 'invalid';

  if (lottieURl && lottieURl.endsWith('.json')) {
    validJsonPath = 'valid';
  }

  if (!uagb_blocks_info.uagb_mime_type) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "uagb-show-notice"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Lottie block requires the file type JSON to be uploaded to media files. Seems like your website has disabled this file type. Please refer', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: `${uagb_blocks_info.uagb_site_url}/docs/lottie/?utm_source=uagb-dashboard&utm_medium=uagb-editor-page&utm_campaign=uagb-plugin`,
      target: "__blank"
    }, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('this document'), ' '), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('to know more about it.')));
  }

  if (validJsonPath === 'invalid') {
    const lottie_url = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "uagb-lottie-instructions"
    }, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Allows you to add fancy animation i.e Lottie to your website. You can see sample Lottie animations', 'ultimate-addons-for-gutenberg'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "uagb-lottie-instructions__lottie-url",
      href: "https://lottiefiles.com/",
      target: "__blank"
    }, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('here on this'), ' '), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('website.'));
    const previewImageData = `${uagb_blocks_info.uagb_url}/admin/assets/preview-images/lottie-animation.png`;
    return isPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      width: "100%",
      src: previewImageData,
      alt: ""
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "uagb-lottie_upload_wrap"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["MediaPlaceholder"], {
      labels: {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Lottie', 'ultimate-addons-for-gutenberg'),
        instructions: lottie_url
      },
      allowedTypes: ['application/json'],
      accept: ['application/json'],
      value: jsonLottie,
      onSelectURL: value => onSelectLottieURL(value),
      onSelect: onSelectLottieJSON
    })));
  }

  const getBlockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_12__["ToolbarGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["MediaReplaceFlow"], {
      mediaURL: lottieURl,
      allowedTypes: ['application/json'],
      accept: ['application/json'],
      onSelectURL: value => onSelectLottieURL(value),
      onSelect: onSelectLottieJSON
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, validJsonPath === 'valid' && getBlockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_11__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tabs: ['general', 'style', 'advance']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["UAGTabs"].general, controlsSettings), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["UAGTabs"].style, styleSettings), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["UAGTabs"].advance, {
    parentProps: props
  })))));
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
    let mediaURL = media;

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

/***/ })

}]);
//# sourceMappingURL=settings.js.map