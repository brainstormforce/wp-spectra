/**
 * BLOCK: Columns
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

//  Import CSS.
import "./style.scss"
import "./editor.scss"
import attributes from "./attributes"
import edit from "./edit"


// Components
const { __ } = wp.i18n

// Register block controls
const {
	registerBlockType
} = wp.blocks

const {
	InnerBlocks,
} = wp.editor

registerBlockType( "uagb/columns", {
	title: uagb_blocks_info.blocks["uagb/columns"]["title"],
	description: uagb_blocks_info.blocks["uagb/columns"]["description"],
	icon: UAGB_Block_Icons.section,
	category: uagb_blocks_info.category,
	keywords: [
		__( "columns" ),
		__( "uagb" ),
	],
	attributes,
	edit,
	getEditWrapperProps( attributes ) {
		const { align } = attributes
		if ( "center" === align ||"wide" === align || "full" === align ) {
			return { "data-align": align }
		}
	},
	save : function( props ) {

		const { attributes, className } = props

		const {
			block_id,
			tag,
			backgroundType,
			backgroundVideo,
			contentWidth,
			align,
			columns
		} = props.attributes

		const CustomTag = `${tag}`

		return (
			<CustomTag
				className={ classnames(
					className,
					"uagb-columns__wrap",
					`uagb-columns__background-${backgroundType}`,
					`align${ align }`
				) }
				id={ `uagb-columns-${block_id}` }
			>
				<div className="uagb-columns__overlay"></div>
				{ "video" == backgroundType &&
					<div className="uagb-columns__video-wrap">
						{  backgroundVideo &&
							<video src={ backgroundVideo.url } autoPlay loop muted></video>
						}

					</div>
				}
				<div className={ classnames(
					"uagb-columns__inner-wrap",
					`uagb-columns__columns-${columns}`
				) }>
					<InnerBlocks.Content />
				</div>

			</CustomTag>
		)
	}
} )
