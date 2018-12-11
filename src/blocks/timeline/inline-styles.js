/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function contentTimelineStyle( props ) {
	const {
		dateBottomspace,
		backgroundColor,
		separatorColor,
		separatorFillColor,
		separatorBg,
		separatorBorder,
		borderFocus,
		verticalSpace,
		horizontalSpace,
		separatorwidth,
		borderwidth,
		connectorBgsize,
		borderRadius,
		bgPadding,
		width,
		readMoreText,
		icon,
		iconColor,
		dateFontsize,
		dateColor,
		iconSize,
		iconFocus,
		iconBgFocus,
		block_id,
		headFontSize,
		align,
		headingColor,
		headSpace,
		subHeadFontSize,
		subHeadingColor,
	} = props.attributes

	if( props.clientId ){
		var clientId = props.clientId
	}else{
		var clientId = block_id
	}

	var selectors = {}

	selectors[".uagb-timeline__heading"] = {
		"font-size" : headFontSize+"px",
		"text-align": align,
		"color": headingColor,
	}

	selectors[".uagb-timeline__heading a"] = {
		"font-size" : headFontSize+"px",
		"text-align": align,
		"color": headingColor,
	}

	selectors[".uagb-timeline__heading-text"] = {
		"margin-bottom" : headSpace+"px",
	}

	selectors[".uagb-timeline-desc-content"] = {
		"font-size" : subHeadFontSize+"px",
		"text-align": align,
		"color": subHeadingColor,
	}
	selectors[".uagb-timeline__events-new"] = {
		"text-align": align,
	}
	selectors[".uagb-timeline__date-inner"] = {
		"text-align": align,
	}

	selectors[".uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after"] = {
		"border-left-color" : backgroundColor,
	}

	selectors[".uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after"] = {
		"border-left-color" : backgroundColor
	}

	selectors[".uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after"] = {
		"border-right-color" : backgroundColor
	}

	selectors[".uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after"] = {
		"border-right-color" : backgroundColor
	}

	selectors[".uagb-timeline__line__inner"] = {
		"background-color" : separatorFillColor
	}

	selectors[".uagb-timeline__line"] = {
		"background-color" : separatorColor,
		"width" : separatorwidth+"px",
	}

	selectors[".uagb-timeline__right-block .uagb-timeline__line"] = {
		"right" : "calc( "+connectorBgsize+"px / 2 )",
	}

	selectors[".uagb-timeline__left-block .uagb-timeline__line"] = {
		"left" : "calc( "+connectorBgsize+"px / 2 )",
	}

	selectors[".uagb-timeline__center-block .uagb-timeline__line"] = {
		"right" : "calc( "+connectorBgsize+"px / 2 )",
	}

	selectors[".uagb-timeline__marker"] = {
		"background-color" : separatorBg,
		"min-height": connectorBgsize+"px",
		"min-width" : connectorBgsize+"px",
		"line-height" : connectorBgsize+"px",
		"border": borderwidth+"px solid"+separatorBorder,
	}

	selectors[".uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow"] = {
		"height" : connectorBgsize+"px",
	}

	selectors[".uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow"] = {
		"height" : connectorBgsize+"px",
	}

	selectors[".uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow"] = {
		"height" : connectorBgsize+"px",
	}

	selectors[".uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow"] = {
		"height" : connectorBgsize+"px",
	}

	selectors[".uagb-timeline__center-block .uagb-timeline__marker"] = {
		"margin-left" : horizontalSpace+"px",
		"margin-right": horizontalSpace+"px",
	}

	selectors[".uagb-timeline__field:not(:last-child)"] = {
		"margin-bottom" : verticalSpace+"px",
	}

	selectors[".uagb-timeline__date-hide.uagb-timeline__date-inner"] = {
		"margin-bottom" : dateBottomspace+"px",
		"color": dateColor,
		"font-size" : dateFontsize+"px",
		"text-align": align,
	}

	selectors[".uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left"] = {
		"margin-left" : horizontalSpace+"px",
	}

	selectors[".uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right"] = {
		"margin-right" : horizontalSpace+"px",
	}

	selectors[".uagb-timeline__date-new"] = {
		"color": dateColor,
		"font-size" : dateFontsize+"px",
	}

	selectors[".uagb-timeline__events-inner-new"] = {
		"background-color" : backgroundColor,
		"border-radius" : borderRadius+"px",
		"padding": bgPadding+"px",
	}

	selectors[".uagb-timeline__main .uagb-timeline__icon-new"] = {
		"color": iconColor,
		"font-size" : iconSize+"px",
	}

	selectors[".uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon"] = {
		"background" : iconBgFocus,
		"border-color": borderFocus,
	}

	selectors[".uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new"] = {
		"color": iconFocus,
	}

	/* Generate Responsive CSS for timeline */
	var response_selector = {}
	response_selector[".uagb-timeline__center-block .uagb-timeline__marker"] = {
		"margin-left" : "0px",
		"margin-right" : "0px",
	}

	response_selector[".uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left"] = {
		"margin-left" : horizontalSpace+"px",
	}
	response_selector[".uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right"] = {
		"margin-left" : horizontalSpace+"px",
	}

	var styling_css = ""

	for( var i in selectors ) {

		styling_css += ".block-editor-page #wpwrap #uagb-ctm-"+clientId+" "+i + " { "

		var sel = selectors[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}

	// Responsive css.
	styling_css += "@media(max-width:768px){"
	for( var i in response_selector ) {


		styling_css += ".block-editor-page #wpwrap #uagb-ctm-"+clientId+" "+i + " { "

		var sel = response_selector[i]
		var css = ""

		for( var j in sel ) {

			css += j + ": " + sel[j] + ";"
		}

		styling_css += css + " } "
	}
	styling_css += "}"

	return styling_css

}

export default contentTimelineStyle
