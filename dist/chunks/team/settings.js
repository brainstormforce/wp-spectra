(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/team/settings"],{

/***/ "./blocks-config/utils/Helpers.js":
/*!****************************************!*\
  !*** ./blocks-config/utils/Helpers.js ***!
  \****************************************/
/*! exports provided: getImageSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageSize", function() { return getImageSize; });
/**
 * Get Image Sizes and return an array of Size.
 *
 * @param {Object} sizes - The sizes object.
 * @return {Object} sizeArr - The sizeArr object.
 */
function getImageSize(sizes) {
  const sizeArr = [];

  for (const size in sizes) {
    if (sizes.hasOwnProperty(size)) {
      const p = {
        value: size,
        label: size
      };
      sizeArr.push(p);
    }
  }

  return sizeArr;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/icon-picker/editor.lazy.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/icon-picker/editor.lazy.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*#######################################################################################*/\n/**\n * google-material-color v1.2.6\n * https://github.com/danlevan/google-material-color\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown .rfipicons__ibox--error {\n    color: #000;\n    text-transform: capitalize;\n    font-size: 14px;\n    font-weight: 500; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n", "",{"version":3,"sources":["webpack://./src/components/icon-picker/editor.lazy.scss"],"names":[],"mappings":"AAAA,0FAA0F;AAC1F;;;EAGE;AACF;EACE,sBAAsB;EACtB,yBAAyB,EAAE;EAC3B;IACE,4EAA4E;IAC5E,yBAAyB,EAAE;EAC7B;IACE,0BAA0B;IAC1B,8BAA8B;IAC9B,yBAAyB;IACzB,cAAc,EAAE;IAChB;MACE,yBAAyB,EAAE;IAC7B;MACE,oCAAoC,EAAE;EAC1C;IACE,sBAAsB;IACtB,cAAc,EAAE;IAChB;MACE,cAAc,EAAE;EACpB;IACE,sBAAsB,EAAE;IACxB;MACE,yBAAyB,EAAE;IAC7B;MACE,0BAA0B,EAAE;;AAElC;EACE,2EAA2E;EAC3E,cAAc;EACd,sBAAsB;EACtB,yBAAyB,EAAE;EAC3B;;IAEE,cAAc,EAAE;EAClB;IACE,sBAAsB;IACtB,yBAAyB;IACzB,0CAA0C,EAAE;IAC5C;MACE,qBAAqB;MACrB,2BAA2B;MAC3B,eAAe,EAAE;EACrB;IACE,yBAAyB;IACzB,0CAA0C,EAAE;IAC5C;MACE,qBAAqB;MACrB,2BAA2B;MAC3B,eAAe,EAAE;EACrB;IACE,sBAAsB;IACtB,sBAAsB;IACtB,cAAc,EAAE;IAChB;MACE,yBAAyB;MACzB,yBAAyB,EAAE;IAC7B;MACE,yBAAyB,EAAE;EAC/B;IACE,yBAAyB;IACzB,yBAAyB;IACzB,cAAc,EAAE;IAChB;MACE,yBAAyB;MACzB,yBAAyB,EAAE;IAC7B;MACE,yBAAyB,EAAE;IAC7B;MACE,cAAc,EAAE;EACpB;IACE,yBAAyB;IACzB,0CAA0C,EAAE;IAC5C;MACE,qBAAqB;MACrB,2BAA2B;MAC3B,eAAe,EAAE;;AAEvB;;EAEE,SAAS;EACT,UAAU;EACV,8JAA8J;EAC9J,eAAe;EACf,oBAAoB;EACpB,wBAAwB;EACxB,sBAAsB,EAAE;EACxB;;IAEE,sBAAsB;IACtB,SAAS;IACT,UAAU,EAAE;EACd;;;;IAIE,eAAe,EAAE;;AAErB;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,sBAAsB;EACtB,WAAW,EAAE;;AAEf;EACE,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,gDAAgD;EAChD,eAAe;EACf,iBAAiB,EAAE;EACnB;IACE,0BAA0B,EAAE;EAC9B;IACE,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,gCAAgC;IAChC,8CAA8C,EAAE;IAChD;MACE,eAAe;MACf,2BAA2B,EAAE;IAC/B;MACE,0BAA0B,EAAE;EAChC;IACE,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE,mBAAmB;MACnB,2BAA2B;MAC3B,iBAAiB;MACjB,qBAAqB,EAAE;EAC3B;IACE,WAAW;IACX,UAAU;IACV,YAAY;IACZ,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB,EAAE;IACpB;MACE,eAAe;MACf,iBAAiB;MACjB,gBAAgB;MAChB,kBAAkB;MAClB,yBAAyB;MACzB,kBAAkB,EAAE;EACxB;IACE,aAAa;IACb,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,eAAe,EAAE;IACjB;;MAEE,YAAY;MACZ,WAAW,EAAE;EACjB;IACE,WAAW;IACX,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,kCAAkC;IAClC,eAAe,EAAE;;AAErB;EACE,WAAW;EACX,eAAe;EACf,kBAAkB,EAAE;EACpB;IACE,WAAW;IACX,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAChB,yBAAyB;IACzB,0CAA0C;IAC1C,wCAAwC,EAAE;EAC5C;IACE,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,eAAe;IACf,iBAAiB;IACjB,WAAW,EAAE;;AAEjB;EACE,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B,EAAE;EAC9B;IACE,WAAW;IACX,0BAA0B;IAC1B,eAAe;IACf,gBAAgB,EAAE;EACpB;IACE,gBAAgB;IAChB,aAAa,EAAE;EACjB;IACE,6DAA6D;IAC7D,aAAa,EAAE;;AAEnB;EACE,aAAa;EACb,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB,EAAE;;AAEtB;EACE,YAAY;EACZ,kBAAkB,EAAE;;AAEtB;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gDAAgD;EAChD,eAAe;EACf,kBAAkB;EAClB,eAAe,EAAE;;AAEnB;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAE;EACzB;IACE,YAAY;IACZ,WAAW,EAAE;;AAEjB;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,2BAA2B,EAAE;;AAE/B;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,gDAAgD;EAChD,kBAAkB;EAClB,eAAe;EACf,eAAe,EAAE;EACjB;;IAEE,gBAAgB;IAChB,WAAW,EAAE;EACf;IACE,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB,EAAE;EAC5B;IACE,qBAAqB,EAAE;EACzB;IACE,yBAAyB;IACzB,kBAAkB,EAAE;;AAExB;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe,EAAE;EACjB;IACE,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,cAAc,EAAE;;AAEpB;EACE,WAAW;EACX,eAAe,EAAE;EACjB;IACE,WAAW;IACX,cAAc;IACd,YAAY;IACZ,iBAAiB,EAAE;;AAEvB;;EAEE,OAAO;EACP,WAAW,EAAE;;AAEf;EACE,eAAe,EAAE;;AAEnB;EACE,YAAY,EAAE;;AAEhB;EACE,8BAA8B;EAC9B,0BAA0B;EAC1B,sBAAsB,EAAE;;AAE1B;EACE,aAAa,EAAE;;AAEjB;EACE,cAAc;EACd,YAAY;EACZ,SAAS,EAAE;;AAEb;EACE,WAAW;EACX,2BAA2B;EAC3B,cAAc;EACd,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB,EAAE;;AAErB;;;;EAIE,cAAc;EACd,6BAA6B;EAC7B,SAAS,EAAE;;AAEb;EACE,aAAa,EAAE;;AAEjB;;EAEE,WAAW;EACX,YAAY;EACZ,gBAAgB,EAAE;;AAEpB;EACE,aAAa,EAAE;;AAEjB,+BAA+B;AAC/B;EACE,eAAe,EAAE;;AAEnB;EACE,mBAAmB;EACnB,cAAc,EAAE","sourcesContent":["/*#######################################################################################*/\n/**\n * google-material-color v1.2.6\n * https://github.com/danlevan/google-material-color\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown .rfipicons__ibox--error {\n    color: #000;\n    text-transform: capitalize;\n    font-size: 14px;\n    font-weight: 500; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/team/presets.js":
/*!************************************!*\
  !*** ./src/blocks/team/presets.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/team/attributes.js");



let imgUrl = '';

if (_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].image) {
  imgUrl = _attributes__WEBPACK_IMPORTED_MODULE_2__["default"].image.url;
}

const presets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'image',
    value: {
      url: imgUrl ? imgUrl : `${uagb_blocks_info.uagb_url}/admin/assets/images/placeholder.png`
    }
  }, {
    label: 'titleSpace',
    value: 40
  }, {
    label: 'prefixSpace',
    value: 11
  }, {
    label: 'descSpace',
    value: 10
  }, {
    label: 'align',
    value: 'center'
  }, {
    label: 'imgPosition',
    value: 'above'
  }, {
    label: 'imgAlign',
    value: ''
  }, {
    label: 'socialEnable',
    value: true
  }, {
    label: 'twitterIcon',
    value: 'fab fa-twitter'
  }, {
    label: 'fbIcon',
    value: 'fab fa-facebook'
  }, {
    label: 'linkedinIcon',
    value: 'fab fa-linkedin'
  }, {
    label: 'pinIcon',
    value: 'fab fa-pinterest'
  }, {
    label: 'imgStyle',
    value: 'circle'
  }, {
    label: 'imageLeftMargin',
    value: 20
  }, {
    label: 'imageRightMargin',
    value: 20
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 168C58 166.343 59.138 165 60.5418 165H266.259C267.663 165 268.801 166.343 268.801 168C268.801 169.657 267.663 171 266.259 171H60.5418C59.138 171 58 169.657 58 168Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M84 189C84 187.343 85.1317 186 86.5276 186H240.24C241.636 186 242.768 187.343 242.768 189C242.768 190.657 241.636 192 240.24 192H86.5276C85.1317 192 84 190.657 84 189Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M86 125.003C86 122.792 87.6678 121 89.7252 121H237.04C239.097 121 240.765 122.792 240.765 125.003C240.765 127.213 239.097 129.005 237.04 129.005H89.7252C87.6678 129.005 86 127.213 86 125.003Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M113 147C113 145.343 114.088 144 115.431 144H211.569C212.912 144 214 145.343 214 147C214 148.657 212.912 150 211.569 150H115.431C114.088 150 113 148.657 113 147Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M161.236 56.0245C161.048 56.0467 160.475 56.1101 159.964 56.1655C156.734 56.5158 153.158 57.727 150.272 59.4481C146.6 61.6383 143.615 64.6221 141.424 68.2931C139.716 71.154 138.582 74.4786 138.119 77.98C137.96 79.1788 137.96 82.8471 138.119 84.0459C138.582 87.5474 139.716 90.872 141.424 93.7329C143.615 97.4039 146.6 100.388 150.272 102.578C153.135 104.285 156.461 105.419 159.964 105.881C161.163 106.04 164.833 106.04 166.032 105.881C172.127 105.076 177.293 102.401 181.509 97.8652C183.842 95.3561 185.667 92.2352 186.787 88.84C187.67 86.1636 188 84.0325 188 81.013C188 78.7792 187.906 77.7923 187.505 75.8276C186.129 69.0915 181.799 63.0716 175.723 59.4481C172.89 57.7585 169.512 56.6008 166.13 56.1603C165.272 56.0486 161.843 55.9534 161.236 56.0245ZM165.2 67.0181C167.615 67.6483 169.781 69.4215 170.882 71.6696C171.564 73.0622 171.74 73.8566 171.74 75.5341C171.74 76.688 171.701 77.0988 171.527 77.7355C170.858 80.1867 169.112 82.313 166.864 83.4142C165.976 83.8492 164.685 84.2416 164.141 84.2416C163.559 84.2416 163.967 84.3436 165.117 84.4859C170.303 85.1276 174.852 87.9503 177.723 92.3078C178.483 93.4621 179.477 95.5224 179.396 95.7772C179.362 95.884 178.888 96.3954 178.343 96.9135C175.018 100.073 171.021 102.077 166.522 102.839C165.415 103.026 164.842 103.063 162.998 103.063C161.154 103.063 160.581 103.026 159.474 102.839C154.975 102.077 150.978 100.073 147.653 96.9135C147.108 96.3954 146.634 95.884 146.6 95.7772C146.519 95.5224 147.513 93.4621 148.273 92.3078C151.144 87.9503 155.693 85.1276 160.879 84.4859C162.029 84.3436 162.437 84.2416 161.855 84.2416C161.311 84.2416 160.02 83.8492 159.132 83.4142C156.884 82.313 155.138 80.1867 154.469 77.7355C154.295 77.0988 154.255 76.688 154.255 75.5341C154.255 73.8563 154.432 73.0618 155.114 71.6696C156.325 69.1968 158.697 67.3905 161.406 66.877C162.429 66.6832 164.164 66.7477 165.2 67.0181Z" fill="#B6B6B6"/> <circle cx="133" cy="212" r="5" fill="#B6B6B6"/> <circle cx="148" cy="212" r="5" fill="#B6B6B6"/> <circle cx="163" cy="212" r="5" fill="#B6B6B6"/> <circle cx="178" cy="212" r="5" fill="#B6B6B6"/> <circle cx="193" cy="212" r="5" fill="#B6B6B6"/> </svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'image',
    value: {
      url: `${uagb_blocks_info.uagb_url}/admin/assets/images/placeholder.png`
    }
  }, {
    label: 'titleSpace',
    value: 5
  }, {
    label: 'prefixSpace',
    value: 13
  }, {
    label: 'descSpace',
    value: 20
  }, {
    label: 'align',
    value: 'center'
  }, {
    label: 'imgPosition',
    value: 'above'
  }, {
    label: 'imgAlign',
    value: ''
  }, {
    label: 'twitterIcon',
    value: ''
  }, {
    label: 'fbIcon',
    value: ''
  }, {
    label: 'linkedinIcon',
    value: ''
  }, {
    label: 'pinIcon',
    value: ''
  }, {
    label: 'imgStyle',
    value: 'circle'
  }, {
    label: 'imageLeftMargin',
    value: 20
  }, {
    label: 'imageRightMargin',
    value: 20
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 180C58 178.343 59.138 177 60.5418 177H266.259C267.663 177 268.801 178.343 268.801 180C268.801 181.657 267.663 183 266.259 183H60.5418C59.138 183 58 181.657 58 180Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M84 199.009C84 197.352 85.1317 196.009 86.5276 196.009H240.24C241.636 196.009 242.768 197.352 242.768 199.009C242.768 200.666 241.636 202.009 240.24 202.009H86.5276C85.1317 202.009 84 200.666 84 199.009Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M86 141.003C86 138.792 87.6678 137 89.7252 137H237.04C239.097 137 240.765 138.792 240.765 141.003C240.765 143.213 239.097 145.005 237.04 145.005H89.7252C87.6678 145.005 86 143.213 86 141.003Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M113 159C113 157.343 114.088 156 115.431 156H211.569C212.912 156 214 157.343 214 159C214 160.657 212.912 162 211.569 162H115.431C114.088 162 113 160.657 113 159Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M161.236 70.0245C161.048 70.0467 160.475 70.1101 159.964 70.1655C156.734 70.5158 153.158 71.727 150.272 73.4481C146.6 75.6383 143.615 78.6221 141.424 82.2931C139.716 85.154 138.582 88.4786 138.119 91.98C137.96 93.1788 137.96 96.8471 138.119 98.0459C138.582 101.547 139.716 104.872 141.424 107.733C143.615 111.404 146.6 114.388 150.272 116.578C153.135 118.285 156.461 119.419 159.964 119.881C161.163 120.04 164.833 120.04 166.032 119.881C172.127 119.076 177.293 116.401 181.509 111.865C183.842 109.356 185.667 106.235 186.787 102.84C187.67 100.164 188 98.0325 188 95.013C188 92.7792 187.906 91.7923 187.505 89.8276C186.129 83.0915 181.799 77.0716 175.723 73.4481C172.89 71.7585 169.512 70.6008 166.13 70.1603C165.272 70.0486 161.843 69.9534 161.236 70.0245ZM165.2 81.0181C167.615 81.6483 169.781 83.4215 170.882 85.6696C171.564 87.0622 171.74 87.8566 171.74 89.5341C171.74 90.688 171.701 91.0988 171.527 91.7355C170.858 94.1867 169.112 96.313 166.864 97.4142C165.976 97.8492 164.685 98.2416 164.141 98.2416C163.559 98.2416 163.967 98.3436 165.117 98.4859C170.303 99.1276 174.852 101.95 177.723 106.308C178.483 107.462 179.477 109.522 179.396 109.777C179.362 109.884 178.888 110.395 178.343 110.913C175.018 114.073 171.021 116.077 166.522 116.839C165.415 117.026 164.842 117.063 162.998 117.063C161.154 117.063 160.581 117.026 159.474 116.839C154.975 116.077 150.978 114.073 147.653 110.913C147.108 110.395 146.634 109.884 146.6 109.777C146.519 109.522 147.513 107.462 148.273 106.308C151.144 101.95 155.693 99.1276 160.879 98.4859C162.029 98.3436 162.437 98.2416 161.855 98.2416C161.311 98.2416 160.02 97.8492 159.132 97.4142C156.884 96.313 155.138 94.1867 154.469 91.7355C154.295 91.0988 154.255 90.688 154.255 89.5341C154.255 87.8563 154.432 87.0618 155.114 85.6696C156.325 83.1968 158.697 81.3905 161.406 80.877C162.429 80.6832 164.164 80.7477 165.2 81.0181Z" fill="#B6B6B6"/> </svg>'
}, {
  value: 'preset-3',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 3', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'image',
    value: {
      url: `${uagb_blocks_info.uagb_url}/admin/assets/images/placeholder.png`
    }
  }, {
    label: 'titleSpace',
    value: 5
  }, {
    label: 'prefixSpace',
    value: 13
  }, {
    label: 'descSpace',
    value: 20
  }, {
    label: 'align',
    value: 'left'
  }, {
    label: 'imgPosition',
    value: 'left'
  }, {
    label: 'imgAlign',
    value: 'middle'
  }, {
    label: 'twitterIcon',
    value: 'fab fa-twitter'
  }, {
    label: 'fbIcon',
    value: 'fab fa-facebook'
  }, {
    label: 'linkedinIcon',
    value: 'fab fa-linkedin'
  }, {
    label: 'pinIcon',
    value: 'fab fa-pinterest'
  }, {
    label: 'imgStyle',
    value: 'circle'
  }, {
    label: 'imageLeftMargin',
    value: 20
  }, {
    label: 'imageRightMargin',
    value: 20
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M76.2361 98.0245C76.0477 98.0467 75.4751 98.1101 74.9637 98.1655C71.7343 98.5158 68.1582 99.727 65.2725 101.448C61.5998 103.638 58.6148 106.622 56.4236 110.293C54.7159 113.154 53.5816 116.479 53.1189 119.98C52.9604 121.179 52.9604 124.847 53.1189 126.046C53.5816 129.547 54.7159 132.872 56.4236 135.733C58.6148 139.404 61.5998 142.388 65.2725 144.578C68.1346 146.285 71.4607 147.419 74.9637 147.881C76.163 148.04 79.8329 148.04 81.0322 147.881C87.127 147.076 92.2932 144.401 96.5095 139.865C98.8421 137.356 100.667 134.235 101.787 130.84C102.67 128.164 103 126.033 103 123.013C103 120.779 102.906 119.792 102.505 117.828C101.129 111.091 96.7993 105.072 90.7234 101.448C87.8905 99.7585 84.5123 98.6008 81.1301 98.1603C80.2717 98.0486 76.843 97.9534 76.2361 98.0245ZM80.2003 109.018C82.6151 109.648 84.7812 111.421 85.8821 113.67C86.564 115.062 86.7405 115.857 86.7405 117.534C86.7405 118.688 86.7007 119.099 86.5269 119.735C85.8579 122.187 84.1121 124.313 81.8642 125.414C80.9763 125.849 79.6846 126.242 79.1405 126.242C78.5592 126.242 78.9667 126.344 80.1172 126.486C85.3027 127.128 89.8517 129.95 92.7225 134.308C93.483 135.462 94.4766 137.522 94.3958 137.777C94.3618 137.884 93.8881 138.395 93.3429 138.913C90.0182 142.073 86.0209 144.077 81.5216 144.839C80.4153 145.026 79.8418 145.063 77.998 145.063C76.1541 145.063 75.5806 145.026 74.4743 144.839C69.975 144.077 65.9777 142.073 62.653 138.913C62.1078 138.395 61.6341 137.884 61.6001 137.777C61.5193 137.522 62.5129 135.462 63.2734 134.308C66.1442 129.95 70.6932 127.128 75.8788 126.486C77.0292 126.344 77.4367 126.242 76.8554 126.242C76.3113 126.242 75.0196 125.849 74.1317 125.414C71.8838 124.313 70.138 122.187 69.469 119.735C69.2953 119.099 69.2554 118.688 69.2554 117.534C69.2554 115.856 69.4319 115.062 70.114 113.67C71.3255 111.197 73.697 109.39 76.4058 108.877C77.4286 108.683 79.1639 108.748 80.2003 109.018Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118 136C118 134.343 118.853 133 119.905 133H274.095C275.147 133 276 134.343 276 136C276 137.657 275.147 139 274.095 139H119.905C118.853 139 118 137.657 118 136Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118 154C118 152.343 118.848 151 119.895 151H235.105C236.152 151 237 152.343 237 154C237 155.657 236.152 157 235.105 157H119.895C118.848 157 118 155.657 118 154Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118 93C118 90.7909 119.229 89 120.744 89H229.256C230.771 89 232 90.7909 232 93C232 95.2091 230.771 97 229.256 97H120.744C119.229 97 118 95.2091 118 93Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M118 112C118 110.343 118.797 109 119.781 109H190.219C191.203 109 192 110.343 192 112C192 113.657 191.203 115 190.219 115H119.781C118.797 115 118 113.657 118 112Z" fill="#B6B6B6"/> <circle cx="123" cy="176" r="5" fill="#B6B6B6"/> <circle cx="138" cy="176" r="5" fill="#B6B6B6"/> <circle cx="153" cy="176" r="5" fill="#B6B6B6"/> <circle cx="168" cy="176" r="5" fill="#B6B6B6"/> <circle cx="183" cy="176" r="5" fill="#B6B6B6"/> </svg>'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(`uag_team_presets`, presets));

/***/ }),

