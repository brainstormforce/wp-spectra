import { blocksAttributes } from '@Attributes/getBlocksDefaultAttributes';

// Parameters for these methods:
// currentValue - The variable/attribute that is altered by settings.
// key          - The key of the default attribute for that setting.
// blockName    - The name of the block.

const allBlocksAttributes = wp.hooks.applyFilters( 'uagb.blocksAttributes', blocksAttributes );

const getAttributeFallback = ( currentValue, key, blockName ) => ( currentValue ? currentValue : allBlocksAttributes[blockName][key].default );

export const getFallbackNumber = ( currentValue, key, blockName ) => ( isNaN( currentValue ) ? allBlocksAttributes[blockName][key].default : currentValue );

export default getAttributeFallback;
