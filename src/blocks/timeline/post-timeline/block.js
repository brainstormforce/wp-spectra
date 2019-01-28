/**
 * BLOCK: Post Timeline Js.
 */
import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"
import ".././style.scss"
import ".././editor.scss"
import edit from "./edit"

// Components.
const { __ } = wp.i18n

// Register block controls.
const {
	registerBlockType,
} = wp.blocks

export const name = "core/latest-posts"

// Register the block.
registerBlockType( "uagb/post-timeline", {
	title: uagb_blocks_info.blocks["uagb/post-timeline"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-timeline"]["description"],
	icon: UAGB_Block_Icons.post_timeline,
	category: uagb_blocks_info.category,
	keywords: [
		__( "post" ),
		__( "timeline" ),
		__( "uag" ),
	],

	getEditWrapperProps( attributes ) {
		const { align } = attributes

	},

	edit,

	// Render via PHP
	save() {
		return null
	},

} )
