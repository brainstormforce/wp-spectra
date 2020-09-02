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
    
}

export default attributes