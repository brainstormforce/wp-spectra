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
			styleType: 'btn-v-padding'
		},
	},
	buttonHrPadding               : {
		type    : 'number',
		default : 25,
		UAGCopyPaste: {
			styleType: 'btn-h-padding'
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
			styleType: 'field-label-spacing'
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
			styleType: 'btn-hover-color'
		},
	},
	buttonFontSizeType            : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonFontSizeTablet          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonFontSizeMobile          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonFontFamily              : {
		type    : 'string',
		default : 'Default',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonFontWeight              : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonLineHeightType          : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonLineHeight              : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonLineHeightTablet        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonLineHeightMobile        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonLoadGoogleFonts         : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
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
			styleType: 'btn-hover-color'
		},
	},
	radioCheckBgColor             : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckSelectColor         : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckLableColor          : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckBorderColor         : {
		type    : 'string',
		default : '#abb8c3',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckBorderWidth         : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckBorderRadius        : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckFontSize            : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckFontSizeType        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckFontSizeTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckFontSizeMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckFontFamily          : {
		type    : 'string',
		default : 'Default',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckFontWeight          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckLineHeightType      : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckLineHeight          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckLineHeightTablet    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckLineHeightMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckLoadGoogleFonts     : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
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
			styleType: 'btn-hover-color'
		},
	},
	validationMsgBgColor          : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	enableHighlightBorder         : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	highlightBorderColor          : {
		type    : 'string',
		default : '#ff0000',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgFontSize         : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgFontSizeType     : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgFontSizeTablet   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgFontSizeMobile   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgFontFamily       : {
		type    : 'string',
		default : 'Default',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgFontWeight       : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgLineHeightType   : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgLineHeight       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgLineHeightTablet : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgLineHeightMobile : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgLoadGoogleFonts  : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	successMsgColor               : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	successMsgBgColor             : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	successMsgBorderColor         : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	errorMsgColor                 : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	errorMsgBgColor               : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	errorMsgBorderColor           : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgBorderSize                 : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgBorderRadius               : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgVrPadding                  : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgHrPadding                  : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgFontSize                   : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgFontSizeType               : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgFontSizeTablet             : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgFontSizeMobile             : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgFontFamily                 : {
		type    : 'string',
		default : 'Default',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgFontWeight                 : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgLineHeightType             : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgLineHeight                 : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgLineHeightTablet           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgLineHeightMobile           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgLoadGoogleFonts            : {
		type    : 'boolean',
		default : false,
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckBorderRadiusType    : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgBorderRadiusType           : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldBorderRadiusType         : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonBorderRadiusType        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageTopPaddingDesktop      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageBottomPaddingDesktop   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageLeftPaddingDesktop     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageRightPaddingDesktop    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},

	messageTopPaddingTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageBottomPaddingTablet    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageLeftPaddingTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageRightPaddingTablet     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageTopPaddingMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageBottomPaddingMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageLeftPaddingMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageRightPaddingMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messagePaddingTypeDesktop     : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	messageSpacingLink            : {
		type    : 'boolean',
		default : false,
	},

	buttonTopPaddingDesktop       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonBottomPaddingDesktop    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonLeftPaddingDesktop      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonRightPaddingDesktop     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},

	buttonTopPaddingTablet        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonBottomPaddingTablet     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonLeftPaddingTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonRightPaddingTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonTopPaddingMobile        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonBottomPaddingMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonLeftPaddingMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonRightPaddingMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonPaddingTypeDesktop      : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonPaddingTypeTablet       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonPaddingTypeMobile       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonSpacingLink             : {
		type    : 'boolean',
		default : false,
	},

	fieldTopPaddingDesktop        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldBottomPaddingDesktop     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldLeftPaddingDesktop       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldRightPaddingDesktop      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},

	fieldTopPaddingTablet         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldBottomPaddingTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldLeftPaddingTablet        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldRightPaddingTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},

	fieldTopPaddingMobile         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldBottomPaddingMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldLeftPaddingMobile        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldRightPaddingMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldPaddingTypeDesktop       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldPaddingTypeTablet        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldPaddingTypeMobile        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	fieldSpacingLink              : {
		type    : 'boolean',
		default : false,
	},
	labelTransform                : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	labelDecoration               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	labelFontStyle                : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	inputTransform                : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	inputDecoration               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	inputFontStyle                : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonTransform               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonDecoration              : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	buttonFontStyle               : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckTransform           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckDecoration          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	radioCheckFontStyle           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgTransform        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgDecoration       : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	validationMsgFontStyle        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgTransform                  : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgDecoration                 : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	msgFontStyle                  : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
 }
 export default attributes;
