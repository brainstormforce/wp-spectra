/**
 * BLOCK: Price List
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import attributes from './attributes';
import './style.scss';

import { __ } from '@wordpress/i18n';

import { registerBlockType } from '@wordpress/blocks';
import { addFilter, applyFilters } from '@wordpress/hooks';
import { withSelect } from '@wordpress/data';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import PreviewImage from '@Controls/previewImage';

/**
 * Override the default block element to add	wrapper props.
 *
 * @param  {Function} BlockListBlock Original component
 * @return {Function} Wrapped component
 */

const enhance = compose(
	withSelect( ( select ) => {
		return {
			selected: select( 'core/block-editor' ).getSelectedBlock(),
		};
	} )
);
/**
 * Add custom UAG attributes to selected blocks
 *
 * @param {Function} BlockEdit Original component.
 * @return {string} Wrapped component.
 */
const withPriceList = createHigherOrderComponent( ( BlockEdit ) => {
	return enhance( ( { ...props } ) => {
		return (
			<>
				<BlockEdit { ...props } />
			</>
		);
	} );
}, 'withPriceList' );

import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let priceListCommonData = {};
priceListCommonData = applyFilters( 'uagb/restaurant-menu', addCommonDataToSpectraBlocks( priceListCommonData ) );
registerBlockType( 'uagb/restaurant-menu', {
	...priceListCommonData,
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Price List', 'ultimate-addons-for-gutenberg' ), // Block title.
	description: __( 'Create an attractive price list for your products.', 'ultimate-addons-for-gutenberg' ), // Block description.
	icon: UAGB_Block_Icons.restaurant_menu, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	keywords: [ __( 'pricelist' ), __( 'menu' ), __( 'uag' ) ],
	supports: {
		anchor: true,
	},
	attributes,
	category: uagb_blocks_info.category,
	edit: ( props ) => ( props.attributes.isPreview ? <PreviewImage image="price-list" /> : <Edit { ...props } /> ),
	save,
	deprecated,
} );
addFilter( 'editor.BlockEdit', 'uagb/restaurant-menu', withPriceList );
