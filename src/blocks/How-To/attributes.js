/**
 * BLOCK: UAGB How-To Attributes
 */
const ITEM_TOOLS_COUNT = 1

const ITEM_MATERIALS_COUNT = 1

const tools = []

const materials = []

for (var i = 1; i <= ITEM_TOOLS_COUNT; i++) {
	tools.push(
		{
			"add_required_tools": "- A Computer.",
		}
	)
}

for (var i = 1; i <= ITEM_MATERIALS_COUNT; i++) {
	materials.push(
		{
			"add_required_materials": "- A WordPress Website.",
		}
	)
}

const attributes = {
	block_id: {
		type: "string"
	},
	overallAlignment: {
		type: "string",
		default: "center",
	},
	icon_color: {
		type: "string"
	},
	icon_hover_color: {
		type: "string"
	},
	materials_icon_color: {
		type: "string"
	},
	materials_icon_hover_color: {
		type: "string"
	},
	toolsTitle: {
		type: "string",
		default : "Required Tools:"
	},
	materialTitle: {
		type: "string",
		default : "Things Needed?"
	},
	toolsTitleColor:{
		type: "string",
	},
	materialTitleColor:{
		type: "string",
	},
	stepsTitle: {
		type: "string",
		default : "Steps to configure the How-to Schema:"
	},
	tools_count: {
		type: "number",
		default: ITEM_TOOLS_COUNT
	},
	material_count: {
		type: "number",
		default: ITEM_MATERIALS_COUNT
	},
	tools: {
		type: "array",
		default : tools,
	},
	materials: {
		type: "array",
		default : materials,
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
		default: "Total Time Needed :",
	},
	timeIn:{
		type: "string",
		default: " Minutes",
	},
	imgSize:{
		type: "string",
		default: "thumbnail",
	},
	timeSpace :{
		type: "number",
		default: 5,
	},
	costSpace :{
		type: "number",
		default: 5,
	},
	time:{
		type: "string",
		default: "30",
	},
	cost:{
		type: "string",
		default: "65",
	},
	imgWidth :{
		type: "number",
		default: 120,
	},
	headingTitle: {
		source: "html",
		selector: "h1,h2,h3,h4,h5,h6",
		default: "How To Configure How-To Schema In Ultimate Addons For Gutenberg?",
	},
	currencyType: {
		type: "string",
		default: " USD"
	},
	headingId: {
		type: "string",				
	},
	headingDesc: {
		source: "html",
		selector: "p",
		default: "So to get started, you will just need to drag-n-drop the How-to Schema block in the Gutenberg editor. The How-to Schema block can be used on pages that contain a How-to in their title and describe steps to achieve certain requirements.",
	},
	headingAlign: {
		type: "string",
		default: "left",
	},
	descriptionAlign: {
		type: "string",
		default: "left",
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
		default: "Default",
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
	materialsFontFamily: {
		type: "string",
		default: "Default",
	},
	materialsFontWeight: {
		type: "string",
	},
	materialsFontSubset: {
		type: "string",
	},
	materialsFontSizeType: {
		type: "string",
		default: "px"
	},
	materialsLineHeightType: {
		type: "string",
		default: "em"
	},
	materialsFontSize: {
		type: "number",
	},
	materialsFontSizeTablet: {
		type: "number",
	},
	materialsFontSizeMobile: {
		type: "number",
	},
	materialsLineHeight: {
		type: "number",
	},
	materialsLineHeightTablet: {
		type: "number",
	},
	materialsLineHeightMobile: {
		type: "number",
	},
	toolsFontFamily: {
		type: "string",
		default: "Default",
	},
	toolsFontWeight: {
		type: "string",
	},
	toolsFontSubset: {
		type: "string",
	},
	toolsFontSizeType: {
		type: "string",
		default: "px"
	},
	toolsLineHeightType: {
		type: "string",
		default: "em"
	},
	toolsFontSize: {
		type: "number",
	},
	toolsFontSizeTablet: {
		type: "number",
	},
	toolsFontSizeMobile: {
		type: "number",
	},
	toolsLineHeight: {
		type: "number",
	},
	toolsLineHeightTablet: {
		type: "number",
	},
	toolsLineHeightMobile: {
		type: "number",
	},
	schema: {
		type: "string",
		default: ""
	}
}

export default attributes
