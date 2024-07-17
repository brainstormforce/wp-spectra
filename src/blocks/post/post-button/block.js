/**
 * BLOCK: Post Button
 */

// Import block dependencies and components
import { PostButton } from './edit';
import save from './save';
import UAGB_Block_Icons from '@Controls/block-icons';

// Components
import { __ } from '@wordpress/i18n';

// Register block controls
import { registerBlockType } from '@wordpress/blocks';

// Register the block
registerBlockType( 'uagb/post-button', {
	title: __( 'Post Button', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Customize this post button.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.post_grid,
	parent: [ 'uagb/post-grid', 'uagb/post-masonry', 'uagb/post-carousel' ],
	keywords: [ __( 'post', 'ultimate-addons-for-gutenberg' ), __( 'button', 'ultimate-addons-for-gutenberg' ), __( 'uag', 'ultimate-addons-for-gutenberg' ) ],
	PostButton,
	save,
} );
