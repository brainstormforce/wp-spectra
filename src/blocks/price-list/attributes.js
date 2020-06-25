/**
 * BLOCK: Price List - Attributes
 */
const { __ } = wp.i18n

const ITEM_COUNT = 2

const rest_menu_block = []

for ( var i = 1; i <= ITEM_COUNT; i++ ) {
	var desc_text = __("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
	var title_text    = __("Menu Item "+i)
	var price_text    = __("$9")
	rest_menu_block.push(
		{
			"description": desc_text,
			"title": title_text,
			"price": price_text,
			"image": "",
		}
	)
}

const attributes = {
	classMigrate: {
		type: "boolean",
		default: false
	},
	childMigrate: {
		type: "boolean",
		default: false
	},
	menu_item_count: {
		type: "number",
		default: ITEM_COUNT
	},
	rest_menu_item_arr: {
		type: "array",
		default : rest_menu_block,
	},
	headingAlign: {
		type: "string",
		default: "left",
	},
	
	
	priceSpace: {
		type: "number",
		default : 5
	},
	descSpace: {
		type: "number",
		default : 15
	},
	titleSpace :{
		type: "number",
		default: 10,
	},
	block_id :{
		type : "string",
		default : "not_set"
	},
	imgVrPadding :{
		type: "number",
		default: 0,
	},
	imgHrPadding :{
		type: "number",
		default: 0,
	},
	imgTopPadding :{
		type: "number",
		default: 0,
	},
	imgBottomPadding :{
		type: "number",
		default: 0,
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
	rowGap: {
		type: "number",
		default : 10
	},
	columnGap: {
		type: "number",
		default : 10
	},
	contentVrPadding: {
		type: "number",
		default : 5
	},
	contentHrPadding: {
		type: "number",
		default : 5
	},
	
	stack: {
		type: "string",
		default: "tablet"
	},
}

export default attributes
