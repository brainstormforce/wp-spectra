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
___CSS_LOADER_EXPORT___.push([module.i, "/*#######################################################################################*/\n/**\n * google-material-color v1.2.6\n * https://github.com/danlevan/google-material-color\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n", "",{"version":3,"sources":["webpack://./src/components/icon-picker/editor.lazy.scss"],"names":[],"mappings":"AAAA,0FAA0F;AAC1F;;;EAGE;AACF;EACE,sBAAsB;EACtB,yBAAyB,EAAE;EAC3B;IACE,4EAA4E;IAC5E,yBAAyB,EAAE;EAC7B;IACE,0BAA0B;IAC1B,8BAA8B;IAC9B,yBAAyB;IACzB,cAAc,EAAE;IAChB;MACE,yBAAyB,EAAE;IAC7B;MACE,oCAAoC,EAAE;EAC1C;IACE,sBAAsB;IACtB,cAAc,EAAE;IAChB;MACE,cAAc,EAAE;EACpB;IACE,sBAAsB,EAAE;IACxB;MACE,yBAAyB,EAAE;IAC7B;MACE,0BAA0B,EAAE;;AAElC;EACE,2EAA2E;EAC3E,cAAc;EACd,sBAAsB;EACtB,yBAAyB,EAAE;EAC3B;;IAEE,cAAc,EAAE;EAClB;IACE,sBAAsB;IACtB,yBAAyB;IACzB,0CAA0C,EAAE;IAC5C;MACE,qBAAqB;MACrB,2BAA2B;MAC3B,eAAe,EAAE;EACrB;IACE,yBAAyB;IACzB,0CAA0C,EAAE;IAC5C;MACE,qBAAqB;MACrB,2BAA2B;MAC3B,eAAe,EAAE;EACrB;IACE,sBAAsB;IACtB,sBAAsB;IACtB,cAAc,EAAE;IAChB;MACE,yBAAyB;MACzB,yBAAyB,EAAE;IAC7B;MACE,yBAAyB,EAAE;EAC/B;IACE,yBAAyB;IACzB,yBAAyB;IACzB,cAAc,EAAE;IAChB;MACE,yBAAyB;MACzB,yBAAyB,EAAE;IAC7B;MACE,yBAAyB,EAAE;IAC7B;MACE,cAAc,EAAE;EACpB;IACE,yBAAyB;IACzB,0CAA0C,EAAE;IAC5C;MACE,qBAAqB;MACrB,2BAA2B;MAC3B,eAAe,EAAE;;AAEvB;;EAEE,SAAS;EACT,UAAU;EACV,8JAA8J;EAC9J,eAAe;EACf,oBAAoB;EACpB,wBAAwB;EACxB,sBAAsB,EAAE;EACxB;;IAEE,sBAAsB;IACtB,SAAS;IACT,UAAU,EAAE;EACd;;;;IAIE,eAAe,EAAE;;AAErB;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,sBAAsB;EACtB,WAAW,EAAE;;AAEf;EACE,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,gDAAgD;EAChD,eAAe;EACf,iBAAiB,EAAE;EACnB;IACE,0BAA0B,EAAE;EAC9B;IACE,WAAW;IACX,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,gCAAgC;IAChC,8CAA8C,EAAE;IAChD;MACE,eAAe;MACf,2BAA2B,EAAE;IAC/B;MACE,0BAA0B,EAAE;EAChC;IACE,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE,mBAAmB;MACnB,2BAA2B;MAC3B,iBAAiB;MACjB,qBAAqB,EAAE;EAC3B;IACE,WAAW;IACX,UAAU;IACV,YAAY;IACZ,WAAW;IACX,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB,EAAE;IACpB;MACE,eAAe;MACf,iBAAiB;MACjB,gBAAgB;MAChB,kBAAkB;MAClB,yBAAyB;MACzB,kBAAkB,EAAE;EACxB;IACE,aAAa;IACb,YAAY;IACZ,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,eAAe,EAAE;IACjB;;MAEE,YAAY;MACZ,WAAW,EAAE;EACjB;IACE,WAAW;IACX,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,kCAAkC;IAClC,eAAe,EAAE;;AAErB;EACE,WAAW;EACX,eAAe;EACf,kBAAkB,EAAE;EACpB;IACE,WAAW;IACX,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,wBAAwB;IACxB,qBAAqB;IACrB,gBAAgB;IAChB,yBAAyB;IACzB,0CAA0C;IAC1C,wCAAwC,EAAE;EAC5C;IACE,kBAAkB;IAClB,UAAU;IACV,MAAM;IACN,eAAe;IACf,iBAAiB;IACjB,WAAW,EAAE;;AAEjB;EACE,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B,EAAE;EAC9B;IACE,gBAAgB;IAChB,aAAa,EAAE;EACjB;IACE,6DAA6D;IAC7D,aAAa,EAAE;;AAEnB;EACE,aAAa;EACb,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB,EAAE;;AAEtB;EACE,YAAY;EACZ,kBAAkB,EAAE;;AAEtB;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB,EAAE;;AAErB;EACE,iBAAiB,EAAE;;AAErB;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gDAAgD;EAChD,eAAe;EACf,kBAAkB;EAClB,eAAe,EAAE;;AAEnB;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAE;EACzB;IACE,YAAY;IACZ,WAAW,EAAE;;AAEjB;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,2BAA2B,EAAE;;AAE/B;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,gDAAgD;EAChD,kBAAkB;EAClB,eAAe;EACf,eAAe,EAAE;EACjB;;IAEE,gBAAgB;IAChB,WAAW,EAAE;EACf;IACE,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB,EAAE;EAC5B;IACE,qBAAqB,EAAE;EACzB;IACE,yBAAyB;IACzB,kBAAkB,EAAE;;AAExB;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe,EAAE;EACjB;IACE,cAAc;IACd,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,cAAc,EAAE;;AAEpB;EACE,WAAW;EACX,eAAe,EAAE;EACjB;IACE,WAAW;IACX,cAAc;IACd,YAAY;IACZ,iBAAiB,EAAE;;AAEvB;;EAEE,OAAO;EACP,WAAW,EAAE;;AAEf;EACE,eAAe,EAAE;;AAEnB;EACE,YAAY,EAAE;;AAEhB;EACE,8BAA8B;EAC9B,0BAA0B;EAC1B,sBAAsB,EAAE;;AAE1B;EACE,aAAa,EAAE;;AAEjB;EACE,cAAc;EACd,YAAY;EACZ,SAAS,EAAE;;AAEb;EACE,WAAW;EACX,2BAA2B;EAC3B,cAAc;EACd,iBAAiB;EACjB,yBAAyB;EACzB,mBAAmB;EACnB,iBAAiB,EAAE;;AAErB;;;;EAIE,cAAc;EACd,6BAA6B;EAC7B,SAAS,EAAE;;AAEb;EACE,aAAa,EAAE;;AAEjB;;EAEE,WAAW;EACX,YAAY;EACZ,gBAAgB,EAAE;;AAEpB;EACE,aAAa,EAAE;;AAEjB,+BAA+B;AAC/B;EACE,eAAe,EAAE;;AAEnB;EACE,mBAAmB;EACnB,cAAc,EAAE","sourcesContent":["/*#######################################################################################*/\n/**\n * google-material-color v1.2.6\n * https://github.com/danlevan/google-material-color\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss ***!
  \******************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n", "",{"version":3,"sources":["webpack://./src/components/image/editor.lazy.scss"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,2BAA2B;EAC3B,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB,EAAE;EACzB;IACE,SAAS;IACT,UAAU,EAAE;EACd;IACE,iBAAiB,EAAE;;AAEvB;;;;;EAKE,gBAAgB,EAAE","sourcesContent":[".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n"],"sourceRoot":""}]);
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



const presets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'image',
    value: {
      url: `${uagb_blocks_info.uagb_url}/admin/assets/images/placeholder.png`
    }
  }, {
    label: 'titleSpace',
    value: 4
  }, {
    label: 'prefixSpace',
    value: 11
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
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31 55C31 55.5523 30.5523 56 30 56C29.4477 56 29 55.5523 29 55C29 54.4477 29.4477 54 30 54C30.5523 54 31 54.4477 31 55Z" /><path d="M34 56C34.5523 56 35 55.5523 35 55C35 54.4477 34.5523 54 34 54C33.4477 54 33 54.4477 33 55C33 55.5523 33.4477 56 34 56Z" /><path d="M42 56C42.5523 56 43 55.5523 43 55C43 54.4477 42.5523 54 42 54C41.4477 54 41 54.4477 41 55C41 55.5523 41.4477 56 42 56Z" /><path d="M38 56C38.5523 56 39 55.5523 39 55C39 54.4477 38.5523 54 38 54C37.4477 54 37 54.4477 37 55C37 55.5523 37.4477 56 38 56Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M53 49.5C53 49.7761 52.7282 50 52.3929 50H19.6071C19.2718 50 19 49.7761 19 49.5C19 49.2239 19.2718 49 19.6071 49H52.3929C52.7282 49 53 49.2239 53 49.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M59 45.5C59 45.7761 58.729 46 58.3947 46H13.6053C13.271 46 13 45.7761 13 45.5C13 45.2239 13.271 45 13.6053 45H58.3947C58.729 45 59 45.2239 59 45.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M49 37C49 37.5523 48.5523 38 48 38H24C23.4477 38 23 37.5523 23 37C23 36.4477 23.4477 36 24 36H48C48.5523 36 49 36.4477 49 37Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M42 41C42 41.5523 41.5523 42 41 42H31C30.4477 42 30 41.5523 30 41C30 40.4477 30.4477 40 31 40H41C41.5523 40 42 40.4477 42 41Z" /><path d="M36 21C35.5056 21 35.0222 21.1466 34.6111 21.4213C34.2 21.696 33.8795 22.0865 33.6903 22.5433C33.5011 23.0001 33.4516 23.5028 33.548 23.9877C33.6445 24.4727 33.8826 24.9181 34.2322 25.2678C34.5819 25.6174 35.0273 25.8555 35.5123 25.952C35.9972 26.0484 36.4999 25.9989 36.9567 25.8097C37.4135 25.6205 37.804 25.3 38.0787 24.8889C38.3534 24.4778 38.5 23.9945 38.5 23.5C38.5 22.837 38.2366 22.2011 37.7678 21.7322C37.2989 21.2634 36.663 21 36 21ZM36 25C35.7033 25 35.4133 24.912 35.1666 24.7472C34.92 24.5824 34.7277 24.3481 34.6142 24.074C34.5007 23.7999 34.4709 23.4983 34.5288 23.2074C34.5867 22.9164 34.7296 22.6491 34.9393 22.4393C35.1491 22.2296 35.4164 22.0867 35.7074 22.0288C35.9983 21.9709 36.2999 22.0006 36.574 22.1142C36.8481 22.2277 37.0824 22.42 37.2472 22.6666C37.412 22.9133 37.5 23.2033 37.5 23.5C37.4996 23.8977 37.3414 24.279 37.0602 24.5602C36.779 24.8414 36.3977 24.9996 36 25Z" /><path d="M36 18C34.6155 18 33.2622 18.4105 32.111 19.1797C30.9599 19.9489 30.0627 21.0421 29.5328 22.3212C29.003 23.6003 28.8644 25.0078 29.1345 26.3656C29.4046 27.7235 30.0713 28.9708 31.0503 29.9497C32.0292 30.9287 33.2765 31.5954 34.6344 31.8655C35.9922 32.1356 37.3997 31.997 38.6788 31.4672C39.9579 30.9373 41.0511 30.0401 41.8203 28.889C42.5895 27.7378 43 26.3845 43 25C42.9979 23.1441 42.2597 21.3649 40.9474 20.0526C39.6351 18.7403 37.8559 18.0021 36 18ZM33 30.1885V29.5C33.0004 29.1023 33.1586 28.721 33.4398 28.4398C33.721 28.1586 34.1023 28.0004 34.5 28H37.5C37.8977 28.0004 38.279 28.1586 38.5602 28.4398C38.8414 28.721 38.9996 29.1023 39 29.5V30.1885C38.0896 30.7201 37.0543 31.0002 36 31.0002C34.9457 31.0002 33.9104 30.7201 33 30.1885ZM39.996 29.463C39.986 28.8072 39.7188 28.1815 39.252 27.7208C38.7851 27.2601 38.1559 27.0012 37.5 27H34.5C33.8441 27.0012 33.2149 27.2601 32.748 27.7208C32.2812 28.1815 32.014 28.8072 32.004 29.463C31.0973 28.6534 30.4579 27.5874 30.1704 26.4063C29.883 25.2252 29.9611 23.9847 30.3943 22.8489C30.8276 21.7132 31.5956 20.7358 32.5967 20.0463C33.5978 19.3567 34.7847 18.9875 36.0003 18.9875C37.2158 18.9875 38.4027 19.3567 39.4038 20.0463C40.4049 20.7358 41.1729 21.7132 41.6062 22.8489C42.0395 23.9847 42.1175 25.2252 41.8301 26.4063C41.5426 27.5874 40.9027 28.6534 39.996 29.463Z" /></svg>'
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
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M49 44C49 44.5523 48.5523 45 48 45H24C23.4477 45 23 44.5523 23 44C23 43.4477 23.4477 43 24 43H48C48.5523 43 49 43.4477 49 44Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M42 48C42 48.5523 41.5523 49 41 49H31C30.4477 49 30 48.5523 30 48C30 47.4477 30.4477 47 31 47H41C41.5523 47 42 47.4477 42 48Z" /><path d="M36 28C35.5056 28 35.0222 28.1466 34.6111 28.4213C34.2 28.696 33.8795 29.0865 33.6903 29.5433C33.5011 30.0001 33.4516 30.5028 33.548 30.9877C33.6445 31.4727 33.8826 31.9181 34.2322 32.2678C34.5819 32.6174 35.0273 32.8555 35.5123 32.952C35.9972 33.0484 36.4999 32.9989 36.9567 32.8097C37.4135 32.6205 37.804 32.3 38.0787 31.8889C38.3534 31.4778 38.5 30.9945 38.5 30.5C38.5 29.837 38.2366 29.2011 37.7678 28.7322C37.2989 28.2634 36.663 28 36 28ZM36 32C35.7033 32 35.4133 31.912 35.1666 31.7472C34.92 31.5824 34.7277 31.3481 34.6142 31.074C34.5007 30.7999 34.4709 30.4983 34.5288 30.2074C34.5867 29.9164 34.7296 29.6491 34.9393 29.4393C35.1491 29.2296 35.4164 29.0867 35.7074 29.0288C35.9983 28.9709 36.2999 29.0006 36.574 29.1142C36.8481 29.2277 37.0824 29.42 37.2472 29.6666C37.412 29.9133 37.5 30.2033 37.5 30.5C37.4996 30.8977 37.3414 31.279 37.0602 31.5602C36.779 31.8414 36.3977 31.9996 36 32Z" /><path d="M36 25C34.6155 25 33.2622 25.4105 32.111 26.1797C30.9599 26.9489 30.0627 28.0421 29.5328 29.3212C29.003 30.6003 28.8644 32.0078 29.1345 33.3656C29.4046 34.7235 30.0713 35.9708 31.0503 36.9497C32.0292 37.9287 33.2765 38.5954 34.6344 38.8655C35.9922 39.1356 37.3997 38.997 38.6788 38.4672C39.9579 37.9373 41.0511 37.0401 41.8203 35.889C42.5895 34.7378 43 33.3845 43 32C42.9979 30.1441 42.2597 28.3649 40.9474 27.0526C39.6351 25.7403 37.8559 25.0021 36 25ZM33 37.1885V36.5C33.0004 36.1023 33.1586 35.721 33.4398 35.4398C33.721 35.1586 34.1023 35.0004 34.5 35H37.5C37.8977 35.0004 38.279 35.1586 38.5602 35.4398C38.8414 35.721 38.9996 36.1023 39 36.5V37.1885C38.0896 37.7201 37.0543 38.0002 36 38.0002C34.9457 38.0002 33.9104 37.7201 33 37.1885ZM39.996 36.463C39.986 35.8072 39.7188 35.1815 39.252 34.7208C38.7851 34.2601 38.1559 34.0012 37.5 34H34.5C33.8441 34.0012 33.2149 34.2601 32.748 34.7208C32.2812 35.1815 32.014 35.8072 32.004 36.463C31.0973 35.6534 30.4579 34.5874 30.1704 33.4063C29.883 32.2252 29.9611 30.9847 30.3943 29.8489C30.8276 28.7132 31.5956 27.7358 32.5967 27.0463C33.5978 26.3567 34.7847 25.9875 36.0003 25.9875C37.2158 25.9875 38.4027 26.3567 39.4038 27.0463C40.4049 27.7358 41.1729 28.7132 41.6062 29.8489C42.0395 30.9847 42.1175 32.2252 41.8301 33.4063C41.5426 34.5874 40.9027 35.6534 39.996 36.463Z" /></svg>'
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
    value: 'top'
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
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 38.5C64 38.7761 63.7879 39 63.5263 39H28.4737C28.2121 39 28 38.7761 28 38.5C28 38.2239 28.2121 38 28.4737 38H63.5263C63.7879 38 64 38.2239 64 38.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M54 41.5C54 41.7761 53.7921 42 53.5357 42H28.4643C28.2079 42 28 41.7761 28 41.5C28 41.2239 28.2079 41 28.4643 41H53.5357C53.7921 41 54 41.2239 54 41.5Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M34 45C34 45.5523 33.5523 46 33 46C32.4477 46 32 45.5523 32 45C32 44.4477 32.4477 44 33 44C33.5523 44 34 44.4477 34 45Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M42 45C42 45.5523 41.5523 46 41 46C40.4477 46 40 45.5523 40 45C40 44.4477 40.4477 44 41 44C41.5523 44 42 44.4477 42 45Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M30 45C30 45.5523 29.5523 46 29 46C28.4477 46 28 45.5523 28 45C28 44.4477 28.4477 44 29 44C29.5523 44 30 44.4477 30 45Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M38 45C38 45.5523 37.5523 46 37 46C36.4477 46 36 45.5523 36 45C36 44.4477 36.4477 44 37 44C37.5523 44 38 44.4477 38 45Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M54 30C54 30.5523 53.5523 31 53 31H29C28.4477 31 28 30.5523 28 30C28 29.4477 28.4477 29 29 29H53C53.5523 29 54 29.4477 54 30Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M40 34C40 34.5523 39.5523 35 39 35H29C28.4477 35 28 34.5523 28 34C28 33.4477 28.4477 33 29 33H39C39.5523 33 40 33.4477 40 34Z" /><path d="M16 31C15.5055 31 15.0222 31.1466 14.6111 31.4213C14.2 31.696 13.8795 32.0865 13.6903 32.5433C13.5011 33.0001 13.4516 33.5028 13.548 33.9877C13.6445 34.4727 13.8826 34.9181 14.2322 35.2678C14.5819 35.6174 15.0273 35.8555 15.5123 35.952C15.9972 36.0484 16.4999 35.9989 16.9567 35.8097C17.4135 35.6205 17.804 35.3 18.0787 34.8889C18.3534 34.4778 18.5 33.9945 18.5 33.5C18.5 32.837 18.2366 32.2011 17.7678 31.7322C17.2989 31.2634 16.663 31 16 31ZM16 35C15.7033 35 15.4133 34.912 15.1666 34.7472C14.92 34.5824 14.7277 34.3481 14.6142 34.074C14.5007 33.7999 14.4709 33.4983 14.5288 33.2074C14.5867 32.9164 14.7296 32.6491 14.9393 32.4393C15.1491 32.2296 15.4164 32.0867 15.7074 32.0288C15.9983 31.9709 16.2999 32.0006 16.574 32.1142C16.8481 32.2277 17.0824 32.42 17.2472 32.6666C17.412 32.9133 17.5 33.2033 17.5 33.5C17.4996 33.8977 17.3414 34.279 17.0602 34.5602C16.779 34.8414 16.3977 34.9996 16 35Z" /><path d="M16 28C14.6155 28 13.2622 28.4105 12.111 29.1797C10.9599 29.9489 10.0627 31.0421 9.53285 32.3212C9.00303 33.6003 8.86441 35.0078 9.13451 36.3656C9.4046 37.7235 10.0713 38.9708 11.0503 39.9497C12.0292 40.9287 13.2765 41.5954 14.6344 41.8655C15.9922 42.1356 17.3997 41.997 18.6788 41.4672C19.9579 40.9373 21.0511 40.0401 21.8203 38.889C22.5895 37.7378 23 36.3845 23 35C22.9979 33.1441 22.2597 31.3649 20.9474 30.0526C19.6351 28.7403 17.8559 28.0021 16 28ZM13 40.1885V39.5C13.0004 39.1023 13.1586 38.721 13.4398 38.4398C13.721 38.1586 14.1023 38.0004 14.5 38H17.5C17.8977 38.0004 18.279 38.1586 18.5602 38.4398C18.8414 38.721 18.9996 39.1023 19 39.5V40.1885C18.0896 40.7201 17.0543 41.0002 16 41.0002C14.9457 41.0002 13.9104 40.7201 13 40.1885ZM19.996 39.463C19.986 38.8072 19.7188 38.1815 19.252 37.7208C18.7851 37.2601 18.1559 37.0012 17.5 37H14.5C13.8441 37.0012 13.2149 37.2601 12.748 37.7208C12.2812 38.1815 12.014 38.8072 12.004 39.463C11.0973 38.6534 10.4579 37.5874 10.1704 36.4063C9.88297 35.2252 9.96105 33.9847 10.3943 32.8489C10.8276 31.7132 11.5956 30.7358 12.5967 30.0463C13.5978 29.3567 14.7847 28.9875 16.0003 28.9875C17.2158 28.9875 18.4027 29.3567 19.4038 30.0463C20.4049 30.7358 21.1729 31.7132 21.6062 32.8489C22.0395 33.9847 22.1175 35.2252 21.8301 36.4063C21.5426 37.5874 20.9027 38.6534 19.996 39.463Z" /></svg>'
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
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Utils_Helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Utils/Helpers */ "./blocks-config/utils/Helpers.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./presets */ "./src/blocks/team/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
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
    imgPosition,
    titleSpace,
    descSpace,
    prefixSpace,
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
    prefixFontStyle
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
      const new_img = Object(_Utils_Helpers__WEBPACK_IMPORTED_MODULE_15__["getImageSize"])(media.sizes);
      imageSizeOptions = new_img;
    }

    setAttributes({
      image: media
    });
  };

  const presetSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Presets', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_17__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_16__["default"],
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
    imageSizeOptions = Object(_Utils_Helpers__WEBPACK_IMPORTED_MODULE_15__["getImageSize"])(image.sizes);
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Layout', 'ultimate-addons-for-gutenberg')
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
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["Icon"], {
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
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'above',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["Icon"], {
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
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('None', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'tablet',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tablet', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tablet', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'mobile',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mobile', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mobile', 'ultimate-addons-for-gutenberg')
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
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'circle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Circle', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Circle', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'square',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Square', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Square', 'ultimate-addons-for-gutenberg')
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
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'middle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Middle', 'ultimate-addons-for-gutenberg'),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Middle', 'ultimate-addons-for-gutenberg')
      }]
    }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      options: imageSizeOptions,
      value: imgSize,
      onChange: value => setAttributes({
        imgSize: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: imgWidth,
      onChange: value => setAttributes({
        imgWidth: value
      }),
      min: 0,
      max: 500,
      displayUnit: false
    })));
  };

  const getSocialLinksPanelBody = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Social Links', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Social Links', 'ultimate-addons-for-gutenberg'),
      checked: socialEnable,
      onChange: () => setAttributes({
        socialEnable: !socialEnable
      })
    }), socialEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open Links in New Window', 'ultimate-addons-for-gutenberg'),
      checked: socialTarget,
      onChange: () => setAttributes({
        socialTarget: !socialTarget
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Twitter', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: twitterIcon,
      onChange: value => setAttributes({
        twitterIcon: value
      })
    }), twitterIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["TextControl"], {
      value: twitterLink,
      onChange: value => setAttributes({
        twitterLink: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter Twitter URL', 'ultimate-addons-for-gutenberg')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Facebook', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: fbIcon,
      onChange: value => setAttributes({
        fbIcon: value
      })
    }), fbIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["TextControl"], {
      value: fbLink,
      onChange: value => setAttributes({
        fbLink: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter Facebook URL', 'ultimate-addons-for-gutenberg')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('LinkedIn', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: linkedinIcon,
      onChange: value => setAttributes({
        linkedinIcon: value
      })
    }), linkedinIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["TextControl"], {
      value: linkedinLink,
      onChange: value => setAttributes({
        linkedinLink: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter LinkedIn URL', 'ultimate-addons-for-gutenberg')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pinterest', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: pinIcon,
      onChange: value => setAttributes({
        pinIcon: value
      })
    }), pinIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('URL', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__["TextControl"], {
      value: pinLink,
      onChange: value => setAttributes({
        pinLink: value
      }),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter Pinterest URL', 'ultimate-addons-for-gutenberg')
    }))));
  };

  const getTitlePanelColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: titleColor ? titleColor : '',
      onColorChange: value => setAttributes({
        titleColor: value
      })
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
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: titleSpace,
      onChange: value => setAttributes({
        titleSpace: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }));
  };

  const getPrefixPanelColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Prefix', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: prefixColor ? prefixColor : '',
      onColorChange: value => setAttributes({
        prefixColor: value
      })
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
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: prefixSpace,
      onChange: value => setAttributes({
        prefixSpace: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }));
  };

  const getDescriptionPanelColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Description', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: descColor ? descColor : '',
      onColorChange: value => setAttributes({
        descColor: value
      })
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
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: descSpace,
      onChange: value => setAttributes({
        descSpace: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }));
  };

  const getSocialIconPanelColorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Social Icons', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      fontSizeType: {
        value: socialFontSizeType,
        label: 'socialFontSizeType'
      },
      fontSize: {
        value: socialFontSize,
        label: 'socialFontSize'
      },
      fontSizeMobile: {
        value: socialFontSizeMobile,
        label: 'socialFontSizeMobile'
      },
      fontSizeTablet: {
        value: socialFontSizeTablet,
        label: 'socialFontSizeTablet'
      },
      disableFontFamily: true,
      disableLineHeight: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inter Icon Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: socialSpace,
      onChange: value => setAttributes({
        socialSpace: value
      }),
      min: 0,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: socialColor ? socialColor : '',
        onColorChange: value => setAttributes({
          socialColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: socialHoverColor ? socialHoverColor : '',
        onColorChange: value => setAttributes({
          socialHoverColor: value
        })
      }),
      disableBottomSeparator: true
    }));
  };

  const getSpacingPanelBody = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, presetSettings(), getImagePanelBody(), getSocialLinksPanelBody()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, getTitlePanelColorSettings(), getPrefixPanelColorSettings(), getDescriptionPanelColorSettings(), getSocialIconPanelColorSettings(), image && getSpacingPanelBody()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
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
    onChange: props.onChange,
    isMulti: props.isMulti || false,
    noSelectedPlaceholder: props.noSelectedPlaceholder || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Select Icon', 'ultimate-addons-for-gutenberg')
  }), props.help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "uag-control-help-notice"
  }, props.help));
};

