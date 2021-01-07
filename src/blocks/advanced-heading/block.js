/**
 * BLOCK: Advanced Heading
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import deprecated from "./deprecated"
import transform from "./transform"
import "./style.scss"

const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/advanced-heading", {

	title: uagb_blocks_info.blocks["uagb/advanced-heading"]["title"],
	description: uagb_blocks_info.blocks["uagb/advanced-heading"]["description"],
	icon: UAGB_Block_Icons.advanced_heading,
	keywords: [
		__( "advanced heading", 'ultimate-addons-for-gutenberg' ),
		__( "uag", 'ultimate-addons-for-gutenberg' ),
		__( "heading", 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	example: {
		attributes: {
			headingTitle: __( 'Write a Heading', 'ultimate-addons-for-gutenberg' ),
			headingDesc: __( 'Write a Description', 'ultimate-addons-for-gutenberg' ),
		},
	},
	category: uagb_blocks_info.category,
	attributes,
	transform,
	edit,
	save,
	deprecated,
} )