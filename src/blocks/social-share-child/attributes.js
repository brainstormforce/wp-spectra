/**
 * BLOCK: Social Share Child - Attributes
 */

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	type: {
		type: 'string',
		default: 'facebook',
	},
	image_icon: {
		type: 'string',
		default: 'icon',
	},
	current_url: {
		type: 'string',
	},
	icon: {
		type: 'string',
		default: 'facebook',
	},
	image: {
		type: 'object',
		default: null,
	},
	icon_color: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	icon_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
		default: '',
	},
	icon_bg_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-color',
		},
		default: '',
	},
	icon_bg_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color',
		},
		default: '',
	},
	parentSize: {
		type: 'number',
		default: 30,
	},
	parentSizeMobile: {
		type: 'number',
		default: '',
	},
	parentSizeTablet: {
		type: 'number',
		default: '',
	},
	imgTagHeight: {
		type: 'number',
		default: 0,
	},
	imgTagWidth: {
		type: 'number',
		default: 0,
	},
};

export default attributes;
