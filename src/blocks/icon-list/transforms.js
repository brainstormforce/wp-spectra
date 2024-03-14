import colourNameToHex from '@Controls/changeColorNameToHex';
import {  createBlock } from '@wordpress/blocks';
import { getUnit, getNumber } from '@Utils/Helpers';

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
                    fontSize: getNumber( _attributes?.style?.typography?.fontSize || '16' ),
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
                    size: getNumber( _attributes?.style?.typography?.fontSize || '16' ),
                    sizeType: getUnit( _attributes?.style?.typography?.fontSize || '' ),
                }, 
                iconListChildBlocks );
            },
        },
    ],
};

export default transforms;