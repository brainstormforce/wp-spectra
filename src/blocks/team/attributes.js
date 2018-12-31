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
		selector: "div.uagb-team__prefix",
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
	socialColor: {
		type: "string",
		default: "#333"
	},
	socialHoverColor: {
		type: "string"
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
	socialFontSize: {
		type: "number",
		default: 20
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
		default: "above"
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
		default: 20,
	},
	imgRightMargin :{
		type: "number",
		default: 20,
	},
	imgTopMargin :{
		type: "number",
		default: 15,
	},
	imgBottomMargin :{
		type: "number",
		default: 15,
	},
	socialEnable: {
		type: "boolean",
		default: true
	},
	socialSpace :{
		type: "number",
		default: 20,
	},
	socialTarget: {
		type: "boolean",
		default: false,
	},
	twitterIcon : {
		type : "string",
		default : "fab fa-twitter"
	},
	fbIcon : {
		type : "string",
		default : "fab fa-facebook"
	},
	linkedinIcon : {
		type : "string",
		default : "fab fa-linkedin"
	},
	pinIcon : {
		type : "string",
		default : "fab fa-pinterest"
	},
	twitterLink: {
		type: "string",
		default : "#"
	},
	fbLink: {
		type: "string",
		default : "#"
	},
	linkedinLink: {
		type: "string",
		default : "#"
	},
	pinLink: {
		type: "string",
		default : "#"
	},
	stack: {
		type: "string",
		default: "tablet"
	}
}

export default attributes
