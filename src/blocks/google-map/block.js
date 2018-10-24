/**
 * BLOCK: Google Map
 */

import classnames from "classnames"
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

const el = wp.element.createElement


//Icon
const icon = el("svg", { width: 20, height: 20 },
	el("path", { d: "M10 0c-4.112 0-7.458 3.347-7.458 7.461 0 6.13 6.716 12.115 7.002 12.367 0.131 0.115 0.293 0.172 0.456 0.172s0.326-0.058 0.456-0.172c0.286-0.252 7.002-6.237 7.002-12.367 0-4.114-3.345-7.461-7.458-7.461v0zM10 18.363c-1.485-1.439-6.077-6.265-6.077-10.902 0-3.353 2.726-6.080 6.077-6.080s6.077 2.728 6.077 6.080c0 4.637-4.592 9.463-6.077 10.902v0z" } ),
	el("path", { d: "M10 3.986c-1.904 0-3.453 1.559-3.453 3.475s1.549 3.476 3.453 3.476c1.904 0 3.453-1.559 3.453-3.476s-1.549-3.475-3.453-3.475v0zM10 9.555c-1.142 0-2.071-0.939-2.071-2.094s0.929-2.095 2.071-2.095 2.072 0.94 2.072 2.095c0 1.155-0.93 2.094-2.072 2.094v0z" } )
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
registerBlockType( "uagb/google-map", {
	title: __( "UAGB - Google Map" ),
	description: __( "Add Google Map" ),
	icon: icon,
	category: "formatting",
	keywords: [
		__( "google map" ),
		__( "map" ),
		__( "uagb" ),
	],
	attributes,
	edit,
	save() {
		return null
	},
} )
