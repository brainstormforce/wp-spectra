/**
 * BLOCK: UAGB Section Attributes
 */
const attributes = {
	block_id: {
		type: "string",
	},
	columns: {
		type: "number",
		default: 2
	},
	align: {
		type: "string"
	},
	vAlign: {
		type: "string"
	},
	stack: {
		type: "string",
		default: "mobile"
	},
	topPadding: {
		type: "number",
		default: 20
	},
	bottomPadding: {
		type: "number",
		default: 20
	},
	leftPadding: {
		type: "number",
		default: 20
	},
	rightPadding: {
		type: "number",
		default: 20
	},
	topMargin: {
		type: "number",
		default: 0
	},
	bottomMargin: {
		type: "number",
		default: 0
	},
	leftMargin: {
		type: "number",
		default: 0
	},
	rightMargin: {
		type: "number",
		default: 0
	},
	contentWidth: {
		type: "string",
		default: "theme"
	},
	width: {
		type: "number",
		default: 900
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
		default: 0
	},
	gradientLocation2: {
		type: "number",
		default: 100
	},
	gradientAngle: {
		type: "number",
		default: 0
	},
	backgroundOpacity: {
		type: "number",
	},
	backgroundVideoOpacity: {
		type: "number",
		default: 50
	},
	backgroundVideoColor: {
		type: "string",
	},
	backgroundImageColor: {
		type: "string"
	},
	borderStyle : {
		type: "string",
		default: "none"
	},
	borderWidth : {
		type: "number",
		default: 1
	},
	borderRadius : {
		type: "number"
	},
	borderColor : {
		type: "string"
	}
}

export default attributes
