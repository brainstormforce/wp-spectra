/**
 * BLOCK: UAGB - post-masonry
 */

// Import block dependencies and components
import edit from "./edit"

//  Import CSS.
import ".././style.scss"
import ".././editor.scss"

// Components
const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

export const name = "core/latest-posts"

// Register the block
registerBlockType( "uagb/post-masonry", {
	title: __( "UAGB - Post Masonry" ),
	description: __( "Add a masonry layout of customizable posts to your page." ),
	icon: "grid-view",
	category: "formatting",
	keywords: [
		__( "post" ),
		__( "masonry" ),
		__( "uagb" ),
	],
	edit,
	// Render via PHP
	save() {
		return null
	},
} )
