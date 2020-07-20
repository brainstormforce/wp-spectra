/**
 * BLOCK: Content Timeline Child
 */

 import classnames from "classnames"
 import times from "lodash/times"
 import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"
 //  Import CSS.
 import ".././style.scss"
 // import deprecated from "./deprecated"
 import save from "./save"
 import attributes from "./attributes"
 import edit from "./edit"
 import contentTimelineStyle from ".././inline-styles"
 import ContentTmClasses from ".././classes"
 import AlignClass from ".././align-classes"
 import DayAlignClass from ".././day-align-classes"
 const { dateI18n, __experimentalGetSettings } = wp.date
 import renderSVG from "../../../../dist/blocks/uagb-controls/renderIcon"



const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/content-timeline-child", {
	title: uagb_blocks_info.blocks["uagb/content-timeline-child"]["title"],
	description: uagb_blocks_info.blocks["uagb/content-timeline-child"]["description"],
	icon: UAGB_Block_Icons.content_timeline,
	category: uagb_blocks_info.category,
	parent: [ "uagb/content-timeline" ],
	keywords: [
		__( "Content Timeline" ),
		__( "Timeline" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save,
} )