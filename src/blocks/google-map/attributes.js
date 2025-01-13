const attributes = {
	block_id: {
		type: 'string',
	},
	disableLazyLoad: {
		type: 'boolean',
		default: 'enabled' === uagb_blocks_info.img_lazy_load,
	},
	address: {
		type: 'string',
		default: 'Brainstorm Force',
	},
	height: {
		type: 'number',
		default: 300,
		UAGCopyPaste: {
			styleType: 'map-height',
		},
	},
	heightTablet: {
		type: 'number',
		default: 300,
		UAGCopyPaste: {
			styleType: 'map-height',
		},
	},
	heightMobile: {
		type: 'number',
		default: 300,
		UAGCopyPaste: {
			styleType: 'map-height',
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
	enableSatelliteView: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
