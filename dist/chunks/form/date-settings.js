(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/form/date-settings"],{

/***/ "./src/blocks/forms/child-blocks/date/settings.js":
/*!********************************************************!*\
  !*** ./src/blocks/forms/child-blocks/date/settings.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");






const YearDefaults = [{
  label: 'YYYY',
  value: ''
}];
const MonthsDefaults = [{
  label: 'MM',
  value: ''
}];
const dateDefaults = [{
  label: 'DD',
  value: ''
}];
let index;

for (index = 1930; index <= 2030; index++) {
  YearDefaults.push({
    label: `${index}`,
    value: `${index}`
  });
}

for (index = 1; index <= 12; index++) {
  const twoDigitMonth = index < 10 ? `0${index}` : `${index}`;
  MonthsDefaults.push({
    label: twoDigitMonth,
    value: twoDigitMonth
  });
}

for (index = 1; index <= 31; index++) {
  const twoDigitDate = index < 10 ? `0${index}` : `${index}`;
  dateDefaults.push({
    label: twoDigitDate,
    value: twoDigitDate
  });
}



const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes
  } = props;
  const {
    dateRequired,
    additonalVal,
    minYear,
    minMonth,
    minDay,
    maxYear,
    maxMonth,
    maxDay
  } = attributes;
  let validation_min_value = '';
  let validation_max_value = '';

  if (minYear && minMonth && minDay) {
    validation_min_value = minYear + '-' + minMonth + '-' + minDay;
  }

  if (maxYear && maxMonth && maxDay) {
    validation_max_value = maxYear + '-' + maxMonth + '-' + maxDay;
  }

  let invalidDateErrorMsg = '';
  const start = Date.parse(validation_min_value);
  const end = Date.parse(validation_max_value);

  if (start > end) {
    invalidDateErrorMsg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-forms-date-invalidate"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Invalid date range selected', 'ultimate-addons-for-gutenberg'));
  }

  const dateInspectorControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Required', 'ultimate-addons-for-gutenberg'),
      checked: dateRequired,
      onChange: () => setAttributes({
        dateRequired: !dateRequired
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Additional Validation', 'ultimate-addons-for-gutenberg'),
      checked: additonalVal,
      onChange: () => setAttributes({
        additonalVal: !additonalVal
      }),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Helps to set range of calender', 'ultimate-addons-for-gutenberg')
    }), additonalVal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('From', 'ultimate-addons-for-gutenberg'), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      className: 'minDate',
      label: "Year",
      value: minYear,
      options: YearDefaults,
      onChange: newMinYear => setAttributes({
        newMinYear
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      className: 'minDate',
      label: "Month",
      value: minMonth,
      options: MonthsDefaults,
      onChange: newMinMonth => setAttributes({
        newMinMonth
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      className: 'minDate',
      label: "Date",
      value: minDay,
      options: dateDefaults,
      onChange: newMinDay => setAttributes({
        newMinDay
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('To', 'ultimate-addons-for-gutenberg'), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      className: 'maxDate',
      label: "Year",
      value: maxYear,
      options: YearDefaults,
      onChange: newMaxYear => setAttributes({
        newMaxYear
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      className: 'maxDate',
      label: "Month",
      value: maxMonth,
      options: MonthsDefaults,
      onChange: newMaxMonth => setAttributes({
        newMaxMonth
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      className: 'maxDate',
      label: "Date",
      value: maxDay,
      options: dateDefaults,
      onChange: newMaxDay => setAttributes({
        newMaxDay
      })
    }), invalidDateErrorMsg));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tabs: ['general', 'advance']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["UAGTabs"].general, dateInspectorControls()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_4__["UAGTabs"].advance))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=date-settings.js.map