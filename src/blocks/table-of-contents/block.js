/**
 * BLOCK: Table of Contents
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import "./style.scss"
import "./editor.scss"
import attributes from "./attributes"
import edit from "./edit"
import generateContent from "./generateContent"


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
	icon: UAGB_Block_Icons.table_of_contents,
	category: uagb_blocks_info.category,
	keywords: [
		__( "table of contents" ),
		__( "table" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save: props => {

		const {
			align,
			block_id,
			heading
		} = props.attributes

		let html = generateContent( props )

		return (
			<div className={ classnames(
				props.className,
				`uagb-toc__align-${align}`
			) }
			id={ `uagb-toc-${ block_id }` }>
				<div className="uagb-toc__wrap">
					<RichText.Content
						value={ heading }
						tagName='div'
						className='uagb-toc__title'
					/>
					<div className="uagb-toc__list-wrap">
						<ul className="uagb-toc__list" dangerouslySetInnerHTML={ { __html: html } }></ul>
					</div>
				</div>
			</div>
		)
	},
} )
