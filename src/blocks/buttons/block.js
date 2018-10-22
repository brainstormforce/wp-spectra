/**
 * BLOCK: Multi Buttons
 */

import classnames from "classnames"
import times from "lodash/times"
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

const el = wp.element.createElement


//Icon
const icon = el("svg", { width: 20, height: 20 },
	el("path", { d: "M10.833 6.667h-6.667v6.667l11.667 0.001v-6.667h-5zM5.833 11.667v-3.333h3.333v3.333h-3.333zM14.167 11.667h-3.333v-3.333h3.333v3.333z" } ),
	el("path", { d: "M0 1.667v16.667h20v-16.667h-20zM18.333 3.333v13.333h-16.667v-13.333h16.667z" } )
)


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
	title: __( "UAGB - Multi Buttons" ),
	description: __( "Add Multiple Buttons" ),
	icon: icon,
	category: "formatting",
	keywords: [
		__( "buttons" ),
		__( "multi buttons" ),
		__( "uagb" ),
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
