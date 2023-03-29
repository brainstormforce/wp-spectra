/**
 * BLOCK: FAQ - Schema
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import attributes from './attributes';
import Edit from './edit';
import save from './save';
import './style.scss';
import deprecated from './deprecated';
import { __ } from '@wordpress/i18n';
import { addFilter, applyFilters } from '@wordpress/hooks';
import { withSelect } from '@wordpress/data';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { registerBlockType } from '@wordpress/blocks';
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
const withFaq = createHigherOrderComponent( ( BlockEdit ) => {
	return enhance( ( { ...props } ) => {
		return <BlockEdit { ...props } />;
	} );
}, 'withFaq' );

import addCommonDataToSpectraBlocks from '@Controls/addCommonDataToSpectraBlocks';
let faqCommonData = {};
faqCommonData = applyFilters( 'uagb/faq', addCommonDataToSpectraBlocks( faqCommonData ) );
registerBlockType( 'uagb/faq', {
	...faqCommonData,
	title: __( 'FAQ', 'ultimate-addons-for-gutenberg' ),
	description: __( 'Add accordions/FAQ schema to your page.', 'ultimate-addons-for-gutenberg' ),
	icon: UAGB_Block_Icons.faq,
	keywords: [
		__( 'faq', 'ultimate-addons-for-gutenberg' ),
		__( 'schema', 'ultimate-addons-for-gutenberg' ),
		__( 'uag', 'ultimate-addons-for-gutenberg' ),
		__( 'accordion', 'ultimate-addons-for-gutenberg' ),
	],
	attributes,
category: uagb_blocks_info.category,
	deprecated,
	edit: ( props ) =>
		props.attributes.isPreview ? (
			<PreviewImage image="faq" />
		) : (
			<Edit { ...props } />
		),
	supports: {
		anchor: true,
	},
	save,
} );

addFilter( 'editor.BlockEdit', 'uagb/faq', withFaq );
