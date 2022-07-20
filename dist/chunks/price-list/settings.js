(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/price-list/settings"],{

/***/ "./src/blocks/price-list/presets.js":
/*!******************************************!*\
  !*** ./src/blocks/price-list/presets.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/price-list/attributes.js");
/* harmony import */ var _price_list_child_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../price-list-child/attributes */ "./src/blocks/price-list-child/attributes.js");




const presets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  defaultChildAttributes: _price_list_child_attributes__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'imgAlign',
    value: 'side'
  }, {
    label: 'imageAlignment',
    value: 'middle'
  }, {
    label: 'imageWidth',
    value: 150
  }, {
    label: 'imageWidthTablet',
    value: 150
  }, {
    label: 'imageWidthMobile',
    value: 150
  }, {
    label: 'imgPaddingRight',
    value: 10
  }, {
    label: 'imgPaddingRightTablet',
    value: 10
  }, {
    label: 'imgPaddingRightMobile',
    value: 10
  }, {
    label: 'columnGap',
    value: 50
  }, {
    label: 'columnGapTablet',
    value: 50
  }, {
    label: 'columnGapMobile',
    value: 50
  }, {
    label: 'contentPaddingTop',
    value: 25
  }, {
    label: 'contentPaddingTopTablet',
    value: 25
  }, {
    label: 'contentPaddingTopMobile',
    value: 25
  }, {
    label: 'contentPaddingBottom',
    value: 35
  }, {
    label: 'contentPaddingBottomTablet',
    value: 35
  }, {
    label: 'contentPaddingBottomTablet',
    value: 35
  }, {
    label: 'columns',
    value: 2
  }, {
    label: 'tcolumns',
    value: 2
  }, {
    label: 'mcolumns',
    value: 1
  }, {
    label: 'headingAlign',
    value: ''
  }, {
    label: 'seperatorStyle',
    value: 'dashed'
  }, {
    label: 'seperatorWidth',
    value: 100
  }, {
    label: 'seperatorWidthTablet',
    value: 100
  }, {
    label: 'seperatorWidthMobile',
    value: 100
  }, {
    label: 'seperatorThickness',
    value: 1
  }, {
    label: 'seperatorColor',
    value: '#dddddd'
  }, {
    label: 'imgPaddingBottom',
    value: ''
  }, {
    label: 'imgPaddingBottomTablet',
    value: ''
  }, {
    label: 'imgPaddingBottomMobile',
    value: 25
  }, {
    label: 'imagePosition',
    value: 'left'
  }, {
    label: 'stack',
    value: 'mobile'
  }],
  childAttributes: [{
    label: 'image',
    value: {
      url: `${uagb_blocks_info.uagb_url}/admin/assets/images/uag-placeholder.svg`
    }
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M47 97V120H77.5H108V97V74H77.5H47V97ZM63.9775 80.0748C67.1925 80.7431 69.6325 83.72 69.6325 86.9744C69.6325 90.7907 66.3432 94.0472 62.4883 94.0472C59.2011 94.0472 56.1941 91.6316 55.519 88.4487C55.0099 86.0479 55.7038 83.7619 57.4735 82.0098C59.2443 80.2567 61.551 79.5705 63.9775 80.0748ZM99.332 90.247L104.426 95.2887V105.875V116.462H77.5H50.5742V115.193V113.925L58.0203 106.554L65.4664 99.1831L69.1007 102.78L72.735 106.376L83.4275 95.7907C89.3084 89.9686 94.1466 85.2051 94.1791 85.2051C94.2116 85.2051 96.5305 87.474 99.332 90.247Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M247 159C247 157.343 248.088 156 249.431 156H275.569C276.912 156 278 157.343 278 159C278 160.657 276.912 162 275.569 162H249.431C248.088 162 247 160.657 247 159Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M47 176V199H77.5H108V176V153H77.5H47V176ZM63.9775 159.075C67.1925 159.743 69.6325 162.72 69.6325 165.974C69.6325 169.791 66.3432 173.047 62.4883 173.047C59.2011 173.047 56.1941 170.632 55.519 167.449C55.0099 165.048 55.7038 162.762 57.4735 161.01C59.2443 159.257 61.551 158.57 63.9775 159.075ZM99.332 169.247L104.426 174.289V184.875V195.462H77.5H50.5742V194.193V192.925L58.0203 185.554L65.4664 178.183L69.1007 181.78L72.735 185.376L83.4275 174.791C89.3084 168.969 94.1466 164.205 94.1791 164.205C94.2116 164.205 96.5305 166.474 99.332 169.247Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M247 79C247 77.3431 248.088 76 249.431 76H275.569C276.912 76 278 77.3431 278 79C278 80.6569 276.912 82 275.569 82H249.431C248.088 82 247 80.6569 247 79Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 96C122 94.3431 123.138 93 124.542 93H207.259C208.663 93 209.801 94.3431 209.801 96C209.801 97.6569 208.663 99 207.259 99H124.542C123.138 99 122 97.6569 122 96Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 111C122 109.343 123.138 108 124.542 108H193.259C194.663 108 195.801 109.343 195.801 111C195.801 112.657 194.663 114 193.259 114H124.542C123.138 114 122 112.657 122 111Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 78.0025C122 75.792 123.668 74 125.725 74H218.04C220.097 74 221.765 75.792 221.765 78.0025C221.765 80.2131 220.097 82.0051 218.04 82.0051H125.725C123.668 82.0051 122 80.2131 122 78.0025Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 175C122 173.343 123.138 172 124.542 172H207.259C208.663 172 209.801 173.343 209.801 175C209.801 176.657 208.663 178 207.259 178H124.542C123.138 178 122 176.657 122 175Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 190C122 188.343 123.138 187 124.542 187H193.259C194.663 187 195.801 188.343 195.801 190C195.801 191.657 194.663 193 193.259 193H124.542C123.138 193 122 191.657 122 190Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M122 157.003C122 154.792 123.668 153 125.725 153H218.04C220.097 153 221.765 154.792 221.765 157.003C221.765 159.213 220.097 161.005 218.04 161.005H125.725C123.668 161.005 122 159.213 122 157.003Z" fill="#B6B6B6"/> </svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'columns',
    value: 2
  }, {
    label: 'tcolumns',
    value: 2
  }, {
    label: 'mcolumns',
    value: 1
  }, {
    label: 'imgAlign',
    value: 'top'
  }, {
    label: 'headingAlign',
    value: 'center'
  }, {
    label: 'imageWidth',
    value: 150
  }, {
    label: 'imageWidthTablet',
    value: 140
  }, {
    label: 'imageWidthMobile',
    value: 130
  }, {
    label: 'seperatorStyle',
    value: 'none'
  }, {
    label: 'imgPaddingBottom',
    value: 20
  }, {
    label: 'imgPaddingBottomTablet',
    value: 20
  }, {
    label: 'imgPaddingBottomMobile',
    value: 20
  }, {
    label: 'columnGap',
    value: 40
  }, {
    label: 'columnGapTablet',
    value: 40
  }, {
    label: 'columnGapMobile',
    value: 40
  }, {
    label: 'contentPaddingTop',
    value: 5
  }, {
    label: 'contentPaddingTopTablet',
    value: 5
  }, {
    label: 'contentPaddingTopMobile',
    value: 5
  }, {
    label: 'contentPaddingBottom',
    value: 5
  }, {
    label: 'contentPaddingBottomTablet',
    value: 5
  }, {
    label: 'contentPaddingBottomMobile',
    value: 5
  }, {
    label: 'imageAlignment',
    value: ''
  }, {
    label: 'imgPaddingRight',
    value: ''
  }, {
    label: 'imgPaddingRight',
    value: ''
  }, {
    label: 'imgPaddingRightTablet',
    value: ''
  }, {
    label: 'imgPaddingRightMobile',
    value: ''
  }],
  childAttributes: [{
    label: 'image',
    value: {
      url: `${uagb_blocks_info.uagb_url}/admin/assets/images/uag-placeholder.svg`
    }
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M140 198C140 196.343 141.608 195 143.591 195H182.202C184.186 195 185.794 196.343 185.794 198C185.794 199.657 184.186 201 182.202 201H143.591C141.608 201 140 199.657 140 198Z" fill="#CCCCCC"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M133 95V118H163.5H194V95V72H163.5H133V95ZM149.978 78.0748C153.193 78.7431 155.633 81.72 155.633 84.9744C155.633 88.7907 152.343 92.0472 148.488 92.0472C145.201 92.0472 142.194 89.6316 141.519 86.4487C141.01 84.0479 141.704 81.7619 143.474 80.0098C145.244 78.2567 147.551 77.5705 149.978 78.0748ZM185.332 88.247L190.426 93.2887V103.875V114.462H163.5H136.574V113.193V111.925L144.02 104.554L151.466 97.1831L155.101 100.78L158.735 104.376L169.427 93.7907C175.308 87.9686 180.147 83.2051 180.179 83.2051C180.212 83.2051 182.53 85.474 185.332 88.247Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 158C58 156.343 59.138 155 60.5418 155H266.259C267.663 155 268.801 156.343 268.801 158C268.801 159.657 267.663 161 266.259 161H60.5418C59.138 161 58 159.657 58 158Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M84.0166 175C84.0166 173.343 85.1483 172 86.5442 172H240.257C241.653 172 242.784 173.343 242.784 175C242.784 176.657 241.653 178 240.257 178H86.5442C85.1483 178 84.0166 176.657 84.0166 175Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M86 137.003C86 134.792 87.6678 133 89.7252 133H237.04C239.097 133 240.765 134.792 240.765 137.003C240.765 139.213 239.097 141.005 237.04 141.005H89.7252C87.6678 141.005 86 139.213 86 137.003Z" fill="#B6B6B6"/> </svg>'
}, {
  value: 'preset-3',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 3', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'columns',
    value: 1
  }, {
    label: 'tcolumns',
    value: 1
  }, {
    label: 'mcolumns',
    value: 1
  }, {
    label: 'imgAlign',
    value: 'top'
  }, {
    label: 'headingAlign',
    value: 'center'
  }, {
    label: 'imageWidth',
    value: 150
  }, {
    label: 'imageWidthTablet',
    value: 150
  }, {
    label: 'imageWidthMobile',
    value: 150
  }, {
    label: 'seperatorStyle',
    value: 'solid'
  }, {
    label: 'seperatorWidth',
    value: 33
  }, {
    label: 'seperatorWidthTablet',
    value: 33
  }, {
    label: 'seperatorWidthMobile',
    value: 33
  }, {
    label: 'seperatorThickness',
    value: 1
  }, {
    label: 'seperatorColor',
    value: '#dddddd'
  }, {
    label: 'imgPaddingBottom',
    value: 20
  }, {
    label: 'imgPaddingBottomTablet',
    value: 20
  }, {
    label: 'imgPaddingBottomMobile',
    value: 20
  }, {
    label: 'columnGap',
    value: 40
  }, {
    label: 'columnGapTablet',
    value: 40
  }, {
    label: 'columnGapMobile',
    value: 40
  }, {
    label: 'contentPaddingTop',
    value: 10
  }, {
    label: 'contentPaddingTopTablet',
    value: 10
  }, {
    label: 'contentPaddingTopMobile',
    value: 10
  }, {
    label: 'contentPaddingBottom',
    value: 10
  }, {
    label: 'contentPaddingBottomTablet',
    value: 10
  }, {
    label: 'contentPaddingBottomMobile',
    value: 10
  }, {
    label: 'imageAlignment',
    value: ''
  }, {
    label: 'imgPaddingRight',
    value: ''
  }, {
    label: 'imgPaddingRightTablet',
    value: ''
  }, {
    label: 'imgPaddingRightMobile',
    value: ''
  }],
  childAttributes: [{
    label: 'image',
    value: ''
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M140 120C140 118.343 141.608 117 143.591 117H182.202C184.186 117 185.794 118.343 185.794 120C185.794 121.657 184.186 123 182.202 123H143.591C141.608 123 140 121.657 140 120Z" fill="#CCCCCC"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M88 82C88 80.3431 89.138 79 90.5418 79H236.259C237.663 79 238.801 80.3431 238.801 82C238.801 83.6569 237.663 85 236.259 85H90.5418C89.138 85 88 83.6569 88 82Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M109 99C109 97.3431 110.132 96 111.528 96H215.24C216.636 96 217.768 97.3431 217.768 99C217.768 100.657 216.636 102 215.24 102H111.528C110.132 102 109 100.657 109 99Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M91 59.0025C91 56.792 92.6678 55 94.7252 55H232.04C234.097 55 235.765 56.792 235.765 59.0025C235.765 61.2131 234.097 63.0051 232.04 63.0051H94.7252C92.6678 63.0051 91 61.2131 91 59.0025Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M140 215C140 213.343 141.608 212 143.591 212H182.202C184.186 212 185.794 213.343 185.794 215C185.794 216.657 184.186 218 182.202 218H143.591C141.608 218 140 216.657 140 215Z" fill="#CCCCCC"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M88 177C88 175.343 89.138 174 90.5418 174H236.259C237.663 174 238.801 175.343 238.801 177C238.801 178.657 237.663 180 236.259 180H90.5418C89.138 180 88 178.657 88 177Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M109 194C109 192.343 110.132 191 111.528 191H215.24C216.636 191 217.768 192.343 217.768 194C217.768 195.657 216.636 197 215.24 197H111.528C110.132 197 109 195.657 109 194Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M91 154.003C91 151.792 92.6678 150 94.7252 150H232.04C234.097 150 235.765 151.792 235.765 154.003C235.765 156.213 234.097 158.005 232.04 158.005H94.7252C92.6678 158.005 91 156.213 91 154.003Z" fill="#B6B6B6"/> </svg>'
}, {
  value: 'preset-4',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 4', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'columns',
    value: 2
  }, {
    label: 'tcolumns',
    value: 2
  }, {
    label: 'mcolumns',
    value: 1
  }, {
    label: 'imgAlign',
    value: 'side'
  }, {
    label: 'headingAlign',
    value: 'center'
  }, {
    label: 'imageWidth',
    value: 100
  }, {
    label: 'imageWidthTablet',
    value: 100
  }, {
    label: 'imageWidthMobile',
    value: 100
  }, {
    label: 'seperatorStyle',
    value: 'solid'
  }, {
    label: 'seperatorWidth',
    value: 33
  }, {
    label: 'seperatorWidthTablet',
    value: 33
  }, {
    label: 'seperatorWidthMobile',
    value: 33
  }, {
    label: 'seperatorThickness',
    value: 1
  }, {
    label: 'seperatorColor',
    value: '#dddddd'
  }, {
    label: 'imgPaddingBottom',
    value: ''
  }, {
    label: 'imgPaddingBottomTablet',
    value: ''
  }, {
    label: 'imgPaddingBottomMobile',
    value: ''
  }, {
    label: 'columnGap',
    value: 50
  }, {
    label: 'columnGapTablet',
    value: 50
  }, {
    label: 'columnGapMobile',
    value: 50
  }, {
    label: 'contentPaddingTop',
    value: 10
  }, {
    label: 'contentPaddingTopTablet',
    value: 10
  }, {
    label: 'contentPaddingTopMobile',
    value: 10
  }, {
    label: 'contentPaddingBottom',
    value: 10
  }, {
    label: 'contentPaddingBottomTablet',
    value: 10
  }, {
    label: 'contentPaddingBottomMobile',
    value: 10
  }, {
    label: 'imageAlignment',
    value: ''
  }, {
    label: 'imgPaddingRight',
    value: ''
  }, {
    label: 'imgPaddingRightTablet',
    value: ''
  }, {
    label: 'imgPaddingRightMobile',
    value: ''
  }, {
    label: 'imagePosition',
    value: 'left'
  }],
  childAttributes: [{
    label: 'image',
    value: {
      url: ''
    }
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M210 81C210 79.3431 211.088 78 212.431 78H238.569C239.912 78 241 79.3431 241 81C241 82.6569 239.912 84 238.569 84H212.431C211.088 84 210 82.6569 210 81Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 98C85 96.3431 86.138 95 87.5418 95H170.259C171.663 95 172.801 96.3431 172.801 98C172.801 99.6569 171.663 101 170.259 101H87.5418C86.138 101 85 99.6569 85 98Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 113C85 111.343 86.138 110 87.5418 110H156.259C157.663 110 158.801 111.343 158.801 113C158.801 114.657 157.663 116 156.259 116H87.5418C86.138 116 85 114.657 85 113Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 80.0025C85 77.792 86.6678 76 88.7252 76H181.04C183.097 76 184.765 77.792 184.765 80.0025C184.765 82.2131 183.097 84.0051 181.04 84.0051H88.7252C86.6678 84.0051 85 82.2131 85 80.0025Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M210 161C210 159.343 211.088 158 212.431 158H238.569C239.912 158 241 159.343 241 161C241 162.657 239.912 164 238.569 164H212.431C211.088 164 210 162.657 210 161Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 178C85 176.343 86.138 175 87.5418 175H170.259C171.663 175 172.801 176.343 172.801 178C172.801 179.657 171.663 181 170.259 181H87.5418C86.138 181 85 179.657 85 178Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 193C85 191.343 86.138 190 87.5418 190H156.259C157.663 190 158.801 191.343 158.801 193C158.801 194.657 157.663 196 156.259 196H87.5418C86.138 196 85 194.657 85 193Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M85 160.003C85 157.792 86.6678 156 88.7252 156H181.04C183.097 156 184.765 157.792 184.765 160.003C184.765 162.213 183.097 164.005 181.04 164.005H88.7252C86.6678 164.005 85 162.213 85 160.003Z" fill="#B6B6B6"/> </svg>'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(`uag_price_list_presets`, presets));

/***/ }),

