import { blocksAttributes } from '@Controls/getBlocksDefaultAttributes';

const getAttributeFallback = ( attr, defaultAttr ) => ( attr ? attr : defaultAttr.default );

export const getFallbackNumber = ( attr, defaultAttr ) => ( isNaN( attr ) ? defaultAttr.default : attr );

export const getFallbackNumberV2 = ( key, blockName, $attr ) => (
    isNaN( $attr[key] ) ? blocksAttributes[blockName][key].default : $attr[key]
);

export const getFallbackNumberV3 = ( currentValue, key, blockName ) => (
    isNaN( currentValue ) ? blocksAttributes[blockName][key].default : currentValue
);

export default getAttributeFallback;