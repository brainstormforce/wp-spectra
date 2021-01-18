/**
 * BLOCK: Social Share
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import "./style.scss"
import "./editor.scss"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"

const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/tabs-child", {
	title: uagb_blocks_info.blocks["uagb/tabs-child"]["title"],
	description: uagb_blocks_info.blocks["uagb/tabs-child"]["description"],
	parent: [ "uagb/tabs" ],
	icon: UAGB_Block_Icons.tabs,
	category: uagb_blocks_info.category,
	keywords: [
		__( "tabs" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit,
	save
} )