/* harmony default export */ __webpack_exports__["default"] = (UAGIconPicker);

/***/ }),

/***/ "./src/components/image/editor.lazy.scss":
/*!***********************************************!*\
  !*** ./src/components/image/editor.lazy.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/image/editor.lazy.scss");

            

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
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/image/editor.lazy.scss");






const UAGImage = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_4__["default"].unuse();
    };
  }, []);
  const {
    onSelectImage,
    backgroundImage,
    onRemoveImage,
    showVideoInput,
    label
  } = props;

  let labelText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Image', 'ultimate-addons-for-gutenberg');

  let selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Image', 'ultimate-addons-for-gutenberg');

  let replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace Image', 'ultimate-addons-for-gutenberg');

  let removeImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Image', 'ultimate-addons-for-gutenberg');

  let allowedTypes = ['image'];

  if (showVideoInput) {
    labelText = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Video', 'ultimate-addons-for-gutenberg');
    selectImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Select Video', 'ultimate-addons-for-gutenberg');
    replaceImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Replace Video', 'ultimate-addons-for-gutenberg');
    removeImageLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Remove Video', 'ultimate-addons-for-gutenberg');
    allowedTypes = ['video'];
  }

  labelText = label ? label : labelText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    className: "editor-bg-image-control",
    id: `uagb-option-selector-${label}`,
    label: labelText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "uagb-bg-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    title: selectImageLabel,
    onSelect: onSelectImage,
    allowedTypes: allowedTypes,
    value: backgroundImage,
    render: _ref => {
      let {
        open
      } = _ref;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSecondary: true,
        onClick: open
      }, !(backgroundImage !== null && backgroundImage !== void 0 && backgroundImage.url) ? selectImageLabel : replaceImageLabel);
    }
  }), (backgroundImage === null || backgroundImage === void 0 ? void 0 : backgroundImage.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "uagb-rm-btn",
    onClick: onRemoveImage,
    isLink: true,
    isDestructive: true
  }, removeImageLabel), props.help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "uag-control-help-notice"
  }, props.help)));
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