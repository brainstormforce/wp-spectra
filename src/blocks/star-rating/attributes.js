const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'inline',
	},
	rating: {
		type: 'number',
		default: 4,
	},
	range: {
		type: 'string',
		default: '5',
	},
	size: {
		type: 'number',
		isUAGStyle: true,
		default: 18,
	},
	gap: {
		type: 'number',
		default: 2,
		isUAGStyle: true,
	},
	align: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
	unmarkedColor: {
		type: 'string',
		default: '#ccd6df',
		isUAGStyle: true,
	},
	color: {
		type: 'string',
		default: '#f0ad4e',
		isUAGStyle: true,
	},
	title: {
		type: 'string',
	},
	titleGap: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	titleColor: {
		type: 'string',
		isUAGStyle: true,
	},
	fontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	fontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	fontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	fontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	fontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	fontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	fontTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	fontDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	lineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	lineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	lineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	lineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	loadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
};

export default attributes;
