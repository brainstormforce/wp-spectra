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
		isUAGStyle: true,
	},
	imageAlignment: {
		type: 'string',
		default: 'top',
		isUAGStyle: true,
	},
	imageSize: {
		type: 'string',
		default: 'medium',
		isUAGStyle: true,
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	columns: {
		type: 'number',
		default: 2,
		isUAGStyle: true,
	},
	tcolumns: {
		type: 'number',
		default: 2,
		isUAGStyle: true,
	},
	mcolumns: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	headingAlign: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
};

export default attributes;
