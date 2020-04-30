/**
 * BLOCK: UAGB How-To Attributes
 */
const ITEM_COUNT = 1

const tools = []

for (var i = 1; i <= ITEM_COUNT; i++) {
	tools.push(
		{
			"add_required_tools": "- A Computer.",
		}
	)
}

const attributes = {
	block_id: {
		type: "string"
	},
	toolsTitle: {
		type: "string",
		default : "Required Tools:"
	},
	tools_count: {
		type: "number",
		default: ITEM_COUNT
	},
	tools: {
		type: "array",
		default : tools,
	},
	showTotaltime: {
		type: "boolean",
		default: true
	},
	showEstcost: {
		type: "boolean",
		default: true
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	mainimage: {
		type: "object",
	},
	estCost:{
		type: "string",
		default: "Total Cost:",
	},
	timeNeeded:{
		type: "string",
		default: "Total Time Needed:",
	},
	imgSize:{
		type: "string",
		default: "thumbnail",
	},
	time:{
		type: "number",
		default: 30,
	},
	imgWidth :{
		type: "number",
		default: 120,
	},
	headingTitle: {
		source: "html",
		selector: "h1,h2,h3,h4,h5,h6",
	},
	headingId: {
		type: "string",				
	},
	headingDesc: {
		source: "html",
		selector: "p",
		default: "",
	},
	headingAlign: {
		type: "string",
		default: "center",
	},
	headingColor: {
		type: "string",
	},
	showEstcostcolor: {
		type: "string",
	},
	showTotaltimecolor: {
		type: "string",
	},
	subHeadingColor: {
		type: "string",
	},
	separatorColor: {
		type: "string",
	},
	headingTag: {
		type: "string",
		default: "h2"
	},
	level: {
		type: "number",
		default: 2
	},
	seperatorStyle: {
		type: "string",
		default: "solid",
	},
	separatorHeight: {
		type: "number"
	},
	separatorWidth: {
		type: "number"
	},
	separatorWidthType : {
		type: "string",
		default: "%"
	},
	headSpace: {
		type: "number",
		default: 15
	},
	headFontFamily: {
		type: "string",
		default: "Default",
	},
	headFontWeight: {
		type: "string",
	},
	headFontSubset: {
		type: "string",
	},
	headFontSizeType: {
		type: "string",
		default: "px"
	},
	headLineHeightType: {
		type: "string",
		default: "em"
	},
	headFontSize: {
		type: "number",
	},
	headFontSizeTablet: {
		type: "number",
	},
	headFontSizeMobile: {
		type: "number",
	},
	headLineHeight: {
		type: "number",
	},
	headLineHeightTablet: {
		type: "number",
	},
	headLineHeightMobile: {
		type: "number",
	},
	subHeadFontFamily: {
		type: "string",
		default: "",
	},
	subHeadFontWeight: {
		type: "string",
	},
	subHeadFontSubset: {
		type: "string",
	},
	subHeadFontSize: {
		type: "number",
	},
	subHeadFontSizeType: {
		type: "string",
		default: "px"
	},
	subHeadFontSizeTablet: {
		type: "number",
	},
	subHeadFontSizeMobile: {
		type: "number",
	},
	subHeadLineHeight: {
		type: "number",
	},
	subHeadLineHeightType: {
		type: "string",
		default: "em"
	},
	subHeadLineHeightTablet: {
		type: "number",
	},
	subHeadLineHeightMobile: {
		type: "number",
	},
	separatorSpace: {
		type: "number",
		default: 15
	},
	headLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	subHeadLoadGoogleFonts: {
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
	estcostFontSizeType: {
		type: "string",
		default: "px"
	},
	estcostFontSize: {
		type: "number",
	},
	estcostFontSizeTablet: {
		type: "number",
	},
	estcostFontSizeMobile: {
		type: "number",
	},
	estcostFontFamily: {
		type: "string",
		default: "Default",
	},
	estcostFontWeight: {
		type: "string",
	},
	estcostFontSubset: {
		type: "string",
	},
	estcostLineHeightType: {
		type: "string",
		default: "em"
	},
	estcostLineHeight: {
		type: "number",
	},
	estcostLineHeightTablet: {
		type: "number",
	},
	estcostLineHeightMobile: {
		type: "number",
	},
	estcostLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
}

export default attributes
