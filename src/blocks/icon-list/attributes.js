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
		isUAGStyle: true,
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
		isUAGStyle: true,
		default: 10,
	},
	inner_gap: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	iconPosition: {
		type: 'string',
		isUAGStyle: true,
		default: 'middle',
	},
	size: {
		type: 'number',
		isUAGStyle: true,
		default: 16,
	},
	sizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	sizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	sizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	bgSize: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	border: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	borderRadius: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	hideLabel: {
		type: 'boolean',
		default: false,
	},
	fontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	fontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	fontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	fontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	fontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	fontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	fontTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	fontDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	lineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	lineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	lineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	lineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	loadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	icon_layout: {
		type: 'string',
		isUAGStyle: true,
		default: 'vertical',
	},
	stack: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
