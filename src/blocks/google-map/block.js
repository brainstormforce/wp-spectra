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
	el("path", { d: "M9.155 12.004l7.996 7.996h-15.993l7.996-7.996zM17.992 9.103v10.056l-7.996-7.996 1.597-1.598c-0.030-0.037-0.061-0.074-0.091-0.112-0.217-0.264-0.44-0.536-0.655-0.823l-10.529 10.529v-16.437c0-0.219 0.177-0.396 0.396-0.396h9.625c0.905-1.398 2.478-2.326 4.264-2.326 2.8 0 5.078 2.278 5.078 5.077 0 1.768-0.846 2.98-1.689 4.026zM8.114 6.375h-2.937v1.119h1.73c-0.236 0.73-0.923 1.259-1.73 1.259-1.003 0-1.818-0.816-1.818-1.818s0.816-1.818 1.818-1.818c0.405 0 0.788 0.13 1.108 0.376l0.683-0.887c-0.517-0.398-1.136-0.609-1.79-0.609-1.619 0-2.937 1.318-2.937 2.937s1.318 2.937 2.937 2.937c1.62 0 2.937-1.318 2.937-2.937l-0-0.56zM18.493 5.077c0-2.148-1.741-3.889-3.889-3.889s-3.889 1.741-3.889 3.889c0 3.228 3.651 4.153 3.651 8h0.476c-0-3.846 3.651-4.771 3.651-8zM14.604 3.299c-0.837 0-1.515 0.678-1.515 1.515s0.678 1.515 1.515 1.515c0.837 0 1.515-0.678 1.515-1.515s-0.678-1.515-1.515-1.515z" } )
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
