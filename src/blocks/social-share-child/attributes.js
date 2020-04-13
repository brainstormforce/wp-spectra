/**
 * BLOCK: Icon List Child - Attributes
 */

const attributes = {
	block_id: {
		type: "string"
	},
	image_icon: {
		type: "string",
		default: "icon"
	},
	icon: {
		type: "string",
		default: "fab fa-arrow-circle-right"
	},
	image: {
		type: "array",
	},
	icon_color: {
		type: "string",
		default: "#3a3a3a"
	},
	icon_hover_color: {
		type: "string"
	},
	icon_bg_color: {
		type: "string"
	},
	icon_bg_hover_color: {
		type: "string"
	}
}

export default attributes
