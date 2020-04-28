/**
 * BLOCK: Price List
 */


import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import edit from "./edit"
import save from "./save"
import deprecated from "./deprecated"
import attributes from "./attributes"
import "./style.scss"
import "./editor.scss"

const { __ } = wp.i18n

const {
	registerBlockType,
} = wp.blocks

registerBlockType( "uagb/restaurant-menu", {

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: uagb_blocks_info.blocks["uagb/restaurant-menu"]["title"], // Block title.
	description:uagb_blocks_info.blocks["uagb/restaurant-menu"]["description"], // Block description.
	icon: UAGB_Block_Icons.restaurant_menu, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [
		__( "pricelist" ),
		__( "menu" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	deprecated,
} )
