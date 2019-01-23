/**
 * BLOCK: Multi Buttons
 */

import classnames from "classnames"
import times from "lodash/times"
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
	RichText
} = wp.editor


/**
 * Register: as Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType( "uagb/buttons", {
	title: uagb_blocks_info.blocks["uagb/buttons"]["title"],
	description: uagb_blocks_info.blocks["uagb/buttons"]["description"],
	icon: UAGB_Block_Icons.buttons,
	category: uagb_blocks_info.category,
	keywords: [
		__( "buttons" ),
		__( "multi buttons" ),
		__( "uag" ),
	],
	attributes,
	edit,
	save: props => {

		const { attributes, className } = props

		const {
			block_id,
			align,
			items,
			buttons,
			btn_count,
		} = props.attributes

		const renderButtons = ( index ) => {

			if ( "undefined" != typeof buttons[index] ) {

				return (
					<div
						className={ classnames(
							`uagb-buttons-repeater-${index}`,
							"uagb-button__wrapper"
						) }
						key={index}
					>
						<RichText.Content
							placeholder={ __( "Click Here" ) }
							value={ buttons[index].label }
							tagName='a'
							className='uagb-button__link'
							href={ buttons[index].link }
							rel ="noopener noreferrer"
							target={ buttons[index].target }
						/>
					</div>
				)
			}
		}

		return (
			<div className={ classnames(
				className,
				"uagb-buttons__outer-wrap"
			) }
			id={ `uagb-buttons-${ block_id }` }
			>
				<div className="uagb-buttons__wrap">
					{ times( btn_count, n => renderButtons( n ) ) }
				</div>
			</div>
		)
	}
} )
