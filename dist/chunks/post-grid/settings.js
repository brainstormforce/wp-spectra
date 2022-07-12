(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/post-grid/settings"],{

/***/ "./src/blocks/post/post-grid/presets.js":
/*!**********************************************!*\
  !*** ./src/blocks/post/post-grid/presets.js ***!
  \**********************************************/
/*! exports provided: buttonsPresets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonsPresets", function() { return buttonsPresets; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/blocks/post/post-grid/attributes.js");


const buttonsPresets = [{
  defaultAttributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  defaultPresetAttributes: [{
    label: 'ctaBgColor'
  }, {
    label: 'ctaBgHColor'
  }, {
    label: 'ctaColor'
  }, {
    label: 'ctaHColor'
  }, {
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
    label: 'btnBorderBottomWidthDesktop'
  }, {
    label: 'btnBorderTopWidthDesktop'
  }, {
    label: 'btnBorderLeftWidthDesktop'
  }, {
    label: 'btnBorderRightWidthDesktop'
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
    label: 'ctaBgColor',
    value: '#00000000'
  }, {
    label: 'ctaBgHColor',
    value: '#3a3a3a'
  }, {
    label: 'ctaColor',
    value: '#0170b9'
  }, {
    label: 'ctaHColor',
    value: '#ffffff'
  }, {
    label: 'btnBorderStyle',
    value: 'solid'
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
  }, {
    label: 'btnBorderBottomWidthDesktop',
    value: 1
  }, {
    label: 'btnBorderTopWidthDesktop',
    value: 1
  }, {
    label: 'btnBorderLeftWidthDesktop',
    value: 1
  }, {
    label: 'btnBorderRightWidthDesktop',
    value: 1
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="#959595"/> </svg>'
}, {
  value: 'preset-5',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 5', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'ctaBgColor',
    value: '#00000000'
  }, {
    label: 'ctaBgHColor',
    value: '#3a3a3a'
  }, {
    label: 'ctaColor',
    value: '#0170b9'
  }, {
    label: 'ctaHColor',
    value: '#ffffff'
  }, {
    label: 'btnBorderStyle',
    value: 'solid'
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
  }, {
    label: 'btnBorderBottomWidthDesktop',
    value: 1
  }, {
    label: 'btnBorderTopWidthDesktop',
    value: 1
  }, {
    label: 'btnBorderLeftWidthDesktop',
    value: 1
  }, {
    label: 'btnBorderRightWidthDesktop',
    value: 1
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" rx="5" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 144H125.775V127.325H133.975C135.458 127.325 136.617 127.733 137.45 128.55C138.3 129.35 138.725 130.358 138.725 131.575C138.725 132.575 138.442 133.425 137.875 134.125C137.325 134.808 136.642 135.233 135.825 135.4C136.725 135.533 137.483 136 138.1 136.8C138.733 137.583 139.05 138.483 139.05 139.5C139.05 140.833 138.617 141.917 137.75 142.75C136.9 143.583 135.717 144 134.2 144ZM133.375 134.225C134.108 134.225 134.683 134.025 135.1 133.625C135.517 133.225 135.725 132.708 135.725 132.075C135.725 131.425 135.517 130.9 135.1 130.5C134.683 130.1 134.108 129.9 133.375 129.9H128.7V134.225H133.375ZM133.5 141.425C134.3 141.425 134.925 141.225 135.375 140.825C135.825 140.408 136.05 139.833 136.05 139.1C136.05 138.45 135.825 137.908 135.375 137.475C134.925 137.025 134.3 136.8 133.5 136.8H128.7V141.425H133.5ZM152.686 144H150.061V142.4C148.928 143.667 147.503 144.3 145.786 144.3C143.203 144.3 141.911 143.025 141.911 140.475V131.925H144.536V139.525C144.536 140.408 144.744 141.042 145.161 141.425C145.578 141.792 146.178 141.975 146.961 141.975C147.594 141.975 148.186 141.825 148.736 141.525C149.286 141.225 149.728 140.85 150.061 140.4V131.925H152.686V144ZM159.721 144.3C158.704 144.3 157.929 144.033 157.396 143.5C156.879 142.967 156.621 142.2 156.621 141.2V134.225H154.621V131.925H156.621V128.625H159.246V131.925H161.696V134.225H159.246V140.55C159.246 140.983 159.346 141.333 159.546 141.6C159.746 141.85 160.029 141.975 160.396 141.975C160.929 141.975 161.321 141.833 161.571 141.55L162.196 143.525C161.646 144.042 160.821 144.3 159.721 144.3ZM167.704 144.3C166.687 144.3 165.912 144.033 165.379 143.5C164.862 142.967 164.604 142.2 164.604 141.2V134.225H162.604V131.925H164.604V128.625H167.229V131.925H169.679V134.225H167.229V140.55C167.229 140.983 167.329 141.333 167.529 141.6C167.729 141.85 168.012 141.975 168.379 141.975C168.912 141.975 169.304 141.833 169.554 141.55L170.179 143.525C169.629 144.042 168.804 144.3 167.704 144.3ZM177.512 144.3C175.646 144.3 174.146 143.692 173.012 142.475C171.879 141.242 171.312 139.733 171.312 137.95C171.312 136.167 171.879 134.667 173.012 133.45C174.146 132.233 175.646 131.625 177.512 131.625C179.396 131.625 180.904 132.233 182.037 133.45C183.171 134.667 183.737 136.167 183.737 137.95C183.737 139.75 183.171 141.258 182.037 142.475C180.904 143.692 179.396 144.3 177.512 144.3ZM177.512 141.975C178.596 141.975 179.446 141.592 180.062 140.825C180.696 140.042 181.012 139.083 181.012 137.95C181.012 136.833 180.696 135.892 180.062 135.125C179.446 134.342 178.596 133.95 177.512 133.95C176.446 133.95 175.596 134.342 174.962 135.125C174.346 135.892 174.037 136.833 174.037 137.95C174.037 139.083 174.346 140.042 174.962 140.825C175.596 141.592 176.446 141.975 177.512 141.975ZM197.168 144H194.543V136.45C194.543 134.783 193.735 133.95 192.118 133.95C191.485 133.95 190.893 134.108 190.343 134.425C189.793 134.742 189.352 135.125 189.018 135.575V144H186.393V131.925H189.018V133.575C189.468 133.042 190.068 132.583 190.818 132.2C191.568 131.817 192.385 131.625 193.268 131.625C194.552 131.625 195.518 131.958 196.168 132.625C196.835 133.292 197.168 134.25 197.168 135.5V144Z" fill="#959595"/> </svg>'
}, {
  value: 'preset-6',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preset 6', 'ultimate-addons-for-gutenberg'),
  attributes: [{
    label: 'ctaBgColor',
    value: '#00000000'
  }, {
    label: 'ctaBgHColor',
    value: '#3a3a3a'
  }, {
    label: 'ctaColor',
    value: '#0170b9'
  }, {
    label: 'ctaHColor',
    value: '#ffffff'
  }, {
    label: 'btnBorderStyle',
    value: 'solid'
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
  }, {
    label: 'btnBorderBottomWidthDesktop',
    value: 1
  }, {
    label: 'btnBorderTopWidthDesktop',
    value: 1
  }, {
    label: 'btnBorderLeftWidthDesktop',
    value: 1
  }, {
    label: 'btnBorderRightWidthDesktop',
    value: 1
  }],
  icon: '<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <rect x="59" y="102" width="207.786" height="68" rx="34" stroke="#959595" stroke-width="2" fill="none"/> <path d="M134.2 143H125.775V126.325H133.975C135.458 126.325 136.617 126.733 137.45 127.55C138.3 128.35 138.725 129.358 138.725 130.575C138.725 131.575 138.442 132.425 137.875 133.125C137.325 133.808 136.642 134.233 135.825 134.4C136.725 134.533 137.483 135 138.1 135.8C138.733 136.583 139.05 137.483 139.05 138.5C139.05 139.833 138.617 140.917 137.75 141.75C136.9 142.583 135.717 143 134.2 143ZM133.375 133.225C134.108 133.225 134.683 133.025 135.1 132.625C135.517 132.225 135.725 131.708 135.725 131.075C135.725 130.425 135.517 129.9 135.1 129.5C134.683 129.1 134.108 128.9 133.375 128.9H128.7V133.225H133.375ZM133.5 140.425C134.3 140.425 134.925 140.225 135.375 139.825C135.825 139.408 136.05 138.833 136.05 138.1C136.05 137.45 135.825 136.908 135.375 136.475C134.925 136.025 134.3 135.8 133.5 135.8H128.7V140.425H133.5ZM152.686 143H150.061V141.4C148.928 142.667 147.503 143.3 145.786 143.3C143.203 143.3 141.911 142.025 141.911 139.475V130.925H144.536V138.525C144.536 139.408 144.744 140.042 145.161 140.425C145.578 140.792 146.178 140.975 146.961 140.975C147.594 140.975 148.186 140.825 148.736 140.525C149.286 140.225 149.728 139.85 150.061 139.4V130.925H152.686V143ZM159.721 143.3C158.704 143.3 157.929 143.033 157.396 142.5C156.879 141.967 156.621 141.2 156.621 140.2V133.225H154.621V130.925H156.621V127.625H159.246V130.925H161.696V133.225H159.246V139.55C159.246 139.983 159.346 140.333 159.546 140.6C159.746 140.85 160.029 140.975 160.396 140.975C160.929 140.975 161.321 140.833 161.571 140.55L162.196 142.525C161.646 143.042 160.821 143.3 159.721 143.3ZM167.704 143.3C166.687 143.3 165.912 143.033 165.379 142.5C164.862 141.967 164.604 141.2 164.604 140.2V133.225H162.604V130.925H164.604V127.625H167.229V130.925H169.679V133.225H167.229V139.55C167.229 139.983 167.329 140.333 167.529 140.6C167.729 140.85 168.012 140.975 168.379 140.975C168.912 140.975 169.304 140.833 169.554 140.55L170.179 142.525C169.629 143.042 168.804 143.3 167.704 143.3ZM177.512 143.3C175.646 143.3 174.146 142.692 173.012 141.475C171.879 140.242 171.312 138.733 171.312 136.95C171.312 135.167 171.879 133.667 173.012 132.45C174.146 131.233 175.646 130.625 177.512 130.625C179.396 130.625 180.904 131.233 182.037 132.45C183.171 133.667 183.737 135.167 183.737 136.95C183.737 138.75 183.171 140.258 182.037 141.475C180.904 142.692 179.396 143.3 177.512 143.3ZM177.512 140.975C178.596 140.975 179.446 140.592 180.062 139.825C180.696 139.042 181.012 138.083 181.012 136.95C181.012 135.833 180.696 134.892 180.062 134.125C179.446 133.342 178.596 132.95 177.512 132.95C176.446 132.95 175.596 133.342 174.962 134.125C174.346 134.892 174.037 135.833 174.037 136.95C174.037 138.083 174.346 139.042 174.962 139.825C175.596 140.592 176.446 140.975 177.512 140.975ZM197.168 143H194.543V135.45C194.543 133.783 193.735 132.95 192.118 132.95C191.485 132.95 190.893 133.108 190.343 133.425C189.793 133.742 189.352 134.125 189.018 134.575V143H186.393V130.925H189.018V132.575C189.468 132.042 190.068 131.583 190.818 131.2C191.568 130.817 192.385 130.625 193.268 130.625C194.552 130.625 195.518 130.958 196.168 131.625C196.835 132.292 197.168 133.25 197.168 134.5V143Z" fill="#959595"/> </svg>'
}];


/***/ }),

