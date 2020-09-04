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
        default : "Taxonomy Not Available." 
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
    titleAlignment : {
        type : "string",
        default : "center"
    },
    countAlignment : {
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
    
}

export default attributes