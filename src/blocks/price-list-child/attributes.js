import { __ } from '@wordpress/i18n';

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	description: {
		type: 'string',
		default: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ),
	},
	title: {
		type: 'string',
		default: __( 'Menu Item' ),
	},
	price: {
		type: 'string',
		default: __( '$9' ),
	},
	image: {
		type: 'object',
		default: { url: `${ uagb_blocks_info.uagb_url }/admin/assets/images/uag-placeholder.svg` },
	},
	imagePosition: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'image-position',
		},
	},
	imageAlignment: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'image-align',
		},
	},
	imageSize: {
		type: 'string',
		default: 'medium',
		UAGCopyPaste: {
			styleType: 'image-size',
		},
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	columns: {
		type: 'number',
		default: 2,
	},
	tcolumns: {
		type: 'number',
		default: 2,
	},
	mcolumns: {
		type: 'number',
		default: 1,
	},
	headingAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'main-title-align',
		},
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	imageWidth: {
		type: 'number',
		default: 100,
	},
	imgAlign: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-align',
		},
		default: 'side',
	},
	showImage: {
		type: 'boolean',
		default: true,
	},
	imgTagHeight: {
		type: 'number',
		default: 0,
	},
	imgTagWidth: {
		type: 'number',
		default: 0,
	},
};

export default attributes;
