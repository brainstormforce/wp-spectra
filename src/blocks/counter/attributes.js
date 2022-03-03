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
};

export default attributes;
