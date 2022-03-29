/**
 * BLOCK: Buttons Child - Attributes
 */

const attributes = {
	inheritFromTheme: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	align: {
		type: 'string',
		default: 'center',
		isUAGStyle: true,
	},
	gap: {
		type: 'number',
		default: 10,
	},
	stack: {
		type: 'string',
		default: 'none',
	},
	loadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	fontFamily: {
		type: 'string',
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	label: {
		type: 'html',
		default: '#Click Here',
	},
	link: {
		type: 'string',
		default: '',
	},
	target: {
		type: 'string',
		default: '_self',
	},
	size: {
		type: 'number',
		isUAGStyle: true,
	},
	vPadding: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	hPadding: {
		type: 'number',
		default: 14,
		isUAGStyle: true,
	},
	topPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	rightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	leftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	topMobilePadding: {
		type: 'number',
		isUAGStyle: true,
	},
	rightMobilePadding: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomMobilePadding: {
		type: 'number',
		isUAGStyle: true,
	},
	leftMobilePadding: {
		type: 'number',
		isUAGStyle: true,
	},
	topTabletPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	rightTabletPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomTabletPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	leftTabletPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	mobilePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingLink: {
		type: 'boolean',
		default: false,
	},
	borderWidth: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	borderRadius: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
		isUAGStyle: true,
	},
	borderColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	borderHColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	color: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	background: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	hColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	hBackground: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	sizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	sizeMobile: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	sizeTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	lineHeight: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	lineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	lineHeightMobile: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	lineHeightTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	opensInNewTab: {
		type: 'boolean',
	},
	icon: {
		type: 'string',
		default: '',
	},
	iconPosition: {
		type: 'string',
		default: 'after',
	},
	iconSpace: {
		type: 'number',
		default: 8,
		isUAGStyle: true,
	},
};

export default attributes;
