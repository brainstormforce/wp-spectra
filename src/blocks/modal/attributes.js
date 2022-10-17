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
		default: true,
	},
	icon: {
		type: 'string',
		default: 'up-right-from-square',
	},
	iconImage: {
		type: 'object',
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
	},
	buttonText: {
		type: 'html',
		default: 'Click Here',
	},
	buttonIcon: {
		type: 'string',
		default: '',
	},
	buttonIconPosition: {
		type: 'string',
		default: 'after',
	},
	buttonIconSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	buttonIconSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	buttonIconSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	buttonIconSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-type'
		}
	},
};

export default attributes;
