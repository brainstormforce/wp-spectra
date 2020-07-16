/**
 * BLOCK: UAGB Rating Block Attributes
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
 	schema: {
 		type: "string",
 		default: ""
 	},
	block_id: {
		type: "string",
	},
	ctaLink: {
		type: "string",
		default: "#",
	},
	ctaTarget: {
		type: "boolean",
		default: false,
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
	pricevalue: {
		type: "string",
		default: "US$65"
	},
	pricetext: {
		type: "string",
		default: "Price"
	},
	availabilityvalue: {
		type: "string",
		default: "Instock"
	},
	availabilitytext: {
		type: "string",
		default: "Availability"
	},
	contentVrPadding: {
		type: "number",
		default : 15
	},
	contentHrPadding: {
		type: "number",
		default : 50
	},
	star_gap: {
		type: "number",
		default: 100
	},
	contentColor: {
		type: "string",
		default: ""
	},
	author: {
		type: "string",
		default: "",
	},
	brand: {
		type: "string",
		default: "",
	},
	sku: {
		type: "string",
		default: "",
	},
	identifier: {
		type: "string",
		default: "",
	},
	identifierType: {
		type: "string",
		default: "gtin", // nsn, mpn, gtin8, gtin12, gtin13, gtin14, gtin
	},
	offerType: {
		type: "string",
		default: "Offer", //can also be set to aggregate offer (which prevevnts calltoactionurl from being  used as offer url)
	},
	offerStatus: {
		type: "string",
		default: "InStock", //available values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, PreSale, SoldOut
	},
	//begin aggregate offer-only attributes
	offerHighPrice: {
		type: "string",
		default: 0,
	},
	offerLowPrice: {
		type: "string",
		default: 0,
	},
	offerCount: {
		type: "string",
		default: 0,
	},
	//end  aggregate offer-only attributes
	offerPrice: {
		//only for offer
		type: "string",
		default: 0,
	},
	offerCurrency: {
		type: "string",
		default: "USD",
	},
	offerExpiry: {
		type: "string",
		//default: 60 * (10080 + Math.ceil(Date.now() / 60000)),
		default: 0,
	},
	titleFontFamily: {
		type: "string",
		default: "Default",
	},
	titleFontWeight: {
		type: "string",
	},
	titleFontSubset: {
		type: "string",
	},
	titleFontSizeType: {
		type: "string",
		default: "px"
	},
	titleLineHeightType: {
		type: "string",
		default: "em"
	},
	titleFontSize: {
		type: "number",
	},
	titleFontSizeTablet: {
		type: "number",
	},
	titleFontSizeMobile: {
		type: "number",
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightTablet: {
		type: "number",
	},
	titleLineHeightMobile: {
		type: "number",
	},
	descFontFamily: {
		type: "string",
		default: "Default",
	},
	descFontWeight: {
		type: "string",
	},
	descFontSubset: {
		type: "string",
	},
	descFontSize: {
		type: "number",
	},
	descFontSizeType: {
		type: "string",
		default: "px"
	},
	descFontSizeTablet: {
		type: "number",
	},
	descFontSizeMobile: {
		type: "number",
	},
	descLineHeight: {
		type: "number",
	},
	descLineHeightType: {
		type: "string",
		default: "em"
	},
	descLineHeightTablet: {
		type: "number",
	},
	descLineHeightMobile: {
		type: "number",
	},
	titleLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	descLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	contentLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	contentFontWeight: {
		type: "string",
	},
	contentFontSubset: {
		type: "string",
	},
	contentFontSize: {
		type: "number",
	},
	contentFontSizeType: {
		type: "string",
		default: "px"
	},
	contentFontSizeTablet: {
		type: "number",
	},
	contentFontSizeMobile: {
		type: "number",
	},
	contentLineHeight: {
		type: "number",
	},
	contentLineHeightType: {
		type: "string",
		default: "em"
	},
	contentLineHeightTablet: {
		type: "number",
	},
	contentLineHeightMobile: {
		type: "number",
	},
}

export default attributes