/**
 * BLOCK: Icon List - Attributes
 */

const itemCount = 3;

const icons = [];

for ( let i = 1; i <= itemCount; i++ ) {
	icons.push( {
		label: '#Label',
		image_icon: 'icon',
		icon: 'fab fa-arrow-circle-right',
		image: '',
		icon_color: '',
		label_color: '',
		icon_hover_color: '',
		label_hover_color: '',
		icon_bg_color: '',
		icon_bg_hover_color: '',
		icon_border_color: '',
		icon_border_hover_color: '',
		link: '#',
		target: false,
		disableLink: true,
		hideLabel: false,
	} );
}

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	childMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		},
	},
	icon_count: {
		type: 'number',
		default: itemCount,
	},
	icons: {
		type: 'array',
		default: icons,
	},
	gap: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-gap'
		},
		default: 10,
	},
	gapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-gap'
		},
	},
	gapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-gap'
		},
	},
	inner_gap: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'icon-inner-gap'
		},
	},
	innerGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-inner-gap'
		},
	},
	innerGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-inner-gap'
		},
	},
	iconPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-position'
		},
		default: 'middle',
	},
	size: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
		default: 16,
	},
	sizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		},
		default: 'px',
	},
	sizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile'
		},
	},
	sizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet'
		},
	},
	bgSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bg-size'
		},
		default: 0,
	},
	border: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-border-style'
		},
	},
	borderTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-style'
		},
	},
	borderMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-style'
		},
	},
	borderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-border-radius'
		},
	},
	borderRadiusTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-radius'
		},
	},
	borderRadiusMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-border-radius'
		},
	},
	hideLabel: {
		type: 'boolean',
		default: false,
	},
	fontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	fontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
	},
	fontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	fontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	fontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	fontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'normal',
	},
	fontTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	fontDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	lineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
		default: 'em',
	},
	lineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	lineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {

			styleType: 'main-title-line-height-tablet'
		},
	},
	lineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	loadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
		default: false,
	},
	icon_layout: {
		type: 'string',
		default: 'vertical',
	},
	stack: {
		type: 'string',
		default: 'none',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
