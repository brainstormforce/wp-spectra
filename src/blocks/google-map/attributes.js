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
		UAGCopyPaste: {
			styleType: 'map-height'
		},
	},
	zoom: {
		type: 'number',
		default: 12,
	},
	language: {
		type: 'string',
		default: 'en',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
