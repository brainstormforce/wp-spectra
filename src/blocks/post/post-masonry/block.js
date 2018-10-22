/**
 * BLOCK: UAGB - post-masonry
 */

// Import block dependencies and components
import edit from "./edit"

//  Import CSS.
import ".././style.scss"
import ".././editor.scss"

// Components
const { __ } = wp.i18n

// Register block controls
const { registerBlockType } = wp.blocks

export const name = "core/latest-posts"

const el = wp.element.createElement


//Icon
const icon = el("svg", { width: 20, height: 20 },
	el("path", { d: "M9.267 1.3v10.167h-7.967v-10.167h7.967zM9.967 0h-9.367c-0.331 0-0.6 0.269-0.6 0.6v11.567c0 0.331 0.269 0.6 0.6 0.6h9.367c0.331 0 0.6-0.269 0.6-0.6v-11.567c0-0.331-0.269-0.6-0.6-0.6v0z" } ),
	el("path", { d: "M9.267 14.867v3.833h-7.967v-3.833h7.967zM9.967 13.567h-9.367c-0.331 0-0.6 0.283-0.6 0.633v5.168c0 0.35 0.269 0.633 0.6 0.633h9.367c0.331 0 0.6-0.283 0.6-0.633v-5.168c0-0.35-0.269-0.633-0.6-0.633v0z" } ),
	el("path", { d: "M18.7 1.3v6.033h-6.3v-6.033h6.3zM19.4 0h-7.7c-0.331 0-0.6 0.269-0.6 0.6v7.433c0 0.331 0.269 0.6 0.6 0.6h7.7c0.331 0 0.6-0.269 0.6-0.6v-7.433c0-0.331-0.269-0.6-0.6-0.6v0z" } ),
	el("path", { d: "M18.7 11v7.7h-6.3v-7.7h6.3zM19.4 9.7h-7.7c-0.331 0-0.6 0.269-0.6 0.6v9.1c0 0.331 0.269 0.6 0.6 0.6h7.7c0.331 0 0.6-0.269 0.6-0.6v-9.1c0-0.331-0.269-0.6-0.6-0.6v0z" } )
)

// Register the block
registerBlockType( "uagb/post-masonry", {
	title: __( "UAGB - Post Masonry" ),
	description: __( "Add a masonry layout of customizable posts to your page." ),
	icon: icon,
	category: "formatting",
	keywords: [
		__( "post" ),
		__( "masonry" ),
		__( "uagb" ),
	],
	edit,
	// Render via PHP
	save() {
		return null
	},
} )
