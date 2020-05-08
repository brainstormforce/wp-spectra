/**
 * BLOCK: UAGB How-To Attributes
 */
const ITEM_TOOLS_COUNT = 1

const ITEM_MATERIALS_COUNT = 1

const ITEM_STEPS_COUNT = 1

const tools = []

const materials = []

const steps = []

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

for (var i = 1; i <= ITEM_STEPS_COUNT; i++) {
	steps.push(
		{
			"add_required_steps": "Step 1 : Enter the HowTo Schema title you want",
			"description": "Enter the description to your HowTo Schema",
			"link": "#",
			"image":"",
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
	materialTitle: {
		type: "string",
		default : "Required Materials:"
	},
	stepsTitle: {
		type: "string",
		default : "Required Steps:"
	},
	tools_count: {
		type: "number",
		default: ITEM_TOOLS_COUNT
	},
	steps_count: {
		type: "number",
		default: ITEM_STEPS_COUNT
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
	steps: {
		type: "array",
		default : steps,
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
	Cost:{
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
		default: "How to configure HowTo Schema in UAG?",
	},
	headingId: {
		type: "string",				
	},
	headingDesc: {
		source: "html",
		selector: "p",
		default: "So to get started, you will just need to drag-n-drop the How-to Schema block in the Guternburg editor. The How-to Schema block can be used on pages which contain a How-to in their title and describe steps to achieve certain requirements.",
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
