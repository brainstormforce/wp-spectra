/**
 * BLOCK: UAGB Team Block Attributes
 */

const attributes = {
	block_id :{
		type : "string"
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
	prefix: {
		selector: "span.uagb-team__prefix",
		default: "Designation",
	},
	description_text: {
		selector: "p",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	titleColor: {
		type: "string",
	},
	prefixColor: {
		type: "string",
		default: "#888888"
	},
	descColor: {
		type: "string",
	},
	titleFontSize: {
		type: "number",
	},
	prefixFontSize: {
		type: "number",
		default: 15
	},
	descFontSize: {
		type: "number",
	},
	image: {
		type: "object",
	},
	imgStyle: {
		type: "string",
		default: "normal"
	},
	imgPosition: {
		type: "string",
		default: "above-title"
	},
	imgAlign:{
		type : "string",
		default : "top"
	},
	imgSize:{
		type: "string",
		default: "thumbnail",
	},
	imgWidth :{
		type: "number",
		default: 120,
	},
	titleSpace: {
		type: "number",
	},
	prefixSpace: {
		type: "number",
	},
	descSpace :{
		type: "number",
		default: 10,
	},
	imgLeftMargin :{
		type: "number",
		default: 5,
	},
	imgRightMargin :{
		type: "number",
		default: 5,
	},
	imgTopMargin :{
		type: "number",
		default: 5,
	},
	imgBottomMargin :{
		type: "number",
		default: 5,
	}
}

export default attributes
