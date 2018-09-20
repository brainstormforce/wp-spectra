/**
 * BLOCK: post-masonry
 */

/**
 * BLOCK: Atomic Blocks Page Masonry
 */

// Import block dependencies and components
import classnames from 'classnames';
import edit from './edit';

//  Import CSS.
import '.././style.scss'
import '.././editor.scss';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block controls
const {
	registerBlockType,
} = wp.blocks;

// Register alignments
const validAlignments = [ 'center', 'wide' ];

export const name = 'core/latest-posts';

// Register the block
registerBlockType( 'uagb/post-masonry', {
	title: __( 'UAGB - Post Masonry' ),
	description: __( 'Add a grid or list of customizable posts to your page.' ),
	icon: 'grid-view',
	category: 'formatting',
	keywords: [
		__( 'post' ),
		__( 'masonry' ),
	],

	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( -1 !== validAlignments.indexOf( align ) ) {
			return { 'data-align': align };
		}
	},

	edit,

	// Render via PHP
	save() {
		return null;
	},
} );
