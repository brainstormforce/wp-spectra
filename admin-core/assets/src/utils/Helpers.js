/**
 * Convert array of classes into a single string.
 *
 * @param  {Array}  classes Selectors to combine.
 * @return {string}         The single-line selector string.
 *
 * @since 2.6.0
 */
export const uagbClassNames = ( classes ) => ( classes.filter( Boolean ).join( ' ' ) );

/**
 * Format a number to add commas as thousand separators.
 *
 * @param  {number} number The number to format.
 * @return {string}        The number with commas at every thousand.
 *
 * @since x.x.x
 */
export const displayInThousands = ( number ) => ( number.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) );
