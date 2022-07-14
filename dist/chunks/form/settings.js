(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/form/settings"],{

/***/ "./src/blocks/forms/presets.js":
/*!*************************************!*\
  !*** ./src/blocks/forms/presets.js ***!
  \*************************************/
/*! exports provided: default, buttonsPresets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonsPresets", function() { return buttonsPresets; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/blocks/forms/attributes.js");



const formsPresets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'bgColor',
    value: '#ffffff'
  }, {
    label: 'fieldBorderTopLeftRadius',
    value: 2
  }, {
    label: 'fieldBorderTopRightRadius',
    value: 2
  }, {
    label: 'fieldBorderBottomLeftRadius',
    value: 2
  }, {
    label: 'fieldBorderBottomRightRadius',
    value: 2
  }, {
    label: 'paddingFieldTop',
    value: 12
  }, {
    label: 'paddingFieldRight',
    value: 12
  }, {
    label: 'paddingFieldBottom',
    value: 12
  }, {
    label: 'paddingFieldLeft',
    value: 12
  }, {
    label: 'formStyle',
    value: 'boxed'
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M81 69.2593C81 66.9069 82.7626 65 84.9368 65H240.619C242.793 65 244.556 66.9069 244.556 69.2593C244.556 71.6116 242.793 73.5185 240.619 73.5185H84.9368C82.7626 73.5185 81 71.6116 81 69.2593Z" stroke="#959595" fill="none" stroke-linecap="round"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M81 93.1113C81 90.759 82.7626 88.8521 84.9368 88.8521H240.619C242.793 88.8521 244.556 90.759 244.556 93.1113C244.556 95.4636 242.793 97.3706 240.619 97.3706H84.9368C82.7626 97.3706 81 95.4636 81 93.1113Z" stroke="#959595" fill="none" stroke-linecap="round"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M81 116.963C81 114.611 82.7626 112.704 84.9368 112.704H240.619C242.793 112.704 244.556 114.611 244.556 116.963C244.556 119.315 242.793 121.222 240.619 121.222H84.9368C82.7626 121.222 81 119.315 81 116.963Z" stroke="#959595" fill="none" stroke-linecap="round"/> <path d="M87.1429 137.056H238.413C241.517 137.056 244.056 139.64 244.056 142.854V182.22C244.056 185.434 241.517 188.019 238.413 188.019H87.1429C84.0381 188.019 81.5 185.434 81.5 182.22V142.854C81.5 139.64 84.0381 137.056 87.1429 137.056Z" stroke="#959595" fill="none"/> <path d="M81 204.592C81 202.711 82.5255 201.185 84.4074 201.185H123.407C125.289 201.185 126.815 202.711 126.815 204.592V204.592C126.815 206.474 125.289 208 123.407 208H84.4074C82.5256 208 81 206.474 81 204.592V204.592Z" fill="#B6B6B6"/> </svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'bgColor',
    value: '#ffffff'
  }, {
    label: 'fieldBorderTopLeftRadius',
    value: 3
  }, {
    label: 'fieldBorderTopRightRadius',
    value: 3
  }, {
    label: 'fieldBorderBottomLeftRadius',
    value: 3
  }, {
    label: 'fieldBorderBottomRightRadius',
    value: 3
  }, {
    label: 'paddingFieldTop',
    value: 0
  }, {
    label: 'paddingFieldRight',
    value: 10
  }, {
    label: 'paddingFieldBottom',
    value: 10
  }, {
    label: 'paddingFieldLeft',
    value: 0
  }, {
    label: 'formStyle',
    value: 'underlined'
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path d="M87.1429 135.5H238.413C241.517 135.5 244.056 138.084 244.056 141.299V180.664C244.056 183.879 241.517 186.463 238.413 186.463H87.1429C84.0381 186.463 81.5 183.879 81.5 180.664V141.299C81.5 138.084 84.0381 135.5 87.1429 135.5Z" stroke="#959595" fill="none"/> <path d="M81 203.037C81 201.155 82.5255 199.629 84.4074 199.629H123.407C125.289 199.629 126.815 201.155 126.815 203.037V203.037C126.815 204.919 125.289 206.444 123.407 206.444H84.4074C82.5256 206.444 81 204.919 81 203.037V203.037Z" fill="#B6B6B6"/> <path d="M81 66H245" stroke="#D2D2D2" stroke-width="3" fill="none" stroke-linecap="round"/> <path d="M81 89H245" stroke="#D2D2D2" stroke-width="3" fill="none" stroke-linecap="round"/> <path d="M81 112H245" stroke="#D2D2D2" stroke-width="3" fill="none" stroke-linecap="round"/> </svg>'
}];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(`uag_forms_presets`, formsPresets));
const buttonsPresets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  defaultPresetAttributes: [{
    label: 'btnBorderStyle'
  }, {
    label: 'btnBorderTopLeftRadius'
  }, {
    label: 'btnBorderTopRightRadius'
  }, {
    label: 'btnBorderBottomLeftRadius'
  }, {
    label: 'btnBorderBottomRightRadius'
  }, {
    label: 'btnBorderTopWidth'
  }, {
    label: 'btnBorderLeftWidth'
  }, {
    label: 'btnBorderRightWidth'
  }, {
    label: 'btnBorderBottomWidth'
  }, {
    label: 'submitBgColor'
  }, {
    label: 'submitBgColorHover'
  }, {
    label: 'submitColor'
  }, {
    label: 'submitColorHover'
  }]
}, {
  value: 'preset-1',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 1', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'btnBorderStyle',
    value: 'none'
  }, {
    label: 'btnBorderTopLeftRadius',
    value: 0
  }, {
    label: 'btnBorderTopRightRadius',
    value: 0
  }, {
    label: 'btnBorderBottomLeftRadius',
    value: 0
  }, {
    label: 'btnBorderBottomRightRadius',
    value: 0
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="58" y="101" width="209.786" height="70" fill="#B6B6B6"/> <path d="M134.2 146H125.775V129.325H133.975C135.458 129.325 136.617 129.733 137.45 130.55C138.3 131.35 138.725 132.358 138.725 133.575C138.725 134.575 138.442 135.425 137.875 136.125C137.325 136.808 136.642 137.233 135.825 137.4C136.725 137.533 137.483 138 138.1 138.8C138.733 139.583 139.05 140.483 139.05 141.5C139.05 142.833 138.617 143.917 137.75 144.75C136.9 145.583 135.717 146 134.2 146ZM133.375 136.225C134.108 136.225 134.683 136.025 135.1 135.625C135.517 135.225 135.725 134.708 135.725 134.075C135.725 133.425 135.517 132.9 135.1 132.5C134.683 132.1 134.108 131.9 133.375 131.9H128.7V136.225H133.375ZM133.5 143.425C134.3 143.425 134.925 143.225 135.375 142.825C135.825 142.408 136.05 141.833 136.05 141.1C136.05 140.45 135.825 139.908 135.375 139.475C134.925 139.025 134.3 138.8 133.5 138.8H128.7V143.425H133.5ZM152.686 146H150.061V144.4C148.928 145.667 147.503 146.3 145.786 146.3C143.203 146.3 141.911 145.025 141.911 142.475V133.925H144.536V141.525C144.536 142.408 144.744 143.042 145.161 143.425C145.578 143.792 146.178 143.975 146.961 143.975C147.594 143.975 148.186 143.825 148.736 143.525C149.286 143.225 149.728 142.85 150.061 142.4V133.925H152.686V146ZM159.721 146.3C158.704 146.3 157.929 146.033 157.396 145.5C156.879 144.967 156.621 144.2 156.621 143.2V136.225H154.621V133.925H156.621V130.625H159.246V133.925H161.696V136.225H159.246V142.55C159.246 142.983 159.346 143.333 159.546 143.6C159.746 143.85 160.029 143.975 160.396 143.975C160.929 143.975 161.321 143.833 161.571 143.55L162.196 145.525C161.646 146.042 160.821 146.3 159.721 146.3ZM167.704 146.3C166.687 146.3 165.912 146.033 165.379 145.5C164.862 144.967 164.604 144.2 164.604 143.2V136.225H162.604V133.925H164.604V130.625H167.229V133.925H169.679V136.225H167.229V142.55C167.229 142.983 167.329 143.333 167.529 143.6C167.729 143.85 168.012 143.975 168.379 143.975C168.912 143.975 169.304 143.833 169.554 143.55L170.179 145.525C169.629 146.042 168.804 146.3 167.704 146.3ZM177.512 146.3C175.646 146.3 174.146 145.692 173.012 144.475C171.879 143.242 171.312 141.733 171.312 139.95C171.312 138.167 171.879 136.667 173.012 135.45C174.146 134.233 175.646 133.625 177.512 133.625C179.396 133.625 180.904 134.233 182.037 135.45C183.171 136.667 183.737 138.167 183.737 139.95C183.737 141.75 183.171 143.258 182.037 144.475C180.904 145.692 179.396 146.3 177.512 146.3ZM177.512 143.975C178.596 143.975 179.446 143.592 180.062 142.825C180.696 142.042 181.012 141.083 181.012 139.95C181.012 138.833 180.696 137.892 180.062 137.125C179.446 136.342 178.596 135.95 177.512 135.95C176.446 135.95 175.596 136.342 174.962 137.125C174.346 137.892 174.037 138.833 174.037 139.95C174.037 141.083 174.346 142.042 174.962 142.825C175.596 143.592 176.446 143.975 177.512 143.975ZM197.168 146H194.543V138.45C194.543 136.783 193.735 135.95 192.118 135.95C191.485 135.95 190.893 136.108 190.343 136.425C189.793 136.742 189.352 137.125 189.018 137.575V146H186.393V133.925H189.018V135.575C189.468 135.042 190.068 134.583 190.818 134.2C191.568 133.817 192.385 133.625 193.268 133.625C194.552 133.625 195.518 133.958 196.168 134.625C196.835 135.292 197.168 136.25 197.168 137.5V146Z" fill="white"/> </svg>'
}, {
  value: 'preset-2',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 2', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'btnBorderStyle',
    value: 'none'
  }, {
    label: 'btnBorderTopLeftRadius',
    value: 5
  }, {
    label: 'btnBorderTopRightRadius',
    value: 5
  }, {
    label: 'btnBorderBottomLeftRadius',
    value: 5
  }, {
    label: 'btnBorderBottomRightRadius',
    value: 5
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="58" y="101" width="209.786" height="70" rx="6" fill="#B6B6B6"/> <path d="M134.2 145H125.775V128.325H133.975C135.458 128.325 136.617 128.733 137.45 129.55C138.3 130.35 138.725 131.358 138.725 132.575C138.725 133.575 138.442 134.425 137.875 135.125C137.325 135.808 136.642 136.233 135.825 136.4C136.725 136.533 137.483 137 138.1 137.8C138.733 138.583 139.05 139.483 139.05 140.5C139.05 141.833 138.617 142.917 137.75 143.75C136.9 144.583 135.717 145 134.2 145ZM133.375 135.225C134.108 135.225 134.683 135.025 135.1 134.625C135.517 134.225 135.725 133.708 135.725 133.075C135.725 132.425 135.517 131.9 135.1 131.5C134.683 131.1 134.108 130.9 133.375 130.9H128.7V135.225H133.375ZM133.5 142.425C134.3 142.425 134.925 142.225 135.375 141.825C135.825 141.408 136.05 140.833 136.05 140.1C136.05 139.45 135.825 138.908 135.375 138.475C134.925 138.025 134.3 137.8 133.5 137.8H128.7V142.425H133.5ZM152.686 145H150.061V143.4C148.928 144.667 147.503 145.3 145.786 145.3C143.203 145.3 141.911 144.025 141.911 141.475V132.925H144.536V140.525C144.536 141.408 144.744 142.042 145.161 142.425C145.578 142.792 146.178 142.975 146.961 142.975C147.594 142.975 148.186 142.825 148.736 142.525C149.286 142.225 149.728 141.85 150.061 141.4V132.925H152.686V145ZM159.721 145.3C158.704 145.3 157.929 145.033 157.396 144.5C156.879 143.967 156.621 143.2 156.621 142.2V135.225H154.621V132.925H156.621V129.625H159.246V132.925H161.696V135.225H159.246V141.55C159.246 141.983 159.346 142.333 159.546 142.6C159.746 142.85 160.029 142.975 160.396 142.975C160.929 142.975 161.321 142.833 161.571 142.55L162.196 144.525C161.646 145.042 160.821 145.3 159.721 145.3ZM167.704 145.3C166.687 145.3 165.912 145.033 165.379 144.5C164.862 143.967 164.604 143.2 164.604 142.2V135.225H162.604V132.925H164.604V129.625H167.229V132.925H169.679V135.225H167.229V141.55C167.229 141.983 167.329 142.333 167.529 142.6C167.729 142.85 168.012 142.975 168.379 142.975C168.912 142.975 169.304 142.833 169.554 142.55L170.179 144.525C169.629 145.042 168.804 145.3 167.704 145.3ZM177.512 145.3C175.646 145.3 174.146 144.692 173.012 143.475C171.879 142.242 171.312 140.733 171.312 138.95C171.312 137.167 171.879 135.667 173.012 134.45C174.146 133.233 175.646 132.625 177.512 132.625C179.396 132.625 180.904 133.233 182.037 134.45C183.171 135.667 183.737 137.167 183.737 138.95C183.737 140.75 183.171 142.258 182.037 143.475C180.904 144.692 179.396 145.3 177.512 145.3ZM177.512 142.975C178.596 142.975 179.446 142.592 180.062 141.825C180.696 141.042 181.012 140.083 181.012 138.95C181.012 137.833 180.696 136.892 180.062 136.125C179.446 135.342 178.596 134.95 177.512 134.95C176.446 134.95 175.596 135.342 174.962 136.125C174.346 136.892 174.037 137.833 174.037 138.95C174.037 140.083 174.346 141.042 174.962 141.825C175.596 142.592 176.446 142.975 177.512 142.975ZM197.168 145H194.543V137.45C194.543 135.783 193.735 134.95 192.118 134.95C191.485 134.95 190.893 135.108 190.343 135.425C189.793 135.742 189.352 136.125 189.018 136.575V145H186.393V132.925H189.018V134.575C189.468 134.042 190.068 133.583 190.818 133.2C191.568 132.817 192.385 132.625 193.268 132.625C194.552 132.625 195.518 132.958 196.168 133.625C196.835 134.292 197.168 135.25 197.168 136.5V145Z" fill="white"/> </svg>'
}, {
  value: 'preset-3',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 3', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'btnBorderStyle',
    value: 'none'
  }, {
    label: 'btnBorderTopLeftRadius',
    value: 30
  }, {
    label: 'btnBorderTopRightRadius',
    value: 30
  }, {
    label: 'btnBorderBottomLeftRadius',
    value: 30
  }, {
    label: 'btnBorderBottomRightRadius',
    value: 30
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="58" y="101" width="209.786" height="70" rx="35" fill="#B6B6B6"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="white"/> </svg>'
}, {
  value: 'preset-4',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 4', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'btnBorderStyle',
    value: 'solid'
  }, {
    label: 'btnBorderTopWidth',
    value: 1
  }, {
    label: 'btnBorderLeftWidth',
    value: 1
  }, {
    label: 'btnBorderRightWidth',
    value: 1
  }, {
    label: 'btnBorderBottomWidth',
    value: 1
  }, {
    label: 'submitBgColor',
    value: '#00000000'
  }, {
    label: 'submitBgColorHover',
    value: '#3a3a3a'
  }, {
    label: 'submitColor',
    value: '#0170b9'
  }, {
    label: 'submitColorHover',
    value: '#ffffff'
  }, {
    label: 'btnBorderTopLeftRadius',
    value: 0
  }, {
    label: 'btnBorderTopRightRadius',
    value: 0
  }, {
    label: 'btnBorderBottomLeftRadius',
    value: 0
  }, {
    label: 'btnBorderBottomRightRadius',
    value: 0
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="#959595"/> </svg>'
}, {
  value: 'preset-5',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 5', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'btnBorderStyle',
    value: 'solid'
  }, {
    label: 'btnBorderTopWidth',
    value: 1
  }, {
    label: 'btnBorderLeftWidth',
    value: 1
  }, {
    label: 'btnBorderRightWidth',
    value: 1
  }, {
    label: 'btnBorderBottomWidth',
    value: 1
  }, {
    label: 'submitBgColor',
    value: '#00000000'
  }, {
    label: 'submitBgColorHover',
    value: '#3a3a3a'
  }, {
    label: 'submitColor',
    value: '#0170b9'
  }, {
    label: 'submitColorHover',
    value: '#ffffff'
  }, {
    label: 'btnBorderTopLeftRadius',
    value: 5
  }, {
    label: 'btnBorderTopRightRadius',
    value: 5
  }, {
    label: 'btnBorderBottomLeftRadius',
    value: 5
  }, {
    label: 'btnBorderBottomRightRadius',
    value: 5
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" rx="5" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="#959595"/> </svg>'
}, {
  value: 'preset-6',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 6', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'btnBorderStyle',
    value: 'solid'
  }, {
    label: 'btnBorderTopWidth',
    value: 1
  }, {
    label: 'btnBorderLeftWidth',
    value: 1
  }, {
    label: 'btnBorderRightWidth',
    value: 1
  }, {
    label: 'btnBorderBottomWidth',
    value: 1
  }, {
    label: 'submitBgColor',
    value: '#00000000'
  }, {
    label: 'submitBgColorHover',
    value: '#3a3a3a'
  }, {
    label: 'submitColor',
    value: '#0170b9'
  }, {
    label: 'submitColorHover',
    value: '#ffffff'
  }, {
    label: 'btnBorderTopLeftRadius',
    value: 30
  }, {
    label: 'btnBorderTopRightRadius',
    value: 30
  }, {
    label: 'btnBorderBottomLeftRadius',
    value: 30
  }, {
    label: 'btnBorderBottomRightRadius',
    value: 30
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" rx="34" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 143H125.775V126.325H133.975C135.458 126.325 136.617 126.733 137.45 127.55C138.3 128.35 138.725 129.358 138.725 130.575C138.725 131.575 138.442 132.425 137.875 133.125C137.325 133.808 136.642 134.233 135.825 134.4C136.725 134.533 137.483 135 138.1 135.8C138.733 136.583 139.05 137.483 139.05 138.5C139.05 139.833 138.617 140.917 137.75 141.75C136.9 142.583 135.717 143 134.2 143ZM133.375 133.225C134.108 133.225 134.683 133.025 135.1 132.625C135.517 132.225 135.725 131.708 135.725 131.075C135.725 130.425 135.517 129.9 135.1 129.5C134.683 129.1 134.108 128.9 133.375 128.9H128.7V133.225H133.375ZM133.5 140.425C134.3 140.425 134.925 140.225 135.375 139.825C135.825 139.408 136.05 138.833 136.05 138.1C136.05 137.45 135.825 136.908 135.375 136.475C134.925 136.025 134.3 135.8 133.5 135.8H128.7V140.425H133.5ZM152.686 143H150.061V141.4C148.928 142.667 147.503 143.3 145.786 143.3C143.203 143.3 141.911 142.025 141.911 139.475V130.925H144.536V138.525C144.536 139.408 144.744 140.042 145.161 140.425C145.578 140.792 146.178 140.975 146.961 140.975C147.594 140.975 148.186 140.825 148.736 140.525C149.286 140.225 149.728 139.85 150.061 139.4V130.925H152.686V143ZM159.721 143.3C158.704 143.3 157.929 143.033 157.396 142.5C156.879 141.967 156.621 141.2 156.621 140.2V133.225H154.621V130.925H156.621V127.625H159.246V130.925H161.696V133.225H159.246V139.55C159.246 139.983 159.346 140.333 159.546 140.6C159.746 140.85 160.029 140.975 160.396 140.975C160.929 140.975 161.321 140.833 161.571 140.55L162.196 142.525C161.646 143.042 160.821 143.3 159.721 143.3ZM167.704 143.3C166.687 143.3 165.912 143.033 165.379 142.5C164.862 141.967 164.604 141.2 164.604 140.2V133.225H162.604V130.925H164.604V127.625H167.229V130.925H169.679V133.225H167.229V139.55C167.229 139.983 167.329 140.333 167.529 140.6C167.729 140.85 168.012 140.975 168.379 140.975C168.912 140.975 169.304 140.833 169.554 140.55L170.179 142.525C169.629 143.042 168.804 143.3 167.704 143.3ZM177.512 143.3C175.646 143.3 174.146 142.692 173.012 141.475C171.879 140.242 171.312 138.733 171.312 136.95C171.312 135.167 171.879 133.667 173.012 132.45C174.146 131.233 175.646 130.625 177.512 130.625C179.396 130.625 180.904 131.233 182.037 132.45C183.171 133.667 183.737 135.167 183.737 136.95C183.737 138.75 183.171 140.258 182.037 141.475C180.904 142.692 179.396 143.3 177.512 143.3ZM177.512 140.975C178.596 140.975 179.446 140.592 180.062 139.825C180.696 139.042 181.012 138.083 181.012 136.95C181.012 135.833 180.696 134.892 180.062 134.125C179.446 133.342 178.596 132.95 177.512 132.95C176.446 132.95 175.596 133.342 174.962 134.125C174.346 134.892 174.037 135.833 174.037 136.95C174.037 138.083 174.346 139.042 174.962 139.825C175.596 140.592 176.446 140.975 177.512 140.975ZM197.168 143H194.543V135.45C194.543 133.783 193.735 132.95 192.118 132.95C191.485 132.95 190.893 133.108 190.343 133.425C189.793 133.742 189.352 134.125 189.018 134.575V143H186.393V130.925H189.018V132.575C189.468 132.042 190.068 131.583 190.818 131.2C191.568 130.817 192.385 130.625 193.268 130.625C194.552 130.625 195.518 130.958 196.168 131.625C196.835 132.292 197.168 133.25 197.168 134.5V143Z" fill="#959595"/> </svg>'
}];


/***/ }),

