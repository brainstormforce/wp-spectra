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
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	label_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	icon_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color'
		},
	},
	label_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-hover-color'
		},
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
	},
	icon_border_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-border-color'
		},
		default: '',
	},
	icon_border_hover_color: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-border-hover-color'
		},
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
