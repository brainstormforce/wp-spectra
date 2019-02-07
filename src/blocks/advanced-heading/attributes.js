const attributes = {
	block_id: {
		type: "string"
	},
	headingTitle: {
		source: "html",
		selector: "h1,h2,h3,h4,h5,h6",
	},
	headingDesc: {
		source: "html",
		selector: "p",
		default: "",
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
	separatorColor: {
		type: "string",
	},
	headingTag: {
		type: "string",
		default: "h2"
	},
	seperatorStyle: {
		type: "string",
		default: "solid",
	},
	separatorHeight: {
		type: "number"
	},
	separatorWidth: {
		type: "number"
	},
	headSpace: {
		type: "number",
		default: 15
	},
	headFontSize: {
		type: "number",
	},
	headFontSizeType: {
		type: "string",
		default: "px"
	},
	separatorWidthType : {
		type: "string",
		default: "%"
	},
	headFontSizeTablet: {
		type: "number",
	},
	headFontSizeMobile: {
		type: "number",
	},
	subHeadFontSize: {
		type: "number",
	},
	subHeadFontSizeType: {
		type: "string",
		default: "px"
	},
	subHeadFontSizeTablet: {
		type: "number",
	},
	subHeadFontSizeMobile: {
		type: "number",
	},
	separatorSpace: {
		type: "number",
		default: 15
	},
}

export default attributes
