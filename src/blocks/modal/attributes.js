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
		default: 'arrow-right',
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
	modalAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		}
	},
	modalAlignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet'
		}
	},
	modalAlignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile'
		}
	},
	modalWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-width'
		},
		default: 700
	},
	modalWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-width'
		},
	},
	modalWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-width'
		},
	},
	modalWidthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'modal-width-type'
		}
	},
	modalHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-height'
		},
		default: 350
	},
	modalHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-height'
		},
	},
	modalHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-height'
		},
	},
	modalHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'modal-height-type'
		}
	},
};

export default attributes;
