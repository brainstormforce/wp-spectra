/**
 * BLOCK: Icon List
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import deprecated from "./deprecated"
import "./style.scss"
import "./editor.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

const {
	RichText
} = wp.blockEditor

registerBlockType( "uagb/icon-list-child", {
	title: uagb_blocks_info.blocks["uagb/icon-list-child"]["title"],
	description: uagb_blocks_info.blocks["uagb/icon-list-child"]["description"],
	icon: UAGB_Block_Icons.icon_list,
	category: uagb_blocks_info.category,
	parent: [ "uagb/icon-list" ],
	keywords: [
		__( "icon list" ),
		__( "image list" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save,
} )
