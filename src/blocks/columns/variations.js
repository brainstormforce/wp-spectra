/**
 * Internal dependencies
 */
import rowIcons from './icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
	{
		name: 'one-column',
		label: __( 'One column' ),
		icon: rowIcons.colOne,
		attributes: {
			columns: 1,
			layout: '100',
		},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/column', { width: '100' } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-column-split',
		label: __( 'Two columns; equal split' ),
		icon: rowIcons.layout5050,
		attributes: {
			columns: 2,
			layout: '50-50',
		},
		innerBlocks: [
			[ 'uagb/column', { width: '50' } ],
			[ 'uagb/column', { width: '50' } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-column',
		label: __( 'Three columns; equal split' ),
		icon: rowIcons.layout502525,
		attributes: {
			columns: 3,
			layout: '50-25-25',
		},
		innerBlocks: [
			[ 'uagb/column', { width: '50' } ],
			[ 'uagb/column', { width: '25' } ],
			[ 'uagb/column', { width: '25' } ],

		],
		scope: [ 'block' ],
	},
	{
		name: 'four-column',
		label: __( 'Four columns; equal split' ),
		icon: rowIcons.layout25252525,
		attributes: {
			columns: 4,
			layout: '25-25-25-25',
		},
		innerBlocks: [
			[ 'uagb/column', { width: '25' } ],
			[ 'uagb/column', { width: '25' } ],
			[ 'uagb/column', { width: '25' } ],
			[ 'uagb/column', { width: '25' } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'five-column',
		label: __( 'Five columns; equal split' ),
		icon: rowIcons.layout25252525,
		attributes: {
			columns: 5,
			layout: '20-20-20-20',
		},
		innerBlocks: [
			[ 'uagb/column', { width: '20' } ],
			[ 'uagb/column', { width: '20' } ],
			[ 'uagb/column', { width: '20' } ],
			[ 'uagb/column', { width: '20' } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'six-column',
		label: __( 'Six columns; equal split' ),
		icon: rowIcons.layout25252525,
		attributes: {
			columns: 6,
			layout: '16.66-16.66-16.66-16.66',
		},
		innerBlocks: [
			[ 'uagb/column', { width: '16.66' } ],
			[ 'uagb/column', { width: '16.66' } ],
			[ 'uagb/column', { width: '16.66' } ],
			[ 'uagb/column', { width: '16.66' } ],
		],
		scope: [ 'block' ],
	},
];

export default variations;
