/**
 * BLOCK: UAGB Timeline Child Attributes
 */

import { __ } from '@wordpress/i18n';

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	content_class: {
		type: 'string',
	},
	dayalign_class: {
		type: 'string',
	},
	time_heading: {
		type: 'string',
		default: __( 'Timeline Heading ', 'ultimate-addons-for-gutenberg' ),
	},
	time_desc: {
		type: 'string',
		default: __(
			'This is timeline description. Please click here to change this description.',
			'ultimate-addons-for-gutenberg'
		),
	},
	dateFormat: {
		type: 'string',
		default: 'F j, Y',
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	alignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet',
		},
	},
	alignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	timelinAlignment: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'timeline-alignment',
		},
	},
	timelinAlignmentTablet: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'timeline-alignment-tablet',
		},
	},
	timelinAlignmentMobile: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'timeline-alignment-mobile',
		},
	},
	arrowlinAlignment: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'arrowline-alignment',
		},
	},
	block_id: {
		type: 'string',
		default: '0',
	},
	timelineItem: {
		type: 'number',
		default: 5,
	},
	tm_client_id: {
		type: 'string',
		default: 'not_set',
	},
	iconSize: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	icon: {
		type: 'string',
		default: 'calendar-days',
	},
	t_date: {
		type: 'string',
		default: '1/1/2019',
	},
	displayPostDate: {
		type: 'boolean',
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
};

export default attributes;
