/**
 * BLOCK: UAGB Form - Email Attributes
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
	name: {
		type: 'string',
		default: __( 'Email', 'ultimate-addons-for-gutenberg' ),
	},
	required: {
		type: 'boolean',
		default: false,
	},
	placeholder: {
		type: 'string',
		default: __( 'example@mail.com', 'ultimate-addons-for-gutenberg' ),
	},
	autocomplete: {
		type: 'string',
		default: 'email',
	},
};
export default attributes;
