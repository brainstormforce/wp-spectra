const ITEM_COUNT = 2

const buttons = []

for ( var i = 1; i <= ITEM_COUNT; i++ ) {
	var label = "Click Here " + "#" + i
	var link    = "#"
	buttons.push(
		{
			"label": label,
			"link": link,
			"target": "_self",
			"size": "",
			"vPadding": 10,
			"hPadding": 14,
			"borderWidth": 1,
			"borderRadius": 2,
			"borderStyle": "solid",
			"borderColor": "#333",
			"borderHColor": "#333",
			"color": "#333",
			"background": "",
			"hColor": "#333",
			"hBackground": "",
			"sizeType": "px",
			"sizeMobile": "",
			"sizeTablet": "",
		}
	)
}

const attributes = {
	block_id: {
		type: "string"
	},
	align: {
		type: "string",
		default: "center"
	},
	btn_count: {
		type: "number",
		default: ITEM_COUNT
	},
	buttons: {
		type: "array",
		default : buttons,
	},
	gap: {
		type: "number",
		default: 10
	},
	stack: {
		type: "string",
		default: "none"
	}
}

export default attributes
