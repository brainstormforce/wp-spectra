function generateCSSUnit( value, unit ) {
	if ( isNaN( value ) || value === '' ) {
		return '';
	}

	return value + unit;
}

export default generateCSSUnit;
