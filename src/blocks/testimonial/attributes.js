/**
 * BLOCK: UAGB Section Attributes
 */

const attributes = {
	prefixTitle: {
		selector: 'span.uagb-testinomial-author-name',
		default: "John Doe",
	},
    headingTitle: {
		selector: 'span.uagb-testinomial-designation',
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
	descColor: {
		type: "string",
		default: "#333"
	},
	designationColor: {
		type: "string",
		default: "#333"		
	},	
	authorColor: {
		type: "string",
		default: "#333"		
	},		
	iconimgStyle: {
		type: "string",
		default: "circle"
	},	
	imagePosition:{
		type: "string",
		default: "aside"
	},	
	authorFontSize: {
		type: "number",
	},	
	designationFontSize: {
		type: "number",
	},
	descFontSize: {
		type: "number",
	},
	nameSpace: {
		type: "number",
		default : '10'
	},	
	descSpace: {
		type: "number",
	},		
	block_id :{
		type : 'string',
		default : 'not_set'
	},	
	authorSpace :{
		type: "number",
		default: 10,
	},
	imgLeftPadding :{
		type: "number",
		default: 5,
	},
	imgRightPadding :{
		type: "number",
		default: 10,
	},
	imgTopPadding :{
		type: "number",
		default: 5,
	},
	imgBottomPadding :{
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
}

export default attributes
