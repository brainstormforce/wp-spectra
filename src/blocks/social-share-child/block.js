/**
 * BLOCK: Icon List
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import save from "./save"
import links from "./links"
import "./style.scss"
import "./editor.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

const {
	RichText
} = wp.blockEditor

registerBlockType( "uagb/social-share-child", {
	title: uagb_blocks_info.blocks["uagb/social-share-child"]["title"],
	description: uagb_blocks_info.blocks["uagb/social-share-child"]["description"],
	icon: UAGB_Block_Icons.social_share,
	category: uagb_blocks_info.category,
	parent: [ "uagb/social-share" ],
	keywords: [
		__( "social share" ),
		__( "icon" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save,
} )
