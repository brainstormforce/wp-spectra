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
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	fieldHrPadding                : {
		type    : 'number',
		default : 10,
		isUAGStyle: true,
	},
	fieldBgColor                  : {
		type    : 'string',
		default : '#fafafa',
		isUAGStyle: true,
	},
	fieldLabelColor               : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	fieldInputColor               : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	fieldBorderStyle              : {
		type    : 'string',
		default : 'solid',
		isUAGStyle: true,
	},
	fieldBorderWidth              : {
		type    : 'number',
		default : 1,
		isUAGStyle: true,
	},
	fieldBorderRadius             : {
		type    : 'number',
		default : 0,
		isUAGStyle: true,
	},
	fieldBorderColor              : {
		type    : 'string',
		default : '#eeeeee',
		isUAGStyle: true,
	},
	fieldBorderFocusColor         : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	buttonAlignment               : {
		type    : 'string',
		default : 'left',
		isUAGStyle: true,
	},
	buttonVrPadding               : {
		type    : 'number',
		default : 10,
		isUAGStyle: true,
	},
	buttonHrPadding               : {
		type    : 'number',
		default : 25,
		isUAGStyle: true,
	},
	buttonBorderStyle             : {
		type    : 'string',
		default : 'solid',
		isUAGStyle: true,
	},
	buttonBorderWidth             : {
		type    : 'number',
		default : 1,
		isUAGStyle: true,
	},
	buttonBorderRadius            : {
		type    : 'number',
		default : 0,
		isUAGStyle: true,
	},
	buttonBorderColor             : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	buttonTextColor               : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	buttonBgColor                 : {
		type    : 'string',
		default : 'transparent',
		isUAGStyle: true,
	},
	buttonBorderHoverColor        : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	buttonTextHoverColor          : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	buttonBgHoverColor            : {
		type    : 'string',
		default : 'transparent',
		isUAGStyle: true,
	},
	fieldSpacing                  : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	fieldLabelSpacing             : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	labelFontSize                 : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	labelFontSizeType             : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	labelFontSizeTablet           : {
		type : 'number',
		isUAGStyle: true,
	},
	labelFontSizeMobile           : {
		type : 'number',
		isUAGStyle: true,
	},
	labelFontFamily               : {
		type    : 'string',
		default : 'Default',
		isUAGStyle: true,
	},
	labelFontWeight               : {
		type : 'string',
		isUAGStyle: true,
	},
	labelLineHeightType           : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	labelLineHeight               : {
		type : 'number',
		isUAGStyle: true,
	},
	labelLineHeightTablet         : {
		type : 'number',
		isUAGStyle: true,
	},
	labelLineHeightMobile         : {
		type : 'number',
		isUAGStyle: true,
	},
	labelLoadGoogleFonts          : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},
	inputFontSize                 : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	inputFontSizeType             : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	inputFontSizeTablet           : {
		type : 'number',
		isUAGStyle: true,
	},
	inputFontSizeMobile           : {
		type : 'number',
		isUAGStyle: true,
	},
	inputFontFamily               : {
		type    : 'string',
		default : 'Default',
		isUAGStyle: true,
	},
	inputFontWeight               : {
		type : 'string',
		isUAGStyle: true,
	},
	inputLineHeightType           : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	inputLineHeight               : {
		type : 'number',
		isUAGStyle: true,
	},
	inputLineHeightTablet         : {
		type : 'number',
		isUAGStyle: true,
	},
	inputLineHeightMobile         : {
		type : 'number',
		isUAGStyle: true,
	},
	inputLoadGoogleFonts          : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},
	buttonFontSize                : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	buttonFontSizeType            : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	buttonFontSizeTablet          : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonFontSizeMobile          : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonFontFamily              : {
		type    : 'string',
		default : 'Default',
		isUAGStyle: true,
	},
	buttonFontWeight              : {
		type : 'string',
		isUAGStyle: true,
	},
	buttonLineHeightType          : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	buttonLineHeight              : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonLineHeightTablet        : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonLineHeightMobile        : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonLoadGoogleFonts         : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},
	enableOveride                 : {
		type    : 'boolean',
		default : true,
	},
	radioCheckSize                : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	radioCheckBgColor             : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	radioCheckSelectColor         : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	radioCheckLableColor          : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	radioCheckBorderColor         : {
		type    : 'string',
		default : '#abb8c3',
		isUAGStyle: true,
	},
	radioCheckBorderWidth         : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	radioCheckBorderRadius        : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	radioCheckFontSize            : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	radioCheckFontSizeType        : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	radioCheckFontSizeTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	radioCheckFontSizeMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	radioCheckFontFamily          : {
		type    : 'string',
		default : 'Default',
		isUAGStyle: true,
	},
	radioCheckFontWeight          : {
		type : 'string',
		isUAGStyle: true,
	},
	radioCheckLineHeightType      : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	radioCheckLineHeight          : {
		type : 'number',
		isUAGStyle: true,
	},
	radioCheckLineHeightTablet    : {
		type : 'number',
		isUAGStyle: true,
	},
	radioCheckLineHeightMobile    : {
		type : 'number',
		isUAGStyle: true,
	},
	radioCheckLoadGoogleFonts     : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},
	validationMsgPosition         : {
		type    : 'string',
		default : 'default',
	},
	validationMsgColor            : {
		type    : 'string',
		default : '#ff0000',
		isUAGStyle: true,
	},
	validationMsgBgColor          : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	enableHighlightBorder         : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},
	highlightBorderColor          : {
		type    : 'string',
		default : '#ff0000',
		isUAGStyle: true,
	},
	validationMsgFontSize         : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	validationMsgFontSizeType     : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	validationMsgFontSizeTablet   : {
		type : 'number',
		isUAGStyle: true,
	},
	validationMsgFontSizeMobile   : {
		type : 'number',
		isUAGStyle: true,
	},
	validationMsgFontFamily       : {
		type    : 'string',
		default : 'Default',
		isUAGStyle: true,
	},
	validationMsgFontWeight       : {
		type : 'string',
		isUAGStyle: true,
	},
	validationMsgLineHeightType   : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	validationMsgLineHeight       : {
		type : 'number',
		isUAGStyle: true,
	},
	validationMsgLineHeightTablet : {
		type : 'number',
		isUAGStyle: true,
	},
	validationMsgLineHeightMobile : {
		type : 'number',
		isUAGStyle: true,
	},
	validationMsgLoadGoogleFonts  : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},
	successMsgColor               : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	successMsgBgColor             : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	successMsgBorderColor         : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	errorMsgColor                 : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	errorMsgBgColor               : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	errorMsgBorderColor           : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	msgBorderSize                 : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	msgBorderRadius               : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	msgVrPadding                  : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	msgHrPadding                  : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	msgFontSize                   : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	msgFontSizeType               : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	msgFontSizeTablet             : {
		type : 'number',
		isUAGStyle: true,
	},
	msgFontSizeMobile             : {
		type : 'number',
		isUAGStyle: true,
	},
	msgFontFamily                 : {
		type    : 'string',
		default : 'Default',
		isUAGStyle: true,
	},
	msgFontWeight                 : {
		type : 'string',
		isUAGStyle: true,
	},
	msgLineHeightType             : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	msgLineHeight                 : {
		type : 'number',
		isUAGStyle: true,
	},
	msgLineHeightTablet           : {
		type : 'number',
		isUAGStyle: true,
	},
	msgLineHeightMobile           : {
		type : 'number',
		isUAGStyle: true,
	},
	msgLoadGoogleFonts            : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},
	radioCheckBorderRadiusType    : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	msgBorderRadiusType           : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	fieldBorderRadiusType         : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	buttonBorderRadiusType        : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	messageTopPaddingDesktop      : {
		type : 'number',
		isUAGStyle: true,
	},
	messageBottomPaddingDesktop   : {
		type : 'number',
		isUAGStyle: true,
	},
	messageLeftPaddingDesktop     : {
		type : 'number',
		isUAGStyle: true,
	},
	messageRightPaddingDesktop    : {
		type : 'number',
		isUAGStyle: true,
	},

	messageTopPaddingTablet       : {
		type : 'number',
		isUAGStyle: true,
	},
	messageBottomPaddingTablet    : {
		type : 'number',
		isUAGStyle: true,
	},
	messageLeftPaddingTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	messageRightPaddingTablet     : {
		type : 'number',
		isUAGStyle: true,
	},
	messageTopPaddingMobile       : {
		type : 'number',
		isUAGStyle: true,
	},
	messageBottomPaddingMobile    : {
		type : 'number',
		isUAGStyle: true,
	},
	messageLeftPaddingMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	messageRightPaddingMobile     : {
		type : 'number',
		isUAGStyle: true,
	},
	messagePaddingTypeDesktop     : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	messageSpacingLink            : {
		type    : 'boolean',
		default : false,
	},

	buttonTopPaddingDesktop       : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonBottomPaddingDesktop    : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonLeftPaddingDesktop      : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonRightPaddingDesktop     : {
		type : 'number',
		isUAGStyle: true,
	},

	buttonTopPaddingTablet        : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonBottomPaddingTablet     : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonLeftPaddingTablet       : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonRightPaddingTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonTopPaddingMobile        : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonBottomPaddingMobile     : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonLeftPaddingMobile       : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonRightPaddingMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	buttonPaddingTypeDesktop      : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	buttonPaddingTypeTablet       : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	buttonPaddingTypeMobile       : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	buttonSpacingLink             : {
		type    : 'boolean',
		default : false,
	},

	fieldTopPaddingDesktop        : {
		type : 'number',
		isUAGStyle: true,
	},
	fieldBottomPaddingDesktop     : {
		type : 'number',
		isUAGStyle: true,
	},
	fieldLeftPaddingDesktop       : {
		type : 'number',
		isUAGStyle: true,
	},
	fieldRightPaddingDesktop      : {
		type : 'number',
		isUAGStyle: true,
	},

	fieldTopPaddingTablet         : {
		type : 'number',
		isUAGStyle: true,
	},
	fieldBottomPaddingTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	fieldLeftPaddingTablet        : {
		type : 'number',
		isUAGStyle: true,
	},
	fieldRightPaddingTablet       : {
		type : 'number',
		isUAGStyle: true,
	},

	fieldTopPaddingMobile         : {
		type : 'number',
		isUAGStyle: true,
	},
	fieldBottomPaddingMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	fieldLeftPaddingMobile        : {
		type : 'number',
		isUAGStyle: true,
	},
	fieldRightPaddingMobile       : {
		type : 'number',
		isUAGStyle: true,
	},
	fieldPaddingTypeDesktop       : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	fieldPaddingTypeTablet        : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	fieldPaddingTypeMobile        : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	fieldSpacingLink              : {
		type    : 'boolean',
		default : false,
	},
	labelTransform                : {
		type : 'string',
		isUAGStyle: true,
	},
	labelDecoration               : {
		type : 'string',
		isUAGStyle: true,
	},
	labelFontStyle                : {
		type : 'string',
		isUAGStyle: true,
	},
	inputTransform                : {
		type : 'string',
		isUAGStyle: true,
	},
	inputDecoration               : {
		type : 'string',
		isUAGStyle: true,
	},
	inputFontStyle                : {
		type : 'string',
		isUAGStyle: true,
	},
	buttonTransform               : {
		type : 'string',
		isUAGStyle: true,
	},
	buttonDecoration              : {
		type : 'string',
		isUAGStyle: true,
	},
	buttonFontStyle               : {
		type : 'string',
		isUAGStyle: true,
	},
	radioCheckTransform           : {
		type : 'string',
		isUAGStyle: true,
	},
	radioCheckDecoration          : {
		type : 'string',
		isUAGStyle: true,
	},
	radioCheckFontStyle           : {
		type : 'string',
		isUAGStyle: true,
	},
	validationMsgTransform        : {
		type : 'string',
		isUAGStyle: true,
	},
	validationMsgDecoration       : {
		type : 'string',
		isUAGStyle: true,
	},
	validationMsgFontStyle        : {
		type : 'string',
		isUAGStyle: true,
	},
	msgTransform                  : {
		type : 'string',
		isUAGStyle: true,
	},
	msgDecoration                 : {
		type : 'string',
		isUAGStyle: true,
	},
	msgFontStyle                  : {
		type : 'string',
		isUAGStyle: true,
	},
 }
 export default attributes;
