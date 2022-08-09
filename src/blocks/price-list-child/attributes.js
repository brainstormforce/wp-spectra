import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	description: {
		type: 'string',
		default: __(
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		),
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
		default: null
	},
	imagePosition: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'image-position'
		},
	},
	imageAlignment: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'image-align'
		},
	},
	imageSize: {
		type: 'string',
		default: 'medium',
		UAGCopyPaste: {
			styleType: 'image-size'
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
			styleType: 'main-title-align'
		},
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
};

export default attributes;
