/**
 * BLOCK: UAGB Section Attributes
 */

const attributes = {	
	ctaTitle: {
		source: "html",
		selector: "h1,h2,h3,h4,h5,h6",
		default: "Call To Action",
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
	ctaPosition: {
		type: "string",
		default: "below-title"
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
		default : 10,
	},
	subHeadSpace: {
		type: "number",
		default : 10,
	},	
	iconimgBorderRadius: {
		type: "number",
		default : 0
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
	ctaIcon : {
		type : "string",
		default : ""
	},
	ctaIconPosition: {
		type: "string",
		default: "after"
	},
	ctaIconSpace :{
		type: "number",
		default : 5
	},	
	ctaType: {
		type: "string",
		default: "button",
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
	},
	ctaBtnLinkColor :{
		type: "string",
		default: "#333",
	},
	ctaLinkHoverColor:{
		type: "string",
		default: "",
	},
	ctaBgColor :{
		type: "string",
		default:"transparent",
	},
	ctaBgHoverColor :{
		type: "string",
		default:"transparent",
	},
	ctaBorderColor: {
		type: "string",
		default: "#333",
	},
	ctaBorderhoverColor:{
		type: "string",
		default: "",
	},
	ctaBorderStyle: {
		type: "string",
		default: "solid",
	},
	ctaBtnVertPadding :{
		type: "number",
		default: 10,
	},
	ctaBtnHrPadding :{
		type: "number",
		default: 14,
	},
	ctaBorderWidth :{
		type: "number",
		default: 1,
	},
	ctaBorderRadius :{
		type: "number",
		default: 0,
	},		
	
	stack: {
		type: "string",
		default: "tablet"
	},	
	showTitle: {
		type: "boolean",
		default: true,
	},
	showDesc: {
		type: "boolean",
		default: true,
	},
	ctaTopSpace :{
		type: "number",
		default: 0,
	},
	ctaBottomSpace :{
		type: "number",
		default: 0,
	},
	ctaLeftSpace :{
		type: "number",
		default: 5,
	},
	ctaRightSpace :{
		type: "number",
		default: 5,
	},
}

export default attributes
