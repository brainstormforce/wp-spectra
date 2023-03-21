import generateCSSUnit from '@Controls/generateCSSUnit';

/**
 * Generate the Box Shadow or Text Shadow CSS.
 * 
 * For Text Shadow CSS:
 * { spread, type } should not be sent as params during the function call.
 * { spreadUnit } will have no effect.
 * 
 * For Box/Text Shadow Hover CSS:
 * { altColor } should be set as the attribute used for { color } in Box/Text Shadow Normal CSS.
 *
 * @param {Object} shadowProperties                       The object of properties used to generate the Box/Text Shadow CSS.
 * @param {number|undefined} shadowProperties.horizontal  The horizontal value.
 * @param {number|undefined} shadowProperties.vertical    The vertical value.
 * @param {number|undefined} shadowProperties.blur        The blur value.
 * @param {number|undefined} shadowProperties.spread      The spread value.
 * @param {string} shadowProperties.horizontalUnit        The horizontal unit, defaults to 'px'.
 * @param {string} shadowProperties.verticalUnit          The vertical unit, defaults to 'px'.
 * @param {string} shadowProperties.blurUnit              The blur unit, defaults to 'px'.
 * @param {string} shadowProperties.spreadUnit            The spread unit, defaults to 'px'.
 * @param {string|undefined} shadowProperties.color       The shadow color.
 * @param {string} shadowProperties.position              The inset/outset position.
 * @param {string} shadowProperties.altColor              An alternate color to use for hover if color is undefined.
 * @return {string}                                       The generated css, or empty string if required properties aren't set.
 *
 * @since x.x.x
 */
const generateShadowCSS = ( shadowProperties ) => {
	let {
		horizontal,
		vertical,
		blur,
		spread = undefined,
		horizontalUnit = 'px',
		verticalUnit = 'px',
		blurUnit = 'px',
		spreadUnit = 'px',
		color,
		position = 'outset',
		altColor = '',
	} = shadowProperties;

	// Although optional, color is required for Sarafi on PC. Return early if color isn't set.
	if ( ! color && ! altColor ) {
		return '';
	}

	// Get the CSS units for the required shadow properties.
	horizontal = generateCSSUnit( horizontal, horizontalUnit );
	vertical = generateCSSUnit( vertical, verticalUnit );

	// If both required properties don't exist, shaow won't be generated.
	if ( ! horizontal && ! vertical ) {
		return '';
	}

	// Get the CSS units for the optional shadow properties.
	blur = generateCSSUnit( blur, blurUnit );
	spread = generateCSSUnit( spread, spreadUnit );

	// Return the full CSS if blur is set, else return the required css.
	return blur ? (
		`${ horizontal ? horizontal : 0 } ${ vertical ? vertical : 0 } ${ blur }${ spread ? ` ${ spread }` : '' } ${ color ? color : altColor }${ ( 'outset' === position ) ? '' : ` ${ position }` }`
	) : (
		`${ horizontal ? horizontal : 0 } ${ vertical ? vertical : 0 } ${ color ? color : altColor }${ ( 'outset' === position ) ? '' : ` ${ position }` }`
	);
}

export default generateShadowCSS;