/**
 * BLOCK: UAGB - post-grid
 */

// Import block dependencies and components
import edit from "./edit"
import UAGB_Block_Icons from "../../../../dist/blocks/uagb-controls/block-icons"

//  Import CSS.
import ".././style.scss"
import ".././editor.scss"


const { addFilter } = wp.hooks;
const { __ } = wp.i18n

const { Fragment } = wp.element;
const { withSelect } = wp.data;
const { compose, createHigherOrderComponent } = wp.compose;

// Register block controls
const { registerBlockType } = wp.blocks
/**
 * Override the default block element to add	wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */

const enhance = compose(
	
	withSelect( ( select ) => {
		return {
			selected: select( 'core/block-editor' ).getSelectedBlock(),
		};
	} )
);
/**
 * Add custom UAG attributes to selected blocks
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withPost = createHigherOrderComponent( ( BlockEdit ) => {
	return enhance( ( { ...props } ) => {
		return (
			<Fragment>
				<BlockEdit { ...props } />
			</Fragment>
		);
	} );
}, 'withPost' );

// Register the block
registerBlockType( "uagb/post-grid", {
	title: uagb_blocks_info.blocks["uagb/post-grid"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-grid"]["description"],
	icon: UAGB_Block_Icons.post_grid,
	category: uagb_blocks_info.category,
	keywords: [
		__( "post" ),
		__( "grid" ),
		__( "uag" ),
	],
	edit,
	example: {},
	// Render via PHP
	save() {
		return null
	},
} )
addFilter(
	'editor.BlockEdit',
	'uagb/post-grid',
	withPost
);
