/**
 * BLOCK: UAGB How To - Step Attributes
 */
import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	name: {
		type: 'string',
		default: __( 'Step', 'ultimate-addons-for-gutenberg' ),
	},
	description: {
		type: 'string',
		default: __( 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.', 'ultimate-addons-for-gutenberg' ),
	},
	url: {
		type: 'string',
		default: '#',
	},
	urlType: {
		type: 'string',
		default: 'all',
	},
	urlText: {
		type: 'string',
		default: __( 'Read More', 'ultimate-addons-for-gutenberg' ),
	},
	urlTarget: {
		type: 'boolean',
		default: false,
	},
	image: {
		type: 'object',
		default: {
			url: '',
			alt: 'Image Placeholder',
		},
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
		isUAGStyle: true,
	},
	urlFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	urlFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	urlFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	urlFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	urlFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	urlFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	urlFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	urlTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	urlDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	urlLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},

	titleFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	titleFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	titleFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	titleTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	titleDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},

	descriptionFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	descriptionFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	descriptionFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	descriptionFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	descriptionFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	descriptionFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	descriptionFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	descriptionTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	descriptionDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	descriptionLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},

	imgPosition: {
		type: 'string',
		default: 'above-title',
	},
	titleColor: {
		type: 'string',
		isUAGStyle: true,
	},
	descriptionColor: {
		type: 'string',
		isUAGStyle: true,
	},
	urlColor: {
		type: 'string',
		isUAGStyle: true,
	},
};
export default attributes;
