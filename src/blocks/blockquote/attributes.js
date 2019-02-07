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
	descriptionText: {
		selector: "div.uagb-blockquote__content",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	descColor: {
		type: "string",
	},
	descFontSize: {
		type: "number",
	},
	descFontSizeType: {
		type: "string",
		default: "px"
	},
	descFontSizeTablet: {
		type: "number",
	},
	descFontSizeMobile: {
		type: "number",
	},		
	descSpace :{
		type: "number",
		default: 20,
	},	
	author: {
		selector: ".uagb-blockquote__author",
		default: "Author",
	},		
	authorColor: {
		type: "string",
		default: "#888888"
	},
	authorFontSize: {
		type: "number",
	},
	authorFontSizeType: {
		type: "string",
		default: "px"
	},
	authorFontSizeTablet: {
		type: "number",
	},
	authorFontSizeMobile: {
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
		default: "left",
	},
	stack: {
		type: "string",
		default: "none"
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
		default: "classic"
	},
	iconLabel: {
		type: "string",
		default: "Tweet"
	},
	iconShareVia: {
		type: "string",
		default: ""
	},
	iconTargetUrl: {
		type: "string",
		default: "current"
	},
	customUrl:{
		type: "string",
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
	tweetBtnFontSizeType: {
		type: "string",
		default: "px"
	},
	tweetBtnFontSizeTablet: {
		type: "number",
	},
	tweetBtnFontSizeMobile: {
		type: "number",
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
		default: "style_2"
	},
	quoteColor: {
		type: "string",
		default: "#abb8c3"
	},
	quoteSize: {
		type: "number",
		default: 25,
	},	
	quoteSizeType: {
		type: "string",
		default: "px"
	},
	quoteSizeTablet: {
		type: "number",
	},
	quoteSizeMobile: {
		type: "number",
	},
	quotePadding: {
		type: "number",
		default: 10,
	},	
	quotePaddingType: {
		type: "string",
		default: "px"
	},
	quotePaddingTablet: {
		type: "number",
	},
	quotePaddingMobile: {
		type: "number",
	},	
	quoteBorderRadius: {
		type: "number",
		default: 100,
	},
	quoteBgColor: {
		type: "string",
		default: "#333"
	},	
	quoteTopMargin :{
		type: "number",
	},
	quoteBottomMargin:{
		type: "number",
	},
	quoteLeftMargin :{
		type: "number",
	},
	quoteRightMargin:{
		type: "number",
		default: 20
	},	
	quoteHoverColor: {
		type: "string",
	},
	quoteBgHoverColor: {
		type: "string",
	},
	borderHoverColor: {
		type: "string",
	},			
}

export default attributes
