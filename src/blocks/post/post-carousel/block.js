/**
 * BLOCK: UAGb - post-carousel
 */

// Import block dependencies and components
import edit from "./edit"
import UAGB_Block_Icons from "../../uagb-controls/block-icons"

//  Import CSS.
import ".././style.scss"
import ".././editor.scss"

// Components
const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

// Register the block
registerBlockType( "uagb/post-carousel", {
	title: __( "UAGB - Post Carousel" ),
	description: __( "Add a carousel layout of customizable posts to your page." ),
	icon: UAGB_Block_Icons.post_carousel,
	category: "uagb",
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
