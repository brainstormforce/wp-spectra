/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */
function TypographyOptionsClasses( props ) {
	return [
		props.attributes.fontFamily ? 'has-font-family' : null,
		props.attributes.fontSize 	? 'has-font-size' 	: null,
		props.attributes.fontWeight ? 'has-font-weight' : null,
		props.attributes.Lineheight ? 'has-line-height' : null,
	];
}

export default TypographyOptionsClasses;
