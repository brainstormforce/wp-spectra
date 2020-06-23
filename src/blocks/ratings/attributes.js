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
}

export default attributes