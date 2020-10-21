/**
* BLOCK: UAGB Lottie Block Attributes
*/

const attributes = {
  block_id :{
    type : "string"
  },
  //Controls
  loop: {
		type: "boolean",
		default: false,
  }, 
  count: {
    type: "number",
  },  
  speed: {
    type: "number",
  },
  reverse: {
		type: "boolean",
		default: false,
  },
  playOnHover: {
		type: "boolean",
		default: false,
	},
  //style
  height: {
    type: "number",
  },
  width: {
    type: "number",
  },
  backgroundColor:{
    type : "string",
    default : "#fff"
  },

  jsonLottie:{
    type : "object",
  },
  lottieURl:{
    type : "string",
    default:''
  }
}
export default attributes