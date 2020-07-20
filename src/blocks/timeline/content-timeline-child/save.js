/**
 * BLOCK: Testimonial - Save Block
 */

import classnames from "classnames"
import contentTimelineStyle from ".././inline-styles"
import ContentTmClasses from ".././classes"
import AlignClass from ".././align-classes"
import DayAlignClass from ".././day-align-classes"
import renderSVG from "../../../../dist/blocks/uagb-controls/renderIcon"

const { dateI18n, __experimentalGetSettings } = wp.date

const {
	RichTexts
} = wp.blockEditor

const { Fragment } = wp.element

export default function save( props ) {
	const {
		block_id,
		headingTag,
		timelinAlignment,
		displayPostDate,
		icon,
		tm_content,
		t_date,
		date_icon,
		stack,
		timelineItem,
		dateFormat
	} = props.attributes

	/* Style for elements */
	var front_style = contentTimelineStyle( props )

	const hasItems = Array.isArray( tm_content ) && tm_content.length

	var content_align_class = AlignClass( props.attributes, 0 ) // Get classname for layout alignment
	var day_align_class     = DayAlignClass( props.attributes, 0 ) //

	var display_inner_date = false

	console.log("child save.js")

		return (
			<div  className={ classnames(
				props.className,
				"uagb-timeline__outer-wrap",
				`uagb-block-${block_id}`
			) }>
				<div  className = { classnames(
					"uagb-timeline__content-wrap",
					...ContentTmClasses( props.attributes ),
				) }>
					<div className = "uagb-timeline-wrapper">
						<div className = "uagb-timeline__main">
							<div className = "uagb-timeline__days">
								
							</div>
							<div className = "uagb-timeline__line" >
								<div className = "uagb-timeline__line__inner"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