/***/ "./src/blocks/post/post-grid/settings.js":
/*!***********************************************!*\
  !*** ./src/blocks/post/post-grid/settings.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/lazy-loader */ "./blocks-config/uagb-controls/lazy-loader.js");
/* harmony import */ var _Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography/fontloader */ "./src/components/typography/fontloader.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/responsive-border */ "./src/components/responsive-border/index.js");
/* harmony import */ var _Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var _Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/responsive-slider */ "./src/components/responsive-slider/index.js");
/* harmony import */ var _Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _Components_select_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/select-control */ "./src/components/select-control/index.js");
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./presets */ "./src/blocks/post/post-grid/presets.js");
/* harmony import */ var _Components_presets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Components/presets */ "./src/components/presets/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @Components/advanced-panel-body */ "./src/components/advanced-panel-body/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * BLOCK: Post Grid - Settings.
 */


















const MAX_POSTS_COLUMNS = 8;




const Settings = props => {
  // Caching all Props
  const {
    attributes,
    setAttributes,
    latestPosts,
    categoriesList,
    deviceType,
    taxonomyList
  } = props.parentProps; // Caching all attributes.

  const {
    displayPostTitle,
    displayPostDate,
    displayPostComment,
    displayPostExcerpt,
    displayPostAuthor,
    displayPostImage,
    displayPostTaxonomy,
    imgSize,
    imgPosition,
    displayPostLink,
    newTab,
    ctaText,
    align,
    columns,
    tcolumns,
    mcolumns,
    order,
    orderBy,
    categories,
    postsToShow,
    rowGap,
    rowGapTablet,
    rowGapMobile,
    columnGap,
    columnGapTablet,
    columnGapMobile,
    bgColor,
    contentPaddingUnit,
    titleColor,
    titleTag,
    titleFontSize,
    titleFontSizeType,
    titleFontSizeMobile,
    titleFontSizeTablet,
    titleFontFamily,
    titleFontWeight,
    titleFontStyle,
    titleLineHeightType,
    titleLineHeight,
    titleLineHeightTablet,
    titleLineHeightMobile,
    titleLoadGoogleFonts,
    metaFontSize,
    metaFontSizeType,
    metaFontSizeMobile,
    metaFontSizeTablet,
    metaFontFamily,
    metaFontWeight,
    metaFontStyle,
    metaLineHeightType,
    metaLineHeight,
    metaLineHeightTablet,
    metaLineHeightMobile,
    metaLoadGoogleFonts,
    excerptFontSize,
    excerptFontSizeType,
    excerptFontSizeTablet,
    excerptFontSizeMobile,
    excerptFontFamily,
    excerptFontWeight,
    excerptFontStyle,
    excerptLineHeightType,
    excerptLineHeight,
    excerptLineHeightTablet,
    excerptLineHeightMobile,
    excerptLoadGoogleFonts,
    ctaFontSize,
    ctaFontSizeType,
    ctaFontSizeTablet,
    ctaFontSizeMobile,
    ctaFontFamily,
    ctaFontWeight,
    ctaFontStyle,
    ctaLineHeightType,
    ctaLineHeight,
    ctaLineHeightTablet,
    ctaLineHeightMobile,
    ctaLoadGoogleFonts,
    metaColor,
    excerptColor,
    ctaColor,
    ctaBgColor,
    ctaHColor,
    ctaBgHColor,
    imageBottomSpace,
    imageBottomSpaceTablet,
    imageBottomSpaceMobile,
    titleBottomSpace,
    titleBottomSpaceTablet,
    titleBottomSpaceMobile,
    metaBottomSpace,
    metaBottomSpaceTablet,
    metaBottomSpaceMobile,
    excerptBottomSpace,
    excerptBottomSpaceTablet,
    excerptBottomSpaceMobile,
    excerptBottomSpaceUnit,
    ctaBottomSpace,
    ctaBottomSpaceTablet,
    ctaBottomSpaceMobile,
    equalHeight,
    excerptLength,
    overlayOpacity,
    bgOverlayColor,
    linkBox,
    postType,
    taxonomyType,
    postPagination,
    pageLimit,
    paginationColor,
    paginationBgColor,
    paginationActiveColor,
    paginationBgActiveColor,
    paginationLayout,
    paginationBorderSize,
    paginationBorderRadius,
    paginationBorderColor,
    paginationBorderActiveColor,
    paginationSpacing,
    paginationSpacingUnit,
    paginationAlignment,
    paginationPrevText,
    paginationNextText,
    postDisplaytext,
    displayPostContentRadio,
    excludeCurrentPost,
    rowGapUnit,
    columnGapUnit,
    imageBottomSpaceUnit,
    titleBottomSpaceUnit,
    metaBottomSpaceUnit,
    ctaBottomSpaceUnit,
    titleTransform,
    metaTransform,
    excerptTransform,
    ctaTransform,
    titleDecoration,
    metaDecoration,
    excerptDecoration,
    ctaDecoration,
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
    paddingBtnUnit,
    mobilePaddingBtnUnit,
    tabletPaddingBtnUnit,
    spacingLink,
    spacingLinkPadding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTopTablet,
    paddingRightTablet,
    paddingBottomTablet,
    paddingLeftTablet,
    paddingTopMobile,
    paddingRightMobile,
    paddingBottomMobile,
    paddingLeftMobile,
    mobilePaddingUnit,
    tabletPaddingUnit,
    postsOffset,
    taxStyle,
    taxDivider,
    displayPostTaxonomyAboveTitle,
    hideTaxonomyIcon,
    highlightedTextColor,
    highlightedTextBgColor,
    titleLetterSpacing,
    titleLetterSpacingTablet,
    titleLetterSpacingMobile,
    titleLetterSpacingType,
    metaLetterSpacing,
    metaLetterSpacingTablet,
    metaLetterSpacingMobile,
    metaLetterSpacingType,
    excerptLetterSpacing,
    excerptLetterSpacingTablet,
    excerptLetterSpacingMobile,
    excerptLetterSpacingType,
    ctaLetterSpacing,
    ctaLetterSpacingTablet,
    ctaLetterSpacingMobile,
    ctaLetterSpacingType
  } = attributes;

  const onSelectPostType = value => {
    setAttributes({
      postType: value
    });
    setAttributes({
      categories: ''
    });
    setAttributes({
      taxonomyType: 'category'
    });
  };

  const onSelectTaxonomyType = value => {
    setAttributes({
      taxonomyType: value
    });
    setAttributes({
      categories: ''
    });
  };

  const onSelectPagination = value => {
    setAttributes({
      postPagination: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const onChangePostsPerPage = value => {
    setAttributes({
      postsToShow: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const onChangePostsOffset = value => {
    setAttributes({
      postsOffset: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const onChangePageLimit = value => {
    setAttributes({
      pageLimit: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const onChangePrevText = value => {
    setAttributes({
      paginationPrevText: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const onChangeNextText = value => {
    setAttributes({
      paginationNextText: value
    });
    setAttributes({
      paginationMarkup: 'empty'
    });
  };

  const taxonomyListOptions = [];
  const categoryListOptions = [{
    value: '',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('All', 'ultimate-addons-for-gutenberg')
  }];

  if ('' !== taxonomyList) {
    Object.keys(taxonomyList).map(item => {
      return taxonomyListOptions.push({
        value: taxonomyList[item].name,
        label: taxonomyList[item].label
      });
    });
  }

  if ('' !== categoriesList) {
    Object.keys(categoriesList).map(item => {
      return categoryListOptions.push({
        value: categoriesList[item].id,
        label: categoriesList[item].name
      });
    });
  }

  const blockControlsSettings = () => {
    const {
      isEditing
    } = props.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_19__["BlockControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToolbarGroup"], {
      controls: [{
        icon: 'edit',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Edit'),
        onClick: () => props.togglePreview(),
        isActive: isEditing
      }]
    }));
  };

  let loadTitleGoogleFonts;
  let loadMetaGoogleFonts;
  let loadExcerptGoogleFonts;
  let loadCtaGoogleFonts;

  if (titleLoadGoogleFonts === true) {
    const titleconfig = {
      google: {
        families: [titleFontFamily + (titleFontWeight ? ':' + titleFontWeight : '')]
      }
    };
    loadTitleGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: titleconfig
    });
  }

  if (metaLoadGoogleFonts === true) {
    const metaconfig = {
      google: {
        families: [metaFontFamily + (metaFontWeight ? ':' + metaFontWeight : '')]
      }
    };
    loadMetaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: metaconfig
    });
  }

  if (excerptLoadGoogleFonts === true) {
    const excerptconfig = {
      google: {
        families: [excerptFontFamily + (excerptFontWeight ? ':' + excerptFontWeight : '')]
      }
    };
    loadExcerptGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: excerptconfig
    });
  }

  if (ctaLoadGoogleFonts === true) {
    const ctaconfig = {
      google: {
        families: [ctaFontFamily + (ctaFontWeight ? ':' + ctaFontWeight : '')]
      }
    };
    loadCtaGoogleFonts = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography_fontloader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      config: ctaconfig
    });
  }

  const generalSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('General', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: align,
        label: 'align'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post Type', 'ultimate-addons-for-gutenberg'),
      data: {
        value: postType
      },
      onChange: onSelectPostType,
      options: uagb_blocks_info.post_types
    }), '' !== taxonomyList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Taxonomy', 'ultimate-addons-for-gutenberg'),
      data: {
        value: taxonomyType
      },
      onChange: onSelectTaxonomyType,
      options: taxonomyListOptions
    }), '' != categoriesList &&
    /*#__PURE__*/
    // eslint-disable-line eqeqeq
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: taxonomyList[taxonomyType].label,
      data: {
        value: categories,
        label: 'categories'
      },
      setAttributes: setAttributes,
      options: categoryListOptions
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Exclude Current Post', 'ultimate-addons-for-gutenberg'),
      checked: excludeCurrentPost,
      onChange: () => setAttributes({
        excludeCurrentPost: !excludeCurrentPost
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Posts Per Page', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: postsToShow,
      data: {
        value: postsToShow,
        label: 'postsToShow'
      },
      onChange: onChangePostsPerPage,
      min: 0,
      max: 50,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Offset Starting Post', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: postsOffset,
      data: {
        value: postsOffset,
        label: 'postsOffset'
      },
      onChange: onChangePostsOffset,
      min: 0,
      max: 50,
      displayUnit: false,
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('P.S. Note that We need to add Offset Starting Post to start post loading from specific post order.', 'ultimate-addons-for-gutenberg')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Order By', 'ultimate-addons-for-gutenberg'),
      data: {
        value: orderBy,
        label: 'orderBy'
      },
      options: [{
        value: 'date',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Date', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'title',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'rand',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Random', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'menu_order',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Menu Order', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Order', 'ultimate-addons-for-gutenberg'),
      data: {
        value: order,
        label: 'order'
      },
      options: [{
        value: 'desc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Descending', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'asc',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Ascending', 'ultimate-addons-for-gutenberg')
      }]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
      min: 0,
      max: !hasPosts ? MAX_POSTS_COLUMNS : Math.min(MAX_POSTS_COLUMNS, latestPosts.length),
      displayUnit: false,
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Equal Height', 'ultimate-addons-for-gutenberg'),
      checked: equalHeight,
      onChange: () => setAttributes({
        equalHeight: !equalHeight
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Post Pagination', 'ultimate-addons-for-gutenberg'),
      checked: postPagination,
      onChange: onSelectPagination
    }), postPagination === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Page Limit', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: pageLimit,
      data: {
        value: pageLimit,
        label: 'pageLimit'
      },
      onChange: onChangePageLimit,
      min: 0,
      max: 100,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('If Posts Not Found', 'ultimate-addons-for-gutenberg')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["TextControl"], {
      autoComplete: "off",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Display Message', 'ultimate-addons-for-gutenberg'),
      value: postDisplaytext,
      onChange: value => setAttributes({
        postDisplaytext: value
      })
    }));
  };

  const paginationSettings = () => {
    if (true !== postPagination) {
      return;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination Layout', 'ultimate-addons-for-gutenberg'),
      data: {
        value: paginationLayout,
        label: 'paginationLayout'
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: 'border',
        label: 'Border'
      }, {
        value: 'filled',
        label: 'Filled'
      }],
      showIcons: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Previous Text', 'ultimate-addons-for-gutenberg'),
      value: paginationPrevText,
      onChange: onChangePrevText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Next Text', 'ultimate-addons-for-gutenberg'),
      value: paginationNextText,
      onChange: onChangeNextText
    }));
  };

  const imageSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Featured Image', 'ultimate-addons-for-gutenberg'),
      checked: displayPostImage,
      onChange: () => setAttributes({
        displayPostImage: !displayPostImage
      })
    }), displayPostImage === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_select_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Sizes', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imgSize,
        label: 'imgSize'
      },
      setAttributes: setAttributes,
      options: uagb_blocks_info.image_sizes
    }), displayPostImage === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Position', 'ultimate-addons-for-gutenberg'),
      data: {
        value: imgPosition,
        label: 'imgPosition'
      },
      options: [{
        value: 'top',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Top', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'background',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background', 'ultimate-addons-for-gutenberg')
      }]
    }), displayPostImage === true && imgPosition === 'background' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Link Complete Box', 'ultimate-addons-for-gutenberg'),
      checked: linkBox,
      onChange: () => setAttributes({
        linkBox: !linkBox
      })
    }));
  };

  const contentSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Title', 'ultimate-addons-for-gutenberg'),
      checked: displayPostTitle,
      onChange: () => setAttributes({
        displayPostTitle: !displayPostTitle
      })
    }), displayPostTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('HTML Tag', 'ultimate-addons-for-gutenberg'),
      data: {
        value: titleTag,
        label: 'titleTag'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Author', 'ultimate-addons-for-gutenberg'),
      checked: displayPostAuthor,
      onChange: () => setAttributes({
        displayPostAuthor: !displayPostAuthor
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Date', 'ultimate-addons-for-gutenberg'),
      checked: displayPostDate,
      onChange: () => setAttributes({
        displayPostDate: !displayPostDate
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Comment', 'ultimate-addons-for-gutenberg'),
      checked: displayPostComment,
      onChange: () => setAttributes({
        displayPostComment: !displayPostComment
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Taxonomy', 'ultimate-addons-for-gutenberg'),
      checked: displayPostTaxonomy,
      onChange: () => setAttributes({
        displayPostTaxonomy: !displayPostTaxonomy
      })
    }), displayPostTaxonomy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Taxonomy Position', 'ultimate-addons-for-gutenberg'),
      data: {
        value: displayPostTaxonomyAboveTitle,
        label: 'displayPostTaxonomyAboveTitle'
      },
      options: [{
        value: 'withMeta',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('With Meta', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'aboveTitle',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Above Title', 'ultimate-addons-for-gutenberg')
      }]
    }), 'aboveTitle' === displayPostTaxonomyAboveTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Taxonomy Style', 'ultimate-addons-for-gutenberg'),
      data: {
        value: taxStyle,
        label: 'taxStyle'
      },
      options: [{
        value: 'default',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'highlighted',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Highlighted', 'ultimate-addons-for-gutenberg')
      }]
    }), 'default' === taxStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Taxonomy Divider', 'ultimate-addons-for-gutenberg'),
      value: taxDivider,
      onChange: value => setAttributes({
        taxDivider: value
      })
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Meta Icon', 'ultimate-addons-for-gutenberg'),
      checked: hideTaxonomyIcon,
      onChange: () => setAttributes({
        hideTaxonomyIcon: !hideTaxonomyIcon
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Excerpt', 'ultimate-addons-for-gutenberg'),
      checked: displayPostExcerpt,
      onChange: () => setAttributes({
        displayPostExcerpt: !displayPostExcerpt
      })
    }), displayPostExcerpt && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show:', 'ultimate-addons-for-gutenberg'),
      data: {
        value: displayPostContentRadio,
        label: 'displayPostContentRadio'
      },
      options: [{
        value: 'excerpt',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Excerpt', 'ultimate-addons-for-gutenberg')
      }, {
        value: 'full_post',
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Full post', 'ultimate-addons-for-gutenberg')
      }]
    }), displayPostExcerpt && displayPostContentRadio === 'excerpt' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Max number of words in excerpt', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: excerptLength,
      data: {
        value: excerptLength,
        label: 'excerptLength'
      },
      min: 1,
      max: 100,
      displayUnit: false
    }));
  };

  const readMoreLinkSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Read More Link', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Show Read More Link', 'ultimate-addons-for-gutenberg'),
      checked: displayPostLink,
      onChange: () => setAttributes({
        displayPostLink: !displayPostLink
      })
    }), displayPostLink && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Open links in New Tab', 'ultimate-addons-for-gutenberg'),
      checked: newTab,
      onChange: () => setAttributes({
        newTab: !newTab
      })
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__["TextControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text', 'ultimate-addons-for-gutenberg'),
      value: ctaText,
      onChange: value => setAttributes({
        ctaText: value
      })
    })));
  };

  const spacingSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Layout Settings', 'ultimate-addons-for-gutenberg'),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgColor,
      data: {
        value: bgColor,
        label: 'bgColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Row Gap', 'ultimate-addons-for-gutenberg'),
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
        value: columnGapUnit,
        label: 'columnGapUnit'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Column Gap', 'ultimate-addons-for-gutenberg'),
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
        value: rowGapUnit,
        label: 'rowGapUnit'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content Padding', 'ultimate-addons-for-gutenberg'),
      valueTop: {
        value: paddingTop,
        label: 'paddingTop'
      },
      valueRight: {
        value: paddingRight,
        label: 'paddingRight'
      },
      valueBottom: {
        value: paddingBottom,
        label: 'paddingBottom'
      },
      valueLeft: {
        value: paddingLeft,
        label: 'paddingLeft'
      },
      valueTopTablet: {
        value: paddingTopTablet,
        label: 'paddingTopTablet'
      },
      valueRightTablet: {
        value: paddingRightTablet,
        label: 'paddingRightTablet'
      },
      valueBottomTablet: {
        value: paddingBottomTablet,
        label: 'paddingBottomTablet'
      },
      valueLeftTablet: {
        value: paddingLeftTablet,
        label: 'paddingLeftTablet'
      },
      valueTopMobile: {
        value: paddingTopMobile,
        label: 'paddingTopMobile'
      },
      valueRightMobile: {
        value: paddingRightMobile,
        label: 'paddingRightMobile'
      },
      valueBottomMobile: {
        value: paddingBottomMobile,
        label: 'paddingBottomMobile'
      },
      valueLeftMobile: {
        value: paddingLeftMobile,
        label: 'paddingLeftMobile'
      },
      unit: {
        value: contentPaddingUnit,
        label: 'contentPaddingUnit'
      },
      mUnit: {
        value: mobilePaddingUnit,
        label: 'mobilePaddingUnit'
      },
      tUnit: {
        value: tabletPaddingUnit,
        label: 'tabletPaddingUnit'
      },
      deviceType: deviceType,
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: spacingLinkPadding,
        label: 'spacingLinkPadding'
      }
    })));
  };

  const imageStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Image', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, imgPosition === 'background' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Overlay Color', 'ultimate-addons-for-gutenberg'),
      colorValue: bgOverlayColor,
      data: {
        value: bgOverlayColor,
        label: 'bgOverlayColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Overlay Opacity', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: overlayOpacity,
      data: {
        value: overlayOpacity,
        label: 'overlayOpacity'
      },
      min: 0,
      max: 100,
      displayUnit: false
    })), imgPosition === 'top' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: imageBottomSpace,
          label: 'imageBottomSpace'
        },
        tablet: {
          value: imageBottomSpaceTablet,
          label: 'imageBottomSpaceTablet'
        },
        mobile: {
          value: imageBottomSpaceMobile,
          label: 'imageBottomSpaceMobile'
        }
      },
      min: 0,
      max: 50,
      unit: {
        value: imageBottomSpaceUnit,
        label: 'imageBottomSpaceUnit'
      },
      setAttributes: setAttributes
    }));
  };

  const titleStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Title', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: titleColor,
      data: {
        value: titleColor,
        label: 'titleColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: titleBottomSpace,
          label: 'titleBottomSpace'
        },
        tablet: {
          value: titleBottomSpaceTablet,
          label: 'titleBottomSpaceTablet'
        },
        mobile: {
          value: titleBottomSpaceMobile,
          label: 'titleBottomSpaceMobile'
        }
      },
      min: 0,
      max: 50,
      unit: {
        value: titleBottomSpaceUnit,
        label: 'titleBottomSpaceUnit'
      },
      setAttributes: setAttributes
    }));
  };

  const metaStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Meta', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Meta Color', 'ultimate-addons-for-gutenberg'),
      colorValue: metaColor,
      data: {
        value: metaColor,
        label: 'metaColor'
      },
      setAttributes: setAttributes
    }), 'aboveTitle' === displayPostTaxonomyAboveTitle && 'highlighted' === taxStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Taxonomy Text Color', 'ultimate-addons-for-gutenberg'),
      colorValue: highlightedTextColor,
      data: {
        value: highlightedTextColor,
        label: 'highlightedTextColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Highlighted Color', 'ultimate-addons-for-gutenberg'),
      colorValue: highlightedTextBgColor,
      data: {
        value: highlightedTextBgColor,
        label: 'highlightedTextBgColor'
      },
      setAttributes: setAttributes
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: metaLoadGoogleFonts,
        label: 'metaLoadGoogleFonts'
      },
      fontFamily: {
        value: metaFontFamily,
        label: 'metaFontFamily'
      },
      fontWeight: {
        value: metaFontWeight,
        label: 'metaFontWeight'
      },
      fontStyle: {
        value: metaFontStyle,
        label: 'metaFontStyle'
      },
      fontSizeType: {
        value: metaFontSizeType,
        label: 'metaFontSizeType'
      },
      fontSize: {
        value: metaFontSize,
        label: 'metaFontSize'
      },
      fontSizeMobile: {
        value: metaFontSizeMobile,
        label: 'metaFontSizeMobile'
      },
      fontSizeTablet: {
        value: metaFontSizeTablet,
        label: 'metaFontSizeTablet'
      },
      lineHeightType: {
        value: metaLineHeightType,
        label: 'metaLineHeightType'
      },
      lineHeight: {
        value: metaLineHeight,
        label: 'metaLineHeight'
      },
      lineHeightMobile: {
        value: metaLineHeightMobile,
        label: 'metaLineHeightMobile'
      },
      lineHeightTablet: {
        value: metaLineHeightTablet,
        label: 'metaLineHeightTablet'
      },
      letterSpacing: {
        value: metaLetterSpacing,
        label: 'metaLetterSpacing'
      },
      letterSpacingTablet: {
        value: metaLetterSpacingTablet,
        label: 'metaLetterSpacingTablet'
      },
      letterSpacingMobile: {
        value: metaLetterSpacingMobile,
        label: 'metaLetterSpacingMobile'
      },
      letterSpacingType: {
        value: metaLetterSpacingType,
        label: 'metaLetterSpacingType'
      },
      transform: {
        value: metaTransform,
        label: 'metaTransform'
      },
      decoration: {
        value: metaDecoration,
        label: 'metaDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: metaBottomSpace,
          label: 'metaBottomSpace'
        },
        tablet: {
          value: metaBottomSpaceTablet,
          label: 'metaBottomSpaceTablet'
        },
        mobile: {
          value: metaBottomSpaceMobile,
          label: 'metaBottomSpaceMobile'
        }
      },
      min: 0,
      max: 50,
      unit: {
        value: metaBottomSpaceUnit,
        label: 'metaBottomSpaceUnit'
      },
      setAttributes: setAttributes
    }));
  };

  const excerptStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Excerpt', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
      colorValue: excerptColor,
      data: {
        value: excerptColor,
        label: 'excerptColor'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: excerptLoadGoogleFonts,
        label: 'excerptLoadGoogleFonts'
      },
      fontFamily: {
        value: excerptFontFamily,
        label: 'excerptFontFamily'
      },
      fontWeight: {
        value: excerptFontWeight,
        label: 'excerptFontWeight'
      },
      fontStyle: {
        value: excerptFontStyle,
        label: 'excerptFontStyle'
      },
      fontSizeType: {
        value: excerptFontSizeType,
        label: 'excerptFontSizeType'
      },
      fontSize: {
        value: excerptFontSize,
        label: 'excerptFontSize'
      },
      fontSizeMobile: {
        value: excerptFontSizeMobile,
        label: 'excerptFontSizeMobile'
      },
      fontSizeTablet: {
        value: excerptFontSizeTablet,
        label: 'excerptFontSizeTablet'
      },
      lineHeightType: {
        value: excerptLineHeightType,
        label: 'excerptLineHeightType'
      },
      lineHeight: {
        value: excerptLineHeight,
        label: 'excerptLineHeight'
      },
      lineHeightMobile: {
        value: excerptLineHeightMobile,
        label: 'excerptLineHeightMobile'
      },
      lineHeightTablet: {
        value: excerptLineHeightTablet,
        label: 'excerptLineHeightTablet'
      },
      letterSpacing: {
        value: excerptLetterSpacing,
        label: 'excerptLetterSpacing'
      },
      letterSpacingTablet: {
        value: excerptLetterSpacingTablet,
        label: 'excerptLetterSpacingTablet'
      },
      letterSpacingMobile: {
        value: excerptLetterSpacingMobile,
        label: 'excerptLetterSpacingMobile'
      },
      letterSpacingType: {
        value: excerptLetterSpacingType,
        label: 'excerptLetterSpacingType'
      },
      transform: {
        value: excerptTransform,
        label: 'excerptTransform'
      },
      decoration: {
        value: excerptDecoration,
        label: 'excerptDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: excerptBottomSpace,
          label: 'excerptBottomSpace'
        },
        tablet: {
          value: excerptBottomSpaceTablet,
          label: 'excerptBottomSpaceTablet'
        },
        mobile: {
          value: excerptBottomSpaceMobile,
          label: 'excerptBottomSpaceMobile'
        }
      },
      min: 0,
      max: 50,
      unit: {
        value: excerptBottomSpaceUnit,
        label: 'excerptBottomSpaceUnit'
      },
      setAttributes: setAttributes
    }));
  };

  const readMoreLinkStyleSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Read More Link', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_presets__WEBPACK_IMPORTED_MODULE_17__["default"], {
      setAttributes: setAttributes,
      presets: _presets__WEBPACK_IMPORTED_MODULE_16__["buttonsPresets"],
      presetInputType: "radioImage"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'hover',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Hover', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaColor,
        data: {
          value: ctaColor,
          label: 'ctaColor'
        },
        setAttributes: setAttributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaBgColor,
        data: {
          value: ctaBgColor,
          label: 'ctaBgColor'
        },
        setAttributes: setAttributes
      })),
      hover: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaHColor,
        data: {
          value: ctaHColor,
          label: 'ctaHColor'
        },
        setAttributes: setAttributes
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: ctaBgHColor,
        data: {
          value: ctaBgHColor,
          label: 'ctaBgHColor'
        },
        setAttributes: setAttributes
      }))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Typography', 'ultimate-addons-for-gutenberg'),
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
      lineHeightType: {
        value: ctaLineHeightType,
        label: 'ctaLineHeightType'
      },
      lineHeight: {
        value: ctaLineHeight,
        label: 'ctaLineHeight'
      },
      lineHeightMobile: {
        value: ctaLineHeightMobile,
        label: 'ctaLineHeightMobile'
      },
      lineHeightTablet: {
        value: ctaLineHeightTablet,
        label: 'ctaLineHeightTablet'
      },
      letterSpacing: {
        value: ctaLetterSpacing,
        label: 'ctaLetterSpacing'
      },
      letterSpacingTablet: {
        value: ctaLetterSpacingTablet,
        label: 'ctaLetterSpacingTablet'
      },
      letterSpacingMobile: {
        value: ctaLetterSpacingMobile,
        label: 'ctaLetterSpacingMobile'
      },
      letterSpacingType: {
        value: ctaLetterSpacingType,
        label: 'ctaLetterSpacingType'
      },
      transform: {
        value: ctaTransform,
        label: 'ctaTransform'
      },
      decoration: {
        value: ctaDecoration,
        label: 'ctaDecoration'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_border__WEBPACK_IMPORTED_MODULE_5__["default"], {
      setAttributes: setAttributes,
      prefix: 'btn',
      attributes: attributes,
      deviceType: deviceType,
      disabledBorderTitle: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_responsive_slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Bottom Spacing', 'ultimate-addons-for-gutenberg'),
      data: {
        desktop: {
          value: ctaBottomSpace,
          label: 'ctaBottomSpace'
        },
        tablet: {
          value: ctaBottomSpaceTablet,
          label: 'ctaBottomSpaceTablet'
        },
        mobile: {
          value: ctaBottomSpaceMobile,
          label: 'ctaBottomSpaceMobile'
        }
      },
      min: 0,
      max: 300,
      unit: {
        value: ctaBottomSpaceUnit,
        label: 'ctaBottomSpaceUnit'
      },
      setAttributes: setAttributes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_spacing_control__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Button Padding', 'ultimate-addons-for-gutenberg'),
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
        value: spacingLink,
        label: 'spacingLink'
      }
    })));
  };

  const paginationStyle = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_advanced_panel_body__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination', 'ultimate-addons-for-gutenberg'),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Pagination Alignment', 'ultimate-addons-for-gutenberg'),
      data: {
        value: paginationAlignment,
        label: 'paginationAlignment'
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_tabs__WEBPACK_IMPORTED_MODULE_15__["default"], {
      tabs: [{
        name: 'normal',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Normal', 'ultimate-addons-for-gutenberg')
      }, {
        name: 'active',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Active', 'ultimate-addons-for-gutenberg')
      }],
      normal: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationColor,
        data: {
          value: paginationColor,
          label: 'paginationColor'
        },
        setAttributes: setAttributes
      }), paginationLayout === 'filled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationBgColor,
        data: {
          value: paginationBgColor,
          label: 'paginationBgColor'
        },
        setAttributes: setAttributes
      }), paginationLayout === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationBorderColor,
        data: {
          value: paginationBorderColor,
          label: 'paginationBorderColor'
        },
        setAttributes: setAttributes
      })),
      active: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Text Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationActiveColor,
        data: {
          value: paginationActiveColor,
          label: 'paginationActiveColor'
        },
        setAttributes: setAttributes
      }), paginationLayout === 'filled' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Background Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationBgActiveColor,
        data: {
          value: paginationBgActiveColor,
          label: 'paginationBgActiveColor'
        },
        setAttributes: setAttributes
      }), paginationLayout === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Color', 'ultimate-addons-for-gutenberg'),
        colorValue: paginationBorderActiveColor,
        data: {
          value: paginationBorderActiveColor,
          label: 'paginationBorderActiveColor'
        },
        setAttributes: setAttributes
      })),
      disableBottomSeparator: false
    }), paginationLayout === 'border' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Size', 'ultimate-addons-for-gutenberg'),
      value: paginationBorderSize,
      data: {
        value: paginationBorderSize,
        label: 'paginationBorderSize'
      },
      min: 0,
      max: 10,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Border Radius', 'ultimate-addons-for-gutenberg'),
      value: paginationBorderRadius,
      data: {
        value: paginationBorderRadius,
        label: 'paginationBorderRadius'
      },
      displayUnit: false,
      min: 0,
      max: 100
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_range_Range_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Spacing', 'ultimate-addons-for-gutenberg'),
      setAttributes: setAttributes,
      value: paginationSpacing,
      data: {
        value: paginationSpacing,
        label: 'paginationSpacing'
      },
      help: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('This spacing is between the Post Grid and the Pagination', 'ultimate-addons-for-gutenberg'),
      min: 0,
      max: 300,
      unit: {
        value: paginationSpacingUnit,
        label: 'paginationSpacingUnit'
      }
    }));
  };

  const inspectorControlsSettings = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_19__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].general, generalSettings(), paginationSettings(), imageSettings(), contentSettings(), readMoreLinkSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].style, spacingSettings(), displayPostTitle && titleStyle(), (displayPostAuthor || displayPostDate || displayPostComment || displayPostTaxonomy) && metaStyle(), displayPostExcerpt && excerptStyle(), displayPostLink && readMoreLinkStyleSettings(), postPagination && paginationStyle(), displayPostImage === true && imageStyle()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _Components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_8__["UAGTabs"].advance, {
      parentProps: props.parentProps
    }))));
  };

  const hasPosts = Array.isArray(latestPosts) && latestPosts.length;

  if (!hasPosts) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, inspectorControlsSettings());
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: Object(_Controls_lazy_loader__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }, blockControlsSettings(), inspectorControlsSettings(), loadTitleGoogleFonts, loadMetaGoogleFonts, loadExcerptGoogleFonts, loadCtaGoogleFonts);
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