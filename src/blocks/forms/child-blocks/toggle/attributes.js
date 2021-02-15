const attributes = {
    block_id: {
		type: "string"
	},
	toggleRequired : {
        type: "boolean",
        default: false
    },
    name: {
        type: "string",
        default: __("Name" , 'ultimate-addons-for-gutenberg')
    },
    toggleStatus : {
        type: "boolean",
        default: false
    },
    layout: {
        type: "string",
        default: ""
    },
    activeColor : {
        type: "string",
        default: "#2196F3"
    },
    trueValue : {
        type: "string",
        default: "on"
    },
    falseValue : {
        type: "string",
        default: "off"
    }
    			
}
export default attributes
