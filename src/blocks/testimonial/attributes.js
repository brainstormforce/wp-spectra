/**
 * BLOCK: UAGB Section Attributes
 */

const ITEM_COUNT = 2

const testimonial_block = []

for (var i = 1; i <= ITEM_COUNT; i++) {
	var desc_text = "Take a look at these gorgeous testimonial slider examples, and see just how flexible this widget is. Testinomial test-" + i
	var author_text    = "John Doe "
	var company_text    = "John Doe "
	testimonial_block.push(
		{
			"description": desc_text,
			"name": author_text,
			"company": company_text,
			"image": "",
		}
	)
}

const attributes = {
	test_item_count: {
		type: "number",
		default: ITEM_COUNT
	},
	test_block: {
		type: "array",
		default : testimonial_block,
	},
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
		default: "bottom"
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
