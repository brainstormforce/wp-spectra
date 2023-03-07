/**
 * BLOCK: UAGb - post-carousel
 */

// Import block dependencies and components
import Edit from './edit';
import UAGB_Block_Icons from '@Controls/block-icons';

//  Import CSS.
import '.././style.scss';

// Components
import { __ } from '@wordpress/i18n';

// Register block controls
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';

// Register the block
registerBlockType( 'uagb/post-carousel', {
	title: __( 'Post Carousel', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display your posts in a sliding carousel layout.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.post_carousel,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'post', 'ultimate-addons-for-gutenberg' ),
		__( 'carousel', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="post-carousel" />
			) : (
				<Edit { ...props } />
			),
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
