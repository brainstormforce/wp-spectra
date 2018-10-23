/**
 * BLOCK: UAGB Section Attributes
 */

const attributes = {
	prefixTitle: {
		selector: "span.uagb-infobox-title-prefix",
		default: "Prefix",
	},
	infoBoxTitle: {
		selector: "h1,h2,h3,h4,h5,h6",
		default: "Info Box",
	},
	headingDesc: {
		source: "html",
		selector: "p",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	headingAlign: {
		type: "string",
		default: "center",
	},
	headingColor: {
		type: "string",
	},
	subHeadingColor: {
		type: "string",
	},
	prefixColor: {
		type: "string",
	},
	icon : {
		type : "string",
		default : "fab fa fa-calendar-alt"
	},
	iconimgPosition: {
		type: "string",
		default: "above-title"
	},
	iconimgStyle: {
		type: "string",
		default: "normal"
	},
	iconRotate : {
		type: "number",
		default: 0,
	},
	iconSize : {
		type: "number",
		default: 40,
	},
	iconHover : {
		type : "string",
		default : ""
	},
	iconBgHover : {
		type : "string",
		default : ""
	},
	iconColor : {
		type : "string",
		default : "#333",
	},
	prefixTag :{
		type: "string",
		default: "h3"
	},
	prefixFontSize: {
		type: "number",
	},
	headingTag: {
		type: "string",
		default: "h3"
	},
	separatorHeight: {
		type: "number"
	},
	separatorWidth: {
		type: "number"
	},
	headFontSize: {
		type: "number",
	},
	subHeadFontSize: {
		type: "number",
	},
	headSpace: {
		type: "number",
	},
	separatorSpace: {
		type: "number",
	},
	subHeadSpace: {
		type: "number",
	},
	seperatorSpace:{
		type: "number",
		default : 10,
	},
	iconimgBg : {
		type : "string",
		default : "#eee",
	},
	iconimgBorder : {
		type : "string",
		default : "#eee",
	},
	iconimgBorderHover : {
		type : "string",
		default : ""
	},
	iconimgBorderstyle :{
		type : "string",
		default : "solid"
	},
	iconimgBorderWidth: {
		type: "number",
		default : 1
	},
	iconimgBorderRadius: {
		type: "number",
		default : 0
	},
	source_type :{
		type: "string",
		default: "icon",
	},
	iconimgbgSize :{
		type: "number",
		default : 15
	},
	block_id :{
		type : "string",
		default : "not_set"
	},
	sourceAlign:{
		type : "string",
		default : "top"
	},
	ctaTarget: {
		type: "boolean",
		default: false,
	},	
	seperatorStyle: {
		type: "string",
		default: "solid",
	},
	seperatorColor: {
		type: "string",
		default: "#333",
	},
	seperatorWidth :{
		type: "number",
		default : 30
	},
	seperatorThickness :{
		type: "number",
		default : 2
	},
	ctaType: {
		type: "string",
		default: "none",
	},
	ctaText: {
		type: "string",
		default: "Read More",
	},
	ctaLink: {
		type: "string",
		default: "#",
	},
	ctaLinkColor :{
		type: "string",
		default: "#333",
	},
	ctaFontSize :{
		type: "number",
		default : ''
	},	
	ctaBtnSize: {
		type: "string",
		default: "sm",
	},
	ctaBtnLinkColor :{
		type: "string",
		default: "#fff",
	},
	ctaBgColor :{
		type: "string",
		default: "#61ce70",
	},
	ctaBorderColor: {
		type: "string",
		default: "",
	},
	ctaBorderStyle: {
		type: "string",
		default: "none",
	},
	ctaBtnPadding :{
		type: "number",
	},
	ctaBorderWidth :{
		type: "number",
	},
	ctaBorderRadius :{
		type: "number",
	},
	prefixSpace :{
		type: "number",
		default: 10,
	},
	iconLeftMargin :{
		type: "number",
		default: 5,
	},
	iconRightMargin :{
		type: "number",
		default: 5,
	},
	iconTopMargin :{
		type: "number",
		default: 5,
	},
	iconBottomMargin :{
		type: "number",
		default: 5,
	},
	iconImage: {
		type: "object",
		default:{
			"url": "",
			"alt": "InfoBox placeholder img",
		}
	},
	imageSize:{
		type: "string",
		default: "thumbnail",
	},
	imageWidth :{
		type: "number",
		default: 120,
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
	backgroundOpacity: {
		type: "number",
		default: "100"
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
		default: "0"
	},
	gradientLocation2: {
		type: "number",
		default: "100"
	},
	gradientAngle: {
		type: "number",
		default: "0"
	},
	gradientDirection:{
		type: "string",
		default: "center_center"
	},	
	enableBorder: {
		type: "boolean",
		default: false,
	},
	borderstyle :{
		type : "string",
		default : "solid"
	},
	borderWidth: {
		type: "number",
		default : 1
	},
	borderRadius: {
		type: "number",
		default : 0
	},
	borderColor: {
		type: "string",
		default : ""
	},
}

export default attributes
