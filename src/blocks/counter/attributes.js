const attributes = {
	block_id: {
		type: 'string',
	},
	startNumber: {
		type: 'number',
		default: 0,
	},
	endNumber: {
		type: 'number',
		default: 100,
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
		type: 'number',
		default: 2000,
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
	layout: {
		type: 'string',
		default: 'default',
	},
};

export default attributes;
