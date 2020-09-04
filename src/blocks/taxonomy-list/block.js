/**
 * BLOCK: UAGB - Taxonomy List
 */

// Import block dependencies and components
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

//  Import CSS.
import "./style.scss"
import "./editor.scss"
import edit from "./edit"
import  "./editor.scss"
import  "./style.scss"
import attributes from "./attributes"

// Components
const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

// Register the block
registerBlockType( "uagb/taxonomy-list", {
	title: uagb_blocks_info.blocks["uagb/taxonomy-list"]["title"],
	description: uagb_blocks_info.blocks["uagb/taxonomy-list"]["description"],
	icon: UAGB_Block_Icons.post_grid,
	category: uagb_blocks_info.category,
	attributes,
	keywords: [
		__( "post" ),
		__( "taxonomy" ),
		__( "uag" ),
	],
	edit,
	// Render via PHP
	save() {
		return null
	},
} )
