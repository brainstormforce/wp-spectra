/**
 * BLOCK: UAGB Section Attributes
 */
const ITEM_COUNT = 1

const markers = []

for (var i = 1; i <= ITEM_COUNT; i++) {
	markers.push(
		{
			"lat": "51.503333",
			"lon": "-0.119562",
			"title": "Coca-Cola London Eye",
			"desc": "",
			"infoTrigger": "none",
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
	marker_count: {
		type: "number",
		default: 1
	},
	markers: {
		type: "array",
		default : markers,
	},
	mapType: {
		type: "string",
		default: "roadmap"
	},
	mapSkin: {
		type: "string",
		default: "standard"
	},
	zoom: {
		type: "number",
		default: 12
	},
	height: {
		type: "number",
		default: 500
	},
	fullscreenControl: {
		type: "boolean",
		default: true
	},
	gestureHandling: {
		type: "boolean",
		default: true
	},
	streetViewControl: {
		type: "boolean",
		default: true
	},
	mapTypeControl: {
		type: "boolean",
		default: true
	},
	zoomControl: {
		type: "boolean",
		default: true
	},
	cluster: {
		type: "boolean",
		default: false
	}
}

export default attributes
