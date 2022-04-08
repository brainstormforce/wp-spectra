/**
 * BLOCK: Post Taxonomy
 */

// Import block dependencies and components
import { PostMeta } from './edit';
import save from './save';
import UAGB_Block_Icons from '@Controls/block-icons';
// Components
import { __ } from '@wordpress/i18n';

// Register block controls

import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType( 'uagb/post-taxonomy', {
	title: __( 'Post Taxonomy', 'ultimate-addons-for-gutenberg' ),
	description: __( 'This block fetches post categories data.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.post_grid,
	category: uagb_blocks_info.category,
	parent: [ 'uagb/post-grid', 'uagb/post-masonry', 'uagb/post-carousel' ],
	keywords: [ __( 'tags' ), __( 'taxonomy' ), __( 'uag' ) ],
	PostMeta,
	example: {},
	save,
} );
