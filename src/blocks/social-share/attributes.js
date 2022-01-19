/**
 * BLOCK: UAGB Social Share Attributes
 */

const itemCount = 3;

const socials = [];

for ( let i = 1; i <= itemCount; i++ ) {
	socials.push( {
		type: 'facebook',
		image_icon: 'icon',
		icon: 'fab fa-facebook',
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
		isUAGStyle: true,
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
		default: 15,
		isUAGStyle: true,
	},
	size: {
		type: 'number',
		default: 25,
		isUAGStyle: true,
	},
	sizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
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
		default: 0,
		isUAGStyle: true,
	},
	bgSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	bgSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	bgSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	borderRadius: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	social_layout: {
		type: 'string',
		default: 'horizontal',
	},
	stack: {
		type: 'string',
		default: 'none',
	},
};

export default attributes;
