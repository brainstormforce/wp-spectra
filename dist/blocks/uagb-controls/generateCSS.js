function generateCSS ( selectors, id, isResponsive = false, responsiveType = "" ) {

	var styling_css = ""
	var breakpoint = ""

	if ( responsiveType == "tablet" ) {
		breakpoint = uagb_blocks_info.tablet_breakpoint
	} else if ( responsiveType == "mobile" ) {
		breakpoint = uagb_blocks_info.mobile_breakpoint
	}

	if ( isResponsive ) {
		styling_css += "@media only screen and (max-width: " + breakpoint + "px) {"
	}

	for( var i in selectors ) {

		styling_css += id

		styling_css += i + " { "

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	if ( isResponsive ) {
		styling_css += " }"
	}

	return styling_css
}

export default generateCSS
