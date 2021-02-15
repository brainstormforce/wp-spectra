const { __ } = wp.i18n

const attributes = {
    block_id: {
		type: "string"
    },
    selectName:{
        type: "string",
        default: __( "Select Title" , 'ultimate-addons-for-gutenberg' )
    },
	selectRequired : {
        type: "boolean",
        default: false
    },
    options: {
        type: "array",
        default: [ { "optiontitle": __( "Option Name 1" ),"optionvalue": __( "Option Value 1" ) } ],
        
    },
    
}
export default attributes
