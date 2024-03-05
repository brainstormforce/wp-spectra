import { createBlock } from '@wordpress/blocks';
import { pickRelevantMediaFiles } from './transformsFunctions';
import { getUnit, getNumber } from '@Utils/Helpers';

const transforms = {
    from: [
        {
            type: 'block',
            blocks: ['core/gallery'],
            transform: ( attributes ) => {
                const maxGap = Math.max( getNumber( attributes?.style?.spacing?.blockGap?.left || '8' ) , getNumber( attributes?.style?.spacing?.blockGap?.top || '8' ) );
                return createBlock( 'uagb/image-gallery', {
                    columnsDesk: attributes?.columns || 3,
                    readyToRender: true,
                    mediaGallery: attributes.images ? attributes.images.map( ( image ) => pickRelevantMediaFiles( image, 'thumbnail', 'medium', 'large', 'full', null ) ) : [],
                    mediaIDs: attributes?.ids || [],
                    galleryImageSize: attributes?.sizeSlug || 'large',
                    feedLayout: attributes?.masonry ? 'masonry' : 'grid',
                    imageClickEvent: ( attributes?.linkTo === 'attachment' || attributes?.linkTo === 'media' ) ? 'image' : 'none',
                    gridImageGap: ( attributes?.masonry ) ? ( attributes?.masonryGutter || 8 ) : maxGap ,
                    feedMarginTop: getNumber( attributes?.style?.spacing?.padding?.top || '0' ),
                    feedMarginRight: getNumber( attributes?.style?.spacing?.padding?.right || '0' ),
                    feedMarginBottom: getNumber( attributes?.style?.spacing?.padding?.bottom || '0' ),
                    feedMarginLeft: getNumber( attributes?.style?.spacing?.padding?.left || '0' ),
                    feedMarginUnit: getUnit( attributes?.style?.spacing?.padding?.top ||'px' ),

                } );


            },
        },
    ],
};

export default transforms;