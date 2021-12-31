import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	headingTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: __( 'Your Attractive Heading', 'ultimate-addons-for-gutenberg' ),
	},
	headingId: {
		type: 'string',
	},
	headingDesc: {
		source: 'html',
		selector: 'p',
		default: __( 'Enter description text here.Lorem ipsum dolor sit amet, consectetur adipiscing. Quo incidunt ullamco.​', 'ultimate-addons-for-gutenberg' ),
	},
	headingAlign: {
		type: 'string',
		default: 'center',
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadingColor: {
		type: 'string',
		isUAGStyle: true,
	},
	separatorColor: {
		type: 'string',
		isUAGStyle: true,
	},
	headingTag: {
		type: 'string',
		default: 'h2',
	},
	level: {
		type: 'number',
		default: 2,
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	separatorHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	separatorWidth: {
		type: 'number',
		isUAGStyle: true,
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		isUAGStyle: true,
	},
	headSpace: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	headFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	headTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	headFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontFamily: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	subHeadFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	subHeadTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	subHeadFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	subHeadLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	separatorSpace: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	separatorHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
};

export default attributes;
