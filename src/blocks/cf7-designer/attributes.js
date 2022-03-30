/**
 * BLOCK: UAGB CF7 Attributes
 */

 const attributes = { // eslint-disable-line no-unused-vars
	block_id                      : {
		type : 'string',
	},
	align                         : {
		type    : 'string',
		default : 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		},
	},
	className                     : {
		type : 'string',
	},
	formId                        : {
		type    : 'string',
		default : '0',
	},
	isHtml                        : {
		type : 'boolean',
	},
	formJson                      : {
		type    : 'object',
		default : null,
	},
	fieldStyle                    : {
		type    : 'string',
		default : 'box',
	},
	fieldVrPadding                : {
		type    : 'number',
		default : 10,
		UAGCopyPaste: {
			styleType: 'field-v-padding'
		},
	},
	fieldHrPadding                : {
		type    : 'number',
		default : 10,
		UAGCopyPaste: {
			styleType: 'field-h-padding'
		},
	},
	fieldBgColor                  : {
		type    : 'string',
		default : '#fafafa',
		UAGCopyPaste: {
			styleType: 'field-bg-color'
		},
	},
	fieldLabelColor               : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	fieldInputColor               : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'input-color'
		},
	},
	fieldBorderStyle              : {
		type    : 'string',
		default : 'solid',
		UAGCopyPaste: {
			styleType: 'input-border-style'
		},
	},
	fieldBorderWidth              : {
		type    : 'number',
		default : 1,
		UAGCopyPaste: {
			styleType: 'input-border-width'
		},
	},
	fieldBorderRadius             : {
		type    : 'number',
		default : 0,
		UAGCopyPaste: {
			styleType: 'input-border-radius'
		},
	},
	fieldBorderColor              : {
		type    : 'string',
		default : '#eeeeee',
		UAGCopyPaste: {
			styleType: 'input-border-color'
		},
	},
	fieldBorderFocusColor         : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'input-border-hover-color'
		},
	},
	buttonAlignment               : {
		type    : 'string',
		default : 'left',
		UAGCopyPaste: {
			styleType: 'btn-align'
		},
	},
	buttonVrPadding               : {
		type    : 'number',
		default : 10,
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding'
		},
	},
	buttonHrPadding               : {
		type    : 'number',
		default : 25,
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding'
		},
	},
	buttonBorderStyle             : {
		type    : 'string',
		default : 'solid',
		UAGCopyPaste: {
			styleType: 'btn-border-style'
		},
	},
	buttonBorderWidth             : {
		type    : 'number',
		default : 1,
		UAGCopyPaste: {
			styleType: 'btn-border-width'
		},
	},
	buttonBorderRadius            : {
		type    : 'number',
		default : 0,
		UAGCopyPaste: {
			styleType: 'btn-border-radius'
		},
	},
	buttonBorderColor             : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'btn-border-color'
		},
	},
	buttonTextColor               : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'btn-color'
		},
	},
	buttonBgColor                 : {
		type    : 'string',
		default : 'transparent',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		},
	},
	buttonBorderHoverColor        : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color'
		},
	},
	buttonTextHoverColor          : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonBgHoverColor            : {
		type    : 'string',
		default : 'transparent',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color'
		},
	},
	fieldSpacing                  : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'field-bottom-margin'
		},
	},
	fieldLabelSpacing             : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'main-title-margin-bottom'
		},
	},
	labelFontSize                 : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	labelFontSizeType             : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
	},
	labelFontSizeTablet           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	labelFontSizeMobile           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	labelFontFamily               : {
		type    : 'string',
		default : 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
	},
	labelFontWeight               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	labelLineHeightType           : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
	},
	labelLineHeight               : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	labelLineHeightTablet         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	labelLineHeightMobile         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	labelLoadGoogleFonts          : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
	},
	inputFontSize                 : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'input-font-size'
		},
	},
	inputFontSizeType             : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'input-font-size-type'
		},
	},
	inputFontSizeTablet           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'input-font-size-tablet'
		},
	},
	inputFontSizeMobile           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'input-font-size-mobile'
		},
	},
	inputFontFamily               : {
		type    : 'string',
		default : 'Default',
		UAGCopyPaste: {
			styleType: 'input-font-family'
		},
	},
	inputFontWeight               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'input-font-weight'
		},
	},
	inputLineHeightType           : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'input-line-height-type'
		},
	},
	inputLineHeight               : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height'
		},
	},
	inputLineHeightTablet         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height-tablet'
		},
	},
	inputLineHeightMobile         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height-mobile'
		},
	},
	inputLoadGoogleFonts          : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'input-load-google-fonts'
		},
	},
	buttonFontSize                : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		},
	},
	buttonFontSizeType            : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		},
	},
	buttonFontSizeTablet          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		},
	},
	buttonFontSizeMobile          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		},
	},
	buttonFontFamily              : {
		type    : 'string',
		default : 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		},
	},
	buttonFontWeight              : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		},
	},
	buttonLineHeightType          : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type'
		},
	},
	buttonLineHeight              : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height'
		},
	},
	buttonLineHeightTablet        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet'
		},
	},
	buttonLineHeightMobile        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile'
		},
	},
	buttonLoadGoogleFonts         : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts'
		},
	},
	enableOveride                 : {
		type    : 'boolean',
		default : true,
	},
	radioCheckSize                : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'radio-size'
		},
	},
	radioCheckBgColor             : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'radio-bg-color'
		},
	},
	radioCheckSelectColor         : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'radio-select-color'
		},
	},
	radioCheckLableColor          : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	radioCheckBorderColor         : {
		type    : 'string',
		default : '#abb8c3',
		UAGCopyPaste: {
			styleType: 'radio-border-color'
		},
	},
	radioCheckBorderWidth         : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'radio-border-width'
		},
	},
	radioCheckBorderRadius        : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'radio-border-radius'
		},
	},
	radioCheckFontSize            : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'radio-font-size'
		},
	},
	radioCheckFontSizeType        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'radio-font-size-type'
		},
	},
	radioCheckFontSizeTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'radio-font-size-tablet'
		},
	},
	radioCheckFontSizeMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'radio-font-size-mobile'
		},
	},
	radioCheckFontFamily          : {
		type    : 'string',
		default : 'Default',
		UAGCopyPaste: {
			styleType: 'radio-font-family'
		},
	},
	radioCheckFontWeight          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'radio-font-weight'
		},
	},
	radioCheckLineHeightType      : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'radio-line-height-type'
		},
	},
	radioCheckLineHeight          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'radio-line-height'
		},
	},
	radioCheckLineHeightTablet    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'radio-line-height-tablet'
		},
	},
	radioCheckLineHeightMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'radio-line-height-mobile'
		},
	},
	radioCheckLoadGoogleFonts     : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'radio-load-google-fonts'
		},
	},
	validationMsgPosition         : {
		type    : 'string',
		default : 'default',
	},
	validationMsgColor            : {
		type    : 'string',
		default : '#ff0000',
		UAGCopyPaste: {
			styleType: 'validate-msg-color'
		},
	},
	validationMsgBgColor          : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'validate-msg-color'
		},
	},
	enableHighlightBorder         : {
		type    : 'boolean',
		default : false,
	},
	highlightBorderColor          : {
		type    : 'string',
		default : '#ff0000',
		UAGCopyPaste: {
			styleType: 'validate-msg-highlight-border-color'
		},
	},
	validationMsgFontSize         : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size'
		},
	},
	validationMsgFontSizeType     : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size-type'
		},
	},
	validationMsgFontSizeTablet   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size-tablet'
		},
	},
	validationMsgFontSizeMobile   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-size-mobile'
		},
	},
	validationMsgFontFamily       : {
		type    : 'string',
		default : 'Default',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-family'
		},
	},
	validationMsgFontWeight       : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-weight'
		},
	},
	validationMsgLineHeightType   : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height-type'
		},
	},
	validationMsgLineHeight       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height'
		},
	},
	validationMsgLineHeightTablet : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height-tablet'
		},
	},
	validationMsgLineHeightMobile : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'validate-msg-line-height-mobile'
		},
	},
	validationMsgLoadGoogleFonts  : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'validate-load-google-fonts'
		},
	},
	successMsgColor               : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'success-msg-color'
		},
	},
	successMsgBgColor             : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'success-msg-bg-color'
		},
	},
	successMsgBorderColor         : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'success-msg-border-color'
		},
	},
	errorMsgColor                 : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'failed-msg-color'
		},
	},
	errorMsgBgColor               : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'failed-msg-color'
		},
	},
	errorMsgBorderColor           : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'failed-msg-border-color'
		},
	},
	msgBorderSize                 : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'msg-border-size'
		},
	},
	msgBorderRadius               : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'msg-border-radius'
		},
	},
	msgVrPadding                  : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'msg-v-padding'
		},
	},
	msgHrPadding                  : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'msg-h-padding'
		},
	},
	msgFontSize                   : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'msg-font-size'
		},
	},
	msgFontSizeType               : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'msg-font-size-type'
		},
	},
	msgFontSizeTablet             : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-font-size-tablet'
		},
	},
	msgFontSizeMobile             : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-font-size-mobile'
		},
	},
	msgFontFamily                 : {
		type    : 'string',
		default : 'Default',
		UAGCopyPaste: {
			styleType: 'msg-font-family'
		},
	},
	msgFontWeight                 : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'msg-font-weight'
		},
	},
	msgLineHeightType             : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'msg-line-height-type'
		},
	},
	msgLineHeight                 : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-line-height'
		},
	},
	msgLineHeightTablet           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-line-height-tablet'
		},
	},
	msgLineHeightMobile           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-line-height-mobile'
		},
	},
	msgLoadGoogleFonts            : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'msg-load-google-fonts'
		},
	},
	radioCheckBorderRadiusType    : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'radio-border-radius-type'
		},
	},
	msgBorderRadiusType           : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'msg-border-radius-type'
		},
	},
	fieldBorderRadiusType         : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'field-border-radius-type'
		},
	},
	buttonBorderRadiusType        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-border-radius-type'
		},
	},
	messageTopPaddingDesktop      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-top-padding-desktop'
		},
	},
	messageBottomPaddingDesktop   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-bottom-padding-desktop'
		},
	},
	messageLeftPaddingDesktop     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-left-padding-desktop'
		},
	},
	messageRightPaddingDesktop    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-right-padding-desktop'
		},
	},

	messageTopPaddingTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-top-padding-tablet'
		},
	},
	messageBottomPaddingTablet    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-bottom-padding-tablet'
		},
	},
	messageLeftPaddingTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-left-padding-tablet'
		},
	},
	messageRightPaddingTablet     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-right-padding-tablet'
		},
	},
	messageTopPaddingMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-top-padding-mobile'
		},
	},
	messageBottomPaddingMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-bottom-padding-mobile'
		},
	},
	messageLeftPaddingMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-left-padding-mobile'
		},
	},
	messageRightPaddingMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'msg-right-padding-mobile'
		},
	},
	messagePaddingTypeDesktop     : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'msg-padding-type-desktop'
		},
	},
	messageSpacingLink            : {
		type    : 'boolean',
		default : false,
	},

	buttonTopPaddingDesktop       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-desktop'
		},
	},
	buttonBottomPaddingDesktop    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-desktop'
		},
	},
	buttonLeftPaddingDesktop      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-desktop'
		},
	},
	buttonRightPaddingDesktop     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-desktop'
		},
	},

	buttonTopPaddingTablet        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet'
		},
	},
	buttonBottomPaddingTablet     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		},
	},
	buttonLeftPaddingTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet'
		},
	},
	buttonRightPaddingTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		},
	},
	buttonTopPaddingMobile        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		},
	},
	buttonBottomPaddingMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		},
	},
	buttonLeftPaddingMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		},
	},
	buttonRightPaddingMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		},
	},
	buttonPaddingTypeDesktop      : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-type-desktop'
		},
	},
	buttonPaddingTypeTablet       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-type-tablet'
		},
	},
	buttonPaddingTypeMobile       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-type-mobile'
		},
	},
	buttonSpacingLink             : {
		type    : 'boolean',
		default : false,
	},

	fieldTopPaddingDesktop        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding-desktop'
		},
	},
	fieldBottomPaddingDesktop     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding-desktop'
		},
	},
	fieldLeftPaddingDesktop       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding-desktop'
		},
	},
	fieldRightPaddingDesktop      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding-desktop'
		},
	},

	fieldTopPaddingTablet         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding-tablet'
		},
	},
	fieldBottomPaddingTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding-tablet'
		},
	},
	fieldLeftPaddingTablet        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding-tablet'
		},
	},
	fieldRightPaddingTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding-tablet'
		},
	},

	fieldTopPaddingMobile         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding-mobile'
		},
	},
	fieldBottomPaddingMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding-mobile'
		},
	},
	fieldLeftPaddingMobile        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding-mobile'
		},
	},
	fieldRightPaddingMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding-mobile'
		},
	},
	fieldPaddingTypeDesktop       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-type-desktop'
		},
	},
	fieldPaddingTypeTablet        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-type-tablet'
		},
	},
	fieldPaddingTypeMobile        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-type-mobile'
		},
	},
	fieldSpacingLink              : {
		type    : 'boolean',
		default : false,
	},
	labelTransform                : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	labelDecoration               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	labelFontStyle                : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
	},
	inputTransform                : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'input-transform'
		},
	},
	inputDecoration               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'input-decoration'
		},
	},
	inputFontStyle                : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'input-font-style'
		},
	},
	buttonTransform               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		},
	},
	buttonDecoration              : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		},
	},
	buttonFontStyle               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		},
	},
	radioCheckTransform           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'radio-transform'
		},
	},
	radioCheckDecoration          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'radio-decoration'
		},
	},
	radioCheckFontStyle           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'radio-font-style'
		},
	},
	validationMsgTransform        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-transform'
		},
	},
	validationMsgDecoration       : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-decoration'
		},
	},
	validationMsgFontStyle        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'validate-msg-font-style'
		},
	},
	msgTransform                  : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'msg-transform'
		},
	},
	msgDecoration                 : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'msg-decoration'
		},
	},
	msgFontStyle                  : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'msg-font-style'
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
 }
 export default attributes;
