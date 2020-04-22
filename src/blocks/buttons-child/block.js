/**
 * BLOCK: Buttons - Child
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import "./style.scss"
import "./editor.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/buttons-child", {
	title: uagb_blocks_info.blocks["uagb/buttons-child"]["title"],
	description: uagb_blocks_info.blocks["uagb/buttons-child"]["description"],
	icon: UAGB_Block_Icons.buttons_child,
	category: uagb_blocks_info.category,
	parent: [ "uagb/buttons" ],
	attributes,
	edit,
	save,
} )