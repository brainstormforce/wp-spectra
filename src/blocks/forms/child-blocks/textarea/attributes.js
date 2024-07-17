/**
 * BLOCK: UAGB Form - TextArea Attributes
 */

import { __ } from '@wordpress/i18n';

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	textareaName: {
		type: 'string',
		default: __( 'Message', 'ultimate-addons-for-gutenberg' ),
	},
	textareaRequired: {
		type: 'boolean',
		default: false,
	},
	rows: {
		type: 'number',
		default: 4,
	},
	placeholder: {
		type: 'string',
		default: __( 'Enter your message', 'ultimate-addons-for-gutenberg' ),
	},
	autocomplete: {
		type: 'string',
		default: 'off',
	},
};
export default attributes;