/***/ "./src/blocks/team/settings.js":
/*!*************************************!*\
  !*** ./src/blocks/team/settings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/icon-picker */ "./src/components/icon-picker/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_select_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/select-control */ "./src/components/select-control/index.js");
/* harmony import */ var _Utils_Helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Utils/Helpers */ "./blocks-config/utils/Helpers.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./presets */ "./src/blocks/team/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




















let imageSizeOptions = [{
  value: 'thumbnail',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Thumbnail', 'ultimate-addons-for-gutenberg')
}, {
  value: 'medium',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium', 'ultimate-addons-for-gutenberg')
}, {
  value: 'full',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large', 'ultimate-addons-for-gutenberg')
}];




const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes,
    deviceType
  } = props;
  const {
    align,
    tag,
    titleColor,
    prefixColor,
    descColor,
    titleFontFamily,
    titleFontWeight,
    titleFontSizeType,
    titleFontSize,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleLineHeightType,
    titleLineHeight,
    titleLineHeightMobile,
    titleLineHeightTablet,
    prefixFontFamily,
    prefixFontWeight,
    prefixFontSizeType,
    prefixFontSize,
    prefixFontSizeMobile,
    prefixFontSizeTablet,
    prefixLineHeightType,
    prefixLineHeight,
    prefixLineHeightMobile,
    prefixLineHeightTablet,
    descFontFamily,
    descFontWeight,
    descFontSizeType,
    descFontSize,
    descFontSizeMobile,
    descFontSizeTablet,
    descLineHeightType,
    descLineHeight,
    descLineHeightMobile,
    descLineHeightTablet,
    socialFontSize,
    socialFontSizeType,
    socialFontSizeMobile,
    socialFontSizeTablet,
    titleLoadGoogleFonts,
    prefixLoadGoogleFonts,
    descLoadGoogleFonts,
    image,
    imgStyle,
    imgAlign,
    imgSize,
    imgWidth,
    imgWidthTablet,
    imgWidthMobile,
    imgPosition,
    titleSpace,
    titleSpaceTablet,
    titleSpaceMobile,
    descSpace,
    descSpaceTablet,
    descSpaceMobile,
    prefixSpace,
    prefixSpaceTablet,
    prefixSpaceMobile,
    twitterIcon,
    fbIcon,
    linkedinIcon,
    pinIcon,
    twitterLink,
    fbLink,
    linkedinLink,
    pinLink,
    socialColor,
    socialHoverColor,
    socialSpace,
    socialSpaceTablet,
    socialSpaceMobile,
    socialTarget,
    socialEnable,
    stack,
    imageLeftMargin,
    imageRightMargin,
    imageTopMargin,
    imageBottomMargin,
    imageMarginTopTablet,
    imageMarginRightTablet,
    imageMarginBottomTablet,
    imageMarginLeftTablet,
    imageMarginTopMobile,
    imageMarginRightMobile,
    imageMarginBottomMobile,
    imageMarginLeftMobile,
    imageMarginUnit,
    tabletImageMarginUnit,
    mobileImageMarginUnit,
    spacingLink,
    titleTransform,
    titleDecoration,
    descTransform,
    descDecoration,
    prefixTransform,
    prefixDecoration,
    titleFontStyle,
    descFontStyle,
    prefixFontStyle,
    // lettter spacing
    titleLetterSpacing,
    titleLetterSpacingTablet,
    titleLetterSpacingMobile,
    titleLetterSpacingType,
    prefixLetterSpacing,
    prefixLetterSpacingTablet,
    prefixLetterSpacingMobile,
    prefixLetterSpacingType,
    descLetterSpacing,
    descLetterSpacingTablet,
    descLetterSpacingMobile,
    descLetterSpacingType
  } = attributes;
  /*
   * Event to set Image as while adding.
   */

  const onSelectImage = media => {
    if (!media || !media.url) {
      setAttributes({
        image: null
      });
      return;
    }

    if (!media.type || 'image' !== media.type) {
      setAttributes({
        image: null
      });
      return;
    }

    if (media.sizes) {
      const new_img = Object(_Utils_Helpers__WEBPACK_IMPORTED_MODULE_16__["getImageSize"])(media.sizes);
      imageSizeOptions = new_img;
    }

    setAttributes({
      image: media
    });
  };

  const presetSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_21__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Presets', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_18__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_17__["default"],
      presetInputType: "radioImage"
    }));
  };
  /*
   * Event to set Image as null while removing.
   */


  const onRemoveImage = () => {
    setAttributes({
      image: ''
    });
  };

  if (image && image.sizes) {
    imageSizeOptions = Object(_Utils_Helpers__WEBPACK_IMPORTED_MODULE_16__["getImageSize"])(image.sizes);
  }

  let loadTitleGoogleFonts;
  let loadPrefixGoogleFonts;
  let loadDescGoogleFonts;

  if (titleLoadGoogleFonts === true) {
    const tconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: tconfig
    });
  }

  if (prefixLoadGoogleFonts === true) {
    const pconfig = {
      google: {
        families: [prefixFontFamily + (prefixFontWeight ? ':' + prefixFontWeight : '')]
      }
    };
    loadPrefixGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: pconfig
    });
  }

  if (descLoadGoogleFonts === true) {
    const dconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: dconfig
    });
  }

  const getImagePanelBody = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_21__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Layout', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: tag,
        label: 'tag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'div',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Div', 'ultimate-addons-for-gutenberg')
      }]
    }), imgPosition === 'above' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: align,
        label: 'align'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_13__["default"], {
      onSelectImage: onSelectImage,
      backgroundImage: image,
      onRemoveImage: onRemoveImage
    }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Position', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imgPosition,
        label: 'imgPosition'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'above',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), imgPosition !== 'above' && image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Stack On', 'ultimate-addons-for-gutenberg'),
      data: {
        value: stack,
        label: 'stack'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
      }]
    }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Style', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imgStyle,
        label: 'imgStyle'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'normal',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'circle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Circle', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'square',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Square', 'ultimate-addons-for-gutenberg')
      }]
    }), imgPosition && imgPosition !== 'above' && image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Vertical Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imgAlign,
        label: 'imgAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'middle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Middle', 'ultimate-addons-for-gutenberg')
      }]
    }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_15__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imgSize,
        label: 'imgSize'
      },
      setAttributes: setAttributes,
      options: imageSizeOptions
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: imgWidth,
          label: 'imgWidth'
        },
        tablet: {
          value: imgWidthTablet,
          label: 'imgWidthTablet'
        },
        mobile: {
          value: imgWidthMobile,
          label: 'imgWidthMobile'
        }
      },
      min: 0,
      max: 500,
      displayUnit: false,
      setAttributes: setAttributes
    })));
  };

  const getSocialLinksPanelBody = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_21__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Social Links', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Social Links', 'ultimate-addons-for-gutenberg'),
      checked: socialEnable,
      onChange: () => setAttributes({
        socialEnable: !socialEnable
      })
    }), socialEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open Links in New Window', 'ultimate-addons-for-gutenberg'),
      checked: socialTarget,
      onChange: () => setAttributes({
        socialTarget: !socialTarget
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Item 1', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: twitterIcon,
      onChange: value => setAttributes({
        twitterIcon: value
      })
    }), twitterIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["TextControl"], {
      value: twitterLink,
      onChange: value => setAttributes({
        twitterLink: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter Item 1 URL', 'ultimate-addons-for-gutenberg')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Item 2', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: fbIcon,
      onChange: value => setAttributes({
        fbIcon: value
      })
    }), fbIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["TextControl"], {
      value: fbLink,
      onChange: value => setAttributes({
        fbLink: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter Item 2 URL', 'ultimate-addons-for-gutenberg')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Item 3', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: linkedinIcon,
      onChange: value => setAttributes({
        linkedinIcon: value
      })
    }), linkedinIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["TextControl"], {
      value: linkedinLink,
      onChange: value => setAttributes({
        linkedinLink: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter Item 3 URL', 'ultimate-addons-for-gutenberg')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Item 4', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: pinIcon,
      onChange: value => setAttributes({
        pinIcon: value
      })
    }), pinIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["TextControl"], {
      value: pinLink,
      onChange: value => setAttributes({
        pinLink: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter Item 4 URL', 'ultimate-addons-for-gutenberg')
    }))));
  };

  const getTitlePanelColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_21__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: titleColor ? titleColor : '',
      data: {
        value: titleColor,
        label: 'titleColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      fontStyle: {
        value: titleFontStyle,
        label: 'titleFontStyle'
      },
      transform: {
        value: titleTransform,
        label: 'titleTransform'
      },
      decoration: {
        value: titleDecoration,
        label: 'titleDecoration'
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
      },
      letterSpacing: {
        value: titleLetterSpacing,
        label: 'titleLetterSpacing'
      },
      letterSpacingTablet: {
        value: titleLetterSpacingTablet,
        label: 'titleLetterSpacingTablet'
      },
      letterSpacingMobile: {
        value: titleLetterSpacingMobile,
        label: 'titleLetterSpacingMobile'
      },
      letterSpacingType: {
        value: titleLetterSpacingType,
        label: 'titleLetterSpacingType'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: titleSpace,
          label: 'titleSpace'
        },
        tablet: {
          value: titleSpaceTablet,
          label: 'titleSpaceTablet'
        },
        mobile: {
          value: titleSpaceMobile,
          label: 'titleSpaceMobile'
        }
      },
      min: 0,
      max: 50,
      displayUnit: false,
      setAttributes: setAttributes
    }));
  };

  const getPrefixPanelColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_21__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Designation', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: prefixColor ? prefixColor : '',
      data: {
        value: prefixColor,
        label: 'prefixColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      fontStyle: {
        value: prefixFontStyle,
        label: 'prefixFontStyle'
      },
      transform: {
        value: prefixTransform,
        label: 'prefixTransform'
      },
      decoration: {
        value: prefixDecoration,
        label: 'prefixDecoration'
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
      letterSpacing: {
        value: prefixLetterSpacing,
        label: 'prefixLetterSpacing'
      },
      letterSpacingTablet: {
        value: prefixLetterSpacingTablet,
        label: 'prefixLetterSpacingTablet'
      },
      letterSpacingMobile: {
        value: prefixLetterSpacingMobile,
        label: 'prefixLetterSpacingMobile'
      },
      letterSpacingType: {
        value: prefixLetterSpacingType,
        label: 'prefixLetterSpacingType'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: prefixSpace,
          label: 'prefixSpace'
        },
        tablet: {
          value: prefixSpaceTablet,
          label: 'prefixSpaceTablet'
        },
        mobile: {
          value: prefixSpaceMobile,
          label: 'prefixSpaceMobile'
        }
      },
      min: 0,
      max: 50,
      displayUnit: false,
      setAttributes: setAttributes
    }));
  };

  const getDescriptionPanelColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_21__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Description', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: descColor ? descColor : '',
      data: {
        value: descColor,
        label: 'descColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      transform: {
        value: descTransform,
        label: 'descTransform'
      },
      decoration: {
        value: descDecoration,
        label: 'descDecoration'
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
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
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
      max: 50,
      displayUnit: false,
      setAttributes: setAttributes
    }));
  };

  const getSocialIconPanelColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_21__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Social Icons', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Size', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: socialFontSize,
          label: 'socialFontSize'
        },
        tablet: {
          value: socialFontSizeTablet,
          label: 'socialFontSizeTablet'
        },
        mobile: {
          value: socialFontSizeMobile,
          label: 'socialFontSizeMobile'
        }
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('EM', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }],
      unit: {
        value: socialFontSizeType,
        label: 'socialFontSizeType'
      },
      min: 0,
      limitMax: {
        px: 100,
        em: 100
      },
      displayUnit: true,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: socialSpace,
          label: 'socialSpace'
        },
        tablet: {
          value: socialSpaceTablet,
          label: 'socialSpaceTablet'
        },
        mobile: {
          value: socialSpaceMobile,
          label: 'socialSpaceMobile'
        }
      },
      min: 0,
      max: 50,
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: socialColor ? socialColor : '',
        data: {
          value: socialColor,
          label: 'socialColor'
        },
        setAttributes: setAttributes
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: socialHoverColor ? socialHoverColor : '',
        data: {
          value: socialHoverColor,
          label: 'socialHoverColor'
        },
        setAttributes: setAttributes
      }),
      disableBottomSeparator: true
    }));
  };

  const getSpacingPanelBody = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_21__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: imageTopMargin,
        label: 'imageTopMargin'
      },
      valueRight: {
        value: imageRightMargin,
        label: 'imageRightMargin'
      },
      valueBottom: {
        value: imageBottomMargin,
        label: 'imageBottomMargin'
      },
      valueLeft: {
        value: imageLeftMargin,
        label: 'imageLeftMargin'
      },
      valueTopTablet: {
        value: imageMarginTopTablet,
        label: 'imageMarginTopTablet'
      },
      valueRightTablet: {
        value: imageMarginRightTablet,
        label: 'imageMarginRightTablet'
      },
      valueBottomTablet: {
        value: imageMarginBottomTablet,
        label: 'imageMarginBottomTablet'
      },
      valueLeftTablet: {
        value: imageMarginLeftTablet,
        label: 'imageMarginLeftTablet'
      },
      valueTopMobile: {
        value: imageMarginTopMobile,
        label: 'imageMarginTopMobile'
      },
      valueRightMobile: {
        value: imageMarginRightMobile,
        label: 'imageMarginRightMobile'
      },
      valueBottomMobile: {
        value: imageMarginBottomMobile,
        label: 'imageMarginBottomMobile'
      },
      valueLeftMobile: {
        value: imageMarginLeftMobile,
        label: 'imageMarginLeftMobile'
      },
      unit: {
        value: imageMarginUnit,
        label: 'imageMarginUnit'
      },
      mUnit: {
        value: mobileImageMarginUnit,
        label: 'mobileImageMarginUnit'
      },
      tUnit: {
        value: tabletImageMarginUnit,
        label: 'tabletImageMarginUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: 'spacingLink'
      }
    })));
  };

  const getInspectorControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_19__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, presetSettings(), getImagePanelBody(), getSocialLinksPanelBody()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, getTitlePanelColorSettings(), getPrefixPanelColorSettings(), getDescriptionPanelColorSettings(), getSocialIconPanelColorSettings(), image && getSpacingPanelBody()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
      parentProps: props
    }))));
  };

  const getFontSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_4__["default"])()
    }, loadTitleGoogleFonts, loadPrefixGoogleFonts, loadDescGoogleFonts);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, getInspectorControls(), getFontSettings());
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/icon-picker/editor.lazy.scss":
/*!*****************************************************!*\
  !*** ./src/components/icon-picker/editor.lazy.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/icon-picker/editor.lazy.scss");

            

var refs = 0;
var update;
var options = {"injectType":"lazySingletonStyleTag","attributes":{"id":"uagb-editor-styles"}};

options.insert = "head";
options.singleton = true;

var exported = {};

exported.locals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
exported.use = function() {
  if (!(refs++)) {
    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  return exported;
};
exported.unuse = function() {
  if (refs > 0 && !--refs) {
    update();
    update = null;
  }
};



;
       /* harmony default export */ __webpack_exports__["default"] = (exported);


/***/ }),

/***/ "./src/components/icon-picker/index.js":
/*!*********************************************!*\
  !*** ./src/components/icon-picker/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/icon-picker/editor.lazy.scss");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






const UAGIconPicker = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_2__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_2__["default"].unuse();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "components-base-control uag-icon-picker"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "uag-control-label"
  }, (props === null || props === void 0 ? void 0 : props.label) || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Icon', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
    icons: (props === null || props === void 0 ? void 0 : props.icons) || wp.UAGBSvgIcons,
    renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
    theme: "default",
    value: props.value,
    onChange: props === null || props === void 0 ? void 0 : props.onChange,
    isMulti: props.isMulti || false,
    noSelectedPlaceholder: props.noSelectedPlaceholder || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
  }), props.help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "uag-control-help-notice"
  }, props.help));
};

/* harmony default export */ __webpack_exports__["default"] = (UAGIconPicker);

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