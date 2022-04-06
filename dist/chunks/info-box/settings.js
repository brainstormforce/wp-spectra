(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/info-box/settings"],{

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

/***/ "./src/blocks/info-box/presets.js":
/*!****************************************!*\
  !*** ./src/blocks/info-box/presets.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/info-box/attributes.js");



const presets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'icon',
    value: 'fa fa-check-circle'
  }, {
    label: 'headingAlign',
    value: 'center'
  }, {
    label: 'ctaType',
    value: 'button'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="26" y="52" width="20" height="6" rx="2" /><path d="M6 38.5C6 38.2239 6.22386 38 6.5 38H65.5C65.7761 38 66 38.2239 66 38.5C66 38.7761 65.7761 39 65.5 39H6.5C6.22386 39 6 38.7761 6 38.5Z" /><path d="M6 42.5C6 42.2239 6.22386 42 6.5 42H65.5C65.7761 42 66 42.2239 66 42.5C66 42.7761 65.7761 43 65.5 43H6.5C6.22386 43 6 42.7761 6 42.5Z" /><path d="M14 46.5C14 46.2239 14.2239 46 14.5 46H57.5C57.7761 46 58 46.2239 58 46.5C58 46.7761 57.7761 47 57.5 47H14.5C14.2239 47 14 46.7761 14 46.5Z" /><path d="M14 31C14 30.4477 14.4477 30 15 30H57C57.5523 30 58 30.4477 58 31C58 31.5523 57.5523 32 57 32H15C14.4477 32 14 31.5523 14 31Z" /><rect x="31" y="14" width="10" height="10" rx="2" /></svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'icon',
    value: 'fa fa-check-circle'
  }, {
    label: 'headingAlign',
    value: 'left'
  }, {
    label: 'ctaType',
    value: 'button'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="52" width="20" height="6" rx="2"/><path d="M6 31C6 30.4477 6.44772 30 7 30H49C49.5523 30 50 30.4477 50 31C50 31.5523 49.5523 32 49 32H7C6.44771 32 6 31.5523 6 31Z" /><path d="M6 16C6 14.8954 6.89543 14 8 14H14C15.1046 14 16 14.8954 16 16V22C16 23.1046 15.1046 24 14 24H8C6.89543 24 6 23.1046 6 22V16Z" /><path d="M6 38.5C6 38.2239 6.22386 38 6.5 38H65.5C65.7761 38 66 38.2239 66 38.5C66 38.7761 65.7761 39 65.5 39H6.5C6.22386 39 6 38.7761 6 38.5Z" /><path d="M6 42.5C6 42.2239 6.22386 42 6.5 42H65.5C65.7761 42 66 42.2239 66 42.5V42.5C66 42.7761 65.7761 43 65.5 43H6.5C6.22386 43 6 42.7761 6 42.5V42.5Z" /><path d="M6 46.5C6 46.2239 6.22386 46 6.5 46H49.5C49.7761 46 50 46.2239 50 46.5V46.5C50 46.7761 49.7761 47 49.5 47H6.5C6.22386 47 6 46.7761 6 46.5V46.5Z" /></svg>'
}, {
  value: 'preset-3',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 3', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'icon',
    value: 'fa fa-check-circle'
  }, {
    label: 'headingAlign',
    value: 'left'
  }, {
    label: 'ctaType',
    value: 'none'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 37C6 36.4477 6.44772 36 7 36H49C49.5523 36 50 36.4477 50 37C50 37.5523 49.5523 38 49 38H7C6.44771 38 6 37.5523 6 37Z" /><path d="M6 22C6 20.8954 6.89543 20 8 20H14C15.1046 20 16 20.8954 16 22V28C16 29.1046 15.1046 30 14 30H8C6.89543 30 6 29.1046 6 28V22Z" /><path d="M6 44.5C6 44.2239 6.22386 44 6.5 44H65.5C65.7761 44 66 44.2239 66 44.5C66 44.7761 65.7761 45 65.5 45H6.5C6.22386 45 6 44.7761 6 44.5Z" /><path d="M6 48.5C6 48.2239 6.22386 48 6.5 48H65.5C65.7761 48 66 48.2239 66 48.5V48.5C66 48.7761 65.7761 49 65.5 49H6.5C6.22386 49 6 48.7761 6 48.5V48.5Z" /><path d="M6 52.5C6 52.2239 6.22386 52 6.5 52H49.5C49.7761 52 50 52.2239 50 52.5C50 52.7761 49.7761 53 49.5 53H6.5C6.22386 53 6 52.7761 6 52.5Z" /></svg>'
}, {
  value: 'preset-4',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 4', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'icon',
    value: ''
  }, {
    label: 'headingAlign',
    value: 'center'
  }, {
    label: 'ctaType',
    value: 'text'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="26" y="44" width="20" height="6" rx="2" /><path d="M6 30.5C6 30.2239 6.22386 30 6.5 30H65.5C65.7761 30 66 30.2239 66 30.5C66 30.7761 65.7761 31 65.5 31H6.5C6.22386 31 6 30.7761 6 30.5Z" /><path d="M6 34.5C6 34.2239 6.22386 34 6.5 34H65.5C65.7761 34 66 34.2239 66 34.5C66 34.7761 65.7761 35 65.5 35H6.5C6.22386 35 6 34.7761 6 34.5Z" /><path d="M14 38.5C14 38.2239 14.2239 38 14.5 38H57.5C57.7761 38 58 38.2239 58 38.5C58 38.7761 57.7761 39 57.5 39H14.5C14.2239 39 14 38.7761 14 38.5Z" /><path d="M14 23C14 22.4477 14.4477 22 15 22H57C57.5523 22 58 22.4477 58 23C58 23.5523 57.5523 24 57 24H15C14.4477 24 14 23.5523 14 23Z" /></svg>'
}, {
  value: 'preset-5',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 5', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'icon',
    value: ''
  }, {
    label: 'headingAlign',
    value: 'left'
  }, {
    label: 'ctaType',
    value: 'text'
  }],
  icon: '<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="44" width="20" height="6" rx="2" /><path d="M6 30.5C6 30.2239 6.22386 30 6.5 30H65.5C65.7761 30 66 30.2239 66 30.5C66 30.7761 65.7761 31 65.5 31H6.5C6.22386 31 6 30.7761 6 30.5Z" /><path d="M6 34.5C6 34.2239 6.22386 34 6.5 34H65.5C65.7761 34 66 34.2239 66 34.5C66 34.7761 65.7761 35 65.5 35H6.5C6.22386 35 6 34.7761 6 34.5Z" /><path d="M6 38.5C6 38.2239 6.22386 38 6.5 38H49.5C49.7761 38 50 38.2239 50 38.5C50 38.7761 49.7761 39 49.5 39H6.5C6.22386 39 6 38.7761 6 38.5Z" /><path d="M6 23C6 22.4477 6.44772 22 7 22H49C49.5523 22 50 22.4477 50 23C50 23.5523 49.5523 24 49 24H7C6.44771 24 6 23.5523 6 23Z" /></svg>'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(`uag_info_box_presets`, presets));

/***/ }),