/***/ "./src/blocks/price-list/settings.js":
/*!*******************************************!*\
  !*** ./src/blocks/price-list/settings.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_select_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/select-control */ "./src/components/select-control/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./presets */ "./src/blocks/price-list/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const maxColumns = 3;




const Settings = props => {
  props = props.parentProps;
  const {
    setAttributes,
    attributes,
    deviceType
  } = props; // Setup the attributes.

  const {
    menu_item_count,
    titleSpace,
    titleSpaceTablet,
    titleSpaceMobile,
    columns,
    tcolumns,
    mcolumns,
    rowGap,
    rowGapTablet,
    rowGapMobile,
    columnGap,
    columnGapTablet,
    columnGapMobile,
    priceColor,
    descColor,
    titleColor,
    seperatorStyle,
    seperatorWidth,
    seperatorWidthTablet,
    seperatorWidthMobile,
    seperatorThickness,
    seperatorColor,
    priceLoadGoogleFonts,
    titleLoadGoogleFonts,
    descLoadGoogleFonts,
    titleFontSizeType,
    titleFontSize,
    titleFontSizeTablet,
    titleFontSizeMobile,
    titleFontFamily,
    titleFontWeight,
    titleFontStyle,
    titleLineHeightType,
    titleLineHeight,
    titleLineHeightTablet,
    titleLineHeightMobile,
    priceFontSizeType,
    priceFontSize,
    priceFontSizeTablet,
    priceFontSizeMobile,
    priceFontFamily,
    priceFontWeight,
    priceFontStyle,
    priceLineHeightType,
    priceLineHeight,
    priceLineHeightTablet,
    priceLineHeightMobile,
    descFontSizeType,
    descFontSize,
    descFontSizeTablet,
    descFontSizeMobile,
    descFontFamily,
    descFontWeight,
    descFontStyle,
    descLineHeightType,
    descLineHeight,
    descLineHeightTablet,
    descLineHeightMobile,
    headingTag,
    imagePosition,
    imageAlignment,
    imageSize,
    imageWidth,
    imageWidthTablet,
    imageWidthMobile,
    stack,
    imageWidthType,
    seperatorWidthType,
    rowGapType,
    columnGapType,
    titleSpaceType,
    contentPaddingTop,
    contentPaddingRight,
    contentPaddingBottom,
    contentPaddingLeft,
    contentPaddingTopTablet,
    contentPaddingRightTablet,
    contentPaddingBottomTablet,
    contentPaddingLeftTablet,
    contentPaddingTopMobile,
    contentPaddingRightMobile,
    contentPaddingBottomMobile,
    contentPaddingLeftMobile,
    contentPaddingUnit,
    contentMobilePaddingUnit,
    contentTabletPaddingUnit,
    contentSpacingLink,
    imgPaddingTop,
    imgPaddingRight,
    imgPaddingBottom,
    imgPaddingLeft,
    imgPaddingTopTablet,
    imgPaddingRightTablet,
    imgPaddingBottomTablet,
    imgPaddingLeftTablet,
    imgPaddingTopMobile,
    imgPaddingRightMobile,
    imgPaddingBottomMobile,
    imgPaddingLeftMobile,
    imgPaddingUnit,
    imgMobilePaddingUnit,
    imgTabletPaddingUnit,
    imgSpacingLink,
    titleTransform,
    titleDecoration,
    descTransform,
    descDecoration,
    priceTransform,
    priceDecoration,
    headingAlign,
    imgAlign,
    descLetterSpacing,
    descLetterSpacingTablet,
    descLetterSpacingMobile,
    descLetterSpacingType,
    priceLetterSpacing,
    priceLetterSpacingTablet,
    priceLetterSpacingMobile,
    priceLetterSpacingType,
    titleLetterSpacing,
    titleLetterSpacingTablet,
    titleLetterSpacingMobile,
    titleLetterSpacingType
  } = attributes;

  const setimageSize = value => {
    const getChildBlocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])('core/block-editor').getBlocks(props.clientId);
    getChildBlocks.forEach(pricelistChild => {
      pricelistChild.attributes.imageSize = value;
    });
    setAttributes({
      imageSize: value
    });
  };

  let loadTitleGoogleFonts;
  let loadDescGoogleFonts;
  let loadPriceGoogleFonts;

  if (titleLoadGoogleFonts === true) {
    const titleconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: titleconfig
    });
  }

  if (descLoadGoogleFonts === true) {
    const descconfig = {
      google: {
        families: [descFontFamily + (descFontWeight ? ':' + descFontWeight : '')]
      }
    };
    loadDescGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: descconfig
    });
  }

  if (priceLoadGoogleFonts === true) {
    const priceconfig = {
      google: {
        families: [priceFontFamily + (priceFontWeight ? ':' + priceFontWeight : '')]
      }
    };
    loadPriceGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      config: priceconfig
    });
  } // Margin Settings.


  const marginSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Row Gap', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: rowGap,
          label: 'rowGap'
        },
        tablet: {
          value: rowGapTablet,
          label: 'rowGapTablet'
        },
        mobile: {
          value: rowGapMobile,
          label: 'rowGapMobile'
        }
      },
      min: 0,
      max: 50,
      unit: {
        value: rowGapType,
        label: 'rowGapType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Column Gap', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: columnGap,
          label: 'columnGap'
        },
        tablet: {
          value: columnGapTablet,
          label: 'columnGapTablet'
        },
        mobile: {
          value: columnGapMobile,
          label: 'columnGapMobile'
        }
      },
      min: 0,
      max: 50,
      unit: {
        value: columnGapType,
        label: 'columnGapType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Item Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: contentPaddingTop,
        label: 'contentPaddingTop'
      },
      valueRight: {
        value: contentPaddingRight,
        label: 'contentPaddingRight'
      },
      valueBottom: {
        value: contentPaddingBottom,
        label: 'contentPaddingBottom'
      },
      valueLeft: {
        value: contentPaddingLeft,
        label: 'contentPaddingLeft'
      },
      valueTopTablet: {
        value: contentPaddingTopTablet,
        label: 'contentPaddingTopTablet'
      },
      valueRightTablet: {
        value: contentPaddingRightTablet,
        label: 'contentPaddingRightTablet'
      },
      valueBottomTablet: {
        value: contentPaddingBottomTablet,
        label: 'contentPaddingBottomTablet'
      },
      valueLeftTablet: {
        value: contentPaddingLeftTablet,
        label: 'contentPaddingLeftTablet'
      },
      valueTopMobile: {
        value: contentPaddingTopMobile,
        label: 'contentPaddingTopMobile'
      },
      valueRightMobile: {
        value: contentPaddingRightMobile,
        label: 'contentPaddingRightMobile'
      },
      valueBottomMobile: {
        value: contentPaddingBottomMobile,
        label: 'contentPaddingBottomMobile'
      },
      valueLeftMobile: {
        value: contentPaddingLeftMobile,
        label: 'contentPaddingLeftMobile'
      },
      unit: {
        value: contentPaddingUnit,
        label: 'contentPaddingUnit'
      },
      mUnit: {
        value: contentMobilePaddingUnit,
        label: 'contentMobilePaddingUnit'
      },
      tUnit: {
        value: contentTabletPaddingUnit,
        label: 'contentTabletPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: contentSpacingLink,
        label: 'contentSpacingLink'
      }
    })));
  }; // Image sizes.


  const imageSizeOptions = [{
    value: 'thumbnail',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Thumbnail')
  }, {
    value: 'medium',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Medium')
  }, {
    value: 'full',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Large')
  }]; //Image Setting

  const imageSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Position', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imgAlign,
        label: 'imgAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'top',
        label: 'Top'
      }, {
        value: 'side',
        label: 'Side'
      }],
      showIcons: false
    }), imgAlign === 'side' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imagePosition,
        label: 'imagePosition'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), imgAlign === 'top' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingAlign,
        label: 'headingAlign'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), (imagePosition === 'left' || imagePosition === 'right') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Stack on', 'ultimate-addons-for-gutenberg'),
      data: {
        value: stack,
        label: 'stack'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'none',
        label: 'None'
      }, {
        value: 'tablet',
        label: 'Tablet'
      }, {
        value: 'mobile',
        label: 'Mobile'
      }],
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Note: Choose on what breakpoint the Images will stack.'),
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Vertical Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imageAlignment,
        label: 'imageAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'top',
        label: 'Top'
      }, {
        value: 'middle',
        label: 'Middle'
      }],
      showIcons: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Size', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imageSize
      },
      onChange: setimageSize,
      options: imageSizeOptions
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width', 'ultimate-addons-for-gutenberg'),
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
        value: imageWidthType,
        label: 'imageWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }],
      setAttributes: setAttributes
    }));
  }; //Image Setting


  const imageStyles = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: imgPaddingTop,
        label: 'imgPaddingTop'
      },
      valueRight: {
        value: imgPaddingRight,
        label: 'imgPaddingRight'
      },
      valueBottom: {
        value: imgPaddingBottom,
        label: 'imgPaddingBottom'
      },
      valueLeft: {
        value: imgPaddingLeft,
        label: 'imgPaddingLeft'
      },
      valueTopTablet: {
        value: imgPaddingTopTablet,
        label: 'imgPaddingTopTablet'
      },
      valueRightTablet: {
        value: imgPaddingRightTablet,
        label: 'imgPaddingRightTablet'
      },
      valueBottomTablet: {
        value: imgPaddingBottomTablet,
        label: 'imgPaddingBottomTablet'
      },
      valueLeftTablet: {
        value: imgPaddingLeftTablet,
        label: 'imgPaddingLeftTablet'
      },
      valueTopMobile: {
        value: imgPaddingTopMobile,
        label: 'imgPaddingTopMobile'
      },
      valueRightMobile: {
        value: imgPaddingRightMobile,
        label: 'imgPaddingRightMobile'
      },
      valueBottomMobile: {
        value: imgPaddingBottomMobile,
        label: 'imgPaddingBottomMobile'
      },
      valueLeftMobile: {
        value: imgPaddingLeftMobile,
        label: 'imgPaddingLeftMobile'
      },
      unit: {
        value: imgPaddingUnit,
        label: 'imgPaddingUnit'
      },
      mUnit: {
        value: imgMobilePaddingUnit,
        label: 'imgMobilePaddingUnit'
      },
      tUnit: {
        value: imgTabletPaddingUnit,
        label: 'imgTabletPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: imgSpacingLink,
        label: 'imgSpacingLink'
      }
    })));
  }; //Color settings


  const contentSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: descColor ? descColor : '',
      data: {
        value: descColor,
        label: 'descColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
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
      },
      transform: {
        value: descTransform,
        label: 'descTransform'
      },
      decoration: {
        value: descDecoration,
        label: 'descDecoration'
      }
    }));
  }; //seperator setting


  const separatorSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Separator'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      data: {
        value: seperatorStyle,
        label: 'seperatorStyle'
      },
      setAttributes: setAttributes,
      options: [{
        value: 'none',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('None')
      }, {
        value: 'solid',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Solid')
      }, {
        value: 'dotted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dotted')
      }, {
        value: 'dashed',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Dashed')
      }, {
        value: 'double',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Double')
      }, {
        value: 'groove',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Groove')
      }, {
        value: 'inset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Inset')
      }, {
        value: 'outset',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Outset')
      }, {
        value: 'ridge',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ridge')
      }]
    }), 'none' !== seperatorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Width', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: seperatorWidth,
          label: 'seperatorWidth'
        },
        tablet: {
          value: seperatorWidthTablet,
          label: 'seperatorWidthTablet'
        },
        mobile: {
          value: seperatorWidthMobile,
          label: 'seperatorWidthMobile'
        }
      },
      min: 0,
      max: 100,
      unit: {
        value: seperatorWidthType,
        label: 'seperatorWidthType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('%', 'ultimate-addons-for-gutenberg'),
        unitValue: '%'
      }],
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Thickness'),
      setAttributes: setAttributes,
      value: seperatorThickness,
      data: {
        value: seperatorThickness,
        label: 'seperatorThickness'
      },
      min: 0,
      max: 20,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: seperatorColor ? seperatorColor : '',
      data: {
        value: seperatorColor,
        label: 'seperatorColor'
      },
      setAttributes: setAttributes
    })));
  }; // Typography settings.


  const priceSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Price'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: priceColor ? priceColor : '',
      data: {
        value: priceColor,
        label: 'priceColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: priceLoadGoogleFonts,
        label: 'priceLoadGoogleFonts'
      },
      fontFamily: {
        value: priceFontFamily,
        label: 'priceFontFamily'
      },
      fontWeight: {
        value: priceFontWeight,
        label: 'priceFontWeight'
      },
      fontStyle: {
        value: priceFontStyle,
        label: 'priceFontStyle'
      },
      fontSizeType: {
        value: priceFontSizeType,
        label: 'priceFontSizeType'
      },
      fontSize: {
        value: priceFontSize,
        label: 'priceFontSize'
      },
      fontSizeMobile: {
        value: priceFontSizeMobile,
        label: 'priceFontSizeMobile'
      },
      fontSizeTablet: {
        value: priceFontSizeTablet,
        label: 'priceFontSizeTablet'
      },
      lineHeightType: {
        value: priceLineHeightType,
        label: 'priceLineHeightType'
      },
      lineHeight: {
        value: priceLineHeight,
        label: 'priceLineHeight'
      },
      lineHeightMobile: {
        value: priceLineHeightMobile,
        label: 'priceLineHeightMobile'
      },
      lineHeightTablet: {
        value: priceLineHeightTablet,
        label: 'priceLineHeightTablet'
      },
      letterSpacing: {
        value: priceLetterSpacing,
        label: 'priceLetterSpacing'
      },
      letterSpacingTablet: {
        value: priceLetterSpacingTablet,
        label: 'priceLetterSpacingTablet'
      },
      letterSpacingMobile: {
        value: priceLetterSpacingMobile,
        label: 'priceLetterSpacingMobile'
      },
      letterSpacingType: {
        value: priceLetterSpacingType,
        label: 'priceLetterSpacingType'
      },
      transform: {
        value: priceTransform,
        label: 'priceTransform'
      },
      decoration: {
        value: priceDecoration,
        label: 'priceDecoration'
      }
    }));
  };

  const titleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: titleColor ? titleColor : '',
      data: {
        value: titleColor,
        label: 'titleColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography'),
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
      },
      transform: {
        value: titleTransform,
        label: 'titleTransform'
      },
      decoration: {
        value: titleDecoration,
        label: 'titleDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Margin', 'ultimate-addons-for-gutenberg'),
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
      unit: {
        value: titleSpaceType,
        label: 'titleSpaceType'
      },
      units: [{
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
        unitValue: 'px'
      }, {
        name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Em', 'ultimate-addons-for-gutenberg'),
        unitValue: 'em'
      }],
      setAttributes: setAttributes
    }));
  };

  const presetSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Presets', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_16__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_15__["default"],
      presetInputType: "radioImage"
    }));
  };

  const inspectControl = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_17__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_13__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_13__["UAGTabs"].general, presetSettings(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('General'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Columns', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: columns,
          label: 'columns'
        },
        tablet: {
          value: tcolumns,
          label: 'tcolumns'
        },
        mobile: {
          value: mcolumns,
          label: 'mcolumns'
        }
      },
      min: 1,
      max: Math.min(maxColumns, menu_item_count),
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Heading Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: headingTag,
        label: 'headingTag'
      },
      options: [{
        value: 'h1',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H1', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h2',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h3',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H3', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h4',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H4', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h5',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H5', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'h6',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('H6', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'span',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Span', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'p',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('P', 'ultimate-addons-for-gutenberg')
      }]
    })), imageSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_13__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_13__["UAGTabs"].style, titleSettings(), separatorSettings(), imageStyles(), contentSettings(), priceSettings(), marginSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_13__["UAGTabs"].advance, {
      parentProps: props
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, inspectControl(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, loadTitleGoogleFonts, loadDescGoogleFonts, loadPriceGoogleFonts));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Settings));

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