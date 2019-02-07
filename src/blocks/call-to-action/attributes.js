/**
 * BLOCK: Call To Action - Attributes
 */

const attributes = {
	ctaTitle: {
		source: "html",
		selector: "h1,h2,h3,h4,h5,h6",
		default: "Call To Action",
	},
	description: {
		source: "html",
		selector: "p",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	textAlign: {
		type: "string",
		default: "left",
	},
	titleColor: {
		type: "string",
	},
	descColor: {
		type: "string",
	},
	ctaPosition: {
		type: "string",
		default: "right"
	},
	titleTag: {
		type: "string",
		default: "h3"
	},
	titleFontSize: {
		type: "number",
	},
	titleFontSizeType: {
		type: "string",
		default: "px"
	},
	titleFontSizeMobile: {
		type: "number",
	},
	titleFontSizeTablet: {
		type: "number",
	},
	descFontSize: {
		type: "number",
	},
	descFontSizeType: {
		type: "string",
		default: "px"
	},
	descFontSizeMobile: {
		type: "number",
	},
	descFontSizeTablet: {
		type: "number",
	},
	titleSpace: {
		type: "number",
		default : 10,
	},
	descSpace: {
		type: "number",
		default : 10,
	},
	block_id :{
		type : "string",
		default : "not_set"
	},
	buttonAlign:{
		type : "string",
		default : "middle"
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
	ctaFontSize :{
		type: "number",
	},
	ctaFontSizeType :{
		type: "string",
		default: "px"
	},
	ctaFontSizeMobile :{
		type: "number",
	},
	ctaFontSizeTablet :{
		type: "number",
	},
	contentWidth :{
		type: "number",
		default: "70",
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
