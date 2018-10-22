/**
 * BLOCK: UAGB - post-grid
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
	el("path", { d: "M19.31 0h-18.619c-0.381 0-0.691 0.309-0.691 0.691v18.619c0 0.382 0.309 0.691 0.691 0.691h18.619c0.382 0 0.691-0.309 0.691-0.691v-18.619c0-0.381-0.309-0.691-0.69-0.691v0zM18.619 6.206h-4.825v-4.825h4.825v4.825zM18.619 12.413h-4.825v-4.825h4.825v4.825zM1.381 7.588h4.825v4.825h-4.825v-4.825zM7.588 7.588h4.825v4.825h-4.825v-4.825zM12.413 1.381v4.825h-4.825v-4.825h4.825zM6.206 1.381v4.825h-4.825v-4.825h4.825zM1.381 13.794h4.825v4.825h-4.825v-4.825zM7.588 18.619v-4.825h4.825v4.825h-4.825zM13.794 18.619v-4.825h4.825v4.825h-4.825z" } )
)

// Register the block
registerBlockType( "uagb/post-grid", {
	title: __( "UAGB - Post Grid" ),
	description: __( "Add a grid of customizable posts to your page." ),
	icon: icon,
	category: "formatting",
	keywords: [
		__( "post" ),
		__( "grid" ),
		__( "uagb" ),
	],
	edit,
	// Render via PHP
	save() {
		return null
	},
} )
