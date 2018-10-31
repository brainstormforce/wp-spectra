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
registerBlockType( "uagb/social-share", {
	title: __( "Social Share" ),
	description: __( "Add Social Sharing Icon / Image" ),
	icon: UAGB_Block_Icons.buttons,
	category: "uagb",
	keywords: [
		__( "social share" ),
		__( "icon" ),
		__( "uagb" ),
	],
	attributes,
	edit,
	save: props => {

		return null

		const { attributes, className } = props

		const {
			block_id,
			align,
			items,
			socials,
			social_count,
		} = props.attributes

		const renderButtons = ( index ) => {

			if ( "undefined" != typeof socials[index] ) {

				return (
					<div
						className={ classnames(
							`uagb-ss-repeater-${index}`,
							"uagb-ss__wrapper"
						) }
						key={index}
					>
						<RichText.Content
							placeholder={ __( "Click Here" ) }
							value={ socials[index].label }
							tagName='a'
							className='uagb-ss__link'
							href={ socials[index].link }
							target={ socials[index].target }
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
			id={ `uagb-ss-${ block_id }` }
			>
				<div className="uagb-buttons__wrap">
					{ times( social_count, n => renderButtons( n ) ) }
				</div>
			</div>
		)
	}
} )
