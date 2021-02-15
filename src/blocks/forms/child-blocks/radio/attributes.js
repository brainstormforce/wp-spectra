
const { __ } = wp.i18n

const attributes = {
    block_id: {
		type: "string"
    },
    radioName:{
        type: "string",
        default: __( "RadioBox Title" , 'ultimate-addons-for-gutenberg' )
    },
	radioRequired : {
        type: "boolean",
        default: false
    },
    options: {
        type: "array",
        default: [ { "optiontitle": __( "Option Name 1" ),"optionvalue": __( "Option Value 1" ) }],
        
    },
    
}
export default attributes