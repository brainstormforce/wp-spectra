const attributes = {
	block_id: {
		type: 'string',
	},
	address: {
		type: 'string',
		default: 'Brainstorm Force',
	},
	height: {
		type: 'number',
		default: 300,
		isUAGStyle: true,
	},
	zoom: {
		type: 'number',
		default: 12,
	},
	language: {
		type: 'string',
		default: 'en',
	},
};

export default attributes;
