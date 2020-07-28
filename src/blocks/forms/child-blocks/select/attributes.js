const attributes = {
    block_id: {
		type: "string"
    },
    selectName:{
        type: "string",
    },
	selectRequired : {
        type: "boolean",
        default: false
    },
    options: {
        "type": "array",
        "default": ["Option Name"],
    },
}
export default attributes
