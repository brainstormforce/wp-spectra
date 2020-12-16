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
		return 	<div className='uagb-post-grid-byline'>
					<span className='uagb-post__author'>
						<span className="dashicons-admin-users dashicons"></span>
						Author Name
					</span>

					<time className='uagb-post__date'>
						<span className="dashicons-calendar dashicons"></span>
						Post Date
					</time>
					<span className='uagb-post__comment' >
						<span className="dashicons-admin-comments dashicons"></span>
						Comments
					</span>
					<span className='uagb-post__taxonomy' >
						<span className="dashicons-tag dashicons"></span>
						Category
					</span>	
				</div>
	},
} )
