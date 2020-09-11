const { __ } = wp.i18n

const attributes = {
  block_id: {
    type: "string"
  },
  name: {
    type: "string",
    default: __( "URL" ),
  },
  required : {
    type: "boolean",
    default: false
  },
  placeholder: {
    type: "string",
    default: __( "https://example.com" )
  },
}
export default attributes
