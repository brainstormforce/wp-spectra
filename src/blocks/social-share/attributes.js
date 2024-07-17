/**
 * BLOCK: UAGB Social Share Attributes
 */

const itemCount = 3;

const socials = [];

for ( let i = 1; i <= itemCount; i++ ) {
	socials.push( {
		type: 'facebook',
		image_icon: 'icon',
		icon: 'facebook',
		image: '',
		icon_color: '#3a3a3a',
		icon_hover_color: '',
		icon_bg_color: '',
		icon_bg_hover_color: '',
	} );
}

const attributes = {
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	childMigrate: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	current_url: {
		type: 'string',
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	alignTablet: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	alignMobile: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	social_count: {
		type: 'number',
		default: itemCount,
	},
	socials: {
		type: 'array',
		default: socials,
	},
	gap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'icon-gap',
		},
	},
	gapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-gap-tablet',
		},
	},
	gapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-gap-mobile',
		},
	},
	size: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	sizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
	},
	sizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile',
		},
	},
	sizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet',
		},
	},
	bgSize: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'icon-bg-size',
		},
	},
	bgSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-bg-size-unit',
		},
	},
	bgSizeMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'icon-bg-size-mobile',
		},
	},
	bgSizeTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'icon-bg-size-tablet',
		},
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-radius',
		},
		default: 0,
	},
	borderRadiusTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-radius-tablet',
		},
	},
	borderRadiusMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-radius-mobile',
		},
	},
	social_layout: {
		type: 'string',
		default: 'horizontal',
		UAGCopyPaste: {
			styleType: 'social-layout',
		},
	},
	stack: {
		type: 'string',
		default: 'none',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	iconColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	iconHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
		default: '',
	},
	iconBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-color',
		},
		default: '',
	},
	iconBgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color',
		},
		default: '',
	},
};

export default attributes;
