/**
 * Accept array of classes.
 *
 * @param  {Array}  classes Selectors to combine.
 * @return {string}         The single-line selector string.
 *
 * @since x.x.x
 */

export const uagbClassNames = ( classes ) => ( classes.filter( Boolean ).join( ' ' ) );
