/**
 * Get Image Sizes and return an array of Size.
 *
 * @param {Object} sizes - The sizes object.
 * @return {Object} sizeArr - The sizeArr object.
 */

export function getImageSize( sizes ) {
	const sizeArr = [];
	for ( const size in sizes ) {
		if ( sizes.hasOwnProperty( size ) ) {
			const p = { value: size, label: size };
			sizeArr.push( p );
		}
	}
	return sizeArr;
}

export function getIdFromString( label ) {
	return label
		? label
				.toLowerCase()
				.replace( /[^a-zA-Z ]/g, '' )
				.replace( /\s+/g, '-' )
		: '';
}

export function getPanelIdFromRef( ref ) {
	if ( ref.current ) {
		const parentElement = ref.current.parentElement.closest( '.components-panel__body' );
		if ( parentElement && parentElement.querySelector( '.components-panel__body-title' ) ) {
			return getIdFromString( parentElement.querySelector( '.components-panel__body-title' ).textContent );
		}
	}
	return null;
}

export const uagbClassNames = ( classes ) => ( classes.filter( Boolean ).join( ' ' ) );

/**
 * Check if object is empty.
 * 
 * @param {Object} obj - The object.
 * @return {boolean} - The result.
 */
export const isEmptyObject = ( obj ) => Object.keys( obj ).length === 0 && obj.constructor === Object;

/**
 * This variable is used as a placeholder kind of value which is used to identify the attribute is a GBS style attribute.
 */
export const GBS_RANDOM_NUMBER = 0.001020304;

/**
 * A function to check if an object is not empty.
 *
 * @function
 *
 * @param {Object} obj - The object to check.
 *
 * @return {boolean} Returns true if the object is not empty, otherwise returns false.
 */
export const isObjectNotEmpty = ( obj ) => {
	return (
		obj &&
		Object.keys( obj ).length > 0 &&
		Object.getPrototypeOf( obj ) === Object.prototype
	);
}

export const uagbDeepClone = ( arrayOrObject ) => JSON.parse( JSON.stringify( arrayOrObject ) );

export const updateUAGDay = ( UAGDay, value ) => {
	const filteredArray = UAGDay.filter( ( i ) => i !== value );
	return filteredArray?.length > 0 ? filteredArray : undefined;
};
