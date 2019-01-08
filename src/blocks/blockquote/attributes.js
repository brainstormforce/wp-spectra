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
		default: "center",
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
		default: "icon_text"
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
		default: ""
	},
	tweetLinkColor: {
		type: "string",
		default: "#1DA1F2"
	},
	tweetBtnColor: {
		type: "string",
		default: "#fff"
	},
	tweetBtnBgColor: {
		type: "string",
		default: "#1DA1F2"
	},
	tweetBtnHoverColor: {
		type: "string"
	},
	tweetBtnBgHoverColor: {
		type: "string",
		default: "#1DA1F2"
	},
	tweetBtnFontSize: {
		type: "number",
		default: 15
	},	
	tweetBtnHrPadding: {
		type: "number",
		default: 14
	},
	tweetBtnVrPadding: {
		type: "number",
		default: 10
	},
	tweetIconSpacing: {
		type: "number",
		default: 10
	},
	descFontSize: {
		type: "number",
	},
	authorFontSize: {
		type: "number",
	},	
	descSpace :{
		type: "number",
		default: 20,
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
		default: 60,
	},
	quoteGap : {
		type: "number",
		default: 15,
	},
	quoteBgSize: {
		type: "number",
	},
	quoteBgColor: {
		type: "string",
		default: "#4c4f4c26"
	},
	seperatorStyle: {
		type: "string",
		default: "none",
	},
	seperatorColor: {
		type: "string",
		default: "#eeeeee",
	},
	seperatorWidth :{
		type: "number",
		default : 100
	},
	seperatorThickness :{
		type: "number",
		default : 2
	},
	seperatorSpace:{
		type: "number",
		default : 20
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
		type: "number"
	},	
	backgroundImageColor: {
		type: "string"
	},
}

export default attributes
