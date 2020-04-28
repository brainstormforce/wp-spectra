/**
 * BLOCK: Team
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"
import edit from "./edit"
import save from "./save"
import deprecated from "./deprecated"
import attributes from "./attributes"
import "./editor.scss"
import "./style.scss"

const { __ } = wp.i18n

const {
	registerBlockType,
} = wp.blocks

registerBlockType( "uagb/team", {
	title: uagb_blocks_info.blocks["uagb/team"]["title"],
	description: uagb_blocks_info.blocks["uagb/team"]["description"],
	icon: UAGB_Block_Icons.team,
	keywords: [
		__( "team" ),
		__( "members" ),
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
