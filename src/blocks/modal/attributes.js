const attributes = {
	block_id: {
		type: 'string',
	},
	modalTrigger: {
		type: 'string',
		default: 'text'
	},
	triggerText: {
		type: 'string',
		default: 'Click here'
	},
	previewModal: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
		default: 'up-right-from-square',
	},
	iconImage: {
		type: 'object',
	}
};

export default attributes;
