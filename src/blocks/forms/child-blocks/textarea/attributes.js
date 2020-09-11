
const { __ } = wp.i18n

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
    },
    placeholder: {
        type: "string",
        default: __( "Enter your message....." )
    },
}
export default attributes
