import { blocksAttributes } from '@Controls/getBlocksDefaultAttributes';

// Parameters for these methods:
// currentValue - any variable/attribute that is altered by settings.
// key          - the key ouf the default attribute for that setting.
// blockName    - the name of the block.

const getAttributeFallback = ( currentValue, key, blockName ) => ( currentValue ? currentValue : blocksAttributes[blockName][key].default );

export const getFallbackNumber = ( currentValue, key, blockName ) => ( isNaN( currentValue ) ? blocksAttributes[blockName][key].default : currentValue );

export default getAttributeFallback;