/**
 * BLOCK: Heading
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType, createBlock } from '@wordpress/blocks';
import './format';
import {
	split,
	create,
	toHTMLString,
	LINE_SEPARATOR,
	__UNSTABLE_LINE_SEPARATOR,
} from '@wordpress/rich-text';
import colourNameToHex from '@Controls/changeColorNameToHex';

const lineSep = LINE_SEPARATOR ? LINE_SEPARATOR : __UNSTABLE_LINE_SEPARATOR;

registerBlockType( 'uagb/advanced-heading', {
	title: __( 'Heading', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Add heading, sub heading and a separator using one block.',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.advanced_heading,
	keywords: [
		__( 'creative heading', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'heading', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			isPreview: true,
		}
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	deprecated,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'core/heading' ],
				transform: ( attribute ) => {
					return createBlock( 'uagb/advanced-heading', {
						headingTitle: attribute.content,
						headingAlign: attribute.textAlign,
						headingColor: colourNameToHex( attribute.textColor ),
						blockBackground: colourNameToHex( attribute.backgroundColor ),
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/quote' ],
				transform: ( attribute ) => {
					return createBlock( 'uagb/advanced-heading', {
						headingTitle: attribute.value,
						headingDesc: attribute.citation,
						headingAlign: attribute.align,
						headingColor: colourNameToHex( attribute.textColor ),
						blockBackground: colourNameToHex( attribute.backgroundColor ),
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( attribute ) => {
					return createBlock( 'uagb/advanced-heading', {
						headingTitle: attribute.content,
						headingAlign: attribute.align,
						headingColor: colourNameToHex( attribute.textColor ),
						blockBackground: colourNameToHex( attribute.backgroundColor ),
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
						createBlock( 'uagb/advanced-heading', {
							headingTitle: text.text,
							headingColor: colourNameToHex( textColor ),
							blockBackground: colourNameToHex( backgroundColor ),
						} )
					);
				},
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/heading' ],
				transform: ( attribute ) => {
					return createBlock( 'core/heading', {
						content: attribute.headingTitle,
						align: attribute.headingAlign,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/quote' ],
				transform: ( attribute ) => {
					return createBlock( 'core/quote', {
						value: attribute.headingTitle,
						citation: attribute.headingDesc,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( attribute ) => {
					return createBlock( 'core/paragraph', {
						content: attribute.headingTitle,
					} );
				},
			},
		],
	},
} );
