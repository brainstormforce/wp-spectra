/**
 * BLOCK: UAGB - post-masonry
 */

// Import block dependencies and components
import edit from './edit';
import UAGB_Block_Icons from '@Controls/block-icons';

//  Import CSS.
import '.././style.scss';

// Components
import { __ } from '@wordpress/i18n';

// Register block controls
import { registerBlockType } from '@wordpress/blocks';

if ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 ) {
// Register the block
registerBlockType( 'uagb/post-masonry', {
	title: __( 'Post Masonry', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display your posts in a masonary layout.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.post_masonry,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'post', 'ultimate-addons-for-gutenberg' ),
		__( 'masonry', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	edit,
	example: {
		attributes: {
			isPreview: true,
		}
	},
	// Render via PHP
	save() {
		return null;
	},
} );
}
