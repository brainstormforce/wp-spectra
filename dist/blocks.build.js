/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_advanced_heading_block_js__ = __webpack_require__(/*! ./blocks/advanced-heading/block.js */ 1);\n/**\r\n * Gutenberg Blocks\r\n *\r\n * All blocks related JavaScript files should be imported here.\r\n * You can create a new block folder in this dir and include code\r\n * for that block here as well.\r\n *\r\n * All blocks should be included here since this is the file that\r\n * Webpack is compiling as the input file.\r\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR3V0ZW5iZXJnIEJsb2Nrc1xyXG4gKlxyXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cclxuICogWW91IGNhbiBjcmVhdGUgYSBuZXcgYmxvY2sgZm9sZGVyIGluIHRoaXMgZGlyIGFuZCBpbmNsdWRlIGNvZGVcclxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxyXG4gKlxyXG4gKiBBbGwgYmxvY2tzIHNob3VsZCBiZSBpbmNsdWRlZCBoZXJlIHNpbmNlIHRoaXMgaXMgdGhlIGZpbGUgdGhhdFxyXG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cclxuICovXG5cbmltcG9ydCAnLi9ibG9ja3MvYWR2YW5jZWQtaGVhZGluZy9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************!*\
  !*** ./src/blocks/advanced-heading/block.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n//  Import CSS.\n\n\n\nconst { __ } = wp.i18n; // Import __() from wp.i18n\nconst { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks\nconst uagb_el = wp.element.createElement;\n\n// Visit https://wordpress.org/gutenberg/handbook/block-api/ to learn about Block API\nregisterBlockType('ultimate-gutenberg/advanced-heading', {\n\ttitle: __('UAGB Advanced heading'),\n\n\ticon: 'format-status',\n\n\tcategory: 'formatting',\n\n\t// Remove to make block editable in HTML mode.\n\tsupportHTML: true,\n\n\tedit: function (props) {\n\t\treturn uagb_el('p', { className: props.className }, __('Ultimate Addons For Gutenberg!'));\n\t},\n\n\tsave: function (props) {\n\t\treturn uagb_el('p', {}, __('Ultimate Addons For Gutenberg!'));\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYWR2YW5jZWQtaGVhZGluZy9ibG9jay5qcz8zM2YxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5jb25zdCB1YWdiX2VsID0gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50O1xuXG4vLyBWaXNpdCBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS8gdG8gbGVhcm4gYWJvdXQgQmxvY2sgQVBJXG5yZWdpc3RlckJsb2NrVHlwZSgndWx0aW1hdGUtZ3V0ZW5iZXJnL2FkdmFuY2VkLWhlYWRpbmcnLCB7XG5cdHRpdGxlOiBfXygnVUFHQiBBZHZhbmNlZCBoZWFkaW5nJyksXG5cblx0aWNvbjogJ2Zvcm1hdC1zdGF0dXMnLFxuXG5cdGNhdGVnb3J5OiAnZm9ybWF0dGluZycsXG5cblx0Ly8gUmVtb3ZlIHRvIG1ha2UgYmxvY2sgZWRpdGFibGUgaW4gSFRNTCBtb2RlLlxuXHRzdXBwb3J0SFRNTDogdHJ1ZSxcblxuXHRlZGl0OiBmdW5jdGlvbiAocHJvcHMpIHtcblx0XHRyZXR1cm4gdWFnYl9lbCgncCcsIHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSwgX18oJ1VsdGltYXRlIEFkZG9ucyBGb3IgR3V0ZW5iZXJnIScpKTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiAocHJvcHMpIHtcblx0XHRyZXR1cm4gdWFnYl9lbCgncCcsIHt9LCBfXygnVWx0aW1hdGUgQWRkb25zIEZvciBHdXRlbmJlcmchJykpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvYWR2YW5jZWQtaGVhZGluZy9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************************!*\
  !*** ./src/blocks/advanced-heading/style.scss ***!
  \************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYWR2YW5jZWQtaGVhZGluZy9zdHlsZS5zY3NzPzE5ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvYWR2YW5jZWQtaGVhZGluZy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*************************************************!*\
  !*** ./src/blocks/advanced-heading/editor.scss ***!
  \*************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYWR2YW5jZWQtaGVhZGluZy9lZGl0b3Iuc2Nzcz8wNmI5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2FkdmFuY2VkLWhlYWRpbmcvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);