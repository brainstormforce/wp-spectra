const attributes = { // eslint-disable-line no-unused-vars
	block_id: {
		type: 'string',
	},
	align: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	fieldStyle: {
		type: 'string',
		default: 'box',
	},
	fieldVrPadding: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	fieldHrPadding: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	fieldBgColor: {
		type: 'string',
		default: '#fafafa',
		isUAGStyle: true,
	},
	fieldLabelColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	fieldInputColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	fieldBorderStyle: {
		type: 'string',
		default: 'solid',
		isUAGStyle: true,
	},
	fieldBorderWidth: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	fieldBorderRadius: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	fieldBorderColor: {
		type: 'string',
		default: '#eeeeee',
		isUAGStyle: true,
	},
	fieldBorderFocusColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	buttonAlignment: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
	buttonVrPadding: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	buttonHrPadding: {
		type: 'number',
		default: 25,
		isUAGStyle: true,
	},
	buttonBorderStyle: {
		type: 'string',
		default: 'solid',
		isUAGStyle: true,
	},
	buttonBorderWidth: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	buttonBorderRadius: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	buttonBorderColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	buttonTextColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	buttonBgColor: {
		type: 'string',
		default: 'transparent',
		isUAGStyle: true,
	},
	buttonBorderHoverColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	buttonTextHoverColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	buttonBgHoverColor: {
		type: 'string',
		default: 'transparent',
		isUAGStyle: true,
	},
	fieldSpacing: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	fieldLabelSpacing: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	enableLabel: {
		type: 'boolean',
		default: false,
	},
	labelFontSize: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	labelFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	labelFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	labelFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	labelFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	labelFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	labelLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	labelLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	labelLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	labelLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	labelLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	inputFontSize: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	inputFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	inputFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	inputFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	inputFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	inputFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	inputLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	inputLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	inputLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	inputLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	inputLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	textAreaHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	buttonFontSize: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	buttonFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	buttonFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	buttonFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	buttonFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	buttonFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	buttonLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	buttonLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	buttonLineHeightTablet: {
		type: 'number',
	},
	buttonLineHeightMobile: {
		type: 'number',
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
		isUAGStyle: true,
	},
	radioCheckBgColor: {
		type: 'string',
		default: '#fafafa',
		isUAGStyle: true,
	},
	radioCheckSelectColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	radioCheckLableColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	radioCheckBorderColor: {
		type: 'string',
		default: '#cbcbcb',
		isUAGStyle: true,
	},
	radioCheckBorderWidth: {
		type: 'number',
		default: '1',
		isUAGStyle: true,
	},
	radioCheckBorderRadius: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	radioCheckFontSize: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	radioCheckFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	radioCheckFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	radioCheckFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	radioCheckFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	radioCheckFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	radioCheckLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	radioCheckLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	radioCheckLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	radioCheckLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	radioCheckLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	validationMsgColor: {
		type: 'string',
		default: '#ff0000',
		isUAGStyle: true,
	},
	validationMsgBgColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	advancedValidationSettings: {
		type: 'boolean',
		default: false,
	},
	highlightBorderColor: {
		type: 'string',
		default: '#ff0000',
		isUAGStyle: true,
	},
	validationMsgFontSize: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	validationMsgFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	validationMsgFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	validationMsgFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	validationMsgFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	validationMsgFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	validationMsgLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	validationMsgLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	validationMsgLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	validationMsgLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	validationMsgLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	successMsgColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	errorMsgColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	errorMsgBgColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	errorMsgBorderColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	msgBorderSize: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgBorderRadius: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgVrPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgHrPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgFontSize: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	msgFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	msgFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	msgFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	msgFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	msgLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	msgLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	msgLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	msgLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	msgLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	radioCheckBorderRadiusType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	msgBorderRadiusType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	fieldBorderRadiusType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	buttonBorderRadiusType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	successMsgFontSize: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	successMsgFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	successMsgFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	successMsgFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	successMsgFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	successMsgFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	successMsgLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	successMsgLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	successMsgLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	successMsgLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	successMsgLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	msgleftPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgrightPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgtopPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgbottomPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgleftMobilePadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgrightMobilePadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgtopMobilePadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgbottomMobilePadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgleftTabletPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	msgrightTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	msgtopTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	msgbottomTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	msgtabletPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	msgmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	msgpaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	msgpaddingLink: {
		type: 'boolean',
		default: false,
	},
	buttonleftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	buttonrightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	buttontopPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	buttonbottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	buttonleftMobilePadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	buttonrightMobilePadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	buttontopMobilePadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	buttonbottomMobilePadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	buttonleftTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	buttonrightTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	buttontopTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	buttonbottomTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	buttonpaddingLink: {
		type: 'boolean',
		default: false,
	},
	buttontabletPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	buttonmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	buttonpaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	fieldleftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	fieldrightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	fieldtopPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	fieldbottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	fieldleftMobilePadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	fieldrightMobilePadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	fieldtopMobilePadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	fieldbottomMobilePadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	fieldleftTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	fieldrightTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	fieldtopTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	fieldbottomTabletPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	fieldtabletPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	fieldmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	fieldpaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	fieldpaddingLink: {
		type: 'boolean',
		default: false,
	},
	labelTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	labelDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	labelFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	inputTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	inputDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	inputFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	buttonTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	buttonDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	buttonFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	radioCheckTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	radioCheckDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	radioCheckFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	validationMsgTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	validationMsgDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	validationMsgFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	msgTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	msgDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	msgFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	successMsgTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	successMsgDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	successMsgFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
}
export default attributes;
