const { __ } = wp.i18n

const attributes = {
	block_id : {
		type: "string"
	},
	submitButtonText : {
		type: "string",
		default: __( "Submit" )
	},
	formLabel : {
		type: "string",
		default: __( "UAG Form" )
	},
	buttonAlign : {
		type: "string",
		default:'left'
	},
	confirmationType : {
		type: "string",
		default:'message'
	},
	confirmationMessage : {
		type: "string",
		default: __( 'The form has been submitted Successfully!' )
	},
	confirmationUrl : {
		type: "string",
	},
	sendAfterSubmitEmail : {
		type: "boolean"
	},
	afterSubmitFromEmail : {
		type: "string",
	},
	afterSubmitToEmail : {
		type: "string",
	},
	afterSubmitCcEmail : {
		type: "string",
	},
	afterSubmitBccEmail : {
		type: "string",
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
		default:"#abb8c3"
	},
	submitBgColorHover : {
		type: "string",
		default:"#000000"
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
		default: 20
	},
	vPaddingSubmit : {
		type: "number",
		default: 10
	},
	// Typography
	// Submit text Font Family
	
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
		type: "number",
		default: 20
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
		default:"#ffffff"
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
}
export default attributes
