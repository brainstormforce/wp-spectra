/**
 * BLOCK: UAGB Section Attributes
 */

const ITEM_COUNT = 3

const testimonial_block = []

for (var i = 1; i <= ITEM_COUNT; i++) {
	var desc_text = "Click here to change this Testimonial-"+ i+ " text. With Ultimate add-ons new Testimonial Carousel block, you can make sure your customer testimonial's are presented in the most aesthetic and well-designed way.Testimonials offer a great way for gaining customer trust and getting more conversions."
	var author_text    = "John Doe "
	var company_text    = "Designation"
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
		default: "#888888"		
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
	imageAlignment:{
		type: "string",
		default: "top"
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
		default : 5
	},	
	descSpace: {
		type: "number",
		default : 15
	},		
	block_id :{
		type : 'string',
		default : 'not_set'
	},	
	authorSpace :{
		type: "number",
		default: 5,
	},
	imgLeftPadding :{
		type: "number",
		default: 10,
	},
	imgRightPadding :{
		type: "number",
		default: 10,
	},
	imgTopPadding :{
		type: "number",
		default: 10,
	},
	imgBottomPadding :{
		type: "number",
		default: 10,
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
	columns :{
		type: "number",
		default: 1,
	},	
	tcolumns :{
		type: "number",
		default: 1,
	},	
	mcolumns :{
		type: "number",
		default: 1,
	},
	pauseOnHover: {
		type: "boolean",
		default: true,
	},	
	infiniteLoop: {
		type: "boolean",
		default: true,
	},
	transitionSpeed :{
		type: "number",
		default: 500,
	},
	autoplay: {
		type: "boolean",
		default: true,
	},
	autoplaySpeed :{
		type: "number",
		default: 2000,
	},
	arrowSize :{
		type: "number",
		default: 20,
	},
	arrowColor :{
		type: "string",
		default: "#aaaaaa",
	},		
}

export default attributes
