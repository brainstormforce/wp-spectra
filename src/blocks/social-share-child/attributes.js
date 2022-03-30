/**
 * BLOCK: Social Share Child - Attributes
 */

const attributes = {
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
		default: 'fab fa-facebook',
	},
	image: {
		type: 'object',
		default: null
	},
	icon_color: {
		type: 'string',
		default: '#3a3a3a',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	icon_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color'
		},
		default: '',
	},
	icon_bg_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-color'
		},
		default: '',
	},
	icon_bg_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color'
		},
		default: '',
	},
};

export default attributes;
