/**
 * BLOCK: Marketing Button
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import "./style.scss"
import "./editor.scss"
import attributes from "./attributes"
import edit from "./edit"
import renderSVG from "../../../dist/blocks/uagb-controls/renderIcon"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

const {
	RichText
} = wp.editor


registerBlockType( "uagb/table-of-contents", {
	title: uagb_blocks_info.blocks["uagb/table-of-contents"]["title"],
	description: uagb_blocks_info.blocks["uagb/table-of-contents"]["description"],
	icon: UAGB_Block_Icons.marketing_button,
	category: uagb_blocks_info.category,
	keywords: [
		__( "table of contents" ),
		__( "table" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save: props => {

		return null

		const { attributes, className } = props

		const {
			block_id
		} = props.attributes

		return (
			<div className={ classnames(
				className
			) }
			id={ `uagb-toc-${ block_id }` }>
				<div className="uagb-toc__wrap">
					Table Of Content
				</div>
			</div>
		)
	},
} )
