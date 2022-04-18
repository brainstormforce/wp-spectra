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
	mheight: {
		type: 'number',
		default: 300,
		UAGCopyPaste: {
			styleType: 'map-height-mobile'
		},
	},
	theight: {
		type: 'number',
		default: 300,
		UAGCopyPaste: {
			styleType: 'map-height-tablet'
		},
	},
	zoom: {
		type: 'number',
		default: 12,
	},
	tzoom: {
		type: 'number',
		default: 12,
	},
	mzoom: {
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
