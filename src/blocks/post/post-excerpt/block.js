/**
 * BLOCK: Post Excerpt
 */

// Import block dependencies and components
import { PostExcerpt } from './edit';
import save from './save';
import UAGB_Block_Icons from '@Controls/block-icons';
// Components
import { __ } from '@wordpress/i18n';

// Register block controls

import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType( 'uagb/post-excerpt', {
	title: __( 'Post Excerpt', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Show your post\'s excerpt.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.post_grid,
	parent: [ 'uagb/post-grid', 'uagb/post-masonry', 'uagb/post-carousel' ],
	keywords: [ __( 'post' ), __( 'excerpt' ), __( 'uag' ) ],
	PostExcerpt,
	save,
} );
