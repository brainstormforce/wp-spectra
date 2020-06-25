/**
 * BLOCK: UAGB Inline Notice Block Attributes
 */
  const { __ } = wp.i18n

 const features = []

 features.push(
 	{
 		"feature_name": __( "- Feature Name." ),
 	}
 )


 const attributes = {
 	ID: {
 		type: "string",
 		default: "",
 	},
	block_id: {
		type: "string",
	},
	rTitle: {
		type: "string",
		default: "Ultimate Addons for Gutenberg",
	},
	rContent: {
		type: "string",
		default: "The Ultimate Gutenberg Blocks Library. Supercharge the Gutenberg editor with beautiful and powerful blocks to design stunning websites in minutes!",
	},
	mainimage: {
		type: "object",
		default:{
			"url": "",
		}
	},
	imgSize:{
		type: "string",
		default: "thumbnail",
	},
	featuresTitle : {
		type: "string",
		default : __( "List Of Features:" ),
	},
	featuresAvgText : {
		type: "string",
		default : __( "Average Ratings" ),
	},
	feature_count: {
		type: "number",
		default: 1
	},
	features: {
		type: "array",
		default : features,
	},
	showFeature: {
		type: "boolean",
		default: true
	},
	headingTag: {
		type: "string",
		default: "h2"
	},
	starCount: {
		type: "number",
		default: 5,
	},
	starSize: {
		type: "number",
		default: 20,
	},
	starColor: {
		type: "string",
		default: "#ffff00",
	},
	selectedStars: {
		type: "number",
		default: 0,
	},
	starAlign: {
		type: "string",
		default: "left",
	},
	inactiveStarColor: {
		type: "string",
		default: "#888888",
	},
	activeStarColor: {
		type: "string",
		default: "#eeee00",
	},
	starOutlineColor: {
		type: "string",
		default: "#000000",
	},
	descColor: {
		type: "string",
		default: ""
	},
	titleColor: {
		type: "string",
		default: ""
	},
}

export default attributes