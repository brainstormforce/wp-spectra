import colourNameToHex from '@Controls/changeColorNameToHex';
import { createBlock } from '@wordpress/blocks';
import { getNumber, getUnit } from '@Utils/Helpers';


const transforms = {
    from: [
      {
        type: 'block',
        blocks: ['core/media-text'],
        transform: ( _attributes, innerBlocks ) => {
          const firstInnerBlockAttributes = innerBlocks[0]?.attributes || {};
          const hasTitle = Boolean( firstInnerBlockAttributes.content );
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
          return createBlock( 'uagb/info-box', {
            source_type: 'image',
            infoBoxTitle: hasTitle ? firstInnerBlockAttributes.content : '',
            imageSize: _attributes?.mediaSizeSlug || 'large',
            headingColor: getCaptionColor,
            iconImage: { url: _attributes.mediaUrl },
            headFontWeight: firstInnerBlockAttributes?.style?.typography?.fontWeight || _attributes?.style?.typography?.fontWeight || '',
						headFontSize: getNumber( firstInnerBlockAttributes?.style?.typography?.fontSize || _attributes?.style?.typography?.fontSize || '' ),
						headLetterSpacing: getNumber(  firstInnerBlockAttributes?.style?.typography?.letterSpacing || _attributes?.style?.typography?.letterSpacing || '' ),
						headLetterSpacingType: getUnit( firstInnerBlockAttributes?.style?.typography?.letterSpacing || _attributes?.style?.typography?.letterSpacing || '' ),
            headDecoration:  firstInnerBlockAttributes?.style?.typography?.textDecoration || _attributes?.style?.typography?.textDecoration || '',
						headTransform:  firstInnerBlockAttributes?.style?.typography?.textTransform || _attributes?.style?.typography?.textTransform || '',
						headLineHeight: getNumber(  firstInnerBlockAttributes?.style?.typography?.lineHeight || _attributes?.style?.typography?.lineHeight || '' ),
            showDesc: false,
            blockTopPadding: getNumber( _attributes?.style?.spacing?.padding?.top || '' ),
            blockRightPadding: getNumber( _attributes?.style?.spacing?.padding?.right || '' ),
            blockLeftPadding: getNumber( _attributes?.style?.spacing?.padding?.left || '' ),
            blockBottomPadding: getNumber( _attributes?.style?.spacing?.padding?.bottom || '' ),
            blockPaddingUnit: getUnit( _attributes?.style?.spacing?.margin?.top || '' ),
            headLeftMargin: getNumber(  firstInnerBlockAttributes?.style?.spacing?.margin?.left || '30' ),
            headSpace: getNumber(  firstInnerBlockAttributes?.style?.spacing?.margin?.bottom || '' ),
            headRightMargin: getNumber(  firstInnerBlockAttributes?.style?.spacing?.margin?.right || '' ),
            headTopMargin: getNumber(  firstInnerBlockAttributes?.style?.spacing?.margin?.top || '' ),
            headSpaceUnit: getUnit(  firstInnerBlockAttributes?.style?.spacing?.margin?.top || '' ),
            imageWidth: 350 ,
            imageWidthUnit: 'px',
            iconimgPosition:'left',
            sourceAlign: 'middle',
            
          } );
        },
      },
    ],
  };
  
  export default transforms;
  