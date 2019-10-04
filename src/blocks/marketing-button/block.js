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
} = wp.blockEditor


registerBlockType( "uagb/marketing-button", {
	title: uagb_blocks_info.blocks["uagb/marketing-button"]["title"],
	description: uagb_blocks_info.blocks["uagb/marketing-button"]["description"],
	icon: UAGB_Block_Icons.marketing_button,
	category: uagb_blocks_info.category,
	keywords: [
		__( "marketing button" ),
		__( "cta" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save: props => {

		const { attributes, className } = props

		const {
			block_id,
			align,
			textAlign,
			iconPosition,
			icon,
			heading,
			prefix,
			link,
			linkTarget
		} = props.attributes

		let target = ( linkTarget ) ? "_blank" : ""

		return (
			<div className={ classnames(
				className,
				"uagb-marketing-btn__outer-wrap",
				`uagb-marketing-btn__align-${ align }`,
				`uagb-marketing-btn__align-text-${ textAlign }`,
				`uagb-marketing-btn__icon-${ iconPosition }`
			) }
			id={ `uagb-marketing-btn-${ block_id }` }>
				<div className="uagb-marketing-btn__wrap">
					<a href={ link } className="uagb-marketing-btn__link" target={ target } rel ="noopener noreferrer">
						<div className="uagb-marketing-btn__title-wrap">
							{ "" != icon &&
								<div className="uagb-marketing-btn__icon-wrap">
									{ renderSVG( icon ) }
								</div>
							}
							<RichText.Content
								value={ heading }
								tagName='h6'
								className='uagb-marketing-btn__title'
							/>
						</div>
						<div className="uagb-marketing-btn__prefix-wrap">
							<RichText.Content
								value={ prefix }
								tagName='p'
								className='uagb-marketing-btn__prefix'
							/>
						</div>
					</a>
				</div>
			</div>
		)
	},
} )
