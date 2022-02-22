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
		isUAGStyle: true,
	},
	icon_hover_color: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	icon_bg_color: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	icon_bg_hover_color: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
};

export default attributes;
