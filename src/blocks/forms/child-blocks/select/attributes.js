const attributes = {
    block_id: {
		type: "string"
	},
	selectRequired : {
        type: "boolean",
        default: false
    },
    options: {
        "type": "array",
        "default": [
            
                "Option 1", "Option 2"
           
        ]
    },
}
export default attributes
