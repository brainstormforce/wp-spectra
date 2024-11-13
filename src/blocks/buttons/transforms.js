import { createBlock } from '@wordpress/blocks';
import colourNameToHex from '@Controls/changeColorNameToHex';
import { getUnitDimension, getUnit, convertToPixel, getNumber, compareVersions } from '@Utils/Helpers';

const transforms = {
    from: [
        {
            type: 'block',
            blocks: ['core/buttons'],
            transform: ( _attributes, innerBlocks ) => {
                let hasWidthFull = false;
                const buttonsArray = [];
                const justifyContent = _attributes?.layout?.justifyContent || 'left';
                innerBlocks.forEach( innerBlock => {		
                    const BlockAttributes = innerBlock.attributes;
                    hasWidthFull = BlockAttributes?.width === 100 ? true : hasWidthFull;
                    const borderRadiusUnit = getUnitDimension( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.topRight || BlockAttributes?.style?.border?.radius?.topLeft || BlockAttributes?.style?.border?.radius?.bottomRight || BlockAttributes?.style?.border?.radius?.bottomLeft || '' ) );	
                    const buttonBlock = createBlock( 'uagb/buttons-child', {
                        label: BlockAttributes.text,
                        color: BlockAttributes?.style?.color?.text || colourNameToHex( BlockAttributes.textColor ),
                        background: BlockAttributes?.style?.color?.background || colourNameToHex( BlockAttributes.backgroundColor ) || '',
                        fontWeight: BlockAttributes?.style?.typography?.fontWeight || '',
						size:  getNumber( BlockAttributes?.style?.typography?.fontSize  || '#' ),
                        sizeType: getUnit( BlockAttributes?.style?.typography?.letterSpacing || '' ),
                        letterSpacing: getNumber( BlockAttributes?.style?.typography?.letterSpacing || '#' ),
						letterSpacingType: getUnit( BlockAttributes?.style?.typography?.letterSpacing || 'px' ),
                        decoration:  BlockAttributes?.style?.typography?.textDecoration || '',
						transform:  BlockAttributes?.style?.typography?.textTransform || '',
						lineHeight: getNumber( BlockAttributes?.style?.typography?.lineHeight || '#' ),
                        lineHeightType: 'em' ,
                        borderColor: BlockAttributes?.style?.border?.color || colourNameToHex( BlockAttributes?.borderColor || '' ) || BlockAttributes?.style?.border?.top?.color || colourNameToHex( BlockAttributes?.style?.border?.top?.color || '' ) ,
                        btnBorderTopWidth: getNumber( BlockAttributes?.style?.border?.width || BlockAttributes?.style?.border?.top?.width || '#' ),
                        btnBorderBottomWidth: getNumber( BlockAttributes?.style?.border?.width || BlockAttributes?.style?.border?.bottom?.width || '#' ),
                        btnBorderLeftWidth: getNumber( BlockAttributes?.style?.border?.width || BlockAttributes?.style?.border?.left?.width || '#' ),
                        btnBorderRightWidth: getNumber( BlockAttributes?.style?.border?.width || BlockAttributes?.style?.border?.right?.width || '#' ),
                        borderRadius: getNumber( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.topRight || '#' ) ),
                        leftMargin: getNumber(  BlockAttributes?.style?.spacing?.margin?.left || '#' ),
                        bottomMargin: getNumber(  BlockAttributes?.style?.spacing?.margin?.bottom || '#' ),
                        rightMargin: getNumber(   BlockAttributes?.style?.spacing?.margin?.right || '#' ),
                        topMargin: getNumber(  BlockAttributes?.style?.spacing?.margin?.top || '#' ),
                        marginType: getUnit( BlockAttributes?.style?.spacing?.margin?.top || '' ),
                        leftPadding: getNumber( BlockAttributes?.style?.spacing?.padding?.left || '#' ),
                        bottomPadding: getNumber( BlockAttributes?.style?.spacing?.padding?.bottom || '#' ),
                        rightPadding: getNumber( BlockAttributes?.style?.spacing?.padding?.right || '#' ),
                        topPadding: getNumber( BlockAttributes?.style?.spacing?.padding?.top || '#' ),
                        paddingUnit: getUnit( BlockAttributes?.style?.spacing?.padding?.top || '' ),
                        borderHColor: '',
                        borderStyle: BlockAttributes?.style?.border?.style || ( ( BlockAttributes?.style?.border?.width || BlockAttributes?.style?.border?.top?.width ) ? ( BlockAttributes?.style?.border?.top?.style || BlockAttributes?.style?.border?.style || 'solid' ) : 'none' ),
                        btnBorderBottomLeftRadius:getNumber( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.bottomLeft || '#' ) ),
                        btnBorderBottomRightRadius:  getNumber( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.bottomRight || '#' ) ),
                        btnBorderTopLeftRadius:getNumber( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.topLeft || '#' ) ),
                        btnBorderTopRightRadius:getNumber( ( typeof BlockAttributes?.style?.border?.radius !== 'object' && BlockAttributes?.style?.border?.radius ) || ( BlockAttributes?.style?.border?.radius?.topRight || '#' ) ),
                        btnBorderRadiusUnit: borderRadiusUnit ,
                        link: BlockAttributes?.url || '' ,
                        opensInNewTab: ( BlockAttributes?.linkTarget === '_blank' ) ? true : false,
                    } );
                    buttonsArray.push( buttonBlock );
                } );

                // Check if the current WordPress version is 6.7 or higher.
                const isAfterWP6Point7 = compareVersions( uagb_blocks_info.wp_version , '6.7', '>=' );
                // Define mapping for alignment options (left/center/right/stretch) to justify content mappings.
                const justifyMap = {
                    left: 'top',
                    center: 'center',
                    right: 'bottom',
                    stretch: 'top'
                };
                // Determine the layout orientation from attributes (could be 'horizontal' or 'vertical').
                const layoutType = _attributes?.layout?.orientation;
                // Determine the block gap (spacing) based on WP version and layout orientation.
                const gapBeforeWP6Point7 = convertToPixel( isAfterWP6Point7 ? '10px' : _attributes?.style?.spacing?.blockGap || '10px' );
                const gapAfterWP6Point7 = ( 'vertical' === layoutType ) ? convertToPixel( _attributes.style?.spacing?.blockGap?.top || '10px' ) : convertToPixel(  _attributes.style?.spacing?.blockGap?.left  || '10px' );
                // Determine the overall alignment setting.
                // If `hasWidthFull` is true, set to 'full'; otherwise, determine alignment based on `justifyContent`. 
                const overallAlign = hasWidthFull ? 'full' : ( justifyContent === 'space-between' && 'center' ) || justifyContent;
                // Map `justifyContent` to a vertical alignment option based on `justifyMap`.
                const verticalAlign   =  justifyMap[justifyContent];
                // Create and return a 'uagb/buttons' block with the configured properties.
                return createBlock( 'uagb/buttons', {
                        fontWeight: _attributes?.style?.typography?.fontWeight || '',
                        fontSize: getNumber( _attributes?.style?.typography?.fontSize || '#' ),
						fontLetterSpacing: getNumber( _attributes?.style?.typography?.letterSpacing || '#' ),
						fontDecoration: _attributes?.style?.typography?.textDecoration || '',
						fontTransform: _attributes?.style?.typography?.textTransform || '',
						lineHeight: getNumber( _attributes?.style?.typography?.lineHeight || '#' ),
                        lineHeightType : 'em',
                        // Apply overall alignment to all devices (desktop, tablet, mobile).
                        align: overallAlign,
                        alignTablet: overallAlign,
                        alignMobile: overallAlign,
                        // Set the gap between elements based on WP version.
                        gap: isAfterWP6Point7 ? gapAfterWP6Point7 : gapBeforeWP6Point7,
                        // Set stacking orientation for desktop if layout is vertical; otherwise, 'none'.
                        stack: ( 'vertical' === layoutType ) ? 'desktop' : 'none',
                        // Set vertical alignment only if layout is vertical.
                        verticalAlignment: ( 'vertical' === layoutType ) ? verticalAlign : ''
                }, buttonsArray );
            },
        },
    ],
  };

  export default transforms;

  