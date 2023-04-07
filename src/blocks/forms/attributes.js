import { __ } from '@wordpress/i18n';
import { getBorderAttributes } from '@Controls/generateAttributes';

const successMessageBorderAttributes = getBorderAttributes( 'successMsg' );
const failedMessageBorderAttributes = getBorderAttributes( 'errorMsg' );
const inputBorderAttributes = getBorderAttributes( 'field' );
const toggleBorderAttributes = getBorderAttributes( 'checkBoxToggle' );
const submitBorderAttributes = getBorderAttributes( 'btn' );

const attributes = {
	block_id: {
		type: 'string',
	},
	formPaddingTop: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-top-padding',
		},
	},
	formPaddingRight: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-right-padding',
		},
	},
	formPaddingBottom: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding',
		},
	},
	formPaddingLeft: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-left-padding',
		},
	},
	formPaddingTopTab: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-top-padding-tablet',
		},
	},
	formPaddingRightTab: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-right-padding-tablet',
		},
	},
	formPaddingBottomTab: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-tablet',
		},
	},
	formPaddingLeftTab: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-left-padding-tablet',
		},
	},
	formPaddingTopMob: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-top-padding-mobile',
		},
	},
	formPaddingRightMob: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-right-padding-mobile',
		},
	},
	formPaddingBottomMob: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-mobile',
		},
	},
	formPaddingLeftMob: {
		type: 'number',
		default: 25,
		UAGCopyPaste: {
			styleType: 'block-left-padding-mobile',
		},
	},
	formPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit',
		},
	},
	formPaddingUnitTab: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit-tablet',
		},
	},
	formPaddingUnitMob: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit-mobile',
		},
	},
	formPaddingLink: {
		type: 'boolean',
		default: true,
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
	buttonAlignTablet: {
		type: 'string',
		default: '',
	},
	buttonAlignMobile: {
		type: 'string',
		default: '',
	},
	confirmationType: {
		type: 'string',
		default: 'message',
	},
	confirmationMessage: {
		type: 'string',
		default: __( 'The form has been submitted successfully!', 'ultimate-addons-for-gutenberg' ),
	},
	failedMessage: {
		type: 'string',
		default: __(
			'There has been some error while submitting the form. Please verify all form fields again.',
			'ultimate-addons-for-gutenberg'
		),
	},
	failedMessageTextColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'failed-msg-text-color',
		},
		default: '',
	},
	failedMessageBorderColor: {
		type: 'string',
		default: 'red',
	},
	failedMessageBGColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'failed-msg-bg-color',
		},
		default: '',
	},
	failedMessageBorderStyle: {
		type: 'string',
		default: 'solid',
	},
	failedMessageBorderWidth: {
		type: 'number',
		default: 3,
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
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
		default: '',
	},
	submitColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
		},
		default: '',
	},
	submitBgType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-type',
		},
		default: 'color',
	},
	submitBgHoverType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-type',
		},
		default: 'color',
	},
	submitBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
		default: '',
	},
	submitBgColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color',
		},
		default: '',
	},
	buttonSize: {
		type: 'string',
		default: 'medium',
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	// Border
	submitborderStyle: {
		type: 'string',
	},
	submitborderWidth: {
		type: 'number',
	},
	submitborderRadius: {
		type: 'number',
		default: 3,
	},
	submitborderColor: {
		type: 'string',
	},
	submitborderHoverColor: {
		type: 'string',
	},
	hPaddingSubmit: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding',
		},
	},
	vPaddingSubmit: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding',
		},
	},
	// Submit text Typography

	submitTextloadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fontst',
		},
	},
	submitTextFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
	},
	submitTextFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	// submitText Font Size
	submitTextFontSize: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'btn-font-size',
		},
	},
	submitTextFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type',
		},
		default: 'px',
	},
	submitTextFontSizeTablet: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet',
		},
	},
	submitTextFontSizeMobile: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile',
		},
	},
	// submitText Line Height
	submitTextLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type',
		},
	},
	submitTextLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height',
		},
	},
	submitTextLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet',
		},
	},
	submitTextLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile',
		},
	},

	// Label Font Family

	labelloadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
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
	// label Font Size
	labelFontSize: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	labelFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
		default: 'px',
	},
	labelFontSizeTablet: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	labelFontSizeMobile: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	// label Line Height
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

	// Label Spacing

	labelGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	labelGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	labelGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-margin-bottom-mobile',
		},
	},
	labelGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit',
		},
	},

	// Input Font Family

	inputloadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'input-load-google-fonts',
		},
	},
	inputFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'input-font-family',
		},
	},
	inputFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-font-weight',
		},
	},
	// input Font Size
	inputFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-font-size',
		},
	},
	inputFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-font-size-type',
		},
		default: 'px',
	},
	inputFontSizeTablet: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'input-font-size-tablet',
		},
	},
	inputFontSizeMobile: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'input-font-size-mobile',
		},
	},
	// input Line Height
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
	toggleSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'toggle-size',
		},
		default: 15,
	},
	toggleSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'toggle-size',
		},
	},
	toggleSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'toggle-size',
		},
	},
	toggleWidthSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'toggle-width-size',
		},
		default: 0,
	},
	toggleWidthSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'toggle-width-size',
		},
	},
	toggleWidthSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'toggle-width-size',
		},
	},
	toggleColor: {
		type: 'string',
		default: '#ffffff',
		UAGCopyPaste: {
			styleType: 'toggle-color',
		},
	},
	toggleActiveColor: {
		type: 'string',
		default: '#017cba',
		UAGCopyPaste: {
			styleType: 'toggle-active-color',
		},
	},
	toggleDotColor: {
		type: 'string',
		default: '#1e1e1e',
		UAGCopyPaste: {
			styleType: 'toggle-dot-color',
		},
	},
	toggleDotActiveColor: {
		type: 'string',
		default: '#ffffff',
		UAGCopyPaste: {
			styleType: 'toggle-dot-active-color',
		},
	},
	// Toggle Border
	toggleBorderStyle: {
		type: 'string',
	},
	toggleBorderWidth: {
		type: 'number',
	},
	toggleBorderRadius: {
		type: 'number',
	},
	toggleBorderColor: {
		type: 'string',
	},
	toggleBorderActiveColor: {
		type: 'string',
	},

	// Input Line Height
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

	//Color.
	labelColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
		default: '',
	},
	labelHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-hover-color',
		},
		default: '',
	},
	inputColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-color',
		},
		default: '',
	},
	bgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-bg-color',
		},
		default: '',
	},
	bgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-bg-hover-color',
		},
		default: '',
	},
	bgActiveColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-bg-active-color',
		},
		default: '',
	},
	inputplaceholderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-placeholder-color',
		},
		default: '#abb8c3',
	},
	inputplaceholderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-placeholder-hover-color',
		},
		default: '#abb8c3',
	},
	inputplaceholderActiveColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-placeholder-active-color',
		},
		default: '#abb8c3',
	},
	inputactiveColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-active-color',
		},
		default: '#000000',
	},

	// InputBorder
	inputborderStyle: {
		type: 'string',
		default: 'solid',
	},
	inputborderWidth: {
		type: 'number',
		default: 1,
	},
	inputborderRadius: {
		type: 'number',
		default: 3,
	},
	inputborderColor: {
		type: 'string',
		default: '#BDBDBD',
	},
	inputborderHoverColor: {
		type: 'string',
	},
	hPaddingField: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'field-h-padding',
		},
	},
	vPaddingField: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'field-v-padding',
		},
	},
	fieldGap: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'field-gap',
		},
	},
	fieldGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-gap',
		},
	},
	fieldGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-gap',
		},
	},

	formStyle: {
		type: 'string',
		default: 'boxed',
		UAGCopyPaste: {
			styleType: 'form-style',
		},
	},
	overallAlignment: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
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
		UAGCopyPaste: {
			styleType: 'success-msg-color',
		},
		default: '',
	},
	successMessageBGColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-bg-color',
		},
		default: '',
	},
	successMessageBorderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-border-color',
		},
		default: 'green',
	},
	successMessageBorderStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'success-msg-border-style',
		},
		default: 'solid',
	},
	successMessageBorderWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'success-msg-border-width',
		},
		default: 3,
	},
	captchaMessage: {
		type: 'string',
		default: __( 'Please fill up the above captcha.', 'ultimate-addons-for-gutenberg' ),
	},

	successMessageBorderRadius: {
		type: 'number',
		default: 6,
		UAGCopyPaste: {
			styleType: 'success-msg-border-radius',
		},
	},
	successMessageHoverBorderColor: {
		type: 'string',
		default: 'yellowgreen',
		UAGCopyPaste: {
			styleType: 'success-msg-hover-border-color',
		},
	},
	failedMessageBorderRadius: {
		type: 'number',
		default: 6,
		UAGCopyPaste: {
			styleType: 'failed-msg-border-radius',
		},
	},
	failedMessageHoverBorderColor: {
		type: 'string',
		default: 'deeppink',
		UAGCopyPaste: {
			styleType: 'failed-msg-hover-border-color',
		},
	},
	paddingBtnTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	paddingBtnRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	paddingBtnBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	paddingBtnLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	paddingBtnTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	paddingBtnRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	paddingBtnBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	paddingBtnLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	paddingBtnTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	paddingBtnRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	paddingBtnBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	paddingBtnLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	paddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit',
		},
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile',
		},
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet',
		},
		default: 'px',
	},
	paddingspacingLink: {
		type: 'boolean',
		default: false,
	},
	submitTextTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform',
		},
	},
	submitTextDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration',
		},
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
	fieldGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-gap-type',
		},
	},
	paddingFieldTop: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'field-top-padding',
		},
	},
	paddingFieldRight: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'field-right-padding',
		},
	},
	paddingFieldBottom: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'field-bottom-padding',
		},
	},
	paddingFieldLeft: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'field-left-padding',
		},
	},
	paddingFieldTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding-tablet',
		},
	},
	paddingFieldRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding-tablet',
		},
	},
	paddingFieldBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding-tablet',
		},
	},
	paddingFieldLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding-tablet',
		},
	},
	paddingFieldTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-top-padding-mobile',
		},
	},
	paddingFieldRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-right-padding-mobile',
		},
	},
	paddingFieldBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-bottom-padding-mobile',
		},
	},
	paddingFieldLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'field-left-padding-mobile',
		},
	},
	paddingFieldUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-unit',
		},
	},
	paddingFieldUnitmobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-unit-mobile',
		},
	},
	paddingFieldUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'field-padding-unit-tablet',
		},
	},
	paddingFieldLink: {
		type: 'boolean',
		default: false,
	},
	toggleSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'toggle-size-type',
		},
	},
	submitTextFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
	},
	labelFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	inputFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'input-font-style',
		},
	},

	displayLabels: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'display-labels',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	...successMessageBorderAttributes,
	...failedMessageBorderAttributes,
	...inputBorderAttributes,
	...toggleBorderAttributes,
	...submitBorderAttributes,
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
	submitTextLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'submit-letter-spacing',
		},
	},
	submitTextLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'submit-letter-spacing-tablet',
		},
	},
	submitTextLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'submit-letter-spacing-mobile',
		},
	},
	submitTextLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'submit-letter-spacing-type',
		},
	},
	gradientValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)',
		UAGCopyPaste: {
			styleType: 'btn-bg-gradient-value',
		},
	},
	gradientColor1: {
		type: 'string',
		default: '#06558a',
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-1',
		},
	},
	gradientColor2: {
		type: 'string',
		default: '#0063A1',
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-2',
		},
	},
	gradientType: {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-type',
		},
	},
	selectGradient: {
		type: 'string',
		default: 'basic',
		UAGCopyPaste: {
			styleType: 'btn-gradient-type',
		},
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-gradient-location-1',
		},
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'btn-gradient-location-2',
		},
	},
	gradientAngle: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-gradient-angle',
		},
	},
	gradientHValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)',
		UAGCopyPaste: {
			styleType: 'btn-hbg-gradient-value',
		},
	},
	gradientHColor1: {
		type: 'string',
		default: '#06558a',
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-color-1',
		},
	},
	gradientHColor2: {
		type: 'string',
		default: '#0063A1',
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-color-2',
		},
	},
	gradientHType: {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-color-type',
		},
	},
	selectHGradient: {
		type: 'Boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-type',
		},
	},
	gradientHLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-location-1',
		},
	},
	gradientHLocation2: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-location-2',
		},
	},
	gradientHAngle: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-angle',
		},
	},
};
export default attributes;
