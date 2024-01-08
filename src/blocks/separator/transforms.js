import { createBlock } from '@wordpress/blocks';
import colourNameToHex from '@Controls/changeColorNameToHex';
export { colourNameToHex, createBlock };

const transforms = {
    from: [
        {
            type: 'block',
            blocks: ['core/spacer'],
            transform: ( _attributes ) => {
                return createBlock( 'uagb/separator', {
                    separatorHeight: parseInt( _attributes.height ) / 2,
                } );
            },
        },
        {
            type: 'block',
            blocks: ['core/separator'],
            transform: ( _attributes ) => {
                const sepStyle = ( _attributes && _attributes.className && _attributes.className.includes( 'is-style-dots' ) ) ? 'dotted' : 'solid';
                return createBlock( 'uagb/separator', {
                    separatorColor: /^#([0-9A-Fa-f]{3}){1,2}$/.test( _attributes?.style?.color?.background || '' ) ? _attributes?.style?.color?.background : colourNameToHex( _attributes?.backgroundColor ),
                    separatorStyle:sepStyle,
                    separatorHeight: 0,
                    separatorBorderHeight: 1,
                    separatorWidth: ( !_attributes?.className || _attributes.className.includes( 'is-style-default' ) ) ? 25 : 100
                    ,
                } );
            },
        },
        {
            type: 'block',
            blocks: ['core/nextpage'],
            transform: ( {} ) => {
                return createBlock( 'uagb/separator', {} );
            },
        },
    ],
};

export default transforms;
