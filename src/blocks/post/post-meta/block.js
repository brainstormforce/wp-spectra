/**
 * BLOCK: UAGB - post-meta
 */

// Import block dependencies and components
import PostMeta from "./edit"
import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"

// Components
const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

// Register the block
registerBlockType( "uagb/post-meta", {
	title: uagb_blocks_info.blocks["uagb/post-meta"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-meta"]["description"],
	icon: UAGB_Block_Icons.post_grid,
	category: uagb_blocks_info.category,
	parent: [ "uagb/post-grid" ,"uagb/post-masonry" , "uagb/post-carousel" ],
	keywords: [
		__( "post" ),
		__( "meta" ),
		__( "uag" ),
	],
	PostMeta,
	example: {},
	// Render via PHP
	save() {
		return 'meta'
	},
} )
