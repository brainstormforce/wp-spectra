/**
 * Returns the class names.
 *
 * @param {...string} classes The class names.
 *
 * @return {string} Returns the class names.
 */
export const classNames = ( ...classes ) => classes.filter( Boolean ).join( ' ' );
