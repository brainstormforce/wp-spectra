/**
 * BLOCK: How-To Schema
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./style.scss"
import "./editor.scss"
import deprecated from "./deprecated"

const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/how-to", {
	title: uagb_blocks_info.blocks["uagb/how-to"]["title"],
	description: uagb_blocks_info.blocks["uagb/how-to"]["description"],
	icon: UAGB_Block_Icons.how_to,
	category: uagb_blocks_info.category,
	keywords: [
		__( "how to" ),
		__( "schema" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	example: {},
	attributes,
	edit,
	save,
	deprecated
} )
