/**
 * BLOCK: Post Button
 */

// Import block dependencies and components
import {PostButton} from "./edit"
import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"

// Components
const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

// Register the block
registerBlockType( "uagb/post-button", {
	title: uagb_blocks_info.blocks["uagb/post-button"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-button"]["description"],
	icon: UAGB_Block_Icons.post_grid,
	category: uagb_blocks_info.category,
	parent: [ "uagb/post-grid" , "uagb/post-masonry" , "uagb/post-carousel" ],
	keywords: [
		__( "post" ),
		__( "button" ),
		__( "uag" ),
	],
	PostButton,
	example: {},
	// Render via PHP
	save() {
		return 	<div className='uagb-post__cta components-button is-primary'>
					Read More
				</div>
	},
} )
