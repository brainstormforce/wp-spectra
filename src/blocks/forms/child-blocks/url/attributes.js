const { __ } = wp.i18n

const attributes = {
    block_id: {
		type: "string"
    },
    urlName: {
        type: "string",
        default: __( "URL" ),
	},
	required : {
        type: "boolean",
        default: false
    }
}
export default attributes
