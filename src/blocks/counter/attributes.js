const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'number',
	},
	startNumber: {
		type: 'string',
		default: 0,
	},
	endNumber: {
		type: 'string',
		default: 100,
	},
	totalNumber: {
		type: 'string',
		default: 0,
	},
	numberPrefix: {
		type: 'string',
		default: '',
	},
	numberSuffix: {
		type: 'string',
		default: '',
	},
	animationDuration: {
		type: 'float',
		default: 0.1,
	},
	thousandSeparator: {
		type: 'string',
		default: '',
	},
	heading: {
		type: 'string',
		default: '',
	},
	headingTag: {
		type: 'string',
		default: '',
	},
};

export default attributes;
