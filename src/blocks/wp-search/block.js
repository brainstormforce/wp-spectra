/**
 * BLOCK: WP-Search
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import edit from "./edit"
import save from "./save"
import attributes from "./attributes"
import "./editor.scss"
import "./style.scss"

const { __ } = wp.i18n

const {
	registerBlockType,
} = wp.blocks

registerBlockType( "uagb/wp-search", {
	title: uagb_blocks_info.blocks["uagb/wp-search"]["title"],
	description: uagb_blocks_info.blocks["uagb/wp-search"]["description"],
	icon: UAGB_Block_Icons.team,
	keywords: [
		__( "search" ),
		__( "wp" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
} )
