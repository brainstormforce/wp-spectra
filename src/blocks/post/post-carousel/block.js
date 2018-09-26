/**
 * BLOCK: UAGb - post-carousel
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
registerBlockType( "uagb/post-carousel", {
	title: __( "UAGB - Post Carousel" ),
	description: __( "Add a carousel layout of customizable posts to your page." ),
	icon: "grid-view",
	category: "formatting",
	keywords: [
		__( "post" ),
		__( "carousel" ),
		__( "uagb" ),
	],
	edit,
	// Render via PHP
	save() {
		return null
	},
} )
