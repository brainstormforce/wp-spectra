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
		default: __( 'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' ),
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
		UAGCopyPaste: {
			styleType: 'image-size'
		},
	},
	urlFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	urlFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
		default: 'px',
	},
	urlFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	urlFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	urlFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
		default: 'Default',
	},
	urlFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	urlFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
	},
	urlTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		},
	},
	urlDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		},
	},
	urlLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
	},

	titleFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	titleFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
		default: 'px',
	},
	titleFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	titleFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	titleFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	titleFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'normal',
	},
	titleTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	titleDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
		default: false,
	},

	descriptionFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	descriptionFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
	},
	descriptionFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	descriptionFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	descriptionFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
	},
	descriptionFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	descriptionFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
	},
	descriptionTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		},
	},
	descriptionDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		},
	},
	descriptionLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
	},

	imgPosition: {
		type: 'string',
		default: 'above-title',
	},
	titleColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	descriptionColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	urlColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
};
export default attributes;
