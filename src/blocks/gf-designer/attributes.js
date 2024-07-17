const attributes = {
	// eslint-disable-line no-unused-vars
	block_id: {
		type: 'string',
	},
	align: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	className: {
		type: 'string',
	},
	formId: {
		type: 'string',
		default: '0',
	},
	isHtml: {
		type: 'boolean',
	},
	formJson: {
		type: 'object',
		default: null,
	},
	enableAjax: {
		type: 'boolean',
		default: false,
	},
	enableTabSupport: {
		type: 'boolean',
		default: false,
	},
	formTabIndex: {
		type: 'number',
		default: 0,
	},
	titleDescStyle: {
		type: 'string',
		default: 'yes',
	},
	titleDescAlignment: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'main-title-align',
		},
	},
	fieldStyle: {
		type: 'string',
		default: 'box',
	},
	fieldVrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'field-v-padding',
		},
	},
	fieldHrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'field-h-padding',
		},
	},
	fieldBgColor: {
		type: 'string',
		default: '#fafafa',
		UAGCopyPaste: {
			styleType: 'field-bg-color',
		},
	},
	fieldLabelColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	fieldInputColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'input-color',
		},
	},
	fieldBorderStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'field-border-style',
		},
	},
	fieldBorderWidth: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'field-border-width',
		},
	},
	fieldBorderWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-border-width',
		},
	},
	fieldBorderWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-border-width',
		},
	},
	fieldBorderWidthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-border-width-type',
		},
	},
	fieldBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'field-border-radius',
		},
	},
	fieldBorderColor: {
		type: 'string',
		default: '#eeeeee',
		UAGCopyPaste: {
			styleType: 'field-border-color',
		},
	},
	fieldBorderFocusColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'field-border-hover-color',
		},
	},
	buttonAlignment: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'btn-align',
		},
	},
	buttonAlignmentTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-align-tablet',
		},
	},
	buttonAlignmentMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-align-mobile',
		},
	},
	buttonVrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding',
		},
	},
	buttonHrPadding: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding',
		},
	},
	buttonBorderStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'btn-border-style',
		},
	},
	buttonBorderWidth: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'btn-border-width',
		},
	},
	buttonBorderWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-border-width',
		},
	},
	buttonBorderWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-border-width',
		},
	},
	buttonBorderWidthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-border-width-type',
		},
	},
	buttonBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-border-radius',
		},
	},
	buttonBorderColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'btn-border-color',
		},
	},
	buttonTextColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	buttonBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	buttonBorderHoverColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color',
		},
	},
	buttonTextHoverColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
		},
	},
	buttonBgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color',
		},
	},
	fieldSpacing: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'field-bottom-margin',
		},
	},
	fieldSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-margin',
		},
	},
	fieldSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-margin',
		},
	},
	fieldLabelSpacing: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	fieldLabelSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	fieldLabelSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	enableLabel: {
		type: 'boolean',
		default: false,
	},
	labelFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	labelFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	labelFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	labelFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	labelFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	labelFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	labelLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	labelLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	labelLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	labelLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	labelLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
	},
	inputFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'input-font-size',
		},
	},
	inputFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'input-font-size-type',
		},
	},
	inputFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-font-size-tablet',
		},
	},
	inputFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-font-size-mobile',
		},
	},
	inputFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-font-family',
		},
		default: 'Default',
	},
	inputFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-font-weight',
		},
	},
	inputLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'input-line-height-type',
		},
	},
	inputLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height',
		},
	},
	inputLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height-tablet',
		},
	},
	inputLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height-mobile',
		},
	},
	inputLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	textAreaHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'textarea-height',
		},
		default: 'auto',
	},
	textAreaHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'textarea-height',
		},
	},
	textAreaHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'textarea-height',
		},
	},
	buttonFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-font-size',
		},
	},
	buttonFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type',
		},
	},
	buttonFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet',
		},
	},
	buttonFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile',
		},
	},
	buttonFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
	},
	buttonFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	buttonLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type',
		},
	},
	buttonLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height',
		},
	},
	buttonLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet',
		},
	},
	buttonLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile',
		},
	},
	buttonLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	enableOveride: {
		type: 'boolean',
		default: true,
	},
	radioCheckSize: {
		type: 'number',
		default: '20',
		UAGCopyPaste: {
			styleType: 'radio-size',
		},
	},
	radioCheckSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-size',
		},
	},
	radioCheckSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-size',
		},
	},
	radioCheckBgColor: {
		type: 'string',
		default: '#fafafa',
		UAGCopyPaste: {
			styleType: 'radio-bg-color',
		},
	},
	radioCheckSelectColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'radio-select-color',
		},
	},
	radioCheckLableColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	radioCheckBorderColor: {
		type: 'string',
		default: '#cbcbcb',
		UAGCopyPaste: {
			styleType: 'radio-border-color',
		},
	},
	radioCheckBorderWidth: {
		type: 'number',
		default: '1',
		UAGCopyPaste: {
			styleType: 'radio-border-width',
		},
	},
	radioCheckBorderWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-border-width',
		},
	},
	radioCheckBorderWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-border-width',
		},
	},
	radioCheckBorderWidthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'radio-border-width-type',
		},
	},
	radioCheckBorderRadius: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'radio-border-radius',
		},
	},
	radioCheckFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'radio-font-size',
		},
	},
	radioCheckFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'radio-font-size-type',
		},
	},
	radioCheckFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-font-size-tablet',
		},
	},
	radioCheckFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-font-size-mobile',
		},
	},
	radioCheckFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'radio-font-family',
		},
	},
	radioCheckFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'radio-font-weight',
		},
	},
	radioCheckLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'radio-line-height-type',
		},
	},
	radioCheckLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-line-height',
		},
	},
	radioCheckLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-line-height-tablet',
		},
	},
	radioCheckLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-line-height-mobile',
		},
	},
	radioCheckLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	validationMsgColor: {
		type: 'string',
		default: '#ff0000',
		UAGCopyPaste: {
			styleType: 'validate-msg-color',
		},
	},
	validationMsgBgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'validate-msg-bg-color',
		},
	},
	advancedValidationSettings: {
		type: 'boolean',
		default: false,
	},
	highlightBorderColor: {
		type: 'string',
		default: '#ff0000',
		UAGCopyPaste: {
			styleType: 'highlight-border-color',
		},
	},
	validationMsgFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size',
		},
	},
	validationMsgFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size-type',
		},
	},
	validationMsgFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size-tablet',
		},
	},
	validationMsgFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size-mobile',
		},
	},
	validationMsgFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-family',
		},
	},
	validationMsgFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-weight',
		},
	},
	validationMsgLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height-type',
		},
	},
	validationMsgLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height',
		},
	},
	validationMsgLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height-tablet',
		},
	},
	validationMsgLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height-mobile',
		},
	},
	validationMsgLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	successMsgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-color',
		},
	},
	errorMsgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'failed-msg-color',
		},
	},
	errorMsgBgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'failed-msg-bg-color',
		},
	},
	errorMsgBorderColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'failed-msg-border-color',
		},
	},
	msgBorderSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-border-size',
		},
	},
	msgBorderSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'success-msg-border-size-type',
		},
	},
	msgBorderRadius: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-border-radius',
		},
	},
	msgVrPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-v-padding',
		},
	},
	msgHrPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-h-padding',
		},
	},
	msgFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size',
		},
	},
	msgFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size-type',
		},
	},
	msgFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size-tablet',
		},
	},
	msgFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size-mobile',
		},
	},
	msgFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'success-msg-font-family',
		},
	},
	msgFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-font-weight',
		},
	},
	msgLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height-type',
		},
	},
	msgLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height',
		},
	},
	msgLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height-tablet',
		},
	},
	msgLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height-mobile',
		},
	},
	msgLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	radioCheckBorderRadiusType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'radio-border-radius-type',
		},
	},
	msgBorderRadiusType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'success-msg-border-radius-type',
		},
	},
	fieldBorderRadiusType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-border-radius-type',
		},
	},
	buttonBorderRadiusType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-border-radius-type',
		},
	},
	successMsgFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size',
		},
	},
	successMsgFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size-type',
		},
	},
	successMsgFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size-tablet',
		},
	},
	successMsgFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size-mobile',
		},
	},
	successMsgFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'success-msg-font-family',
		},
	},
	successMsgFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-font-weight',
		},
	},
	successMsgLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height-type',
		},
	},
	successMsgLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height',
		},
	},
	successMsgLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height-tablet',
		},
	},
	successMsgLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height-mobile',
		},
	},
	successMsgLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	msgleftPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-left-padding',
		},
	},
	msgrightPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-right-padding',
		},
	},
	msgtopPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-top-padding',
		},
	},
	msgbottomPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-bottom-padding',
		},
	},
	msgleftMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-left-padding-mobile',
		},
	},
	msgrightMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-right-padding-mobile',
		},
	},
	msgtopMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-top-padding-mobile',
		},
	},
	msgbottomMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-bottom-padding-mobile',
		},
	},
	msgleftTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-left-padding-tablet',
		},
	},
	msgrightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-right-padding-tablet',
		},
	},
	msgtopTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-top-padding-tablet',
		},
	},
	msgbottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-bottom-padding-tablet',
		},
	},
	msgtabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'success-msg-padding-unit-tablet',
		},
	},
	msgmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'success-msg-padding-unit-mobile',
		},
	},
	msgpaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'success-msg-padding-unit',
		},
	},
	msgpaddingLink: {
		type: 'boolean',
		default: false,
	},
	buttonleftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	buttonrightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	buttontopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	buttonbottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	buttonleftMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	buttonrightMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	buttontopMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	buttonbottomMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	buttonleftTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	buttonrightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	buttontopTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	buttonbottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	buttonpaddingLink: {
		type: 'boolean',
		default: false,
	},
	buttontabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet',
		},
	},
	buttonmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile',
		},
	},
	buttonpaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit',
		},
	},
	fieldleftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding',
		},
	},
	fieldrightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding',
		},
	},
	fieldtopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding',
		},
	},
	fieldbottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding',
		},
	},
	fieldleftMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding-mobile',
		},
	},
	fieldrightMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding-mobile',
		},
	},
	fieldtopMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding-mobile',
		},
	},
	fieldbottomMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding-mobile',
		},
	},
	fieldleftTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding-tablet',
		},
	},
	fieldrightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding-tablet',
		},
	},
	fieldtopTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding-tablet',
		},
	},
	fieldbottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding-tablet',
		},
	},
	fieldtabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-unit-tablet',
		},
	},
	fieldmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-unit-mobile',
		},
	},
	fieldpaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-unit',
		},
	},
	fieldpaddingLink: {
		type: 'boolean',
		default: false,
	},
	labelTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	labelDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	labelFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	inputTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-transform',
		},
	},
	inputDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-decoration',
		},
	},
	inputFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-font-style',
		},
	},
	buttonTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform',
		},
	},
	buttonDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration',
		},
	},
	buttonFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
	},
	radioCheckTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'radio-transform',
		},
	},
	radioCheckDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'radio-decoration',
		},
	},
	radioCheckFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'radio-font-style',
		},
	},
	validationMsgTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-transform',
		},
	},
	validationMsgDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-decoration',
		},
	},
	validationMsgFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-style',
		},
	},
	msgTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-transform',
		},
	},
	msgDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-decoration',
		},
	},
	msgFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-font-style',
		},
	},
	successMsgTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-transform',
		},
	},
	successMsgDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-decoration',
		},
	},
	successMsgFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-font-style',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	labelLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing',
		},
	},
	labelLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-tablet',
		},
	},
	labelLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-mobile',
		},
	},
	labelLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'label-letter-spacing-type',
		},
	},
	inputLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-letter-spacing',
		},
	},
	inputLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-letter-spacing-tablet',
		},
	},
	inputLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-letter-spacing-mobile',
		},
	},
	inputLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'input-letter-spacing-type',
		},
	},
	radioCheckLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radioCheck-letter-spacing',
		},
	},
	radioCheckLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radioCheck-letter-spacing-tablet',
		},
	},
	radioCheckLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radioCheck-letter-spacing-mobile',
		},
	},
	radioCheckLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'radioCheck-letter-spacing-type',
		},
	},
	buttonLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'button-letter-spacing',
		},
	},
	buttonLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'button-letter-spacing-tablet',
		},
	},
	buttonLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'button-letter-spacing-mobile',
		},
	},
	buttonLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'button-letter-spacing-type',
		},
	},
	validationMsgLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validationMsg-letter-spacing',
		},
	},
	validationMsgLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validationMsg-letter-spacing-tablet',
		},
	},
	validationMsgLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validationMsg-letter-spacing-mobile',
		},
	},
	validationMsgLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'validationMsg-letter-spacing-type',
		},
	},
	msgLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-letter-spacing',
		},
	},
	msgLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-letter-spacing-tablet',
		},
	},
	msgLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-letter-spacing-mobile',
		},
	},
	msgLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'msg-letter-spacing-type',
		},
	},
	successMsgLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'successMsg-letter-spacing',
		},
	},
	successMsgLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'successMsg-letter-spacing-tablet',
		},
	},
	successMsgLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'successMsg-letter-spacing-mobile',
		},
	},
	successMsgLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'successMsg-letter-spacing-type',
		},
	},
};
export default attributes;
