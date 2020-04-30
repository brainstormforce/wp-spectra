/**
 * BLOCK: How-To Child
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
// import save from "./save"
import "./style.scss"
import "./editor.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

console.log(attributes)

registerBlockType( "uagb/how-to-tools-child", {
	title: uagb_blocks_info.blocks["uagb/how-to-tools-child"]["title"],
	description: uagb_blocks_info.blocks["uagb/how-to-tools-child"]["description"],
	icon: UAGB_Block_Icons.social_share_child,
	category: uagb_blocks_info.category,
	parent: [ "uagb/how-to" ],
	keywords: [
		__( "how to" ),
		__( "schema" ),
		__( "uag" ),
	],
	attributes,
	edit,
	// save,
} )
