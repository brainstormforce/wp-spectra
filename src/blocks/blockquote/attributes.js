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
	descColor: {
		type: "string",
	},
	descFontSize: {
		type: "number",
	},		
	descSpace :{
		type: "number",
		default: 20,
	},	
	author: {
		selector: "div.uagb-blockquote__author",
		default: "Author",
	},		
	authorColor: {
		type: "string",
		default: "#888888"
	},
	authorFontSize: {
		type: "number",
	},
	authorSpace: {
		type: "number",
		default: 10,
	},	
	authorImage: {
		type: "object",	
		default:{
			"url": "",
			"alt": "Author Image",
		}	
	},
	authorImageSize:{
		type: "string",
		default: "thumbnail",
	},
	authorImageWidth :{
		type: "number",
		default: 40,
	},	
	authorImgBorderRadius: {
		type: "number",
		default : 100
	},
	authorImgPosition: {
		type: "string",
		default: "right",
	},
	stack: {
		type: "string",
		default: "tablet"
	},
	enableTweet:{
		type: "boolean",
		default: true,
	},
	iconView: {
		type: "string",
		default: "icon_text"
	},
	iconSkin: {
		type: "string",
		default: "link"
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
		default: 10
	},
	tweetBtnVrPadding: {
		type: "number",
		default: 10
	},
	tweetIconSpacing: {
		type: "number",
		default: 10
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
	quoteBorderRadius: {
		type: "number",
		default: 100,
	},
	quoteBgColor: {
		type: "string",
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
}

export default attributes
