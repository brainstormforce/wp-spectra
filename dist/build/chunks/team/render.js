(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/team/render"],{

/***/ "./src/blocks/team/render.js":
/*!***********************************!*\
  !*** ./src/blocks/team/render.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");




var createBlock = wp.blocks.createBlock;
var RichText = wp.blockEditor.RichText;

var Render = function Render(props) {
  props = props.parentProps;
  var _props = props,
      className = _props.className,
      setAttributes = _props.setAttributes,
      attributes = _props.attributes,
      mergeBlocks = _props.mergeBlocks,
      insertBlocksAfter = _props.insertBlocksAfter,
      onReplace = _props.onReplace,
      deviceType = _props.deviceType;
  var align = attributes.align,
      tag = attributes.tag,
      title = attributes.title,
      prefix = attributes.prefix,
      description_text = attributes.description_text,
      image = attributes.image,
      imgStyle = attributes.imgStyle,
      imgSize = attributes.imgSize,
      imgPosition = attributes.imgPosition,
      twitterIcon = attributes.twitterIcon,
      fbIcon = attributes.fbIcon,
      linkedinIcon = attributes.linkedinIcon,
      pinIcon = attributes.pinIcon,
      twitterLink = attributes.twitterLink,
      fbLink = attributes.fbLink,
      linkedinLink = attributes.linkedinLink,
      pinLink = attributes.pinLink,
      socialTarget = attributes.socialTarget,
      socialEnable = attributes.socialEnable,
      stack = attributes.stack;
  var title_html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-team__title-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RichText, {
    tagName: tag,
    value: title,
    className: "uagb-team__title",
    onChange: function onChange(value) {
      return setAttributes({
        title: value
      });
    },
    multiline: false,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Write a Title', 'ultimate-addons-for-gutenberg'),
    onMerge: mergeBlocks,
    onSplit: insertBlocksAfter ? function (before, after) {
      setAttributes({
        content: before
      });

      for (var _len = arguments.length, blocks = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        blocks[_key - 2] = arguments[_key];
      }

      insertBlocksAfter([].concat(blocks, [createBlock('core/paragraph', {
        content: after
      })]));
    } : undefined,
    onRemove: function onRemove() {
      return onReplace([]);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RichText, {
    tagName: "div",
    value: prefix,
    className: "uagb-team__prefix",
    onChange: function onChange(value) {
      return setAttributes({
        prefix: value
      });
    },
    onMerge: mergeBlocks,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Write a Designation', 'ultimate-addons-for-gutenberg'),
    onSplit: insertBlocksAfter ? function (before, after) {
      setAttributes({
        content: before
      });

      for (var _len2 = arguments.length, blocks = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        blocks[_key2 - 2] = arguments[_key2];
      }

      insertBlocksAfter([].concat(blocks, [createBlock('core/paragraph', {
        content: after
      })]));
    } : undefined,
    onRemove: function onRemove() {
      return onReplace([]);
    }
  }));

  var social_html = function social_html(icon, link, target) {
    var target_value = target ? '_blank' : '_self';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "uagb-team__social-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: link,
      "aria-label": icon,
      target: target_value,
      title: "",
      rel: "noopener noreferrer"
    }, Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])(icon)));
  };

  var social_links = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-team__social-icon-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "uagb-team__social-list"
  }, '' != twitterIcon && social_html(twitterIcon, twitterLink, socialTarget), '' != fbIcon && social_html(fbIcon, fbLink, socialTarget), '' != linkedinIcon && social_html(linkedinIcon, linkedinLink, socialTarget), '' != pinIcon && social_html(pinIcon, pinLink, socialTarget))); // Get description and seperator components.

  var desc_html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-team__desc-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RichText, {
    tagName: "p",
    value: description_text,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Write a Description', 'ultimate-addons-for-gutenberg'),
    className: "uagb-team__desc",
    onChange: function onChange(value) {
      return setAttributes({
        description_text: value
      });
    },
    onMerge: mergeBlocks,
    onSplit: insertBlocksAfter ? function (before, after) {
      setAttributes({
        content: before
      });

      for (var _len3 = arguments.length, blocks = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        blocks[_key3 - 2] = arguments[_key3];
      }

      insertBlocksAfter([].concat(blocks, [createBlock('core/paragraph', {
        content: after
      })]));
    } : undefined,
    onRemove: function onRemove() {
      return onReplace([]);
    }
  }));
  var size = '';
  var img_url = '';

  if (image) {
    size = image.sizes;

    if (image.sizes) {
      img_url = size[imgSize] ? size[imgSize].url : image.url;
    } else {
      img_url = image.url;
    }
  }

  var image_html = '';

  if ('' != img_url) {
    image_html = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-team__image-wrap', "uagb-team__image-crop-".concat(imgStyle))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "",
      src: img_url,
      alt: image.alt ? image.alt : ''
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-team', 'uagb-team__outer-wrap', "uagb-team__image-position-".concat(imgPosition), "uagb-team__align-".concat(align), "uagb-team__stack-".concat(stack), "uagb-editor-preview-mode-".concat(deviceType.toLowerCase()), "uagb-block-".concat(props.clientId.substr(0, 8)))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-team__wrap"
  }, imgPosition == 'left' && image_html, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-team__content"
  }, imgPosition == 'above' && image_html, title_html, desc_html, socialEnable && social_links), imgPosition == 'right' && image_html)));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map