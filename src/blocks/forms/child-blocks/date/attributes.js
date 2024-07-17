/**
 * BLOCK: UAGB Form - Date Attributes
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
	dateRequired: {
		type: 'boolean',
		default: false,
	},
	name: {
		type: 'string',
		default: __( 'Date', 'ultimate-addons-for-gutenberg' ),
	},
	additonalVal: {
		type: 'boolean',
		default: false,
	},
	minYear: {
		type: 'string',
		default: '',
	},
	minMonth: {
		type: 'string',
		default: '',
	},
	minDay: {
		type: 'string',
		default: '',
	},
	maxYear: {
		type: 'string',
		default: '',
	},
	maxMonth: {
		type: 'string',
		default: '',
	},
	maxDay: {
		type: 'string',
		default: '',
	},
	autocomplete: {
		type: 'string',
		default: 'bday',
	},
};
export default attributes;
