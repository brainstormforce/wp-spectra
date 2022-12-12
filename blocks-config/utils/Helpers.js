/**
 * Get Image Sizes and return an array of Size.
 *
 * @param {Object} sizes - The sizes object.
 * @return {Object} sizeArr - The sizeArr object.
 */

 export function getImageSize( sizes ) {
    const sizeArr = [];
    for( const size in sizes ){
        if( sizes.hasOwnProperty( size ) ){
         const p = { value: size, label: size };
         sizeArr.push( p );
        }
    }
    return sizeArr;
}

export function getIdFromString( label ){
	return label ? label.toLowerCase().replace( /[^a-zA-Z ]/g, '' ).replace( /\s+/g, '-' ) : '';
}
