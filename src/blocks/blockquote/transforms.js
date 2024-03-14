import colourNameToHex from '@Controls/changeColorNameToHex';
import {  createBlock } from '@wordpress/blocks';
import { getUnit, getNumber } from '@Utils/Helpers';

const transforms = {
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
            blocks: [ 'core/pullquote' ],
            transform: ( attribute ) => {
                return createBlock( 'uagb/blockquote', {
                    descriptionText: attribute.value,
                    author: attribute?.citation || '',
                    align: attribute?.textAlign || 'center',
                    enableTweet:false,
                    descColor:  attribute?.style?.color?.text ||  colourNameToHex( attribute?.textColor ) || '',
                    authorColor:  attribute?.style?.color?.text ||  colourNameToHex( attribute?.textColor ) || '',
                    descFontSize:  getNumber( attribute?.style?.typography?.fontSize || '16' ),
                    authorFontSize: getNumber( attribute?.style?.typography?.fontSize || '16' ),
                    descFontSizeType: getUnit( attribute?.style?.typography?.fontSize || '' ),
                    authorFontSizeType: getUnit( attribute?.style?.typography?.fontSize || '' ),
                    descFontWeight: attribute?.style?.typography?.fontWeight || '' ,
                    authorFontWeight: attribute?.style?.typography?.fontWeight || '' ,
                    descLetterSpacing: getNumber( attribute?.style?.typography?.letterSpacing  || '0' ),
                    authorLetterSpacing: getNumber( attribute?.style?.typography?.letterSpacing || '0' ),
                    descLetterSpacingType: getUnit( attribute?.style?.typography?.letterSpacing  || '' ),
                    authorLetterSpacingType: getUnit( attribute?.style?.typography?.letterSpacing || '' ),
                    descDecoration: attribute?.style?.typography?.textDecoration || '',
                    authorDecoration: attribute?.style?.typography?.textDecoration || '',
                    descTransform: attribute?.style?.typography?.textTransform || '',
                    authorTransform: attribute?.style?.typography?.textTransform || '',
                    descLineHeight: getNumber( attribute?.style?.typography?.lineHeight || '1.5' ),
                    authorLineHeight: getNumber( attribute?.style?.typography?.lineHeight || '1.5' ),
                    skinStyle: 'quotation',
                    quoteStyle: 'style_1',
                    descFontStyle: 'normal',
                    quoteColor:  attribute?.style?.color?.text ||  colourNameToHex( attribute?.textColor ) || '',
                    quoteSize: getNumber( attribute?.style?.typography?.fontSize || '16' ),
                    quoteSizeType: getUnit( attribute?.style?.typography?.fontSize || '' ),
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
};

export default transforms;