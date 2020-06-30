const { __ } = wp.i18n

const attributes = {
	block_id: {
		type: "string"
	},
	submitButtonText : {
		type: "string",
		default: __( "Submit" )
	},
	formLabel : {
		type: "string",
		default: __( "UAG Form" )
	},
	buttonAlign : {
		type: "string",
		default:'left'
	},
}
export default attributes
