function generateCSSUnit( value, unit ) {
	if( isNaN( value ) || value === '' ){
		return '';
	}

	return value + unit;
}

export const generateCSSUnitType = ( unit, defaultUnit = 'px' ) => (
	( null !== unit && undefined !== unit ) ? unit : defaultUnit
  );

export default generateCSSUnit;

