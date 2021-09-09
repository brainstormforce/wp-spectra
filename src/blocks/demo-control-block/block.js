/**
 * BLOCK: Demo Control Block.
 */
import UAGB_Block_Icons from "@Controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
// import save from "./save"
// import "./style.scss"
import "./editor.scss"


import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( "uagb/demo-control", {
	title: uagb_blocks_info.blocks["uagb/demo-control"]["title"],
	description: uagb_blocks_info.blocks["uagb/demo-control"]["description"],
	icon: UAGB_Block_Icons.inline_notice,
	category: uagb_blocks_info.category,
	keywords: [
		__( "demo control", 'ultimate-addons-for-gutenberg' ),
		__( "control", 'ultimate-addons-for-gutenberg' ),
		__( "uag", 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
	example: {},
	edit,
	// Render via PHP
	save() {
		return null
	},
} )