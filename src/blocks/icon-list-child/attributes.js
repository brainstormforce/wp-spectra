/**
 * BLOCK: Icon List Child - Attributes
 */

const attributes = {
	block_id: {
		type: 'string',
	},
	label: {
		type: 'html',
		selector: '.uagb-icon-list__label',
		default: '#Label',
	},
	image_icon: {
		type: 'string',
		default: 'icon',
	},
	hideLabel: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
		default: 'fab fa-arrow-circle-right',
	},
	image: {
		type: 'object',
	},
	icon_color: {
		type: 'string',
		default: '#3a3a3a',
		isUAGStyle: true,
	},
	label_color: {
		type: 'string',
		isUAGStyle: true,
	},
	icon_hover_color: {
		type: 'string',
		isUAGStyle: true,
	},
	label_hover_color: {
		type: 'string',
		isUAGStyle: true,
	},
	icon_bg_color: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	icon_bg_hover_color: {
		type: 'string',
		isUAGStyle: true,
	},
	icon_border_color: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	icon_border_hover_color: {
		type: 'string',
		isUAGStyle: true,
	},
	link: {
		type: 'string',
		default: '#',
	},
	target: {
		type: 'boolean',
		default: false,
	},
	disableLink: {
		type: 'boolean',
		default: true,
	},
};

export default attributes;
