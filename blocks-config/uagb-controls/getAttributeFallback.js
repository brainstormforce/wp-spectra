const getAttributeFallback = ( attr, defaultAttr ) => ( attr ? attr : defaultAttr.default );

export const getFallbackNumber = ( attr, defaultAttr ) => ( isNaN( attr ) ? defaultAttr.default : attr );

export default getAttributeFallback;