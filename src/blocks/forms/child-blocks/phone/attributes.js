const attributes = {
    block_id: {
		type: "string"
    },
    phoneName: {
        type: "string",
        default: __("Phone" , 'ultimate-addons-for-gutenberg' )
    },
	phoneRequired : {
        type: "boolean",
        default: false
    },
    pattern: {
        type: "string",
        default: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    }
}
export default attributes
