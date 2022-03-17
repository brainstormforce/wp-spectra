const attributes = { // eslint-disable-line no-unused-vars
	block_id: {
		type: 'string',
	},
	align: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
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
			styleType: 'main-title-align'
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
			styleType: 'field-v-padding'
		},
	},
	fieldHrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'field-h-padding'
		},
	},
	fieldBgColor: {
		type: 'string',
		default: '#fafafa',
		UAGCopyPaste: {
			styleType: 'field-bg-color'
		},
	},
	fieldLabelColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	fieldInputColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'input-color'
		},
	},
	fieldBorderStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'field-border-style'
		},
	},
	fieldBorderWidth: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'field-border-width'
		},
	},
	fieldBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'field-border-radius'
		},
	},
	fieldBorderColor: {
		type: 'string',
		default: '#eeeeee',
		UAGCopyPaste: {
			styleType: 'field-border-color'
		},
	},
	fieldBorderFocusColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'field-border-hover-color'
		},
	},
	buttonAlignment: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'btn-align'
		},
	},
	buttonVrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-v-padding'
		},
	},
	buttonHrPadding: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'btn-h-padding'
		},
	},
	buttonBorderStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'btn-border-style'
		},
	},
	buttonBorderWidth: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'btn-border-width'
		},
	},
	buttonBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-border-radius'
		},
	},
	buttonBorderColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'btn-border-color'
		},
	},
	buttonTextColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'btn-color'
		},
	},
	buttonBgColor: {
		type: 'string',
		default: 'transparent',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		},
	},
	buttonBorderHoverColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color'
		},
	},
	buttonTextHoverColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonBgHoverColor: {
		type: 'string',
		default: 'transparent',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color'
		},
	},
	fieldSpacing: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'field-bottom-margin'
		},
	},
	fieldLabelSpacing: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
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
			styleType: 'main-title-font-size'
		},
	},
	labelFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
	},
	labelFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	labelFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	labelFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
	},
	labelFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	labelLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
	},
	labelLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	labelLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	labelLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	labelLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
	},
	inputFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'input-font-size'
		},
	},
	inputFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'input-font-size-type'
		},
	},
	inputFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-font-size-tablet'
		},
	},
	inputFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-font-size-mobile'
		},
	},
	inputFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-font-family'
		},
		default: 'Default',
	},
	inputFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-font-weight'
		},
	},
	inputLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'input-line-height-type'
		},
	},
	inputLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height'
		},
	},
	inputLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height-tablet'
		},
	},
	inputLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height-mobile'
		},
	},
	inputLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	textAreaHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'textarea-height'
		},
	},
	buttonFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		},
	},
	buttonFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		},
	},
	buttonFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		},
	},
	buttonFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		},
	},
	buttonFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		},
	},
	buttonFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		},
	},
	buttonLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type'
		},
	},
	buttonLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height'
		},
	},
	buttonLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet'
		},
	},
	buttonLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile'
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
			styleType: 'radio-size'
		},
	},
	radioCheckBgColor: {
		type: 'string',
		default: '#fafafa',
		UAGCopyPaste: {
			styleType: 'radio-bg-color'
		},
	},
	radioCheckSelectColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'radio-select-color'
		},
	},
	radioCheckLableColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	radioCheckBorderColor: {
		type: 'string',
		default: '#cbcbcb',
		UAGCopyPaste: {
			styleType: 'radio-border-color'
		},
	},
	radioCheckBorderWidth: {
		type: 'number',
		default: '1',
		UAGCopyPaste: {
			styleType: 'radio-border-width'
		},
	},
	radioCheckBorderRadius: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'radio-border-radius'
		},
	},
	radioCheckFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'radio-font-size'
		},
	},
	radioCheckFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'radio-font-size-type'
		},
	},
	radioCheckFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-font-size-tablet'
		},
	},
	radioCheckFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-font-size-mobile'
		},
	},
	radioCheckFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'radio-font-family'
		},
	},
	radioCheckFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'radio-font-weight'
		},
	},
	radioCheckLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'radio-line-height-type'
		},
	},
	radioCheckLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-line-height'
		},
	},
	radioCheckLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-line-height-tablet'
		},
	},
	radioCheckLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'radio-line-height-mobile'
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
			styleType: 'validate-msg-color'
		},
	},
	validationMsgBgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'validate-msg-bg-color'
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
			styleType: 'highlight-border-color'
		},
	},
	validationMsgFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size'
		},
	},
	validationMsgFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size-type'
		},
	},
	validationMsgFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size-tablet'
		},
	},
	validationMsgFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size-mobile'
		},
	},
	validationMsgFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-family'
		},
	},
	validationMsgFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-weight'
		},
	},
	validationMsgLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height-type'
		},
	},
	validationMsgLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height'
		},
	},
	validationMsgLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height-tablet'
		},
	},
	validationMsgLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height-mobile'
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
			styleType: 'success-msg-color'
		},
	},
	errorMsgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'failed-msg-color'
		},
	},
	errorMsgBgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'failed-msg-bg-color'
		},
	},
	errorMsgBorderColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'failed-msg-border-color'
		},
	},
	msgBorderSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-border-size'
		},
	},
	msgBorderRadius: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-border-radius'
		},
	},
	msgVrPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-v-padding'
		},
	},
	msgHrPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-h-padding'
		},
	},
	msgFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-font-size'
		},
	},
	msgFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'msg-font-size-type'
		},
	},
	msgFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-font-size-tablet'
		},
	},
	msgFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-font-size-mobile'
		},
	},
	msgFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'msg-font-family'
		},
	},
	msgFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'msg-font-weight'
		},
	},
	msgLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'msg-line-height-type'
		},
	},
	msgLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-line-height'
		},
	},
	msgLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-line-height-tablet'
		},
	},
	msgLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-line-height-mobile'
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
			styleType: 'radio-border-radius-type'
		},
	},
	msgBorderRadiusType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'msg-border-radius-type'
		},
	},
	fieldBorderRadiusType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-border-radius-type'
		},
	},
	buttonBorderRadiusType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-border-radius-type'
		},
	},
	successMsgFontSize: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size'
		},
	},
	successMsgFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size-type'
		},
	},
	successMsgFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size-tablet'
		},
	},
	successMsgFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-font-size-mobile'
		},
	},
	successMsgFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'success-msg-font-family'
		},
	},
	successMsgFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-font-weight'
		},
	},
	successMsgLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height-type'
		},
	},
	successMsgLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height'
		},
	},
	successMsgLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height-tablet'
		},
	},
	successMsgLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-line-height-mobile'
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
			styleType: 'msg-left-padding'
		},
	},
	msgrightPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-right-padding'
		},
	},
	msgtopPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-top-padding'
		},
	},
	msgbottomPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-bottom-padding'
		},
	},
	msgleftMobilePadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-left-padding-mobile'
		},
	},
	msgrightMobilePadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-right-padding-mobile'
		},
	},
	msgtopMobilePadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-top-padding-mobile'
		},
	},
	msgbottomMobilePadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-bottom-padding-mobile'
		},
	},
	msgleftTabletPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'msg-left-padding-tablet'
		},
	},
	msgrightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-right-padding-tablet'
		},
		default: '',
	},
	msgtopTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-top-padding-tablet'
		},
		default: '',
	},
	msgbottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'msg-bottom-padding-tablet'
		},
		default: '',
	},
	msgtabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'msg-padding-unit-tablet'
		},
	},
	msgmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'msg-padding-unit-mobile'
		},
	},
	msgpaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'msg-padding-unit'
		},
	},
	msgpaddingLink: {
		type: 'boolean',
		default: false,
	},
	buttonleftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding'
		},
	},
	buttonrightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding'
		},
	},
	buttontopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding'
		},
	},
	buttonbottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding'
		},
	},
	buttonleftMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		},
		default: '',
	},
	buttonrightMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		},
		default: '',
	},
	buttontopMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		},
		default: '',
	},
	buttonbottomMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		},
		default: '',
	},
	buttonleftTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet'
		},
		default: '',
	},
	buttonrightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		},
		default: '',
	},
	buttontopTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet'
		},
		default: '',
	},
	buttonbottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		},
		default: '',
	},
	buttonpaddingLink: {
		type: 'boolean',
		default: false,
	},
	buttontabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet'
		},
	},
	buttonmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile'
		},
	},
	buttonpaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit'
		},
	},
	fieldleftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding'
		},
	},
	fieldrightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding'
		},
	},
	fieldtopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding'
		},
	},
	fieldbottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding'
		},
	},
	fieldleftMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding-mobile'
		},
		default: '',
	},
	fieldrightMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding-mobile'
		},
		default: '',
	},
	fieldtopMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding-mobile'
		},
		default: '',
	},
	fieldbottomMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding-mobile'
		},
		default: '',
	},
	fieldleftTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding-tablet'
		},
		default: '',
	},
	fieldrightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding-tablet'
		},
		default: '',
	},
	fieldtopTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding-tablet'
		},
		default: '',
	},
	fieldbottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding-tablet'
		},
		default: '',
	},
	fieldtabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-unit-tablet'
		},
	},
	fieldmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-unit-mobile'
		},
	},
	fieldpaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-unit'
		},
	},
	fieldpaddingLink: {
		type: 'boolean',
		default: false,
	},
	labelTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	labelDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	labelFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
	},
	inputTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-transform'
		},
	},
	inputDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-decoration'
		},
	},
	inputFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-font-style'
		},
	},
	buttonTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		},
	},
	buttonDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		},
	},
	buttonFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		},
	},
	radioCheckTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'radio-transform'
		},
	},
	radioCheckDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'radio-decoration'
		},
	},
	radioCheckFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'radio-font-style'
		},
	},
	validationMsgTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-transform'
		},
	},
	validationMsgDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-decoration'
		},
	},
	validationMsgFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-style'
		},
	},
	msgTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'msg-transform'
		},
	},
	msgDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'msg-decoration'
		},
	},
	msgFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'msg-font-style'
		},
	},
	successMsgTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-transform'
		},
	},
	successMsgDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-decoration'
		},
	},
	successMsgFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-font-style'
		},
	},
}
export default attributes;
