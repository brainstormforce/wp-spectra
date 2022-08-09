/**
 * BLOCK: Post Timeline Js.
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import '.././style.scss';
import edit from './edit';

// Components.
import { __ } from '@wordpress/i18n';

// Register block controls.
import { registerBlockType } from '@wordpress/blocks';

export const name = 'core/latest-posts';

// Register the block.
registerBlockType( 'uagb/post-timeline', {
	title: __( 'Post Timeline', 'ultimate-addons-for-gutenberg' ),
	description: __( 'The Timeline block lets you create beautiful timelines of Posts on your website.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.post_timeline,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'post', 'ultimate-addons-for-gutenberg' ),
		__( 'timeline', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	example: {
		attributes: {
			isPreview: true,
		}
	},
	edit,
	// Render via PHP
	save() {
		return null;
	},
} );
