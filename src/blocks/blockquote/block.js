/**
 * BLOCK: Quote
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import Edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import attributes from './attributes';
import { __ } from '@wordpress/i18n';
import colourNameToHex from '@Controls/changeColorNameToHex';
import { registerBlockType, createBlock } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let blockquoteCommonData = {};
blockquoteCommonData = applyFilters( 'uagb/blockquote', addCommonDataToSpectraBlocks( blockquoteCommonData ) );
registerBlockType( 'uagb/blockquote', {
	...blockquoteCommonData,
	title: __( 'Blockquote', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display qoutes/quoted texts using blockquote.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.blockquote,
	keywords: [
		__( 'blockquote', 'ultimate-addons-for-gutenberg' ),
		__( 'quote', 'ultimate-addons-for-gutenberg' ),
		__( 'uagb', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="blockquote" /> : <Edit { ...props } /> ),
	save,
	deprecated,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/quote' ],
				transform: ( attribute ) => {
					return createBlock( 'uagb/blockquote', {
						descriptionText: attribute.value,
						author: attribute.citation,
						align: attribute.align,
						descColor: colourNameToHex( attribute.textColor ),
						authorColor: colourNameToHex( attribute.backgroundColor ),
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/heading' ],
				transform: ( attribute ) => {
					return createBlock( 'uagb/blockquote', {
						descriptionText: attribute.content,
						align: attribute.textAlign,
						descColor: colourNameToHex( attribute.textColor ),
						authorColor: colourNameToHex( attribute.backgroundColor ),
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( attribute ) => {
					return createBlock( 'uagb/blockquote', {
						descriptionText: attribute.content,
						descColor: colourNameToHex( attribute.textColor ),
						authorColor: colourNameToHex( attribute.backgroundColor ),
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/list' ],
				transform: ( _attributes, childBlocks ) => {
					const newitems = [];
					childBlocks.forEach( ( item, i ) => {
						newitems.push( {
							text: childBlocks[ i ].attributes.content,
						} );
					} );

					return newitems.map( ( text ) =>
						createBlock( 'uagb/blockquote', {
							descriptionText: text.text,
							descColor: colourNameToHex( _attributes.textColor ),
							authorColor: colourNameToHex( _attributes.backgroundColor ),
						} )
					);
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/quote' ],
				transform: ( attribute ) => {
					return createBlock( 'core/quote', {
						value: `<p>${ attribute.descriptionText }</p>`,
						citation: attribute.author,
						align: attribute.align,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/heading' ],
				transform: ( attribute ) => {
					return createBlock( 'core/heading', {
						content: attribute.descriptionText,
						align: attribute.align,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( attribute ) => {
					return createBlock( 'core/paragraph', {
						content: attribute.descriptionText,
						align: attribute.align,
					} );
				},
			},
		],
	},
} );
