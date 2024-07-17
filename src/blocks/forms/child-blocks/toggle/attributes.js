/**
 * BLOCK: UAGB Form - Toggle Attributes
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
	toggleRequired: {
		type: 'boolean',
		default: false,
	},
	name: {
		type: 'string',
		default: __( 'Toggle', 'ultimate-addons-for-gutenberg' ),
	},
	toggleStatus: {
		type: 'boolean',
		default: false,
	},
	layout: {
		type: 'string',
		default: 'round',
	},
	trueValue: {
		type: 'string',
		default: 'on',
	},
	falseValue: {
		type: 'string',
		default: 'off',
	},
};
export default attributes;
