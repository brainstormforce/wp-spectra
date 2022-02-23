/**
 * BLOCK: Price List
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import attributes from './attributes';
import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'uagb/restaurant-menu-child', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Price List-Child', 'ultimate-addons-for-gutenberg' ), // Block title.
	description:
	__( 'This block allows you to add attractive Price List.', 'ultimate-addons-for-gutenberg' ), // Block description.
	icon: UAGB_Block_Icons.restaurant_menu, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [ __( 'pricelist' ), __( 'menu' ), __( 'uag' ) ],
	supports: {
		anchor: true,
	},
	category: uagb_blocks_info.category,
	parent: [ 'uagb/restaurant-menu' ],
	attributes,
	edit,
	save,
	deprecated,
} );
