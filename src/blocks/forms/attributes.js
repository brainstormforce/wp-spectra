import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	submitButtonText: {
		type: 'string',
		default: __( 'Submit', 'ultimate-addons-for-gutenberg' ),
	},
	formLabel: {
		type: 'string',
		default: __( 'Spectra Form', 'ultimate-addons-for-gutenberg' ),
	},
	buttonAlign: {
		type: 'string',
		default: 'left',
	},
	confirmationType: {
		type: 'string',
		default: 'message',
	},
	confirmationMessage: {
		type: 'string',
		default: __(
			'The form has been submitted successfully!',
			'ultimate-addons-for-gutenberg'
		),
	},
	failedMessage: {
		type: 'string',
		default: __(
			'There has been some error while submitting the form. Please verify all form fields again.',
			'ultimate-addons-for-gutenberg'
		),
	},
	failedMessageTextColor    : {
		type: 'string',
		isUAGStyle: true,
		default: ''
	},
	failedMessageBorderColor  : {
		type: 'string',
		isUAGStyle: true,
		default: ''
	},
	failedMessageBGColor      : {
		type: 'string',
		isUAGStyle: true,
		default: ''
	},
	failedMessageBorderStyle  : {
		type: 'string',
		isUAGStyle: true,
		default: 'solid'
	},
	failedMessageBorderWidth  : {
		type: 'number',
		default: 2,
		isUAGStyle: true,
	},
	confirmationUrl: {
		type: 'string',
	},
	sendAfterSubmitEmail: {
		type: 'boolean',
		default: true,
	},
	afterSubmitToEmail: {
		type: 'string',
		default: '',
	},
	afterSubmitCcEmail: {
		type: 'string',
		default: '',
	},
	afterSubmitBccEmail: {
		type: 'string',
		default: '',
	},
	afterSubmitEmailSubject: {
		type: 'string',
		default: __( 'Form Submission', 'ultimate-addons-for-gutenberg' ),
	},
	submitColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	submitColorHover: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	submitBgColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	submitBgColorHover: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	buttonSize: {
		type: 'string',
		default: 'medium',
		isUAGStyle: true,
	},
	// Border
	submitborderStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'none'
	},
	submitborderWidth: {
		type: 'number',
		isUAGStyle: true,
	},
	submitborderRadius: {
		type: 'number',
		default: 3,
		isUAGStyle: true,
	},
	submitborderColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	submitborderHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	hPaddingSubmit: {
		type: 'number',
		isUAGStyle: true,
	},
	vPaddingSubmit: {
		type: 'number',
		isUAGStyle: true,
	},
	// Submit text Typography

	submitTextloadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	submitTextFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	submitTextFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	// submitText Font Size
	submitTextFontSize: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	submitTextFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px'
	},
	submitTextFontSizeTablet: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	submitTextFontSizeMobile: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	// submitText Line Height
	submitTextLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	submitTextLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	submitTextLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	submitTextLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},

	// Label Font Family

	labelloadGoogleFonts: {
		type: 'boolean',
		default: false,
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
	// label Font Size
	labelFontSize: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	labelFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px'
	},
	labelFontSizeTablet: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	labelFontSizeMobile: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	// label Line Height
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

	// Input Font Family

	inputloadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	inputFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	inputFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	// input Font Size
	inputFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	inputFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px'
	},
	inputFontSizeTablet: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	inputFontSizeMobile: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	// input Line Height
	inputLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	inputLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	toggleSize: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	toggleWidthSize: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	toggleActiveColor: {
		type: 'string',
		default: '#000000',
		isUAGStyle: true,
	},
	toggleHeightSize: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	inputLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	inputLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},

	//Color.
	labelColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	inputColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	bgColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	inputplaceholderColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#abb8c3',
	},
	inputactiveColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#000000',
	},

	// InputBorder
	inputborderStyle: {
		type: 'string',
		default: 'solid',
		isUAGStyle: true,
	},
	inputborderWidth: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	inputborderRadius: {
		type: 'number',
		default: 3,
		isUAGStyle: true,
	},
	inputborderColor: {
		type: 'string',
		default: '#BDBDBD',
		isUAGStyle: true,
	},
	inputborderHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	hPaddingField: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	vPaddingField: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	fieldGap: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
	},

	formStyle: {
		type: 'string',
		default: 'boxed',
		isUAGStyle: true,
	},
	overallAlignment: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},

	//recaptha.
	reCaptchaEnable: {
		type: 'boolean',
		default: false,
	},
	reCaptchaType: {
		type: 'string',
		default: 'v2',
	},
	reCaptchaSiteKeyV2: {
		type: 'string',
		default: '',
	},
	reCaptchaSecretKeyV2: {
		type: 'string',
		default: '',
	},
	reCaptchaSiteKeyV3: {
		type: 'string',
		default: '',
	},
	reCaptchaSecretKeyV3: {
		type: 'string',
		default: '',
	},
	hidereCaptchaBatch: {
		type: 'boolean',
		default: false,
	},
	//message attributes
	successMessageTextColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	successMessageBGColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	successMessageBorderColor: {
		type: 'string',
		isUAGStyle: true,
		default: 'green',
	},
	successMessageBorderStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'solid',
	},
	successMessageBorderWidth: {
		type: 'string',
		isUAGStyle: true,
		default: '2',
	},
	captchaMessage: {
		type: 'string',
		default: __(
			'Please fill up the above captcha.',
			'ultimate-addons-for-gutenberg'
		),
	},

	successMessageBorderRadius: {
		type: 'string',
		isUAGStyle: true,
	},
	successMessageHoverBorderColor: {
		type: 'string',
		isUAGStyle: true,
	},
	failedMessageBorderRadius: {
		type: 'string',
		isUAGStyle: true,
	},
	failedMessageHoverBorderColor: {
		type: 'string',
		isUAGStyle: true,
	},
	paddingBtnTop: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRight: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottom: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeft: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	paddingspacingLink: {
		type: 'boolean',
		default: false,
	},
	submitTextTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	submitTextDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	labelTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	labelDecoration: {
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
	fieldGapType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingFieldTop: {
		type: 'number',
		default: 12,
		isUAGStyle: true,
	},
	paddingFieldRight: {
		type: 'number',
		default: 12,
		isUAGStyle: true,
	},
	paddingFieldBottom: {
		type: 'number',
		default: 12,
		isUAGStyle: true,
	},
	paddingFieldLeft: {
		type: 'number',
		default: 12,
		isUAGStyle: true,
	},
	paddingFieldTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingFieldRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingFieldBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingFieldLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingFieldTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingFieldRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingFieldBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingFieldLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingFieldUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingFieldUnitmobile: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingFieldUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingFieldLink: {
		type: 'boolean',
		default: false,
	},
	toggleSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	submitTextFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	labelFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	inputFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};
export default attributes;
