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
	},
	titleFontSizeTablet: {
		type: "number",
	},
	titleFontSizeMobile: {
		type: "number",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightTablet: {
		type: "number",
	},
	titleLineHeightMobile: {
		type: "number",
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
	descLineHeight: {
		type: "number",
	},
	descLineHeightType: {
		type: "string",
		default: "em"
	},
	descLineHeightTablet: {
		type: "number",
	},
	descLineHeightMobile: {
		type: "number",
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
		default: 15
	},
	contentHrPadding: {
		type: "number",
	},
	padding: {
		type: "number",
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
	},
	paddingBottom: {
		type: "number",
	},
	paddingLeft: {
		type: "number",
	},
	paddingRight: {
		type: "number",
	},
	paddingTopTablet: {
		type: "number",
	},
	paddingRightTablet: {
		type: "number",
	},
	paddingBottomTablet: {
		type: "number",
	},
	paddingLeftTablet: {
		type: "number",
	},
	paddingTopMobile: {
		type: "number",
	},
	paddingRightMobile: {
		type: "number",
	},
	paddingBottomMobile: {
		type: "number",
	},
	paddingLeftMobile: {
		type: "number",
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
	widthType: {
		type: "string",
		default: "px"
	},
	gradientValue: {
		type: "string",
		default: "",
	},
}

export default attributes

