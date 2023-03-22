/**
 * Accept array of classes.
 *
 * @param {string} classes - List of classes.
 * @return {string} classes - Classes string.
 */

export const uagbClassNames = ( ...classes ) => {
    return classes.filter( Boolean ).join( ' ' )
}
