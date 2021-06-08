/**
 * BLOCK: Call To Action.
 */

// Import block dependencies and components.
import UAGB_Block_Icons from "@Controls/block-icons"

// Import icon.
import edit from "./edit"
import save from "./save"
import attributes from "./attributes"
import deprecated from "./deprecated"
import "./editor.scss"
import "./style.scss"

import { __ } from '@wordpress/i18n';


const {
	registerBlockType,
} = wp.blocks

registerBlockType( "uagb/call-to-action", {
	title: uagb_blocks_info.blocks["uagb/call-to-action"]["title"],
	description: uagb_blocks_info.blocks["uagb/call-to-action"]["description"],
	icon: UAGB_Block_Icons.call_to_action,
	keywords: [
		__( "cta", 'ultimate-addons-for-gutenberg' ),
		__( "call to action", 'ultimate-addons-for-gutenberg' ),
		__( "uag", 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	attributes,
	edit,
	save,
	example: {},
	deprecated,
} )