/***/ "./src/blocks/forms/settings.js":
/*!**************************************!*\
  !*** ./src/blocks/forms/settings.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/responsive-border */ "./src/components/responsive-border/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _Components_select_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/select-control */ "./src/components/select-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./presets */ "./src/blocks/forms/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






















const Settings = props => {
  props = props.parentProps;
  const {
    attributes,
    setAttributes,
    deviceType
  } = props;
  const {
    formPaddingTop,
    formPaddingRight,
    formPaddingBottom,
    formPaddingLeft,
    formPaddingTopTab,
    formPaddingRightTab,
    formPaddingBottomTab,
    formPaddingLeftTab,
    formPaddingTopMob,
    formPaddingRightMob,
    formPaddingBottomMob,
    formPaddingLeftMob,
    formPaddingUnit,
    formPaddingUnitTab,
    formPaddingUnitMob,
    formPaddingLink,
    formLabel,
    buttonAlign,
    buttonAlignTablet,
    buttonAlignMobile,
    buttonSize,
    confirmationType,
    confirmationMessage,
    failedMessage,
    confirmationUrl,
    afterSubmitToEmail,
    afterSubmitCcEmail,
    afterSubmitBccEmail,
    afterSubmitEmailSubject,
    submitColor,
    submitColorHover,
    submitBgColor,
    submitBgColorHover,
    submitTextloadGoogleFonts,
    submitTextFontFamily,
    submitTextFontWeight,
    submitTextFontSize,
    submitTextFontSizeType,
    submitTextFontSizeTablet,
    submitTextFontSizeMobile,
    submitTextLineHeightType,
    submitTextLineHeight,
    submitTextLineHeightTablet,
    submitTextLineHeightMobile,
    labelloadGoogleFonts,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelFontSizeType,
    labelFontSizeTablet,
    labelFontSizeMobile,
    labelLineHeightType,
    labelLineHeight,
    labelLineHeightTablet,
    labelLineHeightMobile,
    inputloadGoogleFonts,
    inputFontFamily,
    inputFontWeight,
    inputFontSize,
    inputFontSizeType,
    inputFontSizeTablet,
    inputFontSizeMobile,
    inputLineHeightType,
    inputLineHeight,
    inputLineHeightTablet,
    inputLineHeightMobile,
    toggleSize,
    toggleSizeTablet,
    toggleSizeMobile,
    toggleWidthSize,
    toggleWidthSizeTablet,
    toggleWidthSizeMobile,
    toggleColor,
    toggleActiveColor,
    toggleDotColor,
    toggleDotActiveColor,
    labelColor,
    labelHoverColor,
    inputColor,
    bgColor,
    bgHoverColor,
    bgActiveColor,
    inputplaceholderColor,
    inputplaceholderHoverColor,
    inputplaceholderActiveColor,
    fieldGap,
    fieldGapTablet,
    fieldGapMobile,
    formStyle,
    overallAlignment,
    reCaptchaEnable,
    reCaptchaType,
    successMessageTextColor,
    successMessageBGColor,
    failedMessageTextColor,
    failedMessageBGColor,
    paddingBtnTop,
    paddingBtnRight,
    paddingBtnBottom,
    paddingBtnLeft,
    paddingBtnTopTablet,
    paddingBtnRightTablet,
    paddingBtnBottomTablet,
    paddingBtnLeftTablet,
    paddingBtnTopMobile,
    paddingBtnRightMobile,
    paddingBtnBottomMobile,
    paddingBtnLeftMobile,
    paddingBtnUnit,
    mobilePaddingBtnUnit,
    tabletPaddingBtnUnit,
    paddingspacingLink,
    submitTextTransform,
    submitTextDecoration,
    labelTransform,
    labelDecoration,
    inputTransform,
    inputDecoration,
    fieldGapType,
    paddingFieldTop,
    paddingFieldRight,
    paddingFieldBottom,
    paddingFieldLeft,
    paddingFieldTopTablet,
    paddingFieldRightTablet,
    paddingFieldBottomTablet,
    paddingFieldLeftTablet,
    paddingFieldTopMobile,
    paddingFieldRightMobile,
    paddingFieldBottomMobile,
    paddingFieldLeftMobile,
    paddingFieldUnit,
    paddingFieldUnitmobile,
    paddingFieldUnitTablet,
    paddingFieldLink,
    toggleSizeType,
    submitTextFontStyle,
    labelFontStyle,
    inputFontStyle,
    hidereCaptchaBatch,
    labelGap,
    labelGapTablet,
    labelGapMobile,
    labelGapUnit,
    displayLabels,
    labelLetterSpacing,
    labelLetterSpacingTablet,
    labelLetterSpacingMobile,
    labelLetterSpacingType,
    inputLetterSpacing,
    inputLetterSpacingTablet,
    inputLetterSpacingMobile,
    inputLetterSpacingType,
    submitTextLetterSpacing,
    submitTextLetterSpacingTablet,
    submitTextLetterSpacingMobile,
    submitTextLetterSpacingType
  } = attributes;

  const presetSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Presets', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_18__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_17__["default"],
      presetInputType: "radioImage"
    }));
  };

  const generalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Show Labels', 'ultimate-addons-for-gutenberg'),
      checked: displayLabels,
      onChange: () => setAttributes({
        displayLabels: !displayLabels
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hidden Field Label', 'ultimate-addons-for-gutenberg'),
      value: formLabel,
      onChange: value => setAttributes({
        formLabel: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Style', 'ultimate-addons-for-gutenberg'),
      data: {
        value: formStyle,
        label: 'formStyle'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'boxed',
        label: 'Boxed'
      }, {
        value: 'underlined',
        label: 'Underlined'
      }],
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Overall Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: overallAlignment,
        label: 'overallAlignment'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'left',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'center',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'right',
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Confirmation Type', 'ultimate-addons-for-gutenberg'),
      data: {
        value: confirmationType,
        label: 'confirmationType'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'message',
        label: 'Message'
      }, {
        value: 'url',
        label: 'URL Text'
      }],
      showIcons: false
    }), 'message' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["TextareaControl"], {
      label: "Success Message Text",
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a message you want to display after successfull form submission', 'ultimate-addons-for-gutenberg'),
      value: confirmationMessage,
      onChange: value => setAttributes({
        confirmationMessage: value
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["TextareaControl"], {
      label: "Error Message Text",
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a message you want to display after unsuccessfull form submission', 'ultimate-addons-for-gutenberg'),
      value: failedMessage,
      onChange: value => setAttributes({
        failedMessage: value
      })
    })), 'url' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success Redirect URL', 'ultimate-addons-for-gutenberg'),
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enter a URL you want to redirect your page to after form Submission', 'ultimate-addons-for-gutenberg'),
      value: confirmationUrl,
      onChange: value => setAttributes({
        confirmationUrl: value
      })
    }));
  };

  const successMessageStyle = () => 'message' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
    colorValue: successMessageTextColor ? successMessageTextColor : '',
    data: {
      value: successMessageTextColor,
      label: 'successMessageTextColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: successMessageBGColor ? successMessageBGColor : '',
    data: {
      value: successMessageBGColor,
      label: 'successMessageBGColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    prefix: 'successMsg',
    disabledBorderTitle: false,
    attributes: attributes,
    deviceType: deviceType,
    disableBottomSeparator: true
  }));

  const failedMessageStyle = () => 'message' === confirmationType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
    colorValue: failedMessageTextColor ? failedMessageTextColor : '',
    data: {
      value: failedMessageTextColor,
      label: 'failedMessageTextColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
    colorValue: failedMessageBGColor ? failedMessageBGColor : '',
    data: {
      value: failedMessageBGColor,
      label: 'failedMessageBGColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    prefix: 'errorMsg',
    disabledBorderTitle: false,
    attributes: attributes,
    deviceType: deviceType,
    disableBottomSeparator: true
  }));

  const afterSubmitActions = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Actions'),
      initialOpen: false,
      className: "uagb__url-panel-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-form-notice"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Note: It is required to enter an email ID to receive the data submitted via Form. Else you will not receive any data.', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
      tabs: [{
        name: 'to',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('To', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'cc',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('CC', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'bcc',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('BCC', 'ultimate-addons-for-gutenberg')
      }],
      to: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["TextControl"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg'),
        value: afterSubmitToEmail,
        onChange: value => setAttributes({
          afterSubmitToEmail: value
        })
      }),
      cc: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["TextControl"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg'),
        value: afterSubmitCcEmail,
        onChange: value => setAttributes({
          afterSubmitCcEmail: value
        })
      }),
      bcc: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["TextControl"], {
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Email', 'ultimate-addons-for-gutenberg'),
        value: afterSubmitBccEmail,
        onChange: value => setAttributes({
          afterSubmitBccEmail: value
        })
      }),
      disableBottomSeparator: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Subject', 'ultimate-addons-for-gutenberg'),
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Subject', 'ultimate-addons-for-gutenberg'),
      value: afterSubmitEmailSubject,
      onChange: value => setAttributes({
        afterSubmitEmailSubject: value
      })
    }));
  };

  const labelStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label', 'ultimate-addons-for-gutenberg'),
    initialOpen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: labelloadGoogleFonts,
      label: 'labelloadGoogleFonts'
    },
    fontFamily: {
      value: labelFontFamily,
      label: 'labelFontFamily'
    },
    fontWeight: {
      value: labelFontWeight,
      label: 'labelFontWeight'
    },
    fontStyle: {
      value: labelFontStyle,
      label: 'labelFontStyle'
    },
    fontSizeType: {
      value: labelFontSizeType,
      label: 'labelFontSizeType'
    },
    fontSize: {
      value: labelFontSize,
      label: 'labelFontSize'
    },
    fontSizeMobile: {
      value: labelFontSizeMobile,
      label: 'labelFontSizeMobile'
    },
    fontSizeTablet: {
      value: labelFontSizeTablet,
      label: 'labelFontSizeTablet'
    },
    lineHeightType: {
      value: labelLineHeightType,
      label: 'labelLineHeightType'
    },
    lineHeight: {
      value: labelLineHeight,
      label: 'labelLineHeight'
    },
    lineHeightMobile: {
      value: labelLineHeightMobile,
      label: 'labelLineHeightMobile'
    },
    lineHeightTablet: {
      value: labelLineHeightTablet,
      label: 'labelLineHeightTablet'
    },
    letterSpacing: {
      value: labelLetterSpacing,
      label: 'labelLetterSpacing'
    },
    letterSpacingTablet: {
      value: labelLetterSpacingTablet,
      label: 'labelLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: labelLetterSpacingMobile,
      label: 'labelLetterSpacingMobile'
    },
    letterSpacingType: {
      value: labelLetterSpacingType,
      label: 'labelLetterSpacingType'
    },
    transform: {
      value: labelTransform,
      label: 'labelTransform'
    },
    decoration: {
      value: labelDecoration,
      label: 'labelDecoration'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
    }],
    normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: labelColor ? labelColor : '',
      data: {
        value: labelColor,
        label: 'labelColor'
      },
      setAttributes: setAttributes
    })),
    hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: labelHoverColor ? labelHoverColor : '',
      data: {
        value: labelHoverColor,
        label: 'labelHoverColor'
      },
      setAttributes: setAttributes
    })),
    disableBottomSeparator: true
  }));

  const inputStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input', 'ultimate-addons-for-gutenberg') // If displayLabels is false, this panel would be shown first and hence it's initialOpen should be set to true.
    ,
    initialOpen: !displayLabels
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    colorValue: inputColor ? inputColor : '',
    data: {
      value: inputColor,
      label: 'inputColor'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'active',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Active', 'ultimate-addons-for-gutenberg')
    }],
    normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Placeholder Color', 'ultimate-addons-for-gutenberg'),
      colorValue: inputplaceholderColor ? inputplaceholderColor : '',
      data: {
        value: inputplaceholderColor,
        label: 'inputplaceholderColor'
      },
      setAttributes: setAttributes
    }), 'underlined' !== formStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgColor ? bgColor : '',
      data: {
        value: bgColor,
        label: 'bgColor'
      },
      setAttributes: setAttributes
    })),
    hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Placeholder Color', 'ultimate-addons-for-gutenberg'),
      colorValue: inputplaceholderHoverColor ? inputplaceholderHoverColor : '',
      data: {
        value: inputplaceholderHoverColor,
        label: 'inputplaceholderHoverColor'
      },
      setAttributes: setAttributes
    }), 'underlined' !== formStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgHoverColor ? bgHoverColor : '',
      data: {
        value: bgHoverColor,
        label: 'bgHoverColor'
      },
      setAttributes: setAttributes
    })),
    active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Placeholder Color', 'ultimate-addons-for-gutenberg'),
      colorValue: inputplaceholderActiveColor ? inputplaceholderActiveColor : '',
      data: {
        value: inputplaceholderActiveColor,
        label: 'inputplaceholderActiveColor'
      },
      setAttributes: setAttributes
    }), 'underlined' !== formStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgActiveColor ? bgActiveColor : '',
      data: {
        value: bgActiveColor,
        label: 'bgActiveColor'
      },
      setAttributes: setAttributes
    })),
    disableBottomSeparator: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    prefix: 'field',
    disabledBorderTitle: false,
    attributes: attributes,
    deviceType: deviceType
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input Padding', 'ultimate-addons-for-gutenberg'),
    valueTop: {
      value: paddingFieldTop,
      label: 'paddingFieldTop'
    },
    valueRight: {
      value: paddingFieldRight,
      label: 'paddingFieldRight'
    },
    valueBottom: {
      value: paddingFieldBottom,
      label: 'paddingFieldBottom'
    },
    valueLeft: {
      value: paddingFieldLeft,
      label: 'paddingFieldLeft'
    },
    valueTopTablet: {
      value: paddingFieldTopTablet,
      label: 'paddingFieldTopTablet'
    },
    valueRightTablet: {
      value: paddingFieldRightTablet,
      label: 'paddingFieldRightTablet'
    },
    valueBottomTablet: {
      value: paddingFieldBottomTablet,
      label: 'paddingFieldBottomTablet'
    },
    valueLeftTablet: {
      value: paddingFieldLeftTablet,
      label: 'paddingFieldLeftTablet'
    },
    valueTopMobile: {
      value: paddingFieldTopMobile,
      label: 'paddingFieldTopMobile'
    },
    valueRightMobile: {
      value: paddingFieldRightMobile,
      label: 'paddingFieldRightMobile'
    },
    valueBottomMobile: {
      value: paddingFieldBottomMobile,
      label: 'paddingFieldBottomMobile'
    },
    valueLeftMobile: {
      value: paddingFieldLeftMobile,
      label: 'paddingFieldLeftMobile'
    },
    unit: {
      value: paddingFieldUnit,
      label: 'paddingFieldUnit'
    },
    mUnit: {
      value: paddingFieldUnitmobile,
      label: 'paddingFieldUnitmobile'
    },
    tUnit: {
      value: paddingFieldUnitTablet,
      label: 'paddingFieldUnitTablet'
    },
    deviceType: deviceType,
    attributes: attributes,
    setAttributes: setAttributes,
    link: {
      value: paddingFieldLink,
      label: 'paddingFieldLink'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Input Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: inputloadGoogleFonts,
      label: 'inputloadGoogleFonts'
    },
    fontFamily: {
      value: inputFontFamily,
      label: 'inputFontFamily'
    },
    fontWeight: {
      value: inputFontWeight,
      label: 'inputFontWeight'
    },
    fontStyle: {
      value: inputFontStyle,
      label: 'inputFontStyle'
    },
    fontSizeType: {
      value: inputFontSizeType,
      label: 'inputFontSizeType'
    },
    fontSize: {
      value: inputFontSize,
      label: 'inputFontSize'
    },
    fontSizeMobile: {
      value: inputFontSizeMobile,
      label: 'inputFontSizeMobile'
    },
    fontSizeTablet: {
      value: inputFontSizeTablet,
      label: 'inputFontSizeTablet'
    },
    lineHeightType: {
      value: inputLineHeightType,
      label: 'inputLineHeightType'
    },
    lineHeight: {
      value: inputLineHeight,
      label: 'inputLineHeight'
    },
    lineHeightMobile: {
      value: inputLineHeightMobile,
      label: 'inputLineHeightMobile'
    },
    lineHeightTablet: {
      value: inputLineHeightTablet,
      label: 'inputLineHeightTablet'
    },
    letterSpacing: {
      value: inputLetterSpacing,
      label: 'inputLetterSpacing'
    },
    letterSpacingTablet: {
      value: inputLetterSpacingTablet,
      label: 'inputLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: inputLetterSpacingMobile,
      label: 'inputLetterSpacingMobile'
    },
    letterSpacingType: {
      value: inputLetterSpacingType,
      label: 'inputLetterSpacingType'
    },
    transform: {
      value: inputTransform,
      label: 'inputTransform'
    },
    decoration: {
      value: inputDecoration,
      label: 'inputDecoration'
    }
  }));

  const elementStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Checkbox/Toggle/Radio', 'ultimate-addons-for-gutenberg'),
    initialOpen: false // className="uagb__url-panel-body"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Checkbox/Radio Size', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: toggleSize,
        label: 'toggleSize'
      },
      tablet: {
        value: toggleSizeTablet,
        label: 'toggleSizeTablet'
      },
      mobile: {
        value: toggleSizeMobile,
        label: 'toggleSizeMobile'
      }
    },
    min: 0,
    max: 50,
    unit: {
      value: toggleSizeType,
      label: 'toggleSizeType'
    },
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Toggle Size', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: toggleWidthSize,
        label: 'toggleWidthSize'
      },
      tablet: {
        value: toggleWidthSizeTablet,
        label: 'toggleWidthSizeTablet'
      },
      mobile: {
        value: toggleWidthSizeMobile,
        label: 'toggleWidthSizeMobile'
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
      name: 'active',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Active', 'ultimate-addons-for-gutenberg')
    }],
    normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: toggleColor ? toggleColor : '',
      data: {
        value: toggleColor,
        label: 'toggleColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Element Color', 'ultimate-addons-for-gutenberg'),
      colorValue: toggleDotColor ? toggleDotColor : '',
      data: {
        value: toggleDotColor,
        label: 'toggleDotColor'
      },
      setAttributes: setAttributes
    })),
    active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: toggleActiveColor ? toggleActiveColor : '',
      data: {
        value: toggleActiveColor,
        label: 'toggleActiveColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Element Color', 'ultimate-addons-for-gutenberg'),
      colorValue: toggleDotActiveColor ? toggleDotActiveColor : '',
      data: {
        value: toggleDotActiveColor,
        label: 'toggleDotActiveColor'
      },
      setAttributes: setAttributes
    })),
    disableBottomSeparator: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    prefix: 'checkBoxToggle',
    disabledBorderTitle: false,
    attributes: attributes,
    deviceType: deviceType,
    borderHoverColorLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
    hoverTabLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Active', 'ultimate-addons-for-gutenberg'),
    disableBottomSeparator: true
  }));

  const submitStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Submit Button', 'ultimate-addons-for-gutenberg'),
    initialOpen: false // className="uagb__url-panel-body"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_18__["default"], {
    setAttributes: setAttributes,
    presets: _presets__WEBPACK_IMPORTED_MODULE_17__["buttonsPresets"],
    presetInputType: "radioImage"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_15__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Size', 'ultimate-addons-for-gutenberg'),
    data: {
      value: buttonSize,
      label: 'buttonSize'
    },
    setAttributes: setAttributes,
    options: [{
      value: 'small',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Small', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'medium',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Medium', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'large',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'extralarge',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Extra Large', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'full',
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Full', 'ultimate-addons-for-gutenberg')
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setAttributes: setAttributes,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button Alignment', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: buttonAlign,
        label: 'buttonAlign'
      },
      tablet: {
        value: buttonAlignTablet,
        label: 'buttonAlignTablet'
      },
      mobile: {
        value: buttonAlignMobile,
        label: 'buttonAlignMobile'
      }
    },
    options: [{
      value: 'left',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-left')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Left', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'center',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-center')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Center', 'ultimate-addons-for-gutenberg')
    }, {
      value: 'right',
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
        icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_13__["default"])('fa fa-align-right')
      }),
      tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Right', 'ultimate-addons-for-gutenberg')
    }],
    showIcons: true,
    responsive: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
    tabs: [{
      name: 'normal',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Normal', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'hover',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hover', 'ultimate-addons-for-gutenberg')
    }],
    normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: submitColor ? submitColor : '',
      data: {
        value: submitColor,
        label: 'submitColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: submitBgColor ? submitBgColor : '',
      data: {
        value: submitBgColor,
        label: 'submitBgColor'
      },
      setAttributes: setAttributes
    })),
    hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: submitColorHover ? submitColorHover : '',
      data: {
        value: submitColorHover,
        label: 'submitColorHover'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: submitBgColorHover ? submitBgColorHover : '',
      data: {
        value: submitBgColorHover,
        label: 'submitBgColorHover'
      },
      setAttributes: setAttributes
    }))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setAttributes: setAttributes,
    prefix: 'btn',
    disabledBorderTitle: false,
    attributes: attributes,
    deviceType: deviceType
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
    attributes: attributes,
    setAttributes: setAttributes,
    loadGoogleFonts: {
      value: submitTextloadGoogleFonts,
      label: 'submitTextloadGoogleFonts'
    },
    fontFamily: {
      value: submitTextFontFamily,
      label: 'submitTextFontFamily'
    },
    fontWeight: {
      value: submitTextFontWeight,
      label: 'submitTextFontWeight'
    },
    fontStyle: {
      value: submitTextFontStyle,
      label: 'submitTextFontStyle'
    },
    fontSizeType: {
      value: submitTextFontSizeType,
      label: 'submitTextFontSizeType'
    },
    fontSize: {
      value: submitTextFontSize,
      label: 'submitTextFontSize'
    },
    fontSizeMobile: {
      value: submitTextFontSizeMobile,
      label: 'submitTextFontSizeMobile'
    },
    fontSizeTablet: {
      value: submitTextFontSizeTablet,
      label: 'submitTextFontSizeTablet'
    },
    lineHeightType: {
      value: submitTextLineHeightType,
      label: 'submitTextLineHeightType'
    },
    lineHeight: {
      value: submitTextLineHeight,
      label: 'submitTextLineHeight'
    },
    lineHeightMobile: {
      value: submitTextLineHeightMobile,
      label: 'submitTextLineHeightMobile'
    },
    lineHeightTablet: {
      value: submitTextLineHeightTablet,
      label: 'submitTextLineHeightTablet'
    },
    letterSpacing: {
      value: submitTextLetterSpacing,
      label: 'submitTextLetterSpacing'
    },
    letterSpacingTablet: {
      value: submitTextLetterSpacingTablet,
      label: 'submitTextLetterSpacingTablet'
    },
    letterSpacingMobile: {
      value: submitTextLetterSpacingMobile,
      label: 'submitTextLetterSpacingMobile'
    },
    letterSpacingType: {
      value: submitTextLetterSpacingType,
      label: 'submitTextLetterSpacingType'
    },
    transform: {
      value: submitTextTransform,
      label: 'submitTextTransform'
    },
    decoration: {
      value: submitTextDecoration,
      label: 'submitTextDecoration'
    }
  }));

  const messageStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Messages', 'ultimate-addons-for-gutenberg'),
    initialOpen: false // className="uagb__url-panel-body"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
    tabs: [{
      name: 'success',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Success', 'ultimate-addons-for-gutenberg')
    }, {
      name: 'error',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Error', 'ultimate-addons-for-gutenberg')
    }],
    success: successMessageStyle(),
    error: failedMessageStyle(),
    disableBottomSeparator: true
  }));

  const spaceStyling = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
    initialOpen: false // className="uagb__url-panel-body"

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, props, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Form Padding', 'ultimate-addons-for-gutenberg'),
    valueTop: {
      value: formPaddingTop,
      label: 'formPaddingTop'
    },
    valueRight: {
      value: formPaddingRight,
      label: 'formPaddingRight'
    },
    valueBottom: {
      value: formPaddingBottom,
      label: 'formPaddingBottom'
    },
    valueLeft: {
      value: formPaddingLeft,
      label: 'formPaddingLeft'
    },
    valueTopTablet: {
      value: formPaddingTopTab,
      label: 'formPaddingTopTab'
    },
    valueRightTablet: {
      value: formPaddingRightTab,
      label: 'formPaddingRightTab'
    },
    valueBottomTablet: {
      value: formPaddingBottomTab,
      label: 'formPaddingBottomTab'
    },
    valueLeftTablet: {
      value: formPaddingLeftTab,
      label: 'formPaddingLeftTab'
    },
    valueTopMobile: {
      value: formPaddingTopMob,
      label: 'formPaddingTopMob'
    },
    valueRightMobile: {
      value: formPaddingRightMob,
      label: 'formPaddingRightMob'
    },
    valueBottomMobile: {
      value: formPaddingBottomMob,
      label: 'formPaddingBottomMob'
    },
    valueLeftMobile: {
      value: formPaddingLeftMob,
      label: 'formPaddingLeftMob'
    },
    unit: {
      value: formPaddingUnit,
      label: 'formPaddingUnit'
    },
    mUnit: {
      value: formPaddingUnitTab,
      label: 'formPaddingUnitTab'
    },
    tUnit: {
      value: formPaddingUnitMob,
      label: 'formPaddingUnitMob'
    },
    deviceType: deviceType,
    attributes: attributes,
    setAttributes: setAttributes,
    link: {
      value: formPaddingLink,
      label: 'formPaddingLink'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Row Spacing', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: fieldGap,
        label: 'fieldGap'
      },
      tablet: {
        value: fieldGapTablet,
        label: 'fieldGapTablet'
      },
      mobile: {
        value: fieldGapMobile,
        label: 'fieldGapMobile'
      }
    },
    min: 0,
    max: 100,
    unit: {
      value: fieldGapType,
      label: 'fieldGapType'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%', 'ultimate-addons-for-gutenberg'),
      unitValue: '%'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('em', 'ultimate-addons-for-gutenberg'),
      unitValue: 'em'
    }],
    setAttributes: setAttributes
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Label Bottom Margin', 'ultimate-addons-for-gutenberg'),
    data: {
      desktop: {
        value: labelGap,
        label: 'labelGap'
      },
      tablet: {
        value: labelGapTablet,
        label: 'labelGapTablet'
      },
      mobile: {
        value: labelGapMobile,
        label: 'labelGapMobile'
      }
    },
    min: 0,
    max: 100,
    unit: {
      value: labelGapUnit,
      label: 'labelGapUnit'
    },
    units: [{
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pixel', 'ultimate-addons-for-gutenberg'),
      unitValue: 'px'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('%', 'ultimate-addons-for-gutenberg'),
      unitValue: '%'
    }, {
      name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('em', 'ultimate-addons-for-gutenberg'),
      unitValue: 'em'
    }],
    setAttributes: setAttributes
  }));

  const googleReCaptcha = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_19__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Google reCAPTCHA', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-form-notice"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Enable reCAPTCHA ', 'ultimate-addons-for-gutenberg'),
      checked: reCaptchaEnable,
      onChange: () => setAttributes({
        reCaptchaEnable: !reCaptchaEnable
      })
    }), reCaptchaEnable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "uagb-form-notice"
    }, "Please configure the Google reCAPTCHA Site & Secret key from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      target: "_blank",
      href: `${uagb_blocks_info.uagb_home_url}/wp-admin/options-general.php?page=spectra&path=settings&settings=block-settings`,
      rel: "noreferrer"
    }, "here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Version', 'ultimate-addons-for-gutenberg'),
      data: {
        value: reCaptchaType,
        label: 'reCaptchaType'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'v2',
        label: 'V2',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('V2', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'v3',
        label: 'V3',
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('V3', 'ultimate-addons-for-gutenberg')
      }],
      showIcons: false
    })), reCaptchaEnable && 'v3' === reCaptchaType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_16__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hide reCAPTCHA Badge', 'ultimate-addons-for-gutenberg'),
      checked: hidereCaptchaBatch,
      onChange: () => setAttributes({
        hidereCaptchaBatch: !hidereCaptchaBatch
      })
    }));
  };

  let loadsubmittextGoogleFonts;

  if (submitTextloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [submitTextFontFamily + (submitTextFontWeight ? ':' + submitTextFontWeight : '')]
      }
    };
    loadsubmittextGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  let loadlabelGoogleFonts;

  if (labelloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [labelFontFamily + (labelFontWeight ? ':' + labelFontWeight : '')]
      }
    };
    loadlabelGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  let loadinputGoogleFonts;

  if (inputloadGoogleFonts === true) {
    const qconfig = {
      google: {
        families: [inputFontFamily + (inputFontWeight ? ':' + inputFontWeight : '')]
      }
    };
    loadinputGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      config: qconfig
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, presetSettings(), generalSettings(), afterSubmitActions(), googleReCaptcha()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, displayLabels && labelStyling(), inputStyling(), elementStyling(), submitStyling(), messageStyling(), spaceStyling()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
    parentProps: props
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }, loadsubmittextGoogleFonts, loadlabelGoogleFonts, loadinputGoogleFonts));
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