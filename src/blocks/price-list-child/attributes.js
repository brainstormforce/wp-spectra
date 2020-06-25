const { __ } = wp.i18n


const attributes = { 
	block_id: {
		type: "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	description:{
		type: "string",
		default:__("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
	},
	title:{
		type: "string",
		default: __(`Menu Item`)
	},
	price: {
		type: "string",
		default: __("$9")
	},
	image: {
		type:"string",
		default:"",
	},			
	imagePosition:{
		type: "string",
		default: "top"
	},
	imageAlignment:{
		type: "string",
		default: "top"
	},
	imageSize:{
		type: "string",
		default: "medium",
	},
	imageWidth :{
		type: "number",
		default: "",
	},
	descColor: {
		type: "string",
		default: "#333"
	},
	priceColor: {
		type: "string",
		default: "#888888"
	},
	titleColor: {
		type: "string",
		default: "#333"
	},
	
	seperatorStyle : {
		type: "string",
		default: "dashed"
	},
	seperatorWidth : {
		type: "number",
		default: "100"
	},
	seperatorThickness : {
		type: "number",
		default: "1"
	},
	seperatorColor : {
		type: "string",
		default: "#b2b4b5",
	},
	headingTag: {
		type: "string",
		default: "h4"
	},

	titleFontSizeType: {
		type: "string",
		default: "px"
	},
	titleFontSize: {
		type: "number",
	},
	titleFontSizeTablet: {
		type: "number",
	},
	titleFontSizeMobile: {
		type: "number",
	},
	titleFontFamily: {
		type: "string",
		default: "Default",
	},
	titleFontWeight: {
		type: "string",
	},
	titleFontSubset: {
		type: "string",
	},
	titleLineHeightType: {
		type: "string",
		default: "em"
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightTablet: {
		type: "number",
	},
	titleLineHeightMobile: {
		type: "number",
	},
	titleLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},

	priceFontSizeType: {
		type: "string",
		default: "px"
	},
	priceFontSize: {
		type: "number",
	},
	priceFontSizeTablet: {
		type: "number",
	},
	priceFontSizeMobile: {
		type: "number",
	},
	priceFontFamily: {
		type: "string",
		default: "Default",
	},
	priceFontWeight: {
		type: "string",
	},
	priceFontSubset: {
		type: "string",
	},
	priceLineHeightType: {
		type: "string",
		default: "em"
	},
	priceLineHeight: {
		type: "number",
	},
	priceLineHeightTablet: {
		type: "number",
	},
	priceLineHeightMobile: {
		type: "number",
	},
	priceLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},

	descFontSizeType: {
		type: "string",
		default: "px"
	},
	descFontSize: {
		type: "number",
	},
	descFontSizeTablet: {
		type: "number",
	},
	descFontSizeMobile: {
		type: "number",
	},
	descFontFamily: {
		type: "string",
		default: "Default",
	},
	descFontWeight: {
		type: "string",
	},
	descFontSubset: {
		type: "string",
	},
	descLineHeightType: {
		type: "string",
		default: "em"
	},
	descLineHeight: {
		type: "number",
	},
	descLineHeightTablet: {
		type: "number",
	},
	descLineHeightMobile: {
		type: "number",
	},
	descLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	columns :{
		type: "number",
		default: 2,
	},
	tcolumns :{
		type: "number",
		default: 2,
	},
	mcolumns :{
		type: "number",
		default: 1,
	},
	headingAlign: {
		type: "string",
		default: "left",
	},

}

export default attributes;