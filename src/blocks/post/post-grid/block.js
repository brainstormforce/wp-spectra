/**
 * BLOCK: UAGB - post-grid
 */

// Import block dependencies and components
import Edit from './edit';
import UAGB_Block_Icons from '@Controls/block-icons';

//  Import CSS.
import '.././style.scss';

import { __ } from '@wordpress/i18n';

// Register block controls
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let postGridCommonData = {};
postGridCommonData = applyFilters( 'uagb/post-grid', addCommonDataToSpectraBlocks( postGridCommonData ) );
// Register the block
registerBlockType( 'uagb/post-grid', {
	...postGridCommonData,
	title: __( 'Post Grid', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display your posts in a structured grid-based layout.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.post_grid,
	category: uagb_blocks_info.category,
	keywords: [
		__( 'post', 'ultimate-addons-for-gutenberg' ),
		__( 'grid', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="post-grid" /> : <Edit { ...props } /> ),
	// Render via PHP
	save: () => null,
} );
