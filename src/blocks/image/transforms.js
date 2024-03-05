import colourNameToHex from '@Controls/changeColorNameToHex';
import { createBlock } from '@wordpress/blocks';
import { getNumber, getUnitDimension, getUnit } from '@Utils/Helpers';

const transforms = {
    from: [
        {
            type: 'block',
            blocks: ['core/image'],
            transform: ( { url, sizeSlug } ) => {
                return createBlock( 'uagb/image', {
                    url,
                    sizeSlug,
                } );
            },
        },
        {
            type: 'block',
            blocks: ['core/post-featured-image'],
            transform: ( { sizeSlug } ) => {
                return createBlock( 'uagb/image', {
                    useDynamicData: true,
                    dynamicContentType: 'featured-image',
                    sizeSlug,
                } );
            },
        },
        {
            type: 'block',
            blocks: ['core/cover'],
            transform: ( _attributes, innerBlocks ) => {
                const borderRadiusUnit = getUnitDimension( ( typeof _attributes?.style?.border?.radius !== 'object' && _attributes?.style?.border?.radius ) || ( _attributes?.style?.border?.radius?.topRight || _attributes?.style?.border?.radius?.topLeft || _attributes?.style?.border?.radius?.bottomRight || _attributes?.style?.border?.radius?.bottomLeft || '' ) );
                const firstInnerBlockAttributes = innerBlocks[0]?.attributes || {};
                const hasCaption = Boolean( firstInnerBlockAttributes.content );
                let getCaptionColor;
                if (  firstInnerBlockAttributes?.style?.color?.text  ) {
                    getCaptionColor = firstInnerBlockAttributes?.style?.color?.text;
                } else if ( colourNameToHex( firstInnerBlockAttributes?.textColor ) ) {
                    getCaptionColor = colourNameToHex( firstInnerBlockAttributes?.textColor );
                } else if ( _attributes?.style?.color?.text  ) {
                    getCaptionColor = _attributes?.style?.color?.text;
                } else if ( colourNameToHex( _attributes?.textColor ) ) {
                    getCaptionColor = colourNameToHex( _attributes?.textColor );
                } else {
                    getCaptionColor = '';
                }
                return createBlock( 'uagb/image', {
                    url: _attributes.url,
                    alt: _attributes.alt,
                    title: _attributes.title,
                    enableCaption: hasCaption,
                    headingColor: getCaptionColor,
                    heading: hasCaption ? firstInnerBlockAttributes.content : '',
                    headingFontWeight: firstInnerBlockAttributes?.style?.typography?.fontWeight || _attributes?.style?.typography?.fontWeight || '',
                    headingFontSize: getNumber( firstInnerBlockAttributes?.style?.typography?.fontSize || _attributes?.style?.typography?.fontSize || '' ),
                    headingFontSizeType: getUnit( firstInnerBlockAttributes?.style?.typography?.fontSize || _attributes?.style?.typography?.fontSize || '' ),
                    headingLetterSpacing: getNumber( firstInnerBlockAttributes?.style?.typography?.letterSpacing || _attributes?.style?.typography?.letterSpacing || '' ),
                    headingLetterSpacingType: getUnit( firstInnerBlockAttributes?.style?.typography?.letterSpacing || _attributes?.style?.typography?.letterSpacing || '' ),
                    headingDecoration: firstInnerBlockAttributes?.style?.typography?.textDecoration || _attributes?.style?.typography?.textDecoration || '',
                    headingTransform: firstInnerBlockAttributes?.style?.typography?.textTransform || _attributes?.style?.typography?.textTransform || '',
                    headingLineHeight: getNumber( firstInnerBlockAttributes?.style?.typography?.lineHeight || _attributes?.style?.typography?.lineHeight || '' ),
                    imageTopMargin: getNumber( _attributes?.style?.spacing?.margin?.top || '' ),
                    imageBottomMargin: getNumber( _attributes?.style?.spacing?.margin?.bottom || '' ),
                    imageMarginLink: false,
                    imageMarginUnit: getUnit( _attributes?.style?.spacing?.margin?.top || 'px' ),
                    headingTopMargin: getNumber( firstInnerBlockAttributes?.style?.spacing?.margin?.top || '' ),
                    headingRightMargin: getNumber( firstInnerBlockAttributes?.style?.spacing?.margin?.right || '' ),
                    headingLeftMargin: getNumber( firstInnerBlockAttributes?.style?.spacing?.margin?.left || '' ),
                    headingBottomMargin: getNumber( firstInnerBlockAttributes?.style?.spacing?.margin?.bottom || '' ),
                    headingMarginUnit: getUnit( firstInnerBlockAttributes?.style?.spacing?.margin?.top || '' ),
                    align: 'center',
                    imageBorderStyle: _attributes?.style?.border?.style || ( ( _attributes?.style?.border?.width || _attributes?.style?.border?.top?.width ) ? ( _attributes?.style?.border?.style || 'solid' ) : 'none' ),
                    imageBorderTopWidth: getNumber( _attributes?.style?.border?.width || _attributes?.style?.border?.top?.width || '' ),
                    imageBorderBottomWidth: getNumber( _attributes?.style?.border?.width || _attributes?.style?.border?.bottom?.width || '' ),
                    imageBorderLeftWidth: getNumber( _attributes?.style?.border?.width || _attributes?.style?.border?.left?.width || '' ),
                    imageBorderRightWidth: getNumber( _attributes?.style?.border?.width || _attributes?.style?.border?.right?.width || '' ),
                    imageBorderWidthUnit: getNumber( _attributes?.style?.border?.width || _attributes?.style?.border?.top?.width || '' ),
                    imageBorderColor: colourNameToHex( _attributes?.borderColor ) || colourNameToHex( _attributes?.style?.border?.right?.color ) || _attributes?.style?.border?.color || _attributes?.style?.border?.right?.color || '',
                    imageBorderTopRightRadius: getNumber( ( typeof _attributes?.style?.border?.radius !== 'object' && _attributes?.style?.border?.radius ) || ( _attributes?.style?.border?.radius?.topRight || '' ) ),
                    imageBorderTopLeftRadius: getNumber( ( typeof _attributes?.style?.border?.radius !== 'object' && _attributes?.style?.border?.radius ) || ( _attributes?.style?.border?.radius?.topLeft || '' ) ),
                    imageBorderBottomRightRadius: getNumber( ( typeof _attributes?.style?.border?.radius !== 'object' && _attributes?.style?.border?.radius ) || ( _attributes?.style?.border?.radius?.bottomRight || '' ) ),
                    imageBorderBottomLeftRadius: getNumber( ( typeof _attributes?.style?.border?.radius !== 'object' && _attributes?.style?.border?.radius ) || ( _attributes?.style?.border?.radius?.bottomLeft || '' ) ),
                    imageBorderRadiusUnit: borderRadiusUnit ,
                    layout: 'overlay',
                    overlayOpacity: _attributes.dimRatio !== 0 ? _attributes.dimRatio / 100 : 0,
                    overlayHoverOpacity: _attributes.dimRatio !== 0 ? _attributes.dimRatio / 100 : 0,
                    overlayBackground: _attributes?.customOverlayColor || colourNameToHex( _attributes?.overlayColor ),
                } );
            },
        },
        {
            type: 'block',
            blocks: ['core/media-text'],
            transform: ( _attributes, innerBlocks ) => {
                const firstInnerBlockAttributes = innerBlocks[0]?.attributes || {};
                const hasCaption = Boolean( firstInnerBlockAttributes.content );
                let getCaptionColor;
                if (  firstInnerBlockAttributes?.style?.color?.text  ) {
                    getCaptionColor = firstInnerBlockAttributes?.style?.color?.text;
                } else if ( colourNameToHex( firstInnerBlockAttributes?.textColor ) ) {
                    getCaptionColor = colourNameToHex( firstInnerBlockAttributes?.textColor );
                } else if ( _attributes?.style?.color?.text  ) {
                    getCaptionColor = _attributes?.style?.color?.text;
                } else if ( colourNameToHex( _attributes?.textColor ) ) {
                    getCaptionColor = colourNameToHex( _attributes?.textColor );
                } else {
                    getCaptionColor = '';
                }
                return createBlock( 'uagb/image', {
                    url: _attributes.mediaUrl,
                    alt: _attributes.mediaAlt,
                    title: _attributes.mediaTitle,
                    enableCaption: hasCaption,
                    captionColor: getCaptionColor,
                    caption: hasCaption ? firstInnerBlockAttributes.content : '',
                    captionFontWeight: firstInnerBlockAttributes?.style?.typography?.fontWeight || _attributes?.style?.typography?.fontWeight || '',
                    captionFontSize: getNumber( firstInnerBlockAttributes?.style?.typography?.fontSize || _attributes?.style?.typography?.fontSize || '' ),
                    captionFontSizeType: getUnit( firstInnerBlockAttributes?.style?.typography?.fontSize || _attributes?.style?.typography?.fontSize || '' ),
                    captionLetterSpacing: getNumber( firstInnerBlockAttributes?.style?.typography?.letterSpacing || _attributes?.style?.typography?.letterSpacing || '' ),
                    captionLetterSpacingType: getUnit( firstInnerBlockAttributes?.style?.typography?.letterSpacing || _attributes?.style?.typography?.letterSpacing || '' ),
                    captionDecoration: firstInnerBlockAttributes?.style?.typography?.textDecoration || _attributes?.style?.typography?.textDecoration || '',
                    captionTransform: firstInnerBlockAttributes?.style?.typography?.textTransform || _attributes?.style?.typography?.textTransform || '',
                    captionLineHeight: getNumber( firstInnerBlockAttributes?.style?.typography?.lineHeight || _attributes?.style?.typography?.lineHeight || '' ),
                    imageTopMargin: getNumber( _attributes?.style?.spacing?.margin?.top || '' ),
                    imageRightMargin: getNumber( _attributes?.style?.spacing?.margin?.right || '' ),
                    imageLeftMargin: getNumber( _attributes?.style?.spacing?.margin?.left || '' ),
                    imageBottomMargin: getNumber( _attributes?.style?.spacing?.margin?.bottom || '' ),
                    imageMarginUnit: getUnitDimension( _attributes?.style?.spacing?.margin?.top || 'px' ),
                    captionTopMargin: getNumber( firstInnerBlockAttributes?.style?.spacing?.margin?.top || '' ),
                    captionRightMargin: getNumber( firstInnerBlockAttributes?.style?.spacing?.margin?.right || '' ),
                    captionLeftMargin: getNumber( firstInnerBlockAttributes?.style?.spacing?.margin?.left || '' ),
                    captionBottomMargin: getNumber( firstInnerBlockAttributes?.style?.spacing?.margin?.bottom || '' ),
                    captionMarginUnit: getUnitDimension( firstInnerBlockAttributes?.style?.spacing?.margin?.top || '' ),
                    align: 'center',

                } );
            },
        },

    ],
    to: [
        {
            type: 'block',
            blocks: ['core/image'],
            transform: ( { url, sizeSlug } ) => {
                return createBlock( 'core/image', {
                    url,
                    sizeSlug,
                } );
            },
        },
    ],
};

export default transforms;