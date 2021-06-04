(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/content-timeline-child/render"],{

/***/ "./src/blocks/timeline/content-timeline-child/render.js":
/*!**************************************************************!*\
  !*** ./src/blocks/timeline/content-timeline-child/render.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);







var Render = function Render(props) {
  props = props.parentProps; // Setup the attributes.

  var _props = props,
      setAttributes = _props.setAttributes,
      insertBlocksAfter = _props.insertBlocksAfter,
      mergeBlocks = _props.mergeBlocks,
      onReplace = _props.onReplace,
      _props$attributes = _props.attributes,
      block_id = _props$attributes.block_id,
      headingTag = _props$attributes.headingTag,
      timelinAlignment = _props$attributes.timelinAlignment,
      icon = _props$attributes.icon,
      t_date = _props$attributes.t_date,
      displayPostDate = _props$attributes.displayPostDate,
      dateFormat = _props$attributes.dateFormat,
      time_heading = _props$attributes.time_heading,
      time_desc = _props$attributes.time_desc;

  var splitBlock = function splitBlock(before, after) {
    var _props2 = props,
        attributes = _props2.attributes,
        insertBlocksAfter = _props2.insertBlocksAfter,
        setAttributes = _props2.setAttributes,
        onReplace = _props2.onReplace;

    for (var _len = arguments.length, blocks = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      blocks[_key - 2] = arguments[_key];
    }

    if (after) {
      // Append "After" content as a new paragraph block to the end of
      // any other blocks being inserted after the current paragraph.
      blocks.push(Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('core/paragraph', {
        content: after
      }));
    }

    if (blocks.length && insertBlocksAfter) {
      insertBlocksAfter(blocks);
    }

    var content = attributes.content;

    if (!before) {
      // If before content is omitted, treat as intent to delete block.
      onReplace([]);
    } else if (content !== before) {
      // Only update content if it has in-fact changed. In case that user
      // has created a new paragraph at end of an existing one, the value
      // of before will be strictly equal to the current content.
      setAttributes({
        content: before
      });
    }
  };

  var displayInnerDate = false;
  var postDate = t_date;

  if (timelinAlignment == 'center') {
    displayInnerDate = true;
  }

  return /*#__PURE__*/React.createElement("article", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-timeline__field uagb-timeline__field-wrap', "uagb-timeline-child-".concat(block_id))
  }, /*#__PURE__*/React.createElement("div", {
    className: props.attributes.content_class
  }, /*#__PURE__*/React.createElement("div", {
    className: "uagb-timeline__marker uagb-timeline__out-view-icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "uagb-timeline__icon-new uagb-timeline__out-view-icon "
  }, Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(icon))), /*#__PURE__*/React.createElement("div", {
    className: props.attributes.dayalign_class
  }, /*#__PURE__*/React.createElement("div", {
    className: "uagb-timeline__events-inner-new"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uagb-timeline__date-hide uagb-timeline__date-inner"
  }, displayPostDate != true && t_date && /*#__PURE__*/React.createElement("div", {
    className: 'uagb-timeline__inner-date-new'
  }, 'custom' != dateFormat && Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__["dateI18n"])(dateFormat, postDate) || postDate)), /*#__PURE__*/React.createElement("div", {
    className: "uagb-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "uagb-timeline__heading-text"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
    tagName: headingTag,
    value: time_heading,
    onChange: function onChange(value) {
      return setAttributes({
        time_heading: value
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Write a Heading', 'ultimate-addons-for-gutenberg'),
    className: "uagb-timeline__heading",
    onMerge: mergeBlocks,
    onSplit: insertBlocksAfter ? function (before, after) {
      setAttributes({
        content: before
      });

      for (var _len2 = arguments.length, blocks = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        blocks[_key2 - 2] = arguments[_key2];
      }

      insertBlocksAfter([].concat(blocks, [Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('core/paragraph', {
        content: after
      })]));
    } : undefined,
    onRemove: function onRemove() {
      return onReplace([]);
    }
  })), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
    tagName: "p",
    value: time_desc,
    onChange: function onChange(value) {
      return setAttributes({
        time_desc: value
      });
    },
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Write a Description', 'ultimate-addons-for-gutenberg'),
    className: "uagb-timeline-desc-content",
    onMerge: mergeBlocks,
    onSplit: splitBlock,
    onRemove: function onRemove() {
      return onReplace([]);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "uagb-timeline__arrow"
  })))), displayInnerDate && /*#__PURE__*/React.createElement("div", {
    className: "uagb-timeline__date-new"
  }, displayPostDate != true && t_date && /*#__PURE__*/React.createElement("div", {
    className: 'uagb-timeline__date-new'
  }, 'custom' != dateFormat && Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__["dateI18n"])(dateFormat, postDate) || postDate))));
};

/* harmony default export */ __webpack_exports__["default"] = (React.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map