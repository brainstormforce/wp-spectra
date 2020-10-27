/**
 * BLOCK: UAGB Lottie Block Attributes
 */

const attributes = {
  block_id : {
    type : "string"
  },
  jsonLottie : {
    type : "object",
  },
  lottieURl : {
    type : "string",
    default : '',
  },

  //Controls
  loop : {
		type : "boolean",
		default : true,
  },   
  speed : {
    type : "number",
    default : 1,
  },
  reverse : {
		type : "boolean",
		default : false,
  },
  playOnHover : {
		type : "boolean",
		default : false,
  },
  
  //style
  height : {
    type : "number",
  },
  width : {
    type : "number",
  },
  backgroundColor : {
    type : "string",
    default : "#fff",
  },


}
export default attributes