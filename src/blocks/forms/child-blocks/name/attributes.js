/**
 * BLOCK: UAGB Form - Name Attributes
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
	nameRequired: {
		type: 'boolean',
		default: false,
	},
	name: {
		type: 'string',
		default: __( 'Name', 'ultimate-addons-for-gutenberg' ),
	},
	placeholder: {
		type: 'string',
		default: __( 'John Doe', 'ultimate-addons-for-gutenberg' ),
	},
	autocomplete: {
		type: 'string',
		default: 'name',
	},
};
export default attributes;
