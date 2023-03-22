/**
 * Accept array of classes.
 *
 * @param {string} classes - List of classes.
 * @return {string} classes - Classes string.
 *
 * @since x.x.x
 */

export const uagbClassNames = ( ...classes ) => {
    return classes.filter( Boolean ).join( ' ' )
}
