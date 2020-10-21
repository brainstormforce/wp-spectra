/**
 * BLOCK: Lottie
 */

import "./style.scss"
import "./editor.scss"
import save from "./save"
import edit from "./edit"
import attributes from "./attributes"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

const { __ } = wp.i18n

const {
	registerBlockType,
} = wp.blocks

registerBlockType( "uagb/lottie", {
	title: uagb_blocks_info.blocks["uagb/lottie"]["title"],
	description: uagb_blocks_info.blocks["uagb/lottie"]["description"],
	icon: UAGB_Block_Icons.wp_search,
	keywords: [
		__( "lottie" ),
		__( "animation" ),
		__( "uag" ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
} )
