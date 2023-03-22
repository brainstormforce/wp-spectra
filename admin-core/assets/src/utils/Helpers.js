/**
 * Accept array of classes.
 *
 * @since x.x.x
 *
 * @param {string} classes - List of classes.
 * @return {string} classes - Classes string.
 */

export const uagbClassNames = ( ...classes ) => {
    return classes.filter( Boolean ).join( ' ' )
}
