/**
 * BLOCK: UAGB - Taxonomy List
 */

// Import block dependencies and components
import UAGB_Block_Icons from '@Controls/block-icons';

//  Import CSS.
import './style.scss';
import Edit from './edit';

// Components
import { __ } from '@wordpress/i18n';

// Register block controls
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let taxonomyListCommonData = {};
taxonomyListCommonData = applyFilters( 'uagb/taxonomy-list', addCommonDataToSpectraBlocks( taxonomyListCommonData ) );
// Register the block
registerBlockType( 'uagb/taxonomy-list', {
	...taxonomyListCommonData,
	title: __( 'Taxonomy List', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display your content categorized as per post type.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.taxonomy_list,
	keywords: [
		__( 'post', 'ultimate-addons-for-gutenberg' ),
		__( 'taxonomy', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
	],
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="taxonomy-list" /> : <Edit { ...props } /> ),
	// Render via PHP
	save: () => null,
} );
