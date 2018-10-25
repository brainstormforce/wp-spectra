/**
 * BLOCK: UAGB Section Attributes
 */

const attributes = {
	prefixTitle: {
		selector: 'span.uagb-infobox-title-prefix',
		default: "John Doe",
	},
    headingTitle: {
		selector: 'span.uagb-infobox-title entry-title',
		default: "Designer",
	},
	headingDesc: {
		source: 'html',
		selector: 'p',
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	headingAlign: {
		type: "string",
		default: "center",
	},
	designationColor: {
		type: "string",
	},
	designationColor: {
		type: "string",
	},
	authorNameColor: {
		type: "string",
	},		
	iconimgStyle: {
		type: "string",
		default: "circle"
	},	
	imagePosition:{
		type: "string",
		default: "aside"
	},
	prefixTag :{
		type: "string",
		default: "h3"
	},
	authorFontSize: {
		type: "number",
	},
	separatorHeight: {
		type: "number"
	},
	separatorWidth: {
		type: "number"
	},
	designationFontSize: {
		type: "number",
	},
	subdesignationFontSize: {
		type: "number",
	},
	headSpace: {
		type: "number",
	},
	separatorSpace: {
		type: "number",
	},
	descSpace: {
		type: "number",
	},
	iconimgBg : {
		type : 'string',
		default : '#eee',
	},
	iconimgBorder : {
		type : 'string',
		default : '#eee',
	},
	iconimgBorderHover : {
		type : 'string',
		default : ''
	},
	iconimgBorderstyle :{
		type : 'string',
		default : 'solid'
	},
	iconimgBorderWidth: {
		type: "number",
		default : 1
	},
	iconimgBorderRadius: {
		type: "number",
		default : 0
	},	
	iconimgbgSize :{
		type: "number",
		default : 15
	},
	block_id :{
		type : 'string',
		default : 'not_set'
	},	
	authorSpace :{
		type: "number",
		default: 10,
	},
	imgLeftMargin :{
		type: "number",
		default: 5,
	},
	imgRightMargin :{
		type: "number",
		default: 5,
	},
	imgTopMargin :{
		type: "number",
		default: 5,
	},
	imgBottomMargin :{
		type: "number",
		default: 5,
	},
	iconImage: {
		type: "object",
		default:{
			'url': '',
			'alt': 'InfoBox placeholder img',
		}
	},
	imageSize:{
		type: 'string',
		default: 'thumbnail',
	},
	imageWidth :{
		type: "number",
		default: 60,
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
	blockPadding:{
		type: "number",
		default: 10,
	},
	blockMargin:{
		type: "number",
	},
	enableBorder: {
		type: 'boolean',
		default: false,
	},
	borderstyle :{
		type : 'string',
		default : 'solid'
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
