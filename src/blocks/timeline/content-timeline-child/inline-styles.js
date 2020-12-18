/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from "../../../../dist/blocks/uagb-controls/generateCSS"
 import generateCSSUnit from "../../../../dist/blocks/uagb-controls/generateCSSUnit"

function contentTimelineStyle( props ) {
	const {
		headSpace,
		headingColor,
		subHeadingColor,
		backgroundColor,
		bgPadding,
		borderRadius,
		block_id,
	} = props.attributes

	var resp_selectors = "left"

	var selectors = {
			" .uagb-timeline__heading" : {
				"color": headingColor,
			},
			" .uagb-timeline__heading a" : {
				"color": headingColor,
			},
			" .uagb-timeline__heading-text" : {
				"margin-bottom" : generateCSSUnit( headSpace, "px" ),
			},
			" .uagb-timeline-desc-content" : {
				"color": subHeadingColor,
			},
			" .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
				"border-right-color" : backgroundColor,
				"border-left-color" : backgroundColor,
			},
			" .uagb-timeline__day-left .uagb-timeline__arrow:after" : {
				"border-right-color" : backgroundColor,
				"border-left-color" : backgroundColor,
			},
			" .uagb-timeline__events-inner-new" : {
				"background-color" : backgroundColor,
				"border-radius" : generateCSSUnit( borderRadius, "px" ),
				"padding": generateCSSUnit( bgPadding, "px" ),
			},
		}

	var styling_css = ""
	
	var id = `article#uagb-timeline-child-${ props.clientId }`

	styling_css = generateCSS( selectors, id )
	
	return styling_css

}

export default contentTimelineStyle