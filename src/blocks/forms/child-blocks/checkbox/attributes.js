
const { __ } = wp.i18n

const attributes = {
    block_id: {
		type: "string"
    },
    checkboxName:{
        type: "string",
        default: __( "Select Title" )
    },
	checkboxRequired : {
        type: "boolean",
        default: false
    },
    options: {
        type: "array",
        default: [ { "optiontitle": __( "Option Name 1" ),"optionvalue": __( "Option Value 1" ) } ],
        
    },
    
}
export default attributes