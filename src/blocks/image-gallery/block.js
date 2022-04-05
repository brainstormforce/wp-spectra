/**
 * BLOCK: Instagram Feed
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import edit from './edit';
import './style.scss';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('uagb/image-gallery', {
	title: __('Image Gallery', 'ultimate-addons-for-gutenberg'),
	description: __(
		'This block allows you to display a highly customizable image gallery',
		'ultimate-addons-for-gutenberg'
	),
	icon: UAGB_Block_Icons.image_gallery,
	category: uagb_blocks_info.category,
	keywords: [
		__('image', 'ultimate-addons-for-gutenberg'),
		__('gallery', 'ultimate-addons-for-gutenberg'),
		__('grid', 'ultimate-addons-for-gutenberg'),
		__('masonry', 'ultimate-addons-for-gutenberg'),
		__('carousel', 'ultimate-addons-for-gutenberg'),
		__('ig', 'ultimate-addons-for-gutenberg'),
		__('uag', 'ultimate-addons-for-gutenberg'),
		__('ultimate', 'ultimate-addons-for-gutenberg'),
		__('addon', 'ultimate-addons-for-gutenberg'),
		__('spectra', 'ultimate-addons-for-gutenberg'),
	],
	supports: {
		anchor: true,
	},
	attributes,
	edit,
	save() {
		return null;
	},
	example: {},
});
