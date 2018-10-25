/**
 * BLOCK: Google Map
 */

import classnames from "classnames"
//  Import CSS.
import "./style.scss"
import "./editor.scss"
import attributes from "./attributes"
import edit from "./edit"
import UAGB_Block_Icons from "../uagb-controls/block-icons"


// Components
const { __ } = wp.i18n

// Register block controls
const {
	registerBlockType
} = wp.blocks

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
	icon: UAGB_Block_Icons.google_map,
	category: "uagb",
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
