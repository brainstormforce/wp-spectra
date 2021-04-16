function generateCSS ( selectors, id, isResponsive = false, responsiveType = "" ) {

	var gen_styling_css  = ""


	for( var i in selectors ) {

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {
			
			var checkString = true
			
			if( typeof sel[j] === "string" && sel[j].length === 0 ) {
				checkString = false
			}

			if ( 'font-family' === j && typeof sel[j] != "undefined" && 'Default' === sel[j] ) {
				continue;
			}

			if( typeof sel[j] != "undefined" && checkString ) {
				if ( 'font-family' === j ) {
					css += j + ": " + "'" + sel[j] + "'" + ";"
				} else {
					css += j + ": " + sel[j] + ";"
				}
			}
		}

		if( css.length !== 0 ) {
			gen_styling_css += id
			gen_styling_css += i + "{"
			gen_styling_css += css
			gen_styling_css += "}"
		}
	}

	return gen_styling_css

}

export default generateCSS
