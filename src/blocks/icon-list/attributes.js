/**
 * BLOCK: UAGB Icon List Attributes
 */
const ITEM_COUNT = 1

const icons = []

for (var i = 1; i <= ITEM_COUNT; i++) {
	icons.push(
		{
			"label": "Label #" + i,
			"image_icon": "icon",
			"icon": "fab fa-facebook",
			"image": "",
			"icon_color": "#3a3a3a",
			"label_color": "",
			"icon_hover_color": "",
			"label_hover_color": "",
			"icon_bg_color": "",
			"icon_bg_hover_color": "",
			"link": "#",
			"target": false,
			"disableLink": false,
		}
	)
}

const attributes = {
	block_id: {
		type: "string"
	},
	align: {
		type: "string",
		default: "left"
	},
	icon_count: {
		type: "number",
		default: ITEM_COUNT
	},
	icons: {
		type: "array",
		default : icons,
	},
	gap: {
		type: "number",
		default: 10
	},
	inner_gap: {
		type: "number",
		default: 15
	},
	size: {
		type: "number",
		default: 40
	},
	bgSize: {
		type: "number",
		default: 0
	},
	borderRadius: {
		type: "number",
		default: 0
	},
	hideLabel: {
		type: "boolean",
		default: false
	},
	fontSize: {
		type: "number"
	},
	icon_layout: {
		type: "string",
		default: "vertical"
	},
	stack: {
		type: "string",
		default: "none"
	}
}

export default attributes
