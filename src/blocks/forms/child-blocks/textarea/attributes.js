const attributes = {
    block_id: {
		type: "string"
    },
    textareaName: {
        type: "string",
        default: "Message"
    },
	textareaRequired : {
        type: "boolean",
        default: false
    },
    rows : {
        type: "number",
        default: 4
    }
}
export default attributes
