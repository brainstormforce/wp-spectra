/**
 * BLOCK: Price List
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import attributes from './attributes';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let priceListChildCommonData = {};
priceListChildCommonData = applyFilters( 'uagb/restaurant-menu-child', addCommonDataToSpectraBlocks( priceListChildCommonData ) );
registerBlockType( 'uagb/restaurant-menu-child', {
	...priceListChildCommonData,
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Price List-Child', 'ultimate-addons-for-gutenberg' ), // Block title.
	description:
	__( 'Add information for this product.', 'ultimate-addons-for-gutenberg' ), // Block description.
	icon: UAGB_Block_Icons.restaurant_menu_child, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [ __( 'pricelist' ), __( 'menu' ), __( 'uag' ) ],
	supports: {
		anchor: true,
	},
	parent: [ 'uagb/restaurant-menu' ],
	attributes,
category: uagb_blocks_info.category,
	edit: ( props ) =>
			props.attributes.isPreview ? (
				<PreviewImage image="price-list-child" isChildren={ true } />
			) : (
				<Edit { ...props } />
			),
	save,
	deprecated,
} );
