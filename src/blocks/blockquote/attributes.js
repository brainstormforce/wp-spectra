/**
 * BLOCK: UAGB Quote Block Attributes
 */

const attributes = {
	block_id :{
		type : "string"
	},
	skinStyle: {
		type: "string",
		default: "border"
	},
	align: {
		type: "string",
		default: "left",
	},	
	description_text: {
		selector: "p",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	author: {
		selector: "div.uagb-blockquote__author",
		default: "Author",
	},		
	authorColor: {
		type: "string",
		default: "#888888"
	},
	descColor: {
		type: "string",
	},
	enableTweet:{
		type: "boolean",
		default: false,
	},
	iconView: {
		type: "string",
		default: "text_with_icon"
	},
	iconSkin: {
		type: "string",
		default: "classic"
	},
	iconLabel: {
		type: "string",
		default: "Tweet"
	},
	iconSahreVia: {
		type: "string",
		default: ""
	},
	iconTargetUrl: {
		type: "string",
		default: "current_page"
	},
	tweetBtnColor: {
		type: "string",
		default: "#333"
	},
	tweetBtnHoverColor: {
		type: "string"
	},
	descFontSize: {
		type: "number",
	},
	authorFontSize: {
		type: "number",
	},
	tweetBtnFontSize: {
		type: "number",
		default: 15
	},	
	descSpace :{
		type: "number",
		default: 10,
	},
	authorSpace: {
		type: "number",
	},	
	stack: {
		type: "string",
		default: "tablet"
	},
	borderColor: {
		type: "string",
		default: "#abb8c3"
	},
	borderStyle: {
		type: "string",
		default: "solid"
	},
	borderWidth : {
		type: "number",
		default: 4,
	},
	borderGap : {
		type: "number",
		default: 15,
	},
	verticalPadding:{
		type: "number",
	},
	quoteStyle: {
		type: "string",
		default: "style_1"
	},
	quoteColor: {
		type: "string",
		default: "#abb8c3"
	},
	quoteSize: {
		type: "number",
		default: 50,
	},
	quoteGap : {
		type: "number",
	},
	quoteBgSize: {
		type: "number",
	},
	quoteBgColor: {
		type: "string",
		default: "#4c4f4c26"
	},
}

export default attributes
