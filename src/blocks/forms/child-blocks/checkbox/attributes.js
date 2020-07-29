const { __ } = wp.i18n

const attributes = {
    block_id: {
		type: "string"
    },
    checkboxName:{
        type: "string",
        default: __( "Checkbox Title" )
    },
	checkboxRequired : {
        type: "boolean",
        default: false
    },
    options: {
        "type": "array",
        "default": ["Option Name"],
    },
}
export default attributes
