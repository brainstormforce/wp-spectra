/**
 * BLOCK: Post Timeline Js.
 */
import UAGB_Block_Icons from '@Controls/block-icons';
import '.././style.scss';
import Edit from './edit';

// Components.
import { __ } from '@wordpress/i18n';

// Register block controls.
import { registerBlockType } from '@wordpress/blocks';

export const name = 'core/latest-posts';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let postTimelineCommonData = {};
postTimelineCommonData = applyFilters( 'uagb/post-timeline', addCommonDataToSpectraBlocks( postTimelineCommonData ) );
// Register the block.
registerBlockType( 'uagb/post-timeline', {
	...postTimelineCommonData,
	title: __( 'Post Timeline', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Create an attractive timeline to display your posts.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.post_timeline,
	keywords: [
		__( 'post', 'ultimate-addons-for-gutenberg' ),
		__( 'timeline', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	category: uagb_blocks_info.category,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="post-timeline" />
			) : (
				<Edit { ...props } />
			),
	// Render via PHP
	save: () => null,
} );
