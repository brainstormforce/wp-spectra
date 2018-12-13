/**
 * BLOCK: UAGB Timeline Attributes
 */
const item = []
const date_arr = []

for (var i = 1; i <= 5; i++) {
	var title_heading_val = "Timeline Heading "+i
	var title_desc_val    = "This is Timeline description, you can change me anytime click here "
	var temp = []
	var p = { "time_heading" : title_heading_val,"time_desc":title_desc_val }
	item.push(p)     
	var j = i - 1
	var today = new Date()
	var dd = today.getDate()
	var mm = today.getMonth()+1 //January is 0!
	var yyyy = today.getFullYear()-j

	if(dd<10) {
		dd = "0"+dd
	} 

	if(mm<10) {
		mm = "0"+mm
	} 

	today = mm + "/" + dd + "/" + yyyy   
	var p = { "title" : today }    
	date_arr.push(p)
}

const attributes = {
	tm_content: {
		type: "array",
		default : item,
	},
	headingTitle: {
		type: "string",
	},
	headingDesc: {
		type: "string",
	},
	align : {
		type : "string",
		default : "center",
	},          
	headingColor : {
		type : "string",
	},
	subHeadingColor : {
		type : "string",
	},
	separatorBg : {
		type : "string",
		default : "#eee",
	},
	backgroundColor : {
		type : "string",
		default : "#eee",
	},
	separatorColor : {
		type : "string",
		default : "#eee",
	},
	separatorFillColor : {
		type : "string",
		default : "#61ce70",
	},
	separatorBorder : {
		type : "string",
		default : "#eee",
	},
	borderFocus : {
		type : "string",
		default : "#5cb85c",
	},
	headingTag : {
		type : "string",
		default : "h4",
	},
	horizontalSpace : {
		type : "number",
		default : 10,
	},
	verticalSpace : {
		type : "number",
		default : 15,
	},
	headFontSize : {
		type : "number",
	},          
	timelinAlignment : {
		type : "string",
		default : "center",
	},
	arrowlinAlignment : {
		type : "string",
		default : "center",
	},
	subHeadFontSize : {
		type : "number",
	},
	headSpace : {
		type : "number",
		default : 5,
	},
	separatorwidth : {
		type : "number",
		default : 3,
	},
	borderwidth : {
		type : "number",
		default : 0,
	},
	iconColor : {
		type : "string",
		default : "#333",
	},
	iconFocus : {
		type : "string",
		default : "#fff",
	},
	iconBgFocus : {
		type : "string",
		default : "#61ce70",
	},   
	authorFontsize : {
		type : "number",
		default : 12,
	},
	dateColor : {
		type : "string",
		default : "#333",
	},
	dateFontsize : {
		type : "number",
		default : 12,
	},
	connectorBgsize : {
		type : "number",
		default : 35,
	},
	subHeadSpace : {
		type : "number",
		default : 5,
	},  
	dateBottomspace : {
		type : "number",
		default : 5,
	},     
	block_id  : {
		type : "string",
		default : "0",
	},
	timelineItem :{
		type : "number",
		default : 5,
	},
	tm_client_id  : {
		type : "string",
		default : "not_set",
	},      
	borderRadius : {
		type : "number",
		default : 2,
	},
	bgPadding : {
		type : "number",
		default : 20,
	},
	iconSize : {
		type : "number",
		default : 12,
	}, 
	icon : {
		type : "string",
		default : "fab fa fa-calendar-alt"
	},
	t_date : {
		type: "array",
		default: date_arr,
	},
	displayPostDate:{
		type: "boolean",
		default: true,            
	}, 
	stack: {
		type: "string",
		default: "tablet"
	}
}

export default attributes
