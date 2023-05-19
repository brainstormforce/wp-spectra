/**
 * Accept array of classes.
 *
 * @param  {Array}  classes Selectors to combine.
 * @return {string}         The single-line selector string.
 *
 * @since 2.6.0
 */

export const uagbClassNames = ( classes ) => ( classes.filter( Boolean ).join( ' ' ) );