/***/ "./src/blocks/info-box/settings.js":
/*!*****************************************!*\
  !*** ./src/blocks/info-box/settings.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/icon-picker */ "./src/components/icon-picker/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_border__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/border */ "./src/components/border/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/image */ "./src/components/image/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./presets */ "./src/blocks/info-box/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Utils_Helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @Utils/Helpers */ "./blocks-config/utils/Helpers.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
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
  } = props; // Setup the attributes.

  const {
    headingAlign,
    headingColor,
    subHeadingColor,
    prefixColor,
    prefixFontSize,
    prefixFontSizeType,
    prefixFontSizeTablet,
    prefixFontSizeMobile,
    prefixFontFamily,
    prefixFontWeight,
    prefixFontStyle,
    prefixLineHeightType,
    prefixLineHeight,
    prefixLineHeightTablet,
    prefixLineHeightMobile,
    prefixTransform,
    prefixDecoration,
    prefixLoadGoogleFonts,
    headingTag,
    headFontSize,
    headFontSizeType,
    headFontSizeTablet,
    headFontSizeMobile,
    headFontFamily,
    headFontWeight,
    headFontStyle,
    headLineHeightType,
    headLineHeight,
    headLineHeightTablet,
    headLineHeightMobile,
    headLoadGoogleFonts,
    subHeadFontSize,
    subHeadFontSizeType,
    subHeadFontSizeTablet,
    subHeadFontSizeMobile,
    subHeadFontFamily,
    subHeadFontWeight,
    subHeadFontStyle,
    subHeadLineHeightType,
    subHeadLineHeight,
    subHeadLineHeightTablet,
    subHeadLineHeightMobile,
    subHeadTransform,
    subHeadDecoration,
    subHeadLoadGoogleFonts,
    separatorWidthType,
    icon,
    iconColor,
    iconSize,
    iconSizeType,
    iconimgPosition,
    iconHover,
    iconimgBorderRadius,
    iconimgBorderRadiusUnit,
    source_type,
    sourceAlign,
    seperatorPosition,
    seperatorStyle,
    seperatorWidth,
    seperatorColor,
    seperatorThickness,
    thicknessUnit,
    ctaType,
    ctaText,
    ctaLink,
    ctaTarget,
    ctaIcon,
    ctaIconPosition,
    ctaIconSpace,
    ctaIconSpaceType,
    ctaLinkColor,
    ctaFontSize,
    ctaFontSizeType,
    ctaFontSizeMobile,
    ctaFontSizeTablet,
    ctaTransform,
    ctaDecoration,
    ctaFontFamily,
    ctaFontWeight,
    ctaFontStyle,
    ctaLoadGoogleFonts,
    ctaBtnLinkColor,
    ctaLinkHoverColor,
    ctaBgHoverColor,
    ctaBgColor,
    paddingBtnUnit,
    mobilePaddingBtnUnit,
    tabletPaddingBtnUnit,
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
    ctaBorderStyle,
    ctaBorderColor,
    ctaBorderhoverColor,
    ctaBorderWidth,
    ctaBorderRadius,
    iconLeftMargin,
    iconRightMargin,
    iconTopMargin,
    iconBottomMargin,
    iconMarginTopTablet,
    iconMarginRightTablet,
    iconMarginBottomTablet,
    iconMarginLeftTablet,
    iconMarginTopMobile,
    iconMarginRightMobile,
    iconMarginBottomMobile,
    iconMarginLeftMobile,
    iconMarginUnit,
    iconMobileMarginUnit,
    iconTabletMarginUnit,
    iconImage,
    imageSize,
    imageWidth,
    imageWidthMobile,
    imageWidthTablet,
    imageWidthType,
    imageWidthUnit,
    stack,
    showPrefix,
    showTitle,
    showDesc,
    spacingLink,
    paddingspacingLink,
    headTransform,
    headDecoration,
    prefixTopMargin,
    prefixRightMargin,
    prefixSpace,
    prefixLeftMargin,
    prefixMarginTopTablet,
    prefixMarginRightTablet,
    prefixTabletSpace,
    prefixMarginLeftTablet,
    prefixMarginTopMobile,
    prefixMarginRightMobile,
    prefixMobileSpace,
    prefixMarginLeftMobile,
    prefixSpaceUnit,
    prefixMobileMarginUnit,
    prefixTabletMarginUnit,
    spacingPrefixLink,
    headTopMargin,
    headRightMargin,
    headSpace,
    headLeftMargin,
    headMarginTopTablet,
    headMarginRightTablet,
    headTabletSpace,
    headMarginLeftTablet,
    headMarginTopMobile,
    headMarginRightMobile,
    headMobileSpace,
    headMarginLeftMobile,
    headSpaceUnit,
    headMobilePaddingUnit,
    headTabletPaddingUnit,
    spacingHeadLink,
    separatorTopMargin,
    separatorRightMargin,
    seperatorSpace,
    separatorLeftMargin,
    separatorMarginTopTablet,
    separatorMarginRightTablet,
    seperatorTabletSpace,
    separatorMarginLeftTablet,
    separatorMarginTopMobile,
    separatorMarginRightMobile,
    seperatorMobileSpace,
    separatorMarginLeftMobile,
    seperatorSpaceUnit,
    separatorMobileMarginUnit,
    separatorTabletMarginUnit,
    spacingSeparatorLink,
    subHeadTopMargin,
    subHeadRightMargin,
    subHeadSpace,
    subHeadLeftMargin,
    subHeadMarginTopTablet,
    subHeadMarginRightTablet,
    subHeadTabletSpace,
    subHeadMarginLeftTablet,
    subHeadMarginTopMobile,
    subHeadMarginRightMobile,
    subHeadMobileSpace,
    subHeadMarginLeftMobile,
    subHeadSpaceUnit,
    subHeadMobileMarginUnit,
    subHeadTabletMarginUnit,
    spacingSubheadLink
  } = attributes;
  /*
   * Event to set Image as while adding.
   */

  const onSelectImage = media => {
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
      const new_img = Object(_Utils_Helpers__WEBPACK_IMPORTED_MODULE_19__["getImageSize"])(media.sizes);
      imageSizeOptions = new_img;
    }

    setAttributes({
      iconImage: media
    });
  };
  /*
   * Event to set Image as null while removing.
   */


  const onRemoveImage = () => {
    setAttributes({
      iconImage: ''
    });
  };

  if (iconImage && iconImage.sizes) {
    imageSizeOptions = Object(_Utils_Helpers__WEBPACK_IMPORTED_MODULE_19__["getImageSize"])(iconImage.sizes);
  }

  let loadPrefixGoogleFonts;
  let loadSubHeadGoogleFonts;
  let loadCtaGoogleFonts;
  let loadHeadGoogleFonts;

  if (prefixLoadGoogleFonts === true) {
    const prefixconfig = {
      google: {
        families: [prefixFontFamily + (prefixFontWeight ? ':' + prefixFontWeight : '')]
      }
    };
    loadPrefixGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: prefixconfig
    });
  }

  if (headLoadGoogleFonts === true) {
    const headconfig = {
      google: {
        families: [headFontFamily + (headFontWeight ? ':' + headFontWeight : '')]
      }
    };
    loadHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: headconfig
    });
  }

  if (subHeadLoadGoogleFonts === true) {
    const subHeadconfig = {
      google: {
        families: [subHeadFontFamily + (subHeadFontWeight ? ':' + subHeadFontWeight : '')]
      }
    };
    loadSubHeadGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: subHeadconfig
    });
  }

  if (subHeadLoadGoogleFonts === true) {
    const ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      config: ctaconfig
    });
  }

  const blockControls = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__["BlockControls"], {
      key: "controls"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__["AlignmentToolbar"], {
      value: headingAlign,
      onChange: value => setAttributes({
        headingAlign: value
      })
    }));
  }; // Global Controls.


  const imageIconPanel = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image/Icon', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Position', 'ultimate-addons-for-gutenberg'),
      value: iconimgPosition,
      onChange: value => setAttributes({
        iconimgPosition: value
      }),
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
    }), (iconimgPosition === 'left' || iconimgPosition === 'right') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["SelectControl"], {
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
      onChange: value => setAttributes({
        stack: value
      })
    }), iconimgPosition && iconimgPosition !== 'above-title' && iconimgPosition !== 'below-title' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Vertical Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: sourceAlign,
        label: 'sourceAlign'
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'middle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Middle', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Source', 'ultimate-addons-for-gutenberg'),
      data: {
        value: source_type,
        label: 'source_type'
      },
      options: [{
        value: 'icon',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'image',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image', 'ultimate-addons-for-gutenberg')
      }]
    }), source_type === 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon', 'ultimate-addons-for-gutenberg'),
      value: icon,
      onChange: value => setAttributes({
        icon: value
      })
    })), source_type === 'image' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_image__WEBPACK_IMPORTED_MODULE_13__["default"], {
      onSelectImage: onSelectImage,
      backgroundImage: iconImage,
      onRemoveImage: onRemoveImage
    }), iconImage && iconImage.url !== 'null' && iconImage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Size', 'ultimate-addons-for-gutenberg'),
      options: imageSizeOptions,
      value: imageSize,
      onChange: value => setAttributes({
        imageSize: value
      })
    })));
  }; // Typography settings.


  const typographySettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingAlign,
        label: 'headingAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_21__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_21__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_21__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["ToggleControl"], {
      checked: showPrefix,
      onChange: () => setAttributes({
        showPrefix: !showPrefix
      }),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Prefix', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["ToggleControl"], {
      checked: showTitle,
      onChange: () => setAttributes({
        showTitle: !showTitle
      }),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Title', 'ultimate-addons-for-gutenberg')
    }), showTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_14__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Title Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingTag,
        label: 'headingTag'
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
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('P')
      }]
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["ToggleControl"], {
      checked: showDesc,
      onChange: () => setAttributes({
        showDesc: !showDesc
      }),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable Description', 'ultimate-addons-for-gutenberg')
    }));
  }; // Separator settings.


  const seperatorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Separator', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style'),
      value: seperatorStyle,
      onChange: value => setAttributes({
        seperatorStyle: value
      }),
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
    }), 'none' !== seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Position', 'ultimate-addons-for-gutenberg'),
      value: seperatorPosition,
      onChange: value => setAttributes({
        seperatorPosition: value
      }),
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
    }));
  };

  const ctaSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Call To Action', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type', 'ultimate-addons-for-gutenberg'),
      value: ctaType,
      onChange: value => setAttributes({
        ctaType: value
      }),
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
    }), (ctaType === 'text' || ctaType === 'button') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text', 'ultimate-addons-for-gutenberg'),
      value: ctaText,
      onChange: value => setAttributes({
        ctaText: value
      })
    })), ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link', 'ultimate-addons-for-gutenberg'),
      value: ctaLink,
      onChange: value => setAttributes({
        ctaLink: value
      })
    })), ctaType !== 'all' && ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_icon_picker__WEBPACK_IMPORTED_MODULE_0__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Icon', 'ultimate-addons-for-gutenberg'),
      value: ctaIcon,
      onChange: value => setAttributes({
        ctaIcon: value
      })
    })), ctaIcon !== '' && ctaType !== 'all' && ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Position', 'ultimate-addons-for-gutenberg'),
      value: ctaIconPosition,
      onChange: value => setAttributes({
        ctaIconPosition: value
      }),
      options: [{
        value: 'before',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Before Text', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'after',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('After Text', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: ctaIconSpace,
      onChange: value => setAttributes({
        ctaIconSpace: value
      }),
      min: 0,
      max: 50,
      unit: {
        value: ctaIconSpaceType,
        label: 'ctaIconSpaceType'
      }
    })), ctaType !== 'none' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["ToggleControl"], {
      checked: ctaTarget,
      onChange: () => setAttributes({
        ctaTarget: !ctaTarget
      }),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Open in new window', 'ultimate-addons-for-gutenberg')
    }));
  };

  const styleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, '' !== icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: "Icon/Image",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, ' ', source_type === 'icon' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: iconColor ? iconColor : '',
        onColorChange: value => setAttributes({
          iconColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: iconHover ? iconHover : '',
        onColorChange: value => setAttributes({
          iconHover: value
        })
      }),
      disableBottomSeparator: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconSize,
      onChange: value => setAttributes({
        iconSize: value
      }),
      min: 0,
      max: 300,
      limitMin: {
        'px': 0,
        'em': 0
      } // eslint-disable-line quote-props
      ,
      limitMax: {
        'px': 500,
        'em': 100
      } // eslint-disable-line quote-props
      ,
      unit: {
        value: iconSizeType,
        label: 'iconSizeType'
      }
    })), source_type === 'image' && iconImage && iconImage.url !== 'null' && iconImage.url !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_20__["ToggleControl"], {
      checked: imageWidthType,
      onChange: () => setAttributes({
        imageWidthType: !imageWidthType
      }),
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Custom Width', 'ultimate-addons-for-gutenberg'),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Turn this off to inherit the natural width of Image.', 'ultimate-addons-for-gutenberg')
    }), imageWidthType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_12__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: imageWidth,
          label: 'imageWidth'
        },
        tablet: {
          value: imageWidthTablet,
          label: 'imageWidthTablet'
        },
        mobile: {
          value: imageWidthMobile,
          label: 'imageWidthMobile'
        }
      },
      min: 0,
      max: 500,
      unit: {
        value: imageWidthUnit,
        label: 'imageWidthUnit'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Rounded Corners (px)', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: iconimgBorderRadius,
      onChange: value => setAttributes({
        iconimgBorderRadius: value
      }),
      min: 0,
      max: 100,
      unit: {
        value: iconimgBorderRadiusUnit,
        label: 'iconimgBorderRadiusUnit'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: iconTopMargin,
        label: 'iconTopMargin'
      },
      valueRight: {
        value: iconRightMargin,
        label: 'iconRightMargin'
      },
      valueBottom: {
        value: iconBottomMargin,
        label: 'iconBottomMargin'
      },
      valueLeft: {
        value: iconLeftMargin,
        label: 'iconLeftMargin'
      },
      valueTopTablet: {
        value: iconMarginTopTablet,
        label: 'iconMarginTopTablet'
      },
      valueRightTablet: {
        value: iconMarginRightTablet,
        label: 'iconMarginRightTablet'
      },
      valueBottomTablet: {
        value: iconMarginBottomTablet,
        label: 'iconMarginBottomTablet'
      },
      valueLeftTablet: {
        value: iconMarginLeftTablet,
        label: 'iconMarginLeftTablet'
      },
      valueTopMobile: {
        value: iconMarginTopMobile,
        label: 'iconMarginTopMobile'
      },
      valueRightMobile: {
        value: iconMarginRightMobile,
        label: 'iconMarginRightMobile'
      },
      valueBottomMobile: {
        value: iconMarginBottomMobile,
        label: 'iconMarginBottomMobile'
      },
      valueLeftMobile: {
        value: iconMarginLeftMobile,
        label: 'iconMarginLeftMobile'
      },
      unit: {
        value: iconMarginUnit,
        label: 'iconMarginUnit'
      },
      mUnit: {
        value: iconMobileMarginUnit,
        label: 'iconMobileMarginUnit'
      },
      tUnit: {
        value: iconTabletMarginUnit,
        label: 'iconTabletMarginUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLink,
        label: 'spacingLink'
      }
    })))), showPrefix && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: "Prefix",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: prefixColor ? prefixColor : '',
      onColorChange: value => setAttributes({
        prefixColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
        value: prefixTransform,
        label: 'prefixTransform'
      },
      decoration: {
        value: prefixDecoration,
        label: 'prefixDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: prefixTopMargin,
        label: 'prefixTopMargin'
      },
      valueRight: {
        value: prefixRightMargin,
        label: 'prefixRightMargin'
      },
      valueBottom: {
        value: prefixSpace,
        label: 'prefixSpace'
      },
      valueLeft: {
        value: prefixLeftMargin,
        label: 'prefixLeftMargin'
      },
      valueTopTablet: {
        value: prefixMarginTopTablet,
        label: 'prefixMarginTopTablet'
      },
      valueRightTablet: {
        value: prefixMarginRightTablet,
        label: 'prefixMarginRightTablet'
      },
      valueBottomTablet: {
        value: prefixTabletSpace,
        label: 'prefixTabletSpace'
      },
      valueLeftTablet: {
        value: prefixMarginLeftTablet,
        label: 'prefixMarginLeftTablet'
      },
      valueTopMobile: {
        value: prefixMarginTopMobile,
        label: 'prefixMarginTopMobile'
      },
      valueRightMobile: {
        value: prefixMarginRightMobile,
        label: 'prefixMarginRightMobile'
      },
      valueBottomMobile: {
        value: prefixMobileSpace,
        label: 'prefixMobileSpace'
      },
      valueLeftMobile: {
        value: prefixMarginLeftMobile,
        label: 'prefixMarginLeftMobile'
      },
      unit: {
        value: prefixSpaceUnit,
        label: 'prefixSpaceUnit'
      },
      mUnit: {
        value: prefixMobileMarginUnit,
        label: 'prefixMobileMarginUnit'
      },
      tUnit: {
        value: prefixTabletMarginUnit,
        label: 'prefixTabletMarginUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingPrefixLink,
        label: 'spacingPrefixLink'
      }
    })))), showTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: "Title",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: headingColor ? headingColor : '',
      onColorChange: value => setAttributes({
        headingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      fontStyle: {
        value: headFontStyle,
        label: 'headFontStyle'
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
        value: headTransform,
        label: 'headTransform'
      },
      decoration: {
        value: headDecoration,
        label: 'headDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: headTopMargin,
        label: 'headTopMargin'
      },
      valueRight: {
        value: headRightMargin,
        label: 'headRightMargin'
      },
      valueBottom: {
        value: headSpace,
        label: 'headSpace'
      },
      valueLeft: {
        value: headLeftMargin,
        label: 'headLeftMargin'
      },
      valueTopTablet: {
        value: headMarginTopTablet,
        label: 'headMarginTopTablet'
      },
      valueRightTablet: {
        value: headMarginRightTablet,
        label: 'headMarginRightTablet'
      },
      valueBottomTablet: {
        value: headTabletSpace,
        label: 'headTabletSpace'
      },
      valueLeftTablet: {
        value: headMarginLeftTablet,
        label: 'headMarginLeftTablet'
      },
      valueTopMobile: {
        value: headMarginTopMobile,
        label: 'headMarginTopMobile'
      },
      valueRightMobile: {
        value: headMarginRightMobile,
        label: 'headMarginRightMobile'
      },
      valueBottomMobile: {
        value: headMobileSpace,
        label: 'headMobileSpace'
      },
      valueLeftMobile: {
        value: headMarginLeftMobile,
        label: 'headMarginLeftMobile'
      },
      unit: {
        value: headSpaceUnit,
        label: 'headSpaceUnit'
      },
      mUnit: {
        value: headMobilePaddingUnit,
        label: 'headMobilePaddingUnit'
      },
      tUnit: {
        value: headTabletPaddingUnit,
        label: 'headTabletPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingHeadLink,
        label: 'spacingHeadLink'
      }
    }))), 'none' !== seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: "Separator",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: seperatorWidth,
      onChange: value => setAttributes({
        seperatorWidth: value
      }),
      min: 0,
      max: '%' === separatorWidthType ? 100 : 500,
      unit: {
        value: separatorWidthType,
        label: 'separatorWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Thickness', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: seperatorThickness,
      onChange: value => setAttributes({
        seperatorThickness: value
      }),
      min: 0,
      max: 10,
      unit: {
        value: thicknessUnit,
        label: 'thicknessUnit'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: seperatorColor ? seperatorColor : '',
      onColorChange: value => setAttributes({
        seperatorColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: separatorTopMargin,
        label: 'separatorTopMargin'
      },
      valueRight: {
        value: separatorRightMargin,
        label: 'separatorRightMargin'
      },
      valueBottom: {
        value: seperatorSpace,
        label: 'seperatorSpace'
      },
      valueLeft: {
        value: separatorLeftMargin,
        label: 'separatorLeftMargin'
      },
      valueTopTablet: {
        value: separatorMarginTopTablet,
        label: 'separatorMarginTopTablet'
      },
      valueRightTablet: {
        value: separatorMarginRightTablet,
        label: 'separatorMarginRightTablet'
      },
      valueBottomTablet: {
        value: seperatorTabletSpace,
        label: 'seperatorTabletSpace'
      },
      valueLeftTablet: {
        value: separatorMarginLeftTablet,
        label: 'separatorMarginLeftTablet'
      },
      valueTopMobile: {
        value: separatorMarginTopMobile,
        label: 'separatorMarginTopMobile'
      },
      valueRightMobile: {
        value: separatorMarginRightMobile,
        label: 'separatorMarginRightMobile'
      },
      valueBottomMobile: {
        value: seperatorMobileSpace,
        label: 'seperatorMobileSpace'
      },
      valueLeftMobile: {
        value: separatorMarginLeftMobile,
        label: 'separatorMarginLeftMobile'
      },
      unit: {
        value: seperatorSpaceUnit,
        label: 'seperatorSpaceUnit'
      },
      mUnit: {
        value: separatorMobileMarginUnit,
        label: 'separatorMobileMarginUnit'
      },
      tUnit: {
        value: separatorTabletMarginUnit,
        label: 'separatorTabletMarginUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingSeparatorLink,
        label: 'spacingSeparatorLink'
      }
    }))), showDesc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: "Description",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: subHeadingColor ? subHeadingColor : '',
      onColorChange: value => setAttributes({
        subHeadingColor: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      fontStyle: {
        value: subHeadFontStyle,
        label: 'subHeadFontStyle'
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
        value: subHeadTransform,
        label: 'subHeadTransform'
      },
      decoration: {
        value: subHeadDecoration,
        label: 'subHeadDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Margin', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: subHeadTopMargin,
        label: 'subHeadTopMargin'
      },
      valueRight: {
        value: subHeadRightMargin,
        label: 'subHeadRightMargin'
      },
      valueBottom: {
        value: subHeadSpace,
        label: 'subHeadSpace'
      },
      valueLeft: {
        value: subHeadLeftMargin,
        label: 'subHeadLeftMargin'
      },
      valueTopTablet: {
        value: subHeadMarginTopTablet,
        label: 'subHeadMarginTopTablet'
      },
      valueRightTablet: {
        value: subHeadMarginRightTablet,
        label: 'subHeadMarginRightTablet'
      },
      valueBottomTablet: {
        value: subHeadTabletSpace,
        label: 'subHeadTabletSpace'
      },
      valueLeftTablet: {
        value: subHeadMarginLeftTablet,
        label: 'subHeadMarginLeftTablet'
      },
      valueTopMobile: {
        value: subHeadMarginTopMobile,
        label: 'subHeadMarginTopMobile'
      },
      valueRightMobile: {
        value: subHeadMarginRightMobile,
        label: 'subHeadMarginRightMobile'
      },
      valueBottomMobile: {
        value: subHeadMobileSpace,
        label: 'subHeadMobileSpace'
      },
      valueLeftMobile: {
        value: subHeadMarginLeftMobile,
        label: 'subHeadMarginLeftMobile'
      },
      unit: {
        value: subHeadSpaceUnit,
        label: 'subHeadSpaceUnit'
      },
      mUnit: {
        value: subHeadMobileMarginUnit,
        label: 'subHeadMobileMarginUnit'
      },
      tUnit: {
        value: subHeadTabletMarginUnit,
        label: 'subHeadTabletMarginUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingSubheadLink,
        label: 'spacingSubheadLink'
      }
    })))), 'none' !== ctaType && 'all' !== ctaType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: "Call to Action",
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, ctaType === 'text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaLinkColor ? ctaLinkColor : '',
        onColorChange: value => setAttributes({
          ctaLinkColor: value
        })
      }),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaLinkHoverColor ? ctaLinkHoverColor : '',
        onColorChange: value => setAttributes({
          ctaLinkHoverColor: value
        })
      })
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
      fontStyle: {
        value: ctaFontStyle,
        label: 'ctaFontStyle'
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
        value: ctaTransform,
        label: 'ctaTransform'
      },
      decoration: {
        value: ctaDecoration,
        label: 'ctaDecoration'
      },
      disableLineHeight: true
    }), ctaType === 'button' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaBtnLinkColor ? ctaBtnLinkColor : '',
        onColorChange: value => setAttributes({
          ctaBtnLinkColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaBgColor ? ctaBgColor : '',
        onColorChange: value => setAttributes({
          ctaBgColor: value
        })
      })),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaLinkHoverColor ? ctaLinkHoverColor : '',
        onColorChange: value => setAttributes({
          ctaLinkHoverColor: value
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaBgHoverColor ? ctaBgHoverColor : '',
        onColorChange: value => setAttributes({
          ctaBgHoverColor: value
        })
      }))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Padding', 'ultimate-addons-for-gutenberg'),
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
        value: paddingspacingLink,
        label: 'paddingspacingLink'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_border__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: ctaBorderStyle,
        label: 'ctaBorderStyle',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg')
      },
      borderWidth: {
        value: ctaBorderWidth,
        label: 'ctaBorderWidth',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Width', 'ultimate-addons-for-gutenberg')
      },
      borderRadius: {
        value: ctaBorderRadius,
        label: 'ctaBorderRadius',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Radius', 'ultimate-addons-for-gutenberg')
      },
      borderColor: {
        value: ctaBorderColor,
        label: 'ctaBorderColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg')
      },
      borderHoverColor: {
        value: ctaBorderhoverColor,
        label: 'ctaBorderhoverColor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover Color', 'ultimate-addons-for-gutenberg')
      },
      disableBottomSeparator: true
    })))));
  };

  const presetSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_22__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Presets', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_17__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_16__["default"],
      presetInputType: "radioImage"
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, (iconimgPosition === 'above-title' || iconimgPosition === 'below-title') && blockControls(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_18__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["UAGTabs"].general, presetSettings(), imageIconPanel(), typographySettings(), seperatorSettings(), ctaSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["UAGTabs"].style, styleSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_9__["UAGTabs"].advance, {
    parentProps: props
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_3__["default"])()
  }, loadPrefixGoogleFonts, loadSubHeadGoogleFonts, loadCtaGoogleFonts, loadHeadGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Settings));

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