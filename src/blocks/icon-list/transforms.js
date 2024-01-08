import colourNameToHex from '@Controls/changeColorNameToHex';
import {  createBlock } from '@wordpress/blocks';

const  transforms = {
    from: 
    [ {
            type: 'block',
            blocks: [ 'core/list' ],
            transform: ( _attributes, childBlocks ) => {
                const iconListChildBlocks = childBlocks.map( ( listItem ) => {
                    return createBlock( 'uagb/icon-list-child', {
                        label: listItem.attributes.content,
                        label_color: _attributes?.style?.color?.text || colourNameToHex( _attributes?.textColor ) || '',
                    } );
                } );

                return createBlock( 'uagb/icon-list', {
                    iconColor: _attributes?.style?.color?.text || colourNameToHex( _attributes?.textColor ) || '',
                    fontWeight: _attributes?.style?.typography?.fontWeight || '' ,
                    fontSize: getNumber( _attributes?.style?.typography?.fontSize || '' ),
                    fontSizeType: getUnit( _attributes?.style?.typography?.fontSize || '' ),
                    labelColor:  _attributes?.style?.color?.text ||  colourNameToHex( _attributes?.textColor ) || '',
                    labelLetterSpacing: getNumber( _attributes?.style?.typography?.letterSpacing || '0' ),
                    labelLetterSpacingType: getUnit( _attributes?.style?.typography?.letterSpacing || '' ),
                    lineHeight: getNumber( _attributes?.style?.typography?.lineHeight || '0.6' ),
                    fontDecoration: _attributes?.style?.typography?.textDecoration || '' ,
                    fontTransform: _attributes?.style?.typography?.textTransform || '',
                    blockTopMargin: getNumber( _attributes?.style?.spacing?.margin?.top || '16' ) ,
                    blockRightMargin: getNumber( _attributes?.style?.spacing?.margin?.right || '0' ),
                    blockLeftMargin: getNumber( _attributes?.style?.spacing?.margin?.left || '0' ),
                    blockBottomMargin: getNumber( _attributes?.style?.spacing?.margin?.bottom || '16' ),
                    blockMarginUnit: getUnit( _attributes?.style?.spacing?.margin?.top  || 'px' ),
                    blockTopPadding: getNumber( _attributes?.style?.spacing?.padding?.top  || '20' ),
                    blockRightPadding: getNumber( _attributes?.style?.spacing?.padding?.right  || '38' ),
                    blockLeftPadding: getNumber( _attributes?.style?.spacing?.padding?.left  || '38' ),
                    blockBottomPadding: getNumber( _attributes?.style?.spacing?.padding?.bottom  || '20' ),
                    blockPaddingUnit: getUnit( _attributes?.style?.spacing?.padding?.top  || 'px' ),
                    size: getNumber( _attributes?.style?.typography?.fontSize || '' ),
                    sizeType: getUnit( _attributes?.style?.typography?.fontSize || '' ),
                }, 
                iconListChildBlocks );
            },
        },
    ],
};

function getNumber( input ) {
    const regex = /(\d+(\.\d+)?)/;
    const match = input.match( regex );

    if ( match ) {
        return parseFloat( match[1] );
    }

    return 16;
}

function getUnit( input ) {
    const regex = /(px|em|rem)/;
    const match = input.match( regex );
    if ( match ) {
        const unit = match[1];
        if ( ['px', 'em'].includes( unit ) ) {
            return unit;
        } else if ( unit === 'rem' ) {
            return 'em';
        }
    }
    return 'px';
}

export default transforms;