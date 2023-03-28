/**
 * BLOCK: Image Gallery
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let imageGalleryCommonData = {};
imageGalleryCommonData = applyFilters( 'uagb/image-gallery', addCommonDataToSpectraBlocks( imageGalleryCommonData ) );
registerBlockType( 'uagb/image-gallery', {
	...imageGalleryCommonData,
	title: __( 'Image Gallery', 'ultimate-addons-for-gutenberg' ),
	description: __(
		'Create a highly customizable image gallery',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.image_gallery,
	keywords: [
		__( 'image', 'ultimate-addons-for-gutenberg' ),
		__( 'gallery', 'ultimate-addons-for-gutenberg' ),
		__( 'grid', 'ultimate-addons-for-gutenberg' ),
		__( 'masonry', 'ultimate-addons-for-gutenberg' ),
		__( 'carousel', 'ultimate-addons-for-gutenberg' ),
		__( 'tiled', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'ultimate', 'ultimate-addons-for-gutenberg' ),
		__( 'addon', 'ultimate-addons-for-gutenberg' ),
		__( 'spectra', 'ultimate-addons-for-gutenberg' ),
	],
	supports: {
		anchor: true,
	},
	attributes,
category: uagb_blocks_info.category,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="image-gallery" />
			) : (
				<Edit { ...props } />
			),
	save() {
		return null;
	},
} );
