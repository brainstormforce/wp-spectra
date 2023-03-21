import generateCSSUnit from '@Controls/generateCSSUnit';

/**
 * Generate the Box Shadow CSS.
 *
 * @param {number|undefined} horizontal  The horizontal value.
 * @param {number|undefined} vertical    The vertical value.
 * @param {number|undefined} blur        The blur value.
 * @param {number|undefined} spread      The spread value.
 * @param {string|undefined} color       The shadow color.
 * @param {string} type                  The inset/outset type.
 * @param {string} altColor              An alternate color to use for hover if color is undefined.
 * @return {string}                      The generated css, or empty string if required properties aren't set.
 *
 * @since x.x.x
 */
const generateBoxShadowCSS = ( horizontal, vertical, blur, spread, color, type, altColor = '' ) => {
	// Although optional, color is required for Sarafi on PC. Return early if color isn't set.
	if ( ! color && ! altColor ) {
		return '';
	}

	// Get the CSS units for the required shadow properties.
	horizontal = generateCSSUnit( horizontal, 'px' );
	vertical = generateCSSUnit( vertical, 'px' );

	// If both required properties don't exist, shaow won't be generated.
	if ( ! horizontal && ! vertical ) {
		return '';
	}

	// Get the CSS units for the optional shadow properties.
	blur = generateCSSUnit( blur, 'px' );
	spread = generateCSSUnit( spread, 'px' );

	// Return the full CSS if blur is set, else return the required css.
	return blur ? (
		`${ horizontal ? horizontal : 0 } ${ vertical ? vertical : 0 } ${ blur }${ spread ? ` ${ spread }` : '' } ${ color ? color : altColor }${ ( 'outset' === type ) ? '' : ` ${ type }` }`
	) : (
		`${ horizontal ? horizontal : 0 } ${ vertical ? vertical : 0 } ${ color ? color : altColor }${ ( 'outset' === type ) ? '' : ` ${ type }` }`
	);
}

export default generateBoxShadowCSS;