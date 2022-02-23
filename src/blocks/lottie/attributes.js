const attributes = {  // eslint-disable-line no-unused-vars
	block_id         : {
		type : 'string',
	},
	align            : {
		type    : 'string',
		default : 'center',
		isUAGStyle: true,
	},
	lottieURl        : {
		type    : 'string',
		default : '',
	},
	jsonLottie       : {
		type : 'object',
	},
	// Controls.
	loop             : {
		type    : 'boolean',
		default : true,
	},
	speed            : {
		type    : 'number',
		default : 1,
	},
	reverse          : {
		type    : 'boolean',
		default : false,
	},
	playOnHover      : {
		type    : 'boolean',
		default : false,
	},
	playOn           : {
		type    : 'string',
		default : 'none',
	},
	// Style.
	height           : {
		type : 'number',
		isUAGStyle: true,
	},
	heightTablet     : {
		type : 'number',
		isUAGStyle: true,
	},
	heightMob        : {
		type : 'number',
		isUAGStyle: true,
	},
	width            : {
		type : 'number',
		isUAGStyle: true,
	},
	widthTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	widthMob         : {
		type : 'number',
		isUAGStyle: true,
	},
	backgroundColor  : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	backgroundHColor : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
}
export default attributes;
