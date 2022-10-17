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
	}
};

export default attributes;
