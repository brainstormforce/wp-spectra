function styling( props ) {

	const {
		align,
		className,
		btn_count,
		buttons,
		gap,
		stack
	} = props.attributes

	var selectors = {}
	var tablet_selectors = {}
	var mobile_selectors = {}

	buttons.map( ( button, index ) => {

		if ( btn_count <= index ) {
			return
		}

		selectors[" .uagb-buttons-repeater-" + index] = {
			"font-size" : button.size + "px",
			"border-width": button.borderWidth + "px",
			"border-style": button.borderStyle,
			"border-color": button.borderColor,
			"border-radius" : button.borderRadius + "px",
			"background": button.background
		}

		selectors[" .uagb-buttons-repeater-" + index + ":hover"] = {
			"background": button.hBackground,
			"border-width": button.borderWidth + "px",
			"border-style": button.borderStyle,
			"border-color": button.borderHColor,
		}

		selectors[" .uagb-buttons-repeater-" + index + " a.uagb-button__link"] = {
			"padding" : button.vPadding + "px " + button.hPadding + "px",
			"color": button.color
		}

		selectors[" .uagb-buttons-repeater-" + index + ":hover a.uagb-button__link"] = {
			"color": button.hColor
		}

		selectors[" .uagb-buttons-repeater-" + index + " .uagb-button__link"] = {
			"padding" : button.vPadding + "px " + button.hPadding + "px",
			"color": button.color
		}

		selectors[" .uagb-buttons-repeater-" + index + ":hover .uagb-button__link"] = {
			"color": button.hColor
		}

	})

	selectors[" .uagb-button__wrapper"] = {
		"margin-left" : ( gap/2 ) + "px",
		"margin-right" : ( gap/2 ) + "px"
	}

	selectors[" .uagb-button__wrapper:first-child"] = {
		"margin-left" : 0
	}

	selectors[" .uagb-button__wrapper:last-child"] = {
		"margin-right" : 0
	}

	var alignment = ( align == "left" ) ? "flex-start" : ( ( align == "right" ) ? "flex-end" : "center" )

	selectors[" .uagb-buttons__wrap"] = {
		"justify-content" : alignment,
		"-webkit-box-pack": alignment,
		"-ms-flex-pack": alignment,
		"justify-content": alignment,
	}

	if ( "desktop" == stack ) {

		selectors[" .uagb-button__wrapper"] = {
			"margin-left" : 0,
			"margin-right" : 0,
			"margin-bottom" : gap + "px"
		}

		selectors[" .uagb-buttons__wrap"] = {
			 "flex-direction": "column"
		}

		selectors[" .uagb-button__wrapper:last-child"] = {
			"margin-bottom" : 0
		}

	} else if ( "tablet" == stack ) {

		tablet_selectors[" .uagb-button__wrapper"] = {
			"margin-left" : 0,
			"margin-right" : 0,
			"margin-bottom" : gap + "px"
		}

		tablet_selectors[" .uagb-buttons__wrap"] = {
			"flex-direction": "column"
		}

		tablet_selectors[" .uagb-button__wrapper:last-child"] = {
			"margin-bottom" : 0
		}

	} else if ( "mobile" == stack ) {

		mobile_selectors[" .uagb-button__wrapper"] = {
			"margin-left" : 0,
			"margin-right" : 0,
			"margin-bottom" : gap + "px"
		}

		mobile_selectors[" .uagb-buttons__wrap"] = {
			"flex-direction": "column"
		}

		mobile_selectors[" .uagb-button__wrapper:last-child"] = {
			"margin-bottom" : 0
		}
	}

	var styling_css = ""
	var id = `#uagb-buttons-${ props.clientId }`

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

	styling_css += "@media only screen and (max-width: 976px) {"

	for( var i in tablet_selectors ) {

		styling_css += id

		styling_css += i + " { "

		var sel = tablet_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += " }"

	styling_css += "@media only screen and (max-width: 767px) {"

	for( var i in mobile_selectors ) {

		styling_css += id

		styling_css += i + " { "

		var sel = mobile_selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	styling_css += " }"

	return styling_css
}

export default styling
