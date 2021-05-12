(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/form/date-settings"],{

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


var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
var InspectorControls = wp.blockEditor.InspectorControls;
var YearDefaults = [{
  label: 'YYYY',
  value: ''
}];
var MonthsDefaults = [{
  label: 'MM',
  value: ''
}];
var dateDefaults = [{
  label: 'DD',
  value: ''
}];
var index;

for (index = 1930; index <= 2030; index++) {
  YearDefaults.push({
    label: "".concat(index),
    value: "".concat(index)
  });
}

for (index = 1; index <= 12; index++) {
  var twoDigitMonth = index < 10 ? "0".concat(index) : "".concat(index);
  MonthsDefaults.push({
    label: twoDigitMonth,
    value: twoDigitMonth
  });
}

for (index = 1; index <= 31; index++) {
  var twoDigitDate = index < 10 ? "0".concat(index) : "".concat(index);
  dateDefaults.push({
    label: twoDigitDate,
    value: twoDigitDate
  });
}

var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes;
  var dateRequired = attributes.dateRequired,
      additonalVal = attributes.additonalVal,
      minYear = attributes.minYear,
      minMonth = attributes.minMonth,
      minDay = attributes.minDay,
      maxYear = attributes.maxYear,
      maxMonth = attributes.maxMonth,
      maxDay = attributes.maxDay;
  var validation_min_value = '';
  var validation_max_value = '';

  if (minYear && minMonth && minDay) {
    validation_min_value = minYear + '-' + minMonth + '-' + minDay;
  }

  if (maxYear && maxMonth && maxDay) {
    validation_max_value = maxYear + '-' + maxMonth + '-' + maxDay;
  }

  var invalidDateErrorMsg = '';
  var start = Date.parse(validation_min_value);
  var end = Date.parse(validation_max_value);

  if (start > end) {
    invalidDateErrorMsg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-forms-date-invalidate"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Invalid date range selected', 'ultimate-addons-for-gutenberg'));
  }

  var dateInspectorControls = function dateInspectorControls() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelBody, {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Required', 'ultimate-addons-for-gutenberg'),
      checked: dateRequired,
      onChange: function onChange() {
        return setAttributes({
          dateRequired: !dateRequired
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleControl, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Additional Validation', 'ultimate-addons-for-gutenberg'),
      checked: additonalVal,
      onChange: function onChange() {
        return setAttributes({
          additonalVal: !additonalVal
        });
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Helps to set range of calender', 'ultimate-addons-for-gutenberg')
    }), additonalVal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('From', 'ultimate-addons-for-gutenberg'), " :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
      className: 'minDate',
      label: "Year",
      value: minYear,
      options: YearDefaults,
      onChange: function onChange(newMinYear) {
        return setAttributes({
          newMinYear: newMinYear
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " - "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
      className: 'minDate',
      label: "Month",
      value: minMonth,
      options: MonthsDefaults,
      onChange: function onChange(newMinMonth) {
        return setAttributes({
          newMinMonth: newMinMonth
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " - "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
      className: 'minDate',
      label: "Date",
      value: minDay,
      options: dateDefaults,
      onChange: function onChange(newMinDay) {
        return setAttributes({
          newMinDay: newMinDay
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
      className: 'maxDate',
      label: "Year",
      value: maxYear,
      options: YearDefaults,
      onChange: function onChange(newMaxYear) {
        return setAttributes({
          newMaxYear: newMaxYear
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " - "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
      className: 'maxDate',
      label: "Month",
      value: maxMonth,
      options: MonthsDefaults,
      onChange: function onChange(newMaxMonth) {
        return setAttributes({
          newMaxMonth: newMaxMonth
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, " - "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectControl, {
      className: 'maxDate',
      label: "Date",
      value: maxDay,
      options: dateDefaults,
      onChange: function onChange(newMaxDay) {
        return setAttributes({
          newMaxDay: newMaxDay
        });
      }
    }), invalidDateErrorMsg));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InspectorControls, null, dateInspectorControls()));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ })

}]);
//# sourceMappingURL=date-settings.js.map