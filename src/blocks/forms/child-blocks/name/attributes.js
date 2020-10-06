
const { __ } = wp.i18n

const attributes = {
    block_id: {
		type: "string"
	},
	nameRequired : {
        type: "boolean",
        default: false
    },
    name: {
        type: "string",
        default:__( "Name" )
    },
    placeholder: {
        type: "string",
        default: __( "John Doe" )
    },
}
export default attributes
