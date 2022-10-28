/**
 * BLOCK: Quote
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import attributes from './attributes';
import { __ } from '@wordpress/i18n';
import {
	split,
	create,
	toHTMLString,
	LINE_SEPARATOR,
	__UNSTABLE_LINE_SEPARATOR,
} from '@wordpress/rich-text';
import colourNameToHex from '@Controls/changeColorNameToHex';
const lineSep = LINE_SEPARATOR ? LINE_SEPARATOR : __UNSTABLE_LINE_SEPARATOR;
import { registerBlockType, createBlock } from '@wordpress/blocks';

registerBlockType( 'uagb/blockquote', {
	title: __( 'Blockquote', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Display qoutes/quoted texts using blockquote.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.blockquote,
	keywords: [
		__( 'blockquote', 'ultimate-addons-for-gutenberg' ),
		__( 'quote', 'ultimate-addons-for-gutenberg' ),
		__( 'uagb', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	example: {
		attributes: {
			isPreview: true,
		}
	},
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
						authorColor: colourNameToHex( attribute.backgroundColor )
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
						authorColor: colourNameToHex( attribute.backgroundColor )
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
						authorColor: colourNameToHex( attribute.backgroundColor )
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/list' ],
				transform: ( { values, textColor, backgroundColor } ) => {
					const listArray = split( create( {
						html: values,
						multilineTag: 'li',
						multilineWrapperTags: [ 'ul', 'ol' ],
					} ), lineSep );
					const newitems = [ {
						text: toHTMLString( { value: listArray[ 0 ] } ),
					} ];
					listArray.forEach( ( item, i ) => {
						if ( i !== 0 ) {
							newitems.push( {
								text: listArray[i].text
							} )
						}
					  } );
					return newitems.map( ( text ) =>
						createBlock( 'uagb/blockquote', {
							descriptionText: text.text,
							descColor: colourNameToHex( textColor ),
							authorColor: colourNameToHex( backgroundColor )
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
