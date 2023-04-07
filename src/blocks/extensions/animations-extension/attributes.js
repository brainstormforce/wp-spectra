const attributes = {
	UAGAnimationType: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'block-animation-type',
		},
	},
	UAGAnimationTime: {
		type: 'number',
		default: 400,
		UAGCopyPaste: {
			styleType: 'block-animation-time',
		},
	},
	UAGAnimationDelay: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'block-animation-delay',
		},
	},
	UAGAnimationEasing: {
		type: 'string',
		default: 'ease',
		UAGCopyPaste: {
			styleType: 'block-animation-easing',
		},
	},
	UAGAnimationRepeat: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'block-animation-repeat',
		},
	},
};

export default attributes;
