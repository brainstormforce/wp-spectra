/**
 * Internal dependencies
 */
import rowIcons from './icons';
import { __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import UAGB_Block_Icons from '@Controls/block-icons';
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
export const variations = [
	{
		name: 'one-column',
		icon: rowIcons[ '100' ],
		attributes: {
			variationSelected: true,
		},
		scope: [ 'block' ],
	},
	{
		name: 'two-column-split',
		icon: rowIcons[ '50-50' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-equal',
		icon: rowIcons[ '33-33-33' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 33, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'four-column',
		icon: rowIcons[ '25-25-25-25' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '50-50_50-50',
		icon: rowIcons[ '50-50_50-50' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 48, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 48, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 48, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 48, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-one-third-two-thirds',
		icon: rowIcons[ '25-75' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 75, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '33-33-33_33-33-33',
		icon: rowIcons[ '33-33-33_33-33-33' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 31, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 31, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 31, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 31, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 31, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 31, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-wider-center',
		icon: rowIcons[ '25-50-25' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 50, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-two-thirds-one-third',
		icon: rowIcons[ '75-25' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 75, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 25, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '75-25_25_75',
		icon: rowIcons[ '75-25_25_75' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 73, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 23, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 23, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 73, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '50-50_100',
		icon: rowIcons[ '50-50_100' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[
				'uagb/container',
				{ widthDesktop: 100, widthSetByUser: true, directionDesktop: 'row' },
				[
					[ 'uagb/container', { widthDesktop: 48, widthMobile: 100, widthSetByUser: true } ],
					[ 'uagb/container', { widthDesktop: 48, widthMobile: 100, widthSetByUser: true } ],
				],
			],
			[ 'uagb/container', { widthDesktop: 100, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '25-75_75-25',
		icon: rowIcons[ '25-75_75-25' ],
		attributes: {
			variationSelected: true,
			directionDesktop: 'row',
			wrapDesktop: 'wrap',
			wrapMobile: 'wrap',
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 23, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 73, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 73, widthMobile: 100, widthSetByUser: true } ],
			[ 'uagb/container', { widthDesktop: 23, widthMobile: 100, widthSetByUser: true } ],
		],
		scope: [ 'block' ],
	},
];

export const VariationPicker = ( props ) => {
	const { clientId, setAttributes, defaultVariation } = props;
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

	const blockVariationPickerOnSelect = ( nextVariation = defaultVariation ) => {
		if ( nextVariation.attributes ) {
			setAttributes( nextVariation.attributes );
		}

		if ( nextVariation.innerBlocks && 'one-column' !== nextVariation.name ) {
			replaceInnerBlocks( clientId, createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ) );
		}
	};

	return (
		<div className="uagb-container-variation-picker">
			<BlockVariationPicker
				icon={ UAGB_Block_Icons.container }
				label={ __( 'Container', 'ultimate-addons-for-gutenberg' ) }
				instructions={
					__(
						'Select a container layout to start with.',
						'ultimate-addons-for-gutenberg'
					)
				}
				variations={ variations }
				onSelect={ ( nextVariation ) => blockVariationPickerOnSelect( nextVariation ) }
			/>
		</div>
	);
};