/**
 * BLOCK: UAGB Tabs Block Attributes
 */
const ITEM_COUNT = 2	

const tab = []	

for ( var i = 1; i <= ITEM_COUNT; i++ ) {	
	var desc_text = "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."		
	tab.push(	
		{	
			"desc_text": desc_text,	
			"vPadding": 10,	
			"hPadding": 14,	
			"borderWidth": 1,	
			"borderRadius": 2,	
			"borderStyle": "solid",	
			"borderColor": "#333",	
			"borderHColor": "#333",	
		}	
	)	
}
const attributes = {
	block_id :{
		type : "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	align: {
		type: "string",
		default: "center",
	},
	tag :{
		type: "string",
		default: "h3"
	},
	title: {
		selector: "h1,h2,h3,h4,h5,h6",
		default: "John Doe",
	},
	titlebackgroundColor: {
		type: "string",
	},
	activeTabtitleColor: {
		type: "string",
	},
	activeTabtitlebackgroundColor: {
		type: "string",
	},
	activeTabtitleColor: {
		type: "string",
	},
	titleColor: {
		type: "string",
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
	titleFontSizeType: {
		type: "string",
		default: "px"
	},
	titleLineHeightType: {
		type: "string",
		default: "em"
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
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightTablet: {
		type: "number",
	},
	titleLineHeightMobile: {
		type: "number",
	},
	titleSpace: {
		type: "number",
	},
	initailOpentab: {
		type: "string",
		default: 'Tab 1',
	},
	tabstyle: {
		type: "string",
		default: "horizontal"
	},
	titleLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
}

export default attributes
