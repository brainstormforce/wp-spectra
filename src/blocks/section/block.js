/**
 * BLOCK: Section
 */

import classnames from "classnames"

//  Import CSS.
import "./style.scss"
import "./editor.scss"
import attributes from "./attributes"
import edit from "./edit"
import inlineStyles from "./inline-styles"


// Components
const { __ } = wp.i18n

// Register block controls
const {
	registerBlockType
} = wp.blocks

const {
	InnerBlocks,
} = wp.editor

const el = wp.element.createElement


//Icon
const icon = el("svg", { width: 20, height: 20 },
	el("path", { d: "M16.632 2.695h-5.888c-0.265 0-0.48 0.215-0.48 0.48v13.65c0 0.265 0.215 0.48 0.48 0.48h5.888c0.265 0 0.48-0.215 0.48-0.48v-13.65c0-0.265-0.215-0.48-0.48-0.48v0zM16.152 16.345h-4.928v-12.69h4.928v12.69z" } ),
	el("path", { d: "M8.816 2.695h-5.448c-0.265 0-0.48 0.215-0.48 0.48v3.272c0 0.265 0.215 0.48 0.48 0.48h5.448c0.265 0 0.48-0.215 0.48-0.48v-3.272c0-0.265-0.215-0.48-0.48-0.48v0zM8.336 5.967h-4.488v-2.312h4.488v2.312z" } ),
	el("path", { d: "M8.816 13.073h-5.448c-0.265 0-0.48 0.215-0.48 0.48v3.272c0 0.265 0.215 0.48 0.48 0.48h5.448c0.265 0 0.48-0.215 0.48-0.48v-3.272c0-0.265-0.215-0.48-0.48-0.48v0zM8.336 16.345h-4.488v-2.312h4.488v2.312z" } ),
	el("path", { d: "M8.816 7.884h-5.448c-0.265 0-0.48 0.215-0.48 0.48v3.272c0 0.265 0.215 0.48 0.48 0.48h5.448c0.265 0 0.48-0.215 0.48-0.48v-3.272c0-0.265-0.215-0.48-0.48-0.48v0zM8.336 11.156h-4.488v-2.312h4.488v2.312z" } )
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
registerBlockType( "uagb/section", {
	title: __( "UAGB - Section" ),
	description: __( "Add a outer wrap section" ),
	icon: icon,
	category: "formatting",
	keywords: [
		__( "section" ),
		__( "uagb" ),
	],
	attributes,
	getEditWrapperProps( { blockAlignment } ) {
		if ( "full" === blockAlignment || "wide" === blockAlignment || "center" === blockAlignment ) {
			return { "data-align": blockAlignment }
		}
	},
	edit,
	save : function( props ) {

		const { attributes } = props

		const {
			block_id,
			tag,
			backgroundType,
			backgroundVideo,
			className
		} = props.attributes

		const CustomTag = `${tag}`

		return (
			<CustomTag
				className={ classnames(
					className,
					"uagb-section__wrap",
					`uagb-section__background-${backgroundType}`
				) }
				id={ `uagb-section-${block_id}` }
			>
				<div className="uagb-section__overlay"></div>
				{ "video" == backgroundType &&
					<div className="uagb-section__video-wrap">
						{  backgroundVideo &&
						<video src={ backgroundVideo.url } autoPlay loop muted></video>
						}

					</div>
				}
				<div className="uagb-section__inner-wrap">
					<InnerBlocks.Content />
				</div>
			</CustomTag>
		)
	}
} )
