/**
 * BLOCK: UAGB - post-grid
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
registerBlockType( "uagb/post-grid", {
	title: __( "UAGB - Post Grid" ),
	description: __( "Add a grid of customizable posts to your page." ),
	icon: UAGB_Block_Icons.post_grid,
	category: "uagb",
	keywords: [
		__( "post" ),
		__( "grid" ),
		__( "uagb" ),
	],
	edit,
	// Render via PHP
	save() {
		return null
	},
} )
