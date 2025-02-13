/**
 * BLOCK: Sure Cart
 */
import { Icon, store } from '@wordpress/icons';
import Edit from './edit';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import PreviewImage from '@Controls/previewImage';
import attributes from './attributes';
import { applyFilters } from '@wordpress/hooks';
import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';

// Get the SureCart status
const isSureCartActive = uagb_blocks_info.status_of_surecart === 'active';

let sureCartCommonData = {};
sureCartCommonData = applyFilters( 'uagb/sure-cart-checkout', addCommonDataToSpectraBlocks( sureCartCommonData ) );

// Always register the block
registerBlockType( 'uagb/sure-cart-checkout', {
	...sureCartCommonData,
	title: __( 'SureCart - Checkout', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Display a checkout form.', 'ultimate-addons-for-gutenberg' ),
	icon: <Icon icon={store} color='#0063a1' />,
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
		const { select, dispatch } = wp.data;
		// Replace logic for FSE and block editor.
		const replaceBlockRecursively = ( blocks ) => {
			blocks.forEach( ( block ) => {

				if ( block.name === 'uagb/sure-cart-checkout' ) {
					// Replace with a core paragraph block
					dispatch( 'core/block-editor' ).replaceBlock(
						block.clientId,
						wp.blocks.createBlock( 'surecart/checkout-form', {
						} )
					);
				}

				// Recursively check innerBlocks
				if ( block.innerBlocks && block.innerBlocks.length > 0 ) {
					replaceBlockRecursively( block.innerBlocks );
				}
			} );
		};
		// If SureCart is active, show a placeholder
		if ( isSureCartActive ) {
			wp.blocks.unregisterBlockType( 'uagb/sure-cart-checkout' );
			const replacePlaceholderBlocks = () => {
				const blocks = select( 'core/block-editor' ).getBlocks();

				// Call the function with the top-level blocks.
				// And replace placeholder blocks with a sureCartCheckout block.
				setTimeout( () => {
					replaceBlockRecursively( blocks );
				}, 1000 );
				const widgets = select( 'core/edit-widgets' ).getWidgets();
				// Loop through the widgets object
				for ( const widget of Object.entries( widgets ) ) {
					// Example: Check if the block type is 'uagb/sure-cart-checkout'
					if ( widget[1].rendered_form.includes( 'uagb/sure-cart-checkout' ) ) {
						dispatch( 'core/block-editor' ).replaceBlock(
							props.clientId,
							wp.blocks.createBlock( 'surecart/checkout-form', {
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
			<PreviewImage image="checkout-form" />
		) : (
			<Edit {...props} />
		);
	},
	save: () => null, // Blocks without frontend rendering
} );