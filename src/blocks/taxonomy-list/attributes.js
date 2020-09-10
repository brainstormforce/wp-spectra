const { __ } = wp.i18n

const attributes = {
    block_id : {
        type : "string"
    },
    postType : {
        type : "string",
        default : "post",
    },
    taxonomyType : {
        type : "string",
        default : "category"
    },
    categories : {
        type : "string",        
    },
    order : {
        type : "string",
        default : "desc"
    },
    orderBy : {
        type : "string",
        default : "date"
    },
    postsToShow : {
        type : "number",
        default : "8"
    },    
    layout : {
        type : "string",
        default : "grid"
    },
    columns: {
        type: "number",
        default : 3
    },
    tcolumns :{
        type: "number",
        default: 2,
    },
    mcolumns :{
        type: "number",
        default: 1,
    },
    noTaxDisplaytext : {
        type : "string",
        default : __("Taxonomy Not Available."), 
    },
    boxShadowColor: {
		type: "string"
	},
	boxShadowHOffset : {
		type: "number",
		default: 0
	},
	boxShadowVOffset : {
		type: "number",
		default: 0
	},
	boxShadowBlur : {
		type: "number"
	},
	boxShadowSpread : {
		type: "number"
	},
	boxShadowPosition: {
		type: "string",
		default: "outset"
    },
    countName : {
        type: "string",
        default: "Article"
    },
    showCount : {
        type : "boolean",
        default : true
    },
    showEmptyTaxonomy : {
        type : "boolean",
        default : false
    },

    
    //Color Attributes
    bgColor : {
        type : "string",
        default : "#e4e4e4"
    },
    titleColor : {
        type : "string",
        default : "#3b3b3b"
    },
    countColor : {
        type : "string",
        default : "#777777"
    },
    listTextColor : {
        type : "string",
        default : "#3b3b3b"
    },
    hoverlistTextColor : {
        type : "string",
        default : "#3b3b3b"
    },
    listStyleColor : {
        type : "string",
        default : "#3b3b3b"
    },
    hoverlistStyleColor : {
        type : "string",
        default : "#3b3b3b"
    },
    
    
    
    
    //Spacing Attributes    
    rowGap : {
        type : "number",
        default : 20
    },
    columnGap : {
        type : "number",
        default : 20
    },
    contentPadding : {
        type : "number",
        default : 20
    },
    contentPaddingTablet : {
        type : "number",
        default : 15
    },
    contentPaddingMobile : {
        type : "number",
        default : 15
    },
    titleBottomSpace : {
        type : "number",
        default : 15
    },
    listBottomMargin : {
        type : "number",
        default : 10
    },
    
    
    //ALignment Attributes
    alignment : {
        type : "string",
        default : "center"
    },
       
    //List Attributes
    listStyle : {
        type : "string",
        default : "disc"
    },
    
    //Seperator Attributes
    seperatorStyle : {
        type: "string",
        default: "none"
    },
    seperatorWidth : {
        type: "number",
        default: 100
    },
    seperatorThickness : {
        type: "number",
        default: 1
    },
    seperatorColor : {
        type: "string",
        default: "#b2b4b5",
    },
    
    //Grid Border attributes
    borderColor : {
        type: "string",
        default: "#b2b4b5",
    },
    borderThickness : {
        type: "number",
        default: 1
    },
    borderStyle : {
        type: "string",
        default: "solid"
    },


    //Typograpghy attributes
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
	titleLineHeightType: {
		type: "string",
		default: "em"
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
	titleLoadGoogleFonts: {
		type: "boolean",
		default: false	
    },
    
    countFontSize: {
		type: "number",
	},
	countFontSizeType: {
		type: "string",
		default: "px"
	},
	countFontSizeMobile: {
		type: "number",
	},
	countFontSizeTablet: {
		type: "number",
	},
	countFontFamily: {
		type: "string",
		default: "Default",
	},
	countFontWeight: {
		type: "string",
	},
	countFontSubset: {
		type: "string",
	},
	countLineHeightType: {
		type: "string",
		default: "em"
	},
	countLineHeight: {
		type: "number",
	},
	countLineHeightTablet: {
		type: "number",
	},
	countLineHeightMobile: {
		type: "number",
	},
	countLoadGoogleFonts: {
		type: "boolean",
		default: false	
    },
    
    listFontSize: {
		type: "number",
	},
	listFontSizeType: {
		type: "string",
		default: "px"
	},
	listFontSizeMobile: {
		type: "number",
	},
	listFontSizeTablet: {
		type: "number",
	},
	listFontFamily: {
		type: "string",
		default: "Default",
	},
	listFontWeight: {
		type: "string",
	},
	listFontSubset: {
		type: "string",
	},
	listLineHeightType: {
		type: "string",
		default: "em"
	},
	listLineHeight: {
		type: "number",
	},
	listLineHeightTablet: {
		type: "number",
	},
	listLineHeightMobile: {
		type: "number",
	},
	listLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
}

export default attributes