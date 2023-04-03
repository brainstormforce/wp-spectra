/**
 * BLOCK: UAGB - post-masonry
 */

// Import block dependencies and components
import Edit from './edit';
import { renderLegacyBlockEditorIcon } from '@Controls/block-icons';

//  Import CSS.
import '.././style.scss';

// Components
import { __ } from '@wordpress/i18n';

// Register block controls
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let postMasonryCommonData = {};
postMasonryCommonData = applyFilters( 'uagb/post-masonry', addCommonDataToSpectraBlocks( postMasonryCommonData ) );
if ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 || 'yes' === uagb_blocks_info.enable_legacy_blocks ) {
// Register the block
registerBlockType( 'uagb/post-masonry', {
	...postMasonryCommonData,
	title: __( 'Post Masonry', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display your posts in a masonary layout.', 'ultimate-addons-for-gutenberg' ),
	icon: renderLegacyBlockEditorIcon( 'post_masonry' ),
	keywords: [
		__( 'post', 'ultimate-addons-for-gutenberg' ),
		__( 'masonry', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	category: uagb_blocks_info.category,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="post-masonry" />
			) : (
				<Edit { ...props } />
			),
	// Render via PHP
	save: ()=> null,
} );
}
