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
	overlayType: {
		type: "string",
		default: "color"
	},
	gradientOverlayColor1: {
		type: "string",
	},
	gradientOverlayColor2: {
		type: "string",
	},
	gradientOverlayType: {
		type: "string",
		default: "linear"
	},
	gradientOverlayLocation1: {
		type: "number",
		default: 0
	},
	gradientOverlayLocation2: {
		type: "number",
		default: 100
	},
	gradientOverlayAngle: {
		type: "number",
		default: 0
	},
	columnGap: {
		type: "string",
		default: "10"
	},
	boxShadowColor: {
		type: "string"
	},
	boxShadowHOffset : {
		type: "number",
		default: 0
	},
	boxShadowVOffset : {
		type: "number",
		default: 0
	},
	boxShadowBlur : {
		type: "number"
	},
	boxShadowSpread : {
		type: "number"
	},
	boxShadowPosition: {
		type: "string",
		default: "outset"
	},
}

export default attributes

