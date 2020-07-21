/**
 * Returns Dynamic Generated CSS
 */

 // import generateCSS from "../../../dist/blocks/uagb-controls/generateCSS"

function contentTimelineStyle( props ) {
	const {
		headingColor,
		subHeadingColor,
		backgroundColor,
		authorColor,
		ctaColor,
		ctaBackground,
	} = props.attributes

	console.log("Child style"+props.clientId)

	var resp_selectors = "left"

	var selectors = {
		" .uagb-timeline__heading" : {
			"color": headingColor,
		},
		" .uagb-timeline__heading a" : {
			"color": headingColor,
		},
		" .uagb-timeline__heading-text" : {
			
		},
		" .uagb-timeline-desc-content" : {
			
			"color": subHeadingColor,
		},
		" .uagb-timeline__events-new" : {
			
		},
		" .uagb-timeline__date-inner" : {
			
		},
		" .uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
			"border-left-color" : backgroundColor,
		},
		" .uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after" : {
			"border-left-color" : backgroundColor,
		},
		" .uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after" : {
			"border-right-color" : backgroundColor,
		},
		" .uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after" : {
			"border-right-color" : backgroundColor,
		},
		" .uagb-timeline__line__inner" : {
			
		},
		" .uagb-timeline__line" : {
			
		},
		" .uagb-timeline__right-block .uagb-timeline__line" : {
			
		},
		" .uagb-timeline__left-block .uagb-timeline__line" : {
			
		},
		" .uagb-timeline__center-block .uagb-timeline__line" : {
			
		},
		" .uagb-timeline__marker" : {
			
			
		},
		" .uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow" : {
			
		},
		" .uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow" : {
			
		},
		" .uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow" : {
			
		},
		" .uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow" : {
			
		},
		" .uagb-timeline__center-block .uagb-timeline__marker" : {
			
		},
		" .uagb-timeline__field:not(:last-child)" : {
			
		},
		" .uagb-timeline__date-hide.uagb-timeline__date-inner" : {
			
			
		},
		" .uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left" : {
			
		},
		" .uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right" : {
			
		},
		" .uagb-timeline__date-new" : {
			
		},
		" .uagb-timeline__events-inner-new" : {
			"background-color" : backgroundColor,
			
		},
		" .uagb-timeline__main .uagb-timeline__icon-new" : {
			
			
		},
		" .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon" : {
			
		},
		" .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new" : {
			
		},
		" .uagb-timeline__main .uagb-timeline__icon-new svg" : {
			
		},
		" .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new svg" : {
			
		},

		//Author and CTA
		" .uagb-timeline__author" : {
			
		},
		" .uagb-timeline__author .dashicons-admin-users" : {
			
			"color": authorColor,
		},
		" .uagb-timeline__author-link" :{
			
			"color": authorColor,
		},

		" .uagb-timeline__link_parent" :{
			
		},
		" .uagb-timeline__link" :{
			
			"color": ctaColor,
			"background-color": ctaBackground,
		}
	}

	/* Generate Responsive CSS for timeline */
	var tablet_selectors = {
		
	}

	var mobile_selectors = {
		
	}

	var styling_css = ""
	var id = `.block-editor-page #wpwrap .uagb-block-${ props.clientId }`



	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, id, true, "tablet" )

	styling_css += generateCSS( mobile_selectors, id, true, "mobile" )

	return styling_css

}

export default contentTimelineStyle