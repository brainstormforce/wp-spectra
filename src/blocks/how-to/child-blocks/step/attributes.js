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
	},
	urlFontSize: {
		type: 'number',
	},
	urlFontSizeType: {
		type: 'string',
		default: 'px',
	},
	urlFontSizeMobile: {
		type: 'number',
	},
	urlFontSizeTablet: {
		type: 'number',
	},
	urlFontFamily: {
		type: 'string',
		default: 'Default',
	},
	urlFontWeight: {
		type: 'string',
	},
	urlFontStyle: {
		type: 'string',
		default: 'normal',
	},
	urlTransform: {
		type: 'string',
	},
	urlDecoration: {
		type: 'string',
	},
	urlLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	titleFontSize: {
		type: 'number',
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
	},
	titleFontSizeMobile: {
		type: 'number',
	},
	titleFontSizeTablet: {
		type: 'number',
	},
	titleFontFamily: {
		type: 'string',
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
	},
	titleFontStyle: {
		type: 'string',
		default: 'normal',
	},
	titleTransform: {
		type: 'string',
	},
	titleDecoration: {
		type: 'string',
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	descriptionFontSize: {
		type: 'number',
	},
	descriptionFontSizeType: {
		type: 'string',
		default: 'px',
	},
	descriptionFontSizeMobile: {
		type: 'number',
	},
	descriptionFontSizeTablet: {
		type: 'number',
	},
	descriptionFontFamily: {
		type: 'string',
		default: 'Default',
	},
	descriptionFontWeight: {
		type: 'string',
	},
	descriptionFontStyle: {
		type: 'string',
		default: 'normal',
	},
	descriptionTransform: {
		type: 'string',
	},
	descriptionDecoration: {
		type: 'string',
	},
	descriptionLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	imgPosition: {
		type: 'string',
		default: 'above-title',
	},
	titleColor: {
		type: 'string',
	},
	descriptionColor: {
		type: 'string',
	},
	urlColor: {
		type: 'string',
	},
};
export default attributes;
