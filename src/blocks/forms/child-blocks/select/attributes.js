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
        "default": [ "option1"],
    },
}
export default attributes
