/**
 * Accept array of classes.
 *
 * @param  {...string} classes - Selectors to combine.
 * @return {string}    classes - The single-line selector string.
 *
 * @since x.x.x
 */

export const uagbClassNames = ( ...classes ) => {
    return classes.filter( Boolean ).join( ' ' )
}
