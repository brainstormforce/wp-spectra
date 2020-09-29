
const { __ } = wp.i18n

const attributes = {
    block_id: {
		type: "string"
	},
	acceptRequired : {
        type: "boolean",
        default: false
    },   
    acceptText: {
        type: "string",
        default: __( "I have read and agree to the Privacy Policy." )
    },
    showLink : {
        type: "boolean",
        default: false
    },
    linkLabel: {
        type: "string",
        default: __( "Privacy Policy" )
    },
    link: {
        type: "string",
        default: __( "#" )
    },
    linkInNewTab : {
        type: "boolean",
        default: true
    },		
			
    
}
export default attributes
