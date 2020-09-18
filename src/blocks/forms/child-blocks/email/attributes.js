
const { __ } = wp.i18n

const attributes = {
	block_id: {
		type: "string"
	},
	name: {
        type: "string",
        default: "Email"
	},
	required : {
        type: "boolean",
        default: false
	},
	placeholder: {
        type: "string",
        default: __( "example@mail.com" )
    },
}
export default attributes
