/**
 * Register: as Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
import classnames from "classnames"
import times from "lodash/times"
import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"
//  Import CSS.
import ".././style.scss"
import deprecated from "./deprecated"
import save from "./save"
import attributes from "./attributes"
import edit from "./edit"
import contentTimelineStyle from ".././inline-styles"
import ContentTmClasses from ".././classes"
import AlignClass from ".././align-classes"
import DayAlignClass from ".././day-align-classes"
const { dateI18n, __experimentalGetSettings } = wp.date
import renderSVG from "../../../../dist/blocks/uagb-controls/renderIcon"

// Components
const { __ } = wp.i18n

// Register block controls
const {
	registerBlockType
} = wp.blocks

const {
	RichText
} = wp.blockEditor

registerBlockType( "uagb/content-timeline", {

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title:uagb_blocks_info.blocks["uagb/content-timeline"]["title"], // Block title.
	description: uagb_blocks_info.blocks["uagb/content-timeline"]["description"], // Block description.
	icon: UAGB_Block_Icons.content_timeline, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: uagb_blocks_info.category,
	keywords: [
		__( "Content Timeline" ),
		__( "Timeline" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit,
	save,
	deprecated,
} )
