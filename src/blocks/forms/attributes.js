const { __ } = wp.i18n

const attributes = {
	block_id : {
		type: "string"
	},
	submitButtonText : {
		type: "string",
		default: __( "Submit" , "ultimate-addons-for-gutenberg" )
	},
	formLabel : {
		type: "string",
		default: __( "UAG Form" , "ultimate-addons-for-gutenberg" )
	},
	buttonAlign : {
		type: "string",
		default:  'left' 
	},
	confirmationType : {
		type: "string",
		default:  'message',
	},
	confirmationMessage : {
		type: "string",
		default: __( 'The form has been submitted successfully!' , 'ultimate-addons-for-gutenberg' )
	},
	failedMessage : {
		type: "string",
		default: __( 'There has been some error while submitting the form. Please verify all form fields again.' ,'ultimate-addons-for-gutenberg' )
	},
	confirmationUrl : {
		type: "string",
	},
	sendAfterSubmitEmail : {
		type: "boolean",
		default:true,
	},	
	afterSubmitToEmail : {
		type: "string",
		default:'',
	},
	afterSubmitCcEmail : {
		type: "string",
		default:'',
	},
	afterSubmitBccEmail : {
		type: "string",
		default:'',
	},
	afterSubmitEmailSubject : {
		type: "string",
		default:__( "Form Submission" , "ultimate-addons-for-gutenberg" )
	},	
	submitColor : {
		type: "string",
		default:"#000000"
	},
	submitColorHover : {
		type: "string",
		default:"#ffffff"
	},
	submitBgColor : {
		type: "string",
		default:"#ffffff"
	},
	submitBgColorHover : {
		type: "string",
		default:"#000000"
	},
	buttonSize : {
		type: "string",
		default: 'medium'
	},
	// Border
	submitborderStyle : {
		type: "string",
		default: "solid"
	},
	submitborderWidth : {
		type: "number",
		default: 1
	},
	submitborderRadius : {
		type: "number",
		default: 0
	},
	submitborderColor : {
		type: "string",
		default: "#7e8993"
	},
	submitborderHoverColor : {
		type: "string"
	},
	hPaddingSubmit : {
		type: "number",
	},
	vPaddingSubmit : {
		type: "number",
	},
	// Submit text Typography
	
	submitTextloadGoogleFonts: {
		type: "boolean",
		default: false
	},
	submitTextFontFamily: {
		type: "string",
		default: "Default",
	},
	submitTextFontWeight: {
		type: "string",
	},
	submitTextFontSubset: {
		type: "string",
	},
	// submitText Font Size
	submitTextFontSize: {
		type: "number",
		default: 20
	},
	submitTextFontSizeType: {
		type: "string",
		default: "px"
	},
	submitTextFontSizeTablet: {
		type: "number",
		default: 20
	},
	submitTextFontSizeMobile: {
		type: "number",
		default: 20
	},
	// submitText Line Height
	submitTextLineHeightType: {
		type: "string",
		default: "em"
	},
	submitTextLineHeight: {
		type: "number",
	},
	submitTextLineHeightTablet: {
		type: "number",
	},
	submitTextLineHeightMobile: {
		type: "number",
	},

	// Label Font Family
	
	labelloadGoogleFonts: {
		type: "boolean",
		default: false
	},
	labelFontFamily: {
		type: "string",
		default: "Default",
	},
	labelFontWeight: {
		type: "string",
	},
	labelFontSubset: {
		type: "string",
	},
	// label Font Size
	labelFontSize: {
		type: "number",
		default: 20
	},
	labelFontSizeType: {
		type: "string",
		default: "px"
	},
	labelFontSizeTablet: {
		type: "number",
		default: 20
	},
	labelFontSizeMobile: {
		type: "number",
		default: 20
	},
	// label Line Height
	labelLineHeightType: {
		type: "string",
		default: "em"
	},
	labelLineHeight: {
		type: "number",
	},
	labelLineHeightTablet: {
		type: "number",
	},
	labelLineHeightMobile: {
		type: "number",
	},
	

	// Input Font Family
	
	inputloadGoogleFonts: {
		type: "boolean",
		default: false
	},
	inputFontFamily: {
		type: "string",
		default: "Default",
	},
	inputFontWeight: {
		type: "string",
	},
	inputFontSubset: {
		type: "string",
	},
	// input Font Size
	inputFontSize: {
		type: "number"
	},
	inputFontSizeType: {
		type: "string",
		default: "px"
	},
	inputFontSizeTablet: {
		type: "number",
		default: 20
	},
	inputFontSizeMobile: {
		type: "number",
		default: 20
	},
	// input Line Height
	inputLineHeightType: {
		type: "string",
		default: "em"
	},
	inputLineHeight: {
		type: "number",
	},
	toggleSize:{
		type: "number",
		default:20
	},
	togglewidthSize:{
		type: "number",
		default:0
	},
	toggleheightSize:{
		type: "number",
		default:0
	},
	inputLineHeightTablet: {
		type: "number",
	},
	inputLineHeightMobile: {
		type: "number",
	},

	//Color.
	labelColor : {
		type: "string",
		default:"#000000"
	},
	inputColor : {
		type: "string",
		default:"#000000"
	},
	bgColor : {
		type: "string",
	},
	inputplaceholderColor : {
		type: "string",
		default:"#abb8c3"
	},
	inputactiveColor : {
		type: "string",
		default:"#000000"
	},
	

	// InputBorder
	inputborderStyle : {
		type: "string",
		default: "solid"
	},
	inputborderWidth : {
		type: "number",
		default: 1
	},
	inputborderRadius : {
		type: "number",
		default: 0
	},
	inputborderColor : {
		type: "string",
		default: "#7e8993"
	},
	inputborderHoverColor : {
		type: "string"
	},
	hPaddingField : {
		type: "number",
		default: 10
	},
	vPaddingField : {
		type: "number",
		default: 10
	},
	fieldGap : {
		type: "number",
		default: 20
	},

	formStyle : {
		type: "string",
		default: "boxed"
	},
	overallAlignment : {
		type: "string",
		default:'left'
	},

	//recaptha.
	reCaptchaEnable: {
		type: "boolean",
		default: false
	},
	reCaptchaType : {
		type: "string",
		default: "v2",
	},
	reCaptchaSiteKeyV2 : {
		type: "string",
		default: "",
	},
	reCaptchaSecretKeyV2 : {
		type: "string",
		default: "",
	},	
	reCaptchaSiteKeyV3 : {
		type: "string",
		default: "",
	},
	reCaptchaSecretKeyV3 : {
		type: "string",
		default: "",
	},
	hidereCaptchaBatch: {
		type: "boolean",
		default: false
	},
	//message attributes
	successMessageTextColor : {
		type: "string",
		default:"#000000",
	},
	successMessageBGColor : {
		type: "string",
		default:"#00800030",
	},
	successMessageBorderColor : {
		type: "string",
		default:"green",
	},
	successMessageBorderStyle :{
		type: "string",
		default:"solid",
	},
	successMessageBorderWidth:{
		type: "string",
		default:"2",
	},
	failedMessageTextColor : {
		type: "string",
		default:"#000000",
	},
	failedMessageBorderColor : {
		type: "string",
		default:"red",
	},
	failedMessageBGColor : {
		type: "string",
		default:"#f5f5f5",
	},
}
export default attributes
