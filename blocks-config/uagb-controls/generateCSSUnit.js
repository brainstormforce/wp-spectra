function generateCSSUnit ( value, unit ) {

	var css = ""

	if( typeof value != "undefined" ) {
		css += value + unit
	}
	
	return css
}

export default generateCSSUnit
