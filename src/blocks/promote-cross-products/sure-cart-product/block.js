/**
 * BLOCK: Sure Cart
 */
import { Icon, grid } from '@wordpress/icons';
import Edit from './edit';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
import attributes from './attributes';
// Get the SureCart status
const isSureCartActive = uagb_blocks_info.status_of_surecart === 'active';

let sureCartCommonData = {};
sureCartCommonData = applyFilters( 'uagb/sure-cart-product', addCommonDataToSpectraBlocks( sureCartCommonData ) );
// Always register the block
registerBlockType( 'uagb/sure-cart-product', {
	...sureCartCommonData,
	title: __( 'SureCart - Product List', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display a list of products.', 'ultimate-addons-for-gutenberg' ),
	icon: <Icon icon={grid} color='#0063a1' />,
	keywords: [
		__( 'cart', 'ultimate-addons-for-gutenberg' ),
		__( 'surecart', 'ultimate-addons-for-gutenberg' ),
		__( 'form', 'ultimate-addons-for-gutenberg' ),
	],
	category: uagb_blocks_info.premium_category,
	supports: {
		inserter: !isSureCartActive, // Hide from inserter if SureCart is active
	},
	attributes,
	edit: ( props ) => {
		// If SureCart is active, show a placeholder
		if ( isSureCartActive ) {
			wp.blocks.unregisterBlockType( 'uagb/sure-cart-product' );
			// Monitor the block editor for placeholder blocks and replace them
			const { select, dispatch } = wp.data;
			// Replace placeholder blocks with a paragraph block
			const replacePlaceholderBlocks = () => {
				const blocks = select( 'core/block-editor' ).getBlocks();
				
				blocks.forEach( ( block ) => {
					if ( block.name === 'uagb/sure-cart-product' ) {
						// Replace with a core paragraph block
						dispatch( 'core/block-editor' ).replaceBlock(
							block.clientId,
							wp.blocks.createBlock( 'surecart/product-list', {} )
						);
					}
				} );
				const widgets = select( 'core/edit-widgets' ).getWidgets();
				// Loop through the widgets object
				for ( const widget of Object.entries( widgets ) ) {
					// Example: Check if the block type is 'uagb/sure-cart-product'
					if ( widget[1].rendered_form.includes( 'uagb/sure-cart-product' ) ) {
						dispatch( 'core/block-editor' ).replaceBlock(
							props.clientId,
							wp.blocks.createBlock( 'surecart/product-list', {
							} )
						);
					}
				}
			};

			// 	// Run the replacement logic on initialization
			replacePlaceholderBlocks();
			return;
		}

		// Normal edit behavior
		return props.attributes.isPreview ? (
			<PreviewImage image="product-list" />
		) : (
			<Edit {...props} />
		);
	},
	save: () => null, // Blocks without frontend rendering
} );