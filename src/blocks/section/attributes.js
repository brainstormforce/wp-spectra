/**
 * BLOCK: UAGB Section Attributes
 */
const attributes = {
	align: {
		type: "string"
	},
	block_id: {
		type: "string",
	},
	topPadding: {
		type: "string",
		default: "20"
	},
	bottomPadding: {
		type: "string",
		default: "20"
	},
	leftPadding: {
		type: "string",
		default: "20"
	},
	rightPadding: {
		type: "string",
		default: "20"
	},
	topMargin: {
		type: "string",
		default: "0"
	},
	bottomMargin: {
		type: "string",
		default: "0"
	},
	leftMargin: {
		type: "string",
		default: "0"
	},
	rightMargin: {
		type: "string",
		default: "0"
	},
	contentWidth: {
		type: "string",
		default: "boxed"
	},
	width: {
		type: "number"
	},
	innerWidth: {
		type: "number"
	},
	tag: {
		type: "string",
		default: "section"
	},
	backgroundType: {
		type: "string",
	},
	backgroundImage: {
		type: "object",
	},
	backgroundPosition: {
		type: "string",
		default: "center-center"
	},
	backgroundSize: {
		type: "string",
		default: "cover"
	},
	backgroundRepeat: {
		type: "string",
		default: "no-repeat"
	},
	backgroundAttachment: {
		type: "string",
		default: "scroll"
	},
	backgroundVideo: {
		type: "object",
	},
	backgroundColor: {
		type: "string",
	},
	gradientColor1: {
		type: "string",
	},
	gradientColor2: {
		type: "string",
	},
	gradientType: {
		type: "string",
		default: "linear"
	},
	gradientLocation1: {
		type: "number",
		default: "0"
	},
	gradientLocation2: {
		type: "number",
		default: "100"
	},
	gradientAngle: {
		type: "number",
		default: "0"
	},
	backgroundOpacity: {
		type: "number",
		default: "0"
	},
	backgroundVideoOpacity: {
		type: "number",
		default: "50"
	},
	backgroundVideoColor: {
		type: "string",
	},
};

export default attributes;
