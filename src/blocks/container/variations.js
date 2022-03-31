/**
 * Internal dependencies
 */
import rowIcons from './icons';

/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
	{
		name: 'one-column',
		icon: rowIcons['100'],
		attributes: {
			variationSelected: true,
		},
		scope: [ 'block' ],
	},
	{
		name: 'two-column-split',
		icon: rowIcons['50-50'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
		},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 50, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 50, widthSetByUser:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-equal',
		icon: rowIcons['33-33-33'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 33.33, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 33.33, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 33.33, widthSetByUser:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'four-column',
		icon: rowIcons['25-25-25-25'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '50-50_50-50',
		icon: rowIcons['50-50_50-50'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			rowGapDesktop: 0,
			columnGapDesktop: 0
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 50, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 50, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 50, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 50, widthSetByUser:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-one-third-two-thirds',
		icon: rowIcons['25-75'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 75, widthSetByUser:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '33-33-33_33-33-33',
		icon: rowIcons['33-33-33_33-33-33'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			rowGapDesktop: 0,
			columnGapDesktop: 0
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 33, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 33, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 33, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 33, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 33, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 33, widthSetByUser:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-wider-center',
		icon: rowIcons['25-50-25'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 50, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-two-thirds-one-third',
		icon: rowIcons['75-25'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 75, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '75-25_25_75',
		icon: rowIcons['75-25_25_75'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			rowGapDesktop: 0,
			columnGapDesktop: 0
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 75, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 75, widthSetByUser:true } ],

		],
		scope: [ 'block' ],
	},
	{
		name: '50-50_100',
		icon: rowIcons['50-50_100'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			rowGapDesktop: 0,
			columnGapDesktop: 0
		},
		innerBlocks: [
			[
				'uagb/container',
				{ widthDesktop: 100, widthSetByUser:true, directionDesktop: 'row', },
				[
					[ 'uagb/container', { widthDesktop: 50, widthSetByUser:true } ],
					[ 'uagb/container', { widthDesktop: 50, widthSetByUser:true } ],
				]
			],
			[ 'uagb/container', { widthDesktop: 100, widthSetByUser:true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '25-75_75-25',
		icon: rowIcons['25-75_75-25'],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			rowGapDesktop: 0,
			columnGapDesktop: 0
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 75, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 75, widthSetByUser:true } ],
			[ 'uagb/container', { widthDesktop: 25, widthSetByUser:true } ],

		],
		scope: [ 'block' ],
	},
];

export default variations;
