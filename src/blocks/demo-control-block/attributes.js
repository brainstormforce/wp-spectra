/**
 * BLOCK: UAGB Demo Control Block Attributes
 */


 const attributes = {
	block_id: {
		type: "string",
	},
	c_id: {
		type: "string",
		default : null,
	},
	color: {
		type: 'string',
	},
	colorClass: {
		type: 'string',
	},
	noticeTitle: {
		type:"string",
		source: "html",					
		selector: ".uagb-notice-title",		
		default: "Notice Title",
	},
	headingTag: {
		type: "string",
		default: "h4"
	},
	noticeContent: {
		type: "string",
		default: "",
	},
	noticeDismiss: {
		type: "string",
		default: "",
	},
	cookies: {
		type: "boolean",
		default: false
	},
	close_cookie_days: {
		type: "number",
		default: 1
	},
	textColor: {
		type: "string",
		default: ""
	},
	titleColor: {
		type: "string",
		default: ""
	},
	noticeColor: {
		type: "string",
		default: "#FFD54F"
	},
	contentBgColor: {
		type: "string",
	},
	noticeDismissColor: {
		type: "string",
		default: ""
	},
	icon: {
		type: "string",
		default: "fa fa-window-close"
	},
	noticeAlignment: {
		type: "string",
		default: "left"
	},
	titleFontFamily: {
		type: "string",
		default: "Default",
	},
	titleFontWeight: {
		type: "string",
	},
	titleFontSubset: {
		type: "string",
	},
	titleFontSizeType: {
		type: "string",
		default: "px"
	},
	titleLineHeightType: {
		type: "string",
		default: "em"
	},
	titleFontSize: {
		type: "number",
		default : 15
	},
	titleFontSizeTablet: {
		type: "number",
		default : 15
	},
	titleFontSizeMobile: {
		type: "number",
		default : 15
	},
	titleLineHeight: {
		type: "number",
		default : 15
	},
	titleLineHeightTablet: {
		type: "number",
		default : 15
	},
	titleLineHeightMobile: {
		type: "number",
		default : 15
	},
	descFontFamily: {
		type: "string",
		default: "Default",
	},
	descFontWeight: {
		type: "string",
	},
	descFontSubset: {
		type: "string",
	},
	descFontSize: {
		type: "number",
		default : 15
	},
	descFontSizeType: {
		type: "string",
		default: "px"
	},
	descFontSizeTablet: {
		type: "number",
		default : 15
	},
	descFontSizeMobile: {
		type: "number",
		default : 15
	},
	descLineHeight: {
		type: "number",
		default : 15
	},
	descLineHeightType: {
		type: "string",
		default: "em"
	},
	descLineHeightTablet: {
		type: "number",
		default : 15
	},
	descLineHeightMobile: {
		type: "number",
		default : 15
	},
	titleLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	descLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	contentVrPadding: {
		type: "number",
		default : 15
	},
	contentHrPadding: {
		type: "number",
		default : 15
	},
	padding: {
		type: "number",
		default : 15
	},
	tabletPadding: {
		type: 'array',
		default: [ '', '', '', '' ],
	},
	mobilePadding: {
		type: 'array',
		default: [ '', '', '', '' ],
	},
	paddingUnit: {
		type: "string",
		default: "px"
	},
	paddingTop: {
		type: "number",
		default: 15
	},
	paddingBottom: {
		type: "number",
		default: 15
	},
	paddingLeft: {
		type: "number",
		default: 15
	},
	paddingRight: {
		type: "number",
		default: 15
	},
	paddingTopTablet: {
		type: "number",
		default: 15
	},
	paddingRightTablet: {
		type: "number",
		default: 15
	},
	paddingBottomTablet: {
		type: "number",
		default: 15
	},
	paddingLeftTablet: {
		type: "number",
		default: 15
	},
	paddingTopMobile: {
		type: "number",
		default: 15
	},
	paddingRightMobile: {
		type: "number",
		default: 15
	},
	paddingBottomMobile: {
		type: "number",
		default: 15
	},
	paddingLeftMobile: {
		type: "number",
		default: 15
	},
	layout: {
		type: "string",
		default : "modern",
	},
	highlightWidth: {
		type: "number",
		default : 10
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
}

export default attributes

