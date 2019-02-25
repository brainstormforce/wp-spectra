/**
 * BLOCK: Columns - Attributes
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
	columnGap: {
		type: "string",
		default: "10"
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
	topPaddingTablet: {
		type: "number"
	},
	bottomPaddingTablet: {
		type: "number"
	},
	leftPaddingTablet: {
		type: "number"
	},
	rightPaddingTablet: {
		type: "number"
	},
	topPaddingMobile: {
		type: "number"
	},
	bottomPaddingMobile: {
		type: "number"
	},
	leftPaddingMobile: {
		type: "number"
	},
	rightPaddingMobile: {
		type: "number"
	},
	topMargin: {
		type: "number",
		default: 0
	},
	bottomMargin: {
		type: "number",
		default: 0
	},
	topMarginMobile: {
		type: "number"
	},
	bottomMarginMobile: {
		type: "number"
	},
	topMarginTablet: {
		type: "number"
	},
	bottomMarginTablet: {
		type: "number"
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
	},
	bottomType : {
		type: "string",
		default : "none"
	},
	bottomColor : {
		type: "string"
	},
	bottomHeight : {
		type: "number"
	},
	bottomWidth : {
		type: "number"
	},
	topType : {
		type: "string",
		default : "none"
	},
	topColor : {
		type: "string"
	},
	topHeight : {
		type: "number"
	},
	topWidth : {
		type: "number"
	},
	topFlip: {
		type: "boolean",
		default: false
	},
	bottomFlip: {
		type: "boolean",
		default: false
	},
	reverseTablet: {
		type: "boolean",
		default: false
	},
	reverseMobile: {
		type: "boolean",
		default: false
	},
	topDividerOpacity : {
		type: "number",
		default: 100
	},
	bottomDividerOpacity : {
		type: "number",
		default: 100
	},
}

export default attributes
